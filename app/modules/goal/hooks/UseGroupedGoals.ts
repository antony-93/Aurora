import { useMemo } from "react";
import { useGoals } from "./UseGoal";
import { useGoalCategories } from "./UseGoalCategory";
import { TGroupedGoals } from "../types/GrupedGoals";   
import { TParams } from "@shared/types/RequestTypes";
import { TGoal } from "../types/Goal";

type TUseGroupedGoalsProps = {
    goalsParams?: TParams<TGoal>;
}

export function useGroupedGoals(props?: TUseGroupedGoalsProps) {
    const { 
        goals, 
        setFilters: setGoalFilters,
        filters: goalFilters
    } = useGoals(props?.goalsParams);
    
    const { goalCategories } = useGoalCategories();

    const groupedGoals = useMemo(() => {
        if (!goalCategories || !goals) return [];

        const groupedGoals: TGroupedGoals[] = [];

        goalCategories.forEach(goalCategory => {
            const goalsForType = goals.filter(goal => goal.goalCategoryId === goalCategory.id);

            if (!goalsForType.length) return;

            groupedGoals.push({ ...goalCategory, goals: goalsForType });
        });

        return groupedGoals;
    }, [goalCategories, goals]);

    return {
        groupedGoals,
        goals,
        setGoalFilters,
        goalFilters
    };
}