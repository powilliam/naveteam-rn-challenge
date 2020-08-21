import React, { useContext, useRef, useCallback } from "react";
import { Keyboard } from "react-native";
import { ThemeContext } from "styled-components";
import { FormHandles, SubmitHandler } from "@unform/core";

import { AuthContext, ILoginData } from "../../contexts/AuthContext";

import NaveLogo from "../../assets/naver-logo.png";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Logo, Form } from "./styles";

const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { login } = useContext(AuthContext);
  const { placeholderTextColor } = useContext(ThemeContext);

  const handleSubmit = useCallback<SubmitHandler<ILoginData>>(
    async (data, { reset }) => {
      Keyboard.dismiss();
      await login(data);
      reset();
    },
    [login]
  );

  const onPressSignin = useCallback(() => formRef.current?.submitForm(), [
    formRef,
  ]);

  return (
    <Container>
      <Logo source={NaveLogo} resizeMode="contain" />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          textContentType="emailAddress"
          name="email"
          label="E-mail"
          placeholder="E-mail"
          placeholderTextColor={placeholderTextColor}
        />

        <Input
          secureTextEntry
          name="password"
          label="Senha"
          placeholder="Senha"
          placeholderTextColor={placeholderTextColor}
          containerStyle={{ marginTop: 12 }}
        />

        <Button
          title="Entrar"
          type="contained"
          onPress={onPressSignin}
          style={{ marginTop: 40 }}
        />
      </Form>
    </Container>
  );
};

export default Signin;
