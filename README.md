# dsh-fin-onclaw

Onclaw 的 DeepSeek Harness 商业工作台插件。当前发布基线固定为 DeepSeek Harness `0.1.1-rc.2`（tag `dsh-v0.1.1-rc.2`，commit `b150a551b8d465e31e418e1b2eaf5e79bbb7d28e`）与 `dsh-better-sidebar` `0.17.1`。首个插件版本为 `0.1.1-rc.2.plugin.1`。

## 工程边界

本目录是独立 Git submodule，负责依赖锁定、manifest、发布构建、适度混淆、验证、npm 包与 Git tag。业务页面和 Harness adapter 的唯一可编辑源码仍在母工程 `fiagent_frontend/src`。构建只允许从母工程单向导出已编译产物，不在本目录复制或修改业务 TypeScript/React 源码。

## 环境与依赖

- Node `^22.19.0 || >=24.0.0`；基线采用 Node 24 验证。
- DeepSeek Harness `0.1.1-rc.2` 的精确依赖声明。
- `dsh-better-sidebar` `0.17.1`。
- 可访问的 Onclaw FastAPI、Redis 与 PostgreSQL。仅发布 Harness 时无需构建或部署 `dist-web`。
- Windows x64 的 `my_addon.node` 为可选运行能力；缺失、ABI 不兼容、未授权或不健康时，非 native 页面仍应正常加载并返回结构化降级状态。

首次进入子工程后执行：

```powershell
npm.cmd install
```

子工程的 `.npmrc` 固定启用 `legacy-peer-deps`，原因是 Better Sidebar 0.17.1 发布 manifest 仍声明 prerelease range `^0.1.0-rc.8`，npm 不会把 `0.1.1-rc.2` 判为满足该范围。这里不是放宽版本：其宿主校准依赖均在 `devDependencies` 中精确固定为 `0.1.1-rc.2`，并由编译、契约测试和 clean-profile smoke 验证实际兼容性。

## 构建与验证

可读开发构建允许脏工作树，只用于本地诊断，且始终关闭 sourcemap：

```powershell
npm.cmd run build:dev
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

## 安装与运行

生成 tarball 后，将实际文件路径安装到独立测试 profile；不要把源码目录当作正式候选包：

```powershell
npm.cmd pack
dsh plugin --profile fin-onclaw-rc2 add "C:\path\to\dsh-fin-onclaw-0.1.1-rc.2.plugin.1.tgz"
dsh web --profile fin-onclaw-rc2
```

启动后检查 Host 无注入错误、Better Sidebar 中 10 个业务页签和 settings 分节、共享登录、亮/暗主题、会话切换、卸载重载、native 成功与降级路径。profile 的具体状态/删除命令以当前 rc.2 CLI `dsh plugin --help` 输出为准；操作前记录安装的精确版本与 tarball SHA-256。

移除或回滚时，停止测试 profile，删除当前精确版本并安装上一已保留 tarball，再启动 Host 和硬刷新浏览器。不要通过浮动 npm tag 选择回滚版本。

## 发布与版本

`npm.cmd run version:next` 只递增 `plugin.N`，不会改变 DSH 基线字段。clean 构建通过后，`npm.cmd run release:prepare` 会创建 tarball 和本地 evidence，列出但不会执行：

- `npm publish <tarball> --tag rc2`
- `git tag -a v0.1.1-rc.2.plugin.N ...`

真实 publish、推送 tag、移动 `latest` 都需要单独显式授权。只有 clean rc.2 profile 对同一 tarball digest 的验收记录通过后，才可把已发布的相同版本从 `rc2` 提升到 `latest`，不得重新构建替换。

## 安全边界与排障

浏览器和本地插件均视为不可信。真实 bearer token 只由 Harness Host credentials 管理；后台认证、授权、最小数据下发、反爬、限流、重放控制与流量监控，以及现有 C++ 授权联动才是权威安全边界。无 sourcemap 和适度混淆仅提高逆向成本，包内不保存长期密钥或本地权威 entitlement 规则。

- `EADDRINUSE`：先检查遗留 DSH Host 进程和监听 PID。
- settings 或页签缺失：确认 profile 同时启用 `dsh-better-sidebar@0.17.1`，并检查 Cordis 注入日志。
- native 不可用：检查 Windows x64、Node ABI、`native/win-x64/my_addon.node`、登录授权状态；插件应继续以降级方式运行。
- 依赖冲突：不要放宽 semver；重新安装精确 rc.2 基线并比较 lockfile。
- provenance 拒绝：提交母、子工程的发布输入后重建；不要把开发 override 产物当成发布候选。
