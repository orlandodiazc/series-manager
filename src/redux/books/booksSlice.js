import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import fetchBooks from '../../queries/queries';

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

const getBooks = createAsyncThunk('books/getBooks', () => fetchBooks());

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add(state, action) {
      state.books.data.push({
        id: uuidv4(),
        genre: action.payload.text,
        name: action.payload.name,
      });
    },
    remove(state, action) {
      state.books.data.filter((book) => book.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state) => ({ ...state, status: 'loading' }));
    builder.addCase(getBooks.fulfilled, (state, action) => ({
      ...state,
      data: action.payload,
      status: 'succeeded',
    }));
    builder.addCase(getBooks.rejected, (state, action) => ({
      ...state,
      error: action.error,
      status: 'failed',
    }));
  },
});

const getStatus = (state) => state.books.status;
const getBookData = (state) => state.books.data;

export const { add, remove } = booksSlice.actions;
export { getBooks, getStatus, getBookData };
export default booksSlice.reducer;
