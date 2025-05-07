"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { animate, motion, useInView } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "E-commerce",
    description:
      "Proyecto final de Desafio Latam. PERN stack, con autenticación de usuario, carrito de compras, bycrypt, JWT, JScookie TailwindCSS y Gravatar.",
    image: "/image/projects/1.jpg",
    tag: ["Todo", "Web"],
    gitUrl: "https://github.com/SebastianGarciaGuerrero/proyectofinal",
    previewUrl:
      "https://vercel.com/sebastiangarciaguerreros-projects/ecommerce-frontend",
  },
  {
    id: 2,
    title: "DiviCuentas",
    description:
      "App para dividir gastos domésticos de forma inteligente, calculando aportes equitativos según los ingresos de cada usuario (roomies, parejas o familias). Desarrollada con React + Node.js y estilizada con TailwindCSS para un diseño responsive. Proyecto personal en activo desarrollo.",
    image: "/image/projects/2.png",
    tag: ["Todo", "Mobile"],
    gitUrl: "https://github.com/SebastianGarciaGuerrero/DiviCuentas",
    previewUrl: "https://divicuentas.vercel.app/",
  },
  {
    id: 3,
    title: "Gestión de Inventario",
    description:
      "App de inventario desarrollada con TypeScript y AWS (EC2, RDS, S3) para gestionar stock, generar alertas y reportes. Proyecto inspirado en EdRoh que me permitió aprender estas tecnologías. (En desarrollo activo)",
    image: "/image/projects/3.png",
    tag: ["Todo", "Web"],
    gitUrl: "https://github.com/SebastianGarciaGuerrero/inventario",
    previewUrl: "https://inventario-eosin.vercel.app/",
  },
  {
    id: 4,
    title: "Amedias",
    description:
      "App para dividir gastos en pareja (o entre amigos) como una conversación. Cada gasto se registra directamente en un chat compartido: solo escribe el monto y la descripción, y la app calcula en tiempo real cuánto debe cada uno.",
    image: "/image/projects/4.png",
    tag: ["Todo", "Mobile"],
    gitUrl: "https://github.com/SebastianGarciaGuerrero/Amedias",
    previewUrl: "https://amedias.vercel.app/",
  },
  /*  {
    id: 5,
    title: "Proyecto 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aspernatur.",
    image: "/image/projects/5.jpeg",
    tag: ["Todo", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Proyecto 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aspernatur.",
    image: "/image/projects/6.jpeg",
    tag: ["Todo", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  }, */
];

const ProjectSection = () => {
  const [tag, setTag] = useState("Todo");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariance = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section ref={ref} id="proyectos">
      <h2 className="text-center mb-4 text-4xl font-bold text-white mt-4">
        Mis Proyectos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Todo"
          isSelected={tag === "Todo"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariance}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
