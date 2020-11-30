import { action } from "typesafe-actions";
import { RepositoriesTypes, Repository } from "./types";

export const loadRequest = (page: number) =>
  action(RepositoriesTypes.LOAD_REQUEST, page);

export const loadSuccess = (data: Repository[], page: number) =>
  action(RepositoriesTypes.LOAD_SUCCESS, { data, page });

export const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE);

export const loadNextRequest = (page: number) =>
  action(RepositoriesTypes.LOAD_NEXT_REQUEST, { page });
