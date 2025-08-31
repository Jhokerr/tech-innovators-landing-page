// src/components/Header.jsx

import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault(); // 
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth' // Esta es la propiedad clave para la animación
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-8'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href='#Inicio' 
          onClick={(e) => handleSmoothScroll(e, 'Inicio')}
          className="text-xl font-bold">
          <div className="text-3xl font-extrabold text-blue-700 tracking-wide">
          Tech<span className={` ${scrolled ? 'text-gray-700' : 'text-white'}`}>Innovators</span>
        </div>
        </a>
        </div>

        {/* Navegación */}
        <nav>
          <ul
            className={`flex space-x-8 text-lg font-medium
              ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            <li>
              <a href="#Inicio" onClick={(e) => handleSmoothScroll(e, 'Inicio')} className={` text-gray-700 text-lg font-medium hover:text-blue-600 transition-all duration-300 ease-in-out relative
                       before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5
                       before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-full ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#Servicios" onClick={(e) => handleSmoothScroll(e, 'Servicios')} className={` text-gray-700 text-lg font-medium hover:text-blue-600 transition-all duration-300 ease-in-out relative
                       before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5
                       before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-full ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                Servicios
              </a>
            </li>
            <li>
              <a href="#Acerca" onClick={(e) => handleSmoothScroll(e, 'Acerca')} className={` text-gray-700 text-lg font-medium hover:text-blue-600 transition-all duration-300 ease-in-out relative
                       before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5
                       before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-full ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="#Testimonios" onClick={(e) => handleSmoothScroll(e, 'Testimonios')} className={` text-gray-700 text-lg font-medium hover:text-blue-600 transition-all duration-300 ease-in-out relative
                       before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5
                       before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-full ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                Testimonios
              </a>
            </li>
            <li>
              <a href="#Contacto" onClick={(e) => handleSmoothScroll(e, 'Contacto')} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2.5 px-8 rounded-full shadow-lg
                     hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 ease-in-out 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">          
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;