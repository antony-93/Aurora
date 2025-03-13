import { ScrollView, View, Text, StyleSheet, Pressable } from "react-native";
import { ChevronLeft } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Category from "../model/Category";
import CategoryService from "../services/Category";
import CategorySelection from "../components/CategorySelection";
import { rowVerticalCenter } from "@/Styles";

export default function SelectCategory() {
    const [categories, setCategories] = useState<Category[]>([]),
        navigation = useNavigation<any>();

    useEffect(() => {
        const getCategories = async () => {
            setCategories(await CategoryService.getCategories());
        };

        getCategories();
    }, []);

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
                <Pressable onPress={() => navigation.goBack()} style={[rowVerticalCenter, { marginBottom: 20 }]}>
                    <ChevronLeft size={32} color='#4f46e5' />

                    <Text style={[styles.subtitle, { color: '#4f46e5' }]}>
                        Metas
                    </Text>
                </Pressable>

                <View style={styles.container}>
                    <View style={{ marginBottom: 20 }}>
                        <Text style={styles.title}>
                            Escolha uma categoria
                        </Text>

                        <Text style={[styles.subtitle, { color: '#6b7280' }]}>
                            Selecione uma categoria para nova sua meta
                        </Text>
                    </View>

                    {categories.length > 0 && categories.map((category, index) => (
                        <CategorySelection
                            key={category.id}
                            style={index !== 0 && { borderTopWidth: 1, borderColor: '#E2E8F0' }}
                            category={category}
                            onPress={() => { navigation.navigate('GoalDetails', { category }) }}
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1
    },

    title: {
        color: '#4f46e5',
        fontSize: 24,
        fontFamily: 'Inter_600SemiBold',
        marginBottom: 10
    },

    subtitle: {
        fontSize: 16,
        fontFamily: 'Inter_400Regular',
    }
})