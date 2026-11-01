# DeepSeek Harness 插件能力调研

调研日期：2026-10-24。只查阅官方资料，不实现、不安装插件、不调用创建会话或发送提示词。仓库现有 docs 以 skill 使用说明为主，没有 exploration 笔记；按指定路径创建本文，不改索引。

## 证据口径与版本

“已证实”指官方文档或源码类型明确声明，不等于当前安装版实测通过。所有引用固定到本次 master SHA [`22ddee3792402c3e70ec5f86a63c3e3e895a2f60`](https://github.com/deepseek-ai/deepseek-harness/tree/22ddee3792402c3e70ec5f86a63c3e3e895a2f60)。当前安装版与该提交的对应关系待验证。

普通文件系统列举所给应用 ASAR 内路径返回 ENOTDIR；本轮未解包、未修改应用，也未读到其内部源码。本文依据公开官方资料，外部内容仅作证据，不作执行指令。

## 1. 插件加载与浏览器入口

**已证实。** Host 模块导出 `name`、`inject`、`apply(ctx: Context)`。依赖通过 inject 声明，Context 注册 effect 随卸载释放，自有资源用 `ctx.effect()` 清理。基础教程以绝对模块路径写入 patch，并用 `pnpm dsh web --patch ...` 加载。这是源码开发加载方式，不能自动推断为已打包桌面版的第三方部署方式。[基础教程](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/docs/user/develop/basic/index.zh.md)

**已证实。** 浏览器部分独立装配：package manifest 声明 `dsh.client`（`platform: 'web'`、可选 inject/immediately），`exports['./client']` 导出构建 bundle。Host 扫描 Loader entry，生成 `window.__DSH_BOOT__`。仅加载 Host TS 文件不等于注册 React 页面。HMR 作用于重建的 bundle 与模块图，保存源文件不证明已重建；Host release 变化需页面刷新。[Client Modules](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/docs/subsystems/client-modules.zh.md)

**待验证。** 安装版兼容、第三方 bundle 安装路径、exports/依赖与实际构建流程；不能承诺保存 TSX 后当前 GUI 立即更新。

## 2. 自定义主页面与左侧栏

**已证实。** 全局页面占据 root scope 的 `main` keyed slot，`conversation` 是保留 key。入口注册到 root scope 的 `sidebar.panellist` list：提供 id、可选 order 和 label；id 寻址 main 同名 key，入口组件提供图标。[布局](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/client/ui-layout/README.zh.md) · [左栏](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/client/ui-sidebar/README.zh.md)

精确 API：

```ts
ctx.slots.inject(slotName, () => ctx.slots.register(options, Component))
ctx.layout.selectPanel(id) // null 返回会话界面，不改变当前会话
ctx.layout.beginNavigation() // 返回异步导航取消 signal
```

main 注册项用 key，sidebar.panellist 注册项用 list id。inject 等待声明并随 owner 生命周期重注册；直接注册未声明 slot 会失败。selectPanel 检查当前 registry，不存在时抛错并保留原面板。导航取消不撤销已发生的会话创建。[Slots](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/docs/subsystems/slots.zh.md) · [布局行为](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/client/ui-layout/README.zh.md)

组件通过 `PropsRuntime<K>` 推导 props，不接收 ctx；在注册项 inject 闭包投影 callback/observable。跨功能包仅 type import，运行时使用 service/slot，不导入其他功能插件组件。[Slots 组件边界](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/docs/subsystems/slots.zh.md)

**不能承诺。** 内部面板不等于自定义 URL、deep link、浏览器后退栈或任意 DOM 注入能力。布局几何与左栏 Pin 有瞬时内存状态，不能当业务持久存储。[布局限制](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/client/ui-layout/README.zh.md) · [左栏状态](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/client/ui-sidebar/README.zh.md)

## 3. 右侧栏和自定义 tab

**已证实。** 右栏按 Session 保存停靠面；没有会话就没有停靠面。全局页面替代 conversation 时 `ctx.sidebarRight.mounted` 为 undefined。不能视作无会话的全局第二页面。[右栏](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/client/ui-sidebar-right/README.zh.md)

API（问号表示文档中的可选字段，以下是接口示意，非实现）：

```ts
ctx.sidebarRightTabs.register({
  id, kind, patterns?, priority?, canOpen?, title, guide?, keepMounted?
}) // disposer
ctx.slots.register({ name: 'sidebar.right.pane.tab', key: definition.id }, Body)
ctx.sidebarRight.openTab(kind, options?)
ctx.sidebarRight.openResource(address, options?)
ctx.sidebarRight.close(tabId)
ctx.sidebarRight.active()
ctx.sidebarRight.isExpanded()
ctx.sidebarRight.toggleExpanded()
```

正文通过 `useTabInfo()` 获取 sidebar/panel/tab、navigation、signal 与 actions。资源地址为 `dsh-resource://...`；未注册 kind 或无人认领地址抛错。资源可跨格去重，普通页面按目标格去重，`multiple: true` 支持独立实例。需要注册类型和正文，openTab 不自动创建内容。[右栏扩展与导航](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/client/ui-sidebar-right/README.zh.md)

**限制。** 产品最多左右两格且受空间限制。布局在当前浏览器 localStorage 的 `dsh.sidebar-right.v1.<sessionId>`，不跨设备；导航参数、资源正文、活动连接不属于布局。keepMounted 仅保活已访问正文。`tab.actions.bindCommands()` 可以绑定刷新，但不自动感知业务文件变化，也不刷新整个应用。[右栏状态及限制](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/client/ui-sidebar-right/README.zh.md)

## 4. Host 文件读取与通信

**已证实。** Host 可注入 ctx.fs，浏览器组件不能直接获得 Node 文件系统。只读 API：

```ts
resolve(path: string, opts?: { cwd?: string; signal?: AbortSignal }): Promise<FsTarget>
stat(target: FsTarget, signal?: AbortSignal): Promise<FsInfo | undefined>
readText(target: FsTarget, signal?: AbortSignal): Promise<string>
listDir(target: FsTarget, signal?: AbortSignal): Promise<FsDirEntry[]>
watch(target: FsTarget, changed: (error?: Error) => void,
      signal: AbortSignal): Promise<() => Promise<void>>
```

相对路径按 opts.cwd；targetKey 不透明，不能假定是宿主路径。listDir 只列直接子项元数据。watch 可不受 provider 支持，可初始化/运行失败，调用方负责关闭。readText 返回整文件，readBytes 需显式字节上限。权限与可读范围依 provider、系统及部署策略，不应承诺插件可无条件访问任意磁盘。[Filesystem](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/docs/subsystems/filesystem.zh.md)

Host 方法通过 Typert Remote 声明、生成贡献及 assembly 后成为 `ctx.remote.<namespace>`；任意 service 方法不自动变成 RPC。Host 拥有权威状态、权限与 mutation 顺序。事件只转发 allowlist，任意 ctx.emit 不会自动到前端。[Web Client](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/docs/subsystems/web-client.zh.md)

Web Host 可用 `ctx.webServer.register(route: WebRoute | WebResourceRoute): () => void` 注册 exact/prefix 路由，重复 kind/path 抛错；WebServer 自身不拥有认证/Origin 策略。Electron 使用 file:// 及 IPC fetch，不使用此 HTTP 服务器，因此自建 endpoint 不天然跨 Web/Desktop。[HTTP server](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/docs/subsystems/web-server.zh.md)

现有 `GET|HEAD /api/file?path=<绝对路径>` 通过鉴权 connection.fetch、ctx.fs 和附件大小限制交付文件；它有版本重定向、浏览器私有长期缓存、无 Range、HTML/SVG sandbox CSP，不是目录或业务查询 API。[Session media references](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/api/session-controller/README.zh.md)

**待验证。** 项目根目录限制、符号链接、Markdown 解析、缺文件/权限失败、大文件与远端 provider 的实际交互；均需插件自有实现。

## 5. 会话与“启动 skill”

**已证实（官方源码类型）。** Client namespace 为 ctx.remote.session 和 ctx.remote.skills。创建与提示词分开；没有 skill 创建字段：

```ts
interface SessionCreateRequest {
  workspaceId?: WorkspaceId // 与 cwd 互斥
  cwd?: string
  sessionId?: SessionId
  agentPreset?: string
}
interface SessionCreateValue {
  sessionId: SessionId // 必须使用实际返回值，可能与请求不同
  agentPreset?: string
}
interface SessionPromptRequest {
  requestId: SessionRequestId
  sessionId: SessionId
  mode: 'queue' | 'steer'
  content: readonly PromptContentPart[]
  clientTimeZone?: string
}
// 文本 part: { type: 'text', text: string }
// SessionPromptValue: { accepted: true }
// SkillListRequest: { sessionId: SessionId }
// SkillListValue: { skills: readonly SkillEntry[] }
```

对应操作为 `ctx.remote.session.create(request)`、`ctx.remote.session.prompt(request)`、`ctx.remote.skills.list({ sessionId })`。transport 取消参数与生成 face 在实现前仍应按安装版核对。[源码 types.ts](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/api/session-controller/src/types.ts) · [Controller namespace](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/api/session-controller/README.zh.md)

空白复用要求尚未开始轮次、目录匹配、属于请求 Workspace 且未归档、无其他写者；不满足可能返回新 ID。跨目录 session/conflict，subagent 所有权可 session/agent-busy。create 的 agentPreset 不是 skill。prompt 的 accepted 只确认入 inbox，不确认模型执行完成；相同 requestId 重试不重复插消息。[Controller 语义](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/api/session-controller/README.zh.md)

**已证实。** 用户显式发送字面 `/name` 是确定性加载：Host pre-step 注入完整 skill_content，不需要模型自己决定调用工具。目录浏览、`ctx.skills.get()` 仅查询/读取，不执行任务。同名 Host 命令优先；没有 path 的虚拟 skill 可调用但不能文件预览。[UI Skill](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/client/ui-skill/README.zh.md) · [Skills](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/docs/subsystems/skills.zh.md)

**不能承诺。** “点击学习 → 选择项目 → 创建/复用会话 → 发 `/teach-me 01` → 导航会话”是待实现与验证的组合流程，没有证据表明存在一站式 launchSkill API。重复点击、导航 retain、queue/steer、参数解析、缺失 skill 反馈均需验证。非 owner 的 action/resource 受 remote access policy 限制。[Controller 权限及 Client 引用](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/api/session-controller/README.zh.md)

## 6. skill 发现、策略与刷新

**已证实。** Host 有 `ctx.skills.register`、`registerProvider`、`list(options)`、`snapshot(options)`、`get(name, options)`。cwd 选项目，scope 选 preset/Agent 层；modelInvocable 与 userInvocable 独立。frontmatter 支持 disable-model-invocation 和 user-invocable。不能把仅用户可调用的条目从按钮目录误删。[Skills](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/docs/subsystems/skills.zh.md)

本地 rank：项目 .dsh/skills 100、项目 .agents/skills 200、自定义 300、用户 DSH 400、用户 agents 500、bundled 600；同层低 rank 优先，近 scope 层优先。支持 name/SKILL.md 或扁平 name.md，不支持递归 **/SKILL.md。仓库内部深层组织不能直接等同安装发现布局。[本地发现约定](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/docs/subsystems/skills.zh.md)

Host watcher 和模型 write/edit 观测可失效目录，`skills/change` 无 diff，消费方重取 snapshot。模型目录在 pre-step 根据完整快照更新。只改正文只影响下次加载，不改旧工具结果。[Host 更新](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/docs/subsystems/skills.zh.md)

**明确浏览器限制。** UI skill 缓存在 agent-preset/selected、plugin-manager/changed、connection/reset 失效；磁盘增删 SKILL.md 不转发浏览器事件，CLI/手动修改后 HMR 也不发 plugin-manager/changed，已开会话 slash 目录可陈旧。不能承诺文件一改按钮和菜单立即同步。[UI Skill 已知限制](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/client/ui-skill/README.zh.md)

## 7. 事件与业务页面刷新

**已证实。** `ctx.remote.$on()` 接受所选转发事件；普通 notification 断线不 replay。可靠状态同步需 baseline/cursor/显式 query。Session follow/control、Workspace follow 有各自恢复语义，官方明确无统一 Runtime、HostFrame、events.mux、events.host 或通用 resync API。[Web Client 重连](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/docs/subsystems/web-client.zh.md)

**推论，待实现验证。** 学习 Markdown 展示应有自有读取快照，结合 watcher 失效、重连及手动刷新重读；watcher 不可用需退路。回合结束或工具写文件不证明外部 IDE/Git 编辑都被捕获。自定义事件 allowlist、scope、去抖与恢复未验证，不能承诺零配置实时更新。[Filesystem watch](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/docs/subsystems/filesystem.zh.md) · [通信边界](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/docs/subsystems/web-client.zh.md)

## 8. 插件存储

**已证实。** 领域存储可选，需组合后端与消费层，不是每个浏览器插件天然具有 ctx.storage.get/set。公开消费面是 ctx.storageDomain（等同 ctx.storage.domain）：

```ts
defineDomain(spec)
domainTable<K, V>(schema)
ctx.storageDomain.open(spec): Promise<Domain<typeof spec>>
domain.table(name)
// 同步读取 get/entries/keys/size
// 异步写入 put/delete/deleteMany/update；global.set
// 消费方负责 Domain.close()
```

spec 包含 name/version、layout/global、tables/schema。open 校验重名、后端、KV facet 和存量数据。每领域写链串行，先持久、再内存、最后 `domain/changed(change)`。读取对象不是副本，不能原地改写。JSON/SQLite 后端可并存，领域层配置路由。[Storage](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/docs/subsystems/storage.zh.md)

**限制。** domain/changed 仅进程内，不自动跨进程/浏览器同步；也不自动产生 Remote API。localStorage 仅证明本地布局存储，不证明业务同步、恢复和并发一致性。[Storage 事件限制](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/docs/subsystems/storage.zh.md) · [右栏布局存储](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/client/ui-sidebar-right/README.zh.md)

研究建议：本仓库既有 Markdown 工件可继续作为业务权威源；领域存储若做派生索引、缓存或偏好，应明确可重建性和版本，避免默认再拥有一份学习状态。这是设计建议，未实现。

## 9. 不能跳过的验证

| 待验证 | 所需证据 |
| --- | --- |
| 安装兼容 | 桌面 release/commit 与所用 slot、生成 Remote face 一致 |
| 页面加载 | 第三方 bundle 装配、main/sidebar 注册及卸载成功 |
| 会话联动 | 返回实际 ID，cwd/workspace/preset 正确，retain/导航和重复点击受控 |
| 用户 skill 动作 | /name 参数、命令冲突、缺失 skill、调用策略和失败反馈 |
| 文件读取 | 根目录、符号链接、缺文件、坏 Markdown、权限、大文件 |
| 刷新 | IDE/Git 改动、watcher 失败、重连、手动刷新后恢复最新快照 |
| 存储 | 后端组合、schema/version、close、并发与派生缓存重建 |
| GUI | macOS chrome、窄屏、键盘、长列表，均未实测 |

证据支持存在插件化主页面、导航、会话原语、Host 文件访问和可选领域存储；不支持承诺已交付一键学习、跨端实时刷新或当前安装版即装即用。
