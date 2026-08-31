import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const manifest = JSON.parse(await readFile(path.join(root, 'package.json'), 'utf8'))
const provenance = JSON.parse(await readFile(path.join(root, 'provenance.json'), 'utf8'))
if (!provenance.build.publishable) throw new Error('release preparation requires a clean publishable release build')
const output = npmExec(['pack', '--json', '--ignore-scripts'])
const packed = JSON.parse(output)[0]
const tarball = path.join(root, packed.filename)
const digest = createHash('sha256').update(await readFile(tarball)).digest('hex')
const evidence = {
  package: `${manifest.name}@${manifest.version}`,
  npmDistTag: 'rc2',
  gitTag: `v${manifest.version}`,
  tarball: packed.filename,
  tarballSha256: digest,
  parentRevision: provenance.parent.revision,
  childRevision: provenance.child.revision,
  deepseekHarness: provenance.deepseekHarness,
  commandsRequiringExplicitAuthorization: [
    `npm publish ${packed.filename} --tag rc2`,
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
