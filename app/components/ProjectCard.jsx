import React from "react";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { FaEye } from "react-icons/fa";
import Link from "next/link";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  tags = ["React", "Tailwind"],
}) => {
  return (
    <div className="group bg-[#0f0f0f] rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-500 shadow-2xl">
      {/* CONTENEDOR DE IMAGEN */}
      <div className="relative h-52 md:h-64 overflow-hidden">
        {/* Imagen con efecto Zoom */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${imgUrl})` }}
        />

        {/* Overlay con Blur y botones */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
          <Link
            href={gitUrl}
            target="_blank"
            className="flex items-center justify-center h-12 w-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-green-600 hover:border-primary transition-all duration-300"
            title="Ver Código"
          >
            <HiMiniCodeBracket size={24} />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            className="flex items-center justify-center h-12 w-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-green-600 hover:border-primary transition-all duration-300"
            title="Ver Demo"
          >
            <FaEye size={22} />
          </Link>
        </div>
      </div>

      {/* CONTENIDO DE TEXTO */}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-primary/10 text-green-400 border border-primary/20 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
          {title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
          <Link
            href={previewUrl}
            target="_blank"
            className="text-xs font-bold text-white uppercase tracking-tighter hover:underline flex items-center gap-1"
          >
            Ver proyecto <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
