import React, { useCallback } from "react";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

import { Container, Image, Name, Description, Actions } from "./styles";

const Naver: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigateToNaver = useCallback(() => navigate("Naver"), [
    navigate,
  ]);
  const handleNavigateToUpdateNave = useCallback(
    () => navigate("UpdateNaver"),
    [navigate]
  );

  return (
    <Container>
      <RectButton onPress={handleNavigateToNaver}>
        <Image
          source={{ uri: "https://github.com/powilliam.png" }}
          resizeMode="contain"
        />
      </RectButton>
      <Name>William Porto</Name>
      <Description>Mobile Developer</Description>
      <Actions>
        <BorderlessButton>
          <MaterialIcons name="delete" size={24} />
        </BorderlessButton>
        <BorderlessButton
          onPress={handleNavigateToUpdateNave}
          style={{ marginLeft: 12 }}
        >
          <MaterialIcons name="edit" size={24} />
        </BorderlessButton>
      </Actions>
    </Container>
  );
};

export default Naver;
