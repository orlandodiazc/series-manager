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

const mockCategories = ['Action', 'Comedy'];

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
    <div className="container">
      <div>
        {isLoading
          ? 'Loading'
          : seriesData.map((series) => (
            <Serie key={series.item_id} series={series} onRemoveSeries={removeSeries} />
          ))}
      </div>
      <div>
        <Form title="ADD NEW BOOK" categories={mockCategories} onAddSeries={addSeries} />
      </div>
    </div>
  );
};

export default SeriesList;
