import GoalRepository from "../repository/GoalRepository";
import { useMutation } from "@shared/hooks/UseMutation";
import { TFilter, TParams, TSort } from "@shared/types/RequestTypes";
import { TGoal } from "../types/Goal";
import { useQuery, useQueryById, useQueryCount } from "@shared/hooks/UseQuery";
import { useState } from "react";

export function useGoalMutations() {
    const { 
        createMutation, 
        updateMutation,
        updateManyMutation,
        deleteMutation,
        deleteManyMutation
    } = useMutation({
        repository: new GoalRepository(),
        queryKey: 'goals'
    });

    return {
        createGoal: createMutation.mutateAsync,
        createGoalLoading: createMutation.isPending,
        updateGoal: updateMutation.mutateAsync,
        updateGoalLoading: updateMutation.isPending,
        updateManyGoals: updateManyMutation.mutateAsync,
        updateManyGoalsLoading: updateManyMutation.isPending,
        deleteGoal: deleteMutation.mutateAsync,
        deleteGoalLoading: deleteMutation.isPending,
        deleteManyGoals: deleteManyMutation.mutateAsync,
        deleteManyGoalsLoading: deleteManyMutation.isPending
    };
}

export function useGoal(id: string) {
    const {
        data: goal,
        isLoading,
        isError,
        error
    } = useQueryById({
        repository: new GoalRepository(),
        queryKey: 'goals',
        id
    });

    return {
        goal,
        isLoading,
        isError,
        error
    };
}

export function useGoals(params?: TParams<TGoal>) {
    const [
        filters, 
        setFilters
    ] = useState<TFilter<TGoal>[]>(params?.filters ?? []);

    const [
        sort, 
        setSort
    ] = useState<TSort<TGoal>[]>(params?.sort ?? [{
        field: 'lowerDescription',
        direction: 'asc'
    }]);
    
    const {
        data: goals,
        isLoading,
        isError,
        error
    } = useQuery({
        repository: new GoalRepository(),
        queryKey: 'goals',
        filters,
        sort
    });

    return {
        goals,
        filters,
        setFilters,
        setSort,
        isLoading,
        isError,
        error
    };
}

export function useGoalsCount(params?: TParams<TGoal>) {
    const [
        filters, 
        setFilters
    ] = useState<TFilter<TGoal>[]>(params?.filters ?? []);

    const {
        data: goalsCount,
        isLoading,
        isError,
        error
    } = useQueryCount({
        repository: new GoalRepository(),
        queryKey: 'goals',
        filters
    });

    return {
        goalsCount,
        isLoading,
        isError,
        error,
        setFilters
    };
}