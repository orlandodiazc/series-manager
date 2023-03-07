import { useState } from 'react';

const Form = ({ title, placeholder, categories, onAddSeries }) => {
  const [seriesTitle, setSeriesTitle] = useState('');
  const [director, setDirector] = useState('');
  const [category, setCategory] = useState('');

  const submitSeries = (e) => {
    e.preventDefault();
    if (category !== '') {
      onAddSeries({ data: { seriesTitle, director, category } });
    } else {
      console.log('you must select a category');
    }
  };

  return (
    <div>
      <h1>{title}</h1>
      <form onSubmit={submitSeries}>
        <input
          type="text"
          name="series-title"
          onChange={(e) => setSeriesTitle(e.target.value)}
          placeholder={placeholder}
          id="seriesTitle"
        />
        <input
          type="text"
          name="series-director"
          onChange={(e) => setDirector(e.target.value)}
          placeholder={placeholder}
          id="seriesTitle"
        />
        <div>
          <p>Category</p>
          <select
            name="Category"
            id="category"
            defaultValue="DEFAULT"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="DEFAULT" disabled>
              Category...
            </option>
            {categories.map((category) => (
              <option key={category.toLowerCase()} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
