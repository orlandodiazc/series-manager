import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNewSeries,
  getSeries,
  getSeriesData,
  getStatus,
  removeSeries as removeSeriesFromAPI,
} from '../redux/series/seriesSlice';
import Form from './Form';
import Serie from './Serie';

// const mockData = [
//   {
//     item_id: '0',
//     title: 'The Last Of Us',
//     director: 'Neil Druckman',
//     category: 'Action',
//     currentEpisode: 20,
//     totalEpisodes: 100,
//   },
// ];

const MOCK_CATEGORIES = ['Action', 'Comedy', 'Sci-Fi', 'Drama'];

const SeriesList = () => {
  const status = useSelector(getStatus);
  const seriesData = useSelector(getSeriesData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getSeries());
    }
  }, [status, dispatch]);

  const addSeries = (series) => {
    dispatch(addNewSeries(series));
  };

  const removeSeries = (key) => {
    dispatch(removeSeriesFromAPI({ data: { item_id: key } }));
  };

  const isLoading = status === 'loading';
  return (
    <div className="py-4 px-3">
      <div className="container-lg px-4">
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden ">Loading...</span>
            </div>
          </div>
        ) : (
          seriesData.map((series) => (
            <Serie key={series.item_id} series={series} onRemoveSeries={removeSeries} />
          ))
        )}
      </div>
      <div className="container-lg">
        <Form title="ADD NEW BOOK" categories={MOCK_CATEGORIES} onAddSeries={addSeries} />
      </div>
    </div>
  );
};

export default SeriesList;
