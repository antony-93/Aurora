import { ScreenView } from "@shared/components/ScreenView";
import { ScrollView } from "@shared/components/ScrollView";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useCallback, useMemo, useState } from "react";
import { Trash2 } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { TGoalCategory } from "@modules/goal/types/GoalCategory";
import { useGoalCategories, useGoalCategoryMutations } from "@modules/goal/hooks/UseGoalCategory";
import GoalCategoryCheckboxCard from "@modules/goal/components/goalcategory/GoalCategoryCheckboxCard";
import { EnumFilterOperator } from "@shared/enums/EnumFilterOperator";

export default function DeleteGoalCategoryList() {
    const [
        goalCategoryIds,
        setGoalCategoryIds
    ] = useState<string[]>([]);

    const {
        goalCategories
    } = useGoalCategories({
        filters: [{
            field: 'active',
            operator: EnumFilterOperator.Equals,
            value: true
        }]
    });

    const {
        updateManyGoalCategories
    } = useGoalCategoryMutations();

    const handleSetGoalCategoriesToDelete = ({ id }: TGoalCategory) => {
        if (goalCategoryIds.includes(id)) {
            return setGoalCategoryIds(goalCategoryIds.filter(delId => delId !== id));
        }

        setGoalCategoryIds([...goalCategoryIds, id]);
    }

    const navigation = useNavigation<any>();

    const handleDeleteGoalCategories = useCallback(async () => {
        const goalCategoriesToDelete = goalCategories
            .filter(c => goalCategoryIds.includes(c.id))
            .map(c => ({ 
                ...c, 
                active: false 
            }));
        
        await updateManyGoalCategories({
            data: goalCategoriesToDelete,
            refetch: true
        });

        navigation.reset({
            index: 0,
            routes: [{ name: 'Tabs' }]
        });
    }, [updateManyGoalCategories, goalCategories, goalCategoryIds, navigation]);

    const GoalCategoriesList = useMemo(() => {
        return (
            <ScrollView>
                {goalCategories.map(category => (
                    <GoalCategoryCheckboxCard
                        key={category.id}
                        category={category}
                        onPress={handleSetGoalCategoriesToDelete}
                        checked={goalCategoryIds.includes(category.id)}
                        icon={'X'}
                        className="mb-4"
                        checkedColor={'red'}
                    />
                ))}
            </ScrollView>
        )
    }, [goalCategories, goalCategoryIds]);

    return (
        <View className="flex-1 bg-white">
            <ScreenView>
                <View className="grid mb-6">
                    <Text className="text-3xl font-semibold text-primary mb-2">
                        Excluir categorias
                    </Text>

                    <Text className="text-lg text-gray-600">
                        Selecione as categorias que você deseja excluir
                    </Text>
                </View>

                {goalCategories?.length
                    ? GoalCategoriesList
                    : <Text>Nenhuma categoria encontrada</Text>
                }
            </ScreenView>


            <View className="border-t-[1px] border-gray-200 bg-white">
                <SafeAreaView>
                    <View className="flex-row items-center justify-center gap-2 px-5 py-5">
                        <Text className="text-lg font-semibold">
                            {goalCategoryIds.length} {goalCategoryIds.length === 1 ? 'Categoria' : 'Categorias'} selecionadas
                        </Text>

                        <TouchableOpacity
                            disabled={goalCategoryIds.length === 0}
                            className="absolute right-0 mr-10"
                            onPress={handleDeleteGoalCategories}
                        >
                            <Trash2 size={25} color={goalCategoryIds.length === 0 ? '#9ca3af' : 'red'} />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>
        </View>
    )
}