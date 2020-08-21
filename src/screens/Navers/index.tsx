import React, { useCallback, useEffect, useState } from "react";
import { FlatList, ListRenderItem } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";

import api from "../../services/api";
import { Naver as NaverModel } from "../../models/Naver";

import Header from "../../components/Header";
import Naver from "../../components/Naver";
import Button from "../../components/Button";

import { Container, ListHeader, ListHeaderTitle } from "./styles";

const Navers: React.FC = () => {
  const [navers, setNavers] = useState<NaverModel[]>([]);

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

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("navers", {
          headers: {
            Authorization: `Bearer ${await AsyncStorage.getItem("@JWT:TOKEN")}`,
          },
        });

        setNavers(data);
      } catch (error) {}
    })();
  }, []);

  return (
    <Container>
      <Header
        headerLeftIcon={<MaterialIcons name="menu" size={28} />}
        onPressLeftIcon={handleOpenDrawer}
      />

      <FlatList
        data={navers}
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
