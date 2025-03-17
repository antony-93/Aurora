import { Text, StyleSheet, Pressable, StyleProp, ViewStyle } from "react-native";
import Checkbox from "../../../utils/components/components/Checkbox";
import { useState } from "react";

interface MetaProps {
    descricao: string,
    checkedColor?: string,
    style?: StyleProp<ViewStyle>;
}

export default function Meta({ descricao, checkedColor, style }: MetaProps) {
    const [checked, setChecked] = useState(false);

    return (
        <Pressable style={[styles.card, style]} onPress={() => setChecked(!checked)}>
            <Checkbox checked={checked} setChecked={setChecked} checkedColor={checkedColor} style={{ marginRight: 10 }} />

            <Text style={[styles.descricao, checked && styles.checkedDescricao]}>
                {descricao}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        padding: 12,
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 1,
        width: '100%',
        borderColor: '#E2E8F0',
        alignItems: "flex-start",
        flexDirection: 'row'
    },

    descricao: {
        fontFamily: 'Inter_400Regular',
        fontSize: 16,
        color: '#374151',
        flexShrink: 1
    },

    checkedDescricao: {
        textDecorationLine: 'line-through', 
        color: 'rgb(156 163 175)', 
        fontFamily: 'Inter_500Medium'
    }
})