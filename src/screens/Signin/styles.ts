import styled from "styled-components/native";
import { Form as UnformForm } from "@unform/mobile";

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

export const Form = styled(UnformForm)`
  width: 100%;
  margin-top: 56px;
  padding: 0px 16px;
`;
