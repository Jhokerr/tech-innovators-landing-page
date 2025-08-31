// src/components/Testimonials.jsx

import React from 'react';
import anaAvatar from '../assets/Perfil.jpg';    // Asegúrate de que las rutas son correctas
import luisAvatar from '../assets/Perfil.jpg';
import mariaAvatar from '../assets/Perfil.jpg';

// Datos de los testimonios con avatares
const testimonialsData = [
  {
    avatar: anaAvatar,
    quote: "Trabajar con Tech Innovators fue una experiencia transformadora. Su enfoque en la innovación y su capacidad para entender nuestras necesidades superaron todas las expectativas. ¡Son verdaderos líderes en la industria!",
    author: "Ana G.",
    position: "CEO, Innova Solutions"
  },
  {
    avatar: luisAvatar,
    quote: "La consultoría que recibimos fue de primer nivel. Nos ayudaron a optimizar nuestros procesos y a implementar una solución que mejoró drásticamente nuestra eficiencia. Su equipo es extremadamente profesional y capacitado.",
    author: "Luis R.",
    position: "Director de Tecnología, Grupo Futura"
  },
  {
    avatar: mariaAvatar,
    quote: "Gracias a su equipo, logramos lanzar nuestra app móvil en tiempo récord. La atención al detalle y el soporte continuo que nos brindaron fueron invaluables. Los recomendamos sin dudarlo.",
    author: "María V.",
    position: "Fundadora, App Connect"
  },
];

const Testimonials = () => {
  return (
    <section id='Testimonios' className="bg-linear-to-t from-blue-50 via-blue-600 to-blue-600 py-40">
      <div className="container mx-auto px-6">
        {/* Encabezado de la Sección */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Testimonios de Clientes
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Descubre por qué nuestros clientes confían en nosotros para llevar sus proyectos al éxito.
          </p>
        </div>

        {/* Contenedor de las Tarjetas de Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-xl shadow-lg
                         bg-gradient-to-br from-gray-50 to-gray-100
                         transform hover:-translate-y-2 transition-transform duration-300 ease-in-out"
            >
              {/* Ícono de comillas para un toque de diseño */}
              <svg className="absolute top-6 left-6 w-12 h-12 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zM22 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zM12 22c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zM22 22c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
              </svg>
              {/* Contenedor del Avatar y la información */}
              <div className="relative z-10 flex flex-col items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={`Foto de perfil de ${testimonial.author}`}
                  className="w-24 h-24 rounded-full object-cover mb-4 ring-4 ring-white shadow-md"
                />
                <div className="text-center">
                  <div className="font-bold text-lg text-gray-800">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.position}
                  </div>
                </div>
              </div>

              {/* Texto de la cita */}
              <p className="relative z-10 text-xl font-light italic text-gray-700">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;