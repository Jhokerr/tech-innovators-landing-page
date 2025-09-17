import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const links = [
    { id: 'Inicio', label: 'Inicio' },
    { id: 'Servicios', label: 'Servicios' },
    { id: 'Acerca', label: 'Sobre Nosotros' },
    { id: 'Testimonios', label: 'Testimonios' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-md bg-white/70 shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#Inicio"
          onClick={(e) => handleSmoothScroll(e, 'Inicio')}
          className="text-2xl md:text-3xl font-extrabold tracking-wide"
        >
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Tech
          </span>
          <span
            className={`transition-colors ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            Innovators
          </span>
        </a>

        {/* Navegación */}
        <nav>
          <ul
            className={`hidden md:flex space-x-8 text-base font-medium ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleSmoothScroll(e, link.id)}
                  className="relative transition-colors duration-300 hover:text-blue-600 
                    after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
                    after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300
                    hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Botón Contacto */}
            <li>
              <a
                href="#Contacto"
                onClick={(e) => handleSmoothScroll(e, 'Contacto')}
                className="ml-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2.5 px-6 rounded-full shadow-lg
                  hover:from-blue-700 hover:to-indigo-700 hover:shadow-blue-500/40 transform hover:scale-105 transition-all duration-300"
              >
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
