import React from 'react';

const Services = () => {
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
    <section id="Servicios" className="py-24 relative bg-gradient-to-b from-black via-blue-900 to-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Servicios</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Soluciones tecnológicas diseñadas para impulsar el éxito de tu empresa.
          </p>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40 animate-fadeUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
