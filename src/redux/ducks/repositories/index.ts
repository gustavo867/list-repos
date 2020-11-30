import { Reducer } from "redux";
import { RepositoriesState, RepositoriesTypes } from "./types";

const INITIAL_STATE: RepositoriesState = {
  data: [
    {
      id: 1,
      name: "unform",
      description:
        "ReactJS form library to create uncontrolled form structures with nested files, validations and much",
      stargazers_count: 1234,
      forks: 133,
    },
  ],
  error: false,
  loading: false,
  page: 1,
};

const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RepositoriesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case RepositoriesTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        page: action.payload.page,
        data: action.payload.data,
      };
    case RepositoriesTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    case RepositoriesTypes.LOAD_NEXT_REQUEST:
      return { ...state, loading: true, page: action.payload.page };
    default:
      return state;
  }
};

export default reducer;
