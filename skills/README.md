# 学习

## User-invoked

以下入口只能由学习者手动选择。`strategyfinder`、`to-sop`、`to-task`、`teach-me` 与 `study-review` 各自独立；有共享工件时可以交接，没有工件时也不会彼此自动启动。

- [ask-ming](ask-ming/SKILL.md)：不确定该从哪个学习 skill 开始时，推荐一条由学习者手动执行的命令及其工件。
- [strategyfinder](strategyfinder/SKILL.md)：维护学习者唯一的长期战略地图，并逐张推进影响精力配置的战略决策。
- [grill-with-learn](grill-with-learn/SKILL.md)：通过上游 `grilling` 澄清学习使命或当前决策；指定材料阻塞判断时可复用 `learn-modeling` 建模。
- [learn-one-concept](learn-one-concept/SKILL.md)：以轻量互动带用户学懂一个概念，通过讲回、判断或微行动形成证据；用户选择保存时，可在本轮中复用 `learn-modeling` 建立概念模型。
- [teach-me](teach-me/SKILL.md)：在 `teach-core` 的完整教学工作区之上增加“问题—概念—行动—反思”闭环，以学习画像安排课程范围和难度，并以每节课的可检查目标控制停止。
- [to-sop](to-sop/SKILL.md)：将已澄清的学习讨论整理为可持续执行的学习 SOP，输出 `MISSION.md` 与 `LEARNING-SOP.md`。
- [to-task](to-task/SKILL.md)：依据学习 SOP 或已具备问题、时间或约束、起点或证据缺口的当前任务简报，规划下一批适应性学习任务，输出 `TASKS.md`。
- [study-review](study-review/SKILL.md)：根据已有作品或现场无提示展示检验掌握，输出证据化结论，并据此校正课程、SOP、任务或记录使命/战略信号。

## Model-invoked

以下能力可被当前学习流程复用：

- [teach-core](teach-core/SKILL.md)：完整镜像上游 `teach`，解除隐式调用限制后作为 `teach-me` 的基础教学能力。
- [learn-modeling](learn-modeling/SKILL.md)：把指定材料、章节、笔记片段或单个概念建成学习者能读懂的模型笔记，输出 `learning-models/` 中的材料模型或概念模型。

各 skill 自带其创建文件所需的格式说明；[ARTIFACTS.md](ARTIFACTS.md) 只说明这套学习流程共享哪些工件及其边界。
