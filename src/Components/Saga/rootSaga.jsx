
import { all } from "redux-saga/effects";
import { GetLatestMovieWatcher } from "./NewsWatcher";


export function* rootSaga() {
    yield all([GetLatestMovieWatcher()]);
  }