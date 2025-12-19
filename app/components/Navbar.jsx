"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiXMark } from "react-icons/hi2";
import { MenuOverlay } from "./MenuOverlay";

const navLinks = [
  { href: "#sobremi", title: "Sobre mí" },
  { href: "#proyectos", title: "Proyectos" },
  { href: "#contacto", title: "Contacto" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efecto para cambiar el estilo al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? "bg-[#0a0a0a]/80 backdrop-blur-md border-white/10 py-3" 
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto px-6">
        
        {/* LOGO */}
        <Link
          href="#hero"
          className="text-xl md:text-2xl text-white font-bold tracking-tighter hover:text-primary transition-colors"
        >
          <span className="text-primary">{"<"}</span>
          SEBASTIAN
          <span className="text-primary font-mono">.dev {"/>"}</span>
        </Link>

        {/* BOTÓN MOBILE */}
        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center p-2 text-gray-400 hover:text-white transition-colors"
          >
            {navbarOpen ? (
              <HiXMark className="h-7 w-7" />
            ) : (
              <RxHamburgerMenu className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* MENU DESKTOP */}
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex items-center gap-4 lg:gap-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink 
                  href={link.href} 
                  title={link.title} 
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                />
              </li>
            ))}
            {/* CTA en el Navbar */}
            <li>
              <Link
                href="#contacto"
                className="px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-primary hover:text-white transition-all shadow-sm"
              >
                Hablemos
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* OVERLAY MOBILE */}
      {navbarOpen && (
        <div className="md:hidden animate-in fade-in slide-in-from-top duration-300">
          <MenuOverlay links={navLinks} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;