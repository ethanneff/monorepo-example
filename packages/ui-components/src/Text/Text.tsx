import { type ColorName, colorNames, getResponsive } from "@repo/data-utils";
import React from "react";
import {
  Text as RNText,
  type StyleProp,
  StyleSheet,
  type TextProps,
  type TextStyle,
} from "react-native";
import { getTextFontProperties } from "./getTextFontProperties";
import { getTextShadow } from "./getTextShadow";
import { type FontEmphasis, type TextVariant } from "./types";

export type TextProperties = TextProps & {
  readonly color?: ColorName;
  readonly emphasis?: FontEmphasis;
  readonly style?: StyleProp<TextStyle>;
  readonly textAlign?: "auto" | "center" | "justify" | "left" | "right";
  readonly title: string;
  readonly variant: TextVariant;
  readonly withDropShadow?: boolean;
};

export const Text = ({
  color = "black",
  emphasis,
  style,
  textAlign,
  title,
  variant,
  withDropShadow,
  ...rest
}: TextProperties) => {
  const { fontFamily, fontSize } = getTextFontProperties(variant, emphasis);
  const textShadow = withDropShadow
    ? getTextShadow("header1")
    : getTextShadow(variant);

  const textFontSize =
    style &&
    typeof style === "object" &&
    "fontSize" in style &&
    typeof style.fontSize === "number"
      ? style.fontSize
      : fontSize;

  const styles = StyleSheet.create({
    text: {
      color: colorNames[color],
      fontFamily,
      fontSize: textFontSize,
      lineHeight: textFontSize + getResponsive(4),
      textAlign,
      ...textShadow,
    },
  });

  return (
    <RNText
      style={[styles.text, style]}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {title}
    </RNText>
  );
};
