import { TComponent, TViewStyle } from "@shared/types/ComponentTypes";
import { cn } from "@shared/utils/Styles";
import { SafeAreaView, View } from "react-native";

export function ScreenView({ className, children, ...props }: TComponent<TViewStyle>) {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className={cn('px-5 py-2 flex-1', className)} {...props}>
                {children}
            </View>
        </SafeAreaView>
    )
}