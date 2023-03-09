import { MdPerson } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'SERIES' },
  { path: 'categories', text: 'CATEGORIES' },
];

const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-sm bg-dark pt-1">
    <div className="container-lg">
      <a className="navbar-brand text-primary fs-2 fw-bold" href="/">
        SerieTraqueo
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav w-100">
          {links.map((link) => (
            <li key={link.text} className="nav-item mt-2">
              <NavLink to={link.path} className="nav-link">
                {link.text}
              </NavLink>
            </li>
          ))}
          <li className="nav-item ms-sm-auto d-flex justify-content-center align-items-center">
            <button
              type="button"
              className="btn btn-dark border-secondary rounded-circle"
              style={{ aspectRatio: 1 }}
            >
              <MdPerson color="#0d6efd" size={20} />
              <span className="d-sm-none">Profile</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
