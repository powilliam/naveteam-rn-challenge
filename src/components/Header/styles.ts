import styled from "styled-components/native";
import { BorderlessButton } from "react-native-gesture-handler";

export const Container = styled.View`
  height: 64px;
  padding: 0px 16px 16px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.drawerBackgroundColor};
  elevation: 1;
`;

export const Logo = styled.Image`
  width: 124.8px;
  align-self: center;
`;

export const HeaderLeft = styled(BorderlessButton)`
  position: absolute;
  left: 16px;
`;
