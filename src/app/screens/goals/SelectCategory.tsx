import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import HeaderView from "src/app/components/HeaderView";
import Category from "src/core/entities/Category";
import * as Icons from "lucide-react-native";
import { rowVerticalCenter } from "Styles";
import { useNavigation } from "@react-navigation/core";

export default function SelectCategory() {
    const [categories, setCategories] = useState<Category[]>([]),
        navigation = useNavigation<any>();

    return (
        <HeaderView title="Escolha uma categoria" description="Selecione uma categoria para sua nova meta">
            {categories.length > 0 && categories.map((category, index) => {
                const { description, icon, color, backgroundColor } = category,
                    IconComponent = Icons[icon as keyof typeof Icons] as React.ComponentType<any>;

                return (
                    <Pressable key={category.sequence} onPress={() => navigation.navigate('GoalDetails', { category })} style={[{ paddingVertical: 15 }, index !== 0 && { borderTopWidth: 1, borderColor: '#E2E8F0' }]}>
                        <View style={rowVerticalCenter}>
                            <View style={[styles.iconContainer, { backgroundColor }]}>
                                <IconComponent size={20} color={color} />
                            </View>

                            <Text style={styles.description}>
                                {description}
                            </Text>

                            <Icons.ChevronRight size={20} color={'#9ca3af'} />
                        </View>
                    </Pressable>
                )
            })}
        </HeaderView>
    );
}

const styles = StyleSheet.create({
    description: {
        fontSize: 18,
        marginTop: 2,
        flex: 1,
        fontFamily: 'Inter_500Medium',
        marginBottom: 5,
        color: '#1f2937'
    },

    iconContainer: {
        marginRight: 15,
        display: 'flex',
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})