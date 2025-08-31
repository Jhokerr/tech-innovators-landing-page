import React from 'react';
import image1 from '../assets/hero-bg-1.jpg';
import image2 from '../assets/hero-bg-2.jpg';
import image3 from '../assets/hero-bg-3.jpg';

const Hero = () => {
  return (
    <section id='Inicio' className="relative bg-black w-full overflow-hidden min-h-screen flex items-center justify-center">
      {/* Contenedor del Carrusel de Fondo */}
      <div className="absolute inset-0 z-0">
        <div className="hero-background-carousel  w-full h-full">
          {/* Añadimos clases para la animación */}
          <div className="hero-slide animated-slide" style={{ backgroundImage: `url(${image1})` }}></div>
          <div className="hero-slide animated-slide" style={{ backgroundImage: `url(${image2})` }}></div>
          <div className="hero-slide animated-slide" style={{ backgroundImage: `url(${image3})` }}></div>
        </div>
      </div>

      {/* Superposición de Oscuridad y Degradado */}
      <div className="absolute inset-0 z-10 from-black bg-black opacity-90"></div>

      {/* Contenido del Hero */}
      <div className="container mx-auto px-6 z-20 text-center text-white">
        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          Transformamos <br className="hidden md:inline" /> Ideas en Tecnología
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
          En Tech Innovators, diseñamos y construimos soluciones de software innovadoras
          para llevar tu negocio al siguiente nivel.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <a
            href="#servicios"
            className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Explora Nuestros Servicios
          </a>
          <a
            href="#acerca"
            className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full border border-blue-600 shadow-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Conoce al Equipo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;