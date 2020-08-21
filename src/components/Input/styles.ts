import styled from "styled-components/native";

export const Container = styled.View`
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

export const TextInput = styled.TextInput`
  width: 100%;
  height: 40px;
  border-width: 1px;
  border-color: ${(props) => props.theme.secundaryColor};
  padding: 8px;
  font-size: 16px;
  font-family: Montserrat_400Regular;
`;
