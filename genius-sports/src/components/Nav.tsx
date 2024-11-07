'use client'
// components/Nav.tsx
import clsx from "clsx";
import React, { useState } from "react";
import Hamburger from "./hamburger";
import Drawer from "./drawer";

const Nav: React.FC = () => {


  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    console.log(isOpen);  // Check the current state
    setIsOpen(!isOpen);
  };
  



  return (
    <header className=" bg-[#0d1226] w-3/4 mx-auto flex justify-between items-center p-6">
      <div className="   flex items-center space-x-6">
        <div className=" left-4 top-4 flex flex-col items-center">
          <img
            src="/logos/header-logo.svg"
            alt="Genius Sports Logo"
            className="h-10 invert  " />
          <img
            src='/logos/header-title-logo.svg'
            alt='Genius Sports'
            className='h-4 invert' />
        </div>
        {/* Hamburger button for small screens */}
        <button
          onClick={toggleHamburger}
          className="focus:outline-none z-20 sm:hidden absolute top-4 right-4"
        >
          <Hamburger isOpen={isOpen} />
        </button>

        {/* Drawer for mobile screens */}
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <nav className="flex flex-col items-center space-y-6 ">
            <a href="#" className="text-black">Why Genius?</a>
            <a href="#" className="text-black">Products</a>
            <a href="#" className="text-black">Customers</a>
            <a href="#" className="text-black">Learn</a>
            <a href="#" className="text-black">Company</a>
          </nav>
        </Drawer>

        {/* Desktop navigation links */}
        <nav className="flex inline-flex space-x-6 sm:flex hidden">
          <a href="#" className="text-white">Why Genius?</a>
          <a href="#" className="text-white">Products</a>
          <a href="#" className="text-white">Customers</a>
          <a href="#" className="text-white">Learn</a>
          <a href="#" className="text-white">Company</a>
        </nav>
      </div>
    
    <a href="https://timothyitayi.com">
        <button className="hover-button relative inline-flex items-center justify-center overflow-hidden transition-all bg-transparent text-white py-2 px-4 rounded-full group sm:flex hidden">


          {/* Background base */}
          <span className="absolute inset-0 bg-gray-700"></span>

          {/* Top line */}
          <span className="absolute top-0 left-0 w-full h-1/4 bg-gray-700 transform -translate-x-full group-hover:translate-x-0 transition-all duration-1000 ease-out group-hover:bg-[#B2FFFF]"></span>

          {/* Upper-middle line */}
          <span className="absolute top-1/4 left-0 w-full h-1/4 bg-gray-700 transform translate-x-full group-hover:translate-x-0 transition-all duration-1000 ease-out group-hover:bg-[#B2FFFF] delay-[100ms]"></span>

          {/* Lower-middle line */}
          <span className="absolute top-1/2 left-0 w-full h-1/4 bg-gray-700 transform -translate-x-full group-hover:translate-x-0 transition-all duration-1000 ease-out group-hover:bg-[#B2FFFF] delay-[200ms]"></span>

          {/* Bottom line */}
          <span className="absolute bottom-0 left-0 w-full h-1/4 bg-gray-700 transform translate-x-full group-hover:translate-x-0 transition-all duration-100 ease-out group-hover:bg-[#B2FFFF] delay-[300ms]"></span>


          {/* Parent container with relative position */}
          <div className="relative text-center">
            {/* Top set with higher z-index */}
            <div className="relative z-30 overflow-hidden text-white">
              <p className="inline-block">
                <span className={clsx(
                  "inline-block animate-slide-up",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>T</span>
                <span className={clsx(
                  "inline-block animate-slide-up delay-[5ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>i</span>
                <span className={clsx(
                  "inline-block animate-slide-up delay-[10ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>m</span>
                <span className={clsx(
                  "inline-block animate-slide-up delay-[15ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>&apos;</span>
                <span className={clsx(
                  "inline-block animate-slide-up delay-[25ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>s</span>

                <span className={clsx(
                  "inline-block animate-slide-up delay-[70ms] group-hover: -translate-y-full duration-500 ease-in-out"
                )}>&nbsp;</span>
              </p>
              <p className="inline-block">
                <span className={clsx(
                  "inline-block animate-slide-up",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>P</span>
                <span className={clsx(
                  "inline-block animate-slide-up delay-[90ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>o</span>
                <span className={clsx(
                  "inline-block animate-slide-up delay-[100ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>r</span>
                <span className={clsx(
                  "inline-block animate-slide-up delay-[150ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>t</span>
                <span className={clsx(
                  "inline-block animate-slide-up delay-[170ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>f</span>
                <span className={clsx(
                  "inline-block animate-slide-up delay-[170ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>o</span>
                <span className={clsx(
                  "inline-block animate-slide-up delay-[170ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>l</span>
                <span className={clsx(
                  "inline-block animate-slide-up delay-[170ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>i</span>
                <span className={clsx(
                  "inline-block animate-slide-up delay-[170ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>o</span>
              </p>
            </div>

            {/* Bottom set positioned below the top set */}
            <div className={clsx(
              "absolute text-center",
              "top-full", // This will position the bottom set below the top set
              "text-[#0725cb]"
            )}>
              <div className=" ">
                <p className="inline-block">
                  <span className={clsx(
                    "inline-block animate-slide-up",
                    "opacity-0 group-hover:opacity-100 group-hover: -translate-y-full duration-500 ease-in-out"
                  )}>T</span>
                  <span className={clsx(
                    "inline-block animate-slide-up delay-[5ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>i</span>
                  <span className={clsx(
                    "inline-block animate-slide-up delay-[10ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>m</span>
                  <span className={clsx(
                    "inline-block animate-slide-up delay-[15ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>&apos;</span>
                  <span className={clsx(
                    "inline-block animate-slide-up delay-[25ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>s</span>

                  <span className={clsx(
                    "inline-block animate-slide-up delay-[70ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>&nbsp;</span>
                </p>
                <p className="inline-block">
                  <span className={clsx(
                    "inline-block animate-slide-up",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>P</span>
                  <span className={clsx(
                    "inline-block animate-slide-up delay-[90ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>o</span>
                  <span className={clsx(
                    "inline-block animate-slide-up delay-[100ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>r</span>
                  <span className={clsx(
                    "inline-block animate-slide-up delay-[150ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>t</span>
                  <span className={clsx(
                    "inline-block animate-slide-up delay-[170ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>f</span>
                  <span className={clsx(
                    "inline-block animate-slide-up delay-[170ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>o</span>
                  <span className={clsx(
                    "inline-block animate-slide-up delay-[170ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>l</span>
                  <span className={clsx(
                    "inline-block animate-slide-up delay-[170ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>i</span>
                  <span className={clsx(
                    "inline-block animate-slide-up delay-[170ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>o</span>
                </p>
              </div>
            </div>
          </div>

        </button>
      </a>




      

    </header>
  );
};

export default Nav;
