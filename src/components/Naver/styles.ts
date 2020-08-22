import styled from "styled-components/native";

export const Container = styled.View`
  margin: 0px 16px;
`;

export const Image = styled.Image`
  min-width: 156px;
  height: 156px;
  background-color: ${(props) => props.theme.drawerBackgroundColor};
`;

export const Name = styled.Text`
  font-family: Montserrat_600SemiBold;
  margin-top: 6px;
`;

export const Description = styled.Text`
  font-family: Montserrat_400Regular;
  margin-top: 4px;
`;

export const Actions = styled.View`
  margin-top: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 16px;
`;
