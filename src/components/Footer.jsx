// src/components/Footer.jsx
import React from "react";

const handleSmoothScroll = (event, targetId) => {
  event.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-20 overflow-hidden">
      {/* Fondo suave para profundidad */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 opacity-70"></div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-700 pb-10 mb-10">
          {/* Columna 1: Logo y descripción */}
          <div className="text-center md:text-left space-y-4">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">
              Tech Innovators
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Impulsando la innovación tecnológica con soluciones de software que definen el futuro.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              {["facebook-f", "x-twitter", "linkedin-in", "instagram"].map((icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transform hover:scale-110 transition-transform duration-300"
                >
                  <i className={`fa-brands fa-${icon} text-xl md:text-2xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div className="text-center md:text-left space-y-4">
            <h4 className="text-xl font-semibold text-white mb-4">Navegación</h4>
            <ul className="space-y-2">
              {[
                { name: "Inicio", id: "Inicio" },
                { name: "Servicios", id: "Servicios" },
                { name: "Acerca de", id: "Acerca" },
                { name: "Testimonios", id: "Testimonios" },
                { name: "Contacto", id: "Contacto" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleSmoothScroll(e, link.id)}
                    className="hover:text-white hover:ml-2 transition-all duration-300 ease-in-out"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Servicios Destacados */}
          <div className="text-center md:text-left space-y-4">
            <h4 className="text-xl font-semibold text-white mb-4">Servicios Clave</h4>
            <ul className="space-y-2">
              {[
                "Desarrollo Web",
                "Apps Móviles",
                "Consultoría Cloud",
                "IA y Datos",
                "Ciberseguridad",
              ].map((service, idx) => (
                <li key={idx}>
                  <a
                    href="#Servicios"
                    onClick={(e) => handleSmoothScroll(e, "Servicios")}
                    className="hover:text-white hover:ml-2 transition-all duration-300 ease-in-out"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className="text-center md:text-left space-y-4">
            <h4 className="text-xl font-semibold text-white mb-4">Contáctanos</h4>
            <p className="text-gray-400 flex items-center gap-2">
              <i className="fa-solid fa-map-marker-alt text-blue-500"></i>
              Av. Charles de Gaulle, Plaza El Faro, Local 123, Santo Domingo Este
            </p>
            <p className="text-gray-400 flex items-center gap-2">
              <i className="fa-solid fa-phone-alt text-blue-500"></i>
              +1 (809) 555-1234
            </p>
            <p className="text-gray-400 flex items-center gap-2">
              <i className="fa-solid fa-envelope text-blue-500"></i>
              info@techinnovators.com
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm pt-6">
          &copy; {currentYear} Tech Innovators. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
