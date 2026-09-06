# dsh-fin-onclaw

Onclaw 的 DeepSeek Harness 商业工作台插件。当前插件版本为 `0.2.0`。开发与类型校准基线固定为 DeepSeek Harness `0.1.1-rc.2`（tag `dsh-v0.1.1-rc.2`，commit `b150a551b8d465e31e418e1b2eaf5e79bbb7d28e`）与 `dsh-better-sidebar` `0.17.1`。插件版本采用独立的常规 SemVer；运行时跨版本能力和验证状态见 [`patch/README.md`](patch/README.md)，不得把开发基线误读为唯一目标版本，也不得把源码审查误读为正式支持。

## 工程边界

本目录是独立 Git submodule，负责依赖锁定、manifest、tag/HIF 事实、兼容矩阵、发布构建、适度混淆、验证、npm 包与 Git tag。业务页面和 Harness adapter 的唯一可编辑源码仍在母工程 `fiagent_frontend/src`。构建只允许从母工程单向导出已编译产物，不在本目录复制或修改业务 TypeScript/React 源码。为支持从 GitHub 地址直接安装，release tag 必须提交 `lib/`、`assets/`、`skills/`、可选 `native/`、`provenance.json` 和 `checksums.sha256`；这些是生成的发布闭包，不是第二份业务源码。

## 环境与依赖

- Node `^22.19.0 || >=24.0.0`；基线采用 Node 24 验证。
- DeepSeek Harness `0.1.1-rc.2` 的精确开发依赖；目标夹具使用事实库中的精确 providers。
- Better Sidebar 是独立兼容轴，目标夹具必须显式安装事实库记录的版本。
- 可访问的 Onclaw FastAPI、Redis 与 PostgreSQL。仅发布 Harness 时无需构建或部署 `dist-web`。
- Windows x64 的 `my_addon.node` 为可选运行能力；缺失、ABI 不兼容、未授权或不健康时，非 native 页面仍应正常加载并返回结构化降级状态。

首次进入子工程后执行：

```powershell
npm.cmd install
```

子工程的 `.npmrc` 固定启用 `legacy-peer-deps`，原因是部分 Better Sidebar/Harness 预发布 peer 无法被 npm 正确归入相邻预发布版本。这里不是放宽版本：开发宿主闭包在 `devDependencies` 中精确固定为 rc.2，发布 peer 只列出已审查的 Schemastery 与 Better Sidebar 精确版本并集，真实支持仍由目标安装和 clean-profile smoke 决定。

## 构建与验证

可读开发构建允许脏工作树，只用于本地诊断，且始终关闭 sourcemap：

```powershell
npm.cmd run build:dev
npm.cmd run verify:compatibility
npm.cmd run verify
```

正式硬化构建要求母、子工程均为 clean，存在锁文件，并记录两个 commit、锁文件摘要、基线、构建模式和混淆种子：

```powershell
npm.cmd run build:release
npm.cmd run verify:pack
```

在尚未提交的开发过程中，只可用以下明确标记的非发布路径验证混淆结果：

```powershell
npm.cmd run build:release:dev
npm.cmd run verify:pack
```

该路径生成的 `provenance.json` 中 `publishable` 为 `false`，不得发布。

同一 tarball 的静态跨版本矩阵在完成构建后运行：

```powershell
$env:DSH_CHECKOUTS_ROOT = "C:\path\to\deepseek-harness"
npm.cmd run verify:matrix
```

该命令只执行一次 `npm pack`，记录一个 SHA-256，并逐 tag 核对 immutable checkout 与 provider boot graph；结果写入忽略版本控制的 `release-evidence/compatibility-matrix.json`。需要真实创建临时 npm 夹具并安装每个可复现目标时运行 `npm.cmd run verify:matrix:install`。静态矩阵不是目标安装或 live smoke 的替代品，安装矩阵也不是 live smoke 的替代品。`alpha.1` 缺少精确 providers/可运行 checkout、`v0.1.3-alpha.1` 缺少精确 providers，必须如实显示为 blocked。

## 安装与运行

推荐从不可变 GitHub tag 安装，并同时固定该 Harness tag 对应的 Better Sidebar 版本。不要使用默认分支或可移动引用作为生产安装源。以 `0.2.0` 与 rc.2 目标为例：

