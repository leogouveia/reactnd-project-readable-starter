import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav role="navigation" aria-label="main navigation">
      <div>
        <div>
          <div>
            <NavLink to="/" exact activeClassName="is-active">
              Home
            </NavLink>
          </div>
          <div>
            <div>
              <div>
                <NavLink to="/new" exact>
                  Add Post
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
