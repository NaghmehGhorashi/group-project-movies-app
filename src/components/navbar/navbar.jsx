import style from "./navbar.module.css";
import { Link } from "react-router-dom";

// Filename should be Navbar.jsx

function Navbar() {
  return (
    // Navbar should be in a <nav> tag
    <nav className={style.navbar}>
      {/* The main title tag should be a h1 not a p */}
      <h1>Film Vault</h1>
      <ul className={style.link}>
        <li>
          <Link to="/" tabIndex="0" aria-label="Home Page">
            Home
          </Link>
        </li>
        <li>
          <Link to="/movies" tabIndex="0" aria-label="All Movies">
            All Movies
          </Link>
        </li>
        <li>
          <Link to="/add" tabIndex="0" aria-label="Add">
            Add
          </Link>
        </li>
        <li>
          <Link to="/aboutus" tabIndex="0" aria-label="About us">
            About us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
