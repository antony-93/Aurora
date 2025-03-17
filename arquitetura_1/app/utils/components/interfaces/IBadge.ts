import { ReactNode } from "react";
import { TextStyle, ViewStyle } from "react-native";

export interface IBadgeProps {
    children: ReactNode
    style?: ViewStyle | TextStyle;
    textStyle?: ViewStyle | TextStyle;
}