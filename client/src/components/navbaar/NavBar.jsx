import React, { useEffect, useState } from 'react';

import { ShoppingCart, Truck, User, ChevronDown  } from 'lucide-react';
import FlyoutLink from './FlyoutLink';
import { Button } from "@material-tailwind/react";
import CategoryFlyoutContent from "./CategoryFlyoutContent";
import InfantilCategory from './InfantilCategory';
import BasicosCategory from './BasicosCategory';


import { mujerLinks, mujerbasicosLinks, mujeraccesoriosLinks } from './DataNav';
import { hombreLinks, hombrebasicosLinks, hombreaccesoriosLinks } from './DataNav';
import { ninosLinks, ninasLinks, accesoriosLinks } from './DataNav';

import mujer1 from "../../assets/images/nav/mujer1.png"
import mujer2 from "../../assets/images/nav/mujer2.png"
import hombre1 from "../../assets/images/nav/hombre1.png"
import hombre2 from "../../assets/images/nav/hombre2.png"
import nino1 from "../../assets/images/nav/nino1.png"
import nino2 from "../../assets/images/nav/nino2.png"
// Si DataNav.jsx está en src/components/Navbar/DataNav.jsx
import axios from "axios";

const Navbar = () => {
  const [user, setUser] = useState(null);


  // Verifica si hay token y obtiene el usuario autenticado
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      axios.get('http://localhost:8080/usuario', {
        headers: { Authorization: `Bearer ${accessToken}` }
      })
      .then(res => setUser(res.data))
      .catch(() => setUser(null));
    } else {
      setUser(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setUser(null);
  };






  
  return (
    <nav className="flex items-center justify-between px-[10%] shadow-md bg-white  h-[80px]  ">
      {/* Logo */}
      <a href="/">
        <div className="font-KiwiFruit text-6xl  flex ">
          <p className="text-red-600">Mix</p>
          <p className=""> &Match</p>
        </div>
      </a>

      {/* Menú principal */}
      <div className='h-full  '>

        <ul className="flex items-center h-full  text-sm font-medium gap-4 text-gray-700 font-Poppins ">
            <FlyoutLink
              href="#"
              FlyoutContent={() => (
                <CategoryFlyoutContent
                  title="Moda Mujer"
                  moda={mujerLinks}
                  basicos={mujerbasicosLinks}
                  accesorios={mujeraccesoriosLinks}
                  images={[mujer1, mujer2]}
                  buttonLabel="Ver Todo"
                  buttonHref="#"
                />
              )}
            >
            Mujer
            <ChevronDown className="w-5 h-5 cursor-pointer" />
          </FlyoutLink>

          <FlyoutLink href="#" 
          FlyoutContent={() => (
                <CategoryFlyoutContent
                  title="Moda Hombre"
                  moda={hombreLinks}
                  basicos={hombrebasicosLinks}
                  accesorios={hombreaccesoriosLinks}
                  images={[hombre1, hombre2]}
                  buttonLabel="Ver Todo"
                  buttonHref="#"
                />
              )} >
            Hombre
            <ChevronDown className="w-5 h-5 cursor-pointer" />
          </FlyoutLink> 
          <FlyoutLink href="#" 
          FlyoutContent={() => (
                <InfantilCategory
                  ninias={ninasLinks}
                  ninios={ninosLinks}
                  accesorios={accesoriosLinks}
                  img={[nino1, nino2]}
                  buttonLabel="Ver Todo"
                  buttonHref="#"
                />
              )} >
            Infantil
            <ChevronDown className="w-5 h-5 cursor-pointer" />
          </FlyoutLink>
          <FlyoutLink 
            href="#" 
            FlyoutContent={() => (
                  <BasicosCategory
                    basicosMujer={mujerbasicosLinks}
                    basicosHombre={hombrebasicosLinks}
                    accesorioMujer={mujeraccesoriosLinks}
                    accesorioHombre={hombreaccesoriosLinks}
                    img={[mujer1, mujer2]}
                    buttonLabel="Ver Todo"
                    buttonHref="#"
                  />
              )} 
            >
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
        {user ? (
          <Button
            variant="ghost"
            className='bg-red-200 hover:bg-red-300 text-[16px] text-gray-800 font-Poppins px-4 py-2 rounded h-[50px]'
            onClick={handleLogout}
          >
            Cerrar Sesión
          </Button>
        ) : (
          <Button
            as="a"
            href="/login"
            variant="ghost"
            className='bg-red-200 hover:bg-red-300 text-[16px] text-gray-800 font-Poppins px-4 py-2 rounded h-[50px]'
          >
            Iniciar Sesión
          </Button>
        )}
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
