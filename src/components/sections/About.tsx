"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { personalInfo, highlights } from "@/utils/constants";

export default function About() {
  return (
    <Section id="about" className="bg-gradient-to-b from-primary via-primary to-secondary/20 bg-cover relative z-10 overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute inset-0 bg-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 w-1/3 h-[50vh] bg-neon-blue/5 blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-24 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Who <span className="gradient-text">I Am</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Get to know my journey, skills, and what drives me.
          </p>
        </motion.div>
      </div>

      {/* Main Content Layout */}
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24 relative z-10 w-full">
        {/* Profile Image Column */}
        <motion.div
          className="flex justify-center lg:justify-end shrink-0"
          initial={{ opacity: 0, scale: 0.9, x: -50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <div className="relative group">
            {/* Pulsing Gradient Border Effect */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-neon-blue via-neon-purple to-neon-blue rounded-[2.5rem] blur-lg opacity-40 group-hover:opacity-75 transition duration-700 animate-pulse-slow" />

            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-[2.5rem] overflow-hidden glass p-3 shrink-0 shadow-2xl z-10 bg-black/50">
              <div className="w-full h-full rounded-[2rem] bg-gradient-to-br from-[#121212] flex items-center justify-center to-[#191919] overflow-hidden shadow-inner group-hover:scale-105 transition-transform duration-700">
                <span className="text-8xl md:text-[8rem] font-bold gradient-text opacity-90 drop-shadow-md">
                  HS
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bio Highlights Column */}
        <motion.div
          className="space-y-8 max-w-2xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
              <span className="gradient-text">{personalInfo.name}</span>
            </h3>
            <h4 className="text-neon-blue font-medium text-lg tracking-widest uppercase">Software Engineer</h4>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed mix-blend-plus-lighter">
            {personalInfo.bio}
          </p>

          <div className="grid grid-cols-2 gap-8 pt-8 mt-8 border-t border-white/10">
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Location</h4>
              <p className="text-white md:text-lg font-medium tracking-wide">{personalInfo.location}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Contact</h4>
              <p className="text-white md:text-lg font-medium tracking-wide break-words">{personalInfo.email}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Highlights / Features Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7, staggerChildren: 0.2 }}
      >
        {highlights.map((highlight, index) => (
          <Card key={highlight.title} className="text-center h-full group">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg glow">
                <svg
                  className="w-8 h-8 text-white stroke-[1.5px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {index === 0 && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  )}
                  {index === 1 && (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  )}
                  {index === 2 && (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  )}
                  {index === 3 && (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  )}
                </svg>
              </div>
            </div>
            
            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
              {highlight.title}
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
          </Card>
        ))}
      </motion.div>
    </Section>
  );
}
