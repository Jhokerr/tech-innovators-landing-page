// src/components/Services.jsx

import React from 'react';

const Services = () => {
  // Array de objetos con la información de cada servicio
  const servicesList = [
    {
      icon: "fa-solid fa-code",
      title: "Desarrollo Web",
      description: "Creamos sitios web y aplicaciones robustas, escalables y orientadas al rendimiento, adaptadas a las necesidades de tu negocio."
    },
    {
      icon: "fa-solid fa-mobile-alt",
      title: "Aplicaciones Móviles",
      description: "Diseñamos y desarrollamos aplicaciones nativas y multiplataforma para iOS y Android, con una experiencia de usuario excepcional."
    },
    {
      icon: "fa-solid fa-cloud",
      title: "Consultoría Cloud",
      description: "Te ayudamos a migrar, optimizar y gestionar tu infraestructura en la nube, garantizando seguridad y eficiencia."
    },
    {
      icon: "fa-solid fa-robot",
      title: "Inteligencia Artificial",
      description: "Implementamos soluciones de IA y Machine Learning para automatizar procesos y obtener insights valiosos de tus datos."
    },
    {
      icon: "fa-solid fa-shield-alt",
      title: "Ciberseguridad",
      description: "Protegemos tus activos digitales con auditorías de seguridad, pentesting y estrategias de defensa robustas."
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "Análisis de Datos",
      description: "Transformamos tus datos en información procesable para que tomes decisiones estratégicas y orientadas al crecimiento."
    },
  ];

  return (
    <section id="Servicios" className="py-30  bg-linear-to-t from-white via-blue-600 to-blue-600">
      <div className="container mx-auto px-6">
        {/* Encabezado de la Sección */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Ofrecemos un amplio portafolio de soluciones tecnológicas diseñadas para
            impulsar el éxito de tu empresa.
          </p>
        </div>

        {/* Cuadrícula de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer text-center"
            >
              <div className="text-blue-600 text-5xl mb-4">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;