import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import seriesReducer from './series/seriesSlice';

const store = configureStore({
  reducer: {
    series: seriesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
