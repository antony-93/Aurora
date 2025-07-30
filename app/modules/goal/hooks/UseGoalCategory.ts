import { useMutation } from "@shared/hooks/UseMutation";
import GoalCategoryRepository from "../repository/GoalCategoryRepository";
import { TGoalCategory } from "../types/GoalCategory";
import { TFilter, TParams, TSort } from "@shared/types/RequestTypes";
import { useState } from "react";
import { useQuery, useQueryById } from "@shared/hooks/UseQuery";

export function useGoalCategoryMutations() {
    const { 
        createMutation, 
        updateMutation, 
        updateManyMutation, 
        deleteMutation, 
        deleteManyMutation 
    } = useMutation({
        repository: new GoalCategoryRepository(),
        queryKey: 'goalCategories'
    });

    return {
        createGoalCategory: createMutation.mutateAsync,
        createGoalCategoryLoading: createMutation.isPending,
        updateGoalCategory: updateMutation.mutateAsync,
        updateGoalCategoryLoading: updateMutation.isPending,
        updateManyGoalCategories: updateManyMutation.mutateAsync,
        updateManyGoalCategoriesLoading: updateManyMutation.isPending,
        deleteGoalCategory: deleteMutation.mutateAsync,
        deleteGoalCategoryLoading: deleteMutation.isPending,
        deleteManyGoalCategories: deleteManyMutation.mutateAsync,
        deleteManyGoalCategoriesLoading: deleteManyMutation.isPending
    };
}

export function useGoalCategory(id: string) {
    const { 
        data: goalCategory, 
        isLoading, 
        isError, 
        error 
    } = useQueryById({
        repository: new GoalCategoryRepository(),
        queryKey: 'goalCategories',
        id
    });

    return {
        goalCategory,
        isLoading,
        isError,
        error
    };
}

export function useGoalCategories(params?: TParams<TGoalCategory>) {
    const [
        filters, 
        setFilters
    ] = useState<TFilter<TGoalCategory>[]>(params?.filters ?? []);

    const [
        sort, 
        setSort
    ] = useState<TSort<TGoalCategory>[]>(params?.sort ?? [{
        field: 'lowerDescription',
        direction: 'asc'
    }]);

    const { 
        data: goalCategories, 
        isLoading, 
        isError, 
        error 
    } = useQuery({
        repository: new GoalCategoryRepository(),
        queryKey: 'goalCategories',
        filters,
        sort
    });

    return {
        goalCategories: goalCategories,
        isLoading,
        isError,
        error,
        setFilters
    };
}