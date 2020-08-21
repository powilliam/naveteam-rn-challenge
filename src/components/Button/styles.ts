import styled from "styled-components/native";

export interface ContainerProps {
  type?: "outlined" | "contained";
  size?: "large" | "normal";
}

export interface TextProps extends Omit<ContainerProps, "size"> {}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: ${(props) => (props.size === "normal" ? "158px" : "100%")};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 40px;
  background-color: ${(props) =>
    props.type === "contained"
      ? props.theme.primaryColor
      : props.theme.backgroundColor};
  border-width: ${(props) => (props.type === "contained" ? "0px" : "1px")};
  border-color: ${(props) => props.theme.primaryColor};
`;

export const Text = styled.Text<TextProps>`
  font-family: Montserrat_400Regular;
  color: ${(props) =>
    props.type === "contained"
      ? props.theme.backgroundColor
      : props.theme.primaryColor};
  font-size: 14px;
  line-height: 24px;
`;
