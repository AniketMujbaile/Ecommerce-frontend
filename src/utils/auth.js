import axios from 'axios';

const API_BASE_URL = 'https://ecommerce-lac-iota.vercel.app/api/users';

export const register = async (name, email, password) => {
  const response = await axios.post(`${API_BASE_URL}/register`, {
    name,
    email,
    password,
  });
  localStorage.setItem('token', response.data.token);
};

export const login = async (email, password) => {
  const response = await axios.post(`${API_BASE_URL}/login`, {
    email,
    password,
  });
   localStorage.setItem('authToken', response.data.token);
};

export const logout = () => {
 localStorage.removeItem('authToken');
};

export const isAuthenticated = () => {
 const authToken = localStorage.getItem('authToken');
return authToken !== null;
};

export const getToken = () => {
  return localStorage.getItem('authToken');
};

export const setAuthenticated = (isAuthenticated) => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
};