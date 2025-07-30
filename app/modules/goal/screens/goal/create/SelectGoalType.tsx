import { Pressable, ScrollView, Text, View } from "react-native";
import { formatColorByPerc } from "@shared/utils/Styles";
import { ChevronRight } from "lucide-react-native";
import { useCreateGoal } from "../../../context/CreateGoalContext";
import { useNavigation } from "@react-navigation/native";
import { ScreenView } from "@shared/components/ScreenView";
import { useGoalCategories } from "@modules/goal/hooks/UseGoalCategory";
import { TGoalCategory } from "@modules/goal/types/GoalCategory";
import { Icon } from "@shared/components/Icon";
import { EnumFilterOperator } from "@shared/enums/EnumFilterOperator";

export default function SelectGoalCategory() {
    const navigation = useNavigation<any>();
    
    const {
        handleSetGoalCategory
    } = useCreateGoal();
    
    const handleSelectGoalCategory = (goalCategory: TGoalCategory) => {
        handleSetGoalCategory(goalCategory);
        navigation.navigate('GoalDetails');
    };
    
    const { goalCategories } = useGoalCategories({
        filters: [{
            field: 'active',
            operator: EnumFilterOperator.Equals,
            value: true
        }]
    });

    return (
        <ScreenView>
            <ScrollView bounces={false}>
                <View className="grid mb-10">
                    <Text className="text-3xl font-semibold text-primary mb-2">
                        Escolha uma categoria
                    </Text>

                    <Text className="text-lg text-gray-600">
                        Selecione uma categoria para sua nova meta
                    </Text>
                </View>

                {goalCategories?.map((goalCategory: TGoalCategory, idx: number) => (
                    <Pressable
                        key={idx}
                        className="flex-row gap-2 mb-4 border-b-[1px] border-gray-200 pb-4"
                        onPress={() => handleSelectGoalCategory(goalCategory)}
                    >
                        <View
                            className="w-12 h-12 rounded-full items-center justify-center"
                            style={{ backgroundColor: formatColorByPerc(goalCategory.color, 0.1) }}
                        >
                            <Icon name={goalCategory.icon} size={20} color={goalCategory.color} />
                        </View>

                        <View className="flex-1 flex-row items-center">
                            <Text className="text-xl font-medium flex-1">{goalCategory.description}</Text>

                            <Icon name="ChevronRight" size={20} color="gray" />
                        </View>
                    </Pressable>
                ))}
            </ScrollView>
        </ScreenView>
    )
}