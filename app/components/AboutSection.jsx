"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { FiExternalLink, FiCode, FiBookOpen, FiAward } from "react-icons/fi";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {[
          "JavaScript",
          "Node.js",
          "React",
          "Next.js",
          "PostgreSQL",
          "TailwindCSS",
        ].map((skill) => (
          <div
            key={skill}
            className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-3 hover:border-primary/50 transition-colors"
          >
            <FiCode className="text-primary" />
            <span className="text-gray-300 text-sm">{skill}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Educación",
    id: "educacion",
    content: (
      <div className="space-y-6 border-l-2 border-white/10 pl-4 ml-2">
        <div className="relative">
          <div className="absolute -left-[25px] mt-1.5 h-3 w-3 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
          <h4 className="text-white font-bold">
            Técnico Superior en Informática
          </h4>
          <p className="text-green-400 text-sm mb-1">IACC</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Especializado en el desarrollo de software y sistemas de gestión de
            bases de datos.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -left-[25px] mt-1.5 h-3 w-3 rounded-full bg-gray-600" />
          <h4 className="text-white font-bold">Desarrollador FullStack</h4>
          <p className="text-green-400 text-sm mb-1">Desafío Latam</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Certificado en el stack PERN (PostgreSQL, Express, React, Node).
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Certificados",
    id: "certificados",
    content: (
      <ul className="space-y-3">
        {[
          {
            name: "IT Essentials de Cisco",
            link: "https://drive.google.com/file/d/1l4pxuUsQ4o4cdalmFP5FLLCBiWjEk204/view?usp=sharing",
          },
          {
            name: "FullStack Desafío Latam",
            link: "https://drive.google.com/file/d/1o9pRlxmcgXKdZBQHLn56sV4s6RzJT0tz/view?usp=sharing",
          },
        ].map((cert) => (
          <li key={cert.name}>
            <a
              href={cert.link}
              target="_blank"
              className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-all group"
            >
              <span className="text-gray-300 group-hover:text-white transition-colors">
                {cert.name}
              </span>
              <FiExternalLink className="text-gray-500 group-hover:text-green-400" />
            </a>
          </li>
        ))}
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="py-20 px-6" id="sobremi">
      <div className="max-w-6xl mx-auto md:grid md:grid-cols-2 gap-12 items-center">
        {/* LADO IZQUIERDO: IMAGEN CON EFECTO */}
        <div className="relative group flex justify-center md:justify-start">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-dark to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-[#0a0a0a] rounded-2xl p-2">
            <Image
              src="/image/cycle.png"
              alt="Sebastian Garcia"
              width={450}
              height={450}
              className="rounded-xl object-cover"
            />
          </div>
        </div>

        {/* LADO DERECHO: CONTENIDO */}
        <div className="mt-8 md:mt-0 flex flex-col h-full">
          <div className="mb-6">
            <h2 className="text-4xl font-extrabold text-white mb-4 flex items-center gap-3">
              Sobre Mí{" "}
              <span className="h-1 w-12 bg-primary-dark inline-block rounded-full"></span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Mi viaje en la programación nació de la curiosidad autodidacta, lo
              que me llevó a profesionalizar mi pasión en la universidad. Como{" "}
              <strong className="text-primary font-medium">
                desarrollador y deportista
              </strong>
              , combino la disciplina del entrenamiento con la lógica del
              código. Hoy, potencio este flujo de trabajo integrando{" "}
              <strong className="text-primary font-medium">
                Inteligencia Artificial
              </strong>{" "}
              para maximizar mi productividad y calidad, permitiéndome crear
              soluciones eficientes mientras mantengo la responsabilidad y el
              trabajo en equipo como mis pilares.
            </p>
          </div>

          {/* TABS NAVEGACIÓN */}
          <div className="flex flex-row justify-start gap-4 mb-8 border-b border-white/10">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              <span className="flex items-center gap-2">
                {" "}
                <FiCode size={14} /> Skills{" "}
              </span>
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("educacion")}
              active={tab === "educacion"}
            >
              <span className="flex items-center gap-2">
                {" "}
                <FiBookOpen size={14} /> Educación{" "}
              </span>
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certificados")}
              active={tab === "certificados"}
            >
              <span className="flex items-center gap-2">
                {" "}
                <FiAward size={14} /> Certificados{" "}
              </span>
            </TabButton>
          </div>

          {/* CONTENIDO DE LAS TABS */}
          <div className="min-h-[200px] animate-in fade-in duration-500">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
