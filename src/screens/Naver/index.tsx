import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

import Header from "../../components/Header";
import Button from "../../components/Button";

import {
  Container,
  Informations,
  Image,
  Title,
  Description,
  Actions,
} from "./styles";

const Naver: React.FC = () => {
  const { goBack, navigate } = useNavigation();

  const handleGoBack = useCallback(() => goBack(), [goBack]);
  const handleNavigateToUpdateNave = useCallback(
    () => navigate("UpdateNaver"),
    [navigate]
  );

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
  );
};

export default Naver;
