import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">NETCAFE JKB</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/todolist">TodoList</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
