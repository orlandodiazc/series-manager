import { configureStore } from '@reduxjs/toolkit';
import seriesReducer from './series/seriesSlice';

const store = configureStore({
  reducer: {
    series: seriesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
