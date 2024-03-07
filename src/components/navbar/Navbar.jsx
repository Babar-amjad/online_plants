import React from 'react';
import { Link } from 'react-router-dom';
import { GiPlantsAndAnimals } from "react-icons/gi";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = ({ size }) => {
  return (
    <nav className="bg-white text-black font-bold items-center dark:bg-gray-700 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto px-2">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="#" className="flex items-center space-x-2 rtl:space-x-reverse">
              <GiPlantsAndAnimals className='font-extrabold text-4xl ml-4' />
              <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">BA plants</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4 items-center">
              <li><Link to="/" className="text-black hover:bg-green-600 px-3 py-2 rounded-md">Home</Link></li>
              <li><Link to="plants" className="text-black hover:bg-green-600 px-3 py-2 rounded-md">Plants</Link></li>
           
              <li><Link to="Services" className="text-black hover:bg-green-600 px-3 py-2 rounded-md">Services</Link></li>
              <li className="relative">
                <button
                  className="text-black hover:bg-green-600 px-3 py-2 rounded-md focus:outline-none"
                >
                  Categories
                </button>
                <div className="absolute top-full left-0 mt-1 text-black rounded-md shadow-lg dark:bg-gray-700">
                  <ul className="py-1">
                    <li><Link to="Indoor_plants" className="block text-[10px] px-4 py-2 text-gray-800 hover:bg-green-100 dark:hover:bg-gray-600">Indoor plants</Link></li>
                    <li><Link to="Outdoor_plants" className="block px-4 text-[10px] py-2 text-gray-800 hover:bg-green-100 dark:hover:bg-gray-600">Outdoor plants</Link></li>
                  </ul>
                </div>
              </li>
              <li><Link to="Contact" className="text-black hover:bg-green-600 px-3 py-2 rounded-md">Contact</Link></li>
            </ul>
          </div>
          <div className='flex items-center'>
            <TiShoppingCart className='text-3xl' />
            <span className="ml-1">{size}</span>
          </div>
          <div className="md:hidden">
            <button
              className="text-white hover:bg-gray-600 px-3 py-2 rounded-md focus:outline-none"
            >
              <svg className="w-6 h-6 bg-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            <div className="absolute top-18 left-0 w-full  bg-white rounded-md shadow-lg dark:bg-gray-700">
              <ul className="py-1 z-50">
                <li><Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-green-600 dark:hover:bg-gray-600">Home</Link></li>
                <li><Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-green-600 dark:hover:bg-gray-600">Plants</Link></li>
                <li><Link to="Indoor_plants" className="block px-4 py-2 text-gray-800 hover:bg-green-600 dark:hover:bg-gray-600">Indoor_plants</Link></li>
                <li><Link to="Outdoor_plants" className="block px-4 py-2 text-gray-800 hover:bg-green-600 dark:hover:bg-gray-600">Outdoor_plants</Link></li>
                <li><Link to="Services" className="text-black hover:bg-green-600 px-3 py-2 rounded-md">Services</Link></li>
                
                <li><Link to="Contact" className="text-black hover:bg-green-600 px-3 py-2 rounded-md">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
