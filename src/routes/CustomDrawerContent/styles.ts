import styled from "styled-components/native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(DrawerContentScrollView)`
  flex: 1;
  background-color: ${(props) => props.theme.drawerBackgroundColor};
  padding: 20px 16px;
`;

export const TouchableIcon = styled.TouchableOpacity`
  position: absolute;
  left: 16px;
  top: 20px;
`;

export const Item = styled(RectButton)`
  align-items: center;
  padding: 8px 0px;
`;

export const Label = styled.Text`
  font-family: Montserrat_600SemiBold;
  font-size: 22px;
  line-height: 32px;
  color: ${(props) => props.theme.primaryColor};
`;
