import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled(LinearGradient).attrs({
  colors: ["#7159c1", "#9849c1"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  padding-top: 40px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 20px;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: #fff;
  font-weight: bold;
  margin-top: 20px;
`;

export const List = styled.FlatList`
  margin-top: 20px;
`;

export const Total = styled.Text`
  font-size: 13px;
  color: #fff;
  font-weight: 400;
  margin-top: 20px;
`;

export const TotalNumber = styled.Text`
  font-size: 17px;
  color: #fff;
  font-weight: 600;
  margin-top: 20px;
`;
