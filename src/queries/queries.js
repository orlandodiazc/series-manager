const url = 'https://jsonplaceholder.typicode.com/users';

const fetchBooks = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export default fetchBooks;
