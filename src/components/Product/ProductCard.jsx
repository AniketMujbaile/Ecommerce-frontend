import React from 'react';
import { addToCart } from '../../utils/api';
import { isAuthenticated } from '../../utils/auth';

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    if (isAuthenticated()) {
      addToCart(product._id, 1)
        .then(() => {
          alert('Product added to cart');
        })
        .catch((err) => {
          console.error(err);
          alert('Error adding product to cart');
        });
    } else {
      alert('Please log in to add products to your cart.');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={`https://via.placeholder.com/300x200?text=${product.name}`}
          alt={product.name}
        />
        <div className="absolute top-0 right-0 bg-red-500 text-white font-bold px-2 py-1 rounded-bl">
         ₹{product.price}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{product.name}</h3>
        <p className="text-gray-700 mb-4">{product.category}</p>
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
 