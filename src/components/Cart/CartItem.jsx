import React, { useState } from 'react';
import { removeFromCart, updateCartItemQuantity } from '../../utils/api';

const CartItem = ({ item, onRemoveItem, onUpdateQuantity }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = async (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity); 
    try {
      await updateCartItemQuantity(item._id, newQuantity);
      onUpdateQuantity(item._id, newQuantity); 
    } catch (error) {
      console.error('Error updating cart item quantity:', error);
    }
  };

  const handleRemoveFromCart = () => {
    removeFromCart(item._id)
      .then(() => {
        onRemoveItem(item._id);
      })
      .catch((err) => {
        console.error('Error removing item from cart:', err);
      });
  };

  return (
    <div className="flex items-center justify-between py-4 border-b">
      <div className="flex items-center">
        <img
          className="h-16 w-16 object-cover"
          src={`https://via.placeholder.com/64x64?text=${item.product.name}`}
          alt={item.product.name}
        />
        <div className="ml-4">
          <h3 className="text-lg font-bold">{item.product.name}</h3>
          <p className="text-gray-600">₹{item.product.price}</p>
        </div>
      </div>
      <div className="flex items-center">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
          className="w-16 px-2 py-1 border border-gray-300 rounded mr-4"
        />
        <button
          onClick={handleRemoveFromCart}
          className="text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;

 