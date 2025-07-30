import { TGoalCategory } from "./GoalCategory";
import { TGoal } from "./Goal";

export type TGroupedGoals = TGoalCategory & {
    goals: TGoal[];
}