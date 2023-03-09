import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout() {
  return (
    <div className="d-flex flex-column vh-100">
      <Navbar />
      <div className="bg-black text-white h-100">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
