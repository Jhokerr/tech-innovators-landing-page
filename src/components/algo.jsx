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

  return (
    <header
      
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-8'}`}
    >
      <div className="container mx-auto flex justify-between items-center  md:px-12r">
        {/* Logo */}
        <a href='#Inicio' className="text-xl font-bold">
          <div className="text-3xl font-extrabold text-blue-700 tracking-wide">
          Tech<span className={` ${scrolled ? 'text-gray-700' : 'text-white'}`}>Innovators</span>
        </div>
        </a>

        {/* Navegación */}
        <nav className="hidden md:flex space-x-10">
          <ul
            className={`flex space-x-8 text-lg font-medium
              ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            <li>
              <a href="#Inicio" className={` text-gray-700 text-lg font-medium hover:text-blue-300 transition-all duration-300 ease-in-out relative
                       before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5
                       before:bg-blue-300 before:transition-all before:duration-300 hover:before:w-full ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#Servicios" className={` text-gray-700 text-lg font-medium hover:text-blue-300 transition-all duration-300 ease-in-out relative
                       before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5
                       before:bg-blue-300 before:transition-all before:duration-300 hover:before:w-full ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                Servicios
              </a>
            </li>
            <li>
              <a href="#Sobre Nosotros" className={` text-gray-700 text-lg font-medium hover:text-blue-300 transition-all duration-300 ease-in-out relative
                       before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5
                       before:bg-blue-300 before:transition-all before:duration-300 hover:before:w-full ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="#Testimonios" className={` text-gray-700 text-lg font-medium hover:text-blue-300 transition-all duration-300 ease-in-out relative
                       before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5
                       before:bg-blue-300 before:transition-all before:duration-300 hover:before:w-full ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                Testimonios
              </a>
            </li>
            <li>
              <a href="#Contacto" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2.5 px-8 rounded-full shadow-lg
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