import React, { ReactNode, useContext } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ThemeContext } from "styled-components";

import NaveLogo from "../../assets/naver-logo.png";

import { Container, Logo, HeaderLeft } from "./styles";

export interface HeaderProps {
  headerLeftIcon?: ReactNode;
  onPressLeftIcon?: () => void;
}

const Header: React.FC<HeaderProps> = ({ headerLeftIcon, onPressLeftIcon }) => {
  const { top } = useSafeAreaInsets();
  const { drawerBackgroundColor } = useContext(ThemeContext);

  return (
    <React.Fragment>
      <StatusBar style="auto" backgroundColor={drawerBackgroundColor} />
      <Container
        style={{
          marginTop: top,
        }}
      >
        <HeaderLeft
          onPress={onPressLeftIcon}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          {headerLeftIcon}
        </HeaderLeft>
        <Logo source={NaveLogo} resizeMode="contain" />
      </Container>
    </React.Fragment>
  );
};

export default Header;
