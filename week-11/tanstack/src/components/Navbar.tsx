import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-center items-center">
        <div>
          <Link
            className="py-2 px-3 rounded-sm border border-gray-200 hover:bg-gray-500 hover:text-white"
            to="/"
          >
            Home
          </Link>
          <Link
            className="py-2 px-3 rounded-sm border border-gray-200 hover:bg-gray-500 hover:text-white"
            to="/products"
          >
            Product
          </Link>
          <Link
            className="py-2 px-3 rounded-sm border border-gray-200 hover:bg-gray-500 hover:text-white"
            to="/products/1"
          >
            Product Detail
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
