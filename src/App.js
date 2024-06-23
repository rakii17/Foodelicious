import React from 'react';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import Menu from './components/Menu/menu';
import About from './components/About/about';
import Cart from './components/Cart/cart';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div id="homepage">
          <Home />
        </div>
        <div id="skills">
          <Menu />
        </div>
        <div id="projects">
          <About />
        </div>
        <div id="works">
          <Cart />
        </div>
      </div>
    </Router>
  );
}

export default App;
