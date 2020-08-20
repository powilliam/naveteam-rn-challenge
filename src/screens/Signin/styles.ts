import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.backgroundColor};
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 156px;
  height: 40px;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: 56px;
  padding: 0px 16px;
`;

export const Block = styled.View`
  width: 100%;
  align-items: flex-start;
`;

export const Label = styled.Text`
  margin-bottom: 4px;
  font-family: Montserrat_600SemiBold;
  font-size: 14px;
  line-height: 18px;
  color: ${(props) => props.theme.primaryColor};
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  border-width: 1px;
  border-color: ${(props) => props.theme.secundaryColor};
  padding: 8px;
  font-size: 16px;
  font-family: Montserrat_400Regular;
`;

export const SigninButton = styled(RectButton)`
  margin-top: 40px;
  background-color: ${(props) => props.theme.primaryColor};
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const SigninButtonText = styled.Text`
  color: #fff;
  font-family: Montserrat_600SemiBold;
`;
