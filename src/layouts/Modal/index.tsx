import styled from "styled-components/native";

export const ModalContainer = styled.View`
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 16px 24px;
`;

export const ModalHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ModalTitle = styled.Text`
  font-family: Montserrat_600SemiBold;
  font-size: 22px;
  line-height: 32px;
  color: ${(props) => props.theme.primaryColor};
`;

export const ModalDescription = styled.Text`
  margin-top: 16px;
  font-family: Montserrat_400Regular;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.primaryColor};
`;

export const ModalFooter = styled.View`
  margin-top: 32px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
