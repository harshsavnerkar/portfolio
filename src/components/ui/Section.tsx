"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  delay?: number;
}

export default function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  delay = 0,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`relative py-24 lg:py-32 w-full flex flex-col items-center justify-center ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px", amount: 0.1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      <div className={`w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 ${containerClassName}`}>
        {children}
      </div>
    </motion.section>
  );
}
