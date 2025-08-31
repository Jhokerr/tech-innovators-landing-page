// src/components/Footer.jsx

import React from 'react';

// Se puede crear una función de desplazamiento suave compartida en un archivo utilitario si se reutiliza mucho.
// Por ahora, la incluimos directamente para mostrar la implementación.
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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-16 relative overflow-hidden">
      {/* Capa de efecto visual sobre el fondo */}
      <div className="absolute inset-0 z-0 bg-blue-900 opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-700 pb-10 mb-10">
          {/* Columna 1: Logo y Descripción de la Empresa */}
          <div className="text-center md:text-left">
            <h3 className="text-4xl font-extrabold text-white mb-4">Tech Innovators</h3>
            <p className="text-base leading-relaxed text-gray-400 mb-4">
              Impulsando la innovación tecnológica con soluciones de software que definen el futuro.
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-500 transform hover:scale-110 transition-transform duration-300 ease-in-out">
                <i className="fa-brands fa-facebook-f text-2xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transform hover:scale-110 transition-transform duration-300 ease-in-out">
                <i className="fa-brands fa-x-twitter text-2xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transform hover:scale-110 transition-transform duration-300 ease-in-out">
                <i className="fa-brands fa-linkedin-in text-2xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transform hover:scale-110 transition-transform duration-300 ease-in-out">
                <i className="fa-brands fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold text-white mb-5">Navegación</h4>
            <ul className="space-y-3 text-base">
              <li><a href="#Inicio" onClick={(e) => handleSmoothScroll(e, 'Inicio')} className="hover:text-white hover:ml-2 transition-all duration-300 ease-in-out">Inicio</a></li>
              <li><a href="#Servicios" onClick={(e) => handleSmoothScroll(e, 'Servicios')} className="hover:text-white hover:ml-2 transition-all duration-300 ease-in-out">Servicios</a></li>
              <li><a href="#Sobre Nosotros" onClick={(e) => handleSmoothScroll(e, 'Sobre Nosotros')} className="hover:text-white hover:ml-2 transition-all duration-300 ease-in-out">Acerca de</a></li>
              <li><a href="#Testimonios" onClick={(e) => handleSmoothScroll(e, 'Testimonios')} className="hover:text-white hover:ml-2 transition-all duration-300 ease-in-out">Testimonios</a></li>
              <li><a href="#Contacto" onClick={(e) => handleSmoothScroll(e, 'Contacto')} className="hover:text-white hover:ml-2 transition-all duration-300 ease-in-out">Contacto</a></li>
            </ul>
          </div>

          {/* Columna 3: Servicios Destacados (Ejemplo) */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold text-white mb-5">Servicios Clave</h4>
            <ul className="space-y-3 text-base">
              <li><a href="#Servicios" onClick={(e) => handleSmoothScroll(e, 'Servicios')} className="hover:text-white hover:ml-2 transition-all duration-300 ease-in-out">Desarrollo Web</a></li>
              <li><a href="#Servicios" onClick={(e) => handleSmoothScroll(e, 'Servicios')} className="hover:text-white hover:ml-2 transition-all duration-300 ease-in-out">Apps Móviles</a></li>
              <li><a href="#Servicios" onClick={(e) => handleSmoothScroll(e, 'Servicios')} className="hover:text-white hover:ml-2 transition-all duration-300 ease-in-out">Consultoría Cloud</a></li>
              <li><a href="#Servicios" onClick={(e) => handleSmoothScroll(e, 'Servicios')} className="hover:text-white hover:ml-2 transition-all duration-300 ease-in-out">IA y Datos</a></li>
              <li><a href="#Servicios" onClick={(e) => handleSmoothScroll(e, 'Servicios')} className="hover:text-white hover:ml-2 transition-all duration-300 ease-in-out">Ciberseguridad</a></li>
            </ul>
          </div>

          {/* Columna 4: Contacto e Ubicación */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold text-white mb-5">Contáctanos</h4>
            <p className="text-base leading-relaxed text-gray-400 mb-3">
              <i className="fa-solid fa-map-marker-alt mr-3 text-blue-400"></i>
              Av. Charles de Gaulle, Plaza El Faro, Local 123, <br/> Santo Domingo Este, Rep. Dominicana.
            </p>
            <p className="text-base leading-relaxed text-gray-400 mb-3">
              <i className="fa-solid fa-phone-alt mr-3 text-blue-400"></i>
              +1 (809) 555-1234
            </p>
            <p className="text-base leading-relaxed text-gray-400">
              <i className="fa-solid fa-envelope mr-3 text-blue-400"></i>
              info@techinnovators.com
            </p>
          </div>
        </div>

        {/* Sección de Copyright */}
        <div className="text-center text-sm pt-6 text-gray-500">
          &copy; {currentYear} Tech Innovators. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;