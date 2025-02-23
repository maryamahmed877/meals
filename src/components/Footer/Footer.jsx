import React from 'react';
import logo from '../../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-white p-4 relative bottom-0 w-full shadow-md">
      <div className="container mx-auto px-4 flex flex-col items-center text-center sm:flex-row sm:justify-between">
        
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="w-16" />
          <h3 className="text-xl font-bold text-gray-700">Recipe</h3>
        </div>

        <div className="mt-2 sm:mt-0">
          <h3 className="text-lg font-semibold text-gray-700">Route</h3>
        </div>

      </div>
    </footer>
  );
}
