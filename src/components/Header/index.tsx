import React, { ReactNode } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import NaveLogo from "../../assets/naver-logo.png";

import { Container, Logo, HeaderLeft } from "./styles";

export interface HeaderProps {
  headerLeftIcon?: ReactNode;
  onPressLeftIcon?: () => void;
}

const Header: React.FC<HeaderProps> = ({ headerLeftIcon, onPressLeftIcon }) => {
  const { top } = useSafeAreaInsets();

  return (
    <Container style={{ paddingTop: top }}>
      <HeaderLeft
        onPress={onPressLeftIcon}
        style={{ top }}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      >
        {headerLeftIcon}
      </HeaderLeft>
      <Logo source={NaveLogo} resizeMode="contain" />
    </Container>
  );
};

export default Header;
