import React, { useContext, useEffect, useState } from 'react';
import CartItem from './CartItem';
import { getCartItems } from '../../utils/api';
import { AuthContext } from '../../AuthContext';

const Cart = () => {
  const { cartItems, setCartItems } = useContext(AuthContext);

  useEffect(() => {
    getCartItems()
      .then((data) => setCartItems(data))
      .catch((err) => console.error(err));
  }, []);

  const handleRemoveItem = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item._id !== itemId)
    );
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item._id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="bg-white overflow-hidden shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Shopping Cart
          </h3>
        </div>
        <div className="border-t border-gray-200">
          {cartItems.length === 0 ? (
            <p className="p-4">Your cart is empty.</p>
          ) : (
            <div className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <CartItem
                  key={item._id}
                  item={item}
                  onRemoveItem={handleRemoveItem}
                  onUpdateQuantity={handleUpdateQuantity}
                />
              ))}
            </div>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="p-4">
            <div className="flex items-center justify-between">
              <span className="font-bold">Total:</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;


 