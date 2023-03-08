import PropTypes from 'prop-types';
import { useState } from 'react';

const Form = ({ title, categories, onAddSeries }) => {
  const [seriesTitle, setSeriesTitle] = useState('');
  const [director, setDirector] = useState('');
  const [category, setCategory] = useState('');

  const submitSeries = (e) => {
    e.preventDefault();
    onAddSeries({ data: { seriesTitle, director, category } });
  };

  return (
    <div>
      <h1>{title}</h1>
      <form onSubmit={submitSeries}>
        <input
          type="text"
          name="series-title"
          onChange={(e) => setSeriesTitle(e.target.value)}
          placeholder="Title"
          id="seriesTitle"
          required
        />
        <input
          type="text"
          name="series-director"
          onChange={(e) => setDirector(e.target.value)}
          placeholder="Director"
          id="seriesTitle"
          required
        />
        <div>
          <p>Category</p>
          <select
            name="Category"
            id="category"
            defaultValue=""
            onChange={(e) => setCategory(e.target.value)}
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
        <button type="submit">ADD SERIES</button>
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
