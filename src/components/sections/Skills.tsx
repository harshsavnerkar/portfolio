"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { skills } from "@/utils/constants";

const categories = Object.keys(skills) as Array<keyof typeof skills>;

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof skills>(
    "Programming Languages",
  );

  return (
    <Section
      id="skills"
      className="bg-gradient-to-b from-secondary/30 via-primary to-primary relative"
    >
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-neon-purple/5 blur-[150px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="text-center mb-16 relative z-10 p-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
            The technologies and tools I utilize to craft digital experiences.
          </p>
        </motion.div>
      </div>

      {/* Category Tabs */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-16 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 relative overflow-hidden ${
              activeCategory === category
                ? "text-white shadow-lg shadow-neon-blue/20"
                : "glass bg-white/5 text-gray-300 hover:text-white hover:bg-white/10"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {activeCategory === category && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple -z-10"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
          >
            {skills[activeCategory].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <Card
                  className="group h-full flex flex-col justify-center"
                  hoverEffect={true}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg glow shrink-0">
                      <svg
                        className="w-6 h-6 text-white stroke-[1.5px]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300">
                        {skill.name}
                      </h3>
                      <p className="text-neon-blue/80 text-sm font-medium">
                        {skill.level}% Proficiency
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar Container */}
                  <div className="relative w-full h-2.5 bg-black/40 rounded-full overflow-hidden mt-auto border border-white/5 shadow-inner">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-neon-blue to-neon-purple"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 1.2,
                        delay: index * 0.1 + 0.3,
                        type: "spring",
                        damping: 20,
                      }}
                    >
                      {/* Shine effect on progress bar */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
