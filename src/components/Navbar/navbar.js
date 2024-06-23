import React from 'react';
import { Link } from 'react-scroll';
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navMenuItems">
        <Link activeClass="active" to="homepage"  className="navMenuItem">Home</Link>
        <Link activeClass="active" to="skills"  className="navMenuItem">Menu</Link>
        <Link activeClass="active" to="projects"  className="navMenuItem">About</Link>
        <Link activeClass="active" to="works"  className="navMenuItem">Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar;
