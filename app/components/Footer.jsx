import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Terminal, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0a0a0a] text-gray-400 border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Columna 1: Branding */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 text-white font-mono font-bold text-xl">
              <Code2 className="text-primary" size={24} />
              <span>garcia<span className="text-primary">.</span>dev</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500">
              Desarrollador Frontend enfocado en interfaces minimalistas, 
              animaciones fluidas y código limpio.
            </p>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-[0.2em]">Navegación</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#proyectos" className="hover:text-white transition-colors tracking-wide">Proyectos Seleccionados</a></li>
              <li><a href="#sobre-mi" className="hover:text-white transition-colors tracking-wide">Mi Trayectoria</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors tracking-wide">Contacto</a></li>
              <li>
                <a href="/cv.pdf" className="flex items-center gap-2 hover:text-white transition-colors tracking-wide">
                  Descargar CV <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Stack */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-[0.2em]">Tecnologías</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[12px] text-gray-400">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Columna 4: Social */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-[0.2em]">Social</h3>
            <div className="flex gap-4 mb-6">
              <a href="https://github.com/SebastianGarciaGuerrero" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-primary hover:text-white transition-all">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sebastiangarciaguerrero/" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-primary hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-lg w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] text-green-500 font-bold tracking-[0.1em] uppercase">Disponible</span>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[12px] tracking-wider uppercase text-gray-600">
            © {currentYear} Sebastián García — Valparaíso, Chile
          </p>
          <div className="flex gap-6 text-[12px] text-gray-600 uppercase tracking-widest font-medium">
             <span>Diseñado por mi</span>
             <span className="text-gray-800">/</span>
             <span>Code with Conviction</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;