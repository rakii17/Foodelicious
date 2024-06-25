import React from 'react';
import "./menu.css";
import foodimg from '../../assets/food.jpg';

const menuItems = [
  { id: 1, title: "Pizza", description: "Delicious cheese pizza", image: foodimg, price: 10 },
  { id: 2, title: "Burger", description: "Juicy beef burger", image: foodimg, price: 8 },
  { id: 3, title: "Pasta", description: "Creamy Alfredo pasta", image: foodimg, price: 12 },
  { id: 4, title: "Pasta", description: "Creamy Alfredo pasta", image: foodimg, price: 12 },
  { id: 5, title: "Pasta", description: "Creamy Alfredo pasta", image: foodimg, price: 12 },
  { id: 6, title: "Pasta", description: "Creamy Alfredo pasta", image: foodimg, price: 12 },
  { id: 7, title: "Pasta", description: "Creamy Alfredo pasta", image: foodimg, price: 12 },
  { id: 8, title: "Pasta", description: "Creamy Alfredo pasta", image: foodimg, price: 12 },
  { id: 9, title: "Pasta", description: "Creamy Alfredo pasta", image: foodimg, price: 12 },
  { id: 10, title: "Pasta", description: "Creamy Alfredo pasta", image: foodimg, price: 12 },
];

const Menu = ({ setCart, cart }) => {

  const addToCart = (item) => {
    const updatedItem = {
      ...item,
      quantity: item.quantity || 1,
      totalPrice: (item.quantity || 1) * item.price,
    };
    setCart([...cart, updatedItem]);
  };

  const handleQuantityChange = (e, item) => {
    const quantity = parseInt(e.target.value);
    item.quantity = quantity;
    item.totalPrice = quantity * item.price;
    setCart(cart.map(cartItem => cartItem.id === item.id ? item : cartItem));
  };

  return (
    <div className="menu">
      <h1 className="menu-title">Menu</h1>
      <div className="menu-items">
        {menuItems.map(item => (
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
              <span>Rs.{item.totalPrice || item.price}</span>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
