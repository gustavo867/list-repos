import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { height } = Dimensions.get("window");

export const Container = styled.View`
  position: absolute;
  align-self: center;
  align-items: center;
  justify-content: center;
  top: ${height * 0.5}px;
`;

export const Load = styled.ActivityIndicator``;
