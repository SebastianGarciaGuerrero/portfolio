"use client";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const EmailSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          "service_0a6qvxn",
          "template_d0j7ujd",
          formData,
          "fY3_lzgZRGHyBzkYv"
        )
        .then((response) => {
          toast.success("¡Email enviado con éxito!");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("FAILED...", error);
          toast.error("¡Algo salió mal! Intenta de nuevo");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative" id="contacto">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          ¡Pongámonos en contacto!
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Estoy en una búsqueda constante de nuevos desafios y oportunidades en el mundo de la tecnología.
          Si tienes alguna pregunta, proyecto interesante, o solo quieres saludar, no dudes en contactarme. 
          <br />
          Siempre 
          estoy dispuesto a colaborar y aprender cosas nuevas. Aquí hay un formulario para que me escribas 
          directamente a mi correo electrónico. 
          <br />
          ¡Estaré encantado de conectar contigo!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link
            href="https://github.com/SebastianGarciaGuerrero"
            target="_blank"
          >
            <FaGithub className="h-10 w-10 mr-2 text-white" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sebastiangarciaguerrero/"
            target="_blank"
          >
            <FaLinkedin className="h-10 w-10" />
          </Link>
        </div>
      </div>
      <Toaster />
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-white block mb-2 text-sm font-medium"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-[#18191E] border border-[#33353f] placeholder-[#9CA2A9] text-gray-100 rounded-lg block w-full p-2.5"
              placeholder="Sasha Sabrina S."
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-[#18191E] border border-[#33353f] placeholder-[#9CA2A9] text-gray-100 rounded-lg block w-full p-2.5"
              placeholder="tucorreo@email.com"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Mensaje
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-[#18191E] border border-[#33353f] placeholder-[#9CA2A9] text-gray-100 rounded-lg block w-full p-2.5"
              placeholder="Tu mensaje aquí..."
            ></textarea>
            {errors.message && (
              <p className="text-sm text-red-500">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            disabled={isSending}
          >
            {isSending ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
