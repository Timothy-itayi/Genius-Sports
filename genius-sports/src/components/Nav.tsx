// components/Nav.tsx
import clsx from "clsx";
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
      <button className="hover-button relative inline-flex items-center justify-center overflow-hidden transition-all bg-transparent text-white py-2 px-4 rounded-full group">
      {/* Background base */}
      <span className="absolute inset-0 bg-gray-700"></span>

      {/* Top line */}
      <span className="absolute top-0 left-0 w-full h-1/4 bg-gray-700 transform -translate-x-full group-hover:translate-x-0 transition-all duration-1000 ease-out group-hover:bg-[#2FB2EA]"></span>

      {/* Upper-middle line */}
      <span className="absolute top-1/4 left-0 w-full h-1/4 bg-gray-700 transform translate-x-full group-hover:translate-x-0 transition-all duration-1000 ease-out group-hover:bg-[#2FB2EA] delay-[100ms]"></span>

      {/* Lower-middle line */}
      <span className="absolute top-1/2 left-0 w-full h-1/4 bg-gray-700 transform -translate-x-full group-hover:translate-x-0 transition-all duration-1000 ease-out group-hover:bg-[#2FB2EA] delay-[200ms]"></span>

      {/* Bottom line */}
      <span className="absolute bottom-0 left-0 w-full h-1/4 bg-gray-700 transform translate-x-full group-hover:translate-x-0 transition-all duration-1600 ease-out group-hover:bg-[#2FB2EA] delay-[300ms]"></span>


   {/* Parent container with relative position */}
<div className="relative text-center">
  {/* Top set with higher z-index */}
  <div className="relative z-30 overflow-hidden text-white">
    <p className="inline-block">
      <span className={clsx(
        "inline-block animate-slide-up",
        "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
      )}>C</span>
      <span className={clsx(
        "inline-block animate-slide-up delay-[5ms]",
        "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
      )}>o</span>
      <span className={clsx(
        "inline-block animate-slide-up delay-[10ms]",
        "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
      )}>n</span>
      <span className={clsx(
        "inline-block animate-slide-up delay-[15ms]",
        "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
      )}>t</span>
      <span className={clsx(
        "inline-block animate-slide-up delay-[25ms]",
        "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
      )}>a</span>
      <span className={clsx(
        "inline-block animate-slide-up delay-[40ms]",
        "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
      )}>c</span>
      <span className={clsx(
        "inline-block animate-slide-up delay-[50ms]",
        "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
      )}>t</span>
      <span className={clsx(
        "inline-block animate-slide-up delay-[70ms] group-hover: -translate-y-full duration-500 ease-in-out"
      )}>&nbsp;</span>
    </p>
    <p className="inline-block">
      <span className={clsx(
        "inline-block animate-slide-up",
        "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
      )}>S</span>
      <span className={clsx(
        "inline-block animate-slide-up delay-[90ms]",
        "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
      )}>a</span>
      <span className={clsx(
        "inline-block animate-slide-up delay-[100ms]",
        "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
      )}>l</span>
      <span className={clsx(
        "inline-block animate-slide-up delay-[150ms]",
        "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
      )}>e</span>
      <span className={clsx(
        "inline-block animate-slide-up delay-[200ms]",
        "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
      )}>s</span>
    </p>
  </div>

  {/* Bottom set positioned below the top set */}
  <div className={clsx(
    "absolute text-center",
    "top-full", // This will position the bottom set below the top set
    "text-blue-900"
  )}>
    <div className=" ">
      <p className="inline-block">
        <span className={clsx(
          "inline-block animate-slide-up",
          "opacity-0 group-hover:opacity-100 group-hover: -translate-y-full duration-500 ease-in-out"
        )}>C</span>
        <span className={clsx(
          "inline-block animate-slide-up delay-[5ms]",
          "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
        )}>o</span>
        <span className={clsx(
          "inline-block animate-slide-up delay-[10ms]",
          "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
        )}>n</span>
        <span className={clsx(
          "inline-block animate-slide-up delay-[15ms]",
          "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
        )}>t</span>
        <span className={clsx(
          "inline-block animate-slide-up delay-[25ms]",
          "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
        )}>a</span>
        <span className={clsx(
          "inline-block animate-slide-up delay-[40ms]",
          "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
        )}>c</span>
        <span className={clsx(
          "inline-block animate-slide-up delay-[50ms]",
          "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
        )}>t</span>
        <span className={clsx(
          "inline-block animate-slide-up delay-[70ms]",
          "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
        )}>&nbsp;</span>
      </p>
      <p className="inline-block">
        <span className={clsx(
          "inline-block animate-slide-up",
          "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
        )}>S</span>
        <span className={clsx(
          "inline-block animate-slide-up delay-[90ms]",
          "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
        )}>a</span>
        <span className={clsx(
          "inline-block animate-slide-up delay-[100ms]",
          "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
        )}>l</span>
        <span className={clsx(
          "inline-block animate-slide-up delay-[150ms]",
          "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
        )}>e</span>
        <span className={clsx(
          "inline-block animate-slide-up delay-[200ms]",
          "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
        )}>s</span>
      </p>
    </div>
  </div>
</div>

    </button>

    </header>
  );
};

export default Nav;
