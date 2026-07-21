# Portfolio — Sebastián García

Sitio personal de Sebastián García, desarrollador Frontend (React / Next.js) desde Valparaíso, Chile. Presenta sobre mí, skills, educación, certificados, proyectos destacados y un formulario de contacto.

**Live:** https://sebastiangarcia.cl

## Stack

- **Next.js 16** (App Router) + **React 18**
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones
- **EmailJS** para el formulario de contacto
- **lucide-react** / **react-icons** para iconografía

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
```

Otros scripts:

```bash
npm run build    # build de producción
npm run start    # servir el build
npm run lint     # ESLint
```

## Configuración

Para que los metadatos (OpenGraph / Twitter cards al compartir) apunten al dominio correcto, definir en el entorno de despliegue:

```
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

Si no se define, usa un valor por defecto en `app/layout.js`.

## Estructura

```
app/
  layout.js            # metadata global (SEO, OpenGraph, favicon)
  page.js              # composición de secciones + fondo decorativo
  globals.css          # estilos base, grilla de fondo, scrollbar
  components/          # Navbar, Hero, About, Projects, Email, Footer, ...
public/image/          # imágenes (perfil y capturas de proyectos)
```
