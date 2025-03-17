import { useNavigation, useRoute, RouteProp } from "@react-navigation/core";
import { ChevronLeft } from "lucide-react-native";
import React, { ReactNode } from "react";
import { Pressable, View, Text, StyleProp, ViewStyle, StyleSheet } from "react-native";
import { rowVerticalCenter } from "Styles";

type HeaderViewProps = {
    title: string,
    description: string,
    children?: ReactNode;
    style?: StyleProp<ViewStyle>;
}

type RouteParams = {
    Goals: {
        routeName: string
    }
}

export default function HeaderView({ title, description, children, style }: HeaderViewProps) {
    const { routeName } = useRoute<RouteProp<RouteParams>>().params,
        navigation = useNavigation<any>();

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Pressable onPress={() => navigation.goBack()} style={styles.goBackButton}>
                <ChevronLeft size={32} color='#4f46e5' />

                <Text style={styles.goBackDescription}>
                    {routeName}
                </Text>
            </Pressable>

            <View style={[styles.container, style]}>
                <View style={{ marginBottom: 20 }}>
                    <Text style={styles.title}>
                        {title}
                    </Text>

                    <Text style={styles.description}>
                        {description}
                    </Text>

                    {children}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    goBackButton: {
        marginBottom: 20,
        ...rowVerticalCenter
    },

    goBackDescription: {
        fontSize: 16,
        color: '#4f46e5',
        fontFamily: 'Inter_400Regular'
    },

    container: {
        paddingHorizontal: 20,
        paddingBottom: 60,
        flex: 1
    },

    title: {
        color: '#4f46e5',
        fontSize: 24,
        fontFamily: 'Inter_600SemiBold',
        marginBottom: 10
    },

    description: {
        fontSize: 16,
        fontFamily: 'Inter_400Regular',
        color: '#4b5563'
    }
})