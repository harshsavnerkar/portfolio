"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useActiveSection } from "@/hooks/useActiveSection";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ showIntro = false }: { showIntro?: boolean }) {
  const scrollPosition = useScrollPosition();
  const activeSection = useActiveSection([
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isScrolled = scrollPosition > 20;

  return (
    <>
      {/* Desktop Floating Navigation */}
      <motion.nav
        className="fixed top-8 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={
          showIntro
            ? { y: -100, x: "-50%", opacity: 0 }
            : { y: 0, x: "-50%", opacity: 1 }
        }
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: showIntro ? 0 : 0.8,
        }}
      >
        <div
          className={`glass-card rounded-full px-4 py-2 flex items-center gap-1 transition-all duration-500 ${isScrolled ? "shadow-2xl shadow-neon-blue/20 bg-black/40 backdrop-blur-xl" : "bg-black/20 backdrop-blur-md"}`}
        >
          <Link
            href="/"
            className="text-xl font-bold gradient-text tracking-tight px-4"
          >
            HS
          </Link>

          <div className="w-px h-6 bg-white/10 mx-2" />

          {/* Resume Download Button */}
          <a
            href="/resume.pdf"
            download="Harsh_Savnerkar_Resume.pdf"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white text-sm font-semibold hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300"
          >
            Resume
          </a>

          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors group z-10 overflow-hidden"
              >
                <span
                  className={`relative z-10 transition-colors duration-300 ${isActive ? "text-primary font-bold" : "text-gray-300 group-hover:text-white"}`}
                >
                  {link.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-white rounded-full z-0 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </motion.nav>

      {/* Mobile Navigation Header */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ${
          isScrolled ? "glass-dark py-4 shadow-lg" : "bg-transparent py-4"
        }`}
        initial={{ y: -100 }}
        animate={showIntro ? { y: -100 } : { y: 0 }}
        transition={{ duration: 0.5, delay: showIntro ? 0 : 0.8 }}
      >
        <div className="px-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text">
            HS
          </Link>
          <button
            className="p-2 text-gray-300 hover:text-white rounded-lg transition-colors bg-white/5 border border-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="relative w-64 glass-dark h-full p-6 shadow-2xl border-l border-white/10"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col space-y-4 mt-16">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`px-4 py-3 rounded-xl text-lg font-medium transition-all ${
                        isActive
                          ? "text-primary bg-white shadow-lg"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              {/* Resume Download Button - Mobile */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href="/resume.pdf"
                  download="Harsh_Savnerkar_Resume.pdf"
                  className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white text-lg font-semibold hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 text-center block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
