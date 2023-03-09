import PropTypes from 'prop-types';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import LinkBtn from './LinkBtn';

const Serie = ({ series, onRemoveSeries }) => (
  <div className="row border border-secondary bg-dark mb-3 py-3 px-4 rounded">
    <div className="col my-auto my-md-0">
      <p className="text-secondary">{series.category}</p>
      <h1 className="fs-3 fw-bold">{series.title}</h1>
      <p className="fs-6 text-primary">{series.director}</p>
      <nav className="my-2">
        <ul className="nav d-flex gap-2 gap-sm-3">
          <LinkBtn id={series.item_id}>Comments</LinkBtn>
          <LinkBtn id={series.item_id} clickHandler={onRemoveSeries}>
            Remove
          </LinkBtn>
          <LinkBtn id={series.item_id} isLast>
            Edit
          </LinkBtn>
        </ul>
      </nav>
    </div>
    <div className="col row">
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
          <p className="fs-3">
            {`${Math.floor((series.currentEpisode / series.totalEpisodes) * 100)}%`}
          </p>
        </div>
      </div>
      <div className="col my-1">
        <h2 className="fs-6 text-secondary mb-1">CURRENT EPISODE</h2>
        <p className="mb-3">{`Episode ${series.currentEpisode}`}</p>
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
    currentEpisode: PropTypes.number,
    totalEpisodes: PropTypes.number,
  }).isRequired,
  onRemoveSeries: PropTypes.func.isRequired,
};

export default Serie;
