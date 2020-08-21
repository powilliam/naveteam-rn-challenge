import React, { useCallback } from "react";
import { FlatList, ListRenderItem } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

import Header from "../../components/Header";
import Naver from "../../components/Naver";

import {
  Container,
  ListHeader,
  ListHeaderTitle,
  CreateButton,
  CreateButtonText,
} from "./styles";

const Navers: React.FC = () => {
  const { dispatch, navigate } = useNavigation();

  const handleOpenDrawer = useCallback(
    () => dispatch(DrawerActions.openDrawer()),
    [dispatch]
  );
  const handleNavigateToCreateNaver = useCallback(
    () => navigate("CreateNaver"),
    [navigate]
  );

  const renderListHeaderComponent = useCallback(
    () => (
      <ListHeader>
        <ListHeaderTitle>Navers</ListHeaderTitle>
        <CreateButton onPress={handleNavigateToCreateNaver}>
          <CreateButtonText>Adicionar naver</CreateButtonText>
        </CreateButton>
      </ListHeader>
    ),
    []
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
        headerLeftIcon={<MaterialIcons name="menu" size={28} />}
        onPressLeftIcon={handleOpenDrawer}
      />

      <FlatList
        data={[0, 1, 2, 3, 4, 5]}
        ListHeaderComponent={renderListHeaderComponent}
        contentContainerStyle={{ paddingBottom: 36 }}
        renderItem={renderNaverItem}
        numColumns={2}
        keyExtractor={extractNaverKey}
      />
    </Container>
  );
};

export default Navers;
