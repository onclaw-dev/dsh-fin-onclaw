window.__ModuleLoader__.load({
	id: "dsh-fin-onclaw",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		//#region \0rolldown/runtime.js
		var __create = Object.create;
		var __defProp = Object.defineProperty;
		var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
		var __getOwnPropNames = Object.getOwnPropertyNames;
		var __getProtoOf = Object.getPrototypeOf;
		var __hasOwnProp = Object.prototype.hasOwnProperty;
		var __copyProps = (to, from, except, desc) => {
			if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
				key = keys[i];
				if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
					get: ((k) => from[k]).bind(null, key),
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
				});
			}
			return to;
		};
		var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
			value: mod,
			enumerable: true
		}) : target, mod));
		//#endregion
		let react = require("react");
		react = __toESM(react, 1);
		let react_jsx_runtime = require("react/jsx-runtime");
		//#region \0onclaw-harness-css
		var _onclaw_harness_css_default = "@keyframes onclaw-fade-in{0%{opacity:0}to{opacity:1}}@keyframes onclaw-fade-in-up{0%{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}.onclaw-plugin-root{position:relative;box-sizing:border-box;width:100%;height:100%;min-width:0;min-height:0;color:var(--text-primary);font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,PingFang SC,Microsoft YaHei,sans-serif}.onclaw-plugin-root,.onclaw-plugin-root *,.onclaw-plugin-root :after,.onclaw-plugin-root :before,.onclaw-plugin-root:after,.onclaw-plugin-root:before{box-sizing:border-box;border:0 solid}.onclaw-plugin-root h1,.onclaw-plugin-root h2,.onclaw-plugin-root h3,.onclaw-plugin-root h4,.onclaw-plugin-root h5,.onclaw-plugin-root h6,.onclaw-plugin-root p{margin:0}.onclaw-plugin-root button,.onclaw-plugin-root input,.onclaw-plugin-root optgroup,.onclaw-plugin-root select,.onclaw-plugin-root textarea{margin:0;padding:0;color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit}.onclaw-plugin-root [type=button],.onclaw-plugin-root [type=reset],.onclaw-plugin-root [type=submit],.onclaw-plugin-root button{-webkit-appearance:button;-moz-appearance:button;appearance:button;background-color:transparent;background-image:none}.onclaw-plugin-root button,.onclaw-plugin-root select{text-transform:none}.onclaw-plugin-root table{border-collapse:collapse;border-color:inherit;text-indent:0}.onclaw-plugin-root canvas,.onclaw-plugin-root img,.onclaw-plugin-root svg,.onclaw-plugin-root video{display:block;vertical-align:middle}.onclaw-plugin-root img,.onclaw-plugin-root video{max-width:100%;height:auto}.onclaw-plugin-root :focus-visible{outline:2px solid var(--focus-ring);outline-offset:2px}.onclaw-plugin-root[data-theme=dark]{color-scheme:dark;--bg-primary:var(--dsw-alias-bg-base,#0f1219);--bg-secondary:var(--dsw-alias-bg-layer-1,#161b26);--bg-tertiary:var(--dsw-alias-bg-layer-2,#1e2438);--bg-header:var(--dsw-alias-bg-layer-1,#232942);--bg-elevated:var(--dsw-alias-bg-layer-3,#1a1f35);--text-primary:var(--dsw-alias-label-primary,#fff);--text-secondary:var(--dsw-alias-label-secondary,#8b92a5);--text-muted:var(--dsw-alias-label-tertiary,#697286);--text-gold:var(--dsw-alias-brand-primary,#e2b96e);--border-color:var(--dsw-alias-border-l1,#2a3150);--border-strong:var(--dsw-alias-border-l2,#3a4160);--accent:var(--dsw-alias-brand-primary,#e2b96e);--accent-hover:var(--dsw-alias-button-primary-hover,#d4a85e);--accent-contrast:var(--dsw-alias-label-primary-inverted,#1a1f35);--accent-soft:var(--dsw-alias-interactive-bg-hover-accent,hsla(39,67%,66%,.15));--positive:#ef4444;--negative:#22c55e;--warning:var(--dsw-alias-state-warn-primary,#f59e0b);--danger:var(--dsw-alias-state-error-primary,#ef4444);--danger-contrast:#fff;--input-bg:var(--dsw-alias-bg-layer-2,#1e2438);--hover-bg:var(--dsw-alias-interactive-bg-hover,#232942);--selected-bg:var(--dsw-alias-interactive-bg-active,#2a3150);--overlay-bg:var(--dsw-alias-bg-mask-1,rgba(0,0,0,.6));--focus-ring:var(--dsw-alias-border-l4,#e2b96e);--group-consecutive:#4c1d95;--group-rebound:#1e3a5f;--group-first-limit:#065f46;--group-failed-limit:#78350f;--group-limit-down:#14532d;--group-other:#334155;--radius:8px;--market-canvas:#080d14;--market-cell:#111925;--market-cell-future:#151f2d;--market-cell-hover:#182435;--market-header:#1b2736;--market-frozen:#0d141e;--market-grid:#314054;--market-grid-strong:#66758b;--market-grid-selected:#d7ad61;--market-text-primary:#f4f7fb;--market-text-secondary:#c0cad8;--market-text-muted:#8f9aae;--market-curve:#42c7ff;--market-baseline:#8290a3;--market-selected:#1b3152;--market-frozen-shadow:rgba(0,0,0,.55);--market-limit-up-bg:#4b1d24;--market-limit-up-fg:#ffd4d8;--market-limit-up-border:#d85b68;--market-limit-down-bg:#123b2b;--market-limit-down-fg:#c8f7d5;--market-limit-down-border:#35a66b;--market-failed-limit-bg:#49340f;--market-failed-limit-fg:#ffe6a3;--market-failed-limit-border:#d6a23a;--market-suspended-bg:#263244;--market-suspended-fg:#d2d9e5;--market-suspended-border:#8290a3;--market-state-curve:#f8fafc;--market-state-baseline:#aeb9c8;--market-limit-up-badge:#b42335;--market-limit-down-badge:#087443;--market-failed-limit-badge:#985900;--market-suspended-badge:#475569;--tag-regulatory-bg:#b42335;--tag-auction-bg:#6d28d9;--tag-convertible-bg:#1d4ed8;--tag-topic-bg:#475569;--badge-fg:#fff;--market-rise-badge:#b42335;--market-fall-badge:#087443;--market-flat-badge:#475569;--tag-us-market-bg:#1d4ed8;--tag-relation-1-bg:#6d28d9;--tag-relation-2-bg:#1d4ed8;--tag-relation-3-bg:#08746c;--tag-relation-4-bg:#985900;--status-success-badge:#087443;--status-warning-badge:#985900;--status-danger-badge:#b42335;--status-info-badge:#1d4ed8;--status-neutral-badge:#475569;--notice-info-bg:#102b3f;--notice-info-border:#3aa7d8;--notice-info-fg:#d9f1ff;--notice-warning-bg:#352608;--notice-warning-border:#d8a323;--notice-warning-fg:#fff0bf;--notice-error-bg:#3d171c;--notice-error-border:#d65a67;--notice-error-fg:#ffe1e4;--background:222 25% 8%;--foreground:0 0% 100%;--card:223 26% 12%;--card-foreground:0 0% 100%;--popover:223 26% 12%;--popover-foreground:0 0% 100%;--primary:38 66% 66%;--primary-foreground:225 32% 15%;--secondary:224 25% 16%;--secondary-foreground:0 0% 100%;--muted:224 25% 16%;--muted-foreground:224 10% 60%;--accent-hsl:38 66% 66%;--accent-foreground:225 32% 15%;--destructive:0 84% 60%;--destructive-foreground:0 0% 100%;--border:226 31% 24%;--input:226 31% 24%;--ring:38 66% 66%;--chart-1:0 84% 60%;--chart-2:142 71% 45%;--chart-3:38 66% 66%;--chart-4:217 91% 60%;--chart-5:262 83% 68%;--sidebar-background:223 26% 12%;--sidebar-foreground:0 0% 100%;--sidebar-primary:38 66% 66%;--sidebar-primary-foreground:225 32% 15%;--sidebar-accent:224 25% 16%;--sidebar-accent-foreground:0 0% 100%;--sidebar-border:226 31% 24%;--sidebar-ring:38 66% 66%}.onclaw-plugin-root[data-theme=light]{color-scheme:light;--bg-primary:var(--dsw-alias-bg-base,#f5f7fb);--bg-secondary:var(--dsw-alias-bg-layer-1,#fff);--bg-tertiary:var(--dsw-alias-bg-layer-2,#eef2f7);--bg-header:var(--dsw-alias-bg-layer-1,#e8edf5);--bg-elevated:var(--dsw-alias-bg-layer-3,#fff);--text-primary:var(--dsw-alias-label-primary,#172033);--text-secondary:var(--dsw-alias-label-secondary,#647086);--text-muted:var(--dsw-alias-label-tertiary,#8a95a8);--text-gold:var(--dsw-alias-brand-primary,#b9842f);--border-color:var(--dsw-alias-border-l1,#d7deea);--border-strong:var(--dsw-alias-border-l2,#b9c4d5);--accent:var(--dsw-alias-brand-primary,#2762e7);--accent-hover:var(--dsw-alias-button-primary-hover,#1d4ed8);--accent-contrast:var(--dsw-alias-label-primary-inverted,#fff);--accent-soft:var(--dsw-alias-interactive-bg-hover-accent,#e8f0ff);--positive:#dc2626;--negative:#16a34a;--warning:var(--dsw-alias-state-warn-primary,#d97706);--danger:var(--dsw-alias-state-error-primary,#dc2626);--danger-contrast:#fff;--input-bg:var(--dsw-alias-bg-layer-2,#eef2f7);--hover-bg:var(--dsw-alias-interactive-bg-hover,#e8edf5);--selected-bg:var(--dsw-alias-interactive-bg-active,#dfe8f8);--overlay-bg:var(--dsw-alias-bg-mask-1,rgba(15,18,25,.6));--focus-ring:var(--dsw-alias-border-l4,#2762e7);--group-consecutive:#eadfff;--group-rebound:#deefff;--group-first-limit:#d9f4e8;--group-failed-limit:#fff0d0;--group-limit-down:#dbf2df;--group-other:#e6ebf2;--radius:8px;--market-canvas:#e9eef5;--market-cell:#fff;--market-cell-future:#f3f6fa;--market-cell-hover:#edf3fb;--market-header:#dfe6ef;--market-frozen:#f6f8fb;--market-grid:#c5cfdd;--market-grid-strong:#8795aa;--market-grid-selected:#9a681c;--market-text-primary:#111827;--market-text-secondary:#46556a;--market-text-muted:#718096;--market-curve:#155eef;--market-baseline:#8795aa;--market-selected:#e8f0ff;--market-frozen-shadow:rgba(43,55,74,.24);--market-limit-up-bg:#fff0f1;--market-limit-up-fg:#8f1d2c;--market-limit-up-border:#dc6673;--market-limit-down-bg:#e7f8ed;--market-limit-down-fg:#11613a;--market-limit-down-border:#36a269;--market-failed-limit-bg:#fff3d6;--market-failed-limit-fg:#7a4600;--market-failed-limit-border:#d89a24;--market-suspended-bg:#e7ecf3;--market-suspended-fg:#42526a;--market-suspended-border:#9aa7b8;--market-state-curve:#1d4ed8;--market-state-baseline:#64748b;--market-limit-up-badge:#b42335;--market-limit-down-badge:#087443;--market-failed-limit-badge:#985900;--market-suspended-badge:#475569;--tag-regulatory-bg:#b42335;--tag-auction-bg:#6d28d9;--tag-convertible-bg:#1d4ed8;--tag-topic-bg:#475569;--badge-fg:#fff;--market-rise-badge:#b42335;--market-fall-badge:#087443;--market-flat-badge:#475569;--tag-us-market-bg:#1d4ed8;--tag-relation-1-bg:#6d28d9;--tag-relation-2-bg:#1d4ed8;--tag-relation-3-bg:#08746c;--tag-relation-4-bg:#985900;--status-success-badge:#087443;--status-warning-badge:#985900;--status-danger-badge:#b42335;--status-info-badge:#1d4ed8;--status-neutral-badge:#475569;--notice-info-bg:#dff3ff;--notice-info-border:#147da6;--notice-info-fg:#073f57;--notice-warning-bg:#fff1c7;--notice-warning-border:#b77900;--notice-warning-fg:#5b3500;--notice-error-bg:#ffe5e8;--notice-error-border:#b83645;--notice-error-fg:#701b27;--background:220 43% 97%;--foreground:220 38% 15%;--card:0 0% 100%;--card-foreground:220 38% 15%;--popover:0 0% 100%;--popover-foreground:220 38% 15%;--primary:222 80% 53%;--primary-foreground:0 0% 100%;--secondary:217 33% 93%;--secondary-foreground:220 38% 15%;--muted:217 33% 93%;--muted-foreground:218 13% 46%;--accent-hsl:222 80% 53%;--accent-foreground:0 0% 100%;--destructive:0 72% 51%;--destructive-foreground:0 0% 100%;--border:218 28% 88%;--input:218 28% 88%;--ring:222 80% 53%;--chart-1:0 72% 51%;--chart-2:142 71% 45%;--chart-3:222 80% 53%;--chart-4:36 84% 48%;--chart-5:262 83% 58%;--sidebar-background:0 0% 100%;--sidebar-foreground:220 38% 15%;--sidebar-primary:222 80% 53%;--sidebar-primary-foreground:0 0% 100%;--sidebar-accent:217 33% 93%;--sidebar-accent-foreground:220 38% 15%;--sidebar-border:218 28% 88%;--sidebar-ring:222 80% 53%}.onclaw-plugin-root .pointer-events-none{pointer-events:none}.onclaw-plugin-root .pointer-events-auto{pointer-events:auto}.onclaw-plugin-root .visible{visibility:visible}.onclaw-plugin-root .static{position:static}.onclaw-plugin-root .fixed{position:fixed}.onclaw-plugin-root .absolute{position:absolute}.onclaw-plugin-root .relative{position:relative}.onclaw-plugin-root .sticky{position:sticky}.onclaw-plugin-root .inset-0{inset:0}.onclaw-plugin-root .-right-1{right:-.25rem}.onclaw-plugin-root .-right-3{right:-.75rem}.onclaw-plugin-root .-top-1{top:-.25rem}.onclaw-plugin-root .-top-3{top:-.75rem}.onclaw-plugin-root .bottom-1{bottom:.25rem}.onclaw-plugin-root .bottom-20{bottom:5rem}.onclaw-plugin-root .bottom-5{bottom:1.25rem}.onclaw-plugin-root .bottom-full{bottom:100%}.onclaw-plugin-root .left-0{left:0}.onclaw-plugin-root .left-0\\.5{left:.125rem}.onclaw-plugin-root .left-14{left:3.5rem}.onclaw-plugin-root .left-3{left:.75rem}.onclaw-plugin-root .right-0{right:0}.onclaw-plugin-root .right-1{right:.25rem}.onclaw-plugin-root .right-3{right:.75rem}.onclaw-plugin-root .right-4{right:1rem}.onclaw-plugin-root .right-5{right:1.25rem}.onclaw-plugin-root .top-0{top:0}.onclaw-plugin-root .top-0\\.5{top:.125rem}.onclaw-plugin-root .top-3{top:.75rem}.onclaw-plugin-root .isolate{isolation:isolate}.onclaw-plugin-root .z-10{z-index:10}.onclaw-plugin-root .z-20{z-index:20}.onclaw-plugin-root .z-30{z-index:30}.onclaw-plugin-root .z-50{z-index:50}.onclaw-plugin-root .z-\\[100\\]{z-index:100}.onclaw-plugin-root .z-\\[120\\]{z-index:120}.onclaw-plugin-root .z-\\[70\\]{z-index:70}.onclaw-plugin-root .col-span-2{grid-column:span 2/span 2}.onclaw-plugin-root .m-0{margin:0}.onclaw-plugin-root .m-3{margin:.75rem}.onclaw-plugin-root .m-4{margin:1rem}.onclaw-plugin-root .mx-1{margin-left:.25rem;margin-right:.25rem}.onclaw-plugin-root .mx-auto{margin-left:auto;margin-right:auto}.onclaw-plugin-root .my-1{margin-top:.25rem;margin-bottom:.25rem}.onclaw-plugin-root .mb-1{margin-bottom:.25rem}.onclaw-plugin-root .mb-1\\.5{margin-bottom:.375rem}.onclaw-plugin-root .mb-2{margin-bottom:.5rem}.onclaw-plugin-root .mb-3{margin-bottom:.75rem}.onclaw-plugin-root .mb-4{margin-bottom:1rem}.onclaw-plugin-root .mb-5{margin-bottom:1.25rem}.onclaw-plugin-root .mb-6{margin-bottom:1.5rem}.onclaw-plugin-root .mb-8{margin-bottom:2rem}.onclaw-plugin-root .ml-0\\.5{margin-left:.125rem}.onclaw-plugin-root .ml-1{margin-left:.25rem}.onclaw-plugin-root .ml-2{margin-left:.5rem}.onclaw-plugin-root .ml-3{margin-left:.75rem}.onclaw-plugin-root .ml-4{margin-left:1rem}.onclaw-plugin-root .ml-auto{margin-left:auto}.onclaw-plugin-root .mr-1{margin-right:.25rem}.onclaw-plugin-root .mr-2{margin-right:.5rem}.onclaw-plugin-root .mt-0\\.5{margin-top:.125rem}.onclaw-plugin-root .mt-1{margin-top:.25rem}.onclaw-plugin-root .mt-1\\.5{margin-top:.375rem}.onclaw-plugin-root .mt-2{margin-top:.5rem}.onclaw-plugin-root .mt-3{margin-top:.75rem}.onclaw-plugin-root .mt-4{margin-top:1rem}.onclaw-plugin-root .mt-5{margin-top:1.25rem}.onclaw-plugin-root .mt-6{margin-top:1.5rem}.onclaw-plugin-root .line-clamp-2{-webkit-line-clamp:2}.onclaw-plugin-root .line-clamp-2,.onclaw-plugin-root .line-clamp-3{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical}.onclaw-plugin-root .line-clamp-3{-webkit-line-clamp:3}.onclaw-plugin-root .block{display:block}.onclaw-plugin-root .inline-block{display:inline-block}.onclaw-plugin-root .flex{display:flex}.onclaw-plugin-root .inline-flex{display:inline-flex}.onclaw-plugin-root .table{display:table}.onclaw-plugin-root .grid{display:grid}.onclaw-plugin-root .hidden{display:none}.onclaw-plugin-root .h-0{height:0}.onclaw-plugin-root .h-1\\.5{height:.375rem}.onclaw-plugin-root .h-10{height:2.5rem}.onclaw-plugin-root .h-11{height:2.75rem}.onclaw-plugin-root .h-12{height:3rem}.onclaw-plugin-root .h-2\\.5{height:.625rem}.onclaw-plugin-root .h-20{height:5rem}.onclaw-plugin-root .h-24{height:6rem}.onclaw-plugin-root .h-3{height:.75rem}.onclaw-plugin-root .h-3\\.5{height:.875rem}.onclaw-plugin-root .h-32{height:8rem}.onclaw-plugin-root .h-4{height:1rem}.onclaw-plugin-root .h-44{height:11rem}.onclaw-plugin-root .h-48{height:12rem}.onclaw-plugin-root .h-5{height:1.25rem}.onclaw-plugin-root .h-7{height:1.75rem}.onclaw-plugin-root .h-72{height:18rem}.onclaw-plugin-root .h-8{height:2rem}.onclaw-plugin-root .h-9{height:2.25rem}.onclaw-plugin-root .h-\\[108px\\]{height:108px}.onclaw-plugin-root .h-\\[14px\\]{height:14px}.onclaw-plugin-root .h-\\[28px\\]{height:28px}.onclaw-plugin-root .h-\\[36px\\]{height:36px}.onclaw-plugin-root .h-\\[38px\\]{height:38px}.onclaw-plugin-root .h-\\[620px\\]{height:620px}.onclaw-plugin-root .h-\\[calc\\(100\\%-1rem\\)\\]{height:calc(100% - 1rem)}.onclaw-plugin-root .h-full{height:100%}.onclaw-plugin-root .h-px{height:1px}.onclaw-plugin-root .h-screen{height:100vh}.onclaw-plugin-root .max-h-44{max-height:11rem}.onclaw-plugin-root .max-h-80{max-height:20rem}.onclaw-plugin-root .max-h-\\[85vh\\]{max-height:85vh}.onclaw-plugin-root .max-h-\\[900px\\]{max-height:900px}.onclaw-plugin-root .max-h-\\[90vh\\]{max-height:90vh}.onclaw-plugin-root .max-h-\\[calc\\(100\\%-1rem\\)\\]{max-height:calc(100% - 1rem)}.onclaw-plugin-root .max-h-\\[calc\\(100\\%-2rem\\)\\]{max-height:calc(100% - 2rem)}.onclaw-plugin-root .min-h-0{min-height:0}.onclaw-plugin-root .min-h-12{min-height:3rem}.onclaw-plugin-root .min-h-14{min-height:3.5rem}.onclaw-plugin-root .min-h-20{min-height:5rem}.onclaw-plugin-root .min-h-40{min-height:10rem}.onclaw-plugin-root .min-h-56{min-height:14rem}.onclaw-plugin-root .min-h-64{min-height:16rem}.onclaw-plugin-root .min-h-72{min-height:18rem}.onclaw-plugin-root .min-h-\\[220px\\]{min-height:220px}.onclaw-plugin-root .min-h-\\[240px\\]{min-height:240px}.onclaw-plugin-root .min-h-\\[260px\\]{min-height:260px}.onclaw-plugin-root .min-h-\\[320px\\]{min-height:320px}.onclaw-plugin-root .min-h-\\[520px\\]{min-height:520px}.onclaw-plugin-root .min-h-\\[680px\\]{min-height:680px}.onclaw-plugin-root .min-h-full{min-height:100%}.onclaw-plugin-root .min-h-screen{min-height:100vh}.onclaw-plugin-root .w-1{width:.25rem}.onclaw-plugin-root .w-1\\.5{width:.375rem}.onclaw-plugin-root .w-10{width:2.5rem}.onclaw-plugin-root .w-11{width:2.75rem}.onclaw-plugin-root .w-12{width:3rem}.onclaw-plugin-root .w-14{width:3.5rem}.onclaw-plugin-root .w-16{width:4rem}.onclaw-plugin-root .w-2\\.5{width:.625rem}.onclaw-plugin-root .w-20{width:5rem}.onclaw-plugin-root .w-24{width:6rem}.onclaw-plugin-root .w-28{width:7rem}.onclaw-plugin-root .w-3{width:.75rem}.onclaw-plugin-root .w-3\\.5{width:.875rem}.onclaw-plugin-root .w-32{width:8rem}.onclaw-plugin-root .w-4{width:1rem}.onclaw-plugin-root .w-48{width:12rem}.onclaw-plugin-root .w-5{width:1.25rem}.onclaw-plugin-root .w-64{width:16rem}.onclaw-plugin-root .w-8{width:2rem}.onclaw-plugin-root .w-\\[108px\\]{width:108px}.onclaw-plugin-root .w-\\[14px\\]{width:14px}.onclaw-plugin-root .w-\\[300px\\]{width:300px}.onclaw-plugin-root .w-\\[400px\\]{width:400px}.onclaw-plugin-root .w-\\[76px\\]{width:76px}.onclaw-plugin-root .w-\\[80px\\]{width:80px}.onclaw-plugin-root .w-\\[calc\\(100\\%-1rem\\)\\]{width:calc(100% - 1rem)}.onclaw-plugin-root .w-\\[calc\\(100\\%-24px\\)\\]{width:calc(100% - 24px)}.onclaw-plugin-root .w-\\[min\\(48\\%\\2c 720px\\)\\]{width:min(48%,720px)}.onclaw-plugin-root .w-full{width:100%}.onclaw-plugin-root .w-screen{width:100vw}.onclaw-plugin-root .min-w-0{min-width:0}.onclaw-plugin-root .min-w-16{min-width:4rem}.onclaw-plugin-root .min-w-20{min-width:5rem}.onclaw-plugin-root .min-w-4{min-width:1rem}.onclaw-plugin-root .min-w-40{min-width:10rem}.onclaw-plugin-root .min-w-44{min-width:11rem}.onclaw-plugin-root .min-w-48{min-width:12rem}.onclaw-plugin-root .min-w-64{min-width:16rem}.onclaw-plugin-root .min-w-\\[1000px\\]{min-width:1000px}.onclaw-plugin-root .min-w-\\[12rem\\]{min-width:12rem}.onclaw-plugin-root .min-w-\\[16rem\\]{min-width:16rem}.onclaw-plugin-root .min-w-\\[400px\\]{min-width:400px}.onclaw-plugin-root .min-w-\\[441px\\]{min-width:441px}.onclaw-plugin-root .min-w-\\[58px\\]{min-width:58px}.onclaw-plugin-root .min-w-\\[620px\\]{min-width:620px}.onclaw-plugin-root .min-w-\\[700px\\]{min-width:700px}.onclaw-plugin-root .min-w-\\[760px\\]{min-width:760px}.onclaw-plugin-root .min-w-\\[980px\\]{min-width:980px}.onclaw-plugin-root .min-w-full{min-width:100%}.onclaw-plugin-root .min-w-max{min-width:-moz-max-content;min-width:max-content}.onclaw-plugin-root .max-w-24{max-width:6rem}.onclaw-plugin-root .max-w-2xl{max-width:42rem}.onclaw-plugin-root .max-w-32{max-width:8rem}.onclaw-plugin-root .max-w-3xl{max-width:48rem}.onclaw-plugin-root .max-w-56{max-width:14rem}.onclaw-plugin-root .max-w-\\[100px\\]{max-width:100px}.onclaw-plugin-root .max-w-\\[1100px\\]{max-width:1100px}.onclaw-plugin-root .max-w-\\[1480px\\]{max-width:1480px}.onclaw-plugin-root .max-w-\\[320px\\]{max-width:320px}.onclaw-plugin-root .max-w-\\[460px\\]{max-width:460px}.onclaw-plugin-root .max-w-\\[480px\\]{max-width:480px}.onclaw-plugin-root .max-w-\\[520px\\]{max-width:520px}.onclaw-plugin-root .max-w-\\[560px\\]{max-width:560px}.onclaw-plugin-root .max-w-md{max-width:28rem}.onclaw-plugin-root .max-w-sm{max-width:24rem}.onclaw-plugin-root .max-w-xl{max-width:36rem}.onclaw-plugin-root .max-w-xs{max-width:20rem}.onclaw-plugin-root .flex-1{flex:1 1 0%}.onclaw-plugin-root .flex-\\[0_0_42\\%\\]{flex:0 0 42%}.onclaw-plugin-root .flex-\\[1\\.25\\]{flex:1.25}.onclaw-plugin-root .flex-none{flex:none}.onclaw-plugin-root .flex-shrink-0,.onclaw-plugin-root .shrink-0{flex-shrink:0}.onclaw-plugin-root .grow{flex-grow:1}.onclaw-plugin-root .basis-48{flex-basis:12rem}.onclaw-plugin-root .table-fixed{table-layout:fixed}.onclaw-plugin-root .border-collapse{border-collapse:collapse}.onclaw-plugin-root .translate-x-0\\.5{--tw-translate-x:0.125rem}.onclaw-plugin-root .translate-x-0\\.5,.onclaw-plugin-root .translate-x-\\[18px\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.onclaw-plugin-root .translate-x-\\[18px\\]{--tw-translate-x:18px}.onclaw-plugin-root .rotate-180{--tw-rotate:180deg}.onclaw-plugin-root .rotate-180,.onclaw-plugin-root .scale-90{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.onclaw-plugin-root .scale-90{--tw-scale-x:.9;--tw-scale-y:.9}.onclaw-plugin-root .transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.onclaw-plugin-root .animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes spin{to{transform:rotate(1turn)}}.onclaw-plugin-root .animate-spin{animation:spin 1s linear infinite}.onclaw-plugin-root .cursor-default{cursor:default}.onclaw-plugin-root .cursor-grab{cursor:grab}.onclaw-plugin-root .cursor-not-allowed{cursor:not-allowed}.onclaw-plugin-root .cursor-pointer{cursor:pointer}.onclaw-plugin-root .select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.onclaw-plugin-root .resize-y{resize:vertical}.onclaw-plugin-root .scroll-mt-5{scroll-margin-top:1.25rem}.onclaw-plugin-root .grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.onclaw-plugin-root .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.onclaw-plugin-root .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.onclaw-plugin-root .grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.onclaw-plugin-root .grid-cols-\\[repeat\\(21\\2c minmax\\(0\\2c 1fr\\)\\)\\]{grid-template-columns:repeat(21,minmax(0,1fr))}.onclaw-plugin-root .flex-row-reverse{flex-direction:row-reverse}.onclaw-plugin-root .flex-col{flex-direction:column}.onclaw-plugin-root .flex-wrap{flex-wrap:wrap}.onclaw-plugin-root .items-start{align-items:flex-start}.onclaw-plugin-root .items-end{align-items:flex-end}.onclaw-plugin-root .items-center{align-items:center}.onclaw-plugin-root .items-baseline{align-items:baseline}.onclaw-plugin-root .justify-end{justify-content:flex-end}.onclaw-plugin-root .justify-center{justify-content:center}.onclaw-plugin-root .justify-between{justify-content:space-between}.onclaw-plugin-root .gap-0\\.5{gap:.125rem}.onclaw-plugin-root .gap-1{gap:.25rem}.onclaw-plugin-root .gap-1\\.5{gap:.375rem}.onclaw-plugin-root .gap-2{gap:.5rem}.onclaw-plugin-root .gap-2\\.5{gap:.625rem}.onclaw-plugin-root .gap-3{gap:.75rem}.onclaw-plugin-root .gap-4{gap:1rem}.onclaw-plugin-root .gap-5{gap:1.25rem}.onclaw-plugin-root .gap-px{gap:1px}.onclaw-plugin-root .gap-x-1{-moz-column-gap:.25rem;column-gap:.25rem}.onclaw-plugin-root .gap-x-3{-moz-column-gap:.75rem;column-gap:.75rem}.onclaw-plugin-root .gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.onclaw-plugin-root .gap-x-5{-moz-column-gap:1.25rem;column-gap:1.25rem}.onclaw-plugin-root .gap-y-1{row-gap:.25rem}.onclaw-plugin-root .gap-y-2{row-gap:.5rem}.onclaw-plugin-root :is(.space-y-1\\.5>:not([hidden])~:not([hidden])){--tw-space-y-reverse:0;margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.375rem*var(--tw-space-y-reverse))}.onclaw-plugin-root :is(.space-y-2>:not([hidden])~:not([hidden])){--tw-space-y-reverse:0;margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem*var(--tw-space-y-reverse))}.onclaw-plugin-root :is(.space-y-3>:not([hidden])~:not([hidden])){--tw-space-y-reverse:0;margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.75rem*var(--tw-space-y-reverse))}.onclaw-plugin-root :is(.space-y-4>:not([hidden])~:not([hidden])){--tw-space-y-reverse:0;margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem*var(--tw-space-y-reverse))}.onclaw-plugin-root :is(.space-y-5>:not([hidden])~:not([hidden])){--tw-space-y-reverse:0;margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.25rem*var(--tw-space-y-reverse))}.onclaw-plugin-root :is(.space-y-6>:not([hidden])~:not([hidden])){--tw-space-y-reverse:0;margin-top:calc(1.5rem*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem*var(--tw-space-y-reverse))}.onclaw-plugin-root :is(.divide-y>:not([hidden])~:not([hidden])){--tw-divide-y-reverse:0;border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px*var(--tw-divide-y-reverse))}.onclaw-plugin-root :is(.divide-\\[var\\(--market-grid\\)\\]>:not([hidden])~:not([hidden])){border-color:var(--market-grid)}.onclaw-plugin-root .overflow-auto{overflow:auto}.onclaw-plugin-root .overflow-hidden{overflow:hidden}.onclaw-plugin-root .overflow-x-auto{overflow-x:auto}.onclaw-plugin-root .overflow-y-auto{overflow-y:auto}.onclaw-plugin-root .overflow-x-hidden{overflow-x:hidden}.onclaw-plugin-root .overflow-y-hidden{overflow-y:hidden}.onclaw-plugin-root .truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.onclaw-plugin-root .whitespace-nowrap{white-space:nowrap}.onclaw-plugin-root .whitespace-pre-wrap{white-space:pre-wrap}.onclaw-plugin-root .break-words{overflow-wrap:break-word}.onclaw-plugin-root .break-all{word-break:break-all}.onclaw-plugin-root .rounded{border-radius:.25rem}.onclaw-plugin-root .rounded-2xl{border-radius:1rem}.onclaw-plugin-root .rounded-full{border-radius:9999px}.onclaw-plugin-root .rounded-lg{border-radius:var(--radius)}.onclaw-plugin-root .rounded-md{border-radius:calc(var(--radius) - 2px)}.onclaw-plugin-root .rounded-xl{border-radius:.75rem}.onclaw-plugin-root .rounded-l{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.onclaw-plugin-root .rounded-r{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.onclaw-plugin-root .rounded-t-lg{border-top-left-radius:var(--radius);border-top-right-radius:var(--radius)}.onclaw-plugin-root .rounded-t-sm{border-top-left-radius:calc(var(--radius) - 4px);border-top-right-radius:calc(var(--radius) - 4px)}.onclaw-plugin-root .border{border-width:1px}.onclaw-plugin-root .border-0{border-width:0}.onclaw-plugin-root .border-2{border-width:2px}.onclaw-plugin-root .border-4{border-width:4px}.onclaw-plugin-root .border-x{border-left-width:1px;border-right-width:1px}.onclaw-plugin-root .border-y{border-top-width:1px;border-bottom-width:1px}.onclaw-plugin-root .border-y-0{border-top-width:0;border-bottom-width:0}.onclaw-plugin-root .border-b{border-bottom-width:1px}.onclaw-plugin-root .border-b-0{border-bottom-width:0}.onclaw-plugin-root .border-b-2{border-bottom-width:2px}.onclaw-plugin-root .border-l{border-left-width:1px}.onclaw-plugin-root .border-l-2{border-left-width:2px}.onclaw-plugin-root .border-r{border-right-width:1px}.onclaw-plugin-root .border-r-0{border-right-width:0}.onclaw-plugin-root .border-r-2{border-right-width:2px}.onclaw-plugin-root .border-t{border-top-width:1px}.onclaw-plugin-root .border-t-2{border-top-width:2px}.onclaw-plugin-root .border-dashed{border-style:dashed}.onclaw-plugin-root .border-\\[color\\:var\\(--border-color\\)\\]{border-color:var(--border-color)}.onclaw-plugin-root .border-\\[var\\(--accent\\)\\]{border-color:var(--accent)}.onclaw-plugin-root .border-\\[var\\(--border-strong\\)\\]{border-color:var(--border-strong)}.onclaw-plugin-root .border-\\[var\\(--market-grid\\)\\]{border-color:var(--market-grid)}.onclaw-plugin-root .border-\\[var\\(--market-grid-selected\\)\\]{border-color:var(--market-grid-selected)}.onclaw-plugin-root .border-\\[var\\(--market-grid-strong\\)\\]{border-color:var(--market-grid-strong)}.onclaw-plugin-root .border-\\[var\\(--negative\\)\\]{border-color:var(--negative)}.onclaw-plugin-root .border-\\[var\\(--notice-error-border\\)\\]{border-color:var(--notice-error-border)}.onclaw-plugin-root .border-\\[var\\(--notice-info-border\\)\\]{border-color:var(--notice-info-border)}.onclaw-plugin-root .border-\\[var\\(--notice-warning-border\\)\\]{border-color:var(--notice-warning-border)}.onclaw-plugin-root .border-\\[var\\(--status-danger-badge\\)\\]{border-color:var(--status-danger-badge)}.onclaw-plugin-root .border-\\[var\\(--status-info-badge\\)\\]{border-color:var(--status-info-badge)}.onclaw-plugin-root .border-\\[var\\(--status-neutral-badge\\)\\]{border-color:var(--status-neutral-badge)}.onclaw-plugin-root .border-\\[var\\(--status-warning-badge\\)\\]{border-color:var(--status-warning-badge)}.onclaw-plugin-root .border-\\[var\\(--tag-regulatory-bg\\)\\]{border-color:var(--tag-regulatory-bg)}.onclaw-plugin-root .border-\\[var\\(--tag-topic-bg\\)\\]{border-color:var(--tag-topic-bg)}.onclaw-plugin-root .border-border-theme{border-color:var(--border-color)}.onclaw-plugin-root .border-transparent{border-color:transparent}.onclaw-plugin-root .border-l-\\[var\\(--market-grid-selected\\)\\]{border-left-color:var(--market-grid-selected)}.onclaw-plugin-root .border-r-\\[var\\(--market-grid-strong\\)\\]{border-right-color:var(--market-grid-strong)}.onclaw-plugin-root .border-t-accent-theme{border-top-color:var(--accent)}.onclaw-plugin-root .border-t-transparent{border-top-color:transparent}.onclaw-plugin-root .bg-\\[color\\:color-mix\\(in_srgb\\2c var\\(--accent\\)_10\\%\\2c transparent\\)\\]{background-color:color-mix(in srgb,var(--accent) 10%,transparent)}.onclaw-plugin-root .bg-\\[color\\:color-mix\\(in_srgb\\2c var\\(--market-canvas\\)_88\\%\\2c transparent\\)\\]{background-color:color-mix(in srgb,var(--market-canvas) 88%,transparent)}.onclaw-plugin-root .bg-\\[var\\(--accent-soft\\)\\]{background-color:var(--accent-soft)}.onclaw-plugin-root .bg-\\[var\\(--danger\\)\\]{background-color:var(--danger)}.onclaw-plugin-root .bg-\\[var\\(--market-canvas\\)\\]{background-color:var(--market-canvas)}.onclaw-plugin-root .bg-\\[var\\(--market-cell\\)\\]{background-color:var(--market-cell)}.onclaw-plugin-root .bg-\\[var\\(--market-cell-hover\\)\\]{background-color:var(--market-cell-hover)}.onclaw-plugin-root .bg-\\[var\\(--market-fall-badge\\)\\]{background-color:var(--market-fall-badge)}.onclaw-plugin-root .bg-\\[var\\(--market-flat-badge\\)\\]{background-color:var(--market-flat-badge)}.onclaw-plugin-root .bg-\\[var\\(--market-frozen\\)\\]{background-color:var(--market-frozen)}.onclaw-plugin-root .bg-\\[var\\(--market-grid-strong\\)\\]{background-color:var(--market-grid-strong)}.onclaw-plugin-root .bg-\\[var\\(--market-header\\)\\]{background-color:var(--market-header)}.onclaw-plugin-root .bg-\\[var\\(--market-limit-down-bg\\)\\]{background-color:var(--market-limit-down-bg)}.onclaw-plugin-root .bg-\\[var\\(--market-limit-up-bg\\)\\]{background-color:var(--market-limit-up-bg)}.onclaw-plugin-root .bg-\\[var\\(--market-rise-badge\\)\\]{background-color:var(--market-rise-badge)}.onclaw-plugin-root .bg-\\[var\\(--market-selected\\)\\]{background-color:var(--market-selected)}.onclaw-plugin-root .bg-\\[var\\(--negative\\)\\]{background-color:var(--negative)}.onclaw-plugin-root .bg-\\[var\\(--notice-error-bg\\)\\]{background-color:var(--notice-error-bg)}.onclaw-plugin-root .bg-\\[var\\(--notice-info-bg\\)\\]{background-color:var(--notice-info-bg)}.onclaw-plugin-root .bg-\\[var\\(--notice-warning-bg\\)\\]{background-color:var(--notice-warning-bg)}.onclaw-plugin-root .bg-\\[var\\(--overlay-bg\\)\\]{background-color:var(--overlay-bg)}.onclaw-plugin-root .bg-\\[var\\(--selected-bg\\)\\]{background-color:var(--selected-bg)}.onclaw-plugin-root .bg-\\[var\\(--status-danger-badge\\)\\]{background-color:var(--status-danger-badge)}.onclaw-plugin-root .bg-\\[var\\(--status-info-badge\\)\\]{background-color:var(--status-info-badge)}.onclaw-plugin-root .bg-\\[var\\(--status-neutral-badge\\)\\]{background-color:var(--status-neutral-badge)}.onclaw-plugin-root .bg-\\[var\\(--status-success-badge\\)\\]{background-color:var(--status-success-badge)}.onclaw-plugin-root .bg-\\[var\\(--status-warning-badge\\)\\]{background-color:var(--status-warning-badge)}.onclaw-plugin-root .bg-\\[var\\(--tag-auction-bg\\)\\]{background-color:var(--tag-auction-bg)}.onclaw-plugin-root .bg-\\[var\\(--tag-convertible-bg\\)\\]{background-color:var(--tag-convertible-bg)}.onclaw-plugin-root .bg-\\[var\\(--tag-regulatory-bg\\)\\]{background-color:var(--tag-regulatory-bg)}.onclaw-plugin-root .bg-\\[var\\(--tag-relation-1-bg\\)\\]{background-color:var(--tag-relation-1-bg)}.onclaw-plugin-root .bg-\\[var\\(--tag-relation-2-bg\\)\\]{background-color:var(--tag-relation-2-bg)}.onclaw-plugin-root .bg-\\[var\\(--tag-relation-3-bg\\)\\]{background-color:var(--tag-relation-3-bg)}.onclaw-plugin-root .bg-\\[var\\(--tag-relation-4-bg\\)\\]{background-color:var(--tag-relation-4-bg)}.onclaw-plugin-root .bg-\\[var\\(--tag-topic-bg\\)\\]{background-color:var(--tag-topic-bg)}.onclaw-plugin-root .bg-\\[var\\(--tag-us-market-bg\\)\\]{background-color:var(--tag-us-market-bg)}.onclaw-plugin-root .bg-accent-theme{background-color:var(--accent)}.onclaw-plugin-root .bg-bg-elevated{background-color:var(--bg-elevated)}.onclaw-plugin-root .bg-bg-primary{background-color:var(--bg-primary)}.onclaw-plugin-root .bg-bg-secondary{background-color:var(--bg-secondary)}.onclaw-plugin-root .bg-bg-tertiary{background-color:var(--bg-tertiary)}.onclaw-plugin-root .bg-black\\/55{background-color:rgba(0,0,0,.55)}.onclaw-plugin-root .bg-blue-500{--tw-bg-opacity:1;background-color:rgb(59 130 246/var(--tw-bg-opacity,1))}.onclaw-plugin-root .bg-emerald-500\\/10{background-color:rgba(16,185,129,.1)}.onclaw-plugin-root .bg-emerald-500\\/15{background-color:rgba(16,185,129,.15)}.onclaw-plugin-root .bg-green-500{--tw-bg-opacity:1;background-color:rgb(34 197 94/var(--tw-bg-opacity,1))}.onclaw-plugin-root .bg-green-600{--tw-bg-opacity:1;background-color:rgb(22 163 74/var(--tw-bg-opacity,1))}.onclaw-plugin-root .bg-purple-500{--tw-bg-opacity:1;background-color:rgb(168 85 247/var(--tw-bg-opacity,1))}.onclaw-plugin-root .bg-red-500{--tw-bg-opacity:1;background-color:rgb(239 68 68/var(--tw-bg-opacity,1))}.onclaw-plugin-root .bg-red-500\\/15{background-color:rgba(239,68,68,.15)}.onclaw-plugin-root .bg-sky-500\\/15{background-color:rgba(14,165,233,.15)}.onclaw-plugin-root .bg-slate-500\\/15{background-color:rgba(100,116,139,.15)}.onclaw-plugin-root .bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1))}.onclaw-plugin-root .object-cover{-o-object-fit:cover;object-fit:cover}.onclaw-plugin-root .p-0{padding:0}.onclaw-plugin-root .p-0\\.5{padding:.125rem}.onclaw-plugin-root .p-1{padding:.25rem}.onclaw-plugin-root .p-1\\.5{padding:.375rem}.onclaw-plugin-root .p-2{padding:.5rem}.onclaw-plugin-root .p-3{padding:.75rem}.onclaw-plugin-root .p-4{padding:1rem}.onclaw-plugin-root .p-5{padding:1.25rem}.onclaw-plugin-root .p-6{padding:1.5rem}.onclaw-plugin-root .p-8{padding:2rem}.onclaw-plugin-root .px-1{padding-left:.25rem;padding-right:.25rem}.onclaw-plugin-root .px-1\\.5{padding-left:.375rem;padding-right:.375rem}.onclaw-plugin-root .px-2{padding-left:.5rem;padding-right:.5rem}.onclaw-plugin-root .px-2\\.5{padding-left:.625rem;padding-right:.625rem}.onclaw-plugin-root .px-3{padding-left:.75rem;padding-right:.75rem}.onclaw-plugin-root .px-4{padding-left:1rem;padding-right:1rem}.onclaw-plugin-root .px-5{padding-left:1.25rem;padding-right:1.25rem}.onclaw-plugin-root .px-6{padding-left:1.5rem;padding-right:1.5rem}.onclaw-plugin-root .py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.onclaw-plugin-root .py-1{padding-top:.25rem;padding-bottom:.25rem}.onclaw-plugin-root .py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.onclaw-plugin-root .py-2{padding-top:.5rem;padding-bottom:.5rem}.onclaw-plugin-root .py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.onclaw-plugin-root .py-3{padding-top:.75rem;padding-bottom:.75rem}.onclaw-plugin-root .py-4{padding-top:1rem;padding-bottom:1rem}.onclaw-plugin-root .py-5{padding-top:1.25rem;padding-bottom:1.25rem}.onclaw-plugin-root .py-6{padding-top:1.5rem;padding-bottom:1.5rem}.onclaw-plugin-root .py-8{padding-top:2rem;padding-bottom:2rem}.onclaw-plugin-root .pb-0{padding-bottom:0}.onclaw-plugin-root .pb-1{padding-bottom:.25rem}.onclaw-plugin-root .pb-3{padding-bottom:.75rem}.onclaw-plugin-root .pb-4{padding-bottom:1rem}.onclaw-plugin-root .pb-8{padding-bottom:2rem}.onclaw-plugin-root .pl-3{padding-left:.75rem}.onclaw-plugin-root .pl-8{padding-left:2rem}.onclaw-plugin-root .pr-1{padding-right:.25rem}.onclaw-plugin-root .pr-3{padding-right:.75rem}.onclaw-plugin-root .pt-0\\.5{padding-top:.125rem}.onclaw-plugin-root .pt-2{padding-top:.5rem}.onclaw-plugin-root .pt-2\\.5{padding-top:.625rem}.onclaw-plugin-root .pt-3{padding-top:.75rem}.onclaw-plugin-root .text-left{text-align:left}.onclaw-plugin-root .text-center{text-align:center}.onclaw-plugin-root .text-right{text-align:right}.onclaw-plugin-root .align-top{vertical-align:top}.onclaw-plugin-root .align-middle{vertical-align:middle}.onclaw-plugin-root .font-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.onclaw-plugin-root .text-2xl{font-size:1.5rem;line-height:2rem}.onclaw-plugin-root .text-3xl{font-size:1.875rem;line-height:2.25rem}.onclaw-plugin-root .text-\\[10px\\]{font-size:10px}.onclaw-plugin-root .text-\\[11px\\]{font-size:11px}.onclaw-plugin-root .text-\\[8px\\]{font-size:8px}.onclaw-plugin-root .text-\\[9px\\]{font-size:9px}.onclaw-plugin-root .text-base{font-size:1rem;line-height:1.5rem}.onclaw-plugin-root .text-lg{font-size:1.125rem;line-height:1.75rem}.onclaw-plugin-root .text-sm{font-size:.875rem;line-height:1.25rem}.onclaw-plugin-root .text-xl{font-size:1.25rem;line-height:1.75rem}.onclaw-plugin-root .text-xs{font-size:.75rem;line-height:1rem}.onclaw-plugin-root .font-bold{font-weight:700}.onclaw-plugin-root .font-medium{font-weight:500}.onclaw-plugin-root .font-normal{font-weight:400}.onclaw-plugin-root .font-semibold{font-weight:600}.onclaw-plugin-root .uppercase{text-transform:uppercase}.onclaw-plugin-root .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.onclaw-plugin-root .leading-3{line-height:.75rem}.onclaw-plugin-root .leading-4{line-height:1rem}.onclaw-plugin-root .leading-5{line-height:1.25rem}.onclaw-plugin-root .leading-6{line-height:1.5rem}.onclaw-plugin-root .leading-7{line-height:1.75rem}.onclaw-plugin-root .leading-none{line-height:1}.onclaw-plugin-root .leading-relaxed{line-height:1.625}.onclaw-plugin-root .leading-tight{line-height:1.25}.onclaw-plugin-root .tracking-\\[0\\.12em\\]{letter-spacing:.12em}.onclaw-plugin-root .tracking-\\[0\\.16em\\]{letter-spacing:.16em}.onclaw-plugin-root .tracking-\\[0\\.18em\\]{letter-spacing:.18em}.onclaw-plugin-root .tracking-\\[0\\.2em\\]{letter-spacing:.2em}.onclaw-plugin-root .tracking-\\[0\\.35em\\]{letter-spacing:.35em}.onclaw-plugin-root .tracking-\\[0\\.3em\\]{letter-spacing:.3em}.onclaw-plugin-root .tracking-wide{letter-spacing:.025em}.onclaw-plugin-root .tracking-wider{letter-spacing:.05em}.onclaw-plugin-root .tracking-widest{letter-spacing:.1em}.onclaw-plugin-root .text-\\[var\\(--accent-contrast\\)\\]{color:var(--accent-contrast)}.onclaw-plugin-root .text-\\[var\\(--badge-fg\\)\\]{color:var(--badge-fg)}.onclaw-plugin-root .text-\\[var\\(--danger-contrast\\)\\]{color:var(--danger-contrast)}.onclaw-plugin-root .text-\\[var\\(--market-fall\\)\\]{color:var(--market-fall)}.onclaw-plugin-root .text-\\[var\\(--market-fall-badge\\)\\]{color:var(--market-fall-badge)}.onclaw-plugin-root .text-\\[var\\(--market-grid-selected\\)\\]{color:var(--market-grid-selected)}.onclaw-plugin-root .text-\\[var\\(--market-limit-down-fg\\)\\]{color:var(--market-limit-down-fg)}.onclaw-plugin-root .text-\\[var\\(--market-limit-up-fg\\)\\]{color:var(--market-limit-up-fg)}.onclaw-plugin-root .text-\\[var\\(--market-rise\\)\\]{color:var(--market-rise)}.onclaw-plugin-root .text-\\[var\\(--market-rise-badge\\)\\]{color:var(--market-rise-badge)}.onclaw-plugin-root .text-\\[var\\(--market-text-muted\\)\\]{color:var(--market-text-muted)}.onclaw-plugin-root .text-\\[var\\(--market-text-primary\\)\\]{color:var(--market-text-primary)}.onclaw-plugin-root .text-\\[var\\(--market-text-secondary\\)\\]{color:var(--market-text-secondary)}.onclaw-plugin-root .text-\\[var\\(--negative\\)\\]{color:var(--negative)}.onclaw-plugin-root .text-\\[var\\(--notice-error-fg\\)\\]{color:var(--notice-error-fg)}.onclaw-plugin-root .text-\\[var\\(--notice-info-fg\\)\\]{color:var(--notice-info-fg)}.onclaw-plugin-root .text-\\[var\\(--notice-success-fg\\)\\]{color:var(--notice-success-fg)}.onclaw-plugin-root .text-\\[var\\(--notice-warning-fg\\)\\]{color:var(--notice-warning-fg)}.onclaw-plugin-root .text-\\[var\\(--positive\\)\\]{color:var(--positive)}.onclaw-plugin-root .text-\\[var\\(--status-info-badge\\)\\]{color:var(--status-info-badge)}.onclaw-plugin-root .text-\\[var\\(--text-muted\\)\\]{color:var(--text-muted)}.onclaw-plugin-root .text-emerald-400{--tw-text-opacity:1;color:rgb(52 211 153/var(--tw-text-opacity,1))}.onclaw-plugin-root .text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity,1))}.onclaw-plugin-root .text-green-400{--tw-text-opacity:1;color:rgb(74 222 128/var(--tw-text-opacity,1))}.onclaw-plugin-root .text-red-400{--tw-text-opacity:1;color:rgb(248 113 113/var(--tw-text-opacity,1))}.onclaw-plugin-root .text-red-400\\/60{color:hsla(0,91%,71%,.6)}.onclaw-plugin-root .text-sky-400{--tw-text-opacity:1;color:rgb(56 189 248/var(--tw-text-opacity,1))}.onclaw-plugin-root .text-slate-400{--tw-text-opacity:1;color:rgb(148 163 184/var(--tw-text-opacity,1))}.onclaw-plugin-root .text-text-gold{color:var(--text-gold)}.onclaw-plugin-root .text-text-muted{color:var(--text-muted)}.onclaw-plugin-root .text-text-primary{color:var(--text-primary)}.onclaw-plugin-root .text-text-secondary{color:var(--text-secondary)}.onclaw-plugin-root .underline{text-decoration-line:underline}.onclaw-plugin-root .line-through{text-decoration-line:line-through}.onclaw-plugin-root .decoration-gray-500{text-decoration-color:#6b7280}.onclaw-plugin-root .underline-offset-2{text-underline-offset:2px}.onclaw-plugin-root .accent-\\[var\\(--accent\\)\\]{accent-color:var(--accent)}.onclaw-plugin-root .accent-\\[var\\(--status-info-badge\\)\\]{accent-color:var(--status-info-badge)}.onclaw-plugin-root .opacity-35{opacity:.35}.onclaw-plugin-root .opacity-50{opacity:.5}.onclaw-plugin-root .opacity-60{opacity:.6}.onclaw-plugin-root .opacity-80{opacity:.8}.onclaw-plugin-root .opacity-90{opacity:.9}.onclaw-plugin-root .shadow-2xl{--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.onclaw-plugin-root .shadow-\\[0_0_0_4px_var\\(--market-selected\\)\\]{--tw-shadow:0 0 0 4px var(--market-selected);--tw-shadow-colored:0 0 0 4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.onclaw-plugin-root .shadow-\\[0_0_15px_rgba\\(226\\2c 185\\2c 110\\2c 0\\.3\\)\\]{--tw-shadow:0 0 15px hsla(39,67%,66%,.3);--tw-shadow-colored:0 0 15px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.onclaw-plugin-root .shadow-\\[0_24px_80px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.45\\)\\]{--tw-shadow:0 24px 80px rgba(0,0,0,.45);--tw-shadow-colored:0 24px 80px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.onclaw-plugin-root .shadow-\\[0_2px_8px_var\\(--market-frozen-shadow\\)\\]{--tw-shadow:0 2px 8px var(--market-frozen-shadow);--tw-shadow-colored:0 2px 8px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.onclaw-plugin-root .shadow-\\[4px_0_12px_var\\(--market-frozen-shadow\\)\\]{--tw-shadow:4px 0 12px var(--market-frozen-shadow);--tw-shadow-colored:4px 0 12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.onclaw-plugin-root .shadow-\\[4px_0_8px_var\\(--market-frozen-shadow\\)\\]{--tw-shadow:4px 0 8px var(--market-frozen-shadow);--tw-shadow-colored:4px 0 8px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.onclaw-plugin-root .shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)}.onclaw-plugin-root .shadow-lg,.onclaw-plugin-root .shadow-sm{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.onclaw-plugin-root .shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color)}.onclaw-plugin-root .shadow-xl{--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.onclaw-plugin-root .shadow-green-400{--tw-shadow-color:#4ade80;--tw-shadow:var(--tw-shadow-colored)}.onclaw-plugin-root .outline-none{outline:2px solid transparent;outline-offset:2px}.onclaw-plugin-root .ring-1{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.onclaw-plugin-root .ring-\\[var\\(--accent\\)\\]{--tw-ring-color:var(--accent)}.onclaw-plugin-root .filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.onclaw-plugin-root .backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px)}.onclaw-plugin-root .backdrop-blur-\\[1px\\],.onclaw-plugin-root .backdrop-blur-sm{backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.onclaw-plugin-root .backdrop-blur-sm{--tw-backdrop-blur:blur(4px)}.onclaw-plugin-root .transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.onclaw-plugin-root .transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.onclaw-plugin-root .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.onclaw-plugin-root .transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.onclaw-plugin-root .transition-shadow{transition-property:box-shadow;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.onclaw-plugin-root .transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.onclaw-plugin-root .duration-200{transition-duration:.2s}.onclaw-plugin-root .duration-300{transition-duration:.3s}.onclaw-plugin-root .ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}@keyframes enter{0%{opacity:var(--tw-enter-opacity,1);transform:translate3d(var(--tw-enter-translate-x,0),var(--tw-enter-translate-y,0),0) scale3d(var(--tw-enter-scale,1),var(--tw-enter-scale,1),var(--tw-enter-scale,1)) rotate(var(--tw-enter-rotate,0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity,1);transform:translate3d(var(--tw-exit-translate-x,0),var(--tw-exit-translate-y,0),0) scale3d(var(--tw-exit-scale,1),var(--tw-exit-scale,1),var(--tw-exit-scale,1)) rotate(var(--tw-exit-rotate,0))}}.onclaw-plugin-root .duration-200{animation-duration:.2s}.onclaw-plugin-root .duration-300{animation-duration:.3s}.onclaw-plugin-root .ease-out{animation-timing-function:cubic-bezier(0,0,.2,1)}.onclaw-plugin-root .running{animation-play-state:running}.onclaw-plugin-root .paused{animation-play-state:paused}.onclaw-plugin-root .hide-scrollbar{-ms-overflow-style:none;scrollbar-width:none}.onclaw-plugin-root .hide-scrollbar::-webkit-scrollbar{display:none}.onclaw-plugin-root .scroll-smooth{scroll-behavior:smooth}.onclaw-plugin-root .gpu-accelerated{transform:translateZ(0);will-change:transform}.onclaw-plugin-root .animate-fade-in{animation:onclaw-fade-in .16s ease-out both}.onclaw-plugin-root .animate-fade-in-up{animation:onclaw-fade-in-up .18s ease-out both}.onclaw-plugin-root .\\[writing-mode\\:vertical-rl\\]{writing-mode:vertical-rl}.onclaw-plugin-root{display:flex;min-width:0;min-height:0;flex-direction:column;overflow:hidden}.onclaw-plugin-root.onclaw-settings-root{display:block;flex:none;height:auto;min-height:100%;max-height:none;overflow:visible;background:var(--market-canvas)}.onclaw-plugin-root .h-screen,.onclaw-plugin-root .min-h-screen{height:100%;min-height:100%}.onclaw-plugin-root .w-screen{width:100%}.onclaw-plugin-root .fixed.inset-0{position:absolute}.onclaw-plugin-root .onclaw-settings-card{border:1px solid var(--market-grid);background:var(--market-cell);box-shadow:0 2px 5px var(--market-frozen-shadow)}.onclaw-plugin-root .onclaw-settings-metric{border:1px solid var(--market-grid);background:var(--market-cell-future)}.onclaw-plugin-root .onclaw-settings-avatar{border:1px solid var(--market-grid-strong);background:var(--market-cell-future)}.onclaw-plugin-root .onclaw-auth-settings .bg-bg-primary,.onclaw-plugin-root .onclaw-auth-settings input.bg-bg-secondary{border-color:var(--market-grid-strong);background:var(--market-cell-future)}.onclaw-plugin-root .onclaw-auth-settings>.bg-bg-primary{background:transparent;padding:0}.onclaw-plugin-root .onclaw-auth-settings>.bg-bg-primary>.bg-bg-secondary{border-color:var(--market-grid);background:var(--market-cell);box-shadow:none}.onclaw-plugin-root .onclaw-auth-settings .border-border-theme{border-color:var(--market-grid-strong)}.onclaw-plugin-root .onclaw-button{border:1px solid var(--market-grid-strong);border-radius:6px;padding:.5rem .75rem;font-size:.75rem;font-weight:600;transition:background-color .15s ease,border-color .15s ease,color .15s ease,opacity .15s ease}.onclaw-plugin-root .onclaw-button:disabled{cursor:not-allowed;opacity:.5}.onclaw-plugin-root .onclaw-button-primary{border-color:var(--accent);background:var(--accent);color:var(--accent-contrast)}.onclaw-plugin-root .onclaw-button-primary:hover:not(:disabled){border-color:var(--accent-hover);background:var(--accent-hover)}.onclaw-plugin-root .onclaw-button-secondary{background:var(--market-cell-future);color:var(--text-primary)}.onclaw-plugin-root .onclaw-button-secondary:hover:not(:disabled){background:var(--market-cell-hover)}.onclaw-plugin-root .onclaw-button-danger{border-color:var(--notice-error-border);background:var(--notice-error-bg);color:var(--notice-error-fg)}.onclaw-plugin-root .onclaw-button-danger:hover:not(:disabled){border-color:var(--danger)}.onclaw-plugin-root .onclaw-linker-row,.onclaw-plugin-root .onclaw-linker-segment-group{border-color:var(--market-grid);background:var(--market-cell-future)}.onclaw-plugin-root .onclaw-linker-segment{border-color:var(--market-grid);background:transparent;color:var(--text-secondary);transition:background-color .15s ease,color .15s ease}.onclaw-plugin-root .onclaw-linker-segment.is-active,.onclaw-plugin-root .onclaw-linker-segment:hover{background:var(--market-selected);color:var(--text-primary)}.onclaw-plugin-root .onclaw-linker-segment.is-active{box-shadow:inset 0 -2px 0 var(--accent)}.onclaw-plugin-root .onclaw-linker-switch{border:1px solid var(--market-grid-strong);background:var(--market-grid);transition:background-color .15s ease,border-color .15s ease}.onclaw-plugin-root .onclaw-linker-switch.is-active{border-color:var(--accent);background:var(--accent)}.onclaw-plugin-root .onclaw-linker-action,.onclaw-plugin-root .onclaw-linker-direction{border:1px solid var(--market-grid-strong);background:var(--market-cell-future);color:var(--text-secondary);transition:background-color .15s ease,border-color .15s ease,color .15s ease}.onclaw-plugin-root .onclaw-linker-action:hover,.onclaw-plugin-root .onclaw-linker-direction:hover{background:var(--market-cell-hover);color:var(--text-primary)}.onclaw-plugin-root .onclaw-linker-direction.is-active{border-color:var(--accent);background:var(--market-selected);color:var(--text-primary)}.onclaw-plugin-root .onclaw-linker-input{border:1px solid var(--market-grid-strong);background:var(--market-cell-future)}.onclaw-plugin-root .onclaw-linker-input:focus{border-color:var(--accent);box-shadow:0 0 0 2px var(--accent-soft)}.onclaw-plugin-root .before\\:absolute:before{content:var(--tw-content);position:absolute}.onclaw-plugin-root .before\\:-left-\\[19px\\]:before{content:var(--tw-content);left:-19px}.onclaw-plugin-root .before\\:bottom-5:before{content:var(--tw-content);bottom:1.25rem}.onclaw-plugin-root .before\\:left-\\[17px\\]:before{content:var(--tw-content);left:17px}.onclaw-plugin-root .before\\:top-0:before{content:var(--tw-content);top:0}.onclaw-plugin-root .before\\:top-5:before{content:var(--tw-content);top:1.25rem}.onclaw-plugin-root .before\\:h-2:before{content:var(--tw-content);height:.5rem}.onclaw-plugin-root .before\\:w-2:before{content:var(--tw-content);width:.5rem}.onclaw-plugin-root .before\\:w-px:before{content:var(--tw-content);width:1px}.onclaw-plugin-root .before\\:rounded-full:before{content:var(--tw-content);border-radius:9999px}.onclaw-plugin-root .before\\:border-2:before{content:var(--tw-content);border-width:2px}.onclaw-plugin-root .before\\:border-\\[var\\(--market-cell\\)\\]:before{content:var(--tw-content);border-color:var(--market-cell)}.onclaw-plugin-root .before\\:bg-\\[var\\(--market-grid-strong\\)\\]:before{content:var(--tw-content);background-color:var(--market-grid-strong)}.onclaw-plugin-root .before\\:bg-\\[var\\(--status-info-badge\\)\\]:before{content:var(--tw-content);background-color:var(--status-info-badge)}.onclaw-plugin-root .last\\:border-b-0:last-child{border-bottom-width:0}.onclaw-plugin-root .last\\:border-r-0:last-child{border-right-width:0}.onclaw-plugin-root .hover\\:border-\\[var\\(--border-strong\\)\\]:hover{border-color:var(--border-strong)}.onclaw-plugin-root .hover\\:border-\\[var\\(--market-grid-strong\\)\\]:hover{border-color:var(--market-grid-strong)}.onclaw-plugin-root .hover\\:bg-\\[color\\:color-mix\\(in_srgb\\2c var\\(--accent\\)_20\\%\\2c transparent\\)\\]:hover{background-color:color-mix(in srgb,var(--accent) 20%,transparent)}.onclaw-plugin-root .hover\\:bg-\\[var\\(--accent-hover\\)\\]:hover{background-color:var(--accent-hover)}.onclaw-plugin-root .hover\\:bg-\\[var\\(--hover-bg\\)\\]:hover{background-color:var(--hover-bg)}.onclaw-plugin-root .hover\\:bg-\\[var\\(--market-cell-hover\\)\\]:hover{background-color:var(--market-cell-hover)}.onclaw-plugin-root .hover\\:bg-\\[var\\(--selected-bg\\)\\]:hover{background-color:var(--selected-bg)}.onclaw-plugin-root .hover\\:bg-bg-tertiary:hover{background-color:var(--bg-tertiary)}.onclaw-plugin-root .hover\\:text-\\[var\\(--market-text-primary\\)\\]:hover{color:var(--market-text-primary)}.onclaw-plugin-root .hover\\:text-\\[var\\(--market-text-secondary\\)\\]:hover{color:var(--market-text-secondary)}.onclaw-plugin-root .hover\\:text-red-300:hover{--tw-text-opacity:1;color:rgb(252 165 165/var(--tw-text-opacity,1))}.onclaw-plugin-root .hover\\:text-text-gold:hover{color:var(--text-gold)}.onclaw-plugin-root .hover\\:text-text-primary:hover{color:var(--text-primary)}.onclaw-plugin-root .hover\\:underline:hover{text-decoration-line:underline}.onclaw-plugin-root .hover\\:shadow-\\[inset_0_0_0_1px_var\\(--market-grid-strong\\)\\]:hover{--tw-shadow:inset 0 0 0 1px var(--market-grid-strong);--tw-shadow-colored:inset 0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.onclaw-plugin-root .hover\\:brightness-110:hover{--tw-brightness:brightness(1.1);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.onclaw-plugin-root .focus\\:border-\\[var\\(--accent\\)\\]:focus{border-color:var(--accent)}.onclaw-plugin-root .focus\\:border-\\[var\\(--market-grid-selected\\)\\]:focus{border-color:var(--market-grid-selected)}.onclaw-plugin-root .focus\\:border-\\[var\\(--status-info-badge\\)\\]:focus{border-color:var(--status-info-badge)}.onclaw-plugin-root .focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.onclaw-plugin-root .focus\\:ring-\\[var\\(--focus-ring\\)\\]:focus{--tw-ring-color:var(--focus-ring)}.onclaw-plugin-root .focus\\:ring-offset-\\[var\\(--bg-elevated\\)\\]:focus{--tw-ring-offset-color:var(--bg-elevated)}.onclaw-plugin-root .focus-visible\\:ring-1:focus-visible{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.onclaw-plugin-root .focus-visible\\:ring-inset:focus-visible{--tw-ring-inset:inset}.onclaw-plugin-root .focus-visible\\:ring-\\[var\\(--accent\\)\\]:focus-visible{--tw-ring-color:var(--accent)}.onclaw-plugin-root .active\\:cursor-grabbing:active{cursor:grabbing}.onclaw-plugin-root .disabled\\:cursor-default:disabled{cursor:default}.onclaw-plugin-root .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.onclaw-plugin-root .disabled\\:cursor-wait:disabled{cursor:wait}.onclaw-plugin-root .disabled\\:opacity-35:disabled{opacity:.35}.onclaw-plugin-root .disabled\\:opacity-40:disabled{opacity:.4}.onclaw-plugin-root .disabled\\:opacity-45:disabled{opacity:.45}.onclaw-plugin-root .disabled\\:opacity-50:disabled{opacity:.5}.onclaw-plugin-root .disabled\\:opacity-55:disabled{opacity:.55}.onclaw-plugin-root .disabled\\:opacity-60:disabled{opacity:.6}.onclaw-plugin-root .disabled\\:opacity-70:disabled{opacity:.7}.onclaw-plugin-root :is(.group:hover .group-hover\\:bg-\\[var\\(--market-cell-hover\\)\\]){background-color:var(--market-cell-hover)}@media (min-width:640px){.onclaw-plugin-root .sm\\:block{display:block}.onclaw-plugin-root .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.onclaw-plugin-root .sm\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.onclaw-plugin-root .sm\\:p-4{padding:1rem}.onclaw-plugin-root .sm\\:text-sm{font-size:.875rem;line-height:1.25rem}}@media (min-width:768px){.onclaw-plugin-root .md\\:flex{display:flex}.onclaw-plugin-root .md\\:hidden{display:none}.onclaw-plugin-root .md\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (min-width:1024px){.onclaw-plugin-root .lg\\:col-span-2{grid-column:span 2/span 2}.onclaw-plugin-root .lg\\:col-span-3{grid-column:span 3/span 3}.onclaw-plugin-root .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.onclaw-plugin-root .lg\\:grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}}";
		//#endregion
		//#region node_modules/axios/dist/esm/axios.js
		/*! Axios v1.13.5 Copyright (c) 2026 Matt Zabriskie and contributors */
		/**
		* Create a bound version of a function with a specified `this` context
		*
		* @param {Function} fn - The function to bind
		* @param {*} thisArg - The value to be passed as the `this` parameter
		* @returns {Function} A new function that will call the original function with the specified `this` context
		*/
		function bind(fn, thisArg) {
			return function wrap() {
				return fn.apply(thisArg, arguments);
			};
		}
		const { toString } = Object.prototype;
		const { getPrototypeOf } = Object;
		const { iterator, toStringTag } = Symbol;
		const kindOf = ((cache) => (thing) => {
			const str = toString.call(thing);
			return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
		})(Object.create(null));
		const kindOfTest = (type) => {
			type = type.toLowerCase();
			return (thing) => kindOf(thing) === type;
		};
		const typeOfTest = (type) => (thing) => typeof thing === type;
		/**
		* Determine if a value is a non-null object
		*
		* @param {Object} val The value to test
		*
		* @returns {boolean} True if value is an Array, otherwise false
		*/
		const { isArray } = Array;
		/**
		* Determine if a value is undefined
		*
		* @param {*} val The value to test
		*
		* @returns {boolean} True if the value is undefined, otherwise false
		*/
		const isUndefined = typeOfTest("undefined");
		/**
		* Determine if a value is a Buffer
		*
		* @param {*} val The value to test
		*
		* @returns {boolean} True if value is a Buffer, otherwise false
		*/
		function isBuffer(val) {
			return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction$1(val.constructor.isBuffer) && val.constructor.isBuffer(val);
		}
		/**
		* Determine if a value is an ArrayBuffer
		*
		* @param {*} val The value to test
		*
		* @returns {boolean} True if value is an ArrayBuffer, otherwise false
		*/
		const isArrayBuffer = kindOfTest("ArrayBuffer");
		/**
		* Determine if a value is a view on an ArrayBuffer
		*
		* @param {*} val The value to test
		*
		* @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
		*/
		function isArrayBufferView(val) {
			let result;
			if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
			else result = val && val.buffer && isArrayBuffer(val.buffer);
			return result;
		}
		/**
		* Determine if a value is a String
		*
		* @param {*} val The value to test
		*
		* @returns {boolean} True if value is a String, otherwise false
		*/
		const isString = typeOfTest("string");
		/**
		* Determine if a value is a Function
		*
		* @param {*} val The value to test
		* @returns {boolean} True if value is a Function, otherwise false
		*/
		const isFunction$1 = typeOfTest("function");
		/**
		* Determine if a value is a Number
		*
		* @param {*} val The value to test
		*
		* @returns {boolean} True if value is a Number, otherwise false
		*/
		const isNumber = typeOfTest("number");
		/**
		* Determine if a value is an Object
		*
		* @param {*} thing The value to test
		*
		* @returns {boolean} True if value is an Object, otherwise false
		*/
		const isObject$2 = (thing) => thing !== null && typeof thing === "object";
		/**
		* Determine if a value is a Boolean
		*
		* @param {*} thing The value to test
		* @returns {boolean} True if value is a Boolean, otherwise false
		*/
		const isBoolean = (thing) => thing === true || thing === false;
		/**
		* Determine if a value is a plain Object
		*
		* @param {*} val The value to test
		*
		* @returns {boolean} True if value is a plain Object, otherwise false
		*/
		const isPlainObject$1 = (val) => {
			if (kindOf(val) !== "object") return false;
			const prototype = getPrototypeOf(val);
			return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(toStringTag in val) && !(iterator in val);
		};
		/**
		* Determine if a value is an empty object (safely handles Buffers)
		*
		* @param {*} val The value to test
		*
		* @returns {boolean} True if value is an empty object, otherwise false
		*/
		const isEmptyObject = (val) => {
			if (!isObject$2(val) || isBuffer(val)) return false;
			try {
				return Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
			} catch (e) {
				return false;
			}
		};
		/**
		* Determine if a value is a Date
		*
		* @param {*} val The value to test
		*
		* @returns {boolean} True if value is a Date, otherwise false
		*/
		const isDate = kindOfTest("Date");
		/**
		* Determine if a value is a File
		*
		* @param {*} val The value to test
		*
		* @returns {boolean} True if value is a File, otherwise false
		*/
		const isFile = kindOfTest("File");
		/**
		* Determine if a value is a Blob
		*
		* @param {*} val The value to test
		*
		* @returns {boolean} True if value is a Blob, otherwise false
		*/
		const isBlob = kindOfTest("Blob");
		/**
		* Determine if a value is a FileList
		*
		* @param {*} val The value to test
		*
		* @returns {boolean} True if value is a File, otherwise false
		*/
		const isFileList = kindOfTest("FileList");
		/**
		* Determine if a value is a Stream
		*
		* @param {*} val The value to test
		*
		* @returns {boolean} True if value is a Stream, otherwise false
		*/
		const isStream = (val) => isObject$2(val) && isFunction$1(val.pipe);
		/**
		* Determine if a value is a FormData
		*
		* @param {*} thing The value to test
		*
		* @returns {boolean} True if value is an FormData, otherwise false
		*/
		const isFormData = (thing) => {
			let kind;
			return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction$1(thing.append) && ((kind = kindOf(thing)) === "formdata" || kind === "object" && isFunction$1(thing.toString) && thing.toString() === "[object FormData]"));
		};
		/**
		* Determine if a value is a URLSearchParams object
		*
		* @param {*} val The value to test
		*
		* @returns {boolean} True if value is a URLSearchParams object, otherwise false
		*/
		const isURLSearchParams = kindOfTest("URLSearchParams");
		const [isReadableStream, isRequest, isResponse, isHeaders] = [
			"ReadableStream",
			"Request",
			"Response",
			"Headers"
		].map(kindOfTest);
		/**
		* Trim excess whitespace off the beginning and end of a string
		*
		* @param {String} str The String to trim
		*
		* @returns {String} The String freed of excess whitespace
		*/
		const trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
		/**
		* Iterate over an Array or an Object invoking a function for each item.
		*
		* If `obj` is an Array callback will be called passing
		* the value, index, and complete array for each item.
		*
		* If 'obj' is an Object callback will be called passing
		* the value, key, and complete object for each property.
		*
		* @param {Object|Array<unknown>} obj The object to iterate
		* @param {Function} fn The callback to invoke for each item
		*
		* @param {Object} [options]
		* @param {Boolean} [options.allOwnKeys = false]
		* @returns {any}
		*/
		function forEach(obj, fn, { allOwnKeys = false } = {}) {
			if (obj === null || typeof obj === "undefined") return;
			let i;
			let l;
			if (typeof obj !== "object") obj = [obj];
			if (isArray(obj)) for (i = 0, l = obj.length; i < l; i++) fn.call(null, obj[i], i, obj);
			else {
				if (isBuffer(obj)) return;
				const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
				const len = keys.length;
				let key;
				for (i = 0; i < len; i++) {
					key = keys[i];
					fn.call(null, obj[key], key, obj);
				}
			}
		}
		function findKey(obj, key) {
			if (isBuffer(obj)) return null;
			key = key.toLowerCase();
			const keys = Object.keys(obj);
			let i = keys.length;
			let _key;
			while (i-- > 0) {
				_key = keys[i];
				if (key === _key.toLowerCase()) return _key;
			}
			return null;
		}
		const _global = (() => {
			if (typeof globalThis !== "undefined") return globalThis;
			return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
		})();
		const isContextDefined = (context) => !isUndefined(context) && context !== _global;
		/**
		* Accepts varargs expecting each argument to be an object, then
		* immutably merges the properties of each object and returns result.
		*
		* When multiple objects contain the same key the later object in
		* the arguments list will take precedence.
		*
		* Example:
		*
		* ```js
		* const result = merge({foo: 123}, {foo: 456});
		* console.log(result.foo); // outputs 456
		* ```
		*
		* @param {Object} obj1 Object to merge
		*
		* @returns {Object} Result of all merge properties
		*/
		function merge() {
			const { caseless, skipUndefined } = isContextDefined(this) && this || {};
			const result = {};
			const assignValue = (val, key) => {
				if (key === "__proto__" || key === "constructor" || key === "prototype") return;
				const targetKey = caseless && findKey(result, key) || key;
				if (isPlainObject$1(result[targetKey]) && isPlainObject$1(val)) result[targetKey] = merge(result[targetKey], val);
				else if (isPlainObject$1(val)) result[targetKey] = merge({}, val);
				else if (isArray(val)) result[targetKey] = val.slice();
				else if (!skipUndefined || !isUndefined(val)) result[targetKey] = val;
			};
			for (let i = 0, l = arguments.length; i < l; i++) arguments[i] && forEach(arguments[i], assignValue);
			return result;
		}
		/**
		* Extends object a by mutably adding to it the properties of object b.
		*
		* @param {Object} a The object to be extended
		* @param {Object} b The object to copy properties from
		* @param {Object} thisArg The object to bind function to
		*
		* @param {Object} [options]
		* @param {Boolean} [options.allOwnKeys]
		* @returns {Object} The resulting value of object a
		*/
		const extend = (a, b, thisArg, { allOwnKeys } = {}) => {
			forEach(b, (val, key) => {
				if (thisArg && isFunction$1(val)) Object.defineProperty(a, key, {
					value: bind(val, thisArg),
					writable: true,
					enumerable: true,
					configurable: true
				});
				else Object.defineProperty(a, key, {
					value: val,
					writable: true,
					enumerable: true,
					configurable: true
				});
			}, { allOwnKeys });
			return a;
		};
		/**
		* Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
		*
		* @param {string} content with BOM
		*
		* @returns {string} content value without BOM
		*/
		const stripBOM = (content) => {
			if (content.charCodeAt(0) === 65279) content = content.slice(1);
			return content;
		};
		/**
		* Inherit the prototype methods from one constructor into another
		* @param {function} constructor
		* @param {function} superConstructor
		* @param {object} [props]
		* @param {object} [descriptors]
		*
		* @returns {void}
		*/
		const inherits = (constructor, superConstructor, props, descriptors) => {
			constructor.prototype = Object.create(superConstructor.prototype, descriptors);
			Object.defineProperty(constructor.prototype, "constructor", {
				value: constructor,
				writable: true,
				enumerable: false,
				configurable: true
			});
			Object.defineProperty(constructor, "super", { value: superConstructor.prototype });
			props && Object.assign(constructor.prototype, props);
		};
		/**
		* Resolve object with deep prototype chain to a flat object
		* @param {Object} sourceObj source object
		* @param {Object} [destObj]
		* @param {Function|Boolean} [filter]
		* @param {Function} [propFilter]
		*
		* @returns {Object}
		*/
		const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
			let props;
			let i;
			let prop;
			const merged = {};
			destObj = destObj || {};
			if (sourceObj == null) return destObj;
			do {
				props = Object.getOwnPropertyNames(sourceObj);
				i = props.length;
				while (i-- > 0) {
					prop = props[i];
					if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
						destObj[prop] = sourceObj[prop];
						merged[prop] = true;
					}
				}
				sourceObj = filter !== false && getPrototypeOf(sourceObj);
			} while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
			return destObj;
		};
		/**
		* Determines whether a string ends with the characters of a specified string
		*
		* @param {String} str
		* @param {String} searchString
		* @param {Number} [position= 0]
		*
		* @returns {boolean}
		*/
		const endsWith = (str, searchString, position) => {
			str = String(str);
			if (position === void 0 || position > str.length) position = str.length;
			position -= searchString.length;
			const lastIndex = str.indexOf(searchString, position);
			return lastIndex !== -1 && lastIndex === position;
		};
		/**
		* Returns new array from array like object or null if failed
		*
		* @param {*} [thing]
		*
		* @returns {?Array}
		*/
		const toArray = (thing) => {
			if (!thing) return null;
			if (isArray(thing)) return thing;
			let i = thing.length;
			if (!isNumber(i)) return null;
			const arr = new Array(i);
			while (i-- > 0) arr[i] = thing[i];
			return arr;
		};
		/**
		* Checking if the Uint8Array exists and if it does, it returns a function that checks if the
		* thing passed in is an instance of Uint8Array
		*
		* @param {TypedArray}
		*
		* @returns {Array}
		*/
		const isTypedArray = ((TypedArray) => {
			return (thing) => {
				return TypedArray && thing instanceof TypedArray;
			};
		})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
		/**
		* For each entry in the object, call the function with the key and value.
		*
		* @param {Object<any, any>} obj - The object to iterate over.
		* @param {Function} fn - The function to call for each entry.
		*
		* @returns {void}
		*/
		const forEachEntry = (obj, fn) => {
			const _iterator = (obj && obj[iterator]).call(obj);
			let result;
			while ((result = _iterator.next()) && !result.done) {
				const pair = result.value;
				fn.call(obj, pair[0], pair[1]);
			}
		};
		/**
		* It takes a regular expression and a string, and returns an array of all the matches
		*
		* @param {string} regExp - The regular expression to match against.
		* @param {string} str - The string to search.
		*
		* @returns {Array<boolean>}
		*/
		const matchAll = (regExp, str) => {
			let matches;
			const arr = [];
			while ((matches = regExp.exec(str)) !== null) arr.push(matches);
			return arr;
		};
		const isHTMLForm = kindOfTest("HTMLFormElement");
		const toCamelCase = (str) => {
			return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
				return p1.toUpperCase() + p2;
			});
		};
		const hasOwnProperty = (({ hasOwnProperty }) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);
		/**
		* Determine if a value is a RegExp object
		*
		* @param {*} val The value to test
		*
		* @returns {boolean} True if value is a RegExp object, otherwise false
		*/
		const isRegExp = kindOfTest("RegExp");
		const reduceDescriptors = (obj, reducer) => {
			const descriptors = Object.getOwnPropertyDescriptors(obj);
			const reducedDescriptors = {};
			forEach(descriptors, (descriptor, name) => {
				let ret;
				if ((ret = reducer(descriptor, name, obj)) !== false) reducedDescriptors[name] = ret || descriptor;
			});
			Object.defineProperties(obj, reducedDescriptors);
		};
		/**
		* Makes all methods read-only
		* @param {Object} obj
		*/
		const freezeMethods = (obj) => {
			reduceDescriptors(obj, (descriptor, name) => {
				if (isFunction$1(obj) && [
					"arguments",
					"caller",
					"callee"
				].indexOf(name) !== -1) return false;
				const value = obj[name];
				if (!isFunction$1(value)) return;
				descriptor.enumerable = false;
				if ("writable" in descriptor) {
					descriptor.writable = false;
					return;
				}
				if (!descriptor.set) descriptor.set = () => {
					throw Error("Can not rewrite read-only method '" + name + "'");
				};
			});
		};
		const toObjectSet = (arrayOrString, delimiter) => {
			const obj = {};
			const define = (arr) => {
				arr.forEach((value) => {
					obj[value] = true;
				});
			};
			isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
			return obj;
		};
		const noop$1 = () => {};
		const toFiniteNumber = (value, defaultValue) => {
			return value != null && Number.isFinite(value = +value) ? value : defaultValue;
		};
		/**
		* If the thing is a FormData object, return true, otherwise return false.
		*
		* @param {unknown} thing - The thing to check.
		*
		* @returns {boolean}
		*/
		function isSpecCompliantForm(thing) {
			return !!(thing && isFunction$1(thing.append) && thing[toStringTag] === "FormData" && thing[iterator]);
		}
		const toJSONObject = (obj) => {
			const stack = new Array(10);
			const visit = (source, i) => {
				if (isObject$2(source)) {
					if (stack.indexOf(source) >= 0) return;
					if (isBuffer(source)) return source;
					if (!("toJSON" in source)) {
						stack[i] = source;
						const target = isArray(source) ? [] : {};
						forEach(source, (value, key) => {
							const reducedValue = visit(value, i + 1);
							!isUndefined(reducedValue) && (target[key] = reducedValue);
						});
						stack[i] = void 0;
						return target;
					}
				}
				return source;
			};
			return visit(obj, 0);
		};
		const isAsyncFn = kindOfTest("AsyncFunction");
		const isThenable = (thing) => thing && (isObject$2(thing) || isFunction$1(thing)) && isFunction$1(thing.then) && isFunction$1(thing.catch);
		const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
			if (setImmediateSupported) return setImmediate;
			return postMessageSupported ? ((token, callbacks) => {
				_global.addEventListener("message", ({ source, data }) => {
					if (source === _global && data === token) callbacks.length && callbacks.shift()();
				}, false);
				return (cb) => {
					callbacks.push(cb);
					_global.postMessage(token, "*");
				};
			})(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
		})(typeof setImmediate === "function", isFunction$1(_global.postMessage));
		const asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process !== "undefined" && process.nextTick || _setImmediate;
		const isIterable = (thing) => thing != null && isFunction$1(thing[iterator]);
		const utils$1 = {
			isArray,
			isArrayBuffer,
			isBuffer,
			isFormData,
			isArrayBufferView,
			isString,
			isNumber,
			isBoolean,
			isObject: isObject$2,
			isPlainObject: isPlainObject$1,
			isEmptyObject,
			isReadableStream,
			isRequest,
			isResponse,
			isHeaders,
			isUndefined,
			isDate,
			isFile,
			isBlob,
			isRegExp,
			isFunction: isFunction$1,
			isStream,
			isURLSearchParams,
			isTypedArray,
			isFileList,
			forEach,
			merge,
			extend,
			trim,
			stripBOM,
			inherits,
			toFlatObject,
			kindOf,
			kindOfTest,
			endsWith,
			toArray,
			forEachEntry,
			matchAll,
			isHTMLForm,
			hasOwnProperty,
			hasOwnProp: hasOwnProperty,
			reduceDescriptors,
			freezeMethods,
			toObjectSet,
			toCamelCase,
			noop: noop$1,
			toFiniteNumber,
			findKey,
			global: _global,
			isContextDefined,
			isSpecCompliantForm,
			toJSONObject,
			isAsyncFn,
			isThenable,
			setImmediate: _setImmediate,
			asap,
			isIterable
		};
		var AxiosError$1 = class AxiosError$1 extends Error {
			static from(error, code, config, request, response, customProps) {
				const axiosError = new AxiosError$1(error.message, code || error.code, config, request, response);
				axiosError.cause = error;
				axiosError.name = error.name;
				customProps && Object.assign(axiosError, customProps);
				return axiosError;
			}
			/**
			* Create an Error with the specified message, config, error code, request and response.
			*
			* @param {string} message The error message.
			* @param {string} [code] The error code (for example, 'ECONNABORTED').
			* @param {Object} [config] The config.
			* @param {Object} [request] The request.
			* @param {Object} [response] The response.
			*
			* @returns {Error} The created error.
			*/
			constructor(message, code, config, request, response) {
				super(message);
				this.name = "AxiosError";
				this.isAxiosError = true;
				code && (this.code = code);
				config && (this.config = config);
				request && (this.request = request);
				if (response) {
					this.response = response;
					this.status = response.status;
				}
			}
			toJSON() {
				return {
					message: this.message,
					name: this.name,
					description: this.description,
					number: this.number,
					fileName: this.fileName,
					lineNumber: this.lineNumber,
					columnNumber: this.columnNumber,
					stack: this.stack,
					config: utils$1.toJSONObject(this.config),
					code: this.code,
					status: this.status
				};
			}
		};
		AxiosError$1.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
		AxiosError$1.ERR_BAD_OPTION = "ERR_BAD_OPTION";
		AxiosError$1.ECONNABORTED = "ECONNABORTED";
		AxiosError$1.ETIMEDOUT = "ETIMEDOUT";
		AxiosError$1.ERR_NETWORK = "ERR_NETWORK";
		AxiosError$1.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
		AxiosError$1.ERR_DEPRECATED = "ERR_DEPRECATED";
		AxiosError$1.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
		AxiosError$1.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
		AxiosError$1.ERR_CANCELED = "ERR_CANCELED";
		AxiosError$1.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
		AxiosError$1.ERR_INVALID_URL = "ERR_INVALID_URL";
		const AxiosError$2 = AxiosError$1;
		const httpAdapter = null;
		/**
		* Determines if the given thing is a array or js object.
		*
		* @param {string} thing - The object or array to be visited.
		*
		* @returns {boolean}
		*/
		function isVisitable(thing) {
			return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
		}
		/**
		* It removes the brackets from the end of a string
		*
		* @param {string} key - The key of the parameter.
		*
		* @returns {string} the key without the brackets.
		*/
		function removeBrackets(key) {
			return utils$1.endsWith(key, "[]") ? key.slice(0, -2) : key;
		}
		/**
		* It takes a path, a key, and a boolean, and returns a string
		*
		* @param {string} path - The path to the current key.
		* @param {string} key - The key of the current object being iterated over.
		* @param {string} dots - If true, the key will be rendered with dots instead of brackets.
		*
		* @returns {string} The path to the current key.
		*/
		function renderKey(path, key, dots) {
			if (!path) return key;
			return path.concat(key).map(function each(token, i) {
				token = removeBrackets(token);
				return !dots && i ? "[" + token + "]" : token;
			}).join(dots ? "." : "");
		}
		/**
		* If the array is an array and none of its elements are visitable, then it's a flat array.
		*
		* @param {Array<any>} arr - The array to check
		*
		* @returns {boolean}
		*/
		function isFlatArray(arr) {
			return utils$1.isArray(arr) && !arr.some(isVisitable);
		}
		const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
			return /^is[A-Z]/.test(prop);
		});
		/**
		* Convert a data object to FormData
		*
		* @param {Object} obj
		* @param {?Object} [formData]
		* @param {?Object} [options]
		* @param {Function} [options.visitor]
		* @param {Boolean} [options.metaTokens = true]
		* @param {Boolean} [options.dots = false]
		* @param {?Boolean} [options.indexes = false]
		*
		* @returns {Object}
		**/
		/**
		* It converts an object into a FormData object
		*
		* @param {Object<any, any>} obj - The object to convert to form data.
		* @param {string} formData - The FormData object to append to.
		* @param {Object<string, any>} options
		*
		* @returns
		*/
		function toFormData$1(obj, formData, options) {
			if (!utils$1.isObject(obj)) throw new TypeError("target must be an object");
			formData = formData || new FormData();
			options = utils$1.toFlatObject(options, {
				metaTokens: true,
				dots: false,
				indexes: false
			}, false, function defined(option, source) {
				return !utils$1.isUndefined(source[option]);
			});
			const metaTokens = options.metaTokens;
			const visitor = options.visitor || defaultVisitor;
			const dots = options.dots;
			const indexes = options.indexes;
			const useBlob = (options.Blob || typeof Blob !== "undefined" && Blob) && utils$1.isSpecCompliantForm(formData);
			if (!utils$1.isFunction(visitor)) throw new TypeError("visitor must be a function");
			function convertValue(value) {
				if (value === null) return "";
				if (utils$1.isDate(value)) return value.toISOString();
				if (utils$1.isBoolean(value)) return value.toString();
				if (!useBlob && utils$1.isBlob(value)) throw new AxiosError$2("Blob is not supported. Use a Buffer instead.");
				if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
				return value;
			}
			/**
			* Default visitor.
			*
			* @param {*} value
			* @param {String|Number} key
			* @param {Array<String|Number>} path
			* @this {FormData}
			*
			* @returns {boolean} return true to visit the each prop of the value recursively
			*/
			function defaultVisitor(value, key, path) {
				let arr = value;
				if (value && !path && typeof value === "object") {
					if (utils$1.endsWith(key, "{}")) {
						key = metaTokens ? key : key.slice(0, -2);
						value = JSON.stringify(value);
					} else if (utils$1.isArray(value) && isFlatArray(value) || (utils$1.isFileList(value) || utils$1.endsWith(key, "[]")) && (arr = utils$1.toArray(value))) {
						key = removeBrackets(key);
						arr.forEach(function each(el, index) {
							!(utils$1.isUndefined(el) || el === null) && formData.append(indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]", convertValue(el));
						});
						return false;
					}
				}
				if (isVisitable(value)) return true;
				formData.append(renderKey(path, key, dots), convertValue(value));
				return false;
			}
			const stack = [];
			const exposedHelpers = Object.assign(predicates, {
				defaultVisitor,
				convertValue,
				isVisitable
			});
			function build(value, path) {
				if (utils$1.isUndefined(value)) return;
				if (stack.indexOf(value) !== -1) throw Error("Circular reference detected in " + path.join("."));
				stack.push(value);
				utils$1.forEach(value, function each(el, key) {
					if ((!(utils$1.isUndefined(el) || el === null) && visitor.call(formData, el, utils$1.isString(key) ? key.trim() : key, path, exposedHelpers)) === true) build(el, path ? path.concat(key) : [key]);
				});
				stack.pop();
			}
			if (!utils$1.isObject(obj)) throw new TypeError("data must be an object");
			build(obj);
			return formData;
		}
		/**
		* It encodes a string by replacing all characters that are not in the unreserved set with
		* their percent-encoded equivalents
		*
		* @param {string} str - The string to encode.
		*
		* @returns {string} The encoded string.
		*/
		function encode$1(str) {
			const charMap = {
				"!": "%21",
				"'": "%27",
				"(": "%28",
				")": "%29",
				"~": "%7E",
				"%20": "+",
				"%00": "\0"
			};
			return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
				return charMap[match];
			});
		}
		/**
		* It takes a params object and converts it to a FormData object
		*
		* @param {Object<string, any>} params - The parameters to be converted to a FormData object.
		* @param {Object<string, any>} options - The options object passed to the Axios constructor.
		*
		* @returns {void}
		*/
		function AxiosURLSearchParams(params, options) {
			this._pairs = [];
			params && toFormData$1(params, this, options);
		}
		const prototype = AxiosURLSearchParams.prototype;
		prototype.append = function append(name, value) {
			this._pairs.push([name, value]);
		};
		prototype.toString = function toString(encoder) {
			const _encode = encoder ? function(value) {
				return encoder.call(this, value, encode$1);
			} : encode$1;
			return this._pairs.map(function each(pair) {
				return _encode(pair[0]) + "=" + _encode(pair[1]);
			}, "").join("&");
		};
		/**
		* It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
		* URI encoded counterparts
		*
		* @param {string} val The value to be encoded.
		*
		* @returns {string} The encoded value.
		*/
		function encode$2(val) {
			return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
		}
		/**
		* Build a URL by appending params to the end
		*
		* @param {string} url The base of the url (e.g., http://www.google.com)
		* @param {object} [params] The params to be appended
		* @param {?(object|Function)} options
		*
		* @returns {string} The formatted url
		*/
		function buildURL(url, params, options) {
			if (!params) return url;
			const _encode = options && options.encode || encode$2;
			const _options = utils$1.isFunction(options) ? { serialize: options } : options;
			const serializeFn = _options && _options.serialize;
			let serializedParams;
			if (serializeFn) serializedParams = serializeFn(params, _options);
			else serializedParams = utils$1.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, _options).toString(_encode);
			if (serializedParams) {
				const hashmarkIndex = url.indexOf("#");
				if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
				url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
			}
			return url;
		}
		var InterceptorManager = class {
			constructor() {
				this.handlers = [];
			}
			/**
			* Add a new interceptor to the stack
			*
			* @param {Function} fulfilled The function to handle `then` for a `Promise`
			* @param {Function} rejected The function to handle `reject` for a `Promise`
			* @param {Object} options The options for the interceptor, synchronous and runWhen
			*
			* @return {Number} An ID used to remove interceptor later
			*/
			use(fulfilled, rejected, options) {
				this.handlers.push({
					fulfilled,
					rejected,
					synchronous: options ? options.synchronous : false,
					runWhen: options ? options.runWhen : null
				});
				return this.handlers.length - 1;
			}
			/**
			* Remove an interceptor from the stack
			*
			* @param {Number} id The ID that was returned by `use`
			*
			* @returns {void}
			*/
			eject(id) {
				if (this.handlers[id]) this.handlers[id] = null;
			}
			/**
			* Clear all interceptors from the stack
			*
			* @returns {void}
			*/
			clear() {
				if (this.handlers) this.handlers = [];
			}
			/**
			* Iterate over all the registered interceptors
			*
			* This method is particularly useful for skipping over any
			* interceptors that may have become `null` calling `eject`.
			*
			* @param {Function} fn The function to call for each interceptor
			*
			* @returns {void}
			*/
			forEach(fn) {
				utils$1.forEach(this.handlers, function forEachHandler(h) {
					if (h !== null) fn(h);
				});
			}
		};
		const InterceptorManager$1 = InterceptorManager;
		const transitionalDefaults = {
			silentJSONParsing: true,
			forcedJSONParsing: true,
			clarifyTimeoutError: false,
			legacyInterceptorReqResOrdering: true
		};
		const platform$1 = {
			isBrowser: true,
			classes: {
				URLSearchParams: typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams,
				FormData: typeof FormData !== "undefined" ? FormData : null,
				Blob: typeof Blob !== "undefined" ? Blob : null
			},
			protocols: [
				"http",
				"https",
				"file",
				"blob",
				"url",
				"data"
			]
		};
		const hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
		const _navigator = typeof navigator === "object" && navigator || void 0;
		/**
		* Determine if we're running in a standard browser environment
		*
		* This allows axios to run in a web worker, and react-native.
		* Both environments support XMLHttpRequest, but not fully standard globals.
		*
		* web workers:
		*  typeof window -> undefined
		*  typeof document -> undefined
		*
		* react-native:
		*  navigator.product -> 'ReactNative'
		* nativescript
		*  navigator.product -> 'NativeScript' or 'NS'
		*
		* @returns {boolean}
		*/
		const hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || [
			"ReactNative",
			"NativeScript",
			"NS"
		].indexOf(_navigator.product) < 0);
		/**
		* Determine if we're running in a standard browser webWorker environment
		*
		* Although the `isStandardBrowserEnv` method indicates that
		* `allows axios to run in a web worker`, the WebWorker will still be
		* filtered out due to its judgment standard
		* `typeof window !== 'undefined' && typeof document !== 'undefined'`.
		* This leads to a problem when axios post `FormData` in webWorker
		*/
		const hasStandardBrowserWebWorkerEnv = (() => {
			return typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
		})();
		const origin = hasBrowserEnv && window.location.href || "http://localhost";
		const platform = {
			.../* @__PURE__ */ Object.freeze({
				__proto__: null,
				hasBrowserEnv,
				hasStandardBrowserWebWorkerEnv,
				hasStandardBrowserEnv,
				navigator: _navigator,
				origin
			}),
			...platform$1
		};
		function toURLEncodedForm(data, options) {
			return toFormData$1(data, new platform.classes.URLSearchParams(), {
				visitor: function(value, key, path, helpers) {
					if (platform.isNode && utils$1.isBuffer(value)) {
						this.append(key, value.toString("base64"));
						return false;
					}
					return helpers.defaultVisitor.apply(this, arguments);
				},
				...options
			});
		}
		/**
		* It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
		*
		* @param {string} name - The name of the property to get.
		*
		* @returns An array of strings.
		*/
		function parsePropPath(name) {
			return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
				return match[0] === "[]" ? "" : match[1] || match[0];
			});
		}
		/**
		* Convert an array to an object.
		*
		* @param {Array<any>} arr - The array to convert to an object.
		*
		* @returns An object with the same keys and values as the array.
		*/
		function arrayToObject(arr) {
			const obj = {};
			const keys = Object.keys(arr);
			let i;
			const len = keys.length;
			let key;
			for (i = 0; i < len; i++) {
				key = keys[i];
				obj[key] = arr[key];
			}
			return obj;
		}
		/**
		* It takes a FormData object and returns a JavaScript object
		*
		* @param {string} formData The FormData object to convert to JSON.
		*
		* @returns {Object<string, any> | null} The converted object.
		*/
		function formDataToJSON(formData) {
			function buildPath(path, value, target, index) {
				let name = path[index++];
				if (name === "__proto__") return true;
				const isNumericKey = Number.isFinite(+name);
				const isLast = index >= path.length;
				name = !name && utils$1.isArray(target) ? target.length : name;
				if (isLast) {
					if (utils$1.hasOwnProp(target, name)) target[name] = [target[name], value];
					else target[name] = value;
					return !isNumericKey;
				}
				if (!target[name] || !utils$1.isObject(target[name])) target[name] = [];
				if (buildPath(path, value, target[name], index) && utils$1.isArray(target[name])) target[name] = arrayToObject(target[name]);
				return !isNumericKey;
			}
			if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
				const obj = {};
				utils$1.forEachEntry(formData, (name, value) => {
					buildPath(parsePropPath(name), value, obj, 0);
				});
				return obj;
			}
			return null;
		}
		/**
		* It takes a string, tries to parse it, and if it fails, it returns the stringified version
		* of the input
		*
		* @param {any} rawValue - The value to be stringified.
		* @param {Function} parser - A function that parses a string into a JavaScript object.
		* @param {Function} encoder - A function that takes a value and returns a string.
		*
		* @returns {string} A stringified version of the rawValue.
		*/
		function stringifySafely(rawValue, parser, encoder) {
			if (utils$1.isString(rawValue)) try {
				(parser || JSON.parse)(rawValue);
				return utils$1.trim(rawValue);
			} catch (e) {
				if (e.name !== "SyntaxError") throw e;
			}
			return (encoder || JSON.stringify)(rawValue);
		}
		const defaults = {
			transitional: transitionalDefaults,
			adapter: [
				"xhr",
				"http",
				"fetch"
			],
			transformRequest: [function transformRequest(data, headers) {
				const contentType = headers.getContentType() || "";
				const hasJSONContentType = contentType.indexOf("application/json") > -1;
				const isObjectPayload = utils$1.isObject(data);
				if (isObjectPayload && utils$1.isHTMLForm(data)) data = new FormData(data);
				if (utils$1.isFormData(data)) return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
				if (utils$1.isArrayBuffer(data) || utils$1.isBuffer(data) || utils$1.isStream(data) || utils$1.isFile(data) || utils$1.isBlob(data) || utils$1.isReadableStream(data)) return data;
				if (utils$1.isArrayBufferView(data)) return data.buffer;
				if (utils$1.isURLSearchParams(data)) {
					headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
					return data.toString();
				}
				let isFileList;
				if (isObjectPayload) {
					if (contentType.indexOf("application/x-www-form-urlencoded") > -1) return toURLEncodedForm(data, this.formSerializer).toString();
					if ((isFileList = utils$1.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
						const _FormData = this.env && this.env.FormData;
						return toFormData$1(isFileList ? { "files[]": data } : data, _FormData && new _FormData(), this.formSerializer);
					}
				}
				if (isObjectPayload || hasJSONContentType) {
					headers.setContentType("application/json", false);
					return stringifySafely(data);
				}
				return data;
			}],
			transformResponse: [function transformResponse(data) {
				const transitional = this.transitional || defaults.transitional;
				const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
				const JSONRequested = this.responseType === "json";
				if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) return data;
				if (data && utils$1.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
					const strictJSONParsing = !(transitional && transitional.silentJSONParsing) && JSONRequested;
					try {
						return JSON.parse(data, this.parseReviver);
					} catch (e) {
						if (strictJSONParsing) {
							if (e.name === "SyntaxError") throw AxiosError$2.from(e, AxiosError$2.ERR_BAD_RESPONSE, this, null, this.response);
							throw e;
						}
					}
				}
				return data;
			}],
			/**
			* A timeout in milliseconds to abort a request. If set to 0 (default) a
			* timeout is not created.
			*/
			timeout: 0,
			xsrfCookieName: "XSRF-TOKEN",
			xsrfHeaderName: "X-XSRF-TOKEN",
			maxContentLength: -1,
			maxBodyLength: -1,
			env: {
				FormData: platform.classes.FormData,
				Blob: platform.classes.Blob
			},
			validateStatus: function validateStatus(status) {
				return status >= 200 && status < 300;
			},
			headers: { common: {
				"Accept": "application/json, text/plain, */*",
				"Content-Type": void 0
			} }
		};
		utils$1.forEach([
			"delete",
			"get",
			"head",
			"post",
			"put",
			"patch"
		], (method) => {
			defaults.headers[method] = {};
		});
		const defaults$1 = defaults;
		const ignoreDuplicateOf = utils$1.toObjectSet([
			"age",
			"authorization",
			"content-length",
			"content-type",
			"etag",
			"expires",
			"from",
			"host",
			"if-modified-since",
			"if-unmodified-since",
			"last-modified",
			"location",
			"max-forwards",
			"proxy-authorization",
			"referer",
			"retry-after",
			"user-agent"
		]);
		/**
		* Parse headers into an object
		*
		* ```
		* Date: Wed, 27 Aug 2014 08:58:49 GMT
		* Content-Type: application/json
		* Connection: keep-alive
		* Transfer-Encoding: chunked
		* ```
		*
		* @param {String} rawHeaders Headers needing to be parsed
		*
		* @returns {Object} Headers parsed into an object
		*/
		const parseHeaders = (rawHeaders) => {
			const parsed = {};
			let key;
			let val;
			let i;
			rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
				i = line.indexOf(":");
				key = line.substring(0, i).trim().toLowerCase();
				val = line.substring(i + 1).trim();
				if (!key || parsed[key] && ignoreDuplicateOf[key]) return;
				if (key === "set-cookie") if (parsed[key]) parsed[key].push(val);
				else parsed[key] = [val];
				else parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
			});
			return parsed;
		};
		const $internals = Symbol("internals");
		function normalizeHeader(header) {
			return header && String(header).trim().toLowerCase();
		}
		function normalizeValue$1(value) {
			if (value === false || value == null) return value;
			return utils$1.isArray(value) ? value.map(normalizeValue$1) : String(value);
		}
		function parseTokens(str) {
			const tokens = Object.create(null);
			const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
			let match;
			while (match = tokensRE.exec(str)) tokens[match[1]] = match[2];
			return tokens;
		}
		const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
		function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
			if (utils$1.isFunction(filter)) return filter.call(this, value, header);
			if (isHeaderNameFilter) value = header;
			if (!utils$1.isString(value)) return;
			if (utils$1.isString(filter)) return value.indexOf(filter) !== -1;
			if (utils$1.isRegExp(filter)) return filter.test(value);
		}
		function formatHeader(header) {
			return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
				return char.toUpperCase() + str;
			});
		}
		function buildAccessors(obj, header) {
			const accessorName = utils$1.toCamelCase(" " + header);
			[
				"get",
				"set",
				"has"
			].forEach((methodName) => {
				Object.defineProperty(obj, methodName + accessorName, {
					value: function(arg1, arg2, arg3) {
						return this[methodName].call(this, header, arg1, arg2, arg3);
					},
					configurable: true
				});
			});
		}
		var AxiosHeaders$1 = class {
			constructor(headers) {
				headers && this.set(headers);
			}
			set(header, valueOrRewrite, rewrite) {
				const self = this;
				function setHeader(_value, _header, _rewrite) {
					const lHeader = normalizeHeader(_header);
					if (!lHeader) throw new Error("header name must be a non-empty string");
					const key = utils$1.findKey(self, lHeader);
					if (!key || self[key] === void 0 || _rewrite === true || _rewrite === void 0 && self[key] !== false) self[key || _header] = normalizeValue$1(_value);
				}
				const setHeaders = (headers, _rewrite) => utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
				if (utils$1.isPlainObject(header) || header instanceof this.constructor) setHeaders(header, valueOrRewrite);
				else if (utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) setHeaders(parseHeaders(header), valueOrRewrite);
				else if (utils$1.isObject(header) && utils$1.isIterable(header)) {
					let obj = {}, dest, key;
					for (const entry of header) {
						if (!utils$1.isArray(entry)) throw TypeError("Object iterator must return a key-value pair");
						obj[key = entry[0]] = (dest = obj[key]) ? utils$1.isArray(dest) ? [...dest, entry[1]] : [dest, entry[1]] : entry[1];
					}
					setHeaders(obj, valueOrRewrite);
				} else header != null && setHeader(valueOrRewrite, header, rewrite);
				return this;
			}
			get(header, parser) {
				header = normalizeHeader(header);
				if (header) {
					const key = utils$1.findKey(this, header);
					if (key) {
						const value = this[key];
						if (!parser) return value;
						if (parser === true) return parseTokens(value);
						if (utils$1.isFunction(parser)) return parser.call(this, value, key);
						if (utils$1.isRegExp(parser)) return parser.exec(value);
						throw new TypeError("parser must be boolean|regexp|function");
					}
				}
			}
			has(header, matcher) {
				header = normalizeHeader(header);
				if (header) {
					const key = utils$1.findKey(this, header);
					return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
				}
				return false;
			}
			delete(header, matcher) {
				const self = this;
				let deleted = false;
				function deleteHeader(_header) {
					_header = normalizeHeader(_header);
					if (_header) {
						const key = utils$1.findKey(self, _header);
						if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
							delete self[key];
							deleted = true;
						}
					}
				}
				if (utils$1.isArray(header)) header.forEach(deleteHeader);
				else deleteHeader(header);
				return deleted;
			}
			clear(matcher) {
				const keys = Object.keys(this);
				let i = keys.length;
				let deleted = false;
				while (i--) {
					const key = keys[i];
					if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
						delete this[key];
						deleted = true;
					}
				}
				return deleted;
			}
			normalize(format) {
				const self = this;
				const headers = {};
				utils$1.forEach(this, (value, header) => {
					const key = utils$1.findKey(headers, header);
					if (key) {
						self[key] = normalizeValue$1(value);
						delete self[header];
						return;
					}
					const normalized = format ? formatHeader(header) : String(header).trim();
					if (normalized !== header) delete self[header];
					self[normalized] = normalizeValue$1(value);
					headers[normalized] = true;
				});
				return this;
			}
			concat(...targets) {
				return this.constructor.concat(this, ...targets);
			}
			toJSON(asStrings) {
				const obj = Object.create(null);
				utils$1.forEach(this, (value, header) => {
					value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(", ") : value);
				});
				return obj;
			}
			[Symbol.iterator]() {
				return Object.entries(this.toJSON())[Symbol.iterator]();
			}
			toString() {
				return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
			}
			getSetCookie() {
				return this.get("set-cookie") || [];
			}
			get [Symbol.toStringTag]() {
				return "AxiosHeaders";
			}
			static from(thing) {
				return thing instanceof this ? thing : new this(thing);
			}
			static concat(first, ...targets) {
				const computed = new this(first);
				targets.forEach((target) => computed.set(target));
				return computed;
			}
			static accessor(header) {
				const accessors = (this[$internals] = this[$internals] = { accessors: {} }).accessors;
				const prototype = this.prototype;
				function defineAccessor(_header) {
					const lHeader = normalizeHeader(_header);
					if (!accessors[lHeader]) {
						buildAccessors(prototype, _header);
						accessors[lHeader] = true;
					}
				}
				utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
				return this;
			}
		};
		AxiosHeaders$1.accessor([
			"Content-Type",
			"Content-Length",
			"Accept",
			"Accept-Encoding",
			"User-Agent",
			"Authorization"
		]);
		utils$1.reduceDescriptors(AxiosHeaders$1.prototype, ({ value }, key) => {
			let mapped = key[0].toUpperCase() + key.slice(1);
			return {
				get: () => value,
				set(headerValue) {
					this[mapped] = headerValue;
				}
			};
		});
		utils$1.freezeMethods(AxiosHeaders$1);
		const AxiosHeaders$2 = AxiosHeaders$1;
		/**
		* Transform the data for a request or a response
		*
		* @param {Array|Function} fns A single function or Array of functions
		* @param {?Object} response The response object
		*
		* @returns {*} The resulting transformed data
		*/
		function transformData(fns, response) {
			const config = this || defaults$1;
			const context = response || config;
			const headers = AxiosHeaders$2.from(context.headers);
			let data = context.data;
			utils$1.forEach(fns, function transform(fn) {
				data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
			});
			headers.normalize();
			return data;
		}
		function isCancel$1(value) {
			return !!(value && value.__CANCEL__);
		}
		var CanceledError$1 = class extends AxiosError$2 {
			/**
			* A `CanceledError` is an object that is thrown when an operation is canceled.
			*
			* @param {string=} message The message.
			* @param {Object=} config The config.
			* @param {Object=} request The request.
			*
			* @returns {CanceledError} The created error.
			*/
			constructor(message, config, request) {
				super(message == null ? "canceled" : message, AxiosError$2.ERR_CANCELED, config, request);
				this.name = "CanceledError";
				this.__CANCEL__ = true;
			}
		};
		const CanceledError$2 = CanceledError$1;
		/**
		* Resolve or reject a Promise based on response status.
		*
		* @param {Function} resolve A function that resolves the promise.
		* @param {Function} reject A function that rejects the promise.
		* @param {object} response The response.
		*
		* @returns {object} The response.
		*/
		function settle(resolve, reject, response) {
			const validateStatus = response.config.validateStatus;
			if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
			else reject(new AxiosError$2("Request failed with status code " + response.status, [AxiosError$2.ERR_BAD_REQUEST, AxiosError$2.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
		}
		function parseProtocol(url) {
			const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
			return match && match[1] || "";
		}
		/**
		* Calculate data maxRate
		* @param {Number} [samplesCount= 10]
		* @param {Number} [min= 1000]
		* @returns {Function}
		*/
		function speedometer(samplesCount, min) {
			samplesCount = samplesCount || 10;
			const bytes = new Array(samplesCount);
			const timestamps = new Array(samplesCount);
			let head = 0;
			let tail = 0;
			let firstSampleTS;
			min = min !== void 0 ? min : 1e3;
			return function push(chunkLength) {
				const now = Date.now();
				const startedAt = timestamps[tail];
				if (!firstSampleTS) firstSampleTS = now;
				bytes[head] = chunkLength;
				timestamps[head] = now;
				let i = tail;
				let bytesCount = 0;
				while (i !== head) {
					bytesCount += bytes[i++];
					i = i % samplesCount;
				}
				head = (head + 1) % samplesCount;
				if (head === tail) tail = (tail + 1) % samplesCount;
				if (now - firstSampleTS < min) return;
				const passed = startedAt && now - startedAt;
				return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
			};
		}
		/**
		* Throttle decorator
		* @param {Function} fn
		* @param {Number} freq
		* @return {Function}
		*/
		function throttle(fn, freq) {
			let timestamp = 0;
			let threshold = 1e3 / freq;
			let lastArgs;
			let timer;
			const invoke = (args, now = Date.now()) => {
				timestamp = now;
				lastArgs = null;
				if (timer) {
					clearTimeout(timer);
					timer = null;
				}
				fn(...args);
			};
			const throttled = (...args) => {
				const now = Date.now();
				const passed = now - timestamp;
				if (passed >= threshold) invoke(args, now);
				else {
					lastArgs = args;
					if (!timer) timer = setTimeout(() => {
						timer = null;
						invoke(lastArgs);
					}, threshold - passed);
				}
			};
			const flush = () => lastArgs && invoke(lastArgs);
			return [throttled, flush];
		}
		const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
			let bytesNotified = 0;
			const _speedometer = speedometer(50, 250);
			return throttle((e) => {
				const loaded = e.loaded;
				const total = e.lengthComputable ? e.total : void 0;
				const progressBytes = loaded - bytesNotified;
				const rate = _speedometer(progressBytes);
				const inRange = loaded <= total;
				bytesNotified = loaded;
				listener({
					loaded,
					total,
					progress: total ? loaded / total : void 0,
					bytes: progressBytes,
					rate: rate ? rate : void 0,
					estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
					event: e,
					lengthComputable: total != null,
					[isDownloadStream ? "download" : "upload"]: true
				});
			}, freq);
		};
		const progressEventDecorator = (total, throttled) => {
			const lengthComputable = total != null;
			return [(loaded) => throttled[0]({
				lengthComputable,
				total,
				loaded
			}), throttled[1]];
		};
		const asyncDecorator = (fn) => (...args) => utils$1.asap(() => fn(...args));
		const isURLSameOrigin = platform.hasStandardBrowserEnv ? ((origin, isMSIE) => (url) => {
			url = new URL(url, platform.origin);
			return origin.protocol === url.protocol && origin.host === url.host && (isMSIE || origin.port === url.port);
		})(new URL(platform.origin), platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent)) : () => true;
		const cookies = platform.hasStandardBrowserEnv ? {
			write(name, value, expires, path, domain, secure, sameSite) {
				if (typeof document === "undefined") return;
				const cookie = [`${name}=${encodeURIComponent(value)}`];
				if (utils$1.isNumber(expires)) cookie.push(`expires=${new Date(expires).toUTCString()}`);
				if (utils$1.isString(path)) cookie.push(`path=${path}`);
				if (utils$1.isString(domain)) cookie.push(`domain=${domain}`);
				if (secure === true) cookie.push("secure");
				if (utils$1.isString(sameSite)) cookie.push(`SameSite=${sameSite}`);
				document.cookie = cookie.join("; ");
			},
			read(name) {
				if (typeof document === "undefined") return null;
				const match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
				return match ? decodeURIComponent(match[1]) : null;
			},
			remove(name) {
				this.write(name, "", Date.now() - 864e5, "/");
			}
		} : {
			write() {},
			read() {
				return null;
			},
			remove() {}
		};
		/**
		* Determines whether the specified URL is absolute
		*
		* @param {string} url The URL to test
		*
		* @returns {boolean} True if the specified URL is absolute, otherwise false
		*/
		function isAbsoluteURL(url) {
			if (typeof url !== "string") return false;
			return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
		}
		/**
		* Creates a new URL by combining the specified URLs
		*
		* @param {string} baseURL The base URL
		* @param {string} relativeURL The relative URL
		*
		* @returns {string} The combined URL
		*/
		function combineURLs(baseURL, relativeURL) {
			return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
		}
		/**
		* Creates a new URL by combining the baseURL with the requestedURL,
		* only when the requestedURL is not already an absolute URL.
		* If the requestURL is absolute, this function returns the requestedURL untouched.
		*
		* @param {string} baseURL The base URL
		* @param {string} requestedURL Absolute or relative URL to combine
		*
		* @returns {string} The combined full path
		*/
		function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
			let isRelativeUrl = !isAbsoluteURL(requestedURL);
			if (baseURL && (isRelativeUrl || allowAbsoluteUrls == false)) return combineURLs(baseURL, requestedURL);
			return requestedURL;
		}
		const headersToObject = (thing) => thing instanceof AxiosHeaders$2 ? { ...thing } : thing;
		/**
		* Config-specific merge-function which creates a new config-object
		* by merging two configuration objects together.
		*
		* @param {Object} config1
		* @param {Object} config2
		*
		* @returns {Object} New object resulting from merging config2 to config1
		*/
		function mergeConfig$1(config1, config2) {
			config2 = config2 || {};
			const config = {};
			function getMergedValue(target, source, prop, caseless) {
				if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) return utils$1.merge.call({ caseless }, target, source);
				else if (utils$1.isPlainObject(source)) return utils$1.merge({}, source);
				else if (utils$1.isArray(source)) return source.slice();
				return source;
			}
			function mergeDeepProperties(a, b, prop, caseless) {
				if (!utils$1.isUndefined(b)) return getMergedValue(a, b, prop, caseless);
				else if (!utils$1.isUndefined(a)) return getMergedValue(void 0, a, prop, caseless);
			}
			function valueFromConfig2(a, b) {
				if (!utils$1.isUndefined(b)) return getMergedValue(void 0, b);
			}
			function defaultToConfig2(a, b) {
				if (!utils$1.isUndefined(b)) return getMergedValue(void 0, b);
				else if (!utils$1.isUndefined(a)) return getMergedValue(void 0, a);
			}
			function mergeDirectKeys(a, b, prop) {
				if (prop in config2) return getMergedValue(a, b);
				else if (prop in config1) return getMergedValue(void 0, a);
			}
			const mergeMap = {
				url: valueFromConfig2,
				method: valueFromConfig2,
				data: valueFromConfig2,
				baseURL: defaultToConfig2,
				transformRequest: defaultToConfig2,
				transformResponse: defaultToConfig2,
				paramsSerializer: defaultToConfig2,
				timeout: defaultToConfig2,
				timeoutMessage: defaultToConfig2,
				withCredentials: defaultToConfig2,
				withXSRFToken: defaultToConfig2,
				adapter: defaultToConfig2,
				responseType: defaultToConfig2,
				xsrfCookieName: defaultToConfig2,
				xsrfHeaderName: defaultToConfig2,
				onUploadProgress: defaultToConfig2,
				onDownloadProgress: defaultToConfig2,
				decompress: defaultToConfig2,
				maxContentLength: defaultToConfig2,
				maxBodyLength: defaultToConfig2,
				beforeRedirect: defaultToConfig2,
				transport: defaultToConfig2,
				httpAgent: defaultToConfig2,
				httpsAgent: defaultToConfig2,
				cancelToken: defaultToConfig2,
				socketPath: defaultToConfig2,
				responseEncoding: defaultToConfig2,
				validateStatus: mergeDirectKeys,
				headers: (a, b, prop) => mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true)
			};
			utils$1.forEach(Object.keys({
				...config1,
				...config2
			}), function computeConfigValue(prop) {
				if (prop === "__proto__" || prop === "constructor" || prop === "prototype") return;
				const merge = utils$1.hasOwnProp(mergeMap, prop) ? mergeMap[prop] : mergeDeepProperties;
				const configValue = merge(config1[prop], config2[prop], prop);
				utils$1.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
			});
			return config;
		}
		const resolveConfig = (config) => {
			const newConfig = mergeConfig$1({}, config);
			let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
			newConfig.headers = headers = AxiosHeaders$2.from(headers);
			newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url, newConfig.allowAbsoluteUrls), config.params, config.paramsSerializer);
			if (auth) headers.set("Authorization", "Basic " + btoa((auth.username || "") + ":" + (auth.password ? unescape(encodeURIComponent(auth.password)) : "")));
			if (utils$1.isFormData(data)) {
				if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) headers.setContentType(void 0);
				else if (utils$1.isFunction(data.getHeaders)) {
					const formHeaders = data.getHeaders();
					const allowedHeaders = ["content-type", "content-length"];
					Object.entries(formHeaders).forEach(([key, val]) => {
						if (allowedHeaders.includes(key.toLowerCase())) headers.set(key, val);
					});
				}
			}
			if (platform.hasStandardBrowserEnv) {
				withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
				if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin(newConfig.url)) {
					const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);
					if (xsrfValue) headers.set(xsrfHeaderName, xsrfValue);
				}
			}
			return newConfig;
		};
		const xhrAdapter = typeof XMLHttpRequest !== "undefined" && function(config) {
			return new Promise(function dispatchXhrRequest(resolve, reject) {
				const _config = resolveConfig(config);
				let requestData = _config.data;
				const requestHeaders = AxiosHeaders$2.from(_config.headers).normalize();
				let { responseType, onUploadProgress, onDownloadProgress } = _config;
				let onCanceled;
				let uploadThrottled, downloadThrottled;
				let flushUpload, flushDownload;
				function done() {
					flushUpload && flushUpload();
					flushDownload && flushDownload();
					_config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
					_config.signal && _config.signal.removeEventListener("abort", onCanceled);
				}
				let request = new XMLHttpRequest();
				request.open(_config.method.toUpperCase(), _config.url, true);
				request.timeout = _config.timeout;
				function onloadend() {
					if (!request) return;
					const responseHeaders = AxiosHeaders$2.from("getAllResponseHeaders" in request && request.getAllResponseHeaders());
					settle(function _resolve(value) {
						resolve(value);
						done();
					}, function _reject(err) {
						reject(err);
						done();
					}, {
						data: !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response,
						status: request.status,
						statusText: request.statusText,
						headers: responseHeaders,
						config,
						request
					});
					request = null;
				}
				if ("onloadend" in request) request.onloadend = onloadend;
				else request.onreadystatechange = function handleLoad() {
					if (!request || request.readyState !== 4) return;
					if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) return;
					setTimeout(onloadend);
				};
				request.onabort = function handleAbort() {
					if (!request) return;
					reject(new AxiosError$2("Request aborted", AxiosError$2.ECONNABORTED, config, request));
					request = null;
				};
				request.onerror = function handleError(event) {
					const msg = event && event.message ? event.message : "Network Error";
					const err = new AxiosError$2(msg, AxiosError$2.ERR_NETWORK, config, request);
					err.event = event || null;
					reject(err);
					request = null;
				};
				request.ontimeout = function handleTimeout() {
					let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
					const transitional = _config.transitional || transitionalDefaults;
					if (_config.timeoutErrorMessage) timeoutErrorMessage = _config.timeoutErrorMessage;
					reject(new AxiosError$2(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError$2.ETIMEDOUT : AxiosError$2.ECONNABORTED, config, request));
					request = null;
				};
				requestData === void 0 && requestHeaders.setContentType(null);
				if ("setRequestHeader" in request) utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
					request.setRequestHeader(key, val);
				});
				if (!utils$1.isUndefined(_config.withCredentials)) request.withCredentials = !!_config.withCredentials;
				if (responseType && responseType !== "json") request.responseType = _config.responseType;
				if (onDownloadProgress) {
					[downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
					request.addEventListener("progress", downloadThrottled);
				}
				if (onUploadProgress && request.upload) {
					[uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
					request.upload.addEventListener("progress", uploadThrottled);
					request.upload.addEventListener("loadend", flushUpload);
				}
				if (_config.cancelToken || _config.signal) {
					onCanceled = (cancel) => {
						if (!request) return;
						reject(!cancel || cancel.type ? new CanceledError$2(null, config, request) : cancel);
						request.abort();
						request = null;
					};
					_config.cancelToken && _config.cancelToken.subscribe(onCanceled);
					if (_config.signal) _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
				}
				const protocol = parseProtocol(_config.url);
				if (protocol && platform.protocols.indexOf(protocol) === -1) {
					reject(new AxiosError$2("Unsupported protocol " + protocol + ":", AxiosError$2.ERR_BAD_REQUEST, config));
					return;
				}
				request.send(requestData || null);
			});
		};
		const composeSignals = (signals, timeout) => {
			const { length } = signals = signals ? signals.filter(Boolean) : [];
			if (timeout || length) {
				let controller = new AbortController();
				let aborted;
				const onabort = function(reason) {
					if (!aborted) {
						aborted = true;
						unsubscribe();
						const err = reason instanceof Error ? reason : this.reason;
						controller.abort(err instanceof AxiosError$2 ? err : new CanceledError$2(err instanceof Error ? err.message : err));
					}
				};
				let timer = timeout && setTimeout(() => {
					timer = null;
					onabort(new AxiosError$2(`timeout of ${timeout}ms exceeded`, AxiosError$2.ETIMEDOUT));
				}, timeout);
				const unsubscribe = () => {
					if (signals) {
						timer && clearTimeout(timer);
						timer = null;
						signals.forEach((signal) => {
							signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener("abort", onabort);
						});
						signals = null;
					}
				};
				signals.forEach((signal) => signal.addEventListener("abort", onabort));
				const { signal } = controller;
				signal.unsubscribe = () => utils$1.asap(unsubscribe);
				return signal;
			}
		};
		const composeSignals$1 = composeSignals;
		const streamChunk = function* (chunk, chunkSize) {
			let len = chunk.byteLength;
			if (!chunkSize || len < chunkSize) {
				yield chunk;
				return;
			}
			let pos = 0;
			let end;
			while (pos < len) {
				end = pos + chunkSize;
				yield chunk.slice(pos, end);
				pos = end;
			}
		};
		const readBytes = async function* (iterable, chunkSize) {
			for await (const chunk of readStream(iterable)) yield* streamChunk(chunk, chunkSize);
		};
		const readStream = async function* (stream) {
			if (stream[Symbol.asyncIterator]) {
				yield* stream;
				return;
			}
			const reader = stream.getReader();
			try {
				for (;;) {
					const { done, value } = await reader.read();
					if (done) break;
					yield value;
				}
			} finally {
				await reader.cancel();
			}
		};
		const trackStream = (stream, chunkSize, onProgress, onFinish) => {
			const iterator = readBytes(stream, chunkSize);
			let bytes = 0;
			let done;
			let _onFinish = (e) => {
				if (!done) {
					done = true;
					onFinish && onFinish(e);
				}
			};
			return new ReadableStream({
				async pull(controller) {
					try {
						const { done, value } = await iterator.next();
						if (done) {
							_onFinish();
							controller.close();
							return;
						}
						let len = value.byteLength;
						if (onProgress) onProgress(bytes += len);
						controller.enqueue(new Uint8Array(value));
					} catch (err) {
						_onFinish(err);
						throw err;
					}
				},
				cancel(reason) {
					_onFinish(reason);
					return iterator.return();
				}
			}, { highWaterMark: 2 });
		};
		const DEFAULT_CHUNK_SIZE = 64 * 1024;
		const { isFunction } = utils$1;
		const globalFetchAPI = (({ Request, Response }) => ({
			Request,
			Response
		}))(utils$1.global);
		const { ReadableStream: ReadableStream$1, TextEncoder: TextEncoder$1 } = utils$1.global;
		const test = (fn, ...args) => {
			try {
				return !!fn(...args);
			} catch (e) {
				return false;
			}
		};
		const factory = (env) => {
			env = utils$1.merge.call({ skipUndefined: true }, globalFetchAPI, env);
			const { fetch: envFetch, Request, Response } = env;
			const isFetchSupported = envFetch ? isFunction(envFetch) : typeof fetch === "function";
			const isRequestSupported = isFunction(Request);
			const isResponseSupported = isFunction(Response);
			if (!isFetchSupported) return false;
			const isReadableStreamSupported = isFetchSupported && isFunction(ReadableStream$1);
			const encodeText = isFetchSupported && (typeof TextEncoder$1 === "function" ? ((encoder) => (str) => encoder.encode(str))(new TextEncoder$1()) : async (str) => new Uint8Array(await new Request(str).arrayBuffer()));
			const supportsRequestStream = isRequestSupported && isReadableStreamSupported && test(() => {
				let duplexAccessed = false;
				const hasContentType = new Request(platform.origin, {
					body: new ReadableStream$1(),
					method: "POST",
					get duplex() {
						duplexAccessed = true;
						return "half";
					}
				}).headers.has("Content-Type");
				return duplexAccessed && !hasContentType;
			});
			const supportsResponseStream = isResponseSupported && isReadableStreamSupported && test(() => utils$1.isReadableStream(new Response("").body));
			const resolvers = { stream: supportsResponseStream && ((res) => res.body) };
			isFetchSupported && (() => {
				[
					"text",
					"arrayBuffer",
					"blob",
					"formData",
					"stream"
				].forEach((type) => {
					!resolvers[type] && (resolvers[type] = (res, config) => {
						let method = res && res[type];
						if (method) return method.call(res);
						throw new AxiosError$2(`Response type '${type}' is not supported`, AxiosError$2.ERR_NOT_SUPPORT, config);
					});
				});
			})();
			const getBodyLength = async (body) => {
				if (body == null) return 0;
				if (utils$1.isBlob(body)) return body.size;
				if (utils$1.isSpecCompliantForm(body)) return (await new Request(platform.origin, {
					method: "POST",
					body
				}).arrayBuffer()).byteLength;
				if (utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body)) return body.byteLength;
				if (utils$1.isURLSearchParams(body)) body = body + "";
				if (utils$1.isString(body)) return (await encodeText(body)).byteLength;
			};
			const resolveBodyLength = async (headers, body) => {
				const length = utils$1.toFiniteNumber(headers.getContentLength());
				return length == null ? getBodyLength(body) : length;
			};
			return async (config) => {
				let { url, method, data, signal, cancelToken, timeout, onDownloadProgress, onUploadProgress, responseType, headers, withCredentials = "same-origin", fetchOptions } = resolveConfig(config);
				let _fetch = envFetch || fetch;
				responseType = responseType ? (responseType + "").toLowerCase() : "text";
				let composedSignal = composeSignals$1([signal, cancelToken && cancelToken.toAbortSignal()], timeout);
				let request = null;
				const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
					composedSignal.unsubscribe();
				});
				let requestContentLength;
				try {
					if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
						let _request = new Request(url, {
							method: "POST",
							body: data,
							duplex: "half"
						});
						let contentTypeHeader;
						if (utils$1.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) headers.setContentType(contentTypeHeader);
						if (_request.body) {
							const [onProgress, flush] = progressEventDecorator(requestContentLength, progressEventReducer(asyncDecorator(onUploadProgress)));
							data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
						}
					}
					if (!utils$1.isString(withCredentials)) withCredentials = withCredentials ? "include" : "omit";
					const isCredentialsSupported = isRequestSupported && "credentials" in Request.prototype;
					const resolvedOptions = {
						...fetchOptions,
						signal: composedSignal,
						method: method.toUpperCase(),
						headers: headers.normalize().toJSON(),
						body: data,
						duplex: "half",
						credentials: isCredentialsSupported ? withCredentials : void 0
					};
					request = isRequestSupported && new Request(url, resolvedOptions);
					let response = await (isRequestSupported ? _fetch(request, fetchOptions) : _fetch(url, resolvedOptions));
					const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
					if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
						const options = {};
						[
							"status",
							"statusText",
							"headers"
						].forEach((prop) => {
							options[prop] = response[prop];
						});
						const responseContentLength = utils$1.toFiniteNumber(response.headers.get("content-length"));
						const [onProgress, flush] = onDownloadProgress && progressEventDecorator(responseContentLength, progressEventReducer(asyncDecorator(onDownloadProgress), true)) || [];
						response = new Response(trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
							flush && flush();
							unsubscribe && unsubscribe();
						}), options);
					}
					responseType = responseType || "text";
					let responseData = await resolvers[utils$1.findKey(resolvers, responseType) || "text"](response, config);
					!isStreamResponse && unsubscribe && unsubscribe();
					return await new Promise((resolve, reject) => {
						settle(resolve, reject, {
							data: responseData,
							headers: AxiosHeaders$2.from(response.headers),
							status: response.status,
							statusText: response.statusText,
							config,
							request
						});
					});
				} catch (err) {
					unsubscribe && unsubscribe();
					if (err && err.name === "TypeError" && /Load failed|fetch/i.test(err.message)) throw Object.assign(new AxiosError$2("Network Error", AxiosError$2.ERR_NETWORK, config, request, err && err.response), { cause: err.cause || err });
					throw AxiosError$2.from(err, err && err.code, config, request, err && err.response);
				}
			};
		};
		const seedCache = /* @__PURE__ */ new Map();
		const getFetch = (config) => {
			let env = config && config.env || {};
			const { fetch, Request, Response } = env;
			const seeds = [
				Request,
				Response,
				fetch
			];
			let i = seeds.length, seed, target, map = seedCache;
			while (i--) {
				seed = seeds[i];
				target = map.get(seed);
				target === void 0 && map.set(seed, target = i ? /* @__PURE__ */ new Map() : factory(env));
				map = target;
			}
			return target;
		};
		getFetch();
		/**
		* Known adapters mapping.
		* Provides environment-specific adapters for Axios:
		* - `http` for Node.js
		* - `xhr` for browsers
		* - `fetch` for fetch API-based requests
		* 
		* @type {Object<string, Function|Object>}
		*/
		const knownAdapters = {
			http: httpAdapter,
			xhr: xhrAdapter,
			fetch: { get: getFetch }
		};
		utils$1.forEach(knownAdapters, (fn, value) => {
			if (fn) {
				try {
					Object.defineProperty(fn, "name", { value });
				} catch (e) {}
				Object.defineProperty(fn, "adapterName", { value });
			}
		});
		/**
		* Render a rejection reason string for unknown or unsupported adapters
		* 
		* @param {string} reason
		* @returns {string}
		*/
		const renderReason = (reason) => `- ${reason}`;
		/**
		* Check if the adapter is resolved (function, null, or false)
		* 
		* @param {Function|null|false} adapter
		* @returns {boolean}
		*/
		const isResolvedHandle = (adapter) => utils$1.isFunction(adapter) || adapter === null || adapter === false;
		/**
		* Get the first suitable adapter from the provided list.
		* Tries each adapter in order until a supported one is found.
		* Throws an AxiosError if no adapter is suitable.
		* 
		* @param {Array<string|Function>|string|Function} adapters - Adapter(s) by name or function.
		* @param {Object} config - Axios request configuration
		* @throws {AxiosError} If no suitable adapter is available
		* @returns {Function} The resolved adapter function
		*/
		function getAdapter$1(adapters, config) {
			adapters = utils$1.isArray(adapters) ? adapters : [adapters];
			const { length } = adapters;
			let nameOrAdapter;
			let adapter;
			const rejectedReasons = {};
			for (let i = 0; i < length; i++) {
				nameOrAdapter = adapters[i];
				let id;
				adapter = nameOrAdapter;
				if (!isResolvedHandle(nameOrAdapter)) {
					adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
					if (adapter === void 0) throw new AxiosError$2(`Unknown adapter '${id}'`);
				}
				if (adapter && (utils$1.isFunction(adapter) || (adapter = adapter.get(config)))) break;
				rejectedReasons[id || "#" + i] = adapter;
			}
			if (!adapter) {
				const reasons = Object.entries(rejectedReasons).map(([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build"));
				let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
				throw new AxiosError$2(`There is no suitable adapter to dispatch the request ` + s, "ERR_NOT_SUPPORT");
			}
			return adapter;
		}
		/**
		* Exports Axios adapters and utility to resolve an adapter
		*/
		const adapters = {
			/**
			* Resolve an adapter from a list of adapter names or functions.
			* @type {Function}
			*/
			getAdapter: getAdapter$1,
			/**
			* Exposes all known adapters
			* @type {Object<string, Function|Object>}
			*/
			adapters: knownAdapters
		};
		/**
		* Throws a `CanceledError` if cancellation has been requested.
		*
		* @param {Object} config The config that is to be used for the request
		*
		* @returns {void}
		*/
		function throwIfCancellationRequested(config) {
			if (config.cancelToken) config.cancelToken.throwIfRequested();
			if (config.signal && config.signal.aborted) throw new CanceledError$2(null, config);
		}
		/**
		* Dispatch a request to the server using the configured adapter.
		*
		* @param {object} config The config that is to be used for the request
		*
		* @returns {Promise} The Promise to be fulfilled
		*/
		function dispatchRequest(config) {
			throwIfCancellationRequested(config);
			config.headers = AxiosHeaders$2.from(config.headers);
			config.data = transformData.call(config, config.transformRequest);
			if ([
				"post",
				"put",
				"patch"
			].indexOf(config.method) !== -1) config.headers.setContentType("application/x-www-form-urlencoded", false);
			return adapters.getAdapter(config.adapter || defaults$1.adapter, config)(config).then(function onAdapterResolution(response) {
				throwIfCancellationRequested(config);
				response.data = transformData.call(config, config.transformResponse, response);
				response.headers = AxiosHeaders$2.from(response.headers);
				return response;
			}, function onAdapterRejection(reason) {
				if (!isCancel$1(reason)) {
					throwIfCancellationRequested(config);
					if (reason && reason.response) {
						reason.response.data = transformData.call(config, config.transformResponse, reason.response);
						reason.response.headers = AxiosHeaders$2.from(reason.response.headers);
					}
				}
				return Promise.reject(reason);
			});
		}
		const VERSION$1 = "1.13.5";
		const validators$1 = {};
		[
			"object",
			"boolean",
			"number",
			"function",
			"string",
			"symbol"
		].forEach((type, i) => {
			validators$1[type] = function validator(thing) {
				return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
			};
		});
		const deprecatedWarnings = {};
		/**
		* Transitional option validator
		*
		* @param {function|boolean?} validator - set to false if the transitional option has been removed
		* @param {string?} version - deprecated version / removed since version
		* @param {string?} message - some message with additional info
		*
		* @returns {function}
		*/
		validators$1.transitional = function transitional(validator, version, message) {
			function formatMessage(opt, desc) {
				return "[Axios v1.13.5] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
			}
			return (value, opt, opts) => {
				if (validator === false) throw new AxiosError$2(formatMessage(opt, " has been removed" + (version ? " in " + version : "")), AxiosError$2.ERR_DEPRECATED);
				if (version && !deprecatedWarnings[opt]) {
					deprecatedWarnings[opt] = true;
					console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
				}
				return validator ? validator(value, opt, opts) : true;
			};
		};
		validators$1.spelling = function spelling(correctSpelling) {
			return (value, opt) => {
				console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
				return true;
			};
		};
		/**
		* Assert object's properties type
		*
		* @param {object} options
		* @param {object} schema
		* @param {boolean?} allowUnknown
		*
		* @returns {object}
		*/
		function assertOptions(options, schema, allowUnknown) {
			if (typeof options !== "object") throw new AxiosError$2("options must be an object", AxiosError$2.ERR_BAD_OPTION_VALUE);
			const keys = Object.keys(options);
			let i = keys.length;
			while (i-- > 0) {
				const opt = keys[i];
				const validator = schema[opt];
				if (validator) {
					const value = options[opt];
					const result = value === void 0 || validator(value, opt, options);
					if (result !== true) throw new AxiosError$2("option " + opt + " must be " + result, AxiosError$2.ERR_BAD_OPTION_VALUE);
					continue;
				}
				if (allowUnknown !== true) throw new AxiosError$2("Unknown option " + opt, AxiosError$2.ERR_BAD_OPTION);
			}
		}
		const validator = {
			assertOptions,
			validators: validators$1
		};
		const validators = validator.validators;
		/**
		* Create a new instance of Axios
		*
		* @param {Object} instanceConfig The default config for the instance
		*
		* @return {Axios} A new instance of Axios
		*/
		var Axios$1 = class {
			constructor(instanceConfig) {
				this.defaults = instanceConfig || {};
				this.interceptors = {
					request: new InterceptorManager$1(),
					response: new InterceptorManager$1()
				};
			}
			/**
			* Dispatch a request
			*
			* @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
			* @param {?Object} config
			*
			* @returns {Promise} The Promise to be fulfilled
			*/
			async request(configOrUrl, config) {
				try {
					return await this._request(configOrUrl, config);
				} catch (err) {
					if (err instanceof Error) {
						let dummy = {};
						Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = /* @__PURE__ */ new Error();
						const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
						try {
							if (!err.stack) err.stack = stack;
							else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) err.stack += "\n" + stack;
						} catch (e) {}
					}
					throw err;
				}
			}
			_request(configOrUrl, config) {
				if (typeof configOrUrl === "string") {
					config = config || {};
					config.url = configOrUrl;
				} else config = configOrUrl || {};
				config = mergeConfig$1(this.defaults, config);
				const { transitional, paramsSerializer, headers } = config;
				if (transitional !== void 0) validator.assertOptions(transitional, {
					silentJSONParsing: validators.transitional(validators.boolean),
					forcedJSONParsing: validators.transitional(validators.boolean),
					clarifyTimeoutError: validators.transitional(validators.boolean),
					legacyInterceptorReqResOrdering: validators.transitional(validators.boolean)
				}, false);
				if (paramsSerializer != null) if (utils$1.isFunction(paramsSerializer)) config.paramsSerializer = { serialize: paramsSerializer };
				else validator.assertOptions(paramsSerializer, {
					encode: validators.function,
					serialize: validators.function
				}, true);
				if (config.allowAbsoluteUrls !== void 0);
				else if (this.defaults.allowAbsoluteUrls !== void 0) config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
				else config.allowAbsoluteUrls = true;
				validator.assertOptions(config, {
					baseUrl: validators.spelling("baseURL"),
					withXsrfToken: validators.spelling("withXSRFToken")
				}, true);
				config.method = (config.method || this.defaults.method || "get").toLowerCase();
				let contextHeaders = headers && utils$1.merge(headers.common, headers[config.method]);
				headers && utils$1.forEach([
					"delete",
					"get",
					"head",
					"post",
					"put",
					"patch",
					"common"
				], (method) => {
					delete headers[method];
				});
				config.headers = AxiosHeaders$2.concat(contextHeaders, headers);
				const requestInterceptorChain = [];
				let synchronousRequestInterceptors = true;
				this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
					if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) return;
					synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
					const transitional = config.transitional || transitionalDefaults;
					if (transitional && transitional.legacyInterceptorReqResOrdering) requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
					else requestInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
				});
				const responseInterceptorChain = [];
				this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
					responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
				});
				let promise;
				let i = 0;
				let len;
				if (!synchronousRequestInterceptors) {
					const chain = [dispatchRequest.bind(this), void 0];
					chain.unshift(...requestInterceptorChain);
					chain.push(...responseInterceptorChain);
					len = chain.length;
					promise = Promise.resolve(config);
					while (i < len) promise = promise.then(chain[i++], chain[i++]);
					return promise;
				}
				len = requestInterceptorChain.length;
				let newConfig = config;
				while (i < len) {
					const onFulfilled = requestInterceptorChain[i++];
					const onRejected = requestInterceptorChain[i++];
					try {
						newConfig = onFulfilled(newConfig);
					} catch (error) {
						onRejected.call(this, error);
						break;
					}
				}
				try {
					promise = dispatchRequest.call(this, newConfig);
				} catch (error) {
					return Promise.reject(error);
				}
				i = 0;
				len = responseInterceptorChain.length;
				while (i < len) promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
				return promise;
			}
			getUri(config) {
				config = mergeConfig$1(this.defaults, config);
				return buildURL(buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls), config.params, config.paramsSerializer);
			}
		};
		utils$1.forEach([
			"delete",
			"get",
			"head",
			"options"
		], function forEachMethodNoData(method) {
			Axios$1.prototype[method] = function(url, config) {
				return this.request(mergeConfig$1(config || {}, {
					method,
					url,
					data: (config || {}).data
				}));
			};
		});
		utils$1.forEach([
			"post",
			"put",
			"patch"
		], function forEachMethodWithData(method) {
			function generateHTTPMethod(isForm) {
				return function httpMethod(url, data, config) {
					return this.request(mergeConfig$1(config || {}, {
						method,
						headers: isForm ? { "Content-Type": "multipart/form-data" } : {},
						url,
						data
					}));
				};
			}
			Axios$1.prototype[method] = generateHTTPMethod();
			Axios$1.prototype[method + "Form"] = generateHTTPMethod(true);
		});
		const Axios$2 = Axios$1;
		const CancelToken$2 = class CancelToken$1 {
			constructor(executor) {
				if (typeof executor !== "function") throw new TypeError("executor must be a function.");
				let resolvePromise;
				this.promise = new Promise(function promiseExecutor(resolve) {
					resolvePromise = resolve;
				});
				const token = this;
				this.promise.then((cancel) => {
					if (!token._listeners) return;
					let i = token._listeners.length;
					while (i-- > 0) token._listeners[i](cancel);
					token._listeners = null;
				});
				this.promise.then = (onfulfilled) => {
					let _resolve;
					const promise = new Promise((resolve) => {
						token.subscribe(resolve);
						_resolve = resolve;
					}).then(onfulfilled);
					promise.cancel = function reject() {
						token.unsubscribe(_resolve);
					};
					return promise;
				};
				executor(function cancel(message, config, request) {
					if (token.reason) return;
					token.reason = new CanceledError$2(message, config, request);
					resolvePromise(token.reason);
				});
			}
			/**
			* Throws a `CanceledError` if cancellation has been requested.
			*/
			throwIfRequested() {
				if (this.reason) throw this.reason;
			}
			/**
			* Subscribe to the cancel signal
			*/
			subscribe(listener) {
				if (this.reason) {
					listener(this.reason);
					return;
				}
				if (this._listeners) this._listeners.push(listener);
				else this._listeners = [listener];
			}
			/**
			* Unsubscribe from the cancel signal
			*/
			unsubscribe(listener) {
				if (!this._listeners) return;
				const index = this._listeners.indexOf(listener);
				if (index !== -1) this._listeners.splice(index, 1);
			}
			toAbortSignal() {
				const controller = new AbortController();
				const abort = (err) => {
					controller.abort(err);
				};
				this.subscribe(abort);
				controller.signal.unsubscribe = () => this.unsubscribe(abort);
				return controller.signal;
			}
			/**
			* Returns an object that contains a new `CancelToken` and a function that, when called,
			* cancels the `CancelToken`.
			*/
			static source() {
				let cancel;
				return {
					token: new CancelToken$1(function executor(c) {
						cancel = c;
					}),
					cancel
				};
			}
		};
		/**
		* Syntactic sugar for invoking a function and expanding an array for arguments.
		*
		* Common use case would be to use `Function.prototype.apply`.
		*
		*  ```js
		*  function f(x, y, z) {}
		*  const args = [1, 2, 3];
		*  f.apply(null, args);
		*  ```
		*
		* With `spread` this example can be re-written.
		*
		*  ```js
		*  spread(function(x, y, z) {})([1, 2, 3]);
		*  ```
		*
		* @param {Function} callback
		*
		* @returns {Function}
		*/
		function spread$1(callback) {
			return function wrap(arr) {
				return callback.apply(null, arr);
			};
		}
		/**
		* Determines whether the payload is an error thrown by Axios
		*
		* @param {*} payload The value to test
		*
		* @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
		*/
		function isAxiosError$1(payload) {
			return utils$1.isObject(payload) && payload.isAxiosError === true;
		}
		const HttpStatusCode$1 = {
			Continue: 100,
			SwitchingProtocols: 101,
			Processing: 102,
			EarlyHints: 103,
			Ok: 200,
			Created: 201,
			Accepted: 202,
			NonAuthoritativeInformation: 203,
			NoContent: 204,
			ResetContent: 205,
			PartialContent: 206,
			MultiStatus: 207,
			AlreadyReported: 208,
			ImUsed: 226,
			MultipleChoices: 300,
			MovedPermanently: 301,
			Found: 302,
			SeeOther: 303,
			NotModified: 304,
			UseProxy: 305,
			Unused: 306,
			TemporaryRedirect: 307,
			PermanentRedirect: 308,
			BadRequest: 400,
			Unauthorized: 401,
			PaymentRequired: 402,
			Forbidden: 403,
			NotFound: 404,
			MethodNotAllowed: 405,
			NotAcceptable: 406,
			ProxyAuthenticationRequired: 407,
			RequestTimeout: 408,
			Conflict: 409,
			Gone: 410,
			LengthRequired: 411,
			PreconditionFailed: 412,
			PayloadTooLarge: 413,
			UriTooLong: 414,
			UnsupportedMediaType: 415,
			RangeNotSatisfiable: 416,
			ExpectationFailed: 417,
			ImATeapot: 418,
			MisdirectedRequest: 421,
			UnprocessableEntity: 422,
			Locked: 423,
			FailedDependency: 424,
			TooEarly: 425,
			UpgradeRequired: 426,
			PreconditionRequired: 428,
			TooManyRequests: 429,
			RequestHeaderFieldsTooLarge: 431,
			UnavailableForLegalReasons: 451,
			InternalServerError: 500,
			NotImplemented: 501,
			BadGateway: 502,
			ServiceUnavailable: 503,
			GatewayTimeout: 504,
			HttpVersionNotSupported: 505,
			VariantAlsoNegotiates: 506,
			InsufficientStorage: 507,
			LoopDetected: 508,
			NotExtended: 510,
			NetworkAuthenticationRequired: 511,
			WebServerIsDown: 521,
			ConnectionTimedOut: 522,
			OriginIsUnreachable: 523,
			TimeoutOccurred: 524,
			SslHandshakeFailed: 525,
			InvalidSslCertificate: 526
		};
		Object.entries(HttpStatusCode$1).forEach(([key, value]) => {
			HttpStatusCode$1[value] = key;
		});
		const HttpStatusCode$2 = HttpStatusCode$1;
		/**
		* Create an instance of Axios
		*
		* @param {Object} defaultConfig The default config for the instance
		*
		* @returns {Axios} A new instance of Axios
		*/
		function createInstance(defaultConfig) {
			const context = new Axios$2(defaultConfig);
			const instance = bind(Axios$2.prototype.request, context);
			utils$1.extend(instance, Axios$2.prototype, context, { allOwnKeys: true });
			utils$1.extend(instance, context, null, { allOwnKeys: true });
			instance.create = function create(instanceConfig) {
				return createInstance(mergeConfig$1(defaultConfig, instanceConfig));
			};
			return instance;
		}
		const axios = createInstance(defaults$1);
		axios.Axios = Axios$2;
		axios.CanceledError = CanceledError$2;
		axios.CancelToken = CancelToken$2;
		axios.isCancel = isCancel$1;
		axios.VERSION = VERSION$1;
		axios.toFormData = toFormData$1;
		axios.AxiosError = AxiosError$2;
		axios.Cancel = axios.CanceledError;
		axios.all = function all(promises) {
			return Promise.all(promises);
		};
		axios.spread = spread$1;
		axios.isAxiosError = isAxiosError$1;
		axios.mergeConfig = mergeConfig$1;
		axios.AxiosHeaders = AxiosHeaders$2;
		axios.formToJSON = (thing) => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);
		axios.getAdapter = adapters.getAdapter;
		axios.HttpStatusCode = HttpStatusCode$2;
		axios.default = axios;
		const axios$1 = axios;
		const { Axios, AxiosError, CanceledError, isCancel, CancelToken, VERSION, all, Cancel, isAxiosError, spread, toFormData, AxiosHeaders, HttpStatusCode, formToJSON, getAdapter, mergeConfig } = axios$1;
		//#endregion
		//#region src/runtime/target.ts
		let runtimeTarget = "web";
		function configureRuntimeTarget(target) {
			runtimeTarget = target;
		}
		function getRuntimeTarget() {
			return runtimeTarget;
		}
		//#endregion
		//#region src/runtime/token-persistence.ts
		const memory = { token: null };
		let persistence = {
			read: () => memory.token,
			write: (token) => {
				memory.token = token;
			}
		};
		function getPersistedToken() {
			return persistence.read();
		}
		function setPersistedToken(token) {
			persistence.write(token);
		}
		//#endregion
		//#region src/api/core/httpClient.ts
		function accessDenialMessage(payload) {
			if (!payload || typeof payload !== "object") return null;
			const response = payload;
			const detail = response.data;
			const errorCode = detail?.error_code;
			if (!errorCode) return null;
			return `${{
				trading_day_access_closed: "普通账户在交易日暂停访问",
				access_calendar_unavailable: "暂时无法确认交易日状态，请稍后重试",
				frequency_quota_exceeded: "请求频率额度已用尽",
				daily_traffic_quota_exceeded: "每日流量额度已用尽"
			}[errorCode] ?? response.msg ?? "访问受限"}${typeof detail.limit === "number" && detail.limit > 0 ? `（已用 ${detail.usage ?? 0} / ${detail.limit}）` : ""}${detail.reset_at ? `，重置时间 ${new Date(detail.reset_at).toLocaleString("zh-CN", { hour12: false })}` : ""}`;
		}
		function isTableData$1(data) {
			return data !== null && typeof data === "object" && "columns" in data && "rows" in data && Array.isArray(data.columns) && Array.isArray(data.rows);
		}
		function zipTableData(data) {
			const { columns, rows } = data;
			if (!columns || !rows || rows.length === 0) return [];
			return rows.map((row) => {
				const obj = {};
				columns.forEach((col, index) => {
					obj[col] = row[index];
				});
				return obj;
			});
		}
		function resolveBaseURL() {
			return "https://api.onclaw.cc";
		}
		const baseURL = resolveBaseURL();
		function getHttpBaseURL() {
			return baseURL;
		}
		let configuredTransport;
		const axiosAdapter = axios$1.getAdapter(axios$1.defaults.adapter);
		const runtimeAdapter = async (config) => {
			if (!configuredTransport) return axiosAdapter(config);
			const result = await configuredTransport(config);
			return {
				data: result.data,
				status: result.status,
				statusText: String(result.status),
				headers: result.headers ?? {},
				config,
				request: void 0
			};
		};
		function configureHttpTransport(transport) {
			const previous = configuredTransport;
			configuredTransport = transport;
			return () => {
				configuredTransport = previous;
			};
		}
		const httpClient = axios$1.create({
			baseURL,
			timeout: 3e4,
			adapter: runtimeAdapter
		});
		httpClient.interceptors.request.use((config) => {
			const token = getRuntimeTarget() === "harness" ? null : getPersistedToken();
			if (token) config.headers.Authorization = `Bearer ${token}`;
			return config;
		}, (error) => Promise.reject(error));
		httpClient.interceptors.response.use((response) => {
			const data = response.data;
			let rawData = data;
			if (data && typeof data === "object" && "code" in data) {
				const res = data;
				if (res.code !== 200) {
					if (res.code === 401) {
						if (getRuntimeTarget() !== "harness") setPersistedToken(null);
						window.dispatchEvent(new Event("auth-error"));
					}
					return Promise.reject(new Error(res.msg || "Unknown Error"));
				}
				rawData = res.data;
			}
			if (response.config.tableDataMode === "records" && isTableData$1(rawData)) {
				response.data = zipTableData(rawData);
				return response;
			}
			response.data = rawData;
			return response;
		}, (error) => {
			if (error.response?.status === 401) {
				if (getRuntimeTarget() !== "harness") setPersistedToken(null);
				window.dispatchEvent(new Event("auth-error"));
				return Promise.reject(error);
			}
			const denialMessage = accessDenialMessage(error.response?.data);
			if (denialMessage) return Promise.reject(new Error(denialMessage));
			console.error("[onclawApi] Network Error:", error);
			return Promise.reject(error);
		});
		//#endregion
		//#region src/platform/webCredentialProtection.ts
		const DATABASE_NAME = "onclaw-secure-storage";
		const LEGACY_DATABASE_NAME = "finagent-secure-storage";
		const STORE_NAME = "keys";
		const KEY_ID = "remembered-password-v1";
		const CIPHERTEXT_PREFIX = "web-v1.";
		function requestResult(request) {
			return new Promise((resolve, reject) => {
				request.onsuccess = () => resolve(request.result);
				request.onerror = () => reject(request.error);
			});
		}
		function openDatabase(databaseName, createStore) {
			return new Promise((resolve, reject) => {
				const request = indexedDB.open(databaseName, 1);
				request.onupgradeneeded = () => {
					if (createStore && !request.result.objectStoreNames.contains(STORE_NAME)) request.result.createObjectStore(STORE_NAME);
				};
				request.onsuccess = () => resolve(request.result);
				request.onerror = () => reject(request.error);
			});
		}
		async function readEncryptionKey(databaseName, createStore = false) {
			const database = await openDatabase(databaseName, createStore);
			try {
				if (!database.objectStoreNames.contains(STORE_NAME)) return void 0;
				return await requestResult(database.transaction(STORE_NAME, "readonly").objectStore(STORE_NAME).get(KEY_ID));
			} finally {
				database.close();
			}
		}
		async function getEncryptionKey() {
			const existing = await readEncryptionKey(DATABASE_NAME, true);
			if (existing) return existing;
			const database = await openDatabase(DATABASE_NAME, true);
			try {
				const key = await crypto.subtle.generateKey({
					name: "AES-GCM",
					length: 256
				}, false, ["encrypt", "decrypt"]);
				await requestResult(database.transaction(STORE_NAME, "readwrite").objectStore(STORE_NAME).put(key, KEY_ID));
				return key;
			} finally {
				database.close();
			}
		}
		function toBase64(value) {
			let binary = "";
			for (const byte of value) binary += String.fromCharCode(byte);
			return btoa(binary);
		}
		function fromBase64(value) {
			const binary = atob(value);
			return Uint8Array.from(binary, (character) => character.charCodeAt(0));
		}
		function canProtectCredentials() {
			return typeof window !== "undefined" && typeof indexedDB !== "undefined" && typeof crypto?.subtle !== "undefined";
		}
		async function encryptWebCredential(plaintext) {
			if (!canProtectCredentials()) return null;
			try {
				const key = await getEncryptionKey();
				const iv = crypto.getRandomValues(/* @__PURE__ */ new Uint8Array(12));
				const encrypted = await crypto.subtle.encrypt({
					name: "AES-GCM",
					iv
				}, key, new TextEncoder().encode(plaintext));
				return `${CIPHERTEXT_PREFIX}${toBase64(iv)}.${toBase64(new Uint8Array(encrypted))}`;
			} catch {
				return null;
			}
		}
		async function decryptWebCredential(ciphertext) {
			if (!canProtectCredentials() || !ciphertext.startsWith(CIPHERTEXT_PREFIX)) return null;
			const [ivValue, encryptedValue] = ciphertext.slice(7).split(".");
			if (!ivValue || !encryptedValue) return null;
			for (const databaseName of [DATABASE_NAME, LEGACY_DATABASE_NAME]) try {
				const key = await readEncryptionKey(databaseName, databaseName === DATABASE_NAME);
				if (!key) continue;
				const decrypted = await crypto.subtle.decrypt({
					name: "AES-GCM",
					iv: fromBase64(ivValue)
				}, key, fromBase64(encryptedValue));
				return new TextDecoder().decode(decrypted);
			} catch {}
			return null;
		}
		//#endregion
		//#region src/platform/index.ts
		const getElectronAPI = () => {
			if (typeof window === "undefined") return;
			return window.electronAPI;
		};
		const isElectronEnv = !!getElectronAPI();
		const unsupportedState = () => ({
			initialized: false,
			isSupported: false,
			runtimeHealth: "unavailable",
			authorizationState: "unsupported",
			message: "desktop stock linker is only available in Electron",
			expiresAt: 0,
			ths: {
				name: "ths",
				code: "",
				health: "unavailable",
				lastError: "unsupported",
				updatedAt: 0,
				lastScanAt: 0,
				lastResolvedOffset: 0,
				available: false,
				usingFallback: false,
				directRead: false,
				pid: 0
			},
			tdx: {
				name: "tdx",
				code: "",
				health: "unavailable",
				lastError: "unsupported",
				updatedAt: 0,
				lastScanAt: 0,
				lastResolvedOffset: 0,
				available: false,
				usingFallback: false,
				directRead: false,
				pid: 0
			}
		});
		const unsupportedInitResult = () => ({
			ok: false,
			authorizationState: "unsupported",
			message: "desktop stock linker is only available in Electron",
			runtimeHealth: "unavailable",
			expiresAt: 0
		});
		const unsupportedCommandResult = (target, code) => ({
			ok: false,
			accepted: false,
			status: "unsupported",
			target,
			code,
			message: "desktop stock linker is only available in Electron"
		});
		const platformAPI = {
			stockLinker: isElectronEnv ? {
				isSupported: true,
				initRuntime: async (config) => getElectronAPI()?.initRuntime(config) ?? unsupportedInitResult(),
				getState: async () => getElectronAPI()?.getRuntimeState() ?? unsupportedState(),
				setCode: async (target, code) => getElectronAPI()?.setRuntimeCode(target, code) ?? unsupportedCommandResult(target, code)
			} : {
				isSupported: false,
				initRuntime: async () => unsupportedInitResult(),
				getState: async () => unsupportedState(),
				setCode: async (target, code) => unsupportedCommandResult(target, code)
			},
			externalNavigator: isElectronEnv ? {
				isSupported: true,
				openExternal: async (url) => getElectronAPI()?.openExternal(url) ?? false
			} : {
				isSupported: true,
				openExternal: async (url) => {
					if (typeof window === "undefined") return false;
					return !!window.open(url, "_blank", "noopener,noreferrer");
				}
			},
			credentialProtection: isElectronEnv ? {
				encrypt: async (plaintext) => {
					const encrypted = await getElectronAPI()?.encryptCredential(plaintext);
					return encrypted ? `electron-v1.${encrypted}` : null;
				},
				decrypt: async (ciphertext) => {
					if (!ciphertext.startsWith("electron-v1.")) return null;
					return getElectronAPI()?.decryptCredential(ciphertext.slice(12)) ?? null;
				}
			} : {
				encrypt: encryptWebCredential,
				decrypt: decryptWebCredential
			},
			clipboard: { writeText: async (value) => {
				if (typeof navigator === "undefined" || !navigator.clipboard?.writeText) return false;
				try {
					await navigator.clipboard.writeText(value);
					return true;
				} catch {
					return false;
				}
			} },
			legalDocuments: isElectronEnv ? { getText: async (url) => {
				const electronAPI = getElectronAPI();
				if (!electronAPI) throw new Error("Electron 法律文档通道不可用");
				return electronAPI.fetchLegalDocument(url);
			} } : { getText: async (url) => {
				const response = await fetch(url, {
					method: "GET",
					credentials: "omit"
				});
				if (!response.ok) throw new Error(`法律文档加载失败（HTTP ${response.status}）`);
				return response.text();
			} }
		};
		function configurePlatformAPI(adapter) {
			const previous = { ...platformAPI };
			Object.assign(platformAPI, adapter);
			return () => Object.assign(platformAPI, previous);
		}
		//#endregion
		//#region src/legalDocuments.ts
		const LEGAL_BUNDLE_VERSION = "2026-08-24-v1";
		const LEGAL_CONTENT_ORIGIN = "https://onclaw.cc";
		const LEGAL_DOCUMENT_DESCRIPTORS = [
			{
				documentType: "user_agreement",
				title: "onclaw用户协议",
				filename: "user_agreement.md"
			},
			{
				documentType: "privacy_policy",
				title: "onclaw隐私政策",
				filename: "privacy_policy.md"
			},
			{
				documentType: "data_service_agreement",
				title: "onclaw数据服务协议",
				filename: "data_service_agreement.md"
			}
		].map((descriptor) => ({
			...descriptor,
			url: `${LEGAL_CONTENT_ORIGIN}/legal_content/${descriptor.filename}`
		}));
		const descriptorsByType = new Map(LEGAL_DOCUMENT_DESCRIPTORS.map((descriptor) => [descriptor.documentType, descriptor]));
		const documentRequests = /* @__PURE__ */ new Map();
		function getLegalDocumentDescriptor(documentType) {
			const descriptor = descriptorsByType.get(documentType);
			if (!descriptor) throw new Error(`未知法律文档类型: ${documentType}`);
			return descriptor;
		}
		function loadLegalDocument(documentType, getText = platformAPI.legalDocuments.getText) {
			const existingRequest = documentRequests.get(documentType);
			if (existingRequest) return existingRequest;
			const descriptor = getLegalDocumentDescriptor(documentType);
			const request = getText(descriptor.url).then((content) => {
				return {
					document_type: descriptor.documentType,
					version: LEGAL_BUNDLE_VERSION,
					title: descriptor.title,
					content
				};
			}).catch((error) => {
				documentRequests.delete(documentType);
				throw error;
			});
			documentRequests.set(documentType, request);
			return request;
		}
		const SNAPSHOT_SETTINGS_DISPLAY_DEFINITIONS = [
			{
				id: "close",
				label: "收盘价",
				group: "基础信息",
				type: "cell",
				fields: ["close"]
			},
			{
				id: "open_close_pct",
				label: "开收涨幅",
				group: "基础信息",
				type: "cell",
				fields: [
					"open",
					"close",
					"pre_close"
				]
			},
			{
				id: "high_low_pct",
				label: "高低振幅",
				group: "基础信息",
				type: "cell",
				fields: [
					"high",
					"low",
					"pre_close"
				]
			},
			{
				id: "limit_shape",
				label: "涨停类型",
				group: "基础信息",
				type: "cell",
				fields: ["limit_shape"],
				settingsVisible: false
			},
			{
				id: "ma5_bias",
				label: "MA5 偏离",
				group: "基础信息",
				type: "cell",
				fields: ["ma5_bias"]
			},
			{
				id: "amount",
				label: "成交额",
				group: "基础信息",
				type: "cell",
				fields: ["amount"]
			},
			{
				id: "free_mv",
				label: "流通市值",
				group: "基础信息",
				type: "cell",
				fields: ["free_mv"]
			},
			{
				id: "pct_chg",
				label: "涨跌幅",
				group: "基础信息",
				type: "cell",
				fields: ["pct_chg"]
			},
			{
				id: "consecutive_desc",
				label: "连板描述",
				group: "涨停与炸板",
				type: "cell",
				fields: [
					"consecutive_count",
					"limit_board_count",
					"limit_count",
					"limit_status"
				]
			},
			{
				id: "limit_reason",
				label: "涨停原因",
				group: "涨停与炸板",
				type: "cell",
				fields: ["limit_reason"]
			},
			{
				id: "limit_status_text",
				label: "状态文本",
				group: "涨停与炸板",
				type: "cell",
				fields: ["limit_status"]
			},
			{
				id: "is_auction_up_limit",
				label: "竞价涨停",
				group: "涨停与炸板",
				type: "cell",
				fields: ["is_auction_up_limit"],
				persistedTypes: ["cell", "tag"]
			},
			{
				id: "auction_unmatched",
				label: "竞价未匹配金额",
				group: "涨停与炸板",
				type: "cell",
				fields: ["auction_unmatched"]
			},
			{
				id: "minute_curve",
				label: "分钟曲线字段",
				group: "曲线",
				type: "curve",
				fields: ["minute_curve"]
			},
			{
				id: "regulatory_status",
				label: "监管",
				group: "标签",
				type: "tag",
				fields: ["regulatory_status"]
			},
			{
				id: "has_convertible",
				label: "可转债",
				group: "标签",
				type: "tag",
				fields: ["has_convertible"]
			}
		].filter((definition) => definition.settingsVisible !== false);
		function supportsDisplayType(definition, type) {
			return Array.isArray(definition.type) ? definition.type.includes(type) : definition.type === type;
		}
		function supportsPersistedDisplayType(definition, type) {
			return supportsDisplayType(definition, type) || definition.persistedTypes?.includes(type) === true;
		}
		const DisplayFormatHelper = {
			/**
			* 连板描述文本生成规则 (复用您提供的代码)
			*/
			formatLimitDescription(snapshot) {
				const limitBoardCount = snapshot.limit_board_count ?? 0;
				const limitCount = snapshot.limit_count ?? 0;
				const consecutiveCount = snapshot.consecutive_count ?? 0;
				const limitStatus = snapshot.limit_status;
				if (limitBoardCount !== 0 && limitCount !== 0 && limitBoardCount === limitCount) {
					if (limitCount === 1) return "首板";
					return `${limitCount}连扳`;
				}
				if (limitBoardCount !== 0 && limitCount !== 0 && limitBoardCount !== limitCount) {
					if (limitCount === 1) return "首板";
					let base = `${limitCount}天${limitBoardCount}板`;
					if (limitStatus === 2) base += " 炸板";
					else if (limitStatus === -1) base += " 跌停";
					return base;
				}
				if (limitStatus === 2) return "炸板";
				if (limitBoardCount === 0 && limitCount === 0) {
					if (consecutiveCount > 0) {
						if (consecutiveCount === 1) return "首板";
						return `${consecutiveCount}连扳`;
					}
				}
				if (consecutiveCount < 0) {
					const absCount = Math.abs(consecutiveCount);
					if (consecutiveCount < -1) return `${absCount}连跌停`;
					return "跌停";
				}
				return "";
			},
			/**
			* 核心：基于映射配置，将后端数据转换为前端显示的文本
			*/
			computeValue(displayId, snapshot) {
				if (!snapshot) return "-";
				switch (displayId) {
					case "close": {
						if (snapshot.close === null || snapshot.close === void 0) return "-";
						const close = Number(snapshot.close);
						return Number.isFinite(close) ? close.toFixed(2) : "-";
					}
					case "open_close_pct": {
						const { open, close, pre_close } = snapshot;
						if (!open || !close || !pre_close) return "-";
						return `${((open / pre_close - 1) * 100).toFixed(2)}%+${((close / pre_close - 1) * 100).toFixed(2)}%`;
					}
					case "high_low_pct": {
						const { high, low, pre_close } = snapshot;
						if (!high || !low || !pre_close) return "-";
						return `${((high / pre_close - 1) * 100).toFixed(2)}%+${((low / pre_close - 1) * 100).toFixed(2)}%`;
					}
					case "consecutive_desc": return DisplayFormatHelper.formatLimitDescription(snapshot) || "-";
					case "is_auction_up_limit": return snapshot.is_auction_up_limit ? "一字" : "非一字";
					case "limit_status_text":
						if (snapshot.limit_status === 1) return "涨停";
						if (snapshot.limit_status === -1) return "跌停";
						if (snapshot.limit_status === 2) return "炸板";
						return "正常";
					case "amount": return snapshot.amount ? `${(Number(snapshot.amount) / 1e5).toFixed(1)}亿` : "-";
					case "free_mv": {
						const fMv = snapshot.free_mv ?? snapshot.circ_mv;
						return fMv !== null && fMv !== void 0 ? `${(Number(fMv) / 1e4).toFixed(1)}亿` : "-";
					}
					case "pct_chg":
					case "ma5_bias": {
						const val = snapshot[displayId];
						return val != null ? `${Number(val).toFixed(2)}%` : "-";
					}
					case "limit_shape":
					case "limit_reason": {
						const val = snapshot[displayId];
						return val ? String(val) : "-";
					}
					case "auction_unmatched": return snapshot.auction_unmatched ? `${Number(snapshot.auction_unmatched).toFixed(2)}亿` : "-";
					default: return "-";
				}
			}
		};
		const DEFAULT_SNAPSHOT_PREVIEW_STOCK_FILTERS = {
			limitEvents: false,
			convertible: false
		};
		const LADDER_SNAPSHOT_CELL_DISPLAY_CONFIG = {
			cell: {
				limitUp: ["consecutive_desc", "auction_unmatched"],
				limitDown: ["consecutive_desc"],
				failedLimit: ["consecutive_desc"],
				normal: ["pct_chg", "ma5_bias"]
			},
			tag: {
				limitUp: [
					"has_convertible",
					"regulatory_status",
					"is_auction_up_limit"
				],
				limitDown: ["has_convertible", "regulatory_status"],
				failedLimit: ["has_convertible", "regulatory_status"],
				normal: ["has_convertible", "regulatory_status"]
			},
			curve: {
				limitUp: ["minute_curve"],
				limitDown: ["minute_curve"],
				failedLimit: ["minute_curve"],
				normal: []
			}
		};
		const LIGHTWEIGHT_SNAPSHOT_CELL_DISPLAY_CONFIG = {
			cell: {
				limitUp: ["consecutive_desc", "pct_chg"],
				limitDown: ["pct_chg"],
				failedLimit: ["pct_chg"],
				normal: ["pct_chg", "ma5_bias"]
			},
			tag: {
				limitUp: ["has_convertible", "regulatory_status"],
				limitDown: ["has_convertible", "regulatory_status"],
				failedLimit: ["has_convertible", "regulatory_status"],
				normal: ["has_convertible", "regulatory_status"]
			},
			curve: {
				limitUp: ["minute_curve"],
				limitDown: ["minute_curve"],
				failedLimit: ["minute_curve"],
				normal: []
			}
		};
		const LADDER_SNAPSHOT_PROFILE = {
			name: "ladder",
			cellDisplayConfig: LADDER_SNAPSHOT_CELL_DISPLAY_CONFIG,
			showMinuteCurve: true
		};
		const LIGHTWEIGHT_SNAPSHOT_PROFILE = {
			name: "lightweight",
			cellDisplayConfig: LIGHTWEIGHT_SNAPSHOT_CELL_DISPLAY_CONFIG,
			showMinuteCurve: true,
			stockFilters: DEFAULT_SNAPSHOT_PREVIEW_STOCK_FILTERS
		};
		const PERFORMANCE_SNAPSHOT_PROFILE = {
			name: "performance",
			cellDisplayConfig: LADDER_SNAPSHOT_CELL_DISPLAY_CONFIG,
			showMinuteCurve: LADDER_SNAPSHOT_PROFILE.showMinuteCurve
		};
		const ALLOWED_FIELDS = {
			cell: new Set(SNAPSHOT_SETTINGS_DISPLAY_DEFINITIONS.filter((definition) => supportsPersistedDisplayType(definition, "cell")).map((definition) => definition.id)),
			tag: new Set(SNAPSHOT_SETTINGS_DISPLAY_DEFINITIONS.filter((definition) => supportsPersistedDisplayType(definition, "tag")).map((definition) => definition.id)),
			curve: new Set(SNAPSHOT_SETTINGS_DISPLAY_DEFINITIONS.filter((definition) => supportsPersistedDisplayType(definition, "curve")).map((definition) => definition.id))
		};
		const PROFILE_NAMES = [
			"ladder",
			"lightweight",
			"performance"
		];
		const STATUS_NAMES = [
			"limitUp",
			"limitDown",
			"failedLimit",
			"normal"
		];
		function isRecord$1(value) {
			return value !== null && typeof value === "object" && !Array.isArray(value);
		}
		function cloneSnapshotDisplayConfig(config) {
			return sanitizeSnapshotDisplayConfig({
				cell: {
					limitUp: [...config.cell.limitUp],
					limitDown: [...config.cell.limitDown],
					failedLimit: [...config.cell.failedLimit],
					normal: [...config.cell.normal]
				},
				tag: {
					limitUp: [...config.tag.limitUp],
					limitDown: [...config.tag.limitDown],
					failedLimit: [...config.tag.failedLimit],
					normal: [...config.tag.normal]
				},
				curve: {
					limitUp: [...config.curve.limitUp],
					limitDown: [...config.curve.limitDown],
					failedLimit: [...config.curve.failedLimit],
					normal: [...config.curve.normal]
				}
			});
		}
		function cloneProfile(profile) {
			return {
				name: profile.name,
				cellDisplayConfig: cloneSnapshotDisplayConfig(profile.cellDisplayConfig),
				showMinuteCurve: profile.showMinuteCurve,
				...profile.stockFilters ? { stockFilters: { ...profile.stockFilters } } : {}
			};
		}
		function createDefaultSnapshotPreviewProfiles() {
			return {
				ladder: cloneProfile(LADDER_SNAPSHOT_PROFILE),
				lightweight: cloneProfile(LIGHTWEIGHT_SNAPSHOT_PROFILE),
				performance: cloneProfile(PERFORMANCE_SNAPSHOT_PROFILE)
			};
		}
		function resolveFieldList(value, fallback, category, status) {
			if (!Array.isArray(value)) return [...fallback];
			const fields = [...new Set(value.filter((field) => typeof field === "string" && ALLOWED_FIELDS[category].has(field)))];
			return category === "curve" && status === "normal" ? fields.filter((field) => field !== "minute_curve") : fields;
		}
		function resolveDisplayConfig(value, fallback) {
			if (!isRecord$1(value)) return cloneSnapshotDisplayConfig(fallback);
			const result = cloneSnapshotDisplayConfig(fallback);
			for (const category of [
				"cell",
				"tag",
				"curve"
			]) {
				const categoryValue = value[category];
				if (!isRecord$1(categoryValue)) continue;
				for (const status of STATUS_NAMES) result[category][status] = resolveFieldList(categoryValue[status], fallback[category][status], category, status);
			}
			return sanitizeSnapshotDisplayConfig(result);
		}
		function resolveStockFilters(value, fallback) {
			if (!isRecord$1(value)) return { ...fallback };
			const limitEvents = value.limit_events ?? value.limitEvents;
			const convertible = value.convertible;
			return {
				limitEvents: typeof limitEvents === "boolean" ? limitEvents : fallback.limitEvents,
				convertible: typeof convertible === "boolean" ? convertible : fallback.convertible
			};
		}
		function resolveProfile(name, value, fallback) {
			if (!isRecord$1(value)) return cloneProfile(fallback);
			const displayConfig = value.cell_display_config ?? value.cellDisplayConfig;
			const minuteCurve = value.show_minute_curve ?? value.showMinuteCurve;
			const stockFilters = value.stock_filters ?? value.stockFilters;
			return {
				name,
				cellDisplayConfig: resolveDisplayConfig(displayConfig, fallback.cellDisplayConfig),
				showMinuteCurve: typeof minuteCurve === "boolean" ? minuteCurve : fallback.showMinuteCurve,
				...name === "lightweight" ? { stockFilters: resolveStockFilters(stockFilters, fallback.stockFilters ?? DEFAULT_SNAPSHOT_PREVIEW_STOCK_FILTERS) } : {}
			};
		}
		function resolveSnapshotPreviewProfiles(settings, legacyLightweightProfile) {
			const defaults = createDefaultSnapshotPreviewProfiles();
			const settingsRecord = isRecord$1(settings) ? settings : {};
			const storedProfiles = settingsRecord.schema_version === 1 && isRecord$1(settingsRecord.profiles) ? settingsRecord.profiles : {};
			const profiles = { ...defaults };
			for (const name of PROFILE_NAMES) profiles[name] = resolveProfile(name, storedProfiles[name], defaults[name]);
			if (!storedProfiles.lightweight && legacyLightweightProfile) profiles.lightweight = resolveProfile("lightweight", legacyLightweightProfile, defaults.lightweight);
			return profiles;
		}
		function serializeSnapshotPreviewProfile(profile) {
			return {
				cell_display_config: cloneSnapshotDisplayConfig(profile.cellDisplayConfig),
				show_minute_curve: profile.showMinuteCurve,
				...profile.stockFilters ? { stock_filters: {
					limit_events: profile.stockFilters.limitEvents,
					convertible: profile.stockFilters.convertible
				} } : {}
			};
		}
		function hasSnapshotPreviewProfileChanged(openedValue, profile) {
			return openedValue !== JSON.stringify(profile);
		}
		function sanitizeSnapshotDisplayConfig(cellDisplayConfig) {
			return {
				cell: {
					limitUp: [...cellDisplayConfig.cell.limitUp],
					limitDown: [...cellDisplayConfig.cell.limitDown],
					failedLimit: [...cellDisplayConfig.cell.failedLimit],
					normal: [...cellDisplayConfig.cell.normal]
				},
				tag: {
					limitUp: [...cellDisplayConfig.tag.limitUp],
					limitDown: [...cellDisplayConfig.tag.limitDown],
					failedLimit: [...cellDisplayConfig.tag.failedLimit],
					normal: [...cellDisplayConfig.tag.normal]
				},
				curve: {
					limitUp: [...cellDisplayConfig.curve.limitUp],
					limitDown: [...cellDisplayConfig.curve.limitDown],
					failedLimit: [...cellDisplayConfig.curve.failedLimit],
					normal: cellDisplayConfig.curve.normal.filter((field) => field !== "minute_curve")
				}
			};
		}
		function sanitizeSnapshotConfigUpdate(category, status, fields) {
			if (category === "curve" && status === "normal") return fields.filter((field) => field !== "minute_curve");
			return [...fields];
		}
		//#endregion
		//#region node_modules/@tanstack/query-core/build/modern/subscribable.js
		var Subscribable = class {
			constructor() {
				this.listeners = /* @__PURE__ */ new Set();
				this.subscribe = this.subscribe.bind(this);
			}
			subscribe(listener) {
				this.listeners.add(listener);
				this.onSubscribe();
				return () => {
					this.listeners.delete(listener);
					this.onUnsubscribe();
				};
			}
			hasListeners() {
				return this.listeners.size > 0;
			}
			onSubscribe() {}
			onUnsubscribe() {}
		};
		//#endregion
		//#region node_modules/@tanstack/query-core/build/modern/timeoutManager.js
		var defaultTimeoutProvider = {
			setTimeout: (callback, delay) => setTimeout(callback, delay),
			clearTimeout: (timeoutId) => clearTimeout(timeoutId),
			setInterval: (callback, delay) => setInterval(callback, delay),
			clearInterval: (intervalId) => clearInterval(intervalId)
		};
		var TimeoutManager = class {
			#provider = defaultTimeoutProvider;
			#providerCalled = false;
			setTimeoutProvider(provider) {
				this.#provider = provider;
			}
			setTimeout(callback, delay) {
				return this.#provider.setTimeout(callback, delay);
			}
			clearTimeout(timeoutId) {
				this.#provider.clearTimeout(timeoutId);
			}
			setInterval(callback, delay) {
				return this.#provider.setInterval(callback, delay);
			}
			clearInterval(intervalId) {
				this.#provider.clearInterval(intervalId);
			}
		};
		var timeoutManager = new TimeoutManager();
		function systemSetTimeoutZero(callback) {
			setTimeout(callback, 0);
		}
		//#endregion
		//#region node_modules/@tanstack/query-core/build/modern/utils.js
		var isServer = typeof window === "undefined" || "Deno" in globalThis;
		function noop() {}
		function functionalUpdate(updater, input) {
			return typeof updater === "function" ? updater(input) : updater;
		}
		function isValidTimeout(value) {
			return typeof value === "number" && value >= 0 && value !== Infinity;
		}
		function timeUntilStale(updatedAt, staleTime) {
			return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
		}
		function resolveStaleTime(staleTime, query) {
			return typeof staleTime === "function" ? staleTime(query) : staleTime;
		}
		function resolveEnabled(enabled, query) {
			return typeof enabled === "function" ? enabled(query) : enabled;
		}
		function matchQuery(filters, query) {
			const { type = "all", exact, fetchStatus, predicate, queryKey, stale } = filters;
			if (queryKey) {
				if (exact) {
					if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) return false;
				} else if (!partialMatchKey(query.queryKey, queryKey)) return false;
			}
			if (type !== "all") {
				const isActive = query.isActive();
				if (type === "active" && !isActive) return false;
				if (type === "inactive" && isActive) return false;
			}
			if (typeof stale === "boolean" && query.isStale() !== stale) return false;
			if (fetchStatus && fetchStatus !== query.state.fetchStatus) return false;
			if (predicate && !predicate(query)) return false;
			return true;
		}
		function matchMutation(filters, mutation) {
			const { exact, status, predicate, mutationKey } = filters;
			if (mutationKey) {
				if (!mutation.options.mutationKey) return false;
				if (exact) {
					if (hashKey(mutation.options.mutationKey) !== hashKey(mutationKey)) return false;
				} else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) return false;
			}
			if (status && mutation.state.status !== status) return false;
			if (predicate && !predicate(mutation)) return false;
			return true;
		}
		function hashQueryKeyByOptions(queryKey, options) {
			return (options?.queryKeyHashFn || hashKey)(queryKey);
		}
		function hashKey(queryKey) {
			return JSON.stringify(queryKey, (_, val) => isPlainObject(val) ? Object.keys(val).sort().reduce((result, key) => {
				result[key] = val[key];
				return result;
			}, {}) : val);
		}
		function partialMatchKey(a, b) {
			if (a === b) return true;
			if (typeof a !== typeof b) return false;
			if (a && b && typeof a === "object" && typeof b === "object") return Object.keys(b).every((key) => partialMatchKey(a[key], b[key]));
			return false;
		}
		var hasOwn = Object.prototype.hasOwnProperty;
		function replaceEqualDeep(a, b, depth = 0) {
			if (a === b) return a;
			if (depth > 500) return b;
			const array = isPlainArray(a) && isPlainArray(b);
			if (!array && !(isPlainObject(a) && isPlainObject(b))) return b;
			const aSize = (array ? a : Object.keys(a)).length;
			const bItems = array ? b : Object.keys(b);
			const bSize = bItems.length;
			const copy = array ? new Array(bSize) : {};
			let equalItems = 0;
			for (let i = 0; i < bSize; i++) {
				const key = array ? i : bItems[i];
				const aItem = a[key];
				const bItem = b[key];
				if (aItem === bItem) {
					copy[key] = aItem;
					if (array ? i < aSize : hasOwn.call(a, key)) equalItems++;
					continue;
				}
				if (aItem === null || bItem === null || typeof aItem !== "object" || typeof bItem !== "object") {
					copy[key] = bItem;
					continue;
				}
				const v = replaceEqualDeep(aItem, bItem, depth + 1);
				copy[key] = v;
				if (v === aItem) equalItems++;
			}
			return aSize === bSize && equalItems === aSize ? a : copy;
		}
		function shallowEqualObjects(a, b) {
			if (!b || Object.keys(a).length !== Object.keys(b).length) return false;
			for (const key in a) if (a[key] !== b[key]) return false;
			return true;
		}
		function isPlainArray(value) {
			return Array.isArray(value) && value.length === Object.keys(value).length;
		}
		function isPlainObject(o) {
			if (!hasObjectPrototype(o)) return false;
			const ctor = o.constructor;
			if (ctor === void 0) return true;
			const prot = ctor.prototype;
			if (!hasObjectPrototype(prot)) return false;
			if (!prot.hasOwnProperty("isPrototypeOf")) return false;
			if (Object.getPrototypeOf(o) !== Object.prototype) return false;
			return true;
		}
		function hasObjectPrototype(o) {
			return Object.prototype.toString.call(o) === "[object Object]";
		}
		function sleep(timeout) {
			return new Promise((resolve) => {
				timeoutManager.setTimeout(resolve, timeout);
			});
		}
		function replaceData(prevData, data, options) {
			if (typeof options.structuralSharing === "function") return options.structuralSharing(prevData, data);
			else if (options.structuralSharing !== false) return replaceEqualDeep(prevData, data);
			return data;
		}
		function addToEnd(items, item, max = 0) {
			const newItems = [...items, item];
			return max && newItems.length > max ? newItems.slice(1) : newItems;
		}
		function addToStart(items, item, max = 0) {
			const newItems = [item, ...items];
			return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
		}
		var skipToken = /* @__PURE__ */ Symbol();
		function ensureQueryFn(options, fetchOptions) {
			if (!options.queryFn && fetchOptions?.initialPromise) return () => fetchOptions.initialPromise;
			if (!options.queryFn || options.queryFn === skipToken) return () => Promise.reject(/* @__PURE__ */ new Error(`Missing queryFn: '${options.queryHash}'`));
			return options.queryFn;
		}
		function shouldThrowError(throwOnError, params) {
			if (typeof throwOnError === "function") return throwOnError(...params);
			return !!throwOnError;
		}
		function addConsumeAwareSignal(object, getSignal, onCancelled) {
			let consumed = false;
			let signal;
			Object.defineProperty(object, "signal", {
				enumerable: true,
				get: () => {
					signal ??= getSignal();
					if (consumed) return signal;
					consumed = true;
					if (signal.aborted) onCancelled();
					else signal.addEventListener("abort", onCancelled, { once: true });
					return signal;
				}
			});
			return object;
		}
		//#endregion
		//#region node_modules/@tanstack/query-core/build/modern/focusManager.js
		var FocusManager = class extends Subscribable {
			#focused;
			#cleanup;
			#setup;
			constructor() {
				super();
				this.#setup = (onFocus) => {
					if (!isServer && window.addEventListener) {
						const listener = () => onFocus();
						window.addEventListener("visibilitychange", listener, false);
						return () => {
							window.removeEventListener("visibilitychange", listener);
						};
					}
				};
			}
			onSubscribe() {
				if (!this.#cleanup) this.setEventListener(this.#setup);
			}
			onUnsubscribe() {
				if (!this.hasListeners()) {
					this.#cleanup?.();
					this.#cleanup = void 0;
				}
			}
			setEventListener(setup) {
				this.#setup = setup;
				this.#cleanup?.();
				this.#cleanup = setup((focused) => {
					if (typeof focused === "boolean") this.setFocused(focused);
					else this.onFocus();
				});
			}
			setFocused(focused) {
				if (this.#focused !== focused) {
					this.#focused = focused;
					this.onFocus();
				}
			}
			onFocus() {
				const isFocused = this.isFocused();
				this.listeners.forEach((listener) => {
					listener(isFocused);
				});
			}
			isFocused() {
				if (typeof this.#focused === "boolean") return this.#focused;
				return globalThis.document?.visibilityState !== "hidden";
			}
		};
		var focusManager = new FocusManager();
		//#endregion
		//#region node_modules/@tanstack/query-core/build/modern/thenable.js
		function pendingThenable() {
			let resolve;
			let reject;
			const thenable = new Promise((_resolve, _reject) => {
				resolve = _resolve;
				reject = _reject;
			});
			thenable.status = "pending";
			thenable.catch(() => {});
			function finalize(data) {
				Object.assign(thenable, data);
				delete thenable.resolve;
				delete thenable.reject;
			}
			thenable.resolve = (value) => {
				finalize({
					status: "fulfilled",
					value
				});
				resolve(value);
			};
			thenable.reject = (reason) => {
				finalize({
					status: "rejected",
					reason
				});
				reject(reason);
			};
			return thenable;
		}
		//#endregion
		//#region node_modules/@tanstack/query-core/build/modern/notifyManager.js
		var defaultScheduler = systemSetTimeoutZero;
		function createNotifyManager() {
			let queue = [];
			let transactions = 0;
			let notifyFn = (callback) => {
				callback();
			};
			let batchNotifyFn = (callback) => {
				callback();
			};
			let scheduleFn = defaultScheduler;
			const schedule = (callback) => {
				if (transactions) queue.push(callback);
				else scheduleFn(() => {
					notifyFn(callback);
				});
			};
			const flush = () => {
				const originalQueue = queue;
				queue = [];
				if (originalQueue.length) scheduleFn(() => {
					batchNotifyFn(() => {
						originalQueue.forEach((callback) => {
							notifyFn(callback);
						});
					});
				});
			};
			return {
				batch: (callback) => {
					let result;
					transactions++;
					try {
						result = callback();
					} finally {
						transactions--;
						if (!transactions) flush();
					}
					return result;
				},
				/**
				* All calls to the wrapped function will be batched.
				*/
				batchCalls: (callback) => {
					return (...args) => {
						schedule(() => {
							callback(...args);
						});
					};
				},
				schedule,
				/**
				* Use this method to set a custom notify function.
				* This can be used to for example wrap notifications with `React.act` while running tests.
				*/
				setNotifyFunction: (fn) => {
					notifyFn = fn;
				},
				/**
				* Use this method to set a custom function to batch notifications together into a single tick.
				* By default React Query will use the batch function provided by ReactDOM or React Native.
				*/
				setBatchNotifyFunction: (fn) => {
					batchNotifyFn = fn;
				},
				setScheduler: (fn) => {
					scheduleFn = fn;
				}
			};
		}
		var notifyManager = createNotifyManager();
		//#endregion
		//#region node_modules/@tanstack/query-core/build/modern/onlineManager.js
		var OnlineManager = class extends Subscribable {
			#online = true;
			#cleanup;
			#setup;
			constructor() {
				super();
				this.#setup = (onOnline) => {
					if (!isServer && window.addEventListener) {
						const onlineListener = () => onOnline(true);
						const offlineListener = () => onOnline(false);
						window.addEventListener("online", onlineListener, false);
						window.addEventListener("offline", offlineListener, false);
						return () => {
							window.removeEventListener("online", onlineListener);
							window.removeEventListener("offline", offlineListener);
						};
					}
				};
			}
			onSubscribe() {
				if (!this.#cleanup) this.setEventListener(this.#setup);
			}
			onUnsubscribe() {
				if (!this.hasListeners()) {
					this.#cleanup?.();
					this.#cleanup = void 0;
				}
			}
			setEventListener(setup) {
				this.#setup = setup;
				this.#cleanup?.();
				this.#cleanup = setup(this.setOnline.bind(this));
			}
			setOnline(online) {
				if (this.#online !== online) {
					this.#online = online;
					this.listeners.forEach((listener) => {
						listener(online);
					});
				}
			}
			isOnline() {
				return this.#online;
			}
		};
		var onlineManager = new OnlineManager();
		//#endregion
		//#region node_modules/@tanstack/query-core/build/modern/retryer.js
		function defaultRetryDelay(failureCount) {
			return Math.min(1e3 * 2 ** failureCount, 3e4);
		}
		function canFetch(networkMode) {
			return (networkMode ?? "online") === "online" ? onlineManager.isOnline() : true;
		}
		var CancelledError = class extends Error {
			constructor(options) {
				super("CancelledError");
				this.revert = options?.revert;
				this.silent = options?.silent;
			}
		};
		function createRetryer(config) {
			let isRetryCancelled = false;
			let failureCount = 0;
			let continueFn;
			const thenable = pendingThenable();
			const isResolved = () => thenable.status !== "pending";
			const cancel = (cancelOptions) => {
				if (!isResolved()) {
					const error = new CancelledError(cancelOptions);
					reject(error);
					config.onCancel?.(error);
				}
			};
			const cancelRetry = () => {
				isRetryCancelled = true;
			};
			const continueRetry = () => {
				isRetryCancelled = false;
			};
			const canContinue = () => focusManager.isFocused() && (config.networkMode === "always" || onlineManager.isOnline()) && config.canRun();
			const canStart = () => canFetch(config.networkMode) && config.canRun();
			const resolve = (value) => {
				if (!isResolved()) {
					continueFn?.();
					thenable.resolve(value);
				}
			};
			const reject = (value) => {
				if (!isResolved()) {
					continueFn?.();
					thenable.reject(value);
				}
			};
			const pause = () => {
				return new Promise((continueResolve) => {
					continueFn = (value) => {
						if (isResolved() || canContinue()) continueResolve(value);
					};
					config.onPause?.();
				}).then(() => {
					continueFn = void 0;
					if (!isResolved()) config.onContinue?.();
				});
			};
			const run = () => {
				if (isResolved()) return;
				let promiseOrValue;
				const initialPromise = failureCount === 0 ? config.initialPromise : void 0;
				try {
					promiseOrValue = initialPromise ?? config.fn();
				} catch (error) {
					promiseOrValue = Promise.reject(error);
				}
				Promise.resolve(promiseOrValue).then(resolve).catch((error) => {
					if (isResolved()) return;
					const retry = config.retry ?? (isServer ? 0 : 3);
					const retryDelay = config.retryDelay ?? defaultRetryDelay;
					const delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
					const shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
					if (isRetryCancelled || !shouldRetry) {
						reject(error);
						return;
					}
					failureCount++;
					config.onFail?.(failureCount, error);
					sleep(delay).then(() => {
						return canContinue() ? void 0 : pause();
					}).then(() => {
						if (isRetryCancelled) reject(error);
						else run();
					});
				});
			};
			return {
				promise: thenable,
				status: () => thenable.status,
				cancel,
				continue: () => {
					continueFn?.();
					return thenable;
				},
				cancelRetry,
				continueRetry,
				canStart,
				start: () => {
					if (canStart()) run();
					else pause().then(run);
					return thenable;
				}
			};
		}
		//#endregion
		//#region node_modules/@tanstack/query-core/build/modern/removable.js
		var Removable = class {
			#gcTimeout;
			destroy() {
				this.clearGcTimeout();
			}
			scheduleGc() {
				this.clearGcTimeout();
				if (isValidTimeout(this.gcTime)) this.#gcTimeout = timeoutManager.setTimeout(() => {
					this.optionalRemove();
				}, this.gcTime);
			}
			updateGcTime(newGcTime) {
				this.gcTime = Math.max(this.gcTime || 0, newGcTime ?? (isServer ? Infinity : 300 * 1e3));
			}
			clearGcTimeout() {
				if (this.#gcTimeout) {
					timeoutManager.clearTimeout(this.#gcTimeout);
					this.#gcTimeout = void 0;
				}
			}
		};
		//#endregion
		//#region node_modules/@tanstack/query-core/build/modern/query.js
		var Query = class extends Removable {
			#initialState;
			#revertState;
			#cache;
			#client;
			#retryer;
			#defaultOptions;
			#abortSignalConsumed;
			constructor(config) {
				super();
				this.#abortSignalConsumed = false;
				this.#defaultOptions = config.defaultOptions;
				this.setOptions(config.options);
				this.observers = [];
				this.#client = config.client;
				this.#cache = this.#client.getQueryCache();
				this.queryKey = config.queryKey;
				this.queryHash = config.queryHash;
				this.#initialState = getDefaultState$1(this.options);
				this.state = config.state ?? this.#initialState;
				this.scheduleGc();
			}
			get meta() {
				return this.options.meta;
			}
			get promise() {
				return this.#retryer?.promise;
			}
			setOptions(options) {
				this.options = {
					...this.#defaultOptions,
					...options
				};
				this.updateGcTime(this.options.gcTime);
				if (this.state && this.state.data === void 0) {
					const defaultState = getDefaultState$1(this.options);
					if (defaultState.data !== void 0) {
						this.setState(successState(defaultState.data, defaultState.dataUpdatedAt));
						this.#initialState = defaultState;
					}
				}
			}
			optionalRemove() {
				if (!this.observers.length && this.state.fetchStatus === "idle") this.#cache.remove(this);
			}
			setData(newData, options) {
				const data = replaceData(this.state.data, newData, this.options);
				this.#dispatch({
					data,
					type: "success",
					dataUpdatedAt: options?.updatedAt,
					manual: options?.manual
				});
				return data;
			}
			setState(state, setStateOptions) {
				this.#dispatch({
					type: "setState",
					state,
					setStateOptions
				});
			}
			cancel(options) {
				const promise = this.#retryer?.promise;
				this.#retryer?.cancel(options);
				return promise ? promise.then(noop).catch(noop) : Promise.resolve();
			}
			destroy() {
				super.destroy();
				this.cancel({ silent: true });
			}
			reset() {
				this.destroy();
				this.setState(this.#initialState);
			}
			isActive() {
				return this.observers.some((observer) => resolveEnabled(observer.options.enabled, this) !== false);
			}
			isDisabled() {
				if (this.getObserversCount() > 0) return !this.isActive();
				return this.options.queryFn === skipToken || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
			}
			isStatic() {
				if (this.getObserversCount() > 0) return this.observers.some((observer) => resolveStaleTime(observer.options.staleTime, this) === "static");
				return false;
			}
			isStale() {
				if (this.getObserversCount() > 0) return this.observers.some((observer) => observer.getCurrentResult().isStale);
				return this.state.data === void 0 || this.state.isInvalidated;
			}
			isStaleByTime(staleTime = 0) {
				if (this.state.data === void 0) return true;
				if (staleTime === "static") return false;
				if (this.state.isInvalidated) return true;
				return !timeUntilStale(this.state.dataUpdatedAt, staleTime);
			}
			onFocus() {
				this.observers.find((x) => x.shouldFetchOnWindowFocus())?.refetch({ cancelRefetch: false });
				this.#retryer?.continue();
			}
			onOnline() {
				this.observers.find((x) => x.shouldFetchOnReconnect())?.refetch({ cancelRefetch: false });
				this.#retryer?.continue();
			}
			addObserver(observer) {
				if (!this.observers.includes(observer)) {
					this.observers.push(observer);
					this.clearGcTimeout();
					this.#cache.notify({
						type: "observerAdded",
						query: this,
						observer
					});
				}
			}
			removeObserver(observer) {
				if (this.observers.includes(observer)) {
					this.observers = this.observers.filter((x) => x !== observer);
					if (!this.observers.length) {
						if (this.#retryer) if (this.#abortSignalConsumed) this.#retryer.cancel({ revert: true });
						else this.#retryer.cancelRetry();
						this.scheduleGc();
					}
					this.#cache.notify({
						type: "observerRemoved",
						query: this,
						observer
					});
				}
			}
			getObserversCount() {
				return this.observers.length;
			}
			invalidate() {
				if (!this.state.isInvalidated) this.#dispatch({ type: "invalidate" });
			}
			async fetch(options, fetchOptions) {
				if (this.state.fetchStatus !== "idle" && this.#retryer?.status() !== "rejected") {
					if (this.state.data !== void 0 && fetchOptions?.cancelRefetch) this.cancel({ silent: true });
					else if (this.#retryer) {
						this.#retryer.continueRetry();
						return this.#retryer.promise;
					}
				}
				if (options) this.setOptions(options);
				if (!this.options.queryFn) {
					const observer = this.observers.find((x) => x.options.queryFn);
					if (observer) this.setOptions(observer.options);
				}
				const abortController = new AbortController();
				const addSignalProperty = (object) => {
					Object.defineProperty(object, "signal", {
						enumerable: true,
						get: () => {
							this.#abortSignalConsumed = true;
							return abortController.signal;
						}
					});
				};
				const fetchFn = () => {
					const queryFn = ensureQueryFn(this.options, fetchOptions);
					const createQueryFnContext = () => {
						const queryFnContext2 = {
							client: this.#client,
							queryKey: this.queryKey,
							meta: this.meta
						};
						addSignalProperty(queryFnContext2);
						return queryFnContext2;
					};
					const queryFnContext = createQueryFnContext();
					this.#abortSignalConsumed = false;
					if (this.options.persister) return this.options.persister(queryFn, queryFnContext, this);
					return queryFn(queryFnContext);
				};
				const createFetchContext = () => {
					const context2 = {
						fetchOptions,
						options: this.options,
						queryKey: this.queryKey,
						client: this.#client,
						state: this.state,
						fetchFn
					};
					addSignalProperty(context2);
					return context2;
				};
				const context = createFetchContext();
				this.options.behavior?.onFetch(context, this);
				this.#revertState = this.state;
				if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== context.fetchOptions?.meta) this.#dispatch({
					type: "fetch",
					meta: context.fetchOptions?.meta
				});
				this.#retryer = createRetryer({
					initialPromise: fetchOptions?.initialPromise,
					fn: context.fetchFn,
					onCancel: (error) => {
						if (error instanceof CancelledError && error.revert) this.setState({
							...this.#revertState,
							fetchStatus: "idle"
						});
						abortController.abort();
					},
					onFail: (failureCount, error) => {
						this.#dispatch({
							type: "failed",
							failureCount,
							error
						});
					},
					onPause: () => {
						this.#dispatch({ type: "pause" });
					},
					onContinue: () => {
						this.#dispatch({ type: "continue" });
					},
					retry: context.options.retry,
					retryDelay: context.options.retryDelay,
					networkMode: context.options.networkMode,
					canRun: () => true
				});
				try {
					const data = await this.#retryer.start();
					if (data === void 0) throw new Error(`${this.queryHash} data is undefined`);
					this.setData(data);
					this.#cache.config.onSuccess?.(data, this);
					this.#cache.config.onSettled?.(data, this.state.error, this);
					return data;
				} catch (error) {
					if (error instanceof CancelledError) {
						if (error.silent) return this.#retryer.promise;
						else if (error.revert) {
							if (this.state.data === void 0) throw error;
							return this.state.data;
						}
					}
					this.#dispatch({
						type: "error",
						error
					});
					this.#cache.config.onError?.(error, this);
					this.#cache.config.onSettled?.(this.state.data, error, this);
					throw error;
				} finally {
					this.scheduleGc();
				}
			}
			#dispatch(action) {
				const reducer = (state) => {
					switch (action.type) {
						case "failed": return {
							...state,
							fetchFailureCount: action.failureCount,
							fetchFailureReason: action.error
						};
						case "pause": return {
							...state,
							fetchStatus: "paused"
						};
						case "continue": return {
							...state,
							fetchStatus: "fetching"
						};
						case "fetch": return {
							...state,
							...fetchState(state.data, this.options),
							fetchMeta: action.meta ?? null
						};
						case "success":
							const newState = {
								...state,
								...successState(action.data, action.dataUpdatedAt),
								dataUpdateCount: state.dataUpdateCount + 1,
								...!action.manual && {
									fetchStatus: "idle",
									fetchFailureCount: 0,
									fetchFailureReason: null
								}
							};
							this.#revertState = action.manual ? newState : void 0;
							return newState;
						case "error":
							const error = action.error;
							return {
								...state,
								error,
								errorUpdateCount: state.errorUpdateCount + 1,
								errorUpdatedAt: Date.now(),
								fetchFailureCount: state.fetchFailureCount + 1,
								fetchFailureReason: error,
								fetchStatus: "idle",
								status: "error",
								isInvalidated: true
							};
						case "invalidate": return {
							...state,
							isInvalidated: true
						};
						case "setState": return {
							...state,
							...action.state
						};
					}
				};
				this.state = reducer(this.state);
				notifyManager.batch(() => {
					this.observers.forEach((observer) => {
						observer.onQueryUpdate();
					});
					this.#cache.notify({
						query: this,
						type: "updated",
						action
					});
				});
			}
		};
		function fetchState(data, options) {
			return {
				fetchFailureCount: 0,
				fetchFailureReason: null,
				fetchStatus: canFetch(options.networkMode) ? "fetching" : "paused",
				...data === void 0 && {
					error: null,
					status: "pending"
				}
			};
		}
		function successState(data, dataUpdatedAt) {
			return {
				data,
				dataUpdatedAt: dataUpdatedAt ?? Date.now(),
				error: null,
				isInvalidated: false,
				status: "success"
			};
		}
		function getDefaultState$1(options) {
			const data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
			const hasData = data !== void 0;
			const initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
			return {
				data,
				dataUpdateCount: 0,
				dataUpdatedAt: hasData ? initialDataUpdatedAt ?? Date.now() : 0,
				error: null,
				errorUpdateCount: 0,
				errorUpdatedAt: 0,
				fetchFailureCount: 0,
				fetchFailureReason: null,
				fetchMeta: null,
				isInvalidated: false,
				status: hasData ? "success" : "pending",
				fetchStatus: "idle"
			};
		}
		//#endregion
		//#region node_modules/@tanstack/query-core/build/modern/queryObserver.js
		var QueryObserver = class extends Subscribable {
			constructor(client, options) {
				super();
				this.options = options;
				this.#client = client;
				this.#selectError = null;
				this.#currentThenable = pendingThenable();
				this.bindMethods();
				this.setOptions(options);
			}
			#client;
			#currentQuery = void 0;
			#currentQueryInitialState = void 0;
			#currentResult = void 0;
			#currentResultState;
			#currentResultOptions;
			#currentThenable;
			#selectError;
			#selectFn;
			#selectResult;
			#lastQueryWithDefinedData;
			#staleTimeoutId;
			#refetchIntervalId;
			#currentRefetchInterval;
			#trackedProps = /* @__PURE__ */ new Set();
			bindMethods() {
				this.refetch = this.refetch.bind(this);
			}
			onSubscribe() {
				if (this.listeners.size === 1) {
					this.#currentQuery.addObserver(this);
					if (shouldFetchOnMount(this.#currentQuery, this.options)) this.#executeFetch();
					else this.updateResult();
					this.#updateTimers();
				}
			}
			onUnsubscribe() {
				if (!this.hasListeners()) this.destroy();
			}
			shouldFetchOnReconnect() {
				return shouldFetchOn(this.#currentQuery, this.options, this.options.refetchOnReconnect);
			}
			shouldFetchOnWindowFocus() {
				return shouldFetchOn(this.#currentQuery, this.options, this.options.refetchOnWindowFocus);
			}
			destroy() {
				this.listeners = /* @__PURE__ */ new Set();
				this.#clearStaleTimeout();
				this.#clearRefetchInterval();
				this.#currentQuery.removeObserver(this);
			}
			setOptions(options) {
				const prevOptions = this.options;
				const prevQuery = this.#currentQuery;
				this.options = this.#client.defaultQueryOptions(options);
				if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof resolveEnabled(this.options.enabled, this.#currentQuery) !== "boolean") throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
				this.#updateQuery();
				this.#currentQuery.setOptions(this.options);
				if (prevOptions._defaulted && !shallowEqualObjects(this.options, prevOptions)) this.#client.getQueryCache().notify({
					type: "observerOptionsUpdated",
					query: this.#currentQuery,
					observer: this
				});
				const mounted = this.hasListeners();
				if (mounted && shouldFetchOptionally(this.#currentQuery, prevQuery, this.options, prevOptions)) this.#executeFetch();
				this.updateResult();
				if (mounted && (this.#currentQuery !== prevQuery || resolveEnabled(this.options.enabled, this.#currentQuery) !== resolveEnabled(prevOptions.enabled, this.#currentQuery) || resolveStaleTime(this.options.staleTime, this.#currentQuery) !== resolveStaleTime(prevOptions.staleTime, this.#currentQuery))) this.#updateStaleTimeout();
				const nextRefetchInterval = this.#computeRefetchInterval();
				if (mounted && (this.#currentQuery !== prevQuery || resolveEnabled(this.options.enabled, this.#currentQuery) !== resolveEnabled(prevOptions.enabled, this.#currentQuery) || nextRefetchInterval !== this.#currentRefetchInterval)) this.#updateRefetchInterval(nextRefetchInterval);
			}
			getOptimisticResult(options) {
				const query = this.#client.getQueryCache().build(this.#client, options);
				const result = this.createResult(query, options);
				if (shouldAssignObserverCurrentProperties(this, result)) {
					this.#currentResult = result;
					this.#currentResultOptions = this.options;
					this.#currentResultState = this.#currentQuery.state;
				}
				return result;
			}
			getCurrentResult() {
				return this.#currentResult;
			}
			trackResult(result, onPropTracked) {
				return new Proxy(result, { get: (target, key) => {
					this.trackProp(key);
					onPropTracked?.(key);
					if (key === "promise") {
						this.trackProp("data");
						if (!this.options.experimental_prefetchInRender && this.#currentThenable.status === "pending") this.#currentThenable.reject(/* @__PURE__ */ new Error("experimental_prefetchInRender feature flag is not enabled"));
					}
					return Reflect.get(target, key);
				} });
			}
			trackProp(key) {
				this.#trackedProps.add(key);
			}
			getCurrentQuery() {
				return this.#currentQuery;
			}
			refetch({ ...options } = {}) {
				return this.fetch({ ...options });
			}
			fetchOptimistic(options) {
				const defaultedOptions = this.#client.defaultQueryOptions(options);
				const query = this.#client.getQueryCache().build(this.#client, defaultedOptions);
				return query.fetch().then(() => this.createResult(query, defaultedOptions));
			}
			fetch(fetchOptions) {
				return this.#executeFetch({
					...fetchOptions,
					cancelRefetch: fetchOptions.cancelRefetch ?? true
				}).then(() => {
					this.updateResult();
					return this.#currentResult;
				});
			}
			#executeFetch(fetchOptions) {
				this.#updateQuery();
				let promise = this.#currentQuery.fetch(this.options, fetchOptions);
				if (!fetchOptions?.throwOnError) promise = promise.catch(noop);
				return promise;
			}
			#updateStaleTimeout() {
				this.#clearStaleTimeout();
				const staleTime = resolveStaleTime(this.options.staleTime, this.#currentQuery);
				if (isServer || this.#currentResult.isStale || !isValidTimeout(staleTime)) return;
				const timeout = timeUntilStale(this.#currentResult.dataUpdatedAt, staleTime) + 1;
				this.#staleTimeoutId = timeoutManager.setTimeout(() => {
					if (!this.#currentResult.isStale) this.updateResult();
				}, timeout);
			}
			#computeRefetchInterval() {
				return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.#currentQuery) : this.options.refetchInterval) ?? false;
			}
			#updateRefetchInterval(nextInterval) {
				this.#clearRefetchInterval();
				this.#currentRefetchInterval = nextInterval;
				if (isServer || resolveEnabled(this.options.enabled, this.#currentQuery) === false || !isValidTimeout(this.#currentRefetchInterval) || this.#currentRefetchInterval === 0) return;
				this.#refetchIntervalId = timeoutManager.setInterval(() => {
					if (this.options.refetchIntervalInBackground || focusManager.isFocused()) this.#executeFetch();
				}, this.#currentRefetchInterval);
			}
			#updateTimers() {
				this.#updateStaleTimeout();
				this.#updateRefetchInterval(this.#computeRefetchInterval());
			}
			#clearStaleTimeout() {
				if (this.#staleTimeoutId) {
					timeoutManager.clearTimeout(this.#staleTimeoutId);
					this.#staleTimeoutId = void 0;
				}
			}
			#clearRefetchInterval() {
				if (this.#refetchIntervalId) {
					timeoutManager.clearInterval(this.#refetchIntervalId);
					this.#refetchIntervalId = void 0;
				}
			}
			createResult(query, options) {
				const prevQuery = this.#currentQuery;
				const prevOptions = this.options;
				const prevResult = this.#currentResult;
				const prevResultState = this.#currentResultState;
				const prevResultOptions = this.#currentResultOptions;
				const queryInitialState = query !== prevQuery ? query.state : this.#currentQueryInitialState;
				const { state } = query;
				let newState = { ...state };
				let isPlaceholderData = false;
				let data;
				if (options._optimisticResults) {
					const mounted = this.hasListeners();
					const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
					const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
					if (fetchOnMount || fetchOptionally) newState = {
						...newState,
						...fetchState(state.data, query.options)
					};
					if (options._optimisticResults === "isRestoring") newState.fetchStatus = "idle";
				}
				let { error, errorUpdatedAt, status } = newState;
				data = newState.data;
				let skipSelect = false;
				if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
					let placeholderData;
					if (prevResult?.isPlaceholderData && options.placeholderData === prevResultOptions?.placeholderData) {
						placeholderData = prevResult.data;
						skipSelect = true;
					} else placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(this.#lastQueryWithDefinedData?.state.data, this.#lastQueryWithDefinedData) : options.placeholderData;
					if (placeholderData !== void 0) {
						status = "success";
						data = replaceData(prevResult?.data, placeholderData, options);
						isPlaceholderData = true;
					}
				}
				if (options.select && data !== void 0 && !skipSelect) if (prevResult && data === prevResultState?.data && options.select === this.#selectFn) data = this.#selectResult;
				else try {
					this.#selectFn = options.select;
					data = options.select(data);
					data = replaceData(prevResult?.data, data, options);
					this.#selectResult = data;
					this.#selectError = null;
				} catch (selectError) {
					this.#selectError = selectError;
				}
				if (this.#selectError) {
					error = this.#selectError;
					data = this.#selectResult;
					errorUpdatedAt = Date.now();
					status = "error";
				}
				const isFetching = newState.fetchStatus === "fetching";
				const isPending = status === "pending";
				const isError = status === "error";
				const isLoading = isPending && isFetching;
				const hasData = data !== void 0;
				const nextResult = {
					status,
					fetchStatus: newState.fetchStatus,
					isPending,
					isSuccess: status === "success",
					isError,
					isInitialLoading: isLoading,
					isLoading,
					data,
					dataUpdatedAt: newState.dataUpdatedAt,
					error,
					errorUpdatedAt,
					failureCount: newState.fetchFailureCount,
					failureReason: newState.fetchFailureReason,
					errorUpdateCount: newState.errorUpdateCount,
					isFetched: newState.dataUpdateCount > 0 || newState.errorUpdateCount > 0,
					isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
					isFetching,
					isRefetching: isFetching && !isPending,
					isLoadingError: isError && !hasData,
					isPaused: newState.fetchStatus === "paused",
					isPlaceholderData,
					isRefetchError: isError && hasData,
					isStale: isStale(query, options),
					refetch: this.refetch,
					promise: this.#currentThenable,
					isEnabled: resolveEnabled(options.enabled, query) !== false
				};
				if (this.options.experimental_prefetchInRender) {
					const hasResultData = nextResult.data !== void 0;
					const isErrorWithoutData = nextResult.status === "error" && !hasResultData;
					const finalizeThenableIfPossible = (thenable) => {
						if (isErrorWithoutData) thenable.reject(nextResult.error);
						else if (hasResultData) thenable.resolve(nextResult.data);
					};
					const recreateThenable = () => {
						const pending = this.#currentThenable = nextResult.promise = pendingThenable();
						finalizeThenableIfPossible(pending);
					};
					const prevThenable = this.#currentThenable;
					switch (prevThenable.status) {
						case "pending":
							if (query.queryHash === prevQuery.queryHash) finalizeThenableIfPossible(prevThenable);
							break;
						case "fulfilled":
							if (isErrorWithoutData || nextResult.data !== prevThenable.value) recreateThenable();
							break;
						case "rejected":
							if (!isErrorWithoutData || nextResult.error !== prevThenable.reason) recreateThenable();
							break;
					}
				}
				return nextResult;
			}
			updateResult() {
				const prevResult = this.#currentResult;
				const nextResult = this.createResult(this.#currentQuery, this.options);
				this.#currentResultState = this.#currentQuery.state;
				this.#currentResultOptions = this.options;
				if (this.#currentResultState.data !== void 0) this.#lastQueryWithDefinedData = this.#currentQuery;
				if (shallowEqualObjects(nextResult, prevResult)) return;
				this.#currentResult = nextResult;
				const shouldNotifyListeners = () => {
					if (!prevResult) return true;
					const { notifyOnChangeProps } = this.options;
					const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
					if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !this.#trackedProps.size) return true;
					const includedProps = new Set(notifyOnChangePropsValue ?? this.#trackedProps);
					if (this.options.throwOnError) includedProps.add("error");
					return Object.keys(this.#currentResult).some((key) => {
						const typedKey = key;
						return this.#currentResult[typedKey] !== prevResult[typedKey] && includedProps.has(typedKey);
					});
				};
				this.#notify({ listeners: shouldNotifyListeners() });
			}
			#updateQuery() {
				const query = this.#client.getQueryCache().build(this.#client, this.options);
				if (query === this.#currentQuery) return;
				const prevQuery = this.#currentQuery;
				this.#currentQuery = query;
				this.#currentQueryInitialState = query.state;
				if (this.hasListeners()) {
					prevQuery?.removeObserver(this);
					query.addObserver(this);
				}
			}
			onQueryUpdate() {
				this.updateResult();
				if (this.hasListeners()) this.#updateTimers();
			}
			#notify(notifyOptions) {
				notifyManager.batch(() => {
					if (notifyOptions.listeners) this.listeners.forEach((listener) => {
						listener(this.#currentResult);
					});
					this.#client.getQueryCache().notify({
						query: this.#currentQuery,
						type: "observerResultsUpdated"
					});
				});
			}
		};
		function shouldLoadOnMount(query, options) {
			return resolveEnabled(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && options.retryOnMount === false);
		}
		function shouldFetchOnMount(query, options) {
			return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
		}
		function shouldFetchOn(query, options, field) {
			if (resolveEnabled(options.enabled, query) !== false && resolveStaleTime(options.staleTime, query) !== "static") {
				const value = typeof field === "function" ? field(query) : field;
				return value === "always" || value !== false && isStale(query, options);
			}
			return false;
		}
		function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
			return (query !== prevQuery || resolveEnabled(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
		}
		function isStale(query, options) {
			return resolveEnabled(options.enabled, query) !== false && query.isStaleByTime(resolveStaleTime(options.staleTime, query));
		}
		function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
			if (!shallowEqualObjects(observer.getCurrentResult(), optimisticResult)) return true;
			return false;
		}
		//#endregion
		//#region node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js
		function infiniteQueryBehavior(pages) {
			return { onFetch: (context, query) => {
				const options = context.options;
				const direction = context.fetchOptions?.meta?.fetchMore?.direction;
				const oldPages = context.state.data?.pages || [];
				const oldPageParams = context.state.data?.pageParams || [];
				let result = {
					pages: [],
					pageParams: []
				};
				let currentPage = 0;
				const fetchFn = async () => {
					let cancelled = false;
					const addSignalProperty = (object) => {
						addConsumeAwareSignal(object, () => context.signal, () => cancelled = true);
					};
					const queryFn = ensureQueryFn(context.options, context.fetchOptions);
					const fetchPage = async (data, param, previous) => {
						if (cancelled) return Promise.reject();
						if (param == null && data.pages.length) return Promise.resolve(data);
						const createQueryFnContext = () => {
							const queryFnContext2 = {
								client: context.client,
								queryKey: context.queryKey,
								pageParam: param,
								direction: previous ? "backward" : "forward",
								meta: context.options.meta
							};
							addSignalProperty(queryFnContext2);
							return queryFnContext2;
						};
						const queryFnContext = createQueryFnContext();
						const page = await queryFn(queryFnContext);
						const { maxPages } = context.options;
						const addTo = previous ? addToStart : addToEnd;
						return {
							pages: addTo(data.pages, page, maxPages),
							pageParams: addTo(data.pageParams, param, maxPages)
						};
					};
					if (direction && oldPages.length) {
						const previous = direction === "backward";
						const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
						const oldData = {
							pages: oldPages,
							pageParams: oldPageParams
						};
						result = await fetchPage(oldData, pageParamFn(options, oldData), previous);
					} else {
						const remainingPages = pages ?? oldPages.length;
						do {
							const param = currentPage === 0 ? oldPageParams[0] ?? options.initialPageParam : getNextPageParam(options, result);
							if (currentPage > 0 && param == null) break;
							result = await fetchPage(result, param);
							currentPage++;
						} while (currentPage < remainingPages);
					}
					return result;
				};
				if (context.options.persister) context.fetchFn = () => {
					return context.options.persister?.(fetchFn, {
						client: context.client,
						queryKey: context.queryKey,
						meta: context.options.meta,
						signal: context.signal
					}, query);
				};
				else context.fetchFn = fetchFn;
			} };
		}
		function getNextPageParam(options, { pages, pageParams }) {
			const lastIndex = pages.length - 1;
			return pages.length > 0 ? options.getNextPageParam(pages[lastIndex], pages, pageParams[lastIndex], pageParams) : void 0;
		}
		function getPreviousPageParam(options, { pages, pageParams }) {
			return pages.length > 0 ? options.getPreviousPageParam?.(pages[0], pages, pageParams[0], pageParams) : void 0;
		}
		function hasNextPage(options, data) {
			if (!data) return false;
			return getNextPageParam(options, data) != null;
		}
		function hasPreviousPage(options, data) {
			if (!data || !options.getPreviousPageParam) return false;
			return getPreviousPageParam(options, data) != null;
		}
		//#endregion
		//#region node_modules/@tanstack/query-core/build/modern/infiniteQueryObserver.js
		var InfiniteQueryObserver = class extends QueryObserver {
			constructor(client, options) {
				super(client, options);
			}
			bindMethods() {
				super.bindMethods();
				this.fetchNextPage = this.fetchNextPage.bind(this);
				this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
			}
			setOptions(options) {
				super.setOptions({
					...options,
					behavior: infiniteQueryBehavior()
				});
			}
			getOptimisticResult(options) {
				options.behavior = infiniteQueryBehavior();
				return super.getOptimisticResult(options);
			}
			fetchNextPage(options) {
				return this.fetch({
					...options,
					meta: { fetchMore: { direction: "forward" } }
				});
			}
			fetchPreviousPage(options) {
				return this.fetch({
					...options,
					meta: { fetchMore: { direction: "backward" } }
				});
			}
			createResult(query, options) {
				const { state } = query;
				const parentResult = super.createResult(query, options);
				const { isFetching, isRefetching, isError, isRefetchError } = parentResult;
				const fetchDirection = state.fetchMeta?.fetchMore?.direction;
				const isFetchNextPageError = isError && fetchDirection === "forward";
				const isFetchingNextPage = isFetching && fetchDirection === "forward";
				const isFetchPreviousPageError = isError && fetchDirection === "backward";
				const isFetchingPreviousPage = isFetching && fetchDirection === "backward";
				return {
					...parentResult,
					fetchNextPage: this.fetchNextPage,
					fetchPreviousPage: this.fetchPreviousPage,
					hasNextPage: hasNextPage(options, state.data),
					hasPreviousPage: hasPreviousPage(options, state.data),
					isFetchNextPageError,
					isFetchingNextPage,
					isFetchPreviousPageError,
					isFetchingPreviousPage,
					isRefetchError: isRefetchError && !isFetchNextPageError && !isFetchPreviousPageError,
					isRefetching: isRefetching && !isFetchingNextPage && !isFetchingPreviousPage
				};
			}
		};
		//#endregion
		//#region node_modules/@tanstack/query-core/build/modern/mutation.js
		var Mutation = class extends Removable {
			#client;
			#observers;
			#mutationCache;
			#retryer;
			constructor(config) {
				super();
				this.#client = config.client;
				this.mutationId = config.mutationId;
				this.#mutationCache = config.mutationCache;
				this.#observers = [];
				this.state = config.state || getDefaultState();
				this.setOptions(config.options);
				this.scheduleGc();
			}
			setOptions(options) {
				this.options = options;
				this.updateGcTime(this.options.gcTime);
			}
			get meta() {
				return this.options.meta;
			}
			addObserver(observer) {
				if (!this.#observers.includes(observer)) {
					this.#observers.push(observer);
					this.clearGcTimeout();
					this.#mutationCache.notify({
						type: "observerAdded",
						mutation: this,
						observer
					});
				}
			}
			removeObserver(observer) {
				this.#observers = this.#observers.filter((x) => x !== observer);
				this.scheduleGc();
				this.#mutationCache.notify({
					type: "observerRemoved",
					mutation: this,
					observer
				});
			}
			optionalRemove() {
				if (!this.#observers.length) if (this.state.status === "pending") this.scheduleGc();
				else this.#mutationCache.remove(this);
			}
			continue() {
				return this.#retryer?.continue() ?? this.execute(this.state.variables);
			}
			async execute(variables) {
				const onContinue = () => {
					this.#dispatch({ type: "continue" });
				};
				const mutationFnContext = {
					client: this.#client,
					meta: this.options.meta,
					mutationKey: this.options.mutationKey
				};
				this.#retryer = createRetryer({
					fn: () => {
						if (!this.options.mutationFn) return Promise.reject(/* @__PURE__ */ new Error("No mutationFn found"));
						return this.options.mutationFn(variables, mutationFnContext);
					},
					onFail: (failureCount, error) => {
						this.#dispatch({
							type: "failed",
							failureCount,
							error
						});
					},
					onPause: () => {
						this.#dispatch({ type: "pause" });
					},
					onContinue,
					retry: this.options.retry ?? 0,
					retryDelay: this.options.retryDelay,
					networkMode: this.options.networkMode,
					canRun: () => this.#mutationCache.canRun(this)
				});
				const restored = this.state.status === "pending";
				const isPaused = !this.#retryer.canStart();
				try {
					if (restored) onContinue();
					else {
						this.#dispatch({
							type: "pending",
							variables,
							isPaused
						});
						if (this.#mutationCache.config.onMutate) await this.#mutationCache.config.onMutate(variables, this, mutationFnContext);
						const context = await this.options.onMutate?.(variables, mutationFnContext);
						if (context !== this.state.context) this.#dispatch({
							type: "pending",
							context,
							variables,
							isPaused
						});
					}
					const data = await this.#retryer.start();
					await this.#mutationCache.config.onSuccess?.(data, variables, this.state.context, this, mutationFnContext);
					await this.options.onSuccess?.(data, variables, this.state.context, mutationFnContext);
					await this.#mutationCache.config.onSettled?.(data, null, this.state.variables, this.state.context, this, mutationFnContext);
					await this.options.onSettled?.(data, null, variables, this.state.context, mutationFnContext);
					this.#dispatch({
						type: "success",
						data
					});
					return data;
				} catch (error) {
					try {
						await this.#mutationCache.config.onError?.(error, variables, this.state.context, this, mutationFnContext);
					} catch (e) {
						Promise.reject(e);
					}
					try {
						await this.options.onError?.(error, variables, this.state.context, mutationFnContext);
					} catch (e) {
						Promise.reject(e);
					}
					try {
						await this.#mutationCache.config.onSettled?.(void 0, error, this.state.variables, this.state.context, this, mutationFnContext);
					} catch (e) {
						Promise.reject(e);
					}
					try {
						await this.options.onSettled?.(void 0, error, variables, this.state.context, mutationFnContext);
					} catch (e) {
						Promise.reject(e);
					}
					this.#dispatch({
						type: "error",
						error
					});
					throw error;
				} finally {
					this.#mutationCache.runNext(this);
				}
			}
			#dispatch(action) {
				const reducer = (state) => {
					switch (action.type) {
						case "failed": return {
							...state,
							failureCount: action.failureCount,
							failureReason: action.error
						};
						case "pause": return {
							...state,
							isPaused: true
						};
						case "continue": return {
							...state,
							isPaused: false
						};
						case "pending": return {
							...state,
							context: action.context,
							data: void 0,
							failureCount: 0,
							failureReason: null,
							error: null,
							isPaused: action.isPaused,
							status: "pending",
							variables: action.variables,
							submittedAt: Date.now()
						};
						case "success": return {
							...state,
							data: action.data,
							failureCount: 0,
							failureReason: null,
							error: null,
							status: "success",
							isPaused: false
						};
						case "error": return {
							...state,
							data: void 0,
							error: action.error,
							failureCount: state.failureCount + 1,
							failureReason: action.error,
							isPaused: false,
							status: "error"
						};
					}
				};
				this.state = reducer(this.state);
				notifyManager.batch(() => {
					this.#observers.forEach((observer) => {
						observer.onMutationUpdate(action);
					});
					this.#mutationCache.notify({
						mutation: this,
						type: "updated",
						action
					});
				});
			}
		};
		function getDefaultState() {
			return {
				context: void 0,
				data: void 0,
				error: null,
				failureCount: 0,
				failureReason: null,
				isPaused: false,
				status: "idle",
				variables: void 0,
				submittedAt: 0
			};
		}
		//#endregion
		//#region node_modules/@tanstack/query-core/build/modern/mutationCache.js
		var MutationCache = class extends Subscribable {
			constructor(config = {}) {
				super();
				this.config = config;
				this.#mutations = /* @__PURE__ */ new Set();
				this.#scopes = /* @__PURE__ */ new Map();
				this.#mutationId = 0;
			}
			#mutations;
			#scopes;
			#mutationId;
			build(client, options, state) {
				const mutation = new Mutation({
					client,
					mutationCache: this,
					mutationId: ++this.#mutationId,
					options: client.defaultMutationOptions(options),
					state
				});
				this.add(mutation);
				return mutation;
			}
			add(mutation) {
				this.#mutations.add(mutation);
				const scope = scopeFor(mutation);
				if (typeof scope === "string") {
					const scopedMutations = this.#scopes.get(scope);
					if (scopedMutations) scopedMutations.push(mutation);
					else this.#scopes.set(scope, [mutation]);
				}
				this.notify({
					type: "added",
					mutation
				});
			}
			remove(mutation) {
				if (this.#mutations.delete(mutation)) {
					const scope = scopeFor(mutation);
					if (typeof scope === "string") {
						const scopedMutations = this.#scopes.get(scope);
						if (scopedMutations) {
							if (scopedMutations.length > 1) {
								const index = scopedMutations.indexOf(mutation);
								if (index !== -1) scopedMutations.splice(index, 1);
							} else if (scopedMutations[0] === mutation) this.#scopes.delete(scope);
						}
					}
				}
				this.notify({
					type: "removed",
					mutation
				});
			}
			canRun(mutation) {
				const scope = scopeFor(mutation);
				if (typeof scope === "string") {
					const firstPendingMutation = this.#scopes.get(scope)?.find((m) => m.state.status === "pending");
					return !firstPendingMutation || firstPendingMutation === mutation;
				} else return true;
			}
			runNext(mutation) {
				const scope = scopeFor(mutation);
				if (typeof scope === "string") return (this.#scopes.get(scope)?.find((m) => m !== mutation && m.state.isPaused))?.continue() ?? Promise.resolve();
				else return Promise.resolve();
			}
			clear() {
				notifyManager.batch(() => {
					this.#mutations.forEach((mutation) => {
						this.notify({
							type: "removed",
							mutation
						});
					});
					this.#mutations.clear();
					this.#scopes.clear();
				});
			}
			getAll() {
				return Array.from(this.#mutations);
			}
			find(filters) {
				const defaultedFilters = {
					exact: true,
					...filters
				};
				return this.getAll().find((mutation) => matchMutation(defaultedFilters, mutation));
			}
			findAll(filters = {}) {
				return this.getAll().filter((mutation) => matchMutation(filters, mutation));
			}
			notify(event) {
				notifyManager.batch(() => {
					this.listeners.forEach((listener) => {
						listener(event);
					});
				});
			}
			resumePausedMutations() {
				const pausedMutations = this.getAll().filter((x) => x.state.isPaused);
				return notifyManager.batch(() => Promise.all(pausedMutations.map((mutation) => mutation.continue().catch(noop))));
			}
		};
		function scopeFor(mutation) {
			return mutation.options.scope?.id;
		}
		//#endregion
		//#region node_modules/@tanstack/query-core/build/modern/mutationObserver.js
		var MutationObserver$1 = class extends Subscribable {
			#client;
			#currentResult = void 0;
			#currentMutation;
			#mutateOptions;
			constructor(client, options) {
				super();
				this.#client = client;
				this.setOptions(options);
				this.bindMethods();
				this.#updateResult();
			}
			bindMethods() {
				this.mutate = this.mutate.bind(this);
				this.reset = this.reset.bind(this);
			}
			setOptions(options) {
				const prevOptions = this.options;
				this.options = this.#client.defaultMutationOptions(options);
				if (!shallowEqualObjects(this.options, prevOptions)) this.#client.getMutationCache().notify({
					type: "observerOptionsUpdated",
					mutation: this.#currentMutation,
					observer: this
				});
				if (prevOptions?.mutationKey && this.options.mutationKey && hashKey(prevOptions.mutationKey) !== hashKey(this.options.mutationKey)) this.reset();
				else if (this.#currentMutation?.state.status === "pending") this.#currentMutation.setOptions(this.options);
			}
			onUnsubscribe() {
				if (!this.hasListeners()) this.#currentMutation?.removeObserver(this);
			}
			onMutationUpdate(action) {
				this.#updateResult();
				this.#notify(action);
			}
			getCurrentResult() {
				return this.#currentResult;
			}
			reset() {
				this.#currentMutation?.removeObserver(this);
				this.#currentMutation = void 0;
				this.#updateResult();
				this.#notify();
			}
			mutate(variables, options) {
				this.#mutateOptions = options;
				this.#currentMutation?.removeObserver(this);
				this.#currentMutation = this.#client.getMutationCache().build(this.#client, this.options);
				this.#currentMutation.addObserver(this);
				return this.#currentMutation.execute(variables);
			}
			#updateResult() {
				const state = this.#currentMutation?.state ?? getDefaultState();
				this.#currentResult = {
					...state,
					isPending: state.status === "pending",
					isSuccess: state.status === "success",
					isError: state.status === "error",
					isIdle: state.status === "idle",
					mutate: this.mutate,
					reset: this.reset
				};
			}
			#notify(action) {
				notifyManager.batch(() => {
					if (this.#mutateOptions && this.hasListeners()) {
						const variables = this.#currentResult.variables;
						const onMutateResult = this.#currentResult.context;
						const context = {
							client: this.#client,
							meta: this.options.meta,
							mutationKey: this.options.mutationKey
						};
						if (action?.type === "success") {
							try {
								this.#mutateOptions.onSuccess?.(action.data, variables, onMutateResult, context);
							} catch (e) {
								Promise.reject(e);
							}
							try {
								this.#mutateOptions.onSettled?.(action.data, null, variables, onMutateResult, context);
							} catch (e) {
								Promise.reject(e);
							}
						} else if (action?.type === "error") {
							try {
								this.#mutateOptions.onError?.(action.error, variables, onMutateResult, context);
							} catch (e) {
								Promise.reject(e);
							}
							try {
								this.#mutateOptions.onSettled?.(void 0, action.error, variables, onMutateResult, context);
							} catch (e) {
								Promise.reject(e);
							}
						}
					}
					this.listeners.forEach((listener) => {
						listener(this.#currentResult);
					});
				});
			}
		};
		//#endregion
		//#region node_modules/@tanstack/query-core/build/modern/queriesObserver.js
		function difference(array1, array2) {
			const excludeSet = new Set(array2);
			return array1.filter((x) => !excludeSet.has(x));
		}
		function replaceAt(array, index, value) {
			const copy = array.slice(0);
			copy[index] = value;
			return copy;
		}
		var QueriesObserver = class extends Subscribable {
			#client;
			#result;
			#queries;
			#options;
			#observers;
			#combinedResult;
			#lastCombine;
			#lastResult;
			#lastQueryHashes;
			#observerMatches = [];
			constructor(client, queries, options) {
				super();
				this.#client = client;
				this.#options = options;
				this.#queries = [];
				this.#observers = [];
				this.#result = [];
				this.setQueries(queries);
			}
			onSubscribe() {
				if (this.listeners.size === 1) this.#observers.forEach((observer) => {
					observer.subscribe((result) => {
						this.#onUpdate(observer, result);
					});
				});
			}
			onUnsubscribe() {
				if (!this.listeners.size) this.destroy();
			}
			destroy() {
				this.listeners = /* @__PURE__ */ new Set();
				this.#observers.forEach((observer) => {
					observer.destroy();
				});
			}
			setQueries(queries, options) {
				this.#queries = queries;
				this.#options = options;
				notifyManager.batch(() => {
					const prevObservers = this.#observers;
					const newObserverMatches = this.#findMatchingObservers(this.#queries);
					newObserverMatches.forEach((match) => match.observer.setOptions(match.defaultedQueryOptions));
					const newObservers = newObserverMatches.map((match) => match.observer);
					const newResult = newObservers.map((observer) => observer.getCurrentResult());
					const hasLengthChange = prevObservers.length !== newObservers.length;
					const hasIndexChange = newObservers.some((observer, index) => observer !== prevObservers[index]);
					const hasStructuralChange = hasLengthChange || hasIndexChange;
					const hasResultChange = hasStructuralChange ? true : newResult.some((result, index) => {
						const prev = this.#result[index];
						return !prev || !shallowEqualObjects(result, prev);
					});
					if (!hasStructuralChange && !hasResultChange) return;
					if (hasStructuralChange) {
						this.#observerMatches = newObserverMatches;
						this.#observers = newObservers;
					}
					this.#result = newResult;
					if (!this.hasListeners()) return;
					if (hasStructuralChange) {
						difference(prevObservers, newObservers).forEach((observer) => {
							observer.destroy();
						});
						difference(newObservers, prevObservers).forEach((observer) => {
							observer.subscribe((result) => {
								this.#onUpdate(observer, result);
							});
						});
					}
					this.#notify();
				});
			}
			getCurrentResult() {
				return this.#result;
			}
			getQueries() {
				return this.#observers.map((observer) => observer.getCurrentQuery());
			}
			getObservers() {
				return this.#observers;
			}
			getOptimisticResult(queries, combine) {
				const matches = this.#findMatchingObservers(queries);
				const result = matches.map((match) => match.observer.getOptimisticResult(match.defaultedQueryOptions));
				const queryHashes = matches.map((match) => match.defaultedQueryOptions.queryHash);
				return [
					result,
					(r) => {
						return this.#combineResult(r ?? result, combine, queryHashes);
					},
					() => {
						return this.#trackResult(result, matches);
					}
				];
			}
			#trackResult(result, matches) {
				return matches.map((match, index) => {
					const observerResult = result[index];
					return !match.defaultedQueryOptions.notifyOnChangeProps ? match.observer.trackResult(observerResult, (accessedProp) => {
						matches.forEach((m) => {
							m.observer.trackProp(accessedProp);
						});
					}) : observerResult;
				});
			}
			#combineResult(input, combine, queryHashes) {
				if (combine) {
					const lastHashes = this.#lastQueryHashes;
					const queryHashesChanged = queryHashes !== void 0 && lastHashes !== void 0 && (lastHashes.length !== queryHashes.length || queryHashes.some((hash, i) => hash !== lastHashes[i]));
					if (!this.#combinedResult || this.#result !== this.#lastResult || queryHashesChanged || combine !== this.#lastCombine) {
						this.#lastCombine = combine;
						this.#lastResult = this.#result;
						if (queryHashes !== void 0) this.#lastQueryHashes = queryHashes;
						this.#combinedResult = replaceEqualDeep(this.#combinedResult, combine(input));
					}
					return this.#combinedResult;
				}
				return input;
			}
			#findMatchingObservers(queries) {
				const prevObserversMap = /* @__PURE__ */ new Map();
				this.#observers.forEach((observer) => {
					const key = observer.options.queryHash;
					if (!key) return;
					const previousObservers = prevObserversMap.get(key);
					if (previousObservers) previousObservers.push(observer);
					else prevObserversMap.set(key, [observer]);
				});
				const observers = [];
				queries.forEach((options) => {
					const defaultedOptions = this.#client.defaultQueryOptions(options);
					const observer = prevObserversMap.get(defaultedOptions.queryHash)?.shift() ?? new QueryObserver(this.#client, defaultedOptions);
					observers.push({
						defaultedQueryOptions: defaultedOptions,
						observer
					});
				});
				return observers;
			}
			#onUpdate(observer, result) {
				const index = this.#observers.indexOf(observer);
				if (index !== -1) {
					this.#result = replaceAt(this.#result, index, result);
					this.#notify();
				}
			}
			#notify() {
				if (this.hasListeners()) {
					const previousResult = this.#combinedResult;
					const newTracked = this.#trackResult(this.#result, this.#observerMatches);
					if (previousResult !== this.#combineResult(newTracked, this.#options?.combine)) notifyManager.batch(() => {
						this.listeners.forEach((listener) => {
							listener(this.#result);
						});
					});
				}
			}
		};
		//#endregion
		//#region node_modules/@tanstack/query-core/build/modern/queryCache.js
		var QueryCache = class extends Subscribable {
			constructor(config = {}) {
				super();
				this.config = config;
				this.#queries = /* @__PURE__ */ new Map();
			}
			#queries;
			build(client, options, state) {
				const queryKey = options.queryKey;
				const queryHash = options.queryHash ?? hashQueryKeyByOptions(queryKey, options);
				let query = this.get(queryHash);
				if (!query) {
					query = new Query({
						client,
						queryKey,
						queryHash,
						options: client.defaultQueryOptions(options),
						state,
						defaultOptions: client.getQueryDefaults(queryKey)
					});
					this.add(query);
				}
				return query;
			}
			add(query) {
				if (!this.#queries.has(query.queryHash)) {
					this.#queries.set(query.queryHash, query);
					this.notify({
						type: "added",
						query
					});
				}
			}
			remove(query) {
				const queryInMap = this.#queries.get(query.queryHash);
				if (queryInMap) {
					query.destroy();
					if (queryInMap === query) this.#queries.delete(query.queryHash);
					this.notify({
						type: "removed",
						query
					});
				}
			}
			clear() {
				notifyManager.batch(() => {
					this.getAll().forEach((query) => {
						this.remove(query);
					});
				});
			}
			get(queryHash) {
				return this.#queries.get(queryHash);
			}
			getAll() {
				return [...this.#queries.values()];
			}
			find(filters) {
				const defaultedFilters = {
					exact: true,
					...filters
				};
				return this.getAll().find((query) => matchQuery(defaultedFilters, query));
			}
			findAll(filters = {}) {
				const queries = this.getAll();
				return Object.keys(filters).length > 0 ? queries.filter((query) => matchQuery(filters, query)) : queries;
			}
			notify(event) {
				notifyManager.batch(() => {
					this.listeners.forEach((listener) => {
						listener(event);
					});
				});
			}
			onFocus() {
				notifyManager.batch(() => {
					this.getAll().forEach((query) => {
						query.onFocus();
					});
				});
			}
			onOnline() {
				notifyManager.batch(() => {
					this.getAll().forEach((query) => {
						query.onOnline();
					});
				});
			}
		};
		//#endregion
		//#region node_modules/@tanstack/query-core/build/modern/queryClient.js
		var QueryClient = class {
			#queryCache;
			#mutationCache;
			#defaultOptions;
			#queryDefaults;
			#mutationDefaults;
			#mountCount;
			#unsubscribeFocus;
			#unsubscribeOnline;
			constructor(config = {}) {
				this.#queryCache = config.queryCache || new QueryCache();
				this.#mutationCache = config.mutationCache || new MutationCache();
				this.#defaultOptions = config.defaultOptions || {};
				this.#queryDefaults = /* @__PURE__ */ new Map();
				this.#mutationDefaults = /* @__PURE__ */ new Map();
				this.#mountCount = 0;
			}
			mount() {
				this.#mountCount++;
				if (this.#mountCount !== 1) return;
				this.#unsubscribeFocus = focusManager.subscribe(async (focused) => {
					if (focused) {
						await this.resumePausedMutations();
						this.#queryCache.onFocus();
					}
				});
				this.#unsubscribeOnline = onlineManager.subscribe(async (online) => {
					if (online) {
						await this.resumePausedMutations();
						this.#queryCache.onOnline();
					}
				});
			}
			unmount() {
				this.#mountCount--;
				if (this.#mountCount !== 0) return;
				this.#unsubscribeFocus?.();
				this.#unsubscribeFocus = void 0;
				this.#unsubscribeOnline?.();
				this.#unsubscribeOnline = void 0;
			}
			isFetching(filters) {
				return this.#queryCache.findAll({
					...filters,
					fetchStatus: "fetching"
				}).length;
			}
			isMutating(filters) {
				return this.#mutationCache.findAll({
					...filters,
					status: "pending"
				}).length;
			}
			/**
			* Imperative (non-reactive) way to retrieve data for a QueryKey.
			* Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
			*
			* Hint: Do not use this function inside a component, because it won't receive updates.
			* Use `useQuery` to create a `QueryObserver` that subscribes to changes.
			*/
			getQueryData(queryKey) {
				const options = this.defaultQueryOptions({ queryKey });
				return this.#queryCache.get(options.queryHash)?.state.data;
			}
			ensureQueryData(options) {
				const defaultedOptions = this.defaultQueryOptions(options);
				const query = this.#queryCache.build(this, defaultedOptions);
				const cachedData = query.state.data;
				if (cachedData === void 0) return this.fetchQuery(options);
				if (options.revalidateIfStale && query.isStaleByTime(resolveStaleTime(defaultedOptions.staleTime, query))) this.prefetchQuery(defaultedOptions);
				return Promise.resolve(cachedData);
			}
			getQueriesData(filters) {
				return this.#queryCache.findAll(filters).map(({ queryKey, state }) => {
					return [queryKey, state.data];
				});
			}
			setQueryData(queryKey, updater, options) {
				const defaultedOptions = this.defaultQueryOptions({ queryKey });
				const prevData = this.#queryCache.get(defaultedOptions.queryHash)?.state.data;
				const data = functionalUpdate(updater, prevData);
				if (data === void 0) return;
				return this.#queryCache.build(this, defaultedOptions).setData(data, {
					...options,
					manual: true
				});
			}
			setQueriesData(filters, updater, options) {
				return notifyManager.batch(() => this.#queryCache.findAll(filters).map(({ queryKey }) => [queryKey, this.setQueryData(queryKey, updater, options)]));
			}
			getQueryState(queryKey) {
				const options = this.defaultQueryOptions({ queryKey });
				return this.#queryCache.get(options.queryHash)?.state;
			}
			removeQueries(filters) {
				const queryCache = this.#queryCache;
				notifyManager.batch(() => {
					queryCache.findAll(filters).forEach((query) => {
						queryCache.remove(query);
					});
				});
			}
			resetQueries(filters, options) {
				const queryCache = this.#queryCache;
				return notifyManager.batch(() => {
					queryCache.findAll(filters).forEach((query) => {
						query.reset();
					});
					return this.refetchQueries({
						type: "active",
						...filters
					}, options);
				});
			}
			cancelQueries(filters, cancelOptions = {}) {
				const defaultedCancelOptions = {
					revert: true,
					...cancelOptions
				};
				const promises = notifyManager.batch(() => this.#queryCache.findAll(filters).map((query) => query.cancel(defaultedCancelOptions)));
				return Promise.all(promises).then(noop).catch(noop);
			}
			invalidateQueries(filters, options = {}) {
				return notifyManager.batch(() => {
					this.#queryCache.findAll(filters).forEach((query) => {
						query.invalidate();
					});
					if (filters?.refetchType === "none") return Promise.resolve();
					return this.refetchQueries({
						...filters,
						type: filters?.refetchType ?? filters?.type ?? "active"
					}, options);
				});
			}
			refetchQueries(filters, options = {}) {
				const fetchOptions = {
					...options,
					cancelRefetch: options.cancelRefetch ?? true
				};
				const promises = notifyManager.batch(() => this.#queryCache.findAll(filters).filter((query) => !query.isDisabled() && !query.isStatic()).map((query) => {
					let promise = query.fetch(void 0, fetchOptions);
					if (!fetchOptions.throwOnError) promise = promise.catch(noop);
					return query.state.fetchStatus === "paused" ? Promise.resolve() : promise;
				}));
				return Promise.all(promises).then(noop);
			}
			fetchQuery(options) {
				const defaultedOptions = this.defaultQueryOptions(options);
				if (defaultedOptions.retry === void 0) defaultedOptions.retry = false;
				const query = this.#queryCache.build(this, defaultedOptions);
				return query.isStaleByTime(resolveStaleTime(defaultedOptions.staleTime, query)) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
			}
			prefetchQuery(options) {
				return this.fetchQuery(options).then(noop).catch(noop);
			}
			fetchInfiniteQuery(options) {
				options.behavior = infiniteQueryBehavior(options.pages);
				return this.fetchQuery(options);
			}
			prefetchInfiniteQuery(options) {
				return this.fetchInfiniteQuery(options).then(noop).catch(noop);
			}
			ensureInfiniteQueryData(options) {
				options.behavior = infiniteQueryBehavior(options.pages);
				return this.ensureQueryData(options);
			}
			resumePausedMutations() {
				if (onlineManager.isOnline()) return this.#mutationCache.resumePausedMutations();
				return Promise.resolve();
			}
			getQueryCache() {
				return this.#queryCache;
			}
			getMutationCache() {
				return this.#mutationCache;
			}
			getDefaultOptions() {
				return this.#defaultOptions;
			}
			setDefaultOptions(options) {
				this.#defaultOptions = options;
			}
			setQueryDefaults(queryKey, options) {
				this.#queryDefaults.set(hashKey(queryKey), {
					queryKey,
					defaultOptions: options
				});
			}
			getQueryDefaults(queryKey) {
				const defaults = [...this.#queryDefaults.values()];
				const result = {};
				defaults.forEach((queryDefault) => {
					if (partialMatchKey(queryKey, queryDefault.queryKey)) Object.assign(result, queryDefault.defaultOptions);
				});
				return result;
			}
			setMutationDefaults(mutationKey, options) {
				this.#mutationDefaults.set(hashKey(mutationKey), {
					mutationKey,
					defaultOptions: options
				});
			}
			getMutationDefaults(mutationKey) {
				const defaults = [...this.#mutationDefaults.values()];
				const result = {};
				defaults.forEach((queryDefault) => {
					if (partialMatchKey(mutationKey, queryDefault.mutationKey)) Object.assign(result, queryDefault.defaultOptions);
				});
				return result;
			}
			defaultQueryOptions(options) {
				if (options._defaulted) return options;
				const defaultedOptions = {
					...this.#defaultOptions.queries,
					...this.getQueryDefaults(options.queryKey),
					...options,
					_defaulted: true
				};
				if (!defaultedOptions.queryHash) defaultedOptions.queryHash = hashQueryKeyByOptions(defaultedOptions.queryKey, defaultedOptions);
				if (defaultedOptions.refetchOnReconnect === void 0) defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== "always";
				if (defaultedOptions.throwOnError === void 0) defaultedOptions.throwOnError = !!defaultedOptions.suspense;
				if (!defaultedOptions.networkMode && defaultedOptions.persister) defaultedOptions.networkMode = "offlineFirst";
				if (defaultedOptions.queryFn === skipToken) defaultedOptions.enabled = false;
				return defaultedOptions;
			}
			defaultMutationOptions(options) {
				if (options?._defaulted) return options;
				return {
					...this.#defaultOptions.mutations,
					...options?.mutationKey && this.getMutationDefaults(options.mutationKey),
					...options,
					_defaulted: true
				};
			}
			clear() {
				this.#queryCache.clear();
				this.#mutationCache.clear();
			}
		};
		//#endregion
		//#region node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
		var QueryClientContext = react.createContext(void 0);
		var useQueryClient = (queryClient) => {
			const client = react.useContext(QueryClientContext);
			if (queryClient) return queryClient;
			if (!client) throw new Error("No QueryClient set, use QueryClientProvider to set one");
			return client;
		};
		var QueryClientProvider = ({ client, children }) => {
			react.useEffect(() => {
				client.mount();
				return () => {
					client.unmount();
				};
			}, [client]);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(QueryClientContext.Provider, {
				value: client,
				children
			});
		};
		//#endregion
		//#region node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js
		var IsRestoringContext = react.createContext(false);
		var useIsRestoring = () => react.useContext(IsRestoringContext);
		IsRestoringContext.Provider;
		//#endregion
		//#region node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js
		function createValue() {
			let isReset = false;
			return {
				clearReset: () => {
					isReset = false;
				},
				reset: () => {
					isReset = true;
				},
				isReset: () => {
					return isReset;
				}
			};
		}
		var QueryErrorResetBoundaryContext = react.createContext(createValue());
		var useQueryErrorResetBoundary = () => react.useContext(QueryErrorResetBoundaryContext);
		//#endregion
		//#region node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js
		var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary, query) => {
			const throwOnError = query?.state.error && typeof options.throwOnError === "function" ? shouldThrowError(options.throwOnError, [query.state.error, query]) : options.throwOnError;
			if (options.suspense || options.experimental_prefetchInRender || throwOnError) {
				if (!errorResetBoundary.isReset()) options.retryOnMount = false;
			}
		};
		var useClearResetErrorBoundary = (errorResetBoundary) => {
			react.useEffect(() => {
				errorResetBoundary.clearReset();
			}, [errorResetBoundary]);
		};
		var getHasError = ({ result, errorResetBoundary, throwOnError, query, suspense }) => {
			return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (suspense && result.data === void 0 || shouldThrowError(throwOnError, [result.error, query]));
		};
		//#endregion
		//#region node_modules/@tanstack/react-query/build/modern/suspense.js
		var ensureSuspenseTimers = (defaultedOptions) => {
			if (defaultedOptions.suspense) {
				const MIN_SUSPENSE_TIME_MS = 1e3;
				const clamp = (value) => value === "static" ? value : Math.max(value ?? MIN_SUSPENSE_TIME_MS, MIN_SUSPENSE_TIME_MS);
				const originalStaleTime = defaultedOptions.staleTime;
				defaultedOptions.staleTime = typeof originalStaleTime === "function" ? (...args) => clamp(originalStaleTime(...args)) : clamp(originalStaleTime);
				if (typeof defaultedOptions.gcTime === "number") defaultedOptions.gcTime = Math.max(defaultedOptions.gcTime, MIN_SUSPENSE_TIME_MS);
			}
		};
		var willFetch = (result, isRestoring) => result.isLoading && result.isFetching && !isRestoring;
		var shouldSuspend = (defaultedOptions, result) => defaultedOptions?.suspense && result.isPending;
		var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) => observer.fetchOptimistic(defaultedOptions).catch(() => {
			errorResetBoundary.clearReset();
		});
		//#endregion
		//#region node_modules/@tanstack/react-query/build/modern/useQueries.js
		function useQueries({ queries, ...options }, queryClient) {
			const client = useQueryClient(queryClient);
			const isRestoring = useIsRestoring();
			const errorResetBoundary = useQueryErrorResetBoundary();
			const defaultedQueries = react.useMemo(() => queries.map((opts) => {
				const defaultedOptions = client.defaultQueryOptions(opts);
				defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
				return defaultedOptions;
			}), [
				queries,
				client,
				isRestoring
			]);
			defaultedQueries.forEach((queryOptions) => {
				ensureSuspenseTimers(queryOptions);
				const query = client.getQueryCache().get(queryOptions.queryHash);
				ensurePreventErrorBoundaryRetry(queryOptions, errorResetBoundary, query);
			});
			useClearResetErrorBoundary(errorResetBoundary);
			const [observer] = react.useState(() => new QueriesObserver(client, defaultedQueries, options));
			const [optimisticResult, getCombinedResult, trackResult] = observer.getOptimisticResult(defaultedQueries, options.combine);
			const shouldSubscribe = !isRestoring && options.subscribed !== false;
			react.useSyncExternalStore(react.useCallback((onStoreChange) => shouldSubscribe ? observer.subscribe(notifyManager.batchCalls(onStoreChange)) : noop, [observer, shouldSubscribe]), () => observer.getCurrentResult(), () => observer.getCurrentResult());
			react.useEffect(() => {
				observer.setQueries(defaultedQueries, options);
			}, [
				defaultedQueries,
				options,
				observer
			]);
			const suspensePromises = optimisticResult.some((result, index) => shouldSuspend(defaultedQueries[index], result)) ? optimisticResult.flatMap((result, index) => {
				const opts = defaultedQueries[index];
				if (opts && shouldSuspend(opts, result)) return fetchOptimistic(opts, new QueryObserver(client, opts), errorResetBoundary);
				return [];
			}) : [];
			if (suspensePromises.length > 0) throw Promise.all(suspensePromises);
			const firstSingleResultWhichShouldThrow = optimisticResult.find((result, index) => {
				const query = defaultedQueries[index];
				return query && getHasError({
					result,
					errorResetBoundary,
					throwOnError: query.throwOnError,
					query: client.getQueryCache().get(query.queryHash),
					suspense: query.suspense
				});
			});
			if (firstSingleResultWhichShouldThrow?.error) throw firstSingleResultWhichShouldThrow.error;
			return getCombinedResult(trackResult());
		}
		//#endregion
		//#region node_modules/@tanstack/react-query/build/modern/useBaseQuery.js
		function useBaseQuery(options, Observer, queryClient) {
			const isRestoring = useIsRestoring();
			const errorResetBoundary = useQueryErrorResetBoundary();
			const client = useQueryClient(queryClient);
			const defaultedOptions = client.defaultQueryOptions(options);
			client.getDefaultOptions().queries?._experimental_beforeQuery?.(defaultedOptions);
			const query = client.getQueryCache().get(defaultedOptions.queryHash);
			defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
			ensureSuspenseTimers(defaultedOptions);
			ensurePreventErrorBoundaryRetry(defaultedOptions, errorResetBoundary, query);
			useClearResetErrorBoundary(errorResetBoundary);
			const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
			const [observer] = react.useState(() => new Observer(client, defaultedOptions));
			const result = observer.getOptimisticResult(defaultedOptions);
			const shouldSubscribe = !isRestoring && options.subscribed !== false;
			react.useSyncExternalStore(react.useCallback((onStoreChange) => {
				const unsubscribe = shouldSubscribe ? observer.subscribe(notifyManager.batchCalls(onStoreChange)) : noop;
				observer.updateResult();
				return unsubscribe;
			}, [observer, shouldSubscribe]), () => observer.getCurrentResult(), () => observer.getCurrentResult());
			react.useEffect(() => {
				observer.setOptions(defaultedOptions);
			}, [defaultedOptions, observer]);
			if (shouldSuspend(defaultedOptions, result)) throw fetchOptimistic(defaultedOptions, observer, errorResetBoundary);
			if (getHasError({
				result,
				errorResetBoundary,
				throwOnError: defaultedOptions.throwOnError,
				query,
				suspense: defaultedOptions.suspense
			})) throw result.error;
			client.getDefaultOptions().queries?._experimental_afterQuery?.(defaultedOptions, result);
			if (defaultedOptions.experimental_prefetchInRender && !isServer && willFetch(result, isRestoring)) (isNewCacheEntry ? fetchOptimistic(defaultedOptions, observer, errorResetBoundary) : query?.promise)?.catch(noop).finally(() => {
				observer.updateResult();
			});
			return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
		}
		//#endregion
		//#region node_modules/@tanstack/react-query/build/modern/useQuery.js
		function useQuery(options, queryClient) {
			return useBaseQuery(options, QueryObserver, queryClient);
		}
		//#endregion
		//#region node_modules/@tanstack/react-query/build/modern/useMutation.js
		function useMutation(options, queryClient) {
			const client = useQueryClient(queryClient);
			const [observer] = react.useState(() => new MutationObserver$1(client, options));
			react.useEffect(() => {
				observer.setOptions(options);
			}, [observer, options]);
			const result = react.useSyncExternalStore(react.useCallback((onStoreChange) => observer.subscribe(notifyManager.batchCalls(onStoreChange)), [observer]), () => observer.getCurrentResult(), () => observer.getCurrentResult());
			const mutate = react.useCallback((variables, mutateOptions) => {
				observer.mutate(variables, mutateOptions).catch(noop);
			}, [observer]);
			if (result.error && shouldThrowError(observer.options.throwOnError, [result.error])) throw result.error;
			return {
				...result,
				mutate,
				mutateAsync: result.mutate
			};
		}
		//#endregion
		//#region node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js
		function useInfiniteQuery(options, queryClient) {
			return useBaseQuery(options, InfiniteQueryObserver, queryClient);
		}
		//#endregion
		//#region packages/api-client/src/core.ts
		var OnclawApiError = class extends Error {
			kind;
			status;
			code;
			details;
			retryable;
			constructor(message, options) {
				super(message);
				this.name = "OnclawApiError";
				this.kind = options.kind;
				this.status = options.status;
				this.code = options.code;
				this.details = options.details;
				this.retryable = options.retryable ?? false;
			}
		};
		function isRecord(value) {
			return value !== null && typeof value === "object" && !Array.isArray(value);
		}
		function isTableData(value) {
			if (!isRecord(value) || !Array.isArray(value.columns) || !Array.isArray(value.rows)) return false;
			const columns = value.columns;
			const rows = value.rows;
			return columns.every((column) => typeof column === "string") && rows.every((row) => Array.isArray(row) && row.length === columns.length);
		}
		function tableToRecords(table) {
			return table.rows.map((row) => Object.fromEntries(table.columns.map((column, index) => [column, row[index]])));
		}
		function normalizePayload(value, table = "raw") {
			if (table === "records" && isTableData(value)) return tableToRecords(value);
			return value;
		}
		function stableStrings(values = []) {
			return [...new Set(values.map((value) => value?.trim()).filter((value) => Boolean(value)))].sort();
		}
		function normalizeOrigin(value) {
			const url = new URL(value);
			url.pathname = url.pathname.replace(/\/+$/, "");
			url.search = "";
			url.hash = "";
			return url.toString().replace(/\/$/, "");
		}
		function buildUrl(origin, path, query) {
			const url = new URL(path.replace(/^\//, ""), `${origin}/`);
			for (const [key, raw] of Object.entries(query ?? {})) {
				if (raw === void 0 || raw === null || raw === "") continue;
				if (Array.isArray(raw)) {
					for (const item of raw) if (item !== void 0 && item !== null) url.searchParams.append(key, String(item));
				} else url.searchParams.set(key, String(raw));
			}
			return url.toString();
		}
		function envelopeError(payload, status) {
			const rawCode = payload.code;
			const code = typeof rawCode === "number" || typeof rawCode === "string" ? rawCode : status;
			return new OnclawApiError(typeof payload.msg === "string" && payload.msg ? payload.msg : "Onclaw API request failed", {
				kind: "envelope",
				status,
				code,
				details: payload.data,
				retryable: status >= 500 || typeof code === "number" && code >= 500
			});
		}
		function createFetchTransport(options) {
			const origin = normalizeOrigin(options.baseUrl);
			const fetchImpl = options.fetch ?? globalThis.fetch;
			if (typeof fetchImpl !== "function") throw new TypeError("A Fetch implementation is required");
			const timeoutMs = options.timeoutMs ?? 3e4;
			return {
				origin,
				async request(path, request = {}) {
					const timeout = new AbortController();
					const abort = () => timeout.abort(request.signal?.reason);
					request.signal?.addEventListener("abort", abort, { once: true });
					const timer = setTimeout(() => timeout.abort(/* @__PURE__ */ new Error("Request timed out")), timeoutMs);
					try {
						const token = await options.getAccessToken?.();
						const headers = new Headers(options.defaultHeaders);
						headers.set("Accept", "application/json");
						if (request.body !== void 0) headers.set("Content-Type", "application/json");
						if (token) headers.set("Authorization", `Bearer ${token}`);
						for (const [key, value] of Object.entries(request.headers ?? {})) headers.set(key, value);
						let response;
						try {
							response = await fetchImpl(buildUrl(origin, path, request.query), {
								method: request.method ?? "GET",
								headers,
								body: request.body === void 0 ? void 0 : JSON.stringify(request.body),
								signal: timeout.signal
							});
						} catch (cause) {
							if (timeout.signal.aborted) throw new OnclawApiError("Request cancelled", {
								kind: "cancelled",
								retryable: false,
								cause
							});
							throw new OnclawApiError("Network request failed", {
								kind: "network",
								retryable: true,
								cause
							});
						}
						let payload;
						try {
							payload = response.status === 204 ? null : await response.json();
						} catch (cause) {
							throw new OnclawApiError("Response is not valid JSON", {
								kind: "validation",
								status: response.status,
								retryable: response.status >= 500,
								cause
							});
						}
						if (!response.ok) {
							const error = isRecord(payload) && "code" in payload ? envelopeError(payload, response.status) : new OnclawApiError(`HTTP ${response.status}`, {
								kind: "http",
								status: response.status,
								details: payload,
								retryable: response.status >= 500
							});
							if (response.status === 401 || response.status === 403) await options.onUnauthorized?.(error);
							throw error;
						}
						if (!isRecord(payload) || typeof payload.code !== "number" || typeof payload.msg !== "string" || !("data" in payload)) throw new OnclawApiError("Invalid BaseResponse envelope", {
							kind: "validation",
							status: response.status,
							details: payload
						});
						if (payload.code !== 200) {
							const error = envelopeError(payload, response.status);
							if (payload.code === 401 || payload.code === 403) await options.onUnauthorized?.(error);
							throw error;
						}
						return normalizePayload(payload.data, request.table);
					} finally {
						clearTimeout(timer);
						request.signal?.removeEventListener("abort", abort);
					}
				}
			};
		}
		function isRetryableReadFailure(failureCount, error) {
			return failureCount < 1 && error instanceof OnclawApiError && error.retryable;
		}
		//#endregion
		//#region packages/api-client/src/domains.ts
		const TTL = {
			immediate: 0,
			fiveSeconds: 5e3,
			fifteenSeconds: 15e3,
			thirtySeconds: 3e4,
			minute: 6e4,
			twoMinutes: 12e4,
			threeMinutes: 18e4,
			fiveMinutes: 3e5,
			tenMinutes: 6e5,
			thirtyMinutes: 18e5,
			sixHours: 216e5,
			day: 864e5,
			infinity: Number.POSITIVE_INFINITY
		};
		const MARKET_DASHBOARD_FIELDS$1 = [
			"data_state",
			"source",
			"distribution_counts",
			"up_count",
			"down_count",
			"limit_up_count",
			"limit_up_touched_count",
			"broken_limit_open_count",
			"limit_down_current_count",
			"one_board_count",
			"two_board_count",
			"three_board_count",
			"four_board_count",
			"five_plus_board_count",
			"one_advancement_rate",
			"two_advancement_rate",
			"three_advancement_rate",
			"four_advancement_rate",
			"five_plus_advancement_rate",
			"turnover",
			"predicted_turnover",
			"turnover_change",
			"turnover_ratio",
			"intraday_turnover",
			"intraday_turnover_change",
			"previous_consecutive_board_sentiment",
			"previous_broken_board_temperature",
			"intraday_previous_consecutive_board_sentiment",
			"intraday_previous_broken_board_temperature"
		];
		const DEFAULT_GC = TTL.thirtyMinutes;
		const LONG_GC = TTL.day;
		const FINANCIAL_API_VERSION = "20260802";
		function encode(value) {
			return encodeURIComponent(value);
		}
		function keyPart(value) {
			return value?.trim() || null;
		}
		function positive(value, fallback, max = Number.MAX_SAFE_INTEGER) {
			return Math.min(max, Math.max(1, Math.trunc(value ?? fallback)));
		}
		function page(value) {
			return positive(value, 1);
		}
		function descriptor(scope, domain, identity, queryFn, staleTime, gcTime = DEFAULT_GC) {
			return {
				queryKey: [
					"onclaw-api",
					scope().schema,
					scope(),
					domain,
					...identity
				],
				queryFn: ({ signal }) => queryFn(signal),
				staleTime,
				gcTime,
				retry: isRetryableReadFailure
			};
		}
		function sourceEndpoint(source) {
			return source === "limit_info_snapshot" ? "/limit_info/snapshot/window" : "/market/snapshot/window";
		}
		function normalizeTopicEvent(event) {
			return {
				...event,
				date: event.date ?? event.event_date ?? null,
				event_date: event.event_date ?? event.date ?? null
			};
		}
		function normalizeTopicItem$1(item) {
			return {
				...item,
				topic_id: item.topic_id ?? "",
				topic_name: item.topic_name ?? "",
				category: item.category ?? "",
				stock_count: item.stock_count ?? 0,
				updated_at: item.updated_at ?? null,
				latest_date: item.latest_date ?? null,
				latest_event: item.latest_event ?? null
			};
		}
		function normalizeTopicSearch(value) {
			return {
				...value,
				total: typeof value.total === "number" ? value.total : 0,
				items: Array.isArray(value.items) ? value.items.filter((item) => Boolean(item) && typeof item === "object").map(normalizeTopicItem$1) : []
			};
		}
		function normalizeTopicDetail$1(value) {
			const events = Array.isArray(value.events) ? value.events.filter((event) => Boolean(event) && typeof event === "object").map(normalizeTopicEvent) : [];
			events.sort((left, right) => String(right.event_date ?? "").localeCompare(String(left.event_date ?? "")));
			return {
				...value,
				topic_id: value.topic_id ?? "",
				topic_name: value.topic_name ?? "",
				category: value.category ?? "",
				events,
				updated_at: value.updated_at ?? null,
				latest_date: value.latest_date ?? null
			};
		}
		function normalizeTopicTree$1(value) {
			const counts = value.counts && typeof value.counts === "object" ? value.counts : {};
			return {
				...value,
				topic_id: value.topic_id ?? "",
				counts: {
					tree_nodes: counts.tree_nodes ?? 0,
					stock_occurrences: counts.stock_occurrences ?? 0,
					unique_stocks: counts.unique_stocks ?? 0
				},
				tree: Array.isArray(value.tree) ? value.tree : []
			};
		}
		function snapshotBody(params) {
			const { source: _source, ...request } = params;
			return {
				...request,
				cursor: Math.max(0, Math.trunc(params.cursor)),
				size: positive(params.size, 1, 120),
				group: params.group ?? "default",
				stock_scope: stableStrings(params.stock_scope)
			};
		}
		function createDomainLayer(transport, scope) {
			const get = (path, query, signal, table) => transport.request(path, {
				query,
				signal,
				table
			});
			const send = (method, path, body, signal, table) => transport.request(path, {
				method,
				body,
				signal,
				table
			});
			const api = {
				auth: {
					login: (input, signal) => send("POST", "/auth/login", input, signal),
					register: (input, signal) => send("POST", "/auth/register", input, signal),
					resetPassword: (input, signal) => send("POST", "/auth/password/reset", input, signal),
					me: (signal) => get("/auth/me", void 0, signal),
					accessSummary: (signal) => get("/auth/me/access-summary", void 0, signal),
					apiTokenStatus: (signal) => get("/auth/me/api-token", void 0, signal),
					revealApiToken: (signal) => send("POST", "/auth/me/api-token/reveal", void 0, signal),
					regenerateApiToken: (signal) => send("POST", "/auth/me/api-token/regenerate", void 0, signal),
					updateSnapshotPreviewProfile: (profile, input, signal) => send("PUT", `/auth/me/snapshot-preview-settings/${encode(profile)}`, input, signal),
					nativeBaseAddrs: (signal) => get("/auth/base-addrs", void 0, signal)
				},
				payment: {
					createOrder: (input, signal) => send("POST", "/payment/create", input, signal),
					orderStatus: (orderNumber, signal) => get(`/payment/check/${encode(orderNumber)}`, void 0, signal)
				},
				snapshot: {
					limitDates: async (signal) => {
						const dates = await get("/limit_info/dates", void 0, signal);
						return Array.isArray(dates) ? [...dates].sort() : [];
					},
					window: (params, signal) => send("POST", "/market/snapshot/window", snapshotBody(params), signal),
					previewWindow: (params, signal) => send("POST", sourceEndpoint(params.source), snapshotBody(params), signal)
				},
				marketIntraday: { miniCurves: (tradeDate, codes, signal) => send("POST", "/market/intraday/mini", {
					trade_date: tradeDate,
					stock_codes: stableStrings(codes)
				}, signal, "records") },
				marketDashboard: { day: (tradeDate, fields = MARKET_DASHBOARD_FIELDS$1, signal) => get("/market/daily-stat", {
					trade_date: tradeDate,
					fields: stableStrings(fields).join(",")
				}, signal) },
				boardSentiment: { window: (index = 0, length = 30, signal) => get("/market/daily-stat/index-window", {
					index: Math.max(0, Math.trunc(index)),
					length: positive(length, 30, 120)
				}, signal) },
				supervision: {
					active: (signal) => get("/supervise/active", void 0, signal, "records"),
					byDate: (targetDate, signal) => get("/supervise/by-date", { target_date: targetDate }, signal, "records"),
					history: (params = {}, signal) => get("/supervise/history", {
						end_date: params.endDate,
						offset: params.offset ?? 0,
						limit: positive(params.limit, 30)
					}, signal),
					lines: (targetDate, signal) => get("/supervise/lines", { target_date: targetDate }, signal, "records"),
					lineHistory: (params = {}, signal) => get("/supervise/lines/history", {
						end_date: params.endDate,
						offset: params.offset ?? 0,
						limit: positive(params.limit, 30)
					}, signal)
				},
				timeline: { list: (params, signal) => get("/timelines", {
					start_date: params.startDate,
					end_date: params.endDate,
					source_types: stableStrings(params.sourceTypes).join(",") || void 0,
					topic_id: params.topicId,
					limit: positive(params.limit, 500)
				}, signal) },
				topics: {
					namesByStocks: (stocks, signal) => send("POST", "/topics/names-by-stocks", { stocks: stableStrings(stocks) }, signal),
					marketInfo: (codes, fields, signal) => send("POST", "/market/info", {
						codes: stableStrings(codes),
						fields: stableStrings(fields)
					}, signal, "records"),
					search: (params = {}, signal) => get("/topics/search", {
						keyword: params.keyword?.trim(),
						skip: Math.max(0, params.skip ?? 0),
						limit: positive(params.limit, 50)
					}, signal).then(normalizeTopicSearch),
					latest: (limit = 50, signal) => get("/topics/latest", { limit: positive(limit, 50) }, signal).then(normalizeTopicSearch),
					detail: (topicId, signal) => get(`/topics/${encode(topicId)}`, void 0, signal).then(normalizeTopicDetail$1),
					tree: (topicId, signal) => get(`/topics/${encode(topicId)}/tree`, void 0, signal).then(normalizeTopicTree$1)
				},
				financialPerformance: {
					reports: (signal) => get("/financial-performance/reports", { api_version: FINANCIAL_API_VERSION }, signal),
					announcementDates: (report, signal) => get("/financial-performance/announcement-dates", {
						report,
						api_version: FINANCIAL_API_VERSION
					}, signal),
					announcements: (params, signal) => get("/financial-performance/announcements", {
						report: params.report,
						event_date: params.event_date,
						forecast_types: stableStrings(params.forecast_types).join(",") || void 0,
						performance_types: stableStrings(params.performance_types).join(",") || void 0,
						forward_trading_days: params.forward_trading_days,
						absolute_change_threshold: params.absolute_change_threshold,
						api_version: FINANCIAL_API_VERSION
					}, signal)
				},
				ladderStockContext: { detail: (params, signal) => send("POST", "/limit_info/stock-popup/context", {
					ts_code: params.code.trim().toUpperCase(),
					anchor_date: params.anchorDate,
					kline_limit: positive(params.klineLimit, 60),
					announcement_limit: positive(params.announcementLimit, 8)
				}, signal) },
				customIndex: {
					definitions: (params = {}, signal) => get("/market/custom-index/definitions", {
						page: page(params.page),
						page_size: positive(params.pageSize, 50)
					}, signal, "records"),
					myDefinitions: (params = {}, signal) => get("/market/custom-index/management/definitions", {
						page: page(params.page),
						page_size: positive(params.pageSize, 10)
					}, signal, "records"),
					create: (input, signal) => send("POST", "/market/custom-index/management/definitions", input, signal),
					update: (indexCode, input, signal) => send("PUT", `/market/custom-index/management/${encode(indexCode)}`, input, signal),
					preview: (indexCode, tradeDate, signal) => send("POST", `/market/custom-index/management/${encode(indexCode)}/preview`, { trade_date: tradeDate }, signal),
					schedule: (indexCode, input, signal) => send("PUT", `/market/custom-index/management/${encode(indexCode)}/schedule`, input, signal),
					build: (indexCode, signal) => send("POST", `/market/custom-index/management/${encode(indexCode)}/build`, void 0, signal),
					buildJob: (indexCode, jobId, signal) => get(`/market/custom-index/management/${encode(indexCode)}/build-jobs/${encode(jobId)}`, void 0, signal),
					lifecycle: (indexCode, action, signal) => send("POST", `/market/custom-index/management/${encode(indexCode)}/lifecycle`, { action }, signal),
					daily: (indexCode, startDate, endDate, signal) => get(`/market/custom-index/${encode(indexCode)}/daily`, {
						start_date: startDate,
						end_date: endDate
					}, signal, "records"),
					minutes: (indexCode, tradeDate, signal) => get(`/market/custom-index/${encode(indexCode)}/minutes`, { trade_date: tradeDate }, signal, "records"),
					constituents: (indexCode, tradeDate, signal) => get(`/market/custom-index/${encode(indexCode)}/constituents`, { trade_date: tradeDate }, signal, "records")
				},
				usAbnormalMovement: {
					dates: (limit = 30, signal) => get("/us-abnormal-movements/dates", { limit: positive(limit, 30) }, signal),
					rows: (tradeDate, signal) => get(`/us-abnormal-movements/read/by-date/${encode(tradeDate)}`, void 0, signal)
				}
			};
			return {
				api,
				queries: {
					auth: {
						me: () => descriptor(scope, "auth", ["me"], api.auth.me, TTL.thirtySeconds),
						accessSummary: () => descriptor(scope, "auth", ["access-summary"], api.auth.accessSummary, TTL.fifteenSeconds),
						apiTokenStatus: () => descriptor(scope, "auth", ["api-token"], api.auth.apiTokenStatus, TTL.immediate, TTL.fiveMinutes),
						nativeBaseAddrs: () => descriptor(scope, "auth", ["base-addrs"], api.auth.nativeBaseAddrs, TTL.fiveMinutes, TTL.fiveMinutes)
					},
					payment: { orderStatus: (orderNumber) => descriptor(scope, "payment", ["order", orderNumber], (signal) => api.payment.orderStatus(orderNumber, signal), TTL.immediate, TTL.fiveMinutes) },
					snapshot: {
						limitDates: () => descriptor(scope, "snapshot", ["limit-dates"], api.snapshot.limitDates, TTL.fiveMinutes, LONG_GC),
						window: (params) => descriptor(scope, "snapshot", [
							"window",
							"market_snapshot",
							snapshotBody(params)
						], (signal) => api.snapshot.window(params, signal), TTL.fiveMinutes, TTL.fiveMinutes),
						previewWindow: (params) => descriptor(scope, "snapshot", [
							"window",
							params.source,
							snapshotBody(params)
						], (signal) => api.snapshot.previewWindow(params, signal), TTL.fiveMinutes, TTL.fiveMinutes)
					},
					marketIntraday: { miniCurves: (tradeDate, codes, settled = false) => descriptor(scope, "market-intraday", [
						"mini",
						tradeDate,
						stableStrings(codes)
					], (signal) => api.marketIntraday.miniCurves(tradeDate, codes, signal), settled ? TTL.infinity : TTL.minute, LONG_GC) },
					marketDashboard: { day: (tradeDate, fields = MARKET_DASHBOARD_FIELDS$1, settled = false) => descriptor(scope, "market-dashboard", [
						"day",
						tradeDate,
						stableStrings(fields)
					], (signal) => api.marketDashboard.day(tradeDate, fields, signal), settled ? TTL.fiveMinutes : TTL.minute, LONG_GC) },
					boardSentiment: { window: (index = 0, length = 30) => descriptor(scope, "board-sentiment", [
						"window",
						Math.max(0, Math.trunc(index)),
						positive(length, 30, 120)
					], (signal) => api.boardSentiment.window(index, length, signal), index === 0 ? TTL.minute : TTL.infinity, LONG_GC) },
					supervision: {
						active: () => descriptor(scope, "supervision", ["active"], api.supervision.active, TTL.fiveMinutes),
						byDate: (date) => descriptor(scope, "supervision", ["by-date", date], (signal) => api.supervision.byDate(date, signal), TTL.fiveMinutes),
						history: (params = {}) => descriptor(scope, "supervision", [
							"history",
							keyPart(params.endDate),
							params.offset ?? 0,
							positive(params.limit, 30)
						], (signal) => api.supervision.history(params, signal), TTL.fiveMinutes),
						lines: (date) => descriptor(scope, "supervision", ["lines", keyPart(date)], (signal) => api.supervision.lines(date, signal), date ? TTL.fiveMinutes : TTL.minute),
						lineHistory: (params = {}) => descriptor(scope, "supervision", [
							"line-history",
							keyPart(params.endDate),
							params.offset ?? 0,
							positive(params.limit, 30)
						], (signal) => api.supervision.lineHistory(params, signal), TTL.fiveMinutes)
					},
					timeline: { list: (params) => descriptor(scope, "timeline", [
						"list",
						params.startDate,
						params.endDate,
						stableStrings(params.sourceTypes),
						keyPart(params.topicId),
						positive(params.limit, 500)
					], (signal) => api.timeline.list(params, signal), TTL.fiveMinutes) },
					topics: {
						namesByStocks: (stocks) => descriptor(scope, "topics", ["names-by-stocks", stableStrings(stocks)], (signal) => api.topics.namesByStocks(stocks, signal), TTL.day, LONG_GC),
						marketInfo: (codes, fields) => descriptor(scope, "topics", [
							"market-info",
							stableStrings(codes),
							stableStrings(fields)
						], (signal) => api.topics.marketInfo(codes, fields, signal), TTL.fiveSeconds),
						search: (params = {}) => descriptor(scope, "topics", [
							"search",
							params.keyword?.trim().toLowerCase() ?? "",
							Math.max(0, params.skip ?? 0),
							positive(params.limit, 50)
						], (signal) => api.topics.search(params, signal), TTL.twoMinutes),
						latest: ({ limit = 50 } = {}) => descriptor(scope, "topics", ["latest", positive(limit, 50)], (signal) => api.topics.latest(limit, signal), TTL.minute),
						detail: (topicId) => descriptor(scope, "topics", ["detail", topicId], (signal) => api.topics.detail(topicId, signal), TTL.fiveMinutes),
						tree: (topicId) => descriptor(scope, "topics", ["tree", topicId], (signal) => api.topics.tree(topicId, signal), TTL.fiveMinutes)
					},
					financialPerformance: {
						reports: () => descriptor(scope, "financial-performance", [FINANCIAL_API_VERSION, "reports"], api.financialPerformance.reports, TTL.thirtyMinutes),
						announcementDates: (report) => descriptor(scope, "financial-performance", [
							FINANCIAL_API_VERSION,
							"announcement-dates",
							report
						], (signal) => api.financialPerformance.announcementDates(report, signal), TTL.tenMinutes),
						announcements: (params) => descriptor(scope, "financial-performance", [
							FINANCIAL_API_VERSION,
							"announcements",
							params.report,
							params.event_date,
							stableStrings(params.forecast_types),
							stableStrings(params.performance_types),
							params.forward_trading_days ?? null,
							params.absolute_change_threshold ?? null
						], (signal) => api.financialPerformance.announcements(params, signal), TTL.fiveMinutes)
					},
					ladderStockContext: { detail: (params) => descriptor(scope, "ladder-stock-context", [
						"detail",
						params.code.trim().toUpperCase(),
						params.anchorDate,
						positive(params.klineLimit, 60),
						positive(params.announcementLimit, 8)
					], (signal) => api.ladderStockContext.detail(params, signal), params.current ? TTL.fiveMinutes : TTL.thirtyMinutes) },
					customIndex: {
						definitions: (params = {}) => descriptor(scope, "custom-index", [
							"definitions",
							page(params.page),
							positive(params.pageSize, 50)
						], (signal) => api.customIndex.definitions(params, signal), TTL.minute),
						myDefinitions: (params = {}) => descriptor(scope, "custom-index", [
							"my-definitions",
							page(params.page),
							positive(params.pageSize, 10)
						], (signal) => api.customIndex.myDefinitions(params, signal), TTL.minute),
						buildJob: (indexCode, jobId) => descriptor(scope, "custom-index", [
							"build-job",
							indexCode,
							jobId
						], (signal) => api.customIndex.buildJob(indexCode, jobId, signal), TTL.immediate),
						daily: (indexCode, startDate, endDate) => descriptor(scope, "custom-index", [
							"daily",
							indexCode,
							keyPart(startDate),
							keyPart(endDate)
						], (signal) => api.customIndex.daily(indexCode, startDate, endDate, signal), TTL.fiveMinutes),
						minutes: (indexCode, tradeDate, current = false) => descriptor(scope, "custom-index", [
							"minutes",
							indexCode,
							tradeDate
						], (signal) => api.customIndex.minutes(indexCode, tradeDate, signal), current ? TTL.minute : TTL.thirtyMinutes),
						constituents: (indexCode, tradeDate) => descriptor(scope, "custom-index", [
							"constituents",
							indexCode,
							tradeDate
						], (signal) => api.customIndex.constituents(indexCode, tradeDate, signal), TTL.fiveMinutes)
					},
					usAbnormalMovement: {
						dates: (limit = 30) => descriptor(scope, "us-abnormal-movement", ["dates", positive(limit, 30)], (signal) => api.usAbnormalMovement.dates(limit, signal), TTL.fiveMinutes),
						rows: (tradeDate, settled = false) => descriptor(scope, "us-abnormal-movement", ["rows", tradeDate], (signal) => api.usAbnormalMovement.rows(tradeDate, signal), settled ? TTL.thirtyMinutes : TTL.threeMinutes)
					}
				}
			};
		}
		function buildJobPollInterval(active, data) {
			const status = typeof data?.status === "string" ? data.status.toLowerCase() : "";
			return active && (status === "queued" || status === "running") ? 2e3 : false;
		}
		function valid(row) {
			return Boolean(row.ts_code && row.trade_date) && Array.isArray(row.mini_pct) && row.mini_pct.length === 20 && row.mini_pct.every(Number.isFinite);
		}
		var MiniCurveRepository = class {
			memory = /* @__PURE__ */ new Map();
			storage;
			prefix;
			activeTtlMs;
			negativeTtlMs;
			maxMemoryEntries;
			now;
			storageHealthy = true;
			constructor(options) {
				this.prefix = `onclaw:mini-curve:${options.origin}:${options.schemaVersion ?? 1}`;
				this.storage = options.storage;
				this.activeTtlMs = options.activeTtlMs ?? 6e4;
				this.negativeTtlMs = options.negativeTtlMs ?? 216e5;
				this.maxMemoryEntries = options.maxMemoryEntries ?? 5e3;
				this.now = options.now ?? Date.now;
			}
			key(tradeDate, stockCode) {
				return `${this.prefix}:${tradeDate}:${stockCode.trim().toUpperCase()}`;
			}
			remember(key, entry) {
				this.memory.delete(key);
				this.memory.set(key, entry);
				while (this.memory.size > this.maxMemoryEntries) {
					const oldest = this.memory.keys().next().value;
					if (!oldest) break;
					this.memory.delete(oldest);
				}
			}
			async get(tradeDate, stockCode) {
				const key = this.key(tradeDate, stockCode);
				const cached = this.memory.get(key);
				if (cached && cached.expiresAt > this.now()) return cached.curve;
				if (cached) this.memory.delete(key);
				if (!this.storage || !this.storageHealthy) return void 0;
				try {
					const stored = await this.storage.get(key);
					if (stored && valid(stored)) {
						this.remember(key, {
							curve: stored,
							expiresAt: Number.POSITIVE_INFINITY
						});
						return stored;
					}
				} catch {
					this.storageHealthy = false;
				}
			}
			async put(row, settled) {
				if (!valid(row)) return;
				const normalized = {
					...row,
					ts_code: row.ts_code.trim().toUpperCase(),
					mini_pct: [...row.mini_pct]
				};
				const key = this.key(normalized.trade_date, normalized.ts_code);
				this.remember(key, {
					curve: normalized,
					expiresAt: settled ? Number.POSITIVE_INFINITY : this.now() + this.activeTtlMs
				});
				if (settled && this.storage && this.storageHealthy) try {
					await this.storage.set(key, normalized);
				} catch {
					this.storageHealthy = false;
				}
			}
			markMissing(tradeDate, stockCode) {
				this.remember(this.key(tradeDate, stockCode), {
					missing: true,
					expiresAt: this.now() + this.negativeTtlMs
				});
			}
			async missing(tradeDate, stockCodes) {
				const result = [];
				for (const code of stableStrings(stockCodes)) {
					const key = this.key(tradeDate, code);
					const entry = this.memory.get(key);
					if (entry?.missing && entry.expiresAt > this.now()) continue;
					if (!await this.get(tradeDate, code)) result.push(code);
				}
				return result;
			}
			clearMemory() {
				this.memory.clear();
			}
		};
		var MiniCurveScheduler = class {
			tail = Promise.resolve();
			batchSize;
			intervalMs;
			constructor(options = {}) {
				this.batchSize = Math.min(20, Math.max(1, options.batchSize ?? 20));
				this.intervalMs = Math.max(0, options.intervalMs ?? 150);
			}
			schedule(work) {
				const result = this.tail.then(work, work);
				this.tail = result.then(() => void 0, () => void 0);
				return result;
			}
			async batches(items, work) {
				const normalized = stableStrings(items);
				const results = [];
				for (let offset = 0; offset < normalized.length; offset += this.batchSize) {
					if (offset > 0 && this.intervalMs) await new Promise((resolve) => setTimeout(resolve, this.intervalMs));
					results.push(await this.schedule(() => work(normalized.slice(offset, offset + this.batchSize))));
				}
				return results;
			}
		};
		//#endregion
		//#region packages/api-client/src/snapshot-aggregates.ts
		const SHANGHAI_PARTS = new Intl.DateTimeFormat("en-CA", {
			timeZone: "Asia/Shanghai",
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
			hour: "2-digit",
			minute: "2-digit",
			hourCycle: "h23"
		});
		const LADDER_GROUP_ORDER$1 = [
			"continue_board",
			"rebound",
			"first_board",
			"failed_limit",
			"limit_down"
		];
		function marketClock(now) {
			const parts = SHANGHAI_PARTS.formatToParts(now);
			const value = (type) => parts.find((part) => part.type === type)?.value ?? "";
			return {
				date: `${value("year")}-${value("month")}-${value("day")}`,
				minute: Number(value("hour")) * 60 + Number(value("minute"))
			};
		}
		function normalizeRuntime(value) {
			const snapshot = value.snapshot && typeof value.snapshot === "object" && !Array.isArray(value.snapshot) ? value.snapshot : {};
			return {
				...value,
				trade_date: typeof value.trade_date === "string" ? value.trade_date : null,
				index_revision: typeof value.index_revision === "number" ? value.index_revision : 0,
				is_trading_day: typeof value.is_trading_day === "boolean" ? value.is_trading_day : null,
				snapshot
			};
		}
		function windowRecords(window) {
			return window.table.rows.map((row) => Object.fromEntries(window.table.columns.map((column, index) => [column, row[index]])));
		}
		function runtimeCodes(runtime) {
			return [...new Set(Object.keys(runtime.snapshot).map((code) => code.trim().toUpperCase()).filter(Boolean))];
		}
		function runtimeGroups(runtime, codes, fallbackGroup) {
			const groups = {};
			for (const code of codes) {
				const value = runtime.snapshot[code]?.ladder_group;
				const group = typeof value === "string" && value ? value : fallbackGroup;
				if (!groups[group]) groups[group] = [];
				groups[group].push(code);
			}
			const preferred = LADDER_GROUP_ORDER$1.filter((group) => groups[group]);
			const remaining = Object.keys(groups).filter((group) => !preferred.includes(group));
			return {
				groups,
				order: [...preferred, ...remaining]
			};
		}
		function aggregateColumns(window, runtime) {
			return [.../* @__PURE__ */ new Set([
				...window.table.columns,
				...Object.values(runtime.snapshot).flatMap((row) => Object.keys(row)),
				"trade_date",
				"ts_code"
			])];
		}
		function overlayRuntime(window, runtime, codes, groups, groupOrder, mode) {
			const tradeDate = runtime.trade_date;
			if (!tradeDate) return window;
			const allowed = new Set(codes);
			const records = windowRecords(window).filter((row) => row.trade_date !== tradeDate || !allowed.has(String(row.ts_code ?? "").toUpperCase()));
			for (const code of codes) {
				const row = runtime.snapshot[code];
				if (row) records.push({
					...row,
					trade_date: tradeDate,
					ts_code: code
				});
			}
			const columns = aggregateColumns(window, runtime);
			const dates = [.../* @__PURE__ */ new Set([...window.dates, tradeDate])].sort();
			const names = Object.fromEntries(codes.map((code) => [code, typeof runtime.snapshot[code]?.name === "string" ? runtime.snapshot[code].name : window.structure.names?.[code] ?? code]));
			return {
				...window,
				end_date: dates[dates.length - 1] ?? window.end_date,
				size: dates.length,
				rowset_revision: runtime.index_revision,
				dates,
				structure: {
					...window.structure,
					ordered_dates: dates,
					ordered_codes: [...codes],
					groups,
					names,
					group_order: [...groupOrder]
				},
				table: {
					...window.table,
					columns,
					rows: records.map((row) => columns.map((column) => row[column] ?? null))
				},
				cache_info: {
					...window.cache_info ?? {},
					client_runtime_aggregate: {
						mode,
						trade_date: tradeDate,
						index_revision: runtime.index_revision
					}
				}
			};
		}
		function emptyWindow(params, dates) {
			return {
				contract_version: 2,
				schema_version: 1,
				base_date: params.base_date,
				start_date: params.start_date,
				end_date: params.end_date,
				selected_date: params.base_date,
				cursor: params.cursor,
				size: dates.length,
				static_revision: "none",
				rowset_revision: 0,
				dates: [...dates],
				structure: {
					ordered_dates: [...dates],
					ordered_codes: [],
					groups: { [params.group ?? "default"]: [] },
					names: {},
					group_order: [params.group ?? "default"]
				},
				table: {
					columns: ["trade_date", "ts_code"],
					rows: []
				}
			};
		}
		function stableAggregateIdentity(params) {
			return {
				source: params.source,
				base_date: params.base_date,
				start_date: params.start_date,
				end_date: params.end_date,
				cursor: params.cursor,
				size: params.size,
				group: params.group ?? "default",
				runtime_group: params.runtime_group ?? params.group ?? "default",
				stock_scope: stableStrings(params.stock_scope),
				scope_revision: params.scope_revision ?? 0,
				limit_events: params.limit_events ?? false,
				convertible: params.convertible ?? false
			};
		}
		function createSnapshotWindowAggregates(deps) {
			const now = () => deps.clock?.now() ?? /* @__PURE__ */ new Date();
			const runtime = async (params, signal) => {
				const codes = stableStrings(params.codes);
				return normalizeRuntime(codes.length ? await deps.transport.request("/market/snapshot/runtime", {
					method: "POST",
					body: {
						codes,
						group: params.group ?? "default"
					},
					signal
				}) : await deps.transport.request("/market/snapshot/runtime", {
					query: { group: params.group ?? "default" },
					signal
				}));
			};
			const settledDates = async (signal) => deps.queryClient.fetchQuery({
				queryKey: [
					"onclaw-api",
					deps.scope().schema,
					deps.scope(),
					"snapshot",
					"aggregate-limit-dates"
				],
				queryFn: () => deps.limitDates(signal),
				staleTime: TTL.thirtySeconds,
				gcTime: TTL.fiveMinutes,
				retry: isRetryableReadFailure
			});
			const cachedWindow = async (params, dates, selection, signal, cacheSelection = true) => deps.cache.fetchWindow({
				source: params.source,
				params,
				dates,
				selection,
				cacheSelection,
				loader: async ({ startDate, endDate, dates: rangeDates, codes }) => deps.previewWindow({
					...params,
					start_date: startDate,
					end_date: endDate,
					cursor: 0,
					size: Math.max(1, rangeDates.length),
					stock_scope: codes.length ? codes : params.stock_scope
				}, signal)
			});
			const runtimeWithWindow = async (params, signal) => {
				const settled = await settledDates(signal);
				const clock = marketClock(now());
				if (params.end_date !== clock.date || clock.minute < 555 || settled.includes(clock.date)) throw new Error("runtimeWithWindow requires an unsettled current-market-date end_date after 09:15");
				const live = await runtime({ group: params.runtime_group ?? "limit_events" }, signal);
				if (live.trade_date !== clock.date || live.is_trading_day === false) throw new Error("Runtime publication is unavailable for the requested market date");
				const codes = runtimeCodes(live);
				const historicalDates = settled.filter((date) => date >= params.start_date && date <= params.end_date);
				const windowParams = {
					...params,
					stock_scope: codes,
					scope_revision: live.index_revision,
					group: params.group ?? "default"
				};
				const historical = codes.length && historicalDates.length ? await cachedWindow(windowParams, historicalDates, "provided", signal, false) : emptyWindow(windowParams, historicalDates);
				const membership = runtimeGroups(live, codes, params.group ?? "default");
				const mode = clock.minute >= 960 ? "realtime-draining" : "realtime";
				return {
					mode,
					window: overlayRuntime(historical, live, codes, membership.groups, membership.order, mode),
					runtime: live
				};
			};
			const windowWithRuntime = async (params, signal) => {
				const settled = await settledDates(signal);
				const clock = marketClock(now());
				const historicalDates = settled.filter((date) => date >= params.start_date && date <= params.end_date);
				if (!historicalDates.length) throw new Error("windowWithRuntime requires at least one settled trading date");
				const selection = params.source === "limit_info_snapshot" && !params.stock_scope?.length ? "derived" : "provided";
				const historical = await cachedWindow(params, historicalDates, selection, signal);
				if (!(params.end_date === clock.date && clock.minute >= 555 && !settled.includes(clock.date)) || !historical.structure.ordered_codes.length) return {
					mode: "historical",
					window: historical,
					runtime: null
				};
				const live = await runtime({
					group: params.runtime_group ?? "default",
					codes: historical.structure.ordered_codes
				}, signal);
				if (live.trade_date !== clock.date || live.is_trading_day === false) return {
					mode: "historical",
					window: historical,
					runtime: live
				};
				const codes = historical.structure.ordered_codes.filter((code) => Boolean(live.snapshot[code]));
				const mode = clock.minute >= 960 ? "realtime-draining" : "realtime";
				return {
					mode,
					window: overlayRuntime(historical, live, historical.structure.ordered_codes, historical.structure.groups, historical.structure.group_order ?? [params.group ?? "default"], mode),
					runtime: {
						...live,
						snapshot: Object.fromEntries(codes.map((code) => [code, live.snapshot[code]]))
					}
				};
			};
			const query = (kind, params, execute) => ({
				queryKey: [
					"onclaw-api",
					deps.scope().schema,
					deps.scope(),
					"snapshot-aggregate",
					kind,
					stableAggregateIdentity(params)
				],
				queryFn: ({ signal }) => execute(signal),
				staleTime: TTL.immediate,
				gcTime: TTL.fiveMinutes,
				retry: false
			});
			return {
				api: {
					runtime,
					runtimeWithWindow,
					windowWithRuntime
				},
				queries: {
					runtimeWithWindow: (params) => query("runtime-with-window", params, (signal) => runtimeWithWindow(params, signal)),
					windowWithRuntime: (params) => query("window-with-runtime", params, (signal) => windowWithRuntime(params, signal))
				}
			};
		}
		//#endregion
		//#region packages/api-client/src/snapshot-cache.ts
		const DEFAULT_TTL_MS = 300 * 1e3;
		function normalizeCode$1(value) {
			return value.trim().toUpperCase();
		}
		function stableDates(values) {
			return [...new Set(values.filter(Boolean))].sort();
		}
		function stableCodes(values) {
			return stableStrings(values.map(normalizeCode$1));
		}
		function rowKey(date, code) {
			return `${date}\u0000${code}`;
		}
		function responseRows(response) {
			const columns = response.table?.columns ?? [];
			return (response.table?.rows ?? []).map((row) => Object.fromEntries(columns.map((column, index) => [column, row[index]])));
		}
		function responseTemplate(response) {
			return {
				...response,
				table: {
					...response.table,
					columns: [...response.table.columns],
					rows: []
				}
			};
		}
		/** Runtime-owned settled Snapshot repository; it never stores Runtime overlays or presentation models. */
		var SnapshotWindowCache = class {
			ttlMs;
			now;
			identity;
			rows = /* @__PURE__ */ new Map();
			selections = /* @__PURE__ */ new Map();
			inFlight = /* @__PURE__ */ new Map();
			schemaVersion = null;
			lastTemplate = null;
			epoch = 0;
			constructor(options = {}) {
				this.ttlMs = options.ttlMs ?? DEFAULT_TTL_MS;
				this.now = options.now ?? Date.now;
				this.identity = options.identity ?? (() => void 0);
			}
			selectionKey(source, params) {
				const identity = this.identity();
				return JSON.stringify({
					origin: identity?.origin ?? "",
					schema: identity?.schema ?? "",
					principal: identity?.principal ?? "",
					entitlement: identity?.entitlement ?? "",
					generation: identity?.generation ?? 0,
					source,
					baseDate: params.base_date,
					group: params.group ?? "default",
					stockScope: stableCodes(params.stock_scope ?? []),
					scopeRevision: params.scope_revision ?? 0,
					limitEvents: params.limit_events ?? false,
					convertible: params.convertible ?? false
				});
			}
			async fetchWindow(options) {
				const requestedDates = [...new Set((options.dates.length ? options.dates : [options.params.start_date]).filter(Boolean))];
				const dates = stableDates(requestedDates);
				if (!requestedDates.length) throw new Error("Snapshot Window cache requires trading dates");
				const requestedCodes = stableCodes(options.params.stock_scope ?? []);
				const selectionKey = this.selectionKey(options.source, options.params);
				const cacheSelection = options.cacheSelection ?? true;
				let selection = cacheSelection ? this.freshSelection(selectionKey) : void 0;
				const fetchedRanges = [];
				if (!selection && options.selection === "derived") {
					const response = await this.loadOnce(options, dates, requestedCodes, fetchedRanges);
					selection = this.captureSelection(selectionKey, response, cacheSelection);
				}
				if (!selection && options.selection === "provided" && this.lastTemplate) selection = this.captureSelection(selectionKey, {
					...this.lastTemplate,
					access: void 0,
					cache_info: void 0
				}, cacheSelection);
				if (selection && options.selection === "provided") {
					selection.orderedCodes = requestedCodes;
					selection.groups = { [options.params.group ?? "default"]: requestedCodes };
				}
				let codes = selection?.orderedCodes ?? requestedCodes;
				if (!codes.length && options.selection === "provided") throw new Error("Explicit Snapshot Window cache request requires stock codes");
				for (let pass = 0; pass < 2; pass += 1) {
					const ranges = this.missingRanges(dates, codes);
					if (!ranges.length) break;
					for (const range of ranges) {
						const response = await this.loadOnce(options, range.dates, range.codes, fetchedRanges);
						if (!selection) selection = this.captureSelection(selectionKey, response, cacheSelection);
						else this.refreshSelectionFromResponse(selection, response);
					}
				}
				selection = selection ?? (cacheSelection ? this.freshSelection(selectionKey) : void 0);
				if (!selection) throw new Error("Snapshot Window loader returned no compatible selection");
				if (options.selection === "provided") {
					selection.orderedCodes = requestedCodes;
					selection.groups = { [options.params.group ?? "default"]: requestedCodes };
					for (const code of requestedCodes) {
						const cachedName = dates.map((date) => this.rows.get(rowKey(date, code))?.value?.name).find((name) => typeof name === "string" && Boolean(name));
						if (cachedName) selection.names[code] = cachedName;
					}
				}
				codes = selection.orderedCodes.length ? selection.orderedCodes : codes;
				if (cacheSelection) this.selections.set(selectionKey, selection);
				return this.projectWindow(selection, options.params, requestedDates, codes, fetchedRanges);
			}
			invalidate(options = {}) {
				if (options.selectionKey) this.selections.delete(options.selectionKey);
				const dates = new Set(options.dates ?? []);
				const codes = new Set(stableCodes(options.codes ?? []));
				if (!dates.size && !codes.size) {
					if (!options.selectionKey) this.clear();
					return;
				}
				for (const key of this.rows.keys()) {
					const [date, code] = key.split("\0");
					if ((!dates.size || dates.has(date)) && (!codes.size || codes.has(code))) this.rows.delete(key);
				}
			}
			clear() {
				this.epoch += 1;
				this.rows.clear();
				this.selections.clear();
				this.inFlight.clear();
				this.schemaVersion = null;
				this.lastTemplate = null;
			}
			freshSelection(key) {
				const selection = this.selections.get(key);
				if (selection && selection.expiresAt > this.now()) return selection;
				if (selection) this.selections.delete(key);
			}
			covered(date, code) {
				const key = rowKey(date, code);
				const entry = this.rows.get(key);
				if (entry && entry.expiresAt > this.now()) return true;
				if (entry) this.rows.delete(key);
				return false;
			}
			missingRanges(dates, codes) {
				const ranges = [];
				for (const [index, date] of dates.entries()) {
					const missingCodes = codes.filter((code) => !this.covered(date, code));
					if (!missingCodes.length) continue;
					const previous = ranges[ranges.length - 1];
					if (previous && previous.dates[previous.dates.length - 1] === dates[index - 1] && JSON.stringify(previous.codes) === JSON.stringify(missingCodes)) previous.dates.push(date);
					else ranges.push({
						dates: [date],
						codes: missingCodes
					});
				}
				return ranges;
			}
			async loadOnce(options, dates, codes, fetchedRanges) {
				const epoch = this.epoch;
				const flightKey = JSON.stringify({
					epoch,
					source: options.source,
					selector: this.selectionKey(options.source, options.params),
					dates,
					codes
				});
				const existing = this.inFlight.get(flightKey);
				if (existing) return existing;
				fetchedRanges.push({
					start_date: dates[0],
					end_date: dates[dates.length - 1],
					codes: [...codes]
				});
				const pending = options.loader({
					startDate: dates[0],
					endDate: dates[dates.length - 1],
					dates,
					codes
				}).then((response) => {
					if (epoch !== this.epoch) throw new Error("Snapshot Window cache was invalidated during load");
					this.ingest(response, dates);
					return response;
				}).finally(() => this.inFlight.delete(flightKey));
				this.inFlight.set(flightKey, pending);
				return pending;
			}
			ingest(response, requestedDates) {
				if (!response || !response.table || !Array.isArray(response.table.columns) || !Array.isArray(response.table.rows)) throw new Error("Snapshot Window cache loader returned an invalid table");
				if (!response.table.columns.includes("trade_date") || !response.table.columns.includes("ts_code")) throw new Error("Snapshot Window table requires trade_date and ts_code");
				if (this.schemaVersion !== null && this.schemaVersion !== response.schema_version) this.clear();
				this.schemaVersion = response.schema_version;
				this.lastTemplate = responseTemplate(response);
				const acceptedCodes = stableCodes(response.structure?.ordered_codes ?? []);
				const authoritativeDates = stableDates(response.access?.constrained === true ? response.structure?.ordered_dates ?? response.dates ?? [] : requestedDates);
				const expiresAt = this.now() + this.ttlMs;
				for (const date of authoritativeDates) for (const code of acceptedCodes) this.rows.set(rowKey(date, code), {
					value: null,
					expiresAt,
					schemaVersion: response.schema_version,
					staticRevision: response.static_revision
				});
				for (const row of responseRows(response)) {
					const date = typeof row.trade_date === "string" ? row.trade_date : "";
					const code = typeof row.ts_code === "string" ? normalizeCode$1(row.ts_code) : "";
					if (!date || !code) continue;
					const key = rowKey(date, code);
					const existing = this.rows.get(key);
					this.rows.set(key, {
						value: existing?.value ? {
							...existing.value,
							...row,
							ts_code: code
						} : {
							...row,
							ts_code: code
						},
						expiresAt,
						schemaVersion: response.schema_version,
						staticRevision: response.static_revision
					});
				}
			}
			captureSelection(key, response, store = true) {
				const selection = {
					expiresAt: this.now() + this.ttlMs,
					orderedCodes: (response.structure?.ordered_codes ?? []).map(normalizeCode$1).filter(Boolean),
					names: { ...response.structure?.names ?? {} },
					groups: Object.fromEntries(Object.entries(response.structure?.groups ?? {}).map(([group, codes]) => [group, codes.map(normalizeCode$1).filter(Boolean)])),
					groupOrder: [...response.structure?.group_order ?? []],
					rowsetRevision: response.rowset_revision,
					schemaVersion: response.schema_version,
					columns: [...response.table.columns],
					template: responseTemplate(response)
				};
				if (store) this.selections.set(key, selection);
				return selection;
			}
			refreshSelectionFromResponse(selection, response) {
				if (selection.schemaVersion !== response.schema_version || selection.rowsetRevision !== response.rowset_revision || JSON.stringify(selection.columns) !== JSON.stringify(response.table.columns)) {
					selection.orderedCodes = response.structure.ordered_codes.map(normalizeCode$1).filter(Boolean);
					selection.names = { ...response.structure.names ?? {} };
					selection.groups = Object.fromEntries(Object.entries(response.structure.groups ?? {}).map(([group, codes]) => [group, codes.map(normalizeCode$1).filter(Boolean)]));
					selection.groupOrder = [...response.structure.group_order ?? []];
					selection.rowsetRevision = response.rowset_revision;
					selection.schemaVersion = response.schema_version;
					selection.columns = [...response.table.columns];
				}
				selection.template = responseTemplate(response);
				selection.expiresAt = this.now() + this.ttlMs;
			}
			projectWindow(selection, params, dates, codes, fetchedRanges) {
				const orderedCodes = selection.orderedCodes.filter((code) => codes.includes(code));
				const rows = [];
				for (const date of dates) for (const code of orderedCodes) {
					const row = this.rows.get(rowKey(date, code))?.value;
					if (row) rows.push(selection.columns.map((column) => row[column] ?? null));
				}
				const groups = Object.fromEntries(Object.entries(selection.groups).map(([group, groupCodes]) => [group, groupCodes.filter((code) => orderedCodes.includes(code))]));
				if (!Object.keys(groups).length) groups[params.group ?? "default"] = orderedCodes;
				return {
					...selection.template,
					base_date: params.base_date,
					start_date: dates[0] ?? params.start_date,
					end_date: dates[dates.length - 1] ?? params.end_date,
					selected_date: params.base_date,
					cursor: params.cursor,
					size: params.size,
					dates,
					structure: {
						...selection.template.structure,
						ordered_dates: dates,
						ordered_codes: orderedCodes,
						groups,
						names: Object.fromEntries(orderedCodes.map((code) => [code, selection.names[code] ?? code])),
						group_order: selection.groupOrder
					},
					table: {
						...selection.template.table,
						columns: [...selection.columns],
						rows
					},
					cache_info: {
						...selection.template.cache_info ?? {},
						client_atomic_cache: {
							fetched_ranges: fetchedRanges,
							assembled_dates: dates,
							assembled_codes: orderedCodes
						}
					}
				};
			}
		};
		//#endregion
		//#region packages/api-client/src/runtime.ts
		function queryDomain(query) {
			const key = query.queryKey;
			return key[0] === "onclaw-api" && typeof key[3] === "string" ? key[3] : void 0;
		}
		function createOnclawRuntime(options) {
			const transport = options.transport ?? createFetchTransport(options);
			const origin = normalizeOrigin(transport.origin || options.baseUrl);
			const queryClient = options.queryClient ?? new QueryClient({ defaultOptions: {
				queries: {
					retry: false,
					gcTime: 18e5
				},
				mutations: { retry: false }
			} });
			let identity = {
				principal: options.identity?.principal ?? "anonymous",
				entitlement: options.identity?.entitlement ?? "public",
				generation: 0
			};
			const scope = () => ({
				origin,
				schema: options.schemaVersion ?? "1",
				principal: identity.principal,
				entitlement: identity.entitlement,
				generation: identity.generation
			});
			const domains = createDomainLayer(transport, scope);
			const snapshots = new SnapshotWindowCache({ identity: scope });
			const snapshotAggregates = createSnapshotWindowAggregates({
				transport,
				queryClient,
				scope,
				cache: snapshots,
				clock: options.clock,
				limitDates: domains.api.snapshot.limitDates,
				previewWindow: domains.api.snapshot.previewWindow
			});
			const api = {
				...domains.api,
				snapshot: {
					...domains.api.snapshot,
					...snapshotAggregates.api
				}
			};
			const queries = {
				...domains.queries,
				snapshot: {
					...domains.queries.snapshot,
					...snapshotAggregates.queries
				}
			};
			const miniCurves = new MiniCurveRepository({
				origin,
				schemaVersion: Number.parseInt(options.schemaVersion ?? "1", 10) || 1,
				storage: options.persistentStorage
			});
			const miniCurveScheduler = new MiniCurveScheduler();
			const identityFromAuthResult = (result) => {
				const user = result.user_info && typeof result.user_info === "object" ? result.user_info : result;
				return {
					principal: String(user.id ?? user.user_id ?? "authenticated"),
					entitlement: String(user.vip_expiration ?? user.entitlement ?? "normal")
				};
			};
			const invalidateDomains = async (...names) => {
				await queryClient.invalidateQueries({ predicate: (query) => names.includes(queryDomain(query) ?? "") });
			};
			const invalidateCustomIndex = async (indexCode) => {
				await queryClient.invalidateQueries({ predicate: (query) => queryDomain(query) === "custom-index" && (!indexCode || query.queryKey[4] === "definitions" || query.queryKey[4] === "my-definitions" || query.queryKey.some((part) => part === indexCode)) });
			};
			const mutations = {
				auth: {
					login: async (input, next) => {
						const result = await domains.api.auth.login(input);
						await changeIdentity(next ?? identityFromAuthResult(result));
						return result;
					},
					register: async (input, next) => {
						const result = await domains.api.auth.register(input);
						await changeIdentity(next ?? identityFromAuthResult(result));
						return result;
					},
					resetPassword: async (input) => {
						const result = await domains.api.auth.resetPassword(input);
						await changeIdentity({
							principal: "anonymous",
							entitlement: "public"
						});
						return result;
					},
					updateSnapshotPreviewProfile: async (profile, input) => {
						const result = await domains.api.auth.updateSnapshotPreviewProfile(profile, input);
						await invalidateDomains("auth");
						return result;
					},
					revealApiToken: domains.api.auth.revealApiToken,
					regenerateApiToken: async () => {
						const result = await domains.api.auth.regenerateApiToken();
						await queryClient.invalidateQueries({ queryKey: domains.queries.auth.apiTokenStatus().queryKey });
						return result;
					}
				},
				payment: {
					createOrder: domains.api.payment.createOrder,
					acknowledgeTerminal: async (status) => {
						if (status === "PAID") await queryClient.invalidateQueries({ predicate: (query) => query.queryKey[0] === "onclaw-api" });
					}
				},
				customIndex: {
					create: async (input) => {
						const result = await domains.api.customIndex.create(input);
						await invalidateCustomIndex();
						return result;
					},
					update: async (code, input) => {
						const result = await domains.api.customIndex.update(code, input);
						await invalidateCustomIndex(code);
						return result;
					},
					preview: domains.api.customIndex.preview,
					schedule: async (code, input) => {
						const result = await domains.api.customIndex.schedule(code, input);
						await invalidateCustomIndex(code);
						return result;
					},
					build: async (code) => {
						const result = await domains.api.customIndex.build(code);
						await invalidateCustomIndex(code);
						return result;
					},
					lifecycle: async (code, action) => {
						const result = await domains.api.customIndex.lifecycle(code, action);
						await invalidateCustomIndex(code);
						return result;
					},
					completeBuild: invalidateCustomIndex
				}
			};
			async function changeIdentity(next) {
				await queryClient.cancelQueries({ predicate: (query) => query.queryKey[0] === "onclaw-api" });
				queryClient.removeQueries({ predicate: (query) => query.queryKey[0] === "onclaw-api" });
				snapshots.clear();
				identity = {
					principal: next.principal ?? "anonymous",
					entitlement: next.entitlement ?? "public",
					generation: identity.generation + 1
				};
			}
			return {
				origin,
				transport,
				queryClient,
				api,
				queries,
				mutations,
				snapshots,
				miniCurves,
				miniCurveScheduler,
				identity: () => ({ ...identity }),
				changeIdentity,
				invalidateDomains,
				clear: async () => {
					await queryClient.cancelQueries();
					queryClient.clear();
					snapshots.clear();
					miniCurves.clearMemory();
				}
			};
		}
		//#endregion
		//#region src/api/sdkRuntime.ts
		const sharedQueryClient = new QueryClient({ defaultOptions: {
			queries: {
				staleTime: 300 * 1e3,
				gcTime: 1440 * 60 * 1e3,
				refetchOnWindowFocus: false,
				refetchOnReconnect: true,
				refetchOnMount: false,
				retry: 1
			},
			mutations: { retry: false }
		} });
		const axiosTransport = {
			origin: getHttpBaseURL(),
			async request(path, options = {}) {
				return (await httpClient.request({
					url: path,
					method: options.method ?? "GET",
					params: options.query,
					data: options.body,
					signal: options.signal,
					headers: options.headers,
					tableDataMode: options.table
				})).data;
			}
		};
		const onclawRuntime = createOnclawRuntime({
			baseUrl: getHttpBaseURL(),
			transport: axiosTransport,
			queryClient: sharedQueryClient,
			schemaVersion: "1"
		});
		/**
		* Keep SDK-owned identity, freshness and retry semantics while allowing the
		* application compatibility layer to retain its narrower response DTO type.
		*/
		function sdkQueryPolicy(descriptor) {
			return {
				queryKey: descriptor.queryKey,
				staleTime: descriptor.staleTime,
				gcTime: descriptor.gcTime,
				retry: descriptor.retry
			};
		}
		//#endregion
		//#region src/api/modules/auth.ts
		async function getLegalDocument(documentType) {
			return loadLegalDocument(documentType);
		}
		async function getMyApiTokenStatus() {
			return onclawRuntime.api.auth.apiTokenStatus();
		}
		async function revealMyApiToken() {
			return onclawRuntime.mutations.auth.revealApiToken();
		}
		async function regenerateMyApiToken() {
			return onclawRuntime.mutations.auth.regenerateApiToken();
		}
		async function updateSnapshotPreviewProfile(profileName, profile) {
			const storedProfile = serializeSnapshotPreviewProfile(profile);
			return onclawRuntime.mutations.auth.updateSnapshotPreviewProfile(profileName, {
				schema_version: 1,
				...storedProfile
			});
		}
		//#endregion
		//#region src/runtime/query-client.ts
		async function clearIdentitySensitiveQueries(identity = {
			principal: "anonymous",
			entitlement: "public"
		}) {
			await onclawRuntime.changeIdentity(identity);
		}
		//#endregion
		//#region src/runtime/storage-migration.ts
		function readMigratedStorageValue(storage, canonicalKey, legacyKey) {
			if (!storage) return null;
			const canonical = storage.getItem(canonicalKey);
			if (canonical !== null) return canonical;
			const legacy = storage.getItem(legacyKey);
			if (legacy === null) return null;
			try {
				storage.setItem(canonicalKey, legacy);
				storage.removeItem(legacyKey);
			} catch {}
			return legacy;
		}
		function removeStorageKeys(storage, ...keys) {
			if (!storage) return;
			for (const key of keys) storage.removeItem(key);
		}
		//#endregion
		//#region src/utils/accessPolicy.ts
		function isVipExpirationActive(vipExpiration, now = /* @__PURE__ */ new Date()) {
			if (!vipExpiration) return false;
			const expirationTime = new Date(vipExpiration).getTime();
			return Number.isFinite(expirationTime) && expirationTime > now.getTime();
		}
		function resolveAccountTier(userInfo, now = /* @__PURE__ */ new Date()) {
			if (userInfo?.is_superuser) return "admin";
			if (isVipExpirationActive(userInfo?.vip_expiration, now)) return "vip";
			return "normal";
		}
		//#endregion
		//#region src/stores/useAppStore.tsx
		const THEME_STORAGE_KEY = "onclaw-theme-mode";
		const LEGACY_THEME_STORAGE_KEY = "finagent-theme-mode";
		const LINKER_CLICK_MODE_STORAGE_KEY = "onclaw-linker-click-mode";
		const LEGACY_LINKER_CLICK_MODE_STORAGE_KEY = "finagent-linker-click-mode";
		const DEFAULT_THEME_MODE = "dark";
		function readInitialThemeMode() {
			const stored = readMigratedStorageValue(void 0, THEME_STORAGE_KEY, LEGACY_THEME_STORAGE_KEY);
			return stored === "light" || stored === "dark" ? stored : DEFAULT_THEME_MODE;
		}
		function applyThemeMode(mode) {
			if (typeof document === "undefined" || getRuntimeTarget() === "harness") return;
			document.documentElement.dataset.theme = mode;
			document.documentElement.classList.toggle("dark", mode === "dark");
			document.documentElement.classList.toggle("light", mode === "light");
		}
		function readLegacyLightweightProfile() {
			try {
				return;
			} catch {
				return;
			}
		}
		function readInitialLinkerClickMode() {
			return readMigratedStorageValue(void 0, LINKER_CLICK_MODE_STORAGE_KEY, LEGACY_LINKER_CLICK_MODE_STORAGE_KEY) === "popup" ? "popup" : "link";
		}
		const listeners = /* @__PURE__ */ new Set();
		let state;
		function publish(next) {
			const merged = {
				...state,
				...next
			};
			state = {
				...merged,
				cellDisplayConfig: merged.previewProfiles.ladder.cellDisplayConfig,
				showMinuteCurve: merged.previewProfiles.ladder.showMinuteCurve,
				accessTier: resolveAccountTier(merged.userInfo)
			};
			for (const listener of [...listeners]) listener();
		}
		function identityKey(info) {
			if (!info) return "anonymous";
			const value = info;
			return JSON.stringify([
				value.id,
				value.username,
				value.is_superuser,
				value.vip_expiration
			]);
		}
		const actions = {
			setActiveNav: (activeNav) => publish({ activeNav }),
			setPageNavigationMeta: (page, meta) => publish({ pageNavigationMeta: {
				...state.pageNavigationMeta,
				[page]: meta
			} }),
			setBaseDate: (baseDate) => publish({ baseDate }),
			setDateRange: (startDate, endDate) => publish({
				startDate,
				endDate
			}),
			setActiveTopicId: (activeTopicId) => publish({ activeTopicId }),
			setActiveLadderTopicId: (activeLadderTopicId) => publish({ activeLadderTopicId }),
			updatePreviewConfig: (profileName, category, status, fields) => {
				const sanitizedFields = sanitizeSnapshotConfigUpdate(category, status, fields);
				const profile = state.previewProfiles[profileName];
				publish({ previewProfiles: {
					...state.previewProfiles,
					[profileName]: {
						...profile,
						cellDisplayConfig: {
							...profile.cellDisplayConfig,
							[category]: {
								...profile.cellDisplayConfig[category],
								[status]: sanitizedFields
							}
						}
					}
				} });
			},
			updateConfig: (category, status, fields) => {
				actions.updatePreviewConfig("ladder", category, status, fields);
			},
			togglePreviewMinuteCurve: (profileName) => {
				const profile = state.previewProfiles[profileName];
				publish({ previewProfiles: {
					...state.previewProfiles,
					[profileName]: {
						...profile,
						showMinuteCurve: !profile.showMinuteCurve
					}
				} });
			},
			toggleMinuteCurve: () => actions.togglePreviewMinuteCurve("ladder"),
			updatePreviewStockFilters: (profileName, filters) => {
				const profile = state.previewProfiles[profileName];
				publish({ previewProfiles: {
					...state.previewProfiles,
					[profileName]: {
						...profile,
						stockFilters: { ...filters }
					}
				} });
			},
			savePreviewProfile: async (profileName, profileOverride) => {
				const settings = await updateSnapshotPreviewProfile(profileName, profileOverride ?? state.previewProfiles[profileName]);
				if (state.userInfo) publish({ userInfo: {
					...state.userInfo,
					snapshot_preview_settings: settings
				} });
				if (profileName === "lightweight");
			},
			updateLinkerSettings: (settings) => {
				publish({ linkerSettings: {
					...state.linkerSettings,
					...settings
				} });
				if (settings.clickMode);
			},
			setLinkerState: (linkerState) => publish({ linkerState: {
				...state.linkerState,
				...linkerState
			} }),
			setToken: (token) => {
				if (identityKey(state.userInfo) !== "anonymous" && token === null) clearIdentitySensitiveQueries({
					principal: "anonymous",
					entitlement: "public"
				});
				publish({
					token,
					previewProfilesHydrated: token === state.token ? state.previewProfilesHydrated : false
				});
				setPersistedToken(token);
			},
			setUserInfo: (userInfo) => {
				const changedIdentity = identityKey(state.userInfo) !== identityKey(userInfo);
				publish({
					userInfo,
					previewProfilesHydrated: userInfo !== null,
					previewProfiles: userInfo ? resolveSnapshotPreviewProfiles(userInfo.snapshot_preview_settings, readLegacyLightweightProfile()) : createDefaultSnapshotPreviewProfiles()
				});
				if (changedIdentity) clearIdentitySensitiveQueries({
					principal: userInfo ? String(userInfo.id) : "anonymous",
					entitlement: userInfo?.vip_expiration ?? (userInfo?.is_superuser ? "admin" : "normal")
				});
			},
			setThemeMode: (themeMode) => {
				publish({ themeMode });
				applyThemeMode(themeMode);
			}
		};
		const initialProfiles = createDefaultSnapshotPreviewProfiles();
		const initialThemeMode = readInitialThemeMode();
		state = {
			activeNav: "lianbantidui",
			pageNavigationMeta: {},
			baseDate: "",
			startDate: "",
			endDate: "",
			activeTopicId: null,
			activeLadderTopicId: null,
			previewProfiles: initialProfiles,
			previewProfilesHydrated: false,
			cellDisplayConfig: initialProfiles.ladder.cellDisplayConfig,
			showMinuteCurve: initialProfiles.ladder.showMinuteCurve,
			linkerSettings: {
				isSyncing: false,
				syncDirection: "ths-to-tdx",
				isUseSourceCode: false,
				useSourceCode: "none",
				targetCode: "600519",
				clickMode: readInitialLinkerClickMode()
			},
			linkerState: {
				thsCode: "未获取",
				tdxCode: "未获取",
				runtimeHealth: "idle",
				authorizationState: "uninitialized",
				linkerMessage: "",
				expiresAt: 0,
				isRefreshingAuth: false
			},
			token: null,
			userInfo: null,
			accessTier: resolveAccountTier(null),
			themeMode: initialThemeMode,
			...actions
		};
		const appStore = {
			getSnapshot: () => state,
			subscribe(listener) {
				listeners.add(listener);
				return () => listeners.delete(listener);
			},
			resetForTests() {
				actions.setToken(null);
				actions.setUserInfo(null);
				actions.setActiveNav("lianbantidui");
			}
		};
		function AppProvider({ children }) {
			const themeMode = useAppStore().themeMode;
			(0, react.useEffect)(() => applyThemeMode(themeMode), [themeMode]);
			return children;
		}
		function useAppStore() {
			return (0, react.useSyncExternalStore)(appStore.subscribe, appStore.getSnapshot, appStore.getSnapshot);
		}
		//#endregion
		//#region src/hooks/stockSelectionEvent.ts
		const STOCK_SELECTION_EVENT = "onclaw:stock-selection";
		function dispatchStockSelectionEvent(code) {
			window.dispatchEvent(new CustomEvent(STOCK_SELECTION_EVENT, { detail: { code } }));
		}
		//#endregion
		//#region src/hooks/useStockClick.ts
		function useStockClick() {
			const { linkerSettings } = useAppStore();
			return (0, react.useCallback)(async (code, fallbackPopupAction) => {
				if (!code) return;
				const code6 = code.match(/\d{6}/)?.[0] || code.slice(0, 6);
				dispatchStockSelectionEvent(code6);
				if (platformAPI.stockLinker.isSupported && linkerSettings.clickMode === "link") try {
					const [thsResult, tdxResult] = await Promise.all([platformAPI.stockLinker.setCode("ths", code6), platformAPI.stockLinker.setCode("tdx", code6)]);
					if (thsResult.ok && thsResult.accepted && tdxResult.ok && tdxResult.accepted) return;
					console.error("Native stock linking was rejected:", {
						thsResult,
						tdxResult
					});
				} catch (error) {
					console.error("Native stock linking failed:", error);
				}
				if (fallbackPopupAction) fallbackPopupAction();
			}, [linkerSettings.clickMode]);
		}
		//#endregion
		//#region src/hooks/useSnapshotPreviewStockClick.ts
		function useSnapshotPreviewStockClick(defaultAnchorDate) {
			const dispatchStockClick = useStockClick();
			const [popupSelection, setPopupSelection] = (0, react.useState)(null);
			return {
				handleStockClick: (0, react.useCallback)((stock, anchorDate = defaultAnchorDate) => {
					dispatchStockClick(stock.ts_code, () => {
						setPopupSelection({
							stock,
							anchorDate: anchorDate || defaultAnchorDate
						});
					});
				}, [defaultAnchorDate, dispatchStockClick]),
				popupSelection,
				closeStockPopup: (0, react.useCallback)(() => {
					setPopupSelection(null);
				}, [])
			};
		}
		function getMarketBadge(tsCode) {
			if (tsCode.startsWith("688")) return {
				label: "科",
				color: "bg-[var(--status-info-badge)]",
				textColor: "text-[var(--badge-fg)]"
			};
			if (tsCode.startsWith("300")) return {
				label: "创",
				color: "bg-[var(--tag-relation-1-bg)]",
				textColor: "text-[var(--badge-fg)]"
			};
			if (tsCode.startsWith("8") || tsCode.startsWith("4")) return {
				label: "北",
				color: "bg-[var(--status-danger-badge)]",
				textColor: "text-[var(--badge-fg)]"
			};
			return null;
		}
		function getCellStatus(snapshot) {
			if (!snapshot) return "normal";
			if (snapshot.is_suspended) return "suspended";
			const status = snapshot.limit_status ?? 0;
			if (status === 1) return "limitUp";
			if (status === -1) return "limitDown";
			if (status === 2) return "failedLimit";
			return "normal";
		}
		const CELL_STATUS_COLORS = {
			suspended: {
				bg: "var(--market-suspended-bg)",
				text: "var(--market-suspended-fg)",
				border: "var(--market-suspended-border)",
				curve: "var(--market-state-curve)",
				baseline: "var(--market-state-baseline)",
				badge: "var(--market-suspended-badge)",
				badgeText: "var(--badge-fg)"
			},
			limitUp: {
				bg: "var(--market-limit-up-bg)",
				text: "var(--market-limit-up-fg)",
				border: "var(--market-limit-up-border)",
				curve: "var(--market-state-curve)",
				baseline: "var(--market-state-baseline)",
				badge: "var(--market-limit-up-badge)",
				badgeText: "var(--badge-fg)"
			},
			limitDown: {
				bg: "var(--market-limit-down-bg)",
				text: "var(--market-limit-down-fg)",
				border: "var(--market-limit-down-border)",
				curve: "var(--market-state-curve)",
				baseline: "var(--market-state-baseline)",
				badge: "var(--market-limit-down-badge)",
				badgeText: "var(--badge-fg)"
			},
			failedLimit: {
				bg: "var(--market-failed-limit-bg)",
				text: "var(--market-failed-limit-fg)",
				border: "var(--market-failed-limit-border)",
				curve: "var(--market-state-curve)",
				baseline: "var(--market-state-baseline)",
				badge: "var(--market-failed-limit-badge)",
				badgeText: "var(--badge-fg)"
			},
			normal: {
				bg: "var(--market-cell)",
				text: "var(--market-text-secondary)",
				border: "var(--market-grid)",
				curve: "var(--market-curve)",
				baseline: "var(--market-baseline)",
				badge: "var(--market-grid-strong)",
				badgeText: "var(--badge-fg)"
			}
		};
		const GROUP_COLORS = {
			consecutive: "var(--group-consecutive)",
			rebound: "var(--group-rebound)",
			firstLimit: "var(--group-first-limit)",
			failedLimit: "var(--group-failed-limit)",
			limitDown: "var(--group-limit-down)",
			preview: "color-mix(in srgb, var(--accent) 24%, var(--bg-secondary))",
			express: "color-mix(in srgb, #3b82f6 24%, var(--bg-secondary))",
			notice: "color-mix(in srgb, #a855f7 24%, var(--bg-secondary))",
			other: "var(--group-other)"
		};
		//#endregion
		//#region src/api/ladderGroups.ts
		const LADDER_GROUPS = [
			{
				apiId: "continue_board",
				sectionId: "consecutive",
				label: "连板梯队"
			},
			{
				apiId: "rebound",
				sectionId: "rebound",
				label: "反复梯队"
			},
			{
				apiId: "first_board",
				sectionId: "firstLimit",
				label: "首板梯队"
			},
			{
				apiId: "failed_limit",
				sectionId: "failedLimit",
				label: "炸板梯队"
			},
			{
				apiId: "limit_down",
				sectionId: "limitDown",
				label: "跌停梯队"
			}
		];
		const LADDER_GROUP_ORDER = LADDER_GROUPS.map((group) => group.apiId);
		const LADDER_GROUP_BY_ID = Object.fromEntries(LADDER_GROUPS.map((group) => [group.apiId, group]));
		function isLadderGroupId(value) {
			return LADDER_GROUP_ORDER.includes(value);
		}
		function aggregateLadderGroupCounts(counts) {
			return {
				limitUp: (counts.first_board ?? 0) + (counts.continue_board ?? 0) + (counts.rebound ?? 0),
				failedLimit: counts.failed_limit ?? 0,
				limitDown: counts.limit_down ?? 0
			};
		}
		function ladderGroupHeadlineBucket(group) {
			if (!group) return void 0;
			if (group === "failed_limit") return "failedLimit";
			if (group === "limit_down") return "limitDown";
			return "limitUp";
		}
		//#endregion
		//#region src/hooks/preview/buildLimitInfoSections.ts
		const LIMIT_INFO_GROUP_LABELS = {
			consecutive: "连板梯队",
			rebound: "反复梯队",
			firstLimit: "首板梯队",
			failedLimit: "炸板梯队",
			limitDown: "跌停梯队",
			other: "其他分组"
		};
		function buildLimitInfoSections({ stockMap, activeTopicId, baseDate, windowState }) {
			const stocks = [...stockMap.values()];
			const filteredStocks = activeTopicId ? stocks.filter((stock) => stock.topics?.includes(activeTopicId)) : stocks;
			if (windowState) {
				const orderedGroupIds = [...windowState.groupOrder, ...Object.keys(windowState.groupedCodes).filter((groupId) => !windowState.groupOrder.includes(groupId))];
				const stocksByCode = new Map(filteredStocks.map((stock) => [stock.ts_code, stock]));
				const groupedSections = orderedGroupIds.map((groupId) => {
					const groupedStocks = (windowState.groupedCodes[groupId] || []).map((code) => stocksByCode.get(code)).filter((stock) => !!stock);
					if (groupedStocks.length === 0) return null;
					const sectionId = isLadderGroupId(groupId) ? LADDER_GROUP_BY_ID[groupId].sectionId : groupId in GROUP_COLORS ? groupId : "other";
					return {
						id: sectionId,
						title: isLadderGroupId(groupId) ? LADDER_GROUP_BY_ID[groupId].label : LIMIT_INFO_GROUP_LABELS[groupId] || groupId,
						subtitle: `${groupedStocks.length} 只股票`,
						color: GROUP_COLORS[sectionId],
						stocks: groupedStocks
					};
				}).filter((section) => section !== null);
				if (groupedSections.length > 0) return groupedSections;
			}
			const consecutiveStocks = [];
			const reboundStocks = [];
			const firstLimitStocks = [];
			const failedLimitStocks = [];
			const limitDownStocks = [];
			const otherStocks = [];
			for (const stock of filteredStocks) {
				const baseSnapshot = stock.snapshots.get(baseDate);
				if (!baseSnapshot) continue;
				const limitStatus = baseSnapshot.limit_status ?? 0;
				if (limitStatus === -1) limitDownStocks.push(stock);
				else if (limitStatus === 2) failedLimitStocks.push(stock);
				else if (limitStatus === 1) {
					const consecutiveCount = baseSnapshot.consecutive_count ?? 0;
					const limitCount = baseSnapshot.limit_count ?? 0;
					const limitBoardCount = baseSnapshot.limit_board_count ?? 0;
					if (consecutiveCount < 1 || limitBoardCount < consecutiveCount || limitCount < limitBoardCount) otherStocks.push(stock);
					else if (consecutiveCount > 1) consecutiveStocks.push(stock);
					else if (limitBoardCount > 1) reboundStocks.push(stock);
					else firstLimitStocks.push(stock);
				}
			}
			const sortStocks = (list) => list.sort((left, right) => (right.consecutive_count || 0) - (left.consecutive_count || 0));
			const createSection = (id, title, stockList) => ({
				id,
				title,
				subtitle: `${stockList.length}只股票`,
				color: GROUP_COLORS[id],
				stocks: stockList
			});
			return [
				createSection("consecutive", "连板梯队", sortStocks(consecutiveStocks)),
				createSection("rebound", "反复梯队", sortStocks(reboundStocks)),
				createSection("firstLimit", "首板梯队", sortStocks(firstLimitStocks)),
				createSection("failedLimit", "炸板梯队", sortStocks(failedLimitStocks)),
				createSection("limitDown", "跌停梯队", sortStocks(limitDownStocks)),
				createSection("other", "其他分组", sortStocks(otherStocks))
			].filter((section) => section.stocks.length > 0);
		}
		//#endregion
		//#region src/hooks/preview/buildMarketPreviewSections.ts
		function buildMarketPreviewSections({ stockMap, activeTopicId, normalizedStockCodes }) {
			const requestedCodes = new Set(normalizedStockCodes);
			const stocks = [...stockMap.values()].filter((stock) => requestedCodes.size === 0 || requestedCodes.has(stock.ts_code));
			const filteredStocks = activeTopicId ? stocks.filter((stock) => stock.topics?.includes(activeTopicId)) : stocks;
			const requestedOrder = new Map(normalizedStockCodes.map((code, index) => [code, index]));
			const orderedStocks = [...filteredStocks].sort((left, right) => {
				const leftOrder = requestedOrder.get(left.ts_code);
				const rightOrder = requestedOrder.get(right.ts_code);
				if (leftOrder != null && rightOrder != null) return leftOrder - rightOrder;
				if (leftOrder != null) return -1;
				if (rightOrder != null) return 1;
				return left.ts_code.localeCompare(right.ts_code, "zh-CN");
			});
			return orderedStocks.length > 0 ? [{
				id: "consecutive",
				title: "连板梯队",
				subtitle: `${orderedStocks.length}只股票`,
				color: GROUP_COLORS.consecutive,
				stocks: orderedStocks
			}] : [];
		}
		//#endregion
		//#region src/runtime/page-activity.tsx
		const PageActivityContext = (0, react.createContext)({
			visible: true,
			scopeKey: "standalone"
		});
		function PageActivityProvider({ value, children }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PageActivityContext.Provider, {
				value,
				children
			});
		}
		function usePageActivity() {
			return (0, react.useContext)(PageActivityContext);
		}
		//#endregion
		//#region packages/api-client/src/experimental.ts
		function createSnapshotRuntimeExperimental(runtime) {
			const getRuntime = async (params, signal) => {
				const codes = stableStrings(params.codes);
				return codes.length ? runtime.transport.request("/market/snapshot/runtime", {
					method: "POST",
					body: {
						codes,
						group: params.group ?? "default"
					},
					signal
				}) : runtime.transport.request("/market/snapshot/runtime", {
					query: { group: params.group ?? "default" },
					signal
				});
			};
			const selectMiniCurves = (codes, signal) => runtime.transport.request("/market/snapshot/runtime/mini-curves", {
				method: "POST",
				body: { codes: stableStrings(codes) },
				signal
			});
			return {
				api: {
					getRuntime,
					selectMiniCurves
				},
				queries: { runtime: (params) => ({
					queryKey: [
						"onclaw-api",
						"experimental-snapshot-runtime",
						runtime.origin,
						runtime.identity(),
						params.group ?? "default",
						stableStrings(params.codes)
					],
					queryFn: ({ signal }) => getRuntime(params, signal),
					staleTime: TTL.immediate,
					gcTime: TTL.thirtyMinutes,
					retry: false
				}) }
			};
		}
		function snapshotRuntimePollInterval(active, mode) {
			if (!active) return false;
			if (mode === "realtime-active") return 6e4;
			if (mode === "trading-day-unknown") return 3e5;
			return false;
		}
		//#endregion
		//#region src/api/stockCode.ts
		function normalizeStockCode(code) {
			const normalized = String(code ?? "").trim().toUpperCase();
			if (!normalized) return "";
			if (normalized.includes(".")) {
				const [symbol, suffix] = normalized.split(".", 2);
				if (/^\d+$/.test(symbol) && [
					"SH",
					"SZ",
					"BJ"
				].includes(suffix)) return `${symbol.padStart(6, "0")}.${suffix}`;
			}
			if (/^\d+$/.test(normalized)) {
				const symbol = normalized.padStart(6, "0");
				if (symbol.startsWith("6")) return `${symbol}.SH`;
				if (symbol.startsWith("0") || symbol.startsWith("3")) return `${symbol}.SZ`;
				if (symbol.startsWith("4") || symbol.startsWith("8") || symbol.startsWith("9")) return `${symbol}.BJ`;
				return symbol;
			}
			return normalized;
		}
		//#endregion
		//#region src/api/snapshotPreviewRouting.ts
		function normalizeSnapshotPreviewStockCodes(stockCodes = []) {
			return [...new Set(stockCodes.map((code) => normalizeStockCode(code)).filter(Boolean))];
		}
		//#endregion
		//#region src/api/modules/snapshot.ts
		let cachedLimitDates = [];
		const harnessReloadScopes = /* @__PURE__ */ new Set();
		const experimentalSnapshot = createSnapshotRuntimeExperimental(onclawRuntime);
		async function getLimitDates() {
			const data = await onclawRuntime.api.snapshot.limitDates();
			cachedLimitDates = Array.isArray(data) ? [...data].sort((a, b) => a.localeCompare(b)) : [];
			return cachedLimitDates;
		}
		function constrainedParams(params) {
			return {
				...params,
				cursor: Math.max(0, params.cursor),
				size: Math.min(120, Math.max(1, params.size))
			};
		}
		function createSnapshotWindowRequestBody(params) {
			const { source, scope_revision: scopeRevision, limit_events, convertible, ...body } = constrainedParams(params);
			return {
				...body,
				group: params.group ?? "default",
				stock_scope: params.stock_scope ?? [],
				...source === "limit_info_snapshot" ? {
					scope_revision: scopeRevision ?? 0,
					limit_events: !!limit_events,
					convertible: !!convertible
				} : {}
			};
		}
		async function requestSnapshotWindow(params) {
			const body = createSnapshotWindowRequestBody(params);
			return params.source ? onclawRuntime.api.snapshot.previewWindow({
				...body,
				source: params.source
			}) : onclawRuntime.api.snapshot.window(body);
		}
		async function getIncrementalWindow(params, targetDates, runtimeCodeScope = false) {
			const constrained = constrainedParams(params);
			const dates = [...new Set(targetDates.filter(Boolean))];
			if (dates.length === 0 && constrained.start_date) dates.push(constrained.start_date);
			if (getRuntimeTarget() === "harness") {
				const scopeKey = onclawRuntime.snapshots.selectionKey(params.source ?? "market_snapshot", constrained);
				return onclawRuntime.api.snapshot.previewWindow({
					...createSnapshotWindowRequestBody({
						...params,
						start_date: dates[0] ?? constrained.start_date,
						end_date: dates[dates.length - 1] ?? constrained.end_date,
						cursor: 0,
						size: Math.max(1, dates.length)
					}),
					__onclaw_cache: {
						mode: harnessReloadScopes.delete(scopeKey) ? "reload" : "default",
						requested_dates: dates
					},
					source: params.source ?? "market_snapshot"
				});
			}
			const source = params.source ?? "market_snapshot";
			return onclawRuntime.snapshots.fetchWindow({
				source,
				params: constrained,
				dates,
				selection: source === "limit_info_snapshot" ? "derived" : "provided",
				loader: ({ startDate, endDate, dates: rangeDates, codes }) => requestSnapshotWindow({
					...params,
					stock_scope: codes.length > 0 ? [...codes] : params.stock_scope,
					scope_revision: runtimeCodeScope ? 0 : params.scope_revision,
					start_date: startDate,
					end_date: endDate,
					cursor: 0,
					size: Math.max(1, rangeDates.length)
				})
			});
		}
		function getIncrementalSnapshotWindow(params, targetDates) {
			return getIncrementalWindow(params, targetDates);
		}
		function getSnapshotRuntimeWithWindow(params) {
			return onclawRuntime.api.snapshot.runtimeWithWindow(params);
		}
		function getSnapshotWindowWithRuntime(params) {
			return onclawRuntime.api.snapshot.windowWithRuntime(params);
		}
		function invalidateIncrementalSnapshotWindow(params, options) {
			if (getRuntimeTarget() === "harness") harnessReloadScopes.add(onclawRuntime.snapshots.selectionKey(params.source ?? "market_snapshot", constrainedParams(params)));
			const constrained = constrainedParams(params);
			const codes = constrained.stock_scope ?? [];
			onclawRuntime.snapshots.invalidate({
				selectionKey: onclawRuntime.snapshots.selectionKey(params.source ?? "market_snapshot", constrained),
				dates: codes.length ? options?.targetDates : void 0,
				codes
			});
		}
		async function getSnapshotRuntime(params) {
			return onclawRuntime.api.snapshot.runtime({
				codes: normalizeSnapshotPreviewStockCodes(params.codes),
				group: params.group ?? "default"
			});
		}
		async function selectSnapshotRuntimeMiniCurves(codes) {
			return experimentalSnapshot.api.selectMiniCurves(normalizeSnapshotPreviewStockCodes(codes));
		}
		function createSnapshotWindowListQueryKey(params) {
			return onclawRuntime.queries.snapshot.window(constrainedParams(params)).queryKey;
		}
		function createSnapshotPreviewWindowListQueryKey(params) {
			return onclawRuntime.queries.snapshot.previewWindow(constrainedParams(params)).queryKey;
		}
		function createSnapshotRuntimeQueryKey(params) {
			return experimentalSnapshot.queries.runtime({
				...params,
				codes: normalizeSnapshotPreviewStockCodes(params.codes)
			}).queryKey;
		}
		//#endregion
		//#region src/api/snapshotRuntime.ts
		function getShanghaiDateString(now = /* @__PURE__ */ new Date()) {
			const parts = new Intl.DateTimeFormat("en-CA", {
				timeZone: "Asia/Shanghai",
				year: "numeric",
				month: "2-digit",
				day: "2-digit"
			}).formatToParts(now);
			return `${parts.find((part) => part.type === "year")?.value ?? "0000"}-${parts.find((part) => part.type === "month")?.value ?? "00"}-${parts.find((part) => part.type === "day")?.value ?? "00"}`;
		}
		function buildSnapshotDateList(limitDates, marketDate, options) {
			if (!limitDates || limitDates.length === 0) return [];
			const sorted = [...limitDates].sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
			const lastStaticDate = sorted[sorted.length - 1];
			if ((options?.includeMarketDate ?? false) && marketDate && new Date(lastStaticDate) < new Date(marketDate)) return [...sorted, marketDate];
			return sorted;
		}
		//#endregion
		//#region src/runtime/market-session.ts
		const SHANGHAI_CLOCK = new Intl.DateTimeFormat("en-CA", {
			timeZone: "Asia/Shanghai",
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
			weekday: "short",
			hour: "2-digit",
			minute: "2-digit",
			hourCycle: "h23"
		});
		function marketRuntimeSession(now = /* @__PURE__ */ new Date()) {
			const parts = SHANGHAI_CLOCK.formatToParts(now);
			const value = (type) => parts.find((part) => part.type === type)?.value ?? "";
			const date = `${value("year")}-${value("month")}-${value("day")}`;
			const minute = Number(value("hour")) * 60 + Number(value("minute"));
			const weekday = value("weekday");
			if (weekday === "Sat" || weekday === "Sun") return {
				date,
				key: `${date}:closed`,
				active: false
			};
			if (minute < 555) return {
				date,
				key: `${date}:pre`,
				active: false
			};
			if (minute <= 690) return {
				date,
				key: `${date}:morning`,
				active: true
			};
			if (minute < 692) return {
				date,
				key: `${date}:morning`,
				active: false
			};
			if (minute < 780) return {
				date,
				key: `${date}:lunch`,
				active: false
			};
			if (minute <= 900) return {
				date,
				key: `${date}:afternoon`,
				active: true
			};
			if (minute < 902) return {
				date,
				key: `${date}:afternoon`,
				active: false
			};
			return {
				date,
				key: `${date}:after`,
				active: false
			};
		}
		//#endregion
		//#region src/hooks/useMarketRuntime.ts
		function useMarketRuntimeSession() {
			const [session, setSession] = (0, react.useState)(() => marketRuntimeSession());
			(0, react.useEffect)(() => {
				const timer = window.setInterval(() => {
					const next = marketRuntimeSession();
					setSession((current) => current.key === next.key && current.active === next.active ? current : next);
				}, 15e3);
				return () => window.clearInterval(timer);
			}, []);
			return session;
		}
		function useMarketRuntimeSnapshot(params, enabled = true) {
			const { visible } = usePageActivity();
			const session = useMarketRuntimeSession();
			return useQuery({
				...sdkQueryPolicy(createSnapshotRuntimeExperimental(onclawRuntime).queries.runtime(params)),
				queryKey: [...createSnapshotRuntimeQueryKey(params), session.key],
				queryFn: () => getSnapshotRuntime(params),
				enabled: enabled && visible,
				refetchOnWindowFocus: false,
				refetchIntervalInBackground: false,
				refetchInterval: (query) => snapshotRuntimePollInterval(session.active && query.state.data?.is_trading_day !== false, query.state.data?.is_trading_day === null ? "trading-day-unknown" : "realtime-active")
			});
		}
		//#endregion
		//#region src/api/modules/topics.ts
		function topicEventSortValue(event) {
			const value = event.event_date ?? event.date;
			if (!value) return null;
			if (/^\d{4}-\d{2}-\d{2}$/.test(value) || /^\d{4}-\d{2}$/.test(value)) return value;
			return null;
		}
		function normalizeTopicEvents(events) {
			return [...Array.isArray(events) ? events : []].map((event) => ({
				...event,
				date: event.date ?? event.event_date ?? null,
				event_date: event.event_date ?? event.date ?? null
			})).sort((left, right) => {
				const leftDate = topicEventSortValue(left);
				const rightDate = topicEventSortValue(right);
				if (leftDate && rightDate && leftDate !== rightDate) return rightDate.localeCompare(leftDate);
				if (leftDate && !rightDate) return -1;
				if (!leftDate && rightDate) return 1;
				return (left.event_id ?? left.content).localeCompare(right.event_id ?? right.content);
			});
		}
		function normalizeTopicItem(raw) {
			return {
				topic_id: raw.topic_id ?? "",
				topic_name: raw.topic_name ?? "",
				category: raw.category ?? "",
				stock_count: raw.stock_count ?? 0,
				updated_at: raw.updated_at ?? null,
				latest_date: raw.latest_date ?? null,
				latest_event: raw.latest_event ?? null
			};
		}
		function normalizeTopicDetail(raw) {
			return {
				topic_id: raw.topic_id ?? "",
				topic_name: raw.topic_name ?? "",
				category: raw.category ?? "",
				events: normalizeTopicEvents(raw.events),
				updated_at: raw.updated_at ?? null,
				latest_date: raw.latest_date ?? null
			};
		}
		function normalizeTopicTree(raw) {
			return {
				topic_id: raw.topic_id ?? "",
				counts: {
					tree_nodes: raw.counts?.tree_nodes ?? 0,
					stock_occurrences: raw.counts?.stock_occurrences ?? 0,
					unique_stocks: raw.counts?.unique_stocks ?? 0
				},
				tree: raw.tree ?? []
			};
		}
		async function getTopicNamesByStocks(stocks) {
			return onclawRuntime.api.topics.namesByStocks(stocks);
		}
		async function getMarketInfo(codes, fields) {
			return onclawRuntime.api.topics.marketInfo(codes, fields);
		}
		async function searchTopics(params) {
			const data = await onclawRuntime.api.topics.search(params);
			return {
				total: data.total ?? 0,
				items: (data.items ?? []).map((item) => normalizeTopicItem(item))
			};
		}
		async function getLatestTopics(limit = 50) {
			const data = await onclawRuntime.api.topics.latest(limit);
			return {
				total: data.total ?? 0,
				items: (data.items ?? []).map((item) => normalizeTopicItem(item))
			};
		}
		async function getTopicDetail(topicId) {
			return normalizeTopicDetail(await onclawRuntime.api.topics.detail(topicId));
		}
		async function getTopicTree(topicId) {
			return normalizeTopicTree(await onclawRuntime.api.topics.tree(topicId));
		}
		//#endregion
		//#region src/api/snapshotCache.ts
		function buildWindowRowKey(tsCode, tradeDate) {
			return `${tradeDate}::${normalizeStockCode(tsCode)}`;
		}
		function unzipSnapshotWindow(payload) {
			const rowsByKey = /* @__PURE__ */ new Map();
			const { columns, rows } = payload.table;
			for (const row of rows) {
				const obj = {};
				columns.forEach((column, index) => {
					obj[column] = row[index];
				});
				const tsCode = normalizeStockCode(typeof obj.ts_code === "string" ? obj.ts_code : "");
				const tradeDate = typeof obj.trade_date === "string" ? obj.trade_date : "";
				if (!tsCode || !tradeDate) continue;
				rowsByKey.set(buildWindowRowKey(tsCode, tradeDate), {
					...obj,
					ts_code: tsCode
				});
			}
			return {
				selectedDate: payload.base_date ?? payload.selected_date ?? "",
				schemaVersion: payload.schema_version,
				staticRevision: payload.static_revision,
				rowsetRevision: payload.rowset_revision,
				orderedDates: payload.structure?.ordered_dates || [],
				orderedCodes: (payload.structure?.ordered_codes || []).map((code) => normalizeStockCode(code)).filter(Boolean),
				groupedCodes: Object.fromEntries(Object.entries(payload.structure?.groups || {}).map(([groupId, codes]) => [groupId, codes.map((code) => normalizeStockCode(code)).filter(Boolean)])),
				groupOrder: (payload.structure?.group_order || []).filter(Boolean),
				codeNames: payload.structure?.names || {},
				rowsByKey
			};
		}
		function snapshotWindowStateToRows(state) {
			if (!state) return [];
			const rows = [];
			for (const tradeDate of state.orderedDates) for (const tsCode of state.orderedCodes) {
				const row = state.rowsByKey.get(buildWindowRowKey(tsCode, tradeDate));
				if (row) rows.push(row);
			}
			return rows;
		}
		function shouldDemandNextLadderGroupFromScroll({ scrollHeight, scrollTop, clientHeight, threshold, userInitiated }) {
			return userInitiated && scrollTop > 0 && scrollHeight - scrollTop - clientHeight < threshold;
		}
		function planLadderViewportFill({ viewportHeight, demanded, counts, statuses, manualDemand }) {
			const contentHeight = LADDER_GROUP_ORDER.reduce((height, group) => {
				const count = counts[group] ?? 0;
				return count > 0 ? height + 28 + count * 52 : height;
			}, 0);
			const requiredHeight = Math.max(0, viewportHeight) + 52;
			if ([...demanded].some((group) => {
				const status = statuses[group];
				return status === "idle" || status === "loading";
			})) return {
				contentHeight,
				requiredHeight,
				nextGroup: null,
				shouldCommit: false
			};
			if (manualDemand || [...demanded].some((group) => statuses[group] === "error")) return {
				contentHeight,
				requiredHeight,
				nextGroup: null,
				shouldCommit: true
			};
			if (viewportHeight <= 0) return {
				contentHeight,
				requiredHeight,
				nextGroup: null,
				shouldCommit: false
			};
			if (contentHeight >= requiredHeight) return {
				contentHeight,
				requiredHeight,
				nextGroup: null,
				shouldCommit: true
			};
			const { next } = findNextDemandedLadderGroup(demanded, counts, LADDER_GROUP_ORDER, statuses);
			return {
				contentHeight,
				requiredHeight,
				nextGroup: next,
				shouldCommit: next === null
			};
		}
		function resolveLadderSnapshotReadMode(activeRuntimeScope) {
			return activeRuntimeScope ? "runtime-with-window" : "window-with-runtime";
		}
		function resolveLadderMarketDataPlan({ baseDate, endDate, marketDate, settledDates }) {
			const hasCurrentTail = endDate === marketDate && !settledDates.includes(marketDate);
			const runtimeOwnsMembership = hasCurrentTail && baseDate === marketDate;
			return {
				readMode: resolveLadderSnapshotReadMode(runtimeOwnsMembership),
				hasCurrentTail,
				pollRuntimeOwner: runtimeOwnsMembership,
				pollWindowGroups: hasCurrentTail && !runtimeOwnsMembership
			};
		}
		function createInitialLadderDemand(firstGroup = LADDER_GROUP_ORDER[0]) {
			return /* @__PURE__ */ new Set([firstGroup]);
		}
		function demandLadderGroup(demanded, group) {
			return demanded.has(group) ? demanded : /* @__PURE__ */ new Set([...demanded, group]);
		}
		function createLadderDemandScope(scopeKey) {
			return {
				scopeKey,
				groups: createInitialLadderDemand()
			};
		}
		function resolveLadderDemandScope(demand, scopeKey) {
			return demand.scopeKey === scopeKey ? demand.groups : createInitialLadderDemand();
		}
		function demandLadderGroupForScope(demand, scopeKey, group) {
			return {
				scopeKey,
				groups: demandLadderGroup(resolveLadderDemandScope(demand, scopeKey), group)
			};
		}
		function formatLadderGroupCount(total, visible, filtered) {
			if (!filtered || visible === void 0) return total === void 0 ? "" : String(total);
			if (total === void 0 || total === visible) return String(visible);
			return `${visible}/${total}`;
		}
		function buildLadderRequestPlan(demanded, counts) {
			return {
				runtimeOwners: 1,
				windowGroups: LADDER_GROUP_ORDER.filter((group) => demanded.has(group) && counts[group] !== 0)
			};
		}
		function findNextDemandedLadderGroup(demanded, counts, order = LADDER_GROUP_ORDER, statuses) {
			if ([...demanded].some((group) => {
				const status = statuses?.[group];
				return status === "idle" || status === "loading";
			})) return {
				skipped: [],
				next: null
			};
			const skipped = [];
			for (const group of order) {
				if (demanded.has(group)) continue;
				if (counts[group] === 0) {
					skipped.push(group);
					continue;
				}
				return {
					skipped,
					next: group
				};
			}
			return {
				skipped,
				next: null
			};
		}
		//#endregion
		//#region src/api/miniCurveContract.ts
		function normalizeMiniCurveCodes(stockCodes) {
			return [...new Set(stockCodes.map((code) => normalizeStockCode(code)).filter(Boolean))].sort();
		}
		//#endregion
		//#region src/api/modules/marketIntraday.ts
		function isValidMiniCurve(value) {
			return Array.isArray(value) && value.length === 20 && value.every((point) => typeof point === "number" && Number.isFinite(point));
		}
		async function getMiniIntradayCurves(tradeDate, stockCodes) {
			const normalizedCodes = normalizeMiniCurveCodes(stockCodes);
			if (!tradeDate || normalizedCodes.length === 0) return [];
			if (normalizedCodes.length > 200) throw new Error("Mini curve request exceeds 200 unique stocks");
			const data = await onclawRuntime.api.marketIntraday.miniCurves(tradeDate, normalizedCodes);
			return (Array.isArray(data) ? data : []).filter((row) => row && isValidMiniCurve(row.mini_pct)).map((row) => ({
				ts_code: normalizeStockCode(row.ts_code),
				trade_date: String(row.trade_date || tradeDate),
				mini_pct: [...row.mini_pct]
			})).filter((row) => Boolean(row.ts_code));
		}
		//#endregion
		//#region src/hooks/preview/miniCurveProgressive.ts
		function isMiniCurveLoadingEnabled(options) {
			return options.pageVisible && options.settingsHydrated && options.showMinuteCurve;
		}
		function miniCurveKey(tradeDate, stockCode) {
			return `${tradeDate}::${normalizeStockCode(stockCode)}`;
		}
		function miniCurvePairsKey(pairs) {
			return pairs.map((pair) => miniCurveKey(pair.tradeDate, pair.stockCode)).join("|");
		}
		function buildEligibleMiniCurvePairs(rows, displayConfig) {
			const pairs = /* @__PURE__ */ new Map();
			for (const row of rows) {
				if (!row.trade_date || !row.ts_code) continue;
				const status = getCellStatus(row);
				if (status === "suspended" || !displayConfig.curve[status].includes("minute_curve")) continue;
				const stockCode = normalizeStockCode(row.ts_code);
				if (!stockCode) continue;
				const pair = {
					tradeDate: row.trade_date,
					stockCode
				};
				pairs.set(miniCurveKey(pair.tradeDate, pair.stockCode), pair);
			}
			return [...pairs.values()].sort((left, right) => left.tradeDate.localeCompare(right.tradeDate) || left.stockCode.localeCompare(right.stockCode));
		}
		function chunkMiniCurveCodes(stockCodes) {
			const chunks = [];
			for (let index = 0; index < stockCodes.length; index += 20) chunks.push(stockCodes.slice(index, index + 20));
			if (chunks.length > 1 && chunks[chunks.length - 1].length < 20) {
				const trailing = chunks.pop();
				if (trailing) chunks[chunks.length - 1].push(...trailing);
			}
			return chunks;
		}
		async function runSerialMiniCurveBatches(options) {
			for (const batch of options.batches) {
				if (!options.isActive()) return;
				const value = await options.loadBatch(batch);
				if (!options.isActive()) return;
				options.onBatch(value, batch);
				if (options.pause) await options.pause();
			}
		}
		function overlayMiniCurves(rows, curves) {
			if (curves.size === 0) return [...rows];
			return rows.map((row) => {
				if (!row.trade_date || !row.ts_code) return row;
				const curve = curves.get(miniCurveKey(row.trade_date, row.ts_code));
				return curve ? {
					...row,
					minute_curve: [...curve]
				} : row;
			});
		}
		function overlayMiniCurvesOnSections(sections, curves) {
			if (curves.size === 0) return [...sections];
			return sections.map((section) => ({
				...section,
				stocks: section.stocks.map((stock) => ({
					...stock,
					snapshots: new Map([...stock.snapshots].map(([tradeDate, snapshot]) => {
						const curve = curves.get(miniCurveKey(tradeDate, stock.ts_code));
						return [tradeDate, curve ? {
							...snapshot,
							minute_curve: [...curve]
						} : snapshot];
					}))
				}))
			}));
		}
		//#endregion
		//#region src/hooks/preview/useProgressiveMiniCurves.ts
		const BATCH_YIELD_MS = 25;
		function yieldToView() {
			return new Promise((resolve) => window.setTimeout(resolve, BATCH_YIELD_MS));
		}
		function useProgressiveMiniCurves({ enabled, rows, displayConfig, settledBeforeDate, runtimeDate, refreshToken = 0 }) {
			const queryClient = useQueryClient();
			const session = useMarketRuntimeSession();
			const [runtimeRefreshTick, setRuntimeRefreshTick] = (0, react.useState)(0);
			(0, react.useEffect)(() => {
				session.key;
				if (!enabled || !runtimeDate || !session.active) return;
				const timer = window.setInterval(() => setRuntimeRefreshTick((current) => current + 1), 3e5);
				return () => window.clearInterval(timer);
			}, [
				enabled,
				runtimeDate,
				session.active,
				session.key
			]);
			const repository = onclawRuntime.miniCurves;
			const generationRef = (0, react.useRef)(0);
			const [curves, setCurves] = (0, react.useState)(() => /* @__PURE__ */ new Map());
			const candidatePairs = (0, react.useMemo)(() => enabled ? buildEligibleMiniCurvePairs(rows, displayConfig).filter((pair) => !settledBeforeDate || pair.tradeDate < settledBeforeDate || pair.tradeDate === runtimeDate) : [], [
				displayConfig,
				enabled,
				rows,
				runtimeDate,
				settledBeforeDate
			]);
			const candidatePairsKey = miniCurvePairsKey(candidatePairs);
			const stablePairsRef = (0, react.useRef)({
				key: candidatePairsKey,
				pairs: candidatePairs
			});
			if (stablePairsRef.current.key !== candidatePairsKey) stablePairsRef.current = {
				key: candidatePairsKey,
				pairs: candidatePairs
			};
			const pairs = stablePairsRef.current.pairs;
			(0, react.useEffect)(() => {
				session.key;
				const generation = generationRef.current + 1;
				generationRef.current = generation;
				if (!enabled || pairs.length === 0) {
					setCurves((current) => current.size === 0 ? current : /* @__PURE__ */ new Map());
					return () => {
						generationRef.current += 1;
					};
				}
				const pairsByDate = /* @__PURE__ */ new Map();
				for (const { tradeDate, stockCode } of pairs) {
					const codes = pairsByDate.get(tradeDate) ?? [];
					codes.push(stockCode);
					pairsByDate.set(tradeDate, codes);
				}
				const mergeCurves = (tradeDate, incoming, requested) => {
					if (generationRef.current !== generation || incoming.size === 0 && !requested?.length) return;
					setCurves((current) => {
						const next = new Map(current);
						for (const code of requested ?? []) if (!incoming.has(code)) next.delete(miniCurveKey(tradeDate, code));
						incoming.forEach((curve, code) => next.set(miniCurveKey(tradeDate, code), curve));
						return next;
					});
				};
				(async () => {
					const dateBatches = [...pairsByDate].sort(([left], [right]) => left === runtimeDate ? -1 : right === runtimeDate ? 1 : left.localeCompare(right));
					for (const [tradeDate, codes] of dateBatches) {
						if (generationRef.current !== generation) return;
						const settled = tradeDate !== runtimeDate;
						const source = settled ? "window" : "runtime";
						const cachedRows = await Promise.all(codes.map((code) => repository.get(tradeDate, code)));
						mergeCurves(tradeDate, new Map(cachedRows.flatMap((row) => row ? [[row.ts_code, row.mini_pct]] : [])));
						const requestableCodes = await repository.missing(tradeDate, codes);
						try {
							if (requestableCodes.length > 0) await new Promise((resolve) => window.setTimeout(resolve, 100));
							if (generationRef.current !== generation) return;
							await runSerialMiniCurveBatches({
								batches: chunkMiniCurveCodes(requestableCodes),
								isActive: () => generationRef.current === generation,
								loadBatch: async (batch) => {
									const rows = source === "runtime" ? await selectSnapshotRuntimeMiniCurves(batch).then((response) => {
										if (response.trade_date !== tradeDate) throw new Error("Runtime mini-curve date mismatch");
										return Object.entries(response.mini_market_pcts).map(([ts_code, mini_pct]) => ({
											ts_code,
											trade_date: tradeDate,
											mini_pct
										}));
									}) : await queryClient.fetchQuery({
										...sdkQueryPolicy(onclawRuntime.queries.marketIntraday.miniCurves(tradeDate, batch, settled)),
										queryFn: () => getMiniIntradayCurves(tradeDate, batch)
									});
									const loaded = new Map(rows.map((row) => [row.ts_code, row.mini_pct]));
									await Promise.all(rows.map((row) => repository.put(row, settled)));
									for (const code of batch) if (!loaded.has(code)) repository.markMissing(tradeDate, code);
									return loaded;
								},
								onBatch: (loaded, batch) => mergeCurves(tradeDate, loaded, source === "runtime" ? void 0 : batch),
								pause: yieldToView
							});
						} catch {
							return;
						}
					}
				})();
				return () => {
					generationRef.current += 1;
				};
			}, [
				enabled,
				pairs,
				queryClient,
				refreshToken,
				repository,
				runtimeDate,
				runtimeRefreshTick,
				session.key
			]);
			return (0, react.useMemo)(() => {
				if (!enabled) return /* @__PURE__ */ new Map();
				const eligibleKeys = new Set(pairs.map((pair) => miniCurveKey(pair.tradeDate, pair.stockCode)));
				return new Map([...curves].filter(([key]) => eligibleKeys.has(key)));
			}, [
				curves,
				enabled,
				pairs
			]);
		}
		//#endregion
		//#region src/hooks/preview/useSnapshotPreviewDataCore.ts
		function useSnapshotPreviewDataCore({ source, startDate, endDate, baseDate, limitDates, activeTopicId, stockCodes, cellDisplayConfig, options }) {
			const { visible } = usePageActivity();
			const { previewProfilesHydrated } = useAppStore();
			const enableTopicLookup = options?.enableTopicLookup ?? source === "limit_info_snapshot";
			const marketSession = useMarketRuntimeSession();
			const fallbackTodayDate = marketSession.date;
			const effectiveBaseDate = baseDate;
			const effectiveStartDate = startDate;
			const effectiveEndDate = endDate;
			const isLadderPreview = source === "limit_info_snapshot" && stockCodes.length === 0;
			const runtimeGroup = isLadderPreview ? "all" : source === "limit_info_snapshot" ? "continue_board" : "default";
			const windowGroups = (0, react.useMemo)(() => isLadderPreview ? LADDER_GROUP_ORDER : [runtimeGroup], [isLadderPreview, runtimeGroup]);
			const normalizedStockCodes = (0, react.useMemo)(() => [...new Set(stockCodes.map((code) => normalizeStockCode(code)).filter(Boolean))], [stockCodes]);
			const availableDates = (0, react.useMemo)(() => isLadderPreview ? buildSnapshotDateList(limitDates, fallbackTodayDate, { includeMarketDate: true }) : limitDates, [
				fallbackTodayDate,
				isLadderPreview,
				limitDates
			]);
			const visibleRange = (0, react.useMemo)(() => {
				const filtered = availableDates.filter((value) => value >= effectiveStartDate && value <= effectiveEndDate);
				if (filtered.length === 0) return effectiveBaseDate ? [effectiveBaseDate] : [];
				return filtered;
			}, [
				availableDates,
				effectiveBaseDate,
				effectiveEndDate,
				effectiveStartDate
			]);
			const settledVisibleRange = (0, react.useMemo)(() => limitDates.filter((value) => value >= effectiveStartDate && value <= effectiveEndDate), [
				effectiveEndDate,
				effectiveStartDate,
				limitDates
			]);
			const ladderMarketDataPlan = (0, react.useMemo)(() => resolveLadderMarketDataPlan({
				baseDate: effectiveBaseDate,
				endDate: effectiveEndDate,
				marketDate: fallbackTodayDate,
				settledDates: limitDates
			}), [
				effectiveBaseDate,
				effectiveEndDate,
				fallbackTodayDate,
				limitDates
			]);
			const activeLadderNeedsRuntimeScope = isLadderPreview && ladderMarketDataPlan.readMode === "runtime-with-window";
			const ladderSnapshotReadMode = ladderMarketDataPlan.readMode;
			const runtimeWindowParams = (0, react.useMemo)(() => ({
				source,
				base_date: effectiveBaseDate,
				start_date: effectiveStartDate,
				end_date: effectiveEndDate,
				cursor: 0,
				size: Math.max(1, visibleRange.length),
				group: "continue_board",
				runtime_group: "limit_events",
				scope_revision: 0,
				limit_events: options?.stockFilters?.limitEvents ?? false,
				convertible: options?.stockFilters?.convertible ?? false
			}), [
				effectiveBaseDate,
				effectiveEndDate,
				effectiveStartDate,
				options?.stockFilters,
				source,
				visibleRange.length
			]);
			const runtimeWindowQuery = useQuery({
				...sdkQueryPolicy(onclawRuntime.queries.snapshot.runtimeWithWindow(runtimeWindowParams)),
				queryFn: () => getSnapshotRuntimeWithWindow(runtimeWindowParams),
				enabled: activeLadderNeedsRuntimeScope && visible && !marketSession.key.endsWith(":pre") && !marketSession.key.endsWith(":closed"),
				refetchOnWindowFocus: false,
				refetchIntervalInBackground: false,
				refetchInterval: activeLadderNeedsRuntimeScope && ladderMarketDataPlan.pollRuntimeOwner && visible ? 6e4 : false,
				placeholderData: (previousData) => previousData
			});
			const windowScopeKey = (0, react.useMemo)(() => JSON.stringify({
				source,
				baseDate: effectiveBaseDate,
				startDate: effectiveStartDate,
				endDate: effectiveEndDate,
				stockCodes: normalizedStockCodes,
				filters: options?.stockFilters
			}), [
				effectiveBaseDate,
				effectiveEndDate,
				effectiveStartDate,
				normalizedStockCodes,
				options?.stockFilters,
				source
			]);
			const [ladderDemand, setLadderDemand] = (0, react.useState)(() => createLadderDemandScope(windowScopeKey));
			const [manualLadderDemand, setManualLadderDemand] = (0, react.useState)(false);
			const [committedLadderWindow, setCommittedLadderWindow] = (0, react.useState)(null);
			const demandedGroups = (0, react.useMemo)(() => isLadderPreview ? resolveLadderDemandScope(ladderDemand, windowScopeKey) : /* @__PURE__ */ new Set([runtimeGroup]), [
				isLadderPreview,
				ladderDemand,
				runtimeGroup,
				windowScopeKey
			]);
			(0, react.useEffect)(() => {
				if (isLadderPreview) {
					setManualLadderDemand(false);
					setLadderDemand(createLadderDemandScope(windowScopeKey));
				}
			}, [isLadderPreview, windowScopeKey]);
			const windowParamsList = (0, react.useMemo)(() => windowGroups.map((group) => {
				return {
					source,
					base_date: effectiveBaseDate,
					start_date: effectiveStartDate || effectiveBaseDate,
					end_date: effectiveEndDate || effectiveBaseDate,
					cursor: 0,
					size: Math.max(1, visibleRange.length),
					group,
					stock_scope: normalizedStockCodes,
					scope_revision: 0,
					limit_events: options?.stockFilters?.limitEvents ?? false,
					convertible: options?.stockFilters?.convertible ?? false
				};
			}), [
				effectiveBaseDate,
				effectiveEndDate,
				effectiveStartDate,
				normalizedStockCodes,
				options?.stockFilters,
				source,
				visibleRange.length,
				windowGroups
			]);
			const knownGroupCounts = (0, react.useMemo)(() => {
				if (!activeLadderNeedsRuntimeScope || !runtimeWindowQuery.data) return {};
				return Object.fromEntries(LADDER_GROUP_ORDER.map((group) => [group, runtimeWindowQuery.data.window.structure.groups[group]?.length ?? 0]));
			}, [activeLadderNeedsRuntimeScope, runtimeWindowQuery.data]);
			const ladderRequestPlan = (0, react.useMemo)(() => buildLadderRequestPlan(demandedGroups, knownGroupCounts), [demandedGroups, knownGroupCounts]);
			const windowRefetchInterval = isLadderPreview && ladderMarketDataPlan.pollWindowGroups && visible ? 6e4 : false;
			const windowQueries = useQueries({ queries: windowParamsList.map((params) => ({
				...sdkQueryPolicy(onclawRuntime.queries.snapshot.windowWithRuntime(params)),
				queryFn: () => getSnapshotWindowWithRuntime(params),
				enabled: !!effectiveBaseDate && (isLadderPreview ? ladderSnapshotReadMode === "window-with-runtime" && ladderRequestPlan.windowGroups.includes(params.group) : demandedGroups.has(params.group)),
				refetchIntervalInBackground: false,
				refetchInterval: windowRefetchInterval,
				placeholderData: (previousData) => previousData
			})) });
			const groupWindowStates = (0, react.useMemo)(() => {
				const states = /* @__PURE__ */ new Map();
				windowQueries.forEach((query, index) => {
					if (query.data && !query.isPlaceholderData) states.set(windowParamsList[index].group, unzipSnapshotWindow(query.data.window));
				});
				return states;
			}, [windowParamsList, windowQueries]);
			const runtimeWindowState = (0, react.useMemo)(() => runtimeWindowQuery.data ? unzipSnapshotWindow(runtimeWindowQuery.data.window) : null, [runtimeWindowQuery.data]);
			const stagedWindowState = (0, react.useMemo)(() => {
				const loaded = windowGroups.map((group) => groupWindowStates.get(group)).filter(Boolean);
				if (loaded.length === 0) return null;
				const rowsByKey = /* @__PURE__ */ new Map();
				const groupedCodes = {};
				const orderedCodes = [];
				const codeNames = {};
				for (const state of loaded) {
					state.rowsByKey.forEach((row, key) => rowsByKey.set(key, row));
					Object.assign(groupedCodes, state.groupedCodes);
					Object.assign(codeNames, state.codeNames);
					for (const code of state.orderedCodes) if (!orderedCodes.includes(code)) orderedCodes.push(code);
				}
				return {
					selectedDate: loaded[0].selectedDate,
					schemaVersion: loaded[0].schemaVersion,
					staticRevision: loaded.map((state) => state.staticRevision).join("|"),
					rowsetRevision: Math.max(...loaded.map((state) => state.rowsetRevision)),
					orderedDates: loaded[0].orderedDates,
					orderedCodes,
					groupedCodes,
					groupOrder: windowGroups.filter((group) => groupedCodes[group]),
					codeNames,
					rowsByKey
				};
			}, [groupWindowStates, windowGroups]);
			const isRuntimeFetching = runtimeWindowQuery.isFetching;
			const runtimeError = runtimeWindowQuery.error;
			const stagedLadderGroupCounts = (0, react.useMemo)(() => {
				const state = activeLadderNeedsRuntimeScope ? runtimeWindowState : stagedWindowState;
				if (!state || !isLadderPreview) return {};
				return Object.fromEntries(Object.entries(state.groupedCodes).map(([group, codes]) => [group, codes.length]));
			}, [
				activeLadderNeedsRuntimeScope,
				isLadderPreview,
				runtimeWindowState,
				stagedWindowState
			]);
			const stagedGroupStates = (0, react.useMemo)(() => Object.fromEntries(LADDER_GROUP_ORDER.map((group, index) => {
				const query = windowQueries[index];
				const knownEmpty = Object.prototype.hasOwnProperty.call(stagedLadderGroupCounts, group) && stagedLadderGroupCounts[group] === 0;
				const fetching = activeLadderNeedsRuntimeScope ? runtimeWindowQuery.isFetching : query?.isFetching;
				const hasData = activeLadderNeedsRuntimeScope ? Boolean(runtimeWindowQuery.data) : Boolean(query?.data && !query.isPlaceholderData);
				const queryError = activeLadderNeedsRuntimeScope ? runtimeWindowQuery.error : query?.error;
				const resultCount = stagedLadderGroupCounts[group] ?? 0;
				return [group, !demandedGroups.has(group) ? "idle" : knownEmpty ? "empty" : !hasData && queryError ? "error" : !hasData || fetching ? "loading" : resultCount === 0 ? "empty" : "ready"];
			})), [
				activeLadderNeedsRuntimeScope,
				demandedGroups,
				runtimeWindowQuery.data,
				runtimeWindowQuery.error,
				runtimeWindowQuery.isFetching,
				stagedLadderGroupCounts,
				windowQueries
			]);
			const stagedRevisionKey = (0, react.useMemo)(() => windowQueries.map((query, index) => {
				if (!query.data || query.isPlaceholderData) return "";
				return [
					windowParamsList[index].group,
					query.data.window.static_revision,
					query.data.window.rowset_revision,
					query.data.runtime?.index_revision ?? 0
				].join(":");
			}).filter(Boolean).join("|"), [windowParamsList, windowQueries]);
			const stagedRuntime = (0, react.useMemo)(() => windowQueries.filter((query) => !query.isPlaceholderData).map((query) => query.data).find((aggregate) => aggregate?.mode !== "historical" && aggregate?.runtime?.trade_date === fallbackTodayDate)?.runtime ?? null, [fallbackTodayDate, windowQueries]);
			const committedForScope = committedLadderWindow?.scopeKey === windowScopeKey ? committedLadderWindow : null;
			const viewportHeight = options?.ladderViewportHeight ?? 0;
			const capacityFillActive = !manualLadderDemand && (!committedForScope || viewportHeight > committedForScope.viewportHeight);
			const viewportFillPlan = (0, react.useMemo)(() => planLadderViewportFill({
				viewportHeight,
				demanded: demandedGroups,
				counts: stagedLadderGroupCounts,
				statuses: stagedGroupStates,
				manualDemand: manualLadderDemand || !capacityFillActive
			}), [
				capacityFillActive,
				demandedGroups,
				manualLadderDemand,
				stagedGroupStates,
				stagedLadderGroupCounts,
				viewportHeight
			]);
			(0, react.useEffect)(() => {
				if (!isLadderPreview || activeLadderNeedsRuntimeScope) return;
				if (viewportFillPlan.nextGroup) {
					setLadderDemand((current) => demandLadderGroupForScope(current, windowScopeKey, viewportFillPlan.nextGroup));
					return;
				}
				if (!viewportFillPlan.shouldCommit || !stagedWindowState) return;
				setCommittedLadderWindow((current) => {
					if (current?.scopeKey === windowScopeKey && current.viewportHeight === viewportHeight && current.revisionKey === stagedRevisionKey) return current;
					return {
						scopeKey: windowScopeKey,
						viewportHeight,
						revisionKey: stagedRevisionKey,
						state: stagedWindowState,
						runtime: stagedRuntime
					};
				});
				setManualLadderDemand(false);
			}, [
				activeLadderNeedsRuntimeScope,
				isLadderPreview,
				stagedRevisionKey,
				stagedRuntime,
				stagedWindowState,
				viewportFillPlan.nextGroup,
				viewportFillPlan.shouldCommit,
				viewportHeight,
				windowScopeKey
			]);
			const windowState = activeLadderNeedsRuntimeScope ? runtimeWindowState : isLadderPreview ? committedForScope?.state ?? null : stagedWindowState;
			const aggregateRuntime = activeLadderNeedsRuntimeScope ? runtimeWindowQuery.data?.runtime ?? null : isLadderPreview ? committedForScope?.runtime ?? null : stagedRuntime;
			const todayDate = fallbackTodayDate;
			const ladderGroupCounts = (0, react.useMemo)(() => {
				if (!windowState || !isLadderPreview) return {};
				if (activeLadderNeedsRuntimeScope) return Object.fromEntries(LADDER_GROUP_ORDER.map((group) => [group, windowState.groupedCodes[group]?.length ?? 0]));
				return Object.fromEntries(Object.entries(windowState.groupedCodes).map(([group, codes]) => [group, codes.length]));
			}, [
				activeLadderNeedsRuntimeScope,
				isLadderPreview,
				windowState
			]);
			const displayWindowState = (0, react.useMemo)(() => {
				if (!windowState || !isLadderPreview) return windowState;
				return {
					...windowState,
					groupedCodes: Object.fromEntries(LADDER_GROUP_ORDER.filter((group) => demandedGroups.has(group)).map((group) => [group, windowState.groupedCodes[group] ?? []])),
					groupOrder: LADDER_GROUP_ORDER.filter((group) => demandedGroups.has(group))
				};
			}, [
				demandedGroups,
				isLadderPreview,
				windowState
			]);
			const ladderGroupByCode = (0, react.useMemo)(() => {
				const result = /* @__PURE__ */ new Map();
				if (!isLadderPreview) return result;
				const groups = displayWindowState?.groupedCodes ?? {};
				for (const group of LADDER_GROUP_ORDER) for (const code of groups[group] ?? []) result.set(normalizeStockCode(code), group);
				return result;
			}, [displayWindowState?.groupedCodes, isLadderPreview]);
			const curveFreeSnapshots = (0, react.useMemo)(() => {
				return snapshotWindowStateToRows(windowState);
			}, [windowState]);
			const curveRequestRows = (0, react.useMemo)(() => isLadderPreview ? curveFreeSnapshots.filter((row) => ladderGroupByCode.has(normalizeStockCode(row.ts_code))) : curveFreeSnapshots, [
				curveFreeSnapshots,
				isLadderPreview,
				ladderGroupByCode
			]);
			const miniCurves = useProgressiveMiniCurves({
				enabled: isMiniCurveLoadingEnabled({
					pageVisible: visible,
					settingsHydrated: previewProfilesHydrated,
					showMinuteCurve: Boolean(options?.showMinuteCurve)
				}),
				rows: curveRequestRows,
				displayConfig: cellDisplayConfig,
				settledBeforeDate: !aggregateRuntime && limitDates.includes(todayDate) ? "9999-12-31" : todayDate,
				runtimeDate: aggregateRuntime?.is_trading_day !== false ? aggregateRuntime?.trade_date ?? null : null
			});
			const rawSnapshots = (0, react.useMemo)(() => overlayMiniCurves(curveFreeSnapshots, miniCurves), [curveFreeSnapshots, miniCurves]);
			const stockNamesForTopicLookup = (0, react.useMemo)(() => {
				return [...new Set(rawSnapshots.map((snapshot) => snapshot.name?.trim()).filter(Boolean))];
			}, [rawSnapshots]);
			const { data: topicsByStock = {}, isFetching: isTopicsFetching, error: topicsError } = useQuery({
				...sdkQueryPolicy(onclawRuntime.queries.topics.namesByStocks(stockNamesForTopicLookup)),
				queryFn: async () => {
					const nameToCodeMap = /* @__PURE__ */ new Map();
					for (const snapshot of rawSnapshots) if (snapshot.name && snapshot.ts_code) nameToCodeMap.set(snapshot.name, snapshot.ts_code);
					if (stockNamesForTopicLookup.length === 0) return {};
					const topicsByName = await getTopicNamesByStocks(stockNamesForTopicLookup);
					const result = {};
					for (const [name, topics] of Object.entries(topicsByName)) {
						const code = nameToCodeMap.get(name);
						if (code) result[code] = topics;
					}
					return result;
				},
				enabled: enableTopicLookup && stockNamesForTopicLookup.length > 0,
				placeholderData: (previousData) => previousData
			});
			const categoryStats = (0, react.useMemo)(() => {
				const stats = /* @__PURE__ */ new Map();
				const tempLimitUpStocks = /* @__PURE__ */ new Set();
				for (const snapshot of rawSnapshots) if (snapshot.trade_date === effectiveBaseDate && snapshot.limit_status === 1 && snapshot.ts_code) tempLimitUpStocks.add(snapshot.ts_code);
				for (const [code, rawTopics] of Object.entries(topicsByStock)) {
					if (!tempLimitUpStocks.has(code)) continue;
					const uniqueCategories = new Set(rawTopics.map((topic) => topic.category).filter(Boolean));
					for (const category of uniqueCategories) stats.set(category, (stats.get(category) || 0) + 1);
				}
				return stats;
			}, [
				effectiveBaseDate,
				rawSnapshots,
				topicsByStock
			]);
			const stockMap = (0, react.useMemo)(() => {
				const map = /* @__PURE__ */ new Map();
				for (const snapshot of rawSnapshots) {
					if (!snapshot.ts_code) continue;
					let stockRow = map.get(snapshot.ts_code);
					if (!stockRow) {
						const rawTopics = topicsByStock[snapshot.ts_code] || [];
						const uniqueCategories = Array.from(new Set(rawTopics.map((topic) => topic.category).filter(Boolean)));
						uniqueCategories.sort((left, right) => (categoryStats.get(right) || 0) - (categoryStats.get(left) || 0));
						stockRow = {
							ts_code: snapshot.ts_code,
							name: snapshot.name || displayWindowState?.codeNames[snapshot.ts_code] || snapshot.ts_code,
							consecutive_count: 0,
							limit_status: 0,
							snapshots: /* @__PURE__ */ new Map(),
							topics: uniqueCategories,
							display_topic: uniqueCategories[0] || void 0,
							has_regulatory: !!snapshot.regulatory_status,
							has_convertible: !!snapshot.has_convertible,
							is_one_word: false
						};
						map.set(snapshot.ts_code, stockRow);
					}
					if (snapshot.trade_date) {
						stockRow.snapshots.set(snapshot.trade_date, snapshot);
						if (snapshot.trade_date === effectiveBaseDate && snapshot.high !== void 0 && snapshot.low !== void 0 && snapshot.high === snapshot.low && snapshot.limit_status === 1) stockRow.is_one_word = true;
					}
				}
				for (const stockRow of map.values()) {
					const baseSnapshot = stockRow.snapshots.get(effectiveBaseDate);
					if (baseSnapshot) {
						stockRow.consecutive_count = baseSnapshot.consecutive_count ?? 0;
						stockRow.limit_status = baseSnapshot.limit_status ?? 0;
						stockRow.is_one_word = baseSnapshot.limit_status === 1 && baseSnapshot.high === baseSnapshot.low;
					} else {
						stockRow.consecutive_count = 0;
						stockRow.limit_status = 0;
					}
				}
				return map;
			}, [
				effectiveBaseDate,
				categoryStats,
				displayWindowState,
				rawSnapshots,
				topicsByStock
			]);
			const topics = (0, react.useMemo)(() => {
				const categoryMap = /* @__PURE__ */ new Map();
				for (const stock of stockMap.values()) {
					if (!stock.snapshots.get(effectiveBaseDate) || !stock.topics) continue;
					const groupBucket = ladderGroupHeadlineBucket(ladderGroupByCode.get(stock.ts_code));
					const status = stock.limit_status ?? 0;
					for (const category of stock.topics) {
						let categoryData = categoryMap.get(category);
						if (!categoryData) {
							categoryData = {
								stocks: /* @__PURE__ */ new Set(),
								limitUpCount: 0,
								failedLimitCount: 0,
								limitDownCount: 0
							};
							categoryMap.set(category, categoryData);
						}
						if (!categoryData.stocks.has(stock.ts_code)) {
							categoryData.stocks.add(stock.ts_code);
							if (groupBucket === "limitUp" || !groupBucket && status === 1) categoryData.limitUpCount += 1;
							else if (groupBucket === "failedLimit" || !groupBucket && status === 2) categoryData.failedLimitCount += 1;
							else if (groupBucket === "limitDown" || !groupBucket && status === -1) categoryData.limitDownCount += 1;
						}
					}
				}
				return [...categoryMap.entries()].map(([category, data]) => ({
					id: category,
					name: category,
					category,
					limitUpCount: data.limitUpCount,
					failedLimitCount: data.failedLimitCount,
					limitDownCount: data.limitDownCount,
					stocks: Array.from(data.stocks)
				})).sort((left, right) => right.limitUpCount - left.limitUpCount);
			}, [
				effectiveBaseDate,
				ladderGroupByCode,
				stockMap
			]);
			const totalStats = (0, react.useMemo)(() => {
				if (isLadderPreview && activeLadderNeedsRuntimeScope && runtimeWindowState) return aggregateLadderGroupCounts(ladderGroupCounts);
				const stats = {
					limitUp: 0,
					failedLimit: 0,
					limitDown: 0
				};
				for (const stock of stockMap.values()) {
					if (!stock.snapshots.get(effectiveBaseDate)) continue;
					const status = stock.limit_status ?? 0;
					if (status === 1) stats.limitUp += 1;
					else if (status === 2) stats.failedLimit += 1;
					else if (status === -1) stats.limitDown += 1;
				}
				return stats;
			}, [
				activeLadderNeedsRuntimeScope,
				effectiveBaseDate,
				isLadderPreview,
				ladderGroupCounts,
				runtimeWindowState,
				stockMap
			]);
			const dates = (0, react.useMemo)(() => {
				return visibleRange.map((value) => ({
					date: value,
					isBaseDate: value === effectiveBaseDate,
					isActive: value === effectiveBaseDate,
					isRealtime: value === todayDate && !limitDates.includes(todayDate)
				}));
			}, [
				effectiveBaseDate,
				limitDates,
				todayDate,
				visibleRange
			]);
			const windowErrorMessage = (activeLadderNeedsRuntimeScope && runtimeWindowQuery.error instanceof Error ? runtimeWindowQuery.error.message : null) || (windowQueries.find((query) => query.error instanceof Error)?.error)?.message || null;
			const errorMessage = (runtimeError instanceof Error ? runtimeError.message : null) || windowErrorMessage || (topicsError instanceof Error ? topicsError.message : null);
			const scopeCounts = (0, react.useMemo)(() => {
				const payload = activeLadderNeedsRuntimeScope ? runtimeWindowQuery.data?.window : windowQueries.find((query) => query.data)?.data?.window;
				const unfiltered = payload?.cache_info?.unfiltered_scope_code_count;
				const filtered = payload?.cache_info?.filtered_scope_code_count;
				if (typeof unfiltered !== "number" || typeof filtered !== "number") return null;
				return {
					unfiltered,
					filtered
				};
			}, [
				activeLadderNeedsRuntimeScope,
				runtimeWindowQuery.data,
				windowQueries
			]);
			const requestGroup = (0, react.useCallback)((group) => {
				setManualLadderDemand(true);
				setLadderDemand((current) => demandLadderGroupForScope(current, windowScopeKey, group));
			}, [windowScopeKey]);
			const ladderGroupOrder = LADDER_GROUP_ORDER;
			const requestNextGroup = (0, react.useCallback)(() => {
				if (!isLadderPreview) return false;
				const { skipped, next } = findNextDemandedLadderGroup(demandedGroups, stagedLadderGroupCounts, ladderGroupOrder, stagedGroupStates);
				if (skipped.length || next) {
					if (next) setManualLadderDemand(true);
					setLadderDemand((current) => {
						let nextDemand = current;
						for (const group of [...skipped, ...next ? [next] : []]) nextDemand = demandLadderGroupForScope(nextDemand, windowScopeKey, group);
						return nextDemand;
					});
				}
				return next !== null;
			}, [
				demandedGroups,
				isLadderPreview,
				ladderGroupOrder,
				stagedGroupStates,
				stagedLadderGroupCounts,
				windowScopeKey
			]);
			const groupStates = (0, react.useMemo)(() => Object.fromEntries(LADDER_GROUP_ORDER.map((group) => {
				const stagedState = stagedGroupStates[group];
				const committedCountKnown = Object.prototype.hasOwnProperty.call(ladderGroupCounts, group);
				return [group, !demandedGroups.has(group) ? "idle" : stagedState === "error" ? "error" : !committedCountKnown ? "loading" : ladderGroupCounts[group] === 0 ? "empty" : "ready"];
			})), [
				demandedGroups,
				ladderGroupCounts,
				stagedGroupStates
			]);
			const ladderGroups = isLadderPreview ? {
				groupOrder: ladderGroupOrder,
				groupCounts: ladderGroupCounts,
				groupStates,
				requestGroup,
				requestNextGroup
			} : void 0;
			const ladderWindowStaging = isLadderPreview && !activeLadderNeedsRuntimeScope && (!committedForScope || viewportFillPlan.nextGroup !== null || !viewportFillPlan.shouldCommit || Boolean(stagedWindowState && stagedRevisionKey !== committedForScope.revisionKey));
			return {
				loading: ladderWindowStaging || windowQueries.some((query) => query.isLoading) || activeLadderNeedsRuntimeScope && runtimeWindowQuery.isLoading,
				isFetching: ladderWindowStaging || windowQueries.some((query) => query.isFetching) || isRuntimeFetching || isTopicsFetching,
				isWindowFetching: ladderWindowStaging || windowQueries.some((query) => query.isFetching) || activeLadderNeedsRuntimeScope && runtimeWindowQuery.isFetching,
				error: errorMessage,
				windowError: windowErrorMessage,
				dates,
				topics,
				totalStats,
				stockMap,
				refresh: () => {
					if (activeLadderNeedsRuntimeScope) {
						runtimeWindowQuery.refetch();
						return;
					}
					windowQueries.forEach((query, index) => {
						if (demandedGroups.has(windowParamsList[index].group)) {
							invalidateIncrementalSnapshotWindow(windowParamsList[index], { targetDates: settledVisibleRange });
							query.refetch();
						}
					});
				},
				todayDate,
				source,
				baseDate: effectiveBaseDate,
				activeTopicId,
				normalizedStockCodes,
				windowState: displayWindowState,
				scopeCounts,
				ladderGroups
			};
		}
		//#endregion
		//#region src/hooks/preview/useSnapshotPreviewData.ts
		function useSnapshotPreviewData(options) {
			const result = useSnapshotPreviewDataCore(options);
			const sections = (0, react.useMemo)(() => {
				if (result.source === "market_snapshot") return buildMarketPreviewSections({
					stockMap: result.stockMap,
					activeTopicId: result.activeTopicId,
					normalizedStockCodes: result.normalizedStockCodes
				});
				return buildLimitInfoSections({
					stockMap: result.stockMap,
					activeTopicId: result.activeTopicId,
					baseDate: result.baseDate,
					windowState: result.windowState
				});
			}, [
				result.activeTopicId,
				result.baseDate,
				result.normalizedStockCodes,
				result.source,
				result.stockMap,
				result.windowState
			]);
			return {
				loading: result.loading,
				isFetching: result.isFetching,
				isWindowFetching: result.isWindowFetching,
				error: result.error,
				windowError: result.windowError,
				dates: result.dates,
				sections,
				topics: result.topics,
				totalStats: result.totalStats,
				stockMap: result.stockMap,
				refresh: result.refresh,
				todayDate: result.todayDate,
				scopeCounts: result.scopeCounts,
				ladderGroups: result.ladderGroups
			};
		}
		//#endregion
		//#region src/hooks/useMockData.ts
		function useMockData(source, startDate, endDate, baseDate, limitDates, activeTopicId, stockCodes, cellDisplayConfig, options) {
			return useSnapshotPreviewData({
				source,
				startDate,
				endDate,
				baseDate,
				limitDates,
				activeTopicId,
				stockCodes,
				cellDisplayConfig,
				options
			});
		}
		//#endregion
		//#region src/hooks/useLimitInfoSnapshotData.ts
		function useLimitInfoSnapshotData(options) {
			const { startDate, endDate, baseDate, limitDates, activeTopicId, stockCodes = [], cellDisplayConfig, showMinuteCurve, viewportHeight } = options;
			return useMockData("limit_info_snapshot", startDate, endDate, baseDate, limitDates, activeTopicId, stockCodes, cellDisplayConfig, {
				enableRuntimePatch: true,
				enableTopicLookup: true,
				showMinuteCurve,
				ladderViewportHeight: viewportHeight
			});
		}
		//#endregion
		//#region src/components/TopicNav.tsx
		const STAT_BADGE_CLASS = "inline-flex h-4 min-w-4 items-center justify-center rounded px-1 text-[10px] font-bold leading-none text-[var(--badge-fg)]";
		const TopicNav = (0, react.memo)(function TopicNav({ topics, activeTopicId, onTopicChange, totalStats }) {
			const scrollRef = (0, react.useRef)(null);
			const activeRef = (0, react.useRef)(null);
			const isDragging = (0, react.useRef)(false);
			const startX = (0, react.useRef)(0);
			const scrollLeftPos = (0, react.useRef)(0);
			(0, react.useEffect)(() => {
				const activeEl = activeRef.current;
				const containerEl = scrollRef.current;
				if (activeEl && containerEl) {
					const scrollLeft = activeEl.offsetLeft - containerEl.offsetWidth / 2 + activeEl.offsetWidth / 2;
					containerEl.scrollTo({
						left: scrollLeft,
						behavior: "smooth"
					});
				}
			}, [activeTopicId]);
			(0, react.useEffect)(() => {
				const container = scrollRef.current;
				if (!container) return;
				const handleWheel = (e) => {
					if (e.deltaY === 0) return;
					e.preventDefault();
					container.scrollLeft += e.deltaY;
				};
				container.addEventListener("wheel", handleWheel, { passive: false });
				return () => {
					container.removeEventListener("wheel", handleWheel);
				};
			}, []);
			const handleMouseDown = (e) => {
				if (!scrollRef.current) return;
				isDragging.current = true;
				startX.current = e.pageX - scrollRef.current.offsetLeft;
				scrollLeftPos.current = scrollRef.current.scrollLeft;
			};
			const handleMouseLeave = () => {
				isDragging.current = false;
			};
			const handleMouseUp = () => {
				isDragging.current = false;
			};
			const handleMouseMove = (e) => {
				if (!isDragging.current || !scrollRef.current) return;
				e.preventDefault();
				const walk = (e.pageX - scrollRef.current.offsetLeft - startX.current) * 1.5;
				scrollRef.current.scrollLeft = scrollLeftPos.current - walk;
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				ref: scrollRef,
				className: "flex items-center gap-2 px-3 py-2 overflow-x-auto hide-scrollbar bg-bg-secondary border-b border-border-theme cursor-grab active:cursor-grabbing select-none",
				onMouseDown: handleMouseDown,
				onMouseLeave: handleMouseLeave,
				onMouseUp: handleMouseUp,
				onMouseMove: handleMouseMove,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
					ref: activeTopicId === null ? activeRef : void 0,
					type: "button",
					onClick: () => onTopicChange(null),
					className: `flex-shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors ${activeTopicId === null ? "bg-accent-theme text-[var(--accent-contrast)] ring-1 ring-[var(--accent)]" : "bg-bg-tertiary text-text-primary hover:bg-[var(--hover-bg)]"}`,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: "全部"
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 text-[10px]",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: STAT_BADGE_CLASS,
								style: { backgroundColor: "var(--market-limit-up-badge)" },
								children: totalStats.limitUp
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "text-text-muted",
								children: "/"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: STAT_BADGE_CLASS,
								style: { backgroundColor: "var(--market-failed-limit-badge)" },
								children: totalStats.failedLimit
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "text-text-muted",
								children: "/"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: STAT_BADGE_CLASS,
								style: { backgroundColor: "var(--market-limit-down-badge)" },
								children: totalStats.limitDown
							})
						]
					})]
				}), topics.map((topic) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
					ref: activeTopicId === topic.id ? activeRef : void 0,
					type: "button",
					onClick: () => onTopicChange(topic.id),
					className: `flex-shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors ${activeTopicId === topic.id ? "bg-accent-theme text-[var(--accent-contrast)] ring-1 ring-[var(--accent)]" : "bg-bg-tertiary text-text-primary hover:bg-[var(--hover-bg)]"}`,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "font-medium truncate max-w-[100px]",
						children: topic.name
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 text-[10px]",
						children: [
							topic.limitUpCount > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: STAT_BADGE_CLASS,
								style: { backgroundColor: "var(--market-limit-up-badge)" },
								children: topic.limitUpCount
							}),
							topic.failedLimitCount > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: STAT_BADGE_CLASS,
								style: { backgroundColor: "var(--market-failed-limit-badge)" },
								children: topic.failedLimitCount
							}),
							topic.limitDownCount > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: STAT_BADGE_CLASS,
								style: { backgroundColor: "var(--market-limit-down-badge)" },
								children: topic.limitDownCount
							})
						]
					})]
				}, topic.id))]
			});
		});
		//#endregion
		//#region src/runtime/OverlaySurface.tsx
		/** Keeps overlays inside a Harness pane while preserving viewport overlays standalone. */
		function OverlaySurface({ className = "", ...props }) {
			const positioning = getRuntimeTarget() === "harness" ? "absolute" : "fixed";
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				...props,
				className: `${positioning} inset-0 ${className}`
			});
		}
		//#endregion
		//#region src/api/modules/ladderStockContext.ts
		function resolvePopupAnchorDate(anchorDate, now = /* @__PURE__ */ new Date()) {
			return anchorDate === "LIVE" ? getShanghaiDateString(now) : anchorDate;
		}
		function normalizePopupStockCode(value) {
			const raw = value.trim().toUpperCase();
			const suffixMatch = raw.match(/^(\d{6})\.(SH|SZ|BJ)$/);
			if (suffixMatch) return `${suffixMatch[1]}.${suffixMatch[2]}`;
			const prefixMatch = raw.match(/^(SH|SZ|BJ)(\d{6})$/);
			if (prefixMatch) return `${prefixMatch[2]}.${prefixMatch[1]}`;
			if (/^\d{6}$/.test(raw)) return `${raw}.${raw.startsWith("6") ? "SH" : raw.startsWith("0") || raw.startsWith("3") ? "SZ" : "BJ"}`;
			return raw;
		}
		function buildLadderStockContextRequest(selection, options = {}) {
			if (!selection?.tsCode || !selection.anchorDate) return null;
			return {
				tsCode: normalizePopupStockCode(selection.tsCode),
				anchorDate: resolvePopupAnchorDate(selection.anchorDate, options.now),
				klineLimit: options.klineLimit ?? 60,
				announcementLimit: options.announcementLimit ?? 8
			};
		}
		const ladderStockContextQueryKeys = {
			all: ["ladderStockContext"],
			detail: (request) => [...ladderStockContextQueryKeys.all, {
				tsCode: request.tsCode,
				anchorDate: request.anchorDate,
				klineLimit: request.klineLimit,
				announcementLimit: request.announcementLimit
			}]
		};
		function normalizeStatus(value, rows) {
			if (value === "ok" || value === "empty" || value === "unavailable") return value;
			return rows.length > 0 ? "ok" : "empty";
		}
		function normalizeLadderStockContext(data) {
			const abnormalMovements = Array.isArray(data.abnormal_movements) ? data.abnormal_movements : [];
			const announcements = Array.isArray(data.announcements) ? data.announcements : [];
			const klines = Array.isArray(data.klines) ? data.klines : [];
			return {
				...data,
				abnormal_movements: abnormalMovements,
				announcements,
				klines,
				section_status: {
					abnormal_movements: normalizeStatus(data.section_status?.abnormal_movements, abnormalMovements),
					announcements: normalizeStatus(data.section_status?.announcements, announcements),
					klines: normalizeStatus(data.section_status?.klines, klines)
				}
			};
		}
		async function getLadderStockContext(request) {
			return normalizeLadderStockContext(await onclawRuntime.api.ladderStockContext.detail({
				code: request.tsCode,
				anchorDate: request.anchorDate,
				klineLimit: request.klineLimit,
				announcementLimit: request.announcementLimit
			}));
		}
		//#endregion
		//#region src/hooks/useLadderStockContext.ts
		function useLadderStockContext(selection) {
			const request = buildLadderStockContextRequest(selection);
			const descriptor = request ? onclawRuntime.queries.ladderStockContext.detail({
				code: request.tsCode,
				anchorDate: request.anchorDate,
				klineLimit: request.klineLimit,
				announcementLimit: request.announcementLimit
			}) : null;
			return useQuery({
				...descriptor ? sdkQueryPolicy(descriptor) : { queryKey: ladderStockContextQueryKeys.all },
				queryFn: () => {
					if (!request) throw new Error("缺少股票弹窗查询上下文");
					return getLadderStockContext(request);
				},
				enabled: request !== null,
				refetchOnWindowFocus: false
			});
		}
		//#endregion
		//#region src/components/ladder-stock-context/AbnormalMovementSection.tsx
		function AbnormalMovementSection({ rows, status, onRetry, retrying }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				className: "flex max-h-44 min-h-20 shrink-0 flex-col rounded-lg border border-border-theme bg-bg-secondary px-4 py-3",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
					className: "mb-2 shrink-0 text-sm font-semibold text-text-primary",
					children: "异动描述"
				}), status === "unavailable" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionUnavailable, {
					label: "异动数据暂不可用",
					onRetry,
					retrying
				}) : rows.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
					className: "py-3 text-center text-sm text-text-muted",
					children: "该交易日暂无异动描述"
				}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "min-h-0 flex-1 space-y-2 overflow-y-auto pr-1",
					children: rows.map((row, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("article", {
						className: "rounded border border-border-theme bg-bg-tertiary px-3 py-2",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "mb-1 flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "rounded bg-[color:var(--accent)]/15 px-2 py-0.5 text-xs text-text-gold",
									children: row.movement_type || "异动"
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("time", {
									className: "text-xs text-text-muted",
									children: row.trade_date
								})]
							}),
							row.title && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h4", {
								className: "text-sm font-medium text-text-primary",
								children: row.title
							}),
							row.content && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: "mt-1 whitespace-pre-wrap text-sm leading-5 text-text-secondary",
								children: row.content
							})
						]
					}, `${row.trade_date}-${row.movement_type ?? "unknown"}-${index}`))
				})]
			});
		}
		function SectionUnavailable({ label, onRetry, retrying }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "flex min-h-0 flex-1 items-center justify-center gap-3 py-3 text-sm text-text-muted",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onRetry,
					disabled: retrying,
					className: "rounded border border-border-theme px-3 py-1 text-text-secondary hover:bg-[var(--hover-bg)] disabled:opacity-50",
					children: retrying ? "重试中…" : "重试"
				})]
			});
		}
		//#endregion
		//#region src/components/ladder-stock-context/AnnouncementSection.tsx
		function sentimentTone(sentiment) {
			if (sentiment > 0) return "text-[var(--positive)]";
			if (sentiment < 0) return "text-[var(--negative)]";
			return "text-text-muted";
		}
		function sentimentLabel(sentiment) {
			if (sentiment > 0) return "偏积极";
			if (sentiment < 0) return "偏谨慎";
			return "中性";
		}
		function AnnouncementSection({ rows, status, onRetry, retrying }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				className: "flex h-44 min-h-20 shrink-0 flex-col rounded-lg border border-border-theme bg-bg-secondary px-4 py-3",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "mb-1 flex shrink-0 items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold text-text-primary",
						children: "事件催化 / 近期公告"
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "text-xs text-text-muted",
						children: "最近 30 天 · 每屏约 3 条"
					})]
				}), status === "unavailable" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionUnavailable, {
					label: "公告数据暂不可用",
					onRetry,
					retrying
				}) : rows.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
					className: "py-3 text-center text-sm text-text-muted",
					children: "最近 30 天暂无公告"
				}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "min-h-0 flex-1 overflow-y-auto pr-1",
					children: rows.map((row) => {
						const title = row.title?.trim();
						const content = row.content?.trim();
						const showContent = Boolean(content && content !== title);
						return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("article", {
							className: "flex h-10 items-center gap-3 border-b border-border-theme last:border-b-0",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("time", {
									className: "w-20 shrink-0 text-xs text-text-muted",
									children: row.event_date
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("h4", {
									className: "min-w-0 flex-1 truncate text-sm font-medium text-text-primary",
									title: [title, showContent ? content : null].filter(Boolean).join(" · "),
									children: [title || content || "公告", showContent && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
										className: "font-normal text-text-secondary",
										children: [
											" ",
											"· ",
											content
										]
									})]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: `shrink-0 text-xs ${sentimentTone(row.sentiment)}`,
									children: sentimentLabel(row.sentiment)
								})
							]
						}, row.event_id);
					})
				})]
			});
		}
		//#endregion
		//#region src/components/ladder-stock-context/StockKlineChart.tsx
		const WIDTH$1 = 900;
		const HEIGHT = 320;
		const PRICE_TOP = 18;
		const PRICE_BOTTOM = 228;
		const VOLUME_TOP = 252;
		const VOLUME_BOTTOM = 304;
		function isFiniteNumber(value) {
			return value !== null && Number.isFinite(value);
		}
		function formatPrice(value) {
			return isFiniteNumber(value) ? value.toFixed(2) : "-";
		}
		function formatVolume$1(value) {
			if (!isFiniteNumber(value)) return "-";
			return value >= 1e4 ? `${(value / 1e4).toFixed(1)}万手` : `${value.toFixed(0)}手`;
		}
		function formatAmount$2(value) {
			if (!isFiniteNumber(value)) return "-";
			return value >= 1e5 ? `${(value / 1e5).toFixed(2)}亿元` : `${(value / 10).toFixed(0)}万元`;
		}
		function StockKlineChart({ rows, anchorDate }) {
			const [hoveredIndex, setHoveredIndex] = (0, react.useState)(null);
			const bars = (0, react.useMemo)(() => rows.filter((row) => isFiniteNumber(row.open) && isFiniteNumber(row.high) && isFiniteNumber(row.low) && isFiniteNumber(row.close)).slice(-60), [rows]);
			const geometry = (0, react.useMemo)(() => {
				if (bars.length === 0) return null;
				const minPrice = Math.min(...bars.map((bar) => bar.low));
				const maxPrice = Math.max(...bars.map((bar) => bar.high));
				const priceSpan = Math.max(maxPrice - minPrice, Math.abs(maxPrice || 1) * .01, .01);
				const maxVolume = Math.max(...bars.map((bar) => bar.volume ?? 0), 1);
				const slot = WIDTH$1 / bars.length;
				const candleWidth = Math.max(2, Math.min(10, slot * .62));
				const priceY = (price) => PRICE_BOTTOM - (price - minPrice) / priceSpan * (PRICE_BOTTOM - PRICE_TOP);
				return {
					minPrice,
					maxPrice,
					slot,
					candleWidth,
					maxVolume,
					priceY
				};
			}, [bars]);
			if (!geometry || bars.length === 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "flex h-full min-h-0 items-center justify-center text-sm text-text-muted",
				children: "暂无可绘制的日 K 线数据"
			});
			const hovered = hoveredIndex === null ? null : bars[hoveredIndex];
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "relative h-full min-h-0 rounded-lg border border-border-theme bg-bg-secondary p-2",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
					viewBox: `0 0 ${WIDTH$1} ${HEIGHT}`,
					className: "h-full min-h-0 w-full",
					role: "img",
					"aria-label": `截至 ${anchorDate} 的日 K 线和成交量`,
					onMouseLeave: () => setHoveredIndex(null),
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("line", {
							x1: "0",
							y1: PRICE_BOTTOM,
							x2: WIDTH$1,
							y2: PRICE_BOTTOM,
							stroke: "var(--border-color)"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("line", {
							x1: "0",
							y1: VOLUME_TOP,
							x2: WIDTH$1,
							y2: VOLUME_TOP,
							stroke: "var(--border-color)"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("text", {
							x: "4",
							y: "13",
							fill: "var(--text-muted)",
							fontSize: "11",
							children: geometry.maxPrice.toFixed(2)
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("text", {
							x: "4",
							y: PRICE_BOTTOM - 5,
							fill: "var(--text-muted)",
							fontSize: "11",
							children: geometry.minPrice.toFixed(2)
						}),
						bars.map((bar, index) => {
							const x = geometry.slot * index + geometry.slot / 2;
							const openY = geometry.priceY(bar.open);
							const closeY = geometry.priceY(bar.close);
							const highY = geometry.priceY(bar.high);
							const lowY = geometry.priceY(bar.low);
							const bodyY = Math.min(openY, closeY);
							const bodyHeight = Math.max(1.5, Math.abs(openY - closeY));
							const color = bar.close > bar.open ? "var(--positive)" : bar.close < bar.open ? "var(--negative)" : "var(--text-muted)";
							const volumeHeight = (bar.volume ?? 0) / geometry.maxVolume * (VOLUME_BOTTOM - VOLUME_TOP);
							return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
								onMouseEnter: () => setHoveredIndex(index),
								children: [
									bar.trade_date === anchorDate && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
										x: geometry.slot * index,
										y: "0",
										width: geometry.slot,
										height: HEIGHT,
										fill: "color-mix(in srgb, var(--accent) 12%, transparent)"
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("line", {
										x1: x,
										y1: highY,
										x2: x,
										y2: lowY,
										stroke: color,
										strokeWidth: "1.2"
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
										x: x - geometry.candleWidth / 2,
										y: bodyY,
										width: geometry.candleWidth,
										height: bodyHeight,
										fill: color
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
										x: x - geometry.candleWidth / 2,
										y: VOLUME_BOTTOM - volumeHeight,
										width: geometry.candleWidth,
										height: Math.max(volumeHeight, 1),
										fill: color,
										opacity: "0.55"
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
										x: geometry.slot * index,
										y: "0",
										width: geometry.slot,
										height: HEIGHT,
										fill: "transparent"
									})
								]
							}, bar.trade_date);
						})
					]
				}), hovered && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "pointer-events-none absolute left-3 top-3 grid grid-cols-4 gap-x-3 gap-y-1 rounded border border-border-theme bg-bg-tertiary/95 px-3 py-2 text-xs shadow-lg",
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: "col-span-2 font-medium text-text-primary",
							children: hovered.trade_date
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: `col-span-2 text-right ${(hovered.pct_chg ?? 0) > 0 ? "text-[var(--positive)]" : (hovered.pct_chg ?? 0) < 0 ? "text-[var(--negative)]" : "text-text-secondary"}`,
							children: isFiniteNumber(hovered.pct_chg) ? `${hovered.pct_chg.toFixed(2)}%` : "-"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: "text-text-muted",
							children: ["开 ", formatPrice(hovered.open)]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: "text-text-muted",
							children: ["高 ", formatPrice(hovered.high)]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: "text-text-muted",
							children: ["低 ", formatPrice(hovered.low)]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: "text-text-muted",
							children: ["收 ", formatPrice(hovered.close)]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: "col-span-2 text-text-muted",
							children: ["量 ", formatVolume$1(hovered.volume)]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: "col-span-2 text-text-muted",
							children: ["额 ", formatAmount$2(hovered.amount)]
						})
					]
				})]
			});
		}
		//#endregion
		//#region src/components/ladder-stock-context/LadderStockContextModal.tsx
		function LoadingBody() {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "flex h-full min-h-0 animate-pulse flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { className: "h-24 shrink-0 rounded-lg bg-bg-secondary" }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { className: "h-32 shrink-0 rounded-lg bg-bg-secondary" }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { className: "min-h-0 flex-1 rounded-lg bg-bg-secondary" })
				]
			});
		}
		function LadderStockContextModal({ stock, anchorDate, onClose }) {
			const canonicalAnchorDate = resolvePopupAnchorDate(anchorDate);
			const query = useLadderStockContext({
				tsCode: stock.ts_code,
				anchorDate
			});
			const data = query.data;
			(0, react.useEffect)(() => {
				const onKeyDown = (event) => {
					if (event.key === "Escape") onClose();
				};
				window.addEventListener("keydown", onKeyDown);
				return () => window.removeEventListener("keydown", onKeyDown);
			}, [onClose]);
			const retry = () => {
				query.refetch();
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(OverlaySurface, {
				className: "z-50 flex items-center justify-center bg-[var(--overlay-bg)] p-2",
				onClick: onClose,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("dialog", {
					open: true,
					"aria-modal": "true",
					"aria-labelledby": "ladder-stock-context-title",
					className: "relative m-0 flex h-[calc(100%-1rem)] max-h-[900px] w-[calc(100%-1rem)] max-w-[1100px] flex-col overflow-hidden rounded-xl border border-border-theme bg-bg-tertiary p-0 shadow-2xl",
					onClick: (event) => event.stopPropagation(),
					onCancel: (event) => {
						event.preventDefault();
						onClose();
					},
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("header", {
						className: "flex shrink-0 items-center justify-between border-b border-border-theme px-5 py-3",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
										id: "ladder-stock-context-title",
										className: "truncate text-lg font-semibold text-text-primary",
										children: data?.stock.name || stock.name
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: "text-sm text-text-muted",
										children: stock.ts_code
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
										className: "rounded bg-[color:var(--accent)]/15 px-2 py-0.5 text-xs text-text-gold",
										children: ["锚定 ", data?.anchor_date || canonicalAnchorDate]
									}),
									query.isFetching && !query.isPending && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: "text-xs text-text-muted",
										children: "更新中…"
									})
								]
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-text-muted",
								children: "仅展示锚定日期当日或之前可知的信息"
							})]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							autoFocus: true,
							onClick: onClose,
							"aria-label": "关闭股票研究弹窗",
							className: "ml-4 rounded p-2 text-text-secondary transition-colors hover:bg-[var(--hover-bg)] hover:text-text-primary",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
								className: "h-5 w-5",
								fill: "none",
								stroke: "currentColor",
								viewBox: "0 0 24 24",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									strokeWidth: 2,
									d: "M6 18L18 6M6 6l12 12"
								})
							})
						})]
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "min-h-0 flex-1 overflow-hidden p-4",
						children: query.isPending ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(LoadingBody, {}) : query.isError || !data ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "flex h-full flex-col items-center justify-center gap-4 text-sm text-text-muted",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "股票研究数据加载失败" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: retry,
								className: "rounded bg-accent-theme px-4 py-2 font-medium text-[var(--accent-contrast)] hover:bg-[var(--accent-hover)]",
								children: "重试"
							})]
						}) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "flex h-full min-h-0 flex-col gap-3",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(AnnouncementSection, {
									rows: data.announcements,
									status: data.section_status.announcements,
									onRetry: retry,
									retrying: query.isFetching
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(AbnormalMovementSection, {
									rows: data.abnormal_movements,
									status: data.section_status.abnormal_movements,
									onRetry: retry,
									retrying: query.isFetching
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
									className: "flex min-h-0 flex-1 flex-col",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "mb-2 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
											className: "text-sm font-semibold text-text-primary",
											children: "日 K 线"
										}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "text-xs text-text-muted",
											children: "最多 60 根 · 成交量单位：手 · 成交额单位：千元"
										})]
									}), data.section_status.klines === "unavailable" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: "flex min-h-0 flex-1 items-center justify-center rounded-lg border border-border-theme bg-bg-secondary",
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionUnavailable, {
											label: "行情数据暂不可用",
											onRetry: retry,
											retrying: query.isFetching
										})
									}) : data.klines.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: "flex min-h-0 flex-1 items-center justify-center rounded-lg border border-border-theme bg-bg-secondary text-sm text-text-muted",
										children: "暂无可用日 K 线数据"
									}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(StockKlineChart, {
										rows: data.klines,
										anchorDate: data.anchor_date
									})]
								})
							]
						})
					})]
				})
			});
		}
		//#endregion
		//#region src/components/SettingsPanel.tsx
		const TABS = [
			{
				id: "limitUp",
				label: "涨停"
			},
			{
				id: "failedLimit",
				label: "炸板"
			},
			{
				id: "limitDown",
				label: "跌停"
			},
			{
				id: "normal",
				label: "普通"
			}
		];
		const CELL_GROUPS = [{
			group: "基础信息",
			title: "基础行情"
		}, {
			group: "涨停与炸板",
			title: "涨停信息"
		}].map(({ group, title }) => ({
			title,
			items: SNAPSHOT_SETTINGS_DISPLAY_DEFINITIONS.filter((definition) => definition.group === group && supportsDisplayType(definition, "cell"))
		}));
		const TAG_ITEMS = SNAPSHOT_SETTINGS_DISPLAY_DEFINITIONS.filter((definition) => supportsDisplayType(definition, "tag"));
		const CURVE_ITEMS = SNAPSHOT_SETTINGS_DISPLAY_DEFINITIONS.filter((definition) => supportsDisplayType(definition, "curve"));
		function cloneFields(fields) {
			return [...fields];
		}
		function SettingsPanel({ isOpen, onClose, config, onConfigChange, lockedFields = [], onLockedFieldClick, isSaving = false, saveError = "" }) {
			const [activeTab, setActiveTab] = (0, react.useState)("limitUp");
			const titleId = (0, react.useId)();
			const closeButtonRef = (0, react.useRef)(null);
			const triggerRef = (0, react.useRef)(null);
			const lockedFieldSet = new Set(lockedFields);
			(0, react.useEffect)(() => {
				if (!isOpen) return;
				triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
				const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());
				return () => {
					window.cancelAnimationFrame(focusFrame);
					const trigger = triggerRef.current;
					triggerRef.current = null;
					if (trigger?.isConnected) trigger.focus({ preventScroll: true });
				};
			}, [isOpen]);
			if (!isOpen) return null;
			const isSelected = (id, category) => {
				return config[category][activeTab].includes(id);
			};
			const handleToggle = (id, category) => {
				if (category === "curve" && activeTab === "normal") return;
				if (lockedFieldSet.has(id)) {
					onLockedFieldClick?.(id);
					return;
				}
				const currentFields = config[category][activeTab];
				const nextFields = currentFields.includes(id) ? currentFields.filter((field) => field !== id) : [...cloneFields(currentFields), id];
				onConfigChange(category, activeTab, nextFields);
			};
			const renderItemGrid = (items, category) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3",
				children: items.map((item) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
					className: `flex items-center gap-2 rounded-lg p-2 transition ${lockedFieldSet.has(item.id) ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:bg-[var(--hover-bg)]"}`,
					title: lockedFieldSet.has(item.id) ? "当前不可用" : void 0,
					onClick: () => {
						if (lockedFieldSet.has(item.id)) onLockedFieldClick?.(item.id);
					},
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: isSelected(item.id, category),
							disabled: lockedFieldSet.has(item.id),
							onChange: () => handleToggle(item.id, category),
							className: "h-4 w-4 rounded border-border-theme bg-bg-tertiary text-text-gold focus:ring-[var(--focus-ring)] focus:ring-offset-[var(--bg-elevated)]"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: "text-sm text-text-primary",
							children: item.label
						}),
						lockedFieldSet.has(item.id) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: "rounded bg-[var(--accent-soft)] px-1.5 py-0.5 text-[10px] text-text-gold",
							children: "受限"
						})
					]
				}, `${category}-${item.id}`))
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(OverlaySurface, {
				className: "z-[70] flex items-center justify-center bg-[var(--overlay-bg)] p-2 backdrop-blur-sm",
				onKeyDown: (event) => {
					if (event.key === "Escape" && !isSaving) {
						event.preventDefault();
						event.stopPropagation();
						onClose();
					}
				},
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("dialog", {
					open: true,
					"aria-modal": "true",
					"aria-labelledby": titleId,
					className: "relative m-0 flex max-h-[calc(100%-1rem)] w-full max-w-[560px] flex-col rounded-xl border border-border-theme bg-bg-elevated p-0 shadow-2xl",
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-border-theme px-6 py-4",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
								id: titleId,
								className: "text-lg font-bold text-text-primary",
								children: "预览参数设置"
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								ref: closeButtonRef,
								type: "button",
								onClick: () => void onClose(),
								disabled: isSaving,
								className: "text-text-secondary transition-colors hover:text-text-primary",
								"aria-label": "关闭设置",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
									className: "h-5 w-5",
									fill: "none",
									stroke: "currentColor",
									viewBox: "0 0 24 24",
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
										strokeLinecap: "round",
										strokeLinejoin: "round",
										strokeWidth: 2,
										d: "M6 18L18 6M6 6l12 12"
									})
								})
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "flex border-b border-border-theme bg-bg-secondary px-4",
							children: TABS.map((tab) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setActiveTab(tab.id),
								className: `flex-1 border-b-2 py-3 text-sm font-medium transition-colors ${activeTab === tab.id ? "border-[var(--accent)] text-text-gold" : "border-transparent text-text-secondary hover:text-text-primary"}`,
								children: tab.label
							}, tab.id))
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "flex-1 overflow-y-auto p-6",
							children: [
								CELL_GROUPS.map((group) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "mb-6",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
										className: "mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted",
										children: group.title
									}), renderItemGrid(group.items, "cell")]
								}, group.title)),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "mb-6",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
										className: "mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted",
										children: "标签"
									}), renderItemGrid(TAG_ITEMS, "tag")]
								}),
								activeTab !== "normal" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
									className: "mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted",
									children: "曲线"
								}), renderItemGrid(CURVE_ITEMS, "curve")] })
							]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-4 border-t border-border-theme bg-bg-secondary px-6 py-4",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "text-xs text-red-400",
								role: "alert",
								children: saveError
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => void onClose(),
								disabled: isSaving,
								className: "rounded-lg bg-accent-theme px-6 py-2 font-medium text-[var(--accent-contrast)] transition-colors hover:bg-[var(--accent-hover)] disabled:cursor-wait disabled:opacity-60",
								children: isSaving ? "保存中..." : "完成"
							})]
						})
					]
				})
			});
		}
		//#endregion
		//#region src/hooks/useLimitDates.ts
		function useLimitDates() {
			return useQuery({
				...sdkQueryPolicy(onclawRuntime.queries.snapshot.limitDates()),
				queryFn: getLimitDates
			});
		}
		//#endregion
		//#region src/hooks/useEnsureSnapshotDates.ts
		function useEnsureSnapshotDates() {
			const { baseDate, startDate, endDate, setBaseDate, setDateRange } = useAppStore();
			const { data: limitDates } = useLimitDates();
			const fullDateList = (0, react.useMemo)(() => {
				return buildSnapshotDateList(limitDates || [], getShanghaiDateString(), { includeMarketDate: true });
			}, [limitDates]);
			(0, react.useEffect)(() => {
				if (!limitDates || limitDates.length === 0 || fullDateList.length === 0) return;
				if (!startDate || !endDate) {
					const endIdx = fullDateList.length - 1;
					const startIdx = Math.max(0, endIdx - 8);
					setDateRange(fullDateList[startIdx], fullDateList[endIdx]);
				}
				if (!baseDate) setBaseDate(fullDateList[fullDateList.length - 1]);
			}, [
				baseDate,
				endDate,
				fullDateList,
				limitDates,
				setBaseDate,
				setDateRange,
				startDate
			]);
			return {
				baseDate,
				startDate,
				endDate,
				fullDateList,
				limitDates: limitDates || []
			};
		}
		//#endregion
		//#region src/components/MiniChart.tsx
		const MiniChart = (0, react.memo)(function MiniChart({ data, width, height, color = "#60a5fa", baselineColor, opacity = .3, minVal, maxVal, baseline }) {
			const { pathD, baselineY } = (0, react.useMemo)(() => {
				if (!data || data.length < 2) return {
					pathD: "",
					baselineY: null
				};
				let finalMin = minVal !== void 0 ? minVal : Math.min(...data);
				let finalMax = maxVal !== void 0 ? maxVal : Math.max(...data);
				const dataMin = Math.min(...data);
				const dataMax = Math.max(...data);
				if (finalMin > dataMin) finalMin = dataMin;
				if (finalMax < dataMax) finalMax = dataMax;
				const range = finalMax - finalMin || 1;
				const points = data.map((val, i) => {
					return `${i / (data.length - 1) * width},${height - (val - finalMin) / range * height}`;
				});
				let bY = null;
				if (baseline !== void 0 && baseline >= finalMin && baseline <= finalMax) bY = height - (baseline - finalMin) / range * height;
				return {
					pathD: `M${points.join(" L")}`,
					baselineY: bY
				};
			}, [
				data,
				width,
				height,
				minVal,
				maxVal,
				baseline
			]);
			if (!pathD) return null;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
				width,
				height,
				className: "absolute inset-0 pointer-events-none",
				style: { opacity },
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					d: pathD,
					fill: "none",
					stroke: color,
					strokeWidth: 1.5
				}), baselineY !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("line", {
					x1: 0,
					y1: baselineY,
					x2: width,
					y2: baselineY,
					stroke: baselineColor ?? color,
					strokeWidth: 1,
					strokeDasharray: "2,2",
					opacity: .5
				})]
			});
		});
		//#endregion
		//#region src/utils/snapshotDisplayColor.ts
		const POSITIVE_COLOR = "var(--positive)";
		const NEGATIVE_COLOR = "var(--negative)";
		function finiteNumber$1(value) {
			if (value === null || value === void 0 || value === "") return null;
			const numeric = Number(value);
			return Number.isFinite(numeric) ? numeric : null;
		}
		function getSnapshotDisplayTextColor(displayId, snapshot, defaultColor) {
			if (displayId === "high_low_pct") {
				const high = finiteNumber$1(snapshot?.high);
				const low = finiteNumber$1(snapshot?.low);
				const preClose = finiteNumber$1(snapshot?.pre_close);
				if (high === null || low === null || preClose === null || preClose <= 0) return defaultColor;
				const amplitude = (high - low) / preClose * 100;
				return amplitude >= 0 && amplitude <= 4.5 ? POSITIVE_COLOR : defaultColor;
			}
			if (displayId === "ma5_bias") {
				const ma5Bias = finiteNumber$1(snapshot?.ma5_bias);
				if (ma5Bias === null) return defaultColor;
				if (ma5Bias > 6) return POSITIVE_COLOR;
				if (ma5Bias < -6) return NEGATIVE_COLOR;
				return defaultColor;
			}
			if (displayId === "pct_chg" || displayId === "open_close_pct") {
				const pctChange = finiteNumber$1(snapshot?.pct_chg);
				if (pctChange === null || pctChange === 0) return "var(--text-primary)";
				return pctChange > 0 ? POSITIVE_COLOR : NEGATIVE_COLOR;
			}
			if (displayId === "close") {
				const close = finiteNumber$1(snapshot?.close);
				const preClose = finiteNumber$1(snapshot?.pre_close);
				if (close === null || preClose === null || close === preClose) return "var(--text-primary)";
				return close > preClose ? POSITIVE_COLOR : NEGATIVE_COLOR;
			}
			return defaultColor;
		}
		//#endregion
		//#region src/components/DataCell.tsx
		const DataCell = (0, react.memo)(function DataCell({ snapshot, displayConfig, showGlobalCurve, width, height, onStockClick, stock, tradeDate, isSelectedDate = false, isFutureDate = false }) {
			const status = getCellStatus(snapshot);
			const colors = CELL_STATUS_COLORS[status];
			const config = (0, react.useMemo)(() => {
				let statusKey = "normal";
				if (status === "limitUp") statusKey = "limitUp";
				else if (status === "limitDown") statusKey = "limitDown";
				else if (status === "failedLimit") statusKey = "failedLimit";
				return {
					cell: displayConfig.cell[statusKey],
					tag: displayConfig.tag[statusKey],
					curve: displayConfig.curve[statusKey]
				};
			}, [status, displayConfig]);
			const bgColor = (0, react.useMemo)(() => {
				if (isFutureDate) return status === "normal" ? "var(--market-cell-future)" : `color-mix(in srgb, ${colors.bg} 58%, var(--market-cell-future))`;
				return colors.bg;
			}, [
				status,
				colors.bg,
				isFutureDate
			]);
			const cellEntries = (0, react.useMemo)(() => {
				if (status === "suspended") return [{
					value: "停牌",
					displayId: "",
					isLarge: true
				}];
				if (!snapshot) return [{
					value: "-",
					displayId: "",
					isLarge: true
				}];
				const items = [];
				for (const displayId of config.cell) {
					const displayValue = DisplayFormatHelper.computeValue(displayId, snapshot);
					if (!displayValue || displayValue === "-" || displayValue === "0.00%") continue;
					items.push({
						value: displayValue,
						displayId,
						isLarge: false
					});
				}
				if (items.length > 0) items[0].isLarge = true;
				return items;
			}, [
				snapshot,
				config.cell,
				status
			]);
			const tags = (0, react.useMemo)(() => {
				if (!snapshot) return [];
				const activeTags = [];
				if (config.tag.includes("regulatory_status") && snapshot.regulatory_status) activeTags.push({
					background: "var(--tag-regulatory-bg)",
					title: "监管",
					text: "监"
				});
				if (config.tag.includes("has_convertible") && snapshot.has_convertible) activeTags.push({
					background: "var(--tag-convertible-bg)",
					title: "可转债",
					text: "债"
				});
				if (config.tag.includes("is_auction_up_limit") && snapshot.is_auction_up_limit) activeTags.push({
					background: "var(--tag-auction-bg)",
					title: "一字竞价",
					text: "一"
				});
				return activeTags;
			}, [snapshot, config.tag]);
			const showCurve = config.curve.includes("minute_curve") && showGlobalCurve;
			const minuteCurve = snapshot?.minute_curve;
			const chartDomain = (0, react.useMemo)(() => {
				if (!showCurve || !minuteCurve || minuteCurve.length === 0) return null;
				let ratio = .1;
				if (snapshot?.ts_code) {
					const code = snapshot.ts_code;
					if (code.startsWith("688") || code.startsWith("300")) ratio = .2;
					else if (code.startsWith("9")) ratio = .3;
					else if (snapshot.name?.includes("ST")) ratio = .05;
				}
				const preClose = snapshot?.pre_close;
				const dataMax = Math.max(...minuteCurve);
				const dataMin = Math.min(...minuteCurve);
				if (preClose && preClose > 0) {
					if (Math.abs(dataMax - preClose) / preClose < .5 || Math.abs(dataMin - preClose) / preClose < .5) return {
						minVal: preClose * (1 - ratio),
						maxVal: preClose * (1 + ratio),
						baseline: preClose
					};
				}
				if (dataMax <= 1.5 && dataMin >= -1.5) return {
					minVal: -ratio,
					maxVal: ratio,
					baseline: 0
				};
				if (dataMax <= 150 && dataMin >= -150) return {
					minVal: -ratio * 100,
					maxVal: ratio * 100,
					baseline: 0
				};
				return null;
			}, [
				showCurve,
				minuteCurve,
				snapshot
			]);
			const borderClasses = isSelectedDate ? "border-r-2 border-b z-10" : "border-r border-b";
			const handleClick = (0, react.useCallback)(() => {
				if (onStockClick) onStockClick(stock, tradeDate);
			}, [
				onStockClick,
				stock,
				tradeDate
			]);
			const getTextColor = (displayId) => {
				if (status !== "normal") return colors.text;
				return getSnapshotDisplayTextColor(displayId, snapshot, colors.text);
			};
			const primaryIsStatusBadge = status === "suspended" || status !== "normal" && cellEntries[0]?.displayId === "consecutive_desc";
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: `relative flex flex-col items-center justify-center cursor-pointer transition-shadow hover:shadow-[inset_0_0_0_1px_var(--market-grid-strong)] ${borderClasses}`,
				style: {
					width,
					height,
					backgroundColor: bgColor,
					borderBottomColor: colors.border,
					borderRightColor: isSelectedDate ? "var(--market-grid-selected)" : colors.border
				},
				onClick: handleClick,
				children: [
					showCurve && minuteCurve && minuteCurve.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MiniChart, {
						data: minuteCurve,
						width,
						height,
						color: colors.curve,
						baselineColor: colors.baseline,
						opacity: status === "normal" ? .72 : .5,
						minVal: chartDomain?.minVal,
						maxVal: chartDomain?.maxVal,
						baseline: chartDomain?.baseline
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "relative z-10 flex flex-col w-full px-1",
						children: cellEntries.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "flex items-center justify-center w-full",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: `font-mono font-bold ${primaryIsStatusBadge ? "rounded px-1.5 py-0.5 text-xs leading-4 shadow-sm" : "text-sm"}`,
								style: primaryIsStatusBadge ? {
									backgroundColor: colors.badge,
									color: colors.badgeText
								} : { color: getTextColor(cellEntries[0].displayId) },
								children: cellEntries[0].value
							})
						}), cellEntries.length > 1 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "flex items-center justify-center w-full text-[10px] font-mono gap-1 flex-wrap",
							children: cellEntries.slice(1).map((item) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								style: { color: getTextColor(item.displayId) },
								children: item.value
							}, `${item.displayId}-${item.value}`))
						})] })
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "absolute top-0.5 left-0.5 flex gap-0.5 z-20",
						children: tags.map((tag) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "flex h-[14px] w-[14px] items-center justify-center rounded-full text-[9px] font-bold leading-none text-[var(--badge-fg)] shadow-sm",
							style: { backgroundColor: tag.background },
							title: tag.title,
							children: tag.text
						}, tag.title))
					})
				]
			});
		}, (prevProps, nextProps) => {
			return prevProps.snapshot === nextProps.snapshot && prevProps.isSelectedDate === nextProps.isSelectedDate && prevProps.isFutureDate === nextProps.isFutureDate && prevProps.showGlobalCurve === nextProps.showGlobalCurve && prevProps.displayConfig === nextProps.displayConfig;
		});
		//#endregion
		//#region src/components/snapshot-preview/SnapshotPreviewGrid.tsx
		const SECTION_HEADER_HEIGHT = 28;
		const ROW_HEIGHT$1 = 52;
		const FROZEN_COL_WIDTH = 76;
		const CELL_WIDTH = 80;
		const REASON_COL_WIDTH = 300;
		const SnapshotPreviewGrid = (0, react.memo)(function SnapshotPreviewGrid({ sections, visibleDates, baseDate, cellDisplayConfig, showMinuteCurve, isFetching = false, canShiftWindow = true, canSelectDate = true, isDateSelectable = () => true, onShiftWindow, onDateClick, onStockClick, reasonHeader = "概念原因", getReason = (stock) => stock.snapshots.get(baseDate)?.limit_reason || "", getSubtitle = (stock) => stock.display_topic || (stock.consecutive_count > 0 ? `${stock.consecutive_count}连板` : ""), renderReason, renderDateLabel, getDateTitle = (dateColumn, selectable) => selectable ? `${dateColumn.date}（有业绩，点击切换）` : `${dateColumn.date}（仅预览行情）`, preserveHeaderWhenEmpty = false, emptyMessage = "暂无可预览的快照数据", ladderGroups, visibleGroupCounts, showFilteredGroupCounts = false, cellRegionState = "ready", cellRegionMessage, onCellRegionRetry, onViewportHeightChange }) {
			const headerDragRef = (0, react.useRef)({
				isDragging: false,
				startX: 0
			});
			const dragDistanceRef = (0, react.useRef)(0);
			const [dragOffset, setDragOffset] = (0, react.useState)(0);
			const [isSnapping, setIsSnapping] = (0, react.useState)(false);
			const mainScrollRef = (0, react.useRef)(null);
			const frozenColScrollRef = (0, react.useRef)(null);
			const sectionRefs = (0, react.useRef)(/* @__PURE__ */ new Map());
			const [stickyHeaders, setStickyHeaders] = (0, react.useState)([]);
			const wheelAccumulator = (0, react.useRef)(0);
			const isScrolling = (0, react.useRef)(false);
			const userScrollIntentRef = (0, react.useRef)(false);
			const pendingGroupRef = (0, react.useRef)(null);
			const visibleDateKey = visibleDates.map((item) => item.date).join("|");
			const suppressCellData = cellRegionState !== "ready";
			const handleHeaderMouseDown = (0, react.useCallback)((event) => {
				if (!canShiftWindow || event.button !== 0) return;
				headerDragRef.current = {
					isDragging: true,
					startX: event.pageX
				};
				dragDistanceRef.current = 0;
				setIsSnapping(false);
			}, [canShiftWindow]);
			const handleHeaderMouseMove = (0, react.useCallback)((event) => {
				if (!headerDragRef.current.isDragging) return;
				const deltaX = event.pageX - headerDragRef.current.startX;
				dragDistanceRef.current += Math.abs(event.movementX);
				let newDragOffset = deltaX;
				const steps = Math.trunc(deltaX / CELL_WIDTH);
				if (steps !== 0) {
					if (onShiftWindow(-steps)) {
						headerDragRef.current.startX += steps * CELL_WIDTH;
						newDragOffset = deltaX - steps * CELL_WIDTH;
					}
				}
				setDragOffset(newDragOffset);
			}, [onShiftWindow]);
			const handleHeaderMouseUp = (0, react.useCallback)(() => {
				if (!headerDragRef.current.isDragging) return;
				headerDragRef.current.isDragging = false;
				setIsSnapping(true);
				setDragOffset(0);
				setTimeout(() => setIsSnapping(false), 200);
			}, []);
			(0, react.useEffect)(() => {
				window.addEventListener("mousemove", handleHeaderMouseMove);
				window.addEventListener("mouseup", handleHeaderMouseUp);
				return () => {
					window.removeEventListener("mousemove", handleHeaderMouseMove);
					window.removeEventListener("mouseup", handleHeaderMouseUp);
				};
			}, [handleHeaderMouseMove, handleHeaderMouseUp]);
			(0, react.useEffect)(() => {
				userScrollIntentRef.current = false;
				setDragOffset(0);
				setIsSnapping(false);
				setStickyHeaders([]);
				pendingGroupRef.current = null;
				if (mainScrollRef.current) mainScrollRef.current.scrollTop = 0;
				if (frozenColScrollRef.current) frozenColScrollRef.current.scrollTop = 0;
			}, [baseDate, visibleDateKey]);
			(0, react.useEffect)(() => {
				const element = mainScrollRef.current;
				if (!element || !onViewportHeightChange) return;
				const publishHeight = () => onViewportHeightChange(Math.round(element.clientHeight));
				publishHeight();
				const observer = new ResizeObserver(publishHeight);
				observer.observe(element);
				return () => observer.disconnect();
			}, [onViewportHeightChange]);
			const updateStickyHeaders = (0, react.useCallback)(() => {
				if (!mainScrollRef.current) return;
				const scrollTop = mainScrollRef.current.scrollTop;
				const visibleHeaders = [];
				let currentTop = 0;
				for (const section of sections) {
					const sectionEl = sectionRefs.current.get(section.id);
					if (!sectionEl) continue;
					const sectionTop = sectionEl.offsetTop - scrollTop;
					const sectionBottom = sectionTop + sectionEl.offsetHeight - SECTION_HEADER_HEIGHT;
					if (sectionTop < currentTop && sectionBottom > currentTop) {
						visibleHeaders.push({
							id: section.id,
							title: section.title,
							subtitle: section.subtitle,
							color: section.color,
							top: currentTop
						});
						currentTop += SECTION_HEADER_HEIGHT;
					}
				}
				setStickyHeaders((previous) => {
					if (previous.length !== visibleHeaders.length) return visibleHeaders;
					for (let index = 0; index < previous.length; index += 1) if (previous[index].id !== visibleHeaders[index].id || previous[index].top !== visibleHeaders[index].top) return visibleHeaders;
					return previous;
				});
			}, [sections]);
			(0, react.useEffect)(() => {
				updateStickyHeaders();
			}, [updateStickyHeaders]);
			const handleMainScroll = (0, react.useCallback)(() => {
				if (isScrolling.current) return;
				window.requestAnimationFrame(() => {
					if (mainScrollRef.current && frozenColScrollRef.current) {
						frozenColScrollRef.current.scrollTop = mainScrollRef.current.scrollTop;
						updateStickyHeaders();
						const element = mainScrollRef.current;
						if (shouldDemandNextLadderGroupFromScroll({
							scrollHeight: element.scrollHeight,
							scrollTop: element.scrollTop,
							clientHeight: element.clientHeight,
							threshold: ROW_HEIGHT$1 * 3,
							userInitiated: userScrollIntentRef.current
						})) ladderGroups?.requestNextGroup();
					}
					userScrollIntentRef.current = false;
					isScrolling.current = false;
				});
				isScrolling.current = true;
			}, [ladderGroups, updateStickyHeaders]);
			const scrollToSection = (0, react.useCallback)((sectionId) => {
				const sectionEl = sectionRefs.current.get(sectionId);
				if (!sectionEl || !mainScrollRef.current) return;
				const sectionIndex = sections.findIndex((section) => section.id === sectionId);
				const targetScroll = sectionEl.offsetTop - sectionIndex * SECTION_HEADER_HEIGHT;
				userScrollIntentRef.current = false;
				mainScrollRef.current.scrollTo({
					top: targetScroll,
					behavior: "smooth"
				});
			}, [sections]);
			(0, react.useEffect)(() => {
				const group = pendingGroupRef.current;
				if (!group) return;
				const definition = LADDER_GROUP_BY_ID[group];
				if (!definition) return;
				const state = ladderGroups?.groupStates[group];
				if (state === "ready") {
					scrollToSection(definition.sectionId);
					pendingGroupRef.current = null;
				} else if (state === "empty" || state === "error") pendingGroupRef.current = null;
			}, [
				ladderGroups,
				scrollToSection,
				sections
			]);
			const handleWheel = (0, react.useCallback)((event) => {
				if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) userScrollIntentRef.current = true;
				if (!canShiftWindow) return;
				if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
				event.preventDefault();
				wheelAccumulator.current += event.deltaX;
				if (wheelAccumulator.current > CELL_WIDTH) {
					onShiftWindow(1);
					wheelAccumulator.current -= CELL_WIDTH;
				} else if (wheelAccumulator.current < -80) {
					onShiftWindow(-1);
					wheelAccumulator.current += CELL_WIDTH;
				}
			}, [canShiftWindow, onShiftWindow]);
			const transformStyle = {
				transform: `translateX(${dragOffset}px)`,
				transition: isSnapping ? "transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1)" : "none"
			};
			const totalDataWidth = visibleDates.length * CELL_WIDTH + REASON_COL_WIDTH;
			const renderStockRow = (stock, isLast) => {
				const currentReason = suppressCellData ? "" : getReason(stock);
				return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: `flex ${!isLast ? "border-b border-[var(--market-grid-strong)]" : ""}`,
					style: { height: ROW_HEIGHT$1 },
					children: [visibleDates.map((dateCol) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DataCell, {
						snapshot: suppressCellData ? void 0 : stock.snapshots.get(dateCol.date),
						displayConfig: cellDisplayConfig,
						showGlobalCurve: showMinuteCurve,
						width: CELL_WIDTH,
						height: ROW_HEIGHT$1,
						onStockClick,
						stock,
						tradeDate: dateCol.date,
						isSelectedDate: dateCol.date === baseDate,
						isFutureDate: dateCol.date > baseDate
					}, dateCol.date)), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "flex items-center overflow-hidden border-r border-[var(--market-grid)] bg-[var(--market-cell)] px-2 text-xs text-[var(--market-text-secondary)] transition-colors hover:bg-[var(--market-cell-hover)]",
						style: {
							width: REASON_COL_WIDTH,
							height: ROW_HEIGHT$1
						},
						title: currentReason,
						children: suppressCellData ? null : renderReason ? renderReason(stock) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: "block w-full truncate",
							children: currentReason || "-"
						})
					})]
				}, stock.ts_code);
			};
			const renderFrozenStockCell = (stock, isLast) => {
				const marketBadge = getMarketBadge(stock.ts_code);
				const subtitle = getSubtitle(stock);
				return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onStockClick(stock, baseDate),
					className: `relative flex flex-col items-start justify-center bg-[var(--market-frozen)] px-2 text-left transition-colors hover:bg-[var(--market-cell-hover)] ${!isLast ? "border-b border-[var(--market-grid)]" : ""}`,
					style: {
						height: ROW_HEIGHT$1,
						width: FROZEN_COL_WIDTH
					},
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: "w-full truncate pr-1 text-sm font-bold text-[var(--market-text-primary)]",
							children: stock.name
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: "w-full truncate pr-3 text-[11px] text-[var(--market-text-muted)]",
							children: subtitle
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "mt-1 flex gap-0.5",
							children: [
								stock.has_regulatory && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-red-500" }),
								stock.is_one_word && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-purple-500" }),
								stock.has_convertible && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-blue-500" })
							]
						}),
						marketBadge && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: `absolute bottom-1 right-1 flex h-4 w-4 items-center justify-center rounded-full shadow-sm ${marketBadge.color}`,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: `scale-90 transform text-[10px] font-bold ${marketBadge.textColor}`,
								children: marketBadge.label
							})
						})
					]
				}, stock.ts_code);
			};
			if (sections.length === 0 && !preserveHeaderWhenEmpty) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "flex h-full items-center justify-center bg-[var(--market-canvas)] text-sm text-[var(--market-text-muted)]",
				children: emptyMessage
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "flex h-full flex-col overflow-hidden bg-[var(--market-canvas)]",
				onWheel: handleWheel,
				children: [ladderGroups ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "flex shrink-0 items-center gap-1 overflow-x-auto border-b border-[var(--market-grid-strong)] bg-[var(--market-header)] px-2 py-1.5",
					children: ladderGroups.groupOrder.map((group) => {
						const definition = LADDER_GROUP_BY_ID[group];
						const state = ladderGroups.groupStates[group];
						const count = ladderGroups.groupCounts[group];
						const countLabel = formatLadderGroupCount(count, visibleGroupCounts?.[group], showFilteredGroupCounts);
						return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								if (state === "ready") {
									scrollToSection(definition.sectionId);
									return;
								}
								if (state === "empty") return;
								pendingGroupRef.current = group;
								ladderGroups.requestGroup(group);
							},
							className: `shrink-0 rounded-md px-2.5 py-1 text-xs transition-colors ${state === "ready" ? "bg-[var(--market-selected)] text-[var(--market-text-primary)] hover:bg-[var(--market-cell-hover)]" : state === "empty" ? "cursor-default text-[var(--market-text-muted)] opacity-60" : "text-[var(--market-text-secondary)] hover:bg-[var(--market-cell-hover)] hover:text-[var(--market-text-primary)]"}`,
							title: state === "empty" ? `${definition.label}当前为空` : `查看${definition.label}`,
							children: [
								definition.label.replace("梯队", ""),
								countLabel ? ` ${countLabel}` : "",
								state === "loading" ? "…" : ""
							]
						}, group);
					})
				}) : null, /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "flex min-h-0 flex-1 overflow-hidden",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "z-30 flex w-[76px] shrink-0 flex-col shadow-[4px_0_12px_var(--market-frozen-shadow)]",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "flex h-[36px] shrink-0 items-center justify-center border-b border-r border-[var(--market-grid-strong)] bg-[var(--market-header)] text-xs text-[var(--market-text-muted)]",
							children: "股票"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							ref: frozenColScrollRef,
							className: "hide-scrollbar flex-1 overflow-hidden border-r border-[var(--market-grid-strong)] bg-[var(--market-frozen)]",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "relative",
								children: sections.map((section) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: "border-b border-[var(--market-grid-strong)]",
									style: {
										height: SECTION_HEADER_HEIGHT,
										backgroundColor: section.color
									}
								}), section.stocks.map((stock, index) => renderFrozenStockCell(stock, index === section.stocks.length - 1))] }, section.id))
							})
						})]
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "group relative flex min-w-0 flex-1 flex-col overflow-hidden",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: `z-20 h-[36px] shrink-0 select-none overflow-hidden border-b border-[var(--market-grid-strong)] bg-[var(--market-header)] ${canShiftWindow ? "cursor-grab active:cursor-grabbing" : "cursor-default"}`,
							onMouseDown: canShiftWindow ? handleHeaderMouseDown : void 0,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "flex",
								style: {
									width: totalDataWidth,
									...transformStyle
								},
								children: [visibleDates.map((dateCol, index) => {
									const dateSelectable = canSelectDate && Boolean(onDateClick) && isDateSelectable(dateCol.date);
									return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										type: "button",
										title: getDateTitle(dateCol, dateSelectable),
										onClick: () => {
											if (dateSelectable && onDateClick && dragDistanceRef.current <= 5) onDateClick(dateCol.date);
										},
										className: `relative flex h-[36px] w-[80px] shrink-0 items-center justify-center border-r border-[var(--market-grid)] text-xs font-medium transition-colors ${dateCol.isBaseDate ? "bg-accent-theme text-[var(--accent-contrast)]" : dateSelectable ? "bg-[color:color-mix(in_srgb,var(--accent)_10%,transparent)] text-text-gold hover:bg-[color:color-mix(in_srgb,var(--accent)_20%,transparent)]" : dateCol.isRealtime ? "cursor-not-allowed text-red-400/60" : "cursor-not-allowed text-[var(--market-text-muted)] opacity-60"}`,
										children: [renderDateLabel ? renderDateLabel(dateCol, index) : dateCol.isRealtime ? "实时" : dateCol.date.slice(5), dateCol.isRealtime && isFetching && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "ml-1 h-1.5 w-1.5 animate-pulse rounded-full bg-green-600 shadow-sm shadow-green-400",
											title: "更新中"
										})]
									}, dateCol.date);
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: "flex h-[36px] w-[300px] shrink-0 items-center justify-center border-r border-[var(--market-grid)] text-xs font-medium text-[var(--market-text-secondary)]",
									children: reasonHeader
								})]
							})
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							ref: mainScrollRef,
							className: "hide-scrollbar relative flex-1 overflow-x-hidden overflow-y-auto bg-[var(--market-canvas)]",
							onScroll: handleMainScroll,
							onPointerDown: () => {
								userScrollIntentRef.current = true;
							},
							onPointerMove: (event) => {
								if (event.buttons) userScrollIntentRef.current = true;
							},
							onTouchMove: () => {
								userScrollIntentRef.current = true;
							},
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									style: {
										width: totalDataWidth,
										minHeight: "100%",
										...transformStyle
									},
									children: sections.map((section) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										ref: (element) => {
											if (element) sectionRefs.current.set(section.id, element);
										},
										className: "relative",
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
											className: "flex h-[28px] items-center border-b border-[var(--market-grid-strong)] px-3 text-sm font-medium text-[var(--market-text-primary)]",
											style: { backgroundColor: section.color },
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: "font-semibold",
												children: section.title
											}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: "ml-2 text-xs text-[var(--market-text-secondary)]",
												children: section.subtitle
											})]
										}), section.stocks.map((stock, index) => renderStockRow(stock, index === section.stocks.length - 1))]
									}, section.id))
								}),
								sections.length === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: "pointer-events-none absolute inset-0 flex items-center justify-center text-sm text-[var(--market-text-muted)]",
									children: cellRegionState === "ready" ? emptyMessage : null
								}),
								cellRegionState !== "ready" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: `absolute inset-0 z-30 flex items-center justify-center bg-[color:color-mix(in_srgb,var(--market-canvas)_88%,transparent)] ${cellRegionState === "loading" ? "pointer-events-none" : ""}`,
									role: cellRegionState === "error" ? "alert" : "status",
									"aria-live": "polite",
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: "flex max-w-md flex-col items-center gap-3 px-6 text-center",
										children: cellRegionState === "loading" ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: "h-5 w-5 animate-spin rounded-full border-2 border-[var(--market-grid-strong)] border-t-accent-theme" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "text-sm text-[var(--market-text-secondary)]",
											children: cellRegionMessage || "正在刷新所选日期数据…"
										})] }) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "text-sm text-red-400",
											children: cellRegionMessage || "所选日期数据加载失败"
										}), onCellRegionRetry ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: onCellRegionRetry,
											className: "rounded-md bg-accent-theme px-3 py-1.5 text-xs font-medium text-[var(--accent-contrast)] hover:bg-[var(--accent-hover)]",
											children: "重试"
										}) : null] })
									})
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: "pointer-events-none absolute left-0 right-0 top-0 z-20",
									children: stickyHeaders.map((header) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "pointer-events-auto absolute left-0 right-0 flex cursor-pointer items-center border-b border-[var(--market-grid-strong)] pl-3 text-sm font-medium text-[var(--market-text-primary)] shadow-[0_2px_8px_var(--market-frozen-shadow)] hover:brightness-110",
										style: {
											height: SECTION_HEADER_HEIGHT,
											backgroundColor: header.color,
											top: header.top
										},
										onClick: () => scrollToSection(header.id),
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "font-semibold",
											children: header.title
										}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "ml-2 text-xs text-[var(--market-text-secondary)]",
											children: header.subtitle
										})]
									}, header.id))
								})
							]
						})]
					})]
				})]
			});
		});
		//#endregion
		//#region src/hooks/useSnapshotPreviewSettingsPanel.ts
		function useSnapshotPreviewSettingsPanel(profileName) {
			const { previewProfiles, savePreviewProfile } = useAppStore();
			const profile = previewProfiles[profileName];
			const openedValueRef = (0, react.useRef)("");
			const savingRef = (0, react.useRef)(false);
			const [isOpen, setIsOpen] = (0, react.useState)(false);
			const [isSaving, setIsSaving] = (0, react.useState)(false);
			const [saveError, setSaveError] = (0, react.useState)("");
			return {
				isOpen,
				isSaving,
				saveError,
				open: (0, react.useCallback)(() => {
					openedValueRef.current = JSON.stringify(profile);
					setSaveError("");
					setIsOpen(true);
				}, [profile]),
				close: (0, react.useCallback)(async () => {
					if (savingRef.current) return;
					if (!hasSnapshotPreviewProfileChanged(openedValueRef.current, profile)) {
						setSaveError("");
						setIsOpen(false);
						return;
					}
					savingRef.current = true;
					setIsSaving(true);
					setSaveError("");
					try {
						await savePreviewProfile(profileName);
						openedValueRef.current = JSON.stringify(profile);
						setIsOpen(false);
					} catch {
						setSaveError("参数设置保存失败，请检查网络后重试。");
					} finally {
						savingRef.current = false;
						setIsSaving(false);
					}
				}, [
					profile,
					profileName,
					savePreviewProfile
				])
			};
		}
		//#endregion
		//#region src/components/snapshotPreviewDateRefreshModel.ts
		function beginSnapshotPreviewDateRefresh(targetDate) {
			return targetDate;
		}
		function settleSnapshotPreviewDateRefresh(refreshTarget, activeBaseDate, isDateDataFetching) {
			if (!refreshTarget || refreshTarget !== activeBaseDate || isDateDataFetching) return refreshTarget;
			return null;
		}
		function resolveSnapshotPreviewCellRegionState({ refreshTarget, initialLoading, error }) {
			if (refreshTarget || initialLoading) return "loading";
			if (error) return "error";
			return "ready";
		}
		//#endregion
		//#region src/components/LianBanTiDui.tsx
		const LadderPreview = (0, react.memo)(function LadderPreview() {
			const { baseDate, startDate, endDate, setBaseDate, setDateRange, cellDisplayConfig, updateConfig, activeLadderTopicId, setActiveLadderTopicId, showMinuteCurve, toggleMinuteCurve, previewProfiles, savePreviewProfile } = useAppStore();
			const settingsPanel = useSnapshotPreviewSettingsPanel("ladder");
			const [refreshTarget, setRefreshTarget] = (0, react.useState)(null);
			const [viewportHeight, setViewportHeight] = (0, react.useState)(0);
			const { fullDateList, limitDates } = useEnsureSnapshotDates();
			const datesRef = (0, react.useRef)({
				fullDateList,
				startDate,
				endDate
			});
			const handleToggleMinuteCurve = (0, react.useCallback)(() => {
				const nextProfile = {
					...previewProfiles.ladder,
					showMinuteCurve: !previewProfiles.ladder.showMinuteCurve
				};
				toggleMinuteCurve();
				savePreviewProfile("ladder", nextProfile).catch(() => {
					toggleMinuteCurve();
					window.alert("分钟曲线设置保存失败，请稍后重试。");
				});
			}, [
				previewProfiles.ladder,
				savePreviewProfile,
				toggleMinuteCurve
			]);
			(0, react.useEffect)(() => {
				datesRef.current = {
					fullDateList,
					startDate,
					endDate
				};
			}, [
				fullDateList,
				startDate,
				endDate
			]);
			const { loading, isFetching, isWindowFetching, error, windowError, sections, topics, totalStats, dates: visibleDates, refresh, ladderGroups } = useLimitInfoSnapshotData({
				startDate,
				endDate,
				baseDate,
				limitDates,
				activeTopicId: activeLadderTopicId,
				cellDisplayConfig,
				showMinuteCurve,
				viewportHeight
			});
			const cellRegionState = resolveSnapshotPreviewCellRegionState({
				refreshTarget,
				initialLoading: loading,
				error: windowError
			});
			const settledSectionsRef = (0, react.useRef)(sections);
			(0, react.useEffect)(() => {
				setRefreshTarget((current) => settleSnapshotPreviewDateRefresh(current, baseDate, isWindowFetching));
			}, [baseDate, isWindowFetching]);
			(0, react.useEffect)(() => {
				if (cellRegionState === "ready") settledSectionsRef.current = sections;
			}, [cellRegionState, sections]);
			const gridSections = cellRegionState === "ready" ? sections : settledSectionsRef.current;
			const visibleGroupCounts = (0, react.useMemo)(() => {
				if (!activeLadderTopicId || !ladderGroups) return void 0;
				const counts = {};
				for (const group of ladderGroups.groupOrder) if (ladderGroups.groupStates[group] === "ready") counts[group] = 0;
				for (const section of sections) {
					const group = LADDER_GROUPS.find((definition) => definition.sectionId === section.id)?.apiId;
					if (group && ladderGroups.groupStates[group] === "ready") counts[group] = section.stocks.length;
				}
				return counts;
			}, [
				activeLadderTopicId,
				ladderGroups,
				sections
			]);
			const shiftWindow = (0, react.useCallback)((step) => {
				const { fullDateList: allDates, startDate: currentStartDate } = datesRef.current;
				if (!allDates.length || !currentStartDate) return false;
				const currentStartIdx = allDates.indexOf(currentStartDate);
				if (currentStartIdx === -1) return false;
				let newStartIdx = currentStartIdx + step;
				newStartIdx = Math.max(0, Math.min(newStartIdx, allDates.length - 9));
				const newEndIdx = Math.min(allDates.length - 1, newStartIdx + 8);
				const nextStartDate = allDates[newStartIdx];
				const nextEndDate = allDates[newEndIdx];
				if (nextStartDate !== currentStartDate) {
					setDateRange(nextStartDate, nextEndDate);
					return true;
				}
				return false;
			}, [setDateRange]);
			const { handleStockClick, popupSelection, closeStockPopup } = useSnapshotPreviewStockClick(baseDate);
			const handleDateClick = (0, react.useCallback)((date) => {
				if (date === baseDate) return;
				setRefreshTarget(beginSnapshotPreviewDateRefresh(date));
				setBaseDate(date);
			}, [baseDate, setBaseDate]);
			const handleRetry = (0, react.useCallback)(() => {
				setRefreshTarget(beginSnapshotPreviewDateRefresh(baseDate));
				refresh();
			}, [baseDate, refresh]);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col overflow-hidden bg-bg-primary",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(TopicNav, {
						topics,
						activeTopicId: activeLadderTopicId,
						onTopicChange: setActiveLadderTopicId,
						totalStats
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "flex-1 overflow-hidden",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SnapshotPreviewGrid, {
							sections: gridSections,
							visibleDates,
							baseDate,
							cellDisplayConfig,
							showMinuteCurve,
							isFetching,
							canShiftWindow: true,
							canSelectDate: true,
							onShiftWindow: shiftWindow,
							onDateClick: handleDateClick,
							getDateTitle: (dateColumn, selectable) => {
								const label = dateColumn.isRealtime ? "实时" : dateColumn.date;
								return selectable ? `${label}（点击切换）` : label;
							},
							onStockClick: handleStockClick,
							ladderGroups,
							visibleGroupCounts,
							showFilteredGroupCounts: Boolean(activeLadderTopicId),
							preserveHeaderWhenEmpty: true,
							cellRegionState,
							cellRegionMessage: cellRegionState === "error" ? windowError || error || void 0 : void 0,
							onCellRegionRetry: handleRetry,
							onViewportHeightChange: setViewportHeight
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-20 right-4 z-10 flex flex-row-reverse items-center gap-4",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: settingsPanel.open,
							className: "flex h-12 w-12 items-center justify-center rounded-full bg-accent-theme text-[var(--accent-contrast)] shadow-lg transition-colors hover:bg-[var(--accent-hover)]",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
								className: "h-5 w-5",
								fill: "none",
								stroke: "currentColor",
								viewBox: "0 0 24 24",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									strokeWidth: 2,
									d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									strokeWidth: 2,
									d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
								})]
							})
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								handleToggleMinuteCurve();
							},
							className: `flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-colors ${showMinuteCurve ? "bg-bg-tertiary text-text-gold hover:bg-[var(--hover-bg)]" : "bg-bg-secondary text-text-secondary hover:bg-[var(--hover-bg)] hover:text-text-primary"}`,
							title: showMinuteCurve ? "隐藏分钟曲线" : "显示分钟曲线",
							"aria-label": showMinuteCurve ? "隐藏分钟曲线" : "显示分钟曲线",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
								className: "h-5 w-5",
								fill: "none",
								stroke: "currentColor",
								viewBox: "0 0 24 24",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									strokeWidth: 2,
									d: "M3 17l4-4 4 4 7-9 3 3"
								})
							})
						})]
					}),
					popupSelection && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(LadderStockContextModal, {
						stock: popupSelection.stock,
						anchorDate: popupSelection.anchorDate,
						onClose: closeStockPopup
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SettingsPanel, {
						isOpen: settingsPanel.isOpen,
						onClose: settingsPanel.close,
						config: cellDisplayConfig,
						onConfigChange: updateConfig,
						isSaving: settingsPanel.isSaving,
						saveError: settingsPanel.saveError,
						lockedFields: []
					})
				]
			});
		});
		const LianBanTiDui = (0, react.memo)(function LianBanTiDui() {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(LadderPreview, {});
		});
		//#endregion
		//#region src/api/modules/supervision.ts
		async function getActiveSupervision() {
			return onclawRuntime.api.supervision.active();
		}
		async function getSupervisionByDate(targetDate) {
			return onclawRuntime.api.supervision.byDate(targetDate);
		}
		async function getHistoricalSupervisionPage(params = {}) {
			return onclawRuntime.api.supervision.history({
				endDate: params.end_date,
				offset: params.offset,
				limit: params.limit
			});
		}
		async function getSuperviseLines(targetDate) {
			return onclawRuntime.api.supervision.lines(targetDate);
		}
		async function getSuperviseLineHistoryPage(params = {}) {
			return onclawRuntime.api.supervision.lineHistory({
				endDate: params.end_date,
				offset: params.offset,
				limit: params.limit
			});
		}
		//#endregion
		//#region src/utils/chinaMarketSession.ts
		const SHANGHAI_TIME = new Intl.DateTimeFormat("en-US", {
			timeZone: "Asia/Shanghai",
			weekday: "short",
			hour: "2-digit",
			minute: "2-digit",
			hourCycle: "h23"
		});
		function isChinaMarketPollingWindow(now = /* @__PURE__ */ new Date()) {
			const parts = SHANGHAI_TIME.formatToParts(now);
			const value = (type) => parts.find((part) => part.type === type)?.value ?? "";
			const weekday = value("weekday");
			if (weekday === "Sat" || weekday === "Sun") return false;
			const hour = Number(value("hour"));
			const minute = Number(value("minute"));
			if (!Number.isFinite(hour) || !Number.isFinite(minute)) return false;
			const minuteOfDay = hour * 60 + minute;
			return minuteOfDay >= 565 && minuteOfDay <= 690 || minuteOfDay >= 780 && minuteOfDay <= 900;
		}
		//#endregion
		//#region src/hooks/supervisionQueryPolicy.ts
		const CURRENT_SUPERVISION_REFETCH_INTERVAL_MS = 300 * 1e3;
		function formatLocalIsoDate(value) {
			return `${value.getFullYear()}-${`${value.getMonth() + 1}`.padStart(2, "0")}-${`${value.getDate()}`.padStart(2, "0")}`;
		}
		function isCurrentSuperviseLineTarget(targetDate, now = /* @__PURE__ */ new Date()) {
			return !targetDate || targetDate === formatLocalIsoDate(now);
		}
		function getCurrentSupervisionQueryPolicy(enabled, now) {
			const pollingEnabled = enabled && isChinaMarketPollingWindow(now);
			return {
				refetchInterval: pollingEnabled ? CURRENT_SUPERVISION_REFETCH_INTERVAL_MS : false,
				refetchIntervalInBackground: false,
				refetchOnWindowFocus: pollingEnabled
			};
		}
		//#endregion
		//#region src/hooks/useSupervision.ts
		const DEFAULT_HISTORY_PAGE_SIZE = 10;
		function useActiveSupervision(targetDate) {
			const { visible } = usePageActivity();
			return useQuery({
				...sdkQueryPolicy(targetDate ? onclawRuntime.queries.supervision.byDate(targetDate) : onclawRuntime.queries.supervision.active()),
				queryFn: () => targetDate ? getSupervisionByDate(targetDate) : getActiveSupervision(),
				enabled: visible,
				...getCurrentSupervisionQueryPolicy(visible)
			});
		}
		function useSuperviseLines(targetDate) {
			const { visible } = usePageActivity();
			const isCurrentTarget = isCurrentSuperviseLineTarget(targetDate);
			return useQuery({
				...sdkQueryPolicy(onclawRuntime.queries.supervision.lines(targetDate)),
				queryFn: () => getSuperviseLines(targetDate),
				enabled: visible,
				...getCurrentSupervisionQueryPolicy(visible && isCurrentTarget)
			});
		}
		function useHistoricalSupervisionHistory(endDate, limit = DEFAULT_HISTORY_PAGE_SIZE) {
			const { visible } = usePageActivity();
			return useInfiniteQuery({
				enabled: visible,
				...sdkQueryPolicy(onclawRuntime.queries.supervision.history({
					endDate,
					offset: 0,
					limit
				})),
				initialPageParam: 0,
				queryFn: ({ pageParam }) => getHistoricalSupervisionPage({
					end_date: endDate,
					offset: pageParam,
					limit
				}),
				getNextPageParam: (lastPage) => lastPage.next_offset ?? void 0,
				refetchOnWindowFocus: false
			});
		}
		function useSuperviseLineHistory(endDate, limit = DEFAULT_HISTORY_PAGE_SIZE) {
			const { visible } = usePageActivity();
			return useInfiniteQuery({
				enabled: visible,
				...sdkQueryPolicy(onclawRuntime.queries.supervision.lineHistory({
					endDate,
					offset: 0,
					limit
				})),
				initialPageParam: 0,
				queryFn: ({ pageParam }) => getSuperviseLineHistoryPage({
					end_date: endDate,
					offset: pageParam,
					limit
				}),
				getNextPageParam: (lastPage) => lastPage.next_offset ?? void 0,
				refetchOnWindowFocus: false
			});
		}
		//#endregion
		//#region src/api/modules/boardSentiment.ts
		function normalizeCode(value) {
			return String(value ?? "").trim().toUpperCase() || null;
		}
		function normalizeCodes$1(value) {
			if (value === null || value === void 0) return null;
			if (!Array.isArray(value)) return null;
			return [...new Set(value.map(normalizeCode).filter((code) => Boolean(code)))];
		}
		function normalizeValue(value) {
			if (value === null || value === void 0) return null;
			const numeric = Number(value);
			return Number.isFinite(numeric) ? numeric : null;
		}
		function normalizeNames(value) {
			if (!value || typeof value !== "object" || Array.isArray(value)) return {};
			const names = {};
			for (const [rawCode, rawName] of Object.entries(value)) {
				const code = normalizeCode(rawCode);
				if (!code) continue;
				names[code] = String(rawName ?? code).trim() || code;
			}
			return names;
		}
		function stocks(codes, names) {
			return (codes ?? []).map((code) => ({
				ts_code: code,
				stock_name: names[code] ?? code
			}));
		}
		function normalizeBoardSentimentWindow(value) {
			const source = value && typeof value === "object" ? value : {};
			const columns = Array.isArray(source.columns) ? source.columns.map(String) : [];
			const positions = Object.fromEntries(columns.map((column, index) => [column, index]));
			const names = normalizeNames(source.stock_names);
			const rows = Array.isArray(source.rows) ? source.rows.filter((row) => Array.isArray(row)) : [];
			const items = [];
			for (const row of rows) {
				const tradeDate = String(row[positions.trade_date] ?? "");
				if (!tradeDate) continue;
				const heightCodes = normalizeCodes$1(row[positions.height_stock_codes]);
				const secondCodes = normalizeCodes$1(row[positions.second_height_stock_codes]);
				const downCodes = normalizeCodes$1(row[positions.limit_down_depth_stock_codes]);
				const previewCodes = [.../* @__PURE__ */ new Set([
					...heightCodes ?? [],
					...secondCodes ?? [],
					...downCodes ?? []
				])];
				const boardHeight = normalizeValue(row[positions.board_height]);
				const secondHeight = normalizeValue(row[positions.second_board_height]);
				const downDepth = normalizeValue(row[positions.limit_down_depth]);
				const pressureHeight = normalizeValue(row[positions.pressure_height]);
				const missingGroup = boardHeight !== null && boardHeight > 0 && heightCodes === null || secondHeight !== null && secondHeight > 0 && secondCodes === null || downDepth !== null && downDepth > 0 && downCodes === null;
				items.push({
					trade_date: tradeDate,
					height: {
						value: boardHeight,
						stocks: stocks(heightCodes, names)
					},
					second_height: {
						value: secondHeight,
						stocks: stocks(secondCodes, names)
					},
					pressure: {
						value: pressureHeight !== null && pressureHeight > 0 ? pressureHeight : null,
						stocks: []
					},
					limit_down_depth: {
						value: downDepth === null ? null : -Math.abs(Math.trunc(downDepth)),
						stocks: stocks(downCodes, names)
					},
					preview_stocks: stocks(previewCodes, names),
					data_state: missingGroup ? "partial" : "complete"
				});
			}
			return {
				index: Math.max(0, Number(source.index) || 0),
				length: Math.max(1, Math.min(120, Number(source.length) || 30)),
				next_index: Math.max(0, Number(source.next_index) || 0),
				settled_count: Math.max(0, Number(source.settled_count) || 0),
				has_more: Boolean(source.has_more),
				columns,
				rows,
				stock_names: names,
				items: items.sort((left, right) => left.trade_date.localeCompare(right.trade_date))
			};
		}
		async function getBoardSentimentWindow(params = {}) {
			return normalizeBoardSentimentWindow(await onclawRuntime.api.boardSentiment.window(params.index ?? 0, params.length ?? 30));
		}
		//#endregion
		//#region src/hooks/useBoardSentimentWindow.ts
		function mergeBoardSentimentPages(pages) {
			if (!pages.length) return void 0;
			const byDate = /* @__PURE__ */ new Map();
			const rowsByDate = /* @__PURE__ */ new Map();
			const stockNames = {};
			const datePosition = pages[0].columns.indexOf("trade_date");
			for (const page of pages) {
				for (const item of page.items) byDate.set(item.trade_date, item);
				for (const row of page.rows) {
					const tradeDate = String(row[datePosition] ?? "");
					if (tradeDate) rowsByDate.set(tradeDate, row);
				}
				Object.assign(stockNames, page.stock_names);
			}
			const items = [...byDate.values()].sort((left, right) => left.trade_date.localeCompare(right.trade_date));
			const rows = [...rowsByDate.entries()].sort(([left], [right]) => left.localeCompare(right)).map(([, row]) => row);
			const first = pages[0];
			const last = pages[pages.length - 1];
			return {
				...first,
				next_index: last.next_index,
				settled_count: pages.reduce((total, page) => total + page.settled_count, 0),
				has_more: last.settled_count > 0,
				rows,
				stock_names: stockNames,
				items
			};
		}
		function useBoardSentimentWindow(length = 30) {
			const { visible } = usePageActivity();
			const boundedLength = Math.max(1, Math.min(length, 120));
			const query = useInfiniteQuery({
				enabled: visible,
				...sdkQueryPolicy(onclawRuntime.queries.boardSentiment.window(0, boundedLength)),
				initialPageParam: 0,
				queryFn: ({ pageParam }) => getBoardSentimentWindow({
					index: pageParam,
					length: boundedLength
				}),
				getNextPageParam: (lastPage) => lastPage.settled_count === 0 ? void 0 : lastPage.next_index,
				refetchOnWindowFocus: true,
				refetchIntervalInBackground: false
			});
			return {
				...query,
				data: mergeBoardSentimentPages(query.data?.pages ?? [])
			};
		}
		const BOARD_SENTIMENT_MIN_ZOOM = .75;
		const BOARD_SENTIMENT_ZOOM_STEP = .25;
		function summarizeBoardSentimentStocks(stocks, limit = 2) {
			if (stocks.length === 0) return "名称待补";
			const visible = stocks.slice(0, limit).map((stock) => stock.stock_name).join("、");
			return stocks.length > limit ? `${visible}等${stocks.length}只` : visible;
		}
		function formatBoardNumber(value) {
			const absolute = Math.abs(Math.trunc(value));
			const digits = [
				"零",
				"一",
				"二",
				"三",
				"四",
				"五",
				"六",
				"七",
				"八",
				"九"
			];
			let numberText;
			if (absolute < 10) numberText = digits[absolute];
			else if (absolute === 10) numberText = "十";
			else if (absolute < 20) numberText = `十${digits[absolute % 10]}`;
			else if (absolute < 100) {
				const remainder = absolute % 10;
				numberText = `${digits[Math.floor(absolute / 10)]}十${remainder ? digits[remainder] : ""}`;
			} else numberText = String(absolute);
			return value < 0 ? `跌停${numberText}板` : `${numberText}板`;
		}
		function getBoardSentimentNodeLabelLines(metric, limit = 2) {
			if (metric.value === null) return [];
			const lines = [{
				key: "board",
				text: formatBoardNumber(metric.value)
			}];
			lines.push(...metric.stocks.slice(0, limit).map((stock) => ({
				key: `stock-${stock.ts_code}`,
				text: stock.stock_name
			})));
			if (metric.stocks.length > limit) lines.push({
				key: "total",
				text: `共${metric.stocks.length}支`
			});
			return lines;
		}
		function getBoardSentimentMetricTitle(label, metric) {
			return `${label} ${metric.value === null ? "—" : `${metric.value}板`} · ${metric.stocks.length > 0 ? metric.stocks.map((stock) => `${stock.stock_name}(${stock.ts_code})`).join("、") : "名称待补"}`;
		}
		function getBoardSentimentDateStocks(point) {
			return [...point.preview_stocks];
		}
		function clampBoardSentimentZoom(value) {
			return Math.min(2, Math.max(BOARD_SENTIMENT_MIN_ZOOM, value));
		}
		function shouldCaptureBoardSentimentDrag(startX, currentX, threshold = 5) {
			return Math.abs(currentX - startX) > threshold;
		}
		function createBoardSentimentChartGeometry(points, zoom = 1) {
			const positiveValues = points.flatMap((point) => [
				point.height.value,
				point.second_height.value,
				point.pressure.value
			]).filter((value) => typeof value === "number" && value >= 0);
			const downValues = points.map((point) => point.limit_down_depth.value).filter((value) => typeof value === "number" && value < 0);
			const maxPositive = Math.max(1, ...positiveValues);
			const maxDepth = Math.max(1, ...downValues.map((value) => Math.abs(value)));
			const top = 56;
			const bottom = 48;
			const plotHeight = 360 - top - bottom;
			const zeroY = top + maxPositive / (maxPositive + maxDepth) * plotHeight;
			const positiveHeight = zeroY - top;
			const negativeHeight = 360 - bottom - zeroY;
			const dayWidth = 96 * clampBoardSentimentZoom(zoom);
			return {
				width: 48 + Math.max(points.length - 1, 0) * dayWidth + 32,
				height: 360,
				zeroY,
				maxPositive,
				maxDepth,
				xAt: (index) => 48 + index * dayWidth,
				yAt: (value) => value >= 0 ? zeroY - value / maxPositive * positiveHeight : zeroY + Math.abs(value) / maxDepth * negativeHeight
			};
		}
		function buildBoardSentimentPath(points, getValue, geometry, horizontalOnly = false) {
			if (horizontalOnly) {
				const segments = [];
				let startIndex = null;
				let activeValue = null;
				const finish = (endIndex) => {
					if (startIndex === null || activeValue === null) return;
					segments.push(`M${geometry.xAt(startIndex).toFixed(1)},${geometry.yAt(activeValue).toFixed(1)} H${geometry.xAt(endIndex).toFixed(1)}`);
				};
				points.forEach((point, index) => {
					const value = getValue(point);
					if (value === null) {
						finish(index);
						startIndex = null;
						activeValue = null;
						return;
					}
					if (activeValue === null) {
						startIndex = index;
						activeValue = value;
					} else if (value !== activeValue) {
						finish(index);
						startIndex = index;
						activeValue = value;
					}
				});
				if (points.length > 0 && activeValue !== null) finish(points.length - 1);
				return segments.join(" ");
			}
			let path = "";
			let drawing = false;
			points.forEach((point, index) => {
				const value = getValue(point);
				if (value === null) {
					drawing = false;
					return;
				}
				const x = geometry.xAt(index).toFixed(1);
				const y = geometry.yAt(value).toFixed(1);
				path += drawing ? ` L${x},${y}` : `M${x},${y}`;
				drawing = true;
			});
			return path;
		}
		function latestBoardSentimentScrollLeft(scrollWidth, clientWidth) {
			return Math.max(0, scrollWidth - clientWidth);
		}
		function boardSentimentScrollLeftAfterZoom({ activeIndex, currentScrollLeft, clientWidth, previousGeometry, nextGeometry }) {
			const viewportOffset = previousGeometry.xAt(activeIndex) - currentScrollLeft;
			const requested = nextGeometry.xAt(activeIndex) - viewportOffset;
			return Math.min(latestBoardSentimentScrollLeft(nextGeometry.width, clientWidth), Math.max(0, requested));
		}
		//#endregion
		//#region src/components/supervision/BoardSentimentTrend.tsx
		const SERIES = [
			{
				key: "height",
				label: "连板高度",
				color: "var(--positive)",
				getMetric: (point) => point.height
			},
			{
				key: "second_height",
				label: "次高高度",
				color: "var(--warning)",
				getMetric: (point) => point.second_height
			},
			{
				key: "pressure",
				label: "压力板高度",
				color: "#a78bfa",
				dash: "9 5",
				horizontalOnly: true,
				getMetric: (point) => point.pressure
			},
			{
				key: "limit_down_depth",
				label: "跌停深度",
				color: "var(--negative)",
				getMetric: (point) => point.limit_down_depth
			}
		];
		function shortDate(value) {
			return value.slice(5).replace("-", "/");
		}
		function BoardSentimentTrend({ onOpenPreview }) {
			const query = useBoardSentimentWindow(30);
			const points = query.data?.items ?? [];
			const [activeDate, setActiveDate] = (0, react.useState)(null);
			const [zoom, setZoom] = (0, react.useState)(1);
			const scrollRef = (0, react.useRef)(null);
			const pendingScrollLeftRef = (0, react.useRef)(null);
			const olderLoadWidthRef = (0, react.useRef)(null);
			const alignedRef = (0, react.useRef)(false);
			const dragRef = (0, react.useRef)(null);
			const ignoreClickRef = (0, react.useRef)(false);
			const geometry = (0, react.useMemo)(() => createBoardSentimentChartGeometry(points, zoom), [points, zoom]);
			const activePoint = points.find((point) => point.trade_date === activeDate) ?? points[points.length - 1] ?? null;
			(0, react.useLayoutEffect)(() => {
				const nextScrollLeft = pendingScrollLeftRef.current;
				const element = scrollRef.current;
				if (nextScrollLeft === null || !element) return;
				element.scrollLeft = nextScrollLeft;
				pendingScrollLeftRef.current = null;
			});
			(0, react.useLayoutEffect)(() => {
				const previousWidth = olderLoadWidthRef.current;
				const element = scrollRef.current;
				if (previousWidth === null || !element || query.isFetchingNextPage) return;
				element.scrollLeft += Math.max(0, element.scrollWidth - previousWidth);
				olderLoadWidthRef.current = null;
			}, [query.isFetchingNextPage]);
			(0, react.useEffect)(() => {
				if (!points.length || alignedRef.current) return;
				const element = scrollRef.current;
				if (!element) return;
				element.scrollLeft = latestBoardSentimentScrollLeft(element.scrollWidth, element.clientWidth);
				alignedRef.current = true;
				setActiveDate(points[points.length - 1].trade_date);
			}, [points]);
			const changeZoom = (requestedZoom) => {
				const nextZoom = clampBoardSentimentZoom(requestedZoom);
				if (nextZoom === zoom) return;
				const element = scrollRef.current;
				const activeIndex = Math.max(0, points.findIndex((point) => point.trade_date === activePoint?.trade_date));
				if (element) pendingScrollLeftRef.current = boardSentimentScrollLeftAfterZoom({
					activeIndex,
					currentScrollLeft: element.scrollLeft,
					clientWidth: element.clientWidth,
					previousGeometry: geometry,
					nextGeometry: createBoardSentimentChartGeometry(points, nextZoom)
				});
				setZoom(nextZoom);
			};
			const handlePointerDown = (event) => {
				if (event.button !== 0) return;
				ignoreClickRef.current = false;
				dragRef.current = {
					pointerId: event.pointerId,
					startX: event.clientX,
					scrollLeft: event.currentTarget.scrollLeft,
					captured: false
				};
			};
			const handlePointerMove = (event) => {
				const drag = dragRef.current;
				if (!drag || drag.pointerId !== event.pointerId) return;
				if (shouldCaptureBoardSentimentDrag(drag.startX, event.clientX)) {
					ignoreClickRef.current = true;
					if (!drag.captured) {
						event.currentTarget.setPointerCapture(event.pointerId);
						drag.captured = true;
					}
				}
				event.currentTarget.scrollLeft = drag.scrollLeft - (event.clientX - drag.startX);
			};
			const consumeIgnoredClick = () => {
				if (!ignoreClickRef.current) return false;
				ignoreClickRef.current = false;
				return true;
			};
			const stopDrag = (event) => {
				if (dragRef.current?.pointerId === event.pointerId) dragRef.current = null;
			};
			const loadOlderIfNeeded = () => {
				const element = scrollRef.current;
				if (!element || element.scrollLeft > 120 || !query.hasNextPage || query.isFetchingNextPage) return;
				olderLoadWidthRef.current = element.scrollWidth;
				query.fetchNextPage();
			};
			const openDatePreview = (point) => {
				setActiveDate(point.trade_date);
				const stocks = getBoardSentimentDateStocks(point);
				if (stocks.length) onOpenPreview(stocks, point.trade_date, stocks[0].ts_code);
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				className: "flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-[var(--market-grid-strong)] bg-[var(--market-cell)]",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3 border-b border-[var(--market-grid-strong)] bg-[var(--market-header)] px-4 py-3",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold text-[var(--market-text-primary)]",
						children: "连板情绪走势"
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[var(--market-text-muted)]",
						children: SERIES.map((series) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "inline-block h-0 w-5 border-t-2",
								style: {
									borderColor: series.color,
									borderTopStyle: series.dash ? "dashed" : "solid"
								}
							}), series.label]
						}, series.key))
					})] }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-end",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center overflow-hidden rounded-md border border-[var(--market-grid-strong)] bg-[var(--market-frozen)]",
							"aria-label": "横轴缩放",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "缩小横轴",
									onClick: () => changeZoom(zoom - BOARD_SENTIMENT_ZOOM_STEP),
									disabled: zoom <= BOARD_SENTIMENT_MIN_ZOOM,
									className: "px-2.5 py-1.5 text-sm text-[var(--market-text-secondary)] hover:bg-[var(--market-cell-hover)] disabled:opacity-35",
									children: "−"
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
									type: "button",
									"aria-label": "重置横轴缩放",
									title: "点击恢复 100%",
									onClick: () => changeZoom(1),
									disabled: zoom === 1,
									className: "min-w-[58px] border-x border-[var(--market-grid-strong)] px-2 py-1.5 text-xs text-[var(--market-text-primary)] hover:bg-[var(--market-cell-hover)] disabled:opacity-70",
									children: [Math.round(zoom * 100), "%"]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "放大横轴",
									onClick: () => changeZoom(zoom + BOARD_SENTIMENT_ZOOM_STEP),
									disabled: zoom >= 2,
									className: "px-2.5 py-1.5 text-sm text-[var(--market-text-secondary)] hover:bg-[var(--market-cell-hover)] disabled:opacity-35",
									children: "＋"
								})
							]
						})
					})]
				}), query.isLoading && !query.data ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "flex flex-1 items-center justify-center bg-[var(--market-canvas)] text-sm",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "rounded border border-[var(--notice-info-border)] bg-[var(--notice-info-bg)] px-4 py-3 text-[var(--notice-info-fg)]",
						children: "连板情绪加载中..."
					})
				}) : query.error ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "flex flex-1 flex-col items-center justify-center gap-3 bg-[var(--market-canvas)] px-4 text-center",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "rounded border border-[var(--notice-error-border)] bg-[var(--notice-error-bg)] px-4 py-3 text-[var(--notice-error-fg)]",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: "text-sm",
							children: ["连板情绪读取失败：", query.error.message]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => void query.refetch(),
							className: "ml-3 rounded border border-[var(--notice-error-border)] bg-[var(--market-cell)] px-3 py-1.5 text-sm hover:bg-[var(--market-cell-hover)]",
							children: "重试"
						})]
					})
				}) : !points.length ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "flex flex-1 items-center justify-center bg-[var(--market-canvas)] text-sm",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "rounded border border-[var(--notice-info-border)] bg-[var(--notice-info-bg)] px-4 py-3 text-[var(--notice-info-fg)]",
						children: "暂无连板情绪数据"
					})
				}) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [activePoint ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-2 border-b border-[var(--market-grid-strong)] bg-[var(--market-frozen)] px-4 py-2 md:grid-cols-4",
					children: SERIES.map((series) => {
						const metric = series.getMetric(activePoint);
						const actionable = metric.stocks.length > 0;
						return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
							type: "button",
							disabled: !actionable,
							onClick: () => actionable && onOpenPreview(metric.stocks, activePoint.trade_date, metric.stocks[0]?.ts_code),
							title: getBoardSentimentMetricTitle(series.label, metric),
							className: "min-w-0 rounded border border-[var(--market-grid)] bg-[var(--market-cell)] px-2.5 py-1.5 text-left hover:border-[var(--market-grid-strong)] hover:bg-[var(--market-cell-hover)] disabled:cursor-default",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
								className: "block text-[11px] text-[var(--market-text-muted)]",
								children: [
									series.label,
									" · ",
									metric.value ?? "—",
									"板"
								]
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "mt-0.5 block truncate text-xs",
								style: { color: series.color },
								children: series.key === "pressure" ? metric.value === null ? "尚未形成" : "已确认压力线" : summarizeBoardSentimentStocks(metric.stocks)
							})]
						}, series.key);
					})
				}) : null, /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					ref: scrollRef,
					className: "min-h-0 flex-1 cursor-grab select-none overflow-x-auto overflow-y-hidden active:cursor-grabbing",
					onPointerDown: handlePointerDown,
					onPointerMove: handlePointerMove,
					onPointerUp: stopDrag,
					onPointerCancel: stopDrag,
					onScroll: loadOlderIfNeeded,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
						width: geometry.width,
						height: geometry.height,
						className: "block min-w-full",
						role: "img",
						"aria-label": "连板高度、次高高度、压力板高度和跌停深度走势图",
						children: [
							[...Array(geometry.maxPositive + 1)].map((_, index) => {
								const value = index;
								const y = geometry.yAt(value);
								return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("line", {
									x1: 0,
									y1: y,
									x2: geometry.width,
									y2: y,
									stroke: value === 0 ? "var(--market-grid-strong)" : "var(--market-grid)",
									strokeWidth: value === 0 ? 1.4 : .7
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("text", {
									x: 8,
									y: y - 4,
									fill: "var(--market-text-muted)",
									fontSize: "10",
									children: value
								})] }, `grid-${value}`);
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("text", {
								x: 8,
								y: geometry.yAt(-geometry.maxDepth) + 4,
								fill: "var(--market-text-muted)",
								fontSize: "10",
								children: ["-", geometry.maxDepth]
							}),
							SERIES.map((series) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								d: buildBoardSentimentPath(points, (point) => series.getMetric(point).value, geometry, series.horizontalOnly),
								fill: "none",
								stroke: series.color,
								strokeWidth: series.key === "height" ? 2.4 : series.key === "pressure" ? 2.2 : 1.8,
								strokeDasharray: series.dash,
								vectorEffect: "non-scaling-stroke"
							}, series.key)),
							points.map((point, index) => {
								const x = geometry.xAt(index);
								const isActive = point.trade_date === activePoint?.trade_date;
								const dateStocks = getBoardSentimentDateStocks(point);
								return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("a", {
									href: `#board-sentiment-${point.trade_date}`,
									"aria-label": `${point.trade_date}，${dateStocks.length}只连板股票，打开行情预览`,
									className: dateStocks.length ? "cursor-pointer" : "",
									onClick: (event) => {
										event.preventDefault();
										if (consumeIgnoredClick()) return;
										openDatePreview(point);
									},
									children: [
										isActive ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("line", {
											x1: x,
											y1: 0,
											x2: x,
											y2: geometry.height,
											stroke: "var(--market-grid-selected)",
											strokeWidth: 1.4,
											strokeDasharray: "5 5",
											opacity: .8,
											pointerEvents: "none"
										}) : null,
										SERIES.map((series) => {
											const metric = series.getMetric(point);
											if (metric.value === null || series.key === "pressure") return null;
											const y = geometry.yAt(metric.value);
											const labelLines = getBoardSentimentNodeLabelLines(metric);
											const labelY = series.key === "limit_down_depth" ? y - (labelLines.length - 1) * 12 - 10 : y + 15;
											const textAnchor = series.key === "second_height" ? "end" : "start";
											const labelX = x + (textAnchor === "start" ? 6 : -6);
											const metricTitle = getBoardSentimentMetricTitle(`${point.trade_date} ${series.label}`, metric);
											return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
												cx: x,
												cy: y,
												r: isActive ? 4.5 : 3,
												fill: series.color,
												stroke: "var(--market-cell)",
												strokeWidth: 1.5,
												children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("title", { children: metricTitle })
											}), metric.stocks.length ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("text", {
												x: labelX,
												y: labelY,
												textAnchor,
												fill: series.color,
												fontSize: "9.5",
												paintOrder: "stroke",
												stroke: "var(--market-cell)",
												strokeWidth: "2.5",
												strokeLinejoin: "round",
												children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("title", { children: metricTitle }), labelLines.map((line, lineIndex) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("tspan", {
													x: labelX,
													dy: lineIndex === 0 ? 0 : 12,
													fontWeight: lineIndex === 0 ? 600 : 400,
													children: line.text
												}, line.key))]
											}) : null] }, series.key);
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("text", {
											x,
											y: geometry.height - 13,
											textAnchor: "middle",
											fill: isActive ? "var(--market-grid-selected)" : "var(--market-text-secondary)",
											fontSize: "11",
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("title", { children: `${point.trade_date} · 点击预览最高板、次高板及连续跌停股票` }), shortDate(point.trade_date)]
										})
									]
								}, point.trade_date);
							})
						]
					})
				})] })]
			});
		}
		//#endregion
		//#region src/api/modules/customIndex.ts
		function normalizeCustomIndexConstituents(rows) {
			return rows.map((item) => ({
				...item,
				attributes: Array.isArray(item.attributes) ? item.attributes : []
			}));
		}
		async function getCustomIndexDefinitions(page = 1, pageSize = 50) {
			return onclawRuntime.api.customIndex.definitions({
				page,
				pageSize
			});
		}
		async function createCustomIndex(input) {
			return onclawRuntime.mutations.customIndex.create(input);
		}
		async function updateCustomIndex(indexCode, input) {
			return onclawRuntime.mutations.customIndex.update(indexCode, input);
		}
		async function previewCustomIndex(indexCode, tradeDate) {
			return onclawRuntime.mutations.customIndex.preview(indexCode, tradeDate);
		}
		async function scheduleCustomIndexChanges(indexCode, input) {
			return onclawRuntime.mutations.customIndex.schedule(indexCode, input);
		}
		async function buildCustomIndex(indexCode) {
			return onclawRuntime.mutations.customIndex.build(indexCode);
		}
		async function getCustomIndexBuildJob(indexCode, jobId) {
			return onclawRuntime.api.customIndex.buildJob(indexCode, jobId);
		}
		async function updateCustomIndexLifecycle(indexCode, action) {
			return onclawRuntime.mutations.customIndex.lifecycle(indexCode, action);
		}
		async function getCustomIndexDaily(indexCode, startDate, endDate) {
			return onclawRuntime.api.customIndex.daily(indexCode, startDate, endDate);
		}
		async function getCustomIndexMinutes(indexCode, tradeDate) {
			return onclawRuntime.api.customIndex.minutes(indexCode, tradeDate);
		}
		async function getCustomIndexConstituents(indexCode, tradeDate) {
			return normalizeCustomIndexConstituents(await onclawRuntime.api.customIndex.constituents(indexCode, tradeDate));
		}
		//#endregion
		//#region src/hooks/useCustomIndex.ts
		function useCustomIndexDefinitions(pollBuilding = true) {
			const { visible } = usePageActivity();
			return useQuery({
				...sdkQueryPolicy(onclawRuntime.queries.customIndex.definitions()),
				queryFn: () => getCustomIndexDefinitions(),
				enabled: visible,
				refetchInterval: (query) => visible && pollBuilding && query.state.data?.some((item) => item.status === "building") ? 2e3 : false
			});
		}
		function useCustomIndexDaily(indexCode, startDate, endDate, enabled = true) {
			const { visible } = usePageActivity();
			return useQuery({
				...sdkQueryPolicy(onclawRuntime.queries.customIndex.daily(indexCode, startDate, endDate)),
				queryFn: () => getCustomIndexDaily(indexCode, startDate, endDate),
				enabled: visible && enabled && Boolean(indexCode)
			});
		}
		function useCustomIndexMinutes(indexCode, tradeDate, enabled = true) {
			const { visible } = usePageActivity();
			return useQuery({
				...sdkQueryPolicy(onclawRuntime.queries.customIndex.minutes(indexCode, tradeDate ?? "")),
				queryFn: () => getCustomIndexMinutes(indexCode, tradeDate),
				enabled: visible && enabled && Boolean(indexCode) && Boolean(tradeDate)
			});
		}
		function useCustomIndexConstituents(indexCode, tradeDate, enabled = true) {
			const { visible } = usePageActivity();
			return useQuery({
				...sdkQueryPolicy(onclawRuntime.queries.customIndex.constituents(indexCode, tradeDate ?? "")),
				queryFn: () => getCustomIndexConstituents(indexCode, tradeDate),
				enabled: visible && enabled && Boolean(indexCode) && Boolean(tradeDate)
			});
		}
		function useCreateCustomIndex() {
			return useMutation({ mutationFn: (input) => createCustomIndex(input) });
		}
		function useUpdateCustomIndex() {
			return useMutation({ mutationFn: ({ indexCode, input }) => updateCustomIndex(indexCode, input) });
		}
		function usePreviewCustomIndex() {
			return useMutation({ mutationFn: ({ indexCode, tradeDate }) => previewCustomIndex(indexCode, tradeDate) });
		}
		function useScheduleCustomIndexChanges() {
			return useMutation({ mutationFn: ({ indexCode, input }) => scheduleCustomIndexChanges(indexCode, input) });
		}
		function useBuildCustomIndex() {
			const client = useQueryClient();
			return useMutation({
				mutationFn: (indexCode) => buildCustomIndex(indexCode),
				onMutate: async (indexCode) => {
					await client.cancelQueries({ queryKey: onclawRuntime.queries.customIndex.definitions().queryKey });
					client.setQueryData(onclawRuntime.queries.customIndex.definitions().queryKey, (current) => Array.isArray(current) ? current.map((item) => item && typeof item === "object" && "index_code" in item && item.index_code === indexCode ? {
						...item,
						status: "building",
						reason: "正在启动最近窗口构建"
					} : item) : current);
				}
			});
		}
		function useCustomIndexBuildJob(indexCode, jobId) {
			const { visible } = usePageActivity();
			return useQuery({
				...sdkQueryPolicy(onclawRuntime.queries.customIndex.buildJob(indexCode, jobId ?? "")),
				queryFn: () => getCustomIndexBuildJob(indexCode, jobId),
				enabled: visible && Boolean(indexCode) && Boolean(jobId),
				refetchInterval: (query) => buildJobPollInterval(visible, query.state.data)
			});
		}
		function useCustomIndexLifecycle() {
			return useMutation({ mutationFn: ({ indexCode, action }) => updateCustomIndexLifecycle(indexCode, action) });
		}
		//#endregion
		//#region src/components/custom-index/indexChartModel.ts
		const MA_PERIODS = [
			5,
			10,
			20
		];
		function dailyMovingAverages(bars) {
			const totals = /* @__PURE__ */ new Map();
			const result = /* @__PURE__ */ new Map();
			for (const [index, bar] of bars.entries()) {
				const averages = {};
				for (const period of MA_PERIODS) {
					const previous = index >= period ? bars[index - period].close : 0;
					const total = (totals.get(period) ?? 0) + bar.close - previous;
					totals.set(period, total);
					if (index >= period - 1 && Number.isFinite(total)) averages[period] = total / period;
				}
				result.set(bar.trade_date, averages);
			}
			return result;
		}
		function hasUsableAmount(rows) {
			return rows.some((row) => typeof row.amount === "number" && Number.isFinite(row.amount) && row.amount >= 0);
		}
		function minuteChangePercent(price, preClose) {
			return preClose > 0 && Number.isFinite(preClose) && Number.isFinite(price) ? (price / preClose - 1) * 100 : null;
		}
		function amountLabel(amount) {
			if (amount >= 1e4) return `${(amount / 1e4).toFixed(2)}亿元`;
			return `${amount.toFixed(2)}万元`;
		}
		//#endregion
		//#region src/components/custom-index/IndexMarketCharts.tsx
		const WIDTH = 920;
		const LEFT = 52;
		const RIGHT = 62;
		const PLOT_WIDTH = WIDTH - LEFT - RIGHT;
		const MA_COLORS = [
			"#e6a045",
			"#f06d42",
			"#5a82ff"
		];
		function finiteRange(values, includeZero = false) {
			const finite = values.filter(Number.isFinite);
			const low = Math.min(...finite, ...includeZero ? [0] : []);
			const high = Math.max(...finite, ...includeZero ? [0] : []);
			const padding = Math.max((high - low) * .09, Math.abs(high) * .002, .01);
			return {
				low: low - padding,
				high: high + padding
			};
		}
		function scaleY(value, low, high, top, bottom) {
			return top + (high - value) / (high - low || 1) * (bottom - top);
		}
		function amountPanel(rows, xAt, barWidth, colorAt, keyAt, labelAmount) {
			const maxAmount = Math.max(1, ...rows.map((row) => typeof row.amount === "number" && Number.isFinite(row.amount) && row.amount >= 0 ? row.amount : 0));
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
				"aria-label": "成交额副图",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("text", {
						x: LEFT,
						y: 329,
						fill: "var(--market-text-secondary)",
						fontSize: "11",
						children: [
							"成交额",
							" ",
							typeof labelAmount === "number" && Number.isFinite(labelAmount) && labelAmount >= 0 ? amountLabel(labelAmount) : "--"
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("line", {
						x1: LEFT,
						x2: WIDTH - RIGHT,
						y1: 390,
						y2: 390,
						stroke: "var(--market-grid-strong)",
						opacity: "0.45"
					}),
					rows.map((row, index) => {
						const amount = row.amount;
						if (typeof amount !== "number" || !Number.isFinite(amount) || amount < 0) return null;
						const barHeight = Math.max(amount > 0 ? 1 : 0, amount / maxAmount * 48);
						return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
							x: xAt(index) - barWidth / 2,
							y: 390 - barHeight,
							width: barWidth,
							height: barHeight,
							fill: colorAt(index)
						}, keyAt(index));
					})
				]
			});
		}
		function dateTicks(bars) {
			const ticks = [];
			for (let index = 0; index < bars.length; index += 1) if (index === 0 || bars[index].trade_date.slice(0, 7) !== bars[index - 1].trade_date.slice(0, 7)) ticks.push(index);
			return ticks;
		}
		function MarketIndexDailyChart({ bars, history = bars, selectedDate, indexName, onSelect }) {
			const withAmount = hasUsableAmount(bars);
			const bottom = withAmount ? 276 : 319;
			const height = withAmount ? 400 : 350;
			const step = PLOT_WIDTH / Math.max(bars.length, 1);
			const candleWidth = Math.max(2, Math.min(10, step * .65));
			const averages = dailyMovingAverages(history);
			const range = finiteRange([...bars.flatMap((bar) => [bar.low, bar.high]), ...bars.flatMap((bar) => MA_PERIODS.map((period) => averages.get(bar.trade_date)?.[period] ?? NaN))]);
			const xAt = (index) => LEFT + step * (index + .5);
			const yAt = (value) => scaleY(value, range.low, range.high, 38, bottom);
			const selected = bars.find((bar) => bar.trade_date === selectedDate) ?? bars[bars.length - 1];
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
				viewBox: `0 0 ${WIDTH} ${height}`,
				className: "h-full min-h-[260px] w-full bg-[var(--market-cell)]",
				role: "img",
				"aria-label": `${indexName}日K线、均线${withAmount ? "和成交额" : ""}`,
				preserveAspectRatio: "none",
				children: [
					MA_PERIODS.map((period, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("text", {
						x: LEFT + index * 154,
						y: 20,
						fill: MA_COLORS[index],
						fontSize: "12",
						children: `MA${period} ${averages.get(selected?.trade_date ?? "")?.[period]?.toFixed(2) ?? "--"}`
					}, period)),
					[
						0,
						.5,
						1
					].map((ratio) => {
						const value = range.high - ratio * (range.high - range.low);
						const y = yAt(value);
						return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("line", {
							x1: LEFT,
							x2: WIDTH - RIGHT,
							y1: y,
							y2: y,
							stroke: "var(--market-grid-strong)",
							opacity: "0.32"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("text", {
							x: LEFT - 7,
							y: y + 4,
							textAnchor: "end",
							fill: "var(--market-text-muted)",
							fontSize: "10",
							children: value.toFixed(2)
						})] }, ratio);
					}),
					bars.map((bar, index) => {
						const color = bar.close >= bar.open ? "var(--positive)" : "var(--negative)";
						const x = xAt(index);
						const openY = yAt(bar.open);
						const closeY = yAt(bar.close);
						return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
							className: onSelect ? "cursor-pointer" : void 0,
							onClick: onSelect ? () => onSelect(bar.trade_date) : void 0,
							onKeyDown: onSelect ? (event) => {
								if (event.key === "Enter" || event.key === " ") {
									event.preventDefault();
									onSelect(bar.trade_date);
								}
							} : void 0,
							role: onSelect ? "button" : void 0,
							tabIndex: onSelect ? 0 : void 0,
							"aria-label": `${bar.trade_date} 开 ${bar.open.toFixed(2)} 高 ${bar.high.toFixed(2)} 低 ${bar.low.toFixed(2)} 收 ${bar.close.toFixed(2)}`,
							children: [
								bar.trade_date === selectedDate ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
									x: x - step / 2,
									y: 34,
									width: step,
									height: bottom - 34,
									fill: "var(--notice-info-bg)",
									opacity: "0.48"
								}) : null,
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("line", {
									x1: x,
									x2: x,
									y1: yAt(bar.high),
									y2: yAt(bar.low),
									stroke: color,
									strokeWidth: "1.2",
									vectorEffect: "non-scaling-stroke"
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
									x: x - candleWidth / 2,
									y: Math.min(openY, closeY),
									width: candleWidth,
									height: Math.max(1.5, Math.abs(closeY - openY)),
									fill: color
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
									x: x - step / 2,
									y: 34,
									width: step,
									height: bottom - 34,
									fill: "transparent"
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("title", { children: `${bar.trade_date} 开 ${bar.open.toFixed(2)} 高 ${bar.high.toFixed(2)} 低 ${bar.low.toFixed(2)} 收 ${bar.close.toFixed(2)} 成交额 ${typeof bar.amount === "number" && Number.isFinite(bar.amount) ? amountLabel(bar.amount) : "--"}` })
							]
						}, bar.trade_date);
					}),
					MA_PERIODS.map((period, index) => {
						const segments = [];
						let current = [];
						bars.forEach((bar, barIndex) => {
							const value = averages.get(bar.trade_date)?.[period];
							if (value == null) {
								if (current.length) segments.push(current.join(" "));
								current = [];
							} else current.push(`${xAt(barIndex)},${yAt(value)}`);
						});
						if (current.length) segments.push(current.join(" "));
						return segments.map((points) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("polyline", {
							points,
							fill: "none",
							stroke: MA_COLORS[index],
							strokeWidth: "1.25",
							vectorEffect: "non-scaling-stroke",
							pointerEvents: "none"
						}, `${period}-${points.split(" ")[0]}`));
					}),
					dateTicks(bars).map((index) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("text", {
						x: xAt(index),
						y: bottom + 19,
						textAnchor: index === 0 ? "start" : "middle",
						fill: "var(--market-text-secondary)",
						fontSize: "11",
						children: bars[index].trade_date.slice(0, 7)
					}, bars[index].trade_date)),
					withAmount ? amountPanel(bars, xAt, Math.max(1, Math.min(step * .75, 9)), (index) => bars[index].close >= bars[index].open ? "var(--positive)" : "var(--negative)", (index) => bars[index].trade_date, selected?.amount) : null
				]
			});
		}
		function MarketIndexMinuteChart({ points, preClose, indexName }) {
			const gradientId = (0, react.useId)().replace(/:/g, "");
			const changes = points.map((point) => minuteChangePercent(point.price, preClose));
			const valid = changes.filter((value) => value != null);
			if (!valid.length) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "flex h-full min-h-[260px] items-center justify-center text-sm text-[var(--market-text-secondary)]",
				children: "缺少有效昨收，无法显示涨跌幅坐标"
			});
			const withAmount = hasUsableAmount(points);
			const bottom = withAmount ? 276 : 319;
			const height = withAmount ? 400 : 350;
			const range = finiteRange(valid, true);
			const xAt = (index) => LEFT + index / Math.max(points.length - 1, 1) * PLOT_WIDTH;
			const yAt = (value) => scaleY(value, range.low, range.high, 32, bottom);
			const zeroY = yAt(0);
			const polyline = changes.map((change, index) => `${xAt(index)},${yAt(change ?? 0)}`).join(" ");
			const area = `${LEFT},${zeroY} ${polyline} ${xAt(points.length - 1)},${zeroY}`;
			const lastPrice = points[points.length - 1]?.price;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
				viewBox: `0 0 ${WIDTH} ${height}`,
				className: "h-full min-h-[260px] w-full bg-[var(--market-cell)]",
				role: "img",
				"aria-label": `${indexName}分时涨跌幅曲线${withAmount ? "和成交额" : ""}`,
				preserveAspectRatio: "none",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("linearGradient", {
						id: gradientId,
						x1: "0",
						y1: "0",
						x2: "0",
						y2: "1",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "var(--positive)",
							stopOpacity: "0.15"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "var(--positive)",
							stopOpacity: "0"
						})]
					}) }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("text", {
						x: LEFT,
						y: 18,
						fill: "var(--market-text-secondary)",
						fontSize: "11",
						children: `昨收 ${preClose.toFixed(2)}`
					}),
					lastPrice != null ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("text", {
						x: WIDTH - RIGHT,
						y: 18,
						textAnchor: "end",
						fill: "var(--market-text-primary)",
						fontSize: "11",
						children: `最新 ${lastPrice.toFixed(2)} / ${valid[valid.length - 1].toFixed(2)}%`
					}) : null,
					[
						range.high,
						0,
						range.low
					].map((value, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("line", {
						x1: LEFT,
						x2: WIDTH - RIGHT,
						y1: yAt(value),
						y2: yAt(value),
						stroke: index === 1 ? "var(--positive)" : "var(--market-grid-strong)",
						opacity: index === 1 ? .6 : .28,
						strokeDasharray: index === 1 ? "4 3" : void 0
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("text", {
						x: 865,
						y: yAt(value) + 4,
						fill: "var(--market-text-muted)",
						fontSize: "10",
						children: [value.toFixed(2), "%"]
					})] }, index === 0 ? "high" : index === 1 ? "zero" : "low")),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("polygon", {
						points: area,
						fill: `url(#${gradientId})`
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("polyline", {
						points: polyline,
						fill: "none",
						stroke: "var(--positive)",
						strokeWidth: "1.5",
						vectorEffect: "non-scaling-stroke"
					}),
					[
						0,
						119,
						points.length - 1
					].filter((index) => index < points.length).map((index) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("text", {
						x: xAt(index),
						y: bottom + 19,
						textAnchor: index === 0 ? "start" : index === points.length - 1 ? "end" : "middle",
						fill: "var(--market-text-secondary)",
						fontSize: "11",
						children: index === 119 ? "11:30/13:00" : index === 0 ? "09:30" : "15:00"
					}, index)),
					withAmount ? amountPanel(points, xAt, Math.max(1, Math.min(PLOT_WIDTH / points.length - .4, 5)), (index) => points[index].price >= (index ? points[index - 1].price : preClose) ? "var(--positive)" : "var(--negative)", (index) => points[index].minute_time, points.reduce((sum, point) => sum + (typeof point.amount === "number" && Number.isFinite(point.amount) && point.amount >= 0 ? point.amount : 0), 0)) : null
				]
			});
		}
		function isSupervisionSystemDefinition(definition) {
			return definition.scope === "system" && definition.visibility === "public" && definition.constituent_mode === "supervision_history" && definition.weight_method === "equal";
		}
		function resolveSupervisionSystemDefinition(definitions) {
			return definitions.find((definition) => definition.system_key === "supervision_history" && isSupervisionSystemDefinition(definition)) ?? definitions.find((definition) => definition.index_code === "SUPERVISION_HISTORY_EQUAL" && isSupervisionSystemDefinition(definition)) ?? null;
		}
		function attributeSortKey(column) {
			return `attribute:${column}`;
		}
		function getAttributeValue(row, column) {
			return (row.attributes ?? []).find((attribute) => attribute.column === column)?.value ?? null;
		}
		function getConstituentAttributeColumns(rows, schema = []) {
			const columns = schema.map((item) => item.column);
			const seen = new Set(columns);
			for (const row of rows) for (const attribute of row.attributes ?? []) if (!seen.has(attribute.column)) {
				seen.add(attribute.column);
				columns.push(attribute.column);
			}
			return columns;
		}
		function isNumericAttributeColumn(rows, column, schema = []) {
			const definition = schema.find((item) => item.column === column);
			if (definition) return definition.type === "number";
			return rows.some((row) => typeof getAttributeValue(row, column) === "number");
		}
		function selectPublishedDate(dates, requested) {
			if (!dates.length) return null;
			const sorted = [...dates].sort((left, right) => left.localeCompare(right));
			if (!requested) return sorted[sorted.length - 1];
			const notLater = sorted.filter((item) => item <= requested);
			return notLater[notLater.length - 1] ?? sorted[0];
		}
		function getKlineWindow(bars, selectedDate, size = 60) {
			if (!bars.length) return [];
			const selectedIndex = selectedDate ? bars.findIndex((item) => item.trade_date === selectedDate) : bars.length - 1;
			const end = selectedIndex >= 0 ? selectedIndex + 1 : bars.length;
			return bars.slice(Math.max(0, end - size), end);
		}
		function sortConstituents(rows, key, direction) {
			const multiplier = direction === "asc" ? 1 : -1;
			return [...rows].sort((left, right) => {
				const attributeColumn = key.startsWith("attribute:") ? key.slice(10) : null;
				const leftValue = attributeColumn ? getAttributeValue(left, attributeColumn) : left[key];
				const rightValue = attributeColumn ? getAttributeValue(right, attributeColumn) : right[key];
				if (leftValue == null && rightValue == null) return left.ts_code.localeCompare(right.ts_code);
				if (leftValue == null) return 1;
				if (rightValue == null) return -1;
				return (typeof leftValue === "number" && typeof rightValue === "number" ? leftValue - rightValue : String(leftValue).localeCompare(String(rightValue), "zh-CN")) * multiplier || left.ts_code.localeCompare(right.ts_code);
			});
		}
		function formatAttributeValue(value) {
			if (value == null) return "--";
			if (typeof value === "boolean") return value ? "是" : "否";
			return String(value);
		}
		function trimNumber(value, digits) {
			const fixed = value.toFixed(digits);
			return fixed.includes(".") ? fixed.replace(/0+$/, "").replace(/\.$/, "") : fixed;
		}
		function formatPercent$1(value) {
			return value == null ? "--" : `${value > 0 ? "+" : ""}${value.toFixed(2)}%`;
		}
		function formatVolume(value) {
			if (value == null) return "--";
			return value >= 1e4 ? `${trimNumber(value / 1e4, 2)}万手` : `${trimNumber(value, 0)}手`;
		}
		function formatAmount$1(value) {
			if (value == null) return "--";
			if (value >= 1e5) return `${trimNumber(value / 1e5, 2)}亿`;
			return `${trimNumber(value / 10, 2)}万`;
		}
		function formatFreeMarketValue(value) {
			if (value == null) return "--";
			return value >= 1e4 ? `${trimNumber(value / 1e4, 2)}亿` : `${trimNumber(value, 2)}万`;
		}
		function dateRangeEndingAt(endDate, days = 366) {
			const end = /* @__PURE__ */ new Date(`${endDate}T00:00:00`);
			const start = new Date(end);
			start.setDate(start.getDate() - days);
			const localDate = (value) => {
				return `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, "0")}-${String(value.getDate()).padStart(2, "0")}`;
			};
			return {
				startDate: localDate(start),
				endDate: localDate(end)
			};
		}
		//#endregion
		//#region src/components/supervision/SupervisionIndexPanel.tsx
		function localToday() {
			const now = /* @__PURE__ */ new Date();
			return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
		}
		function StateMessage$1({ children, error = false }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: `flex h-full min-h-[220px] items-center justify-center px-4 text-sm ${error ? "text-[var(--notice-error-fg)]" : "text-[var(--market-text-secondary)]"}`,
				children
			});
		}
		function SortHeader({ label, column, sortKey, direction, onSort }) {
			const active = sortKey === column;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onSort(column),
				className: "inline-flex items-center gap-1 whitespace-nowrap font-medium hover:text-[var(--market-text-primary)]",
				children: [label, /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					className: active ? "text-[var(--status-info-badge)]" : "opacity-35",
					children: active ? direction === "asc" ? "↑" : "↓" : "↕"
				})]
			});
		}
		function ConstituentTable({ rows, attributeSchema, isLoading, error }) {
			const [sortKey, setSortKey] = (0, react.useState)("pct_chg");
			const [direction, setDirection] = (0, react.useState)("desc");
			const sortedRows = (0, react.useMemo)(() => sortConstituents(rows, sortKey, direction), [
				direction,
				rows,
				sortKey
			]);
			const attributeColumns = (0, react.useMemo)(() => getConstituentAttributeColumns(rows, attributeSchema), [attributeSchema, rows]);
			const onSort = (column) => {
				if (column === sortKey) setDirection((value) => value === "desc" ? "asc" : "desc");
				else {
					setSortKey(column);
					setDirection("desc");
				}
			};
			if (isLoading && !rows.length) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(StateMessage$1, { children: "成分行情加载中..." });
			if (error && !rows.length) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(StateMessage$1, {
				error: true,
				children: error
			});
			if (!rows.length) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(StateMessage$1, { children: "该交易日暂无指数成分" });
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "h-full overflow-auto",
				children: [error ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "border-b border-[var(--notice-warning-border)] bg-[var(--notice-warning-bg)] px-3 py-2 text-xs text-[var(--notice-warning-fg)]",
					children: "成分行情刷新失败，当前展示缓存数据"
				}) : null, /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[700px] border-collapse text-sm",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("thead", {
						className: "sticky top-0 z-10 bg-[var(--market-header)] text-[var(--market-text-secondary)]",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
								className: "border-b border-[var(--market-grid-strong)] px-4 py-2.5 text-left font-medium",
								children: "股票名称"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
								className: "border-b border-[var(--market-grid-strong)] px-3 py-2.5 text-right",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SortHeader, {
									label: "涨幅",
									column: "pct_chg",
									sortKey,
									direction,
									onSort
								})
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
								className: "border-b border-[var(--market-grid-strong)] px-3 py-2.5 text-right",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SortHeader, {
									label: "成交量",
									column: "vol",
									sortKey,
									direction,
									onSort
								})
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
								className: "border-b border-[var(--market-grid-strong)] px-3 py-2.5 text-right",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SortHeader, {
									label: "成交额",
									column: "amount",
									sortKey,
									direction,
									onSort
								})
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
								className: "border-b border-[var(--market-grid-strong)] px-4 py-2.5 text-right",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SortHeader, {
									label: "真实流通市值",
									column: "free_mv",
									sortKey,
									direction,
									onSort
								})
							}),
							attributeColumns.map((column) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
								className: `border-b border-[var(--market-grid-strong)] px-4 py-2.5 ${isNumericAttributeColumn(rows, column, attributeSchema) ? "text-right" : "text-left"}`,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SortHeader, {
									label: column,
									column: attributeSortKey(column),
									sortKey,
									direction,
									onSort
								})
							}, column))
						] })
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("tbody", { children: sortedRows.map((row) => {
						const pctClass = row.pct_chg == null ? "text-[var(--market-text-secondary)]" : row.pct_chg >= 0 ? "text-[var(--market-rise)]" : "text-[var(--market-fall)]";
						return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("tr", {
							className: "border-b border-[var(--market-grid)] hover:bg-[var(--market-cell-hover)]",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("td", {
									className: "px-4 py-2.5",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: "font-medium text-[var(--market-text-primary)]",
										children: row.name || row.ts_code
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: "mt-0.5 text-xs text-[var(--market-text-muted)]",
										children: row.ts_code
									})]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
									className: `px-3 py-2.5 text-right font-medium tabular-nums ${pctClass}`,
									children: formatPercent$1(row.pct_chg)
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
									className: "px-3 py-2.5 text-right tabular-nums",
									children: formatVolume(row.vol)
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
									className: "px-3 py-2.5 text-right tabular-nums",
									children: formatAmount$1(row.amount)
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
									className: "px-4 py-2.5 text-right tabular-nums",
									children: formatFreeMarketValue(row.free_mv)
								}),
								attributeColumns.map((column) => {
									const value = getAttributeValue(row, column);
									return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
										className: `whitespace-nowrap px-4 py-2.5 ${typeof value === "number" ? "text-right tabular-nums" : "text-left"}`,
										children: formatAttributeValue(value)
									}, column);
								})
							]
						}, row.ts_code);
					}) })]
				})]
			});
		}
		function SupervisionIndexPanel({ initialDate, embedded = false }) {
			const definitionsQuery = useCustomIndexDefinitions(false);
			const definition = (0, react.useMemo)(() => resolveSupervisionSystemDefinition(definitionsQuery.data ?? []), [definitionsQuery.data]);
			if (definitionsQuery.isLoading && !definitionsQuery.data) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SupervisionIndexDiscoveryState, {
				embedded,
				children: "正在查找监管系统指数..."
			});
			if (definitionsQuery.isError && !definitionsQuery.data) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SupervisionIndexDiscoveryState, {
				embedded,
				error: true,
				children: "监管系统指数列表加载失败，请稍后重试"
			});
			if (!definition) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SupervisionIndexDiscoveryState, {
				embedded,
				error: true,
				children: "监管系统指数尚未配置或当前不可用"
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ResolvedSupervisionIndexPanel, {
				definition,
				initialDate,
				embedded
			});
		}
		function SupervisionIndexDiscoveryState({ children, embedded, error = false }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: embedded ? "h-full" : "h-full p-4",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("section", {
					className: "h-full min-h-[320px] overflow-hidden rounded-xl border border-[var(--market-grid-strong)] bg-[var(--market-cell)]",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(StateMessage$1, {
						error,
						children
					})
				})
			});
		}
		function ResolvedSupervisionIndexPanel({ definition, initialDate, embedded }) {
			const indexCode = definition.index_code;
			const indexName = definition.name;
			const anchorDate = initialDate && initialDate > localToday() ? initialDate : localToday();
			const range = (0, react.useMemo)(() => dateRangeEndingAt(anchorDate), [anchorDate]);
			const [mode, setMode] = (0, react.useState)("kline");
			const [selectedDate, setSelectedDate] = (0, react.useState)(null);
			const dailyQuery = useCustomIndexDaily(indexCode, range.startDate, range.endDate);
			const bars = dailyQuery.data ?? [];
			const publishedDates = (0, react.useMemo)(() => bars.map((item) => item.trade_date), [bars]);
			(0, react.useEffect)(() => {
				if (!publishedDates.length) {
					setSelectedDate(null);
					return;
				}
				setSelectedDate((current) => current && publishedDates.includes(current) ? current : selectPublishedDate(publishedDates, initialDate));
			}, [initialDate, publishedDates]);
			const selectedIndex = selectedDate ? publishedDates.indexOf(selectedDate) : -1;
			const selectedBar = selectedIndex >= 0 ? bars[selectedIndex] : null;
			const chartBars = (0, react.useMemo)(() => getKlineWindow(bars, selectedDate), [bars, selectedDate]);
			const minuteQuery = useCustomIndexMinutes(indexCode, selectedDate, mode === "minute");
			const constituentQuery = useCustomIndexConstituents(indexCode, selectedDate);
			const moveDate = (offset) => {
				const nextIndex = selectedIndex + offset;
				if (nextIndex >= 0 && nextIndex < publishedDates.length) setSelectedDate(publishedDates[nextIndex]);
			};
			const renderChart = () => {
				if (dailyQuery.isLoading && !bars.length) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(StateMessage$1, { children: "指数日K加载中..." });
				if (dailyQuery.isError && !bars.length) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(StateMessage$1, {
					error: true,
					children: dailyQuery.error.message || "指数日K加载失败"
				});
				if (!bars.length) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(StateMessage$1, { children: `暂无${indexName}日K数据` });
				if (mode === "kline") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MarketIndexDailyChart, {
					bars: chartBars,
					history: bars,
					selectedDate,
					indexName
				});
				if (minuteQuery.isLoading) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(StateMessage$1, { children: "分时数据加载中..." });
				if (minuteQuery.isError) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(StateMessage$1, {
					error: true,
					children: minuteQuery.error.message || "分时数据加载失败"
				});
				if (!minuteQuery.data?.length) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(StateMessage$1, { children: "该交易日暂无分时数据" });
				return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MarketIndexMinuteChart, {
					points: minuteQuery.data,
					preClose: selectedBar?.pre_close ?? NaN,
					indexName
				});
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: `flex min-h-0 flex-col bg-[var(--market-canvas)] text-[var(--market-text-primary)] ${embedded ? "h-full" : "h-full p-4"}`,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
					className: "flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-[var(--market-grid-strong)] bg-[var(--market-cell)]",
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-3 border-b border-[var(--market-grid-strong)] bg-[var(--market-header)] px-4 py-3",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": "上一交易日",
										onClick: () => moveDate(-1),
										disabled: selectedIndex <= 0,
										className: "rounded-md border border-[var(--market-grid-strong)] px-2.5 py-1.5 hover:bg-[var(--market-cell-hover)] disabled:cursor-not-allowed disabled:opacity-35",
										children: "←"
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										"aria-label": "选择交易日",
										type: "date",
										value: selectedDate ?? "",
										min: publishedDates[0],
										max: publishedDates[publishedDates.length - 1],
										disabled: !publishedDates.length,
										onChange: (event) => setSelectedDate(selectPublishedDate(publishedDates, event.target.value)),
										className: "rounded-md border border-[var(--market-grid-strong)] bg-[var(--market-cell)] px-3 py-1.5 text-sm font-medium"
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": "下一交易日",
										onClick: () => moveDate(1),
										disabled: selectedIndex < 0 || selectedIndex >= publishedDates.length - 1,
										className: "rounded-md border border-[var(--market-grid-strong)] px-2.5 py-1.5 hover:bg-[var(--market-cell-hover)] disabled:cursor-not-allowed disabled:opacity-35",
										children: "→"
									})
								]
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [selectedBar ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "hidden text-right text-xs text-[var(--market-text-secondary)] sm:block",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
											className: "font-semibold text-[var(--market-text-primary)]",
											children: [
												indexName,
												" ",
												selectedBar.close.toFixed(2)
											]
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: `ml-2 ${selectedBar.pct_chg >= 0 ? "text-[var(--market-rise)]" : "text-[var(--market-fall)]"}`,
											children: formatPercent$1(selectedBar.pct_chg)
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
											className: "ml-2",
											children: [constituentQuery.data?.length ?? 0, " 只"]
										})
									]
								}) : null, /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: "flex rounded-lg border border-[var(--market-grid-strong)] bg-[var(--market-cell)] p-0.5",
									children: ["kline", "minute"].map((item) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setMode(item),
										className: `rounded-md px-3 py-1.5 text-sm transition ${mode === item ? "bg-[var(--status-info-badge)] text-[var(--badge-fg)]" : "text-[var(--market-text-secondary)] hover:text-[var(--market-text-primary)]"}`,
										children: item === "kline" ? "K线" : "分时"
									}, item))
								})]
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "min-h-[240px] flex-[0_0_42%] border-b border-[var(--market-grid-strong)] bg-[var(--market-canvas)] p-2",
							children: renderChart()
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "min-h-0 flex-1",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ConstituentTable, {
								rows: constituentQuery.data ?? [],
								attributeSchema: definition.attribute_schema,
								isLoading: constituentQuery.isLoading,
								error: constituentQuery.isError ? constituentQuery.error.message || "成分行情加载失败" : null
							})
						})
					]
				})
			});
		}
		//#endregion
		//#region src/components/supervision/SupervisionPanelShell.tsx
		function SupervisionPanelShell({ title, description, actions, controls, isLoading = false, error, emptyMessage = "暂无数据", hasData, onRetry, children }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				className: "flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-[var(--market-grid-strong)] bg-[var(--market-cell)]",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "border-b border-[var(--market-grid-strong)] bg-[var(--market-header)] px-4 py-4",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
							className: "text-base font-semibold text-[var(--market-text-primary)]",
							children: title
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-[var(--market-text-secondary)]",
							children: description
						})] }), actions]
					}), controls ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap items-center gap-3",
						children: controls
					}) : null]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "flex-1 min-h-0 overflow-hidden",
					children: isLoading ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "flex h-full items-center justify-center bg-[var(--market-canvas)] px-4 text-sm",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "animate-pulse rounded border border-[var(--notice-info-border)] bg-[var(--notice-info-bg)] px-4 py-3 text-[var(--notice-info-fg)]",
							children: "加载中..."
						})
					}) : error ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "flex h-full flex-col items-center justify-center gap-3 bg-[var(--market-canvas)] px-4 text-center",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "rounded border border-[var(--notice-error-border)] bg-[var(--notice-error-bg)] px-4 py-3 text-[var(--notice-error-fg)]",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: error
							}), onRetry ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: onRetry,
								className: "mt-3 rounded-md border border-[var(--notice-error-border)] bg-[var(--market-cell)] px-3 py-1.5 text-sm font-medium hover:bg-[var(--market-cell-hover)]",
								children: "重试"
							}) : null]
						})
					}) : !hasData ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "flex h-full items-center justify-center bg-[var(--market-canvas)] px-4 text-sm",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "rounded border border-[var(--notice-info-border)] bg-[var(--notice-info-bg)] px-4 py-3 text-[var(--notice-info-fg)]",
							children: emptyMessage
						})
					}) : children
				})]
			});
		}
		//#endregion
		//#region src/components/supervision/SupervisionPreviewList.tsx
		function SupervisionPreviewList({ items, getKey, renderItem, onScroll, className = "" }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: `h-full overflow-auto p-4 ${className}`,
				onScroll,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: items.map((item, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "rounded-lg border border-[var(--market-grid)] bg-[var(--market-cell)] p-3 transition-colors hover:border-[var(--market-grid-strong)] hover:bg-[var(--market-cell-hover)]",
						children: renderItem(item)
					}, getKey(item, index)))
				})
			});
		}
		//#endregion
		//#region src/components/supervision/supervisionUtils.ts
		const CATEGORY_100 = "连续10个交易日内涨幅偏离值累计达到 100%";
		const CATEGORY_200 = "连续30个交易日内涨幅偏离值累计达到 200%";
		const CATEGORY_SUSPENSION = "股票交易异常波动暨停牌核查";
		const DISTANCE_CATEGORIES$1 = /* @__PURE__ */ new Set([
			"主板连续10个交易日内4次出现同向异常波动",
			"科创板连续10个交易日内3次出现同向异常波动",
			"创业板连续10个交易日内3次出现同向异常波动",
			"复牌后10个交易日内再度出现同向异动"
		]);
		const ATTITUDE_REASON_LABELS = {
			SUPERVISION_CONFIRMED: "监管事件已确认",
			FIRST_SUPERVISION: "首次进入监管",
			FIRST_TRIGGERED_100: "首次监管，确认触发 100% 异动线",
			FIRST_TRIGGERED_200: "首次监管，确认触发 200% 异动线",
			FIRST_TRIGGERED_OTHER: "首次监管，确认触发已支持异动线",
			DURING_REPEATED: "续监管",
			DURING_WITH_NEW_TRIGGER: "续监管并出现新触线",
			DURING_WITHOUT_NEW_TRIGGER: "续监管，未发现新触线",
			REENTRY_30D: "30 日内再次监管",
			REENTRY_WITH_NEW_TRIGGER: "30 日内再次监管并出现新触线",
			REENTRY_WITHOUT_NEW_TRIGGER: "30 日内再次监管，未发现新触线",
			SUSPENDED_MARKET_SNAPSHOT: "停牌监管（行情快照）",
			SUSPENSION_CHECK_LINE: "停牌监管（停牌核查记录）",
			NEAR_LINE_NOT_TRIGGERED: "临近异动线监管（未触发 100%/200% 线）"
		};
		function formatDecimal(value, digits = 2) {
			if (value === null || value === void 0 || Number.isNaN(value)) return "--";
			return value.toFixed(digits);
		}
		function formatSignedPercent(value, digits = 2) {
			if (value === null || value === void 0 || Number.isNaN(value)) return "--";
			return `${value > 0 ? "+" : ""}${value.toFixed(digits)}%`;
		}
		function getPreviewStockCodes(items) {
			const seen = /* @__PURE__ */ new Set();
			const codes = [];
			for (const item of items) {
				const code = item.ts_code?.slice(0, 6);
				if (!code || seen.has(code)) continue;
				seen.add(code);
				codes.push(code);
			}
			return codes;
		}
		function getWarningLineHorizon(value) {
			const normalized = String(value ?? "").trim().toLowerCase();
			if ([
				"0",
				"false",
				"no",
				"n"
			].includes(normalized)) return {
				kind: "current",
				label: "当日口径",
				sortOrder: 0
			};
			if ([
				"1",
				"true",
				"yes",
				"y"
			].includes(normalized)) return {
				kind: "next",
				label: "次日口径",
				sortOrder: 1
			};
			return {
				kind: "unknown",
				label: "口径未知",
				sortOrder: 2
			};
		}
		function groupWarningLines(items) {
			const groups = /* @__PURE__ */ new Map();
			for (const item of items) {
				const key = `${item.trade_date}::${item.ts_code}`;
				const existing = groups.get(key);
				if (existing) {
					existing.items.push(item);
					continue;
				}
				groups.set(key, {
					key,
					tradeDate: item.trade_date,
					tsCode: item.ts_code,
					stockName: item.stock_name,
					items: [item]
				});
			}
			return Array.from(groups.values(), (group) => ({
				...group,
				items: group.items.map((item, index) => ({
					item,
					index
				})).sort((left, right) => {
					return getWarningLineHorizon(left.item.is_next_day).sortOrder - getWarningLineHorizon(right.item.is_next_day).sortOrder || left.index - right.index;
				}).map(({ item }) => item)
			}));
		}
		function getPerformanceTone(value) {
			if (value === null || value === void 0 || Number.isNaN(value)) return "text-text-muted";
			if (value > 0) return "text-[var(--positive)]";
			if (value < 0) return "text-[var(--negative)]";
			return "text-text-secondary";
		}
		function isTriggeredWarning$1(item) {
			if (item.category === CATEGORY_SUSPENSION) return true;
			if (item.category === CATEGORY_100) return typeof item.deviation === "number" && item.deviation >= 100;
			if (item.category === CATEGORY_200) return typeof item.deviation === "number" && item.deviation >= 200;
			if (!item.category || !DISTANCE_CATEGORIES$1.has(item.category)) return false;
			const pctChange = item.pct_change;
			const distancePct = item.distance_pct;
			return typeof pctChange === "number" && typeof distancePct === "number" && pctChange >= distancePct;
		}
		function getAttitudePresentation(item) {
			const isLegacyConfirmed = !item.attitude_evidence_status && typeof item.attitude_score === "number";
			const status = isLegacyConfirmed ? "confirmed" : item.attitude_evidence_status;
			const reasonCodes = Array.isArray(item.attitude_reason_codes) ? item.attitude_reason_codes : [];
			const reasonLabels = Array.from(new Set(reasonCodes.map((code) => ATTITUDE_REASON_LABELS[code]).filter((label) => Boolean(label))));
			const reasonLabel = reasonLabels.length > 0 ? reasonLabels.join("；") : null;
			if (status === "confirmed" && typeof item.attitude_score === "number") {
				const label = item.attitude_label || "已确认";
				const cycleScore = typeof item.cycle_attitude_score === "number" && item.cycle_attitude_score > item.attitude_score ? item.cycle_attitude_score : null;
				return {
					state: "confirmed",
					statusLabel: `${label}`,
					reasonLabel: reasonLabel || (isLegacyConfirmed ? "历史评分，等待 v2 证据说明" : "已由持久化证据确认"),
					cycleLabel: cycleScore === null ? null : `本监管周期最高 ${cycleScore}`
				};
			}
			return {
				state: "confirmed",
				statusLabel: "监管态度 1 · 常规监管",
				reasonLabel: reasonLabel || (status ? "监管事件已确认，未识别到更高等级事实" : "监管事件已确认，等待新版规则回放"),
				cycleLabel: null
			};
		}
		function getWarningLinePresentation(item) {
			const isSuspension = item.category === CATEGORY_SUSPENSION;
			const triggered = !isSuspension && isTriggeredWarning$1(item);
			return {
				triggered,
				isSuspension,
				showMetrics: !isSuspension,
				statusLabel: isSuspension ? "停牌核查中" : triggered ? "已触发" : null,
				pctChangeTone: getPerformanceTone(item.pct_change),
				distanceTone: item.distance_pct === null || item.distance_pct === void 0 || Number.isNaN(item.distance_pct) ? "text-text-muted" : "text-text-secondary"
			};
		}
		//#endregion
		//#region src/components/supervision/SupervisionRows.tsx
		function SupervisionRow({ item, onOpen }) {
			const attitude = getAttitudePresentation(item);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onOpen(item),
				className: "w-full text-left",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2",
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-x-4 gap-y-2",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
									className: "text-sm font-semibold text-[var(--market-text-primary)]",
									children: [item.stock_name, /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: "ml-1 rounded bg-[var(--status-info-badge)] px-1.5 py-0.5 font-mono text-[11px] text-[var(--badge-fg)]",
										children: item.ts_code
									})]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
									className: "text-sm text-[var(--market-text-secondary)]",
									children: [
										item.start_date,
										" ",
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "px-2 text-[var(--market-text-muted)]",
											children: "-"
										}),
										" ",
										item.end_date
									]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: `rounded-full border px-2 py-0.5 text-xs font-medium ${attitude.state === "confirmed" ? "border-[var(--tag-regulatory-bg)] bg-[var(--tag-regulatory-bg)] text-[var(--badge-fg)]" : attitude.state === "invalid" ? "border-[var(--status-danger-badge)] bg-[var(--status-danger-badge)] text-[var(--badge-fg)]" : "border-[var(--status-neutral-badge)] bg-[var(--status-neutral-badge)] text-[var(--badge-fg)]"}`,
									children: attitude.statusLabel
								}),
								attitude.cycleLabel ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "rounded-full border border-[var(--status-warning-badge)] bg-[var(--status-warning-badge)] px-2 py-0.5 text-xs font-medium text-[var(--badge-fg)]",
									children: attitude.cycleLabel
								}) : null
							]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[var(--market-text-secondary)]",
							children: [
								["当日", item.entry_day_pct],
								["2日", item.entry_2d_pct],
								["3日", item.entry_3d_pct]
							].map(([label, value]) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: [
								label,
								" ",
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: `font-semibold ${getPerformanceTone(value)}`,
									children: formatSignedPercent(value)
								})
							] }, String(label)))
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "text-xs text-[var(--market-text-muted)]",
							children: ["监管事实：", attitude.reasonLabel]
						})
					]
				})
			});
		}
		function WarningGroupRow({ group, showTradeDate = false, onOpen }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onOpen(group.items[0]),
				className: "w-full text-left",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2.5",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-x-4 gap-y-2",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: "text-sm font-semibold text-[var(--market-text-primary)]",
							children: [group.stockName, /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "ml-1 rounded bg-[var(--status-info-badge)] px-1.5 py-0.5 font-mono text-[11px] text-[var(--badge-fg)]",
								children: group.tsCode
							})]
						}), showTradeDate ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: "text-sm text-[var(--market-text-secondary)]",
							children: group.tradeDate
						}) : null]
					}), group.items.map((item, index) => {
						const horizon = getWarningLineHorizon(item.is_next_day);
						const presentation = getWarningLinePresentation(item);
						return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-x-3 gap-y-2 border-l-2 border-[var(--market-grid-strong)] pl-3",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: `rounded-full border px-2 py-0.5 text-xs font-medium ${horizon.kind === "next" ? "border-[var(--status-info-badge)] bg-[var(--status-info-badge)] text-[var(--badge-fg)]" : "border-[var(--status-neutral-badge)] bg-[var(--status-neutral-badge)] text-[var(--badge-fg)]"}`,
									children: horizon.label
								}),
								presentation.statusLabel ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: `rounded-full border px-2 py-0.5 text-xs font-medium ${presentation.isSuspension ? "border-[var(--status-warning-badge)] bg-[var(--status-warning-badge)] text-[var(--badge-fg)]" : "border-[var(--status-danger-badge)] bg-[var(--status-danger-badge)] text-[var(--badge-fg)]"}`,
									children: presentation.statusLabel
								}) : null,
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
									className: "text-sm text-[var(--market-text-secondary)]",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: "font-medium text-[var(--market-text-primary)]",
										children: item.category || "预警"
									}), presentation.showMetrics ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "px-2 text-[var(--market-text-muted)]",
											children: "|"
										}),
										"涨跌幅",
										" ",
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
											className: `font-semibold ${presentation.pctChangeTone}`,
											children: [formatDecimal(item.pct_change), "%"]
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "px-2 text-[var(--market-text-muted)]",
											children: "|"
										}),
										"距离阈值",
										" ",
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
											className: `font-semibold ${presentation.distanceTone}`,
											children: [formatDecimal(item.distance_pct), "%"]
										})
									] }) : null]
								}),
								presentation.showMetrics && item.distance_desc ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "text-xs text-[var(--market-text-muted)]",
									children: item.distance_desc
								}) : null
							]
						}, `${item.category || "warning"}-${String(item.is_next_day ?? "unknown")}-${index}`);
					})]
				})
			});
		}
		//#endregion
		//#region src/components/snapshot-preview/lightweight/filterModel.ts
		const LIGHTWEIGHT_SNAPSHOT_FILTER_FIELDS = ["limit_status", "has_convertible"];
		const LIMIT_EVENT_STATUSES = /* @__PURE__ */ new Set([
			1,
			-1,
			2
		]);
		function hasActiveLightweightSnapshotFilters(filters) {
			return filters.limitEvents || filters.convertible;
		}
		function resolveLightweightSnapshotFilterCounts(visibleFallback, totalFallback, serverCounts) {
			if (!serverCounts) return {
				visible: visibleFallback,
				total: totalFallback
			};
			return {
				visible: serverCounts.filtered,
				total: serverCounts.unfiltered
			};
		}
		function stockHasLimitEventInDates(stock, visibleDates) {
			return visibleDates.some((date) => {
				const status = stock.snapshots.get(date)?.limit_status;
				return typeof status === "number" && LIMIT_EVENT_STATUSES.has(status);
			});
		}
		function stockHasConvertible(stock) {
			if (stock.has_convertible === true) return true;
			return Array.from(stock.snapshots.values()).some((snapshot) => snapshot.has_convertible === true);
		}
		function filterLightweightSnapshotStocks(stocks, visibleDates, filters) {
			if (!hasActiveLightweightSnapshotFilters(filters)) return [...stocks];
			return stocks.filter((stock) => {
				const matchesLimitEvent = filters.limitEvents && stockHasLimitEventInDates(stock, visibleDates);
				const matchesConvertible = filters.convertible && stockHasConvertible(stock);
				return matchesLimitEvent || matchesConvertible;
			});
		}
		//#endregion
		//#region src/components/snapshot-preview/lightweight/LightweightSnapshotPreviewHost.tsx
		function LightweightSnapshotPreviewHost({ title, subtitle, isOpen, filters, filterCounts, isFilterSaving, onFilterChange, onClose, children }) {
			const titleId = (0, react.useId)();
			const dialogRef = (0, react.useRef)(null);
			const closeButtonRef = (0, react.useRef)(null);
			const triggerRef = (0, react.useRef)(null);
			(0, react.useEffect)(() => {
				if (!isOpen) return;
				triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
				const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());
				const handleEscape = (event) => {
					if (event.key !== "Escape") return;
					const targetModal = event.target instanceof Element ? event.target.closest("[aria-modal=\"true\"]") : null;
					if (targetModal && targetModal !== dialogRef.current) return;
					event.preventDefault();
					onClose();
				};
				window.addEventListener("keydown", handleEscape);
				return () => {
					window.cancelAnimationFrame(focusFrame);
					window.removeEventListener("keydown", handleEscape);
					const trigger = triggerRef.current;
					triggerRef.current = null;
					if (trigger?.isConnected) trigger.focus({ preventScroll: true });
				};
			}, [isOpen, onClose]);
			const handleDialogKeyDown = (event) => {
				if (event.key !== "Tab" || !dialogRef.current) return;
				if ((event.target instanceof Element ? event.target.closest("[aria-modal=\"true\"]") : null) !== dialogRef.current) return;
				const focusable = Array.from(dialogRef.current.querySelectorAll("button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [href], [tabindex]:not([tabindex=\"-1\"])"));
				const first = focusable[0];
				const last = focusable[focusable.length - 1];
				if (!first || !last) {
					event.preventDefault();
					return;
				}
				if (event.shiftKey && document.activeElement === first) {
					event.preventDefault();
					last.focus();
				} else if (!event.shiftKey && document.activeElement === last) {
					event.preventDefault();
					first.focus();
				}
			};
			if (!isOpen) return null;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(OverlaySurface, {
				className: "z-50 flex items-center justify-center bg-[var(--overlay-bg)] p-2 backdrop-blur-[1px] sm:p-4",
				onClick: (event) => {
					if (event.target === event.currentTarget) onClose();
				},
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("dialog", {
					open: true,
					ref: dialogRef,
					"aria-modal": "true",
					"aria-labelledby": titleId,
					className: "relative m-0 flex h-[calc(100%-1rem)] max-h-[900px] w-[calc(100%-1rem)] max-w-[1100px] flex-col overflow-hidden rounded-2xl border border-border-theme bg-bg-primary p-0 shadow-[0_24px_80px_rgba(0,0,0,0.45)]",
					onClick: (event) => event.stopPropagation(),
					onKeyDown: handleDialogKeyDown,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(HostHeader, {
						titleId,
						title,
						subtitle,
						filters,
						filterCounts,
						isFilterSaving,
						onFilterChange,
						onClose,
						closeButtonRef
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "min-h-0 flex-1",
						children
					})]
				})
			});
		}
		function HostHeader({ titleId, title, subtitle, filters, filterCounts, isFilterSaving, onFilterChange, onClose, closeButtonRef }) {
			const displayedSubtitle = hasActiveLightweightSnapshotFilters(filters) && filterCounts ? `已显示 ${filterCounts.visible} / 共 ${filterCounts.total} 只` : subtitle || "轻量行情预览";
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3 border-b border-border-theme bg-bg-secondary px-4 py-3",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 flex-1 flex-wrap items-start gap-x-5 gap-y-2",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "min-w-0 basis-48 grow",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							id: titleId,
							className: "truncate text-sm font-semibold text-text-gold",
							children: title
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "truncate text-xs text-text-muted",
							children: displayedSubtitle
						})]
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "flex shrink-0 flex-wrap items-center gap-x-4 gap-y-2 pt-0.5 text-xs text-text-secondary",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
							className: "flex cursor-pointer items-center gap-1.5 whitespace-nowrap",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: filters.limitEvents,
								disabled: isFilterSaving,
								onChange: (event) => onFilterChange("limitEvents", event.target.checked),
								className: "h-3.5 w-3.5 accent-[var(--accent)] disabled:cursor-wait disabled:opacity-60"
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "涨跌停/炸板" })]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
							className: "flex cursor-pointer items-center gap-1.5 whitespace-nowrap",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: filters.convertible,
								disabled: isFilterSaving,
								onChange: (event) => onFilterChange("convertible", event.target.checked),
								className: "h-3.5 w-3.5 accent-[var(--accent)] disabled:cursor-wait disabled:opacity-60"
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "含可转债" })]
						})]
					})]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
					ref: closeButtonRef,
					type: "button",
					onClick: onClose,
					className: "rounded-md p-1.5 text-text-secondary transition hover:bg-[var(--selected-bg)] hover:text-text-primary",
					"aria-label": "关闭轻量行情预览",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
						className: "h-4 w-4",
						fill: "none",
						stroke: "currentColor",
						viewBox: "0 0 24 24",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							strokeWidth: 2,
							d: "M6 18L18 6M6 6l12 12"
						})
					})
				})]
			});
		}
		//#endregion
		//#region src/hooks/useMarketSnapshotPreviewData.ts
		function useMarketSnapshotPreviewData(options) {
			const { startDate, endDate, selectedDate, limitDates, stockCodes, cellDisplayConfig, showMinuteCurve, requiredFields, stockFilters } = options;
			return useMockData("market_snapshot", startDate, endDate, selectedDate, limitDates, null, stockCodes, cellDisplayConfig, {
				enableRuntimePatch: false,
				enableTopicLookup: false,
				requiredFields,
				stockFilters,
				showMinuteCurve
			});
		}
		//#endregion
		//#region src/hooks/useSnapshotPreviewDateWindow.ts
		function resolveNearestSnapshotDate(fullDateList, anchorDate, now = /* @__PURE__ */ new Date()) {
			if (fullDateList.length === 0) return "";
			const targetDate = anchorDate || getShanghaiDateString(now);
			if (fullDateList.includes(targetDate)) return targetDate;
			const following = fullDateList.find((date) => date >= targetDate);
			if (!following) return fullDateList[fullDateList.length - 1];
			const followingIndex = fullDateList.indexOf(following);
			if (followingIndex === 0) return following;
			const preceding = fullDateList[followingIndex - 1];
			const anchorTime = Date.parse(`${targetDate}T00:00:00Z`);
			const precedingDistance = Math.abs(anchorTime - Date.parse(`${preceding}T00:00:00Z`));
			return Math.abs(Date.parse(`${following}T00:00:00Z`) - anchorTime) <= precedingDistance ? following : preceding;
		}
		function useSnapshotPreviewDateWindow(limitDates, options = {}) {
			const windowSize = Math.max(1, options.windowSize ?? 9);
			const anchorDate = options.anchorDate ?? null;
			const fullDateList = (0, react.useMemo)(() => buildSnapshotDateList(limitDates, getShanghaiDateString()), [limitDates]);
			const [selectedDate, setSelectedDate] = (0, react.useState)("");
			const [startDate, setStartDate] = (0, react.useState)("");
			const [endDate, setEndDate] = (0, react.useState)("");
			const appliedAnchorRef = (0, react.useRef)(null);
			(0, react.useEffect)(() => {
				if (fullDateList.length === 0) return;
				if (anchorDate && appliedAnchorRef.current !== anchorDate) {
					const anchoredDate = resolveNearestSnapshotDate(fullDateList, anchorDate);
					const anchorIndex = fullDateList.indexOf(anchoredDate);
					const nextStartIndex = Math.max(0, anchorIndex - Math.floor((windowSize - 1) / 2));
					const maxStartIndex = Math.max(0, fullDateList.length - windowSize);
					const boundedStartIndex = Math.min(nextStartIndex, maxStartIndex);
					const nextEndIndex = Math.min(fullDateList.length - 1, boundedStartIndex + windowSize - 1);
					appliedAnchorRef.current = anchorDate;
					setSelectedDate(anchoredDate);
					setStartDate(fullDateList[boundedStartIndex]);
					setEndDate(fullDateList[nextEndIndex]);
					return;
				}
				if (!anchorDate) appliedAnchorRef.current = null;
				const nearestDate = resolveNearestSnapshotDate(fullDateList);
				const nextSelectedDate = selectedDate && fullDateList.includes(selectedDate) ? selectedDate : nearestDate;
				if (nextSelectedDate !== selectedDate) setSelectedDate(nextSelectedDate);
				const normalizedStartDate = startDate && fullDateList.includes(startDate) ? startDate : "";
				const normalizedEndDate = endDate && fullDateList.includes(endDate) ? endDate : "";
				if (normalizedStartDate && normalizedEndDate && normalizedStartDate <= normalizedEndDate) {
					if (normalizedStartDate !== startDate) setStartDate(normalizedStartDate);
					if (normalizedEndDate !== endDate) setEndDate(normalizedEndDate);
					return;
				}
				const endIndex = fullDateList.indexOf(nextSelectedDate);
				const safeEndIndex = endIndex === -1 ? fullDateList.length - 1 : endIndex;
				const nextStartIndex = Math.max(0, safeEndIndex - (windowSize - 1));
				const nextEndIndex = Math.min(fullDateList.length - 1, nextStartIndex + (windowSize - 1));
				setStartDate(fullDateList[nextStartIndex]);
				setEndDate(fullDateList[nextEndIndex]);
			}, [
				anchorDate,
				endDate,
				fullDateList,
				selectedDate,
				startDate,
				windowSize
			]);
			const setDateRange = (start, end) => {
				setStartDate(start);
				setEndDate(end);
			};
			return {
				selectedDate,
				setSelectedDate,
				startDate,
				endDate,
				setDateRange,
				fullDateList
			};
		}
		function clamp(value, min, max) {
			return Math.min(Math.max(value, min), max);
		}
		function calculateLightweightSnapshotGridMetrics(visibleColumnCount, hostWidth) {
			const columnCount = Math.max(1, visibleColumnCount);
			const preferredWidth = 132 + columnCount * 96 + 32;
			const resolvedHostWidth = hostWidth && hostWidth > 0 ? hostWidth : preferredWidth;
			const availableDateWidth = resolvedHostWidth - 132 - 32;
			const dateColumnWidth = clamp(Math.floor(availableDateWidth / columnCount), 68, 96);
			return {
				hostWidth: resolvedHostWidth,
				dateColumnWidth,
				frozenColumnWidth: 132,
				gridWidth: 132 + columnCount * dateColumnWidth + 32,
				preferredWidth
			};
		}
		//#endregion
		//#region src/components/snapshot-preview/lightweight/LightweightSnapshotPreviewGrid.tsx
		const HEADER_HEIGHT = 38;
		const ROW_HEIGHT = 54;
		const LightweightSnapshotPreviewGrid = (0, react.memo)(function LightweightSnapshotPreviewGrid({ stocks, visibleDates, baseDate, selectedStockCode, cellDisplayConfig, showMinuteCurve, isFetching = false, emptyMessage = "暂无快照数据", onShiftWindow, onStockClick }) {
			const containerRef = (0, react.useRef)(null);
			const headerDragRef = (0, react.useRef)({
				isDragging: false,
				startX: 0
			});
			const dragDistanceRef = (0, react.useRef)(0);
			const [dragOffset, setDragOffset] = (0, react.useState)(0);
			const [isSnapping, setIsSnapping] = (0, react.useState)(false);
			const [hostWidth, setHostWidth] = (0, react.useState)(void 0);
			const mainScrollRef = (0, react.useRef)(null);
			const frozenScrollRef = (0, react.useRef)(null);
			const rowRefs = (0, react.useRef)(/* @__PURE__ */ new Map());
			const wheelAccumulator = (0, react.useRef)(0);
			const isSyncingScroll = (0, react.useRef)(false);
			const visibleDateKey = visibleDates.map((item) => item.date).join("|");
			(0, react.useEffect)(() => {
				const container = containerRef.current;
				if (!container) return;
				const measure = () => {
					setHostWidth(container.clientWidth);
				};
				measure();
				const observer = new ResizeObserver(measure);
				observer.observe(container);
				return () => observer.disconnect();
			}, []);
			const metrics = (0, react.useMemo)(() => calculateLightweightSnapshotGridMetrics(visibleDates.length, hostWidth), [hostWidth, visibleDates.length]);
			const handleHeaderMouseDown = (0, react.useCallback)((event) => {
				if (event.button !== 0) return;
				headerDragRef.current = {
					isDragging: true,
					startX: event.pageX
				};
				dragDistanceRef.current = 0;
				setIsSnapping(false);
			}, []);
			const handleHeaderMouseMove = (0, react.useCallback)((event) => {
				if (!headerDragRef.current.isDragging) return;
				const deltaX = event.pageX - headerDragRef.current.startX;
				dragDistanceRef.current += Math.abs(event.movementX);
				let nextOffset = deltaX;
				const shiftUnit = Math.max(1, metrics.dateColumnWidth);
				const steps = Math.trunc(deltaX / shiftUnit);
				if (steps !== 0) {
					if (onShiftWindow(-steps)) {
						headerDragRef.current.startX += steps * shiftUnit;
						nextOffset = deltaX - steps * shiftUnit;
					}
				}
				setDragOffset(nextOffset);
			}, [metrics.dateColumnWidth, onShiftWindow]);
			const handleHeaderMouseUp = (0, react.useCallback)(() => {
				if (!headerDragRef.current.isDragging) return;
				headerDragRef.current.isDragging = false;
				setIsSnapping(true);
				setDragOffset(0);
				window.setTimeout(() => setIsSnapping(false), 160);
			}, []);
			(0, react.useEffect)(() => {
				window.addEventListener("mousemove", handleHeaderMouseMove);
				window.addEventListener("mouseup", handleHeaderMouseUp);
				return () => {
					window.removeEventListener("mousemove", handleHeaderMouseMove);
					window.removeEventListener("mouseup", handleHeaderMouseUp);
				};
			}, [handleHeaderMouseMove, handleHeaderMouseUp]);
			(0, react.useEffect)(() => {
				setDragOffset(0);
				setIsSnapping(false);
			}, [visibleDateKey]);
			(0, react.useEffect)(() => {
				if (!selectedStockCode) return;
				const rowElement = rowRefs.current.get(selectedStockCode);
				const mainScrollElement = mainScrollRef.current;
				const frozenScrollElement = frozenScrollRef.current;
				if (!rowElement || !mainScrollElement) return;
				const rowTop = rowElement.offsetTop;
				const rowBottom = rowTop + rowElement.offsetHeight;
				const visibleTop = mainScrollElement.scrollTop;
				const visibleBottom = visibleTop + mainScrollElement.clientHeight;
				if (rowTop < visibleTop) {
					mainScrollElement.scrollTop = rowTop;
					if (frozenScrollElement) frozenScrollElement.scrollTop = rowTop;
					return;
				}
				if (rowBottom > visibleBottom) {
					const nextScrollTop = rowBottom - mainScrollElement.clientHeight;
					mainScrollElement.scrollTop = nextScrollTop;
					if (frozenScrollElement) frozenScrollElement.scrollTop = nextScrollTop;
				}
			}, [selectedStockCode]);
			const handleMainScroll = (0, react.useCallback)(() => {
				if (isSyncingScroll.current) return;
				isSyncingScroll.current = true;
				window.requestAnimationFrame(() => {
					if (mainScrollRef.current && frozenScrollRef.current) frozenScrollRef.current.scrollTop = mainScrollRef.current.scrollTop;
					isSyncingScroll.current = false;
				});
			}, []);
			const handleFrozenWheel = (0, react.useCallback)((event) => {
				if (Math.abs(event.deltaY) <= Math.abs(event.deltaX) || !mainScrollRef.current) return;
				event.preventDefault();
				event.stopPropagation();
				mainScrollRef.current.scrollTop += event.deltaY;
			}, []);
			const handleWheel = (0, react.useCallback)((event) => {
				if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
				wheelAccumulator.current += event.deltaX;
				if (wheelAccumulator.current > metrics.dateColumnWidth) {
					onShiftWindow(1);
					wheelAccumulator.current -= metrics.dateColumnWidth;
				} else if (wheelAccumulator.current < -metrics.dateColumnWidth) {
					onShiftWindow(-1);
					wheelAccumulator.current += metrics.dateColumnWidth;
				}
			}, [metrics.dateColumnWidth, onShiftWindow]);
			const transformStyle = {
				transform: `translateX(${dragOffset}px)`,
				transition: isSnapping ? "transform 0.16s ease-out" : "none"
			};
			const alignedDataAreaStyle = {
				width: metrics.gridWidth - metrics.frozenColumnWidth,
				...transformStyle
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				ref: containerRef,
				className: "flex h-full min-w-0 overflow-hidden bg-[var(--market-canvas)] px-4 pb-4",
				onWheel: handleWheel,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 flex-1 overflow-hidden rounded-xl border border-[var(--market-grid-strong)] bg-[var(--market-cell)]",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "z-10 flex shrink-0 flex-col border-r border-[var(--market-grid-strong)] bg-[var(--market-frozen)]",
						style: { width: metrics.frozenColumnWidth },
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "flex h-[38px] items-center border-b border-[var(--market-grid-strong)] bg-[var(--market-header)] px-3 text-xs font-medium uppercase tracking-[0.16em] text-[var(--market-text-muted)]",
							children: "股票"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							ref: frozenScrollRef,
							className: "hide-scrollbar min-h-0 flex-1 overflow-hidden",
							onWheel: handleFrozenWheel,
							children: stocks.map((stock) => {
								const badge = getMarketBadge(stock.ts_code);
								return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => onStockClick(stock, baseDate),
									className: `flex w-full flex-col items-start justify-center border-b border-[var(--market-grid)] px-3 text-left transition ${stock.ts_code === selectedStockCode ? "bg-[var(--market-selected)]" : "bg-[var(--market-frozen)] hover:bg-[var(--market-cell-hover)]"}`,
									style: { height: ROW_HEIGHT },
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "flex w-full items-center gap-2",
										children: [badge ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: `rounded px-1.5 py-0.5 text-[10px] ${badge.color} ${badge.textColor}`,
											children: badge.label
										}) : null, /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "truncate text-sm font-semibold text-[var(--market-text-primary)]",
											children: stock.name
										})]
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "mt-1 flex w-full items-center gap-2 text-[11px] text-[var(--market-text-muted)]",
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: stock.ts_code }), stock.display_topic ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "truncate text-[var(--market-text-secondary)]",
											children: stock.display_topic
										}) : null]
									})]
								}, stock.ts_code);
							})
						})]
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 flex-1 flex-col overflow-hidden",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "cursor-grab select-none overflow-hidden border-b border-[var(--market-grid-strong)] bg-[var(--market-header)] active:cursor-grabbing",
							onMouseDown: handleHeaderMouseDown,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "flex w-full justify-end overflow-hidden",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: "flex",
									style: alignedDataAreaStyle,
									children: visibleDates.map((dateCol) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: `flex shrink-0 items-center justify-center border-r border-[var(--market-grid)] px-2 text-xs font-medium ${dateCol.date === baseDate ? "bg-accent-theme text-[var(--accent-contrast)]" : "text-[var(--market-text-secondary)]"}`,
										style: {
											width: metrics.dateColumnWidth,
											height: HEADER_HEIGHT
										},
										children: [dateCol.isRealtime ? "LIVE" : dateCol.date.slice(5), dateCol.isRealtime && isFetching ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: "ml-1 h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" }) : null]
									}, dateCol.date))
								})
							})
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							ref: mainScrollRef,
							className: "min-h-0 flex-1 overflow-y-auto overflow-x-hidden focus:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-[var(--accent)]",
							onScroll: handleMainScroll,
							tabIndex: 0,
							"aria-label": "行情股票列表",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "flex min-h-full w-full justify-end",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									style: alignedDataAreaStyle,
									className: stocks.length === 0 ? "flex min-h-full items-center justify-center" : void 0,
									children: stocks.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: "px-4 text-center text-sm text-[var(--market-text-muted)]",
										children: emptyMessage
									}) : stocks.map((stock) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										ref: (element) => {
											if (element) rowRefs.current.set(stock.ts_code, element);
											else rowRefs.current.delete(stock.ts_code);
										},
										className: "flex",
										children: visibleDates.map((dateCol) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DataCell, {
											snapshot: stock.snapshots.get(dateCol.date),
											displayConfig: cellDisplayConfig,
											showGlobalCurve: showMinuteCurve,
											width: metrics.dateColumnWidth,
											height: ROW_HEIGHT,
											onStockClick,
											stock,
											tradeDate: dateCol.date,
											isSelectedDate: dateCol.date === baseDate,
											isFutureDate: dateCol.date > baseDate
										}, `${stock.ts_code}-${dateCol.date}`))
									}, stock.ts_code))
								})
							})
						})]
					})]
				})
			});
		});
		//#endregion
		//#region src/components/snapshot-preview/lightweight/profile.ts
		function useLightweightSnapshotProfile() {
			const { previewProfiles, updatePreviewConfig, togglePreviewMinuteCurve, updatePreviewStockFilters, savePreviewProfile } = useAppStore();
			const profile = previewProfiles.lightweight;
			const stockFilters = profile.stockFilters ?? DEFAULT_SNAPSHOT_PREVIEW_STOCK_FILTERS;
			const [isSavingStockFilters, setIsSavingStockFilters] = (0, react.useState)(false);
			const updateConfig = (0, react.useCallback)((category, status, fields) => {
				updatePreviewConfig("lightweight", category, status, fields);
			}, [updatePreviewConfig]);
			const toggleMinuteCurve = (0, react.useCallback)(() => {
				const nextProfile = {
					...profile,
					showMinuteCurve: !profile.showMinuteCurve
				};
				togglePreviewMinuteCurve("lightweight");
				savePreviewProfile("lightweight", nextProfile).catch(() => {
					togglePreviewMinuteCurve("lightweight");
					window.alert("分钟曲线设置保存失败，请稍后重试。");
				});
			}, [
				profile,
				savePreviewProfile,
				togglePreviewMinuteCurve
			]);
			const save = (0, react.useCallback)(() => savePreviewProfile("lightweight"), [savePreviewProfile]);
			const updateStockFilter = (0, react.useCallback)((name, checked) => {
				if (isSavingStockFilters || stockFilters[name] === checked) return;
				const previousFilters = { ...stockFilters };
				const nextFilters = {
					...stockFilters,
					[name]: checked
				};
				const nextProfile = {
					...profile,
					stockFilters: nextFilters
				};
				updatePreviewStockFilters("lightweight", nextFilters);
				setIsSavingStockFilters(true);
				savePreviewProfile("lightweight", nextProfile).catch(() => {
					updatePreviewStockFilters("lightweight", previousFilters);
					window.alert("行情筛选设置保存失败，请稍后重试。");
				}).finally(() => {
					setIsSavingStockFilters(false);
				});
			}, [
				isSavingStockFilters,
				profile,
				savePreviewProfile,
				stockFilters,
				updatePreviewStockFilters
			]);
			return {
				cellDisplayConfig: profile.cellDisplayConfig,
				showMinuteCurve: profile.showMinuteCurve,
				updateConfig,
				toggleMinuteCurve,
				stockFilters,
				updateStockFilter,
				isSavingStockFilters,
				save
			};
		}
		//#endregion
		//#region src/components/snapshot-preview/lightweight/scopeIdentity.ts
		function createLightweightSnapshotCodeScopeKey(stockCodes) {
			const normalizedCodes = [...new Set(stockCodes.map((code) => normalizeStockCode(code)).filter(Boolean))];
			return JSON.stringify(normalizedCodes);
		}
		//#endregion
		//#region src/components/snapshot-preview/lightweight/LightweightSnapshotPreviewPanel.tsx
		function formatPct(value) {
			if (typeof value !== "number" || Number.isNaN(value)) return "--";
			return `${value > 0 ? "+" : ""}${value.toFixed(2)}%`;
		}
		function formatAmount(value) {
			if (typeof value !== "number" || Number.isNaN(value)) return "--";
			return `${(value / 1e5).toFixed(2)}亿`;
		}
		function LightweightSnapshotPreviewPanel({ stockCodes, ...props }) {
			const scopeKey = createLightweightSnapshotCodeScopeKey(stockCodes);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(LightweightSnapshotPreviewPanelScope, {
				stockCodes,
				...props
			}, scopeKey);
		}
		function LightweightSnapshotPreviewPanelScope({ stockCodes, focusCode, anchorDate, filters, onFilterCountsChange }) {
			const { cellDisplayConfig, showMinuteCurve, updateConfig, toggleMinuteCurve } = useLightweightSnapshotProfile();
			const settingsPanel = useSnapshotPreviewSettingsPanel("lightweight");
			const { data: limitDates = [] } = useLimitDates();
			const { selectedDate, startDate, endDate, setDateRange, fullDateList } = useSnapshotPreviewDateWindow(limitDates, {
				windowSize: 7,
				anchorDate
			});
			const previewStockClick = useSnapshotPreviewStockClick(selectedDate);
			const [selectedStockCode, setSelectedStockCode] = (0, react.useState)(focusCode || null);
			const { isFetching, error, sections, dates, refresh, scopeCounts } = useMarketSnapshotPreviewData({
				startDate,
				endDate,
				selectedDate,
				limitDates,
				stockCodes,
				cellDisplayConfig,
				showMinuteCurve,
				requiredFields: LIGHTWEIGHT_SNAPSHOT_FILTER_FIELDS,
				stockFilters: filters
			});
			const allStocks = (0, react.useMemo)(() => sections.flatMap((section) => section.stocks), [sections]);
			const visibleDateValues = (0, react.useMemo)(() => dates.map((date) => date.date), [dates]);
			const stocks = (0, react.useMemo)(() => filterLightweightSnapshotStocks(allStocks, visibleDateValues, filters), [
				allStocks,
				filters,
				visibleDateValues
			]);
			const filtersActive = hasActiveLightweightSnapshotFilters(filters);
			(0, react.useEffect)(() => {
				onFilterCountsChange(resolveLightweightSnapshotFilterCounts(stocks.length, allStocks.length, scopeCounts));
			}, [
				allStocks.length,
				onFilterCountsChange,
				scopeCounts,
				stocks.length
			]);
			(0, react.useEffect)(() => {
				setSelectedStockCode(focusCode || null);
			}, [focusCode]);
			(0, react.useEffect)(() => {
				if (stocks.length === 0) {
					setSelectedStockCode(null);
					return;
				}
				if (!selectedStockCode || !stocks.some((stock) => stock.ts_code === selectedStockCode)) {
					const nextFocusCode = focusCode && stocks.some((stock) => stock.ts_code === focusCode) ? focusCode : stocks[0]?.ts_code || null;
					setSelectedStockCode(nextFocusCode);
				}
			}, [
				focusCode,
				selectedStockCode,
				stocks
			]);
			const shiftWindow = (0, react.useCallback)((step) => {
				if (!fullDateList.length || !startDate) return false;
				const currentStartIndex = fullDateList.indexOf(startDate);
				if (currentStartIndex === -1) return false;
				const maxStartIndex = Math.max(0, fullDateList.length - 7);
				const nextStartIndex = Math.max(0, Math.min(maxStartIndex, currentStartIndex + step));
				const nextEndIndex = Math.min(fullDateList.length - 1, nextStartIndex + 6);
				const nextStartDate = fullDateList[nextStartIndex];
				const nextEndDate = fullDateList[nextEndIndex];
				if (nextStartDate !== startDate || nextEndDate !== endDate) {
					setDateRange(nextStartDate, nextEndDate);
					return true;
				}
				return false;
			}, [
				endDate,
				fullDateList,
				setDateRange,
				startDate
			]);
			const selectedStock = (0, react.useMemo)(() => stocks.find((stock) => stock.ts_code === selectedStockCode) || null, [selectedStockCode, stocks]);
			const selectedSnapshot = selectedStock?.snapshots.get(selectedDate) || null;
			const handleStockClick = (0, react.useCallback)((stock, anchorDate = selectedDate) => {
				setSelectedStockCode(stock.ts_code);
				previewStockClick.handleStockClick(stock, anchorDate);
			}, [previewStockClick.handleStockClick, selectedDate]);
			if (error) return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "flex h-full flex-col items-center justify-center gap-3 px-4 text-center",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
					className: "text-sm text-red-400",
					children: error
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: refresh,
					className: "rounded-lg bg-accent-theme px-3 py-2 text-sm font-medium text-[var(--accent-contrast)] hover:bg-[var(--accent-hover)]",
					children: "重试"
				})]
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "flex h-full min-h-0 flex-col bg-bg-primary",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "border-b border-border-theme bg-bg-secondary px-4 py-3",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: "truncate text-sm font-semibold text-text-primary",
									children: selectedStock ? `${selectedStock.name} (${selectedStock.ts_code})` : "行情预览"
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-text-secondary",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: ["日期 ", selectedDate || "--"] }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: ["涨跌幅 ", formatPct(selectedSnapshot?.pct_chg)] }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: ["成交额 ", formatAmount(selectedSnapshot?.amount)] })
									]
								})]
							}), selectedStock?.display_topic ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-[var(--border-strong)] bg-[var(--accent-soft)] px-2.5 py-1 text-xs text-text-gold",
								children: selectedStock.display_topic
							}) : null]
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "min-h-0 flex-1",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(LightweightSnapshotPreviewGrid, {
							stocks,
							visibleDates: dates,
							baseDate: selectedDate,
							selectedStockCode,
							cellDisplayConfig,
							showMinuteCurve,
							isFetching,
							emptyMessage: filtersActive ? "当前时间范围暂无符合筛选条件的股票" : "暂无快照数据",
							onShiftWindow: shiftWindow,
							onStockClick: handleStockClick
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "pointer-events-none absolute bottom-5 right-5 z-10 flex flex-row-reverse items-center gap-4",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: settingsPanel.open,
							className: "pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-theme text-[var(--accent-contrast)] shadow-lg transition-colors hover:bg-[var(--accent-hover)]",
							"aria-label": "打开参数设置",
							title: "参数设置",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
								className: "h-5 w-5",
								fill: "none",
								stroke: "currentColor",
								viewBox: "0 0 24 24",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									strokeWidth: 2,
									d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									strokeWidth: 2,
									d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
								})]
							})
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: toggleMinuteCurve,
							className: `pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-colors ${showMinuteCurve ? "bg-bg-tertiary text-text-gold hover:bg-[var(--selected-bg)]" : "bg-bg-secondary text-text-secondary hover:bg-[var(--selected-bg)] hover:text-text-primary"}`,
							"aria-label": showMinuteCurve ? "隐藏分钟曲线" : "显示分钟曲线",
							title: showMinuteCurve ? "隐藏分钟曲线" : "显示分钟曲线",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
								className: "h-5 w-5",
								fill: "none",
								stroke: "currentColor",
								viewBox: "0 0 24 24",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									strokeWidth: 2,
									d: "M3 17l4-4 4 4 7-9 3 3"
								})
							})
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SettingsPanel, {
						isOpen: settingsPanel.isOpen,
						onClose: settingsPanel.close,
						config: cellDisplayConfig,
						onConfigChange: updateConfig,
						isSaving: settingsPanel.isSaving,
						saveError: settingsPanel.saveError
					}),
					previewStockClick.popupSelection && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(LadderStockContextModal, {
						stock: previewStockClick.popupSelection.stock,
						anchorDate: previewStockClick.popupSelection.anchorDate,
						onClose: previewStockClick.closeStockPopup
					})
				]
			});
		}
		//#endregion
		//#region src/components/snapshot-preview/lightweight/requestBuilders.ts
		function buildTopicLightweightPreviewRequest(request) {
			return {
				...request,
				profile: "lightweight"
			};
		}
		function buildSupervisionLightweightPreviewRequest(request) {
			return {
				...request,
				profile: "lightweight"
			};
		}
		//#endregion
		//#region src/components/snapshot-preview/model.ts
		function normalizeSnapshotPreviewRequest(request) {
			const stockCodes = [...new Set(request.stockCodes.map((code) => normalizeStockCode(code)).filter(Boolean))];
			const requestedFocusCode = normalizeStockCode(request.focusCode);
			const focusCode = requestedFocusCode && stockCodes.includes(requestedFocusCode) ? requestedFocusCode : stockCodes[0] || null;
			return {
				...request,
				stockCodes,
				focusCode,
				anchorDate: /^\d{4}-\d{2}-\d{2}$/.test(String(request.anchorDate ?? "")) ? String(request.anchorDate) : null
			};
		}
		//#endregion
		//#region src/components/snapshot-preview/lightweight/useLightweightSnapshotPreview.ts
		function areSnapshotPreviewRequestsEqual(left, right) {
			if (left === right) return true;
			if (!left || !right) return false;
			if (left.profile !== right.profile || left.source !== right.source || left.title !== right.title || left.subtitle !== right.subtitle || left.focusCode !== right.focusCode || left.anchorDate !== right.anchorDate || left.stockCodes.length !== right.stockCodes.length) return false;
			return left.stockCodes.every((code, index) => code === right.stockCodes[index]);
		}
		function useLightweightSnapshotPreview() {
			const [request, setRequest] = (0, react.useState)(null);
			const [filterCounts, setFilterCounts] = (0, react.useState)(null);
			const { stockFilters: filters, updateStockFilter: setFilter, isSavingStockFilters: isFilterSaving } = useLightweightSnapshotProfile();
			const openPreview = (0, react.useCallback)((nextRequest) => {
				const normalizedRequest = normalizeSnapshotPreviewRequest(nextRequest);
				setFilterCounts(null);
				setRequest((current) => areSnapshotPreviewRequestsEqual(current, normalizedRequest) ? current : normalizedRequest);
			}, []);
			const closePreview = (0, react.useCallback)(() => {
				setRequest(null);
				setFilterCounts(null);
			}, []);
			const updateFilterCounts = (0, react.useCallback)((counts) => {
				setFilterCounts((current) => current?.visible === counts.visible && current.total === counts.total ? current : counts);
			}, []);
			return {
				request,
				isOpen: !!request,
				filters,
				filterCounts,
				isFilterSaving,
				openPreview,
				closePreview,
				setFilter,
				updateFilterCounts
			};
		}
		//#endregion
		//#region src/components/supervision/SupervisionSnapshotPreview.tsx
		function useSupervisionSnapshotPreview() {
			const preview = useLightweightSnapshotPreview();
			const handleGlobalStockClick = useStockClick();
			const openPreview = (stockCodes, title, subtitle, focusCode, anchorDate) => {
				if (!stockCodes.length) return;
				const request = buildSupervisionLightweightPreviewRequest({
					profile: "lightweight",
					source: "market_snapshot",
					title,
					subtitle,
					stockCodes,
					focusCode: focusCode || stockCodes[0],
					anchorDate
				});
				preview.openPreview(request);
			};
			const openRowPreview = (item, stockCodes, title, subtitle) => {
				const focusCode = item.ts_code.slice(0, 6);
				handleGlobalStockClick(focusCode, () => openPreview(stockCodes, title, subtitle, focusCode));
			};
			const openBoardSentimentPreview = (stocks, anchorDate, focusCode) => {
				const stockCodes = stocks.map((stock) => stock.ts_code);
				openPreview(stockCodes, `${anchorDate} 连板行情预览`, `最高板、次高板及连续跌停股票组 · ${stockCodes.length} 只股票`, focusCode, anchorDate);
			};
			return {
				preview,
				openPreview,
				openRowPreview,
				openBoardSentimentPreview
			};
		}
		function SupervisionSnapshotPreviewHost({ preview }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(LightweightSnapshotPreviewHost, {
				title: preview.request?.title || "监管快照预览",
				subtitle: preview.request?.subtitle,
				isOpen: preview.isOpen,
				filters: preview.filters,
				filterCounts: preview.filterCounts,
				isFilterSaving: preview.isFilterSaving,
				onFilterChange: preview.setFilter,
				onClose: preview.closePreview,
				children: preview.request ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(LightweightSnapshotPreviewPanel, {
					stockCodes: preview.request.stockCodes,
					focusCode: preview.request.focusCode,
					anchorDate: preview.request.anchorDate,
					filters: preview.filters,
					onFilterCountsChange: preview.updateFilterCounts
				}) : null
			});
		}
		//#endregion
		//#region src/components/supervision/currentSupervisionModel.ts
		const DEFAULT_CURRENT_DATASET_SELECTION = {
			warning: true,
			supervision: true
		};
		function toggleCurrentDataset(selection, kind) {
			if (selection[kind] && Object.values(selection).filter(Boolean).length === 1) return selection;
			return {
				...selection,
				[kind]: !selection[kind]
			};
		}
		function getStatusRank(entry) {
			if (entry.kind === "warning") return Math.max(...entry.group.items.map((item) => item.category === "股票交易异常波动暨停牌核查" ? 3 : isTriggeredWarning(item) ? 2 : 1), 0);
			const score = entry.item.attitude_score;
			if (entry.item.attitude_evidence_status === "invalid") return -1;
			return typeof score === "number" ? score : 1;
		}
		const WARNING_THRESHOLDS = {
			"连续10个交易日内涨幅偏离值累计达到 100%": 100,
			"连续30个交易日内涨幅偏离值累计达到 200%": 200
		};
		const DISTANCE_CATEGORIES = /* @__PURE__ */ new Set([
			"主板连续10个交易日内4次出现同向异常波动",
			"科创板连续10个交易日内3次出现同向异常波动",
			"创业板连续10个交易日内3次出现同向异常波动",
			"复牌后10个交易日内再度出现同向异动"
		]);
		function isTriggeredWarning(item) {
			const threshold = item.category ? WARNING_THRESHOLDS[item.category] : void 0;
			if (threshold !== void 0) return typeof item.deviation === "number" && item.deviation >= threshold;
			return Boolean(item.category && DISTANCE_CATEGORIES.has(item.category) && typeof item.pct_change === "number" && typeof item.distance_pct === "number" && item.pct_change >= item.distance_pct);
		}
		function getBusinessDate(entry) {
			return entry.kind === "warning" ? entry.group.tradeDate : entry.item.trigger_trade_date || entry.item.start_date || "";
		}
		function getStableKey(entry) {
			return entry.kind === "warning" ? entry.group.key : `${entry.item.ts_code}::${entry.item.start_date}::${entry.item.end_date}`;
		}
		function buildCurrentSupervisionEntries(warningGroups, supervisionItems, selection) {
			const entries = [];
			if (selection.warning) entries.push(...warningGroups.map((group) => ({
				kind: "warning",
				group
			})));
			if (selection.supervision) entries.push(...supervisionItems.map((item) => ({
				kind: "supervision",
				item
			})));
			return entries.sort((left, right) => {
				if (left.kind !== right.kind) return left.kind === "warning" ? -1 : 1;
				const dateDifference = getBusinessDate(right).localeCompare(getBusinessDate(left));
				if (dateDifference) return dateDifference;
				const statusDifference = getStatusRank(right) - getStatusRank(left);
				if (statusDifference) return statusDifference;
				return getStableKey(left).localeCompare(getStableKey(right));
			});
		}
		//#endregion
		//#region src/components/SupervisionList.tsx
		const HISTORY_PAGE_SIZE = 10;
		function PanelPage({ children }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "flex h-full min-h-0 bg-[var(--market-canvas)] p-4 text-[var(--market-text-primary)]",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "min-h-0 min-w-0 flex-1",
					children
				})
			});
		}
		function ActionButton({ label, onClick, disabled = false }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
				type: "button",
				onClick,
				disabled,
				className: "rounded-md border border-[var(--status-info-badge)] bg-[var(--status-info-badge)] px-3 py-1.5 text-sm font-medium text-[var(--badge-fg)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40",
				children: label
			});
		}
		function HistoryToggle({ value, onChange }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "flex gap-2",
				children: [{
					key: "supervision",
					label: "监管历史"
				}, {
					key: "warning",
					label: "预警历史"
				}].map((item) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onChange(item.key),
					className: `rounded-full border px-3 py-1.5 text-sm transition ${value === item.key ? "border-[var(--status-info-badge)] bg-[var(--status-info-badge)] text-[var(--badge-fg)]" : "border-[var(--market-grid-strong)] bg-[var(--market-cell)] text-[var(--market-text-secondary)] hover:bg-[var(--market-cell-hover)] hover:text-[var(--market-text-primary)]"}`,
					children: item.label
				}, item.key))
			});
		}
		function DatasetCheckbox({ kind, label, checked, onToggle }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
				className: "inline-flex cursor-pointer items-center gap-2 rounded-md border border-[var(--market-grid-strong)] bg-[var(--market-cell)] px-3 py-1.5 text-sm text-[var(--market-text-primary)]",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
					type: "checkbox",
					checked,
					onChange: () => onToggle(kind),
					className: "h-4 w-4 accent-[var(--status-info-badge)]"
				}), label]
			});
		}
		function BoardSentimentPanel() {
			const { preview, openBoardSentimentPreview } = useSupervisionSnapshotPreview();
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(PanelPage, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BoardSentimentTrend, { onOpenPreview: openBoardSentimentPreview }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SupervisionSnapshotPreviewHost, { preview })] });
		}
		function CurrentSupervisionListPanel() {
			const navigationMeta = useAppStore().pageNavigationMeta["supervision-current"];
			const urlParams = typeof window === "undefined" ? null : new URLSearchParams(window.location.search);
			const targetDate = typeof navigationMeta?.targetDate === "string" ? navigationMeta.targetDate : urlParams?.get("target_date") || void 0;
			const targetCode = typeof navigationMeta?.tsCode === "string" ? navigationMeta.tsCode : urlParams?.get("ts_code") || void 0;
			const eventKind = typeof navigationMeta?.eventKind === "string" ? navigationMeta.eventKind : urlParams?.get("event_kind") || void 0;
			(0, react.useEffect)(() => {
				if (typeof window === "undefined" || !targetDate) return;
				const url = new URL(window.location.href);
				url.searchParams.set("target_date", targetDate);
				if (targetCode) url.searchParams.set("ts_code", targetCode);
				if (eventKind) url.searchParams.set("event_kind", eventKind);
				window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
			}, [
				eventKind,
				targetCode,
				targetDate
			]);
			const [selection, setSelection] = (0, react.useState)(DEFAULT_CURRENT_DATASET_SELECTION);
			const { preview, openPreview, openRowPreview } = useSupervisionSnapshotPreview();
			const activeQuery = useActiveSupervision(targetDate);
			const warningQuery = useSuperviseLines(targetDate);
			const supervisionItems = activeQuery.data ?? [];
			const warningItems = warningQuery.data ?? [];
			const warningGroups = (0, react.useMemo)(() => groupWarningLines(warningItems), [warningItems]);
			const entries = (0, react.useMemo)(() => buildCurrentSupervisionEntries(warningGroups, supervisionItems, selection), [
				selection,
				supervisionItems,
				warningGroups
			]);
			const selectedItems = (0, react.useMemo)(() => [...selection.warning ? warningItems : [], ...selection.supervision ? supervisionItems : []], [
				selection,
				supervisionItems,
				warningItems
			]);
			const stockCodes = (0, react.useMemo)(() => getPreviewStockCodes(selectedItems), [selectedItems]);
			const selectedQueries = [...selection.warning ? [{
				label: "预警",
				query: warningQuery
			}] : [], ...selection.supervision ? [{
				label: "监管",
				query: activeQuery
			}] : []];
			const failedSources = selectedQueries.filter(({ query }) => query.isError);
			const allSelectedFailed = failedSources.length === selectedQueries.length;
			const panelError = allSelectedFailed && entries.length === 0 ? failedSources.map(({ label, query }) => `${label}：${query.error?.message || "加载失败"}`).join("；") : null;
			const retrySelected = () => {
				if (selection.warning) warningQuery.refetch();
				if (selection.supervision) activeQuery.refetch();
			};
			const previewTitle = "监管与预警快照预览";
			const previewSubtitle = `当前监管与预警股票组 · ${stockCodes.length} 只股票`;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(PanelPage, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SupervisionPanelShell, {
				title: "监管与预警",
				description: "合并展示当前预警与监管记录，可按数据类型筛选。",
				controls: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
					targetDate ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
						className: "rounded border border-[var(--market-grid-strong)] px-2 py-1 text-xs text-[var(--market-text-secondary)]",
						children: [
							"时间线定位：",
							targetDate,
							targetCode ? ` · ${targetCode}` : "",
							eventKind ? ` · ${eventKind}` : ""
						]
					}) : null,
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(DatasetCheckbox, {
						kind: "warning",
						label: "预警",
						checked: selection.warning,
						onToggle: (kind) => setSelection((current) => toggleCurrentDataset(current, kind))
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(DatasetCheckbox, {
						kind: "supervision",
						label: "监管",
						checked: selection.supervision,
						onToggle: (kind) => setSelection((current) => toggleCurrentDataset(current, kind))
					}),
					failedSources.length > 0 && !allSelectedFailed ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
						className: "rounded border border-[var(--notice-warning-border)] bg-[var(--notice-warning-bg)] px-2 py-1 text-xs text-[var(--notice-warning-fg)]",
						children: [failedSources.map(({ label }) => label).join("、"), "加载失败，已展示可用数据"]
					}) : null
				] }),
				actions: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ActionButton, {
					label: "预览全部",
					onClick: () => openPreview(stockCodes, previewTitle, previewSubtitle),
					disabled: !stockCodes.length
				}),
				isLoading: entries.length === 0 && selectedQueries.some(({ query }) => query.isLoading),
				error: panelError,
				hasData: entries.length > 0,
				emptyMessage: "暂无监管与预警记录",
				onRetry: retrySelected,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SupervisionPreviewList, {
					items: entries,
					getKey: (entry) => entry.kind === "warning" ? `warning-${entry.group.key}` : `supervision-${entry.item.ts_code}-${entry.item.start_date}-${entry.item.end_date}`,
					renderItem: (entry) => entry.kind === "warning" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(WarningGroupRow, {
						group: entry.group,
						showTradeDate: true,
						onOpen: (item) => openRowPreview(item, stockCodes, previewTitle, previewSubtitle)
					}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SupervisionRow, {
						item: entry.item,
						onOpen: (item) => openRowPreview(item, stockCodes, previewTitle, previewSubtitle)
					})
				})
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SupervisionSnapshotPreviewHost, { preview })] });
		}
		function CurrentSupervisionPanel() {
			const [activeList, setActiveList] = (0, react.useState)("current");
			const navigationMeta = useAppStore().pageNavigationMeta["supervision-current"];
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "h-full min-h-0 overflow-y-auto bg-[var(--market-canvas)] text-[var(--market-text-primary)]",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "flex min-h-[680px] flex-col p-4 pb-0",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SupervisionIndexPanel, {
							initialDate: typeof navigationMeta?.targetDate === "string" ? navigationMeta.targetDate : void 0,
							embedded: true
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						role: "tablist",
						"aria-label": "监管数据视图",
						className: "sticky top-0 z-20 mt-4 flex items-center gap-1 border-y border-[var(--market-grid-strong)] bg-[var(--market-header)] px-4 pt-3",
						children: [["current", "监管列表"], ["history", "监管历史"]].map(([key, label]) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							role: "tab",
							"aria-selected": activeList === key,
							onClick: () => setActiveList(key),
							className: `rounded-t-lg border border-b-0 px-4 py-2 text-sm font-medium transition ${activeList === key ? "border-[var(--market-grid-strong)] bg-[var(--market-cell)] text-[var(--market-text-primary)]" : "border-transparent text-[var(--market-text-secondary)] hover:bg-[var(--market-cell-hover)] hover:text-[var(--market-text-primary)]"}`,
							children: label
						}, key))
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "h-[620px] min-h-[520px]",
						children: activeList === "current" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(CurrentSupervisionListPanel, {}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SupervisionHistoryListPanel, {})
					})
				]
			});
		}
		function SupervisionHistoryListPanel() {
			const [historyKind, setHistoryKind] = (0, react.useState)("supervision");
			const { preview, openPreview, openRowPreview } = useSupervisionSnapshotPreview();
			const supervisionQuery = useHistoricalSupervisionHistory(void 0, HISTORY_PAGE_SIZE);
			const warningQuery = useSuperviseLineHistory(void 0, HISTORY_PAGE_SIZE);
			const supervisionItems = (0, react.useMemo)(() => supervisionQuery.data?.pages.flatMap((page) => page.items) ?? [], [supervisionQuery.data]);
			const warningItems = (0, react.useMemo)(() => warningQuery.data?.pages.flatMap((page) => page.items) ?? [], [warningQuery.data]);
			const warningGroups = (0, react.useMemo)(() => groupWarningLines(warningItems), [warningItems]);
			const supervisionCodes = (0, react.useMemo)(() => getPreviewStockCodes(supervisionItems), [supervisionItems]);
			const warningCodes = (0, react.useMemo)(() => getPreviewStockCodes(warningItems), [warningItems]);
			const activeQuery = historyKind === "supervision" ? supervisionQuery : warningQuery;
			const activeItems = historyKind === "supervision" ? supervisionItems : warningItems;
			const stockCodes = historyKind === "supervision" ? supervisionCodes : warningCodes;
			const historyTitle = historyKind === "supervision" ? "监管历史" : "预警历史";
			const previewTitle = `${historyTitle}快照预览`;
			const previewSubtitle = `${historyTitle}股票组 · ${stockCodes.length} 只股票`;
			const handleScroll = (event) => {
				const element = event.currentTarget;
				if (element.scrollTop + element.clientHeight >= element.scrollHeight - 80 && activeQuery.hasNextPage && !activeQuery.isFetchingNextPage) activeQuery.fetchNextPage();
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(PanelPage, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SupervisionPanelShell, {
				title: "监管与预警历史",
				description: "分页浏览历史记录，并对当前历史股票范围打开轻量行情快照预览。",
				controls: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(HistoryToggle, {
					value: historyKind,
					onChange: setHistoryKind
				}),
				actions: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
						className: "rounded bg-[var(--status-neutral-badge)] px-2 py-1 text-xs text-[var(--badge-fg)]",
						children: [
							"已加载 ",
							activeItems.length,
							activeQuery.data?.pages[0] ? ` / ${activeQuery.data.pages[0].total}` : ""
						]
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ActionButton, {
						label: "预览全部",
						onClick: () => openPreview(stockCodes, previewTitle, previewSubtitle),
						disabled: !stockCodes.length
					})]
				}),
				isLoading: activeQuery.isLoading,
				error: activeQuery.isError ? activeQuery.error.message : null,
				hasData: activeItems.length > 0,
				emptyMessage: `暂无${historyTitle}记录`,
				onRetry: () => activeQuery.refetch(),
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "flex h-full flex-col",
					children: [historyKind === "supervision" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SupervisionPreviewList, {
						items: supervisionItems,
						getKey: (item, index) => `${item.ts_code}-${item.end_date}-${item.start_date}-${index}`,
						onScroll: handleScroll,
						className: "flex-1",
						renderItem: (item) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SupervisionRow, {
							item,
							onOpen: (row) => openRowPreview(row, stockCodes, previewTitle, previewSubtitle)
						})
					}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SupervisionPreviewList, {
						items: warningGroups,
						getKey: (group) => group.key,
						onScroll: handleScroll,
						className: "flex-1",
						renderItem: (group) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(WarningGroupRow, {
							group,
							showTradeDate: true,
							onOpen: (item) => openRowPreview(item, stockCodes, previewTitle, previewSubtitle)
						})
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "border-t border-[var(--market-grid)] bg-[var(--market-frozen)] px-4 py-2 text-center text-xs text-[var(--market-text-muted)]",
						children: activeQuery.isFetchingNextPage ? "正在加载更多历史记录..." : activeQuery.hasNextPage ? "滚动加载更多" : "历史记录已全部加载"
					})]
				})
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SupervisionSnapshotPreviewHost, { preview })] });
		}
		//#endregion
		//#region src/api/modules/timeline.ts
		async function getTimelines(query) {
			const data = await onclawRuntime.api.timeline.list(query);
			return {
				total: data.total ?? 0,
				items: (data.items ?? []).map((item) => ({
					...item,
					topic_stock_highlights: item.topic_stock_highlights ?? [],
					performance_summary: item.performance_summary ?? null,
					supervision_event: item.supervision_event ?? null,
					supervision_summary: item.supervision_summary ?? null
				})),
				stock_window_dates: data.stock_window_dates ?? []
			};
		}
		//#endregion
		//#region src/runtime/navigation-runtime.ts
		let adapter;
		function configureNavigation(adapterOverride) {
			const previous = adapter;
			adapter = adapterOverride;
			return () => {
				adapter = previous;
			};
		}
		const navigationRuntime = { open(page, meta, sessionId) {
			if (!adapter) throw new Error("Onclaw navigation runtime is not configured");
			adapter.open({
				page,
				meta,
				sessionId
			});
		} };
		//#endregion
		//#region src/components/timelineModel.ts
		const WEEKDAYS = [
			"周日",
			"周一",
			"周二",
			"周三",
			"周四",
			"周五",
			"周六"
		];
		function localDateFromIso(value) {
			const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
			if (!match) return null;
			const [, year, month, day] = match;
			return new Date(Number(year), Number(month) - 1, Number(day));
		}
		function findNearestTimelineDate(dates, targetDate) {
			const target = localDateFromIso(targetDate)?.getTime();
			if (target === void 0) return null;
			let nearest = null;
			let nearestDistance = Number.POSITIVE_INFINITY;
			for (const date of dates) {
				const parsed = localDateFromIso(date);
				if (!parsed) continue;
				const distance = Math.abs(parsed.getTime() - target);
				if (distance < nearestDistance || distance === nearestDistance && (nearest === null || date > nearest)) {
					nearest = date;
					nearestDistance = distance;
				}
			}
			return nearest;
		}
		function formatTimelineDate(value) {
			const parsed = localDateFromIso(value);
			if (!parsed) return {
				year: "",
				monthDay: value,
				weekday: ""
			};
			return {
				year: `${parsed.getFullYear()}年`,
				monthDay: `${parsed.getMonth() + 1}月${parsed.getDate()}日`,
				weekday: WEEKDAYS[parsed.getDay()]
			};
		}
		function formatStockWindow(dates) {
			if (dates.length === 0) return "最近7个交易日";
			const ordered = [...dates].sort();
			const compact = (value) => value.slice(5).replace("-", ".");
			if (ordered.length === 1) return `${compact(ordered[0])} 交易日`;
			return `${compact(ordered[0])}—${compact(ordered[ordered.length - 1])}`;
		}
		const PREMIUM_QUALITY_LABELS = {
			complete: null,
			pending: "待更新",
			missing: "行情缺失",
			suspended: "停牌",
			invalid: "行情无效"
		};
		function premiumHorizonLabel(horizon) {
			if (horizon === 0) return "T";
			return `T${horizon > 0 ? "+" : ""}${horizon}`;
		}
		function premiumValueText(value) {
			if (value === null || !Number.isFinite(value)) return "--";
			return `${value > 0 ? "+" : ""}${value.toFixed(2)}%`;
		}
		function getTimelinePremiumSeries(registration) {
			if (!registration) return [];
			const isSupervision = registration.window_policy === "supervision-entry-v2" || registration.window_policy === "supervision-exit-v2";
			return formatTimelinePremiumObservations(registration.observations ?? [], isSupervision ? 2 : 3);
		}
		function formatTimelinePremiumObservations(observations, terminalOffset = 2) {
			return [...observations].filter((observation) => Number.isInteger(observation.offset ?? observation.horizon) && (observation.offset ?? observation.horizon) >= -2 && (observation.offset ?? observation.horizon) <= 3).sort((left, right) => (left.offset ?? left.horizon) - (right.offset ?? right.horizon)).map((observation) => {
				const offset = observation.offset ?? observation.horizon;
				const value = observation.value_pct ?? observation.premium_pct;
				return {
					horizon: offset,
					horizonLabel: observation.label || premiumHorizonLabel(offset),
					tradeDate: observation.trade_date,
					valueText: premiumValueText(value),
					tone: value === null || !Number.isFinite(value) || value === 0 ? "neutral" : value < 0 ? "negative" : "positive",
					qualityLabel: PREMIUM_QUALITY_LABELS[observation.data_quality_state],
					frozen: offset === terminalOffset && observation.data_quality_state !== "pending",
					limitDescription: observation.limit_description || ""
				};
			});
		}
		function getLatestTimelinePremium(registration) {
			const mature = getTimelinePremiumSeries(registration).filter((item) => item.qualityLabel !== "待更新");
			return mature.length > 0 ? mature[mature.length - 1] : null;
		}
		function formatHundredMillion(value, digits) {
			if (value === null || value === void 0 || !Number.isFinite(Number(value))) return "--";
			return `${Number((Number(value) / 1e4).toFixed(digits))}亿`;
		}
		const LIMIT_EVENT_LABELS = {
			multi_board: null,
			first_board: "首板",
			limit_up: "涨停",
			failed_limit: "炸板",
			limit_down: "跌停"
		};
		function getTimelineHighlightDisplay(highlight) {
			const hasLimitEvent = highlight.limit_event_type !== null;
			const hasBondSize = highlight.has_convertible && highlight.cb_remain_size !== null && highlight.cb_remain_size > 0;
			return {
				marketValue: hasLimitEvent ? formatHundredMillion(highlight.free_mv, 1) : null,
				eventLabel: highlight.limit_event_type === "multi_board" && highlight.max_board_height >= 2 ? `${highlight.max_board_height}板` : highlight.limit_event_type ? LIMIT_EVENT_LABELS[highlight.limit_event_type] : null,
				eventTone: highlight.limit_event_type === "limit_down" ? "negative" : hasLimitEvent ? "positive" : null,
				bondLabel: hasBondSize ? `债(${formatHundredMillion(highlight.cb_remain_size, 2)})` : null
			};
		}
		//#endregion
		//#region src/components/timelineNavigation.ts
		function getTimelineNavigation(item) {
			if (item.source_type === "performance" && item.performance_summary) return {
				page: "performance",
				meta: {
					report: item.performance_summary.report,
					eventDate: item.performance_summary.event_date,
					forwardTradingDays: 0,
					absoluteChangeThreshold: 8
				}
			};
			if (item.source_type === "supervision" && item.supervision_event) return {
				page: "supervision-current",
				meta: {
					targetDate: item.supervision_event.target_date,
					tsCode: item.supervision_event.ts_code,
					eventKind: item.supervision_event.event_kind
				}
			};
			return null;
		}
		function getTimelineSupervisionRowNavigation(row) {
			return {
				page: "supervision-current",
				meta: {
					targetDate: row.target_date,
					tsCode: row.ts_code,
					eventKind: row.event_kind
				}
			};
		}
		//#endregion
		//#region src/components/timelineSelection.ts
		const TIMELINE_SOURCE_TYPES = [
			"topic",
			"article",
			"performance",
			"supervision"
		];
		function toggleTimelineSource(values, source) {
			if (values.includes(source)) return values.length === 1 ? [...values] : values.filter((item) => item !== source);
			return [...values, source];
		}
		//#endregion
		//#region src/components/Timeline.tsx
		function isoDate(date) {
			return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
		}
		function initialRange() {
			const now = /* @__PURE__ */ new Date();
			const start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
			const end = new Date(now.getFullYear(), now.getMonth() + 4, 0);
			return {
				start: isoDate(start),
				end: isoDate(end)
			};
		}
		const SOURCE_LABELS = {
			topic: "题材",
			article: "资讯",
			performance: "业绩",
			supervision: "监管"
		};
		const SOURCE_BADGE_CLASSES = {
			topic: "bg-[var(--tag-relation-1-bg)]",
			article: "bg-[var(--tag-relation-2-bg)]",
			performance: "bg-[var(--market-rise-badge)]",
			supervision: "bg-[var(--tag-regulatory-bg)]"
		};
		const THEME_BADGE_CLASSES = [
			"bg-[var(--tag-relation-1-bg)]",
			"bg-[var(--tag-relation-2-bg)]",
			"bg-[var(--tag-relation-3-bg)]",
			"bg-[var(--tag-relation-4-bg)]"
		];
		function premiumToneClass(tone) {
			if (tone === "positive") return "text-[var(--market-rise)]";
			if (tone === "negative") return "text-[var(--market-fall)]";
			return "text-[var(--market-text-secondary)]";
		}
		function SupervisionPremiumSeries({ points }) {
			const observations = formatTimelinePremiumObservations(points, 2);
			if (observations.length === 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className: "shrink-0 text-[var(--market-text-muted)]",
				children: "无行情指标"
			});
			return observations.map((observation) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
				className: "inline-flex shrink-0 items-center gap-1 rounded border border-[var(--market-grid)] bg-[var(--market-frozen)] px-2 py-1",
				title: observation.tradeDate ?? void 0,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "text-[var(--market-text-muted)]",
						children: observation.horizonLabel
					}),
					observation.qualityLabel !== "待更新" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: `font-medium ${premiumToneClass(observation.tone)}`,
						children: observation.valueText
					}) : null,
					observation.qualityLabel ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "text-[var(--notice-warning-fg)]",
						children: observation.qualityLabel
					}) : null,
					observation.limitDescription ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
						className: "text-[var(--market-text-secondary)]",
						children: [
							"[",
							observation.limitDescription,
							"]"
						]
					}) : null
				]
			}, observation.horizon));
		}
		function Timeline() {
			const range = (0, react.useMemo)(initialRange, []);
			const [startDate, setStartDate] = (0, react.useState)(range.start);
			const [endDate, setEndDate] = (0, react.useState)(range.end);
			const [sourceTypes, setSourceTypes] = (0, react.useState)([...TIMELINE_SOURCE_TYPES]);
			const scrollContainerRef = (0, react.useRef)(null);
			const dateSectionRefs = (0, react.useRef)(/* @__PURE__ */ new Map());
			const positionedScopeRef = (0, react.useRef)("");
			const { setActiveNav, setActiveTopicId } = useAppStore();
			const timelineParams = {
				startDate,
				endDate,
				sourceTypes,
				limit: 1e3
			};
			const query = useQuery({
				...sdkQueryPolicy(onclawRuntime.queries.timeline.list(timelineParams)),
				queryFn: () => getTimelines(timelineParams),
				enabled: Boolean(startDate && endDate && startDate <= endDate),
				refetchOnMount: true,
				refetchOnWindowFocus: true
			});
			const groups = (0, react.useMemo)(() => {
				const grouped = /* @__PURE__ */ new Map();
				for (const item of query.data?.items ?? []) {
					const items = grouped.get(item.date) ?? [];
					items.push(item);
					grouped.set(item.date, items);
				}
				return [...grouped.entries()];
			}, [query.data?.items]);
			(0, react.useLayoutEffect)(() => {
				const scope = `${startDate}|${endDate}|${[...sourceTypes].sort().join(",")}`;
				if (positionedScopeRef.current === scope || !query.isSuccess || groups.length === 0) return;
				const targetDate = findNearestTimelineDate(groups.map(([date]) => date), getShanghaiDateString());
				if (!targetDate) return;
				const frame = window.requestAnimationFrame(() => {
					const container = scrollContainerRef.current;
					const target = dateSectionRefs.current.get(targetDate);
					if (!container || !target) return;
					const containerRect = container.getBoundingClientRect();
					const targetRect = target.getBoundingClientRect();
					const targetTop = Math.max(0, container.scrollTop + targetRect.top - containerRect.top - 20);
					container.scrollTo({
						top: targetTop,
						behavior: "auto"
					});
					positionedScopeRef.current = scope;
				});
				return () => window.cancelAnimationFrame(frame);
			}, [
				endDate,
				groups,
				query.isSuccess,
				sourceTypes,
				startDate
			]);
			const openTopic = (topicId) => {
				if (!topicId) return;
				setActiveTopicId(topicId);
				setActiveNav("ticai");
			};
			const openItem = (item) => {
				if (item.source_type === "topic") return openTopic(item.topic_id);
				const request = getTimelineNavigation(item);
				if (request) navigationRuntime.open(request.page, request.meta);
			};
			const openSupervisionRow = (row) => {
				const request = getTimelineSupervisionRowNavigation(row);
				navigationRuntime.open(request.page, request.meta);
			};
			const toggleSource = (source) => {
				setSourceTypes((current) => toggleTimelineSource(current, source));
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "flex h-full flex-col bg-[var(--market-canvas)] text-[var(--market-text-primary)]",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "flex min-h-14 flex-shrink-0 flex-wrap items-center gap-3 border-b border-[var(--market-grid-strong)] bg-[var(--market-frozen)] px-4 py-2",
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h1", {
							className: "mr-2 text-base font-semibold text-[var(--market-text-primary)]",
							children: "时间线"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("label", {
							className: "text-xs text-[var(--market-text-muted)]",
							htmlFor: "timeline-start",
							children: "开始日期"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
							id: "timeline-start",
							type: "date",
							value: startDate,
							onChange: (event) => setStartDate(event.target.value),
							className: "rounded border border-[var(--market-grid-strong)] bg-[var(--market-cell)] px-2 py-1 text-sm text-[var(--market-text-primary)] outline-none focus:border-[var(--market-grid-selected)]"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("label", {
							className: "text-xs text-[var(--market-text-muted)]",
							htmlFor: "timeline-end",
							children: "结束日期"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
							id: "timeline-end",
							type: "date",
							value: endDate,
							onChange: (event) => setEndDate(event.target.value),
							className: "rounded border border-[var(--market-grid-strong)] bg-[var(--market-cell)] px-2 py-1 text-sm text-[var(--market-text-primary)] outline-none focus:border-[var(--market-grid-selected)]"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-2",
							"aria-label": "时间线来源",
							children: TIMELINE_SOURCE_TYPES.map((source) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
								className: "inline-flex items-center gap-1 text-xs text-[var(--market-text-secondary)]",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: sourceTypes.includes(source),
									onChange: () => toggleSource(source),
									className: "h-3.5 w-3.5 accent-[var(--status-info-badge)]"
								}), SOURCE_LABELS[source]]
							}, source))
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: "ml-auto rounded bg-[var(--status-neutral-badge)] px-2 py-1 text-xs font-medium text-[var(--badge-fg)]",
							children: [
								"共 ",
								query.data?.total ?? 0,
								" 条"
							]
						})
					]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					ref: scrollContainerRef,
					className: "flex-1 overflow-y-auto p-5",
					children: [
						startDate > endDate ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TimelineNotice, {
							tone: "error",
							children: "开始日期不能晚于结束日期"
						}) : null,
						query.isLoading ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TimelineNotice, {
							tone: "info",
							children: "时间线加载中..."
						}) : null,
						query.isError ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TimelineNotice, {
							tone: "error",
							children: "时间线加载失败"
						}) : null,
						!query.isLoading && groups.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TimelineNotice, {
							tone: "info",
							children: "当前日期范围内暂无记录"
						}) : null,
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "space-y-5",
							children: groups.map(([date, items]) => {
								const dateLabel = formatTimelineDate(date);
								return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
									ref: (node) => {
										if (node) dateSectionRefs.current.set(date, node);
										else dateSectionRefs.current.delete(date);
									},
									className: "scroll-mt-5 overflow-hidden rounded-xl border border-[var(--market-grid-strong)] bg-[var(--market-cell)]",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "sticky top-0 z-20 flex items-center gap-3 border-b border-[var(--market-grid-strong)] bg-[var(--market-header)] px-4 py-2.5",
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-[var(--status-info-badge)] shadow-[0_0_0_4px_var(--market-selected)]" }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: "text-base font-semibold text-[var(--market-text-primary)]",
												children: dateLabel.monthDay
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: "text-xs text-[var(--market-text-secondary)]",
												children: dateLabel.weekday
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: "text-xs text-[var(--market-text-muted)]",
												children: dateLabel.year
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
												className: "ml-auto rounded bg-[var(--status-neutral-badge)] px-2 py-0.5 text-[11px] font-medium text-[var(--badge-fg)]",
												children: [items.length, " 条"]
											})
										]
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: "relative space-y-2 p-3 pl-8 before:absolute before:bottom-5 before:left-[17px] before:top-0 before:w-px before:bg-[var(--market-grid-strong)]",
										children: items.map((item) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("article", {
											role: item.source_type !== "article" && item.source_type !== "supervision" ? "button" : void 0,
											tabIndex: item.source_type !== "article" && item.source_type !== "supervision" ? 0 : void 0,
											onClick: item.source_type !== "article" && item.source_type !== "supervision" ? () => openItem(item) : void 0,
											onKeyDown: item.source_type !== "article" && item.source_type !== "supervision" ? (event) => {
												if (event.key === "Enter" || event.key === " ") openItem(item);
											} : void 0,
											className: "relative block w-full rounded-lg border border-[var(--market-grid)] bg-[var(--market-cell)] p-3 text-left transition-colors before:absolute before:-left-[19px] before:top-5 before:h-2 before:w-2 before:rounded-full before:border-2 before:border-[var(--market-cell)] before:bg-[var(--status-info-badge)] hover:border-[var(--market-grid-strong)] hover:bg-[var(--market-cell-hover)]",
											children: [
												/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
														className: `rounded px-2 py-0.5 text-[11px] font-semibold text-[var(--badge-fg)] ${SOURCE_BADGE_CLASSES[item.source_type]}`,
														children: SOURCE_LABELS[item.source_type]
													}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
														className: "truncate text-sm font-medium text-[var(--market-text-primary)]",
														children: item.title || "未命名事件"
													})]
												}),
												item.content ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
													className: "mt-2 line-clamp-3 text-sm leading-6 text-[var(--market-text-secondary)]",
													children: item.content
												}) : null,
												item.theme_list.length > 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
													className: "mt-2 flex flex-wrap gap-1.5",
													"aria-label": "关联题材",
													children: Array.from(new Set(item.theme_list)).map((theme, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
														className: `rounded px-2 py-0.5 text-[11px] font-medium text-[var(--badge-fg)] ${THEME_BADGE_CLASSES[index % THEME_BADGE_CLASSES.length]}`,
														children: theme
													}, theme))
												}) : null,
												item.source_type === "topic" && item.topic_stock_highlights.length > 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
													className: "mt-3 border-t border-[var(--market-grid)] pt-2.5",
													children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
														className: "mb-2 flex items-center gap-2 text-[11px] text-[var(--market-text-muted)]",
														children: [
															/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "近期行情" }),
															/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: formatStockWindow(query.data?.stock_window_dates ?? []) }),
															/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "· 连板优先" })
														]
													}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
														className: "flex flex-wrap gap-1.5",
														children: item.topic_stock_highlights.map((highlight) => {
															const display = getTimelineHighlightDisplay(highlight);
															return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
																className: "inline-flex items-baseline gap-1 rounded-md border border-[var(--market-grid)] bg-[var(--market-frozen)] px-2 py-1 text-xs",
																children: [
																	/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
																		className: "inline-flex items-baseline",
																		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
																			className: "font-medium text-[var(--market-text-primary)]",
																			children: highlight.name || highlight.ts_code
																		}), display.marketValue ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
																			className: "text-[var(--market-text-muted)]",
																			children: [
																				"(",
																				display.marketValue,
																				")"
																			]
																		}) : null]
																	}),
																	display.eventLabel ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
																		className: `rounded px-1.5 py-0.5 font-medium text-[var(--badge-fg)] ${display.eventTone === "negative" ? "bg-[var(--market-fall-badge)]" : "bg-[var(--market-rise-badge)]"}`,
																		children: display.eventLabel
																	}) : null,
																	display.bondLabel ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
																		className: "rounded bg-[var(--tag-convertible-bg)] px-1.5 py-0.5 font-medium text-[var(--badge-fg)]",
																		children: display.bondLabel
																	}) : null
																]
															}, highlight.ts_code);
														})
													})]
												}) : null,
												item.source_type === "performance" && item.performance_summary ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
													className: "mt-3 flex flex-wrap gap-1.5 border-t border-[var(--market-grid)] pt-2.5",
													children: item.performance_summary.stocks.slice(0, 20).map((stock) => {
														const latestPremium = getLatestTimelinePremium(stock.premium_registration);
														return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
															className: "inline-flex flex-wrap items-center gap-x-1 rounded border border-[var(--market-grid)] bg-[var(--market-frozen)] px-2 py-1 text-xs",
															children: [
																/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
																	className: "font-medium",
																	children: stock.stock_name || stock.ts_code
																}),
																/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
																	className: stock.pct_chg !== null && stock.pct_chg < 0 ? "text-[var(--market-fall)]" : "text-[var(--market-rise)]",
																	title: "T 日涨跌幅",
																	children: [
																		"T日",
																		" ",
																		stock.pct_chg === null ? "-" : `${stock.pct_chg.toFixed(2)}%`
																	]
																}),
																stock.limit_description ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
																	className: "text-[var(--market-text-secondary)]",
																	children: stock.limit_description
																}) : null,
																latestPremium ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
																	className: `font-medium ${premiumToneClass(latestPremium.tone)}`,
																	title: `${latestPremium.tradeDate}${latestPremium.qualityLabel ? ` · ${latestPremium.qualityLabel}` : ""}`,
																	children: [
																		latestPremium.horizonLabel,
																		" ",
																		latestPremium.valueText,
																		latestPremium.qualityLabel ? ` · ${latestPremium.qualityLabel}` : "",
																		latestPremium.frozen ? " · 已固定" : ""
																	]
																}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
																	className: "text-[var(--market-text-muted)]",
																	children: "区间待更新"
																})
															]
														}, stock.ts_code);
													})
												}) : null,
												item.source_type === "supervision" && item.supervision_summary ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
													className: "mt-3 space-y-3 border-t border-[var(--market-grid)] pt-2.5 text-xs text-[var(--market-text-secondary)]",
													children: item.supervision_summary.groups.map((group) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
														"aria-label": group.label,
														children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
															className: "mb-1.5 font-semibold text-[var(--market-text-primary)]",
															children: group.label
														}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
															className: "space-y-1.5",
															children: group.rows.map((row) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
																type: "button",
																onClick: (event) => {
																	event.stopPropagation();
																	openSupervisionRow(row);
																},
																className: "block w-full overflow-x-auto rounded border border-[var(--market-grid)] bg-[var(--market-frozen)] px-2 py-1.5 text-left hover:border-[var(--market-grid-strong)] hover:bg-[var(--market-cell-hover)]",
																children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
																	className: "flex min-w-max items-center gap-2 whitespace-nowrap",
																	children: [
																		/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
																			className: "w-24 max-w-24 shrink-0 truncate font-medium text-[var(--market-text-primary)]",
																			children: row.stock_name || row.ts_code
																		}),
																		/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
																			className: "w-32 max-w-32 shrink-0 truncate text-[var(--market-text-secondary)]",
																			title: row.description,
																			children: row.description
																		}),
																		/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SupervisionPremiumSeries, { points: row.points })
																	]
																})
															}, row.event_key))
														})]
													}, group.kind))
												}) : null
											]
										}, item.timeline_key))
									})]
								}, date);
							})
						})
					]
				})]
			});
		}
		function TimelineNotice({ children, tone }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: `mb-4 rounded border px-4 py-3 text-sm ${tone === "error" ? "border-[var(--notice-error-border)] bg-[var(--notice-error-bg)] text-[var(--notice-error-fg)]" : "border-[var(--notice-info-border)] bg-[var(--notice-info-bg)] text-[var(--notice-info-fg)]"}`,
				children
			});
		}
		//#endregion
		//#region src/components/Topics/topicTree.ts
		function normalizeTopicCode(code) {
			return (code ?? "").trim().toUpperCase();
		}
		function uniqueTopicCodes(codes) {
			return [...new Set(codes.map(normalizeTopicCode).filter(Boolean))];
		}
		function buildTopicTreeIndexes(data) {
			const codeToOccurrenceIds = /* @__PURE__ */ new Map();
			const ancestorIdsByOccurrence = /* @__PURE__ */ new Map();
			const branchById = /* @__PURE__ */ new Map();
			const visit = (node, ancestors) => {
				if (node.node_type === "branch") {
					branchById.set(node.node_id, node);
					for (const child of node.children) visit(child, [...ancestors, node.node_id]);
					return;
				}
				const code = normalizeTopicCode(node.ts_code);
				const occurrenceId = node.occurrence_id ?? node.node_id;
				if (code) codeToOccurrenceIds.set(code, [...codeToOccurrenceIds.get(code) ?? [], occurrenceId]);
				ancestorIdsByOccurrence.set(occurrenceId, ancestors);
			};
			for (const node of data.tree) visit(node, []);
			return {
				tree: data.tree,
				codeToOccurrenceIds,
				ancestorIdsByOccurrence,
				branchById
			};
		}
		function defaultExpandedNodeIds(tree) {
			const result = /* @__PURE__ */ new Set();
			const visit = (node, level) => {
				if (node.node_type !== "branch") return;
				if (level <= 1) result.add(node.node_id);
				for (const child of node.children) visit(child, level + 1);
			};
			for (const node of tree) visit(node, 0);
			return result;
		}
		function flattenVisibleTopicRows(tree, expanded) {
			const rows = [];
			const visit = (node, level, parentNames) => {
				if (node.node_type === "branch") {
					rows.push({
						kind: "branch",
						node,
						level,
						parentNames
					});
					if (expanded.has(node.node_id)) for (const child of node.children) visit(child, level + 1, [...parentNames, node.name]);
					return;
				}
				rows.push({
					kind: "stock",
					node,
					level,
					parentNames
				});
			};
			for (const node of tree) visit(node, 0, []);
			return rows;
		}
		function descendantCodes(node) {
			const codes = [];
			const visit = (current) => {
				if (current.node_type === "stock") {
					codes.push(current.ts_code ?? "");
					return;
				}
				current.children.forEach(visit);
			};
			visit(node);
			return uniqueTopicCodes(codes);
		}
		function allTopicCodes(tree) {
			return uniqueTopicCodes(tree.flatMap((node) => descendantCodes(node)));
		}
		//#endregion
		//#region src/components/Topics/TopicStockTable.tsx
		const MARKET_FIELDS = [
			"ts_code",
			"name",
			"pct_chg",
			"circ_mv",
			"holder_nums",
			"cb_remain_size"
		];
		function finiteNumber(value) {
			if (value === null || value === void 0 || value === "") return null;
			const number = Number(value);
			return Number.isFinite(number) ? number : null;
		}
		function formatHolderCount(value) {
			const number = finiteNumber(value);
			return number === null ? "--" : `${Math.round(number).toLocaleString("zh-CN")}人`;
		}
		function formatCirculatingMarketValue(value) {
			const number = finiteNumber(value);
			return number === null || number <= 0 ? "--" : `${(number / 1e4).toFixed(2)}亿`;
		}
		function formatConvertibleBondRemainSize(value) {
			const number = finiteNumber(value);
			return number === null || number <= 0 ? "--" : `${(number / 1e4).toFixed(2)}亿`;
		}
		function PctValue({ value }) {
			const number = finiteNumber(value);
			if (number === null) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: "--" });
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
				className: `${number > 0 ? "bg-[var(--market-rise-badge)]" : number < 0 ? "bg-[var(--market-fall-badge)]" : "bg-[var(--market-flat-badge)]"} inline-flex min-w-16 justify-center rounded px-1.5 py-0.5 font-mono font-medium text-[var(--badge-fg)]`,
				children: [
					number > 0 ? "+" : "",
					number.toFixed(2),
					"%"
				]
			});
		}
		function TopicStockTable({ data, topicTitle, setSearchKeyword, targetCode, preview }) {
			const indexes = (0, react.useMemo)(() => buildTopicTreeIndexes(data), [data]);
			const [expandedNodeIds, setExpandedNodeIds] = (0, react.useState)(() => defaultExpandedNodeIds(indexes.tree));
			const rowRefs = (0, react.useRef)(/* @__PURE__ */ new Map());
			const handleGlobalStockClick = useStockClick();
			const { openPreview } = preview;
			(0, react.useEffect)(() => {
				setExpandedNodeIds(defaultExpandedNodeIds(indexes.tree));
				rowRefs.current.clear();
			}, [indexes.tree]);
			const stockCodes = (0, react.useMemo)(() => allTopicCodes(data.tree), [data.tree]);
			const marketQuery = useQuery({
				...sdkQueryPolicy(onclawRuntime.queries.topics.marketInfo(stockCodes, MARKET_FIELDS)),
				queryFn: () => getMarketInfo(stockCodes, MARKET_FIELDS),
				enabled: stockCodes.length > 0
			});
			const marketByCode = (0, react.useMemo)(() => {
				const result = /* @__PURE__ */ new Map();
				for (const item of marketQuery.data ?? []) {
					const code = normalizeTopicCode(item.ts_code);
					if (code) result.set(code, item);
				}
				return result;
			}, [marketQuery.data]);
			const targetOccurrenceIds = (0, react.useMemo)(() => {
				const target = normalizeStockCode(targetCode ?? "");
				if (!target) return /* @__PURE__ */ new Set();
				const result = /* @__PURE__ */ new Set();
				for (const [code, ids] of indexes.codeToOccurrenceIds) if (normalizeStockCode(code) === target) for (const id of ids) result.add(id);
				return result;
			}, [indexes.codeToOccurrenceIds, targetCode]);
			(0, react.useEffect)(() => {
				if (targetOccurrenceIds.size === 0) return;
				setExpandedNodeIds((current) => {
					const next = new Set(current);
					for (const occurrenceId of targetOccurrenceIds) for (const id of indexes.ancestorIdsByOccurrence.get(occurrenceId) ?? []) next.add(id);
					return next;
				});
				const firstId = [...targetOccurrenceIds][0];
				const timer = window.setTimeout(() => rowRefs.current.get(firstId)?.scrollIntoView({
					behavior: "auto",
					block: "center"
				}), 100);
				return () => window.clearTimeout(timer);
			}, [indexes.ancestorIdsByOccurrence, targetOccurrenceIds]);
			const visibleRows = (0, react.useMemo)(() => flattenVisibleTopicRows(indexes.tree, expandedNodeIds), [expandedNodeIds, indexes.tree]);
			const openCodesPreview = (codes, focusCode, label = "题材快照预览") => {
				const uniqueCodes = uniqueTopicCodes(codes).map((code) => code.slice(0, 6));
				if (uniqueCodes.length === 0) return;
				const request = buildTopicLightweightPreviewRequest({
					profile: "lightweight",
					source: "market_snapshot",
					title: topicTitle,
					subtitle: `${label} · ${uniqueCodes.length} 只股票`,
					stockCodes: uniqueCodes,
					focusCode: focusCode ? focusCode.slice(0, 6) : uniqueCodes[0]
				});
				openPreview(request);
			};
			const handleStockClick = async (code) => {
				const code6 = code.slice(0, 6);
				setSearchKeyword?.(code6);
				await handleGlobalStockClick(code6, () => openCodesPreview(stockCodes, code6));
			};
			const expandNextLevel = () => {
				const byLevel = /* @__PURE__ */ new Map();
				const visit = (node, level) => {
					if (node.node_type !== "branch") return;
					byLevel.set(level, [...byLevel.get(level) ?? [], node.node_id]);
					for (const child of node.children) visit(child, level + 1);
				};
				for (const node of indexes.tree) visit(node, 0);
				const nextLevel = [...byLevel.entries()].sort(([left], [right]) => left - right).find(([, ids]) => ids.some((id) => !expandedNodeIds.has(id)));
				if (nextLevel) setExpandedNodeIds((current) => /* @__PURE__ */ new Set([...current, ...nextLevel[1]]));
			};
			const expandAll = () => setExpandedNodeIds(new Set(indexes.branchById.keys()));
			const collapseAll = () => setExpandedNodeIds(/* @__PURE__ */ new Set());
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "flex h-full min-w-0 flex-col bg-[var(--market-canvas)]",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-[var(--market-grid-strong)] bg-[var(--market-header)] px-4 py-2 text-xs",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "text-[var(--market-text-muted)]",
						children: [
							data.counts.stock_occurrences,
							" 个出现位置 ·",
							" ",
							data.counts.unique_stocks,
							" 只股票 · ",
							data.counts.tree_nodes,
							" ",
							"个树节点",
							marketQuery.isError && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "ml-2 inline-flex rounded bg-[var(--status-warning-badge)] px-2 py-0.5 text-[var(--badge-fg)]",
								children: "行情与基本面数据暂不可用，题材结构不受影响"
							})
						]
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: expandNextLevel,
								className: "rounded border border-[var(--market-grid-strong)] bg-[var(--market-cell)] px-2 py-1 text-[var(--market-text-secondary)] hover:bg-[var(--market-cell-hover)]",
								children: "展开当前层"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: expandAll,
								className: "rounded border border-[var(--market-grid-strong)] bg-[var(--market-cell)] px-2 py-1 text-[var(--market-text-secondary)] hover:bg-[var(--market-cell-hover)]",
								children: "全部展开"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: collapseAll,
								className: "rounded border border-[var(--market-grid-strong)] bg-[var(--market-cell)] px-2 py-1 text-[var(--market-text-secondary)] hover:bg-[var(--market-cell-hover)]",
								children: "全部收起"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => openCodesPreview(stockCodes),
								className: "rounded border border-[var(--status-info-badge)] bg-[var(--status-info-badge)] px-2 py-1 font-medium text-[var(--badge-fg)] hover:brightness-110",
								children: "预览全部股票"
							})
						]
					})]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "custom-scrollbar flex-1 overflow-auto",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[1000px] border-collapse text-left text-sm",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("thead", {
							className: "sticky top-0 z-20 bg-[var(--market-header)] text-[var(--market-text-secondary)]",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
									className: "sticky left-0 z-30 min-w-64 border-r border-[var(--market-grid-strong)] bg-[var(--market-header)] p-2 shadow-[4px_0_8px_var(--market-frozen-shadow)]",
									children: "题材结构 / 股票"
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
									className: "w-20 border-r border-[var(--market-grid-strong)] p-2 text-right",
									children: "涨跌幅"
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
									className: "w-28 border-r border-[var(--market-grid-strong)] p-2 text-right",
									children: "流通市值"
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
									className: "w-28 border-r border-[var(--market-grid-strong)] p-2 text-right",
									children: "股东人数"
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
									className: "w-32 border-r border-[var(--market-grid-strong)] p-2 text-right",
									children: "可转债剩余规模"
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
									className: "min-w-44 border-r border-[var(--market-grid-strong)] p-2",
									children: "路径"
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
									className: "min-w-64 border-r border-[var(--market-grid-strong)] p-2",
									children: "关联说明"
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
									className: "w-20 p-2 text-right",
									children: "预览"
								})
							] })
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-[var(--market-grid)] bg-[var(--market-cell)]",
							children: visibleRows.map((row) => {
								if (row.kind === "branch") {
									const expanded = expandedNodeIds.has(row.node.node_id);
									const branchCodes = descendantCodes(row.node);
									return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("tr", {
										className: "border-l-2 border-l-[var(--market-grid-selected)] bg-[var(--market-header)]",
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("td", {
												className: "sticky left-0 z-10 border-r border-[var(--market-grid-strong)] bg-[var(--market-header)] p-2 font-medium text-[var(--market-text-primary)] shadow-[4px_0_8px_var(--market-frozen-shadow)]",
												style: { paddingLeft: `${12 + row.level * 20}px` },
												children: [
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => setExpandedNodeIds((current) => {
															const next = new Set(current);
															if (next.has(row.node.node_id)) next.delete(row.node.node_id);
															else next.add(row.node.node_id);
															return next;
														}),
														className: "mr-2 inline-flex h-5 w-5 items-center justify-center rounded bg-[var(--status-info-badge)] text-[var(--badge-fg)] hover:brightness-110",
														"aria-label": expanded ? "收起分支" : "展开分支",
														children: expanded ? "−" : "+"
													}),
													row.node.name,
													/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
														className: "ml-2 rounded bg-[var(--status-neutral-badge)] px-1.5 py-0.5 whitespace-nowrap text-xs font-normal text-[var(--badge-fg)]",
														children: [row.node.stock_count, " 只股票"]
													})
												]
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", { colSpan: 6 }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
												className: "p-2 text-right",
												children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => openCodesPreview(branchCodes, void 0, `${row.node.name}分支预览`),
													className: "rounded border border-[var(--status-info-badge)] bg-[var(--status-info-badge)] px-2 py-1 text-xs text-[var(--badge-fg)] hover:brightness-110",
													children: "分支"
												})
											})
										]
									}, row.node.node_id);
								}
								const occurrenceId = row.node.occurrence_id ?? row.node.node_id;
								const code = row.node.ts_code || "";
								const market = marketByCode.get(normalizeTopicCode(code));
								const isTarget = targetOccurrenceIds.has(occurrenceId);
								const marketPlaceholder = marketQuery.isLoading ? "…" : "--";
								const description = row.node.description || "";
								const parentBranchName = row.parentNames[row.parentNames.length - 1] || "";
								const badge = code ? getMarketBadge(code) : null;
								return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("tr", {
									ref: (element) => {
										if (element) rowRefs.current.set(occurrenceId, element);
									},
									className: `group border-l-2 transition-colors ${isTarget ? "border-[var(--market-grid-selected)] bg-[var(--market-selected)]" : "border-transparent bg-[var(--market-cell)] hover:bg-[var(--market-cell-hover)]"}`,
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("td", {
											className: `sticky left-0 z-10 cursor-pointer border-r border-[var(--market-grid-strong)] p-2 shadow-[4px_0_8px_var(--market-frozen-shadow)] ${isTarget ? "bg-[var(--market-selected)]" : "bg-[var(--market-frozen)] group-hover:bg-[var(--market-cell-hover)]"}`,
											style: { paddingLeft: `${12 + row.level * 20}px` },
											onClick: () => code && void handleStockClick(code),
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [badge && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
													className: `shrink-0 rounded px-1 text-[10px] ${badge.color} ${badge.textColor}`,
													children: badge.label
												}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
													className: "font-medium text-[var(--market-text-primary)]",
													children: row.node.name
												})]
											}), code && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
												className: "text-[10px] text-[var(--market-text-muted)]",
												children: code
											})]
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
											className: "p-2 text-right",
											children: market ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PctValue, { value: market.pct_chg }) : marketPlaceholder
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
											className: "border-r border-[var(--market-grid)] p-2 text-right font-mono text-[var(--market-text-secondary)]",
											children: market ? formatCirculatingMarketValue(market.circ_mv) : marketPlaceholder
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
											className: "border-r border-[var(--market-grid)] p-2 text-right font-mono text-[var(--market-text-secondary)]",
											children: market ? formatHolderCount(market.holder_nums) : marketPlaceholder
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
											className: "border-r border-[var(--market-grid)] p-2 text-right font-mono text-[var(--market-text-secondary)]",
											children: market ? formatConvertibleBondRemainSize(market.cb_remain_size) : marketPlaceholder
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
											className: "border-r border-[var(--market-grid)] p-2 text-[var(--market-text-secondary)]",
											children: parentBranchName && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: "block max-w-56 truncate",
												title: parentBranchName,
												children: parentBranchName
											})
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
											className: "border-r border-[var(--market-grid)] p-2 text-[var(--market-text-secondary)]",
											children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: "block max-w-sm truncate",
												title: description,
												children: description || "--"
											})
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
											className: "p-2 text-right",
											children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
												type: "button",
												disabled: !code,
												onClick: () => openCodesPreview(code ? [code] : [], code, "股票快照预览"),
												className: "rounded border border-[var(--status-info-badge)] bg-[var(--status-info-badge)] px-2 py-1 text-xs text-[var(--badge-fg)] hover:brightness-110 disabled:opacity-40",
												children: "预览"
											})
										})
									]
								}, occurrenceId);
							})
						})]
					}), visibleRows.length === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "m-4 rounded border border-[var(--notice-info-border)] bg-[var(--notice-info-bg)] p-4 text-center text-[var(--notice-info-fg)]",
						children: "暂无题材结构或股票明细"
					})]
				})]
			});
		}
		//#endregion
		//#region src/components/Topics/topicEventDisplay.ts
		function getEventDate(event) {
			for (const value of [event?.event_date, event?.date]) if (value && /^\d{4}-\d{2}(?:-\d{2})?$/.test(value)) return value;
			return "";
		}
		function getTopicEventsNewestFirst(events) {
			return [...Array.isArray(events) ? events : []].map((event) => {
				const date = getEventDate(event) || null;
				return {
					...event,
					date,
					event_date: date
				};
			}).sort((left, right) => {
				const leftDate = getEventDate(left);
				const rightDate = getEventDate(right);
				if (leftDate && rightDate && leftDate !== rightDate) return rightDate.localeCompare(leftDate);
				if (leftDate && !rightDate) return -1;
				if (!leftDate && rightDate) return 1;
				return (left.event_id ?? left.content).localeCompare(right.event_id ?? right.content);
			});
		}
		function getLatestTopicEvent(topic) {
			return topic.latest_event ?? null;
		}
		function preserveTopicSourceOrder(topics) {
			return topics ? [...topics] : void 0;
		}
		//#endregion
		//#region src/components/Topics/TopicDetail.tsx
		function TopicDetail({ topicId, setSearchKeyword, highlightCode, preview }) {
			const { data: detail, isLoading: isDetailLoading, isError: isDetailError } = useQuery({
				...sdkQueryPolicy(onclawRuntime.queries.topics.detail(topicId)),
				queryFn: () => getTopicDetail(topicId),
				enabled: Boolean(topicId)
			});
			const { data: tree, isLoading: isTreeLoading, isError: isTreeError } = useQuery({
				...sdkQueryPolicy(onclawRuntime.queries.topics.tree(topicId)),
				queryFn: () => getTopicTree(topicId),
				enabled: Boolean(topicId)
			});
			if (!topicId) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "flex flex-1 items-center justify-center bg-[var(--market-canvas)] p-4",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: "rounded border border-[var(--notice-info-border)] bg-[var(--notice-info-bg)] px-4 py-3 text-[var(--notice-info-fg)]",
					children: "请选择一个题材查看详情"
				})
			});
			if (isDetailLoading || isTreeLoading) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "flex flex-1 items-center justify-center bg-[var(--market-canvas)] p-4",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: "rounded border border-[var(--notice-info-border)] bg-[var(--notice-info-bg)] px-4 py-3 text-[var(--notice-info-fg)]",
					children: "正在加载题材详情..."
				})
			});
			if (isDetailError || isTreeError || !detail || !tree) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "flex flex-1 items-center justify-center bg-[var(--market-canvas)] p-4",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: "rounded border border-[var(--notice-error-border)] bg-[var(--notice-error-bg)] px-4 py-3 text-[var(--notice-error-fg)]",
					children: "题材详情加载失败，请稍后重试"
				})
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "flex h-full flex-1 flex-col overflow-hidden bg-[var(--market-canvas)]",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "shrink-0 border-b border-[var(--market-grid-strong)] bg-[var(--market-frozen)] p-4",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-start justify-between",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
							className: "text-xl font-bold text-[var(--market-text-primary)]",
							children: detail.topic_name || "题材详情"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: "rounded bg-[var(--status-neutral-badge)] px-2 py-1 text-xs text-[var(--badge-fg)]",
							children: ["更新时间: ", detail.updated_at || "--"]
						})]
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "custom-scrollbar h-32 overflow-y-auto rounded border border-[var(--market-grid)] bg-[var(--market-cell)] p-3",
						children: detail.events.length > 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "space-y-2",
							children: getTopicEventsNewestFirst(detail.events).map((event, eventIndex) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "text-sm text-[var(--market-text-secondary)]",
								children: [(event.event_date ?? event.date) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "mr-2 inline-flex rounded bg-[var(--status-info-badge)] px-1.5 py-0.5 text-xs font-medium text-[var(--badge-fg)]",
									children: event.event_date ?? event.date
								}), event.content]
							}, `${event.event_id ?? `${event.date}-${event.category ?? ""}-${event.content}`}:${eventIndex}`))
						}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "text-sm text-[var(--market-text-muted)]",
							children: "暂无题材事件"
						})
					})]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "flex flex-1 flex-col overflow-hidden",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "flex-1 overflow-hidden",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TopicStockTable, {
							data: tree,
							topicTitle: detail.topic_name || detail.topic_id,
							setSearchKeyword,
							targetCode: highlightCode,
							preview
						})
					})
				})]
			});
		}
		//#endregion
		//#region src/components/Topics/TopicSidebar.tsx
		function TopicSidebar({ tabMode, setTabMode, searchResults, isSearching, searchError }) {
			const { activeTopicId, setActiveTopicId } = useAppStore();
			const { data: latestData, isLoading: isLatestLoading, isError: isLatestError } = useQuery({
				...sdkQueryPolicy(onclawRuntime.queries.topics.latest({ limit: 50 })),
				queryFn: () => getLatestTopics(50),
				refetchOnWindowFocus: true
			});
			const displayItems = tabMode === "latest" ? preserveTopicSourceOrder(latestData?.items) : searchResults;
			const isLoading = tabMode === "latest" ? isLatestLoading : isSearching;
			const errorMessage = tabMode === "latest" ? isLatestError ? "最新题材加载失败，请稍后重试" : "" : searchError;
			const getEventDisplay = (topic) => {
				const eventObj = getLatestTopicEvent(topic);
				const fallbackDate = topic.updated_at ? topic.updated_at.split("T")[0] : "";
				if (eventObj?.content) return {
					date: eventObj.event_date ?? eventObj.date ?? fallbackDate,
					content: eventObj.content,
					isDefault: false
				};
				return {
					date: fallbackDate,
					content: "暂无题材事件",
					isDefault: true
				};
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "flex h-full w-64 flex-col border-r border-[var(--market-grid-strong)] bg-[var(--market-frozen)]",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "border-b border-[var(--market-grid-strong)] p-2",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "flex rounded bg-[var(--market-canvas)] p-1",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							onClick: () => setTabMode("latest"),
							className: `flex-1 rounded py-1.5 text-xs font-medium transition-colors ${tabMode === "latest" ? "bg-[var(--status-info-badge)] text-[var(--badge-fg)]" : "text-[var(--market-text-muted)] hover:text-[var(--market-text-secondary)]"}`,
							children: "最新题材"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							onClick: () => setTabMode("related"),
							className: `flex-1 rounded py-1.5 text-xs font-medium transition-colors ${tabMode === "related" ? "bg-[var(--status-info-badge)] text-[var(--badge-fg)]" : "text-[var(--market-text-muted)] hover:text-[var(--market-text-secondary)]"}`,
							children: "相关题材"
						})]
					})
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "custom-scrollbar flex-1 overflow-y-auto",
					children: isLoading ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "m-3 rounded border border-[var(--notice-info-border)] bg-[var(--notice-info-bg)] p-3 text-center text-xs text-[var(--notice-info-fg)]",
						children: "加载中..."
					}) : errorMessage ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "m-3 rounded border border-[var(--notice-error-border)] bg-[var(--notice-error-bg)] p-3 text-center text-xs text-[var(--notice-error-fg)]",
						role: "alert",
						children: errorMessage
					}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
						className: "divide-y divide-[var(--market-grid)]",
						children: displayItems && displayItems.length > 0 ? displayItems.map((topic) => {
							const { date, content, isDefault } = getEventDisplay(topic);
							return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("li", {
								onClick: () => setActiveTopicId(topic.topic_id),
								className: `cursor-pointer px-3 py-3 transition-colors hover:bg-[var(--market-cell-hover)] ${activeTopicId === topic.topic_id ? "border-l-2 border-[var(--market-grid-selected)] bg-[var(--market-selected)]" : "border-l-2 border-transparent bg-[var(--market-cell)]"}`,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "flex flex-col",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: "mb-1 text-sm font-medium text-[var(--market-text-primary)]",
										children: topic.topic_name
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: `line-clamp-2 text-xs leading-relaxed ${isDefault ? "text-[var(--market-text-muted)]" : "text-[var(--market-text-secondary)]"}`,
										children: [date && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
											className: "mr-1 font-medium text-[var(--market-grid-selected)]",
											children: [
												"[",
												date,
												"]"
											]
										}), content]
									})]
								})
							}, topic.topic_id);
						}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "m-3 rounded border border-[var(--notice-info-border)] bg-[var(--notice-info-bg)] p-3 text-center text-xs text-[var(--notice-info-fg)]",
							children: tabMode === "related" ? "没有找到相关题材" : "暂无最新题材"
						})
					})
				})]
			});
		}
		//#endregion
		//#region src/components/Topics/index.tsx
		function TopicsModule() {
			const { activeTopicId, setActiveTopicId, linkerSettings, updateLinkerSettings, linkerState } = useAppStore();
			const [searchKeyword, setSearchKeyword] = (0, react.useState)("");
			const preview = useLightweightSnapshotPreview();
			const searchKeywordRef = (0, react.useRef)(searchKeyword);
			(0, react.useEffect)(() => {
				searchKeywordRef.current = searchKeyword;
			}, [searchKeyword]);
			const [tabMode, setTabMode] = (0, react.useState)("latest");
			const [searchResults, setSearchResults] = (0, react.useState)([]);
			const [isSearching, setIsSearching] = (0, react.useState)(false);
			const [searchError, setSearchError] = (0, react.useState)("");
			const queryClient = useQueryClient();
			const doSearch = (0, react.useCallback)(async (keyword) => {
				if (!keyword.trim()) return;
				setIsSearching(true);
				setSearchError("");
				try {
					const params = {
						keyword: keyword.trim(),
						limit: 50
					};
					const res = await queryClient.fetchQuery({
						...sdkQueryPolicy(onclawRuntime.queries.topics.search(params)),
						queryFn: () => searchTopics(params)
					});
					setSearchResults(res.items || []);
					setTabMode("related");
					if (res.items && res.items.length > 0) setActiveTopicId(res.items[0].topic_id);
					else setActiveTopicId(null);
				} catch (error) {
					console.error("Search failed:", error);
					setSearchError("题材搜索失败，请稍后重试");
				} finally {
					setIsSearching(false);
				}
			}, [queryClient, setActiveTopicId]);
			const handleSearch = () => {
				doSearch(searchKeyword);
			};
			(0, react.useEffect)(() => {
				if (!platformAPI.stockLinker.isSupported || !linkerSettings.isUseSourceCode) return;
				const sourceCode = linkerSettings.useSourceCode === "ths" ? linkerState.thsCode : linkerState.tdxCode;
				if (sourceCode && sourceCode !== "未获取" && sourceCode !== searchKeywordRef.current) {
					setSearchKeyword(sourceCode);
					doSearch(sourceCode);
				}
			}, [
				doSearch,
				linkerSettings.isUseSourceCode,
				linkerSettings.useSourceCode,
				linkerState.thsCode,
				linkerState.tdxCode
			]);
			const handleRefreshLatest = () => {
				queryClient.invalidateQueries({ queryKey: onclawRuntime.queries.topics.latest({ limit: 50 }).queryKey });
				setTabMode("latest");
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "flex h-full w-full flex-col bg-[var(--market-canvas)] text-[var(--market-text-primary)]",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "flex min-h-12 flex-shrink-0 flex-wrap items-center gap-4 border-b border-[var(--market-grid-strong)] bg-[var(--market-frozen)] px-4 py-2",
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "text-sm text-[var(--market-text-secondary)]",
							children: "股票名称:"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "flex items-center",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								type: "text",
								value: searchKeyword,
								onChange: (event) => setSearchKeyword(event.target.value),
								onKeyDown: (event) => {
									if (event.key === "Enter") handleSearch();
								},
								className: "w-64 rounded-l border border-[var(--market-grid-strong)] bg-[var(--market-cell)] px-3 py-1 text-sm text-[var(--market-text-primary)] focus:border-[var(--market-grid-selected)] focus:outline-none",
								placeholder: "输入题材或股票代码"
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								onClick: handleSearch,
								disabled: isSearching,
								className: "rounded-r border border-[var(--status-info-badge)] bg-[var(--status-info-badge)] px-4 py-1 text-sm font-medium text-[var(--badge-fg)] hover:brightness-110 disabled:opacity-50",
								children: isSearching ? "搜索中..." : "查询"
							})]
						}),
						platformAPI.stockLinker.isSupported && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "ml-4 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "text-sm text-[var(--market-text-secondary)]",
								children: "搜索联动:"
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("select", {
								className: "rounded border border-[var(--market-grid-strong)] bg-[var(--market-cell)] px-2 py-1 text-sm text-[var(--market-text-primary)] focus:border-[var(--market-grid-selected)] focus:outline-none",
								value: linkerSettings.isUseSourceCode ? linkerSettings.useSourceCode : "none",
								onChange: (event) => {
									const value = event.target.value;
									updateLinkerSettings({
										isUseSourceCode: value !== "none",
										useSourceCode: value
									});
								},
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
										value: "none",
										children: "关闭联动"
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
										value: "ths",
										children: "联动同花顺"
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
										value: "tdx",
										children: "联动通达信"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							onClick: handleRefreshLatest,
							className: "ml-2 rounded border border-[var(--market-grid-strong)] bg-[var(--market-cell)] px-3 py-1 text-sm text-[var(--market-text-secondary)] hover:bg-[var(--market-cell-hover)] hover:text-[var(--market-text-primary)]",
							children: "刷新最新"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("output", {
							className: `ml-auto rounded px-2 py-1 text-xs font-medium text-[var(--badge-fg)] ${searchError ? "bg-[var(--status-danger-badge)]" : "bg-[var(--status-success-badge)]"}`,
							children: searchError || "状态: 就绪"
						})
					]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 overflow-hidden",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(TopicSidebar, {
						tabMode,
						setTabMode,
						searchResults,
						isSearching,
						searchError
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 flex-1 overflow-hidden",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "flex min-w-0 flex-1 flex-col overflow-hidden",
							children: activeTopicId ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TopicDetail, {
								topicId: activeTopicId,
								setSearchKeyword,
								highlightCode: searchKeyword,
								preview
							}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "flex flex-1 items-center justify-center bg-[var(--market-canvas)] p-4",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "rounded border border-[var(--notice-info-border)] bg-[var(--notice-info-bg)] px-4 py-3 text-center text-[var(--notice-info-fg)]",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children: "请选择一个题材开始查看" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs",
										children: "也可以在顶部搜索股票代码或题材关键词"
									})]
								})
							})
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(LightweightSnapshotPreviewHost, {
							title: preview.request?.title || "题材快照预览",
							subtitle: preview.request?.subtitle,
							isOpen: preview.isOpen,
							filters: preview.filters,
							filterCounts: preview.filterCounts,
							isFilterSaving: preview.isFilterSaving,
							onFilterChange: preview.setFilter,
							onClose: preview.closePreview,
							children: preview.request ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(LightweightSnapshotPreviewPanel, {
								stockCodes: preview.request.stockCodes,
								focusCode: preview.request.focusCode,
								filters: preview.filters,
								onFilterCountsChange: preview.updateFilterCounts
							}) : null
						})]
					})]
				})]
			});
		}
		//#endregion
		//#region src/components/custom-index/customIndexWorkspaceModel.ts
		const STATUS_PRESENTATION = {
			active: {
				label: "运行中",
				tone: "success"
			},
			building: {
				label: "构建中",
				tone: "info"
			},
			paused: {
				label: "已暂停",
				tone: "neutral"
			},
			failed: {
				label: "构建失败",
				tone: "error"
			}
		};
		function filterCustomIndexDefinitions(definitions, scope, search) {
			const needle = search.trim().toLocaleLowerCase("zh-CN");
			return definitions.filter((definition) => {
				if (definition.scope === "system" && (definition.status !== "active" || !definition.current_constituent_date)) return false;
				if (scope !== "all" && definition.scope !== scope) return false;
				if (!needle) return true;
				return `${definition.name} ${definition.index_code} ${definition.description ?? ""}`.toLocaleLowerCase("zh-CN").includes(needle);
			});
		}
		function resolveSelectedIndexCode(definitions, current) {
			const readable = definitions.filter((item) => item.scope !== "system" || item.status === "active" && Boolean(item.current_constituent_date));
			if (current && readable.some((item) => item.index_code === current)) return current;
			return readable.find((item) => item.status === "active" && item.scope === "system")?.index_code ?? readable.find((item) => item.status === "active")?.index_code ?? readable[0]?.index_code ?? null;
		}
		function resolvePublishedDate(dates, requested) {
			if (!dates.length) return null;
			const sorted = [...new Set(dates)].sort((left, right) => left.localeCompare(right));
			if (requested && sorted.includes(requested)) return requested;
			if (requested) return [...sorted].reverse().find((item) => item <= requested) ?? sorted[0];
			return sorted[sorted.length - 1];
		}
		function canManageCustomIndex(definition) {
			return definition?.scope === "user" && definition.owner_user_id != null;
		}
		function customIndexPublicationSummary(definition, latestPublishedDate) {
			if (!latestPublishedDate) {
				if (definition.status === "building") return "定义已保存，尚无成功发布结果";
				if (definition.status === "failed") return "构建失败，尚无成功发布结果";
				return "尚无成功发布结果";
			}
			return definition.status === "active" ? `最新发布 ${latestPublishedDate}` : `最后成功发布 ${latestPublishedDate}`;
		}
		let editorGroupSequence = 0;
		function createEditorGroupDraft(effectiveDate = "", codesText = "") {
			editorGroupSequence += 1;
			return {
				id: `custom-index-group-${editorGroupSequence}`,
				effectiveDate,
				codesText
			};
		}
		function createEmptyIndexDraft() {
			return {
				indexCode: "",
				name: "",
				description: "",
				baseValue: "1000",
				constituentMode: "static_set",
				weightMethod: "equal",
				stepped: false,
				step: "100",
				groups: [createEditorGroupDraft()]
			};
		}
		function draftFromDefinition(definition, currentCodes = []) {
			const stepped = definition.weight_config.transform === "ceil_step";
			return {
				indexCode: definition.index_code,
				name: definition.name,
				description: definition.description ?? "",
				baseValue: String(definition.base_value),
				constituentMode: definition.constituent_mode === "dated_set" ? "dated_set" : "static_set",
				weightMethod: definition.weight_method,
				stepped,
				step: definition.weight_config.transform === "ceil_step" ? String(definition.weight_config.step) : "100",
				groups: [createEditorGroupDraft("", currentCodes.join("\n"))]
			};
		}
		function normalizeCodes(codesText) {
			return codesText.split(/[\s,，;；]+/).map((item) => item.trim().toUpperCase()).filter(Boolean);
		}
		function validateIndexDraft(draft, editing = false) {
			const errors = {};
			const code = draft.indexCode.trim().toUpperCase();
			if (!editing && !/^[A-Z0-9_]{2,32}$/.test(code)) errors.indexCode = "代码需为 2–32 位字母、数字或下划线";
			if (!draft.name.trim()) errors.name = "请输入指数名称";
			if (draft.name.trim().length > 64) errors.name = "指数名称最多 64 个字符";
			if (draft.description.length > 255) errors.description = "说明最多 255 个字符";
			const baseValue = Number(draft.baseValue);
			if (!editing && (!Number.isFinite(baseValue) || baseValue <= 0)) errors.baseValue = "基点必须为正数";
			if (!draft.groups.length) errors.groups = "至少需要一个成分组";
			if (draft.constituentMode === "static_set" && draft.groups.length !== 1) errors.groups = "静态成分只能设置一个组";
			const dates = /* @__PURE__ */ new Set();
			const groups = draft.groups.map((group, index) => {
				const codes = normalizeCodes(group.codesText);
				const invalid = codes.filter((item) => !/^\d{6}\.(SH|SZ|BJ)$/.test(item));
				if (!codes.length) errors[`group.${index}.codes`] = "请输入至少一个股票代码";
				else if (codes.length > 200) errors[`group.${index}.codes`] = "每个成分组最多 200 只股票";
				else if (invalid.length) errors[`group.${index}.codes`] = `代码格式错误：${invalid.slice(0, 3).join("、")}`;
				else if (new Set(codes).size !== codes.length) errors[`group.${index}.codes`] = "成分代码不能重复";
				if (draft.constituentMode === "dated_set") {
					if (!/^\d{4}-\d{2}-\d{2}$/.test(group.effectiveDate)) errors[`group.${index}.date`] = "请选择生效日期";
					else if (dates.has(group.effectiveDate)) errors[`group.${index}.date`] = "生效日期不能重复";
					dates.add(group.effectiveDate);
				}
				return {
					effective_date: draft.constituentMode === "dated_set" ? group.effectiveDate : null,
					codes: [...new Set(codes)].sort()
				};
			});
			if (draft.stepped) {
				const step = Number(draft.step);
				if (!Number.isFinite(step) || step <= 0) errors.step = "阶梯步长必须为正数";
			}
			return {
				errors,
				groups
			};
		}
		function configFromDraft(draft, groups) {
			return {
				constituent_mode: draft.constituentMode,
				weight_method: draft.weightMethod,
				weight_config: draft.stepped ? {
					transform: "ceil_step",
					step: Number(draft.step)
				} : { transform: "none" },
				groups
			};
		}
		function createPayloadFromDraft(draft) {
			const validation = validateIndexDraft(draft);
			if (Object.keys(validation.errors).length) throw new Error("invalid custom index draft");
			return {
				...configFromDraft(draft, validation.groups),
				index_code: draft.indexCode.trim().toUpperCase(),
				name: draft.name.trim(),
				description: draft.description.trim() || null,
				visibility: "private",
				base_value: Number(draft.baseValue)
			};
		}
		function updatePayloadFromDraft(draft) {
			const validation = validateIndexDraft(draft, true);
			if (Object.keys(validation.errors).length) throw new Error("invalid custom index draft");
			return {
				...configFromDraft(draft, validation.groups),
				name: draft.name.trim(),
				description: draft.description.trim() || null,
				visibility: "private"
			};
		}
		function formatIndexAmount(value) {
			if (value == null || !Number.isFinite(value)) return "--";
			if (Math.abs(value) >= 1e4) return `${(value / 1e4).toFixed(2).replace(/\.00$/, "")}亿`;
			return `${value.toFixed(2).replace(/\.00$/, "")}万`;
		}
		function formatIndexWeight(value) {
			return value == null || !Number.isFinite(value) ? "--" : `${(value * 100).toFixed(2)}%`;
		}
		//#endregion
		//#region src/components/custom-index/CustomIndexConstituentTable.tsx
		function sortCustomIndexConstituents(rows, key, direction) {
			const factor = direction === "asc" ? 1 : -1;
			return [...rows].sort((left, right) => {
				const column = key.startsWith("attribute:") ? key.slice(10) : null;
				const baseKey = key;
				const leftValue = column ? getAttributeValue(left, column) : left[baseKey];
				const rightValue = column ? getAttributeValue(right, column) : right[baseKey];
				if (leftValue == null && rightValue == null) return left.ts_code.localeCompare(right.ts_code);
				if (leftValue == null) return 1;
				if (rightValue == null) return -1;
				return (typeof leftValue === "number" && typeof rightValue === "number" ? leftValue - rightValue : String(leftValue).localeCompare(String(rightValue), "zh-CN")) * factor || left.ts_code.localeCompare(right.ts_code);
			});
		}
		function Header$1({ label, value, active, direction, onSelect }) {
			const selected = value === active;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onSelect(value),
				className: "inline-flex items-center gap-1 whitespace-nowrap hover:text-[var(--market-text-primary)]",
				children: [label, /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: selected ? "text-[var(--status-info-badge)]" : "opacity-35",
					children: selected ? direction === "asc" ? "↑" : "↓" : "↕"
				})]
			});
		}
		function CustomIndexConstituentTable({ rows, loading, error, onRetry }) {
			const [key, setKey] = (0, react.useState)("weight");
			const [direction, setDirection] = (0, react.useState)("desc");
			const attributes = (0, react.useMemo)(() => getConstituentAttributeColumns(rows), [rows]);
			const sorted = (0, react.useMemo)(() => sortCustomIndexConstituents(rows, key, direction), [
				direction,
				key,
				rows
			]);
			const select = (next) => {
				if (next === key) setDirection((current) => current === "desc" ? "asc" : "desc");
				else {
					setKey(next);
					setDirection("desc");
				}
			};
			if (loading && !rows.length) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PanelState, { text: "成分行情加载中…" });
			if (error && !rows.length) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PanelState, {
				text: error,
				error: true,
				onRetry
			});
			if (!rows.length) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PanelState, { text: "该交易日暂无可读取的成分" });
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "h-full overflow-auto",
				children: [error ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "sticky left-0 top-0 z-20 flex items-center justify-between border-b border-[var(--notice-warning-border)] bg-[var(--notice-warning-bg)] px-3 py-2 text-xs text-[var(--notice-warning-fg)]",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "刷新失败，继续展示缓存成分" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onRetry,
						className: "underline",
						children: "重试"
					})]
				}) : null, /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[980px] border-collapse text-sm",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("thead", {
						className: "sticky top-0 z-10 bg-[var(--market-header)] text-[var(--market-text-secondary)]",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
								className: "sticky left-0 z-20 min-w-40 border-b border-[var(--market-grid-strong)] bg-[var(--market-header)] px-4 py-2.5 text-left font-medium",
								children: "股票"
							}),
							[
								["权重", "weight"],
								["涨跌幅", "pct_chg"],
								["成交量", "vol"],
								["成交额", "amount"],
								["真实流通市值", "free_mv"]
							].map(([label, value]) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
								className: "border-b border-[var(--market-grid-strong)] px-3 py-2.5 text-right font-medium",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Header$1, {
									label,
									value,
									active: key,
									direction,
									onSelect: select
								})
							}, value)),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
								className: "border-b border-[var(--market-grid-strong)] px-3 py-2.5 text-left font-medium",
								children: "状态"
							}),
							attributes.map((column) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
								className: `border-b border-[var(--market-grid-strong)] px-3 py-2.5 font-medium ${isNumericAttributeColumn(rows, column) ? "text-right" : "text-left"}`,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Header$1, {
									label: column,
									value: attributeSortKey(column),
									active: key,
									direction,
									onSelect: select
								})
							}, column))
						] })
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("tbody", { children: sorted.map((row) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("tr", {
						className: "border-b border-[var(--market-grid)] hover:bg-[var(--market-cell-hover)]",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("td", {
								className: "sticky left-0 bg-[var(--market-cell)] px-4 py-2.5",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: "font-medium text-[var(--market-text-primary)]",
									children: row.name || row.ts_code
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: "text-xs text-[var(--market-text-muted)]",
									children: row.ts_code
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
								className: "px-3 py-2.5 text-right font-medium tabular-nums",
								children: formatIndexWeight(row.weight)
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
								className: `px-3 py-2.5 text-right tabular-nums ${row.pct_chg == null ? "text-[var(--market-text-secondary)]" : row.pct_chg >= 0 ? "text-[var(--market-rise)]" : "text-[var(--market-fall)]"}`,
								children: formatPercent$1(row.pct_chg)
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
								className: "px-3 py-2.5 text-right tabular-nums",
								children: formatVolume(row.vol)
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
								className: "px-3 py-2.5 text-right tabular-nums",
								children: formatAmount$1(row.amount)
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
								className: "px-3 py-2.5 text-right tabular-nums",
								children: formatFreeMarketValue(row.free_mv)
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
								className: "px-3 py-2.5 text-left",
								children: row.status === "suspended" ? "停牌" : "正常"
							}),
							attributes.map((column) => {
								const value = getAttributeValue(row, column);
								return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
									className: `whitespace-nowrap px-3 py-2.5 ${typeof value === "number" ? "text-right tabular-nums" : "text-left"}`,
									children: formatAttributeValue(value)
								}, column);
							})
						]
					}, row.ts_code)) })]
				})]
			});
		}
		function PanelState({ text, error = false, onRetry }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: `flex h-full min-h-56 flex-col items-center justify-center gap-3 px-5 text-center text-sm ${error ? "text-[var(--notice-error-fg)]" : "text-[var(--market-text-secondary)]"}`,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: text }), onRetry ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onRetry,
					className: "rounded-md border border-[var(--market-grid-strong)] px-3 py-1.5 text-[var(--market-text-primary)] hover:bg-[var(--market-cell-hover)]",
					children: "重试"
				}) : null]
			});
		}
		//#endregion
		//#region src/components/custom-index/CustomIndexEditor.tsx
		function CustomIndexEditor({ definition, currentCodes = [], onClose, onSaved }) {
			const editing = Boolean(definition);
			const [draft, setDraft] = (0, react.useState)(() => definition ? draftFromDefinition(definition, currentCodes) : createEmptyIndexDraft());
			const [errors, setErrors] = (0, react.useState)({});
			const createMutation = useCreateCustomIndex();
			const updateMutation = useUpdateCustomIndex();
			const pending = createMutation.isPending || updateMutation.isPending;
			const mutationError = createMutation.error ?? updateMutation.error;
			(0, react.useEffect)(() => {
				setDraft(definition ? draftFromDefinition(definition, currentCodes) : createEmptyIndexDraft());
				setErrors({});
			}, [definition, currentCodes]);
			const change = (key, value) => {
				setDraft((current) => ({
					...current,
					[key]: value
				}));
				setErrors((current) => ({
					...current,
					[key]: ""
				}));
			};
			const updateGroup = (index, patch) => {
				setDraft((current) => ({
					...current,
					groups: current.groups.map((group, groupIndex) => groupIndex === index ? {
						...group,
						...patch
					} : group)
				}));
				setErrors((current) => ({
					...current,
					[`group.${index}.codes`]: "",
					[`group.${index}.date`]: ""
				}));
			};
			const submit = async () => {
				const validation = validateIndexDraft(draft, editing);
				setErrors(validation.errors);
				if (Object.keys(validation.errors).length) return;
				if (editing && !window.confirm("保存后指数将进入“构建中”，旧发布数据仍可查看。需要重新构建才能应用新配置，是否继续？")) return;
				try {
					onSaved(definition ? await updateMutation.mutateAsync({
						indexCode: definition.index_code,
						input: updatePayloadFromDraft(draft)
					}) : await createMutation.mutateAsync(createPayloadFromDraft(draft)));
				} catch {}
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex justify-end bg-black/55",
				role: "presentation",
				onMouseDown: (event) => {
					if (event.target === event.currentTarget && !pending) onClose();
				},
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("dialog", {
					open: true,
					"aria-label": editing ? "编辑自定义指数" : "新建自定义指数",
					className: "m-0 ml-auto flex h-full w-full max-w-2xl flex-col border-y-0 border-r-0 border-l border-[var(--market-grid-strong)] bg-[var(--market-canvas)] p-0 text-[var(--market-text-primary)] shadow-2xl",
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("header", {
							className: "flex items-center justify-between border-b border-[var(--market-grid-strong)] px-5 py-4",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
								className: "text-lg font-semibold",
								children: editing ? "编辑指数" : "新建指数"
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-[var(--market-text-secondary)]",
								children: "保存定义不会自动计算，保存后可预览并构建最近窗口。"
							})] }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: onClose,
								disabled: pending,
								className: "rounded p-2 text-xl text-[var(--market-text-secondary)] hover:bg-[var(--market-cell-hover)]",
								children: "×"
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "min-h-0 flex-1 space-y-6 overflow-y-auto p-5",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(EditorSection, {
									title: "基本信息",
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Field, {
												label: "指数代码",
												error: errors.indexCode,
												children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
													value: draft.indexCode,
													disabled: editing,
													onChange: (event) => change("indexCode", event.target.value.toUpperCase()),
													placeholder: "MY_INDEX",
													className: inputClass$1
												})
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Field, {
												label: "指数名称",
												error: errors.name,
												children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
													value: draft.name,
													onChange: (event) => change("name", event.target.value),
													placeholder: "例如：我的低波组合",
													className: inputClass$1
												})
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Field, {
												label: "基点",
												error: errors.baseValue,
												hint: editing ? "已有指数的基点不可修改" : void 0,
												children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
													type: "number",
													min: "0.0001",
													step: "0.01",
													value: draft.baseValue,
													disabled: editing,
													onChange: (event) => change("baseValue", event.target.value),
													className: inputClass$1
												})
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Field, {
												label: "说明",
												error: errors.description,
												children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
													value: draft.description,
													onChange: (event) => change("description", event.target.value),
													placeholder: "可选",
													className: inputClass$1
												})
											})
										]
									})
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(EditorSection, {
									title: "成分规则",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
											className: "mb-4 grid gap-2 sm:grid-cols-2",
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Choice, {
												active: draft.constituentMode === "static_set",
												title: "静态成分",
												detail: "一个固定股票组",
												onClick: () => change("constituentMode", "static_set")
											}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Choice, {
												active: draft.constituentMode === "dated_set",
												title: "按日期生效",
												detail: "多组成分按交易日切换",
												onClick: () => change("constituentMode", "dated_set")
											})]
										}),
										editing && definition?.constituent_mode === "dated_set" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Notice, { children: "接口不提供完整历史代码组。编辑按日期指数时，请重新确认需要参与最近窗口重算的全部日期组。" }) : null,
										editing && !currentCodes.length && definition?.constituent_mode === "static_set" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Notice, { children: "该指数尚无可读取的成分快照，请重新输入完整成分代码。" }) : null,
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
											className: "space-y-3",
											children: draft.groups.map((group, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
												className: "rounded-lg border border-[var(--market-grid-strong)] bg-[var(--market-cell)] p-3",
												children: [
													/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
														className: "mb-2 flex items-center justify-between",
														children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
															className: "text-sm font-medium",
															children: ["成分组 ", index + 1]
														}), draft.constituentMode === "dated_set" && draft.groups.length > 1 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => change("groups", draft.groups.filter((_, itemIndex) => itemIndex !== index)),
															className: "text-xs text-[var(--notice-error-fg)]",
															children: "移除"
														}) : null]
													}),
													draft.constituentMode === "dated_set" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Field, {
														label: "生效日期",
														error: errors[`group.${index}.date`],
														children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
															type: "date",
															value: group.effectiveDate,
															onChange: (event) => updateGroup(index, { effectiveDate: event.target.value }),
															className: inputClass$1
														})
													}) : null,
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Field, {
														label: "股票代码",
														error: errors[`group.${index}.codes`],
														hint: `${normalizeCodes(group.codesText).length}/200，只支持 .SH / .SZ / .BJ`,
														children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("textarea", {
															rows: 5,
															value: group.codesText,
															onChange: (event) => updateGroup(index, { codesText: event.target.value }),
															placeholder: "000001.SZ\n600000.SH",
															className: `${inputClass$1} resize-y font-mono`
														})
													})
												]
											}, group.id))
										}),
										draft.constituentMode === "dated_set" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => change("groups", [...draft.groups, createEditorGroupDraft()]),
											className: "mt-3 rounded-md border border-dashed border-[var(--market-grid-strong)] px-3 py-2 text-sm text-[var(--status-info-badge)] hover:bg-[var(--market-cell-hover)]",
											children: "＋ 添加日期组"
										}) : null,
										errors.groups ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
											className: "mt-2 text-xs text-[var(--notice-error-fg)]",
											children: errors.groups
										}) : null
									]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(EditorSection, {
									title: "加权方式",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
											className: "grid gap-2 sm:grid-cols-2",
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Choice, {
												active: draft.weightMethod === "equal",
												title: "平均加权",
												detail: "每只股票使用相同权重",
												onClick: () => change("weightMethod", "equal")
											}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Choice, {
												active: draft.weightMethod === "preclose_free_float_mv",
												title: "流通市值加权",
												detail: "以前收盘真实流通市值计算",
												onClick: () => change("weightMethod", "preclose_free_float_mv")
											})]
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
											className: "mt-4 flex items-center gap-2 text-sm",
											children: [
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
													type: "checkbox",
													checked: draft.stepped,
													onChange: (event) => change("stepped", event.target.checked)
												}),
												" ",
												"向上阶梯取整"
											]
										}),
										draft.stepped ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
											className: "mt-3 max-w-xs",
											children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Field, {
												label: "阶梯步长",
												error: errors.step,
												children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
													type: "number",
													min: "0.0001",
													step: "any",
													value: draft.step,
													onChange: (event) => change("step", event.target.value),
													className: inputClass$1
												})
											})
										}) : null
									]
								}),
								mutationError ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: "rounded-lg border border-[var(--notice-error-border)] bg-[var(--notice-error-bg)] px-4 py-3 text-sm text-[var(--notice-error-fg)]",
									children: mutationError.message || "保存失败"
								}) : null
							]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("footer", {
							className: "flex justify-end gap-3 border-t border-[var(--market-grid-strong)] px-5 py-4",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: onClose,
								disabled: pending,
								className: "rounded-md border border-[var(--market-grid-strong)] px-4 py-2 text-sm hover:bg-[var(--market-cell-hover)]",
								children: "取消"
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => void submit(),
								disabled: pending,
								className: "rounded-md bg-[var(--status-info-badge)] px-4 py-2 text-sm font-medium text-[var(--badge-fg)] disabled:opacity-50",
								children: pending ? "保存中…" : "保存定义"
							})]
						})
					]
				})
			});
		}
		const inputClass$1 = "mt-1 w-full rounded-md border border-[var(--market-grid-strong)] bg-[var(--market-canvas)] px-3 py-2 text-sm outline-none focus:border-[var(--status-info-badge)] disabled:cursor-not-allowed disabled:opacity-55";
		function EditorSection({ title, children }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
				className: "mb-3 text-sm font-semibold text-text-gold",
				children: title
			}), children] });
		}
		function Field({ label, error, hint, children }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
				className: "block text-sm",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "text-[var(--market-text-secondary)]",
						children: label
					}),
					children,
					error ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-xs text-[var(--notice-error-fg)]",
						children: error
					}) : hint ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-xs text-[var(--market-text-muted)]",
						children: hint
					}) : null
				]
			});
		}
		function Choice({ active, title, detail, onClick }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick,
				className: `rounded-lg border p-3 text-left transition ${active ? "border-[var(--status-info-badge)] bg-[var(--notice-info-bg)]" : "border-[var(--market-grid-strong)] bg-[var(--market-cell)] hover:bg-[var(--market-cell-hover)]"}`,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: "block text-sm font-medium",
					children: title
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: "mt-1 block text-xs text-[var(--market-text-secondary)]",
					children: detail
				})]
			});
		}
		function Notice({ children }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "mb-3 rounded-md border border-[var(--notice-warning-border)] bg-[var(--notice-warning-bg)] px-3 py-2 text-xs text-[var(--notice-warning-fg)]",
				children
			});
		}
		//#endregion
		//#region src/components/custom-index/CustomIndexOwnerDialogs.tsx
		function PreviewDialog({ definition, initialDate, onClose }) {
			const [tradeDate, setTradeDate] = (0, react.useState)(initialDate);
			const mutation = usePreviewCustomIndex();
			const run = () => {
				if (tradeDate) mutation.mutate({
					indexCode: definition.index_code,
					tradeDate
				});
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Dialog, {
				title: "预览权重",
				detail: "预览使用生产计算函数，不会写入定义或发布数据。",
				onClose,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-end gap-3",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
							className: "text-sm text-[var(--market-text-secondary)]",
							children: ["交易日", /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								type: "date",
								value: tradeDate,
								onChange: (event) => setTradeDate(event.target.value),
								className: inputClass
							})]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: run,
							disabled: !tradeDate || mutation.isPending,
							className: primaryClass,
							children: mutation.isPending ? "计算中…" : "计算预览"
						})]
					}),
					mutation.isError ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ErrorBox, { children: mutation.error.message || "预览失败" }) : null,
					mutation.data ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "mt-4 overflow-auto rounded-lg border border-[var(--market-grid-strong)]",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "border-b border-[var(--market-grid-strong)] bg-[var(--market-header)] px-3 py-2 text-xs text-[var(--market-text-secondary)]",
								children: [
									"观察日 ",
									mutation.data.weight_observation_date,
									" · 来源",
									" ",
									mutation.data.weight_source,
									" · ",
									mutation.data.constituents.length,
									" ",
									"只"
								]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("table", {
								className: "w-full min-w-[620px] text-sm",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("thead", {
									className: "bg-[var(--market-header)] text-[var(--market-text-secondary)]",
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
											className: "px-3 py-2 text-left",
											children: "代码"
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
											className: "px-3 py-2 text-right",
											children: "原始值"
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
											className: "px-3 py-2 text-right",
											children: "变换后"
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
											className: "px-3 py-2 text-right",
											children: "权重"
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
											className: "px-3 py-2 text-left",
											children: "状态"
										})
									] })
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("tbody", { children: mutation.data.constituents.map((row) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("tr", {
									className: "border-t border-[var(--market-grid)]",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
											className: "px-3 py-2 font-mono",
											children: row.ts_code
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
											className: "px-3 py-2 text-right tabular-nums",
											children: row.raw_weight_value
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
											className: "px-3 py-2 text-right tabular-nums",
											children: row.transformed_weight_value
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
											className: "px-3 py-2 text-right tabular-nums",
											children: formatIndexWeight(row.weight)
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
											className: "px-3 py-2",
											children: row.status === "suspended" ? "停牌" : "正常"
										})
									]
								}, row.ts_code)) })]
							}),
							mutation.data.exclusions?.length ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "border-t border-[var(--notice-warning-border)] bg-[var(--notice-warning-bg)] px-3 py-2 text-xs text-[var(--notice-warning-fg)]",
								children: ["排除：", mutation.data.exclusions.map((item) => `${item.ts_code ?? "未知"} ${item.reason ?? ""}`).join("；")]
							}) : null
						]
					}) : null
				]
			});
		}
		let scheduleGroupSequence = 0;
		function newScheduleGroup() {
			scheduleGroupSequence += 1;
			return {
				id: `custom-index-schedule-${scheduleGroupSequence}`,
				effectiveDate: "",
				codesText: ""
			};
		}
		function ScheduleDialog({ definition, onClose, onSaved }) {
			const [groups, setGroups] = (0, react.useState)([newScheduleGroup()]);
			const [errors, setErrors] = (0, react.useState)({});
			const mutation = useScheduleCustomIndexChanges();
			const submit = async () => {
				const nextErrors = {};
				const dates = /* @__PURE__ */ new Set();
				const payload = groups.map((group, index) => {
					const codes = normalizeCodes(group.codesText);
					if (!/^\d{4}-\d{2}-\d{2}$/.test(group.effectiveDate)) nextErrors[`date.${index}`] = "请选择生效日期";
					else if (dates.has(group.effectiveDate)) nextErrors[`date.${index}`] = "生效日期不能重复";
					else if (definition.current_constituent_date && group.effectiveDate <= definition.current_constituent_date) nextErrors[`date.${index}`] = `必须晚于 ${definition.current_constituent_date}`;
					dates.add(group.effectiveDate);
					if (!codes.length || codes.length > 200 || codes.some((code) => !/^\d{6}\.(SH|SZ|BJ)$/.test(code)) || new Set(codes).size !== codes.length) nextErrors[`codes.${index}`] = "请输入 1–200 个不重复的有效 A 股代码";
					return {
						effective_date: group.effectiveDate,
						codes: [...new Set(codes)].sort()
					};
				});
				setErrors(nextErrors);
				if (Object.keys(nextErrors).length) return;
				try {
					onSaved(await mutation.mutateAsync({
						indexCode: definition.index_code,
						input: { groups: payload }
					}));
				} catch {}
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Dialog, {
				title: "设置未来成分",
				detail: "这里仅替换尚未生效的日期组，不会立即重算历史。",
				onClose,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: groups.map((group, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-[var(--market-grid-strong)] bg-[var(--market-cell)] p-3",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "mb-2 flex justify-between text-sm font-medium",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: ["日期组 ", index + 1] }), groups.length > 1 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setGroups((current) => current.filter((_, itemIndex) => itemIndex !== index)),
										className: "text-xs text-[var(--notice-error-fg)]",
										children: "移除"
									}) : null]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
									type: "date",
									value: group.effectiveDate,
									onChange: (event) => setGroups((current) => current.map((item, itemIndex) => itemIndex === index ? {
										...item,
										effectiveDate: event.target.value
									} : item)),
									className: inputClass
								}),
								errors[`date.${index}`] ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									className: errorClass,
									children: errors[`date.${index}`]
								}) : null,
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("textarea", {
									rows: 4,
									value: group.codesText,
									onChange: (event) => setGroups((current) => current.map((item, itemIndex) => itemIndex === index ? {
										...item,
										codesText: event.target.value
									} : item)),
									placeholder: "000001.SZ\n600000.SH",
									className: `${inputClass} resize-y font-mono`
								}),
								errors[`codes.${index}`] ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									className: errorClass,
									children: errors[`codes.${index}`]
								}) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-xs text-[var(--market-text-muted)]",
									children: [normalizeCodes(group.codesText).length, "/200"]
								})
							]
						}, group.id))
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setGroups((current) => [...current, newScheduleGroup()]),
						className: "mt-3 rounded-md border border-dashed border-[var(--market-grid-strong)] px-3 py-2 text-sm text-[var(--status-info-badge)]",
						children: "＋ 添加日期组"
					}),
					mutation.isError ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ErrorBox, { children: mutation.error.message || "保存排期失败" }) : null,
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "mt-5 flex justify-end",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => void submit(),
							disabled: mutation.isPending,
							className: primaryClass,
							children: mutation.isPending ? "保存中…" : "保存未来成分"
						})
					})
				]
			});
		}
		function Dialog({ title, detail, onClose, children }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4",
				role: "presentation",
				onMouseDown: (event) => {
					if (event.target === event.currentTarget) onClose();
				},
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("dialog", {
					open: true,
					"aria-label": title,
					className: "m-0 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-[var(--market-grid-strong)] bg-[var(--market-canvas)] p-5 text-[var(--market-text-primary)] shadow-2xl",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("header", {
						className: "mb-5 flex items-start justify-between",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
							className: "text-lg font-semibold",
							children: title
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-[var(--market-text-secondary)]",
							children: detail
						})] }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onClose,
							className: "rounded p-2 text-xl hover:bg-[var(--market-cell-hover)]",
							children: "×"
						})]
					}), children]
				})
			});
		}
		function ErrorBox({ children }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "mt-4 rounded-md border border-[var(--notice-error-border)] bg-[var(--notice-error-bg)] px-3 py-2 text-sm text-[var(--notice-error-fg)]",
				children
			});
		}
		const inputClass = "mt-1 block w-full rounded-md border border-[var(--market-grid-strong)] bg-[var(--market-canvas)] px-3 py-2 text-sm outline-none focus:border-[var(--status-info-badge)]";
		const primaryClass = "rounded-md bg-[var(--status-info-badge)] px-4 py-2 text-sm font-medium text-[var(--badge-fg)] disabled:opacity-50";
		const errorClass = "mt-1 text-xs text-[var(--notice-error-fg)]";
		//#endregion
		//#region src/components/custom-index/CustomIndexWorkspace.tsx
		function CustomIndexWorkspace() {
			const definitionsQuery = useCustomIndexDefinitions();
			const definitions = definitionsQuery.data ?? [];
			const [scope, setScope] = (0, react.useState)("all");
			const [search, setSearch] = (0, react.useState)("");
			const [selectedCode, setSelectedCode] = (0, react.useState)(null);
			const [selectedDate, setSelectedDate] = (0, react.useState)(null);
			const [tab, setTab] = (0, react.useState)("daily");
			const [dialog, setDialog] = (0, react.useState)(null);
			const [catalogOpen, setCatalogOpen] = (0, react.useState)(false);
			const [actionMessage, setActionMessage] = (0, react.useState)(null);
			const [activeBuildJob, setActiveBuildJob] = (0, react.useState)(null);
			const readableDefinitions = (0, react.useMemo)(() => filterCustomIndexDefinitions(definitions, "all", ""), [definitions]);
			const filtered = (0, react.useMemo)(() => filterCustomIndexDefinitions(readableDefinitions, scope, search), [
				readableDefinitions,
				scope,
				search
			]);
			(0, react.useEffect)(() => {
				setSelectedCode((current) => resolveSelectedIndexCode(readableDefinitions, current));
			}, [readableDefinitions]);
			const definition = readableDefinitions.find((item) => item.index_code === selectedCode) ?? null;
			const dailyQuery = useCustomIndexDaily(selectedCode ?? "", void 0, void 0, Boolean(selectedCode));
			const historyBars = (0, react.useMemo)(() => dailyQuery.data ?? [], [dailyQuery.data]);
			const bars = (0, react.useMemo)(() => historyBars.slice(-60), [historyBars]);
			const publishedDates = (0, react.useMemo)(() => bars.map((item) => item.trade_date), [bars]);
			(0, react.useEffect)(() => {
				setSelectedDate((current) => resolvePublishedDate(publishedDates, current));
			}, [publishedDates]);
			(0, react.useEffect)(() => {
				if (!dailyQuery.isError || !selectedCode) return;
				const message = dailyQuery.error.message || "";
				if (message.includes("未知指数") || message.includes("无权") || message.includes("404")) {
					setSelectedCode(null);
					definitionsQuery.refetch();
				}
			}, [
				dailyQuery.error,
				dailyQuery.isError,
				definitionsQuery,
				selectedCode
			]);
			const selectedBar = bars.find((item) => item.trade_date === selectedDate) ?? null;
			const minuteQuery = useCustomIndexMinutes(selectedCode ?? "", selectedDate, tab === "minute");
			const constituentQuery = useCustomIndexConstituents(selectedCode ?? "", selectedDate, tab === "constituents" || dialog === "edit");
			const currentCodes = (0, react.useMemo)(() => constituentQuery.data?.map((item) => item.ts_code) ?? [], [constituentQuery.data]);
			const buildMutation = useBuildCustomIndex();
			const buildJobQuery = useCustomIndexBuildJob(activeBuildJob?.indexCode ?? "", activeBuildJob?.jobId ?? null);
			const lifecycleMutation = useCustomIndexLifecycle();
			const managementPending = buildMutation.isPending && buildMutation.variables === selectedCode || activeBuildJob?.indexCode === selectedCode && (buildJobQuery.data?.status === "queued" || buildJobQuery.data?.status === "running") || lifecycleMutation.isPending;
			(0, react.useEffect)(() => {
				const job = buildJobQuery.data;
				if (!job || !activeBuildJob || job.job_id !== activeBuildJob.jobId) return;
				if (job.status === "queued") {
					setActionMessage("构建任务已排队，等待 watcher 执行");
					return;
				}
				if (job.status === "running") {
					setActionMessage(`watcher 构建中：${job.completed_dates}/${job.total_dates || "?"}`);
					return;
				}
				if (job.status === "succeeded") {
					const summary = job.result_summary;
					setActionMessage(summary.from && summary.through ? `构建完成：${summary.from} 至 ${summary.through}，共 ${summary.dates_published ?? job.completed_dates} 个交易日` : `构建完成，共 ${job.completed_dates} 个交易日`);
					setActiveBuildJob(null);
					definitionsQuery.refetch();
					dailyQuery.refetch();
					return;
				}
				setActionMessage(job.error_detail || `构建任务${job.status}`);
				setActiveBuildJob(null);
				definitionsQuery.refetch();
			}, [
				activeBuildJob,
				buildJobQuery.data,
				dailyQuery,
				definitionsQuery
			]);
			const chooseDefinition = (code) => {
				setSelectedCode(code);
				setSelectedDate(null);
				setTab("daily");
				setCatalogOpen(false);
				setActionMessage(null);
			};
			const startBuild = async () => {
				if (!definition || !window.confirm(`将提交 watcher 异步重算「${definition.name}」最近最多 ${definition.scope === "system" ? 250 : 60} 个交易日，是否继续？`)) return;
				setActionMessage(null);
				try {
					const result = await buildMutation.mutateAsync(definition.index_code);
					setActiveBuildJob({
						indexCode: definition.index_code,
						jobId: result.job_id
					});
					setActionMessage(result.status === "running" ? "构建任务正在 watcher 执行" : "构建任务已提交，等待 watcher 执行");
				} catch (error) {
					setActionMessage(error instanceof Error ? error.message : "构建失败");
				}
			};
			const changeLifecycle = async (action) => {
				if (!definition) return;
				const label = action === "pause" ? "暂停" : "恢复";
				if (!window.confirm(`确认${label}「${definition.name}」？已发布数据仍可读取。`)) return;
				setActionMessage(null);
				try {
					await lifecycleMutation.mutateAsync({
						indexCode: definition.index_code,
						action
					});
					setActionMessage(`${label}成功`);
				} catch (error) {
					setActionMessage(error instanceof Error ? error.message : `${label}失败`);
				}
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "flex h-full min-h-0 flex-col bg-[var(--market-canvas)] text-[var(--market-text-primary)]",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("header", {
						className: "flex flex-wrap items-center justify-between gap-3 border-b border-[var(--market-grid-strong)] bg-[var(--market-header)] px-4 py-3",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h1", {
							className: "text-lg font-semibold",
							children: "自定义指数"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: "text-xs text-[var(--market-text-secondary)]",
							children: "系统指数与我的私有指数 · 已结算数据"
						})] }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => void definitionsQuery.refetch(),
								disabled: definitionsQuery.isFetching,
								className: secondaryButton,
								children: definitionsQuery.isFetching ? "刷新中…" : "刷新"
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setDialog("create"),
								className: primaryButton,
								children: "＋ 新建指数"
							})]
						})]
					}),
					definitionsQuery.isError && definitions.length ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "border-b border-[var(--notice-warning-border)] bg-[var(--notice-warning-bg)] px-4 py-2 text-xs text-[var(--notice-warning-fg)]",
						children: "指数目录刷新失败，当前继续展示缓存数据。"
					}) : null,
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "flex min-h-0 flex-1",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("aside", {
							className: "hidden w-64 shrink-0 flex-col border-r border-[var(--market-grid-strong)] bg-[var(--market-cell)] md:flex",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(CatalogControls, {
								scope,
								setScope,
								search,
								setSearch
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(CatalogList, {
								definitions: filtered,
								selectedCode,
								loading: definitionsQuery.isLoading,
								scope,
								onSelect: chooseDefinition,
								onCreate: () => setDialog("create")
							})]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("main", {
							className: "flex min-w-0 flex-1 flex-col",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "border-b border-[var(--market-grid-strong)] p-3 md:hidden",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setCatalogOpen((value) => !value),
									className: "flex w-full items-center justify-between rounded-md border border-[var(--market-grid-strong)] bg-[var(--market-cell)] px-3 py-2 text-left text-sm",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: definition ? `${definition.name} · ${definition.index_code}` : "选择指数" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: catalogOpen ? "收起" : "切换" })]
								}), catalogOpen ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "mt-2 max-h-80 overflow-hidden rounded-lg border border-[var(--market-grid-strong)] bg-[var(--market-cell)]",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(CatalogControls, {
										scope,
										setScope,
										search,
										setSearch
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(CatalogList, {
										definitions: filtered,
										selectedCode,
										loading: definitionsQuery.isLoading,
										scope,
										onSelect: chooseDefinition,
										onCreate: () => setDialog("create")
									})]
								}) : null]
							}), !definition ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PanelState, {
								text: definitionsQuery.isLoading ? "指数目录加载中…" : definitionsQuery.isError ? definitionsQuery.error.message || "指数目录加载失败" : "暂无可访问的指数，可以先新建一个私有指数",
								error: definitionsQuery.isError,
								onRetry: definitionsQuery.isError ? () => void definitionsQuery.refetch() : void 0
							}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DefinitionWorkspace, {
								definition,
								bars,
								historyBars,
								selectedBar,
								selectedDate,
								tab,
								dailyLoading: dailyQuery.isLoading,
								dailyFetching: dailyQuery.isFetching,
								dailyError: dailyQuery.isError ? dailyQuery.error.message || "日线加载失败" : null,
								minuteQuery,
								constituentQuery,
								managementPending: managementPending || definition.status === "building",
								actionMessage,
								onTab: setTab,
								onDate: setSelectedDate,
								onRetryDaily: () => void dailyQuery.refetch(),
								onDialog: setDialog,
								onBuild: () => void startBuild(),
								onLifecycle: (action) => void changeLifecycle(action)
							})]
						})]
					}),
					dialog === "create" || dialog === "edit" && definition ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(CustomIndexEditor, {
						definition: dialog === "edit" ? definition : null,
						currentCodes,
						onClose: () => setDialog(null),
						onSaved: (saved) => {
							setDialog(null);
							setSelectedCode(saved.index_code);
							setActionMessage("定义已保存，请预览并构建最近窗口");
						}
					}) : null,
					dialog === "preview" && definition ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PreviewDialog, {
						definition,
						initialDate: selectedDate ?? localDate(),
						onClose: () => setDialog(null)
					}) : null,
					dialog === "schedule" && definition ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ScheduleDialog, {
						definition,
						onClose: () => setDialog(null),
						onSaved: () => {
							setDialog(null);
							setActionMessage("未来成分已保存");
						}
					}) : null
				]
			});
		}
		function DefinitionWorkspace({ definition, bars, historyBars, selectedBar, selectedDate, tab, dailyLoading, dailyFetching, dailyError, minuteQuery, constituentQuery, managementPending, actionMessage, onTab, onDate, onRetryDaily, onDialog, onBuild, onLifecycle }) {
			const latestDate = bars[bars.length - 1]?.trade_date ?? null;
			const status = STATUS_PRESENTATION[definition.status];
			const manageable = canManageCustomIndex(definition);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "flex min-h-0 flex-1 flex-col",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "border-b border-[var(--market-grid-strong)] bg-[var(--market-cell)] px-4 py-3",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-2",
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
												className: "text-lg font-semibold",
												children: definition.name
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ScopeBadge, { scope: definition.scope }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)(StatusBadge, {
												tone: status.tone,
												children: status.label
											})
										]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "mt-1 font-mono text-xs text-[var(--market-text-secondary)]",
										children: [
											definition.index_code,
											" ·",
											" ",
											customIndexPublicationSummary(definition, latestDate)
										]
									}),
									definition.description ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-3xl text-sm text-[var(--market-text-secondary)]",
										children: definition.description
									}) : null
								] }), manageable ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-2",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											type: "button",
											disabled: managementPending,
											onClick: () => onDialog("edit"),
											className: secondaryButton,
											children: "编辑"
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											type: "button",
											disabled: managementPending,
											onClick: () => onDialog("preview"),
											className: secondaryButton,
											children: "预览权重"
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											type: "button",
											disabled: managementPending,
											onClick: () => onDialog("schedule"),
											className: secondaryButton,
											children: "未来成分"
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											type: "button",
											disabled: managementPending,
											onClick: onBuild,
											className: primaryButton,
											children: definition.status === "failed" ? "重试构建" : "构建最近窗口"
										}),
										definition.status === "active" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											type: "button",
											disabled: managementPending,
											onClick: () => onLifecycle("pause"),
											className: secondaryButton,
											children: "暂停"
										}) : definition.status === "paused" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											type: "button",
											disabled: managementPending,
											onClick: () => onLifecycle("resume"),
											className: secondaryButton,
											children: "恢复"
										}) : null
									]
								}) : null]
							}),
							definition.status !== "active" || definition.reason ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: `mt-3 rounded-md border px-3 py-2 text-xs ${status.tone === "error" ? "border-[var(--notice-error-border)] bg-[var(--notice-error-bg)] text-[var(--notice-error-fg)]" : status.tone === "info" ? "border-[var(--notice-info-border)] bg-[var(--notice-info-bg)] text-[var(--notice-info-fg)]" : "border-[var(--market-grid-strong)] bg-[var(--market-header)] text-[var(--market-text-secondary)]"}`,
								children: [latestDate && definition.status !== "active" ? `当前图表为最后成功发布数据（${latestDate}）。` : "", definition.reason ? ` ${definition.reason}` : ""]
							}) : null,
							actionMessage ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-md border border-[var(--market-grid-strong)] bg-[var(--market-header)] px-3 py-2 text-xs",
								children: actionMessage
							}) : null
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3 border-b border-[var(--market-grid-strong)] bg-[var(--market-header)] px-4 py-2",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "flex gap-1",
							children: [
								"daily",
								"minute",
								"constituents"
							].map((item) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => onTab(item),
								className: `rounded-md px-3 py-1.5 text-sm ${tab === item ? "bg-[var(--status-info-badge)] text-[var(--badge-fg)]" : "text-[var(--market-text-secondary)] hover:bg-[var(--market-cell-hover)]"}`,
								children: item === "daily" ? "日线" : item === "minute" ? "分时" : "成分"
							}, item))
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs text-[var(--market-text-secondary)]",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: selectedDate && selectedDate !== latestDate ? `历史日期 · 最新 ${latestDate ?? "--"}` : `最新发布 ${latestDate ?? "--"}` }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								type: "date",
								value: selectedDate ?? "",
								min: bars[0]?.trade_date,
								max: latestDate ?? void 0,
								disabled: !bars.length,
								onChange: (event) => {
									const date = resolvePublishedDate(bars.map((item) => item.trade_date), event.target.value);
									if (date) onDate(date);
								},
								className: "rounded-md border border-[var(--market-grid-strong)] bg-[var(--market-cell)] px-2 py-1.5"
							})]
						})]
					}),
					selectedBar ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-px border-b border-[var(--market-grid-strong)] bg-[var(--market-grid-strong)] sm:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Metric, {
								label: "收盘",
								value: selectedBar.close.toFixed(2)
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Metric, {
								label: "涨跌幅",
								value: formatPercent$1(selectedBar.pct_chg),
								tone: selectedBar.pct_chg >= 0 ? "rise" : "fall"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Metric, {
								label: "成交额",
								value: formatIndexAmount(selectedBar.amount)
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Metric, {
								label: "开 / 高 / 低",
								value: `${selectedBar.open.toFixed(2)} / ${selectedBar.high.toFixed(2)} / ${selectedBar.low.toFixed(2)}`
							})
						]
					}) : null,
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "min-h-0 flex-1 bg-[var(--market-canvas)] p-2",
						children: [
							tab === "daily" ? dailyLoading && !bars.length ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PanelState, { text: "日线加载中…" }) : dailyError && !bars.length ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PanelState, {
								text: dailyError,
								error: true,
								onRetry: onRetryDaily
							}) : !bars.length ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PanelState, { text: "定义已保存，尚无发布数据。所有者可以先预览权重，再构建最近窗口。" }) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "relative h-full min-h-72 rounded-lg border border-[var(--market-grid-strong)] bg-[var(--market-cell)] p-2",
								children: [dailyFetching && dailyError ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: "absolute right-3 top-3 z-10 rounded bg-[var(--notice-warning-bg)] px-2 py-1 text-xs text-[var(--notice-warning-fg)]",
									children: "刷新失败，显示缓存"
								}) : null, /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MarketIndexDailyChart, {
									bars,
									history: historyBars,
									selectedDate,
									indexName: definition.name,
									onSelect: onDate
								})]
							}) : null,
							tab === "minute" ? minuteQuery.isLoading ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PanelState, { text: "分时数据加载中…" }) : minuteQuery.isError ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PanelState, {
								text: minuteQuery.error.message || "分时数据加载失败",
								error: true,
								onRetry: () => void minuteQuery.refetch()
							}) : !minuteQuery.data?.length ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PanelState, { text: "该交易日暂无分时数据" }) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "h-full min-h-72 rounded-lg border border-[var(--market-grid-strong)] bg-[var(--market-cell)] p-2",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MarketIndexMinuteChart, {
									points: minuteQuery.data,
									preClose: selectedBar?.pre_close ?? NaN,
									indexName: definition.name
								})
							}) : null,
							tab === "constituents" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "h-full min-h-72 overflow-hidden rounded-lg border border-[var(--market-grid-strong)] bg-[var(--market-cell)]",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(CustomIndexConstituentTable, {
									rows: constituentQuery.data ?? [],
									loading: constituentQuery.isLoading,
									error: constituentQuery.isError ? constituentQuery.error.message || "成分加载失败" : null,
									onRetry: () => void constituentQuery.refetch()
								})
							}) : null
						]
					})
				]
			});
		}
		function CatalogControls({ scope, setScope, search, setSearch }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "space-y-3 border-b border-[var(--market-grid-strong)] p-3",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
					type: "search",
					value: search,
					onChange: (event) => setSearch(event.target.value),
					placeholder: "搜索名称或代码",
					className: "w-full rounded-md border border-[var(--market-grid-strong)] bg-[var(--market-canvas)] px-3 py-2 text-sm outline-none focus:border-[var(--status-info-badge)]"
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 gap-1 rounded-md bg-[var(--market-header)] p-1",
					children: [
						"all",
						"system",
						"user"
					].map((item) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setScope(item),
						className: `rounded px-2 py-1.5 text-xs ${scope === item ? "bg-[var(--market-cell-hover)] text-[var(--market-text-primary)]" : "text-[var(--market-text-secondary)]"}`,
						children: item === "all" ? "全部" : item === "system" ? "系统" : "我的"
					}, item))
				})]
			});
		}
		function CatalogList({ definitions, selectedCode, loading, scope, onSelect, onCreate }) {
			if (loading && !definitions.length) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "p-4 text-sm text-[var(--market-text-secondary)]",
				children: "指数目录加载中…"
			});
			if (!definitions.length) return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "p-4 text-center text-sm text-[var(--market-text-secondary)]",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children: scope === "user" ? "还没有创建私有指数" : "没有匹配的指数" }), scope === "user" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onCreate,
					className: "mt-3 text-[var(--status-info-badge)]",
					children: "＋ 新建指数"
				}) : null]
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "min-h-0 flex-1 overflow-y-auto p-2",
				children: definitions.map((definition) => {
					const status = STATUS_PRESENTATION[definition.status];
					return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onSelect(definition.index_code),
						className: `mb-1 w-full rounded-lg border px-3 py-2.5 text-left transition ${selectedCode === definition.index_code ? "border-[var(--status-info-badge)] bg-[var(--notice-info-bg)]" : "border-transparent hover:bg-[var(--market-cell-hover)]"}`,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "truncate text-sm font-medium",
								children: definition.name
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "mt-1 flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "truncate font-mono text-[11px] text-[var(--market-text-muted)]",
									children: definition.index_code
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
									className: "shrink-0 text-[10px] text-[var(--market-text-secondary)]",
									children: [
										definition.scope === "system" ? "SYSTEM" : "PRIVATE",
										" ·",
										" ",
										status.label
									]
								})]
							}),
							definition.current_constituent_date ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "mt-1 text-[10px] text-[var(--market-text-muted)]",
								children: ["发布至 ", definition.current_constituent_date]
							}) : null
						]
					}, definition.index_code);
				})
			});
		}
		function ScopeBadge({ scope }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className: "rounded border border-[var(--market-grid-strong)] px-1.5 py-0.5 text-[10px] tracking-wide text-[var(--market-text-secondary)]",
				children: scope === "system" ? "SYSTEM" : "PRIVATE"
			});
		}
		function StatusBadge({ tone, children }) {
			const styles = {
				success: "bg-emerald-500/15 text-emerald-400",
				info: "bg-sky-500/15 text-sky-400",
				neutral: "bg-slate-500/15 text-slate-400",
				error: "bg-red-500/15 text-red-400"
			}[tone];
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className: `rounded px-2 py-0.5 text-xs ${styles}`,
				children
			});
		}
		function Metric({ label, value, tone }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "bg-[var(--market-cell)] px-4 py-2",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "text-[10px] text-[var(--market-text-muted)]",
					children: label
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: `mt-0.5 text-sm font-semibold tabular-nums ${tone === "rise" ? "text-[var(--market-rise)]" : tone === "fall" ? "text-[var(--market-fall)]" : ""}`,
					children: value
				})]
			});
		}
		function localDate() {
			const now = /* @__PURE__ */ new Date();
			return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
		}
		const primaryButton = "rounded-md bg-[var(--status-info-badge)] px-3 py-1.5 text-sm font-medium text-[var(--badge-fg)] hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-45";
		const secondaryButton = "rounded-md border border-[var(--market-grid-strong)] bg-[var(--market-cell)] px-3 py-1.5 text-sm hover:bg-[var(--market-cell-hover)] disabled:cursor-not-allowed disabled:opacity-45";
		//#endregion
		//#region src/api/modules/financialPerformance.ts
		function unzipAnnouncements(table) {
			return table.rows.map((row) => {
				const record = {};
				table.columns.forEach((column, index) => {
					record[column] = row[index];
				});
				return record;
			});
		}
		function isObject$1(value) {
			return value !== null && typeof value === "object" && !Array.isArray(value);
		}
		function parseFinancialPerformanceReportsPayload(payload) {
			if (!isObject$1(payload) || !Array.isArray(payload.items)) throw new Error("财报季度接口响应格式错误，请检查后端路由配置");
			return payload;
		}
		function parseFinancialPerformanceDatesPayload(payload) {
			if (!isObject$1(payload) || !Array.isArray(payload.items)) throw new Error("财报事件日期接口响应格式错误，请检查后端路由配置");
			return payload;
		}
		function parseFinancialPerformanceAnnouncementsPayload(payload) {
			if (!isObject$1(payload) || !isObject$1(payload.table) || !Array.isArray(payload.table.columns) || !Array.isArray(payload.table.rows)) throw new Error("财报公告接口响应格式错误，请检查后端路由配置");
			return payload;
		}
		async function getFinancialPerformanceReports() {
			return parseFinancialPerformanceReportsPayload(await onclawRuntime.api.financialPerformance.reports());
		}
		async function getFinancialPerformanceAnnouncementDates(report) {
			return parseFinancialPerformanceDatesPayload(await onclawRuntime.api.financialPerformance.announcementDates(report));
		}
		async function getFinancialPerformanceAnnouncements(params) {
			return unzipAnnouncements(parseFinancialPerformanceAnnouncementsPayload(await onclawRuntime.api.financialPerformance.announcements(params)).table);
		}
		const financialPerformanceQueryKeys = {
			reports: onclawRuntime.queries.financialPerformance.reports().queryKey,
			announcementDates: (report) => onclawRuntime.queries.financialPerformance.announcementDates(report).queryKey,
			announcements: (params) => onclawRuntime.queries.financialPerformance.announcements(params).queryKey
		};
		//#endregion
		//#region src/components/financial-performance/model.ts
		const FORECAST_TYPE_OPTIONS = [
			{
				value: "preview",
				label: "业绩预告"
			},
			{
				value: "express",
				label: "业绩快报"
			},
			{
				value: "notice",
				label: "财报公告"
			}
		];
		const FORECAST_TYPE_LABELS = Object.fromEntries(FORECAST_TYPE_OPTIONS.map((item) => [item.value, item.label]));
		function finiteSnapshotNumber(value) {
			if (typeof value === "string" && value.trim() === "") return null;
			if (typeof value !== "number" && typeof value !== "string") return null;
			const parsed = typeof value === "number" ? value : Number(value);
			return Number.isFinite(parsed) ? parsed : null;
		}
		function snapshotPctChange(snapshot) {
			const values = snapshot;
			for (const field of [
				"pct_chg",
				"pct_change",
				"change_pct",
				"change_percent"
			]) {
				const value = finiteSnapshotNumber(values[field]);
				if (value !== null) return value;
			}
			return null;
		}
		function getPerformanceChangeFilterDates(availableMarketDates, baseDate, forwardTradingDays) {
			if (!baseDate) return [];
			const safeForwardTradingDays = Math.max(0, Math.floor(forwardTradingDays));
			const axis = [...new Set([...availableMarketDates, baseDate].filter(Boolean))].sort();
			const baseIndex = axis.indexOf(baseDate);
			if (baseIndex < 0) return [];
			return axis.slice(baseIndex, baseIndex + safeForwardTradingDays + 1);
		}
		function filterPerformanceAnnouncementsByAbsoluteChange(groups, snapshotWindow, availableMarketDates, baseDate, forwardTradingDays, absoluteChangeThreshold, snapshotRuntime) {
			if (absoluteChangeThreshold <= 0 || !snapshotWindow) return groups;
			const filterDates = new Set(getPerformanceChangeFilterDates(availableMarketDates, baseDate, forwardTradingDays));
			const matchedCodes = /* @__PURE__ */ new Set();
			const snapshots = snapshotWindowStateToRows(unzipSnapshotWindow(snapshotWindow));
			if (snapshotRuntime?.trade_date && filterDates.has(snapshotRuntime.trade_date)) for (const snapshot of Object.values(snapshotRuntime.snapshot)) snapshots.push({
				...snapshot,
				trade_date: snapshotRuntime.trade_date
			});
			for (const snapshot of snapshots) {
				if (!snapshot.ts_code || !snapshot.trade_date || !filterDates.has(snapshot.trade_date)) continue;
				const pctChange = snapshotPctChange(snapshot);
				if (pctChange === null) continue;
				if (Math.abs(pctChange) >= absoluteChangeThreshold) matchedCodes.add(normalizeStockCode(snapshot.ts_code));
			}
			return groups.filter((group) => matchedCodes.has(group.tsCode));
		}
		function buildPerformanceWindowAxis(availableMarketDates, eventDates, baseDate) {
			return [...new Set([
				...availableMarketDates,
				...eventDates,
				baseDate
			].filter(Boolean))].sort();
		}
		function getPerformanceDefaultStartIndex(axis, availableMarketDates, baseDate, windowSize) {
			const safeWindowSize = Math.max(1, windowSize);
			const latestMarketDate = availableMarketDates[availableMarketDates.length - 1] ?? "";
			const anchorIndex = Math.max(0, axis.indexOf(baseDate));
			return Boolean(latestMarketDate && axis.some((date) => date > latestMarketDate)) && Boolean(baseDate) && baseDate >= latestMarketDate ? Math.max(0, axis.length - safeWindowSize) : Math.max(0, anchorIndex - safeWindowSize + 1);
		}
		function aggregatePerformanceAnnouncements(announcements) {
			const grouped = /* @__PURE__ */ new Map();
			for (const announcement of announcements) {
				const tsCode = normalizeStockCode(announcement.stock_code);
				if (!tsCode) continue;
				const current = grouped.get(tsCode) ?? [];
				current.push(announcement);
				grouped.set(tsCode, current);
			}
			return [...grouped.entries()].map(([tsCode, records]) => {
				const sorted = [...records].sort((left, right) => left.id - right.id);
				const primary = sorted[sorted.length - 1];
				return {
					tsCode,
					stockName: primary.stock_name || tsCode,
					forecastType: primary.forecast_type,
					announcements: sorted,
					primary
				};
			}).sort((left, right) => {
				return FORECAST_TYPE_OPTIONS.findIndex((item) => item.value === left.forecastType) - FORECAST_TYPE_OPTIONS.findIndex((item) => item.value === right.forecastType) || left.tsCode.localeCompare(right.tsCode);
			});
		}
		function getPerformanceWindowCursorBounds(availableDates, baseDate, windowSize, eventDates = []) {
			const axis = buildPerformanceWindowAxis(availableDates, eventDates, baseDate);
			const safeWindowSize = Math.max(1, windowSize);
			const defaultStartIndex = getPerformanceDefaultStartIndex(axis, availableDates, baseDate, safeWindowSize);
			return {
				min: -defaultStartIndex,
				max: Math.max(0, axis.length - safeWindowSize) - defaultStartIndex
			};
		}
		function getPerformanceWindowCursorForStart(availableDates, baseDate, windowSize, rangeStart, eventDates = []) {
			const axis = [...new Set([...buildPerformanceWindowAxis(availableDates, eventDates, baseDate), rangeStart].filter(Boolean))].sort();
			const desiredStartIndex = Math.max(0, axis.indexOf(rangeStart));
			const defaultStartIndex = getPerformanceDefaultStartIndex(axis, availableDates, baseDate, windowSize);
			const bounds = getPerformanceWindowCursorBounds(availableDates, baseDate, windowSize, eventDates);
			return Math.max(bounds.min, Math.min(bounds.max, desiredStartIndex - defaultStartIndex));
		}
		function getPerformanceSnapshotCursor(cursor, availableMarketDates, eventDates, baseDate, windowSize) {
			const uiAxis = buildPerformanceWindowAxis(availableMarketDates, eventDates, baseDate);
			const safeWindowSize = Math.max(1, windowSize);
			const uiDefaultStart = getPerformanceDefaultStartIndex(uiAxis, availableMarketDates, baseDate, safeWindowSize);
			const uiStart = Math.max(0, Math.min(uiDefaultStart + cursor, Math.max(0, uiAxis.length - safeWindowSize)));
			const visibleDates = uiAxis.slice(uiStart, uiStart + safeWindowSize);
			const marketAxis = [...new Set([...availableMarketDates, baseDate].filter(Boolean))].sort();
			const marketDateSet = new Set(marketAxis);
			const firstVisibleMarketDate = visibleDates.find((date) => marketDateSet.has(date));
			if (!firstVisibleMarketDate) return cursor;
			const anchorIndex = Math.max(0, marketAxis.indexOf(baseDate));
			const backendDefaultStart = Math.max(0, anchorIndex - safeWindowSize + 1);
			return marketAxis.indexOf(firstVisibleMarketDate) - backendDefaultStart;
		}
		function buildPerformanceVisibleDateAxis(snapshotDates, availableMarketDates, eventDates, baseDate, windowSize, cursor) {
			const safeWindowSize = Math.max(1, windowSize);
			const axis = buildPerformanceWindowAxis(availableMarketDates, eventDates, baseDate);
			if (axis.length === 0 && snapshotDates.length > 0) return snapshotDates;
			if (axis.length <= safeWindowSize) return axis;
			const defaultStart = getPerformanceDefaultStartIndex(axis, availableMarketDates, baseDate, safeWindowSize);
			const start = Math.max(0, Math.min(defaultStart + cursor, axis.length - safeWindowSize));
			return axis.slice(start, start + safeWindowSize);
		}
		function buildPerformanceSections(groups, snapshotWindow, snapshotRuntime) {
			const snapshots = snapshotWindow ? snapshotWindowStateToRows(unzipSnapshotWindow(snapshotWindow)) : [];
			if (snapshotRuntime?.trade_date) {
				for (const snapshot of Object.values(snapshotRuntime.snapshot)) if (snapshot.ts_code) snapshots.push({
					...snapshot,
					trade_date: snapshotRuntime.trade_date
				});
			}
			const stocksByCode = /* @__PURE__ */ new Map();
			for (const group of groups) stocksByCode.set(group.tsCode, {
				ts_code: group.tsCode,
				name: group.stockName,
				consecutive_count: 0,
				limit_status: 0,
				snapshots: /* @__PURE__ */ new Map(),
				performanceMeta: {
					subtitle: [group.primary.performance_type, group.primary.forecast_subtype].filter(Boolean).join(" / "),
					reason: group.primary.data_description || "",
					pdfUrl: group.primary.announcement_pdf_url || void 0,
					announcementCount: group.announcements.length
				}
			});
			for (const snapshot of snapshots) {
				if (!snapshot.ts_code || !snapshot.trade_date) continue;
				stocksByCode.get(normalizeStockCode(snapshot.ts_code))?.snapshots.set(snapshot.trade_date, snapshot);
			}
			return FORECAST_TYPE_OPTIONS.map((option) => {
				const stocks = groups.filter((group) => group.forecastType === option.value).map((group) => stocksByCode.get(group.tsCode)).filter((stock) => Boolean(stock));
				return {
					id: option.value,
					title: FORECAST_TYPE_LABELS[option.value],
					subtitle: `${stocks.length}只股票`,
					color: GROUP_COLORS[option.value],
					stocks
				};
			}).filter((section) => section.stocks.length > 0);
		}
		//#endregion
		//#region src/components/financial-performance/FinancialPerformancePremium.tsx
		const REPORT_STORAGE_KEY = "financial-performance:selected-report";
		const WINDOW_SIZE = 9;
		const DEFAULT_FORWARD_TRADING_DAYS = 2;
		const DEFAULT_ABSOLUTE_CHANGE_THRESHOLD = 0;
		const MAX_FORWARD_TRADING_DAYS = 20;
		const MAX_ABSOLUTE_CHANGE_THRESHOLD = 20;
		function clampNumber(value, min, max) {
			if (!Number.isFinite(value)) return min;
			return Math.max(min, Math.min(max, value));
		}
		function readUrlSelection() {
			if (typeof window === "undefined") return {
				report: "",
				eventDate: "",
				forwardTradingDays: void 0,
				absoluteChangeThreshold: void 0
			};
			const params = new URLSearchParams(window.location.search);
			const forwardTradingDays = Number(params.get("forward_trading_days"));
			const absoluteChangeThreshold = Number(params.get("absolute_change_threshold"));
			return {
				report: params.get("report") || "",
				eventDate: params.get("event_date") || params.get("announcement_date") || "",
				forwardTradingDays: params.has("forward_trading_days") && Number.isFinite(forwardTradingDays) ? forwardTradingDays : void 0,
				absoluteChangeThreshold: params.has("absolute_change_threshold") && Number.isFinite(absoluteChangeThreshold) ? absoluteChangeThreshold : void 0
			};
		}
		function updateUrlSelection(report, eventDate, forwardTradingDays, absoluteChangeThreshold) {
			if (typeof window === "undefined") return;
			const url = new URL(window.location.href);
			if (report) url.searchParams.set("report", report);
			else url.searchParams.delete("report");
			url.searchParams.delete("announcement_date");
			if (eventDate) url.searchParams.set("event_date", eventDate);
			else url.searchParams.delete("event_date");
			url.searchParams.set("forward_trading_days", String(forwardTradingDays));
			url.searchParams.set("absolute_change_threshold", String(absoluteChangeThreshold));
			window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
		}
		function errorMessage$3(error) {
			return error instanceof Error ? error.message : "请求失败，请稍后重试";
		}
		function FinancialPerformancePremium() {
			const { visible } = usePageActivity();
			const { previewProfiles, previewProfilesHydrated, updatePreviewConfig, pageNavigationMeta } = useAppStore();
			const navigationMeta = pageNavigationMeta.performance;
			const performanceProfile = previewProfiles.performance;
			const cellDisplayConfig = performanceProfile.cellDisplayConfig;
			const showMinuteCurve = performanceProfile.showMinuteCurve;
			const settingsPanel = useSnapshotPreviewSettingsPanel("performance");
			const updatePerformanceConfig = (0, react.useCallback)((category, status, fields) => {
				updatePreviewConfig("performance", category, status, fields);
			}, [updatePreviewConfig]);
			const urlSelection = (0, react.useRef)(readUrlSelection());
			const initialUrlSelection = (0, react.useRef)({
				report: typeof navigationMeta?.report === "string" ? navigationMeta.report : urlSelection.current.report,
				eventDate: typeof navigationMeta?.eventDate === "string" ? navigationMeta.eventDate : urlSelection.current.eventDate
			});
			const reportChangedByUser = (0, react.useRef)(false);
			const [selectedReport, setSelectedReport] = (0, react.useState)(initialUrlSelection.current.report);
			const [baseDate, setBaseDate] = (0, react.useState)(initialUrlSelection.current.eventDate);
			const [refreshTarget, setRefreshTarget] = (0, react.useState)(null);
			const [windowCursor, setWindowCursor] = (0, react.useState)(0);
			const [forwardTradingDays, setForwardTradingDays] = (0, react.useState)(typeof navigationMeta?.forwardTradingDays === "number" ? navigationMeta.forwardTradingDays : urlSelection.current.forwardTradingDays ?? DEFAULT_FORWARD_TRADING_DAYS);
			const [absoluteChangeThreshold, setAbsoluteChangeThreshold] = (0, react.useState)(typeof navigationMeta?.absoluteChangeThreshold === "number" ? navigationMeta.absoluteChangeThreshold : urlSelection.current.absoluteChangeThreshold ?? DEFAULT_ABSOLUTE_CHANGE_THRESHOLD);
			const [applyServerTimelineFilter, setApplyServerTimelineFilter] = (0, react.useState)(Boolean(navigationMeta));
			const [notice, setNotice] = (0, react.useState)("");
			const runtimeToday = useMarketRuntimeSession().date;
			(0, react.useEffect)(() => {
				if (!navigationMeta) return;
				if (typeof navigationMeta.report === "string") setSelectedReport(navigationMeta.report);
				if (typeof navigationMeta.eventDate === "string") setBaseDate(navigationMeta.eventDate);
				if (typeof navigationMeta.forwardTradingDays === "number") setForwardTradingDays(navigationMeta.forwardTradingDays);
				if (typeof navigationMeta.absoluteChangeThreshold === "number") setAbsoluteChangeThreshold(navigationMeta.absoluteChangeThreshold);
				reportChangedByUser.current = false;
				setApplyServerTimelineFilter(true);
				setWindowCursor(0);
			}, [navigationMeta]);
			const reportsQuery = useQuery({
				...sdkQueryPolicy(onclawRuntime.queries.financialPerformance.reports()),
				queryFn: getFinancialPerformanceReports
			});
			const limitDatesQuery = useLimitDates();
			(0, react.useEffect)(() => {
				const reports = reportsQuery.data;
				if (!reports) return;
				const available = new Set(reports.items.map((item) => item.value));
				const urlReport = initialUrlSelection.current.report;
				const storedReport = typeof window === "undefined" ? "" : localStorage.getItem(REPORT_STORAGE_KEY) || "";
				const invalidUrlReport = Boolean(urlReport && !available.has(urlReport));
				const nextReport = invalidUrlReport ? reports.default_report || "" : available.has(selectedReport) ? selectedReport : available.has(storedReport) ? storedReport : reports.default_report || "";
				if (invalidUrlReport && nextReport) setNotice("所选季度已超出最近五季度范围，已切换到最新季度。");
				if (nextReport !== selectedReport) {
					setSelectedReport(nextReport);
					setBaseDate("");
					setWindowCursor(0);
				}
			}, [reportsQuery.data, selectedReport]);
			const reportIsAvailable = Boolean(reportsQuery.data?.items?.some((item) => item.value === selectedReport));
			const datesQuery = useQuery({
				...sdkQueryPolicy(onclawRuntime.queries.financialPerformance.announcementDates(selectedReport)),
				queryFn: () => getFinancialPerformanceAnnouncementDates(selectedReport),
				enabled: reportIsAvailable
			});
			(0, react.useEffect)(() => {
				const dates = datesQuery.data;
				if (!dates) return;
				const available = new Set(dates.items.map((item) => item.date));
				const urlDate = !reportChangedByUser.current && initialUrlSelection.current.report === selectedReport ? initialUrlSelection.current.eventDate : "";
				const nextDate = available.has(baseDate) ? baseDate : available.has(urlDate) ? urlDate : dates.default_event_date || dates.default_announcement_date || dates.items[0]?.date || "";
				if (nextDate !== baseDate) {
					setBaseDate(nextDate);
					setWindowCursor(0);
				}
			}, [
				baseDate,
				datesQuery.data,
				selectedReport
			]);
			(0, react.useEffect)(() => {
				if (!selectedReport) return;
				localStorage.setItem(REPORT_STORAGE_KEY, selectedReport);
				updateUrlSelection(selectedReport, baseDate, forwardTradingDays, absoluteChangeThreshold);
			}, [
				absoluteChangeThreshold,
				baseDate,
				forwardTradingDays,
				selectedReport
			]);
			const announcementParams = (0, react.useMemo)(() => ({
				report: selectedReport,
				event_date: baseDate,
				...applyServerTimelineFilter ? {
					forward_trading_days: forwardTradingDays,
					absolute_change_threshold: absoluteChangeThreshold
				} : {}
			}), [
				absoluteChangeThreshold,
				applyServerTimelineFilter,
				baseDate,
				forwardTradingDays,
				selectedReport
			]);
			const announcementDateSet = (0, react.useMemo)(() => new Set((datesQuery.data?.items ?? []).map((item) => item.date)), [datesQuery.data]);
			const announcementDateCounts = (0, react.useMemo)(() => new Map((datesQuery.data?.items ?? []).map((item) => [item.date, item.count])), [datesQuery.data]);
			const announcementEventDates = (0, react.useMemo)(() => (datesQuery.data?.items ?? []).map((item) => item.date), [datesQuery.data]);
			const baseDateIsAvailable = announcementDateSet.has(baseDate);
			const announcementsQuery = useQuery({
				...sdkQueryPolicy(onclawRuntime.queries.financialPerformance.announcements(announcementParams)),
				queryFn: () => getFinancialPerformanceAnnouncements(announcementParams),
				enabled: Boolean(reportIsAvailable && baseDateIsAvailable)
			});
			const aggregatedAnnouncements = (0, react.useMemo)(() => aggregatePerformanceAnnouncements(announcementsQuery.data ?? []), [announcementsQuery.data]);
			const stockCodes = (0, react.useMemo)(() => aggregatedAnnouncements.map((item) => item.tsCode), [aggregatedAnnouncements]);
			const changeFilterEnabled = absoluteChangeThreshold > 0;
			const changeFilterDates = (0, react.useMemo)(() => getPerformanceChangeFilterDates(limitDatesQuery.data ?? [], baseDate, forwardTradingDays), [
				baseDate,
				forwardTradingDays,
				limitDatesQuery.data
			]);
			const changeFilterParams = (0, react.useMemo)(() => ({
				base_date: baseDate,
				start_date: changeFilterDates[0] ?? baseDate,
				end_date: changeFilterDates[changeFilterDates.length - 1] ?? baseDate,
				cursor: forwardTradingDays,
				size: forwardTradingDays + 1,
				stock_scope: stockCodes
			}), [
				baseDate,
				changeFilterDates,
				forwardTradingDays,
				stockCodes
			]);
			const changeFilterQuery = useQuery({
				...sdkQueryPolicy(onclawRuntime.queries.snapshot.window(changeFilterParams)),
				queryFn: () => getIncrementalSnapshotWindow(changeFilterParams, changeFilterDates),
				enabled: Boolean(changeFilterEnabled && baseDateIsAvailable && stockCodes.length > 0)
			});
			const effectiveCellDisplayConfig = cellDisplayConfig;
			const requestedWindowSize = WINDOW_SIZE;
			const latestMarketDate = limitDatesQuery.data?.[Math.max(0, (limitDatesQuery.data?.length ?? 1) - 1)] ?? "";
			const snapshotCursor = (0, react.useMemo)(() => getPerformanceSnapshotCursor(windowCursor, limitDatesQuery.data ?? [], announcementEventDates, baseDate, requestedWindowSize), [
				announcementEventDates,
				baseDate,
				limitDatesQuery.data,
				requestedWindowSize,
				windowCursor
			]);
			const snapshotVisibleDates = (0, react.useMemo)(() => buildPerformanceVisibleDateAxis([], limitDatesQuery.data ?? [], announcementEventDates, baseDate, requestedWindowSize, windowCursor).filter((date) => (limitDatesQuery.data ?? []).includes(date)), [
				announcementEventDates,
				baseDate,
				limitDatesQuery.data,
				requestedWindowSize,
				windowCursor
			]);
			const snapshotParams = (0, react.useMemo)(() => ({
				base_date: baseDate,
				start_date: snapshotVisibleDates[0] ?? baseDate,
				end_date: snapshotVisibleDates[snapshotVisibleDates.length - 1] ?? baseDate,
				cursor: snapshotCursor,
				size: requestedWindowSize,
				stock_scope: stockCodes
			}), [
				baseDate,
				requestedWindowSize,
				snapshotCursor,
				snapshotVisibleDates,
				stockCodes
			]);
			const snapshotQuery = useQuery({
				...sdkQueryPolicy(onclawRuntime.queries.snapshot.window(snapshotParams)),
				queryFn: () => getIncrementalSnapshotWindow(snapshotParams, snapshotVisibleDates),
				enabled: Boolean(baseDateIsAvailable && stockCodes.length > 0),
				placeholderData: (previousData) => previousData?.base_date === baseDate ? previousData : void 0,
				refetchInterval: visible && baseDate && latestMarketDate < baseDate && isChinaMarketPollingWindow() ? 300 * 1e3 : false
			});
			const runtimeQuery = useMarketRuntimeSnapshot({ codes: stockCodes }, Boolean(baseDateIsAvailable && baseDate === runtimeToday && stockCodes.length > 0));
			const effectiveRuntime = baseDate === runtimeToday && runtimeQuery.data?.trade_date === runtimeToday ? runtimeQuery.data : null;
			const runtimeMatchesAnnouncementDate = Boolean(effectiveRuntime && effectiveRuntime.trade_date === baseDate);
			const displayedAnnouncements = (0, react.useMemo)(() => changeFilterEnabled && changeFilterQuery.data && !changeFilterQuery.error ? filterPerformanceAnnouncementsByAbsoluteChange(aggregatedAnnouncements, changeFilterQuery.data, limitDatesQuery.data ?? [], baseDate, forwardTradingDays, absoluteChangeThreshold, effectiveRuntime) : aggregatedAnnouncements, [
				absoluteChangeThreshold,
				aggregatedAnnouncements,
				baseDate,
				changeFilterEnabled,
				changeFilterQuery.data,
				changeFilterQuery.error,
				effectiveRuntime,
				forwardTradingDays,
				limitDatesQuery.data
			]);
			const curveFreeSections = (0, react.useMemo)(() => buildPerformanceSections(displayedAnnouncements, snapshotQuery.data, effectiveRuntime), [
				displayedAnnouncements,
				effectiveRuntime,
				snapshotQuery.data
			]);
			const curveFreeSnapshots = (0, react.useMemo)(() => curveFreeSections.flatMap((section) => section.stocks.flatMap((stock) => [...stock.snapshots.values()])), [curveFreeSections]);
			const miniCurves = useProgressiveMiniCurves({
				enabled: isMiniCurveLoadingEnabled({
					pageVisible: visible,
					settingsHydrated: previewProfilesHydrated,
					showMinuteCurve
				}),
				rows: curveFreeSnapshots,
				displayConfig: effectiveCellDisplayConfig,
				settledBeforeDate: !effectiveRuntime && (limitDatesQuery.data ?? []).includes(runtimeToday) ? "9999-12-31" : runtimeToday,
				runtimeDate: effectiveRuntime && effectiveRuntime.is_trading_day !== false ? effectiveRuntime.trade_date : null
			});
			const sections = (0, react.useMemo)(() => overlayMiniCurvesOnSections(curveFreeSections, miniCurves), [curveFreeSections, miniCurves]);
			const dateDataFetching = announcementsQuery.isFetching || snapshotQuery.isFetching;
			const dateDataError = announcementsQuery.error || snapshotQuery.error;
			const cellRegionState = resolveSnapshotPreviewCellRegionState({
				refreshTarget,
				initialLoading: !baseDate || announcementsQuery.isLoading || snapshotQuery.isLoading,
				error: dateDataError ? errorMessage$3(dateDataError) : null
			});
			const settledSectionsRef = (0, react.useRef)(sections);
			(0, react.useEffect)(() => {
				setRefreshTarget((current) => settleSnapshotPreviewDateRefresh(current, baseDate, dateDataFetching));
			}, [baseDate, dateDataFetching]);
			(0, react.useEffect)(() => {
				if (cellRegionState === "ready") settledSectionsRef.current = sections;
			}, [cellRegionState, sections]);
			const gridSections = cellRegionState === "ready" ? sections : settledSectionsRef.current;
			const visibleDates = (0, react.useMemo)(() => buildPerformanceVisibleDateAxis(snapshotQuery.data?.structure.ordered_dates ?? [], limitDatesQuery.data ?? [], announcementEventDates, baseDate, requestedWindowSize, windowCursor).map((date) => ({
				date,
				isBaseDate: date === baseDate,
				isActive: announcementDateSet.has(date),
				isRealtime: runtimeMatchesAnnouncementDate && date === effectiveRuntime?.trade_date
			})), [
				announcementDateSet,
				announcementEventDates,
				baseDate,
				effectiveRuntime?.trade_date,
				limitDatesQuery.data,
				requestedWindowSize,
				runtimeMatchesAnnouncementDate,
				snapshotQuery.data,
				windowCursor
			]);
			const windowCursorBounds = (0, react.useMemo)(() => {
				return getPerformanceWindowCursorBounds(limitDatesQuery.data ?? [], baseDate, requestedWindowSize, announcementEventDates);
			}, [
				announcementEventDates,
				baseDate,
				limitDatesQuery.data,
				requestedWindowSize
			]);
			const shiftWindow = (0, react.useCallback)((step) => {
				const nextCursor = Math.max(windowCursorBounds.min, Math.min(windowCursorBounds.max, windowCursor + step));
				if (nextCursor === windowCursor) return false;
				setWindowCursor(nextCursor);
				return true;
			}, [windowCursor, windowCursorBounds]);
			const handleDateClick = (0, react.useCallback)((date) => {
				if (!announcementDateSet.has(date) || date === baseDate) return;
				const rangeStart = visibleDates[0]?.date;
				const nextCursor = rangeStart ? getPerformanceWindowCursorForStart(limitDatesQuery.data ?? [], date, requestedWindowSize, rangeStart, announcementEventDates) : windowCursor;
				setRefreshTarget(beginSnapshotPreviewDateRefresh(date));
				setBaseDate(date);
				setWindowCursor(nextCursor);
			}, [
				announcementDateSet,
				announcementEventDates,
				baseDate,
				limitDatesQuery.data,
				requestedWindowSize,
				visibleDates,
				windowCursor
			]);
			const { handleStockClick, popupSelection, closeStockPopup } = useSnapshotPreviewStockClick(baseDate);
			const retry = (0, react.useCallback)(() => {
				reportsQuery.refetch();
				limitDatesQuery.refetch();
				if (selectedReport) datesQuery.refetch();
				if (baseDate) announcementsQuery.refetch();
				if (stockCodes.length > 0) invalidateIncrementalSnapshotWindow(snapshotParams);
				if (changeFilterEnabled && stockCodes.length > 0) invalidateIncrementalSnapshotWindow(changeFilterParams);
				if (stockCodes.length > 0) snapshotQuery.refetch();
				if (baseDate === runtimeToday && stockCodes.length > 0) runtimeQuery.refetch();
				if (changeFilterEnabled && stockCodes.length > 0) changeFilterQuery.refetch();
			}, [
				announcementsQuery,
				baseDate,
				changeFilterEnabled,
				changeFilterParams,
				changeFilterQuery,
				datesQuery,
				limitDatesQuery,
				reportsQuery,
				runtimeQuery,
				runtimeToday,
				selectedReport,
				snapshotParams,
				snapshotQuery,
				stockCodes.length
			]);
			const retryDateData = (0, react.useCallback)(() => {
				setRefreshTarget(beginSnapshotPreviewDateRefresh(baseDate));
				if (baseDate) announcementsQuery.refetch();
				if (stockCodes.length > 0) {
					invalidateIncrementalSnapshotWindow(snapshotParams);
					snapshotQuery.refetch();
				}
			}, [
				announcementsQuery,
				baseDate,
				snapshotParams,
				snapshotQuery,
				stockCodes.length
			]);
			const currentError = reportsQuery.error || limitDatesQuery.error || datesQuery.error;
			const isLoading = reportsQuery.isLoading || datesQuery.isLoading;
			const awaitingMarketData = Boolean(baseDate && latestMarketDate && baseDate > latestMarketDate && !runtimeMatchesAnnouncementDate);
			const constrainedToAnotherDate = Boolean(!awaitingMarketData && snapshotQuery.data?.access?.constrained);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "relative flex min-h-0 flex-1 flex-col bg-bg-primary",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 border-b border-border-theme bg-bg-secondary px-4 py-2.5 text-sm",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-text-secondary",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "季度" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("select", {
									value: selectedReport,
									onChange: (event) => {
										reportChangedByUser.current = true;
										setNotice("");
										setSelectedReport(event.target.value);
										setBaseDate("");
										setWindowCursor(0);
									},
									disabled: !reportsQuery.data?.items.length,
									className: "rounded border border-border-theme bg-bg-primary px-2 py-1.5 text-text-primary outline-none focus:border-[var(--accent)]",
									children: (reportsQuery.data?.items ?? []).map((item) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
										value: item.value,
										children: item.label
									}, item.value))
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "text-xs text-text-muted",
								children: baseDate ? `基准日 ${baseDate}` : ""
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-1 text-xs text-text-secondary",
								title: "按基准交易日 T 至后续第 n 个交易日筛选",
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "观察至 T+" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										type: "number",
										min: 0,
										max: MAX_FORWARD_TRADING_DAYS,
										step: 1,
										value: forwardTradingDays,
										onChange: (event) => {
											setApplyServerTimelineFilter(false);
											setForwardTradingDays(Math.floor(clampNumber(Number(event.target.value), 0, MAX_FORWARD_TRADING_DAYS)));
										},
										className: "w-12 rounded border border-border-theme bg-bg-primary px-1.5 py-1 text-center text-text-primary outline-none focus:border-[var(--accent)]",
										"aria-label": "后续交易日数量"
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "日" })
								]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-1 text-xs text-text-secondary",
								title: "阈值为 0% 时关闭筛选；上涨和下跌均按绝对值判断",
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "绝对涨跌幅 ≥" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										type: "number",
										min: 0,
										max: MAX_ABSOLUTE_CHANGE_THRESHOLD,
										step: .5,
										value: absoluteChangeThreshold,
										onChange: (event) => {
											setApplyServerTimelineFilter(false);
											setAbsoluteChangeThreshold(clampNumber(Number(event.target.value), 0, MAX_ABSOLUTE_CHANGE_THRESHOLD));
										},
										className: "w-14 rounded border border-border-theme bg-bg-primary px-1.5 py-1 text-center text-text-primary outline-none focus:border-[var(--accent)]",
										"aria-label": "绝对涨跌幅阈值"
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "%" })
								]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
								className: "ml-auto text-xs text-text-muted",
								children: [aggregatedAnnouncements.length > 0 ? `${displayedAnnouncements.length}只股票` : "", changeFilterEnabled && changeFilterQuery.isFetching ? " · 筛选中" : ""]
							})
						]
					}),
					notice && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "border-b border-[var(--notice-warning-border)] bg-[var(--notice-warning-bg)] px-4 py-2 text-xs text-[var(--notice-warning-fg)]",
						children: notice
					}),
					constrainedToAnotherDate && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "border-b border-[var(--notice-warning-border)] bg-[var(--notice-warning-bg)] px-4 py-2 text-xs text-[var(--notice-warning-fg)]",
						children: "当前账户的历史窗口权限受限，行情已按账户默认窗口展示。"
					}),
					awaitingMarketData && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "border-b border-[var(--notice-info-border)] bg-[var(--notice-info-bg)] px-4 py-2 text-xs text-[var(--notice-info-fg)]",
						children: "该事件日行情尚未产生，公告已提前展示；行情数据生成后将自动加载。"
					}),
					changeFilterEnabled && changeFilterQuery.error && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 border-b border-[var(--notice-warning-border)] bg-[var(--notice-warning-bg)] px-4 py-2 text-xs text-[var(--notice-warning-fg)]",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "筛选行情暂时不可用，当前显示全部标的。" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => void changeFilterQuery.refetch(),
							className: "font-semibold text-[var(--notice-warning-fg)] underline-offset-2 hover:underline",
							children: "重试筛选"
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "min-h-0 flex-1",
						children: currentError ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "flex h-full flex-col items-center justify-center gap-3 text-sm",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "text-red-400",
								children: errorMessage$3(currentError)
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: retry,
								className: "rounded bg-accent-theme px-4 py-2 text-[var(--accent-contrast)]",
								children: "重试"
							})]
						}) : reportsQuery.data && reportsQuery.data.items.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "flex h-full items-center justify-center text-sm text-text-muted",
							children: "暂无可用财报季度"
						}) : isLoading ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "flex h-full items-center justify-center text-sm text-text-muted",
							children: "正在加载业绩溢价数据..."
						}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SnapshotPreviewGrid, {
							sections: gridSections,
							visibleDates,
							baseDate,
							cellDisplayConfig: effectiveCellDisplayConfig,
							showMinuteCurve,
							isFetching: snapshotQuery.isFetching || runtimeQuery.isFetching,
							canShiftWindow: true,
							canSelectDate: true,
							isDateSelectable: (date) => announcementDateSet.has(date),
							onShiftWindow: shiftWindow,
							onDateClick: handleDateClick,
							onStockClick: handleStockClick,
							reasonHeader: "业绩描述",
							preserveHeaderWhenEmpty: true,
							emptyMessage: aggregatedAnnouncements.length === 0 ? "当前基准日暂无公告" : "当前筛选条件下暂无标的",
							cellRegionState,
							cellRegionMessage: cellRegionState === "error" && dateDataError ? errorMessage$3(dateDataError) : void 0,
							onCellRegionRetry: retryDateData,
							getSubtitle: (stock) => stock.performanceMeta?.subtitle || "-",
							getReason: (stock) => stock.performanceMeta?.reason || "",
							renderDateLabel: (dateColumn) => {
								const count = announcementDateCounts.get(dateColumn.date);
								return count == null ? dateColumn.date.slice(5) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
									className: "flex flex-col items-center leading-tight",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: dateColumn.date.slice(5) }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: "text-[10px] opacity-80",
										children: dateColumn.isRealtime ? `实时 · ${count}条` : `${count}条`
									})]
								});
							},
							renderReason: (stock) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "flex min-w-0 w-full items-center gap-2",
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: "min-w-0 flex-1 truncate",
										children: stock.performanceMeta?.reason || "-"
									}),
									(stock.performanceMeta?.announcementCount ?? 0) > 1 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
										className: "shrink-0 rounded bg-bg-primary px-1 text-[10px] text-text-muted",
										children: [stock.performanceMeta?.announcementCount, "条"]
									}),
									stock.performanceMeta?.pdfUrl && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: (event) => {
											event.stopPropagation();
											platformAPI.externalNavigator.openExternal(stock.performanceMeta?.pdfUrl || "");
										},
										className: "shrink-0 text-text-gold hover:underline",
										children: "原文"
									})
								]
							})
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: settingsPanel.open,
						className: "absolute bottom-5 right-5 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent-theme text-[var(--accent-contrast)] shadow-lg transition-colors hover:bg-[var(--accent-hover)]",
						"aria-label": "打开业绩参数设置",
						title: "业绩参数设置",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
							className: "h-5 w-5",
							fill: "none",
							stroke: "currentColor",
							viewBox: "0 0 24 24",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeWidth: 2,
								d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeWidth: 2,
								d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							})]
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SettingsPanel, {
						isOpen: settingsPanel.isOpen,
						onClose: settingsPanel.close,
						config: cellDisplayConfig,
						onConfigChange: updatePerformanceConfig,
						lockedFields: [],
						isSaving: settingsPanel.isSaving,
						saveError: settingsPanel.saveError
					}),
					popupSelection && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(LadderStockContextModal, {
						stock: popupSelection.stock,
						anchorDate: popupSelection.anchorDate,
						onClose: closeStockPopup
					})
				]
			});
		}
		//#endregion
		//#region src/api/modules/marketDashboard.ts
		const MARKET_DASHBOARD_FIELDS = [
			"data_state",
			"source",
			"distribution_counts",
			"up_count",
			"down_count",
			"limit_up_count",
			"limit_up_touched_count",
			"broken_limit_open_count",
			"limit_down_current_count",
			"one_board_count",
			"two_board_count",
			"three_board_count",
			"four_board_count",
			"five_plus_board_count",
			"one_advancement_rate",
			"two_advancement_rate",
			"three_advancement_rate",
			"four_advancement_rate",
			"five_plus_advancement_rate",
			"turnover",
			"predicted_turnover",
			"turnover_change",
			"turnover_ratio",
			"intraday_turnover",
			"intraday_turnover_change",
			"previous_consecutive_board_sentiment",
			"previous_broken_board_temperature",
			"intraday_previous_consecutive_board_sentiment",
			"intraday_previous_broken_board_temperature"
		];
		const BOARD_LEVELS = [
			"one",
			"two",
			"three",
			"four",
			"five_plus"
		];
		function record(value) {
			return value !== null && typeof value === "object" && !Array.isArray(value) ? value : null;
		}
		function numberOrNull(value) {
			if (value === null || value === void 0 || value === "") return null;
			const numeric = Number(value);
			return Number.isFinite(numeric) ? numeric : null;
		}
		function numericSeries(value, expectedLength) {
			return Array.isArray(value) && value.length === expectedLength ? value.map(numberOrNull) : [];
		}
		function normalizeMarketDashboardDay(value) {
			const row = record(value);
			if (!row || typeof row.trade_date !== "string" || !row.trade_date) return null;
			const state = String(row.data_state ?? "partial");
			const dataState = [
				"complete",
				"partial",
				"pending",
				"stale",
				"settled",
				"unavailable"
			].includes(state) ? state : "partial";
			const volume = {
				turnover: numberOrNull(row.turnover),
				predictedTurnover: numberOrNull(row.predicted_turnover),
				turnoverChange: numberOrNull(row.turnover_change),
				turnoverRatio: numberOrNull(row.turnover_ratio)
			};
			return {
				snapshot: {
					tradeDate: row.trade_date,
					source: row.source === "runtime" ? "runtime" : "settled",
					dataState,
					distribution: numericSeries(row.distribution_counts, 21),
					upCount: numberOrNull(row.up_count),
					downCount: numberOrNull(row.down_count),
					limitUpCount: numberOrNull(row.limit_up_count),
					limitUpTouchedCount: numberOrNull(row.limit_up_touched_count),
					brokenLimitOpenCount: numberOrNull(row.broken_limit_open_count),
					limitDownCurrentCount: numberOrNull(row.limit_down_current_count),
					boardCounts: Object.fromEntries(BOARD_LEVELS.map((level) => [level, numberOrNull(row[`${level}_board_count`])])),
					advancementRates: Object.fromEntries(BOARD_LEVELS.map((level) => [level, numberOrNull(row[`${level}_advancement_rate`])])),
					volume
				},
				turnover: {
					...volume,
					intradayTurnover: numericSeries(row.intraday_turnover, 241),
					intradayTurnoverChange: numericSeries(row.intraday_turnover_change, 241)
				},
				sentiment: {
					value: numberOrNull(row.previous_consecutive_board_sentiment),
					intraday: numericSeries(row.intraday_previous_consecutive_board_sentiment, 240)
				},
				temperature: {
					value: numberOrNull(row.previous_broken_board_temperature),
					intraday: numericSeries(row.intraday_previous_broken_board_temperature, 240)
				}
			};
		}
		async function getMarketDashboardDay(tradeDate) {
			return normalizeMarketDashboardDay(await onclawRuntime.api.marketDashboard.day(tradeDate, MARKET_DASHBOARD_FIELDS));
		}
		//#endregion
		//#region src/components/market-dashboard/model.ts
		function buildLineSegments(values, width, height, minValue, maxValue) {
			const finite = values.filter((value) => typeof value === "number" && Number.isFinite(value));
			if (finite.length === 0 || width <= 0 || height <= 0) return [];
			const min = minValue ?? Math.min(...finite);
			const range = (maxValue ?? Math.max(...finite)) - min || 1;
			const divisor = Math.max(1, values.length - 1);
			const segments = [];
			let active = [];
			values.forEach((value, index) => {
				if (value === null || !Number.isFinite(value)) {
					if (active.length > 0) segments.push(active);
					active = [];
					return;
				}
				active.push({
					x: index / divisor * width,
					y: height - (value - min) / range * height
				});
			});
			if (active.length > 0) segments.push(active);
			return segments;
		}
		function pointsAttribute(points) {
			return points.map((point) => `${point.x.toFixed(2)},${point.y.toFixed(2)}`).join(" ");
		}
		function latestFiniteValue(values) {
			for (let index = values.length - 1; index >= 0; index -= 1) {
				const value = values[index];
				if (value !== null && Number.isFinite(value)) return value;
			}
			return null;
		}
		function percentage(numerator, denominator) {
			if (numerator === null || denominator === null || denominator <= 0) return null;
			return numerator / denominator * 100;
		}
		//#endregion
		//#region src/components/market-dashboard/MarketDashboardCards.tsx
		const LEVELS = [
			{
				key: "one",
				label: "一板"
			},
			{
				key: "two",
				label: "二板"
			},
			{
				key: "three",
				label: "三板"
			},
			{
				key: "four",
				label: "四板"
			},
			{
				key: "five_plus",
				label: "高度板"
			}
		];
		function Card({ title, children, className = "" }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				className: `overflow-hidden rounded-xl border border-[var(--market-grid)] bg-[var(--market-cell)] shadow-sm ${className}`,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("header", {
					className: "flex items-center gap-2 border-b border-[var(--market-grid)] px-4 py-3",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: "h-5 w-1 rounded-full bg-[var(--status-info-badge)]" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
						className: "text-base font-semibold text-[var(--market-text-primary)]",
						children: title
					})]
				}), children]
			});
		}
		function EmptyCard({ message }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "flex min-h-40 items-center justify-center px-4 text-sm text-[var(--market-text-muted)]",
				children: message
			});
		}
		function DistributionCard({ snapshot }) {
			const counts = snapshot.distribution;
			const hasDistribution = counts.length === 21 && counts.some((value) => value !== null);
			const max = Math.max(1, ...counts.map((value) => value ?? 0));
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Card, {
				title: "涨跌分布",
				className: "h-full",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "p-4",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-4 gap-2",
						"aria-label": "核心指标",
						children: [
							{
								label: "上涨",
								value: snapshot.upCount,
								tone: "rise"
							},
							{
								label: "下跌",
								value: snapshot.downCount,
								tone: "fall"
							},
							{
								label: "涨停",
								value: snapshot.limitUpCount,
								tone: "rise"
							},
							{
								label: "跌停",
								value: snapshot.limitDownCurrentCount,
								tone: "fall"
							}
						].map((metric) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "min-w-0 rounded-md bg-[var(--market-frozen)] px-2 py-1.5 text-center",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "block text-[11px] text-[var(--market-text-secondary)]",
								children: metric.label
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
								className: `block text-base font-semibold tabular-nums ${metric.tone === "rise" ? "text-[var(--market-rise-badge)]" : "text-[var(--market-fall-badge)]"}`,
								children: [display$1(metric.value), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "ml-0.5 text-[10px] font-normal",
									children: "家"
								})]
							})]
						}, metric.label))
					}), hasDistribution ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "mt-3 overflow-x-auto pb-1",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "grid min-w-[441px] grid-cols-[repeat(21,minmax(0,1fr))] gap-0.5",
							children: counts.map((value, index) => {
								const percent = index - 10;
								const height = value === null ? 0 : Math.max(2, value / max * 68);
								const color = percent < 0 ? "var(--market-fall-badge)" : percent > 0 ? "var(--market-rise-badge)" : "var(--status-neutral-badge)";
								const label = `${percent > 0 ? "+" : ""}${percent}%`;
								return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "min-w-0 text-center",
									title: `${label}：${value ?? "暂无"} 家`,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "flex h-24 flex-col items-center justify-end border-b border-[var(--market-grid-strong)]",
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "mb-1 text-[9px] leading-3 tabular-nums text-[var(--market-text-secondary)]",
											children: value === null ? "—" : value
										}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "w-full rounded-t-sm opacity-90",
											style: {
												height,
												backgroundColor: color
											}
										})]
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: "mt-1 text-[9px] tabular-nums text-[var(--market-text-muted)]",
										children: label
									})]
								}, percent);
							})
						})
					}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(EmptyCard, { message: "当前日期暂无涨跌分布数据" })]
				})
			});
		}
		function TurnoverCard({ snapshot, turnover }) {
			const gradientId = (0, react.useId)().replace(/:/g, "");
			const summary = snapshot.volume;
			const amounts = turnover.intradayTurnover;
			const changes = turnover.intradayTurnoverChange;
			const validAmounts = amounts.filter((value) => value !== null && Number.isFinite(value));
			const validChanges = changes.filter((value) => value !== null && Number.isFinite(value));
			const prediction = summary.predictedTurnover !== null && summary.predictedTurnover >= 0 ? summary.predictedTurnover : null;
			const chartMax = Math.max(1, ...validAmounts, prediction ?? 0) * 1.06;
			const left = 46;
			const plotWidth = 840;
			const mainTop = 18;
			const mainHeight = 190;
			const mainBottom = 208;
			const changeZero = 309;
			const changeHeight = 34;
			const changeMax = Math.max(1, ...validChanges.map((value) => Math.abs(value)));
			const xAt = (index) => left + index / 240 * plotWidth;
			const yAt = (value) => mainBottom - value / chartMax * mainHeight;
			const segments = buildLineSegments(amounts, plotWidth, mainHeight, 0, chartMax);
			const latestPercent = summary.turnoverRatio;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Card, {
				title: "市场量能",
				className: "h-full",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "p-4",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "text-sm font-medium text-[var(--market-text-primary)]",
							children: ["实际量能", /* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", {
								className: "ml-2 text-xl tabular-nums",
								children: formatYi(summary?.turnover ?? null)
							})]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-[var(--market-text-secondary)]",
							children: [
								"今日预测量能 ",
								formatYi(summary?.predictedTurnover ?? null),
								summary?.turnoverChange !== null && summary?.turnoverChange !== void 0 ? ` · 较昨日 ${signed(formatYiNumber(summary.turnoverChange))}亿` : ""
							]
						})] }), latestPercent !== null ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: `rounded-full px-2.5 py-1 text-xs font-medium ${latestPercent >= 0 ? "bg-[var(--market-limit-up-bg)] text-[var(--market-limit-up-fg)]" : "bg-[var(--market-limit-down-bg)] text-[var(--market-limit-down-fg)]"}`,
							children: [
								"同期 ",
								signed(latestPercent.toFixed(2)),
								"%"
							]
						}) : null]
					}), segments.length === 0 && validChanges.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(EmptyCard, { message: "当前日期暂无分时量能数据" }) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "mt-4 overflow-hidden",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
							viewBox: "0 0 1000 360",
							className: "h-72 w-full",
							role: "img",
							"aria-label": "今日累计成交额曲线、预测成交额刻度及较昨同期差额柱状副图",
							preserveAspectRatio: "none",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("linearGradient", {
									id: gradientId,
									x1: "0",
									y1: "0",
									x2: "0",
									y2: "1",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
										offset: "0%",
										stopColor: "var(--market-rise-badge)",
										stopOpacity: "0.18"
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
										offset: "100%",
										stopColor: "var(--market-rise-badge)",
										stopOpacity: "0"
									})]
								}) }),
								[
									.25,
									.5,
									.75
								].map((fraction) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("line", {
									x1: left,
									x2: 886,
									y1: yAt(chartMax * fraction),
									y2: yAt(chartMax * fraction),
									stroke: "var(--market-grid)",
									strokeDasharray: "4 5"
								}, fraction)),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("line", {
									x1: left,
									x2: 886,
									y1: mainBottom,
									y2: mainBottom,
									stroke: "var(--market-grid-strong)"
								}),
								prediction !== null ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
									"aria-label": `预测成交额 ${formatYi(prediction)}`,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("line", {
										x1: left,
										x2: 886,
										y1: yAt(prediction),
										y2: yAt(prediction),
										stroke: "var(--status-info-badge)",
										strokeWidth: "1.5",
										strokeDasharray: "6 4"
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("text", {
										x: 894,
										y: yAt(prediction) + 4,
										fill: "var(--status-info-badge)",
										fontSize: "11",
										children: ["预估 ", formatYi(prediction)]
									})]
								}) : null,
								segments.map((points, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("polygon", {
									points: pointsAttribute([
										{
											x: points[0].x + left,
											y: mainBottom
										},
										...points.map((point) => ({
											x: point.x + left,
											y: point.y + mainTop
										})),
										{
											x: points[points.length - 1].x + left,
											y: mainBottom
										}
									]),
									fill: `url(#${gradientId})`
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("polyline", {
									points: pointsAttribute(points.map((point) => ({
										x: point.x + left,
										y: point.y + mainTop
									}))),
									fill: "none",
									stroke: "var(--market-rise-badge)",
									strokeWidth: "2",
									strokeLinejoin: "round",
									strokeLinecap: "round",
									vectorEffect: "non-scaling-stroke"
								})] }, `${points[0]?.x ?? 0}-${index}`)),
								segments.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("text", {
									x: "500",
									y: "112",
									textAnchor: "middle",
									fill: "var(--market-text-muted)",
									fontSize: "13",
									children: "暂无累计成交额曲线"
								}) : null,
								[
									0,
									120,
									240
								].map((index) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("text", {
									x: xAt(index),
									y: "232",
									textAnchor: index === 0 ? "start" : index === 240 ? "end" : "middle",
									fill: "var(--market-text-secondary)",
									fontSize: "11",
									children: index === 0 ? "09:30" : index === 120 ? "11:30/13:00" : "15:00"
								}, index)),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("text", {
									x: left,
									y: "266",
									fill: "var(--market-text-secondary)",
									fontSize: "11",
									children: "较昨同期差额 · 亿"
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("line", {
									x1: left,
									x2: 886,
									y1: changeZero,
									y2: changeZero,
									stroke: "var(--market-grid-strong)",
									strokeDasharray: "3 3"
								}),
								changes.map((change, index) => {
									if (change === null || !Number.isFinite(change)) return null;
									const height = Math.max(change === 0 ? 0 : 1, Math.abs(change) / changeMax * changeHeight);
									return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
										x: xAt(index) - 1.5,
										y: change >= 0 ? changeZero - height : changeZero,
										width: "3",
										height,
										fill: change >= 0 ? "var(--market-rise-badge)" : "var(--market-fall-badge)",
										opacity: "0.85"
									}, `minute-x-${xAt(index)}`);
								})
							]
						})
					})]
				})
			});
		}
		function IndicatorCurveCard({ title, sourceLabel, indicator, color }) {
			const values = indicator.intraday;
			const finite = values.filter((value) => value !== null && Number.isFinite(value));
			const latest = indicator.value ?? latestFiniteValue(values);
			const minValue = finite.length > 0 ? Math.min(0, ...finite) : 0;
			const maxValue = finite.length > 0 ? Math.max(1, ...finite) : 1;
			const range = maxValue - minValue || 1;
			const left = 42;
			const top = 18;
			const plotWidth = 350;
			const plotHeight = 132;
			const segments = buildLineSegments(values, plotWidth, plotHeight, minValue, maxValue);
			const latestSegment = segments[segments.length - 1];
			const latestPoint = latestSegment?.[latestSegment.length - 1];
			const latestSlot = values.reduce((found, value, index) => value !== null && Number.isFinite(value) ? index : found, -1);
			const yAt = (value) => 150 - (value - minValue) / range * plotHeight;
			const guides = [
				maxValue,
				minValue + range / 2,
				minValue
			];
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Card, {
				title,
				className: "h-full",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "p-4",
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "text-xs text-[var(--market-text-secondary)]",
								children: sourceLabel
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "mt-1 text-2xl font-semibold tabular-nums text-[var(--market-text-primary)]",
								children: formatIndicator(latest)
							})] }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-[var(--market-frozen)] px-2.5 py-1 text-[11px] text-[var(--market-text-secondary)]",
								children: latestSlot >= 0 ? `第 ${latestSlot + 1} / 240 点` : "暂无分时"
							})]
						}),
						segments.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(EmptyCard, { message: `当前日期暂无${title}分时数据` }) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "mt-3 overflow-hidden rounded-lg border border-[var(--market-grid)] bg-[var(--market-frozen)] px-2 py-2",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
								viewBox: "0 0 420 190",
								className: "h-48 w-full",
								role: "img",
								"aria-label": `${title} 240 点原始公式值曲线`,
								preserveAspectRatio: "none",
								children: [
									guides.map((value, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("line", {
										x1: left,
										x2: 392,
										y1: yAt(value),
										y2: yAt(value),
										stroke: "var(--market-grid)",
										strokeDasharray: index === 1 ? "4 4" : void 0
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("text", {
										x: left - 6,
										y: yAt(value) + 4,
										textAnchor: "end",
										fill: "var(--market-text-muted)",
										fontSize: "10",
										children: formatAxis(value)
									})] }, `${title}-guide-${value}`)),
									segments.map((points) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("polyline", {
										points: pointsAttribute(points.map((point) => ({
											x: point.x + left,
											y: point.y + top
										}))),
										fill: "none",
										stroke: color,
										strokeWidth: "2.2",
										strokeLinejoin: "round",
										strokeLinecap: "round",
										vectorEffect: "non-scaling-stroke"
									}, `${title}-segment-${points[0]?.x ?? "empty"}`)),
									latestPoint ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
										cx: latestPoint.x + left,
										cy: latestPoint.y + top,
										r: "3.5",
										fill: color,
										stroke: "var(--market-cell)",
										strokeWidth: "1.5",
										vectorEffect: "non-scaling-stroke"
									}) : null,
									[
										{
											x: left,
											label: "09:30",
											anchor: "start"
										},
										{
											x: 217,
											label: "11:30/13:00",
											anchor: "middle"
										},
										{
											x: 392,
											label: "15:00",
											anchor: "end"
										}
									].map((tick) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("text", {
										x: tick.x,
										y: "174",
										textAnchor: tick.anchor,
										fill: "var(--market-text-secondary)",
										fontSize: "10",
										children: tick.label
									}, tick.label))
								]
							})
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "mt-2 flex items-center justify-between text-[11px] text-[var(--market-text-muted)]",
							children: finite.length > 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
								className: "tabular-nums",
								children: [
									"区间 ",
									formatIndicator(Math.min(...finite)),
									" ～ ",
									formatIndicator(Math.max(...finite))
								]
							}) : null
						})
					]
				})
			});
		}
		function SentimentCard({ indicator }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IndicatorCurveCard, {
				title: "市场情绪",
				sourceLabel: "情绪分",
				indicator,
				color: "var(--market-rise-badge)"
			});
		}
		function TemperatureCard({ indicator }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IndicatorCurveCard, {
				title: "市场温度",
				sourceLabel: "温度",
				indicator,
				color: "var(--status-warning-badge)"
			});
		}
		function LimitPerformanceCard({ snapshot }) {
			const brokenRate = percentage(snapshot.brokenLimitOpenCount, snapshot.limitUpTouchedCount);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Card, {
				title: "涨停表现",
				className: "h-full",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "p-4",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-2 lg:grid-cols-4",
						children: [
							{
								label: "涨停板",
								value: display$1(snapshot.limitUpCount),
								suffix: "家",
								tone: "rise"
							},
							{
								label: "封板率",
								value: formatPercent(snapshot.advancementRates.one),
								suffix: "",
								tone: "rise"
							},
							{
								label: "跌停板",
								value: display$1(snapshot.limitDownCurrentCount),
								suffix: "家",
								tone: "fall"
							},
							{
								label: "涨停破板率",
								value: formatPercent(brokenRate),
								suffix: "",
								tone: "neutral"
							}
						].map((item) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "rounded-lg bg-[var(--market-frozen)] p-3",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "text-xs text-[var(--market-text-secondary)]",
								children: item.label
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: `mt-1 text-xl font-semibold tabular-nums ${item.tone === "rise" ? "text-[var(--market-rise-badge)]" : item.tone === "fall" ? "text-[var(--market-fall-badge)]" : "text-[var(--market-text-primary)]"}`,
								children: [item.value, /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "ml-1 text-xs font-normal",
									children: item.suffix
								})]
							})]
						}, item.label))
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "mt-3 overflow-x-auto rounded-lg border border-[var(--market-grid)]",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[400px] table-fixed border-collapse text-center text-xs sm:text-sm",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("thead", {
								className: "bg-[var(--market-header)] text-[var(--market-text-secondary)]",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("tr", { children: LEVELS.map(({ key, label }) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
									className: "border-r border-[var(--market-grid)] px-1 py-2 last:border-r-0",
									children: label
								}, key)) })
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("tbody", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("tr", {
								className: "text-xl font-medium text-[var(--market-text-primary)]",
								children: LEVELS.map(({ key }) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
									className: "border-r border-t border-[var(--market-grid)] px-1 py-2 tabular-nums last:border-r-0",
									children: display$1(snapshot.boardCounts[key])
								}, key))
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("tr", {
								className: "text-xs text-[var(--market-text-secondary)]",
								children: LEVELS.map(({ key }) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("td", {
									className: "border-r border-t border-[var(--market-grid)] px-1 py-2 last:border-r-0",
									children: ["晋级率 ", /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: "font-medium text-[var(--market-rise-badge)]",
										children: formatPercent(snapshot.advancementRates[key])
									})]
								}, key))
							})] })]
						})
					})]
				})
			});
		}
		function display$1(value) {
			return value === null ? "—" : String(Math.round(value));
		}
		function formatPercent(value) {
			return value === null ? "—" : `${value.toFixed(value % 1 === 0 ? 0 : 2)}%`;
		}
		function formatYi(value) {
			return value === null ? "—" : `${formatYiNumber(value)}亿`;
		}
		function formatYiNumber(value) {
			return (value / 10).toLocaleString("zh-CN", { maximumFractionDigits: 1 });
		}
		function formatIndicator(value) {
			return value === null ? "—" : value.toFixed(4);
		}
		function formatAxis(value) {
			return value.toFixed(Math.abs(value) >= 10 ? 1 : 2);
		}
		function signed(value) {
			return value.startsWith("-") ? value : `+${value}`;
		}
		//#endregion
		//#region src/components/market-dashboard/MarketDashboardWorkspace.tsx
		const STATE_LABELS = {
			complete: "实时完整",
			partial: "实时部分数据",
			pending: "实时待更新",
			stale: "实时缓存数据",
			settled: "盘后结算",
			unavailable: "数据不可用"
		};
		function errorMessage$2(error) {
			return error instanceof Error ? error.message : "未知错误";
		}
		function MarketDashboardWorkspace() {
			const [tradeDate, setTradeDate] = (0, react.useState)(() => marketRuntimeSession().date);
			const dayQuery = useQuery({
				...sdkQueryPolicy(onclawRuntime.queries.marketDashboard.day(tradeDate, MARKET_DASHBOARD_FIELDS, tradeDate !== marketRuntimeSession().date)),
				queryFn: () => getMarketDashboardDay(tradeDate)
			});
			const day = dayQuery.data;
			const snapshot = day?.snapshot;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "h-full min-h-0 overflow-y-auto bg-[var(--market-canvas)] text-[var(--market-text-primary)]",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("header", {
					className: "sticky top-0 z-20 border-b border-[var(--market-grid-strong)] bg-[var(--market-frozen)] px-4 py-3 shadow-sm",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-[1480px] flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: "h-7 w-1 rounded-full bg-[var(--status-info-badge)]" }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h1", {
									className: "text-xl font-semibold",
									children: "市场数据概览"
								}),
								snapshot ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-[var(--market-selected)] px-2.5 py-1 text-xs text-[var(--market-text-secondary)]",
									children: STATE_LABELS[snapshot.dataState]
								}) : null
							]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: "mt-1 pl-3 text-xs text-[var(--market-text-muted)]",
							children: snapshot ? `${snapshot.tradeDate} · ${snapshot.source === "runtime" ? "盘中数据" : "盘后数据"}` : `${tradeDate} · 按日期读取`
						})] }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("label", {
									htmlFor: "market-dashboard-date",
									className: "text-xs text-[var(--market-text-secondary)]",
									children: "交易日期"
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
									id: "market-dashboard-date",
									type: "date",
									value: tradeDate,
									onChange: (event) => {
										if (event.target.value) setTradeDate(event.target.value);
									},
									className: "rounded-lg border border-[var(--market-grid-strong)] bg-[var(--market-cell)] px-2 py-1.5 text-sm text-[var(--market-text-primary)]"
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => void dayQuery.refetch(),
									disabled: dayQuery.isFetching,
									className: "inline-flex items-center gap-2 rounded-lg border border-[var(--market-grid-strong)] bg-[var(--market-cell)] px-3 py-2 text-sm text-[var(--market-text-secondary)] transition hover:bg-[var(--market-cell-hover)] hover:text-[var(--market-text-primary)] disabled:cursor-wait disabled:opacity-60",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
										className: `h-4 w-4 ${dayQuery.isFetching ? "animate-spin" : ""}`,
										fill: "none",
										stroke: "currentColor",
										viewBox: "0 0 24 24",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											strokeWidth: "1.8",
											d: "M20 11a8 8 0 10-2.34 5.66M20 4v7h-7"
										})
									}), dayQuery.isFetching ? "刷新中" : "刷新"]
								})
							]
						})]
					})
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("main", {
					className: "mx-auto max-w-[1480px] p-3 sm:p-4",
					children: [dayQuery.isLoading ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(StatePanel, { children: [
						"正在加载 ",
						tradeDate,
						" 的市场数据…"
					] }) : dayQuery.error ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(StatePanel, {
						tone: "error",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: ["市场数据加载失败：", errorMessage$2(dayQuery.error)] }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => void dayQuery.refetch(),
							className: "mt-3 rounded border border-[var(--notice-error-border)] px-3 py-1.5",
							children: "重试"
						})]
					}) : !snapshot || !day ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(StatePanel, { children: [tradeDate, " 暂无可展示的市场数据。"] }) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-3 lg:grid-cols-6",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "min-w-0 lg:col-span-3",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DistributionCard, { snapshot })
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "min-w-0 lg:col-span-3",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(LimitPerformanceCard, { snapshot })
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "min-w-0 lg:col-span-2",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TurnoverCard, {
									snapshot,
									turnover: day.turnover
								})
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "min-w-0 lg:col-span-2",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SentimentCard, { indicator: day.sentiment })
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "min-w-0 lg:col-span-2",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TemperatureCard, { indicator: day.temperature })
							})
						]
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: "mt-3 text-center text-[10px] text-[var(--market-text-muted)]",
						children: "数据仅供参考，不构成投资建议"
					})]
				})]
			});
		}
		function StatePanel({ children, tone = "info" }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: `flex min-h-72 flex-col items-center justify-center rounded-xl border px-6 text-center text-sm ${tone === "error" ? "border-[var(--notice-error-border)] bg-[var(--notice-error-bg)] text-[var(--notice-error-fg)]" : "border-[var(--market-grid)] bg-[var(--market-cell)] text-[var(--market-text-secondary)]"}`,
				children
			});
		}
		//#endregion
		//#region src/api/modules/usAbnormalMovement.ts
		function isObject(value) {
			return value !== null && typeof value === "object" && !Array.isArray(value);
		}
		function parseUsAbnormalMovementDates(payload) {
			if (!isObject(payload) || !Array.isArray(payload.items)) throw new Error("美股异动日期接口响应格式错误");
			const defaultTradeDate = payload.default_trade_date;
			if (defaultTradeDate !== null && typeof defaultTradeDate !== "string") throw new Error("美股异动默认日期格式错误");
			return {
				default_trade_date: defaultTradeDate,
				items: payload.items.map((item) => {
					if (!isObject(item) || typeof item.date !== "string" || typeof item.count !== "number") throw new Error("美股异动历史日期格式错误");
					return {
						date: item.date,
						count: item.count
					};
				})
			};
		}
		function parseUsAbnormalMovementRows(payload) {
			if (!isObject(payload) || typeof payload.trade_date !== "string" || !isObject(payload.table)) throw new Error("美股异动明细接口响应格式错误");
			const table = payload.table;
			if (!Array.isArray(table.columns) || !Array.isArray(table.rows)) throw new Error("美股异动表格格式错误");
			const rows = table.rows.map((values) => {
				const record = {};
				table.columns.forEach((column, index) => {
					record[column] = values[index];
				});
				const row = record;
				return {
					...row,
					anomaly_analysis: cleanUsAbnormalMovementText(row.anomaly_analysis) || null,
					relation_names: cleanUsRelationNames(row.relation_names) || null
				};
			});
			return {
				trade_date: payload.trade_date,
				rows
			};
		}
		function cleanUsAbnormalMovementText(value) {
			let text = String(value ?? "").trim();
			if (!text) return "";
			const marker = text.search(/[（(]?免责声明\s*[：:]/i);
			if (marker >= 0) text = text.slice(0, marker);
			text = text.replace(/(?:-{3,}|[（(])+\s*$/u, "");
			return text.replace(/\s+/gu, " ").trim();
		}
		function cleanUsRelationNames(value) {
			return cleanUsAbnormalMovementText(value).replace(/\s*[,，]\s*/gu, ",");
		}
		function sortUsAbnormalMovementsByChange(rows, direction) {
			return sortUsAbnormalMovementsByNumericField(rows, "mg_zf", direction);
		}
		function sortUsAbnormalMovementsByMarketCap(rows, direction) {
			return sortUsAbnormalMovementsByNumericField(rows, "market_cap_yi", direction);
		}
		function sortUsAbnormalMovementsByNumericField(rows, field, direction) {
			const multiplier = direction === "asc" ? 1 : -1;
			return [...rows].sort((left, right) => {
				const leftChange = numericValue(left[field]);
				const rightChange = numericValue(right[field]);
				if (leftChange === null) return rightChange === null ? 0 : 1;
				if (rightChange === null) return -1;
				return (leftChange - rightChange) * multiplier;
			});
		}
		function numericValue(value) {
			if (value === null || value === void 0 || String(value).trim() === "") return null;
			const parsed = Number(value);
			return Number.isFinite(parsed) ? parsed : null;
		}
		async function getUsAbnormalMovementDates(limit = 30) {
			return parseUsAbnormalMovementDates(await onclawRuntime.api.usAbnormalMovement.dates(limit));
		}
		async function getUsAbnormalMovements(tradeDate) {
			return parseUsAbnormalMovementRows(await onclawRuntime.api.usAbnormalMovement.rows(tradeDate));
		}
		//#endregion
		//#region src/components/us-abnormal-movement/UsAbnormalMovementWorkspace.tsx
		const DATE_LIMIT = 30;
		function UsAbnormalMovementWorkspace() {
			const [selectedDate, setSelectedDate] = (0, react.useState)("");
			const [manuallySelected, setManuallySelected] = (0, react.useState)(false);
			const datesQuery = useQuery({
				...sdkQueryPolicy(onclawRuntime.queries.usAbnormalMovement.dates(DATE_LIMIT)),
				queryFn: () => getUsAbnormalMovementDates(DATE_LIMIT)
			});
			const availableDateSet = (0, react.useMemo)(() => new Set((datesQuery.data?.items ?? []).map((item) => item.date)), [datesQuery.data?.items]);
			(0, react.useEffect)(() => {
				const defaultDate = datesQuery.data?.default_trade_date ?? "";
				if (!defaultDate) {
					setSelectedDate("");
					return;
				}
				if (!manuallySelected || !availableDateSet.has(selectedDate)) {
					setSelectedDate(defaultDate);
					setManuallySelected(false);
				}
			}, [
				availableDateSet,
				datesQuery.data?.default_trade_date,
				manuallySelected,
				selectedDate
			]);
			const rowsQuery = useQuery({
				...sdkQueryPolicy(onclawRuntime.queries.usAbnormalMovement.rows(selectedDate)),
				queryFn: () => getUsAbnormalMovements(selectedDate),
				enabled: Boolean(selectedDate),
				placeholderData: (previous) => previous
			});
			const rows = rowsQuery.data?.trade_date === selectedDate ? rowsQuery.data.rows : [];
			const isLoading = datesQuery.isLoading || Boolean(selectedDate) && (rowsQuery.isLoading || rowsQuery.isFetching && rows.length === 0);
			const error = datesQuery.error ?? rowsQuery.error;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "flex h-full min-h-0 flex-col bg-[var(--market-canvas)] text-[var(--market-text-primary)]",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("header", {
					className: "border-b border-[var(--market-grid-strong)] bg-[var(--market-frozen)] px-4 py-3",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "rounded bg-[var(--tag-us-market-bg)] px-2 py-0.5 text-xs font-semibold text-[var(--badge-fg)]",
								children: "US"
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h1", {
								className: "text-lg font-semibold text-[var(--market-text-primary)]",
								children: "美股异动"
							})]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-[var(--market-text-muted)]",
							children: "美股异动及异动分析预览"
						})] }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "flex items-end",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
								className: "flex min-w-48 flex-col gap-1 text-xs text-[var(--market-text-secondary)]",
								children: ["日期", /* @__PURE__ */ (0, react_jsx_runtime.jsx)("select", {
									value: selectedDate,
									disabled: datesQuery.isLoading || (datesQuery.data?.items.length ?? 0) === 0,
									onChange: (event) => {
										setManuallySelected(true);
										setSelectedDate(event.target.value);
									},
									className: "h-9 rounded border border-[var(--market-grid-strong)] bg-[var(--market-cell)] px-2 text-sm text-[var(--market-text-primary)] outline-none focus:border-[var(--market-grid-selected)] disabled:opacity-50",
									children: (datesQuery.data?.items ?? []).map((item) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("option", {
										value: item.date,
										children: [
											item.date,
											"（",
											item.count,
											" 条）"
										]
									}, item.date))
								})]
							})
						})]
					})
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("main", {
					className: "flex min-h-0 flex-1 flex-col gap-3 p-4",
					children: [selectedDate ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "flex justify-end",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: "rounded bg-[var(--tag-topic-bg)] px-2 py-1 text-xs font-medium text-[var(--badge-fg)]",
							children: [
								"共 ",
								rows.length,
								" 条异动"
							]
						})
					}) : null, /* @__PURE__ */ (0, react_jsx_runtime.jsx)("section", {
						className: "min-h-0 flex-1 overflow-hidden rounded border border-[var(--market-grid-strong)] bg-[var(--market-cell)]",
						children: isLoading ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(StateMessage, {
							tone: "info",
							children: "正在加载美股异动…"
						}) : error ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(StateMessage, {
							tone: "error",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center gap-3",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: ["美股异动加载失败：", errorMessage$1(error)] }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => void (datesQuery.error ? datesQuery.refetch() : rowsQuery.refetch()),
									className: "rounded border border-[var(--notice-error-border)] bg-[var(--market-cell)] px-3 py-1 font-medium text-[var(--notice-error-fg)] hover:bg-[var(--market-cell-hover)]",
									children: "重试"
								})]
							})
						}) : !selectedDate ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(StateMessage, {
							tone: "info",
							children: "数据库暂无美股异动数据，请等待采集任务完成。"
						}) : rows.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(StateMessage, {
							tone: "info",
							children: [selectedDate, " 暂无美股异动记录。"]
						}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MovementTable, { rows })
					})]
				})]
			});
		}
		function MovementTable({ rows }) {
			const [sortField, setSortField] = (0, react.useState)(null);
			const [sortDirection, setSortDirection] = (0, react.useState)(null);
			const displayedRows = (0, react.useMemo)(() => {
				if (!sortField || !sortDirection) return rows;
				return sortField === "change" ? sortUsAbnormalMovementsByChange(rows, sortDirection) : sortUsAbnormalMovementsByMarketCap(rows, sortDirection);
			}, [
				rows,
				sortDirection,
				sortField
			]);
			const toggleSort = (field) => {
				if (sortField !== field) {
					setSortField(field);
					setSortDirection("desc");
					return;
				}
				setSortDirection((current) => current === "desc" ? "asc" : "desc");
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "h-full overflow-auto bg-[var(--market-canvas)]",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("table", {
					className: "min-w-[760px] w-full table-fixed border-collapse text-sm",
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("colgroup", { children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("col", { className: "w-32" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("col", { className: "w-32" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("col", { className: "w-32" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("col", {})
						] }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("thead", {
							className: "sticky top-0 z-20 bg-[var(--market-header)] text-xs text-[var(--market-text-secondary)]",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Header, {
									className: "sticky left-0 z-30 bg-[var(--market-header)] shadow-[4px_0_8px_var(--market-frozen-shadow)]",
									children: "名称(代码)"
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
									"aria-sort": sortField !== "change" || sortDirection === null ? "none" : sortDirection === "asc" ? "ascending" : "descending",
									className: "border-r border-[var(--market-grid-strong)] px-3 py-2 text-right font-semibold",
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => toggleSort("change"),
										className: "inline-flex w-full items-center justify-end gap-1 text-[var(--market-text-secondary)] hover:text-[var(--market-text-primary)]",
										title: "点击按涨幅排序",
										children: ["涨幅", /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											"aria-hidden": "true",
											children: sortField === "change" && sortDirection === "asc" ? "↑" : sortField === "change" && sortDirection === "desc" ? "↓" : "↕"
										})]
									})
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
									"aria-sort": sortField !== "marketCap" || sortDirection === null ? "none" : sortDirection === "asc" ? "ascending" : "descending",
									className: "border-r border-[var(--market-grid-strong)] px-3 py-2 text-right font-semibold",
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => toggleSort("marketCap"),
										className: "inline-flex w-full items-center justify-end gap-1 text-[var(--market-text-secondary)] hover:text-[var(--market-text-primary)]",
										title: "点击按市值排序",
										children: ["市值(亿)", /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											"aria-hidden": "true",
											children: sortField === "marketCap" && sortDirection === "asc" ? "↑" : sortField === "marketCap" && sortDirection === "desc" ? "↓" : "↕"
										})]
									})
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Header, { children: "异动分析" })
							] })
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("tbody", { children: displayedRows.map((row) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("tr", {
							className: "group border-t border-[var(--market-grid)] bg-[var(--market-cell)] align-top hover:bg-[var(--market-cell-hover)]",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Cell, {
									className: "sticky left-0 z-10 break-words border-r-[var(--market-grid-strong)] bg-[var(--market-frozen)] font-semibold text-[var(--market-text-primary)] shadow-[4px_0_8px_var(--market-frozen-shadow)] group-hover:bg-[var(--market-cell-hover)]",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: display(row.mg_name) }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: "mt-1 inline-flex rounded bg-[var(--tag-us-market-bg)] px-1.5 py-0.5 font-mono text-[11px] font-semibold text-[var(--badge-fg)]",
										children: row.mg_code
									})]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Cell, {
									className: "text-right font-mono",
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: `inline-flex min-w-20 justify-center rounded px-2 py-1 font-semibold text-[var(--badge-fg)] ${changeBadgeClass(row.mg_zf)}`,
										children: formatChange(row.mg_zf)
									})
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Cell, {
									className: "text-right font-mono text-[var(--market-text-secondary)]",
									children: formatMarketCap(row.market_cap_yi)
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Cell, {
									className: "leading-6 text-[var(--market-text-primary)]",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: "whitespace-pre-wrap",
										children: display(row.anomaly_analysis)
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(RelationBadges, { value: row.relation_names })]
								})
							]
						}, `${row.trade_date}:${row.mg_code}`)) })
					]
				})
			});
		}
		function Header({ children, className = "" }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
				className: `border-r border-[var(--market-grid-strong)] px-3 py-2 text-left font-semibold last:border-r-0 ${className}`,
				children
			});
		}
		function Cell({ children, className = "" }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
				className: `border-r border-[var(--market-grid)] px-3 py-3 last:border-r-0 ${className}`,
				children
			});
		}
		function StateMessage({ children, tone }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "flex h-full min-h-64 items-center justify-center bg-[var(--market-canvas)] px-6 text-center text-sm",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: `max-w-xl rounded border px-4 py-3 ${tone === "error" ? "border-[var(--notice-error-border)] bg-[var(--notice-error-bg)] text-[var(--notice-error-fg)]" : "border-[var(--notice-info-border)] bg-[var(--notice-info-bg)] text-[var(--notice-info-fg)]"}`,
					children
				})
			});
		}
		const RELATION_BADGE_COLORS = [
			"bg-[var(--tag-relation-1-bg)]",
			"bg-[var(--tag-relation-2-bg)]",
			"bg-[var(--tag-relation-3-bg)]",
			"bg-[var(--tag-relation-4-bg)]"
		];
		function RelationBadges({ value }) {
			const relations = Array.from(new Set(value?.split(/[,，]/u).map((item) => item.trim()).filter(Boolean)));
			if (!relations?.length) return null;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "mt-2 flex flex-wrap gap-1.5",
				"aria-label": "关联概念",
				children: relations.map((relation, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: `rounded px-2 py-0.5 text-xs font-medium text-[var(--badge-fg)] ${RELATION_BADGE_COLORS[index % RELATION_BADGE_COLORS.length]}`,
					children: relation
				}, relation))
			});
		}
		function display(value) {
			return value?.trim() || "—";
		}
		function numericChange(value) {
			if (value === null || value === void 0 || value.trim() === "") return null;
			const parsed = Number(value);
			return Number.isFinite(parsed) ? parsed : null;
		}
		function formatMarketCap(value) {
			if (value === null || value === void 0 || String(value).trim() === "") return "—";
			const parsed = Number(value);
			return Number.isFinite(parsed) ? parsed.toFixed(2) : "—";
		}
		function formatChange(value) {
			const parsed = numericChange(value);
			if (parsed === null) return "—";
			return `${parsed > 0 ? "+" : ""}${parsed.toFixed(2)}%`;
		}
		function changeBadgeClass(value) {
			const parsed = numericChange(value);
			if (parsed === null || parsed === 0) return "bg-[var(--market-flat-badge)]";
			return parsed > 0 ? "bg-[var(--market-rise-badge)]" : "bg-[var(--market-fall-badge)]";
		}
		function errorMessage$1(error) {
			return error instanceof Error ? error.message : "未知错误";
		}
		//#endregion
		//#region src/page-registry.tsx
		const pageRegistry = [
			{
				id: "ladder",
				navId: "lianbantidui",
				harnessId: "onclaw:ladder",
				title: "连板梯队",
				iconPath: "M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
				order: 10,
				defaultPanel: "side",
				defaultOrder: 10,
				requiresAuth: true,
				persistence: "plugin",
				component: LianBanTiDui
			},
			{
				id: "performance",
				navId: "financialPerformance",
				harnessId: "onclaw:performance",
				title: "业绩溢价",
				iconPath: "M3 17l6-6 4 4 8-8m0 0h-5m5 0v5",
				order: 20,
				defaultPanel: "side",
				defaultOrder: 20,
				requiresAuth: true,
				persistence: "tab",
				component: FinancialPerformancePremium
			},
			{
				id: "supervision-sentiment",
				navId: "supervisionSentiment",
				harnessId: "onclaw:supervision-sentiment",
				title: "连板情绪走势",
				iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
				order: 30,
				defaultPanel: "bottom",
				defaultOrder: 50,
				requiresAuth: true,
				persistence: "tab",
				component: BoardSentimentPanel
			},
			{
				id: "supervision-current",
				navId: "supervisionCurrent",
				harnessId: "onclaw:supervision-current",
				title: "监管与预警",
				iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
				order: 31,
				defaultPanel: "bottom",
				defaultOrder: 30,
				requiresAuth: true,
				persistence: "tab",
				component: CurrentSupervisionPanel
			},
			{
				id: "topics",
				navId: "ticai",
				harnessId: "onclaw:topics",
				title: "题材相关",
				iconPath: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
				order: 40,
				defaultPanel: "side",
				defaultOrder: 30,
				requiresAuth: true,
				persistence: "plugin",
				component: TopicsModule
			},
			{
				id: "timeline",
				navId: "timeline",
				harnessId: "onclaw:timeline",
				title: "时间线",
				iconPath: "M8 2v4m8-4v4M3 10h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z",
				order: 50,
				defaultPanel: "bottom",
				defaultOrder: 10,
				requiresAuth: true,
				persistence: "tab",
				component: Timeline
			},
			{
				id: "market-dashboard",
				navId: "marketDashboard",
				harnessId: "onclaw:market-dashboard",
				title: "市场数据",
				iconPath: "M4 19V5m0 14h16M7 15l3-3 3 2 5-7m0 0h-4m4 0v4",
				order: 60,
				defaultPanel: "bottom",
				defaultOrder: 55,
				requiresAuth: true,
				persistence: "tab",
				component: MarketDashboardWorkspace
			},
			{
				id: "custom-index",
				navId: "customIndex",
				harnessId: "onclaw:custom-index",
				title: "自定义指数",
				iconPath: "M4 19V5m0 14h16M7 15l3-4 3 2 4-6 3 3",
				order: 65,
				defaultPanel: "bottom",
				defaultOrder: 60,
				requiresAuth: true,
				persistence: "tab",
				component: CustomIndexWorkspace
			},
			{
				id: "us-abnormal-movement",
				navId: "usAbnormalMovement",
				harnessId: "onclaw:us-abnormal-movement",
				title: "美股异动",
				iconPath: "M3 3v18h18M7 15l4-4 3 3 6-7m0 0h-4m4 0v4",
				order: 70,
				defaultPanel: "side",
				defaultOrder: 40,
				requiresAuth: true,
				persistence: "tab",
				component: UsAbnormalMovementWorkspace
			}
		];
		pageRegistry[0];
		function getDefaultPages(panel) {
			return pageRegistry.filter((page) => page.defaultPanel === panel).sort((left, right) => (left.defaultOrder ?? 0) - (right.defaultOrder ?? 0));
		}
		function getPageById(id) {
			const page = pageRegistry.find((candidate) => candidate.id === id);
			if (!page) throw new Error(`Unknown Onclaw page: ${id}`);
			return page;
		}
		//#endregion
		//#region src/api/onclaw.ts
		const sdkLogin = (async (payload) => {
			return await onclawRuntime.mutations.auth.login(payload);
		});
		const sdkRegister = (async (payload) => {
			return await onclawRuntime.mutations.auth.register(payload);
		});
		const sdkCheckOrderStatus = (async (orderNumber) => {
			const result = await onclawRuntime.api.payment.orderStatus(orderNumber);
			await onclawRuntime.mutations.payment.acknowledgeTerminal(result.status);
			return result;
		});
		const onclawApi = {
			getLimitDates: onclawRuntime.api.snapshot.limitDates,
			getSnapshotWindow: onclawRuntime.api.snapshot.window,
			getSnapshotPreviewWindow: onclawRuntime.api.snapshot.previewWindow,
			createSnapshotWindowListQueryKey,
			createSnapshotPreviewWindowListQueryKey,
			getSnapshotRuntime,
			selectSnapshotRuntimeMiniCurves,
			createSnapshotRuntimeQueryKey,
			getTopicNamesByStocks: onclawRuntime.api.topics.namesByStocks,
			getMarketInfo: onclawRuntime.api.topics.marketInfo,
			getActiveSupervision: onclawRuntime.api.supervision.active,
			getHistoricalSupervisionPage: ((params = {}) => onclawRuntime.api.supervision.history({
				endDate: params.end_date,
				offset: params.offset,
				limit: params.limit
			})),
			getSuperviseLines: onclawRuntime.api.supervision.lines,
			getSuperviseLineHistoryPage: ((params = {}) => onclawRuntime.api.supervision.lineHistory({
				endDate: params.end_date,
				offset: params.offset,
				limit: params.limit
			})),
			searchTopics: onclawRuntime.api.topics.search,
			getLatestTopics: onclawRuntime.api.topics.latest,
			getTopicDetail: onclawRuntime.api.topics.detail,
			getTopicTree: onclawRuntime.api.topics.tree,
			getLegalDocument,
			loginWithAccount: sdkLogin,
			registerWithAccount: sdkRegister,
			resetAccountPassword: onclawRuntime.mutations.auth.resetPassword,
			getMyInfo: onclawRuntime.api.auth.me,
			getMyAccessSummary: onclawRuntime.api.auth.accessSummary,
			getMyApiTokenStatus: onclawRuntime.api.auth.apiTokenStatus,
			revealMyApiToken: onclawRuntime.mutations.auth.revealApiToken,
			regenerateMyApiToken: onclawRuntime.mutations.auth.regenerateApiToken,
			updateSnapshotPreviewProfile,
			createOrder: onclawRuntime.mutations.payment.createOrder,
			checkOrderStatus: sdkCheckOrderStatus,
			getNativeBaseAddrs: onclawRuntime.api.auth.nativeBaseAddrs,
			getFinancialPerformanceReports,
			getFinancialPerformanceAnnouncementDates,
			getFinancialPerformanceAnnouncements,
			financialPerformanceQueryKeys
		};
		//#endregion
		//#region src/runtime/auth-runtime.ts
		let logoutAdapter;
		function configureAuthLogout(adapter) {
			const previous = logoutAdapter;
			logoutAdapter = adapter;
			return () => {
				logoutAdapter = previous;
			};
		}
		const authRuntime = {
			getSnapshot() {
				const { token, userInfo } = appStore.getSnapshot();
				return {
					authenticated: Boolean(token),
					userInfo
				};
			},
			subscribe(listener) {
				return appStore.subscribe(listener);
			},
			acceptLogin(response) {
				appStore.getSnapshot().setToken(response.access_token);
				appStore.getSnapshot().setUserInfo(response.user_info);
				return this.getSnapshot();
			},
			async refresh() {
				const userInfo = await onclawApi.getMyInfo();
				appStore.getSnapshot().setUserInfo(userInfo);
				return this.getSnapshot();
			},
			async logout() {
				await logoutAdapter?.();
				appStore.getSnapshot().setToken(null);
				appStore.getSnapshot().setUserInfo(null);
			}
		};
		//#endregion
		//#region src/runtime/runtime-platform.ts
		/** Native stock linking is a fixed Windows-only product capability. */
		function isWindowsRuntime(runtimeNavigator = typeof navigator === "undefined" ? void 0 : navigator) {
			if (!runtimeNavigator) return false;
			const platform = runtimeNavigator.userAgentData?.platform || runtimeNavigator.platform || runtimeNavigator.userAgent || "";
			return /^(?:windows|win32|win64)/i.test(platform.trim());
		}
		//#endregion
		//#region src/platform/linkerRuntime.ts
		const LINKER_REFRESH_WINDOW_SECONDS = 1440 * 60;
		function buildDesktopLinkerConfig(response) {
			return {
				schemaVersion: response.schema_version,
				authorized: response.authorized,
				authorizationState: response.authorization_state,
				message: response.message,
				issuedAt: response.issued_at,
				expiresAt: response.expires_at,
				allowedTargets: response.allowed_targets,
				encryptedPayload: response.encrypted_payload,
				signature: response.signature,
				encryptedData: response.encrypted_data,
				timestamp: response.timestamp
			};
		}
		async function fetchAndInitDesktopLinkerRuntime() {
			const config = buildDesktopLinkerConfig(await onclawApi.getNativeBaseAddrs());
			return {
				config,
				initResult: await platformAPI.stockLinker.initRuntime(config)
			};
		}
		function shouldRefreshDesktopLinkerAuth(expiresAt, nowSeconds = Date.now() / 1e3) {
			if (!expiresAt) return false;
			return expiresAt <= nowSeconds + LINKER_REFRESH_WINDOW_SECONDS;
		}
		//#endregion
		//#region src/runtime/stock-linker-runtime.ts
		const UNKNOWN_CODE = "N/A";
		const REFRESH_RETRY_COOLDOWN_MS = 3e4;
		/** Start one disposable stock-linker supervisor for the owning runtime scope. */
		function startStockLinkerSync() {
			if (!platformAPI.stockLinker.isSupported) return () => void 0;
			const api = platformAPI.stockLinker;
			let disposed = false;
			let lastThsCode = "";
			let lastTdxCode = "";
			let refreshInFlight = false;
			let lastRefreshAttemptAt = 0;
			let tickInFlight = false;
			const refreshAuthorization = async () => {
				const now = Date.now();
				const { token, setLinkerState } = appStore.getSnapshot();
				if (!token || refreshInFlight || now - lastRefreshAttemptAt < REFRESH_RETRY_COOLDOWN_MS) return false;
				refreshInFlight = true;
				lastRefreshAttemptAt = now;
				setLinkerState({
					isRefreshingAuth: true,
					linkerMessage: "正在刷新客户端联动授权…"
				});
				try {
					const { initResult } = await fetchAndInitDesktopLinkerRuntime();
					if (disposed) return false;
					setLinkerState({
						runtimeHealth: initResult.runtimeHealth,
						authorizationState: initResult.authorizationState,
						linkerMessage: initResult.message,
						expiresAt: initResult.expiresAt,
						isRefreshingAuth: false
					});
					return initResult.ok;
				} catch (error) {
					if (!disposed) setLinkerState({
						runtimeHealth: "unavailable",
						linkerMessage: error instanceof Error ? error.message : "客户端联动授权刷新失败",
						isRefreshingAuth: false
					});
					return false;
				} finally {
					refreshInFlight = false;
				}
			};
			const tick = async () => {
				if (disposed || tickInFlight) return;
				tickInFlight = true;
				const { setLinkerState } = appStore.getSnapshot();
				try {
					const state = await api.getState();
					if (disposed) return;
					setLinkerState({
						thsCode: state.ths.code || UNKNOWN_CODE,
						tdxCode: state.tdx.code || UNKNOWN_CODE,
						runtimeHealth: state.runtimeHealth,
						authorizationState: state.authorizationState,
						linkerMessage: state.message || state.ths.lastError || state.tdx.lastError,
						expiresAt: state.expiresAt
					});
					if ((state.authorizationState === "uninitialized" || state.authorizationState === "expired" || state.authorizationState === "ready" && shouldRefreshDesktopLinkerAuth(state.expiresAt)) && await refreshAuthorization()) return;
					const { linkerSettings } = appStore.getSnapshot();
					if (!linkerSettings.isSyncing || state.authorizationState !== "ready") {
						lastThsCode = state.ths.code || "";
						lastTdxCode = state.tdx.code || "";
						return;
					}
					if (linkerSettings.syncDirection === "ths-to-tdx" && state.ths.code && state.ths.code !== lastThsCode) {
						await api.setCode("tdx", state.ths.code);
						lastThsCode = state.ths.code;
					}
					if (linkerSettings.syncDirection === "tdx-to-ths" && state.tdx.code && state.tdx.code !== lastTdxCode) {
						await api.setCode("ths", state.tdx.code);
						lastTdxCode = state.tdx.code;
					}
				} catch (error) {
					if (!disposed) setLinkerState({
						runtimeHealth: "degraded",
						linkerMessage: error instanceof Error ? error.message : "客户端联动状态获取失败",
						isRefreshingAuth: false
					});
				} finally {
					tickInFlight = false;
				}
			};
			tick();
			const intervalId = window.setInterval(() => void tick(), 1e3);
			return () => {
				disposed = true;
				window.clearInterval(intervalId);
			};
		}
		//#endregion
		//#region src/utils/invitationCode.ts
		function normalizeInvitationCodeInput(value) {
			return value.toUpperCase().replace(/[^0-9A-Z]/g, "").slice(0, 8);
		}
		function formatInvitationCodeInput(value) {
			const canonical = normalizeInvitationCodeInput(value);
			return canonical.length > 4 ? `${canonical.slice(0, 4)}-${canonical.slice(4)}` : canonical;
		}
		function isCompleteInvitationCode(value) {
			return normalizeInvitationCodeInput(value).length === 8;
		}
		//#endregion
		//#region src/utils/rememberedCredentials.ts
		const USERNAME_KEY = "onclaw.rememberedUsername";
		const PASSWORD_KEY = "onclaw.encryptedLoginCredential";
		const LEGACY_USERNAME_KEY = "finagent.rememberedUsername";
		const LEGACY_PASSWORD_KEY = "finagent.encryptedLoginCredential";
		function removeRememberedPassword() {
			try {
				removeStorageKeys(localStorage, PASSWORD_KEY, LEGACY_PASSWORD_KEY);
			} catch {}
		}
		async function loadRememberedCredentials() {
			if (typeof window === "undefined") return {
				username: "",
				password: "",
				passwordRemembered: false
			};
			let username = "";
			let ciphertext = null;
			try {
				username = readMigratedStorageValue(localStorage, USERNAME_KEY, LEGACY_USERNAME_KEY) ?? "";
				ciphertext = readMigratedStorageValue(localStorage, PASSWORD_KEY, LEGACY_PASSWORD_KEY);
			} catch {
				return {
					username: "",
					password: "",
					passwordRemembered: false
				};
			}
			if (!username || !ciphertext) return {
				username,
				password: "",
				passwordRemembered: false
			};
			const plaintext = await platformAPI.credentialProtection.decrypt(ciphertext);
			if (!plaintext) {
				removeRememberedPassword();
				return {
					username,
					password: "",
					passwordRemembered: false
				};
			}
			try {
				const saved = JSON.parse(plaintext);
				if (saved.username !== username || typeof saved.password !== "string") throw new Error("invalid credential");
				return {
					username,
					password: saved.password,
					passwordRemembered: true
				};
			} catch {
				removeRememberedPassword();
				return {
					username,
					password: "",
					passwordRemembered: false
				};
			}
		}
		async function saveSuccessfulLogin(username, password, rememberPassword) {
			if (typeof window === "undefined") return false;
			try {
				localStorage.setItem(USERNAME_KEY, username);
				localStorage.removeItem(LEGACY_USERNAME_KEY);
				if (!rememberPassword) {
					removeRememberedPassword();
					return true;
				}
				const ciphertext = await platformAPI.credentialProtection.encrypt(JSON.stringify({
					username,
					password
				}));
				if (!ciphertext) {
					removeRememberedPassword();
					return false;
				}
				localStorage.setItem(PASSWORD_KEY, ciphertext);
				return true;
			} catch {
				try {
					removeRememberedPassword();
				} catch {}
				return false;
			}
		}
		function clearRememberedPassword(username) {
			if (typeof window === "undefined") return;
			try {
				if (readMigratedStorageValue(localStorage, USERNAME_KEY, LEGACY_USERNAME_KEY) === username) removeRememberedPassword();
			} catch {}
		}
		//#endregion
		//#region src/components/LoginScreen.tsx
		const MODE_TITLES = {
			login: "账号登录",
			register: "注册账号",
			reset: "找回密码"
		};
		const LEGAL_DOCUMENT_ORDER = [
			"user_agreement",
			"privacy_policy",
			"data_service_agreement"
		];
		const LEGAL_DOCUMENT_FALLBACK_TITLES = {
			user_agreement: "onclaw用户协议",
			privacy_policy: "onclaw隐私政策",
			data_service_agreement: "onclaw数据服务协议"
		};
		function errorMessage(error, fallback) {
			return error instanceof Error && error.message ? error.message : fallback;
		}
		function LoginScreen({ embedded = false } = {}) {
			const [mode, setMode] = (0, react.useState)("login");
			const [username, setUsername] = (0, react.useState)("");
			const [password, setPassword] = (0, react.useState)("");
			const [confirmPassword, setConfirmPassword] = (0, react.useState)("");
			const [wechatCode, setWechatCode] = (0, react.useState)("");
			const [invitationCode, setInvitationCode] = (0, react.useState)("");
			const [invitationError, setInvitationError] = (0, react.useState)("");
			const [acceptedLegal, setAcceptedLegal] = (0, react.useState)(false);
			const [rememberPassword, setRememberPassword] = (0, react.useState)(false);
			const [credentialUsername, setCredentialUsername] = (0, react.useState)("");
			const [documents, setDocuments] = (0, react.useState)([]);
			const [openDocument, setOpenDocument] = (0, react.useState)(null);
			const [error, setError] = (0, react.useState)("");
			const [documentError, setDocumentError] = (0, react.useState)("");
			const [notice, setNotice] = (0, react.useState)("");
			const [loading, setLoading] = (0, react.useState)(false);
			const [documentsLoading, setDocumentsLoading] = (0, react.useState)(false);
			const [qrUnavailable, setQrUnavailable] = (0, react.useState)(false);
			const invitationInputRef = (0, react.useRef)(null);
			(0, react.useEffect)(() => {
				let active = true;
				loadRememberedCredentials().then((saved) => {
					if (!active) return;
					setUsername(saved.username);
					setPassword(saved.password);
					setRememberPassword(saved.passwordRemembered);
					setCredentialUsername(saved.username);
				});
				return () => {
					active = false;
				};
			}, []);
			const documentMap = (0, react.useMemo)(() => new Map(documents.map((document) => [document.document_type, document])), [documents]);
			const restoreLoginCredentials = async () => {
				const saved = await loadRememberedCredentials();
				setUsername(saved.username);
				setPassword(saved.password);
				setRememberPassword(saved.passwordRemembered);
				setCredentialUsername(saved.username);
			};
			const switchMode = (nextMode) => {
				setMode(nextMode);
				setPassword("");
				setConfirmPassword("");
				setWechatCode("");
				setInvitationCode("");
				setInvitationError("");
				setError("");
				setDocumentError("");
				setNotice("");
				setAcceptedLegal(false);
				setRememberPassword(false);
				if (nextMode === "login") restoreLoginCredentials();
			};
			const validateForm = () => {
				if (!/^[a-zA-Z0-9_-]{6,16}$/.test(username.trim())) return "账号需为6-16位字母、数字、下划线或短横线";
				const passwordLength = Array.from(password).length;
				if (passwordLength < 6 || passwordLength > 16) return "密码长度需为6-16个字符";
				if (mode !== "login" && password !== confirmPassword) return "两次输入的密码不一致";
				if (mode !== "login" && !/^\d{6}$/.test(wechatCode)) return "请输入6位微信验证码";
				if (mode === "register" && invitationCode && !isCompleteInvitationCode(invitationCode)) return "邀请码需为8位字母或数字，也可以清空该项";
				if (mode !== "reset") {
					if (!acceptedLegal) return "请阅读并同意用户协议、隐私政策和数据服务协议";
				}
				return null;
			};
			const openLegalDocument = async (documentType) => {
				const loaded = documentMap.get(documentType);
				if (loaded) {
					setOpenDocument(loaded);
					return;
				}
				setDocumentError("");
				setDocumentsLoading(true);
				try {
					const document = await onclawApi.getLegalDocument(documentType);
					setDocuments((current) => {
						const next = current.filter((item) => item.document_type !== document.document_type);
						next.push(document);
						next.sort((left, right) => LEGAL_DOCUMENT_ORDER.indexOf(left.document_type) - LEGAL_DOCUMENT_ORDER.indexOf(right.document_type));
						return next;
					});
					setOpenDocument(document);
				} catch (err) {
					setDocumentError(errorMessage(err, "用户协议加载失败，请稍后重试"));
				} finally {
					setDocumentsLoading(false);
				}
			};
			const handleSubmit = async (event) => {
				event.preventDefault();
				setError("");
				setNotice("");
				setInvitationError("");
				const validationError = validateForm();
				if (validationError) {
					setError(validationError);
					return;
				}
				setLoading(true);
				try {
					if (mode === "reset") {
						await onclawApi.resetAccountPassword({
							username: username.trim(),
							wechat_code: wechatCode,
							new_password: password
						});
						clearRememberedPassword(username.trim().toLowerCase());
						switchMode("login");
						setNotice("密码已重置，请使用新密码登录");
						return;
					}
					const common = {
						username: username.trim(),
						password,
						legal_consent: {
							bundle_version: LEGAL_BUNDLE_VERSION,
							agreed: true
						}
					};
					const response = mode === "register" ? await onclawApi.registerWithAccount({
						...common,
						wechat_code: wechatCode,
						...invitationCode ? { invitation_code: normalizeInvitationCodeInput(invitationCode) } : {}
					}) : await onclawApi.loginWithAccount(common);
					await saveSuccessfulLogin(common.username.toLowerCase(), password, mode === "login" && rememberPassword);
					authRuntime.acceptLogin(response);
				} catch (err) {
					const message = errorMessage(err, mode === "register" ? "注册失败，请稍后重试" : mode === "reset" ? "密码重置失败，请稍后重试" : "登录失败，请稍后重试");
					if (mode === "register" && message.includes("邀请码无效")) {
						setInvitationError("邀请码无效，请检查后重试或清空该项。");
						invitationInputRef.current?.focus();
					} else setError(message);
				} finally {
					setLoading(false);
				}
			};
			const renderLegalCheckbox = () => {
				return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-2 text-xs text-text-secondary",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
						id: "legal-acceptance",
						type: "checkbox",
						checked: acceptedLegal,
						onChange: (event) => setAcceptedLegal(event.target.checked),
						className: "mt-0.5 h-4 w-4 accent-[var(--accent)]"
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("label", {
						htmlFor: "legal-acceptance",
						children: "我已阅读并同意"
					}), LEGAL_DOCUMENT_ORDER.map((documentType, index) => {
						const document = documentMap.get(documentType);
						return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react.Fragment, { children: [index === 0 ? "" : index === LEGAL_DOCUMENT_ORDER.length - 1 ? "和" : "、", /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => void openLegalDocument(documentType),
							className: `${index === 0 ? "ml-1 " : ""}text-text-gold hover:underline`,
							children: [
								"《",
								document?.title || LEGAL_DOCUMENT_FALLBACK_TITLES[documentType],
								"》"
							]
						})] }, documentType);
					})] })]
				});
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: `flex items-center justify-center bg-bg-primary px-4 py-8 ${embedded ? "min-h-0 w-full" : "min-h-screen w-screen"}`,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: `w-full max-w-[460px] rounded-xl border border-border-theme bg-bg-secondary shadow-2xl ${embedded ? "p-5" : "p-8"}`,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h1", {
							className: "text-center text-2xl font-bold tracking-widest text-text-gold",
							children: "onclaw"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "mt-6 grid grid-cols-3 rounded-lg bg-bg-primary p-1",
							children: [
								"login",
								"register",
								"reset"
							].map((item) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => switchMode(item),
								className: `rounded-md py-2 text-sm transition-colors ${mode === item ? "bg-accent-theme font-bold text-[var(--accent-contrast)]" : "text-text-secondary hover:text-text-primary"}`,
								children: MODE_TITLES[item]
							}, item))
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("form", {
							className: "mt-6 space-y-4",
							onSubmit: handleSubmit,
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
									className: "block text-sm text-text-secondary",
									children: ["账号", /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										value: username,
										onChange: (event) => {
											const value = event.target.value;
											if (mode === "login" && rememberPassword && credentialUsername && value.trim().toLowerCase() !== credentialUsername) {
												setPassword("");
												setRememberPassword(false);
											}
											setUsername(value);
										},
										autoComplete: "username",
										minLength: 6,
										maxLength: 16,
										placeholder: "6-16位字母、数字、_ 或 -",
										disabled: loading,
										className: "mt-1.5 w-full rounded-md border border-border-theme bg-bg-primary px-4 py-3 text-text-primary outline-none transition-colors focus:border-[var(--accent)]"
									})]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
									className: "block text-sm text-text-secondary",
									children: [mode === "reset" ? "新密码" : "密码", /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										type: "password",
										value: password,
										onChange: (event) => setPassword(Array.from(event.target.value).slice(0, 16).join("")),
										autoComplete: mode === "login" ? "current-password" : "new-password",
										minLength: 6,
										placeholder: "6-16个字符",
										disabled: loading,
										className: "mt-1.5 w-full rounded-md border border-border-theme bg-bg-primary px-4 py-3 text-text-primary outline-none transition-colors focus:border-[var(--accent)]"
									})]
								}),
								mode === "login" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center justify-between gap-2 text-xs text-text-secondary",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "登录后自动记住账号" }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: rememberPassword,
											onChange: (event) => setRememberPassword(event.target.checked),
											className: "h-4 w-4 accent-[var(--accent)]"
										}), "记住密码（加密保存）"]
									})]
								}),
								mode !== "login" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
									className: "block text-sm text-text-secondary",
									children: ["确认密码", /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										type: "password",
										value: confirmPassword,
										onChange: (event) => setConfirmPassword(Array.from(event.target.value).slice(0, 16).join("")),
										autoComplete: "new-password",
										minLength: 6,
										placeholder: "再次输入密码",
										disabled: loading,
										className: "mt-1.5 w-full rounded-md border border-border-theme bg-bg-primary px-4 py-3 text-text-primary outline-none transition-colors focus:border-[var(--accent)]"
									})]
								}),
								mode !== "login" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border border-border-theme bg-bg-primary p-4",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4",
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
											className: "flex h-[108px] w-[108px] shrink-0 items-center justify-center rounded-md bg-white p-1.5",
											children: qrUnavailable ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("output", {
												className: "px-1 text-center text-xs leading-5 text-gray-700",
												children: "二维码暂不可用，请稍后重试"
											}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("img", {
												src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAFYAVgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBpbBpQSQDigjNfysE5NAH9U9FfysUUAf1T0V/KxRQB/VPQc1/KxQOtAH9U4OaWkHSloASg5r+VigdaAP6pwc0tIOlLQAlFfysUUAf1T0V/KxRQB/VOSQCcUgbNfysg4Nf1T4xQAm4g4x+NKDkV/Kzmv6pgMUABJAJxSBsmv5WQcGv6pwMUALRRRQAlFfysUUAf1TFiDjFKDkV/KwDX9U4GKAAnApAxJxilIzX8rBNAH9U9FfysUUAf1T0V/KxRQB/VPRX8rFFAH9VFFFFABRRRQAUUUUAJ3r+Viv6p+9fysUAf1Tk4GTQDmgjIr+VnPHSgD+qeiv5WM+1GfagD+qev5V/Sv6qK/lX9KAP6p8gDmgHIprDofbpX8rZ69KAP6picV/Kziv6pjyOtNxg5z+FADh2r+Viv6ps4r+VnFAH9U5OK/lZIr+qY8jrTcYP17UAfytdKKUjJ4pMUAAGTX9U+c0h5BGaQLjvQB/K3iv6pgc00jnOacOnrQAE4FGQRX8rI69K/qkUc/0oA/laxk0EYNf1SkEHP6Cv5WyOen5UAJ1r+qfNBBI61/K1kGgD+qXcPWgHIpmOe/0r+Vw9elAH9U9fyr+lf1UV/Kv6UAf1T5AHNAORSFckc9q/layPSgD+qeiv5WM+1AIz0oA/qm64r+Viv6pwK/lYoA/qoooooAKKKKACiiigBO9fysV/VP3r+VigD+qiv5V+1f1UV/Kv2oAKKKKAP6qK/lX9K/qor+Vf0oA/qlJ6Z9KVeg4/OlxnFfysE5NACgZPWlK471/VKRkV/KzmgBwA9a/qjHTpS46V/Kx1oAX8aPxr+qeigD+VoDPev6ox06Uvev5WOtAAOT1p2O+aaDiv6p8YoA/lZ6V/VMBiv5WfWv6p6AGt0PH5UKeeK/lZBwa/qnAxQAEZoAApaKAEJwK/laAGM1/VKRkYNGMCgD+Vvt2r+qMcjp+dfytZINITk0Af1UV/Kv6V/VRX8q/pQB/VOO1fysV/VOO1fysUAFA60UDrQB/VOO1fysV/VOO1fysUAf1UUUUUAFFFFABRRRQAnev5WK/qnJxX8rBBFAH9VFFfysfhR+FAH9U9FfysfhR+FAH9UxOBX8rOMYoBwelKTn8KAP6pR2r+Viv6ps1/KyQRQAda/qnzSHp1r+Vw84oA/qk64r+Viv6pgcV/KzigAAyaMEGv6pm6dfyr+Vs+noaAP6pcgDmgHIpp5Pfiv5Wz16UAIBk0YINf1TN0POPpX8rZ5wPfrQB/VKO1fysV/VNmv5WSMUAf1UV/Kv6V/VPmv5WcYoA/qmHav5WK/qmzX8rJBFAH9U5OBk0ZFB5HWv5Wu1AH9UvXFfysV/VMDiv5WSCKAP6qK/lY9K/qmJxX8rPSgD+qYdKWv5WD9KPwoA/qnor+Vj8KPwoA/qmJxX8rBGKdnjGKaeT0oA/qoooooAKKKKACiiigBCM0AAUtFADTwCcUA5PSv5WQcGv6pwMUAITg9KByAcUpGa/lYJyaAP6pzwOlNzk4x+NOIzX8rOaAP6pCeeaVeg4/Olxmv5WCcmgAzX9UxGK/lZr+qfrmgD+Vsc5r+qMdOlLiv5WOtACjk9ad15JpgOK/qnxigD+VonFf1S4r+Vn1r+qegBDzSEYFfys0DrQA7v1pMe9f1TDpS0AfysDk9fzr+qQcmv5WgcGgnNAH9U+M0AY7V/KxRQAZr+qYjBr+Vmv6pz3oATGetKBjtX8rB60UAf1Tt0PGaaDX8rQODX9U+MUAA+gox7Cv5WD1ooA/qnPA6U3OTjH404jNfys5oA/qmHNGKB0paACiiigAooooAKKKKAE71/KxX9U5OK/lYIIoAK/qnPev5WMV/VNnNAH8rXrX9U3WmkH/APVX8rZPPSgBOtf1T5obp1r+VskGgD+qTI69q/lYIwa/ql25pwBAAzQAtfyr+lf1T5Ar+VnFAH9Uw6UtJnAoBBoAOlfysEUoPPSv6pBxmgD+VrpRSkZNJQAAZNGMGgHBr+qXHPWgB2elfysdKcCBX9Uq9OtAC1/Kv2r+qfIFfys4oASil20lABQOtGKXG3rQB/VNnAoByMiv5WsgjHv1r+qUHjrQAdK/lZ9KAR6V/VJtIPWgB2QBQDkU0jnv9K/lbJ56UAIBmv6pwRX8rAODTgQeKAP6petLTVpc0ALRRRQAUUUUAFFFFADWPPNC9Bx+dKRmv5WCcmgD+qfFfys5zX9U9fyselAC9D1pMe9f1TDpS0AIeaTbX8rNFAH9U9FfysUUAKOT1pTzznvTQcV/VNjGaAEJzxzX8rZPPX8qTODQTk0Af1TngdK/la7A5Ff1SkZGDRjAoAaTX8rZHPWj1r+qbpQB/KyAPWv6pNxJ6U7rX8rPpQB/VITTl6DjFGM1/KwTk0AKOT1pTyM5/Omg4r+qbGM0AITz35r+Vo9f8KM4NBOTQB/VORx0r+VojIz05r+qUjIwaAMUAfysjjoaPxr+qeigD+VgAetf1SZJ9qd1r+VgmgBScHiko60UALj3oAA71/VPSHpQB/KyetJmg9aKAP6qKKKKACiiigAooooATvX8rFf1Tk4r+VggigD+qcnFfyskV/VMTx1poHUg9qAP5WulFB60UAHWv6p80N061/K2SDQB/VJ1xX8rFf1TLX8rNAH9U5OBk0ZyKG6V/K1njtxQA09aK/qnHSigD+VlVORxX1f8Bf8Agmj8Z/j74ftdfs9OsvC2g3aeba33iGZ4PtCFQyukaozlGDZDbcH6clf+CaHwE0n4+ftNafZ6/axahoOgWb63d2c21kn8t0SNGQgh1MkiblPUA/Q/s14t8X3+savdWdncy2lhbSGH/R22PKw4YlhyBnIAGOh/BXA/Mkf8EUPikP8AmefCHX+9df8Axmv2SXhRXhcNtdMMnUNR/wDA+f8A+Lq5Daz5wb7Uf/A6b/4qi4H5qj/gib8Uwc/8J14POP8Aauv/AIzX7IICDz6Yrxx7OVX4vtRwPW+m/wDiqU20uOb6/wD/AAOm/wDi6LgexOCenpivxvP/AARN+KZOf+E68Hj8br/4zX6UPBMEZhfagPpfTf8AxVZtis9xJI51PUiM4H+nzgD/AMfouB723KmvwI+Pn/BNH40fAXw/da/d6dY+KdBtE826v/D0zz+QgVmZ3jdEcKoXLNtwM9cZr9f7mC6B+XUtS/C/n/8Ai6teE/F+o+G9bs7a5vZ73TLuZbdkunMjxMxwjK55+8QCDnr7UXA/nH7V/VRX4Df8FMfgLpXwE/abv7TQLWKw0LX7OPWrSzgwEt/Md0kRVAARRJG+1R0BHbiv35pgITgV/KzigHnpSnPegD+qXPSv5WOlPGBX9UY6daAP5Wetf1T5oIJHWv5WiwOOKAP6peuK/lYr+qcCv5WKAP6pycCv5WSD0oB56UpPTNACAV/VMDmm7ScH9KcBgUALRRRQAUUUUAFFFFADWPPNC9Bx+dKRmv5WCcmgBQeev51/VIDjjmv5WgcGjOTQApHvRj3r+qYdKWgBDzSEYr+VmgdaAP6pd2D/AFr+VvA9a/qmwCKAMCgAPT1po5OKcRmv5WCaAP6piSDilByK/lYBr+qcDFADBxLjnpmvEYrUm71BgOTe3P8A6Oevbc/6QP8AdP8AMV5JapiW9Pre3P8A6OepYGR4h8V6J4G0V9U8Q6nbaTp8bKrXFy4VdxOAo7kk9AKj8Q/E3wn4P0LTtZ1fXrKy0rUWRbS8eTMc5dd6lSM5BXLZ6ADJr4d/bN+IeoeIfjhceHoLkx6Z4Z09EihYbozeXCEvKR3KoUUHtlsY3VS8d+OLG88JfAu3064XUbjwjp1xfXqS4FvcKZIIBtzyxLxvhccKxzg1508XGLqRX2T6zD8P1q0MJVbdq7aXlbb7z9EvMjnjV0ZXjYBlZTkEHuCOo/xphYbsA5r54/Yn+J8njz4SXenXTKbnw5fyaaAD0h+9Dx2GCyj02Y9q9aufH9ray+J7dLV5NT0K3+2vYmQB54CjOjocfxbHX2ZcHHBrtjJSSaPm69CdCrKjL4ouzOM+IfxfTWbTxh4Q8F3jw+PbS1lTTzcQhYp7lIw5jiZuGcKRwe5B7Gvnv4Xfteaxoc9jBqzXGvW7MYdQsruBYdRtZwQG2FQqsQePLcBuo3DA3eU/GHxXN4W/aZvdUtb2WK01KS28QaPe2zAGWOaJWyoYEfMARgg/dYGuR8b+J9T13x/c3+oWdzZrq8J1COWe38mK4lDGOSSDk5RgqvycjeRyOa8fEYqpTvKOko9O6P0rJshw2JdOnW96FZWUlvCaWz8n57n6h+HPEmm+NdAs9a0W8S/0y8QSQ3EfRh0IOeQQeCD0NPlgAv8ATmPJN9bf+jkr5H/Yu+Jtxa/ES/8ABl1IZLDXbKXVrdX/AOWd7CyrcbfaRHR2/wBpSe5z9kXKD7XYYHS9tv8A0cletSqKtBTj1PzzMMHUy/FVMJU3g7f8E/Nj/gtl8vx98De/hkf+lU9fsmK/Gz/gtn/yX3wL/wBiyP8A0qnr9kxXQcAEcdK/la7Z45r+qUjIwaMYFADe/fmv5Wzwev5UmcGgnJoA/qnJIGcZr+Vrb0NNBwaMn1oA/ql3EY47V/K2QPWkzX9U/SgBG6dPyr+VsjoffpTQcGjJJoA/qmLYxSgkgHFGM4r+VgnJoA/qoooooAKKKKACiiigBCcV/KwRg1/VMw55oXoOfzoA/lZoopdtACAZr+qcHIr+VpcgcUhPJ4oA/qnor+VjPtS456UAf1S9aWmg4FKDmgAJwKMgjiv5WR16V/VIo6n26UAfytetf1UV/Kv61/VRQB+Nf/BEz/kvnjr/ALFk/wDpVBX6bQna94f+ny5/9HPX5lf8ETRj4+eOffwyf/SqCv03tx+8u/8Ar8uP/Rz1LA/OP9sXwxceEv2kNQvZkZbDxTYQ3lpMR8plgHlzR59QChx6MK8j8O22nR6jrT6o97c3MdtCukwi6KxQIzyNPgEEY3eWSP8AazX6XfH34KaP8dvBb6HqksljdQSfaNO1S3UGWyuACFdRkZBzgrkbh6cV+cfxV+Hvjz4AwGbxtocV7pizCG21/Spd8E7kHaNuN0ZIB6gdK+dxuEre0lVoK6krNH7JwxxDl7wtHA5i+WVKXNGXRrXTyZ6f+xL8QdO+D3iP4oP4h1EQaMdKt9VnlCknetzKiKq9Sx8/aAOpxVPx9+17rviv4jaj4o8G+HLeytW0OXQPL1S63yupkZjIyR4COCRhSWHHJ7V8xi/1W6jl1KxubeWbUnjlm07cCfIgYSIC3Zt3GPUj0r0j4c6V4R1SLUL/AF3XZvDFndATIY9FN75ysMlWJuIwhyT0BBz14pvEzhShCDV/PuKnkuExOOxGKrwbpyd0o3b5Wt9L9d+x1fjjUtG+K3wp8C2kOlN/wmfhSKPTRLZ3HnpqEZI/cZwrRyhyGjBBBJZQ5LiuVj10+JtMsVjujc2tvO00Yflo3KeWy+qkgLkf7C+lcjqc9nALjQPDBubeyvJxGl1KuHjizlGYjgufLJG3gHucZORpPhm817VYfCvhOO/vvGFyPKa0sWEizEDLSHOQMgEkkjHeuetF4xpJ+9+ndnr5bVjw8qk6iToO0rN6qe9k3a9lbc+nP2JNGu/Gf7SjazaeZJovhTS7hLi4Ufu/tNxhFjz0yVUnH+wa/RadAs9ic8m8tj/5GSvLP2X/AIQSfBL4M6H4evUt/wC2ihuNTmt+RLcsSWJb+IgbVz/s8cV6tIctZEjn7ZbD/wAjJX0VCkqFONNdD8ZzTHyzTG1cZNWc3e3ZdD1R+NST2j/qa/llIwa/RX/gth/yX3wLx/zLI/8ASqevzrbkmuk8s/qm6V/KwRSjr0r+qMZFAH8reD6UEYNOzxjt61/VIvQc5+tADqTpS0jdKAAkV/KwRinZ4ximnk9KAP6pycDJoyKCeOtfyte3p3oA/ql60tNWlzQAtFFFABRRRQAUUUUAIRmv5WCSa/qn71/KxQAoHPWv6owfrxT+tfys+lADgM1/VGOnSlx0r+VjrQAoHPWv6pASc07rX8rBNADsd/0r+qReg4x9a/lZyfWgnJoA/qnIz2pMYHT8q/lZoHWgBwUHPP5V/VKCSOlGOlfysdaAP6oh/wAfH/AT/SvJoGPm3agbmN5cYH/bZ69Z/wCXj/gJ/mK8r0QB9YdW76jP/wCj3qWBtXvgyaPSZJ2mBnVd5jUcfTPrWRqXw1sfEWkwadrMFrqWl6muye0uoBLEVIyAytw39OK7P7TJJ4hvoGcm3+zZ2dun/wBc1dso0ksbKFj+8ijjfH4Y/wAaLXYmfnP+1X8LPgl8LGfQrXwHbPrt3GSkunyG28qPONzH5gckEAYPQ9K8+8LfDDwLZr8PtCt9O1maTXUjZpJdRXbbIZWQgYi+bG09cV7l8Q9Ot/Ef7czWuqRQ3NrHACkNyoZGAhyBg9eSTVD4h+HNP0L9pb4bafplpHZWMUaskMYwq/vJGOB25r5jESqVZSlK3KpJWsft+VwwuXU6VKipKtKlKo5J6P3W7fJpM8u/aX/Z68A/DL+zH+y6/fHU43USwaskCoYiCMjyWJP7zgjHeu9+A+teBPhRf+B9K8N+CY7bV/FFsgvdbuLjzbgrudSpcjLHcmSBtHTjgVZ/avmtdb+J/h7Rb65it7WDS7qbzJ3Cqsjq+3JJx1jWvHLLXf7D0X4aeI33ONMv57eQ9TtjlSUD67ZTWc8TOhVlGm7RX6WudeEyehm+XUa+LTlWmm223q2pcvW26Prb4p/tF23gTwrba3pemrrSNqsulyxNN5W149wYghW7r6d69ct7v7baaTOyeU8txaO0ed20mVDjP+elfm1YeJ7rxLoFr4WuEd7q68QRX8LN/F5qlGH5lfrk+lfo/JbrDNpwRmAW9thj/tslepgcVLEyk3srHxHFGS0Mlo0KUF7zc7vutLH5t/8ABbAZ+PvgTHP/ABTI/wDSqev2RHI6VTkAOpID3jwfzNfyynmvZPz0/qnIBpCMdKdSHpQA09cfrTh09K/lZzX9UwGKACg5r+VigdaAP6pwKMUDpS0AfysAc9aVsgc1/VKRkV/KwTmgBQNwoIwetIDiv6pwMCgBaKKKACiiigAooooAQkDrQDkUjLk9e1fytZHpQB/VPSdKCcUhORQA6iv5Wcc9KTPtQB/VPSHpX8rOfal79KAGnrRQaKAADJoxQDg1/VLgjJz2oA/la6Zr+qiv5WOtf1TZBoA/Gv8A4ImMB8fvHIJwT4YJx/29wV+lFnetBqV3IvLR39wR+E71+Of/AATP+PWk/AT9pvT7vxBdRWGg69ZyaLd3s20Jb+Y6PG7OSAiiSNNzdgT25H7OeK/Cd9o2sXV3Z2st5YXDmb/R1LvExyWBUc4zyCM9fakwOuvvEemvaT3MHN5PF5eCpyPrSRa9apfWUiSZjEPlycHj0rgIZpiozp+or9bCb/4mriXEqqP9D1AYP/PjN/8AEUgPn39qP4KeJ/GHxGtfGngmYrfIoikEcvlSggnDqT1yDgj2rzfxP8Fviql14P1OxS5vfEFlbPJcXsl0sjRTNK527mPOFI9q+ynuZW5+xah9PsM3/wATTVmkAP8AoN//AOAM3/xNeXUy+lUm5ttX7H3OD4vxuEo0qChGSgmlda2atZ91qfKGmfs8+K/HnxE0u8+IdvNeaamneXcXK3ClzIASAdp9SawNR/Zp8ZJ8LptHWxiluhrpuLZPOXKwmMozMTgAHCnrn2r7N86UL/x5X+faxm/+IqnNNcMxH9n6hjHB+wzf/EVH9m0Xu2bR41zKEouKioq1o20Vr7Lpe+p8yah+znqFl8VPAN7p1or6VpttaG/uN6qPNhPJAzkk4Br6ZmulN3pwz1vrYf8AkZKpSyXXH/Et1PHtp85/9krV8J+E9S8Sa3Z3NxZ3FjpdrMtw73UZiaVlOVVVOD1AJJHauuhh4Ydvk6nzeZZvic1VL6w/gVl999T81/8Agtlz8ffAuP8AoWR/6VT1+yYr8CP+CmHx60r49/tNaheaBdxahoOgWkei2l5DgpceW7vI6sGIdTJI+1u4A7cn99weK7jxD+VgDJr+qfOc0N0POKaOM0Afytetf1UV/KxjrX9UwOaAP5WAMmjGDSgc9Pzr+qQZzn9KAHZxX8rBGDX9UpFOXoOc0AfysUV/VOeKAc0AfysAV/VODmmt1zmnDp60ALRRRQAUUUUAFFFFADWbB6dq/lawPWv6piAetAGBQAjdDxn6V/K2eMH36U0HBoySaAP6pScce3Wv5WyOetf1TYBHNAGBQB/KyBz1r+qMEmn9a/lYJoAVutJR1ooAUAetf1Sbic8dqd1r+VgmgBwHXFIRyeaMnrX9UwGBQBDdQieIqeQfWubu5dY0skWjJNH2jmUsB+IINfzBUDrQB/TPJ4t8TxsQthY491f/AOKpn/CYeKf+fCw/75f/AOKr0DyIjyY0J91FH2eL/nmn/fIoA8+Pi/xSB/x4WP4q/wD8VS/8Jf4o7WFj+Kv/APFV/M3mv6pPs8Wf9WpPuKAOAXxf4pJx/Z9jnt8r/wDxVflef+C2fxSB/wCRF8If983X/wAer9jjbREYMSEf7opfs8X/ADzT/vkUAfjeP+C2XxSP/Mi+EPyuv/j1fq1HJr2u4S7kjggbho7ZSA345J7+tdt5EX/PNP8AvkV/K5QB/UxplitnAqgYwK/lmzX9U4r+VigD+qZuh4z9K/lbx3/Smg4NGT60Af1Sk9B+tOHT0r+VkGv6pgMUABHHSmg9sflTiM1/KzmgBQAa/qlXp0ox0r+VjrQB/VORmv5Wetf1T1/Kx6UALjjOfwr+qVelGMigDAwKAFooooAKKKKACiiigBCcV/KwRg1/VMVyaUAgAZoAWkPSgnFGcigD+VjBJoIwacOMj361/VIvQc5+tAH8rPWv6p89aQ9OtfyuHnHFADMZNBGDX9UpHfmv5Wj1/wAKAP6qKKQkCjOaAFopN1AOaAP5WAM1/VNnOa/lZHWnE4GPSgBp60V/VMDgf40oOe9AH8rFA60YoHFAH9U46Utfys9T0pM+1ACAZr+qfOa/lYHWne1ACYJNIRg07PFf1SgEDGc0Afysda/qnzQQSOtfytFgccUAf1S9cV/KxX9U3T3r+VkgigAoooxmgAAJoIwacOBjiv6pF6DnP1oA/lZAyaMUoHPT86/qkGev6UAfytdM1/VRX8rJGa/qlzQAtFFFABRRRQAUUUUANLYNKCSAcUEZr+VgnJoA/qmboeM/Sv5W8d/0poODRk+tAH9UpPQfrTh09K/lZBr+qYDFAH8rI5PX86/qk79DX8rQODRnJoAd75pp61/VNjOK/lZJzQAoPPX86/qkGen61/K0Dg0ZoAU8V/VMBiv5WOua/qooA/lXHX/Gv6pRycc/Wv5WgcGgnNAH9UrZBr+Vs9etIK/qn6UAIeATikDZ7V/K0Dg1/VPjFADSTnH6iv5Wj1/wozg0E5NAADiv6piMetfys1/VP1zQB/K0QMZr+qUHIowKAMDAoACcCv5WscA5r+qUjIwaMYFACYyOn50oGO1fysHrRQAUq9aSjpQB/VMBkc0o4r+ViigD+qcgGjGKWigBu3mv5Wc1/VP3r+VigD+qiiiigAooooAKKKKAEJA60A5FIy5PXtX8rWR6UAf1T0V/Kx+FH4UAf1T0V/Kx+FH4UAf1T0V/Kx+FL0PIxQB/VLkde1fysEYNf1Tbc0oBAAzQB/KxQOtFLjBoA/qmHav5WK/qnFfysUAAGTQRigHBr+qYAg5oA/lZAzQRg1/VKeTnn6V/K0ev+FAABk0YPpX9UzdOv5V/K3nt2z1oAbRX9U4ziigD+Viiv6pzxSE5HFAH8rWD0r+qYHIr+VsH0ppPJ4oA/qnr+Vf0r+qiv5V/SgD+qcdq/lYr+qcdq/lYoA/qnJwMmjIobpX8rWRj6d6AP6peuK/lYr+qZa/lZoAAM1/VNnOa/laHB6Up4GMfnQAmK/qmBzTcc9enrThwOtAC0UUUAFFFFABRRRQAnev5WK/qn71/KxQB/VOeB0pAcnGKUjNfysE0Af1T49hRj2FfysUUAf1T4Br+VnNf1T1/Kv6UAf1TFsYpQSQDijGcV/KwTk0AAOK/qmIx61/KzX9U570AN3EHpX8rZA9aPWv6pulAH8rAGTX9UueelfytA4NGcmgBwGBn0pp61/VNjOK/lZJzQAoHPWlI6Zr+qUjIr+Vkk9aAP6pNxGB+tOByK/lZBr+qYDFAARmv5Wc1/VPX8q/agBw5GeOO1f1SL06fnX8rIJFBOTQB/VOTgV/K1gYB96/qlIyMGjAoAAa/lYr+qfpiv5WKAP6pzzSba/lZooA/qmJIOK/lZIwaAcUE5NAH9UzdOn5V/K2eBnjntTQcGgkmgBQNwoIwetIDiv6pwMCgBaKKKACiiigAooooATvX8rFf1T96/lYoA/qor+VftX9U5OK/lZIoASijFGKAP6qK/lX9K/qor+Vf0oA/qnHSlpM4FAINAC0UhOKN1AATiv5WCMGv6pm5PNC9Bz+dAH8rIGTX9U+c5oIJBGaQLjNAH8rJ60UuCTxSYoA/qnJwK/lZIPSgMAelLuzigBuKCMGv6pSDwfboK/lbI56flQB/VMTgZNGRQeR1r+VrtQB/VL1paaDgc0oINAH8rFf1T9M1/Kxgmv6pjz7UALmv5WOlODAZ4r+qUAgdaAAnAr+VnFAPPSlOe9AH9UucCgHIyK/la46frX9Uq9KAP5WAMmjGDSjg9Pzr+qTv35oAdnAoByMiv5Ws8dK/qlAwKAFooooAKKKKACiiigBO9fysV/VP3r+VigD+qc80AYr+ViigD+qfHsKMewr+ViigD+qckgZxmv5WSMYPvSA4NGSTQB/VKx6D261/K2evWv6psAjmgDAoACM1/KyOa/qnr+VfpigD+qU56frX8rZPPX8qTNBOTQB/VOTgUm7tilIzX8rOaAFAFf1SDp0pcdK/lY60AKFBPWl24xX9UpGRX8rJJ60Af1SE9AR2pwHHSv5WQa/qmAxQB/KyBz1r+qQcmnda/lYNAH9UrZBr+Vs9etIK/qn6UAI3Q8flSA+gr+VoHBr+qfA6dqAP5WsDBPvX9UoORRgUAYGBQAjdOn5V/K3jv+lNBwaMn1oA/qlPp696cOnpX8rINf1TAYoAMV/Kzu4r+qev5V+1ACgZGa/qmBJGcYr+VgEignJoA/qoooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Z",
												alt: "微信公众号二维码",
												className: "h-24 w-24 object-cover",
												onError: () => setQrUnavailable(true)
											})
										}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
											className: "flex-1 text-xs leading-6 text-text-secondary",
											children: [
												"微信扫码关注公众号后，回复",
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
													className: "mx-1 font-bold text-text-gold",
													children: mode === "register" ? "注册验证码" : "找回验证码"
												}),
												"，获取5分钟内有效的验证码。"
											]
										})]
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										value: wechatCode,
										onChange: (event) => setWechatCode(event.target.value.replace(/\D/g, "").slice(0, 6)),
										inputMode: "numeric",
										placeholder: "输入6位微信验证码",
										disabled: loading,
										className: "mt-3 w-full rounded-md border border-border-theme bg-bg-secondary px-4 py-3 text-center font-mono text-xl tracking-[0.35em] text-text-primary outline-none focus:border-[var(--accent)]"
									})]
								}),
								mode === "register" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border border-border-theme bg-bg-primary p-4",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
										className: "block text-sm text-text-secondary",
										children: ["邀请码（选填）", /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
											ref: invitationInputRef,
											value: formatInvitationCodeInput(invitationCode),
											onChange: (event) => {
												setInvitationCode(normalizeInvitationCodeInput(event.target.value));
												setInvitationError("");
											},
											autoComplete: "off",
											inputMode: "text",
											placeholder: "例如 A7KD-3Q9M",
											disabled: loading,
											"aria-invalid": Boolean(invitationError),
											"aria-describedby": "invitation-code-help",
											className: "mt-1.5 w-full rounded-md border border-border-theme bg-bg-secondary px-4 py-3 font-mono tracking-[0.2em] text-text-primary outline-none transition-colors focus:border-[var(--accent)]"
										})]
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
										id: "invitation-code-help",
										className: `mt-2 text-xs leading-5 ${invitationError ? "text-[var(--notice-error-fg)]" : "text-text-muted"}`,
										children: invitationError || "注册即赠 15 个自然日高级访问。填写有效邀请码后，邀请人也获赠 15 日，你的赠送天数不变。按北京时间计日，第 15 日 23:59:59 到期。"
									})]
								}),
								mode !== "reset" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "space-y-2 rounded-lg border border-border-theme p-3",
									children: [
										renderLegalCheckbox(),
										documentsLoading && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
											className: "text-xs text-text-muted",
											children: "正在加载协议..."
										}),
										documentError && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
											className: "text-xs text-[var(--notice-error-fg)]",
											children: documentError
										})
									]
								}),
								error && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									className: "rounded-md border border-[var(--notice-error-border)] bg-[var(--notice-error-bg)] px-3 py-2 text-sm text-[var(--notice-error-fg)]",
									children: error
								}),
								notice && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									className: "rounded-md bg-emerald-500/10 px-3 py-2 text-sm text-emerald-400",
									children: notice
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: loading,
									className: "w-full rounded-md bg-accent-theme py-3 font-bold text-[var(--accent-contrast)] shadow-[0_0_15px_rgba(226,185,110,0.3)] transition-opacity disabled:opacity-50",
									children: loading ? "正在提交..." : MODE_TITLES[mode]
								})
							]
						})
					]
				}), openDocument && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(OverlaySurface, {
					className: "z-[120] flex items-center justify-center bg-[var(--overlay-bg)] p-4 backdrop-blur-sm",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "flex max-h-[calc(100%-2rem)] w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-border-theme bg-bg-secondary shadow-2xl",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-border-theme px-5 py-4",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
								className: "font-bold text-text-gold",
								children: openDocument.title
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-text-muted",
								children: ["版本：", openDocument.version]
							})] }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setOpenDocument(null),
								className: "text-text-secondary hover:text-text-primary",
								children: "关闭"
							})]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "overflow-y-auto whitespace-pre-wrap px-5 py-6 text-sm leading-7 text-text-secondary",
							children: openDocument.content
						})]
					})
				})]
			});
		}
		//#endregion
		//#region src/harness/client/auth-bootstrap.ts
		let bootstrap;
		function bootstrapHarnessAuth() {
			bootstrap ??= onclawApi.getMyInfo().then((userInfo) => {
				appStore.getSnapshot().setToken("host-session");
				appStore.getSnapshot().setUserInfo(userInfo);
			}).catch(() => {
				appStore.getSnapshot().setToken(null);
				appStore.getSnapshot().setUserInfo(null);
			});
			return bootstrap;
		}
		async function logoutHarnessAuth() {
			bootstrap = void 0;
			await fetch("/onclaw/api/session/logout", {
				method: "POST",
				cache: "no-store"
			}).catch(() => void 0);
			appStore.getSnapshot().setToken(null);
			appStore.getSnapshot().setUserInfo(null);
		}
		//#endregion
		//#region src/harness/client/HarnessPageShell.tsx
		function PageGate({ page: Page, visible, sessionId, tabId }) {
			const { token, themeMode } = useAppStore();
			const [ready, setReady] = (0, react.useState)(Boolean(token));
			(0, react.useEffect)(() => {
				bootstrapHarnessAuth().finally(() => setReady(true));
			}, []);
			if (!ready) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "flex h-full w-full items-center justify-center text-text-gold",
				children: "正在连接 onclaw..."
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "onclaw-plugin-root flex h-full w-full min-h-0 min-w-0 flex-col overflow-hidden bg-bg-primary text-text-primary",
				"data-theme": themeMode,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PageActivityProvider, {
					value: {
						visible,
						sessionId,
						tabId,
						scopeKey: `${sessionId}:${tabId}`
					},
					children: token ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Page, {}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(LoginScreen, {})
				})
			});
		}
		function HarnessPageShell(props) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(QueryClientProvider, {
				client: sharedQueryClient,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(AppProvider, { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PageGate, { ...props }) })
			});
		}
		//#endregion
		//#region src/constants/paymentPlans.ts
		const PAYMENT_PLANS = [{
			id: "MONTHLY",
			name: "月度会员",
			price: 98,
			originalPrice: 198,
			desc: "立即开通 30 天会员权益",
			tag: "推荐"
		}, {
			id: "YEARLY",
			name: "年度会员",
			price: 998,
			originalPrice: 1176,
			desc: "全年会员，比按月订阅更划算",
			tag: "最省"
		}];
		//#endregion
		//#region src/components/PaymentModal.tsx
		function PaymentModal({ isOpen, onClose }) {
			const [selectedPlan, setSelectedPlan] = (0, react.useState)("YEARLY");
			const [payType, setPayType] = (0, react.useState)("alipay");
			const [loading, setLoading] = (0, react.useState)(false);
			const [paymentStep, setPaymentStep] = (0, react.useState)("idle");
			const [currentOrder, setCurrentOrder] = (0, react.useState)(null);
			const { setUserInfo } = useAppStore();
			const pollTimerRef = (0, react.useRef)(null);
			(0, react.useEffect)(() => () => stopPolling(), []);
			(0, react.useEffect)(() => {
				if (!isOpen) {
					stopPolling();
					setPaymentStep("idle");
					setCurrentOrder(null);
				}
			}, [isOpen]);
			const stopPolling = () => {
				if (pollTimerRef.current) {
					window.clearInterval(pollTimerRef.current);
					pollTimerRef.current = null;
				}
			};
			const startPolling = (orderNo) => {
				stopPolling();
				pollTimerRef.current = window.setInterval(async () => {
					try {
						if ((await onclawApi.checkOrderStatus(orderNo)).status === "PAID") {
							stopPolling();
							await handlePaymentSuccess();
						}
					} catch (error) {
						console.error("Check status failed:", error);
					}
				}, 3e3);
			};
			const handlePaymentSuccess = async () => {
				setPaymentStep("success");
				try {
					const userInfo = await onclawApi.getMyInfo();
					setUserInfo(userInfo);
				} catch (error) {
					console.error("Refresh user info failed:", error);
				}
			};
			const openPaymentUrl = async (url) => {
				await platformAPI.externalNavigator.openExternal(url);
			};
			const handleCreateOrder = async () => {
				setLoading(true);
				try {
					const res = await onclawApi.createOrder({
						plan_type: selectedPlan,
						pay_type: payType
					});
					setCurrentOrder({
						orderNo: res.order_number,
						url: res.payment_url,
						amount: res.amount
					});
					setPaymentStep("paying");
					openPaymentUrl(res.payment_url);
					startPolling(res.order_number);
				} catch (error) {
					alert(error.message || "创建订单失败");
				} finally {
					setLoading(false);
				}
			};
			if (!isOpen) return null;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(OverlaySurface, {
				className: "z-50 flex items-center justify-center bg-[var(--overlay-bg)] p-2 backdrop-blur-sm",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "flex max-h-[calc(100%-1rem)] w-full max-w-[480px] flex-col overflow-hidden rounded-xl border border-border-theme bg-bg-secondary shadow-2xl animate-fade-in-up",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-border-theme bg-bg-tertiary px-6 py-4",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
							className: "text-lg font-bold text-text-gold",
							children: "会员订阅"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							onClick: onClose,
							className: "text-text-secondary hover:text-text-primary",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
								className: "h-5 w-5",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									strokeWidth: 2,
									d: "M6 18L18 6M6 6l12 12"
								})
							})
						})]
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "min-h-0 overflow-y-auto p-6",
						children: [
							paymentStep === "idle" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: "mb-6 grid grid-cols-2 gap-4",
									children: PAYMENT_PLANS.map((plan) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										onClick: () => setSelectedPlan(plan.id),
										className: `relative cursor-pointer rounded-lg border-2 p-4 transition-all ${selectedPlan === plan.id ? "border-[var(--accent)] bg-[var(--accent-soft)]" : "border-border-theme bg-bg-primary hover:border-[var(--border-strong)]"}`,
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: "absolute -right-3 -top-3 rounded-full bg-[var(--danger)] px-2 py-1 text-xs text-[var(--danger-contrast)]",
												children: plan.tag
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
												className: "mb-1 font-bold text-text-primary",
												children: plan.name
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
												className: "text-2xl font-bold text-text-gold",
												children: ["¥", plan.price]
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
												className: "text-sm text-text-muted line-through decoration-gray-500",
												children: ["¥", plan.originalPrice]
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
												className: "mt-2 text-xs text-text-secondary",
												children: plan.desc
											})
										]
									}, plan.id))
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "mb-6",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: "mb-2 text-sm text-text-secondary",
										children: "支付方式"
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "flex gap-4",
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											onClick: () => setPayType("alipay"),
											className: `flex-1 rounded border py-2 ${payType === "alipay" ? "border-[var(--accent)] bg-[var(--accent-soft)] text-text-gold" : "border-border-theme text-text-secondary"}`,
											children: "支付宝"
										}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											onClick: () => setPayType("wxpay"),
											className: `flex-1 rounded border py-2 ${payType === "wxpay" ? "border-[var(--negative)] bg-[color:var(--negative)]/10 text-[var(--negative)]" : "border-border-theme text-text-secondary"}`,
											children: "微信支付"
										})]
									})]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									onClick: handleCreateOrder,
									disabled: loading,
									className: "flex w-full items-center justify-center rounded-lg bg-accent-theme py-3 font-bold text-[var(--accent-contrast)] transition-colors hover:bg-[var(--accent-hover)]",
									children: loading ? "创建订单中..." : "立即支付"
								})
							] }),
							paymentStep === "paying" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "py-8 text-center",
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "relative mx-auto mb-6 h-20 w-20",
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full border-4 border-border-theme" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { className: "absolute inset-0 animate-spin rounded-full border-4 border-[var(--accent)] border-t-transparent" })]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h4", {
										className: "mb-2 text-lg font-bold text-text-primary",
										children: "等待支付完成..."
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
										className: "mb-6 text-sm text-text-secondary",
										children: [
											"已为您打开支付页面，请完成支付。",
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("br", {}),
											"支付成功后，这里会自动刷新会员状态。"
										]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "mb-6 rounded border border-border-theme bg-bg-primary p-4 text-left text-sm text-text-secondary",
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: ["订单号: ", /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "text-text-gold",
											children: currentOrder?.orderNo
										})] }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: ["金额: ", /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
											className: "text-text-gold",
											children: ["¥", currentOrder?.amount]
										})] })]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											onClick: () => {
												if (currentOrder) openPaymentUrl(currentOrder.url);
											},
											className: "flex-1 rounded bg-accent-theme py-2 font-bold text-[var(--accent-contrast)] hover:bg-[var(--accent-hover)]",
											children: "重新打开支付页"
										}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											onClick: onClose,
											className: "rounded border border-border-theme px-4 text-text-secondary hover:text-text-primary",
											children: "稍后再说"
										})]
									})
								]
							}),
							paymentStep === "success" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "animate-fade-in py-8 text-center",
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: "mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[color:var(--negative)]/10 text-[var(--negative)]",
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
											className: "h-10 w-10",
											fill: "none",
											stroke: "currentColor",
											viewBox: "0 0 24 24",
											children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
												strokeLinecap: "round",
												strokeLinejoin: "round",
												strokeWidth: 3,
												d: "M5 13l4 4L19 7"
											})
										})
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h4", {
										className: "mb-2 text-2xl font-bold text-text-primary",
										children: "支付成功"
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
										className: "mb-8 text-text-secondary",
										children: "您的会员权益已到账。"
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										onClick: onClose,
										className: "w-full rounded-lg bg-[var(--negative)] py-3 font-bold text-[var(--danger-contrast)] hover:brightness-110",
										children: "返回继续使用"
									})
								]
							})
						]
					})]
				})
			});
		}
		//#endregion
		//#region src/components/StockLinkerPanel.tsx
		const HEALTH_LABEL = {
			idle: "待机",
			initializing: "初始化中",
			ready: "正常",
			degraded: "受限",
			unavailable: "不可用"
		};
		const AUTHORIZATION_LABEL = {
			uninitialized: "等待初始化",
			ready: "授权有效",
			unauthorized: "未授权",
			expired: "授权已过期",
			invalid_signature: "授权签名无效",
			version_mismatch: "授权版本不兼容",
			invalid_payload: "授权数据无效",
			unsupported: "不支持"
		};
		function StockLinkerPanel({ isCollapsed = false, showHeading = true }) {
			if (!platformAPI.stockLinker.isSupported) return null;
			const { linkerSettings, updateLinkerSettings, linkerState } = useAppStore();
			const { isSyncing, syncDirection, targetCode, clickMode } = linkerSettings;
			const { thsCode, tdxCode, runtimeHealth, authorizationState, linkerMessage, isRefreshingAuth } = linkerState;
			const handleManualSet = async (platform) => {
				if (!targetCode) return;
				try {
					const result = await platformAPI.stockLinker.setCode(platform, targetCode);
					if (!result.ok) throw new Error(result.message);
				} catch (error) {
					alert(error instanceof Error ? error.message : "设置失败");
				}
			};
			if (isCollapsed) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "py-3 border-t border-border-theme flex justify-center items-center",
				title: "交易联动",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
					className: `w-5 h-5 transition-colors ${isSyncing ? "text-[var(--negative)]" : "text-text-muted"}`,
					fill: "none",
					stroke: "currentColor",
					viewBox: "0 0 24 24",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 1.5,
						d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
					})
				})
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: `${showHeading ? "border-t border-border-theme p-3" : ""} w-full flex-shrink-0 text-xs`,
				children: [
					showHeading ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						className: "mb-2 font-bold text-text-gold",
						children: "交易联动"
					}) : null,
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-1.5 mb-3",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "onclaw-linker-row flex items-center justify-between bg-bg-primary px-2 py-1.5 rounded border border-border-theme",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "text-text-muted",
									children: "运行状态"
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "text-text-primary",
									children: HEALTH_LABEL[runtimeHealth]
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "onclaw-linker-row flex items-center justify-between bg-bg-primary px-2 py-1.5 rounded border border-border-theme",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "text-text-muted",
									children: "授权状态"
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "text-text-primary",
									children: AUTHORIZATION_LABEL[authorizationState]
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "onclaw-linker-row flex items-center justify-between bg-bg-primary px-2 py-1.5 rounded border border-border-theme",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "text-text-muted",
									children: "同花顺"
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "font-mono text-text-primary",
									children: thsCode
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "onclaw-linker-row flex items-center justify-between bg-bg-primary px-2 py-1.5 rounded border border-border-theme",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "text-text-muted",
									children: "通达信"
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "font-mono text-text-primary",
									children: tdxCode
								})]
							}),
							isRefreshingAuth ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "onclaw-linker-row bg-bg-primary px-2 py-1.5 rounded border border-border-theme text-text-gold break-all",
								children: "正在刷新客户端联动授权…"
							}) : null,
							linkerMessage ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "onclaw-linker-row bg-bg-primary px-2 py-1.5 rounded border border-border-theme text-text-secondary break-all",
								children: linkerMessage
							}) : null
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("fieldset", {
						className: "mb-3 border-0 p-0",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("legend", {
								className: "mb-1.5 font-medium text-text-secondary",
								children: "点击股票时"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "onclaw-linker-segment-group flex bg-bg-primary rounded border border-border-theme overflow-hidden w-full",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									onClick: () => updateLinkerSettings({ clickMode: "link" }),
									className: `onclaw-linker-segment flex-1 py-1.5 text-center ${clickMode === "link" ? "is-active" : ""}`,
									children: "联动客户端"
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									onClick: () => updateLinkerSettings({ clickMode: "popup" }),
									className: `onclaw-linker-segment flex-1 border-l py-1.5 text-center ${clickMode === "popup" ? "is-active" : ""}`,
									children: "弹出行情"
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-[10px] leading-4 text-text-muted",
								children: "选择联动本地客户端，或使用弹出行情回调。"
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("fieldset", {
						className: "mb-3 space-y-2 border-0 border-t border-border-theme p-0 pt-2",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("legend", {
								className: "mb-1 font-medium text-text-secondary",
								children: "自动同步"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "text-text-secondary",
									children: "启用客户端双向监听"
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "启用客户端自动同步",
									"aria-pressed": isSyncing,
									onClick: () => updateLinkerSettings({ isSyncing: !isSyncing }),
									className: `onclaw-linker-switch relative h-4 w-8 rounded-full ${isSyncing ? "is-active" : ""}`,
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { className: `absolute top-0.5 w-3 h-3 rounded-full bg-bg-secondary transition-all ${isSyncing ? "translate-x-[18px]" : "translate-x-0.5"}` })
								})]
							}),
							isSyncing ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1 text-[10px]",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => updateLinkerSettings({ syncDirection: "ths-to-tdx" }),
									className: `onclaw-linker-direction rounded py-1 ${syncDirection === "ths-to-tdx" ? "is-active" : ""}`,
									children: [
										"同花顺 ",
										"->",
										" 通达信"
									]
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => updateLinkerSettings({ syncDirection: "tdx-to-ths" }),
									className: `onclaw-linker-direction rounded py-1 ${syncDirection === "tdx-to-ths" ? "is-active" : ""}`,
									children: [
										"通达信 ",
										"->",
										" 同花顺"
									]
								})]
							}) : null
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("fieldset", {
						className: "flex flex-col gap-1.5 border-0 border-t border-border-theme p-0 pt-2",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("legend", {
								className: "mb-1 font-medium text-text-secondary",
								children: "手动联动"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								type: "text",
								value: targetCode,
								onChange: (e) => updateLinkerSettings({ targetCode: e.target.value }),
								className: "onclaw-linker-input w-full rounded px-2 py-1.5 text-center font-mono text-text-primary outline-none",
								placeholder: "股票代码"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "flex gap-1 text-[10px]",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => handleManualSet("ths"),
									className: "onclaw-linker-action flex-1 rounded py-1",
									children: "发同花顺"
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => handleManualSet("tdx"),
									className: "onclaw-linker-action flex-1 rounded py-1",
									children: "发通达信"
								})]
							})
						]
					})
				]
			});
		}
		//#endregion
		//#region src/hooks/useAccountApiToken.ts
		const REVEAL_LIFETIME_MS = 6e4;
		function useAccountApiToken(enabled, accountIdentity) {
			const statusQuery = useQuery({
				...sdkQueryPolicy(onclawRuntime.queries.auth.apiTokenStatus()),
				queryFn: getMyApiTokenStatus,
				enabled,
				refetchOnMount: "always"
			});
			const [revealedToken, setRevealedToken] = (0, react.useState)(null);
			const [action, setAction] = (0, react.useState)("idle");
			const [copyState, setCopyState] = (0, react.useState)("idle");
			const [actionError, setActionError] = (0, react.useState)("");
			const [confirmingRegenerate, setConfirmingRegenerate] = (0, react.useState)(false);
			const revealTimerRef = (0, react.useRef)(null);
			const copyTimerRef = (0, react.useRef)(null);
			const lifecycleRef = (0, react.useRef)(0);
			const clearRevealTimer = (0, react.useCallback)(() => {
				if (revealTimerRef.current !== null) clearTimeout(revealTimerRef.current);
				revealTimerRef.current = null;
			}, []);
			const hideToken = (0, react.useCallback)(() => {
				clearRevealTimer();
				setRevealedToken(null);
			}, [clearRevealTimer]);
			const showTransientToken = (0, react.useCallback)((token) => {
				clearRevealTimer();
				setRevealedToken(token);
				revealTimerRef.current = setTimeout(() => {
					revealTimerRef.current = null;
					setRevealedToken(null);
				}, REVEAL_LIFETIME_MS);
			}, [clearRevealTimer]);
			(0, react.useEffect)(() => {
				const activeIdentity = enabled ? accountIdentity : "anonymous";
				lifecycleRef.current += 1;
				hideToken();
				setConfirmingRegenerate(false);
				setActionError("");
				setCopyState("idle");
				if (activeIdentity === "anonymous") setAction("idle");
			}, [
				accountIdentity,
				enabled,
				hideToken
			]);
			(0, react.useEffect)(() => () => {
				lifecycleRef.current += 1;
				clearRevealTimer();
				if (copyTimerRef.current !== null) clearTimeout(copyTimerRef.current);
			}, [clearRevealTimer]);
			const reveal = (0, react.useCallback)(async () => {
				const lifecycle = lifecycleRef.current;
				setAction("revealing");
				setActionError("");
				try {
					const result = await revealMyApiToken();
					if (lifecycle === lifecycleRef.current) showTransientToken(result.token);
				} catch (error) {
					if (lifecycle === lifecycleRef.current) setActionError(error instanceof Error ? error.message : "Token 显示失败，请稍后重试");
				} finally {
					if (lifecycle === lifecycleRef.current) setAction("idle");
				}
			}, [showTransientToken]);
			const copy = (0, react.useCallback)(async () => {
				const lifecycle = lifecycleRef.current;
				setAction("copying");
				setActionError("");
				try {
					const token = revealedToken ?? (await revealMyApiToken()).token;
					const copied = await platformAPI.clipboard.writeText(token);
					if (lifecycle !== lifecycleRef.current) return;
					setCopyState(copied ? "copied" : "failed");
					if (!copied) setActionError("复制失败，请检查剪贴板权限后重试");
					if (copyTimerRef.current !== null) clearTimeout(copyTimerRef.current);
					copyTimerRef.current = setTimeout(() => setCopyState("idle"), 2e3);
				} catch (error) {
					if (lifecycle === lifecycleRef.current) {
						setCopyState("failed");
						setActionError(error instanceof Error ? error.message : "Token 复制失败，请稍后重试");
					}
				} finally {
					if (lifecycle === lifecycleRef.current) setAction("idle");
				}
			}, [revealedToken]);
			const regenerate = (0, react.useCallback)(async () => {
				const lifecycle = lifecycleRef.current;
				setAction("regenerating");
				setActionError("");
				try {
					const result = await regenerateMyApiToken();
					if (lifecycle !== lifecycleRef.current) return;
					setConfirmingRegenerate(false);
					showTransientToken(result.token);
				} catch (error) {
					if (lifecycle === lifecycleRef.current) setActionError(error instanceof Error ? error.message : "Token 生成失败，请稍后重试");
				} finally {
					if (lifecycle === lifecycleRef.current) setAction("idle");
				}
			}, [showTransientToken]);
			return {
				status: statusQuery.data,
				statusLoading: statusQuery.isLoading,
				statusError: statusQuery.error?.message ?? "",
				refreshStatus: statusQuery.refetch,
				revealedToken,
				action,
				actionError,
				copyState,
				confirmingRegenerate,
				setConfirmingRegenerate,
				reveal,
				hideToken,
				copy,
				regenerate
			};
		}
		//#endregion
		//#region src/components/account/ApiTokenCard.tsx
		function formatCreatedAt(value) {
			if (!value) return "";
			const date = new Date(value);
			return Number.isNaN(date.getTime()) ? value : date.toLocaleString("zh-CN");
		}
		function IconButton({ label, disabled, onClick, children }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": label,
				title: label,
				disabled,
				onClick,
				className: "rounded-md p-2 text-text-secondary transition-colors hover:bg-[var(--hover-bg)] hover:text-text-primary disabled:cursor-not-allowed disabled:opacity-40",
				children
			});
		}
		function ApiTokenCard({ showTitle = true }) {
			const { token: sessionToken, userInfo } = useAppStore();
			const state = useAccountApiToken(Boolean(sessionToken && userInfo), userInfo ? String(userInfo.id) : "anonymous");
			const busy = state.action !== "idle";
			const displayValue = state.revealedToken ?? state.status?.masked_token ?? "尚未生成";
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [showTitle ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold uppercase tracking-[0.18em] text-text-muted",
						children: "API Token"
					}) : null, /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-6 text-text-secondary",
						children: "用于 api-client 和 Skill 调用数据接口。请像密码一样妥善保管，不要写入代码或公开仓库。"
					})] }),
					state.statusLoading ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "rounded-lg border border-border-theme bg-bg-primary px-4 py-5 text-sm text-text-secondary",
						children: "正在读取 Token 状态…"
					}) : state.statusError ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-[var(--notice-error-border)] bg-[var(--notice-error-bg)] p-4",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
							className: "text-sm text-[var(--notice-error-fg)]",
							children: ["Token 状态获取失败：", state.statusError]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => void state.refreshStatus(),
							className: "onclaw-button onclaw-button-secondary mt-3",
							children: "重试"
						})]
					}) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border-theme bg-bg-primary p-4",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-3",
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: "w-16 flex-none text-xs font-semibold text-text-muted",
										children: "TOKEN"
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", {
										className: "min-w-0 flex-1 break-all font-mono text-sm text-text-primary",
										"aria-live": "polite",
										children: displayValue
									}),
									state.status?.exists ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "flex flex-none items-center gap-1",
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconButton, {
												label: state.revealedToken ? "隐藏 Token" : "显示 Token",
												disabled: busy,
												onClick: () => void (state.revealedToken ? state.hideToken() : state.reveal()),
												children: state.revealedToken ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
													className: "h-5 w-5",
													fill: "none",
													stroke: "currentColor",
													viewBox: "0 0 24 24",
													children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
														strokeLinecap: "round",
														strokeLinejoin: "round",
														strokeWidth: 2,
														d: "M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c-1.5 4-4.5 6-9 6s-7.5-2-9-6c1.5-4 4.5-6 9-6s7.5 2 9 6z"
													})
												}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
													className: "h-5 w-5",
													fill: "none",
													stroke: "currentColor",
													viewBox: "0 0 24 24",
													children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
														strokeLinecap: "round",
														strokeLinejoin: "round",
														strokeWidth: 2,
														d: "M3 3l18 18M10.6 10.7a2 2 0 002.7 2.7M9.9 4.2A10.6 10.6 0 0112 4c4.5 0 7.5 2.7 9 8a11.8 11.8 0 01-2.1 3.5M6.2 6.2C4.7 7.4 3.6 9.4 3 12c1.5 5.3 4.5 8 9 8 1.1 0 2.1-.2 3-.5"
													})
												})
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconButton, {
												label: "复制 Token",
												disabled: busy,
												onClick: () => void state.copy(),
												children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
													className: "h-5 w-5",
													fill: "none",
													stroke: "currentColor",
													viewBox: "0 0 24 24",
													children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
														strokeLinecap: "round",
														strokeLinejoin: "round",
														strokeWidth: 2,
														d: "M8 8h10a2 2 0 012 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2V10a2 2 0 012-2zm-4 8H3a1 1 0 01-1-1V4a2 2 0 012-2h11a1 1 0 011 1v1"
													})
												})
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconButton, {
												label: "重新生成 Token",
												disabled: busy,
												onClick: () => state.setConfirmingRegenerate(true),
												children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
													className: "h-5 w-5",
													fill: "none",
													stroke: "currentColor",
													viewBox: "0 0 24 24",
													children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
														strokeLinecap: "round",
														strokeLinejoin: "round",
														strokeWidth: 2,
														d: "M20 11a8 8 0 10-2.3 5.7M20 4v7h-7"
													})
												})
											})
										]
									}) : null
								]
							}),
							state.status?.created_at ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-xs text-text-muted",
								children: ["生成时间：", formatCreatedAt(state.status.created_at)]
							}) : null,
							!state.status?.exists ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: busy,
								onClick: () => void state.regenerate(),
								className: "onclaw-button onclaw-button-primary mt-4",
								children: state.action === "regenerating" ? "生成中…" : "生成 Token"
							}) : null
						]
					}),
					state.confirmingRegenerate ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-[var(--notice-warning-border)] bg-[var(--notice-warning-bg)] p-4",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-text-primary",
								children: "确认重新生成 Token？"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs leading-5 text-text-secondary",
								children: "旧 Token 将立即失效，所有使用旧值的 api-client 与 Skill 都需要更新。"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex flex-wrap gap-2",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									disabled: busy,
									onClick: () => void state.regenerate(),
									className: "onclaw-button onclaw-button-danger",
									children: state.action === "regenerating" ? "重新生成中…" : "确认重新生成"
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									disabled: busy,
									onClick: () => state.setConfirmingRegenerate(false),
									className: "onclaw-button onclaw-button-secondary",
									children: "取消"
								})]
							})
						]
					}) : null,
					state.copyState === "copied" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: "text-xs text-[var(--notice-success-fg)]",
						children: "Token 已复制到剪贴板"
					}) : null,
					state.revealedToken ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: "text-xs text-text-muted",
						children: "明文将在 60 秒后自动隐藏。"
					}) : null,
					state.actionError ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: "rounded-md border border-[var(--notice-error-border)] bg-[var(--notice-error-bg)] px-3 py-2 text-xs text-[var(--notice-error-fg)]",
						children: state.actionError
					}) : null
				]
			});
		}
		//#endregion
		//#region src/harness/client/OnclawSettingsSection.tsx
		function SettingsCard({ title, children }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				className: "onclaw-settings-card rounded-xl p-5",
				children: [title ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
					className: "mb-4 text-base font-semibold text-text-primary",
					children: title
				}) : null, children]
			});
		}
		function formatAccessTraffic(bytes) {
			if (!Number.isFinite(bytes) || bytes <= 0) return "0 B";
			const units = [
				"B",
				"KB",
				"MB",
				"GB",
				"TB"
			];
			const unitIndex = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
			const value = bytes / 1024 ** unitIndex;
			return `${value >= 100 || unitIndex === 0 ? value.toFixed(0) : value.toFixed(1)} ${units[unitIndex]}`;
		}
		function OnclawSettingsContent() {
			const { token, userInfo, accessTier, themeMode } = useAppStore();
			const [paymentOpen, setPaymentOpen] = (0, react.useState)(false);
			const [refreshing, setRefreshing] = (0, react.useState)(false);
			const [refreshError, setRefreshError] = (0, react.useState)("");
			const [accessSummary, setAccessSummary] = (0, react.useState)(null);
			const [accessSummaryLoading, setAccessSummaryLoading] = (0, react.useState)(false);
			const [accessSummaryError, setAccessSummaryError] = (0, react.useState)("");
			const [copyState, setCopyState] = (0, react.useState)("idle");
			const copyResetRef = (0, react.useRef)(null);
			const signedIn = Boolean(token && userInfo);
			const linkerSupported = platformAPI.stockLinker.isSupported;
			const accessIdentity = `${userInfo?.id ?? ""}:${userInfo?.is_superuser ?? ""}:${userInfo?.vip_expiration ?? ""}`;
			const loadAccessSummary = (0, react.useCallback)(async () => {
				if (!signedIn) {
					setAccessSummary(null);
					setAccessSummaryError("");
					return;
				}
				setAccessSummaryLoading(true);
				setAccessSummaryError("");
				try {
					setAccessSummary(await onclawApi.getMyAccessSummary());
				} catch (error) {
					setAccessSummaryError(error instanceof Error ? error.message : "访问额度暂时无法获取");
				} finally {
					setAccessSummaryLoading(false);
				}
			}, [signedIn]);
			(0, react.useEffect)(() => {
				if (accessIdentity) loadAccessSummary();
			}, [loadAccessSummary, accessIdentity]);
			(0, react.useEffect)(() => () => {
				if (copyResetRef.current !== null) window.clearTimeout(copyResetRef.current);
			}, []);
			const fallbackEntitlementExpiration = accessSummary?.entitlement_expires_at ?? userInfo?.vip_expiration;
			const entitlementExpiry = accessSummary?.entitlement_valid_through ? accessSummary.entitlement_valid_through : fallbackEntitlementExpiration ? new Date(fallbackEntitlementExpiration).toLocaleDateString("zh-CN") : "长期";
			const accessDescription = (accessSummary ? accessSummary.tier === "normal" : accessTier === "normal") ? "普通访问日期：非交易日" : `高级访问有效至 ${entitlementExpiry} 23:59:59`;
			const frequencyUnit = accessSummary?.frequency.window_seconds === 60 ? "min" : `${accessSummary?.frequency.window_seconds ?? 60}s`;
			const frequencyText = accessSummaryLoading ? "频率 加载中…" : accessSummary?.usage_available ? `频率 ${accessSummary.frequency.usage ?? 0}次/${accessSummary.frequency.limit}次/${frequencyUnit}` : accessSummary ? `频率 —/${accessSummary.frequency.limit}次/${frequencyUnit}` : "频率 暂不可用";
			const trafficText = accessSummaryLoading ? "日限制 加载中…" : accessSummary?.usage_available && accessSummary.daily_traffic.used_bytes !== null ? accessSummary.daily_traffic.limit_bytes > 0 ? `日限制 ${formatAccessTraffic(accessSummary.daily_traffic.used_bytes)}/${formatAccessTraffic(accessSummary.daily_traffic.limit_bytes)}` : `日限制 ${formatAccessTraffic(accessSummary.daily_traffic.used_bytes)}/不限` : "日限制 暂不可用";
			const refreshAccount = async () => {
				setRefreshing(true);
				setRefreshError("");
				try {
					await authRuntime.refresh();
					await loadAccessSummary();
				} catch (error) {
					setRefreshError(error instanceof Error ? error.message : "账户信息刷新失败，请稍后重试");
				} finally {
					setRefreshing(false);
				}
			};
			const copyInvitationCode = async () => {
				const code = accessSummary?.invitation?.code;
				if (!code) return;
				const copied = await platformAPI.clipboard.writeText(code);
				setCopyState(copied ? "copied" : "failed");
				if (copyResetRef.current !== null) window.clearTimeout(copyResetRef.current);
				copyResetRef.current = window.setTimeout(() => setCopyState("idle"), 2e3);
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "onclaw-plugin-root onclaw-settings-root relative w-full p-5 text-text-primary",
				"data-theme": themeMode,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex w-full max-w-3xl flex-col gap-4 pb-8",
					children: [
						signedIn && userInfo ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(SettingsCard, { children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-5",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "min-w-[16rem] flex-[1.25]",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
											className: "flex min-w-0 items-center gap-3",
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: "onclaw-settings-avatar flex h-11 w-11 flex-none items-center justify-center rounded-full text-lg font-bold text-text-gold",
												children: userInfo.username?.slice(0, 1).toUpperCase() || "O"
											}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
													className: "truncate font-semibold text-text-primary",
													children: userInfo.username
												}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
													className: "mt-1 text-xs text-text-secondary",
													children: accessDescription
												})]
											})]
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
											className: "mt-3 flex flex-wrap gap-2",
											children: [
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setPaymentOpen(true),
													className: "onclaw-button onclaw-button-primary",
													children: accessTier === "vip" ? "续期高级访问" : "开通高级访问"
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
													type: "button",
													disabled: refreshing,
													onClick: () => void refreshAccount(),
													className: "onclaw-button onclaw-button-secondary",
													children: refreshing ? "刷新中…" : "刷新账户"
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => void authRuntime.logout(),
													className: "onclaw-button onclaw-button-danger",
													children: "退出登录"
												})
											]
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
											className: "mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-text-secondary",
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: frequencyText }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: trafficText })]
										})
									]
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "min-w-[12rem] flex-1 text-right",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center justify-end gap-2",
											children: [
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
													className: "text-xs text-text-muted",
													children: "推荐码"
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", {
													className: "font-mono text-sm font-semibold tracking-[0.12em] text-text-primary",
													children: accessSummaryLoading ? "加载中…" : accessSummary?.invitation?.display_code ?? "暂不可用"
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => void copyInvitationCode(),
													disabled: !accessSummary?.invitation,
													className: "onclaw-button onclaw-button-secondary px-2.5 py-1 text-xs",
													"aria-label": "复制推荐码",
													children: copyState === "copied" ? "已复制" : "复制"
												})
											]
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs leading-5 text-text-muted",
											children: "成功邀请新用户，双方各得15日高级权限试用。"
										}),
										accessSummary?.invitation ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-xs leading-5 text-text-secondary",
											children: [
												"已邀请 ",
												accessSummary.invitation.accepted_user_count,
												" 人 · 累计获得",
												" ",
												accessSummary.grant_sources.referral_days,
												" 日",
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("br", {}),
												"权益来源：注册 ",
												accessSummary.grant_sources.registration_days,
												" 日 · 邀请 ",
												accessSummary.grant_sources.referral_days,
												" 日 · 付费",
												" ",
												accessSummary.grant_sources.paid_days,
												" 日"
											]
										}) : null,
										copyState === "failed" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-[var(--notice-error-fg)]",
											children: "复制失败，请手动复制"
										}) : null
									]
								})]
							}),
							accessSummaryError ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
								className: "mt-3 rounded-md border border-[var(--notice-error-border)] bg-[var(--notice-error-bg)] px-3 py-2 text-xs text-[var(--notice-error-fg)]",
								children: ["访问额度暂不可用：", accessSummaryError]
							}) : null,
							refreshError ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: "mt-3 rounded-md border border-[var(--notice-error-border)] bg-[var(--notice-error-bg)] px-3 py-2 text-xs text-[var(--notice-error-fg)]",
								children: refreshError
							}) : null
						] }) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SettingsCard, {
							title: "账户登录",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "onclaw-auth-settings",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(LoginScreen, { embedded: true })
							})
						}),
						signedIn ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SettingsCard, {
							title: "API Token",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ApiTokenCard, { showTitle: false })
						}) : null,
						signedIn && linkerSupported ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SettingsCard, {
							title: "通达信与同花顺联动",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "onclaw-linker-settings",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(StockLinkerPanel, { showHeading: false })
							})
						}) : null
					]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PaymentModal, {
					isOpen: paymentOpen,
					onClose: () => setPaymentOpen(false)
				})]
			});
		}
		function OnclawSettingsSection(_props) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(QueryClientProvider, {
				client: sharedQueryClient,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(AppProvider, { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(OnclawSettingsContent, {}) })
			});
		}
		//#endregion
		//#region src/harness/client/compatibility-contract.ts
		const ONCLAW_CLIENT_CONTRACT = "ONCLAW-BASE-1";
		const ONCLAW_CLIENT_HIF_LEGACY = "ONCLAW-HIF-1";
		const ONCLAW_CLIENT_HIF_UI_WORKSPACE = "ONCLAW-HIF-2";
		var UnsupportedOnclawHarnessError = class extends TypeError {
			code = "ONCLAW_UNSUPPORTED_HARNESS";
			contract = ONCLAW_CLIENT_CONTRACT;
			missing;
			candidates;
			constructor(missing, candidates = [ONCLAW_CLIENT_HIF_UI_WORKSPACE, ONCLAW_CLIENT_HIF_LEGACY]) {
				super(`Unsupported Harness Client capabilities for ${ONCLAW_CLIENT_CONTRACT}. Missing: ${missing.join(", ")}. Candidates: ${candidates.join(", ")}.`);
				this.name = "UnsupportedOnclawHarnessError";
				this.missing = Object.freeze([...missing]);
				this.candidates = Object.freeze([...candidates]);
			}
		};
		function service(rawContext, name) {
			if (!rawContext || typeof rawContext !== "object") return void 0;
			const context = rawContext;
			if (typeof context.get === "function") try {
				const value = context.get(name);
				if (value !== void 0) return value;
			} catch {}
			try {
				return context[name];
			} catch {
				return;
			}
		}
		function hasMethod(owner, method) {
			return !!owner && typeof owner === "object" && typeof owner[method] === "function";
		}
		function createOnclawClientContract(rawContext) {
			if (!rawContext || typeof rawContext !== "object") throw new UnsupportedOnclawHarnessError(["context"]);
			const context = rawContext;
			const slots = service(rawContext, "slots");
			const sessions = service(rawContext, "sessions");
			const conversation = service(rawContext, "conversation");
			const workspaces = service(rawContext, "workspaces");
			const uiWorkspace = service(rawContext, "uiWorkspace");
			const sidebar = service(rawContext, "betterSidebar");
			const missing = [
				[
					context,
					"effect",
					"ctx.effect"
				],
				[
					slots,
					"inject",
					"slots.inject"
				],
				[
					slots,
					"register",
					"slots.register"
				],
				[
					sessions?.list,
					"getSnapshot",
					"sessions.list.getSnapshot"
				],
				[
					sessions,
					"scope",
					"sessions.scope"
				],
				[
					sessions,
					"open",
					"sessions.open"
				],
				[
					conversation?.input,
					"for",
					"conversation.input.for"
				],
				[
					workspaces?.list,
					"getSnapshot",
					"workspaces.list.getSnapshot"
				],
				[
					sidebar,
					"registerTab",
					"betterSidebar.registerTab"
				],
				[
					sidebar,
					"openTab",
					"betterSidebar.openTab"
				],
				[
					sidebar,
					"activateTab",
					"betterSidebar.activateTab"
				],
				[
					sidebar,
					"getSnapshot",
					"betterSidebar.getSnapshot"
				],
				[
					sidebar,
					"subscribeState",
					"betterSidebar.subscribeState"
				]
			].filter(([owner, method]) => !hasMethod(owner, method)).map(([, , label]) => label);
			const hasUiWorkspace = hasMethod(uiWorkspace, "connectWorkspace");
			const hasLegacyWorkspace = hasMethod(workspaces, "connectWorkspace");
			if (!hasUiWorkspace && !hasLegacyWorkspace) missing.push("uiWorkspace.connectWorkspace|workspaces.connectWorkspace");
			if (missing.length) throw new UnsupportedOnclawHarnessError(missing);
			const interfaceFamily = hasUiWorkspace ? ONCLAW_CLIENT_HIF_UI_WORKSPACE : ONCLAW_CLIENT_HIF_LEGACY;
			const workspaceNavigation = hasUiWorkspace ? uiWorkspace : workspaces;
			return {
				diagnostics: Object.freeze({
					contract: ONCLAW_CLIENT_CONTRACT,
					interfaceFamily
				}),
				sidebar,
				effect: context.effect.bind(rawContext),
				currentSessionId: () => sessions.list.getSnapshot().current,
				getWorkspaceSnapshot: () => workspaces.list.getSnapshot(),
				connectWorkspace: (workspaceId) => workspaceNavigation.connectWorkspace(workspaceId),
				scopeSession: (sessionId) => sessions.scope(sessionId),
				openSession: (sessionId) => sessions.open(sessionId),
				setConversationDraft: (sessionContext, text) => conversation.input.for(sessionContext).setDraft(text),
				injectSlot: (name, register) => slots.inject(name, register),
				registerSlot: (options, component) => slots.register(options, component)
			};
		}
		//#endregion
		//#region src/harness/client/default-layout.ts
		const RETIRED_ONCLAW_TAB_IDS = [
			"onclaw:supervision-history",
			"onclaw:market-data-daily",
			"onclaw:market-data-volume-trend"
		];
		function countTabs(node, tabId) {
			if (node.kind === "leaf") return node.tabs.filter((tab) => tab.id === tabId).length;
			return node.children.reduce((count, child) => count + countTabs(child, tabId), 0);
		}
		function removeTab(node, tabId) {
			if (node.kind === "leaf") {
				const tabs = node.tabs.filter((tab) => tab.id !== tabId);
				if (tabs.length === node.tabs.length) return node;
				return {
					...node,
					tabs,
					active: node.active === tabId ? tabs[tabs.length - 1]?.id ?? null : node.active
				};
			}
			const children = node.children.map((child) => removeTab(child, tabId));
			if (children.every((child, index) => child === node.children[index])) return node;
			return {
				...node,
				children
			};
		}
		function removeTabs(node, tabIds) {
			return tabIds.reduce((current, tabId) => removeTab(current, tabId), node);
		}
		function normalizeRetiredOnclawTabs(state) {
			return {
				splits: removeTabs(state.splits, RETIRED_ONCLAW_TAB_IDS),
				bottomSplits: removeTabs(state.bottomSplits, RETIRED_ONCLAW_TAB_IDS)
			};
		}
		function appendToFirstLeaf(node, tab, orderedTabIds) {
			if (node.kind === "leaf") {
				const targetOrder = orderedTabIds.indexOf(tab.id);
				let insertAt = node.tabs.length;
				if (targetOrder >= 0) {
					const laterDefault = node.tabs.findIndex((candidate) => {
						return orderedTabIds.indexOf(candidate.id) > targetOrder;
					});
					if (laterDefault >= 0) insertAt = laterDefault;
					else {
						const earlierDefaults = node.tabs.map((candidate, index) => ({
							index,
							order: orderedTabIds.indexOf(candidate.id)
						})).filter((candidate) => candidate.order >= 0 && candidate.order < targetOrder);
						if (earlierDefaults.length > 0) {
							const lastEarlierDefault = earlierDefaults[earlierDefaults.length - 1];
							if (lastEarlierDefault) insertAt = lastEarlierDefault.index + 1;
						}
					}
				}
				return {
					node: {
						...node,
						tabs: [
							...node.tabs.slice(0, insertAt),
							tab,
							...node.tabs.slice(insertAt)
						],
						active: tab.id
					},
					paneId: node.id
				};
			}
			const [first, ...rest] = node.children;
			if (!first) throw new Error("Better Sidebar split must contain at least one child");
			const placed = appendToFirstLeaf(first, tab, orderedTabIds);
			return {
				node: {
					...node,
					children: [placed.node, ...rest]
				},
				paneId: placed.paneId
			};
		}
		function createDefaultPanelTab(state, tab, panel, orderedTabIds = []) {
			const normalized = normalizeRetiredOnclawTabs(state);
			if (countTabs(normalized.splits, tab.id) + countTabs(normalized.bottomSplits, tab.id) === 1) {
				if (normalized.splits === state.splits && normalized.bottomSplits === state.bottomSplits) return { tab };
				return {
					tab,
					patch: normalized
				};
			}
			const splits = removeTab(normalized.splits, tab.id);
			const bottomSplits = removeTab(normalized.bottomSplits, tab.id);
			if (panel === "bottom") {
				const placed = appendToFirstLeaf(bottomSplits, tab, orderedTabIds);
				return {
					tab,
					patch: {
						splits,
						bottomSplits: placed.node,
						activePane: placed.paneId,
						bottomOpen: true,
						bottomOpenedOnce: true
					}
				};
			}
			const placed = appendToFirstLeaf(splits, tab, orderedTabIds);
			return {
				tab,
				patch: {
					splits: placed.node,
					bottomSplits,
					activePane: placed.paneId,
					panelOpen: true
				}
			};
		}
		//#endregion
		//#region src/harness/client/platform-adapter.ts
		const unavailableState = () => ({
			initialized: false,
			isSupported: false,
			runtimeHealth: "unavailable",
			authorizationState: "unsupported",
			message: "Harness native addon is unavailable",
			expiresAt: 0,
			ths: {
				name: "ths",
				code: "",
				health: "unavailable",
				lastError: "unsupported",
				updatedAt: 0,
				lastScanAt: 0,
				lastResolvedOffset: 0,
				available: false,
				usingFallback: false,
				directRead: false,
				pid: 0
			},
			tdx: {
				name: "tdx",
				code: "",
				health: "unavailable",
				lastError: "unsupported",
				updatedAt: 0,
				lastScanAt: 0,
				lastResolvedOffset: 0,
				available: false,
				usingFallback: false,
				directRead: false,
				pid: 0
			}
		});
		const harnessPlatformAPI = {
			legalDocuments: { getText: async (url) => {
				const response = await fetch("/onclaw/api/legal-content", {
					method: "POST",
					headers: { "content-type": "application/json" },
					cache: "no-store",
					body: JSON.stringify({ url })
				});
				const result = await response.json().catch(() => ({}));
				if (!response.ok || typeof result.content !== "string") throw new Error(String(result.message ?? "法律文档加载失败"));
				return result.content;
			} },
			stockLinker: {
				isSupported: isWindowsRuntime(),
				initRuntime: async (config) => {
					const response = await fetch("/onclaw/api/native/initialize", {
						method: "POST",
						headers: { "content-type": "application/json" },
						cache: "no-store",
						body: JSON.stringify(config)
					});
					const result = await response.json().catch(() => ({}));
					return response.ok ? result : {
						ok: false,
						authorizationState: "unsupported",
						message: String(result.message ?? "Harness native addon is unavailable"),
						runtimeHealth: "unavailable",
						expiresAt: 0
					};
				},
				getState: async () => {
					const response = await fetch("/onclaw/api/native/state", {
						method: "POST",
						cache: "no-store"
					});
					if (!response.ok) {
						const result = await response.json().catch(() => ({}));
						return {
							...unavailableState(),
							message: String(result.message ?? "Harness native addon is unavailable")
						};
					}
					return {
						...unavailableState(),
						...await response.json()
					};
				},
				setCode: async (target, code) => {
					const response = await fetch("/onclaw/api/native/set-code", {
						method: "POST",
						headers: { "content-type": "application/json" },
						body: JSON.stringify({
							target,
							code
						})
					});
					const result = await response.json().catch(() => ({}));
					return response.ok ? result : {
						ok: false,
						accepted: false,
						status: String(result.status ?? "unavailable"),
						target,
						code,
						message: String(result.message ?? "Harness native addon is unavailable")
					};
				}
			},
			externalNavigator: {
				isSupported: true,
				openExternal: async (url) => {
					const response = await fetch("/onclaw/api/external/open", {
						method: "POST",
						headers: { "content-type": "application/json" },
						body: JSON.stringify({ url })
					});
					if (!response.ok) return false;
					const result = await response.json();
					if (!result.ok || !result.url) return false;
					return Boolean(window.open(result.url, "_blank", "noopener,noreferrer"));
				}
			},
			credentialProtection: {
				encrypt: async () => null,
				decrypt: async () => null
			},
			clipboard: { writeText: async (value) => {
				if (!navigator.clipboard?.writeText) return false;
				try {
					await navigator.clipboard.writeText(value);
					return true;
				} catch {
					return false;
				}
			} }
		};
		//#endregion
		//#region src/harness/client/theme-adapter.ts
		function readHarnessHostTheme(targetDocument, darkMedia) {
			if (targetDocument.body.hasAttribute("data-ds-dark-theme")) return "dark";
			if (targetDocument.documentElement.style.colorScheme !== "") return "light";
			return darkMedia?.matches ? "dark" : "light";
		}
		function createBrowserHarnessThemeBindings() {
			const darkMedia = window.matchMedia("(prefers-color-scheme: dark)");
			return {
				read: () => readHarnessHostTheme(document, darkMedia),
				observe(listener) {
					const observer = new MutationObserver(listener);
					observer.observe(document.body, {
						attributes: true,
						attributeFilter: ["data-ds-dark-theme"]
					});
					observer.observe(document.documentElement, {
						attributes: true,
						attributeFilter: ["style"]
					});
					darkMedia.addEventListener?.("change", listener);
					return () => {
						observer.disconnect();
						darkMedia.removeEventListener?.("change", listener);
					};
				}
			};
		}
		/** Publishes the initial host scheme and subsequent changes with deduplication. */
		function startHarnessThemeSync(publish, bindings = createBrowserHarnessThemeBindings()) {
			let current;
			const synchronize = () => {
				const next = bindings.read();
				if (next === current) return;
				current = next;
				publish(next);
			};
			synchronize();
			const dispose = bindings.observe(synchronize);
			return () => dispose();
		}
		//#endregion
		//#region src/harness/client/transport.ts
		function parseRequestData(data) {
			if (typeof data !== "string") return data;
			try {
				return JSON.parse(data);
			} catch {
				return data;
			}
		}
		function normalizeParams(params) {
			if (!params || typeof params !== "object" || params instanceof URLSearchParams) {
				if (params instanceof URLSearchParams) return Object.fromEntries(params.entries());
				return;
			}
			return params;
		}
		const harnessHttpTransport = async (config) => {
			const body = {
				method: (config.method ?? "get").toUpperCase(),
				path: config.url ?? "",
				params: normalizeParams(config.params),
				data: parseRequestData(config.data),
				timeoutMs: typeof config.timeout === "number" && config.timeout > 0 ? Math.min(config.timeout, 18e4) : void 0
			};
			const response = await fetch("/onclaw/api/request", {
				method: "POST",
				headers: { "content-type": "application/json" },
				cache: "no-store",
				body: JSON.stringify(body)
			});
			const data = await response.json().catch(() => ({
				status: response.status,
				code: "INVALID_HOST_RESPONSE",
				message: "Harness Host returned invalid JSON"
			}));
			if (!response.ok) throw new AxiosError(typeof data?.message === "string" ? data.message : `Harness request failed (${response.status})`, String(data?.code ?? "HARNESS_REQUEST_FAILED"), config, void 0, {
				data,
				status: response.status,
				statusText: String(response.status),
				headers: {},
				config
			});
			return {
				status: response.status,
				data,
				headers: { "content-type": "application/json" }
			};
		};
		//#endregion
		//#region src/harness/client/index.tsx
		/**
		* Seed the visible Onclaw workbench tabs once for every Harness session.
		* Better Sidebar persists the resulting layout; the in-memory guard only
		* prevents state notifications from repeatedly activating the same tabs.
		*/
		function mountOnclawSessionTabs(service) {
			const initializedSessions = /* @__PURE__ */ new Set();
			const synchronize = () => {
				const snapshot = service.getSnapshot();
				if (!snapshot.sessionId || !snapshot.state || initializedSessions.has(snapshot.sessionId)) return;
				initializedSessions.add(snapshot.sessionId);
				const defaultPages = [...getDefaultPages("bottom"), ...getDefaultPages("side")];
				for (const page of defaultPages) service.openTab({
					type: page.harnessId,
					id: page.harnessId,
					title: page.title
				}, { sessionId: snapshot.sessionId });
				service.activateTab("onclaw:ladder", { sessionId: snapshot.sessionId });
			};
			const dispose = service.subscribeState(synchronize);
			synchronize();
			return dispose;
		}
		function HarnessTab(props) {
			const page = getPageById(props.pageId);
			const tabMeta = props.tab.meta;
			(0, react.useEffect)(() => {
				appStore.getSnapshot().setPageNavigationMeta(page.id, tabMeta);
			}, [page.id, tabMeta]);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(HarnessPageShell, {
				page: page.component,
				visible: props.visible,
				sessionId: props.scope.sessionId,
				tabId: props.tab.id
			});
		}
		function PageIcon({ path, size = 16 }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
				width: size,
				height: size,
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					d: path,
					strokeWidth: 1.5,
					strokeLinecap: "round",
					strokeLinejoin: "round"
				})
			});
		}
		const inject = [
			"betterSidebar",
			"slots",
			"sessions",
			"conversation"
		];
		function apply(rawCtx) {
			const ctx = createOnclawClientContract(rawCtx);
			configureRuntimeTarget("harness");
			ctx.effect(() => startHarnessThemeSync((mode) => appStore.getSnapshot().setThemeMode(mode)), "onclaw: Harness host theme adapter");
			ctx.effect(() => configureHttpTransport(harnessHttpTransport), "onclaw: Harness HTTP transport");
			ctx.effect(() => configurePlatformAPI(harnessPlatformAPI), "onclaw: Harness platform adapter");
			ctx.effect(() => configureAuthLogout(logoutHarnessAuth), "onclaw: Host session logout");
			ctx.effect(() => {
				const style = document.createElement("style");
				style.dataset.plugin = "dsh-fin-onclaw";
				style.textContent = _onclaw_harness_css_default;
				document.head.appendChild(style);
				return () => style.remove();
			}, "onclaw: scoped styles");
			ctx.effect(() => configureNavigation({ open: ({ page, meta, sessionId }) => {
				const definition = getPageById(page);
				ctx.sidebar.openTab({
					type: definition.harnessId,
					id: definition.harnessId,
					meta
				}, sessionId ? { sessionId } : void 0);
			} }), "onclaw: Better Sidebar navigation");
			for (const page of pageRegistry) ctx.effect(() => ctx.sidebar.registerTab({
				id: page.harnessId,
				title: page.title,
				order: page.order,
				single: true,
				...page.defaultPanel ? { createTab: (state) => createDefaultPanelTab(state, {
					id: page.harnessId,
					type: page.harnessId,
					title: page.title
				}, page.defaultPanel, getDefaultPages(page.defaultPanel).map((candidate) => candidate.harnessId)) } : {},
				icon: (size) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PageIcon, {
					path: page.iconPath,
					size
				}),
				component: (props) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(HarnessTab, {
					...props,
					pageId: page.id
				})
			}), `onclaw: register ${page.harnessId}`);
			ctx.effect(() => mountOnclawSessionTabs(ctx.sidebar), "onclaw: mount visible session tabs");
			ctx.effect(() => isWindowsRuntime() ? startStockLinkerSync() : () => void 0, "onclaw: Windows stock-linker supervisor");
			ctx.injectSlot("settings.section", () => ctx.registerSlot({
				name: "settings.section",
				id: "onclaw",
				order: 40,
				label: "onclaw"
			}, OnclawSettingsSection));
			bootstrapHarnessAuth();
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		exports.mountOnclawSessionTabs = mountOnclawSessionTabs;
		return module.exports;
	}
});
