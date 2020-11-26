const Types = {
  LOAD_REQUEST: "repositories/LOAD_REQUEST",
  LOAD_SUCCESS: "repositories/LOAD_SUCCESS",
  LOAD_FAILURE: "repositories/LOAD_FAILURE",
  LOAD_NEXT_REQUEST: "repositories/LOAD_NEXT_REQUEST",
};

export enum RepositoriesTypes {
  LOAD_REQUEST = "@repositories/LOAD_REQUEST",
  LOAD_SUCCESS = "@repositories/LOAD_SUCCESS",
  LOAD_FAILURE = "@repositories/LOAD_FAILURE",
  LOAD_NEXT_REQUEST = "@repositories/LOAD_NEXT_REQUEST",
}

export interface Repository {
  id: number;
  name: string;
  description: string;
  forks: number;
  stargazers_count: number;
}

export interface RepositoriesState {
  readonly data: Repository[];
  readonly loading: boolean;
  readonly error: boolean;
  readonly page: number;
}
