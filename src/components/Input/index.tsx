import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInputProps } from "react-native";

import * as S from "./styles";

interface Props extends TextInputProps {}

const Input: React.FC<Props> = ({ ...props }) => {
  return (
    <S.Container>
      <S.Input
        placeholder="Procurar um repositório"
        placeholderTextColor="#999"
        {...props}
      />
      <S.Submit>
        <MaterialIcons name="add" size={24} color="#FFF" />
      </S.Submit>
    </S.Container>
  );
};

export default Input;
