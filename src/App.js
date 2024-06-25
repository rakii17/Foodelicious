import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import Menu from './components/Menu/menu';
import Cart from './components/Cart/cart';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity || 1;
      existingItem.totalPrice = existingItem.quantity * existingItem.price;
      setCart([...cart]);
    } else {
      const newItem = {
        ...item,
        quantity: item.quantity || 1,
        totalPrice: (item.quantity || 1) * item.price,
      };
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handleCheckout = () => {
    alert('Your order is delivered to your address. Thanks for using Foodelicious Webpage.', cart);
    setCart([]);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <div id="home">
          <Home />
        </div>
        <div id="menu">
          <Menu addToCart={addToCart} />
        </div>
        <div id="cart">
          <Cart cart={cart} removeFromCart={removeFromCart} handleCheckout={handleCheckout} />
        </div>
      </div>
    </Router>
  );
}

export default App;
