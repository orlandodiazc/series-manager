import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import SeriesList from './components/SeriesList';
import Categories from './routes/Categories';
import NotMatch from './routes/NotMatch';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SeriesList />} />
        <Route path="categories" element={<Categories />} />
      </Route>
      <Route path="*" element={<NotMatch />} />
    </Routes>
  );
}

export default App;
