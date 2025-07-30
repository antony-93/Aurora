import { TGroupedGoals } from "@modules/goal/types/GrupedGoals";
import { Icon } from "@shared/components/Icon";
import { View, Text } from "react-native";
import GoalCheckboxCard from "./GoalCheckboxCard";
import { TGoal } from "@modules/goal/types/Goal";
import { TViewStyles } from "@shared/types/ComponentTypes";

type TGroupedGoalList = TViewStyles & {
    groupedGoal: TGroupedGoals;
    onPressGoal: (goal: TGoal) => void;
}

export default function GroupedGoalList({ groupedGoal, onPressGoal, ...props }: TGroupedGoalList) {
    return (
        <View {...props}>
            <View className="flex-row gap-2 mb-5">
                <Icon className="mt-[2px]" name={groupedGoal.icon} size={20} color={groupedGoal.color} />
                <Text className="text-xl font-medium">{groupedGoal.description}</Text>
            </View>

            {groupedGoal.goals?.map(goal => (
                <GoalCheckboxCard
                    key={goal.id}
                    goal={goal}
                    checked={goal.isCompleted}
                    onPress={onPressGoal}
                    checkedColor={groupedGoal.color}
                />
            ))}
        </View>
    );
}