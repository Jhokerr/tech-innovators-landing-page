// src/components/About.jsx

import React from 'react';
import teamImage from '../assets/about-us.jpg';

const About = () => {


// Función de desplazamiento suave
  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth', // clave para animación
      });
    }
  };

  return (
    <section id="Acerca" className="relative bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="pt-20 pb-40 flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Columna de la Imagen */}
          <div className="lg:w-1/2 relative group">
            {/* Efecto Glow detrás de la imagen */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition duration-500"></div>
            <img
              src={teamImage}
              alt="Equipo de Tech Innovators"
              className="relative rounded-2xl shadow-2xl w-full h-auto transform transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* Columna del Contenido */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Acerca de <span className="text-blue-600">Nosotros</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              En <span className="font-semibold text-gray-800">Tech Innovators</span>, somos un equipo de mentes creativas y expertos en tecnología dedicados a transformar ideas audaces en realidades digitales.
              Desde nuestra fundación, nos comprometemos a ofrecer soluciones de software de vanguardia que superan las expectativas de nuestros clientes.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Creemos en la innovación, el diseño centrado en el usuario y la colaboración transparente. Cada proyecto es una oportunidad para aprender, crecer y forjar alianzas duraderas.
            </p>

            {/* Métricas / Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10">
              <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <h3 className="text-3xl font-extrabold text-blue-600">100+</h3>
                <p className="text-gray-700 mt-2">Proyectos</p>
              </div>
              <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <h3 className="text-3xl font-extrabold text-blue-600">50+</h3>
                <p className="text-gray-700 mt-2">Clientes</p>
              </div>
              <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <h3 className="text-3xl font-extrabold text-blue-600">10+</h3>
                <p className="text-gray-700 mt-2">Años</p>
              </div>
            </div>

            {/* Botón */}
            <a
              href="#contacto"
              onClick={(e) => handleSmoothScroll(e, 'Contacto')}
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold py-3 px-10 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out"
            >
              Conéctate con Nosotros
            </a>
          </div>
        </div>
      </div>

      {/* SVG inferior */}
      <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full text-blue-600"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path
            fillOpacity="1"
            d="M0,128L80,149.3C160,171,320,213,480,213.3C640,213,800,171,960,149.3C1120,128,1280,128,1360,128L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default About;
