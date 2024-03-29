import React, { useState } from "react";
import {Link } from "react-router-dom";
import headerlogo from "./logo.png";
import "./header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="mx-auto max-w-7xl">
      <nav class="flex justify-between mx-auto bg-white items-center">
        <div className="flex items-center justify-start">
          <div className="flex justify-start">
            <img src={headerlogo} alt="header-logo" width={150} height={150}/>
          </div>

          {/* <h3 className="text-maincolor font-black">QF Remit</h3> */}
        </div>

        <div className=" sm:pr-3 sm:flex sm:flex-col">
          <button
            onClick={toggleMenu}
            className="flex md:hidden lg:hidden sm:flex sm:justify-end"
          >
            {isMenuOpen ? (
              <div className="pr-1">
                <span className="text-maincolor font-extrabold">X</span>
              </div>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            )}
          </button>
          <ul
            className={`${
              isMenuOpen ? "pt-3 text-right" : "hidden"
            } lg:flex lg:space-x-8 lg:items-center md:flex md:space-x-8 lg:pr-3 md:pr-3 md:items-center`}
          >
            <li>
              <Link to="/" className="text-maincolor text-sm font-normal" >Home</Link>
            </li>
            <li>
              <Link to='/about' className="text-maincolor text-sm font-normal">About</Link>

            </li>
            <li>
               <Link to='/process' className="text-maincolor text-sm font-normal">Process</Link>
            </li>
            {/* <li>
              <a href="#" className="text-maincolor text-sm font-normal">
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
