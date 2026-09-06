import assert from 'node:assert/strict'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { buildResponseContracts } from './response-contracts.mjs'

const packageRoot = path.resolve(import.meta.dirname, '..')
const referencesRoot = path.join(packageRoot, 'references')
const interfacesRoot = path.join(referencesRoot, 'interfaces')
const catalogPath = path.join(referencesRoot, 'interface-catalog.json')
const indexPath = path.join(referencesRoot, '数据接口.md')
const transportPath = path.join(referencesRoot, '传输与结构重建.md')
const accessPolicyPath = path.join(referencesRoot, '访问控制与额度.md')
const checkOnly = process.argv.includes('--check')

const catalog = JSON.parse(await readFile(catalogPath, 'utf8'))
const { envelope, contracts } = await buildResponseContracts()
assert.equal(catalog.schemaVersion, 1)
assert.equal(catalog.interfaces.length, 24)
assert.equal(new Set(catalog.interfaces.map((entry) => entry.name)).size, 24)
assert.equal(new Set(catalog.interfaces.map((entry) => entry.documentFile)).size, 24)
assert.ok(catalog.interfaces.every((entry) => entry.documentTitle && entry.documentFile === `${entry.documentTitle}.md`))
assert.deepEqual(new Set(Object.keys(contracts)), new Set(catalog.interfaces.map((entry) => entry.name)))

function schemaType(schema = {}) {
  if (schema.type === 'array') return `array<${schema.items?.type ?? 'unknown'}>`
  return schema.type ?? 'unknown'
}

function choices(schema = {}) {
  const values = schema.enum ?? schema.items?.enum
  return Array.isArray(values) ? values.map((value) => `\`${String(value)}\``).join('、') : '—'
}

function cell(value) {
  return String(value ?? '').replaceAll('|', '\\|').replaceAll('\n', '<br>')
}

function parameterTable(entry) {
  const properties = entry.parameters?.properties ?? {}
  const required = new Set(entry.parameters?.required ?? [])
  const rows = Object.entries(properties).map(([name, schema]) =>
    `| \`${name}\` | ${schemaType(schema)} | ${required.has(name) ? '是' : '否'} | ${choices(schema)} | ${cell(schema.description || '未提供额外说明。')} |`,
  )
  return [
    '| 参数 | 类型 | 必填 | 可选值 | 说明 |',
    '|---|---|---:|---|---|',
    ...(rows.length > 0 ? rows : ['| — | object | 否 | — | 该接口不接收业务参数。 |']),
  ].join('\n')
}

function exampleArguments(entry) {
  const properties = entry.parameters?.properties ?? {}
  const required = entry.parameters?.required ?? []
  return Object.fromEntries(required.map((name) => {
    const schema = properties[name] ?? {}
    if (Array.isArray(schema.enum)) return [name, schema.enum[0]]
    if (schema.type === 'array') return [name, Array.isArray(schema.items?.enum) ? [schema.items.enum[0]] : [`<${name}>`]]
    if (schema.type === 'integer' || schema.type === 'number') return [name, `<${name}:number>`]
    if (schema.type === 'boolean') return [name, false]
    return [name, `<${name}>`]
  }))
}

function enumText(field) {
  return Array.isArray(field.enum) ? field.enum.map((value) => `\`${String(value)}\``).join('、') : '—'
}

function fieldTable(fields) {
  return [
    '| 路径 | 类型 | 枚举/固定值 | 说明 |',
    '|---|---|---|---|',
    ...fields.map((field) => `| \`${cell(field.path)}\` | ${cell(field.type)} | ${enumText(field)} | ${cell(field.description)} |`),
  ].join('\n')
}

function tableSections(contract) {
  return (contract.tables ?? []).map((current) => `### 表结构：\`${current.location}\`

${current.description}

| 列名 | JSON 类型 | 枚举/固定值 | 说明 |
|---|---|---|---|
${current.columns.map((column) => `| \`${cell(column.name)}\` | ${cell(column.type)} | ${enumText(column)} | ${cell(column.description)} |`).join('\n')}`).join('\n\n')
}

function renderInterface(entry) {
  const contract = contracts[entry.name]
  return `# ${entry.documentTitle}

