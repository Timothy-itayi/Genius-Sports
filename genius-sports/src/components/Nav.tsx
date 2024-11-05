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
      <button className="hover-button relative inline-flex items-center justify-center overflow-hidden transition-all bg-gray-700 text-white py-2 px-4 rounded-full group hover:bg-[#3b82fd] hover:duration-[2000ms]">
  {/* Top line */}
  <span className="absolute top-0 left-0 w-full h-1/4 bg-gray-700 transform -translate-x-full group-hover:translate-x-0 transition-all duration-[2000ms] ease-out group-hover:bg-[#3b82fd]"></span>

  {/* Upper-middle line */}
  <span className="absolute top-1/4 left-0 w-full h-1/4 bg-gray-700 transform translate-x-full group-hover:-translate-x-0 transition-all duration-[2000ms] ease-out group-hover:bg-[#3b82fd] delay-300"></span>

  {/* Lower-middle line */}
  <span className="absolute top-1/2 left-0 w-full h-1/4 bg-gray-700 transform -translate-x-full group-hover:translate-x-0 transition-all duration-[2000ms] ease-out group-hover:bg-[#3b82fd] delay-600"></span>

  {/* Bottom line */}
  <span className="absolute bottom-0 left-0 w-full h-1/4 bg-gray-700 transform translate-x-full group-hover:-translate-x-0 transition-all duration-[2000ms] ease-out group-hover:bg-[#3b82fd] delay-900"></span>

  {/* Button text with animated letters */}
  <span className="relative z-10 flex space-x-1">
    <span className="flip-letter letter-delay-0 duration-[2000ms]">C</span>
    <span className="flip-letter letter-delay-1">o</span>
    <span className="flip-letter letter-delay-2">n</span>
    <span className="flip-letter letter-delay-3">t</span>
    <span className="flip-letter letter-delay-4">a</span>
    <span className="flip-letter letter-delay-5">c</span>
    <span className="flip-letter letter-delay-6">t</span>
    <span>&nbsp;</span> 
    <span className="flip-letter letter-delay-7">S</span>
    <span className="flip-letter letter-delay-8">a</span>
    <span className="flip-letter letter-delay-9">l</span>
    <span className="flip-letter letter-delay-10">e</span>
    <span className="flip-letter letter-delay-11">s</span>
  </span>
</button>
    </header>
  );
};

export default Nav;
