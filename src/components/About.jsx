import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Users, Calendar, ArrowRight, Award, Target, Zap } from 'lucide-react';
import teamImage from '../assets/about-us.jpg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0 });
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  // Intersection Observer para animaciones on-scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
          startCounting();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animación de contadores
  const startCounting = () => {
    const duration = 2000;
    const targets = { projects: 100, clients: 50, years: 10 };
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
        years: Math.floor(targets.years * progress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounters(targets);
      }
    }, stepDuration);
  };

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

  const stats = [
    { icon: Briefcase, value: counters.projects, label: 'Proyectos Completados', suffix: '+' },
    { icon: Users, value: counters.clients, label: 'Clientes Satisfechos', suffix: '+' },
    { icon: Calendar, value: counters.years, label: 'Años de Experiencia', suffix: '+' },
  ];

  const features = [
    {
      icon: Award,
      title: 'Calidad Premium',
      description: 'Soluciones de software de clase mundial'
    },
    {
      icon: Target,
      title: 'Enfoque Centrado',
      description: 'Diseño pensado en el usuario final'
    },
    {
      icon: Zap,
      title: 'Innovación Constante',
      description: 'Tecnologías de última generación'
    }
  ];

  return (
    <section id="Acerca" className="relative bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden" ref={sectionRef}>
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-cyan-100 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16 md:py-24 lg:py-32">
          
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20">
            
            {/* Columna de la Imagen */}
            <div className={`lg:w-1/2 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              <div className="relative group">
                {/* Glow effect mejorado */}
                <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-700"></div>
                
                {/* Frame decorativo */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-10"></div>
                
                {/* Imagen principal */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={teamImage}
                    alt="Equipo de Tech Innovators"
                    className="w-full h-auto transform transition-all duration-700 group-hover:scale-110"
                  />
                  {/* Overlay con gradiente en hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Badge flotante */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 transform group-hover:scale-110 transition-transform duration-500">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">100%</p>
                      <p className="text-sm text-gray-600">Dedicación</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna del Contenido */}
            <div className={`lg:w-1/2 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}>
              
              {/* Badge superior */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full 
                bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-blue-700">Sobre Nosotros</span>
              </div>

              {/* Título */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Acerca de{' '}
                <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Nosotros
                </span>
              </h2>

              {/* Descripción */}
              <div className="space-y-4 mb-8">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  En{' '}
                  <span className="font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    Tech Innovators
                  </span>
                  , somos un equipo de mentes creativas y expertos en tecnología dedicados a transformar ideas audaces en realidades digitales. Desde nuestra fundación, nos comprometemos a ofrecer soluciones de software de vanguardia que superan las expectativas de nuestros clientes.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Creemos en la innovación, el diseño centrado en el usuario y la colaboración transparente. Cada proyecto es una oportunidad para aprender, crecer y forjar alianzas duraderas.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 
                      hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                  >
                    <feature.icon className="w-8 h-8 text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="font-bold text-gray-900 text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* Métricas / Counters */}
              <div className="grid grid-cols-3 gap-4 lg:gap-6 mb-10">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group relative p-6 rounded-2xl bg-white border-2 border-gray-100 
                      hover:border-blue-300 shadow-md hover:shadow-xl 
                      transform hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Icon background */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 
                      rounded-full flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                      <stat.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                      {stat.value}{stat.suffix}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-700 font-medium leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Botón CTA */}
              <a
                href="#contacto"
                onClick={(e) => handleSmoothScroll(e, 'Contacto')}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 
                  text-white font-bold py-4 px-8 rounded-full 
                  shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50
                  transform hover:scale-105 transition-all duration-300"
              >
                <span>Conéctate con Nosotros</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                
                {/* Efecto de brillo */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SVG Wave mejorado */}
      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0891b2" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            fillOpacity="1"
            d="M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,154.7C672,149,768,171,864,165.3C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default About;