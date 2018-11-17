import React from "react";

function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <a href="#" className="navbar-item">Home</a>
          <a href="#" className="navbar-item">Documentation</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
