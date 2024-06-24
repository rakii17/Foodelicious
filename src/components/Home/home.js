import React, { useState } from 'react';
import './home.css';

function Home() {
  const [searchActive, setSearchActive] = useState(false);

  const handleSearchClick = () => {
    setSearchActive(true);
  };

  const handleOrderClick = () => {
    // Redirect to the cart section
    window.location.href = '/cart';
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Home</h1>
      <div className="card">
        <div className="card-background"></div>
        <div className="card-content">
          <p>Discover our new collection!</p>
          <p>Fresh arrivals daily.</p>
          <p>Order now and enjoy exclusive offers!</p>
        </div>
        <div className="card-actions">
          <input
            type="text"
            className={`search-bar ${searchActive ? 'active' : ''}`}
            placeholder="Search..."
            onClick={handleSearchClick}
          />
          <button className="order-button" onClick={handleOrderClick}>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
