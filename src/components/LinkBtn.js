import PropTypes from 'prop-types';

const LinkBtn = ({
  id, clickHandler, children, isLast,
}) => (
  <li className="nav-item">
    <button
      onClick={() => clickHandler(id)}
      type="button"
      className={`btn btn-link nav-link p-0 pe-2 pe-sm-3 ${isLast ? '' : 'border-end'} rounded-0`}
    >
      {children}
    </button>
  </li>
);

LinkBtn.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
  isLast: PropTypes.bool,
  clickHandler: PropTypes.func,
};

LinkBtn.defaultProps = {
  children: 'no node given',
  isLast: null,
  clickHandler: null,
};

export default LinkBtn;
