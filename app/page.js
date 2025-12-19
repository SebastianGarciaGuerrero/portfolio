import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background-dark">
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
