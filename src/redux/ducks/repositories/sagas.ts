import { call, put } from "redux-saga/effects";
import api from "../../../services/api";

import { loadSuccess, loadFailure } from "./actions";

export function* load({ payload }: any) {
  try {
    const response = yield call(api.get, `/repos?page=${payload}`);

    yield put(loadSuccess(response.data, payload));
  } catch (e) {
    yield put(loadFailure());
  }
}
