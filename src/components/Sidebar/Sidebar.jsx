import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button 
        className="md:hidden fixed top-4 left-4 bg-[#F29724] text-white p-3 rounded-lg shadow-lg z-50"
        onClick={toggleSidebar}
      >
        <i className="fa-solid fa-bars text-lg"></i>
      </button>

      <aside className={`fixed top-0 left-0 h-screen w-[250px] bg-white p-3 
                        transition-transform duration-300 ease-in-out
                        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
                        md:translate-x-0 md:relative md:w-[250px] z-50`}
      >
        <div className="flex justify-center mb-6">
          <img className="w-full" src={logo} alt="Logo" />
        </div>

        <ul className="p-3">
          <li>
            <NavLink 
              className="flex items-center gap-4 px-4 py-2 border border-gray-400 rounded-lg 
                         hover:scale-110 duration-500 shadow-2xl hover:shadow-[#F29724]"
              to=""
              onClick={toggleSidebar} 
            >
              <i className="fa-solid fa-utensils"></i> Meals
            </NavLink>
          </li>
          <li>
            <NavLink 
              className="flex items-center gap-4 px-4 py-2 my-7 border border-gray-400 rounded-lg 
                         hover:scale-110 duration-500 shadow-2xl hover:shadow-[#F29724]"
              to="ingredients"
              onClick={toggleSidebar} 
            >
              <i className="fa-solid fa-carrot"></i> Ingredients
            </NavLink>
          </li>
          <li>
            <NavLink 
              className="flex items-center gap-4 px-4 py-2 border border-gray-400 rounded-lg 
                         hover:scale-110 duration-500 shadow-2xl hover:shadow-[#F29724]"
              to="area"
              onClick={toggleSidebar} 
            >
               <i className="fa-solid fa-map-marker-alt"></i>  Areas
            </NavLink>
          </li>
        </ul>
      </aside>

      {isOpen && <div className="fixed inset-0 bg-black opacity-40 md:hidden" onClick={toggleSidebar}></div>}
    </>
  );
}
