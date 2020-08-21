import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const Title = styled.Text`
  margin-top: 32px;
  font-size: 22px;
  font-family: Montserrat_600SemiBold;
  align-self: center;
`;

export const Form = styled.ScrollView`
  padding: 0px 16px;
`;
