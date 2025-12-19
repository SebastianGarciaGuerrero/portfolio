"use client";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiSend, FiMail, FiMapPin } from "react-icons/fi";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const EmailSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio";
    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    if (!formData.message.trim()) newErrors.message = "Escribe un mensaje";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSending(true);
    emailjs
      .send(
        "service_0a6qvxn",
        "template_d0j7ujd",
        formData,
        "fY3_lzgZRGHyBzkYv"
      )
      .then(() => {
        toast.success("¡Mensaje enviado! Te contactaré pronto.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        toast.error("Error al enviar. Intenta por LinkedIn.");
        console.error(err);
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section className="relative py-24 px-6 bg-[#050505]" id="contacto">
      {/* Fondo decorativo sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-dark/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 relative z-10">
        
        {/* LADO IZQUIERDO: TEXTO E INFO */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">
            ¿Tienes una idea? <br />
            <span className="text-primary font-mono tracking-normal">Hablemos.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-md">
            Estoy disponible para nuevos proyectos y colaboraciones.
            Me encanta resolver problemas complejos y convertirlos en interfaces simples.
          </p>

          <div className="space-y-6 mb-10">
            <div className="flex items-center gap-4 group text-gray-400 hover:text-white transition-colors">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-primary/50">
                <FiMail className="text-primary" />
              </div>
              <span>hola@sebastiangarcia.cl</span>
            </div>
            <div className="flex items-center gap-4 group text-gray-400 hover:text-white transition-colors">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-primary/50">
                <FiMapPin className="text-primary" />
              </div>
              <span>Santiago, Chile</span>
            </div>
          </div>

          <div className="flex gap-4">
            <Link 
              href="https://github.com/SebastianGarciaGuerrero" 
              className="text-gray-400 hover:text-white transition-all transform hover:scale-110"
              target="_blank"
            >
              <FaGithub size={32} />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/sebastiangarciaguerrero/" 
              className="text-gray-400 hover:text-white transition-all transform hover:scale-110"
              target="_blank"
            >
              <FaLinkedin size={32} />
            </Link>
          </div>
        </div>

        {/* LADO DERECHO: FORMULARIO */}
        <div className="bg-white/[0.02] border border-white/10 p-8 rounded-3xl backdrop-blur-sm shadow-2xl">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="text-gray-300 block mb-2 text-sm font-medium uppercase tracking-wider">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} focus:border-primary rounded-xl px-4 py-3 text-white outline-none transition-all placeholder:text-gray-600`}
                placeholder="Tu nombre"
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="text-gray-300 block mb-2 text-sm font-medium uppercase tracking-wider">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} focus:border-primary rounded-xl px-4 py-3 text-white outline-none transition-all placeholder:text-gray-600`}
                placeholder="email@ejemplo.com"
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="text-gray-300 block mb-2 text-sm font-medium uppercase tracking-wider">Mensaje</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} focus:border-primary rounded-xl px-4 py-3 text-white outline-none transition-all placeholder:text-gray-600 resize-none`}
                placeholder="¿En qué puedo ayudarte?"
              ></textarea>
              {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-primary-dark hover:bg-primary disabled:bg-gray-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary-dark/20"
            >
              {isSending ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </span>
              ) : (
                <>
                  Enviar Mensaje <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </section>
  );
};

export default EmailSection;