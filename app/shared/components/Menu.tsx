import { TComponent, TViewStyle } from "@shared/types/ComponentTypes";
import { MoreHorizontalIcon } from "lucide-react-native";
import { useState, Children, cloneElement } from "react";
import { TouchableOpacity, View } from "react-native";
import { Menu as MenuPaper } from 'react-native-paper';

export function Menu({ children }: TComponent<TViewStyle>) {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <MenuPaper
            visible={menuVisible}
            onDismiss={() => setMenuVisible(false)}
            anchor={
                <TouchableOpacity className="border-primary border-[1px] rounded-full p-1" onPress={() => setMenuVisible(true)}>
                    <MoreHorizontalIcon size={24} color="#4f46e5" />
                </TouchableOpacity>
            }
            anchorPosition="bottom"
            contentStyle={{
                backgroundColor: 'white',
                shadowColor: 'transparent',
                marginTop: 8,
                borderRadius: 8,
                paddingVertical: 0
            }}
        >
            {Children.map(children, (child) => {
                return cloneElement(child as React.ReactElement<TMenuItem>, {
                    onPress: () => {
                        setMenuVisible(false);
                        (child as React.ReactElement<TMenuItem>).props.onPress();
                    }
                });
            })}
        </MenuPaper>
    )
}

type TMenuItem = {
    title: string
    onPress: () => void
}

export function MenuItem({ title, onPress }: TMenuItem) {
    return (
        <MenuPaper.Item title={title} onPress={onPress}/>
    )
}