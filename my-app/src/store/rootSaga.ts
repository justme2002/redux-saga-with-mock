import { all } from "redux-saga/effects";
import sagas from "./saga/postSaga";

export function* rootSagas() {
  yield all([
    ...sagas
  ])
}