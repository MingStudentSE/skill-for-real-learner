# DSH Desktop 首页与学习工作空间聚焦调研

调研日期：2026-10-24。仅阅读远端资料；未安装、实现或改变现有构思。

## 结论

可以在原生 Harness 首页增加学习入口，并要求先选择真实学习目录、登记 Workspace、再创建会话。**新增独立工作台页面不等于替换默认首页；整块首页替换或全路径强制学习空间需要宿主集成。** 以下事实固定到 Desktop commit [`67df6719fb1895139cd1ac595b2367b5642be67c`](https://github.com/dataelement/dsh-desktop/commit/67df6719fb1895139cd1ac595b2367b5642be67c)（2026-10-23）；建议均未实施。

## 仓库与 upstream：事实

这是 Dataelem 的项目仓库，README 明确称其为“独立的社区桌面应用”，不是 DeepSeek 官方桌面产品。架构文档说明它是 Electron 宿主，直接复用 Harness runtime 与 Web UI，不维护第二套 agent runtime 或重写前端。当前 Desktop 版本 0.12.1，Harness 包依赖固定为 0.2.1-rc.2；postinstall 使用 patch-package 重放补丁。因此必须区分 upstream 已有接口与 Desktop 补丁新增接口。本文未核实 npm 发布版本对应的 upstream 源码提交，不能把 Desktop commit 当作 upstream commit。

来源：[README.zh.md](https://github.com/dataelement/dsh-desktop/blob/67df6719fb1895139cd1ac595b2367b5642be67c/README.zh.md)、[architecture.md](https://github.com/dataelement/dsh-desktop/blob/67df6719fb1895139cd1ac595b2367b5642be67c/docs/architecture.md)、[package.json](https://github.com/dataelement/dsh-desktop/blob/67df6719fb1895139cd1ac595b2367b5642be67c/package.json)。

## 首页、hero 与空会话：事实

入口属于 Conversation 渲染树。必须区分尚无 sessionId 与已有空白会话；无 sessionId 时输入框 inert，显示 workspace 占位和选择入口。已有空白会话并不命中所有无会话出口。

| 接缝 | 此固定版本的事实 | 学习入口边界 |
| --- | --- | --- |
| `main.conversation` | 原有 single / session-maybe Conversation shell | 不能凭 single 名称假定第三方可覆盖现有注册 |
| `conversation.hero.brand.mark` | Desktop UI 插件已经注册品牌组件 | 只能证明品牌替换，不能推出可替换整块 hero |
| `conversation.hero.options` | 原有 list / session，仅有 sessionId 时渲染 | 不适合会话创建前必做的目录设置 |
| `conversation.hero.modeActions` | Desktop 新增 list / session-maybe，位于 hero agent preset 一行 | 可增加学习模式入口，需要处理无 session 上下文 |
| `conversation.hero.dock` | Desktop 新增 list / session-maybe；输入框后且仅无 sessionId 时渲染 | 可做初次学习目录入口，已有空 session 不会命中 |
| `desktop.workbench.frame` | Desktop 新增 single / root；owner 为 `{ conversation: ReactNode }` | 包裹原生 Conversation；当前已被内置 workbenches 占用 |

`ConversationPanel` 先调用 `renderSlot("main.conversation", {})` 获得 conversation，再调用 `renderSlot("desktop.workbench.frame", { conversation }, { fallback: conversation })`。声明与实际出口都在补丁中：root scope 表示 frame 不依赖某一个 session，原生 Conversation 作为 owner 参数传入；无 frame 贡献项时直接返回原 Conversation。这不是创建第二份聊天界面的 API。

来源：[conversation 补丁：实际出口、声明及类型](https://github.com/dataelement/dsh-desktop/blob/67df6719fb1895139cd1ac595b2367b5642be67c/patches/%40deepseek-ai%2Bdsh-client-ui-conversation%2B0.2.1-rc.2.patch)、[Desktop UI 插件](https://github.com/dataelement/dsh-desktop/blob/67df6719fb1895139cd1ac595b2367b5642be67c/packages/dsh-desktop-client-ui/client.js)。

内置 workbenches 用 `main` 的独立 key `desktop-workbenches` 注册市场页面，用 sidebar quick switcher 导航，同时注册 `desktop.workbench.frame`。因此另一个插件不能注册同一 single slot 并假定无冲突覆盖；新增独立工作台也不会自动成为默认首页。[workbenches 注册](https://github.com/dataelement/dsh-desktop/blob/67df6719fb1895139cd1ac595b2367b5642be67c/packages/dsh-desktop-workbenches/client.js#L2403-L2428)

## 选择目录、登记 Workspace、会话 cwd：事实

内置工作台的 `newWorkspaceSession()` 依次调用 `uiWorkspace.pickDirectory()`、`workspaces.create({ path })`、新建工作台会话；取消目录选择则不继续。`createOwnedSession()` 调用 `sessions.create({ workspaceId })`。`ensureSession({ folder, sessionId })` 新建时要求非空 folder，先登记 Workspace 再创建会话；传已有 sessionId 时存在复用与归属检查分支。因此“新建必须有目录”不等于所有已有会话都符合学习目录要求。

来源：[workbenches client：createOwnedSession / ensureSession / newWorkspaceSession](https://github.com/dataelement/dsh-desktop/blob/67df6719fb1895139cd1ac595b2367b5642be67c/packages/dsh-desktop-workbenches/client.js#L1145-L1245)。

`uiWorkspace.pickDirectory()` 是客户端服务调用入口，内置工作台通过服务访问它，不是直接调用 preload DOM 私有实现。这证明目录选择不必在第三方代码里重写 Electron IPC，但本次未核实第三方包所需的完整 inject/type 契约及非 Desktop 下的降级行为，不能承诺跨宿主通用原生 picker。README 确认 Desktop 支持系统原生目录选择器，架构说明 privileged picker 经过窄 IPC，并校验发送窗口与主 frame。

来源：[同上调用代码](https://github.com/dataelement/dsh-desktop/blob/67df6719fb1895139cd1ac595b2367b5642be67c/packages/dsh-desktop-workbenches/client.js#L1210-L1225)、[README](https://github.com/dataelement/dsh-desktop/blob/67df6719fb1895139cd1ac595b2367b5642be67c/README.zh.md)、[architecture](https://github.com/dataelement/dsh-desktop/blob/67df6719fb1895139cd1ac595b2367b5642be67c/docs/architecture.md)。

Workspace 路径不能只当显示标签。空白会话复用要求同时满足 `summary.cwd === workspace.path`、会话位于 `workspace.sessionIds` 且未归档。`startSession` 接口注释允许未传 workspaceId 时继承当前或最近 Workspace；学习入口应显式指定目标。Desktop 的文件管理器菜单读取 session summary 的 cwd，缺失即报错。

来源：[workspace UI 补丁](https://github.com/dataelement/dsh-desktop/blob/67df6719fb1895139cd1ac595b2367b5642be67c/patches/%40deepseek-ai%2Bdsh-client-ui-workspace%2B0.2.1-rc.2.patch)、[Desktop UI 插件](https://github.com/dataelement/dsh-desktop/blob/67df6719fb1895139cd1ac595b2367b5642be67c/packages/dsh-desktop-client-ui/client.js)。

**关于一个学习根空间内多个子项目：** 上述代码只证明标准 Workspace 新建/空白复用以精确路径相等为准，没有证明一个登记在根目录的 Workspace 可自动包含任意子目录 cwd。可以在学习根目录内组织多个子项目文件，这是产品建议；若要求每个项目的 session cwd 指向子目录，是否要分别登记 Workspace、是否支持同一 Workspace 下不同 cwd，仍需核实 upstream workspace/session controller 完整实现，当前不作肯定断言。

另外，Electron `userData/launch-root` 是中性的 Harness 进程 cwd，`userData/harness` 是 DSH_HOME 与 Profile/会话状态存储位置，用户选择的 Workspace 是项目目录。不要把 launch-root、插件安装目录或 Profile 目录用作学习空间。[architecture](https://github.com/dataelement/dsh-desktop/blob/67df6719fb1895139cd1ac595b2367b5642be67c/docs/architecture.md)

## 对本项目的建议（不是现有能力声明）

| 目标 | 建议位置 | 限制 |
| --- | --- | --- |
| 原生主页增加学习入口和必选学习空间 | 学习插件使用 hero list 出口，调用目录选择与 Workspace/session 服务 | 同时覆盖无会话和已有空会话，不只使用 hero.dock |
| 完整默认首页呈现学习总览 | 宿主现有 Conversation / workbenches Frame 集成增加明确的首页配置或专属出口 | 当前 frame 已被内置插件使用，不能抢占 single slot |
| 学习操作必须使用所选空间 | 保存所选 Workspace 标识与路径，每次检查 session cwd / membership，并显式 workspaceId 建会话 | UI 提示或按钮禁用本身不是全路径约束 |
| 所有默认新会话都强制使用学习空间 | 调整宿主统一新会话导航流程 | 现有 registerSessionStarter 仅在 options 为 undefined 时拦截，且内置 workbenches 已使用 |
| 已有不同 cwd 会话进入学习 | 在选定学习 Workspace 中另开会话 | 不静默改已有会话 cwd 或工作台归属 |

workspace 补丁新增的 `registerSessionStarter`、`registerSessionOpener`、filters 等有重复注册抛错逻辑，并非多插件可并行注册的事件总线；内置 workbenches 已接入相关接口。[workspace UI 补丁](https://github.com/dataelement/dsh-desktop/blob/67df6719fb1895139cd1ac595b2367b5642be67c/patches/%40deepseek-ai%2Bdsh-client-ui-workspace%2B0.2.1-rc.2.patch)、[workbenches 使用处](https://github.com/dataelement/dsh-desktop/blob/67df6719fb1895139cd1ac595b2367b5642be67c/packages/dsh-desktop-workbenches/client.js#L2414-L2428)

仓库规范明确要求先核实真实 API/slot；缺接缝时补最小出口，禁止 preload 移动 React DOM、内部方法替换和猜测注册覆盖规则。相应业务应保留在自有模块；以上宿主建议遵循这一边界。[patch-plugin-contract.md](https://github.com/dataelement/dsh-desktop/blob/67df6719fb1895139cd1ac595b2367b5642be67c/docs/patch-plugin-contract.md)

## 待验证范围

本次足以回答“直接用主页”和“必须设学习工作空间”的可行方向，但没有进行安装包验证、slot 多贡献布局测试或跨窗口状态恢复测试。没有选定用户真实学习目录。尤其当前用户的 DeepSeek Harness GUI 不一定是这个 Dataelem Desktop 固定版本；实施前应核实实际宿主版本及接缝，不能把 Desktop 私有补丁能力当作 upstream 普遍能力。
