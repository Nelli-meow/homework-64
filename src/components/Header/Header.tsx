import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-warning-subtle">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <NavLink className="text-black p-2 fs-4 text-decoration-none" to="/">Nelli-meow</NavLink>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="text-black p-2 text-decoration-none" to="/posts">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="text-black p-2 text-decoration-none" to="/posts/new-post">Add</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="text-black p-2 text-decoration-none" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="text-black p-2 text-decoration-none" to="/contacts">Contacts</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
