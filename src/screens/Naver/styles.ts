import styled from "styled-components/native";

export interface TitleProps {
  large?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const Informations = styled.ScrollView``;

export const Image = styled.Image`
  width: 100%;
  height: 288px;
`;

export const Title = styled.Text<TitleProps>`
  margin: 24px 16px 0px 16px;
  font-family: Montserrat_600SemiBold;
  font-size: ${(props) => (props.large ? "22px" : "16px")};
  line-height: 24px;
  color: ${(props) => props.theme.primaryColor};
`;

export const Description = styled.Text`
  margin: 4px 16px 0px 16px;
  font-family: Montserrat_400Regular;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.primaryColor};
`;

export const Actions = styled.View`
  margin-top: 32px;
  margin-bottom: 40px;
  padding: 0px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
