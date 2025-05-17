import React from 'react';
import { ShoppingCart, Truck, User, ChevronDown  } from 'lucide-react';
import FlyoutLink from './FlyoutLink';
import { Button } from "@material-tailwind/react";


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-[10%] shadow-md bg-white  h-[80px] ">
      {/* Logo */}
      <div className="font-KiwiFruit text-6xl  flex ">
        <p className="text-red-600">Mix</p>
        <p className=""> &Match</p>
      </div>

      {/* Menú principal */}
      <div className='h-full  '>

        <ul className="flex items-center h-full  text-sm font-medium gap-4 text-gray-700 font-Poppins ">
          <FlyoutLink href="#" FlyoutContent={PricingContent} >
            Mujer
            <ChevronDown className="w-5 h-5 cursor-pointer" />
          </FlyoutLink>

          <FlyoutLink href="#" FlyoutContent={PricingContent} >
            Hombre
            <ChevronDown className="w-5 h-5 cursor-pointer" />
          </FlyoutLink> 
          <FlyoutLink href="#" FlyoutContent={PricingContent} >
            Infantil
            <ChevronDown className="w-5 h-5 cursor-pointer" />
          </FlyoutLink>
          <FlyoutLink href="#" FlyoutContent={PricingContent} >
            Basicos
            <ChevronDown className="w-5 h-5 cursor-pointer" />
          </FlyoutLink>
          <FlyoutLink href="#" >
            Outlet
          </FlyoutLink>
        </ul>
      </div>
      {/* Iconos + botón */}
      <div className="flex items-center gap-10   h-[50px]">
        <div className='flex gap-5'>
          <a href="#">
            <User className="w-7 h-7 cursor-pointer " />
          </a>
          <a href="#">
            <ShoppingCart className="w-7 h-7 cursor-pointer " />
          </a>
          <a href="#">
            <Truck className="w-7 h-7 cursor-pointer " />
          </a>
        </div>
        <Button as="a" href="#" variant="ghost" className='bg-red-200 hover:bg-red-300 text-[16px] text-gray-800 font-Poppins px-4 py-2 rounded h-[50px]' >Iniciar Sesion</Button>;
      </div>
    </nav>
  );
};


// Componente de contenido del flyout
// Este componente se renderiza dentro del flyout
// Puedes personalizarlo según tus necesidades
const PricingContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">For Individuals</h3>
        <a href="#" className="block text-sm hover:underline">
          Introduction
        </a>
        <a href="#" className="block text-sm hover:underline">
          Pay as you go
        </a>
      </div>
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold">For Companies</h3>
        <a href="#" className="block text-sm hover:underline">
          Startups
        </a>
        <a href="#" className="block text-sm hover:underline">
          SMBs
        </a>
        <a href="#" className="block text-sm hover:underline">
          Enterprise
        </a>
      </div>
      <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
        Contact sales
      </button>
    </div>
  );
};

export default Navbar;
