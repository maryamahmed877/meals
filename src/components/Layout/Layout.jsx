
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

export default function Layout() {
  return (
    <>
    <div className="flex">
      <Sidebar />
      <div className="w-full p-8">
        <Outlet />
       
      </div>
    </div>
      <Footer/>
    </>
    
  );
}
