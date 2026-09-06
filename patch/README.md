# DeepSeek Harness 兼容性事实

`compatibility.json` 是 `dsh-fin-onclaw` 的机器事实源，`compatibility.schema.json` 固定其结构。它记录的是证据层级，不把“源码已审查”自动解释成“运行时已支持”。

## 契约分组

所有 tag 复用 ONCLAW-BASE-1，Host 当前统一为 ONCLAW-HOST-HIF-1。Client 仅有两类差异：

| Client HIF | 工作区导航 | Tags |
| --- | --- | --- |
| ONCLAW-HIF-1 | `workspaces.connectWorkspace` | `dsh-v0.1.0-rc.7`、`rc.8`、`dsh-v0.1.1-rc.1`、`rc.2` |
| ONCLAW-HIF-2 | `uiWorkspace.connectWorkspace` | `dsh-v0.1.2-alpha.1` 至 `alpha.5`、`dsh-v0.1.2-rc.1`、`dsh-v0.1.3-alpha.1` |

适配选择只看完整能力形态；tag/version 仅用于审计诊断。HIF-2 优先于 HIF-1，以处理同时暴露兼容服务的过渡宿主。

## 审查结论（2026-09-06）

| Tag | Client HIF | Registry | Better Sidebar | Package | Live smoke |
| --- | --- | --- | --- | --- | --- |
| dsh-v0.1.0-rc.7 | HIF-1 | passed | 0.13.1 formal | passed | not-run |
| dsh-v0.1.0-rc.8 | HIF-1 | passed | 0.17.1 formal | passed | not-run |
| dsh-v0.1.1-rc.1 | HIF-1 | passed | 0.17.1 candidate | passed | not-run |
| dsh-v0.1.1-rc.2 | HIF-1 | passed | 0.17.1 candidate/baseline | passed | not-run |
| dsh-v0.1.2-alpha.1 | HIF-2 | blocked | no match | blocked | blocked |
| dsh-v0.1.2-alpha.2 | HIF-2 | passed | 0.18.0-alpha.0 formal | passed | not-run |
| dsh-v0.1.2-alpha.3 | HIF-2 | passed | 0.18.0-alpha.0 formal | passed | not-run |
| dsh-v0.1.2-alpha.4 | HIF-2 | passed | 0.18.0-alpha.0 formal | passed | not-run |
| dsh-v0.1.2-alpha.5 | HIF-2 | passed | 0.18.0-alpha.0 formal | passed | not-run |
| dsh-v0.1.2-rc.1 | HIF-2 | passed | 0.18.0 formal | passed | not-run |
| dsh-v0.1.3-alpha.1 | HIF-2 | blocked | 0.18.0 candidate | blocked | not-run |

`dsh-v0.1.2-alpha.1` 还受到 Node 24.0–24.11.1 ESM loader 检测异常影响，本地仓库按既有管理规则不保留可运行 checkout。`dsh-v0.1.3-alpha.1` 有源码 checkout，但精确 split-client npm providers 尚不可得。

## 状态晋级

1. `audited`：对 immutable tag/commit 完成插件相关 Host、Client 和 slot 接口审查。
2. `registry`：目标精确 providers 可解析；禁止用邻近版本代替。
3. `packageVerification`：同一 tarball 在目标精确夹具完成安装和包验证。
4. `liveSmoke`：同一摘要在真实 Harness 验证 Host、Settings、Sidebar、对话草稿和卸载生命周期。

静态矩阵只证明 checkout commit、provider boot graph 与单一 tarball 的契约一致性，不会改写 `packageVerification` 或 `liveSmoke`。正式支持声明必须引用后两级的实际证据。

## 新 tag 流程

1. 固定官方 tag 与 40 位 commit，复制并初始化独立 checkout。
2. 对照 ONCLAW-BASE-1 审查 Host 能力及 Client 公共能力。
3. 先尝试归入现有 HIF；只有能力形态确实变化时才新增适配器。
4. 独立审查 Better Sidebar 的 API 与 peer 关系。
5. 更新 JSON 和 schema/validator 约束，运行 `npm run verify:compatibility`。
6. 只构建/pack 一次，先运行 `npm run verify:matrix`，再以 `npm run verify:matrix:install` 安装所有可复现目标并执行显式 live smoke。
7. 缺包、loader 故障或未执行项目保持 `blocked`/`not-run`，不得提升为 passed。
