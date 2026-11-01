# Skills for Real Learners

当前仓库版本：**1.0**，以 [VERSION](VERSION) 为准。

一组在本地建立并持续执行学习计划的 Agent Skills。面向不同领域的自主学习者，用真实问题确定学习方向，通过计划、任务、教学和表现反馈持续推进。

## Installation

```bash
npx skills@latest add MingStudentSE/skill-for-real-learner
```

在安装器中选择下方 9 个当前 skill，无需另外安装其他 skill 套件。查证外部事实、制作课程和执行测试等工作需要 Agent 自身具备相应工具。

安装后在学习工作区运行 `/setup-learn-skills`，建立一个根 Agent 指令入口与多项目布局，保存本地路径和使用规则。已有配置与学习资料会被沿用；学习计划和教学记录由各自入口按需创建。

## 从哪里开始

### 长期学习

适合想持续提升一项能力、系统学习一个领域，或需要重新判断学习方向的人。

1. **配置学习环境 — [setup-learn-skills](docs/setup-learn-skills.md)**：建立公共学习配置与根 Agent 规则入口，让多个学习项目分别保存计划、任务和教学记录。首次配置后，新增项目沿用公共约定。
2. **判断长期方向 — [strategyfinder](docs/strategyfinder.md)**：当你不确定哪些方向值得持续投入时，从已有实践、时间、金钱、精力投入与反馈出发，识别关键假设，设计低成本真实测试，并维护长期战略地图与决策卡。方向明确时可直接制定计划。
3. **共同制定计划 — [to-plan](docs/to-plan.md)**：可以从模糊的学习意图开始，聊清目标、基础与可投入的资源，共同调整学习路线、方法、节奏和检验点；你同意具体方案后，再生成或更新学习计划。
4. **拆成可执行任务 — [to-task](docs/to-task.md)**：沿用当前对话中已明确的计划，或参考已有计划文件，从检验点倒推编号任务，写清行动、产出和验收条件。
5. **持续教学与检验 — [teach-me](docs/teach-me.md)**：在当前项目输入 `/teach-me 01`，开始或继续第 01 项任务。通过讲解、练习、独立表现与实际反馈检验理解，保存学习证据，并记录下一步。需要调整计划或重排任务时，由你再次调用对应入口。

已有计划可以直接拆任务，已有任务可以直接开始教学。长期方向判断与前置质询都按需使用。

### 立刻学习

适合现在就想弄懂一个概念、一段材料，或解决一个具体问题的人。可以直接带着问题开始，也可以先澄清自己究竟卡在哪里。

| 你现在需要什么 | 使用哪个 skill | 它会怎样帮助你 |
| --- | --- | --- |
| 马上开始学一个概念或解决一个问题 | [teach-me](docs/teach-me.md) | 直接输入 `/teach-me 我想理解……`，从当前理解出发，讲解、练习并检验表现；无需预先制定计划或创建任务，也无需先完成环境配置 |
| 梳理指定的书、文章、视频、章节或概念 | [learn-modeling](docs/learn-modeling.md) | 整理核心概念、关系、适用边界和难点，保留回到来源的位置，形成可供理解与教学使用的学习模型；模型本身不证明已经掌握 |
| 通过追问澄清一个想法、计划或决策 | [grill-me](docs/grill-me.md) | 显式启动一轮质询，逐步检查假设、分歧与尚未想清楚的决定 |
| 澄清学习问题，同时处理理解上的阻碍 | [grill-with-learn](docs/grill-with-learn.md) | 在质询中发现指定材料阻塞当前判断时，按需调用建模能力，理解后继续澄清问题 |

### 可复用的质询方法

[grilling](docs/grilling.md) 提供分轮访谈与追问方法，供质询入口和战略判断按需复用，也可以直接点名使用。

以上两条路径可以衔接：一次具体学习可以发展为长期计划，长期学习中也可以随时针对材料建模或澄清问题。每个 User-invoked 入口都由你显式启动，不会自动串联；`learn-modeling` 与 `grilling` 是 Model-invoked 能力，可被当前流程按需复用，也可直接点名。

## Learn

本项目维护的学习能力位于 `skills/learn/`。

