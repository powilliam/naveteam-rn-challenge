import React, { useState, useCallback } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";

import Header from "../../components/Header";
import Button from "../../components/Button";

import {
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalFooter,
} from "../../layouts/Modal";

import {
  Container,
  Informations,
  Image,
  Title,
  Description,
  Actions,
} from "./styles";

const Naver: React.FC = () => {
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const { goBack, navigate } = useNavigation();

  const handleGoBack = useCallback(() => goBack(), [goBack]);
  const handleNavigateToUpdateNave = useCallback(
    () => navigate("UpdateNaver"),
    [navigate]
  );
  const handleToggleIsConfirmModalVisible = useCallback(
    () => setIsConfirmModalVisible(!isConfirmModalVisible),
    [isConfirmModalVisible]
  );
  const handleToggleIsVisible = useCallback(() => setIsVisible(!isVisible), [
    isVisible,
  ]);
  const handleConfirmDeletion = useCallback(() => {
    setIsConfirmModalVisible(false);
    setIsVisible(true);
  }, []);

  return (
    <Container>
      <Header
        headerLeftIcon={<MaterialIcons name="chevron-left" size={28} />}
        onPressLeftIcon={handleGoBack}
      />
      <Informations>
        <Image
          source={{ uri: "https://github.com/powilliam.png" }}
          resizeMode="cover"
        />

        <Title large>William Porto</Title>
        <Description>Mobile Developer</Description>

        <Title>Idade</Title>
        <Description>Lorem Ipsun</Description>

        <Title>Tempo de empresa</Title>
        <Description>Lorem Ipsun</Description>

        <Title>Projetos que participou</Title>
        <Description>Lorem Ipsun</Description>

        <Actions>
          <Button
            size="normal"
            title="Excluir"
            onPress={handleToggleIsConfirmModalVisible}
            icon={
              <MaterialIcons
                name="delete"
                size={24}
                style={{ marginRight: 13 }}
              />
            }
          />
          <Button
            size="normal"
            title="Editar"
            type="contained"
            onPress={handleNavigateToUpdateNave}
            icon={
              <MaterialIcons
                name="edit"
                size={24}
                color="#FFF"
                style={{ marginRight: 13 }}
              />
            }
          />
        </Actions>
      </Informations>
      <Modal isVisible={isConfirmModalVisible}>
        <ModalContainer>
          <ModalHeader>
            <ModalTitle>Excluir naver</ModalTitle>
            <TouchableOpacity
              onPress={handleToggleIsConfirmModalVisible}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <MaterialIcons name="close" size={24} />
            </TouchableOpacity>
          </ModalHeader>
          <ModalDescription>
            Tem certeza que deseja excluir este naver?
          </ModalDescription>
          <ModalFooter>
            <Button
              size="small"
              title="Cancelar"
              onPress={handleToggleIsConfirmModalVisible}
            />
            <Button
              size="small"
              type="contained"
              title="Excluir"
              onPress={handleConfirmDeletion}
            />
          </ModalFooter>
        </ModalContainer>
      </Modal>

      <Modal isVisible={isVisible}>
        <ModalContainer>
          <ModalHeader>
            <ModalTitle>Naver excluido</ModalTitle>
            <TouchableOpacity
              onPress={handleToggleIsVisible}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <MaterialIcons name="close" size={24} />
            </TouchableOpacity>
          </ModalHeader>
          <ModalDescription>Naver excluido com sucesso!</ModalDescription>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default Naver;
