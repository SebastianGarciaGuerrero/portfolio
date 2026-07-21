import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden">
      {/* Fondo decorativo fijo: color base + grilla + resplandores */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-background-dark">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary-dark/15 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <Navbar />
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-4 mt-24 space-y-24">
        <HeroSection />

        <AboutSection />

        <ProjectSection />

        <EmailSection />
      </div>

      <Footer />
    </main>
  );
}
