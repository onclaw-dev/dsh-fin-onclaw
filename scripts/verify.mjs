import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { access, readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import vm from 'node:vm'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const manifest = JSON.parse(await readFile(path.join(root, 'package.json'), 'utf8'))
const provenance = JSON.parse(await readFile(path.join(root, 'provenance.json'), 'utf8'))
const expectedBaseline = {
  tag: 'dsh-v0.1.1-rc.2',
  version: '0.1.1-rc.2',
  commit: 'b150a551b8d465e31e418e1b2eaf5e79bbb7d28e',
  repository: 'https://github.com/deepseek-ai/DeepSeek-Harness',
}

assert.equal(manifest.name, 'dsh-fin-onclaw')
assert.equal(manifest.version, '0.1.1-rc.2.plugin.1')
assert.deepEqual(manifest.deepseekHarness, expectedBaseline)
assert.deepEqual(provenance.deepseekHarness, expectedBaseline)
assert.equal(manifest.engines.node, '^22.19.0 || >=24.0.0')
assert.equal(manifest.peerDependencies['dsh-better-sidebar'], '0.17.1')
assert.equal(manifest.peerDependencies['@deepseek-ai/schemastery'], '3.18.1')
assert.equal(manifest.peerDependencies.react, '18.3.1')
assert.equal(manifest.peerDependencies['react-dom'], '18.3.1')
assert.equal(manifest.dependencies, undefined)
for (const [name, version] of Object.entries(manifest.peerDependencies)) {
  if (name.startsWith('@deepseek-ai/dsh-')) assert.equal(version, '0.1.1-rc.2', name)
}
for (const required of [
  'lib/index.js', 'lib/client.js', 'assets/wechat_qr.jpg',
  'skills/onclaw-data/SKILL.md',
  'dsh.plugin.json', 'cordis.patch.yml', 'README.md', 'AGENTS.md',
  'DISTRIBUTION.md', 'provenance.json', 'checksums.sha256',
]) await access(path.join(root, required))

const [hostText, clientText, cordis, plugin] = await Promise.all([
  readFile(path.join(root, 'lib/index.js'), 'utf8'),
  readFile(path.join(root, 'lib/client.js'), 'utf8'),
  readFile(path.join(root, 'cordis.patch.yml'), 'utf8'),
  readFile(path.join(root, 'dsh.plugin.json'), 'utf8').then(JSON.parse),
])
for (const [relative, mime] of [['assets/wechat_qr.jpg', 'image/jpeg']]) {
  const packaged = await readFile(path.join(root, relative))
  const embedded = [...clientText.matchAll(new RegExp(`data:${mime};base64,([A-Za-z0-9+/=]+)`, 'g'))]
    .map((match) => Buffer.from(match[1], 'base64'))
  assert.ok(embedded.some((bytes) => bytes.equals(packaged)), `${relative} is not embedded byte-for-byte`)
}
for (const [name, text] of [['Host', hostText], ['Client', clientText]]) {
  assert.doesNotMatch(text, /sourceMappingURL|sourcesContent/)
  assert.doesNotMatch(text, /@onclaw\/harness-frontend|dist-harness/)
  assert.doesNotMatch(text, /C:\\Users\\|\/Users\//)
  assert.doesNotMatch(text, /BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY/)
  execFileSync(process.execPath, ['--check', path.join(root, name === 'Host' ? 'lib/index.js' : 'lib/client.js')])
}
for (const [description, pattern] of [
  ['repository-parent image path', /\.\.[\\/][^"'`\r\n]+\.(?:png|jpe?g|gif|webp|svg)/i],
  ['standalone Web public image path', /[\\/]public[\\/][^"'`\r\n]+\.(?:png|jpe?g|gif|webp|svg)/i],
  ['filesystem or remote image URL', /(?:file|https?):\/\/[^"'`\s)]+\.(?:png|jpe?g|gif|webp|svg)/i],
]) assert.doesNotMatch(clientText, pattern, description)
assert.match(hostText, /dsh-fin-onclaw/)
let clientRegistration
vm.runInNewContext(clientText, {
  atob,
  window: { __ModuleLoader__: { load(value) { clientRegistration = value } } },
})
assert.equal(clientRegistration?.id, 'dsh-fin-onclaw')
assert.equal(typeof clientRegistration?.factory, 'function')
assert.match(cordis, /id: dsh-fin-onclaw/)
assert.match(cordis, /inject: \[credentials, settings, skills, tools, webServer\]/)
assert.equal(plugin.id, 'dsh-fin-onclaw')

const host = await import(`${pathToFileURL(path.join(root, 'lib/index.js')).href}?verify=${Date.now()}`)
assert.equal(host.name, 'dsh-fin-onclaw')
assert.equal(typeof host.apply, 'function')
assert.equal(typeof host.createOnclawBusinessTools, 'function')
assert.equal(host.createOnclawBusinessTools({ request: async () => undefined }).length, 24)

if (process.argv.includes('--pack')) {
  const output = npmExec(['pack', '--dry-run', '--json', '--ignore-scripts'])
  const pack = JSON.parse(output)[0]
  const entries = pack.files.map((file) => file.path.replaceAll('\\', '/'))
  const forbidden = /(?:^|\/)(?:src|test|tests|node_modules|\.git|\.cache|dist-web|dist-electron)(?:\/|$)|\.map$|(?:^|\/)\.env(?:\.|$)|(?:^|\/)scripts\//
  for (const entry of entries) assert.doesNotMatch(entry, forbidden, entry)
  const allowedRoots = new Set(['package.json', 'README.md', 'AGENTS.md', 'DISTRIBUTION.md', 'LICENSE', 'dsh.plugin.json', 'cordis.patch.yml', 'provenance.json', 'checksums.sha256', 'lib', 'assets', 'native', 'skills'])
  for (const entry of entries) assert.ok(allowedRoots.has(entry.split('/')[0]), `not allowlisted: ${entry}`)
  const checksums = (await readFile(path.join(root, 'checksums.sha256'), 'utf8'))
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line) => line.split('  ', 2)[1])
  for (const entry of checksums) assert.ok(entries.includes(entry), `checksum references unpackaged file: ${entry}`)
  console.log(`npm dry-run verified: ${entries.length} allowlisted files, ${pack.size} bytes`)
}
console.log(`Verified ${manifest.name} ${manifest.version} (${provenance.build.mode})`)

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
