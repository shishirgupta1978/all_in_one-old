import React from 'react';

export const ProductItem = ({ id, name, image, price, quantity, updateQuantity }) => {
  const handleQuantityChange = e => {
    const newQuantity = parseInt(e.target.value);
    updateQuantity(id, newQuantity);
  };

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={image} alt="Item Image" />
      </div>
      <div className="item-details">
        <div className="item-name">{name}</div>
        <div className="item-price">{price}</div>
        <div className="item-quantity">{quantity}</div>
      </div>
      <div className="item-buttons">
        <div className="item-remove">Remove</div>
      </div>
      <input
        id={`quantity-${id}`}
        type="number"
        min="1"
        max="10"
        value={quantity}
        onChange={handleQuantityChange}
      />
    </div>

  );
};

