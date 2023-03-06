import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Books from './routes/Books';
import Categories from './routes/Categories';
import NotMatch from './routes/NotMatch';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Books />} />
        <Route path="categories" element={<Categories />} />
      </Route>
      <Route path="*" element={<NotMatch />} />
    </Routes>
  );
}

export default App;
