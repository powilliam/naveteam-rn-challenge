import styled from "styled-components/native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const ListHeader = styled.View`
  margin: 32px 0px;
  padding: 0px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ListHeaderTitle = styled.Text`
  font-family: Montserrat_600SemiBold;
  color: ${(props) => props.theme.primaryColor};
  font-size: 22px;
  line-height: 32px;
`;

export const CreateButton = styled(RectButton)`
  width: 155px;
  background-color: ${(props) => props.theme.primaryColor};
  height: 40px;
  padding: 8px 6px;
  align-items: center;
  justify-content: center;
`;

export const CreateButtonText = styled.Text`
  font-family: Montserrat_600SemiBold;
  color: #fff;
  font-size: 14px;
  line-height: 24px;
`;
