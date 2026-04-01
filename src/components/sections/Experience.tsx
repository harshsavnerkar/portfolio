"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { experiences } from "@/utils/constants";

export default function Experience() {
  return (
    <Section
      id="experience"
      className="bg-gradient-to-b from-primary via-secondary/20 to-primary relative"
    >
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-neon-blue/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-20 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            The path I&apos;ve taken, the experience I&apos;ve gained, and the milestones I&apos;ve achieved.
          </p>
        </motion.div>
      </div>

      {/* Timeline Layout */}
      <div className="relative z-10">
        {/* Glow Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-blue transform md:-translate-x-1/2 rounded-full opacity-60 shadow-[0_0_15px_rgba(0,243,255,0.7)]" />

        {/* Timeline Items */}
        <div className="space-y-16 lg:space-y-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
              className={`relative flex items-center gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Node Ring */}
              <div className="absolute left-8 md:left-1/2 w-7 h-7 bg-primary border-[3px] border-neon-blue transform -translate-x-1/2 rounded-full z-20 shadow-[0_0_20px_rgba(0,243,255,1)] flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                 <div className="w-2.5 h-2.5 bg-neon-purple rounded-full animate-pulse-slow" />
              </div>

              {/* Content Card */}
              <div
                className={`flex-1 ml-16 md:ml-0 ${
                  index % 2 === 0
                    ? "md:pr-16 md:text-right"
                    : "md:pl-16 md:text-left"
                }`}
              >
                <Card className={`inline-block w-full md:max-w-xl group relative overflow-visible ${index % 2 === 0 ? 'md:ml-auto' : ''}`} hoverEffect={true}>
                  
                  {/* Decorative pointer matching side */}
                  <div className={`hidden md:block absolute top-[28px] w-6 h-6 bg-white/5 backdrop-blur-xl border border-white/10 rotate-45 z-0 ${index % 2 === 0 ? '-right-3 border-l-0 border-b-0' : '-left-3 border-r-0 border-t-0'}`} />

                  <div className="relative z-10">
                    <div
                      className={`flex flex-col mb-4 gap-2 ${
                        index % 2 === 0 ? "md:items-end" : "md:items-start"
                      }`}
                    >
                      <span
                        className={`inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg shadow-inner ${
                          exp.type === "education"
                            ? "bg-blue-500/10 text-blue-300 border border-blue-500/30 glow"
                            : "bg-purple-500/10 text-purple-300 border border-purple-500/30 glow-purple"
                        }`}
                      >
                        {exp.type === "education"
                          ? "Education"
                          : "Experience"}
                      </span>
                      <p className="text-gray-400 font-medium tracking-wide flex items-center gap-2">
                         <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                         </svg>
                         {exp.date}
                      </p>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                      {exp.title}
                    </h3>

                    <p className="text-neon-blue font-semibold text-lg mb-4 flex items-center gap-2">
                       {index % 2 === 0 ? null : (
                         <span className="w-1.5 h-1.5 rounded-full bg-neon-blue shadow-[0_0_5px_currentColor] hidden md:block" />
                       )}
                       {exp.organization}
                       {index % 2 === 0 ? (
                         <span className="w-1.5 h-1.5 rounded-full bg-neon-blue shadow-[0_0_5px_currentColor] hidden md:block" />
                       ) : null}
                    </p>

                    <p
                      className={`text-gray-300 leading-relaxed text-[15px] ${
                        index % 2 === 0 ? "md:mr-2" : "md:ml-2"
                      }`}
                    >
                      {exp.description}
                    </p>
                  </div>
                </Card>
              </div>

              {/* Spacer for alternating items */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
