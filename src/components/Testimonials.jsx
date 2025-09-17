// src/components/Testimonials.jsx

import React from 'react';
import anaAvatar from '../assets/Perfil.jpg';
import luisAvatar from '../assets/Perfil.jpg';
import mariaAvatar from '../assets/Perfil.jpg';

// Datos de los testimonios con avatares
const testimonialsData = [
  {
    avatar: anaAvatar,
    quote:
      "Trabajar con Tech Innovators fue una experiencia transformadora. Su enfoque en la innovación y su capacidad para entender nuestras necesidades superaron todas las expectativas. ¡Son verdaderos líderes en la industria!",
    author: "Ana G.",
    position: "CEO, Innova Solutions",
  },
  {
    avatar: luisAvatar,
    quote:
      "La consultoría que recibimos fue de primer nivel. Nos ayudaron a optimizar nuestros procesos y a implementar una solución que mejoró drásticamente nuestra eficiencia. Su equipo es extremadamente profesional y capacitado.",
    author: "Luis R.",
    position: "Director de Tecnología, Grupo Futura",
  },
  {
    avatar: mariaAvatar,
    quote:
      "Gracias a su equipo, logramos lanzar nuestra app móvil en tiempo récord. La atención al detalle y el soporte continuo que nos brindaron fueron invaluables. Los recomendamos sin dudarlo.",
    author: "María V.",
    position: "Fundadora, App Connect",
  },
];

const Testimonials = () => {
  return (
    <section
      id="Testimonios"
      className="relative bg-gradient-to-b from-blue-600 via-blue-700 to-blue-900 py-32"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Testimonios de Clientes
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Descubre por qué nuestros clientes confían en nosotros para llevar
            sus proyectos al éxito.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-10 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl 
                         transform hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500"
            >
              {/* Ícono de comillas */}
              <div className="absolute -top-6 -left-6 text-blue-300 opacity-20 text-9xl select-none">
                “
              </div>

              {/* Avatar */}
              <div className="flex flex-col items-center mb-6 relative z-10">
                <img
                  src={testimonial.avatar}
                  alt={`Foto de ${testimonial.author}`}
                  className="w-24 h-24 rounded-full object-cover mb-4 ring-4 ring-white shadow-md"
                />
                <div className="text-center">
                  <div className="font-bold text-lg text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-blue-200 text-sm">
                    {testimonial.position}
                  </div>
                </div>
              </div>

              {/* Cita */}
              <p className="relative z-10 text-gray-100 text-lg italic leading-relaxed">
                “{testimonial.quote}”
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Efecto decorativo sutil en el fondo */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
    </section>
  );
};

export default Testimonials;
