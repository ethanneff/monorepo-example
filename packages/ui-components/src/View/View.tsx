import { type ColorName, getDropShadow } from "@repo/data-utils";
import React from "react";
import { type ReactNode } from "react";
import {
  type LayoutChangeEvent,
  View as RNView,
  type StyleProp,
  StyleSheet,
  type ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ViewProperties = ViewStyle & {
  readonly absoluteFillObject?: boolean;
  readonly accessible?: boolean;
  readonly children?: ReactNode;
  readonly dropShadowColor?: ColorName;
  readonly onLayout?: (event: LayoutChangeEvent) => void;
  readonly safeArea?: boolean;
  readonly safeAreaEdges?: ["top", "right", "bottom", "left"];
  readonly style?: StyleProp<ViewStyle>;
};

export const View = ({
  absoluteFillObject,
  accessible,
  children,
  dropShadowColor = "transparent",
  onLayout,
  safeArea,
  safeAreaEdges,
  style,
  ...rest
}: ViewProperties) => {
  const absolute = absoluteFillObject ? StyleSheet.absoluteFillObject : {};
  const dropShadow = getDropShadow(dropShadowColor);
  const styles = StyleSheet.create({
    view: { ...absolute, ...dropShadow, ...rest },
  });

  if (safeArea) {
    return (
      <SafeAreaView
        accessible={accessible}
        edges={safeAreaEdges}
        onLayout={onLayout}
        style={[styles.view, style]}
      >
        {children}
      </SafeAreaView>
    );
  }

  return (
    <RNView
      accessible={accessible}
      onLayout={onLayout}
      style={[styles.view, style]}
    >
      {children}
    </RNView>
  );
};
