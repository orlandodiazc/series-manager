import { MdPerson } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'SERIES' },
  { path: 'categories', text: 'CATEGORIES' },
];

const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-sm bg-dark pt-1">
    <div className="container">
      <a className="navbar-brand text-primary fs-2 fw-bold" href="/">
        Navbar
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
      <div className="collapse navbar-collapse position-relative" id="navbarNav">
        <ul className="navbar-nav position-absolute" style={{ top: '-17px' }}>
          {links.map((link) => (
            <li key={link.text} className="nav-item">
              <NavLink to={link.path} className="nav-link">
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        className="btn btn-dark border border-secondary rounded-circle d-flex align-items-center justify-content-center"
        style={{ aspectRatio: 1 }}
      >
        <MdPerson color="#0d6efd" size={20} />
      </button>
    </div>
  </nav>
);

export default Navbar;
