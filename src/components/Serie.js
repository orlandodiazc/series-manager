import PropTypes from 'prop-types';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Serie = ({ series, onRemoveSeries }) => (
  <div className="row border border-secondary bg-dark mb-3 py-3 ps-3 mx-1 rounded">
    <div className="col my-4 my-md-0">
      <p className="text-secondary">{series.category}</p>
      <h1 className="fs-3 fw-bold">{series.title}</h1>
      <p className="fs-6 text-primary">{series.director}</p>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <ul className="nav">
          <li className="nav-item">
            <button
              type="button"
              className="btn btn-link nav-link ps-0 border-end rounded-0 py-0 pe-2 pe-md-4"
            >
              Comments
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => onRemoveSeries(series.item_id)}
              type="button"
              className="btn btn-link nav-link border-end rounded-0 py-0 px-2 px-md-4"
            >
              Remove
            </button>
          </li>
          <li className="nav-item">
            <button type="button" className="btn btn-link nav-link rounded-0 py-0 px-2 px-md-4">
              Edit
            </button>
          </li>
        </ul>
      </nav>
    </div>
    <div className="col row my-auto">
      <div className="col mb-3 mb-md-0 d-flex align-items-center gap-3">
        <div style={{ maxWidth: '4.3rem', minWidth: '2rem' }}>
          <CircularProgressbar
            value={64}
            styles={buildStyles({
              pathColor: 'rgba(13, 110, 253, 100)',
            })}
          />
        </div>
        <div>
          <h2 className="fs-6 text-secondary pt-1">Completed</h2>
          <p className="fs-3">64%</p>
        </div>
      </div>
      <div className="col my-auto">
        <h2 className="fs-6 text-secondary mb-1">CURRENT CHAPTER</h2>
        <p className="mb-3">Episode 17</p>
        <button type="button" className="btn btn-primary px-4 py-1 max-w-75">
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
