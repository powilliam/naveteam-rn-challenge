import React, {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useContext,
} from "react";
import { useNavigation, RouteProp, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import moment from "moment";

import { NaversContext } from "../../contexts/NaversContext";

import { Naver as NaverModel } from "../../models/Naver";

import Header from "../../components/Header";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

import { RootStackParamList } from "../../routes/Stack";

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
  const { getNaver, deleteNaver } = useContext(NaversContext);

  const id = useMemo(() => params.id, [params]);
  const uri = useMemo(() => naver.url, [naver]);
  const name = useMemo(() => naver.name, [naver]);
  const job_role = useMemo(() => naver.job_role, [naver]);
  const birthdate = useMemo(
    () => moment(naver.birthdate).format("DD/MM/YYYY"),
    [naver]
  );
  const admission_date = useMemo(
    () => moment(naver.admission_date).format("DD/MM/YYYY"),
    [naver]
  );
  const projects = useMemo(() => naver.project, [naver]);

  const handleGoBack = useCallback(() => goBack(), [goBack]);
  const handleNavigateToUpdateNave = useCallback(
    () => navigate("UpdateNaver", { naver }),
    [navigate, naver]
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
  const onModalHide = useCallback(async () => {
    goBack();
    await deleteNaver(id);
  }, [deleteNaver, id, goBack]);

  useEffect(() => {
    setNaver(() => getNaver(id));
  }, [id, getNaver]);

  return (
    <React.Fragment>
      <Container>
        <Header
          headerLeftIcon={<MaterialIcons name="chevron-left" size={28} />}
          onPressLeftIcon={handleGoBack}
        />
        <Informations>
          <Image source={{ uri }} resizeMode="cover" />

          <Title large>{name}</Title>
          <Description>{job_role}</Description>

          <Title>Data de nascimento</Title>
          <Description>{birthdate}</Description>

          <Title>Data de admissão</Title>
          <Description>{admission_date}</Description>

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
