import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding: 0 20px;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding: 12px 15px;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  background: #fff;
`;

export const Submit = styled.TouchableOpacity`
  margin-left: 10px;
  background-color: #6bd4c1;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 16px;
`;
