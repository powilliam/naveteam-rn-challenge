import React, { useState, useCallback } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";

import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";

import {
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalDescription,
} from "../../layouts/Modal";

import { Container, Title, Form } from "./styles";

const CreateNaver: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { goBack } = useNavigation();

  const handleGoBack = useCallback(() => goBack(), [goBack]);
  const handleToggleIsVisible = useCallback(() => setIsVisible(!isVisible), [
    isVisible,
    setIsVisible,
  ]);

  return (
    <Container>
      <Header
        headerLeftIcon={<MaterialIcons name="chevron-left" size={28} />}
        onPressLeftIcon={handleGoBack}
      />
      <Form contentContainerStyle={{ paddingBottom: 16 }}>
        <Title>Adicionar nave</Title>
        <Input label="Nome" placeholder="Nome" />
        <Input
          label="Cargo"
          placeholder="Cargo"
          containerStyle={{ marginTop: 12 }}
        />
        <Input
          label="Idade"
          placeholder="Idade"
          containerStyle={{ marginTop: 12 }}
        />
        <Input
          label="Tempo de empresa"
          placeholder="Tempo de empresa"
          containerStyle={{ marginTop: 12 }}
        />
        <Input
          label="Projetos que participou"
          placeholder="Projetos que participou"
          containerStyle={{ marginTop: 12 }}
        />
        <Input
          label="URL da foto do naver"
          placeholder="URL da foto do naver"
          containerStyle={{ marginTop: 12 }}
        />

        <Button
          type="contained"
          title="Salvar"
          onPress={handleToggleIsVisible}
          style={{ marginTop: 40 }}
        />
      </Form>

      <Modal isVisible={isVisible}>
        <ModalContainer>
          <ModalHeader>
            <ModalTitle>Naver adicionado</ModalTitle>
            <TouchableOpacity
              onPress={handleToggleIsVisible}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <MaterialIcons name="close" size={24} />
            </TouchableOpacity>
          </ModalHeader>
          <ModalDescription>Naver adicionado com sucesso</ModalDescription>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default CreateNaver;
