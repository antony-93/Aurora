import { RouteProp, useRoute } from "@react-navigation/core";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import * as Icons from "lucide-react-native";
import HeaderView from "src/app/components/HeaderView";
import Category from "src/core/entities/Category";
import { useState } from "react";
import { rowVerticalCenter } from "Styles";

export default function GoalDetails() {
    const { category } = useRoute<RouteProp<{ GoalDetails: { category: Category } }>>().params,
        IconComponent = Icons[category.icon as keyof typeof Icons] as React.ComponentType<any>,
        [description, setDescription] = useState('');

    return (
        <HeaderView title="Detalhes" description="Descreva o que você quer alcançar" >
            <View style={[styles.categoryCard, { backgroundColor: category.backgroundColor }]}>
                <IconComponent size={20} color={category.color} style={{ marginRight: 15 }} />

                <Text style={styles.categoryDescription}>
                    {category.description}
                </Text>
            </View>

            <TextInput 
                style={styles.description} 
                value={description} 
                onChangeText={setDescription} 
                placeholder="Escreva aqui" 
                multiline 
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Adicionar meta</Text>
            </TouchableOpacity>
        </HeaderView>
    );
}

const styles = StyleSheet.create({
    categoryCard: {
        marginBottom: 20,
        padding: 12,
        width: '100%',
        borderColor: 'rgb(252 231 243)',
        borderRadius: 10,
        ...rowVerticalCenter
    },

    categoryDescription: { 
        fontSize: 18, 
        marginTop: 4, 
        flex: 1, 
        fontFamily: 'Inter_500Medium', 
        marginBottom: 5, 
        color: '#1f2937' 
    },

    description: { 
        fontFamily: 'Inter_400Regular', 
        fontSize: 16, 
        flex: 1 
    },

    button: { 
        backgroundColor: '#4f46e5', 
        padding: 16, 
        alignItems: 'center', 
        borderRadius: 10 
    },

    buttonText: { 
        color: 'white', 
        fontFamily: 'Inter_500Medium', 
        fontSize: 16 
    }
})