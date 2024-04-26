import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login, Register } from './components';
import  HomePage from './pages/HomePage';
import  ProductsPage from './pages/ProductsPage';
import  CartPage  from './pages/CartPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;