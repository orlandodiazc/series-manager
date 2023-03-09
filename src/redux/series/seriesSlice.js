import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteSeries, fetchSeries, postSeries } from '../../queries/queries';

const getSeries = createAsyncThunk('series/getSeries', () => fetchSeries());
const addNewSeries = createAsyncThunk('series/addNewSeries', (series) => {
  const seriesToSend = {
    ...series,
    currentEpisode: Math.floor(Math.random() * 100 + 10),
    totalEpisodes: Math.floor(Math.random() * 100 + 10),
  };
  return postSeries(seriesToSend);
});
const removeSeries = createAsyncThunk('series/removeSeries', (seriesID) => deleteSeries(seriesID));

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

const seriesSlice = createSlice({
  name: 'series',
  initialState,
  // reducers: {
  //   add(state, action) {
  //     state.series.data.push({
  //       id: uuidv4(),
  //       genre: action.payload.text,
  //       name: action.payload.name,
  //     });
  //   },
  //   remove(state, action) {
  //     state.series.data.filter((book) => book.id !== action.payload.id);
  //   },
  // },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSeries.pending, (state) => ({ ...state, status: 'loading' }))
      .addCase(getSeries.fulfilled, (state, action) => {
        const result = action.payload.map((series) => {
          const key = Object.keys(series)[0];
          return {
            ...series[key],
            item_id: key,
          };
        });
        return { ...state, data: result, status: 'fulfilled' };
      })
      .addCase(getSeries.rejected, (state, action) => ({
        ...state,
        error: action.error,
        status: 'failed',
      }))
      .addCase(addNewSeries.fulfilled, (state, action) => ({
        ...state,
        data: [action.payload, ...state.data],
      }))
      .addCase(removeSeries.fulfilled, (state, action) => ({
        ...state,
        data: [...state.data].filter((series) => series.item_id !== action.payload.item_id),
      }));
  },
});

const getStatus = (state) => state.series.status;
const getSeriesData = (state) => state.series.data;

// export const { add, remove } = seriesSlice.actions;
export {
  getSeries, getStatus, getSeriesData, addNewSeries, removeSeries,
};
export default seriesSlice.reducer;
