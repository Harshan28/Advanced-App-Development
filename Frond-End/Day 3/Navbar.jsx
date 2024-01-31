// Navbar.js
import'./Navbar.css';

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/Adminlogin" className="nav-link">Admin Login</Link>
        {/* <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link> */}
      </div>
    </nav>
  );
}

export default Navbar;
