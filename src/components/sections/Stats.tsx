"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Section from "@/components/ui/Section";

interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

const stats: StatItem[] = [
  { label: "Projects Built", value: 5, suffix: "+" },
  { label: "Technologies", value: 8, suffix: "+" },
  { label: "Hackathons", value: 1, suffix: "" },
  { label: "GitHub Stars", value: 25, suffix: "+" },
];

function CountUpAnimation({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(interval);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <Section
      id="stats"
      className="py-16 bg-gradient-to-r from-neon-blue/5 to-neon-purple/5"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            By The Numbers
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 border border-neon-blue/30 flex items-center justify-center mb-4 hover:shadow-lg hover:shadow-neon-blue/20 transition-all duration-300">
                <motion.div
                  className="text-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                >
                  <div className="text-4xl font-black bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                    <CountUpAnimation value={stat.value} suffix={stat.suffix} />
                  </div>
                </motion.div>
              </div>
              <p className="text-gray-400 text-center text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
