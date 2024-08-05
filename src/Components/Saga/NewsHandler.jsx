
import { call, put } from "redux-saga/effects";
import {GetLatestNewsServices} from "./NewsServices"
import { GetLatestNews } from "../Redux/NewsSlice";

export function* GetMovieLatestHandler(action) {
  try {
    let data = yield call(GetLatestNewsServices, action.payload);
    yield put(GetLatestNews(data));
  } catch (error) {
    alert("Server error");
    console.log(error);
  }
}
