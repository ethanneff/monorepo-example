import * as React from "react";
import {
  StyleSheet,
  GestureResponderEvent,
  Text,
  Pressable,
} from "react-native";
import { color, useWindowSize } from "@repo/data-utils";

export interface ButtonProps {
  text: string;
  onClick?: (event: GestureResponderEvent) => void;
}

export function Button({ text, onClick }: ButtonProps) {
  const size = useWindowSize();
  return (
    <Pressable style={styles.button} onPress={onClick}>
      <Text style={styles.text}>
        {text} {String(size.height)}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    maxWidth: 200,
    textAlign: "center",
    borderRadius: 10,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 15,
    backgroundColor: color,
  },
  text: {
    color: "white",
  },
});
