# AGENTS.md

本文件约束 `dsh-fin-onclaw` 的后续开发、校准、版控与发布。

## 所有权与同步

- FinAgent 母工程是业务页面、数据契约和 Harness adapter 的唯一可编辑源码。
- 子工程只拥有依赖/基线、manifest、构建硬化、验证、文档、provenance、npm 包和 Git tag。
- 只允许通过 `scripts/build.mjs` 调用母工程 `export:harness`，单向接收编译后的 `lib/assets/skills/native`；禁止在子工程维护业务源码副本。
- 候选包必须记录精确 parent commit、child commit、lockfile SHA-256、构建模式、插件版本和 DSH 基线。正式构建拒绝会影响产物的 tracked/untracked 脏输入；`build:release:dev` 只用于非发布验证。

## 固定基线与升级

- 当前不可变基线：DSH `0.1.1-rc.2`、tag `dsh-v0.1.1-rc.2`、commit `b150a551b8d465e31e418e1b2eaf5e79bbb7d28e`、Better Sidebar `0.17.1`、Schemastery `3.18.1`、React/React DOM `18.3.1`、Node `^22.19.0 || >=24.0.0`。
- 所有直接引用的 DSH 包和兼容输入必须使用精确版本，不得使用 `^`、`~`、`latest` 或 npm dist-tag。
- Better Sidebar 0.17.1 的 `^0.1.0-rc.8` prerelease peer 无法被 npm 判定为兼容 rc.2；保留 `.npmrc` 的 `legacy-peer-deps=true`，同时必须保留精确 rc.2 dev 宿主闭包和 runtime smoke，禁止借此引入浮动 DSH 版本。
- 升级任一基线必须新建受审 OpenSpec 变更，重做 API/type 对比、clean install、完整 staging 与 hardened 验收，不得只改版本字符串。
- `fflate`、`yaml` 等已被 Host/Client bundle 吸收的库不得留在发布 runtime dependencies；依赖列表只描述真实 external、type/inject contract。

## 保留标识符

- 包目录、npm name、Host name、Cordis row、ModuleLoader id、style owner 固定为 `dsh-fin-onclaw`。
- 不得改名：`onclaw:*` 页签、`onclaw-data`、`onclaw_data_interface`、业务 Tool、路由、后台 capability、公开 request/response 字段、native exports。
- DSH exports、Cordis service、ModuleLoader/React externals 与上述协议标识应同步维护在 `reserved-identifiers.json` 和验证中。

## 发布内容与硬化

- `files` allowlist 之外的内容不得发布。禁止源码、测试、sourcemap、`sourcesContent`、缓存、env、凭据、绝对工作站路径、Git 元数据、Web/Electron 产物和父仓库内容。
- production Host/Client 均关闭 sourcemap。Host 与 Client 使用不同、确定性记录的保守混淆 profile。
- 禁止 property rename、control-flow flattening、dead-code injection、self-defending、debug protection、运行时代码下载、加密 JS loader、长期密钥和本地权威 entitlement。
- native addon 是可选能力；缺失、ABI 不兼容、未授权或不健康不得阻止非 native 页面启动。
- 所有 syntax、Host import、ModuleLoader、生命周期、API、依赖闭包、资产、secret 和 profile 测试必须针对 hardened bytes 或精确 tarball。

## 版本、证据与发布顺序

- 首版 `0.1.1-rc.2.plugin.1` / `v0.1.1-rc.2.plugin.1`；插件修复只递增 `plugin.N`，DSH 字段保持不变。
- 顺序：clean install → staging suite → clean hardened build → verify/pack inspection → clean rc.2 profile smoke → 记录 tarball SHA-256 → 显式授权后 npm `rc2` publish → 创建/推送匹配 Git tag。
- 保留 package manifest、npm pack manifest、provenance、checksums、tarball digest、parent/child commits、自动化输出和 smoke matrix。证据不得包含 token/credential。
- `latest` 只能指向已经通过 clean-profile 验收的同一已发布 digest；不得为 promotion 重建包。
- 回滚必须安装先前精确插件版本和已验证 tarball；确认可用后才移动 dist-tag。不得删除仍用于回滚的版本或证据。

## 权威安全边界

本地 JavaScript、混淆和 native 编译只增加逆向成本。Host credentials、后台认证/授权、最小数据下发、反爬、限流、重放保护、流量监控与既有 C++ 授权联动始终是权威边界。任何本地绕过都不能扩大后台数据权限。
