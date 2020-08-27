import React, {
  useState,
  useCallback,
  useRef,
  useMemo,
  useContext,
  useEffect,
} from "react";
import { ScrollView } from "react-native";
import { useNavigation, RouteProp, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { FormHandles, SubmitHandler } from "@unform/core";
import moment from "moment";
import * as Yup from "yup";

import { RootStackParamList } from "../../routes/Stack";

import { NaversContext } from "../../contexts/NaversContext";

import { UpdateNaverDTO } from "../../services/dto/UpdateNaver.dto";

import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

import { Container, Title, Form, FormError } from "./styles";

export type UpdateNaverScreenRouteProp = RouteProp<
  RootStackParamList,
  "UpdateNaver"
>;

const UpdateNaver: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [shouldDisplayFormError, setShouldDisplayFormError] = useState(false);

  const { goBack, navigate } = useNavigation();
  const { params } = useRoute<UpdateNaverScreenRouteProp>();
  const { isLoading, updateNaver } = useContext(NaversContext);

  const naver = useMemo(() => params.naver, [params]);
  const id = useMemo(() => naver.id, [naver]);
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
  const project = useMemo(() => naver.project, [naver]);
  const url = useMemo(() => naver.url, [naver]);

  const handleGoBack = useCallback(() => goBack(), [goBack]);
  const handleToggleIsVisible = useCallback(() => setIsVisible(!isVisible), [
    isVisible,
    setIsVisible,
  ]);
  const handleSubmit = useCallback<SubmitHandler<UpdateNaverDTO>>(
    async (data) => {
      try {
        setShouldDisplayFormError(false);
        const schema = Yup.object().shape({
          name: Yup.string().required(),
          job_role: Yup.string().required(),
          birthdate: Yup.string().required(),
          admission_date: Yup.string().required(),
          project: Yup.string().required(),
          url: Yup.string().required(),
        });
        await schema.validate(data, { abortEarly: false });
        await updateNaver({ ...data, id });
        setIsVisible(true);
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          setShouldDisplayFormError(true);
        }
      }
    },
    [id, updateNaver]
  );
  const onPressSaveButton = useCallback(() => formRef.current?.submitForm(), [
    formRef,
  ]);
  const onModalHide = useCallback(() => navigate("Navers"), [navigate]);

  useEffect(() => {
    formRef.current?.setData({
      name,
      job_role,
      birthdate,
      admission_date,
      project,
      url,
    });
  }, []);

  return (
    <React.Fragment>
      <Container>
        <Header
          headerLeftIcon={<MaterialIcons name="chevron-left" size={28} />}
          onPressLeftIcon={handleGoBack}
        />
        <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Title>Editar naver</Title>
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

            {shouldDisplayFormError && (
              <FormError>Todos os campos são obrigatórios</FormError>
            )}

            <Button
              isLoading={isLoading}
              type="contained"
              title="Salvar"
              onPress={onPressSaveButton}
              style={{ marginTop: 40 }}
            />
          </Form>
        </ScrollView>
      </Container>
      <Modal
        title="Naver editado"
        message="Naver editado com sucesso"
        isVisible={isVisible}
        onModalHide={onModalHide}
        onPressCloseButton={handleToggleIsVisible}
      />
    </React.Fragment>
  );
};

export default UpdateNaver;
