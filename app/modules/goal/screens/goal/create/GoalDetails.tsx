import { useCreateGoal } from "@modules/goal/context/CreateGoalContext";
import { Card } from "@shared/components/Card";
import { formatColorByPerc } from "@shared/utils/Styles";
import { Text, View, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Button } from "@shared/components/Button";
import { useNavigation } from "@react-navigation/native";
import { useGoalMutations } from "@modules/goal/hooks/UseGoal";
import { ScreenView } from "@shared/components/ScreenView";
import { Icon } from "@shared/components/Icon";

export default function GoalDetails() {
    const { 
        goalData,
        goalCategory, 
        setDescription 
    } = useCreateGoal();

    const navigation = useNavigation<any>();
    
    const { 
        createGoal, 
        createGoalLoading 
    } = useGoalMutations();

    const handleAddGoal = async () => {
        await createGoal({ data: goalData, refetch: true });
        
        navigation.reset({
            index: 0,
            routes: [{ name: 'Tabs' }],
        });
    };

    return (
        <ScreenView className="flex-1">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} className="p-0">
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    className="flex-1"
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 70 : 0}
                >
                    <View className="flex-1 flex-col">
                        <View className="grid mb-6">
                            <Text className="text-3xl font-semibold text-primary mb-2">
                                Detalhes
                            </Text>

                            <Text className="text-lg text-gray-600">
                                Descreva o que você deseja alcançar
                            </Text>
                        </View>

                        <Card
                            className="flex-row gap-2 border-transparent mb-6"
                            style={{ backgroundColor: formatColorByPerc(goalCategory.color, 0.1) }}
                        >
                            <Icon className="mt-[2px]" name={goalCategory.icon} size={20} color={goalCategory.color} />

                            <Text className="text-xl font-medium flex-1">
                                {goalCategory.description}
                            </Text>
                        </Card>

                        <TextInput
                            className="border-0 p-1 text-lg flex-1"
                            placeholder="Digite aqui"
                            multiline
                            maxLength={500}
                            textAlignVertical="top"
                            value={goalData.description}
                            onChangeText={setDescription}
                        />

                        <Button onPress={() => handleAddGoal()} loading={createGoalLoading}>
                            <Text className="text-white font-semibold text-lg">
                                Adicionar meta
                            </Text>
                        </Button>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </ScreenView>
    )
}