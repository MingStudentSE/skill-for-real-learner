# 仓库协作说明

## 结构

本仓库发布的学习 skill 都直接位于 `skills/<skill-name>/`，保持该目录平铺。每个 skill 以 `SKILL.md` 为入口，并在需要时携带 `agents/openai.yaml`、`references/` 或 `evals/`。上游依赖 `grilling`、`research` 与 `prototype` 由使用者另行安装，不属于本仓库的 skill 目录。`teach-core` 是唯一例外：它是对 Matt Pocock 上游 `teach` skill 的完整镜像。

`skills/README.md` 是 skill 清单及调用分类的权威来源；`skills/ARTIFACTS.md` 只定义跨流程共享工件的边界；`CONTEXT.md` 定义学习领域术语。各 skill 创建文件的具体格式保留在该 skill 自己的 `references/` 中，除非该格式明确继承自上游依赖。

除作为上游镜像保留的 `teach-core` 外，每个本仓库发布的 skill 都有一页面向人的文档，路径为 `docs/<skill-name>.md`；`docs/README.md` 是文档索引。文档帮助人判断何时使用，而不是复制 `SKILL.md` 的运行步骤或安装命令。

`.obsidian/`、`reference/`、`skills/matt/` 和 `.DS_Store` 都是本地内容，不要加入版本控制。

## 维护 `teach-core`

更新 `teach-core` 时，先查看 [Matt Pocock Skills](https://github.com/mattpocock/skills) 上游仓库当前的 `teach` skill，再完整同步 `SKILL.md`、`MISSION-FORMAT.md`、`RESOURCES-FORMAT.md`、`LEARNING-RECORD-FORMAT.md`、`GLOSSARY-FORMAT.md` 与 `agents/openai.yaml`。

同步后只保留以下本仓库差异：目录和 frontmatter `name` 改为 `teach-core`；删除 `disable-model-invocation: true`；删除 `policy.allow_implicit_invocation: false`；界面名称改为 `Teach Core`。`teach-core` 不承载本仓库自己的教学补丁；所有增量行为只写在 `teach-me`。完成时逐文件比较上游，确认没有其他正文或格式差异。

## 维护 `grill-with-learn`

`grill-with-learn` 有意沿用上游 `grill-with-docs` 的薄适配模式，只把文档建模能力替换为本仓库的 `learn-modeling`。`SKILL.md` 中“using `/learn-modeling`”表示在质询过程中可按需复用，不表示无条件建立学习模型。审计或修改时，以 `skills/README.md` 与 `docs/grill-with-learn.md` 的公开契约为准：仅当指定材料阻塞当前判断时才建模；不得仅因入口正文很短，而要求它重复 `grilling` 的流程分支、停止条件、交接边界或独立评测。

## 维护 skill 清单

新增、删除、重命名或改变一个 skill 的行为时，同时完成以下同步：

1. 更新根目录 `README.md` 与 `skills/README.md` 中对应的名称、分类、描述和指向 `SKILL.md` 的链接。
2. 重新阅读 `skills/ask-ming/SKILL.md`，更新它推荐的入口、工件说明和边界；它必须反映当前真实的选择，而不是过时的流程图。
3. 若共享工件边界改变，更新 `skills/ARTIFACTS.md`；若跨流程术语改变，更新 `CONTEXT.md`；若模板或评测受影响，同步对应 skill 的 `references/` 或 `evals/`。
4. 同步适用的 `docs/<skill-name>.md`；`teach-core` 不设此页面。重命名时移动旧页面，删除 skill 时删除旧页面。页面必须说明调用方式、触发边界、可观察的有效信号和与其他入口的关系。
5. 检查所有相对链接、旧目录名、旧 `/skill` 命令和交叉引用；仓库中不应遗留已废弃的嵌套目录链接。

## 调用契约

以 `skills/README.md` 中的分类为准。

- User-invoked skill 必须在 `SKILL.md` 中设置 `disable-model-invocation: true`，并在 `agents/openai.yaml` 中设置 `policy.allow_implicit_invocation: false`。它们由学习者显式选择；可以建议下一条 `/skill` 命令，但不会自动启动另一个阶段。
- Model-invoked skill 不设置上述禁用项，可在确有需要时被学习流程复用。`teach-core` 作为上游镜像保留，不列入面向学习者的入口、文档或 `ask-ming` 推荐。
- `ask-ming` 是导航器：默认推荐一条由学习者显式执行的下一步命令及其工件；只有确有重要取舍时才附一个备选。它既不运行被推荐的 skill，也不改写学习者工件。
- 各用户入口通过工件交接而保持独立。用 `STRATEGY-MAP.md`、`strategy-decisions/`、`MISSION.md`、`LEARNING-SOP.md`、`TASKS.md`、`learning-models/`、`learning-records/`、`reviews/` 及相关课程或参考工件表达前序状态，不把阶段自动串联起来。该规则不妨碍一个 skill 在确有需要时复用 model-invoked skill 或上游依赖。

## 修改与校验

保持 `SKILL.md` 的 `name` 与目录名一致，并保留清晰的 `description`。修改调用属性时，同步检查对应的 `agents/openai.yaml` 与两份 README 的分类是否一致。

完成修改前，确认仓库文档中的所有受影响链接存在、`ask-ming` 没有遗漏或指向不存在的入口，并运行 `git diff --check`。学习者工作区中的模板链接则按该 skill 的输出布局验证。提交前只暂存本次任务相关的文件。
