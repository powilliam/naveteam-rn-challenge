import React, { useCallback } from "react";
import { FlatList, ListRenderItem } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

import Header from "../../components/Header";
import Naver from "../../components/Naver";
import Button from "../../components/Button";

import { Container, ListHeader, ListHeaderTitle } from "./styles";

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
        columnWrapperStyle={{ marginLeft: 16 }}
        renderItem={renderNaverItem}
        numColumns={2}
        keyExtractor={extractNaverKey}
      />
    </Container>
  );
};

export default Navers;
