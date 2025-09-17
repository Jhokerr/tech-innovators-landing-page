import React, { useState } from "react";

const Contact = () => {
  // Estados del formulario
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showModal, setShowModal] = useState(false);

  // Actualizar estado al escribir
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (name && email && message) {
      setShowModal(true); // mostrar modal si todo está lleno
      setFormData({ name: "", email: "", message: "" }); // opcional: limpiar campos
    } else {
      alert("Por favor, completa todos los campos antes de enviar."); // validación simple
    }
  };



  return (
    <section id="Contacto" className="relative py-32 overflow-hidden">
      {/* Fondo dinámico con formas abstractas */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[150%] h-[150%] -top-1/3 -left-1/4 bg-gradient-to-br from-blue-800 via-indigo-900 to-purple-800 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute w-[120%] h-[120%] -bottom-1/4 -right-1/3 bg-gradient-to-tr from-indigo-700 via-blue-800 to-purple-900 rounded-full filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute w-[130%] h-[130%] -top-1/2 -right-1/4 bg-gradient-to-bl from-purple-800 via-indigo-900 to-blue-800 rounded-full filter blur-2xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-12 rounded-3xl shadow-2xl max-w-5xl mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              ¿Listo para empezar?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Contáctanos para una consulta gratuita y descubre cómo podemos
              transformar tus ideas en realidad.
            </p>
          </div>

          {/* Layout del formulario y contacto */}
          <div className="flex flex-col md:flex-row gap-12">
            {/* Información de contacto */}
            <div className="md:w-1/3 space-y-6 text-white">
              <h3 className="text-2xl font-bold mb-4">Información de contacto</h3>

              <div className="flex items-center space-x-4">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 text-white text-xl shadow-md">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <p>info@techinnovators.com</p>
              </div>

              <div className="flex items-center space-x-4">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 text-white text-xl shadow-md">
                  <i className="fa-solid fa-phone"></i>
                </span>
                <p>+1 (809) 123-4567</p>
              </div>

              <div className="flex items-center space-x-4">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 text-white text-xl shadow-md">
                  <i className="fa-solid fa-map-marker-alt"></i>
                </span>
                <p>123 Calle Ficticia, Ciudad, País</p>
              </div>

              {/* Redes sociales */}
              <div className="flex space-x-4 pt-4">
                {["facebook-f","x-twitter","linkedin-in","instagram"].map((icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <i className={`fa-brands fa-${icon}`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Formulario */}
            <div className="md:w-2/3">
              <form className="space-y-6"  onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ej. Juan Pérez"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/50 focus:border-white focus:ring-2 focus:ring-white/30 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="ejemplo@correo.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/50 focus:border-white focus:ring-2 focus:ring-white/30 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                    Tu mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Describe tu proyecto o consulta aquí..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/50 focus:border-white focus:ring-2 focus:ring-white/30 focus:outline-none transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-700 via-blue-700 to-purple-800 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:scale-[1.03] transform transition-all duration-300"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

       {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">¡Mensaje Enviado!</h3>
            <p className="text-gray-600 mb-6">Gracias por contactarnos. Nos pondremos en contacto contigo pronto.</p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow hover:bg-blue-700 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      
      
    </section>
  );
};

export default Contact;
