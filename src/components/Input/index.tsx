import React, { useRef, useEffect, useCallback } from "react";
import {
  TextInputProps,
  ViewStyle,
  TextInput as RNTextInput,
} from "react-native";
import { useField } from "@unform/core";

import { Container, Label, TextInput } from "./styles";

export interface InputRef extends RNTextInput {
  value: string;
}

export interface InputProps extends TextInputProps {
  name: string;
  label: string;
  containerStyle?: ViewStyle;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  containerStyle,
  ...rest
}) => {
  const inputRef = useRef<InputRef>(null);

  const { registerField } = useField(name);

  const onChangeText = useCallback(
    (text: string) => {
      if (inputRef.current) {
        inputRef.current.value = text;
      }
    },
    [inputRef]
  );

  useEffect(() => {
    registerField({
      name,
      ref: inputRef.current,
      clearValue(ref) {
        ref.value = "";
        ref.clear();
      },
      setValue(ref: InputRef, value: string) {
        ref.setNativeProps({ text: value });

        if (inputRef.current) {
          inputRef.current.value = value;
        }
      },
      getValue(ref: InputRef) {
        return ref.value;
      },
    });
  }, [inputRef, name, registerField]);

  return (
    <Container style={containerStyle}>
      <Label>{label}</Label>
      <TextInput ref={inputRef} {...rest} onChangeText={onChangeText} />
    </Container>
  );
};

export default Input;
