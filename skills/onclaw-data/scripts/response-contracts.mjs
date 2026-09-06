import { readFile } from 'node:fs/promises'
import path from 'node:path'

const repositoryRoot = path.resolve(import.meta.dirname, '..', '..', '..', '..', '..')

const f = (path, type, description, options = {}) => ({ path, type, description, ...options })
const c = (name, type, description, options = {}) => ({ name, type, description, ...options })

const table = (location, columns, description = '二维表；`rows` 中每一项必须按 `columns` 的同一位置解释。') => ({
  location,
  description,
  columns,
})

const envelope = [
  f('code', 'integer', '业务状态码；成功为 `200`。'),
  f('msg', 'string', '业务状态说明。'),
  f('data', '按接口定义', '业务数据。文档下方的路径均以完整响应为起点。'),
]

const evidence = (liveStatus, source) => ({
  liveStatus,
  source,
  note: liveStatus === 200
    ? '已用只读测试请求确认响应外形；字段语义与类型再以服务序列化代码核对。'
    : `只读测试请求返回 HTTP ${liveStatus}（认证或统一访问策略阻止取得业务样本）；以下业务结构来自服务、模块及前端消费契约。`,
})

function extractClass(source, className) {
  const start = source.indexOf(`class ${className}`)
  if (start < 0) throw new Error(`missing Python class ${className}`)
  const tail = source.slice(start)
  const next = tail.slice(1).search(/\nclass\s+/)
  return next < 0 ? tail : tail.slice(0, next + 1)
}

