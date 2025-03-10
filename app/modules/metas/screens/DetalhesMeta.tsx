import { ScrollView, View, Text, StyleSheet, Pressable, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { ChevronLeft, Heart } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

export default function DetalhesMeta() {
    const navigation = useNavigation<any>();

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "height" : "padding"}>
            <ScrollView contentContainerStyle={{ backgroundColor: 'white', flex: 1 }} bounces={false} showsVerticalScrollIndicator={false}>
                <Pressable onPress={() => navigation.goBack()} style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', marginBottom: 20 }}>
                    <ChevronLeft size={32} color='#4f46e5' />

                    <Text style={{ fontSize: 16, color: '#4f46e5', fontFamily: 'Inter_400Regular' }}>
                        Selecionar categoria
                    </Text>
                </Pressable>

                <View style={styles.container}>
                    <View style={{ marginBottom: 20 }}>
                        <Text style={{ color: '#4f46e5', fontSize: 24, fontFamily: 'Inter_600SemiBold', marginBottom: 10 }}>
                            Detalhes
                        </Text>

                        <Text style={{ fontSize: 16, fontFamily: 'Inter_400Regular', color: '#4b5563' }}>
                            Descreva o que você quer alcançar
                        </Text>
                    </View>

                    <View style={{ marginBottom: 20, padding: 12, width: '100%', borderColor: 'rgb(252 231 243)', borderRadius: 10, backgroundColor: 'rgb(253 242 248)', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Heart size={20} color='rgb(236 72 153)' style={{ marginRight: 15 }} />

                        <Text style={{ fontSize: 18, marginTop: 4, flex: 1, fontFamily: 'Inter_500Medium', marginBottom: 5, color: '#1f2937' }}>
                            Saúde e Bem-Estar
                        </Text>
                    </View>

                    <TextInput style={{ fontFamily: 'Inter_400Regular', fontSize: 16, flex: 1 }} placeholder="Escreva aqui" multiline />

                    <TouchableOpacity onPress={() => navigation.reset({ index: 0, routes: [{ name: "Tabs", params: { screen: "Metas" } }] })} style={{ backgroundColor: '#4f46e5', padding: 16, alignItems: 'center', borderRadius: 10 }}>
                        <Text style={{ color: 'white', fontFamily: 'Inter_500Medium', fontSize: 16 }}>Adicionar meta</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingBottom: 60,
        flex: 1
    }
})