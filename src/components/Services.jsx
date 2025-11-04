import React, { useState, useEffect, useRef } from 'react';
import { Code, Smartphone, Cloud, Brain, Shield, TrendingUp, Sparkles, ArrowRight, Check } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const servicesList = [
    {
      icon: Code,
      title: "Desarrollo Web",
      description: "Creamos sitios web y aplicaciones robustas, escalables y orientadas al rendimiento, adaptadas a las necesidades de tu negocio.",
      features: ["React & Next.js", "Performance optimizado", "SEO avanzado"],
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Móviles",
      description: "Diseñamos y desarrollamos aplicaciones nativas y multiplataforma para iOS y Android, con una experiencia de usuario excepcional.",
      features: ["iOS & Android", "React Native", "UX Premium"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "Consultoría Cloud",
      description: "Te ayudamos a migrar, optimizar y gestionar tu infraestructura en la nube, garantizando seguridad y eficiencia.",
      features: ["AWS & Azure", "Migración segura", "Optimización"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Brain,
      title: "Inteligencia Artificial",
      description: "Implementamos soluciones de IA y Machine Learning para automatizar procesos y obtener insights valiosos de tus datos.",
      features: ["ML & Deep Learning", "Automatización", "Predicciones"],
      color: "from-violet-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Ciberseguridad",
      description: "Protegemos tus activos digitales con auditorías de seguridad, pentesting y estrategias de defensa robustas.",
      features: ["Pentesting", "Auditorías", "Protección 24/7"],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Análisis de Datos",
      description: "Transformamos tus datos en información procesable para que tomes decisiones estratégicas y orientadas al crecimiento.",
      features: ["Big Data", "Visualización", "Business Intelligence"],
      color: "from-green-500 to-emerald-500"
    },
  ];

  return (
    <section 
      id="Servicios" 
      className="py-20 md:py-32 relative bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900 text-white overflow-hidden"
      ref={sectionRef}
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}>
      </div>

      {/* Partículas flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full 
            bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm
            border border-cyan-400/20">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-300">Nuestros Servicios</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Soluciones{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Tecnológicas
            </span>
            <br className="hidden sm:inline" />
            para tu Éxito
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transformamos desafíos en oportunidades con tecnología de vanguardia
            y un equipo experto dedicado a impulsar tu negocio.
          </p>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative bg-gray-800/40 backdrop-blur-xl rounded-2xl p-6 lg:p-8 
                border border-gray-700/50 overflow-hidden
                transition-all duration-500 hover:border-cyan-400/50
                hover:shadow-2xl hover:shadow-cyan-500/20
                transform hover:-translate-y-2
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Efecto de brillo en hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 
                group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Badge numérico */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full 
                bg-gray-900/50 backdrop-blur-sm border border-gray-700
                flex items-center justify-center text-xs font-bold text-gray-400">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Icono principal */}
              <div className={`relative w-16 h-16 lg:w-20 lg:h-20 mb-6 rounded-2xl 
                bg-gradient-to-br ${service.color} 
                flex items-center justify-center
                shadow-lg shadow-black/30
                transform group-hover:scale-110 group-hover:rotate-3
                transition-all duration-500`}
              >
                <service.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                
                {/* Efecto de pulso */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} 
                  animate-ping opacity-0 group-hover:opacity-20`}></div>
              </div>

              {/* Contenido */}
              <div className="relative">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 
                  group-hover:text-transparent group-hover:bg-clip-text 
                  group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-blue-400
                  transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-sm lg:text-base text-gray-400 mb-6 leading-relaxed 
                  group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-500 
                        group-hover:text-gray-400 transition-colors duration-300"
                    >
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.color} 
                        flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`group/btn relative inline-flex items-center gap-2 
                    px-5 py-2.5 rounded-lg font-semibold
                    bg-gradient-to-r ${service.color} 
                    text-white shadow-lg
                    opacity-0 group-hover:opacity-100
                    transform translate-y-2 group-hover:translate-y-0
                    transition-all duration-500 overflow-hidden`}
                >
                  <span className="relative z-10">Saber más</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  
                  {/* Efecto de brillo en el botón */}
                  <div className="absolute inset-0 bg-white/20 transform -translate-x-full 
                    group-hover/btn:translate-x-full transition-transform duration-700"></div>
                </button>
              </div>

              {/* Línea decorativa inferior */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} 
                transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section inferior */}
        <div className={`mt-16 md:mt-20 text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl 
            bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 
            backdrop-blur-xl border border-cyan-400/20">
            <div className="text-center sm:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                ¿No encuentras lo que buscas?
              </h3>
              <p className="text-gray-400">
                Contáctanos y crearemos una solución personalizada para ti
              </p>
            </div>
            <a
              href="#Contacto"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('Contacto');
                if (target) {
                  window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }}
              className="group inline-flex items-center gap-2 px-8 py-4 
                bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 
                text-white font-bold rounded-full
                hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700
                transform hover:scale-105 transition-all duration-300
                shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 whitespace-nowrap"
            >
              <span>Hablar con un Experto</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

   
    </section>
  );
};

export default Services;