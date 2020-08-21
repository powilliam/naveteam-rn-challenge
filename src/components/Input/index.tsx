import React from "react";
import { TextInputProps, ViewStyle } from "react-native";

import { Container, Label, TextInput } from "./styles";

export interface InputProps extends TextInputProps {
  label: string;
  containerStyle?: ViewStyle;
}

const Input: React.FC<InputProps> = ({ label, containerStyle, ...rest }) => {
  return (
    <Container style={containerStyle}>
      <Label>{label}</Label>
      <TextInput {...rest} />
    </Container>
  );
};

export default Input;
