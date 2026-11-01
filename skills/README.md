# Skill 清单

本文件是当前发布清单与调用分类的权威来源，共 **9 个 skill：7 个 User-invoked、2 个 Model-invoked**。

## Learn

本项目维护的学习能力，目录为 `learn/<skill-name>/`。

### User-invoked

- [setup-learn-skills](learn/setup-learn-skills/SKILL.md)：配置一个根 Agent 入口、多个学习项目及项目内状态路径。
- [grill-with-learn](learn/grill-with-learn/SKILL.md)：复用 `grilling` 澄清学习问题；指定材料阻塞判断时按需复用 `learn-modeling`。
- [strategyfinder](learn/strategyfinder/SKILL.md)：以 `grilling` 为主干，从实践及时间/金钱/精力投入与反馈分析候选方向，识别关键假设、按需查证外部事实并设计低成本真实测试；复盘后由用户决定加码、维持、缩小或暂停，维护唯一的长期战略地图与决策卡。仅在材料理解阻塞判断时复用 `learn-modeling`。
- [to-plan](learn/to-plan/SKILL.md)：澄清学习目标，根据个人基础、时间、精力和资源共同讨论方案，经用户同意后生成学习计划，输出 `LEARNING-PLAN.md`；战略与使命文件为可选参考。
- [to-task](learn/to-task/SKILL.md)：从计划检验点倒推编号任务，默认简洁核心，复杂任务按需展开步骤、反馈校正与检验，输出 `tasks/01-标题.md` 等独立文件。
- [teach-me](learn/teach-me/SKILL.md)：读取内部官方教学基础，支持 `/teach-me 01` 定位项目任务，按必要知识开展跨会话教学，连接概念、机制、适用判断与实践反馈，保存课程和证据。

### Model-invoked

- [learn-modeling](learn/learn-modeling/SKILL.md)：将指定材料、章节或概念建成学习模型，保存内容关系、边界与来源导航。

## Up-stream

原样同步的独立官方能力，目录为 `up-stream/<skill-name>/`。

### User-invoked

- [grill-me](up-stream/grill-me/SKILL.md)：显式质询入口，调用本项目内的 `grilling`。

### Model-invoked

- [grilling](up-stream/grilling/SKILL.md)：可复用的分轮访谈方法，供质询和战略流程调用。

官方 `teach` 保存在 [teach-me 内部](learn/teach-me/references/teach/SKILL.md)，不属于独立发布清单。官方 [research](learn/strategyfinder/references/research/SKILL.md) 与 [prototype](learn/strategyfinder/references/prototype/SKILL.md) 保存在 `strategyfinder` 内部，暂按原字节保留为可选资料，无强制运行依赖，同样不增加公开入口。全部官方副本的来源、固定版本与统一许可见 [UPSTREAM](../UPSTREAM.md)。当前流程无需额外安装其他 skill；外部事实查证与真实测试按需使用环境中可用的工具，不强制研究子代理或独立研究笔记。

## 调用与状态

`strategyfinder` 的可选界面是[Harness 学习工作台](../docs/strategy-plugin.md)中的学习战略功能。插件沿用本清单与原工件，不增加第十个 skill，也不自动启动其他用户入口。

User-invoked 入口由学习者显式启动，通过工件交接，不会相互自动启动。Model-invoked 能力可以按需被当前流程复用，也可被用户直接点名。

`to-task` 优先沿用当前对话已明确的计划，已有计划文件按需读取，不以文件存在为前提。`teach-me` 可在没有预先计划时先澄清使命并教学，但不会自动运行计划或任务入口。长期战略只在用户主动调用 `strategyfinder` 时维护。

文件格式由各 skill 自带；[ARTIFACTS](ARTIFACTS.md)只定义共享状态边界。

## Deprecated

[归档清单](deprecated/README.md)保留退出 MVP 的旧能力。其入口名为 `ARCHIVED.md`，不参与安装发现；归档内容及旧评测仅供历史查阅，不作为当前运行契约。`to-sop` 已原位改造为 `to-plan`，没有保留重复入口。
