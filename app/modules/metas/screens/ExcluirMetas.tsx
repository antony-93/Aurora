import { ScrollView, View, Text, StyleSheet, Pressable } from "react-native";
import { ChevronLeft } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

export default function ExcluirMetas() {
    const navigation = useNavigation<any>();

    return (
        <ScrollView contentContainerStyle={{ backgroundColor: 'white', flex: 1 }} bounces={false} showsVerticalScrollIndicator={false}>
            <Pressable onPress={() => navigation.goBack()} style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', marginBottom: 20 }}>
                <ChevronLeft size={32} color='#4f46e5' />

                <Text style={{ fontSize: 16, color: '#4f46e5', fontFamily: 'Inter_400Regular' }}>
                    Metas
                </Text>
            </Pressable>

            <View style={styles.container}>
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ color: '#4f46e5', fontSize: 24, fontFamily: 'Inter_600SemiBold', marginBottom: 10 }}>
                        Excluir metas
                    </Text>

                    <Text style={{ fontSize: 16, fontFamily: 'Inter_400Regular', color: '#4b5563' }}>
                        Selecione as metas que deseja excluir
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1
    }
})