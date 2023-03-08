import PropTypes from 'prop-types';

const Serie = ({ series, onRemoveSeries }) => (
  <>
    <div>
      <p>{series.category}</p>
      <h1>{series.title}</h1>
      <p>{series.director}</p>
    </div>
    <div>
      <ul>
        <li>
          <button type="button">Comments</button>
        </li>
        <li>
          <button onClick={() => onRemoveSeries(series.item_id)} type="button">
            Remove
          </button>
        </li>
        <li>
          <button type="button">Edit</button>
        </li>
      </ul>
    </div>
    <div>
      <div>
        <h2>64%</h2>
        <p>Completed</p>
      </div>
      <div>
        <h2>Current Chapter</h2>
        <p>Episode 17</p>
        <button type="button">Update Progress</button>
      </div>
    </div>
  </>
);

Serie.propTypes = {
  series: PropTypes.shape({
    category: PropTypes.string,
    title: PropTypes.string,
    director: PropTypes.string,
    item_id: PropTypes.string,
  }).isRequired,
  onRemoveSeries: PropTypes.func.isRequired,
};

export default Serie;
