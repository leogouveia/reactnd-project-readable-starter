import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar is-black" role="navigation" aria-label="main navigation">
      <div className="container">
      <div className="navbar-menu  is-active">
        <div className="navbar-start">
          <NavLink to="/" exact activeClassName="is-active" className="navbar-item">Home</NavLink>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">Add Post</a>
            </div>
          </div>
        </div>
      </div>
    
      </div>
    </nav>
  );
}

export default Navbar;
