import React, { useCallback } from "react";
import { FlatList, ListRenderItem } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

import Header from "../../components/Header";
import Naver from "../../components/Naver";

import {
  Container,
  ToggleDrawerButton,
  ListHeader,
  ListHeaderTitle,
  CreateButton,
  CreateButtonText,
} from "./styles";

const Navers: React.FC = () => {
  const { dispatch } = useNavigation();

  const handleOpenDrawer = useCallback(
    () => dispatch(DrawerActions.openDrawer()),
    [dispatch]
  );

  const renderNaverItem = useCallback<ListRenderItem<number>>(
    () => <Naver />,
    []
  );
  const extractNaverKey = useCallback(
    (_: number, index: number) => index.toString(),
    []
  );

  return (
    <Container>
      <Header
        headerLeft={
          <ToggleDrawerButton onPress={handleOpenDrawer} rippleColor="#FFF">
            <MaterialIcons name="menu" size={24} />
          </ToggleDrawerButton>
        }
      />

      <ListHeader>
        <ListHeaderTitle>Navers</ListHeaderTitle>
        <CreateButton rippleColor="#FFF">
          <CreateButtonText>Adicionar naver</CreateButtonText>
        </CreateButton>
      </ListHeader>

      <FlatList
        data={[0, 1, 2, 3, 4, 5]}
        contentContainerStyle={{ alignItems: "center", paddingBottom: 36 }}
        renderItem={renderNaverItem}
        numColumns={2}
        keyExtractor={extractNaverKey}
      />
    </Container>
  );
};

export default Navers;
