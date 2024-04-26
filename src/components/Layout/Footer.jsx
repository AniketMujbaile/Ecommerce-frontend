import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal-300 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gray-400 text-center">
          &copy; {new Date().getFullYear()} Ecommerce
        </p>
      </div>
    </footer>
  );
};

export default Footer;