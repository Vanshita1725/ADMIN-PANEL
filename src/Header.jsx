import React from 'react'
import { Link } from 'react-router'
import logo from './assets/583.jpeg'
const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 bg-[#23282d] flex items-center justify-between px-3 h-10 shadow-lg text-sm">
      <div className="flex items-center gap-3">
        {/* WordPress Logo */}
        <div className="w-6 h-10 flex items-center justify-center">
          <img src={logo} alt="Logo" className="w-6 h-6 object-contain" />
        </div>
        <Link className='!text-white !text-sm !no-underline !font-[medium]'>
        <span className="font-bold !text-gray-400">        <i class="fa-solid fa-house-chimney"></i>        {/* Site Name */}
        </span>
        shampoo
        </Link>
        {/* Refresh */}
        <Link className='!text-white !text-sm !no-underline flex !font-[medium] gap-1'>
        <span className="font-bold !text-gray-400">      <i class="fa-solid fa-arrows-rotate"></i>
        </span>
      1
        </Link>
        {/* Comment */}
        <Link className='!text-white !text-sm !no-underline flex !font-[medium] gap-1'>
        <span className="font-bold !text-gray-400">     <i class="fa-solid fa-message"></i>
        </span>
      0
        </Link>
       
        <Link className='!text-white !text-sm !no-underline flex !font-[medium] gap-1'>
        <span className="font-bold !text-gray-400">    <i class="fa-solid fa-plus"></i>
        </span>
      New
        </Link>
      </div>
      <nav className="flex items-center">
        <span className="font-semibold text-gray-200 flex items-center gap-2">
          Howdy, <span className="font-bold">root</span> <i class="fa-solid fa-user"></i>
        </span>
      </nav>
    </header>
  )
}

export default Header