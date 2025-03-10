import { type TextStyle } from "react-native";
import { type TextVariant } from "./types";

export const getTextShadow = (variant: TextVariant): TextStyle => {
  if (variant === "header1" || variant === "header2" || variant === "header3") {
    return {
      textShadowColor: "rgba(0, 14, 58, 0.4)",
      textShadowOffset: { height: 1, width: 0.6 },
      textShadowRadius: 3,
    };
  }
  return {};
};
