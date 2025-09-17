import React from 'react';
import image1 from '../assets/hero-bg-1.jpg';
import image2 from '../assets/hero-bg-2.jpg';
import image3 from '../assets/hero-bg-3.jpg';

const Hero = () => {


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
    <section
      id="Inicio"
      className="relative bg-black w-full overflow-hidden min-h-screen flex items-center justify-center"
    >
      {/* Carrusel de Fondo */}
      <div className="absolute inset-0 z-0">
        <div className="hero-background-carousel w-full h-full">
          <div className="hero-slide" style={{ backgroundImage: `url(${image1})` }}></div>
          <div className="hero-slide" style={{ backgroundImage: `url(${image2})` }}></div>
          <div className="hero-slide" style={{ backgroundImage: `url(${image3})` }}></div>
        </div>
      </div>

      {/* Overlay mejorado con gradiente */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>

      {/* Contenido del Hero */}
      <div className="container mx-auto px-6 z-20 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6 drop-shadow-lg animate-fadeUp">
          <span className="text-blue-500">Transformamos</span>{" "}
          <br className="hidden md:inline" />
          Ideas en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Tecnología</span>
        </h1>

        <p className="text-base md:text-xl mb-10 max-w-2xl mx-auto drop-shadow-md text-gray-200 animate-fadeUp animation-delay-200">
          En <span className="font-semibold text-blue-400">Tech Innovators</span>, diseñamos y construimos soluciones de software innovadoras
          para llevar tu negocio al siguiente nivel.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 animate-fadeUp animation-delay-400">
          <a
            href="#servicios"
            onClick={(e) => handleSmoothScroll(e, 'Servicios')}
            className="bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:from-blue-700 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            🚀 Explora Nuestros Servicios
          </a>
          <a
            href="#acerca"
            onClick={(e) => handleSmoothScroll(e, 'Acerca')}
            className="bg-white/90 backdrop-blur-sm text-blue-700 font-semibold py-3 px-8 rounded-full border border-blue-300 shadow-lg hover:bg-white transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            👥 Conoce al Equipo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
