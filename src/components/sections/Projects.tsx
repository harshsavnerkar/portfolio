"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { projects } from "@/utils/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export default function Projects() {
  return (
    <Section
      id="projects"
      className="bg-gradient-to-b from-primary via-primary to-secondary/30 relative"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            A selection of my best projects that demonstrate my skills, passion
            for building, and problem-solving abilities.
          </p>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="h-full"
          >
            <Card className="h-full group">
              {/* Project Image Header */}
              <div className="relative -mx-6 -mt-6 mb-6 h-56 overflow-hidden rounded-t-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-[800ms] ease-in-out"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />

                {/* Tech Stack Floating Tags */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 z-10">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-semibold rounded-md bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Area */}
              <div className="flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors duration-300 line-clamp-1">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-8 leading-relaxed flex-1 line-clamp-3">
                  {project.description}
                </p>

                {/* Actions */}
                <div className="flex gap-4 mt-auto">
                  {project.liveUrl && (
                    <Button
                      variant="primary"
                      size="sm"
                      className="flex-1 font-semibold"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      variant="secondary"
                      size="sm"
                      className="flex-1 font-semibold"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      Source Code
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* View More CTA */}
      <motion.div
        className="text-center mt-24 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="glass-card rounded-[2.5rem] p-10 md:p-14 inline-block max-w-2xl border-white/10 hover:border-white/20 transition-colors">
          <h3 className="text-3xl tracking-tight font-bold text-white mb-4">
            Want to see more?
          </h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg leading-relaxed">
            Check out my GitHub profile for open-source contributions,
            experimental projects, and more code.
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() =>
              window.open("https://github.com/harshsavnerkar", "_blank")
            }
          >
            Visit GitHub
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
