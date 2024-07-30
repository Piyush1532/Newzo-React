// import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import createSagaMiddleware from '@redux-saga/core';
// import { rootSaga } from '../Saga/rootSaga';
// import newsReducer from './NewsSlice';
// import { flush } from 'redux-saga/effects';

// const rootreducer = combineReducers({
//     news: newsReducer,
   
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

import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import newsReducer from './NewsSlice';
import { rootSaga } from '../Saga/rootSaga';



const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
