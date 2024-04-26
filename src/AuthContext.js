// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { isAuthenticated } from './utils/auth';
import { getCartItems } from './utils/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await isAuthenticated();
      setIsLoggedIn(isAuth);
      if (isAuth) {
        const cart = await getCartItems();
        setCartItems(cart);
        const totalPrice = cart.reduce(
          (acc, item) => acc + item.product.price * item.quantity,
          0
        );
        setTotal(totalPrice);
      }
    };
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, cartItems, setCartItems, total }}>
      {children}
    </AuthContext.Provider>
  );
};
 
 
 