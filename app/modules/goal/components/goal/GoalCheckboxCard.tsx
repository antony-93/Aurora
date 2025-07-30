import { CheckboxCard } from "@shared/components/Checkbox";
import { TGoal } from "@modules/goal/types/Goal";
import { cn } from "@shared/utils/Styles";
import { Text } from "react-native";
import { useCallback } from "react";

type TGoalCheckboxCard = {
    goal: TGoal;
    checked: boolean;
    onPress: (goal: TGoal) => void;
    checkedColor?: string;
    icon?: string;
    iconSize?: number;
    disabled?: boolean;
}

export default function GoalCheckboxCard({ goal, onPress, ...props }: TGoalCheckboxCard) {
    const handlePress = useCallback(() => {
        onPress(goal);
    }, [onPress, goal]);

    return (
        <CheckboxCard
            {...props}
            onPress={handlePress}
        >
            <Text className={cn('flex-1 text-lg', props.checked && 'line-through text-gray-400')}>
                {goal.description}
            </Text>
        </CheckboxCard>
    );
}