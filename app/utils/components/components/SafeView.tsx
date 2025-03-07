import { SafeAreaView, View } from "react-native";
import { ISafeViewProps } from "../interfaces/ISafeView";
import Notification from "./Notification";

export default function SafeView({ children, style }: ISafeViewProps) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Notification />

            <View style={style}>
                {children}
            </View>
        </SafeAreaView>
    );
}