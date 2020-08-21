import styled from "styled-components/native";

export interface ContainerProps {
  type?: "outlined" | "contained";
  size?: "small" | "normal" | "large";
}

export interface TextProps extends Omit<ContainerProps, "size"> {}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: ${(props) => {
    switch (props.size) {
      case "small":
        return "132px";

      case "normal":
        return "158px";

      default:
        return "100%";
    }
  }};
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
