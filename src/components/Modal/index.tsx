import React, { useMemo } from "react";
import { TouchableOpacity } from "react-native";
import RNModal from "react-native-modal";
import { MaterialIcons } from "@expo/vector-icons";

import Button from "../Button";

import { Container, Header, Title, Message, Footer } from "./styles";

export type HandleModalAction = () => void | Promise<void>;

export interface ModalProps {
  title: string;
  message: string;
  isVisible: boolean;
  onModalHide?: HandleModalAction;
  onPressCloseButton: HandleModalAction;
  onPressCancelButton?: HandleModalAction;
  onPressConfirmButton?: HandleModalAction;
}

const Modal: React.FC<ModalProps> = ({
  title,
  message,
  isVisible,
  onModalHide,
  onPressCloseButton,
  onPressCancelButton,
  onPressConfirmButton,
}) => {
  const shouldRenderModalFooter = useMemo(
    () => onPressConfirmButton && onPressCancelButton,
    [onPressConfirmButton, onPressCancelButton]
  );

  return (
    <RNModal isVisible={isVisible} onModalHide={onModalHide} useNativeDriver>
      <Container>
        <Header>
          <Title>{title}</Title>
          <TouchableOpacity
            onPress={onPressCloseButton}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <MaterialIcons name="close" size={24} />
          </TouchableOpacity>
        </Header>

        <Message>{message}</Message>

        {shouldRenderModalFooter && (
          <Footer>
            <Button
              size="small"
              title="Cancelar"
              onPress={onPressCancelButton}
            />
            <Button
              size="small"
              type="contained"
              title="Excluir"
              onPress={onPressConfirmButton}
            />
          </Footer>
        )}
      </Container>
    </RNModal>
  );
};

export default Modal;
