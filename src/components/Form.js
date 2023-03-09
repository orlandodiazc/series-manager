import PropTypes from 'prop-types';
import { useState } from 'react';

const Form = ({ title, categories, onAddSeries }) => {
  const [seriesTitle, setSeriesTitle] = useState('');
  const [director, setDirector] = useState('');
  const [category, setCategory] = useState('');

  const submitSeries = (e) => {
    e.preventDefault();
    onAddSeries({ data: { title: seriesTitle, director, category } });
    setSeriesTitle('');
    setDirector('');
    setCategory('');
  };

  return (
    <div className="me-3 border-top border-secondary my-5">
      <h1 className="text-primary fs-3 mb-2 ms-2 my-3">{title}</h1>
      <form onSubmit={submitSeries} className="row mb-3">
        <div className="col-md mb-3 mb-md-0">
          <input
            type="text"
            name="series-title"
            onChange={(e) => setSeriesTitle(e.target.value)}
            value={seriesTitle}
            placeholder="Title"
            id="seriesTitle"
            className="form-control text-bg-dark"
            required
          />
        </div>
        <div className="col-md mb-3 mb-md-0">
          <input
            type="text"
            name="series-director"
            onChange={(e) => setDirector(e.target.value)}
            placeholder="Director"
            value={director}
            id="seriesDirector"
            className="form-control text-bg-dark border-secondary"
            required
          />
        </div>

        <div className="col-md mb-3 mb-md-0">
          <select
            name="Category"
            id="category"
            defaultValue=""
            onChange={(e) => setCategory(e.target.value)}
            className="form-select text-bg-dark border-secondary"
            required
          >
            <option value="" disabled>
              Category...
            </option>
            {categories.map((category) => (
              <option key={category.toLowerCase()} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-2 pe-md-0">
          <button type="submit" className="btn btn-primary w-100">
            Add Series
          </button>
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAddSeries: PropTypes.func.isRequired,
};

export default Form;
