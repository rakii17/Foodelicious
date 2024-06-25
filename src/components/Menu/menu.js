import React, { useState, useEffect } from 'react';
import "./menu.css";
import idli from '../../assets/idli.png';
import puliyogare from '../../assets/puliyogare.png';
import dosa from '../../assets/dosa.jpg';
import palav from '../../assets/palav.jpg';
import gheerice from '../../assets/gheerice.png';
import lemonrice from '../../assets/lemonrice.png';
import uppittu from '../../assets/uppittu.png';
import fullmeals from '../../assets/fullmeals.png';

const menuItems = [
  { id: 1, title: "Idli", description: "Delicious cheese pizza", image: idli, price: 50 },
  { id: 2, title: "Puliyogare", description: "Creamy Alfredo pasta", image: puliyogare, price: 40 },
  { id: 3, title: "Dosa", description: "Juicy beef burger", image: dosa, price: 60 },
  { id: 4, title: "Palav", description: "Creamy Alfredo pasta", image: palav, price: 45 },
  { id: 5, title: "Gheerice", description: "Creamy Alfredo pasta", image: gheerice, price: 40 },
  { id: 6, title: "Lemonrice", description: "Creamy Alfredo pasta", image: lemonrice, price: 35 },
  { id: 7, title: "Uppittu", description: "Creamy Alfredo pasta", image: uppittu, price: 35 },
  { id: 8, title: "Fullmeals", description: "Creamy Alfredo pasta", image: fullmeals, price: 80 },
];

const Menu = ({ addToCart, searchQuery = '' }) => {
  const [filteredItems, setFilteredItems] = useState(menuItems);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    setFilteredItems(
      menuItems.filter(item =>
        item.title.toLowerCase().includes(query)
      )
    );
  }, [searchQuery]);

  const handleQuantityChange = (e, item) => {
    const quantity = parseInt(e.target.value);
    item.quantity = quantity;
    item.totalPrice = quantity * item.price;
    setFilteredItems([...filteredItems]);
  };

  return (
    <div className="menu">
      <h1 className="menu-title">Menu</h1>
      <div className="menu-items">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-item-card">
            <h2>{item.title}</h2>
            <div className='item-desc'>{item.description}</div>
            <img src={item.image} alt={item.title} className="menu-item-image" />
            <div className="menu-item-footer">
              <input
                type="number"
                value={item.quantity || 1}
                min="1"
                onChange={(e) => handleQuantityChange(e, item)}
                className="quantity-input"
              />
              <span>&#8377;{item.totalPrice || item.price}</span>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
