import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Send, CheckCircle, X } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      setShowModal(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@techinnovators.com",
      link: "mailto:info@techinnovators.com"
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+1 (809) 123-4567",
      link: "tel:+18091234567"
    },
    {
      icon: MapPin,
      label: "Dirección",
      value: "123 Calle Ficticia, Ciudad, País",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", link: "#" },
    { icon: Twitter, name: "Twitter", link: "#" },
    { icon: Linkedin, name: "LinkedIn", link: "#" },
    { icon: Instagram, name: "Instagram", link: "#" }
  ];

  return (
    <section 
      id="Contacto" 
      className="relative py-20 md:py-32 overflow-hidden"
      ref={sectionRef}
    >
      {/* Fondo dinámico mejorado */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="absolute w-full h-full opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`backdrop-blur-xl bg-white/10 border border-white/20 p-6 sm:p-8 lg:p-12 rounded-3xl shadow-2xl max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          
          <div className="text-center mb-10 lg:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full 
              bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-cyan-300">Contáctanos</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              ¿Listo para{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                empezar?
              </span>
            </h2>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Contáctanos para una consulta gratuita y descubre cómo podemos
              transformar tus ideas en realidad.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            <div className="lg:w-2/5 space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                Información de contacto
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 
                      hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full 
                      bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg 
                      group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-white/60 font-medium">{item.label}</p>
                      <p className="text-sm md:text-base text-white font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-6">
                <p className="text-sm text-white/60 font-medium mb-4">Síguenos en</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="group w-11 h-11 flex items-center justify-center rounded-full 
                        bg-white/10 border border-white/20 text-white 
                        hover:bg-gradient-to-br hover:from-cyan-400 hover:to-blue-500 
                        hover:border-transparent hover:scale-110 
                        transition-all duration-300 shadow-lg"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="hidden lg:block mt-8 p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400" />
                  <p className="text-white font-semibold">Respuesta en 24h</p>
                </div>
                <p className="text-sm text-white/70">
                  Nuestro equipo se pondrá en contacto contigo en menos de 24 horas.
                </p>
              </div>
            </div>

            <div className="lg:w-3/5">
              <div className="space-y-5">
                
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ej. Juan Pérez"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.name ? 'border-red-400' : 'border-white/30'
                    } bg-white/10 text-white placeholder-white/50 
                    focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 focus:outline-none 
                    transition-all backdrop-blur-sm`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <span>⚠</span> {errors.name}
                    </p>
                  )}
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
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.email ? 'border-red-400' : 'border-white/30'
                    } bg-white/10 text-white placeholder-white/50 
                    focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 focus:outline-none 
                    transition-all backdrop-blur-sm`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <span>⚠</span> {errors.email}
                    </p>
                  )}
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
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.message ? 'border-red-400' : 'border-white/30'
                    } bg-white/10 text-white placeholder-white/50 
                    focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 focus:outline-none 
                    transition-all backdrop-blur-sm resize-none`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <span>⚠</span> {errors.message}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="group relative w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 
                    text-white font-bold py-4 px-6 rounded-xl overflow-hidden
                    shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50
                    disabled:opacity-50 disabled:cursor-not-allowed
                    transform hover:scale-[1.02] transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl transform animate-scaleIn">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full 
              flex items-center justify-center mx-auto mb-6 shadow-lg">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              ¡Mensaje Enviado!
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Gracias por contactarnos. Nuestro equipo revisará tu mensaje y te responderá pronto.
            </p>
            
            <button
              onClick={() => setShowModal(false)}
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 
                text-white font-semibold py-3 px-8 rounded-full shadow-lg 
                hover:from-cyan-700 hover:to-blue-700 hover:scale-105 transition-all duration-300"
            >
              Cerrar
              <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
        </div>
      )}

      
    </section>
  );
};

export default Contact;