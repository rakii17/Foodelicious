import React from 'react';
import { Link } from 'react-scroll';
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navMenuItems">
          <Link to="home" activeClass="active" spy={true} smooth={true} offset={-100} duration={400} className="navMenuItem">Home</Link>
          <Link to="menu" activeClass="active" spy={true} smooth={true} offset={-100} duration={400} className="navMenuItem">Menu</Link>
          <Link to="cart" activeClass="active" spy={true} smooth={true} offset={-100} duration={400} className="navMenuItem">Cart</Link>
        </div>  
    </nav>
  );
}

export default Navbar;
