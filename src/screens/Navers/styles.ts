import styled from "styled-components/native";

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
