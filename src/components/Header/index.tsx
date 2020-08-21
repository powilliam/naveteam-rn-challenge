import React, { ReactNode } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import NaveLogo from "../../assets/naver-logo.png";

import { Container, Logo } from "./styles";

export interface HeaderProps {
  headerLeft?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ headerLeft }) => {
  const { top } = useSafeAreaInsets();

  return (
    <Container style={{ marginTop: top }}>
      {headerLeft}
      <Logo source={NaveLogo} resizeMode="contain" />
    </Container>
  );
};

export default Header;
