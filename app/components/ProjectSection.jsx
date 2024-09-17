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
    previewUrl: "https://zillas.up.railway.app/",
  },
  {
    id: 2,
    title: "DiviCuenta",
    description:
      "Proyecto propio. Aplicación para dividir cuentas entre roomies, parejas o familias para un pago equitativo según sus ingresos. En proceso aún. Se está utilizando TailwindCSS, Nodejs, React.",
    image: "/image/projects/2.png",
    tag: ["Todo", "Mobile"],
    gitUrl: "https://github.com/SebastianGarciaGuerrero/DiviCuenta",
    previewUrl: "https://divi-cuenta.vercel.app/",
  },
  {
    id: 3,
    title: "Gestión de Inventario",
    description:
      "Proyecto inspirado de EdRoh en Youtube. Punta pie inicial para aprender sobre TypeScript y AWS (ECS2, RDS Y S3). En proceso aún.",
    image: "/image/projects/3.png",
    tag: ["Todo", "Web"],
    gitUrl: "https://github.com/SebastianGarciaGuerrero/inventario",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Proyecto 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aspernatur.",
    image: "/image/projects/4.jpeg",
    tag: ["Todo", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
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
  },
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
