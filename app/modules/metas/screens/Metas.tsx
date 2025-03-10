import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CheckCircle, Coins, GraduationCap, Heart, Laptop, MoreHorizontal, Plane, Plus, Star } from "lucide-react-native";
import Meta from "../components/Meta";
import { useState } from "react";
import { Menu } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { rowVerticalCenter } from "@/Styles";

export default function Metas() {
    const [menuVisible, setMenuVisible] = useState(false),
        navigation = useNavigation<any>();

    function adicionarMetas() {
        setMenuVisible(false);
        navigation.navigate('MetasStack', { screen: 'SelectCategory' });
    }

    function excluirMetas() {
        setMenuVisible(false);
        navigation.navigate('MetasStack', { screen: 'ExcluirMetas' });
    }

    return (
        <ScrollView contentContainerStyle={styles.container} bounces={false} showsVerticalScrollIndicator={false}>
            <View style={[rowVerticalCenter, { justifyContent: 'space-between', marginBottom: 30 }]}>
                <View>
                    <Text style={{ color: '#4f46e5', fontSize: 30, fontFamily: 'Inter_600SemiBold' }}>
                        Metas
                    </Text>

                    <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                        <Star size={20} color="rgb(234 179 8)" style={{ marginRight: 10 }} />

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
                            <MoreHorizontal size={20} color="#4f46e5" />
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

            {/* <View style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 120 }}>
                <View style={{ marginBottom: 20, width: 120, height: 120, backgroundColor: '#eef2ff', borderRadius: 60, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <CheckCircle size={60} color={'#a5b4fc'} />
                </View>

                <Text style={{ marginBottom: 10, color: '#1F2937', textAlign: 'center', fontSize: 24, fontFamily: 'Inter_600SemiBold' }}>
                    Nenhuma meta cadastrada
                </Text>

                <Text style={{ marginBottom: 30, textAlign: 'center', fontSize: 18, fontFamily: 'Inter_400Regular', color: '#6b7280' }}>
                    Comece adicionando suas metas para acompanhar seu progresso durante o ano
                </Text>

                <TouchableOpacity onPress={() => navigation.navigate('MetasStack', { screen: 'SelectCategory' })} style={[rowVerticalCenter, { backgroundColor: '#4f46e5', padding: 12, borderRadius: 10 }]}>
                    <Plus size={20} color={'white'} style={{ marginRight: 10 }} />

                    <Text style={{ color: 'white', fontFamily: 'Inter_500Medium', fontSize: 16 }}>
                        Adicionar
                    </Text>
                </TouchableOpacity>
            </View> */}
            <View style={{ marginBottom: 40 }}>
                <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Heart size={20} color="rgb(236 72 153)" style={{ marginRight: 10 }} />

                    <Text style={styles.subTitle}>
                        Saúde e Bem-Estar
                    </Text>
                </View>

                <Meta descricao="Corrigir minhas postura" checkedColor="rgb(236 72 153)" />

                <Meta descricao="Iniciar a prática de exercícios físicos regularmente e manter uma rotina saudável ao longo do ano, incluindo alimentação balanceada e sono adequado" checkedColor="rgb(236 72 153)" />
            </View>

            <View style={{ marginBottom: 40 }}>
                <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Coins size={20} color="rgb(234 179 8)" style={{ marginRight: 10 }} />

                    <Text style={styles.subTitle}>
                        Finanças e Investimentos
                    </Text>
                </View>

                <Meta descricao="Corrigir minhas postura" checkedColor="rgb(234 179 8)" />

                <Meta descricao="Iniciar a prática de exercícios físicos regularmente e manter uma rotina saudável ao longo do ano, incluindo alimentação balanceada e sono adequado" checkedColor="rgb(234 179 8)" />
            </View>

            <View style={{ marginBottom: 40 }}>
                <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <GraduationCap size={20} color="rgb(59 130 246)" style={{ marginRight: 10 }} />

                    <Text style={styles.subTitle}>
                        Desenvolvimento Pessoal
                    </Text>
                </View>

                <Meta descricao="Corrigir minhas postura" checkedColor="rgb(59 130 246)" />

                <Meta descricao="Iniciar a prática de exercícios físicos regularmente e manter uma rotina saudável ao longo do ano, incluindo alimentação balanceada e sono adequado" checkedColor="rgb(59 130 246)" />
            </View>

            <View style={{ marginBottom: 40 }}>
                <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Laptop size={20} color="rgb(168 85 247)" style={{ marginRight: 10 }} />

                    <Text style={styles.subTitle}>
                        Projetos e Tecnologia
                    </Text>
                </View>

                <Meta descricao="Corrigir minhas postura" checkedColor="rgb(168 85 247)" />

                <Meta descricao="Iniciar a prática de exercícios físicos regularmente e manter uma rotina saudável ao longo do ano, incluindo alimentação balanceada e sono adequado" checkedColor="rgb(168 85 247)" />
            </View>

            <View style={{ marginBottom: 40 }}>
                <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Plane size={20} color="rgb(249 115 22)" style={{ marginRight: 10 }} />

                    <Text style={styles.subTitle}>
                        Lazer
                    </Text>
                </View>

                <Meta descricao="Corrigir minhas postura" checkedColor="rgb(249 115 22)" />

                <Meta descricao="Iniciar a prática de exercícios físicos regularmente e manter uma rotina saudável ao longo do ano, incluindo alimentação balanceada e sono adequado" checkedColor="rgb(249 115 22)" />
            </View>
        </ScrollView>
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