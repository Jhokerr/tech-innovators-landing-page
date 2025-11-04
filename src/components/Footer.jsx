import React, { useState } from "react";
import { 
  Facebook, Twitter, Linkedin, Instagram, 
  MapPin, Phone, Mail, 
  Code, Smartphone, Cloud, Brain, Shield,
  Send, ArrowRight, ChevronRight 
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && /\S+@\S+\.\S+/.test(email)) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  const navigationLinks = [
    { name: "Inicio", id: "Inicio" },
    { name: "Servicios", id: "Servicios" },
    { name: "Acerca de", id: "Acerca" },
    { name: "Testimonios", id: "Testimonios" },
    { name: "Contacto", id: "Contacto" },
  ];

  const services = [
    { name: "Desarrollo Web", icon: Code },
    { name: "Apps Móviles", icon: Smartphone },
    { name: "Consultoría Cloud", icon: Cloud },
    { name: "IA y Datos", icon: Brain },
    { name: "Ciberseguridad", icon: Shield },
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", link: "#", color: "hover:bg-blue-600" },
    { icon: Twitter, name: "Twitter", link: "#", color: "hover:bg-sky-500" },
    { icon: Linkedin, name: "LinkedIn", link: "#", color: "hover:bg-blue-700" },
    { icon: Instagram, name: "Instagram", link: "#", color: "hover:bg-pink-600" },
  ];

  const contactInfo = [
    { 
      icon: MapPin, 
      text: "Av. Charles de Gaulle, Plaza El Faro, Local 123, Santo Domingo Este",
      link: "#"
    },
    { 
      icon: Phone, 
      text: "+1 (809) 555-1234",
      link: "tel:+18095551234"
    },
    { 
      icon: Mail, 
      text: "info@techinnovators.com",
      link: "mailto:info@techinnovators.com"
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 overflow-hidden">
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        
        {/* Sección superior con Newsletter */}
        <div className="mb-16 pb-12 border-b border-gray-700/50">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Logo y descripción */}
            <div className="text-center lg:text-left lg:max-w-md">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Tech
                </span>
                <span className="text-white"> Innovators</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Impulsando la innovación tecnológica con soluciones de software que definen el futuro.
              </p>
            </div>

            {/* Newsletter */}
            <div className="w-full lg:w-auto lg:min-w-[400px]">
              <h4 className="text-lg font-bold text-white mb-3 text-center lg:text-left">
                Únete a nuestro Newsletter
              </h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 pl-11 rounded-lg bg-gray-800/50 border border-gray-700 
                      text-white placeholder-gray-500
                      focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none
                      transition-all duration-300"
                  />
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                </div>
                <button
                  onClick={handleSubscribe}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 
                    bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 
                    text-white font-semibold rounded-lg
                    hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700
                    transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  {subscribed ? (
                    <>
                      <span>¡Suscrito!</span>
                      <ChevronRight className="w-5 h-5" />
                    </>
                  ) : (
                    <>
                      <span>Suscribir</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Columna 1: Navegación */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
              Navegación
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleSmoothScroll(e, link.id)}
                    className="group inline-flex items-center gap-2 text-gray-400 
                      hover:text-white transition-all duration-300"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 2: Servicios */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
              Servicios Clave
            </h4>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a
                    href="#Servicios"
                    onClick={(e) => handleSmoothScroll(e, "Servicios")}
                    className="group inline-flex items-center gap-2 text-gray-400 
                      hover:text-white transition-all duration-300"
                  >
                    <service.icon className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {service.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full"></div>
              Contáctanos
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.link}
                    className="group flex items-start gap-3 text-gray-400 
                      hover:text-white transition-colors duration-300"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg 
                      bg-gray-800/50 border border-gray-700 
                      group-hover:bg-blue-500/10 group-hover:border-blue-500/30
                      transition-all duration-300 flex-shrink-0">
                      <item.icon className="w-4 h-4 text-blue-500" />
                    </div>
                    <span className="text-sm leading-relaxed">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-pink-400 to-red-500 rounded-full"></div>
              Síguenos
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Mantente conectado con nuestras últimas actualizaciones y novedades.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  className={`group w-11 h-11 flex items-center justify-center rounded-lg 
                    bg-gray-800/50 border border-gray-700 text-gray-400
                    ${social.color} hover:text-white hover:border-transparent
                    transform hover:scale-110 hover:-translate-y-1
                    transition-all duration-300 shadow-lg`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Badge de verificación */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 
              border border-blue-500/20">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="font-semibold">Empresa Certificada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright y links legales */}
        <div className="pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p className="text-center md:text-left">
              &copy; {currentYear}{" "}
              <span className="font-semibold text-gray-400">Tech Innovators</span>. 
              Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Términos de Uso
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Línea decorativa inferior con gradiente */}
      <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600"></div>
    </footer>
  );
};

export default Footer;