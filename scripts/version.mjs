import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const file = path.join(root, 'package.json')
const lockFile = path.join(root, 'package-lock.json')
const manifest = JSON.parse(await readFile(file, 'utf8'))
const lock = JSON.parse(await readFile(lockFile, 'utf8'))
const match = manifest.version.match(/^(\d+)\.(\d+)\.(\d+)$/)
if (!match) throw new Error('version:next requires a stable semantic version (major.minor.patch)')

const release = process.argv[2] ?? 'patch'
if (!['major', 'minor', 'patch'].includes(release)) {
  throw new Error('usage: npm run version:next -- [patch|minor|major]')
}
let [, major, minor, patch] = match.map(Number)
if (release === 'major') [major, minor, patch] = [major + 1, 0, 0]
if (release === 'minor') [minor, patch] = [minor + 1, 0]
if (release === 'patch') patch += 1
manifest.version = `${major}.${minor}.${patch}`
lock.version = manifest.version
lock.packages[''].version = manifest.version
await writeFile(file, `${JSON.stringify(manifest, null, 2)}\n`)
await writeFile(lockFile, `${JSON.stringify(lock, null, 2)}\n`)
console.log(`${manifest.version}\nv${manifest.version}`)
