"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView, AnimatePresence } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "Sitio Oficial de CD Las Galaxias",
    description:
      "Modernización digital de un club deportivo mediante una SPA (Single Page Application). Combina una interfaz intuitiva y responsiva para los hinchas, con un backoffice automatizado que permite a la directiva gestionar fixtures, goleadores y un blog de noticias sin tocar código.",
    image: "/image/projects/1.png",
    tag: ["Todo", "Web"],
    gitUrl: "https://github.com/SebastianGarciaGuerrero/las-galaxias",
    previewUrl: "https://www.lasgalaxias.cl/",
    techs: ["React", "Supabase", "Node.js", "Tailwind"],
    collaborative: true,
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
  {
    id: 3,
    title: "Cobra 3-6-9",
    description:
      "Aplicación web de gestión de cobranza legal desarrollada con React + Vite, que automatiza el cálculo de honorarios extrajudiciales bajo la tabla 3-6-9, acuerdos de pago en cuotas con interés simple y desglose de abonos, reemplazando flujos manuales en Excel con una interfaz moderna, resultados copiables y exportación de tablas formateadas para Word.",
    image: "/image/projects/3.png",
    tag: ["Todo", "Web"],
    gitUrl: "https://github.com/SebastianGarciaGuerrero/cobra369",
    previewUrl: "https://cobra369-sooty.vercel.app/",
    techs: ["TypeScript", "Tailwind", "Redux"],
  },
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
  {
    id: 5,
    title: "Sistema de Gestiones y Cobranza Judicial",
    description:
      "Plataforma web propia para la gestión de cobranza extrajudicial y judicial, pensada como una solución integral y adaptable a cualquier empresa de cobranzas o estudio jurídico. Reemplaza las planillas de Excel con administración de clientes, deudores y cobranzas, gestiones inmutables que preservan el historial legal, acuerdos de pago en cuotas, abonos con desglose por concepto y carga masiva de gestiones. Construida con React + TypeScript sobre una API FastAPI con PostgreSQL, todo containerizado con Docker.",
    image: "/image/projects/hadad.png",
    tag: ["Todo", "Web"],
    gitUrl: "https://github.com/SebastianGarciaGuerrero/hadad-v2",
    previewUrl: "https://hadad-v2-chi.vercel.app/",
    techs: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
  },
  {
    id: 6,
    title: "Hadad & Asociados — Sitio Web",
    description:
      "Sitio web institucional para Hadad & Asociados, empresa de cobranza y asesoría legal de Valparaíso con más de 30 años de trayectoria. Presenta sus servicios (cobranza extrajudicial y judicial, asesoría legal y financiera, certificado de castigo, reorganización o liquidación forzosa), el equipo, la cartera de clientes y un acceso de pago en línea. Diseño limpio y responsivo pensado para transmitir confianza y facilitar el contacto.",
    image: "/image/projects/hadadweb.png",
    tag: ["Todo", "Web"],
    gitUrl: null,
    previewUrl: "https://hadadyasociados.cl/",
    techs: ["React", "TypeScript", "Vite", "Tailwind"],
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
                  collaborative={project.collaborative}
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
              rel="noopener noreferrer"
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
