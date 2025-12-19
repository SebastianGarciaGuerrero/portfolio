import React from "react";
import { motion } from "framer-motion";

const ProjectTag = ({ name, onClick, isSelected }) => {
  // Estilos base refinados
  const styles = isSelected
    ? "bg-primary-dark border-primary text-white shadow-lg shadow-primary-dark/20"
    : "bg-white/5 border-white/10 text-gray-400 hover:border-white/30 hover:text-white hover:bg-white/10";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(name)}
      className={`${styles} px-6 py-2 rounded-xl border text-sm font-medium transition-all duration-300 cursor-pointer backdrop-blur-sm`}
    >
      <div className="flex items-center gap-2">
        {/* Un pequeño punto indicador que brilla si está seleccionado */}
        {isSelected && (
          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
        )}
        {name}
      </div>
    </motion.button>
  );
};

export default ProjectTag;
