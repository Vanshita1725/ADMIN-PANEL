import React from 'react';
import { Link } from 'react-router-dom'; // Correct router for web apps
import logo from './assets/583.jpeg';

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 bg-[#23282d] px-3 py-2 shadow-lg text-sm">
      <div className="flex flex-wrap items-center justify-between">
        {/* Left Section */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Logo */}
          <div className="w-6 h-6">
            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
          </div>

          {/* Home Link */}
          <Link to="/" className="text-white no-underline font-medium flex items-center gap-1">
            <i className="fa-solid fa-house-chimney text-gray-400" aria-hidden="true"></i>
            <span>Shampoo</span>
          </Link>

          {/* Refresh Link */}
          <Link to="/" className="text-white no-underline font-medium flex items-center gap-1">
            <i className="fa-solid fa-arrows-rotate text-gray-400" aria-hidden="true"></i>
            <span>1</span>
          </Link>

          {/* Comment Link */}
          <Link to="/" className="text-white no-underline font-medium flex items-center gap-1">
            <i className="fa-solid fa-message text-gray-400" aria-hidden="true"></i>
            <span>0</span>
          </Link>

          {/* New Link */}
          <Link to="/" className="text-white no-underline font-medium flex items-center gap-1">
            <i className="fa-solid fa-plus text-gray-400" aria-hidden="true"></i>
            <span>New</span>
          </Link>
        </div>

        {/* Right Section */}
        <nav className="mt-2 sm:mt-0 flex items-center">
          <span className="font-semibold text-gray-200 flex items-center gap-2">
            Howdy, <span className="font-bold">root</span>
            <i className="fa-solid fa-user" aria-hidden="true"></i>
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
