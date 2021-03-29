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
import api from "../../services/api";
import { useQuery } from "react-query";
import { ActivityIndicator, LogBox } from "react-native";

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

const fetchDataFromGithub = async (page = 1) => {
  const res = await fetch(
    `https://api.github.com/users/gustavo867/repos?page=${page}&per_page=10`
  );

  return res.json();
};

const RepositoryList: React.FC<Props> = (props) => {
  const [page, setPage] = useState(1);
  const {
    isFetching,
    data,
    error,
    isPreviousData,
    status,
    isLoading,
  } = useQuery(["projects", page], () => fetchDataFromGithub(page), {
    keepPreviousData: true,
  });

  const repoData: RepositoryType[] = data as any;

  const [search, setSearch] = useState("");

  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  const renderItem = useCallback(
    ({ item, index }: any) => <Repository data={item} />,
    []
  );

  const keyExtractor = useCallback(
    (item: RepositoryType) => String(item.id),
    []
  );

  if (!isPreviousData && isFetching) {
    return (
      <S.Container>
        <Loading />
      </S.Container>
    );
  }

  if (error) {
    useEffect(() => {
      setPage(1);
    }, []);

    return (
      <S.Container>
        <S.Title>Error while getting data</S.Title>
      </S.Container>
    );
  }

  const Footer = () => {
    return (
      <S.ButtonsContainer>
        <S.NextButton
          color="#973ba3"
          onPress={() => setPage((state) => Math.max(state - 1, 1))}
          delayPressIn={1}
          disabled={isFetching}
        >
          {isFetching ? (
            <ActivityIndicator size={24} color="#fff" />
          ) : (
            <S.NextButtonText>Previous</S.NextButtonText>
          )}
        </S.NextButton>
        <S.NextButton
          color="#6bd4c1"
          onPress={() =>
            setPage((state) =>
              !isFetching ? (state >= 8 ? state : state + 1) : state
            )
          }
          delayPressIn={1}
          disabled={isFetching}
        >
          {isFetching ? (
            <ActivityIndicator size={24} color="#fff" />
          ) : (
            <S.NextButtonText>Next</S.NextButtonText>
          )}
        </S.NextButton>
      </S.ButtonsContainer>
    );
  };

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>Repositórios</S.Title>
        <S.Total>
          Repos: <S.TotalNumber>{data.length}</S.TotalNumber>
        </S.Total>
      </S.TitleContainer>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      <S.List
        data={repoData.filter((item) => {
          return item.name.includes(search);
        })}
        keyExtractor={keyExtractor as any}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => <Footer />}
      />
      {isLoading && <Loading />}
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
