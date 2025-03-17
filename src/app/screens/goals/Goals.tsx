import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Icons from "lucide-react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Menu from "../../components/Menu";
import GoalCard from "src/app/components/GoalCard";
import { rowVerticalCenter } from "Styles";
import Goal from "src/core/entities/Goal";

export default function Goals() {
    const [groupedGoals, setGroupedGoals] = useState([]),
        navigation = useNavigation<any>();

    useEffect(() => {
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
                <View style={[rowVerticalCenter, { justifyContent: 'space-between', marginBottom: 30 }]}>
                    <View>
                        <Text style={{ color: '#4f46e5', fontSize: 30, fontFamily: 'Inter_600SemiBold' }}>
                            Metas
                        </Text>

                        <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                            <Icons.Star size={20} color="rgb(234 179 8)" style={{ marginRight: 10 }} />

                            <Text style={{ color: '#4b5563', fontSize: 14, fontFamily: 'Inter_500Medium' }}>
                                4 metas concluídas
                            </Text>
                        </View>
                    </View>

                    <Menu 
                        actions={[{
                            title: 'Adicionar meta',
                            onPress: () => navigation.navigate('GoalsStack', { screen: 'SelectCategory', params: { routeName: 'Metas' } })
                        }, {
                            title: 'Adicionar categoria',
                            onPress: () => navigation.navigate('', { screen: '' })
                        }, {
                            title: 'Excluir meta',
                            onPress: () => navigation.navigate('', { screen: '' })
                        }, {
                            title: 'Excluir categoria',
                            onPress: () => navigation.navigate('', { screen: '' })
                        }]}
                    />
                </View>

                {groupedGoals.length === 0 && (
                    <View style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 100 }}>
                        <View style={{ marginBottom: 20, width: 120, height: 120, backgroundColor: '#eef2ff', borderRadius: 60, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Icons.CheckCircle size={60} color={'#a5b4fc'} />
                        </View>

                        <Text style={{ marginBottom: 10, color: '#1F2937', textAlign: 'center', fontSize: 24, fontFamily: 'Inter_600SemiBold' }}>
                            Nenhuma meta cadastrada
                        </Text>

                        <Text style={{ marginBottom: 30, textAlign: 'center', fontSize: 18, fontFamily: 'Inter_400Regular', color: '#6b7280' }}>
                            Comece adicionando suas metas para acompanhar seu progresso durante o ano
                        </Text>

                        <TouchableOpacity onPress={() => navigation.navigate('GoalsStack', { screen: 'SelectCategory' })} style={[rowVerticalCenter, { backgroundColor: '#4f46e5', padding: 12, borderRadius: 10 }]}>
                            <Icons.Plus size={20} color={'white'} style={{ marginRight: 10 }} />

                            <Text style={{ color: 'white', fontFamily: 'Inter_500Medium', fontSize: 16 }}>
                                Adicionar meta
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}

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
                                return <GoalCard key={indexGoal} goal={goal} checkedColor={groupedGoal.color} />
                            })}
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 20
    },

    title: {
        fontSize: 25,
    },

    subTitle: {
        fontSize: 18,
        fontFamily: 'Inter_600SemiBold',
        color: '#1f2937'
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    iconContainer: {
        width: 32,
        height: 32,
        borderRadius: 16,
        borderColor: '#4f46e5',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})