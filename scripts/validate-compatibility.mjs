import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const childRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const factPath = path.join(childRoot, 'patch/compatibility.json')
const schemaPath = path.join(childRoot, 'patch/compatibility.schema.json')

export async function validateCompatibility(root = childRoot) {
  const [catalog, schema] = await Promise.all([
    readFile(path.join(root, 'patch/compatibility.json'), 'utf8').then(JSON.parse),
    readFile(path.join(root, 'patch/compatibility.schema.json'), 'utf8').then(JSON.parse),
  ])
  assert.equal(schema.$schema, 'https://json-schema.org/draft/2020-12/schema')
  assert.equal(catalog.schemaVersion, schema.properties.schemaVersion.const)
  assert.deepEqual(catalog.providerInjection, schema.properties.providerInjection.const)
  assert.equal(catalog.contract.base, schema.properties.contract.properties.base.const)
  assert.equal(catalog.contract.hostHif, schema.properties.contract.properties.hostHif.const)
  assert.deepEqual(catalog.contract.clientHifs, schema.properties.contract.properties.clientHifs.const)

  const expectedTags = [
    'dsh-v0.1.0-rc.7',
    'dsh-v0.1.0-rc.8',
    'dsh-v0.1.1-rc.1',
    'dsh-v0.1.1-rc.2',
    'dsh-v0.1.2-alpha.1',
    'dsh-v0.1.2-alpha.2',
    'dsh-v0.1.2-alpha.3',
    'dsh-v0.1.2-alpha.4',
    'dsh-v0.1.2-alpha.5',
    'dsh-v0.1.2-rc.1',
    'dsh-v0.1.3-alpha.1',
  ]
  assert.deepEqual(catalog.tags.map(record => record.tag), expectedTags)
  assert.equal(new Set(catalog.tags.map(record => record.commit)).size, expectedTags.length)

  const resultStates = new Set(schema.$defs.result.properties.status.enum)
  const sidebarStates = new Set(schema.$defs.sidebar.properties.relationship.enum)
  for (const record of catalog.tags) {
    assert.match(record.version, /^[0-9]/, `${record.tag}: version`)
    assert.match(record.commit, /^[0-9a-f]{40}$/, `${record.tag}: commit`)
    assert.equal(record.contract, catalog.contract.base, `${record.tag}: contract`)
    assert.equal(record.hostHif, catalog.contract.hostHif, `${record.tag}: host HIF`)
    assert.ok(catalog.contract.clientHifs.includes(record.clientHif), `${record.tag}: client HIF`)
    assert.ok(['3.18.1', '3.18.2'].includes(record.schemastery), `${record.tag}: Schemastery`)
    assert.ok(sidebarStates.has(record.betterSidebar.relationship), `${record.tag}: sidebar relationship`)
    assert.equal(typeof record.betterSidebar.reason, 'string', `${record.tag}: sidebar reason`)
    if (record.betterSidebar.relationship === 'no-match') assert.equal(record.betterSidebar.version, null)
    else assert.match(record.betterSidebar.version, /^[0-9]/, `${record.tag}: sidebar version`)
    for (const field of ['audited', 'registry', 'packageVerification', 'liveSmoke']) {
      assert.ok(resultStates.has(record[field].status), `${record.tag}: ${field} status`)
      assert.ok(record[field].reason.length > 0, `${record.tag}: ${field} reason`)
    }
    const registryPassed = record.registry.status === 'passed'
    assert.equal(Object.keys(record.providers).length > 0, registryPassed, `${record.tag}: provider evidence`)
    assert.equal(record.missingPackages.length === 0, registryPassed, `${record.tag}: missing package evidence`)
    if (!registryPassed) assert.notEqual(record.packageVerification.status, 'passed', `${record.tag}: unavailable target cannot pass package verification`)
    if (record.liveSmoke.status === 'passed') assert.equal(record.packageVerification.status, 'passed', `${record.tag}: smoke requires package verification`)
  }

  const baselineRecord = catalog.tags.find(record => record.tag === catalog.baseline.tag)
  assert.ok(baselineRecord, 'baseline tag must identify one fact row')
  assert.equal(baselineRecord.version, catalog.baseline.version)
  assert.equal(baselineRecord.commit, catalog.baseline.commit)
  assert.equal(baselineRecord.schemastery, catalog.baseline.schemastery)
  assert.equal(baselineRecord.betterSidebar.version, catalog.baseline.betterSidebar)
  return catalog
}

if (path.resolve(process.argv[1] ?? '') === fileURLToPath(import.meta.url)) {
  const catalog = await validateCompatibility()
  const counts = Object.fromEntries(
    catalog.contract.clientHifs.map(hif => [hif, catalog.tags.filter(record => record.clientHif === hif).length]),
  )
  console.log(`Validated ${catalog.tags.length} Harness tag facts: ${JSON.stringify(counts)}`)
}
