import React, { useEffect, useState } from 'react';
import { Rocket, Users, ArrowRight, Sparkles } from 'lucide-react';
import image1 from '../assets/hero-bg-1.jpg';
import image2 from '../assets/hero-bg-2.jpg';
import image3 from '../assets/hero-bg-3.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
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
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/85 via-blue-950/40 to-black/90"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-10 opacity-10" 
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}>
      </div>

      {/* Partículas flotantes */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Contenido del Hero */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-20 text-center text-white pt-20 pb-16 md:pt-24 md:pb-20">
        
        {/* Badge superior */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full 
          bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm
          border border-cyan-400/20 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}>
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm font-medium text-cyan-300">
            Innovación que Impulsa el Futuro
          </span>
        </div>

        {/* Título principal */}
        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight mb-6 transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl">
            Transformamos
          </span>
          <span className="block mt-2 text-white drop-shadow-2xl">
            Ideas en{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Tecnología
              </span>
              {/* Línea decorativa bajo "Tecnología" */}
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0,7 Q50,0 100,7 T200,7" fill="none" stroke="url(#gradient)" strokeWidth="3" opacity="0.6"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </span>
        </h1>

        {/* Subtítulo */}
        <p className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          En{' '}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Tech Innovators
          </span>
          , diseñamos y construimos soluciones de software innovadoras
          <br className="hidden sm:inline" />
          para llevar tu negocio al siguiente nivel.
        </p>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* CTA Principal */}
          <a
            href="#servicios"
            onClick={(e) => handleSmoothScroll(e, 'Servicios')}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 
              px-8 py-4 text-base md:text-lg font-bold text-white
              bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 
              rounded-full overflow-hidden
              shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70
              transform hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10">Explora Nuestros Servicios</span>
            <Rocket className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            
            {/* Efecto de brillo animado */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full 
              bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700"></div>
          </a>

          {/* CTA Secundario */}
          <a
            href="#acerca"
            onClick={(e) => handleSmoothScroll(e, 'Acerca')}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 
              px-8 py-4 text-base md:text-lg font-bold
              bg-white/10 backdrop-blur-md text-white
              rounded-full border-2 border-white/20
              hover:bg-white/20 hover:border-white/40
              shadow-xl hover:shadow-2xl
              transform hover:scale-105 transition-all duration-300"
          >
            <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span>Conoce al Equipo</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Indicador de scroll */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex flex-col items-center gap-2 text-gray-400 animate-bounce">
            <span className="text-xs font-medium tracking-wider uppercase">Descubre más</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      </section>
  );
};

export default Hero;