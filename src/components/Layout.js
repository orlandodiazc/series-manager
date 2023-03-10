import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout() {
  return (
    <div className="min-vh-100" style={{ backgroundColor: '#151515' }}>
      <Navbar />
      <div className="text-white h-100">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
