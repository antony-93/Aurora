import { ScrollView, View, Text, StyleSheet, Pressable } from "react-native";
import * as Icons from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { rowVerticalCenter } from "@/Styles";
import { useEffect, useState } from "react";
import GoalService from "../services/Goal";
import Meta from "../components/Meta";
import Goal from "../model/Goal";

export default function ExcluirMetas() {
    const [groupedGoals, setGroupedGoals] = useState([]),
        navigation = useNavigation<any>();

    useEffect(() => {
        const getGoalsGroupedByCategory = async () => {
            setGroupedGoals(await GoalService.getGoalsGroupedByCategory());
        };

        getGoalsGroupedByCategory();
    }, []);

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ flex: 1 }}>
                <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
                    <Pressable onPress={() => navigation.goBack()} style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', marginBottom: 20 }}>
                        <Icons.ChevronLeft size={32} color='#4f46e5' />

                        <Text style={{ fontSize: 16, color: '#4f46e5', fontFamily: 'Inter_400Regular' }}>
                            Metas
                        </Text>
                    </Pressable>

                    <View style={styles.container}>
                        <View style={{ marginBottom: 30 }}>
                            <Text style={{ color: '#4f46e5', fontSize: 24, fontFamily: 'Inter_600SemiBold', marginBottom: 10 }}>
                                Excluir metas
                            </Text>

                            <Text style={{ fontSize: 16, fontFamily: 'Inter_400Regular', color: '#4b5563' }}>
                                Selecione as metas que deseja excluir
                            </Text>
                        </View>

                        {groupedGoals.length > 0 && groupedGoals.map((groupedGoal: any, index) => {
                            const IconComponent = Icons[groupedGoal.icon as keyof typeof Icons] as React.ComponentType<any>;

                            return (
                                <View key={index} style={{ marginBottom: 40 }}>
                                    <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                        <IconComponent size={20} color={groupedGoal.color} style={{ marginRight: 10 }} />

                                        <Text style={styles.subTitle}>
                                            {groupedGoal.description}
                                        </Text>
                                    </View>

                                    {groupedGoal.goals.length > 0 && groupedGoal.goals.map((goal: Goal, indexGoal: any) => {
                                        return <Meta key={indexGoal} descricao={goal.description} checkedColor={groupedGoal.color} />
                                    })}
                                </View>
                            )
                        })}
                    </View>
                </ScrollView>
            </View>

            <View style={[{ borderTopWidth: 0.5, borderColor: '#e5e5e5', height: 60, paddingHorizontal: 24 }, rowVerticalCenter]}>
                <Text style={{ fontFamily: 'Inter_500Medium', fontSize: 18, flex: 1 }}>
                    Selecionar metas
                </Text>

                <Icons.Trash size={28} color="#d1d5db" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1
    },

    subTitle: {
        fontSize: 18,
        fontFamily: 'Inter_600SemiBold',
        color: '#1f2937'
    }
})