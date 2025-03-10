import { colorNames } from "@repo/data-utils";
import * as React from "react";
import {
  type GestureResponderEvent,
  Pressable as RNPressable,
  StyleSheet,
  Text,
} from "react-native";

export type ButtonProps = {
  readonly onClick?: (event: GestureResponderEvent) => void;
  readonly text: string;
};

export const Pressable = ({ onClick, text }: ButtonProps) => {
  return (
    <RNPressable onPress={onClick} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </RNPressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colorNames.blueLagoon,
    borderRadius: 10,
    fontSize: 15,
    maxWidth: 200,
    paddingBottom: 14,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 14,
    textAlign: "center",
  },
  text: {
    color: "white",
  },
});
