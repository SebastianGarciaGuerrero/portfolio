import Link from "next/link";
import { motion } from "framer-motion";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="relative group block py-2 pl-3 pr-4 text-gray-400 sm:text-lg font-medium transition-colors duration-300 hover:text-white md:p-0"
    >
      {/* El texto del enlace */}
      <span className="relative z-10">{title}</span>

      {/* La línea animada debajo (Underline) */}
      <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)]" />

      {/* Opcional: Un pequeño destello al hacer hover */}
      <span className="absolute inset-0 bg-white/5 scale-0 rounded-lg transition-transform duration-300 group-hover:scale-110 blur-sm opacity-0 group-hover:opacity-100" />
    </Link>
  );
};

export default NavLink;
