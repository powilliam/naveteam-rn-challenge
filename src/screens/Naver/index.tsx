import React, {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useContext,
} from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation, RouteProp, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";
import Modal from "react-native-modal";
import moment from "moment";

import { NaversContext } from "../../contexts/NaversContext";

import api from "../../services/api";
import { ShowNaverDTO } from "../../services/dto/ShowNaver.dto";
import { Naver as NaverModel } from "../../models/Naver";

import Header from "../../components/Header";
import Button from "../../components/Button";

import { RootStackParamList } from "../../routes/Stack";

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

export type NaverScreenRouteProp = RouteProp<RootStackParamList, "Naver">;

const Naver: React.FC = () => {
  const [naver, setNaver] = useState<NaverModel>({} as NaverModel);
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const { goBack, navigate } = useNavigation();
  const { params } = useRoute<NaverScreenRouteProp>();
  const { deleteNaver } = useContext(NaversContext);

  const id = useMemo(() => params.id, [params]);
  const uri = useMemo(() => naver.url, [naver]);
  const name = useMemo(() => naver.name, [naver]);
  const description = useMemo(() => naver.job_role, [naver]);
  const birthdate = useMemo(() => moment(naver.birthdate).format("L"), [naver]);
  const admissionDate = useMemo(
    () => moment(naver.admission_date).format("L"),
    [naver]
  );
  const projects = useMemo(() => naver.project, [naver]);

  const handleGoBack = useCallback(() => goBack(), [goBack]);
  const handleNavigateToUpdateNave = useCallback(
    () => navigate("UpdateNaver", { id }),
    [navigate, id]
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
      deleteNaver(id);
      setIsVisible(true);
    } catch (error) {}
  }, [id, deleteNaver]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get<ShowNaverDTO>(`navers/${id}`, {
        headers: {
          Authorization: `Bearer ${await AsyncStorage.getItem("@JWT:TOKEN")}`,
        },
      });

      setNaver(data);
    })();
  }, [id]);

  return (
    <Container>
      <Header
        headerLeftIcon={<MaterialIcons name="chevron-left" size={28} />}
        onPressLeftIcon={handleGoBack}
      />
      {uri && name && description && birthdate && admissionDate && projects && (
        <Informations>
          <Image source={{ uri }} resizeMode="cover" />

          <Title large>{name}</Title>
          <Description>{description}</Description>

          <Title>Data de nascimento</Title>
          <Description>{birthdate}</Description>

          <Title>Data de admissão</Title>
          <Description>{admissionDate}</Description>

          <Title>Projetos que participou</Title>
          <Description>{projects}</Description>

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
      )}
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

      <Modal isVisible={isVisible} onModalHide={handleGoBack}>
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
