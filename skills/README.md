# 学习

## User-invoked

以下入口只能由学习者手动选择。`strategyfinder`、`to-sop`、`to-task`、`teach-me` 与 `study-review` 各自独立，通过共享工件交接，不会彼此自动启动。

- [ask-ming](ask-ming/SKILL.md)：不确定该从哪个学习 skill 开始时，推荐一条由学习者手动执行的命令及其工件。
- [strategyfinder](strategyfinder/SKILL.md)：维护学习者唯一的长期战略地图，并逐张推进影响精力配置的战略决策。
- [grill-with-learn](grill-with-learn/SKILL.md)：通过上游 `grilling` 澄清学习使命或当前决策。
- [learn-one-concept](learn-one-concept/SKILL.md)：以轻量互动带用户学懂一个概念，通过讲回、判断或微行动形成证据；用户选择保存时，可在本轮中复用 `learn-modeling` 建立概念模型。
- [teach-me](teach-me/SKILL.md)：以“问题—概念—行动—反思”闭环调用上游 `teach`，开展有状态、跨会话的课程教学并沉淀课程工件。
- [to-sop](to-sop/SKILL.md)：将已澄清的学习讨论整理为可持续执行的学习 SOP，输出 `MISSION.md` 与 `LEARNING-SOP.md`。
- [to-task](to-task/SKILL.md)：根据学习 SOP 规划下一批适应性学习任务，输出 `TASKS.md`。
- [study-review](study-review/SKILL.md)：审查学习内容是否已改变真实判断或行动，输出复盘报告与校正结论。

## Model-invoked（也可手动调用）

以下能力可被当前学习流程复用，也可由学习者直接调用：

- [learn-modeling](learn-modeling/SKILL.md)：把指定材料、章节、笔记片段或单个概念建成学习者能读懂的模型笔记，输出 `learning-models/` 中的材料模型或概念模型。

各 skill 自带其创建文件所需的格式说明；[ARTIFACTS.md](ARTIFACTS.md) 只说明这套学习流程共享哪些工件及其边界。