function pythonColumnType(block) {
  let base = 'string'
  if (/Column\(DateTime\b/.test(block)) base = 'string(date-time)'
  else if (/Column\(Date\b/.test(block)) base = 'string(date)'
  else if (/Column\(Time\b/.test(block)) base = 'string(time)'
  else if (/Column\((?:Integer|SmallInteger)\b/.test(block)) base = 'integer'
  else if (/Column\((?:Numeric|Float)\b/.test(block)) base = 'number'
  else if (/Column\(JsonList\(Integer\)/.test(block)) base = 'integer[]'
  else if (/Column\(JsonList\(String\)/.test(block)) base = 'string[]'
  else if (/Column\((?:JsonObject\(\)|JSON\b)/.test(block)) base = 'object | array'
  return /nullable=False|primary_key=True/.test(block) ? base : `${base} | null`
}

function pythonColumns(source, className) {
  const body = extractClass(source, className)
  const lines = body.split(/\r?\n/)
  const result = []
  for (let index = 0; index < lines.length; index += 1) {
    const match = lines[index].match(/^    (\w+) = Column\(/)
    if (!match) continue
    const chunks = [lines[index]]
    let balance = (lines[index].match(/\(/g) ?? []).length - (lines[index].match(/\)/g) ?? []).length
    while (balance > 0 && index + 1 < lines.length) {
      index += 1
      chunks.push(lines[index])
      balance += (lines[index].match(/\(/g) ?? []).length - (lines[index].match(/\)/g) ?? []).length
    }
    const block = chunks.join('\n')
    const comment = block.match(/comment="([\s\S]*?)"\s*,?\s*\)?\s*$/)?.[1]
      ?? block.match(/comment="([^"]*)"/)?.[1]
      ?? '服务下发字段；含义沿用后端数据库列定义。'
    result.push(c(match[1], pythonColumnType(block), comment))
  }
  return result
}

const snapshotColumns = [
  c('trade_date', 'string(date)', '静态 Window 行所属交易日；Runtime 表不含此列。'),
  c('ts_code', 'string', '标准股票代码。'), c('name', 'string | null', '股票名称。'),
  c('open', 'number | null', '开盘价。'), c('high', 'number | null', '最高价。'),
  c('low', 'number | null', '最低价。'), c('close', 'number | null', '收盘价或当前价。'),
  c('pre_close', 'number | null', '前收盘价。'), c('pct_chg', 'number | null', '涨跌幅。'),
  c('ma5_bias', 'number | null', '相对五日均线的偏离。'), c('amount', 'number | null', '成交额。'),
  c('free_mv', 'number | null', '流通市值。'),
  c('limit_status', 'integer | null', '涨跌停状态；分钟曲线仅在 `-1`、`1`、`2` 时允许下发。', { enum: [-1, 1, 2] }),
  c('limit_count', 'integer | null', '近期涨停次数。'), c('limit_board_count', 'integer | null', '连板高度。'),
  c('consecutive_count', 'integer | null', '连续状态计数；负值可表示连续跌停深度。'),
  c('limit_reason', 'string | null', '涨跌停原因。'), c('limit_shape', 'string | null', '涨停形态。'),
  c('is_suspended', 'boolean | null', '是否停牌。'), c('auction_unmatched', 'number | null', '竞价未匹配量。'),
  c('is_auction_up_limit', 'boolean | null', '是否竞价一字涨停。'), c('has_convertible', 'boolean | null', '是否存在有效可转债。'),
  c('regulatory_status', 'string | null', '监管状态摘要。'),
  c('minute_curve', 'number[]', '受限分钟曲线；非允许涨跌停状态必须为空数组。'),
]

const snapshotWindowFields = [
  f('data.source', 'string', '固定为 `limit_info_snapshot` 或 `market_snapshot`。', { enum: ['limit_info_snapshot', 'market_snapshot'] }),
  f('data.window.contract_version', 'integer', 'Snapshot 通信契约版本；当前为 `2`.', { enum: [2] }),
  f('data.window.schema_version', 'integer', '表列 Schema 版本；当前为 `2`。', { enum: [2] }),
  f('data.window.base_date', 'string(date)', '范围与股票集合的锚定日期。'),
  f('data.window.start_date', 'string(date)', '实际窗口开始日期。'), f('data.window.end_date', 'string(date)', '实际窗口结束日期。'),
  f('data.window.selected_date', 'string(date)', '最终采用的选择日期。'), f('data.window.cursor', 'integer', '实际游标。'),
  f('data.window.size', 'integer', '实际窗口大小。'), f('data.window.static_revision', 'string | integer', '静态窗口修订标识。'),
  f('data.window.rowset_revision', 'integer', '股票集合修订号。'), f('data.window.dates', 'string(date)[]', '窗口包含的有序交易日。'),
  f('data.window.structure', 'object', '列/行的展示与分组结构。'),
  f('data.window.structure.ordered_dates', 'string(date)[]', '与窗口一致的日期轴。'),
  f('data.window.structure.ordered_codes', 'string[]', '股票行顺序。'),
  f('data.window.structure.groups', 'record<string,string[]>', '梯队或显式分组到股票代码的映射。'),
  f('data.window.structure.names', 'record<string,string>', '代码到股票名称的映射。'),
  f('data.window.structure.group_order', 'string[]', '分组显示顺序。'),
  f('data.window.structure.frozen_columns', 'string[]', '冻结列名。'), f('data.window.structure.scroll_columns', 'string[]', '滚动列名。'),
  f('data.window.table', 'TableData', '静态窗口二维表。'), f('data.window.access', 'object | null', '权限层级与窗口约束信息。'),
  f('data.window.cache_info', 'object | null', '缓存命中、负载大小和组装耗时诊断。'),
  f('data.runtime', 'object | null', '`data_mode=include_runtime` 时为 Runtime；`settled` 时为 `null`。'),
  f('data.runtime.changed', 'boolean', 'Runtime 是否相对已知 revision 发生变化。'),
  f('data.runtime.mode', 'string', '当前市场运行模式。'), f('data.runtime.market_date', 'string(date)', 'Runtime 市场日期。'),
  f('data.runtime.market_time', 'string(time)', 'Runtime 市场时间。'), f('data.runtime.recommended_refetch_ms', 'integer', '建议轮询间隔。'),
  f('data.runtime.runtime_revision', 'integer', '实时数据修订号。'), f('data.runtime.rowset_revision', 'integer', '股票集合修订号。'),
  f('data.runtime.reload_window', 'boolean', '是否必须重载静态 Window。'), f('data.runtime.reload_reason', 'string | null', '需要重载的原因。'),
  f('data.runtime.new_codes', 'string[]', '新增股票代码。'), f('data.runtime.groups', 'record<string,string[]>', 'Runtime 分组。'),
  f('data.runtime.group_counts', 'record<string,integer>', '各组股票数。'), f('data.runtime.group_rowset_revisions', 'record<string,integer>', '各组集合修订号。'),
  f('data.runtime.group_reload', 'record<string,object>', '各组的 `reload_window`、`rowset_revision`、`new_codes`。'),
  f('data.runtime.degraded', 'boolean', '是否降级。'), f('data.runtime.degraded_reason', 'string | null', '降级原因。'),
  f('data.runtime.table', 'TableData', '实时差量表；未变化或静态已就绪时可以为空表。'),
]

const announcementColumns = [
  c('id', 'integer', '公告记录 ID。'), c('source_seq', 'string', '稳定财报业务序号。'),
  c('stock_code', 'string', '六位股票代码。'), c('stock_name', 'string', '股票名称。'),
  c('report_year', 'integer', '报告年度。'), c('report_quarter', 'integer', '逻辑季度。', { enum: [1, 2, 3, 4] }),
  c('period_end', 'string(date)', '报告期截止日。'), c('announce_date', 'string(date)', '公告自然日。'),
  c('event_date', 'string(date)', '公告对应的下一有效交易日。'),
  c('forecast_type', 'string', '公告类型。', { enum: ['preview', 'express', 'notice'] }),
  c('performance_type', 'string | null', '业绩表现类型。'), c('forecast_subtype', 'string | null', '业绩预告子类型。'),
  c('data_description', 'string | null', '由结构化业绩字段生成的前端描述。'),
  c('announcement_pdf_url', 'string | null', '公告 PDF 地址。'),
]

const supervisionColumns = [
  c('ts_code', 'string', '标准股票代码。'), c('stock_name', 'string | null', '股票名称。'),
  c('start_date', 'string(date)', '监管开始日期。'), c('end_date', 'string(date)', '监管结束日期。'),
  c('channel', 'integer | null', '渠道来源。'), c('attitude_score', 'integer | null', '监管态度评分。'),
  c('attitude_label', 'string | null', '监管态度标签。'), c('cycle_attitude_score', 'integer | null', '当前监管周期最高态度评分。'),
  c('attitude_evidence_status', 'string | null', '评分证据状态。', { enum: ['pending', 'confirmed', 'basis_unidentified', 'invalid'] }),
  c('attitude_reason_codes', 'string[] | null', '评分原因代码。'), c('attitude_score_version', 'string | null', '评分规则版本。'),
  c('trigger_basis', 'string | null', '评分触发依据。'), c('trigger_trade_date', 'string(date) | null', '评分触发交易日。'),
  c('cycle_start_date', 'string(date) | null', '监管周期锚点日期。'), c('entry_day_pct', 'number | null', '监管日当日涨跌幅。'),
  c('entry_2d_pct', 'number | null', '监管日两日区间涨跌幅。'), c('entry_3d_pct', 'number | null', '监管日三日区间涨跌幅。'),
]

const superviseLineColumns = [
  c('trade_date', 'string(date)', '价格线日期。'), c('ts_code', 'string', '标准股票代码。'), c('stock_name', 'string | null', '股票名称。'),
  c('is_next_day', 'string | null', '是否为下一日。'), c('category', 'string | null', '价格线类别。'),
  c('pct_change', 'number | null', '涨跌幅。'), c('deviation', 'number | null', '偏离值。'),
  c('distance_desc', 'string | null', '距离异动描述。'), c('cal_days', 'integer | null', '计算天数。'),
  c('distance_pct', 'number | null', '距离异动涨跌幅。'), c('trigger_price', 'number | null', '触发监管价格。'),
]

const paginationFields = (itemType) => [
  f('data.items', `${itemType}[]`, '当前页记录。'), f('data.offset', 'integer', '当前偏移。'),
  f('data.limit', 'integer', '当前页大小。'), f('data.total', 'integer', '总记录数。'),
  f('data.has_more', 'boolean', '是否还有下一页。'), f('data.next_offset', 'integer | null', '下一页偏移；无下一页为 `null`。'),
]

const topicEventFields = [
  f('events[].schema_version', 'integer | null', '事件 Schema 版本。'), f('events[].event_id', 'string | null', '稳定事件 ID。'),
  f('events[].date / event_date', 'string(date|month) | null', '事件日期；可能只有月精度。'),
  f('events[].date_precision', 'string', '日期精度。', { enum: ['day', 'month', 'unknown'] }),
  f('events[].content', 'string', '事件内容。'), f('events[].category', 'string | null', '事件分类。'),
  f('events[].start_date / end_date', 'string | null', '事件范围。'), f('events[].known_at', 'string(date-time) | null', '系统已知时间。'),
  f('events[].validation_errors', 'string[] | null', '事件校验错误。'), f('events[].timeline_mapping', 'object | null', '映射到统一时间线的标识信息。'),
]

const marketInfoColumns = [
  ['trade_date','string(date)','聚合行情日期。'],['ts_code','string','标准股票代码。'],['name','string | null','股票名称。'],
  ['area','string | null','地域。'],['industry','string | null','行业。'],['list_date','string(date) | null','上市日期。'],
  ...['open','high','low','close','pre_close','change','pct_chg','vol','amount','turnover_rate','volume_ratio','pe','pe_ttm','pb','dv_ratio','total_share','float_share','free_share','total_mv','circ_mv'].map((name)=>[name,'number | null','行情或估值数值。']),
  ['holder_nums','integer | null','股东户数。'],['holder_update_date','string(date) | null','股东户数更新日期。'],
  ['limit_info','object | string | null','涨跌停摘要。'],['limit_status','integer | null','涨跌停状态。'],['limit_reason','string | null','涨跌停原因。'],['limit_shape','string | null','涨停形态。'],
  ['limit_count','integer | null','涨停次数。'],['limit_board_count','integer | null','连板高度。'],['consecutive_count','integer | null','连续状态计数。'],
  ['has_convertible','boolean | null','是否存在有效可转债。'],['cb_code','string | null','转债代码。'],['cb_name','string | null','转债名称。'],
  ...['cb_price_latest','cb_pct_chg','cb_one_minute_rise','cb_value','cb_over_rate','cb_remain_size','cb_turnover_rate','cb_stock_rise_speed','cb_stock_pct_chg','cb_stock_turnover_rate'].map((name)=>[name,'number | null','转债或正股关联数值。']),
  ['cb_bond_rating','string | null','转债评级。'],['regulatory_status','string | null','监管状态。'],
  ['auction_amount','number | null','竞价成交额。'],['auction_pct','number | null','竞价涨跌幅。'],['auction_unmatched','number | null','竞价未匹配量。'],
].map(([name,type,description])=>c(name,type,description))

const premiumRegistrationFields = (prefix) => [
  f(`${prefix}.event_key`, 'string', '稳定业务事件键。'),
  f(`${prefix}.source_type`, 'string', '登记来源。', { enum: ['performance', 'supervision'] }),
  f(`${prefix}.source_id`, 'string | null', '主要源记录或监管周期标识。'),
  f(`${prefix}.ts_code`, 'string', '标准股票代码。'),
  f(`${prefix}.t_date`, 'string(date)', '该业务事件的 T 日。'),
  f(`${prefix}.observations`, 'object[]', '已经成熟的 T 至 T+3 观察点，最多四项。'),
  f(`${prefix}.observations[].horizon`, 'integer', '交易日偏移 T+n。', { enum: [0, 1, 2, 3] }),
  f(`${prefix}.observations[].trade_date`, 'string(date)', '观察点对应交易日。'),
  f(`${prefix}.observations[].daily_pct_chg`, 'number | null', '该观察日自身涨跌幅，不是累计溢价。'),
  f(`${prefix}.observations[].premium_pct`, 'number | null', '相对 T 日收盘价的累计百分比溢价；有效 T 日为 0。'),
  f(`${prefix}.observations[].limit_status`, 'integer | null', '该观察日涨跌停状态。', { enum: [-1, 0, 1, 2] }),
  f(`${prefix}.observations[].limit_description`, 'string', '首板、连板、炸板或连续跌停等统一描述。'),
  f(`${prefix}.observations[].data_quality_state`, 'string', '观察点数据质量。', { enum: ['complete', 'missing', 'suspended', 'invalid'] }),
  f(`${prefix}.latest_horizon`, 'integer', '当前已成熟的最大 horizon；尚无完整 T 日行情时为 -1。', { enum: [-1, 0, 1, 2, 3] }),
  f(`${prefix}.registration_status`, 'string', '登记生命周期状态。', { enum: ['pending', 'tracking', 'finalized', 'degraded'] }),
  f(`${prefix}.calculation_version`, 'string', '计算规则版本。'),
  f(`${prefix}.finalized_at`, 'string(date-time) | null', 'T+3 成熟并冻结的时间。'),
]

const timelineProjectionFields = [
  f('data.source_types', 'string[]', '归一化并排序后的实际来源集合。'),
  f('data.items[].performance_summary', 'object | null', '业绩来源的日级摘要；其他来源为 null。'),
  f('data.items[].performance_summary.report', 'string', '可用于恢复业绩页的规范报告期。'),
  f('data.items[].performance_summary.event_date', 'string(date)', '公告映射后的行情事件日 T。'),
  f('data.items[].performance_summary.threshold', 'number', 'T 日绝对涨跌幅严格比较阈值，当前为 8。'),
  f('data.items[].performance_summary.stocks', 'object[]', '按股票去重的命中摘要。'),
  f('data.items[].performance_summary.stocks[].ts_code', 'string', '标准股票代码。'),
  f('data.items[].performance_summary.stocks[].stock_name', 'string | null', '股票名称。'),
  f('data.items[].performance_summary.stocks[].pct_chg', 'number | null', 'T 日自身涨跌幅。'),
  f('data.items[].performance_summary.stocks[].limit_status', 'integer', 'T 日涨跌停状态。', { enum: [-1, 0, 1, 2] }),
  f('data.items[].performance_summary.stocks[].limit_description', 'string', '统一涨跌停描述。'),
  f('data.items[].performance_summary.stocks[].forecast_type', 'string', '主业绩记录类型。', { enum: ['preview', 'express', 'notice'] }),
  f('data.items[].performance_summary.stocks[].performance_type', 'string | null', '主业绩表现类型。'),
  f('data.items[].performance_summary.stocks[].related_types', 'string[]', '同股同 T 信息链涉及的公告类型。'),
  f('data.items[].performance_summary.stocks[].hit_reasons', 'string[]', '可并存的 T 日命中事实。', { enum: ['absolute_change', 'limit_up', 'limit_down', 'failed_limit'] }),
  f('data.items[].performance_summary.stocks[].source_id', 'string', '主业绩源记录稳定序号。'),
  f('data.items[].performance_summary.stocks[].premium_registration', 'object | null', '该业绩事件与股票的轻量溢价登记。'),
  ...premiumRegistrationFields('data.items[].performance_summary.stocks[].premium_registration'),
  f('data.items[].supervision_event', 'object | null', '监管来源的生命周期事件；其他来源为 null。'),
  f('data.items[].supervision_event.event_kind', 'string', '监管事件类型。', { enum: ['entry', 'reentry', 'suspend', 'resume', 'exit'] }),
  f('data.items[].supervision_event.event_label', 'string', '监管事件中文标签。'),
  f('data.items[].supervision_event.ts_code', 'string', '标准股票代码。'),
  f('data.items[].supervision_event.stock_name', 'string | null', '股票名称。'),
  f('data.items[].supervision_event.target_date', 'string(date)', '该监管事件的 T 日。'),
  f('data.items[].supervision_event.cycle_start_date', 'string(date)', '所属监管周期锚点日期。'),
  f('data.items[].supervision_event.attitude_score', 'integer | null', '监管态度评分。'),
  f('data.items[].supervision_event.attitude_label', 'string | null', '监管态度标签。'),
  f('data.items[].supervision_event.reason_codes', 'string[]', '监管态度原因代码。'),
  f('data.items[].supervision_event.premium_registration', 'object | null', '该监管事件的轻量溢价登记。'),
  ...premiumRegistrationFields('data.items[].supervision_event.premium_registration'),
]

export async function buildResponseContracts() {
  const marketModel = await readFile(path.join(repositoryRoot, 'finagent_backend', 'models', 'market_data.py'), 'utf8')
  const dailyColumns = pythonColumns(marketModel, 'MarketDataDaily')
  const monthlyColumns = pythonColumns(marketModel, 'MarketDataMonthly')
  const volumeColumns = pythonColumns(marketModel, 'MarketVolumeTrend')

  const contracts = {
    onclaw_get_limit_ladder_window: { evidence: evidence(403, 'Harness 组合契约 + limit_info service + Snapshot v2 module'), shape: 'Host 组合对象（Window + 可选 Runtime）', fields: snapshotWindowFields, tables: [table('data.window.table', snapshotColumns), table('data.runtime.table', snapshotColumns.filter((item) => item.name !== 'trade_date'), '可选实时差量表；只在 `include_runtime` 下出现。')] },
    onclaw_get_performance_premium_window: { evidence: evidence(200, '实时样本 + FinancialPerformanceModule'), shape: '对象', fields: [f('data.report','string','规范报告期。'),f('data.event_date','string(date)','公告行情事件日。'),f('data.horizons','integer[]','已归一化、升序去重的 T+n。'),f('data.trading_dates','string(date)[]','从事件日起用于计算的交易日序列。'),f('data.events','object[]','逐公告溢价事件。'),f('data.events[].announcement','object','公告预览字段，见公告表列。'),f('data.events[].ts_code','string','标准股票代码。'),f('data.events[].base_close','number | null','T+0 基准收盘价。'),f('data.events[].premium','object[]','各 horizon 的价格与溢价。'),f('data.events[].premium[].horizon','integer','T+n 偏移。'),f('data.events[].premium[].trade_date','string(date) | null','目标交易日。'),f('data.events[].premium[].close','number | null','目标收盘价。'),f('data.events[].premium[].premium_pct','number | null','相对基准收盘价的百分比溢价。'),f('data.coverage','object','公告与定价覆盖统计。'),f('data.coverage.announcement_count','integer','纳入公告数。'),f('data.coverage.priced_count','integer','取得基准价的事件数。')], tables: [table('data.events[].announcement（逻辑记录，服务先从公告表还原为对象）', announcementColumns)] },
    onclaw_get_stock_market_window: { evidence: evidence(403, 'Harness 组合契约 + market snapshot service + Snapshot v2 module'), shape: 'Host 组合对象（Window + 可选 Runtime）', fields: snapshotWindowFields, tables: [table('data.window.table', snapshotColumns), table('data.runtime.table', snapshotColumns.filter((item) => item.name !== 'trade_date'), '可选实时差量表；只在 `include_runtime` 下出现。')] },
    onclaw_get_performance_reports: { evidence: evidence(200, '实时样本 + FinancialPerformanceRepository.list_reports'), shape: '对象', fields: [f('data.default_report','string | null','默认最新报告期。'),f('data.retention_limit','integer','保留报告期数量；当前为 5。'),f('data.items','object[]','报告期目录。'),f('data.items[].value','string','规范报告期 `YYYY-0Q`。'),f('data.items[].label','string','中文季度标签。'),f('data.items[].report_year','integer','报告年度。'),f('data.items[].report_quarter','integer','季度。',{enum:[1,2,3,4]}),f('data.items[].period_end','string(date)','报告期截止日。'),f('data.items[].row_count','integer','该报告期公告数。'),f('data.items[].announce_date_min','string(date)','最早公告自然日。'),f('data.items[].announce_date_max','string(date)','最晚公告自然日。'),f('data.items[].is_latest','boolean','是否最新保留报告期。')] },
    onclaw_get_performance_announcement_dates: { evidence: evidence(200, '实时样本 + FinancialPerformanceRepository.list_announcement_dates'), shape: '对象', fields: [f('data.report','string','规范报告期。'),f('data.default_event_date','string(date) | null','默认事件日。'),f('data.default_announcement_date','string(date) | null','兼容字段；当前与默认事件日相同。'),f('data.items','object[]','可用事件日。'),f('data.items[].date','string(date)','公告对应行情事件日。'),f('data.items[].count','integer','该事件日公告数。')] },
    onclaw_get_performance_announcements: { evidence: evidence(200, '实时样本 + FinancialPerformanceRepository.ANNOUNCEMENT_PREVIEW_FIELDS'), shape: '对象 + 嵌套表', fields: [f('data.report','string','规范报告期。'),f('data.announcement_date','string(date) | null','按自然日查询时的日期；本接口驱动使用事件日，因此通常为 null。'),f('data.event_date','string(date) | null','按事件日查询时的日期。'),f('data.table','TableData','公告预览表。')], tables: [table('data.table', announcementColumns)] },
    onclaw_get_ladder_stock_context: { evidence: evidence(403, 'LimitInfoStockPopupContext Pydantic 响应模型 + 前端消费类型'), shape: '嵌套对象', fields: [f('data.stock','object','股票身份。'),f('data.stock.ts_code','string','标准股票代码。'),f('data.stock.name','string | null','股票名称。'),f('data.anchor_date','string(date)','上下文锚定日期。'),f('data.abnormal_movements','object[]','锚日前后异动。'),f('data.abnormal_movements[].trade_date','string(date)','异动交易日。'),f('data.abnormal_movements[].movement_type','string | null','异动类型。'),f('data.abnormal_movements[].title','string | null','标题。'),f('data.abnormal_movements[].content','string | null','内容。'),f('data.abnormal_movements[].keywords','array','关键词。'),f('data.announcements','object[]','公告事件。'),f('data.announcements[].event_id','integer','事件 ID。'),f('data.announcements[].event_date','string(date)','事件日。'),f('data.announcements[].cate','string','事件分类。'),f('data.announcements[].title','string | null','标题。'),f('data.announcements[].content','string | null','内容。'),f('data.announcements[].sentiment','integer','情感值。'),f('data.announcements[].notice_seq','string | null','公告序号。'),f('data.klines','object[]','日 K 线。'),...['open','high','low','close','pre_close','pct_chg','volume','amount'].map((name)=>f(`data.klines[].${name}`,'number | null',name==='volume'?'成交量，单位手。':name==='amount'?'成交额，单位千元。':'K 线数值。')),f('data.klines[].trade_date','string(date)','K 线交易日。'),f('data.section_status','object','各区块状态。'),...['abnormal_movements','announcements','klines'].map((name)=>f(`data.section_status.${name}`,'string','区块状态。',{enum:['ok','empty','unavailable']}))] },
    onclaw_get_market_daily: { evidence: evidence(200, '实时样本 + MarketDataRepository._table_payload + MarketDataDaily 下发列'), shape: '顶层表', fields: [f('data','TableData','日频二维表；指定 `fields` 时只返回所选字段，未指定时返回下列所有公开列。')], tables: [table('data', dailyColumns)] },
    onclaw_get_market_monthly: { evidence: evidence(200, '实时样本 + MarketDataRepository._table_payload + MarketDataMonthly 下发列'), shape: '顶层表', fields: [f('data','TableData','月频二维表；指定 `fields` 时只返回所选字段，未指定时返回下列所有公开列。')], tables: [table('data', monthlyColumns)] },
    onclaw_get_market_volume_trends: { evidence: evidence(200, '实时样本 + MarketDataRepository._row_to_dict + MarketVolumeTrend'), shape: '对象', fields: volumeColumns.map((item)=>f(`data.${item.name}`,item.type,item.description)) },
    onclaw_get_market_runtime: { evidence: evidence(200, '实时样本 + MarketDataRuntimePayload + MarketDataModule.get_realtime_runtime'), shape: '运行态对象', fields: [f('data.mode','string','市场运行模式。',{enum:['static-only','realtime-active','midday-static','closing','final-drain','static-ready']}),f('data.market_date','string(date)','市场日期。'),f('data.market_time','string(time)','市场时间。'),f('data.recommended_refetch_ms','integer','建议刷新间隔。'),f('data.daily','object','当前日频字段对象；不含 `sentiment_score`、`limit_up_count`、`large_drawdown_count`。'),f('data.volume_trend','object','当前成交趋势对象，字段同成交趋势接口。'),f('data.sources','record<string,object>','distribution、mood、volume_trend 等来源健康状态。'),f('data.sources.*.status','string','来源状态。'),f('data.sources.*.incident_id','string | null','事故 ID。'),f('data.sources.*.consecutive_failures','integer','连续失败次数。'),...['first_failed_at','last_failed_at','last_success_at','last_source_update_time','last_alert_at','next_probe_at'].map((name)=>f(`data.sources.*.${name}`,'string(date-time) | null','来源健康时间戳。')),f('data.sources.*.last_error_type','string | null','最后错误类型。'),f('data.sources.*.last_error_summary','string | null','最后错误摘要。'),f('data.sources.*.failed_chart_keys','string[]','失败图表键。'),f('data.excluded_live_fields','string[]','明确不作为实时字段下发的字段名。'),f('data.runtime_enabled','boolean','实时聚合是否启用。')], tables: [table('data.daily（对象字段目录，不是 columns/rows）', dailyColumns.filter((item)=>!['sentiment_score','limit_up_count','large_drawdown_count'].includes(item.name))),table('data.volume_trend（对象字段目录）', volumeColumns)] },
    onclaw_get_board_sentiment_window: { evidence: evidence(200, '实时样本 + BoardSentimentWindowPayload Pydantic 模型'), shape: '嵌套对象', fields: [f('data.start_date','string(date) | null','窗口首日。'),f('data.end_date','string(date)','请求解析后的结束日。'),f('data.latest_date','string(date) | null','最新有效数据日。'),f('data.has_older','boolean','是否存在更早数据。'),f('data.runtime_mode','string','市场运行模式。'),f('data.recommended_refetch_ms','integer','建议刷新间隔。'),f('data.items','object[]','按交易日升序的情绪点。'),f('data.items[].trade_date','string(date)','交易日。'),...['height','second_height','limit_down_depth'].flatMap((name)=>[f(`data.items[].${name}.value`,'integer | null','高度或深度值。'),f(`data.items[].${name}.stocks`,'object[]','命中股票，每项含 `ts_code`、`stock_name`。')]),f('data.items[].pressure.value','integer | null','压力高度。'),f('data.items[].pressure.stocks','object[]','压力高度股票。'),f('data.items[].pressure.origin_date','string(date) | null','压力高度来源日期。'),f('data.items[].preview_stocks','object[]','预览股票，每项含 `ts_code`、`stock_name`。'),f('data.items[].data_state','string','完整性状态。',{enum:['complete','partial']})] },
    onclaw_get_limit_info_dates: { evidence: evidence(403, 'LimitInfoModule.get_available_dates + BaseResponse[List[date]]'), shape: '日期数组', fields: [f('data','string(date)[]','可用涨跌停数据日期，按后端顺序返回。')] },
    onclaw_get_active_supervision: { evidence: evidence(401, 'SuperviseRepository.get_active_supervision + SuperviseInfo.to_dict'), shape: '顶层表', fields: [f('data','TableData','当前仍有效的监管记录表。')], tables: [table('data', supervisionColumns)] },
    onclaw_get_supervision_history: { evidence: evidence(401, 'SuperviseRepository.get_historical_supervision_page + SuperviseInfo.to_dict'), shape: '分页对象', fields: paginationFields('SupervisionItem'), tables: [table('data.items[]（逻辑记录，不是 columns/rows）', supervisionColumns)] },
    onclaw_get_supervision_lines: { evidence: evidence(401, 'SuperviseRepository.get_supervise_lines + SuperviseLine.to_dict'), shape: '顶层表', fields: [f('data','TableData','指定日期监管价格线表。')], tables: [table('data', superviseLineColumns)] },
    onclaw_get_supervision_line_history: { evidence: evidence(401, 'SuperviseRepository.get_supervise_line_history_page + SuperviseLine.to_dict'), shape: '分页对象', fields: paginationFields('SuperviseLineItem'), tables: [table('data.items[]（逻辑记录，不是 columns/rows）', superviseLineColumns)] },
    onclaw_get_market_timeline: { evidence: evidence(401, 'TimelineModule.read_unified + TimelineEventProjection + EventPremiumRegistration.to_dict'), shape: '四来源分页式对象', fields: [f('data.total','integer','范围内总事件数。'),f('data.items','object[]','四类来源统一排序后最多 `limit` 条事件。'),...['timeline_key','article_id','source_id'].map((name)=>f(`data.items[].${name}`,'string','稳定来源标识。')),f('data.items[].source_type','string','来源类型。',{enum:['topic','article','performance','supervision']}),f('data.items[].topic_id','string | null','题材 ID。'),f('data.items[].event_id','string | null','业绩/监管投影的稳定事件键；旧来源可为 null。'),f('data.items[].title','string | null','标题。'),f('data.items[].content','string | null','内容。'),f('data.items[].create_time','string(date-time) | null','创建时间。'),f('data.items[].date','string(date)','事件日期；业绩/监管始终保持为各自 T 日。'),f('data.items[].theme_list','string[]','题材名称列表。'),f('data.items[].topic_stock_highlights','object[]','题材事件的近期活跃股票摘要。'),f('data.items[].topic_stock_highlights[].ts_code','string','股票代码。'),f('data.items[].topic_stock_highlights[].name','string','股票名称。'),f('data.items[].topic_stock_highlights[].recent_multi_board','boolean','近期是否多板。'),f('data.items[].topic_stock_highlights[].limit_event_type','string | null','近期涨跌停类型。',{enum:['multi_board','first_board','limit_up','failed_limit','limit_down']}),f('data.items[].topic_stock_highlights[].max_board_height','integer','最高连板高度。'),f('data.items[].topic_stock_highlights[].has_convertible','boolean','是否有有效转债。'),f('data.items[].topic_stock_highlights[].free_mv','number | null','流通市值。'),f('data.items[].topic_stock_highlights[].cb_remain_size','number | null','转债剩余规模。'),...timelineProjectionFields,f('data.stock_window_dates','string(date)[]','用于题材活跃摘要的最近交易日。')] },
    onclaw_get_topic_names_by_stocks: { evidence: evidence(401, 'TopicModule.get_topic_names_by_stocks_batch'), shape: '动态键映射', fields: [f('data','record<string,TopicNameItem[]>','键是原始输入股票标识；每个输入都保留，即使结果为空。'),f('data.*[].name','string','题材名称。'),f('data.*[].category','string','由题材映射表补充的类别；未命中时为空字符串。')] },
    onclaw_get_topic_market_info: { evidence: evidence(403, 'market_service.StockInfoReq + MARKET_STOCK_INFO_FIELDS + TableData metadata'), shape: '顶层表', fields: [f('data','TableData','所选行情字段表。'),f('data.metadata.requested_stock_codes','string[]','标准化后的请求股票。'),f('data.metadata.missing_codes','string[]','未返回行情的股票。'),f('data.metadata.as_of_trade_date','string(date) | null','结果中最新聚合行情日。'),f('data.metadata.cache_hit','boolean','是否没有缺失代码。'),f('data.metadata.degraded','boolean','是否存在缺失代码。'),f('data.metadata.warnings','string[]','部分缺失等警告。')], tables: [table('data', marketInfoColumns,'实际列严格等于请求 `fields`；省略时使用服务默认字段。')] },
    onclaw_search_topics: { evidence: evidence(401, 'Topic.to_light_dict + TopicRepository.search + TopicModule._enrich_topic'), shape: '对象列表（非表）', fields: [f('data.total','integer','匹配题材总数。'),f('data.items','object[]','分页题材摘要。'),...['id','topic_id','theme_id'].map((name)=>f(`data.items[].${name}`,'string','同一题材的兼容 ID 别名。')),...['name','topic_name','theme_title'].map((name)=>f(`data.items[].${name}`,'string','同一题材的兼容名称别名。')),f('data.items[].category','string','题材类别。'),f('data.items[].stock_count','integer','关联股票数。'),f('data.items[].stocks_preview','object[]','股票预览，常含 `code`、`name`、`score`。'),f('data.items[].latest_date','string(date|month) | null','最新规范事件日期。'),f('data.items[].updated_at','string(date-time) | null','更新时间。'),f('data.items[].events','object[]','规范事件数组。'),f('data.items[].anchor_event','object | null','锚定事件。'),f('data.items[].events_schema_version','integer','事件 Schema 版本。'),f('data.items[].structure_version','string | null','题材结构版本。'),f('data.items[].structure_updated_at','string(date-time) | null','结构更新时间。'),f('data.items[].has_structure_tree','boolean','是否同时存在结构树和 YAML。'),f('data.items[].governance_status','string','治理状态。'),...topicEventFields.map((item)=>({...item,path:`data.items[].${item.path}`}))] },
    onclaw_get_topic_info: { evidence: evidence(401, 'Topic.to_detail_dict + build_topic_info_bundle + 前端 TopicInfoBundle'), shape: 'Topic Bundle（递归树，非 DataFrame）', fields: [f('data.topic','object','题材元信息与事件。'),f('data.topic.topic_id','string','题材 ID。'),f('data.topic.topic_name','string','题材名称。'),f('data.topic.category','string','题材类别。'),f('data.topic.events','object[]','规范事件。'),f('data.topic.anchor_event','object | null','锚定事件。'),f('data.topic.events_schema_version','integer','事件 Schema 版本。'),f('data.topic.updated_at','string(date-time) | null','更新时间。'),f('data.topic.latest_date','string(date|month) | null','最新事件日期。'),f('data.topic.structure_version','string | null','结构版本。'),f('data.topic.structure_updated_at','string(date-time) | null','结构更新时间。'),f('data.topic.governance_status','string | null','治理状态。'),f('data.counts','object','结构计数。'),f('data.counts.tree_nodes','integer','树节点数。'),f('data.counts.stock_occurrences','integer','股票出现次数。'),f('data.counts.unique_stocks','integer','去重股票数。'),f('data.tree','TopicTreeNode[]','递归树根节点数组；必须原样保留。'),f('data.tree[].id','string','树节点 ID。'),f('data.tree[].type','string','节点类型。',{enum:['branch','stock']}),f('data.tree[].name','string','节点名称。'),f('data.tree[].stock_count','integer','节点下股票数。'),f('data.tree[].occurrence_id','string | null','股票节点对应 occurrence。'),f('data.tree[].ts_code','string | null','股票节点代码。'),f('data.tree[].children','TopicTreeNode[]','递归子节点。'),f('data.stock_occurrences','object[]','股票在树中的规范出现记录。'),...['occurrence_id','topic_id','topic_name','ts_code','code','name','category','theme_category','parent_path_text','description','relevance_type','relevance_description','match_source','source'].map((name)=>f(`data.stock_occurrences[].${name}`,'string','股票出现记录字段。')),f('data.stock_occurrences[].node_id','string | null','匹配的树节点 ID。'),f('data.stock_occurrences[].direct_parent_node_id','string | null','直接父节点 ID。'),f('data.stock_occurrences[].direct_parent_name','string | null','直接父节点名称。'),f('data.stock_occurrences[].structure_version','string | null','结构版本。'),f('data.stock_occurrences[].relevance_score','string | number | null','相关性分数。'),f('data.stock_occurrences[].parent_path','string[]','完整父路径。'),f('data.stock_occurrences[].ancestor_node_ids','string[]','祖先节点 ID。'),f('data.stock_occurrences[].ancestor_names','string[]','祖先名称。'),f('data.stock_occurrences[].path_depth','integer','路径深度。'),f('data.stock_occurrences[].tree_order','integer | null','树内顺序。'),f('data.stock_occurrences[].is_placed','boolean','是否已放置到树。'),f('data.stock_occurrences[].source_image_ids','string[]','来源图片 ID。'),f('data.unique_stock_codes','string[]','去重股票代码。'),f('data.unplaced_occurrence_ids','string[]','未放入树的 occurrence ID。'),...topicEventFields.map((item)=>({...item,path:`data.topic.${item.path}`}))] },
    onclaw_get_us_abnormal_movement_dates: { evidence: evidence(200, '实时样本 + UsAbnormalMovementRepository.list_trade_dates'), shape: '对象', fields: [f('data.default_trade_date','string(date) | null','默认最新交易日。'),f('data.items','object[]','可用日期。'),f('data.items[].date','string(date)','交易日。'),f('data.items[].count','integer','当日异动记录数。')] },
    onclaw_get_us_abnormal_movements: { evidence: evidence(200, '实时样本 + UsAbnormalMovementRepository.READ_FIELDS'), shape: '对象 + 嵌套表', fields: [f('data.trade_date','string(date)','请求交易日。'),f('data.table','TableData','当日美股异动明细。')], tables: [table('data.table',[c('collection_date','string(date)','实际采集自然日。'),c('trade_date','string(date)','映射到的 A 股交易日。'),c('mg_name','string | null','美股名称。'),c('mg_code','string','美股代码。'),c('mg_zf','string | null','上游原始涨跌幅。'),c('market_cap_yi','number | null','美股总市值，单位亿元。'),c('anomaly_analysis','string | null','清理免责声明后的异动分析。'),c('relation_names','string | null','清理并以逗号分隔的关联 A 股名称。'),c('source','string','数据源。')])] },
  }

  return { envelope, contracts }
}
