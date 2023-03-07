import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, getBookData, getBooks, getStatus, remove } from '../redux/books/booksSlice';
import Book from './Book';
import FormSingleText from './FormSingleText';

const mockBooks = [];

const mockCategories = ['Action', 'Comedy'];

const Books = () => {
  const status = useSelector(getStatus);
  const booksData = useSelector(getBookData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getBooks());
    }
  }, [status, dispatch]);

  const addBook = (event) => {
    event.preventDefault();
    dispatch(add(mockBooks[0]));
  };

  const removeBook = () => {
    dispatch(remove(mockBooks[0]));
  };

  return (
    <>
      <div>
        {booksData.map((book) => (
          <Book key={book.id} book={book} onRemoveBook={removeBook} />
        ))}
      </div>
      <div>
        <FormSingleText
          title="ADD NEW BOOK"
          placeholder="Book title"
          categories={mockCategories}
          onAddBook={addBook}
        />
      </div>
    </>
  );
};

export default Books;
