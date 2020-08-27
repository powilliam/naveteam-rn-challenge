import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 16px 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  width: 200px;
  font-family: Montserrat_600SemiBold;
  font-size: 22px;
  line-height: 32px;
  color: ${(props) => props.theme.primaryColor};
`;

export const Message = styled.Text`
  margin-top: 16px;
  font-family: Montserrat_400Regular;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.primaryColor};
`;

export const Footer = styled.View`
  margin-top: 32px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
