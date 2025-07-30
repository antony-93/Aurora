import { useGoalCategoryMutations } from "@modules/goal/hooks/UseGoalCategory";
import { TGoalCategory } from "@modules/goal/types/GoalCategory";
import { Button } from "@shared/components/Button";
import { Card } from "@shared/components/Card";
import { Icon } from "@shared/components/Icon";
import { ScreenView } from "@shared/components/ScreenView";
import { ScrollView } from "@shared/components/ScrollView";
import { formatColorByPerc } from "@shared/utils/Styles";
import { getAuth } from "firebase/auth";
import { MoreHorizontal, Palette, Star } from "lucide-react-native";
import { useState } from "react";
import { View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CreateGoalCategory() {
    const defaultColors = [
        '#EF4444',
        '#F97316',
        '#EAB308',
        '#22C55E',
        '#06B6D4',
        '#3B82F6',
        '#8B5CF6',
        '#EC4899'
    ]

    const defaultIcons = [
        'Star',
        'Heart',
        'Coins',
        'Target',
        'Trophy',
        'BookOpen',
        'Dumbbell',
        'GraduationCap'
    ]

    const [
        goalCategory,
        setGoalCategory
    ] = useState<Omit<TGoalCategory, 'id'>>({
        description: '',
        lowerDescription: '',
        icon: 'Star',
        color: '#EF4444',
        active: true,
        userId: getAuth().currentUser?.uid || ''
    })

    const { createGoalCategory, createGoalCategoryLoading } = useGoalCategoryMutations();

    const navigation = useNavigation<any>();

    const handleSetColor = (color: string) => {
        setGoalCategory(prev => ({ ...prev, color }))
    }

    const handleSetIcon = (icon: string) => {
        setGoalCategory(prev => ({ ...prev, icon }))
    }

    const handleSetDescription = (text: string) => {
        setGoalCategory(prev => ({
            ...prev,
            description: text,
            lowerDescription: text.toLowerCase()
        }))
    }

    const handleCreateGoalCategory = async () => {
        await createGoalCategory({
            data: goalCategory
        });

        navigation.goBack();
    }

    return (
        <ScreenView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    showsVerticalScrollIndicator={false}
                >
                    <View className="grid mb-6">
                        <Text className="text-3xl font-semibold text-primary mb-1">
                            Nova categoria
                        </Text>

                        <Text className="text-lg text-gray-600">
                            Escolha um ícone, uma cor e dê um nome para sua nova categoria
                        </Text>
                    </View>

                    <Card
                        className="flex-row items-start gap-2 border-transparent max-h-40 mb-6"
                        style={{ backgroundColor: formatColorByPerc(goalCategory.color || 'gray', 0.1) }}
                    >
                        <Icon name={goalCategory.icon || 'Star'} size={24} color={goalCategory.color || 'gray'} />

                        <TextInput
                            value={goalCategory.description}
                            onChangeText={text => handleSetDescription(text)}
                            className="flex-1 text-xl font-medium mt-1"
                            placeholder="Digite aqui"
                            multiline
                            maxLength={100}
                            placeholderTextColor="#9CA3AF"
                            style={{
                                textAlignVertical: 'center',
                                paddingVertical: 0,
                                lineHeight: 20
                            }}
                        />
                    </Card>

                    <View className="flex-1 mb-8">
                        <Text className="text-xl font-semibold mb-4">
                            Escolha uma cor
                        </Text>

                        <View className="mb-8">
                            <View className="flex-row justify-between mb-3">
                                {defaultColors.slice(0, 4).map((color, idx) => (
                                    <TouchableOpacity
                                        key={idx}
                                        className="rounded-full items-center justify-center border-[3px]"
                                        style={{
                                            backgroundColor: color,
                                            borderColor: goalCategory.color === color ? 'black' : '#e5e7eb',
                                        }}
                                        onPress={() => handleSetColor(color)}
                                    >
                                        <View className="p-7 rounded-full" style={{ backgroundColor: color }} />
                                    </TouchableOpacity>
                                ))}
                            </View>

                            <View className="flex-row justify-between">
                                {defaultColors.slice(4, 8).map((color, idx) => (
                                    <TouchableOpacity
                                        key={idx + 4}
                                        className="rounded-full items-center justify-center border-[3px]"
                                        style={{
                                            backgroundColor: color,
                                            borderColor: goalCategory.color === color ? 'black' : '#e5e7eb',
                                        }}
                                        onPress={() => handleSetColor(color)}
                                    >
                                        <View className="p-7 rounded-full" style={{ backgroundColor: color }} />
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>

                        <TouchableOpacity
                            className="flex-row items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg py-3 mb-4"
                        >
                            <Palette size={24} color={'gray'} />
                            <Text className="text-lg font-medium text-gray-600">
                                Cores personalizadas
                            </Text>
                        </TouchableOpacity>

                        <Text className="text-xl font-semibold mb-4">
                            Escolha um ícone
                        </Text>

                        <View className="mb-8">
                            <View className="flex-row justify-between mb-3">
                                {defaultIcons.slice(0, 4).map((icon, idx) => (
                                    <TouchableOpacity
                                        key={idx}
                                        className="p-4 border-2 rounded-xl"
                                        onPress={() => handleSetIcon(icon)}
                                        style={{
                                            borderColor: goalCategory.icon === icon ? '#4f46e5' : '#e5e7eb',
                                            backgroundColor: goalCategory.icon === icon ? formatColorByPerc('#4f46e5', 0.1) : 'white'
                                        }}
                                    >
                                        <Icon name={icon} size={24} color={goalCategory.icon === icon ? '#4f46e5' : 'gray'} />
                                    </TouchableOpacity>
                                ))}
                            </View>

                            <View className="flex-row justify-between">
                                {defaultIcons.slice(4, 8).map((icon, idx) => (
                                    <TouchableOpacity
                                        key={idx}
                                        className="p-4 border-2 rounded-xl"
                                        onPress={() => handleSetIcon(icon)}
                                        style={{
                                            borderColor: goalCategory.icon === icon ? '#4f46e5' : '#e5e7eb',
                                            backgroundColor: goalCategory.icon === icon ? formatColorByPerc('#4f46e5', 0.1) : 'white'
                                        }}
                                    >
                                        <Icon name={icon} size={24} color={goalCategory.icon === icon ? '#4f46e5' : 'gray'} />
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>

                        <TouchableOpacity
                            className="flex-row items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg py-3"
                        >
                            <MoreHorizontal size={24} color={'gray'} />

                            <Text className="text-lg font-medium text-gray-600">
                                Ver mais ícones
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <Button
                        onPress={() => handleCreateGoalCategory()}
                        loading={createGoalCategoryLoading}
                        disabled={!goalCategory.description || !goalCategory.icon || !goalCategory.color}
                    >
                        <Text className="text-white font-semibold text-lg">
                            Criar categoria
                        </Text>
                    </Button>
                </ScrollView>
            </TouchableWithoutFeedback>
        </ScreenView>
    )
}