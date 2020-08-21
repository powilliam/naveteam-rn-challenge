import React, { useState, useCallback } from "react";
import { TouchableOpacity } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";

import Button from "../Button";

import {
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalFooter,
} from "../../layouts/Modal";

import { Container, Image, Name, Description, Actions } from "./styles";

const Naver: React.FC = () => {
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const { navigate } = useNavigation();

  const handleNavigateToNaver = useCallback(() => navigate("Naver"), [
    navigate,
  ]);
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
      <RectButton onPress={handleNavigateToNaver}>
        <Image
          source={{ uri: "https://github.com/powilliam.png" }}
          resizeMode="cover"
        />
      </RectButton>
      <Name>William Porto</Name>
      <Description>Mobile Developer</Description>
      <Actions>
        <TouchableOpacity
          onPress={handleToggleIsConfirmModalVisible}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <MaterialIcons name="delete" size={24} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleNavigateToUpdateNave}
          style={{ marginLeft: 12 }}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <MaterialIcons name="edit" size={24} />
        </TouchableOpacity>
      </Actions>

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
