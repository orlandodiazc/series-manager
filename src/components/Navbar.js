import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'SERIES' },
  { path: 'categories', text: 'CATEGORIES' },
];

const Navbar = () => (
  <div>
    <ul>
      {links.map((link) => (
        <li key={link.text}>
          <NavLink to={link.path}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default Navbar;
