import { createRequire } from "node:module";
import { existsSync, realpathSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
//#region src/harness/host/auth-vault.ts
const ONCLAW_ACCESS_TOKEN = "ONCLAW_ACCESS_TOKEN";
const LEGACY_ACCESS_TOKEN = "FINAGENT_ACCESS_TOKEN";
var SessionAuthVault = class {
	credentials;
	#token;
	#generation = 0;
	#principalId = "anonymous";
	#listeners = /* @__PURE__ */ new Set();
	#mutation = Promise.resolve();
	constructor(credentials) {
		this.credentials = credentials;
	}
	get token() {
		return this.#token;
	}
	get generation() {
		return this.#generation;
	}
	get identity() {
		return {
			generation: this.#generation,
			principalId: this.#principalId
		};
	}
	onIdentityChange(listener) {
		this.#listeners.add(listener);
		return () => this.#listeners.delete(listener);
	}
	async restore() {
		await this.#enqueue(async () => {
			const resolved = await this.credentials?.resolve(ONCLAW_ACCESS_TOKEN);
			if (resolved?.value) {
				this.#token = resolved.value;
				this.#advance();
				return;
			}
			const legacy = await this.credentials?.resolve(LEGACY_ACCESS_TOKEN);
			this.#token = legacy?.value;
			if (legacy?.value) this.#advance();
			if (!legacy?.value || !this.credentials) return;
			await this.credentials.set(ONCLAW_ACCESS_TOKEN, legacy.value);
			await this.credentials.unset(LEGACY_ACCESS_TOKEN);
		});
	}
	async resolve() {
		await this.#mutation;
		const resolved = await this.credentials?.resolve(ONCLAW_ACCESS_TOKEN);
		return this.credentials ? resolved?.value : this.#token;
	}
	async capture(token, userInfo) {
		if (!token || token.length > 8192) throw new Error("Invalid authentication token");
		await this.#enqueue(async () => {
			await this.credentials?.set(ONCLAW_ACCESS_TOKEN, token);
			this.#token = token;
			this.#updatePrincipal(userInfo);
			this.#advance();
		});
	}
	updatePrincipal(userInfo) {
		const before = this.#principalId;
		this.#updatePrincipal(userInfo);
		if (this.#principalId !== before) this.#advance();
	}
	async clear() {
		this.#token = void 0;
		await this.#enqueue(async () => {
			await this.credentials?.unset(ONCLAW_ACCESS_TOKEN);
			await this.credentials?.unset(LEGACY_ACCESS_TOKEN);
			this.#token = void 0;
			this.#principalId = "anonymous";
			this.#advance();
		});
	}
	#enqueue(operation) {
		const next = this.#mutation.then(operation, operation);
		this.#mutation = next.catch(() => void 0);
		return next;
	}
	#updatePrincipal(userInfo) {
		if (!userInfo) return;
		if (userInfo.id != null) this.#principalId = String(userInfo.id);
	}
	#advance() {
		this.#generation += 1;
		for (const listener of this.#listeners) listener();
	}
};
//#endregion
//#region src/harness/contracts.ts
const HARNESS_OPERATIONS = [
	{
		id: "auth.legalDocuments",
		method: "GET",
		path: /^\/auth\/legal-documents$/,
		public: true
	},
	{
		id: "auth.login",
		method: "POST",
		path: /^\/auth\/login$/,
		public: true,
		capturesCredential: true
	},
	{
		id: "auth.register",
		method: "POST",
		path: /^\/auth\/register$/,
		public: true,
		capturesCredential: true
	},
	{
		id: "auth.passwordReset",
		method: "POST",
		path: /^\/auth\/password\/reset$/,
		public: true,
		clearsCredential: true
	},
	{
		id: "auth.me",
		method: "GET",
		path: /^\/auth\/me$/
	},
	{
		id: "auth.accessSummary",
		method: "GET",
		path: /^\/auth\/me\/access-summary$/
	},
	{
		id: "auth.apiTokenStatus",
		method: "GET",
		path: /^\/auth\/me\/api-token$/
	},
	{
		id: "auth.apiTokenReveal",
		method: "POST",
		path: /^\/auth\/me\/api-token\/reveal$/
	},
	{
		id: "auth.apiTokenRegenerate",
		method: "POST",
		path: /^\/auth\/me\/api-token\/regenerate$/
	},
	{
		id: "auth.snapshotSettings",
		method: "PUT",
		path: /^\/auth\/me\/snapshot-preview-settings\/(ladder|lightweight)$/
	},
	{
		id: "auth.baseAddrs",
		method: "GET",
		path: /^\/auth\/base-addrs$/
	},
	{
		id: "performance.reports",
		method: "GET",
		path: /^\/financial-performance\/reports$/
	},
	{
		id: "performance.dates",
		method: "GET",
		path: /^\/financial-performance\/announcement-dates$/
	},
	{
		id: "performance.announcements",
		method: "GET",
		path: /^\/financial-performance\/announcements$/
	},
	{
		id: "performance.premiumWindow",
		method: "GET",
		path: /^\/financial-performance\/premium-window$/
	},
	{
		id: "ladder.stockContext",
		method: "POST",
		path: /^\/limit_info\/stock-popup\/context$/
	},
	{
		id: "market.daily",
		method: "GET",
		path: /^\/market\/snapshot\/daily-stat$/
	},
	{
		id: "market.dailyRuntime",
		method: "GET",
		path: /^\/market\/snapshot\/runtime\/daily-stat$/
	},
	{
		id: "market.volumeTrends",
		method: "GET",
		path: /^\/market\/snapshot\/daily-stat\/turnover$/
	},
	{
		id: "market.boardSentiment",
		method: "GET",
		path: /^\/market\/daily-stat\/index-window$/
	},
	{
		id: "payment.create",
		method: "POST",
		path: /^\/payment\/create$/
	},
	{
		id: "payment.check",
		method: "GET",
		path: /^\/payment\/check\/[A-Za-z0-9_-]+$/
	},
	{
		id: "snapshot.dates",
		method: "GET",
		path: /^\/limit_info\/dates$/
	},
	{
		id: "snapshot.window",
		method: "POST",
		path: /^\/market\/snapshot\/window$/
	},
	{
		id: "snapshot.runtime",
		method: "GET",
		path: /^\/market\/snapshot\/runtime$/
	},
	{
		id: "snapshot.runtimeSelect",
		method: "POST",
		path: /^\/market\/snapshot\/runtime$/
	},
	{
		id: "snapshot.runtimeMiniCurveSelect",
		method: "POST",
		path: /^\/market\/snapshot\/runtime\/mini-curves$/
	},
	{
		id: "snapshot.limitInfoWindow",
		method: "POST",
		path: /^\/limit_info\/snapshot\/window$/
	},
	{
		id: "supervision.active",
		method: "GET",
		path: /^\/supervise\/active$/
	},
	{
		id: "supervision.history",
		method: "GET",
		path: /^\/supervise\/history$/
	},
	{
		id: "supervision.lines",
		method: "GET",
		path: /^\/supervise\/lines$/
	},
	{
		id: "supervision.lineHistory",
		method: "GET",
		path: /^\/supervise\/lines\/history$/
	},
	{
		id: "customIndex.definitions",
		method: "GET",
		path: /^\/market\/custom-index\/definitions$/
	},
	{
		id: "customIndex.myDefinitions",
		method: "GET",
		path: /^\/market\/custom-index\/management\/definitions$/
	},
	{
		id: "customIndex.createDefinition",
		method: "POST",
		path: /^\/market\/custom-index\/management\/definitions$/
	},
	{
		id: "customIndex.updateDefinition",
		method: "PUT",
		path: /^\/market\/custom-index\/management\/[A-Za-z0-9_-]+$/
	},
	{
		id: "customIndex.preview",
		method: "POST",
		path: /^\/market\/custom-index\/management\/[A-Za-z0-9_-]+\/preview$/
	},
	{
		id: "customIndex.schedule",
		method: "PUT",
		path: /^\/market\/custom-index\/management\/[A-Za-z0-9_-]+\/schedule$/
	},
	{
		id: "customIndex.build",
		method: "POST",
		path: /^\/market\/custom-index\/management\/[A-Za-z0-9_-]+\/build$/
	},
	{
		id: "customIndex.lifecycle",
		method: "POST",
		path: /^\/market\/custom-index\/management\/[A-Za-z0-9_-]+\/lifecycle$/
	},
	{
		id: "customIndex.daily",
		method: "GET",
		path: /^\/market\/custom-index\/[A-Za-z0-9_-]+\/daily$/
	},
	{
		id: "customIndex.minutes",
		method: "GET",
		path: /^\/market\/custom-index\/[A-Za-z0-9_-]+\/minutes$/
	},
	{
		id: "customIndex.constituents",
		method: "GET",
		path: /^\/market\/custom-index\/[A-Za-z0-9_-]+\/constituents$/
	},
	{
		id: "timeline.list",
		method: "GET",
		path: /^\/timelines$/
	},
	{
		id: "topics.namesByStocks",
		method: "POST",
		path: /^\/topics\/names-by-stocks$/
	},
	{
		id: "topics.marketInfo",
		method: "POST",
		path: /^\/market\/info$/
	},
	{
		id: "topics.search",
		method: "GET",
		path: /^\/topics\/search$/
	},
	{
		id: "topics.detail",
		method: "GET",
		path: /^\/topics\/[A-Za-z0-9_-]+$/
	},
	{
		id: "usMovement.dates",
		method: "GET",
		path: /^\/us-abnormal-movements\/dates$/
	},
	{
		id: "usMovement.byDate",
		method: "GET",
		path: /^\/us-abnormal-movements\/read\/by-date\/\d{4}-\d{2}-\d{2}$/
	}
];
function resolveHarnessOperation(method, path) {
	const normalizedMethod = method.toUpperCase();
	return HARNESS_OPERATIONS.find((operation) => operation.method === normalizedMethod && operation.path.test(path));
}
function normalizeBackendOrigin(value) {
	const url = new URL(value?.trim() || "https://api.onclaw.cc");
	if (!["http:", "https:"].includes(url.protocol) || url.username || url.password || url.pathname !== "/") throw new Error("Harness backend origin must be an HTTP(S) origin");
	return url.origin;
}
function errorDto(status, code, message) {
	return {
		status,
		code,
		message
	};
}
async function sanitizeLoginEnvelope(payload, vault) {
	if (!payload || typeof payload !== "object") return payload;
	const envelope = payload;
	if (envelope.code !== 200 || !envelope.data || typeof envelope.data !== "object") return payload;
	const data = envelope.data;
	if (typeof data.access_token !== "string") return payload;
	await vault.capture(data.access_token, data.user_info && typeof data.user_info === "object" ? data.user_info : void 0);
	return {
		...envelope,
		data: {
			...data,
			access_token: "host-session"
		}
	};
}
var HarnessBackendClient = class {
	#origin;
	#vault;
	#fetch;
	constructor(options) {
		this.#origin = normalizeBackendOrigin(options.origin);
		this.#vault = options.vault;
		this.#fetch = options.fetch ?? globalThis.fetch;
	}
	get origin() {
		return this.#origin;
	}
	async request(request, options = {}) {
		const operation = resolveHarnessOperation(request.method, request.path);
		if (!operation) return {
			status: 403,
			payload: errorDto(403, "OPERATION_NOT_ALLOWED", "Operation is not allowed")
		};
		if (!operation.public && !this.#vault.token) return {
			status: 401,
			payload: errorDto(401, "AUTH_REQUIRED", "Authentication required")
		};
		const url = new URL(request.path, this.#origin);
		for (const [key, raw] of Object.entries(request.params ?? {})) {
			const values = Array.isArray(raw) ? raw : [raw];
			for (const value of values) url.searchParams.append(key, String(value));
		}
		const headers = { accept: "application/json" };
		if (this.#vault.token) headers.authorization = `Bearer ${this.#vault.token}`;
		const hasBody = request.method !== "GET" && request.data !== void 0;
		if (hasBody) headers["content-type"] = "application/json";
		try {
			const timeoutMs = typeof request.timeoutMs === "number" && Number.isFinite(request.timeoutMs) && request.timeoutMs >= 1e3 && request.timeoutMs <= 18e4 ? request.timeoutMs : 3e4;
			const timeoutSignal = AbortSignal.timeout(timeoutMs);
			const response = await this.#fetch(url, {
				method: request.method,
				headers,
				body: hasBody ? JSON.stringify(request.data) : void 0,
				signal: options.signal ? AbortSignal.any([options.signal, timeoutSignal]) : timeoutSignal
			});
			const isJson = (response.headers.get("content-type") ?? "").includes("application/json");
			const payload = isJson ? await response.json() : errorDto(502, "BACKEND_NON_JSON", "Backend returned a non-JSON response");
			if (operation.id === "auth.me" && response.status === 401) await this.#vault.clear();
			if (operation.id === "auth.me" && response.ok && payload && typeof payload === "object") {
				const envelope = payload;
				if (envelope.data && typeof envelope.data === "object") this.#vault.updatePrincipal(envelope.data);
			}
			if (operation.clearsCredential && response.ok) await this.#vault.clear();
			return {
				status: isJson ? response.status : 502,
				payload: operation.capturesCredential && response.ok ? await sanitizeLoginEnvelope(payload, this.#vault) : payload
			};
		} catch (error) {
			return {
				status: 502,
				payload: errorDto(502, "BACKEND_UNAVAILABLE", error instanceof Error && error.name === "TimeoutError" ? "Backend request timed out" : "Backend request failed")
			};
		}
	}
};
//#endregion
//#region src/harness/host/compatibility-contract.ts
const ONCLAW_HOST_CONTRACT = "ONCLAW-BASE-1";
const ONCLAW_HOST_HIF = "ONCLAW-HOST-HIF-1";
var UnsupportedOnclawHostError = class extends TypeError {
	code = "ONCLAW_UNSUPPORTED_HOST";
	missing;
	constructor(missing) {
		super(`Unsupported Harness Host capabilities for ${ONCLAW_HOST_CONTRACT}. Missing: ${missing.join(", ")}.`);
		this.name = "UnsupportedOnclawHostError";
		this.missing = Object.freeze([...missing]);
	}
};
function hasMethod(owner, method) {
	return !!owner && typeof owner === "object" && typeof owner[method] === "function";
}
function createOnclawHostContract(rawContext) {
	if (!rawContext || typeof rawContext !== "object") throw new UnsupportedOnclawHostError(["context"]);
	const context = rawContext;
	const credentials = context.credentials;
	const webServer = context.webServer;
	const missing = [
		[
			context,
			"effect",
			"ctx.effect"
		],
		[
			credentials,
			"resolve",
			"credentials.resolve"
		],
		[
			credentials,
			"set",
			"credentials.set"
		],
		[
			credentials,
			"unset",
			"credentials.unset"
		],
		[
			webServer,
			"register",
			"webServer.register"
		]
	].filter(([owner, method]) => !hasMethod(owner, method)).map(([, , label]) => label);
	if (missing.length) throw new UnsupportedOnclawHostError(missing);
	return {
		diagnostics: Object.freeze({
			contract: ONCLAW_HOST_CONTRACT,
			interfaceFamily: ONCLAW_HOST_HIF
		}),
		effect: context.effect.bind(rawContext),
		credentials,
		webServer
	};
}
//#endregion
//#region src/harness/host/data-runtime.ts
const WINDOW_PATHS = /* @__PURE__ */ new Set(["/limit_info/snapshot/window", "/market/snapshot/window"]);
const PREMIUM_PATH = "/financial-performance/premium-window";
function clone(value) {
	return structuredClone(value);
}
function normalize(value) {
	if (Array.isArray(value)) return value.map(normalize);
	if (!value || typeof value !== "object") return value;
	return Object.fromEntries(Object.entries(value).filter(([key]) => !key.startsWith("known_") && key !== "__onclaw_cache").sort(([left], [right]) => left.localeCompare(right)).map(([key, item]) => [key, normalize(item)]));
}
function record(value) {
	return value && typeof value === "object" && !Array.isArray(value) ? value : {};
}
function envelopeData(payload) {
	const envelope = record(payload);
	return envelope.code === 200 && envelope.data && typeof envelope.data === "object" ? envelope.data : void 0;
}
function assertSuccess(payload) {
	const envelope = record(payload);
	if (envelope.code === 200 && envelope.data && typeof envelope.data === "object") return;
	const details = record(envelope.data);
	const code = typeof details.error_code === "string" ? details.error_code : typeof details.code === "string" ? details.code : typeof envelope.msg === "string" ? envelope.msg : "BACKEND_CONTRACT_ERROR";
	const message = typeof details.message === "string" ? details.message : typeof envelope.msg === "string" ? envelope.msg : "Onclaw backend request failed";
	throw Object.assign(new Error(message), {
		code,
		...typeof details.tier === "string" ? { tier: details.tier } : {},
		...typeof details.limit === "number" ? { limit: details.limit } : {},
		...typeof details.usage === "number" ? { usage: details.usage } : {},
		...typeof details.reset_at === "string" || details.reset_at === null ? { reset_at: details.reset_at } : {}
	});
}
function backendFailure(status, payload) {
	const envelope = record(payload);
	const details = record(envelope.data);
	const code = typeof details.error_code === "string" ? details.error_code : typeof details.code === "string" ? details.code : typeof envelope.code === "string" ? envelope.code : "BACKEND_REQUEST_FAILED";
	const message = typeof details.message === "string" ? details.message : typeof envelope.msg === "string" ? envelope.msg : typeof envelope.message === "string" ? envelope.message : typeof envelope.detail === "string" ? envelope.detail : `Onclaw backend request failed (${status})`;
	return Object.assign(new Error(message), {
		code,
		status,
		...typeof details.tier === "string" ? { tier: details.tier } : {},
		...typeof details.limit === "number" ? { limit: details.limit } : {},
		...typeof details.usage === "number" ? { usage: details.usage } : {},
		...typeof details.reset_at === "string" || details.reset_at === null ? { reset_at: details.reset_at } : {}
	});
}
function cacheHints(input) {
	const hints = record(input.__onclaw_cache);
	return {
		mode: hints.mode === "reload" ? "reload" : "default",
		requested_dates: Array.isArray(hints.requested_dates) ? [...new Set(hints.requested_dates.filter((item) => typeof item === "string" && /^\d{4}-\d{2}-\d{2}$/.test(item)))].sort() : void 0
	};
}
function stripInternal(input) {
	const { __onclaw_cache: _cache, ...backendInput } = input;
	return backendInput;
}
function replaceEnvelopeData(payload, data) {
	const copy = clone(payload);
	copy.data = clone(data);
	return copy;
}
var OnclawDataRuntime = class {
	backend;
	vault;
	#cache = /* @__PURE__ */ new Map();
	#windows = /* @__PURE__ */ new Map();
	#flights = /* @__PURE__ */ new Map();
	#ttlMs;
	#maxEntries;
	#disposeIdentity;
	#hits = 0;
	#misses = 0;
	#reloads = 0;
	#deduplicated = 0;
	constructor(backend, vault, options = {}) {
		this.backend = backend;
		this.vault = vault;
		this.#ttlMs = options.ttlMs ?? 5 * 6e4;
		this.#maxEntries = options.maxEntries ?? 128;
		this.#disposeIdentity = vault.onIdentityChange(() => this.clear());
	}
	dispose() {
		this.#disposeIdentity();
		this.clear();
	}
	clear() {
		this.#cache.clear();
		this.#windows.clear();
		for (const flight of this.#flights.values()) flight.controller.abort();
		this.#flights.clear();
	}
	stats() {
		return {
			hits: this.#hits,
			misses: this.#misses,
			reloads: this.#reloads,
			deduplicated: this.#deduplicated,
			entries: this.#cache.size,
			inFlight: this.#flights.size
		};
	}
	async request(dto, options = {}) {
		const method = dto.method.toUpperCase();
		if (!(method === "POST" && WINDOW_PATHS.has(dto.path) || method === "GET" && dto.path === PREMIUM_PATH)) return this.backend.request(dto, { signal: options.signal });
		return {
			status: 200,
			payload: await this.#query(dto, options)
		};
	}
	async getLimitLadderWindow(input, options = {}) {
		return this.#snapshotTool("limit_info_snapshot", input, options);
	}
	async getStockMarketWindow(input, options = {}) {
		return this.#snapshotTool("market_snapshot", input, options);
	}
	async getPerformancePremiumWindow(input, options = {}) {
		const params = {
			report: String(input.report),
			event_date: String(input.event_date),
			forecast_types: input.forecast_types?.join(",") ?? "",
			performance_types: input.performance_types?.join(",") ?? "",
			horizons: input.horizons?.join(",") ?? "1,3,5",
			max_events: Number(input.max_events ?? 100)
		};
		return (await this.request({
			method: "GET",
			path: PREMIUM_PATH,
			params
		}, options)).payload;
	}
	async #snapshotTool(source, input, options) {
		const dates = Array.isArray(input.trading_dates) ? input.trading_dates.filter((item) => typeof item === "string").sort() : [];
		const startDate = String(input.start_date);
		const endDate = String(input.end_date);
		const base = {
			base_date: String(input.base_date),
			group: String(input.group ?? "default"),
			stock_scope: input.stock_scope ?? input.stock_codes ?? [],
			...source === "limit_info_snapshot" ? {
				limit_events: input.limit_events === true,
				convertible: input.convertible === true
			} : {}
		};
		const windowPayload = (await this.request({
			method: "POST",
			path: source === "limit_info_snapshot" ? "/limit_info/snapshot/window" : "/market/snapshot/window",
			data: {
				...base,
				start_date: startDate,
				end_date: endDate,
				cursor: 0,
				size: Math.max(1, dates.length || Number(input.size ?? 120)),
				__onclaw_cache: {
					mode: options.cacheMode ?? "default",
					requested_dates: dates
				}
			}
		}, options)).payload;
		assertSuccess(windowPayload);
		const window = envelopeData(windowPayload) ?? {};
		let runtime = null;
		if (input.data_mode === "include_runtime") {
			const explicitCodes = source === "market_snapshot" ? input.stock_codes : input.stock_scope;
			const windowCodes = record(window.structure).ordered_codes;
			const codes = explicitCodes?.length ? explicitCodes : source === "limit_info_snapshot" && String(input.base_date) !== (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA", { timeZone: "Asia/Shanghai" }) && Array.isArray(windowCodes) ? windowCodes.filter((code) => typeof code === "string") : [];
			const group = codes.length ? "default" : source === "limit_info_snapshot" ? String(input.group ?? "limit_events") : "default";
			const runtimePayload = (await this.request(codes.length ? {
				method: "POST",
				path: "/market/snapshot/runtime",
				data: {
					codes,
					group
				}
			} : {
				method: "GET",
				path: "/market/snapshot/runtime",
				params: { group }
			}, options)).payload;
			assertSuccess(runtimePayload);
			runtime = envelopeData(runtimePayload) ?? null;
		}
		return {
			code: 200,
			msg: "success",
			data: {
				source,
				window,
				runtime
			}
		};
	}
	async #query(dto, options) {
		if (!this.vault.token) throw Object.assign(/* @__PURE__ */ new Error("请先登录 Onclaw 后再查询数据"), { code: "AUTH_REQUIRED" });
		const input = record(dto.data);
		const hints = cacheHints(input);
		const cacheMode = options.cacheMode ?? hints.mode ?? "default";
		const identity = this.vault.identity;
		const normalizedInput = dto.method.toUpperCase() === "GET" ? normalize(dto.params ?? {}) : normalize(input);
		const key = JSON.stringify({
			identity,
			method: dto.method.toUpperCase(),
			path: dto.path,
			input: normalizedInput
		});
		const windowScopeKey = WINDOW_PATHS.has(dto.path) ? this.#windowScopeKey(identity, dto.path, input) : key;
		if (cacheMode === "reload") {
			this.#reloads += 1;
			this.#invalidateScope(windowScopeKey);
		} else {
			const cached = this.#cache.get(key);
			if (cached && cached.expiresAt > Date.now()) {
				this.#cache.delete(key);
				this.#cache.set(key, cached);
				this.#hits += 1;
				return clone(cached.payload);
			}
			if (cached) this.#cache.delete(key);
			if (WINDOW_PATHS.has(dto.path)) {
				const requestedDates = this.#requestedDates(windowScopeKey, input, hints);
				const assembled = this.#assembleWindow(windowScopeKey, requestedDates);
				if (assembled !== void 0) {
					this.#hits += 1;
					return assembled;
				}
			}
		}
		const existing = this.#flights.get(key);
		if (existing) {
			this.#deduplicated += 1;
			return clone(await this.#consume(existing, options.signal));
		}
		this.#misses += 1;
		const controller = new AbortController();
		const flight = {
			controller,
			consumers: 0,
			settled: false,
			promise: Promise.resolve()
		};
		flight.promise = this.#fetchSupported(dto, input, windowScopeKey, hints, controller.signal).then((payload) => {
			if (WINDOW_PATHS.has(dto.path)) this.#storeWindow(windowScopeKey, payload);
			this.#cache.set(key, {
				expiresAt: Date.now() + this.#ttlMs,
				payload: clone(payload),
				scopeKey: windowScopeKey
			});
			this.#evict();
			return payload;
		}).finally(() => {
			flight.settled = true;
			this.#flights.delete(key);
		});
		this.#flights.set(key, flight);
		return clone(await this.#consume(flight, options.signal));
	}
	async #fetchSupported(dto, input, windowScopeKey, hints, signal) {
		if (WINDOW_PATHS.has(dto.path)) {
			const requestedDates = this.#requestedDates(windowScopeKey, input, hints);
			const missing = requestedDates.filter((date) => !this.#validSlice(windowScopeKey, date));
			if (missing.length > 0 && missing.length < requestedDates.length) {
				for (const range of this.#contiguousRanges(requestedDates, missing)) {
					const partialInput = {
						...stripInternal(input),
						start_date: range[0],
						end_date: range[range.length - 1],
						cursor: 0,
						size: range.length
					};
					const partial = await this.#fetch({
						...dto,
						data: partialInput
					}, signal);
					this.#storeWindow(windowScopeKey, partial);
				}
				const assembled = this.#assembleWindow(windowScopeKey, requestedDates);
				if (assembled !== void 0) return assembled;
			}
		}
		return await this.#fetch({
			...dto,
			data: dto.method.toUpperCase() === "GET" ? dto.data : stripInternal(input)
		}, signal);
	}
	async #fetch(dto, signal) {
		const result = await this.backend.request(dto, { signal });
		if (result.status >= 400) throw backendFailure(result.status, result.payload);
		assertSuccess(result.payload);
		return result.payload;
	}
	#windowScopeKey(identity, path, input) {
		const scope = Object.fromEntries(Object.entries(stripInternal(input)).filter(([key]) => ![
			"start_date",
			"end_date",
			"cursor",
			"size",
			"window_rowset_revision",
			"window_rowset_revisions"
		].includes(key)));
		return JSON.stringify({
			identity,
			path,
			input: normalize(scope)
		});
	}
	#requestedDates(scopeKey, input, hints) {
		if (hints.requested_dates?.length) return hints.requested_dates;
		const start = typeof input.start_date === "string" ? input.start_date : "";
		const end = typeof input.end_date === "string" ? input.end_date : "";
		const store = this.#windows.get(scopeKey);
		if (!store || !start || !end) return [];
		const dates = [...store.slices.keys()].filter((date) => start <= date && date <= end).sort();
		return dates[0] === start && dates[dates.length - 1] === end ? dates : [];
	}
	#validSlice(scopeKey, date) {
		const slice = this.#windows.get(scopeKey)?.slices.get(date);
		if (!slice) return false;
		if (slice.expiresAt > Date.now()) return true;
		this.#windows.get(scopeKey)?.slices.delete(date);
		return false;
	}
	#storeWindow(scopeKey, payload) {
		const window = envelopeData(payload);
		if (!window) return;
		const dates = Array.isArray(window.dates) ? window.dates.filter((item) => typeof item === "string") : [];
		const table = record(window.table);
		const columns = Array.isArray(table.columns) ? table.columns.filter((item) => typeof item === "string") : [];
		const rows = Array.isArray(table.rows) ? table.rows.filter(Array.isArray) : [];
		const dateIndex = columns.indexOf("trade_date");
		if (!dates.length || dateIndex < 0) return;
		const staticRevision = window.static_revision;
		const rowsetRevision = Number(window.rowset_revision ?? 0);
		const schemaVersion = window.schema_version;
		let store = this.#windows.get(scopeKey);
		if (store && (store.rowsetRevision !== rowsetRevision || store.schemaVersion !== schemaVersion || JSON.stringify(store.columns) !== JSON.stringify(columns))) {
			this.#windows.delete(scopeKey);
			store = void 0;
		}
		if (!store) {
			store = {
				columns,
				slices: /* @__PURE__ */ new Map(),
				staticRevision,
				rowsetRevision,
				schemaVersion,
				template: clone(payload)
			};
			this.#windows.set(scopeKey, store);
		}
		for (const date of dates) store.slices.set(date, {
			expiresAt: Date.now() + this.#ttlMs,
			rows: clone(rows.filter((row) => row[dateIndex] === date)),
			staticRevision
		});
		store.template = clone(payload);
		this.#evictWindows();
	}
	#assembleWindow(scopeKey, requestedDates) {
		const store = this.#windows.get(scopeKey);
		if (!store || !requestedDates.length || requestedDates.some((date) => !this.#validSlice(scopeKey, date))) return;
		const payload = clone(store.template);
		const window = envelopeData(payload);
		if (!window) return void 0;
		window.dates = [...requestedDates];
		window.start_date = requestedDates[0];
		window.end_date = requestedDates[requestedDates.length - 1];
		window.size = requestedDates.length;
		window.static_revision = requestedDates.length === 1 ? store.slices.get(requestedDates[0])?.staticRevision ?? store.staticRevision : `host-window:${requestedDates.map((date) => `${date}:${String(store.slices.get(date)?.staticRevision ?? "missing")}`).join("|")}`;
		window.table = {
			columns: clone(store.columns),
			rows: requestedDates.flatMap((date) => clone(store.slices.get(date)?.rows ?? []))
		};
		window.structure = {
			...record(window.structure),
			ordered_dates: [...requestedDates]
		};
		return replaceEnvelopeData(payload, window);
	}
	#contiguousRanges(requestedDates, missingDates) {
		const missing = new Set(missingDates);
		const ranges = [];
		for (const date of requestedDates) {
			if (!missing.has(date)) continue;
			const previousIndex = requestedDates.indexOf(date) - 1;
			const previous = previousIndex >= 0 ? requestedDates[previousIndex] : void 0;
			const last = ranges[ranges.length - 1];
			if (last && previous === last[last.length - 1]) last.push(date);
			else ranges.push([date]);
		}
		return ranges;
	}
	async #consume(flight, signal) {
		flight.consumers += 1;
		try {
			if (!signal) return await flight.promise;
			if (signal.aborted) throw signal.reason ?? new DOMException("Aborted", "AbortError");
			return await Promise.race([flight.promise, new Promise((_, reject) => signal.addEventListener("abort", () => reject(signal.reason ?? new DOMException("Aborted", "AbortError")), { once: true }))]);
		} finally {
			flight.consumers -= 1;
			if (flight.consumers === 0 && !flight.settled) flight.controller.abort();
		}
	}
	#invalidateScope(scopeKey) {
		this.#windows.delete(scopeKey);
		for (const [key, entry] of this.#cache) if (entry.scopeKey === scopeKey || key === scopeKey) this.#cache.delete(key);
	}
	#evict() {
		while (this.#cache.size > this.#maxEntries) {
			const oldest = this.#cache.keys().next().value;
			if (!oldest) break;
			this.#cache.delete(oldest);
		}
	}
	#evictWindows() {
		const slices = [...this.#windows.entries()].flatMap(([scope, store]) => [...store.slices.entries()].map(([date, slice]) => ({
			scope,
			store,
			date,
			slice
		})));
		slices.sort((left, right) => left.slice.expiresAt - right.slice.expiresAt);
		while (slices.length > this.#maxEntries * 120) {
			const oldest = slices.shift();
			if (!oldest) break;
			oldest.store.slices.delete(oldest.date);
			if (oldest.store.slices.size === 0) this.#windows.delete(oldest.scope);
		}
	}
};
async function readJson(req) {
	const chunks = [];
	let size = 0;
	for await (const chunk of req) {
		const bytes = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
		size += bytes.length;
		if (size > 1048576) throw new Error("BODY_TOO_LARGE");
		chunks.push(bytes);
	}
	try {
		return JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
	} catch {
		throw new Error("INVALID_JSON");
	}
}
function send(res, status, payload) {
	res.writeHead(status, {
		"content-type": "application/json; charset=utf-8",
		"cache-control": "no-store"
	});
	res.end(JSON.stringify(payload));
}
const ALLOWED_EXTERNAL_HOSTS = /* @__PURE__ */ new Set([
	"onclaw.cc",
	"www.onclaw.cc",
	"z-pay.cn"
]);
const ALLOWED_EXTERNAL_SUFFIXES = [
	".z-pay.cn",
	".alipay.com",
	".qq.com",
	".weixin.qq.com"
];
const LEGAL_DOCUMENT_URLS = /* @__PURE__ */ new Set([
	"https://onclaw.cc/legal_content/user_agreement.md",
	"https://onclaw.cc/legal_content/privacy_policy.md",
	"https://onclaw.cc/legal_content/data_service_agreement.md"
]);
function validateExternalUrl(raw) {
	if (typeof raw !== "string" || raw.length > 4096) return void 0;
	try {
		const url = new URL(raw);
		const host = url.hostname.toLowerCase();
		if (!["http:", "https:"].includes(url.protocol)) return void 0;
		return ALLOWED_EXTERNAL_HOSTS.has(host) || ALLOWED_EXTERNAL_SUFFIXES.some((suffix) => host.endsWith(suffix)) ? url.toString() : void 0;
	} catch {
		return;
	}
}
function nativeError(error) {
	return {
		ok: false,
		code: error && typeof error === "object" && "code" in error && typeof error.code === "string" ? error.code : "NATIVE_LINKER_FAILED",
		message: error instanceof Error ? error.message : "Harness native linker failed"
	};
}
function validateNativeCommand(value) {
	if (!value || typeof value !== "object") throw new TypeError("Native command body is required");
	const { target, code } = value;
	if (target !== "ths" && target !== "tdx") throw new TypeError("Native target must be ths or tdx");
	if (typeof code !== "string" || !/^\d{6}$/.test(code)) throw new TypeError("Stock code must be six digits");
	return {
		target,
		code
	};
}
function createHarnessHttpHandler(client, vault, nativeLinker, dataRuntime) {
	return async (req, res) => {
		if (req.method !== "POST") return send(res, 405, {
			status: 405,
			code: "METHOD_NOT_ALLOWED",
			message: "POST required"
		});
		const action = (req.url ?? "").replace(/^\/onclaw\/api\/?/, "").split("?")[0];
		if (action === "session/logout") {
			await vault.clear();
			return send(res, 200, { ok: true });
		}
		if (action === "native/state") {
			if (!nativeLinker) return send(res, 503, nativeError(/* @__PURE__ */ new Error("Harness native linker is not configured")));
			try {
				return send(res, 200, nativeLinker.getState());
			} catch (error) {
				return send(res, 503, nativeError(error));
			}
		}
		if (action === "native/initialize") {
			if (!nativeLinker) return send(res, 503, nativeError(/* @__PURE__ */ new Error("Harness native linker is not configured")));
			try {
				const config = await readJson(req);
				if (!config || typeof config !== "object" || Array.isArray(config)) throw new TypeError("Native runtime config is required");
				return send(res, 200, nativeLinker.initialize(config));
			} catch (error) {
				return send(res, error instanceof TypeError ? 400 : 503, nativeError(error));
			}
		}
		if (action === "native/set-code") {
			if (!nativeLinker) return send(res, 503, nativeError(/* @__PURE__ */ new Error("Harness native linker is not configured")));
			try {
				const command = validateNativeCommand(await readJson(req));
				return send(res, 200, nativeLinker.setCode(command.target, command.code));
			} catch (error) {
				return send(res, error instanceof TypeError ? 400 : 503, nativeError(error));
			}
		}
		if (action === "external/open") try {
			const url = validateExternalUrl((await readJson(req)).url);
			return url ? send(res, 200, {
				ok: true,
				url
			}) : send(res, 403, {
				ok: false,
				code: "URL_NOT_ALLOWED",
				message: "External URL is not allowed"
			});
		} catch {
			return send(res, 400, {
				ok: false,
				code: "INVALID_REQUEST",
				message: "Invalid external URL request"
			});
		}
		if (action === "legal-content") try {
			const body = await readJson(req);
			if (typeof body.url !== "string" || !LEGAL_DOCUMENT_URLS.has(body.url)) return send(res, 403, {
				code: "LEGAL_DOCUMENT_URL_NOT_ALLOWED",
				message: "Legal document URL is not allowed"
			});
			const response = await fetch(body.url, {
				method: "GET",
				signal: AbortSignal.timeout(3e4)
			});
			if (!response.ok) return send(res, 502, {
				code: "LEGAL_DOCUMENT_UPSTREAM_FAILED",
				message: `Legal document request failed (${response.status})`
			});
			return send(res, 200, { content: await response.text() });
		} catch (error) {
			return send(res, 502, {
				code: "LEGAL_DOCUMENT_UPSTREAM_FAILED",
				message: error instanceof Error ? error.message : "Legal document request failed"
			});
		}
		if (action !== "request") return send(res, 404, {
			status: 404,
			code: "NOT_FOUND",
			message: "Unknown action"
		});
		try {
			const request = await readJson(req);
			const requestData = request.data && typeof request.data === "object" ? request.data : void 0;
			const cacheMode = requestData?.cache_mode === "reload" || requestData?.__onclaw_cache?.mode === "reload" ? "reload" : void 0;
			const result = dataRuntime ? await dataRuntime.request(request, { cacheMode }) : await client.request(request);
			return send(res, result.status, result.payload);
		} catch (error) {
			const hasStableCode = error && typeof error === "object" && "code" in error && typeof error.code === "string";
			const code = hasStableCode ? error.code : error instanceof Error ? error.message : "INVALID_REQUEST";
			const status = code === "BODY_TOO_LARGE" ? 413 : 400;
			return send(res, status, {
				status,
				code,
				message: hasStableCode && error instanceof Error ? error.message : "Invalid Harness request"
			});
		}
	};
}
//#endregion
//#region src/harness/host/native-linker.ts
const REQUIRED_EXPORTS = [
	"initRuntime",
	"getRuntimeState",
	"setRuntimeCode"
];
const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
function cleanCandidate(value) {
	return typeof value === "string" && value.trim() ? resolve(value.trim()) : void 0;
}
function defaultNativeAddonCandidates(configuredPath, environment = process.env) {
	return [
		cleanCandidate(configuredPath),
		cleanCandidate(environment.ONCLAW_NATIVE_ADDON_PATH),
		cleanCandidate(environment.ONCLAW_NATIVE_ADDON_PATH ?? environment.FIAGENT_NATIVE_ADDON_PATH),
		resolve(packageRoot, "native", "win-x64", "my_addon.node"),
		resolve(packageRoot, "..", "build", "Release", "my_addon.node"),
		resolve(packageRoot, "..", "build-resources", "native", "win-x64", "my_addon.node"),
		resolve(process.cwd(), "fiagent_frontend", "build", "Release", "my_addon.node"),
		resolve(process.cwd(), "fiagent_frontend", "build-resources", "native", "win-x64", "my_addon.node")
	].filter((value, index, values) => value !== void 0 && values.indexOf(value) === index);
}
function validateNativeAddonContract(value) {
	if (!value || typeof value !== "object" && typeof value !== "function") throw new TypeError("原生联动模块没有导出对象");
	const addon = value;
	const missing = REQUIRED_EXPORTS.filter((name) => typeof addon[name] !== "function");
	if (missing.length) throw new TypeError(`原生联动模块缺少接口：${missing.join(", ")}`);
	return value;
}
var HarnessNativeLinker = class {
	#configuredPath;
	#environment;
	#exists;
	#realpath;
	#require;
	#addon;
	#resolvedPath;
	constructor(options = {}) {
		this.#configuredPath = options.nativeAddonPath;
		this.#environment = options.environment ?? process.env;
		this.#exists = options.exists ?? existsSync;
		this.#realpath = options.realpath ?? realpathSync.native;
		this.#require = options.require ?? createRequire(import.meta.url);
	}
	candidates() {
		return defaultNativeAddonCandidates(this.#configuredPath, this.#environment);
	}
	probe() {
		if (!this.#addon) {
			const candidates = this.candidates();
			const candidate = candidates.find((path) => this.#exists(path));
			if (!candidate) {
				const error = /* @__PURE__ */ new Error(`未找到 my_addon.node。已检查：\n${candidates.map((path) => `- ${path}`).join("\n")}`);
				error.code = "ADDON_NOT_FOUND";
				throw error;
			}
			this.#resolvedPath = this.#realpath(candidate);
			this.#addon = validateNativeAddonContract(this.#require(this.#resolvedPath));
		}
		return {
			resolvedPath: this.#resolvedPath,
			exports: REQUIRED_EXPORTS.filter((name) => typeof this.#addon?.[name] === "function"),
			platform: process.platform,
			arch: process.arch
		};
	}
	#loaded() {
		this.probe();
		return this.#addon;
	}
	getState() {
		return this.#loaded().getRuntimeState();
	}
	initialize(config) {
		return this.#loaded().initRuntime(config);
	}
	setCode(target, code) {
		return this.#loaded().setRuntimeCode(target, code);
	}
	dispose() {
		if (!this.#addon) return;
		try {
			this.#addon.initRuntime({
				authorizationState: "uninitialized",
				message: "Harness Onclaw plugin disposed"
			});
		} catch {}
	}
};
//#endregion
//#region src/harness/host/index.ts
const name = "dsh-fin-onclaw";
const inject = ["credentials", "webServer"];
async function apply(rawCtx, config = {}) {
	const ctx = createOnclawHostContract(rawCtx);
	const vault = new SessionAuthVault(ctx.credentials);
	await vault.restore();
	const backend = new HarnessBackendClient({
		origin: config.backendOrigin,
		vault
	});
	const nativeLinker = new HarnessNativeLinker({ nativeAddonPath: config.nativeAddonPath });
	const dataRuntime = new OnclawDataRuntime(backend, vault);
	ctx.effect(() => {
		const unregisterApi = ctx.webServer.register({
			kind: "prefix",
			path: "/onclaw/api",
			handler: createHarnessHttpHandler(backend, vault, nativeLinker, dataRuntime)
		});
		return () => {
			dataRuntime.dispose();
			nativeLinker.dispose();
			if (typeof unregisterApi === "function") unregisterApi();
		};
	}, "onclaw: backend allowlist, credential vault, and shared data runtime");
}
//#endregion
export { HarnessBackendClient, HarnessNativeLinker, OnclawDataRuntime, SessionAuthVault, apply, apply as default, createHarnessHttpHandler, inject, name };
