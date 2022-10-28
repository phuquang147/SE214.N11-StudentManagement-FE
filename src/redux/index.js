import createSagaMiddleware from '@redux-saga/core';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import roleReducer from './role';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  role: roleReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
