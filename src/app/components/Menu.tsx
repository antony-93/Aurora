import { MoreHorizontal } from "lucide-react-native";
import { useState } from "react";
import { Pressable, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { Menu as MenuPaper } from "react-native-paper";

type Action = {
    title: string;
    onPress?: () => void
}

type MenuProps = {
    actions: Action[],
    style?: StyleProp<ViewStyle>;
}

export default function Menu({ actions, style }: MenuProps) {
    const [menuVisible, setMenuVisible] = useState(false);

    function handleItem (action: Action) {
        setMenuVisible(false);
        action.onPress && action.onPress();
    }

    return (
        <MenuPaper
            visible={menuVisible}
            onDismiss={() => setMenuVisible(false)}
            anchor={
                <Pressable style={[styles.buttonContainer, style]} onPress={() => setMenuVisible(!menuVisible)}>
                    <View style={styles.buttonContent}>
                        <MoreHorizontal size={20} color="#4f46e5" />
                    </View>
                </Pressable>
            }
            style={{ position: 'absolute', top: 110 }}
            contentStyle={{ backgroundColor: 'white', paddingVertical: 0, borderRadius: 5 }}

        >
            {actions && actions.map((action, index) => (
                <MenuPaper.Item key={index} title={action.title} onPress={() => handleItem(action)} style={styles.item} titleStyle={styles.itemTitle} />
            ))}
        </MenuPaper>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 36,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonContent: {
        width: 32,
        height: 32,
        borderRadius: 16,
        borderColor: '#4f46e5',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    item: {
        height: 40,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        paddingLeft: 10,
        backgroundColor: 'white'
    },

    itemTitle: {
        fontSize: 16,
        fontFamily: 'Inter_400Regular'
    }
})