> 分组：${entry.groupLabel}
> 状态：通过单一 \`onclaw_data_interface\` 受控桥调用；不是独立注册的 Harness Tool。

规范接口名：\`${entry.name}\`

调用时令 \`interface_name\` 等于上述规范接口名，并把下表参数放入 \`arguments\`。认证由 Onclaw Harness Host 登录会话隐式提供，不得传入 Token、HTTP path、method 或 Header。

普通与 VIP 账户共享本接口的参数、返回字段和公共安全边界；访问判定及额度错误处理见 [访问控制与额度](../访问控制与额度.md)。

## 用途

${entry.description}

${entry.usage}

## 参数

参数对象必须满足 \`additionalProperties: false\`，只允许下表字段。

${parameterTable(entry)}

### 最小参数骨架

\`\`\`json
${JSON.stringify(exampleArguments(entry), null, 2)}
\`\`\`

占位符必须在真正实现或 Inspector 测试前替换为符合说明的值；不要把占位符作为真实参数发送。

### 完整参数 Schema

\`\`\`json
${JSON.stringify(entry.parameters, null, 2)}
\`\`\`

## 输出与处理

### 验证来源

- 实际请求：HTTP ${contract.evidence.liveStatus}。
- 契约来源：${contract.evidence.source}。
- ${contract.evidence.note}
- 数据库模型只用于核对已下发字段的标量类型和含义；未被 service/module 序列化的列不在本契约中。

### 响应外壳

${fieldTable(envelope)}

业务数据形态：**${contract.shape}**。

### 返回字段

${fieldTable(contract.fields)}

${tableSections(contract)}

### 结构重建

- 先由 HTTP 客户端处理可能存在的 gzip，再解析 JSON；不要对已经得到的对象再次解压。
- 只在上述明确标为 \`TableData\` 的路径执行 \`columns[i] -> rows[*][i]\` 映射。
- Topic 树、分页对象、运行态对象和动态键映射保持原有对象/数组结构，不要递归转换为 DataFrame。
- 完整规则见 [传输与结构重建](../传输与结构重建.md)。

- 建议超时上限：${entry.timeoutMs} ms；实际调用仍应支持取消。
- 原始长表、Window 或 Runtime 结果应先经过范围裁剪、关联或特征处理，再进入最终 LLM 判断。
- 空结果不自动代表失败，应结合交易日、筛选条件、权限和数据可用性判断。

## 编排建议

1. 在流程中明确该接口的参数来源，而不是让最终判断 LLM 临时猜测参数。
2. 记录日期口径、股票范围、题材或报告期等关键坐标。
3. 将接口结果传给确定性筛选或 Python 特征节点；只把有界证据交给判断节点。
4. 保留数据状态、revision、coverage、warnings 和缺失信息。

## 注意事项

${entry.cautions.map((item) => `- ${item}`).join('\n')}
`
}

const groups = new Map()
for (const entry of catalog.interfaces) {
  const group = groups.get(entry.group) ?? { label: entry.groupLabel, interfaces: [] }
  group.interfaces.push(entry)
  groups.set(entry.group, group)
}

const index = `# Onclaw 数据接口

本索引覆盖当前二十四个只读数据接口。接口未注册为 Agent Tools；这里用于接口发现、参数确认和流程设计。

使用方法：先按领域选择接口，再读取对应详细页。不要一次加载全部参考文档，也不要让 LLM 直接扫描未经处理的 Window/Runtime 长表。

实现接口驱动前先阅读 [访问控制与额度](访问控制与额度.md) 和 [传输与结构重建](传输与结构重建.md)，确认调用边界、失败语义、表所在路径和 Topic 树的保留规则。

${[...groups.entries()].map(([groupId, group]) => `## ${group.label}

${group.interfaces.map((entry) => `- [${entry.documentTitle}](interfaces/${entry.documentFile})（\`${entry.name}\`）：${entry.usage}`).join('\n')}`).join('\n\n')}

## 共同约束

- 所有参数对象闭合，未声明字段均不得传入。
- 日期默认使用 \`YYYY-MM-DD\`；具体范围和必填要求以详细页为准。
- 普通与 VIP 账户共享全部规范接口、参数、字段和公共业务安全边界；会员差异只限交易日门禁、请求频率额度和每日流量额度。
- 接口说明不授予执行权限，也不绕过登录、后端访问判定、额度或缓存校验。
- 不存在接收任意 path、method、query、body 或 SQL 的通用接口。
- 设计流程时应写清接口参数来源、中间处理和最终证据边界。
`

