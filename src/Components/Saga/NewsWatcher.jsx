import { takeLatest } from "redux-saga/effects";
import { getNews } from "../Redux/NewsSlice";
import { GetMovieLatestHandler } from "./NewsHandler";

export function* GetLatestMovieWatcher(){
    yield takeLatest(getNews.type,GetMovieLatestHandler)   
   }
