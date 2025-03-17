import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Icons from "lucide-react-native";
import Meta from "../components/Meta";
import { useEffect, useState } from "react";
import { Menu } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { rowVerticalCenter } from "@/Styles";
import GoalService from "../services/Goal";
import Goal from "../model/Goal";

export default function Goals() {
    const [menuVisible, setMenuVisible] = useState(false),
        [groupedGoals, setGroupedGoals] = useState([]),
        navigation = useNavigation<any>();

    useEffect(() => {
        const getGoalsGroupedByCategory = async () => {
            setGroupedGoals(await GoalService.getGoalsGroupedByCategory());
        };

        getGoalsGroupedByCategory();
    }, []);

    function adicionarMetas() {
        setMenuVisible(false);
        navigation.navigate('MetasStack', { screen: 'SelectCategory' });
    }

    function excluirMetas() {
        setMenuVisible(false);
        navigation.navigate('MetasStack', { screen: 'ExcluirMetas' });
    }

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
                        visible={menuVisible}
                        onDismiss={() => setMenuVisible(false)}
                        anchor={
                            <Pressable style={styles.iconContainer} onPress={() => setMenuVisible(!menuVisible)}>
                                <Icons.MoreHorizontal size={20} color="#4f46e5" />
                            </Pressable>
                        }
                        style={{ position: 'absolute', top: 110 }}
                        contentStyle={{ backgroundColor: 'white', paddingVertical: 0, borderRadius: 5 }}

                    >
                        <Menu.Item title="Adicionar meta" onPress={adicionarMetas} style={{ height: 40, borderTopLeftRadius: 5, borderTopRightRadius: 5, paddingLeft: 10, backgroundColor: 'white' }} titleStyle={{ fontSize: 16, fontFamily: 'Inter_400Regular' }} />
                        <Menu.Item title="Excluir metas" onPress={excluirMetas} style={{ height: 40, borderBottomLeftRadius: 5, borderBottomRightRadius: 5, paddingLeft: 10, backgroundColor: 'white' }} titleStyle={{ fontSize: 16, fontFamily: 'Inter_400Regular' }} />
                        <Menu.Item title="Gerenciar categorias" onPress={adicionarMetas} style={{ height: 40, borderBottomLeftRadius: 5, borderBottomRightRadius: 5, paddingLeft: 10, backgroundColor: 'white' }} titleStyle={{ fontSize: 16, fontFamily: 'Inter_400Regular' }} />
                    </Menu>
                </View>

                {groupedGoals.length === 0 && (
                    <View style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 110 }}>
                        <View style={{ marginBottom: 20, width: 120, height: 120, backgroundColor: '#eef2ff', borderRadius: 60, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Icons.CheckCircle size={60} color={'#a5b4fc'} />
                        </View>

                        <Text style={{ marginBottom: 10, color: '#1F2937', textAlign: 'center', fontSize: 24, fontFamily: 'Inter_600SemiBold' }}>
                            Nenhuma meta cadastrada
                        </Text>

                        <Text style={{ marginBottom: 30, textAlign: 'center', fontSize: 18, fontFamily: 'Inter_400Regular', color: '#6b7280' }}>
                            Comece adicionando suas metas para acompanhar seu progresso durante o ano
                        </Text>

                        <TouchableOpacity onPress={() => navigation.navigate('MetasStack', { screen: 'SelectCategory' })} style={[rowVerticalCenter, { backgroundColor: '#4f46e5', padding: 12, borderRadius: 10 }]}>
                            <Icons.Plus size={20} color={'white'} style={{ marginRight: 10 }} />

                            <Text style={{ color: 'white', fontFamily: 'Inter_500Medium', fontSize: 16 }}>
                                Adicionar
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
                                return <Meta key={indexGoal} descricao={goal.description} checkedColor={groupedGoal.color} />
                            })}
                        </View>
                    )
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