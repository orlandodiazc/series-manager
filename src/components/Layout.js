import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout() {
  return (
    <div className="d-flex flex-column h-100 ">
      <Navbar />
      <div className="text-white bg-black h-100">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
