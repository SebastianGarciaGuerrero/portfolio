"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FiDownload, FiSend } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center py-16 lg:py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-7xl mx-auto px-4">
        {/* TEXTO IZQUIERDA */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8 place-self-center text-center lg:text-left justify-self-start"
        >
          <h1 className="text-white mb-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
              ¡Hola! Soy
            </span>
            <br />
            <div className="h-20 sm:h-28 lg:h-32">
              {" "}
              {/* Altura fija para evitar saltos de layout */}
              <TypeAnimation
                sequence={[
                  "Sebastián García",
                  1500,
                  "Desarrollador Frontend",
                  1200,
                  "Especialista en React",
                  1200,
                  "Analista de Datos",
                  1200,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-white"
              />
            </div>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg mb-8 lg:text-xl max-w-2xl leading-relaxed">
            Especializado en crear interfaces dinámicas con{" "}
            <span className="text-green-400 font-mono">React</span> y gestionar
            datos con <span className="text-green-400 font-mono">SQL</span>.
            Aunque mi foco es el Frontend, integro lógica de Backend y
            actualmente exploro el potencial de la{" "}
            <span className="text-green-400 font-mono">
              Inteligencia Artificial
            </span>{" "}
            para construir la próxima generación de software.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center lg:justify-start justify-center">
            <button
              className="group px-8 py-4 w-full sm:w-fit rounded-full bg-primary-dark hover:bg-green-700 text-white font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-dark/20"
              onClick={() => {
                document
                  .getElementById("contacto")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              ¡Escríbeme!
              <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            <a
              href="https://drive.google.com/file/d/1lSzEhKtGNhUTzHZuWRHfHmIP_-8lVwgs/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-fit"
            >
              <button className="group px-8 py-4 w-full rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold transition-all flex items-center justify-center gap-2">
                Descargar CV
                <FiDownload className="group-hover:translate-y-1 transition-transform" />
              </button>
            </a>
          </div>
        </motion.div>

        {/* IMAGEN DERECHA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4 place-self-center relative"
        >
          {/* Círculo de fondo con resplandor */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-primary-dark/20 rounded-full blur-[80px]" />

          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/20 to-transparent rounded-full border border-white/5" />
            <Image
              src="/image/zeva.png"
              alt="Sebastián García 3D"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              width={450}
              height={450}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
