"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import InteractiveShapes from "@/components/three/InteractiveShapes";
import TypingName from "@/components/ui/TypingName";
import { personalInfo, roles } from "@/utils/constants";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  // Typing effect for roles
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(
            displayedText.substring(0, displayedText.length - 1),
          );
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background overall gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-neon-blue/10 via-transparent to-transparent opacity-60" />

      {/* Content Container - 50/50 Split on Desktop */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column Text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.5,
          }}
        >
          <motion.div
            className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <span className="text-sm font-medium text-gray-300">
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Logo Image */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={
                  logoFailed
                    ? "https://via.placeholder.com/150/0c4a6e/ffffff?text=HS"
                    : "/logo.png"
                }
                alt="Harsh Savnerkar Logo"
                width={150}
                height={150}
                className="rounded-full border-4 border-gradient-to-r from-neon-blue to-neon-purple shadow-lg shadow-neon-blue/25 object-cover"
                onError={() => setLogoFailed(true)}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 blur-xl -z-10" />
            </div>
          </motion.div>

          {/* Typing Name Animation */}
          <motion.div
            className="mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <TypingName
              name={personalInfo.name}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold"
            />
          </motion.div>

          <motion.div
            className="text-2xl md:text-3xl font-semibold mb-8 h-10 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span className="text-gray-400">I build </span>
            <span className="text-white ml-2">{displayedText}</span>
            <motion.span
              className="inline-block w-0.5 h-8 bg-neon-blue ml-1.5 opacity-80"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </motion.div>

          <motion.p
            className="text-gray-400 text-lg max-w-lg mb-12 leading-relaxed text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            {personalInfo.bio ||
              "Transforming ideas into reality through code and creativity. Specializing in modern web applications and stunning UI designs."}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="w-full sm:w-auto min-w-[180px]"
            >
              View Projects
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto min-w-[180px]"
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column 3D Container */}
        <motion.div
          className="relative h-[50vh] lg:h-[80vh] w-full hidden md:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            ease: "easeOut",
          }}
        >
          {/* Subtle glow behind 3D object */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-neon-purple/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative w-full h-full">
            <InteractiveShapes />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={() => scrollToSection("about")}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-[2px] hover:border-white/50 transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1.5 h-2 bg-gradient-to-b from-neon-blue to-neon-purple rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
