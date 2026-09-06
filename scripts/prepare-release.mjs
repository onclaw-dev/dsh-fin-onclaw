import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const manifest = JSON.parse(await readFile(path.join(root, 'package.json'), 'utf8'))
const provenance = JSON.parse(await readFile(path.join(root, 'provenance.json'), 'utf8'))
if (!provenance.build.publishable) throw new Error('release preparation requires a clean publishable release build')
const gitExec = (args) => execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim()
const releaseStatus = gitExec(['status', '--porcelain', '--untracked-files=all'])
if (releaseStatus) throw new Error('release preparation requires a clean release artifact commit')
const releaseArtifactRevision = gitExec(['rev-parse', 'HEAD'])
const childSourceRevision = gitExec(['rev-parse', 'HEAD^'])
if (provenance.child.revision !== childSourceRevision) {
  throw new Error('release artifact commit must directly follow the source revision recorded by the build')
}
const output = npmExec(['pack', '--json', '--ignore-scripts'])
const packed = JSON.parse(output)[0]
const tarball = path.join(root, packed.filename)
const digest = createHash('sha256').update(await readFile(tarball)).digest('hex')
const evidence = {
  package: `${manifest.name}@${manifest.version}`,
  npmDistTag: 'latest',
  gitTag: `v${manifest.version}`,
  tarball: packed.filename,
  tarballSha256: digest,
  parentRevision: provenance.parent.revision,
  childSourceRevision,
  releaseArtifactRevision,
  deepseekHarness: provenance.deepseekHarness,
  commandsRequiringExplicitAuthorization: [
    `npm publish ${packed.filename} --tag latest`,
    `git tag -a v${manifest.version} -m "${manifest.name} ${manifest.version} ${digest}"`,
  ],
}
await mkdir(path.join(root, 'release-evidence'), { recursive: true })
await writeFile(path.join(root, 'release-evidence', `${manifest.version}.json`), `${JSON.stringify(evidence, null, 2)}\n`)
console.log(JSON.stringify(evidence, null, 2))

function npmExec(args) {
  const options = {
    cwd: root,
    encoding: 'utf8',
    env: { ...process.env, npm_config_cache: path.join(root, '.npm-cache') },
  }
  if (process.platform === 'win32') {
    const cli = path.join(path.dirname(process.execPath), 'node_modules/npm/bin/npm-cli.js')
    return execFileSync(process.execPath, [cli, ...args], options)
  }
  return execFileSync('npm', args, options)
}
