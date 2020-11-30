import React, { useCallback, useEffect, useState } from "react";
import { ApplicationState } from "../../redux";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Repository as RepositoryType } from "../../redux/ducks/repositories/types";

import * as S from "./styles";
import * as RepositoriesActions from "../../redux/ducks/repositories/actions";
import Input from "../../components/Input";
import Repository from "../../components/Repository";
import Loading from "../../components/Loading";

interface StateProps {
  repositories: RepositoryType[];
  error: boolean;
  loading: boolean;
  page: number;
}

interface DispatchProps {
  loadRequest(page: any): void;
}

type Props = StateProps & DispatchProps;

const RepositoryList: React.FC<Props> = (props) => {
  const { loadRequest, repositories, loading } = props;

  const [search, setSearch] = useState("");

  useEffect(() => {
    loadRequest(1);
  }, []);

  const loadMoreRepos = useCallback((page: number) => {
    loadRequest(page);
  }, []);

  const Footer = () => {
    return (
      <S.ButtonsContainer>
        <S.NextButton
          color="#6bd4c1"
          onPress={() => loadMoreRepos(1)}
          delayPressIn={1}
        >
          <S.NextButtonText>1</S.NextButtonText>
        </S.NextButton>
        <S.NextButton
          color="#6bd4c1"
          onPress={() => loadMoreRepos(2)}
          delayPressIn={1}
        >
          <S.NextButtonText>2</S.NextButtonText>
        </S.NextButton>
        <S.NextButton
          color="#6bd4c1"
          onPress={() => loadMoreRepos(3)}
          delayPressIn={1}
        >
          <S.NextButtonText>3</S.NextButtonText>
        </S.NextButton>
      </S.ButtonsContainer>
    );
  };

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
        ListFooterComponent={() => <Footer />}
      />
      {loading && <Loading />}
    </S.Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
  error: state.repositories.error,
  loading: state.repositories.loading,
  page: state.repositories.page,
});

const mapDisptachToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDisptachToProps)(RepositoryList);
