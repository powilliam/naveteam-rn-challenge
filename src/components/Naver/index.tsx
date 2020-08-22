import React, { useState, useCallback, useMemo, useContext } from "react";
import { TouchableOpacity } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";
import Modal from "react-native-modal";

import { NaversContext } from "../../contexts/NaversContext";

import api from "../../services/api";
import { Naver as NaverModel } from "../../models/Naver";

import Button from "../Button";

import {
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalFooter,
} from "../../layouts/Modal";

import { Container, Image, Name, Description, Actions } from "./styles";

export interface NaverProps {
  data: NaverModel;
}

const Naver: React.FC<NaverProps> = ({ data }) => {
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const { navigate } = useNavigation();
  const { deleteNaver } = useContext(NaversContext);

  const id = useMemo(() => data.id, [data]);
  const uri = useMemo(() => data.url, [data]);
  const name = useMemo(() => data.name, [data]);
  const description = useMemo(() => data.job_role, [data]);

  const handleNavigateToNaver = useCallback(() => navigate("Naver", { id }), [
    navigate,
  ]);
  const handleNavigateToUpdateNave = useCallback(
    () => navigate("UpdateNaver", { id }),
    [navigate]
  );
  const handleToggleIsConfirmModalVisible = useCallback(
    () => setIsConfirmModalVisible(!isConfirmModalVisible),
    [isConfirmModalVisible]
  );
  const handleToggleIsVisible = useCallback(() => setIsVisible(!isVisible), [
    isVisible,
  ]);
  const handleConfirmDeletion = useCallback(async () => {
    try {
      setIsConfirmModalVisible(false);
      await api.delete(`navers/${id}`, {
        headers: {
          Authorization: `Bearer ${await AsyncStorage.getItem("@JWT:TOKEN")}`,
        },
      });
      setIsVisible(true);
    } catch (error) {}
  }, [id]);
  const onModalHide = useCallback(() => deleteNaver(id), [id, deleteNaver]);

  return (
    <Container>
      <RectButton onPress={handleNavigateToNaver}>
        <Image source={{ uri }} resizeMode="cover" />
      </RectButton>
      <Name>{name}</Name>
      <Description>{description}</Description>
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

      <Modal isVisible={isVisible} onModalHide={onModalHide}>
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
