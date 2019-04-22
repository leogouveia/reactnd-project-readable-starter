import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav role="navigation" aria-label="main navigation" className="navbar">
      <div className="container">
        <div>
          <NavLink to="/" exact activeClassName="is-active">
            Home
          </NavLink>
        </div>
        <div className="end">
          <NavLink to="/new" exact>
            Add Post
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
