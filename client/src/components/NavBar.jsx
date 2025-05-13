import React from 'react';
import { ShoppingCart, Truck, User, ChevronDown  } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-[10%] py-4 shadow-sm bg-white  h-[100px]">
      {/* Logo */}
      <div className="font-KiwiFruit text-6xl  flex ">
        <p className="text-red-600">Mix</p>
        <p className=""> &Match</p>
      </div>

      {/* Menú principal */}
      <div className=''>

        <ul className="flex  h-[50px]  text-sm font-medium text-gray-700 font-Poppins ">
            <li className="group relative cursor-pointer flex  h-full justify-center   items-center w-[100px]">
                Mujer 
                <ChevronDown className="w-5 h-5 cursor-pointer" />
            </li>
            <li className="group relative cursor-pointer flex   h-full justify-center items-center w-[100px]">
                Hombre 
                <ChevronDown className="w-5 h-5 cursor-pointer flex" />
            </li>
            <li className="group relative cursor-pointer flex  h-full justify-center items-center w-[100px]">
                Infantil 
                <ChevronDown className="w-5 h-5 cursor-pointer" />
            </li>
            <li className="group relative cursor-pointer flex  h-full justify-center items-center w-[100px]">
                Básicos 
                <ChevronDown className="w-5 h-5 cursor-pointer" />
            </li>
            <li className="cursor-pointer  flex h-full justify-center items-center w-[100px]">Outlet</li>
        </ul>
      </div>
      {/* Iconos + botón */}
      <div className="flex items-center gap-10   h-[50px]">
        <div className='flex gap-10'>
            <User className="w-6 h-6 cursor-pointer " />
            <ShoppingCart className="w-6 h-6 cursor-pointer " />
            <Truck className="w-6 h-6 cursor-pointer " />
        </div>
        <button className="bg-pink-200 hover:bg-pink-300 text-[16px] text-gray-800 font-Poppins px-4 py-2 rounded h-[50px]">
          Iniciar Sesión
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
