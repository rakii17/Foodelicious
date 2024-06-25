import React from 'react';
import { Link } from 'react-scroll';
import "./navbar.css";

const Navbar = () => {
  return (

    <nav className="navbar">
        <div className="navMenuItems">
          <Link to="home" className="navMenuItem">Home</Link>
          <Link to="menu" className="navMenuItem">Menu</Link>
          <Link to="cart" className="navMenuItem">Cart</Link>
        </div>  
    </nav>
  );
}

export default Navbar;
