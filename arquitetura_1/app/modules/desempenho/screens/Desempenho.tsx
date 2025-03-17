import { StyleSheet, Text } from "react-native";
import SafeView from "../../../utils/components/components/SafeView";

export default function Desempenho() {
    return (
        <SafeView style={styles.container}>
            <Text style={styles.title}>
                Desempenho
            </Text>
        </SafeView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
    },

    title: {
        fontSize: 25,
        fontFamily: "LexendDeca_500Medium",
    }
})