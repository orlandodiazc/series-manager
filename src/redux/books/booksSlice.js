import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://jsonplaceholder.typicode.com/users';

const initialState = [];

const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    return error.message;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add(state, action) {
      state.books.push({
        id: 0,
        genre: action.payload.text,
        name: action.payload.name,
      });
    },
    remove(state, action) {
      state.books.filter((book) => book.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      console.log(action.payload);
      return action.payload;
    });
  },
});

export const { add, remove } = booksSlice.actions;
export { getBooks };
export default booksSlice.reducer;
