import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import NaveLogo from "../../assets/naver-logo.png";

import {
  Container,
  Logo,
  Form,
  Block,
  Label,
  Input,
  SigninButton,
  SigninButtonText,
} from "./styles";

const Signin: React.FC = () => {
  const { placeholderTextColor } = useContext(ThemeContext);

  return (
    <Container>
      <Logo source={NaveLogo} resizeMode="contain" />

      <Form>
        <Block>
          <Label>E-mail</Label>
          <Input
            placeholder="E-mail"
            placeholderTextColor={placeholderTextColor}
          />
        </Block>

        <Block style={{ marginTop: 12 }}>
          <Label>Senha</Label>
          <Input
            placeholder="Senha"
            placeholderTextColor={placeholderTextColor}
          />
        </Block>

        <SigninButton rippleColor="#FFF">
          <SigninButtonText>Entrar</SigninButtonText>
        </SigninButton>
      </Form>
    </Container>
  );
};

export default Signin;
