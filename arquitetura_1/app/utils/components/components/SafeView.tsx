import { View, SafeAreaView } from "react-native";
import { ISafeViewProps } from "../interfaces/ISafeView";
import Notification from "./Notification";

export default function SafeView({ children, style, backgroundColor }: ISafeViewProps) {
    return (
        <View style={[{ flex: 1 }, backgroundColor && { backgroundColor }]}>
            <SafeAreaView style={{ flex: 1 }}>
                <Notification />

                <View style={style}>
                    {children}
                </View>
            </SafeAreaView >
        </View>
    );
}