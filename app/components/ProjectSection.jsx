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
      "CRUD de productos, carrito de compras, autenticación de usuarios, Tailwind, PostgreSQL, Express.js, React, Cookies, JWT, Cors y Bycrypt",
    image: "/image/projects/1.jpg",
    tag: ["ALL", "Web"],
    gitUrl: "https://github.com/SebastianGarciaGuerrero/proyectofinal",
    previewUrl: "https://ecommerce-frontend-sebastiangarciaguerreros-projects.vercel.app/",
  },
  {
    id: 2,
    title: "Proyecto 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aspernatur.",
    image: "/image/projects/2.png",
    tag: ["ALL", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Proyecto 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aspernatur.",
    image: "/image/projects/3.jpeg",
    tag: ["ALL", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Proyecto 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aspernatur.",
    image: "/image/projects/4.jpeg",
    tag: ["ALL", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Proyecto 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aspernatur.",
    image: "/image/projects/5.jpeg",
    tag: ["ALL", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Proyecto 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aspernatur.",
    image: "/image/projects/6.jpeg",
    tag: ["ALL", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("ALL");
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
          name="ALL"
          isSelected={tag === "ALL"}
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
