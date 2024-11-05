// components/Nav.tsx
import React from "react";

const Nav: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-6">
      <div className="flex items-center space-x-6">
        <img
          src="https://placehold.co/50x50"
          alt="Genius Sports Logo"
          className="h-10"
        />
        <nav className="flex space-x-6">
          <a href="#" className="text-white">
            Why Genius?
          </a>
          <a href="#" className="text-white">
            Products
          </a>
          <a href="#" className="text-white">
            Customers
          </a>
          <a href="#" className="text-white">
            Learn
          </a>
          <a href="#" className="text-white">
            Company
          </a>
        </nav>
      </div>
      <button className="bg-gray-700 text-white py-2 px-4 rounded-full">
        Contact Sales
      </button>
    </header>
  );
};

export default Nav;
