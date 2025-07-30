import { ScreenView } from "@shared/components/ScreenView";
import { ScrollView } from "@shared/components/ScrollView";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useGroupedGoals } from "../../../hooks/UseGroupedGoals";
import { useState } from "react";
import { useGoalMutations } from "../../../hooks/UseGoal";
import { CheckboxCard } from "@shared/components/Checkbox";
import { TGroupedGoals } from "@modules/goal/types/GrupedGoals";
import { Trash2 } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@shared/components/Icon";
import { cn } from "@shared/utils/Styles";

export function DeleteGoalList() {
    const navigation = useNavigation<any>(),
        { groupedGoals } = useGroupedGoals(),
        { deleteManyGoals } = useGoalMutations();

    const [
        goalsToDelete, 
        setGoalsToDelete
    ] = useState<string[]>([]);

    const handleSetGoalsToDelete = (goalId: string) => {
        if (goalsToDelete.includes(goalId)) {
            return setGoalsToDelete(goalsToDelete.filter(id => id !== goalId));
        }

        setGoalsToDelete([...goalsToDelete, goalId]);
    }

    const handleDeleteGoals = async () => {
        await deleteManyGoals({ data: goalsToDelete, refetch: true });
        navigation.reset({
            index: 0,
            routes: [{ name: 'Tabs' }]
        });
    }

    return (
        <View className="flex-1 bg-white">
            <ScreenView>
                <View className="grid mb-6">
                    <Text className="text-3xl font-semibold text-primary mb-2">
                        Excluir metas
                    </Text>

                    <Text className="text-lg text-gray-600">
                        Selecione as metas que você deseja excluir
                    </Text>
                </View>

                {groupedGoals?.length
                    ? (
                        <ScrollView>
                            {groupedGoals.map(groupedGoal => (
                                <GroupedGoalList
                                    key={groupedGoal.id}
                                    groupedGoal={groupedGoal}
                                    setGoalsToDelete={handleSetGoalsToDelete}
                                    goalsToDelete={goalsToDelete}
                                />
                            ))}
                        </ScrollView>
                    )
                    : (
                        <Text>Nenhuma meta encontrada</Text>
                    )
                }
            </ScreenView>

            <View className="border-t-[1px] border-gray-200 bg-white">
                <SafeAreaView>
                    <View className="flex-row items-center justify-center gap-2 px-5 py-5">
                        <Text className="text-lg font-semibold">
                            {goalsToDelete.length} {goalsToDelete.length === 1 ? 'Meta' : 'Metas'} selecionadas
                        </Text>

                        <TouchableOpacity
                            disabled={goalsToDelete.length === 0}
                            className="absolute right-0 mr-10"
                            onPress={() => handleDeleteGoals()}
                        >
                            <Trash2 size={25} color={goalsToDelete.length === 0 ? '#9ca3af' : 'red'} />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>
        </View>
    )
}

type TGroupedGoalList = {
    groupedGoal: TGroupedGoals;
    setGoalsToDelete: (goalId: string) => void;
    goalsToDelete: string[];
}

function GroupedGoalList({ groupedGoal, setGoalsToDelete, goalsToDelete }: TGroupedGoalList) {
    const handleToggleGoal = (goalId: string) => {
        setGoalsToDelete(goalId);
    }

    return (
        <View className="mb-3">
            <View className="flex-row items-center gap-2 mb-5">
                <Icon name={groupedGoal.icon} size={20} color={groupedGoal.color} />
                <Text className="text-xl font-medium">{groupedGoal.description}</Text>
            </View>

            {groupedGoal.goals?.map(goal => (
                <CheckboxCard
                    key={goal.id}
                    checked={goalsToDelete.includes(goal.id)}
                    onPress={() => handleToggleGoal(goal.id)}
                    square
                    icon="X"
                    iconSize={16}
                    className="mb-4"
                    checkboxStyle={{
                        className: 'mt-[2px]'
                    }}
                    checkedColor="red"
                >
                    <Text className={cn(goalsToDelete.includes(goal.id) ? 'line-through text-gray-400' : '', 'text-lg flex-1')}>
                        {goal.description}
                    </Text>
                </CheckboxCard>
            ))}
        </View>
    )
}