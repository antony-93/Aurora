import { Menu, MenuItem } from "@shared/components/Menu";
import { CheckCircle, Plus, Star } from "lucide-react-native";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useGroupedGoals } from "../../hooks/UseGroupedGoals";
import { useGoalMutations, useGoalsCount } from "../../hooks/UseGoal";
import { ScrollView } from "@shared/components/ScrollView";
import { useState } from "react";
import { TGroupedGoals } from "../../types/GrupedGoals";
import { Button } from "@shared/components/Button";
import { cn, formatColorByPerc } from "@shared/utils/Styles";
import { TGoal } from "../../types/Goal";
import { CheckboxCard } from "@shared/components/Checkbox";
import { ScreenView } from "@shared/components/ScreenView";
import { Icon } from "@shared/components/Icon";
import { EnumFilterOperator } from "@shared/enums/EnumFilterOperator";
import GoalSituationFilter from "../../components/filters/GoalSituationFilter";
import GoalCategoryFilter from "@modules/goal/components/filters/GoalCategoryFilter";

export default function GoalList() {
    const navigation = useNavigation<any>();

    const {
        groupedGoals,
        setGoalFilters,
        goalFilters
    } = useGroupedGoals({
        goalsParams: {
            filters: [{
                field: 'isCompleted',
                operator: EnumFilterOperator.Equals,
                value: false
            }]
        }
    });

    const { goalsCount } = useGoalsCount({
        filters: [{
            field: 'isCompleted',
            operator: EnumFilterOperator.Equals,
            value: true
        }]
    });

    return (
        <ScreenView className="flex-1">
            <View className="mb-5 flex-col">
                <View className="flex-row justify-between items-center mb-5">
                    <View className="grid">
                        <Text className="text-4xl font-semibold text-primary">
                            Metas
                        </Text>

                        <View className="flex-row items-center gap-2">
                            <Star size={20} color="rgb(234 179 8)" />

                            <Text className="font-medium text-base text-gray-600">
                                {goalsCount} metas concluídas
                            </Text>
                        </View>
                    </View>

                    <Menu>
                        <MenuItem onPress={() => navigation.navigate('Goal', { screen: 'CreateGoal' })} title="Nova meta" />
                        <MenuItem onPress={() => navigation.navigate('Goal', { screen: 'DeleteGoalList' })} title="Excluir meta" />
                        <MenuItem onPress={() => navigation.navigate('Goal', { screen: 'CreateGoalCategory' })} title="Nova categoria" />
                        <MenuItem onPress={() => navigation.navigate('Goal', { screen: 'DeleteGoalCategoryList' })} title="Excluir categoria" />
                    </Menu>
                </View>

                <ScrollView horizontal>
                    <View className="flex-row items-center gap-2">
                        <GoalSituationFilter setFilters={setGoalFilters} filters={goalFilters} />
                        <GoalCategoryFilter setFilters={setGoalFilters} filters={goalFilters} />
                    </View>
                </ScrollView>
                {/* <ScrollView horizontal>
                    <View className="flex-row items-center gap-2">
                        <BadgeActive
                            text="Pendentes"
                            active={activeFilter === 'pending'}
                            onPress={() => handleFilterChange('pending')}
                        />
                        <BadgeActive
                            text="Concluídas"
                            active={activeFilter === 'completed'}
                            onPress={() => handleFilterChange('completed')}
                        />
                        <BadgeActive
                            text="Todas"
                            active={activeFilter === 'all'}
                            onPress={() => handleFilterChange('all')}
                        />
                    </View>
                </ScrollView> */}
            </View>

            {groupedGoals?.length
                ? (
                    <ScrollView>
                        {groupedGoals.map(groupedGoal => (
                            <GroupedGoalList key={groupedGoal.id} groupedGoal={groupedGoal} />
                        ))}
                    </ScrollView>
                )
                : (
                    <View className="flex-1 items-center justify-center mb-10">
                        <View
                            className="flex-col items-center justify-center rounded-full p-6 mb-7"
                            style={{ backgroundColor: formatColorByPerc('#4f46e5', 0.1) }}
                        >
                            <CheckCircle size={70} color={formatColorByPerc('#4f46e5', 0.5)} />
                        </View>

                        <Text className="text-3xl font-semibold mb-2 text-center">
                            Nenhuma meta encontrada
                        </Text>

                        <Text className="text-xl text-gray-600 text-center mb-5">
                            Comece adicionando suas metas para acompanhar seu progresso durante o ano
                        </Text>

                        <Button className="flex-row items-center gap-2" onPress={() => navigation.navigate('Goal', { screen: 'SelectGoalType' })}>
                            <Plus size={20} color="white" />

                            <Text className="text-white font-semibold">
                                Adicionar
                            </Text>
                        </Button>
                    </View>
                )
            }
        </ScreenView>
    )
}

type TGroupedGoalList = {
    groupedGoal: TGroupedGoals;
}

function GroupedGoalList({ groupedGoal }: TGroupedGoalList) {
    return (
        <View className="mb-3">
            <View className="flex-row gap-2 mb-5">
                <Icon className="mt-[2px]" name={groupedGoal.icon} size={20} color={groupedGoal.color} />
                <Text className="text-xl font-medium">{groupedGoal.description}</Text>
            </View>

            {groupedGoal.goals?.map(goal => (
                <GoalCard
                    key={goal.id}
                    goal={goal}
                    color={groupedGoal.color}
                />
            ))}
        </View>
    )
}

type TGoalCard = {
    goal: TGoal;
    color: string;
}

function GoalCard({ goal, color }: TGoalCard) {
    const [checked, setChecked] = useState(goal.isCompleted),
        [isUpdating, setIsUpdating] = useState(false),
        { updateGoal, updateGoalLoading } = useGoalMutations();

    const handleToggleGoal = async () => {
        if (updateGoalLoading || isUpdating) return;

        setIsUpdating(true);
        setChecked(!checked);

        try {
            await updateGoal({ data: { id: goal.id!, isCompleted: !checked }, refetch: true });
        } catch (error) {
            setChecked(checked);
        } finally {
            setTimeout(() => {
                setIsUpdating(false);
            }, 100);
        }
    }

    return (
        <CheckboxCard
            checked={checked}
            onPress={handleToggleGoal}
            disabled={isUpdating}
            className="mb-4"
            checkedColor={color}
            icon="Check"
            iconSize={16}
        >
            <Text className={`flex-1 text-lg ${checked ? 'line-through text-gray-400' : ''}`}>
                {goal.description}
            </Text>
        </CheckboxCard>
    )
}