"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import LogoLoader from "@/components/ui/LogoLoader";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import ParticleBackground from "@/components/ui/ParticleBackground";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLoaderComplete = () => {
    setShowLoader(false);
  };

  if (!mounted) {
    // Basic fallback until React hydrates
    return <main className="min-h-screen bg-black" />;
  }

  return (
    <main className="relative min-h-screen bg-black overflow-hidden font-sans">
      {/* Particle Background */}
      <ParticleBackground />

      <AnimatePresence>
        {showLoader && <LogoLoader onComplete={handleLoaderComplete} />}
      </AnimatePresence>

      <div
        className={`transition-opacity duration-1000 ${
          showLoader ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Navigation */}
        <Navbar showIntro={false} />

        {/* Home Sections */}
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
