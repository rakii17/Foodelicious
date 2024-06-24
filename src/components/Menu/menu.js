import React, { useState } from 'react';
import "./menu.css";

const menuItems = [
  { id: 1, title: "Pizza", description: "Delicious cheese pizza", image: "pizza.jpg", price: 10 },
  { id: 2, title: "Burger", description: "Juicy beef burger", image: "burger.jpg", price: 8 },
  { id: 3, title: "Pasta", description: "Creamy Alfredo pasta", image: "pasta.jpg", price: 12 },
  { id: 4, title: "Pasta", description: "Creamy Alfredo pasta", image: "pasta.jpg", price: 12 },
  { id: 5, title: "Pasta", description: "Creamy Alfredo pasta", image: "pasta.jpg", price: 12 },
  { id: 6, title: "Pasta", description: "Creamy Alfredo pasta", image: "pasta.jpg", price: 12 },
  { id: 7, title: "Pasta", description: "Creamy Alfredo pasta", image: "pasta.jpg", price: 12 },
  { id: 8, title: "Pasta", description: "Creamy Alfredo pasta", image: "pasta.jpg", price: 12 },
  { id: 9, title: "Pasta", description: "Creamy Alfredo pasta", image: "pasta.jpg", price: 12 },
  { id: 10, title: "Pasta", description: "Creamy Alfredo pasta", image: "pasta.jpg", price: 12 },
];

const Menu = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="menu">
      <h1 className='menu-title'>Menu</h1>
      <div className="menu-items">
        {menuItems.map(item => (
          <div key={item.id} className="menu-item-card">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <img src={item.image} alt={item.title} className="menu-item-image" />
            <div className="menu-item-footer">
              <input type="number" defaultValue="1" min="1" onChange={(e) => {
                const quantity = e.target.value;
                item.quantity = quantity;
                item.totalPrice = quantity * item.price;
              }} />
              <span>${item.price}</span>
              <button onClick={() => addToCart(item)}>Order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
