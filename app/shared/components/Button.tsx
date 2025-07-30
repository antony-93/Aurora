import { TComponent, TViewStyle } from "@shared/types/ComponentTypes";
import { cn } from "@shared/utils/Styles";
import { ActivityIndicator, TouchableOpacity } from "react-native";

type TButtonProps = TComponent<TViewStyle> & {
    onPress: () => void;
    loading?: boolean;
    disabled?: boolean;
}

export function Button({ children, className, loading, disabled, ...props }: TButtonProps) {
    return (
        <TouchableOpacity 
            className={cn("bg-primary rounded-xl p-3 items-center justify-center flex-row gap-2", className)} 
            {...props}
            disabled={loading || disabled}
            style={{
                opacity: disabled ? 0.5 : 1
            }}
        >
            {loading && <ActivityIndicator size="small" color="#fff" />}
            {children}
        </TouchableOpacity>
    )
}