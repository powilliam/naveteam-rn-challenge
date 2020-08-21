import React, { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Text, ContainerProps } from "./styles";

export interface ButtonProps extends TouchableOpacityProps, ContainerProps {
  title: string;
  icon?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ title, icon, type, ...rest }) => {
  return (
    <Container {...rest} type={type}>
      {icon}
      <Text type={type}>{title}</Text>
    </Container>
  );
};

export default Button;
