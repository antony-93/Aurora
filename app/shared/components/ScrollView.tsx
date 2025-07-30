import { TComponent, TViewStyle } from "@shared/types/ComponentTypes";
import { ScrollView as RNScrollView } from "react-native";
import { ScrollViewProps } from "react-native";

type TScrollView = TComponent<TViewStyle> & ScrollViewProps;

export function ScrollView({ children, ...props }: TScrollView) {
    return (
        <RNScrollView 
            {...props} 
            showsVerticalScrollIndicator={false} 
            bounces={false} 
            showsHorizontalScrollIndicator={false}
        >
            {children}
        </RNScrollView>
    )
}