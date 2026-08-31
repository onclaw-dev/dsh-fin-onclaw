import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const file = path.join(root, 'package.json')
const manifest = JSON.parse(await readFile(file, 'utf8'))
const match = manifest.version.match(/^(0\.1\.1-rc\.2\.plugin\.)(\d+)$/)
if (!match) throw new Error('version must remain anchored to 0.1.1-rc.2.plugin.N')
manifest.version = `${match[1]}${Number(match[2]) + 1}`
await writeFile(file, `${JSON.stringify(manifest, null, 2)}\n`)
console.log(`${manifest.version}\nv${manifest.version}`)
