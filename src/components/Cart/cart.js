import React from 'react';
import "./cart.css";

const Cart = ({ cart = [], removeFromCart, handleCheckout }) => {
  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <span>{item.title}</span>
              <span>Quantity: {item.quantity}</span>
              <span>Price: ${item.totalPrice}</span>
              <button onClick={() => removeFromCart(index)} className="btn btn-secondary">Remove</button>
            </div>
          ))}
          <button onClick={handleCheckout} className="btn btn-primary">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
