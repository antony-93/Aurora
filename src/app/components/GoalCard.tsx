import { Text, StyleSheet, Pressable, StyleProp, ViewStyle } from "react-native";
import { useState } from "react";
import Checkbox from "./Checkbox";
import Goal from "src/core/entities/Goal";

type GoalProps = {
    goal: Goal,
    checkedColor?: string,
    style?: StyleProp<ViewStyle>;
}

export default function GoalCard({ goal, checkedColor, style }: GoalProps) {
    const [checked, setChecked] = useState(goal.checked);

    return (
        <Pressable style={[styles.card, style]} onPress={() => setChecked(!checked)}>
            <Checkbox checked={checked} checkedColor={checkedColor} style={{ marginRight: 10 }} />

            <Text style={[styles.description, checked && styles.checkedDescription]}>
                {goal.description}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
        width: '100%',
        borderColor: '#E2E8F0',
        alignItems: "flex-start",
        flexDirection: 'row'
    },

    description: {
        fontFamily: 'Inter_400Regular',
        fontSize: 16,
        color: '#374151',
        flexShrink: 1
    },

    checkedDescription: {
        textDecorationLine: 'line-through', 
        color: 'rgb(156 163 175)', 
        fontFamily: 'Inter_500Medium'
    }
})