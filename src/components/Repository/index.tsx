import React, { memo } from "react";
import { FontAwesome } from "@expo/vector-icons";

import * as S from "./styles";

interface Data {
  id: number;
  name: string;
  description: string;
  forks: number;
  stargazers_count: number;
}

interface Props {
  data: Data;
}

const Repository: React.FC<Props> = ({ data }) => {
  return (
    <S.Container>
      <S.Name>{data.name}</S.Name>
      <S.Description>{data.description}</S.Description>

      <S.Stats>
        <S.Stat>
          <FontAwesome name="star" size={16} color="#333" />
          <S.StatCount>{data.stargazers_count}</S.StatCount>
        </S.Stat>
        <S.Stat>
          <FontAwesome name="code-fork" size={16} color="#333" />
          <S.StatCount>{data.forks}</S.StatCount>
        </S.Stat>
      </S.Stats>
    </S.Container>
  );
};

export default memo(Repository);
