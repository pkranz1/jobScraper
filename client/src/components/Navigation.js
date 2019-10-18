import React from 'react';
import {
  Link,
  NavLink
} from 'react-router-dom';

function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" to="/">JobScraper</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/posts/saved">
            Saved Job Posts
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about-us">
            About The App
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;