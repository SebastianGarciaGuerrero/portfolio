"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView, AnimatePresence } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "E-commerce Fullstack",
    description:
      "Plataforma robusta con stack PERN. Incluye pasarela de pagos simulada, gestión de carrito y seguridad con JWT y Bcrypt.",
    image: "/image/projects/1.png",
    tag: ["Todo", "Web"],
    gitUrl: "https://github.com/SebastianGarciaGuerrero/apartsushi",
    previewUrl: "https://apartsushi.vercel.app/",
    techs: ["React", "PostgreSQL", "Node.js", "Tailwind"],
  },
  {
    id: 2,
    title: "DiviCuentas",
    description:
      "Calculadora inteligente de gastos compartidos proporcionales al ingreso. Ideal para roomies y parejas que buscan equidad financiera.",
    image: "/image/projects/2.png",
    tag: ["Todo", "Web", "Mobile"],
    gitUrl: "https://github.com/SebastianGarciaGuerrero/DiviCuentas",
    previewUrl: "https://divicuentas.vercel.app/",
    techs: ["React", "JavaScript", "Tailwind"],
  },
  // {
  //   id: 3,
  //   title: "Frontend Prototype",
  //   description:
  //     "Dashboard de Inventario - UI Prototype Desarrollo de una interfaz de alta fidelidad para sistemas de gestión de recursos (ERP). El objetivo principal fue trasladar un diseño complejo a código limpio y mantenible, priorizando la usabilidad y la jerarquía visual. La aplicación simula operaciones CRUD (Crear, Leer, Actualizar, Borrar) mediante manejo de estado en el cliente, ofreciendo una experiencia de navegación fluida e instantánea.",
  //   image: "/image/projects/3.png",
  //   tag: ["Todo", "Web"],
  //   gitUrl: "https://github.com/SebastianGarciaGuerrero/inventario",
  //   previewUrl: "https://inventario-eosin.vercel.app/",
  //   techs: ["TypeScript", "Tailwind", "Redux"],
  // },
  {
    id: 4,
    title: "Amedias Chat-App",
    description:
      "Gestión de gastos de parejas con interfaz tipo chat. Registra deudas conversando, con cálculos automáticos en tiempo real.",
    image: "/image/projects/4.png",
    tag: ["Todo", "Mobile"],
    gitUrl: "https://github.com/SebastianGarciaGuerrero/Amedias",
    previewUrl: "https://amedias.vercel.app/",
    techs: ["React", "MongoDB", "Node"],
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("Todo");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section
      ref={ref}
      id="proyectos"
      className="py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* ENCABEZADO */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tighter">
              Proyectos <span className="text-primary italic">Destacados</span>
            </h2>
            <p className="text-gray-500 max-w-md">
              Una selección de mis trabajos más recientes, enfocados en
              performance y experiencia de usuario.
            </p>
          </div>

          {/* FILTROS */}
          <div className="flex flex-wrap gap-3 bg-white/5 p-2 rounded-2xl border border-white/10 h-fit">
            {["Todo", "Web", "Mobile"].map((t) => (
              <ProjectTag
                key={t}
                onClick={handleTagChange}
                name={t}
                isSelected={tag === t}
              />
            ))}
          </div>
        </div>

        {/* GRID DE PROYECTOS */}
        <motion.ul
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.li
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{
                  duration: 0.4,
                  delay: isInView ? index * 0.1 : 0,
                  ease: "easeOut",
                }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                  tags={project.techs} // Pasamos los techs como tags a la card que hicimos antes
                />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {/* FOOTER DE SECCIÓN (Opcional) */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 text-sm">
            ¿Quieres ver más? Explora mi{" "}
            <a
              href="https://github.com/SebastianGarciaGuerrero"
              target="_blank"
              className="text-primary hover:underline"
            >
              GitHub completo
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