const transport = `# 传输与结构重建

## 结论

Onclaw 的业务响应统一为 JSON。后端启用 Starlette \`GZipMiddleware(minimum_size=1000, compresslevel=4)\`，因此 gzip 是由响应大小和客户端协商决定的 HTTP \`Content-Encoding\`，不是固定接口格式，也不能用来判断响应是否为表格。Axios、浏览器、Node fetch 和 Python requests 通常会在 JSON 解析前透明解压。

## BaseResponse

原始通信响应通常是：

\`\`\`json
{"code": 200, "msg": "success", "data": {}}
\`\`\`

先校验 HTTP 状态，再校验 \`code === 200\`，最后读取 \`data\`。前端共享拦截器会移除该外壳，并且仅自动展开**顶层** \`data={columns,rows}\`；嵌套表仍需接口模块显式处理。

## TableData 重建

TableData 的结构是 \`{"columns":[...],"rows":[[...], ...]}\`。第 N 个单元格只由第 N 个列名定义：

\`\`\`python
frame = pandas.DataFrame(table["rows"], columns=table["columns"])
\`\`\`

\`\`\`javascript
const records = table.rows.map(row =>
  Object.fromEntries(table.columns.map((column, index) => [column, row[index]]))
)
\`\`\`

不得按猜测重排列、补零或把空表解释为请求失败。\`columns\` 仍是空表的权威 Schema；当接口允许 \`fields\` 时，实际列严格以响应中的 \`columns\` 为准。

## 四种实际位置

| 类型 | 接口示例 | 表路径 | 处理方式 |
|---|---|---|---|
| 顶层表 | 市场日/月频、当前监管、监管线、题材行情 | \`data\` | 解包后直接重建 |
| 嵌套表 | 业绩公告、美股异动 | \`data.table\` | 保留旁路元数据，再重建 \`table\` |
| Snapshot 组合 | 梯队 Window、股票 Window | \`data.window.table\`、可选 \`data.runtime.table\` | 分别重建；Runtime 是差量，不能替代 Window 基表 |
| 非表对象 | 报告目录、时间线、Topic、Runtime 聚合 | 无 | 保持对象/数组结构 |

## Snapshot 增量语义

Window 表包含 \`trade_date\`；Runtime 差量表不含 \`trade_date\`，其日期来自 \`runtime.market_date\`。当 \`runtime.changed=false\` 时表可能为空；当 \`reload_window=true\` 时必须重新获取 Window，不能仅拼接 Runtime。\`rowset_revision\`、\`runtime_revision\`、\`degraded\` 与 \`cache_info\` 应随处理结果保留。

## Topic 树

\`onclaw_get_topic_info\` 返回 Topic Bundle，而不是 DataFrame：\`tree\` 是递归 \`TopicTreeNode[]\`，\`children\` 可继续嵌套；\`stock_occurrences\` 是与树节点通过 \`occurrence_id\` 关联的规范出现记录；\`unique_stock_codes\` 和 \`unplaced_occurrence_ids\` 是旁路索引。即使某个子对象偶然包含类似 \`columns\` 或 \`rows\` 的业务键，也不得递归自动表格化。

## 证据边界

本 Skill 的只读探测报告只保留状态、响应头和字段外形，不保存业务行值。匿名探测因认证或统一访问策略无法取得业务样本时，详细结构取自对应 service、module/repository 的实际序列化路径及前端消费类型；数据库表仅用于补充这些已证明下发字段的类型，不扩展接口字段。
`

const accessPolicy = `# 访问控制与额度

## 能力边界

普通与 VIP 账户共享本 Skill 中全部二十四个规范接口，以及相同的参数、响应字段、Snapshot Window/Runtime 控件和公共安全边界。不要根据会员层级隐藏接口、缩小日期或股票范围、移除 Runtime，或假设存在 VIP 专属业务字段。

会员差异只保留三项：

- 上海交易日时间门禁：普通账户在交易日暂停业务数据访问，VIP 可访问。
- 请求频率额度：不同层级使用不同的服务端频率预算。
- 每日流量额度：不同层级使用不同的请求与响应字节预算。

后端返回是访问判定的唯一权威。不得切换相近接口、拆分请求或改写参数来规避门禁或额度。

## 失败处理

原始后端拒绝使用 \`BaseResponse\`，稳定错误码位于 \`data.error_code\`；Harness 受控桥会将该错误码和可用额度元数据保留到调用错误中。

| HTTP | 错误码 | 含义 | Agent 行为 |
|---:|---|---|---|
| 401 | \`AUTH_REQUIRED\` | Harness Host 当前没有登录会话 | 提示用户到 Onclaw 设置页登录；不得索取或输出 Token |
| 403 | \`trading_day_access_closed\` | 普通账户触发上海交易日门禁 | 说明当前时间门禁；不要改换接口绕过，也不要解释为空数据 |
| 429 | \`frequency_quota_exceeded\` | 请求频率额度已用尽 | 报告可用的 \`usage / limit\` 和 \`reset_at\`，停止轮询并等待重置 |
| 429 | \`daily_traffic_quota_exceeded\` | 当日请求/响应流量额度已用尽 | 报告可用的 \`usage / limit\` 和 \`reset_at\`，停止继续读取大结果 |
| 503 | \`access_calendar_unavailable\` | 暂时无法确认交易日状态 | 作为临时服务状态报告；稍后再试，不改变业务参数或结论 |

额度响应可包含 \`tier\`、\`limit\`、\`usage\` 和 \`reset_at\`。只陈述实际收到的值；没有元数据时不要猜测生产额度。访问拒绝、真正的空业务结果与部分数据必须分别记录。

## 重试约束

- 优先遵循错误中的 \`reset_at\`；若调用环境另行暴露 \`Retry-After\`，取不早于它的时间。
- 不要自动并发重试或把一个请求拆成多个请求，这会继续消耗频率与流量额度。
- 只有用户明确要求持续等待时才安排重试；否则报告状态和最早可重试时间。
`

async function emit(filePath, content) {
  if (checkOnly) {
    assert.equal(await readFile(filePath, 'utf8'), content, `generated documentation is stale: ${filePath}`)
  } else {
    await mkdir(path.dirname(filePath), { recursive: true })
    await writeFile(filePath, content, 'utf8')
  }
}

await emit(indexPath, index)
await emit(transportPath, transport)
await emit(accessPolicyPath, accessPolicy)
for (const entry of catalog.interfaces) {
  await emit(path.join(interfacesRoot, entry.documentFile), renderInterface(entry))
}

console.log(`${checkOnly ? 'Verified' : 'Generated'} ${catalog.interfaces.length} Onclaw interface guides.`)
