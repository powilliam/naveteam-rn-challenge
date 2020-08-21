import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  margin-top: 40px;
  background-color: ${(props) => props.theme.primaryColor};
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-family: Montserrat_600SemiBold;
  font-size: 14px;
  line-height: 24px;
`;
