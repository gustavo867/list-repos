import { call, put } from "redux-saga/effects";
import api from "../../../services/api";

import { loadSuccess, loadFailure } from "./actions";

export function* load({ payload }: any) {
  try {
    const response = yield call(api.get, "/repos");

    yield put(loadSuccess(response.data));
  } catch (e) {
    yield put(loadFailure());
  }
}

export function* loadNextRepos({ page }: { page: number }) {
  try {
    console.log(page);

    const response = yield call(api.get, `/repos?page=${page}`);

    yield put(loadSuccess(response.data));
  } catch (e) {
    yield put(loadFailure());
  }
}
