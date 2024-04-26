import axios from 'axios';
import { getToken } from './auth';

const API_BASE_URL = 'https://ecommerce-xk3m.onrender.com/api';

export const getAllProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data;
};

export const getCartItems = async () => {
  const token = getToken();
  const response = await axios.get(`${API_BASE_URL}/cart`, {
    headers: {
      'x-auth-token': token,
    },
  });
  return response.data;
};

export const addToCart = async (productId, quantity) => {
  const token = getToken();
  const response = await axios.post(
    `${API_BASE_URL}/cart`,
    { productId, quantity },
    {
      headers: {
        'x-auth-token': token,
      },
    }
  );
  return response.data;
};

export const updateCartItemQuantity = async (cartItemId, quantity) => {
  const token = getToken();
  const response = await axios.put(
    `${API_BASE_URL}/cart/${cartItemId}`,
    { cartItemId, quantity },
    {
      headers: {
        'x-auth-token': token,
      },
    }
  );
  return response.data;
};

export const removeFromCart = async (cartItemId) => {
  const token = getToken();
  try {
    const response = await axios.delete(`${API_BASE_URL}/cart/${cartItemId}`, {
      headers: {
        'x-auth-token': token,
      },
    });
    console.log('Server response:', response.data); 
    return response.data;
  } catch (error) {
    console.error('Error removing item from cart:', error);
    throw error; 
  }
};
 