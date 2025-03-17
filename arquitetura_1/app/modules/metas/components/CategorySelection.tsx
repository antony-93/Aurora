import * as Icons from "lucide-react-native";
import { Pressable, View, Text, StyleProp, ViewStyle, StyleSheet } from "react-native";
import Category from "../model/Category";
import { rowVerticalCenter } from "@/Styles";

interface CategorySelectionProps {
    category: Category,
    style?: StyleProp<ViewStyle>;
    onPress: () => void;
}

export default function CategorySelection({ category, style, onPress }: CategorySelectionProps) {
    const { description, icon, color, backgroundColor } = category,
        IconComponent = Icons[icon] as React.ComponentType<any>;

    return (
        <Pressable onPress={onPress} style={[{ paddingVertical: 15 }, style]}>
            <View style={rowVerticalCenter}>
                <View style={[styles.iconCircle, { backgroundColor }]}>
                    <IconComponent size={20} color={color} />
                </View>

                <Text style={styles.description}>
                    {description}
                </Text>

                <Icons.ChevronRight size={20} color={'#9ca3af'} />
            </View>
        </Pressable>
    )
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

    iconCircle: {
        marginRight: 15,
        display: 'flex',
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})