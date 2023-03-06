import PropTypes from 'prop-types';

const Book = ({ book, onRemoveBook }) => (
  <>
    <div>
      <p>{book.name}</p>
      <h1>{book.username}</h1>
    </div>
    <div>
      <ul>
        <li>
          <button type="button">Comments</button>
        </li>
        <li>
          <button onClick={onRemoveBook} type="button">
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
        <p>Chapter 17</p>
        <button type="button">Update Progress</button>
      </div>
    </div>
  </>
);

Book.propTypes = { book: PropTypes.shape({ username: PropTypes.string, name: PropTypes.string }) };

Book.defaultProps = { book: { genre: 'hola', name: 'movie' } };

export default Book;
