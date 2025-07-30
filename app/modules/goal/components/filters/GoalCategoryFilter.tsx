import { useCallback, useRef, useState } from "react";
import { TFilter } from "@shared/types/RequestTypes";
import { TGoal } from "@modules/goal/types/Goal";
import { BadgeModal } from "@shared/components/Badge";
import { TBottomModal } from "@shared/types/ModalTypes";
import { useGoalCategories } from "@modules/goal/hooks/UseGoalCategory";
import { Text } from "react-native";
import { Button } from "@shared/components/Button";
import { EnumFilterOperator } from "@shared/enums/EnumFilterOperator";
import GoalCategoryCheckbox from "../goalcategory/GoalCategoryCheckbox";
import { TGoalCategory } from "@modules/goal/types/GoalCategory";

type TGoalCategoryFilterProps = {
    setFilters: (filters: TFilter<TGoal>[]) => void;
    filters: TFilter<TGoal>[];
}

export default function GoalCategoryFilter({ setFilters, filters }: TGoalCategoryFilterProps) {
    const [
        selectedCategory,
        setSelectedCategory
    ] = useState<string[]>([]);

    const categoryModal = useRef<TBottomModal>(null);

    const { goalCategories } = useGoalCategories();

    const handleSelectCategory = ({ id }: TGoalCategory) => {
        if (selectedCategory.includes(id)) {
            return setSelectedCategory(prev => prev.filter(id => id !== id));
        }

        setSelectedCategory(prev => [...prev, id]);
    }

    const handleApplyFilters = useCallback(() => {
        if (!selectedCategory.length) {
            setFilters(filters.filter(filter => filter.field !== 'goalCategoryId'));
            return dimissModal();
        }

        const newFilter: TFilter<TGoal> = {
            field: 'goalCategoryId',
            operator: EnumFilterOperator.In,
            value: selectedCategory
        }

        if (!filters.some(filter => filter.field === 'goalCategoryId')) {
            setFilters([...filters, newFilter]);
            return dimissModal();
        }

        const newFilters = filters.map(filter => {
            if (filter.field === 'goalCategoryId') {
                return newFilter;
            }

            return filter;
        })

        setFilters(newFilters);
        dimissModal();
    }, [filters, selectedCategory, setFilters]);

    const dimissModal = useCallback(() => {
        categoryModal.current?.close();
    }, []);

    return (
        <BadgeModal
            text="Categoria"
            title="Categoria"
            active={filters.some(filter => filter.field === 'goalCategoryId')}
            refModal={categoryModal}
        >
            {goalCategories?.map(category => (
                <GoalCategoryCheckbox
                    key={category.id}
                    category={category}
                    checked={selectedCategory.includes(category.id)}
                    onPress={handleSelectCategory}
                    className="mb-2"
                />
            ))}

            <Button onPress={handleApplyFilters} className="mb-6">
                <Text className="text-white text-lg font-medium">
                    Aplicar filtros
                </Text>
            </Button>
        </BadgeModal>
    )
}