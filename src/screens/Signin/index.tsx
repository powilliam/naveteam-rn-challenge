import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { AuthContext } from "../../contexts/AuthContext";

import NaveLogo from "../../assets/naver-logo.png";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Logo, Form } from "./styles";

const Signin: React.FC = () => {
  const { login } = useContext(AuthContext);
  const { placeholderTextColor } = useContext(ThemeContext);

  return (
    <Container>
      <Logo source={NaveLogo} resizeMode="contain" />

      <Form>
        <Input
          label="E-mail"
          placeholder="E-mail"
          placeholderTextColor={placeholderTextColor}
        />

        <Input
          label="Senha"
          placeholder="Senha"
          placeholderTextColor={placeholderTextColor}
          containerStyle={{ marginTop: 12 }}
        />

        <Button
          title="Entrar"
          type="contained"
          onPress={login}
          style={{ marginTop: 40 }}
        />
      </Form>
    </Container>
  );
};

export default Signin;
