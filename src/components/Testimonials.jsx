import React, { useState, useEffect, useRef } from 'react';
import { Quote, Star, CheckCircle, Sparkles, ArrowRight, Award } from 'lucide-react';
import anaAvatar from '../assets/Perfil.jpg';
import luisAvatar from '../assets/Perfil.jpg';
import mariaAvatar from '../assets/Perfil.jpg';

const Testimonials = () => {
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

  const testimonialsData = [
    {
      avatar: anaAvatar,
      quote:
        "Trabajar con Tech Innovators fue una experiencia transformadora. Su enfoque en la innovación y su capacidad para entender nuestras necesidades superaron todas las expectativas. ¡Son verdaderos líderes en la industria!",
      author: "Ana G.",
      position: "CEO",
      company: "Innova Solutions",
      rating: 5,
      verified: true,
      color: "from-blue-500 to-cyan-400"
    },
    {
      avatar: luisAvatar,
      quote:
        "La consultoría que recibimos fue de primer nivel. Nos ayudaron a optimizar nuestros procesos y a implementar una solución que mejoró drásticamente nuestra eficiencia. Su equipo es extremadamente profesional y capacitado.",
      author: "Luis R.",
      position: "Director de Tecnología",
      company: "Grupo Futura",
      rating: 5,
      verified: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      avatar: mariaAvatar,
      quote:
        "Gracias a su equipo, logramos lanzar nuestra app móvil en tiempo récord. La atención al detalle y el soporte continuo que nos brindaron fueron invaluables. Los recomendamos sin dudarlo.",
      author: "María V.",
      position: "Fundadora",
      company: "App Connect",
      rating: 5,
      verified: true,
      color: "from-cyan-500 to-blue-600"
    },
  ];

  return (
    <section
      id="Testimonios"
      className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-20 md:py-32 overflow-hidden"
      ref={sectionRef}
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}>
      </div>

      {/* Partículas flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
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
            bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm
            border border-cyan-400/20">
            <Award className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-300">Lo que Dicen Nuestros Clientes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Testimonios que{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Inspiran Confianza
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Descubre por qué empresas líderes confían en nosotros para transformar
            sus ideas en soluciones tecnológicas de alto impacto.
          </p>

          {/* Stats rápidos */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-1">50+</div>
              <div className="text-sm text-gray-400">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-1">4.9</div>
              <div className="text-sm text-gray-400">Rating Promedio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-1">100%</div>
              <div className="text-sm text-gray-400">Recomendación</div>
            </div>
          </div>
        </div>

        {/* Grid de Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative p-8 rounded-2xl 
                backdrop-blur-xl bg-white/10 border border-white/20 
                shadow-xl hover:shadow-2xl
                transform hover:-translate-y-2 transition-all duration-500
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Efecto de brillo en hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${testimonial.color} 
                opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              {/* Icono de comillas decorativo */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 
                rounded-full flex items-center justify-center shadow-lg
                transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <Quote className="w-8 h-8 text-white" />
              </div>

              {/* Badge verificado */}
              {testimonial.verified && (
                <div className="absolute -top-3 -right-3 bg-green-500 rounded-full p-2 shadow-lg
                  transform group-hover:scale-110 transition-all duration-300">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              )}

              {/* Avatar y autor */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={`Foto de ${testimonial.author}`}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-white/20 shadow-lg
                      transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Glow effect en el avatar */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${testimonial.color} 
                    opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500`}></div>
                </div>
                
                <div className="flex-1">
                  <div className="font-bold text-lg text-white mb-1 flex items-center gap-2">
                    {testimonial.author}
                    {testimonial.verified && (
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                    )}
                  </div>
                  <div className="text-cyan-300 text-sm font-medium">
                    {testimonial.position}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Estrellas de rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 fill-yellow-400 text-yellow-400 
                      transform group-hover:scale-110 transition-all duration-300`}
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>

              {/* Cita */}
              <p className="relative z-10 text-gray-200 text-sm md:text-base leading-relaxed
                group-hover:text-white transition-colors duration-300">
                "{testimonial.quote}"
              </p>

              {/* Línea decorativa inferior */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${testimonial.color} 
                transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl`}>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`mt-16 md:mt-20 text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 rounded-2xl 
            bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 
            backdrop-blur-xl border border-cyan-400/20">
            <div className="text-center sm:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center justify-center sm:justify-start gap-2">
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ¿Listo para ser nuestro próximo caso de éxito?
              </h3>
              <p className="text-gray-300">
                Únete a las empresas que ya transformaron su negocio con nosotros
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
              <span>Comienza Ahora</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Testimonials;