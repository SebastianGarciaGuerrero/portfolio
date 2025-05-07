"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { FiExternalLink } from "react-icons/fi";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 list-disc pl-2">
        <li>JavaScript</li>
        <li>Nodejs</li>
        <li>React</li>
        <li>Nextjs</li>
        <li>PostgreSQL</li>
        <li>TailwindCSS</li>
      </ul>
    ),
  },
  {
    title: "Educación",
    id: "educacion",
    content: (
      <ul className="list-disc pl-2">
        <li>Técnico Superior en Informática - IACC </li>
        <p className="text-gray-400 text-sm">
          Especializado en el desarrollo de software y soluciones tecnológicas,
          con enfoque en aplicaciones web y sistemas de gestión de bases de
          datos.
        </p>
        <br/>
        <li>Desarrollador FullStack en Desafio Latam </li>
        <p className="text-gray-400 text-sm">
          Certificado en el diseño y desarrollo de aplicaciones web completas,
          dominando tecnologías como Node.js, React, y bases de datos en
          PostgreSQL.
        </p>
      </ul>
    ),
  },
  {
    title: "Certificados",
    id: "certificados",
    content: (
      <ul className="list-disc pl-4">
        <li className="flex items-center">
          <span className="mr-1">• IT Essentials de Cisco</span>
          <a
            href="https://drive.google.com/file/d/1l4pxuUsQ4o4cdalmFP5FLLCBiWjEk204/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <FiExternalLink />
          </a>
        </li>
        <li className="flex items-center">
          <span className="mr-1">
            • Desarrollador FullStack en Desafio Latam
          </span>
          <a
            href="https://drive.google.com/file/d/1o9pRlxmcgXKdZBQHLn56sV4s6RzJT0tz/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <FiExternalLink />
          </a>
        </li>
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
    <section className="text-white" id="sobremi">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/image/cycle.jpg" alt="cycle" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mi</h2>
          <p className="text-base md:text-lg">
            Mi trayectoria en la programación comenzó de manera autodidacta,
            explorando videos de JavaScript en YouTube. Esta curiosidad inicial
            me impulsó a formalizar mis estudios en Informática en la
            universidad. Mi pasión por los deportes me ha enseñado el valor del
            trabajo en equipo y el compañerismo, habilidades que aplico en mi
            vida profesional. Además, ser hermano mayor y padre de dos gatas me
            ha inculcado un fuerte sentido de responsabilidad, lo que ha sido
            clave en mi crecimiento personal y profesional.
          </p>
          <div className=" flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {""}Skills{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("educacion")}
              active={tab === "educacion"}
            >
              {""}Educación{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certificados")}
              active={tab === "certificados"}
            >
              {""}Certificados{""}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
