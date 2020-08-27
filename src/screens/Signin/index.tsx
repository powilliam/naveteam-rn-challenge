import React, { useState, useContext, useRef, useCallback } from "react";
import { Keyboard } from "react-native";
import { ThemeContext } from "styled-components";
import { FormHandles, SubmitHandler } from "@unform/core";

import { AuthContext, ILoginData } from "../../contexts/AuthContext";

import NaveLogo from "../../assets/naver-logo.png";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

import { Container, Logo, Form } from "./styles";

const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [isVisible, setIsVisible] = useState(false);

  const { login, isLoading } = useContext(AuthContext);
  const { placeholderTextColor } = useContext(ThemeContext);

  const handleToggleIsVisible = useCallback(() => setIsVisible(!isVisible), [
    isVisible,
  ]);
  const handleSubmit = useCallback<SubmitHandler<ILoginData>>(
    async (data) => {
      try {
        Keyboard.dismiss();
        await login(data);
      } catch (error) {
        setIsVisible(true);
      }
    },
    [login]
  );

  const onPressSignin = useCallback(() => formRef.current?.submitForm(), [
    formRef,
  ]);

  return (
    <React.Fragment>
      <Container>
        <Logo source={NaveLogo} resizeMode="contain" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            keyboardType="email-address"
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
            isLoading={isLoading}
            title="Entrar"
            type="contained"
            onPress={onPressSignin}
            style={{ marginTop: 40 }}
          />
        </Form>
      </Container>
      <Modal
        title="Algo de errado aconteceu"
        message="Aparentemente suas credencias são inválidas. Certifique-se de utilizar email e senha corretos"
        isVisible={isVisible}
        onPressCloseButton={handleToggleIsVisible}
      />
    </React.Fragment>
  );
};

export default Signin;
