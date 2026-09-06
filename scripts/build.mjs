import { createHash } from 'node:crypto'
import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import { spawnSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import JavaScriptObfuscator from 'javascript-obfuscator'

const childRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const parentRoot = path.resolve(childRoot, '..')
const mode = process.argv[2]
const allowDirty = process.argv.includes('--allow-dirty')
if (!['development', 'release'].includes(mode)) {
  throw new Error('usage: node scripts/build.mjs <development|release> [--allow-dirty]')
}

const baseline = {
  tag: 'dsh-v0.1.1-rc.2',
  version: '0.1.1-rc.2',
  commit: 'b150a551b8d465e31e418e1b2eaf5e79bbb7d28e',
  repository: 'https://github.com/deepseek-ai/DeepSeek-Harness',
}
const seeds = { host: 110102, client: 170101 }
const packageManifest = JSON.parse(await readFile(path.join(childRoot, 'package.json'), 'utf8'))
const compatibilityBytes = await readFile(path.join(childRoot, 'patch/compatibility.json'))
assertBaseline(packageManifest)

const parentRevision = git(parentRoot, ['rev-parse', 'HEAD'])
const childRevision = git(childRoot, ['rev-parse', 'HEAD'])
const parentDirty = isDirty(parentRoot)
const childDirty = isDirty(childRoot)
const lockPath = path.join(childRoot, 'package-lock.json')
let lockSha256 = null
try {
  lockSha256 = sha256(await readFile(lockPath))
} catch {
  if (mode === 'release' && !allowDirty) throw new Error('release requires package-lock.json')
}
if (mode === 'release' && !allowDirty && (parentDirty || childDirty)) {
  throw new Error('release refuses dirty parent or child inputs; use build:release:dev only for a non-publishable local check')
}

const stagingRoot = mode === 'release'
  ? path.join(childRoot, '.release-staging')
  : childRoot
if (mode === 'release') {
  await rm(stagingRoot, { recursive: true, force: true })
  await mkdir(stagingRoot, { recursive: true })
}

run(
  process.platform === 'win32' ? 'npm.cmd' : 'npm',
  ['run', 'export:harness'],
  parentRoot,
  { DSH_FIN_ONCLAW_OUTPUT: stagingRoot },
)

if (mode === 'release') {
  await harden('host', path.join(stagingRoot, 'lib/index.js'), path.join(childRoot, 'lib/index.js'))
  await harden('client', path.join(stagingRoot, 'lib/client.js'), path.join(childRoot, 'lib/client.js'))
  for (const directory of ['assets', 'skills', 'native']) {
    await cp(path.join(stagingRoot, directory), path.join(childRoot, directory), {
      recursive: true,
      force: true,
    })
  }
}

const provenance = {
  schemaVersion: 1,
  package: { name: packageManifest.name, version: packageManifest.version },
  build: {
    mode,
    publishable: mode === 'release' && !allowDirty,
    developmentOverride: allowDirty,
    node: process.version,
    platform: process.platform,
  },
  parent: { repository: 'finagent_dev', revision: parentRevision, dirty: parentDirty },
  child: { repository: packageManifest.repository.url, revision: childRevision, dirty: childDirty },
  deepseekHarness: baseline,
  dependencies: {
    lockfile: 'package-lock.json',
    lockSha256,
    betterSidebar: '0.17.1',
    schemastery: '3.18.1',
    react: '18.3.1',
    compatibilityCatalogSha256: sha256(compatibilityBytes),
  },
  hardening: mode === 'release'
    ? { profile: 'moderate-v1', seeds, propertyRenaming: false, sourceMaps: false }
    : { profile: 'readable-development', sourceMaps: false },
}
await writeFile(path.join(childRoot, 'provenance.json'), `${JSON.stringify(provenance, null, 2)}\n`)
await writeChecksums()
if (mode === 'release') await rm(stagingRoot, { recursive: true, force: true })
console.log(`Built ${packageManifest.name} ${packageManifest.version} (${mode}${allowDirty ? ', development override' : ''})`)

function assertBaseline(manifest) {
  if (manifest.name !== 'dsh-fin-onclaw') throw new Error('package identity mismatch')
  if (JSON.stringify(manifest.deepseekHarness) !== JSON.stringify(baseline)) {
    throw new Error('immutable DeepSeek Harness baseline mismatch')
  }
  const exact = {
    '@deepseek-ai/dsh-client-runtime': baseline.version,
    '@deepseek-ai/dsh-client-ui-conversation': baseline.version,
    '@deepseek-ai/dsh-client-ui-settings': baseline.version,
    '@deepseek-ai/dsh-client-ui-sidebar': baseline.version,
    '@deepseek-ai/dsh-client-ui-slots': baseline.version,
    '@deepseek-ai/dsh-credentials': baseline.version,
    '@deepseek-ai/dsh-settings': baseline.version,
    '@deepseek-ai/dsh-skill': baseline.version,
    '@deepseek-ai/dsh-tools': baseline.version,
    '@deepseek-ai/schemastery': '3.18.1',
    'dsh-better-sidebar': '0.17.1',
    react: '18.3.1',
    'react-dom': '18.3.1',
  }
  for (const [name, version] of Object.entries(exact)) {
    if (manifest.devDependencies[name] !== version) throw new Error(`${name} development baseline must equal ${version}`)
  }
  const expectedPeers = {
    '@deepseek-ai/schemastery': '3.18.1 || 3.18.2',
    'dsh-better-sidebar': '0.13.1 || 0.17.1 || 0.18.0-alpha.0 || 0.18.0',
    react: '^18.2.0',
    'react-dom': '^18.2.0',
  }
  if (JSON.stringify(manifest.peerDependencies) !== JSON.stringify(expectedPeers)) {
    throw new Error('published peer surface differs from the reviewed compatibility contract')
  }
  if (manifest.peerDependenciesMeta?.['dsh-better-sidebar']?.optional !== true) {
    throw new Error('dsh-better-sidebar must remain an optional host-plugin peer')
  }
  if (manifest.dependencies && Object.keys(manifest.dependencies).length) {
    throw new Error('bundled libraries must not remain in runtime dependencies')
  }
}

async function harden(face, sourcePath, destinationPath) {
  const source = await readFile(sourcePath, 'utf8')
  const reserved = JSON.parse(await readFile(path.join(childRoot, 'reserved-identifiers.json'), 'utf8'))
  const reservedStrings = [
    ...Object.values(reserved).flat().map(escapeRegex),
    '^data:image\\/jpeg;base64,',
    '^data:image\\/png;base64,',
  ]
  const common = {
    compact: true,
    seed: seeds[face],
    identifierNamesGenerator: 'hexadecimal',
    renameGlobals: false,
    renameProperties: false,
    stringArray: true,
    stringArrayEncoding: ['base64'],
    stringArrayThreshold: face === 'host' ? 0.25 : 0.35,
    reservedStrings,
    controlFlowFlattening: false,
    deadCodeInjection: false,
    selfDefending: false,
    debugProtection: false,
    disableConsoleOutput: false,
    sourceMap: false,
    target: face === 'host' ? 'node' : 'browser-no-eval',
  }
  const result = JavaScriptObfuscator.obfuscate(source, common).getObfuscatedCode()
  await mkdir(path.dirname(destinationPath), { recursive: true })
  await writeFile(destinationPath, `${result}\n`)
  run(process.execPath, ['--check', destinationPath], childRoot)
}

async function writeChecksums() {
  const roots = [
    'lib',
    'assets',
    'skills/onclaw-data/SKILL.md',
    'skills/onclaw-data/agents',
    'skills/onclaw-data/references',
    'native',
    'patch',
    'dsh.plugin.json',
    'cordis.patch.yml',
    'LICENSE',
    'DISTRIBUTION.md',
    'provenance.json',
  ]
  const files = []
  for (const relative of roots) {
    const absolute = path.join(childRoot, relative)
    try {
      const statFiles = await listFiles(absolute)
      files.push(...statFiles)
    } catch {
      if (relative !== 'native') throw new Error(`missing release input: ${relative}`)
    }
  }
  const lines = []
  for (const file of files.sort()) {
    const relative = path.relative(childRoot, file).replaceAll('\\', '/')
    lines.push(`${sha256(await readFile(file))}  ${relative}`)
  }
  await writeFile(path.join(childRoot, 'checksums.sha256'), `${lines.join('\n')}\n`)
}

async function listFiles(target) {
  const entries = await readdir(target, { withFileTypes: true }).catch(() => null)
  if (!entries) return [target]
  return (await Promise.all(entries.map((entry) => listFiles(path.join(target, entry.name))))).flat()
}

function isDirty(repository, ignored = []) {
  const lines = git(repository, ['status', '--porcelain', '--untracked-files=all']).split(/\r?\n/).filter(Boolean)
  return lines.some((line) => !ignored.some((part) => line.slice(3).replaceAll('\\', '/').startsWith(part)))
}

function git(repository, args) {
  const result = spawnSync('git', args, { cwd: repository, encoding: 'utf8' })
  if (result.status !== 0) throw new Error(result.stderr || `git ${args.join(' ')} failed`)
  return result.stdout.trim()
}

function run(command, args, cwd, extraEnv = {}) {
  const result = spawnSync(command, args, {
    cwd,
    env: { ...process.env, ...extraEnv },
    stdio: 'inherit',
    shell: process.platform === 'win32' && command.toLowerCase().endsWith('.cmd'),
  })
  if (result.status !== 0) throw new Error(result.error?.message || `${command} ${args.join(' ')} failed with ${result.status}`)
}

function sha256(value) {
  return createHash('sha256').update(value).digest('hex')
}

function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
