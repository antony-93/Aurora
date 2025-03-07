import { ScrollView, View, Text, StyleSheet, Pressable } from "react-native";
import SafeView from "../../../utils/components/components/SafeView";
import { ArrowLeft, Coins, GraduationCap, Heart, Laptop, Plane } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

export default function NovaMeta() {
    const navigation = useNavigation<any>();

    return (
        <SafeView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                <Pressable onPress={() => navigation.goBack()} style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', marginBottom: 20 }}>
                    <ArrowLeft size={16} color='#4f46e5' style={{ marginRight: 10 }} />

                    <Text style={{ fontSize: 16, color: '#4f46e5', fontFamily: 'Inter_400Regular' }}>
                        Voltar
                    </Text>
                </Pressable>

                <View style={{ marginBottom: 30 }}>
                    <Text style={{ color: '#4f46e5', fontSize: 24, fontFamily: 'Inter_600SemiBold', marginBottom: 10 }}>
                        Nova Meta
                    </Text>

                    <Text style={{ fontSize: 16, fontFamily: 'Inter_400Regular', color: '#4b5563' }}>
                        Selecione uma categoria para sua meta
                    </Text>
                </View>

                <Pressable onPress={() => {}} style={{ display: "flex", flexDirection: 'row', alignItems: 'flex-start', marginBottom: 40 }}>
                    <View style={{ marginRight: 20, display: 'flex', width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgb(236 72 153)', alignItems: 'center', justifyContent: 'center' }}>
                        <Heart size={20} color="white" />
                    </View>

                    <View style={{ display: 'flex', flexShrink: 1}}>
                        <Text style={{ fontSize: 14, fontFamily: 'Inter_500Medium', marginBottom: 5, color: '#1f2937' }}>
                            Saúde e Bem-Estar
                        </Text>

                        <Text style={{ fontSize: 14, fontFamily: 'Inter_500Medium', color: '#6b7280' }}>
                            Metas relacionadas a saúde física
                        </Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => {}} style={{ display: "flex", flexDirection: 'row', alignItems: 'flex-start', marginBottom: 40 }}>
                    <View style={{ marginRight: 20, display: 'flex', width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgb(234 179 8)', alignItems: 'center', justifyContent: 'center' }}>
                        <Coins size={20} color="white" />
                    </View>

                    <View style={{ display: 'flex', flexShrink: 1}}>
                        <Text style={{ fontSize: 14, fontFamily: 'Inter_500Medium', marginBottom: 5, color: '#1f2937' }}>
                            Finasças e Investimentos
                        </Text>

                        <Text style={{ fontSize: 14, fontFamily: 'Inter_500Medium', color: '#6b7280' }}>
                            Metas financeiras e investimentos
                        </Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => {}} style={{ display: "flex", flexDirection: 'row', alignItems: 'flex-start', marginBottom: 40 }}>
                    <View style={{ marginRight: 20, display: 'flex', width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgb(59 130 246)', alignItems: 'center', justifyContent: 'center' }}>
                        <GraduationCap size={20} color="white" />
                    </View>

                    <View style={{ display: 'flex', flexShrink: 1}}>
                        <Text style={{ fontSize: 14, fontFamily: 'Inter_500Medium', marginBottom: 5, color: '#1f2937' }}>
                            Desenvolvimento Pessoal
                        </Text>

                        <Text style={{ fontSize: 14, fontFamily: 'Inter_500Medium', color: '#6b7280' }}>
                            Metas de educação e crescimento pessoal
                        </Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => {}} style={{ display: "flex", flexDirection: 'row', alignItems: 'flex-start', marginBottom: 40 }}>
                    <View style={{ marginRight: 20, display: 'flex', width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgb(168 85 247)', alignItems: 'center', justifyContent: 'center' }}>
                        <Laptop size={20} color="white" />
                    </View>

                    <View style={{ display: 'flex', flexShrink: 1}}>
                        <Text style={{ fontSize: 14, fontFamily: 'Inter_500Medium', marginBottom: 5, color: '#1f2937' }}>
                            Projetos e Tecnologia
                        </Text>

                        <Text style={{ fontSize: 14, fontFamily: 'Inter_500Medium', color: '#6b7280' }}>
                            Metas relacionadas a projetos e tecnologia
                        </Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => {}} style={{ display: "flex", flexDirection: 'row', alignItems: 'flex-start', marginBottom: 40 }}>
                    <View style={{ marginRight: 20, display: 'flex', width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgb(249 115 22)', alignItems: 'center', justifyContent: 'center' }}>
                        <Plane size={20} color="white" />
                    </View>

                    <View style={{ display: 'flex', flexShrink: 1}}>
                        <Text style={{ fontSize: 14, fontFamily: 'Inter_500Medium', marginBottom: 5, color: '#1f2937' }}>
                            Lazer
                        </Text>

                        <Text style={{ fontSize: 14, fontFamily: 'Inter_500Medium', color: '#6b7280' }}>
                            Metas de viagens e atividades de lazer
                        </Text>
                    </View>
                </Pressable>
            </ScrollView>
        </SafeView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#faf5ff',
        paddingTop: 40,
        paddingHorizontal: 20,
        flex: 1
    }
})