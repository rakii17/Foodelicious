import React, { useState } from 'react';
import './home.css';
import Menu from '../Menu/menu';

function Home() {
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [cart, setCart] = useState([]);

  const handleSearchClick = () => {
    setSearchActive(true);
  };

  const handleOrderClick = () => {
    setShowMenu(true);
    const menuSection = document.getElementById('menu-section');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShowMenu(true);
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Home</h1>
      <div className="card">
        <div className="card-background"></div>
        <div className="card-content">
          <p>Discover our dishes</p>
          <p>Fresh arrivals daily.</p>
          <p>Order now and enjoy!!!</p>
        </div>
        <div className="card-actions">
          <input
            type="text"
            className={`search-bar ${searchActive ? 'active' : ''}`}
            placeholder="Search..."
            onClick={handleSearchClick}
            onChange={handleSearchChange}
            value={searchQuery}
          />
          <button className="order-button" onClick={handleOrderClick}>
            Order Now
          </button>
        </div>
      </div>
      {showMenu && (
        <div id="menu-section" className="menu-section">
          <Menu searchQuery={searchQuery} setCart={setCart} cart={cart} />
        </div>
      )}
    </div>
  );
}

export default Home;