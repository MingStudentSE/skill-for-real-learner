# 学习工件

这些是共享状态，不是另一套课程。每个工件都应足够简短，以支持下一次决策。

本文件是完整学习套件的工件总览，不是单个 skill 的运行时依赖。每个创建工件的 skill 都在自己的 `references/` 中携带所需格式。

## `learning-models/<date>-<topic>.md`

`learn-modeling` 用学习模型保存一份指定材料的可学习版本。模型按材料章节顺序建立内容总览，区分核心与延伸内容、原材料内容与补充解释，并记录概念关系、前置知识桥、学习难点、来源导航与实际覆盖范围。其他流程需要理解同一材料时读取这个工件，而不是把结论重写进战略、SOP、任务或复盘文件。

学习模型不是学习过程记录、任务计划、学习复盘或掌握证明；`teach` 使用它来讲解、提问和练习。完整格式与边界见 [`learn-modeling/references/MODEL-FORMAT.md`](learn-modeling/references/MODEL-FORMAT.md)。

## `STRATEGY-MAP.md` 与 `strategy-decisions/`

`strategyfinder` 维护学习者唯一的长期战略地图和关键取舍。总图保存总体战略、当前阶段、精力配置原则、已定战略、尚未明确、明确不做与战略修订记录；每张决策卡在 `strategy-decisions/` 中独立保存问题、证据、关闭条件与结论。

完整格式与状态规则见 [`strategyfinder/references/map-format.md`](strategyfinder/references/map-format.md)。只有在学习者主动沟通并确认原战略被推翻时，才修改总体战略本身。

对于长期方向、重大精力配置或高不可逆选择，总图还保留不失败底座和当前复利假设的低分辨率摘要；相关决策卡记录护栏、支持证据、待验证条件与反证信号。它们只服务战略取舍，不代替阶段 SOP、任务计划或对生活其他领域的管理。

## `LEARNING-SOP.md`

一份 SOP 覆盖学习使命中的一个稳定阶段。学习复盘可以修订它；当使命或阶段方向发生实质变化时，创建新的 SOP。格式由 [`to-sop`](to-sop/SKILL.md) 随 skill 一起发布，见 [SOP 格式](to-sop/references/sop-format.md)。

## `TASKS.md`

该文件保存当前、可适应的任务计划。月计划定义里程碑，周计划选择当前工作，日计划明确下一步练习，单次任务则是最小可行动单元。只有在新证据使其有价值时，才细化下一个时间范围。格式由 [`to-task`](to-task/SKILL.md) 随 skill 一起发布，见 [任务格式](to-task/references/task-format.md)。

## `reviews/<date>-<checkpoint>.md`

复盘报告审查学习内容是否真正带来了更好的解释、判断或行动；它据此校正学习模型/课程、SOP 与任务，而非只检查流程是否完成或只给一个分数。格式由 [`study-review`](study-review/SKILL.md) 随 skill 一起发布，见 [复盘格式](study-review/references/review-format.md)。

只有当复盘确认了持久理解、纠正了误解，或发现会影响后续教学的变化时，才在 `learning-records/` 中另建记录。该记录使用 `teach` 所定义的格式。
