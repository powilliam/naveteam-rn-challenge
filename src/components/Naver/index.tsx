import React from "react";
import { Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

import { Container, Image, Name, Description, Actions } from "./styles";

const Naver: React.FC = () => {
  return (
    <Container>
      <Image
        source={{ uri: "https://github.com/powilliam.png" }}
        resizeMode="contain"
      />
      <Name>William Porto</Name>
      <Description>Mobile Developer</Description>
      <Actions>
        <BorderlessButton>
          <MaterialIcons name="delete" size={24} />
        </BorderlessButton>
        <BorderlessButton style={{ marginLeft: 12 }}>
          <MaterialIcons name="edit" size={24} />
        </BorderlessButton>
      </Actions>
    </Container>
  );
};

export default Naver;
