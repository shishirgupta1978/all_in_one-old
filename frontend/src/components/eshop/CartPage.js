import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import {ProductItem} from './ProductItem';

export const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10.00, image: 'https://via.placeholder.com/150x150' },
    { id: 2, name: 'Product 2', price: 20.00, image: 'https://via.placeholder.com/150x150' },
    { id: 3, name: 'Product 3', price: 30.00, image: 'https://via.placeholder.com/150x150' },
  ]);
  const [totalPrice, setTotalPrice] = useState(0);

  const updateQuantity = (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      } else {
        return item;
      }
    });
    setCartItems(updatedCartItems);
  };

  const calculateTotalPrice = () => {
    const newTotalPrice = cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
    setTotalPrice(newTotalPrice);
  };

  const handleCheckout = () => {
    Navigate("/checkout")
    // Handle checkout logic here
  };

  return (
    <div>
      <h1>Your Cart</h1>
      <div className="cart-page">
  <div className="cart-items">
      {cartItems.map(item => (
        <ProductItem
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          price={item.price}
          quantity={item.quantity}
          updateQuantity={updateQuantity}
        />
      ))}
      
      
      </div>
      <div className="cart-total">Total Price: {totalPrice}</div>
      <button onClick={calculateTotalPrice}>Calculate Total Price</button>
 
  <button className="checkout-button"><Link to="/checkout">Proceed to Checkout</Link></button>
</div>
    </div>
  );
};

