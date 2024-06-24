import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import "./cart.css";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleCheckout = () => {
    setShowModal(true);
    setCart([]);
  };

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
            </div>
          ))}
          <button onClick={handleCheckout} className="btn btn-primary">Checkout</button>
        </div>
      )}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Order Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your order is delivered to your address. Thanks for ordering, enjoy the dishes.
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => setShowModal(false)} className="btn btn-primary">Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Cart;
