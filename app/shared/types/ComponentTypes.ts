import { StyleProp, ViewStyle, TextStyle } from "react-native";

export type TComponent<T> = TStyles<T> & {
    children?: React.ReactNode;
}

export type TViewStyles = TStyles<TViewStyle>;

export type TTextStyles = TStyles<TTextStyle>;

export type TStyles<T> = {
    style?: T;
    className?: string;
}

export type TViewStyle = StyleProp<ViewStyle>;

export type TTextStyle = StyleProp<TextStyle>;