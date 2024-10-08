import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState={
latestNews:[]
}

 const Newsstore = createSlice({
    name:"news",
    initialState,
    reducers: {
        getNews:(state,action)=>{},
        GetLatestNews(state,action){
          state.latestNews=action.payload
        }
    },
})


export const {getNews,GetLatestNews} = Newsstore.actions;

export default Newsstore.reducer;