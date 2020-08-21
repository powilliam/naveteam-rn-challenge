import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Title, Form } from "./styles";

const CreateNaver: React.FC = () => {
  const { goBack } = useNavigation();

  const handleGoBack = useCallback(() => goBack(), [goBack]);

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

        <Button title="Salvar" />
      </Form>
    </Container>
  );
};

export default CreateNaver;
