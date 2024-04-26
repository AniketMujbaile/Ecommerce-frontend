import React from 'react';
import { ProductList } from '../components';

const HomePage = () => {
  return (
    <div className="bg-teal-100 mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
      <ProductList />
    </div>
  );
};

export default HomePage;