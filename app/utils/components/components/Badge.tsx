import { View, Text, StyleSheet } from "react-native";
import { IBadgeProps } from "../interfaces/IBadge";

export default function Badge({ style, textStyle, children }: IBadgeProps) {
    return (
        <View style={[styles.badge, style]}>
            <Text style={[styles.text, textStyle]}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    badge: {
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 20,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: '#fff',
        fontWeight: 500
    }
})