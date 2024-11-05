// components/Nav.tsx
import React from "react";

const Nav: React.FC = () => {
  return (
    <header className=" bg-[#0d1226] w-3/4 mx-auto flex justify-between items-center p-6">
      <div className="   flex items-center space-x-6">
      <div className="flex flex-col items-center">
  <img
    src="/logos/header-logo.svg"
    alt="Genius Sports Logo"
    className="h-10 invert"
  />
  <img
    src='/logos/header-title-logo.svg'
    alt='Genius Sports'
    className='h-4 invert'
  />
</div>


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
