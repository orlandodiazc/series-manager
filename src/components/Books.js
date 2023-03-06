import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { add, getBooks, remove } from '../redux/books/booksSlice';
import Book from './Book';
import FormSingleText from './FormSingleText';

const mockBooks = [];

const mockCategories = ['Action', 'Comedy'];

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const selectData = useSelector((state) => state.books, shallowEqual);

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
        {selectData.map((book) => (
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
