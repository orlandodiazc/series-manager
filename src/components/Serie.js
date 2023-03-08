import PropTypes from 'prop-types';

const Serie = ({ series, onRemoveSeries }) => (
  <div className="my-3 row border p-4">
    <div className="col">
      <p>{series.category}</p>
      <h1>{series.title}</h1>
      <p>{series.director}</p>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <ul className="nav">
          <li className="nav-item">
            <button type="button" className="btn btn-link nav-link ps-0 border-end">
              Comments
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => onRemoveSeries(series.item_id)}
              type="button"
              className="btn btn-link nav-link border-end"
            >
              Remove
            </button>
          </li>
          <li className="nav-item">
            <button type="button" className="btn btn-link nav-link">
              Edit
            </button>
          </li>
        </ul>
      </nav>
    </div>
    <div className="col row">
      <div className="col">
        <h2>64%</h2>
        <p>Completed</p>
      </div>
      <div className="col">
        <h2>Current Chapter</h2>
        <p>Episode 17</p>
        <button type="button" className="btn btn-primary">
          Update Progress
        </button>
      </div>
    </div>
  </div>
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
