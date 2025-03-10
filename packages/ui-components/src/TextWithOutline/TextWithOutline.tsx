import { type ColorName, colorNames } from '@repo/data-utils';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, type TextProperties } from '../Text/Text';
import { View } from '../View/View';

type Properties = TextProperties & {
  readonly outlineColor: ColorName;
  readonly outlineRadius: number;
  readonly outlineWidth: number;
};

export const TextWithOutline = ({
  outlineColor,
  outlineRadius,
  outlineWidth,
  style,
  ...rest
}: Properties) => {
  const passedStyled = StyleSheet.flatten(style);
  const styles = StyleSheet.create({
    bottom: {
      ...passedStyled,
      textShadowColor: colorNames[outlineColor],
      textShadowOffset: { height: -outlineWidth, width: outlineWidth },
      textShadowRadius: outlineRadius,
    },
    left: {
      ...passedStyled,
      position: 'absolute',
      textShadowColor: colorNames[outlineColor],
      textShadowOffset: { height: outlineWidth, width: -outlineWidth },
      textShadowRadius: outlineRadius,
    },
    right: {
      ...passedStyled,
      position: 'absolute',
      textShadowColor: colorNames[outlineColor],
      textShadowOffset: { height: -outlineWidth, width: -outlineWidth },
      textShadowRadius: outlineRadius,
    },
    top: {
      ...passedStyled,
      position: 'absolute',
      textShadowColor: colorNames[outlineColor],
      textShadowOffset: { height: outlineWidth, width: outlineWidth },
      textShadowRadius: outlineRadius,
    },
  });

  return (
    // @ts-expect-error 'justified' not valid
    <View alignSelf={rest.textAlign}>
      <Text
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
        style={styles.top}
      />
      <Text
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
        accessible={false}
        style={styles.bottom}
      />
      <Text
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
        accessible={false}
        style={styles.right}
      />
      <Text
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
        accessible={false}
        style={styles.left}
      />
    </View>
  );
};
