import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../utils/auth";
import { AuthContext } from "../../AuthContext";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <nav className="bg-teal-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold">
            Ecommerce
          </Link>{" "}
          <div className="flex">
            <Link
              to="/products"
              className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Products
            </Link>
            {isLoggedIn ? (
              <>
                <Link
                  to="/cart"
                  className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Cart
                </Link>
                <button
                  onClick={handleLogout}
                  className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
 
