import React, { ReactNode, useContext, useMemo } from "react";
import { TouchableOpacityProps, ActivityIndicator } from "react-native";
import { ThemeContext } from "styled-components";

import { Container, Text, ContainerProps } from "./styles";

export interface ButtonProps extends TouchableOpacityProps, ContainerProps {
  title: string;
  icon?: ReactNode;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  icon,
  type,
  isLoading,
  ...rest
}) => {
  const { primaryColor, backgroundColor } = useContext(ThemeContext);

  const activityIndicatorColor = useMemo(
    () => (type === "contained" ? backgroundColor : primaryColor),
    [primaryColor, backgroundColor, type]
  );

  return (
    <Container type={type} disabled={isLoading} {...rest}>
      {isLoading ? (
        <ActivityIndicator size="small" color={activityIndicatorColor} />
      ) : (
        <React.Fragment>
          {icon}
          <Text type={type}>{title}</Text>
        </React.Fragment>
      )}
    </Container>
  );
};

export default Button;
