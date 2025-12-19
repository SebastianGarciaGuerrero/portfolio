/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // AQUÍ está la magia: extendemos la paleta, no la borramos.
      colors: {
        // Tu Verde "Marca Personal"
        primary: {
          ...colors.green,
          DEFAULT: colors.green[500], // primary
          dark: colors.green[700], // primary-dark (para hovers)
          light: colors.green[400], // primary-light (para textos suaves)
        },
        // Un secundario que combine bien (Esmeralda)
        secondary: colors.emerald,

        // Colores semánticos para el fondo oscuro
        background: {
          dark: "#121212", // Tu fondo base actual
          card: "#181818", // Fondo de las tarjetas
          overlay: "rgba(18, 18, 18, 0.95)", // Para el menú móvil
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // Tu nuevo gradiente VERDE para el Hero
        "hero-gradient":
          "linear-gradient(to right, var(--tw-colors-green-400), var(--tw-colors-emerald-600))",
      },
    },
  },
  plugins: [],
};
