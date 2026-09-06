import assert from 'node:assert/strict'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import path from 'node:path'

const packageRoot = path.resolve(import.meta.dirname, '..')
const repositoryRoot = path.resolve(packageRoot, '..', '..', '..', '..')
const harnessModulePath = path.join(repositoryRoot, 'fiagent_frontend', 'dsh-fin-onclaw', 'lib', 'index.js')
const outputPath = path.join(packageRoot, 'references', 'interface-catalog.json')
const checkOnly = process.argv.includes('--check')

const GROUPS = {
  ladder: {
    label: '梯队与涨跌停',
    names: [
      'onclaw_get_limit_ladder_window',
      'onclaw_get_ladder_stock_context',
      'onclaw_get_limit_info_dates',
    ],
    caution: '梯队归属以既有接口口径为准，不要根据观察日字段在模型侧重新划分。',
  },
  performance: {
    label: '业绩与公告',
    names: [
      'onclaw_get_performance_premium_window',
      'onclaw_get_performance_reports',
      'onclaw_get_performance_announcement_dates',
      'onclaw_get_performance_announcements',
    ],
    caution: '报告期、公告日和交易日是不同坐标；缺失价格或公告信息不能用零值代替。',
  },
  market: {
    label: '市场行情',
    names: [
      'onclaw_get_stock_market_window',
      'onclaw_get_market_daily',
      'onclaw_get_market_monthly',
      'onclaw_get_market_volume_trends',
      'onclaw_get_market_runtime',
      'onclaw_get_board_sentiment_window',
      'onclaw_get_market_timeline',
    ],
    caution: '明确 settled 与 runtime 口径；大规模行集应先进入特征处理而不是直接交给 LLM。',
  },
  supervision: {
    label: '监管',
    names: [
      'onclaw_get_active_supervision',
      'onclaw_get_supervision_history',
      'onclaw_get_supervision_lines',
      'onclaw_get_supervision_line_history',
    ],
    caution: '区分当前状态、历史记录和监管线定义，不能把历史命中表述成当前仍处于监管。',
  },
  topic: {
    label: '题材',
    names: [
      'onclaw_get_topic_names_by_stocks',
      'onclaw_get_topic_market_info',
      'onclaw_search_topics',
      'onclaw_get_topic_info',
    ],
    caution: '题材搜索结果只是候选集合，应结合日期、成分股和市场活跃度继续筛选。',
  },
  'us-market': {
    label: '美股异动',
    names: [
      'onclaw_get_us_abnormal_movement_dates',
      'onclaw_get_us_abnormal_movements',
    ],
    caution: '异动描述用于提取线索，不等同于对 A 股题材或标的的确定性因果结论。',
  },
}

const USAGE = {
  onclaw_get_limit_ladder_window: '按基准日和观察区间读取一个指定梯队，可用于连板、反复、首板、炸板或跌停队列的后续特征计算。',
  onclaw_get_performance_premium_window: '围绕一个报告期和公告事件日读取业绩事件及 T+n 溢价窗口，适合构造业绩套利或公告效应特征。',
  onclaw_get_stock_market_window: '对明确且有界的股票代码集合读取市场 Snapshot Window，并按需附加 Runtime 数据。',
  onclaw_get_performance_reports: '先获取可用财报季度目录，为后续公告日期和公告明细查询提供规范 report 参数。',
  onclaw_get_performance_announcement_dates: '获取指定报告期存在公告事件的日期，用于选择后续公告或溢价分析坐标。',
  onclaw_get_performance_announcements: '按报告期、事件日期和有限过滤条件读取公告事件明细。',
  onclaw_get_ladder_stock_context: '读取单只股票的梯队相关上下文，用于把候选标的与近期涨跌停行为关联。',
  onclaw_get_market_daily: '读取指定日期范围或最近窗口的市场日频统计，适合市场情绪、量能和活跃度特征。',
  onclaw_get_market_monthly: '读取月频行情，用于更长周期趋势或跨月比较。',
  onclaw_get_market_volume_trends: '读取量价趋势数据，用于成交活跃度、放量和持续性特征。',
  onclaw_get_market_runtime: '读取尚未落定的实时行情状态，只能作为 runtime 证据使用。',
  onclaw_get_board_sentiment_window: '读取板块情绪窗口，用于判断候选所处市场环境和情绪阶段。',
  onclaw_get_limit_info_dates: '获取涨跌停 Snapshot 可用日期，为梯队 Window 选择合法日期范围。',
  onclaw_get_active_supervision: '读取当前活跃监管状态，用于候选标的风险过滤。',
  onclaw_get_supervision_history: '读取股票历史监管事件，用于风险回溯而非当前状态判断。',
  onclaw_get_supervision_lines: '读取监管线定义或当前监管线集合，为监管规则解释提供依据。',
  onclaw_get_supervision_line_history: '读取指定监管线的历史变化，避免用当前阈值解释全部历史。',
  onclaw_get_market_timeline: '读取市场时间线事件，用于把候选、题材和市场事件按时间对齐。',
  onclaw_get_topic_names_by_stocks: '由股票代码集合反查关联题材名称，适合从候选标的发现题材线索。',
  onclaw_get_topic_market_info: '读取指定题材的市场信息和股票集合，用于题材内候选扩展。',
  onclaw_search_topics: '按关键词搜索题材候选，适合处理新闻、公告或美股异动中提取的关键词。',
  onclaw_get_topic_info: '读取单个题材的详细说明，用于确认题材语义和有效性。',
  onclaw_get_us_abnormal_movement_dates: '获取美股异动数据的可用日期，避免直接请求不存在的交易日。',
  onclaw_get_us_abnormal_movements: '读取指定日期的美股异动明细，用于后续关键词提取和跨市场线索映射。',
}

