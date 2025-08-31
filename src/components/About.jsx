// src/components/About.jsx

import React from 'react';
import teamImage from '../assets/about-us.jpg';

const About = () => {
  return (
    <section id="Acerca" className=" bg-white  "> {/* Añade estas clases */}
      <div className="container mx-auto px-6">
        <div className=" pt-20 pb-60 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Columna de la Imagen */}
          <div className="lg:w-1/2 wow animate__animated animate__fadeInLeft">
            <img
              src={teamImage}
              alt="Equipo de Tech Innovators"
              className="rounded-lg shadow-2xl w-full h-auto transform transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Columna del Contenido */}
          <div className="lg:w-1/2 text-center lg:text-left wow animate__animated animate__fadeInRight">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
              Acerca de Nosotros
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              En **Tech Innovators**, somos un equipo de mentes creativas y expertos en tecnología dedicados a transformar ideas audaces en realidades digitales. Desde nuestra fundación, nos hemos comprometido a ofrecer soluciones de software de vanguardia que no solo satisfacen las necesidades de nuestros clientes, sino que superan sus expectativas.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Creemos firmemente en el poder de la innovación, el diseño centrado en el usuario y la colaboración transparente. Cada proyecto es una oportunidad para aprender, crecer y forjar alianzas duraderas. Nuestro éxito se mide por el éxito de nuestros clientes.
            </p>
            <a
              href="#contacto"
              className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Conéctate con Nosotros
            </a>
          </div>
        </div>
      </div>

      <div className="bottom-0 left-0 w-full h-24 overflow-hidden">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full text-blue-600"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path
            fillOpacity="1"
            d="M0,128L80,149.3C160,171,320,213,480,213.3C640,213,800,171,960,149.3C1120,128,1280,128,1360,128L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

    </section>
  );
};

export default About;