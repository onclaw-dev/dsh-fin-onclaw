import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { execFileSync, spawnSync } from 'node:child_process'
import { mkdir, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { validateCompatibility } from './validate-compatibility.mjs'

const childRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const checkoutsRoot = path.resolve(process.env.DSH_CHECKOUTS_ROOT || '/Users/roncao/deepseek-harness')
const install = process.argv.includes('--install')
const catalog = await validateCompatibility(childRoot)
const temporaryRoot = await mkdtemp(path.join(tmpdir(), 'dsh-fin-onclaw-matrix-'))

for (const required of ['lib/index.js', 'lib/client.js', 'provenance.json', 'checksums.sha256']) {
  assert.ok(existsSync(path.join(childRoot, required)), `build the candidate before matrix verification: missing ${required}`)
}

const pack = JSON.parse(npmExec(['pack', '--json', '--ignore-scripts', '--pack-destination', temporaryRoot]))[0]
const tarballPath = path.join(temporaryRoot, pack.filename)
const tarballSha256 = sha256(await readFile(tarballPath))
const entries = execFileSync('tar', ['-tf', tarballPath], { encoding: 'utf8' }).split(/\r?\n/).filter(Boolean)
for (const required of ['package/lib/index.js', 'package/lib/client.js', 'package/patch/compatibility.json', 'package/patch/compatibility.schema.json']) {
  assert.ok(entries.includes(required), `tarball is missing ${required}`)
}

const results = []
for (const record of catalog.tags) {
  const base = {
    tag: record.tag,
    commit: record.commit,
    clientHif: record.clientHif,
    betterSidebar: record.betterSidebar,
    tarball: pack.filename,
    tarballSha256,
    verificationLevel: install ? 'package-install' : 'static-contract',
  }
  if (record.registry.status !== 'passed') {
    results.push({ ...base, status: 'blocked', reason: record.registry.reason })
    continue
  }
  const checkout = path.join(checkoutsRoot, record.tag)
  if (!existsSync(checkout)) {
    results.push({ ...base, status: 'blocked', reason: `Checkout is missing at ${checkout}.` })
    continue
  }
  try {
    const actualCommit = git(checkout, ['rev-parse', 'HEAD'])
    assert.equal(actualCommit, record.commit, 'checkout commit differs from the audited fact')
    const providers = await providerClosure(
      checkout,
      catalog.providerInjection.filter(name => name.startsWith('@deepseek-ai/')),
    )
    const requiredProviders = record.clientHif === 'ONCLAW-HIF-1'
      ? ['@deepseek-ai/dsh-client-runtime', '@deepseek-ai/dsh-client-ui-sidebar', '@deepseek-ai/dsh-client-ui-conversation', '@deepseek-ai/dsh-client-ui-settings']
      : ['@deepseek-ai/dsh-api-session-controller', '@deepseek-ai/dsh-client-ui-renderer', '@deepseek-ai/dsh-client-ui-workspace', '@deepseek-ai/dsh-client-ui-sidebar', '@deepseek-ai/dsh-client-ui-conversation', '@deepseek-ai/dsh-client-ui-settings']
    for (const provider of requiredProviders) assert.ok(providers.has(provider), `provider closure misses ${provider}`)
    if (install) {
      const fixture = path.join(temporaryRoot, record.tag)
      await mkdir(fixture)
      const dependencies = {
        ...record.providers,
        '@deepseek-ai/schemastery': record.schemastery,
        ...(record.betterSidebar.version ? { 'dsh-better-sidebar': record.betterSidebar.version } : {}),
        react: catalog.baseline.react,
        'react-dom': catalog.baseline.react,
        'dsh-fin-onclaw': `file:${tarballPath}`,
      }
      await writeFile(path.join(fixture, 'package.json'), `${JSON.stringify({
        name: `onclaw-matrix-${record.version.replaceAll('.', '-').replaceAll('+', '-')}`,
        private: true,
        version: '0.0.0',
        dependencies,
      }, null, 2)}\n`)
      npmExec(['install', '--ignore-scripts', '--legacy-peer-deps', '--no-audit', '--no-fund'], fixture)
      const installed = JSON.parse(await readFile(path.join(fixture, 'node_modules/dsh-fin-onclaw/package.json'), 'utf8'))
      assert.equal(installed.version, pack.version)
      assert.deepEqual(installed.dsh.client.inject, catalog.providerInjection)
      assert.equal(sha256(await readFile(tarballPath)), tarballSha256, `${record.tag}: tarball mutated`)
    }
    results.push({
      ...base,
      status: 'passed',
      reason: install
        ? `Exact target dependencies installed with the immutable tarball; ${providers.size}-package provider closure inspected.`
        : `Exact checkout and ${providers.size}-package provider closure inspected against the immutable tarball.`,
    })
  } catch (error) {
    results.push({ ...base, status: 'failed', reason: error instanceof Error ? error.message : String(error) })
  }
}

assert.equal(new Set(results.map(result => result.tarballSha256)).size, 1, 'matrix must use one tarball digest')
assert.ok(results.filter(result => result.status === 'passed').length > 1, 'matrix must validate multiple tags')
const evidence = {
  schemaVersion: 1,
  generatedAt: new Date().toISOString(),
  note: install
    ? 'Package installation evidence is not live Harness smoke evidence.'
    : 'Static contract evidence is not package installation or live smoke evidence.',
  tarball: { filename: pack.filename, sha256: tarballSha256, size: pack.size },
  results,
}
const evidenceRoot = path.join(childRoot, 'release-evidence')
await mkdir(evidenceRoot, { recursive: true })
await writeFile(path.join(evidenceRoot, 'compatibility-matrix.json'), `${JSON.stringify(evidence, null, 2)}\n`)
console.log(JSON.stringify(evidence, null, 2))
await rm(temporaryRoot, { recursive: true, force: true })

async function providerClosure(checkout, roots) {
  const manifests = new Map()
  await visitDirectories(checkout, manifests)
  const closure = new Set()
  const visit = name => {
    if (closure.has(name)) return
    const manifest = manifests.get(name)
    assert.ok(manifest, `provider ${name} is absent`)
    closure.add(name)
    for (const dependency of manifest.dsh?.client?.inject ?? []) {
      if (manifests.has(dependency)) visit(dependency)
    }
  }
  roots.forEach(visit)
  return closure
}

async function visitDirectories(directory, manifests) {
  const entries = await readdir(directory, { withFileTypes: true })
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.git') continue
    const target = path.join(directory, entry.name)
    if (entry.isDirectory()) await visitDirectories(target, manifests)
    else if (entry.name === 'package.json') {
      const manifest = JSON.parse(await readFile(target, 'utf8'))
      if (typeof manifest.name === 'string') manifests.set(manifest.name, manifest)
    }
  }
}

function git(repository, args) {
  const result = spawnSync('git', args, { cwd: repository, encoding: 'utf8' })
  if (result.status !== 0) throw new Error(result.stderr || `git ${args.join(' ')} failed`)
  return result.stdout.trim()
}

function npmExec(args, cwd = childRoot) {
  return execFileSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', args, {
    cwd,
    encoding: 'utf8',
    env: { ...process.env, npm_config_cache: path.join(childRoot, '.npm-cache') },
  })
}

function sha256(value) {
  return createHash('sha256').update(value).digest('hex')
}
