import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteSeries, fetchSeries, postSeries } from '../../queries/queries';

const getSeries = createAsyncThunk('series/getSeries', () => fetchSeries());
const addNewSeries = createAsyncThunk('series/addNewSeries', (series) => {
  const currentEpisode = Math.floor(Math.random() * 21);
  const totalEpisodes = Math.floor(Math.random() * 21 + currentEpisode);
  const seriesToSend = {
    ...series,
    data: {
      ...series.data,
      currentEpisode,
      totalEpisodes,
    },
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

export {
  getSeries, getStatus, getSeriesData, addNewSeries, removeSeries,
};
export default seriesSlice.reducer;
