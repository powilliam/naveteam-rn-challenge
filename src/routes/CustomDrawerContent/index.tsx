import React, { useContext, useMemo, useCallback } from "react";
import { DrawerActions } from "@react-navigation/native";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";

import { AuthContext } from "../../contexts/AuthContext";

import { Container, TouchableIcon, Item, Label } from "./styles";

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const { logout } = useContext(AuthContext);

  const { dispatch, navigate } = useMemo(() => props.navigation, [props]);

  const handleCloseDrawer = useCallback(
    () => dispatch(DrawerActions.closeDrawer()),
    [dispatch]
  );
  const handleNavigateToNavers = useCallback(
    () => navigate("Navers", { screen: "Navers" }),
    [navigate]
  );

  return (
    <Container
      {...props}
      contentContainerStyle={{ flex: 1, justifyContent: "center" }}
    >
      <TouchableIcon
        onPress={handleCloseDrawer}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      >
        <MaterialIcons name="menu" size={24} />
      </TouchableIcon>
      <Item onPress={handleNavigateToNavers}>
        <Label>Navers</Label>
      </Item>
      <Item onPress={logout} style={{ marginTop: 16 }}>
        <Label>Sair</Label>
      </Item>
    </Container>
  );
};

export default CustomDrawerContent;
