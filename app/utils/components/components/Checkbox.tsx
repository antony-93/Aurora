import React, { useState } from "react";
import { View, StyleProp, ViewStyle, Pressable, StyleSheet } from "react-native";
import { Check } from "lucide-react-native";

interface CheckboxProps {
  checked: boolean;
  setChecked: (checked: boolean) => void;
  checkedColor?: string;
  style?: StyleProp<ViewStyle>;
}

export default function Checkbox({ checked, setChecked, checkedColor = '#4f46e5', style }: CheckboxProps) {
  const borderColor = checked ? "transparent" : "#D1D5DB",
    backgroundColor = checked ? checkedColor : "transparent";

  return (
    <Pressable onPress={() => setChecked(!checked)}>
      <View style={[{ borderColor, backgroundColor }, styles.checkbox, style]}>
        <Check size={12} color="white" />
      </View>
    </Pressable >
  );
}

const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,

    justifyContent: "center",
    alignItems: "center",
  }
})