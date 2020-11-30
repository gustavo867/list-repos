import React from "react";
import * as S from "./styles";

const Loading: React.FC = () => {
  return (
    <S.Container>
      <S.Load size={45} color="#000" />
    </S.Container>
  );
};

export default Loading;
