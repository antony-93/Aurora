import { useCallback, useRef, useState } from "react";
import { TFilter } from "@shared/types/RequestTypes";
import { TGoal } from "@modules/goal/types/Goal";
import { BadgeModal } from "@shared/components/Badge";
import { TBottomModal } from "@shared/types/ModalTypes";
import { EnumFilterOperator } from "@shared/enums/EnumFilterOperator";
import { Checkbox } from "@shared/components/Checkbox";
import { Text } from "react-native";

type TSituationFilterProps = {
    setFilters: (filters: TFilter<TGoal>[]) => void;
    filters: TFilter<TGoal>[];
}

export default function GoalSituationFilter({ setFilters, filters }: TSituationFilterProps) {
    const [
        filterName,
        setFilterName
    ] = useState<string>('Pendentes');

    const handleRemoveFilter = useCallback(() => {
        setFilterName('Todos');
        setFilters(filters.filter(f => f.field !== "isCompleted"));
        dimissModal();
    }, [filters, setFilters]);

    const handleSelectFilter = useCallback((value: boolean, filterName: string) => {
        setFilterName(filterName);

        const newFilter: TFilter<TGoal> = {
            field: "isCompleted",
            operator: EnumFilterOperator.Equals,
            value
        }

        const filter = filters.some(f => f.field === "isCompleted");
        
        if (!filter) {
            setFilters([...filters, newFilter]);
            return dimissModal();
        }

        const newFilters = filters.map(f => {
            if (f.field === "isCompleted") {
                return newFilter;
            }

            return f;
        });

        setFilters(newFilters);
        dimissModal();
    }, [filters, setFilters]);

    const situationModal = useRef<TBottomModal>(null);

    const dimissModal = useCallback(() => {
        situationModal.current?.close();
    }, []);

    return (
        <BadgeModal 
            text={filterName} 
            title="Situação"
            active={true}
            refModal={situationModal}
        >
            <Checkbox
                checked={filters.find(f => f.field === "isCompleted")?.value === false}
                onPress={() => handleSelectFilter(false, 'Pendentes')}
                size={8}
                radio
                className="mb-6 items-center"
            >
                <Text className="text-lg">
                    Pendentes
                </Text>
            </Checkbox>

            <Checkbox
                checked={!filters.find(f => f.field === "isCompleted")}
                onPress={handleRemoveFilter}
                size={8}
                className="mb-6 items-center"
            >
                <Text className="text-lg">
                    Todos
                </Text>
            </Checkbox>

            <Checkbox
                checked={filters.find(f => f.field === "isCompleted")?.value === true}
                onPress={() => handleSelectFilter(true, 'Concluídas')}
                size={8}
                radio
                className="items-center"
            >
                <Text className="text-lg">
                    Concluídas
                </Text>
            </Checkbox>
        </BadgeModal>
    )
}