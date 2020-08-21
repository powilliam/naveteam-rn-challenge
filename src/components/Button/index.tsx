import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Text } from "./styles";

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title, ...rest }) => {
  return (
    <Container {...rest}>
      <Text>{title}</Text>
    </Container>
  );
};

export default Button;
