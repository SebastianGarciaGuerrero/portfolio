import React from "react";
import { motion } from "framer-motion";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-gray-500";

  return (
    <button
      onClick={selectTab}
      className="relative pb-2 mr-6 group focus:outline-none"
    >
      <p
        className={`text-base font-bold transition-colors duration-300 hover:text-white ${buttonClasses}`}
      >
        {children}
      </p>

      {/* Línea de fondo (Static track) */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5 rounded-full" />

      {/* Línea activa animada */}
      {active ? (
        <motion.div
          layoutId="activeTab" // Esto hace que la línea "viaje" entre botones si están en el mismo padre
          className="absolute bottom-0 left-0 h-[2px] bg-primary w-full rounded-full shadow-[0_0_8px_rgba(59,130,246,0.6)]"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />
      ) : (
        <div className="absolute bottom-0 left-0 h-[2px] bg-transparent w-0 group-hover:w-full group-hover:bg-white/20 transition-all duration-300" />
      )}
    </button>
  );
};

export default TabButton;
