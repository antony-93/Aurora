import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import SafeView from "../../../utils/components/components/SafeView";
import { Heart, MoreHorizontal, Star, Coins, Plane, Laptop, GraduationCap } from "lucide-react-native";
import Meta from "../components/Meta";
import { useState } from "react";
import { Menu } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Metas() {
    const [menuVisible, setMenuVisible] = useState(false),
        navigation = useNavigation<any>();

    function adicionar() {
        setMenuVisible(false);
        navigation.navigate('MetasStack', { screen: 'NovaMeta' });
    }

    return (
        <SafeView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}>
                    <View>
                        <Text style={{ color: '#4f46e5', fontSize: 24, fontFamily: 'Inter_600SemiBold' }}>
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
                        style={{ position: 'absolute', top: 90 }}
                        contentStyle={{ backgroundColor: 'white',  paddingVertical: 0, borderRadius: 5 }}

                    >
                        <Menu.Item title="Adicionar meta" onPress={adicionar} style={{ height: 32, borderTopLeftRadius: 5, borderTopRightRadius: 5, paddingLeft: 10, backgroundColor: 'white' }} titleStyle={{ fontSize: 14, fontFamily: 'Inter_400Regular' }} />
                        <Menu.Item title="Gerenciar metas" onPress={adicionar} style={{ height: 32, borderBottomLeftRadius: 5,  borderBottomRightRadius: 5, paddingLeft: 10, backgroundColor: 'white' }} titleStyle={{ fontSize: 14, fontFamily: 'Inter_400Regular' }} />
                    </Menu>
                </View>

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
        </SafeView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#faf5ff',
        paddingTop: 40,
        paddingHorizontal: 20,
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