```powershell
$env:DSH_HOME = "C:\path\to\isolated-dsh-home"
dsh plugin --profile web add "git+https://github.com/onclaw-dev/dsh-fin-onclaw.git#v0.2.0" "dsh-better-sidebar@0.17.1" --save-exact
dsh web --no-open
```

也可以安装已经验收的同一版本 tarball。必须使用实际文件路径和已记录的 SHA-256，不要把本地源码目录当作正式候选包：

```powershell
npm.cmd pack
$env:DSH_HOME = "C:\path\to\isolated-dsh-home"
dsh plugin --profile web add "C:\path\to\dsh-fin-onclaw-0.2.0.tgz" "dsh-better-sidebar@0.17.1" --save-exact
dsh web --no-open
```

rc.2 的 `web` 是固定 profile 别名，不能写成 `dsh web --profile <name>`。若 pnpm 11 首次安装因 Better Sidebar 的 `node-pty` 构建脚本而停止，只在该隔离 profile 的 `pnpm-workspace.yaml` 中把生成的 `allowBuilds.node-pty` 占位值改为 `true`，然后重跑同一条精确安装命令。Better Sidebar 0.17.1 声明的 DSH prerelease peer 范围会对 rc.2 产生告警；不得通过安装浮动或旧版 DSH 依赖来消除告警。

每个目标都复用同一 tarball 摘要。启动后检查 Host 无注入错误、正确 HIF 被选中、Better Sidebar 中 10 个业务页签和 settings 分节、共享登录、测试对话草稿、亮/暗主题、会话切换、卸载重载、native 成功与降级路径。profile 的具体状态/删除命令以目标 tag CLI `dsh plugin --help` 输出为准；操作前记录精确版本与 tarball SHA-256。

移除或回滚时，停止测试 profile，删除当前精确版本并安装上一已保留 tarball，再启动 Host 和硬刷新浏览器。不要通过浮动 npm tag 选择回滚版本。

## 发布与版本

插件使用常规 SemVer，当前版本为 `0.2.0`。`npm.cmd run version:next` 默认递增 patch；也可使用 `npm.cmd run version:next -- minor` 或 `-- major`。该命令同步修改 `package.json` 与 `package-lock.json`，不会改变 DSH 基线字段。

发布时先提交全部源码与版本元数据，随后从 clean 源提交执行 `npm.cmd run build:release` 和 `npm.cmd run verify:pack`。验证通过后，将生成的 GitHub 安装闭包提交为 release artifact commit；tag 必须指向该提交。`npm.cmd run release:prepare` 会创建 tarball 和本地 evidence，并同时记录构建 source revision 与 release artifact revision，列出但不会执行：

- `npm publish <tarball> --tag latest`
- `git tag -a v0.2.0 ...`

真实 publish、创建/推送 tag 都需要单独显式授权。只有 clean profile 对同一 tarball digest 的安装与 smoke 验收通过后才可发布；不得在 npm 发布与 GitHub tag 之间重新构建或替换产物。发布前还应从待发布 commit 的临时 clone 执行一次 GitHub 引用等价安装校验，确认安装不依赖母工程或本地未提交文件。

## 安全边界与排障

浏览器和本地插件均视为不可信。真实 bearer token 只由 Harness Host credentials 管理；后台认证、授权、最小数据下发、反爬、限流、重放控制与流量监控，以及现有 C++ 授权联动才是权威安全边界。无 sourcemap 和适度混淆仅提高逆向成本，包内不保存长期密钥或本地权威 entitlement 规则。

- `EADDRINUSE`：先检查遗留 DSH Host 进程和监听 PID。
- settings 或页签缺失：确认 profile 同时启用事实库中该 tag 对应的 Better Sidebar，并检查 Cordis 注入和 `ONCLAW_UNSUPPORTED_HARNESS` 日志。
- native 不可用：检查 Windows x64、Node ABI、`native/win-x64/my_addon.node`、登录授权状态；插件应继续以降级方式运行。
- 依赖冲突：不要放宽 semver；开发环境恢复精确 rc.2 lockfile，目标环境按事实库恢复精确 providers 和 Better Sidebar。
- provenance 拒绝：提交母、子工程的发布输入后重建；不要把开发 override 产物当成发布候选。
