// src/components/Contact.jsx

import React from 'react';

const Contact = () => {
  return (
    <section id='Contacto' className="py-20 bg-gradient-to-t from-white to-blue-50">
      <div className="container mx-auto px-6">
        {/* Contenedor principal con fondo blanco y sombra */}
        <div className="bg-white p-12 rounded-lg shadow-2xl max-w-4xl mx-auto transform -translate-y-12">
          {/* Encabezado de la Sección */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
              ¿Listo para empezar?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contáctanos para una consulta gratuita y descubre cómo podemos
              transformar tus ideas en realidad.
            </p>
          </div>

          {/* Contenedor del Formulario y Texto de Contacto */}
          <div className="flex flex-col md:flex-row gap-12">
            {/* Columna de Información de Contacto (opcional) */}
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Información de contacto
              </h3>
              <p className="text-gray-600 mb-2">
                <i className="fa-solid fa-envelope mr-2"></i> info@techinnovators.com
              </p>
              <p className="text-gray-600 mb-2">
                <i className="fa-solid fa-phone mr-2"></i> +1 (555) 123-4567
              </p>
              <p className="text-gray-600 mb-4">
                <i className="fa-solid fa-map-marker-alt mr-2"></i> 123 Calle Ficticia, Ciudad, País
              </p>
              {/* Iconos de Redes Sociales */}
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors"><i className="fa-brands fa-facebook-f text-2xl"></i></a>
                <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors"><i className="fa-brands fa-x-twitter text-2xl"></i></a>
                <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors"><i className="fa-brands fa-linkedin-in text-2xl"></i></a>
                <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors"><i className="fa-brands fa-instagram text-2xl"></i></a>
                
              </div>
            </div>

            {/* Columna del Formulario */}
            <div className="md:w-2/3">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" placeholder="Ej. Juan Pérez" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" placeholder="ejemplo@correo.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Tu mensaje</label>
                  <textarea id="message" name="message" rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" placeholder="Describe tu proyecto o consulta aquí..."></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3.5 px-6 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 ease-in-out">
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;