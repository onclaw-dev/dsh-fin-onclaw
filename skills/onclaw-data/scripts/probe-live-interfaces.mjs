import assert from 'node:assert/strict'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import path from 'node:path'

const packageRoot = path.resolve(import.meta.dirname, '..')
const repositoryRoot = path.resolve(packageRoot, '..', '..', '..', '..')
const harnessModulePath = path.join(repositoryRoot, 'fiagent_frontend', 'dsh-fin-onclaw', 'lib', 'index.js')
const outputPath = path.join(packageRoot, 'references', 'live-probe-report.json')
const origin = (process.env.ONCLAW_PROBE_ORIGIN || 'https://onclaw.cc').replace(/\/$/, '')
const checkOnly = process.argv.includes('--check')

if (checkOnly) {
  const report = JSON.parse(await readFile(outputPath, 'utf8'))
  assert.equal(report.schemaVersion, 1)
  assert.equal(report.results.length, 24)
  assert.equal(new Set(report.results.map((entry) => entry.name)).size, 24)
  assert.ok(report.results.every((entry) => entry.request?.method && entry.request?.path && entry.response?.status))
  console.log('Verified structure-only live probe report for 24 interfaces.')
  process.exit(0)
}

const overrides = {
  onclaw_get_limit_ladder_window: {
    base_date: '2026-08-27', start_date: '2026-08-26', end_date: '2026-08-27', group: 'continue_board',
  },
  onclaw_get_performance_premium_window: {
    report: '2026-02', event_date: '2026-08-27', horizons: [1], max_events: 1,
  },
  onclaw_get_stock_market_window: {
    stock_codes: ['000001.SZ'], base_date: '2026-08-27', start_date: '2026-08-26', end_date: '2026-08-27',
  },
  onclaw_get_performance_announcement_dates: { report: '2026-02' },
  onclaw_get_performance_announcements: { report: '2026-02', event_date: '2026-08-27' },
  onclaw_get_ladder_stock_context: { ts_code: '000001.SZ', anchor_date: '2026-08-27', kline_limit: 5, announcement_limit: 5 },
  onclaw_get_market_daily: { window_size: 2 },
  onclaw_get_market_monthly: { window_size: 2 },
  onclaw_get_board_sentiment_window: { window_size: 2 },
  onclaw_get_supervision_history: { limit: 1 },
  onclaw_get_supervision_line_history: { limit: 1 },
  onclaw_get_market_timeline: { start_date: '2026-08-26', end_date: '2026-08-27', limit: 1 },
  onclaw_get_topic_names_by_stocks: { stocks: ['000001.SZ'] },
  onclaw_get_topic_market_info: { codes: ['000001.SZ'] },
  onclaw_search_topics: { keyword: '机器人', limit: 1 },
  onclaw_get_topic_info: { topic_id: 'placeholder' },
  onclaw_get_us_abnormal_movement_dates: { limit: 1 },
  onclaw_get_us_abnormal_movements: { trade_date: '2026-08-27' },
}

function mergeShapes(left, right) {
  if (left === undefined) return right
  if (right === undefined) return left
  if (JSON.stringify(left) === JSON.stringify(right)) return left
  const leftTypes = Array.isArray(left?.type) ? left.type : [left?.type]
  const rightTypes = Array.isArray(right?.type) ? right.type : [right?.type]
  return { type: [...new Set([...leftTypes, ...rightTypes].filter(Boolean))].sort() }
}

function inferShape(value, depth = 0) {
  if (value === null) return { type: 'null' }
  if (Array.isArray(value)) {
    let items
    for (const item of value.slice(0, 20)) items = mergeShapes(items, inferShape(item, depth + 1))
    return { type: 'array', items: items ?? {} }
  }
  if (typeof value === 'object') {
    if (depth > 8) return { type: 'object' }
    return {
      type: 'object',
      properties: Object.fromEntries(Object.entries(value).map(([key, child]) => [key, inferShape(child, depth + 1)])),
    }
  }
  if (typeof value === 'number') return { type: Number.isInteger(value) ? 'integer' : 'number' }
  return { type: typeof value }
}

function buildUrl(request) {
  const url = new URL(request.path, `${origin}/`)
  for (const [key, value] of Object.entries(request.params ?? {})) {
    if (value !== undefined && value !== null && value !== '') url.searchParams.set(key, String(value))
  }
  return url
}

const requests = []
const runtime = {
  request: async (request) => {
    requests.push(structuredClone(request))
    return { status: 200, payload: { code: 200, msg: 'capture-only', data: {} } }
  },
  getLimitLadderWindow: async (input) => {
    requests.push({
      method: 'POST',
      path: '/limit_info/snapshot/window',
      data: {
        base_date: input.base_date,
        start_date: input.start_date,
        end_date: input.end_date,
        group: input.group,
        stock_scope: input.stock_scope,
        limit_events: input.limit_events,
        convertible: input.convertible,
        cursor: 0,
        size: 2,
      },
    })
    return { code: 200, msg: 'capture-only', data: {} }
  },
  getPerformancePremiumWindow: async (input) => {
    requests.push({
      method: 'GET',
      path: '/financial-performance/premium-window',
      params: {
        report: input.report,
        event_date: input.event_date,
        forecast_types: input.forecast_types.join(','),
        performance_types: input.performance_types.join(','),
        horizons: input.horizons.join(','),
        max_events: input.max_events,
      },
    })
    return { code: 200, msg: 'capture-only', data: {} }
  },
  getStockMarketWindow: async (input) => {
    requests.push({
      method: 'POST',
      path: '/market/snapshot/window',
      data: {
        base_date: input.base_date,
        start_date: input.start_date,
        end_date: input.end_date,
        group: 'default',
        stock_scope: input.stock_codes,
        cursor: 0,
        size: 2,
      },
    })
    return { code: 200, msg: 'capture-only', data: {} }
  },
}
const hostModule = await import(pathToFileURL(harnessModulePath).href)
const definitions = hostModule.createOnclawBusinessTools(runtime)
assert.equal(definitions.length, 24)

const results = []
for (const definition of definitions) {
  requests.length = 0
  await definition.execute(overrides[definition.name] ?? {}, { signal: AbortSignal.timeout(15_000) })
  assert.equal(requests.length, 1, `${definition.name} must resolve to one settled probe request`)
  const request = requests[0]
  const url = buildUrl(request)
  const response = await fetch(url, {
    method: request.method,
    headers: { accept: 'application/json', ...(request.data === undefined ? {} : { 'content-type': 'application/json' }) },
    body: request.data === undefined ? undefined : JSON.stringify(request.data),
    signal: AbortSignal.timeout(15_000),
  })
  const text = await response.text()
  let payload
  try { payload = JSON.parse(text) } catch { payload = { nonJsonBody: text.slice(0, 200) } }
  results.push({
    name: definition.name,
    request: { method: request.method, path: request.path, params: request.params ?? {}, data: request.data ?? null },
    response: {
      status: response.status,
      contentType: response.headers.get('content-type'),
      contentEncoding: response.headers.get('content-encoding'),
      contentLength: response.headers.get('content-length'),
      shape: inferShape(payload),
    },
  })
  console.log(`${definition.name}: HTTP ${response.status}`)
}

await mkdir(path.dirname(outputPath), { recursive: true })
await writeFile(outputPath, `${JSON.stringify({ schemaVersion: 1, origin, results }, null, 2)}\n`, 'utf8')
console.log(`Wrote structure-only probe report for ${results.length} interfaces.`)
