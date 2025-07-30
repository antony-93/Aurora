import { TComponent, TViewStyle } from "@shared/types/ComponentTypes";
import { cn } from "@shared/utils/Styles";
import { View } from "react-native";

export function Card({ children, className, style }: TComponent<TViewStyle>) {
    return (
        <View className={cn("border rounded-xl p-4 border-gray-200", className)} style={style}>
            {children}
        </View>
    )
}