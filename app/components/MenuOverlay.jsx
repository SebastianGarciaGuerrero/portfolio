import React from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

export const MenuOverlay = ({ links }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl md:hidden flex items-center justify-center"
    >
      <ul className="flex flex-col items-center gap-8 px-4">
        {links.map((link, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1, // Efecto cascada (stagger)
              ease: "easeOut",
            }}
          >
            <div className="text-2xl font-bold tracking-widest uppercase">
              <NavLink href={link.href} title={link.title} />
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};
