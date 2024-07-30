import { call, put } from "redux-saga/effects";
import { GetLatestNewsServices } from "./NewsServices";
import { GetLatestNews } from "../Redux/NewsSlice";

export function* GetMovieLatestHandler(){
    try {
        let data=yield call(GetLatestNewsServices)
      
        yield put(GetLatestNews(data.articles))
    } catch (error) {
        alert("Server error");
        console.log(error);
    }
    }