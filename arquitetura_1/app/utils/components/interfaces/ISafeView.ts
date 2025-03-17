import { ReactNode } from "react";
import { TextStyle, ViewStyle } from "react-native";

export interface ISafeViewProps {
    children?: ReactNode;
    
    backgroundColor?: string;

    style?: ViewStyle | TextStyle;
}