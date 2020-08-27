import React, { useState, useCallback, useMemo, useContext } from "react";
import { TouchableOpacity } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

import { NaversContext } from "../../contexts/NaversContext";

import { Naver as NaverModel } from "../../models/Naver";

import Modal from "../Modal";

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
  const job_role = useMemo(() => data.job_role, [data]);

  const handleNavigateToNaver = useCallback(() => navigate("Naver", { id }), [
    navigate,
    id,
  ]);
  const handleNavigateToUpdateNave = useCallback(
    () => navigate("UpdateNaver", { naver: data }),
    [navigate, data]
  );
  const handleToggleIsConfirmModalVisible = useCallback(
    () => setIsConfirmModalVisible(!isConfirmModalVisible),
    [isConfirmModalVisible]
  );
  const handleToggleIsVisible = useCallback(() => setIsVisible(!isVisible), [
    isVisible,
  ]);
  const handleConfirmDeletion = useCallback(async () => {
    setIsConfirmModalVisible(false);
    setIsVisible(true);
  }, []);
  const onModalHide = useCallback(async () => await deleteNaver(id), [
    id,
    deleteNaver,
  ]);

  return (
    <React.Fragment>
      <Container>
        <RectButton onPress={handleNavigateToNaver}>
          <Image source={{ uri }} resizeMode="cover" />
        </RectButton>
        <Name>{name}</Name>
        <Description>{job_role}</Description>
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
      </Container>
      <Modal
        title="Excluir naver"
        message="Tem certeza que deseja excluir este naver?"
        isVisible={isConfirmModalVisible}
        onPressCloseButton={handleToggleIsConfirmModalVisible}
        onPressCancelButton={handleToggleIsConfirmModalVisible}
        onPressConfirmButton={handleConfirmDeletion}
      />

      <Modal
        title="Naver excluído"
        message="Naver excluído com sucesso!"
        isVisible={isVisible}
        onModalHide={onModalHide}
        onPressCloseButton={handleToggleIsVisible}
      />
    </React.Fragment>
  );
};

export default Naver;