const DOCUMENT_TITLES = {
  onclaw_get_limit_ladder_window: '涨跌停梯队窗口',
  onclaw_get_performance_premium_window: '业绩溢价窗口',
  onclaw_get_stock_market_window: '股票行情窗口',
  onclaw_get_performance_reports: '财报季度目录',
  onclaw_get_performance_announcement_dates: '业绩公告日期',
  onclaw_get_performance_announcements: '业绩公告明细',
  onclaw_get_ladder_stock_context: '梯队股票上下文',
  onclaw_get_market_daily: '市场日频数据',
  onclaw_get_market_monthly: '市场月频数据',
  onclaw_get_market_volume_trends: '市场成交趋势',
  onclaw_get_market_runtime: '市场实时运行态',
  onclaw_get_board_sentiment_window: '连板情绪窗口',
  onclaw_get_limit_info_dates: '涨跌停可用日期',
  onclaw_get_active_supervision: '当前有效监管',
  onclaw_get_supervision_history: '历史监管记录',
  onclaw_get_supervision_lines: '监管价格线',
  onclaw_get_supervision_line_history: '监管价格线历史',
  onclaw_get_market_timeline: '市场事件时间线',
  onclaw_get_topic_names_by_stocks: '股票关联题材',
  onclaw_get_topic_market_info: '题材股票行情',
  onclaw_search_topics: '题材搜索',
  onclaw_get_topic_info: '题材详情',
  onclaw_get_us_abnormal_movement_dates: '美股异动可用日期',
  onclaw_get_us_abnormal_movements: '美股异动明细',
}

const groupByName = new Map()
for (const [id, group] of Object.entries(GROUPS)) {
  for (const name of group.names) {
    assert.equal(groupByName.has(name), false, `duplicate grouped interface: ${name}`)
    groupByName.set(name, { id, label: group.label, caution: group.caution })
  }
}

const hostModule = await import(pathToFileURL(harnessModulePath).href)
const definitions = hostModule.createOnclawBusinessTools({
  request: async () => {
    throw new Error('snapshot generation must not execute an interface')
  },
})

assert.equal(definitions.length, 24)
const interfaces = definitions.map((definition) => {
  const group = groupByName.get(definition.name)
  assert.ok(group, `missing group metadata: ${definition.name}`)
  assert.ok(USAGE[definition.name], `missing usage guidance: ${definition.name}`)
  return {
    name: definition.name,
    documentTitle: DOCUMENT_TITLES[definition.name],
    documentFile: `${DOCUMENT_TITLES[definition.name]}.md`,
    group: group.id,
    groupLabel: group.label,
    description: definition.description,
    usage: USAGE[definition.name],
    cautions: [
      group.caution,
      '参数对象是闭合的；未声明字段必须视为错误，不能静默转发。',
      '返回值保持现有 Onclaw BaseResponse 及接口数据结构，空值、缺失字段和警告不得自行补零。',
    ],
    parameters: definition.parameters,
    outputSchema: definition.output?.schema ?? { type: 'object', additionalProperties: true },
    timeoutMs: definition.timeoutMs ?? 60_000,
  }
})

assert.deepEqual(new Set(interfaces.map((entry) => entry.name)).size, 24)
assert.deepEqual(new Set(Object.keys(USAGE)), new Set(interfaces.map((entry) => entry.name)))
assert.deepEqual(new Set(Object.keys(DOCUMENT_TITLES)), new Set(interfaces.map((entry) => entry.name)))

const snapshot = `${JSON.stringify({
  schemaVersion: 1,
  source: 'fiagent_frontend/src/harness/host/createOnclawBusinessTools',
  interfaces,
}, null, 2)}\n`

if (checkOnly) {
  assert.equal(await readFile(outputPath, 'utf8'), snapshot, 'interface snapshot is stale; rebuild Harness and regenerate it')
  console.log(`Onclaw interface snapshot verified: ${interfaces.length} interfaces.`)
} else {
  await mkdir(path.dirname(outputPath), { recursive: true })
  await writeFile(outputPath, snapshot, 'utf8')
  console.log(`Wrote ${outputPath} with ${interfaces.length} interfaces.`)
}
