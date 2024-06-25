import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import Menu from './components/Menu/menu';
import About from './components/About/about';
import Cart from './components/Cart/cart';

function App() {
  const [cart, setCart] = useState([]);

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handleCheckout = () => {
    console.log('Checkout', cart);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <div id="homepage">
          <Home />
        </div>
        <div id="skills">
          <Menu setCart={setCart} cart={cart} />
        </div>
        <div id="projects">
          <About />
        </div>
        <div id="works">
          <Cart cart={cart} removeFromCart={removeFromCart} handleCheckout={handleCheckout} />
        </div>
      </div>
    </Router>
  );
}

export default App;
