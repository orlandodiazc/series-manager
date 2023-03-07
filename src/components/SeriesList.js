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

// const mockseries = [];

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

  return (
    <>
      <div>
        {seriesData.map((series) => (
          <Serie key={series.item_id} series={series} onRemoveSeries={removeSeries} />
        ))}
      </div>
      <div>
        <Form
          title="ADD NEW BOOK"
          placeholder="Book title"
          categories={mockCategories}
          onAddSeries={addSeries}
        />
      </div>
    </>
  );
};

export default SeriesList;
