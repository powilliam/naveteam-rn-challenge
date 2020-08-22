import React, { useState, useCallback, useRef, useContext } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { FormHandles, SubmitHandler } from "@unform/core";
import AsyncStorage from "@react-native-community/async-storage";
import Modal from "react-native-modal";

import { NaversContext } from "../../contexts/NaversContext";

import api from "../../services/api";
import { CreateNaverDTO } from "../../services/dto/CreateNaver.dto";

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
import { ScrollView } from "react-native-gesture-handler";

const CreateNaver: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [isVisible, setIsVisible] = useState(false);

  const { goBack, navigate } = useNavigation();
  const { addNaver } = useContext(NaversContext);

  const handleGoBack = useCallback(() => goBack(), [goBack]);
  const handleToggleIsVisible = useCallback(() => setIsVisible(!isVisible), [
    isVisible,
    setIsVisible,
  ]);
  const handleSubmit = useCallback<SubmitHandler<CreateNaverDTO>>(
    async (data, { reset }) => {
      try {
        const response = await api.post<CreateNaverDTO>("navers", data, {
          headers: {
            Authorization: `Bearer ${await AsyncStorage.getItem("@JWT:TOKEN")}`,
          },
        });
        addNaver(response.data);
        reset();
        setIsVisible(true);
      } catch (error) {}
    },
    [addNaver]
  );
  const onPressSaveButton = useCallback(() => formRef.current?.submitForm(), [
    formRef,
  ]);
  const onModalHide = useCallback(() => navigate("Navers"), [navigate]);

  return (
    <Container>
      <Header
        headerLeftIcon={<MaterialIcons name="chevron-left" size={28} />}
        onPressLeftIcon={handleGoBack}
      />
      <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Title>Adicionar nave</Title>
          <Input name="name" label="Nome" placeholder="Nome" />
          <Input
            name="job_role"
            label="Cargo"
            placeholder="Cargo"
            containerStyle={{ marginTop: 12 }}
          />
          <Input
            name="birthdate"
            label="Data de nascimento"
            placeholder="Data de nascimento"
            containerStyle={{ marginTop: 12 }}
          />
          <Input
            name="admission_date"
            label="Data de admissão"
            placeholder="Data de admissão"
            containerStyle={{ marginTop: 12 }}
          />
          <Input
            name="project"
            label="Projetos que participou"
            placeholder="Projetos que participou"
            containerStyle={{ marginTop: 12 }}
          />
          <Input
            name="url"
            label="URL da foto do naver"
            placeholder="URL da foto do naver"
            containerStyle={{ marginTop: 12 }}
          />

          <Button
            type="contained"
            title="Salvar"
            onPress={onPressSaveButton}
            style={{ marginTop: 40 }}
          />
        </Form>
      </ScrollView>

      <Modal isVisible={isVisible} onModalHide={onModalHide}>
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
