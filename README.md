# 学习技能

一套面向任何学习领域的主流程。学习通过可执行的 SOP、适应性任务、持续教学和能力证据推进。

## 主流程

```text
用户调用 grill-me 或 grill-with-docs
              ↓
           to-sop
              ↓
          to-task
              ↓
            teach
              ↓
        study-review
       ↙       ↓       ↘
  下一批任务  补强学习  修订 SOP
```

- **[grill-me](skills/productivity/grill-me/SKILL.md) / [grill-with-docs](skills/engineering/grill-with-docs/SKILL.md)**：由用户主动调用，用来确定学习使命和下一项决策；领域需要持续维护术语表时使用 `grill-with-docs`。
- **[to-sop](skills/learning/to-sop/SKILL.md)**：将已经达成的共识整理为一个稳定阶段可持续执行的学习 SOP。
- **[to-task](skills/learning/to-task/SKILL.md)**：将 SOP 转化为当前月、周、日或单次学习的任务计划。
- **[teach](skills/productivity/teach/SKILL.md)**：持续开展教学；同一学习领域可累积多节课程、练习、资源和学习记录。
- **[study-review](skills/learning/study-review/SKILL.md)**：在复盘检查点核验已展示的能力，决定推进、补强或修订 SOP。

主流程不使用 `wayfinder`；它的议题追踪决策地图不是通用学习的基本单元。这里也没有 `/learn` 路由 skill 或独立质量门：相应标准已写入 SOP、任务与学习复盘。

## 工作区状态

流程会写入并复用以下工件：

- `MISSION.md`、`RESOURCES.md`、`lessons/`、`reference/`、`assets/` 和 `learning-records/`：由 `teach` 维护。
- `LEARNING-SOP.md`：当前学习阶段的行动规程。
- `TASKS.md`：当前适应性任务计划。
- `reviews/`：阶段复盘报告。

完整模板与更新规则见[学习工件](skills/learning/ARTIFACTS.md)。
