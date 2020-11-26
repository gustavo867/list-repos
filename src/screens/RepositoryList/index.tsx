import React, { useEffect, useState } from "react";
import { ApplicationState } from "../../redux";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Repository as RepositoryType } from "../../redux/ducks/repositories/types";

import * as S from "./styles";
import * as RepositoriesActions from "../../redux/ducks/repositories/actions";
import Input from "../../components/Input";
import Repository from "../../components/Repository";

interface StateProps {
  repositories: RepositoryType[];
}

interface DispatchProps {
  loadRequest(): void;
  loadNextRequest(page: number): void;
}

type Props = StateProps & DispatchProps;

const RepositoryList: React.FC<Props> = (props) => {
  const { loadRequest, repositories, loadNextRequest } = props;

  const [search, setSearch] = useState("");

  useEffect(() => {
    loadRequest();
  }, []);

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>Repositórios</S.Title>
        <S.Total>
          Total de repositórios:{" "}
          <S.TotalNumber>{repositories.length}</S.TotalNumber>
        </S.Total>
      </S.TitleContainer>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      <S.List
        data={repositories.filter((item) => {
          return item.name.includes(search);
        })}
        keyExtractor={(item: any) => String(item.id)}
        renderItem={({ item }: any) => <Repository data={item} />}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
  error: state.repositories.error,
  loading: state.repositories.loading,
});

const mapDisptachToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDisptachToProps)(RepositoryList);
