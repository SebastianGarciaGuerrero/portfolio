import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://sebastiangarcia.cl";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sebastián García — Desarrollador Frontend & React",
    template: "%s | Sebastián García",
  },
  description:
    "Portfolio de Sebastián García, desarrollador Frontend especializado en React, Next.js y SQL. Interfaces dinámicas, código limpio e integración de IA. Valparaíso, Chile.",
  keywords: [
    "Sebastián García",
    "Desarrollador Frontend",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "PostgreSQL",
    "Desarrollador Chile",
    "Portfolio",
  ],
  authors: [{ name: "Sebastián García", url: siteUrl }],
  creator: "Sebastián García",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName: "Sebastián García — Portfolio",
    title: "Sebastián García — Desarrollador Frontend & React",
    description:
      "Interfaces dinámicas con React y Next.js, datos con SQL e integración de IA. Mira mis proyectos y hablemos.",
    images: [
      {
        url: "/image/zeva.png",
        width: 450,
        height: 450,
        alt: "Sebastián García — Desarrollador Frontend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sebastián García — Desarrollador Frontend & React",
    description:
      "Interfaces dinámicas con React y Next.js, datos con SQL e integración de IA.",
    images: ["/image/zeva.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
