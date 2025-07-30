import { TGoalCategory } from "@modules/goal/types/GoalCategory";
import { CheckboxCard } from "@shared/components/Checkbox";
import { Icon } from "@shared/components/Icon";
import { TViewStyles } from "@shared/types/ComponentTypes";
import { cn } from "@shared/utils/Styles";
import { useCallback } from "react";
import { Text, View } from "react-native";

type TCheckboxGoalCategoryCardProps = TViewStyles & {
    category: TGoalCategory;
    checked: boolean;
    onPress: (category: TGoalCategory) => void;
    icon?: string;
    checkedColor?: string;
}

export default function GoalCategoryCheckbox({ category, checked, onPress, className, ...rest }: TCheckboxGoalCategoryCardProps) {
    const handlePress = useCallback(() => {
        onPress(category);
    }, [category, onPress]);
    
    return (
        <CheckboxCard
            checked={checked}
            square
            onPress={handlePress}
            checkboxPosition="right"
            className={cn("flex-1 items-center", className)}
            checkboxContentStyle={{
                className: 'items-center'
            }}
            {...rest}
        >
            <View className="flex-row gap-2 flex-1">
                <Icon name={category.icon} size={24} color={category.color} />

                <Text className="text-lg font-medium flex-1 text-gray-600">
                    {category.description}
                </Text>
            </View>
        </CheckboxCard>
    )
}