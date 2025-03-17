import React from "react";
import { View, StyleProp, ViewStyle, Pressable, StyleSheet } from "react-native";
import { Check } from "lucide-react-native";

type CheckboxProps = {
    checked: boolean;
    onPress?: () => void;
    square?: boolean;
    checkedColor?: string;
    style?: StyleProp<ViewStyle>;
}

export default function Checkbox({ checked, onPress, square, checkedColor = '#4f46e5', style }: CheckboxProps) {
    const borderColor = checked ? "transparent" : "#D1D5DB",
        backgroundColor = checked ? checkedColor : "transparent";

    return (
        <Pressable onPress={onPress}>
            <View style={[{ borderColor, backgroundColor }, !square && { borderRadius: 10 }, styles.checkbox, style]}>
                <Check size={12} color="white" />
            </View>
        </Pressable >
    );
}

const styles = StyleSheet.create({
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
    }
})