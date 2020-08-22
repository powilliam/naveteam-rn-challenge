import React, { useCallback, useContext } from "react";
import { FlatList, ListRenderItem } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

import { Naver as NaverModel } from "../../models/Naver";
import { NaversContext } from "../../contexts/NaversContext";

import Header from "../../components/Header";
import Naver from "../../components/Naver";
import Button from "../../components/Button";

import { Container, ListHeader, ListHeaderTitle } from "./styles";

const Navers: React.FC = () => {
  const { dispatch, navigate } = useNavigation();
  const { data } = useContext(NaversContext);

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
        <Button
          size="normal"
          type="contained"
          title="Adicionar naver"
          onPress={handleNavigateToCreateNaver}
        />
      </ListHeader>
    ),
    []
  );
  const renderNaverItem = useCallback<ListRenderItem<NaverModel>>(
    ({ item }) => <Naver data={item} />,
    []
  );
  const extractNaverKey = useCallback(
    (naver: NaverModel, _: number) => naver.id,
    []
  );

  return (
    <Container>
      <Header
        headerLeftIcon={<MaterialIcons name="menu" size={24} />}
        onPressLeftIcon={handleOpenDrawer}
      />

      <FlatList
        data={data}
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