| Skill | 调用方式 | 何时使用与交付 |
| --- | --- | --- |
| [setup-learn-skills](skills/learn/setup-learn-skills/SKILL.md) | User-invoked | 建立工作区配置与根 Agent 规则指针 |
| [grill-with-learn](skills/learn/grill-with-learn/SKILL.md) | User-invoked | 澄清学习目标或决策，指定材料阻塞判断时按需建模 |
| [strategyfinder](skills/learn/strategyfinder/SKILL.md) | User-invoked | 以质询分析实践投入与反馈，识别关键假设、设计真实测试，维护长期战略地图与决策卡 |
| [to-plan](skills/learn/to-plan/SKILL.md) | User-invoked | 澄清学习目标，按个人情况共同讨论方案，经用户同意后生成或修订计划，保存目标、路线、方法和检验点 |
| [to-task](skills/learn/to-task/SKILL.md) | User-invoked | 从计划检验点倒推编号任务，默认用简洁核心交付行动与验收，复杂任务按需展开 |
| [teach-me](skills/learn/teach-me/SKILL.md) | User-invoked | 按必要知识开展教学，通过机制解释、适用判断和实践反馈保存学习证据 |
| [learn-modeling](skills/learn/learn-modeling/SKILL.md) | Model-invoked | 将指定材料或概念建成可理解、可回到来源的内容模型 |

## Up-stream

下列独立 skill 保持官方正文与界面配置，位于 `skills/up-stream/`。

| Skill | 调用方式 | 用途 |
| --- | --- | --- |
| [grill-me](skills/up-stream/grill-me/SKILL.md) | User-invoked | 显式启动一轮质询 |
| [grilling](skills/up-stream/grilling/SKILL.md) | Model-invoked | 为质询入口与战略判断提供可复用的访谈方法 |

Model-invoked 能力也可由用户直接点名；User-invoked 入口不会被其他阶段自动启动。`strategyfinder` 以 `grilling` 为主干，从实践及时间、金钱、精力投入与反馈分析候选方向，按需查证关键假设并设计低成本真实测试；复盘后由用户决定加码、维持、缩小或暂停。仅在材料理解阻塞判断时加载 `learn-modeling`，不强制研究子代理或独立研究笔记。

## 工作区状态

- 环境配置记录目录、状态位置和协作规则，不承载学习进度。
- `MISSION.md` 与 `LEARNING-PLAN.md` 记录现实原因、能力目标和学习路线。
- 每个学习项目维护自己的使命、计划与教学证据；一个根 `AGENTS.md`（或已有权威入口）提供公共规则。
- `tasks/01-标题.md`、`02-标题.md` 等文件记录计划内的独立任务及验收条件；在当前项目输入 `/teach-me 01` 即可开始或继续第 01 项。
- 课程、参考资料、学习画像和学习记录支持持续教学；内容模型本身不证明掌握。
- `STRATEGY-MAP.md` 与 `strategy-decisions/` 只在需要长期取舍时建立或更新。

共享边界见 [ARTIFACTS](skills/ARTIFACTS.md)，具体文件格式随创建它的 skill 提供。

## DeepSeek Harness 插件

[学习工作台](docs/strategy-plugin.md)是统一的 DeepSeek Harness 插件，每个 skill 对应一个功能，逐个实现、逐个验收。当前第一个功能是学习战略（`strategyfinder`）：战略文件夹选择、方向投入对照、决策依赖图、真实测试反馈和显式讨论；工作台先列出功能，点开才展开。原有 Markdown 继续作为事实来源。构建与安装见[插件说明](plugins/learning-workbench/README.md)。

## Deprecated

退役能力保存在 [deprecated](skills/deprecated/README.md)，不作为当前入口。其原入口改名为 `ARCHIVED.md`，避免被基于 `SKILL.md` 的安装器发现。`to-sop` 已改为 `to-plan`；旧工作区的学习 SOP 可作为计划迁移输入，原文件不会被自动删除。

## 设计与维护

项目借鉴 [Matt Pocock Skills](https://github.com/mattpocock/skills) 的小型、独立、可组合能力设计。官方副本固定于提交 [`5beb35b`](https://github.com/mattpocock/skills/tree/5beb35b040e3de97e54fa9e386d7e42d15c295c2)：对应上游包版本 1.3.1 的后续 main 更新，不等同于 v1.3.1 标签。来源与统一许可见 [UPSTREAM](UPSTREAM.md)。`teach-me` 内保留完整教学正文及格式副本；`strategyfinder` 内的 research 与 prototype 副本暂按原字节保留，作为可选资料，无强制运行依赖，也不增加公开入口。

教学方法也借鉴《好好学习》《好好思考》及 [How I Use AI to Learn Things](https://www.youtube.com/watch?v=kzcI5F4tGiU)：区分来源与解释，以当前理解边缘安排教学，通过独立表现和真实行动反馈校准下一步。

第一次了解结构可读[项目全貌](docs/project-overview.md)，选择入口可读[人类文档](docs/README.md)。[skills 清单](skills/README.md)是调用分类的权威来源，[领域词汇表](CONTEXT.md)定义共同术语，[协作说明](AGENTS.md)约束仓库维护。
