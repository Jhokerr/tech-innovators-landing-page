import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Users } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú al hacer scroll
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
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
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-xl bg-gray-900/80 shadow-lg shadow-black/20 py-3'
            : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a
              href="#Inicio"
              onClick={(e) => handleSmoothScroll(e, 'Inicio')}
              className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight hover:scale-105 transition-transform duration-300 z-50"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Tech
              </span>
              <span className="text-white">
                Innovators
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-1 xl:space-x-2">
                {links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleSmoothScroll(e, link.id)}
                      className={`relative px-4 py-2 text-sm xl:text-base font-medium transition-all duration-300 rounded-lg
                        ${scrolled ? 'text-gray-200 hover:text-white' : 'text-gray-100 hover:text-white'}
                        hover:bg-white/10 group`}
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 
                        transform -translate-x-1/2 group-hover:w-3/4 transition-all duration-300"></span>
                    </a>
                  </li>
                ))}

                {/* Desktop CTA Button */}
                <li className="ml-4">
                  <a
                    href="#Contacto"
                    onClick={(e) => handleSmoothScroll(e, 'Contacto')}
                    className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 
                      text-white font-semibold px-6 py-2.5 rounded-full overflow-hidden
                      shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50
                      transform hover:scale-105 transition-all duration-300"
                  >
                    <span className="relative z-10">Contacto</span>
                    <Rocket className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden z-50 p-2 rounded-lg bg-white/10 backdrop-blur-sm 
                hover:bg-white/20 transition-all duration-300 text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
          z-40 lg:hidden shadow-2xl transform transition-transform duration-300 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col h-full pt-24 pb-8 px-6">
          <ul className="flex flex-col space-y-1 flex-1">
            {links.map((link, index) => (
              <li
                key={link.id}
                className={`transform transition-all duration-300 ${
                  mobileMenuOpen
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleSmoothScroll(e, link.id)}
                  className="block px-6 py-4 text-lg font-medium text-gray-100 
                    hover:text-white hover:bg-white/10 rounded-xl
                    transition-all duration-300 border-l-4 border-transparent 
                    hover:border-cyan-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile CTA Buttons */}
          <div className="space-y-3 pt-6 border-t border-gray-700">
            <a
              href="#Contacto"
              onClick={(e) => handleSmoothScroll(e, 'Contacto')}
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 
                text-white font-semibold px-6 py-4 rounded-xl
                shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50
                transform hover:scale-105 transition-all duration-300"
            >
              <Rocket className="w-5 h-5" />
              Contacto
            </a>
            
            <a
              href="#Acerca"
              onClick={(e) => handleSmoothScroll(e, 'Acerca')}
              className="flex items-center justify-center gap-2 w-full bg-white/10 backdrop-blur-sm
                text-white font-medium px-6 py-4 rounded-xl border border-white/20
                hover:bg-white/20 transition-all duration-300"
            >
              <Users className="w-5 h-5" />
              Conocer Equipo
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;