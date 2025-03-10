import { colorNames, getResponsive } from '@repo/data-utils';
import React from 'react';
import { forwardRef, useCallback } from 'react';
import {
  Platform,
  TextInput as RNTextInput,
  StyleSheet,
  type TextInputProps,
} from 'react-native';
import { getTextFontProperties } from '../Text/getTextFontProperties';

export type TextInputReference = null | RNTextInput;

type Properties = RequiredTextInputProperties & TextInputProps;

type RequiredTextInputProperties = Required<
  Pick<
    TextInputProps,
    | 'autoCapitalize'
    | 'autoComplete'
    | 'autoCorrect'
    | 'defaultValue'
    | 'editable'
    | 'keyboardType'
    | 'onChangeText'
    | 'onSubmitEditing'
    | 'placeholder'
    | 'returnKeyType'
    | 'secureTextEntry'
    | 'submitBehavior'
    | 'textContentType'
  >
>;

export const TextInput = forwardRef<TextInputReference, Properties>(
  function TextInputInternalReference(
    {
      autoCapitalize,
      autoComplete,
      autoCorrect,
      defaultValue,
      editable,
      keyboardType,
      onChangeText,
      onSubmitEditing,
      placeholder,
      returnKeyType,
      secureTextEntry,
      style,
      submitBehavior,
      textContentType,
      ...rest
    },
    reference,
  ) {
    const isAndroid = Platform.OS === 'android';
    const fontProperties = getTextFontProperties('body3');

    const styles = StyleSheet.create({
      input: {
        backgroundColor: colorNames.white,
        borderColor: colorNames.silver,
        borderRadius: getResponsive(8),
        borderWidth: 1,
        color: colorNames.black,
        paddingHorizontal: getResponsive(8),
        // @ts-expect-error base4 override
        paddingVertical: getResponsive(isAndroid ? 6 : 8),
        ...fontProperties,
      },
    });

    const handleInternalOnChangeText = useCallback(
      (text: string) => {
        onChangeText(text);
      },
      [onChangeText],
    );

    return (
      <RNTextInput
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        defaultValue={defaultValue}
        editable={editable}
        keyboardType={keyboardType}
        onChangeText={handleInternalOnChangeText}
        onSubmitEditing={onSubmitEditing}
        placeholder={placeholder}
        ref={reference}
        returnKeyType={returnKeyType}
        secureTextEntry={secureTextEntry}
        style={[styles.input, style]}
        submitBehavior={submitBehavior}
        textContentType={textContentType}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
    );
  },
);
