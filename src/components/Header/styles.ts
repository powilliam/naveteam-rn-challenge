import styled from "styled-components/native";

export const Container = styled.View`
  height: 64px;
  padding: 20px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.drawerBackgroundColor};
  elevation: 4;
  position: relative;
  box-shadow: 0px 2px 4px rgba(33, 33, 33, 0.25);
`;

export const Logo = styled.Image`
  width: 124.8px;
`;

export const HeaderLeft = styled.TouchableOpacity`
  position: absolute;
  left: 16px;
`;
