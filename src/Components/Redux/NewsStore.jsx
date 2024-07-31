// import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import createSagaMiddleware from '@redux-saga/core';
// import { rootSaga } from '../Saga/rootSaga';
// import NewsSlice from './NewsSlice';
// import { flush } from 'redux-saga/effects';


// const rootreducer = combineReducers({
//     news: NewsSlice.reducer,
   
// });

// const sagaMiddleware = createSagaMiddleware();

//  const store = configureStore({
//   reducer:rootreducer,
//   middleware:(getDefaultMiddleware)=>{
// getDefaultMiddleware({thunk:false}).concat(sagaMiddleware)
//   }
// })


// sagaMiddleware.run(rootSaga);

// export default store

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import NewsSlice from './NewsSlice';
import { rootSaga } from '../Saga/rootSaga';


const reducer=combineReducers({
NewsData:NewsSlice  
})
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
