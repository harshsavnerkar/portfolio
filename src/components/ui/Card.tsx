"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface CardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function Card({
  children,
  className = "",
  hoverEffect = true,
  ...props
}: CardProps) {
  return (
    <motion.div
      className={`relative group overflow-hidden ${className}`}
      whileHover={hoverEffect ? { y: -8, scale: 1.02 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...props}
    >
      {/* Animated Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl" />
      
      {/* Top Border Highlight */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 z-10" />

      {/* Main Card Content */}
      <div className="relative glass-card rounded-2xl p-6 h-full flex flex-col z-10 backdrop-blur-xl border border-white/10 group-hover:border-white/20 transition-colors duration-500 overflow-hidden">
        {/* Glow point light that follows cursor concept could go here if using mouse tracking, but static subtle gradient is cleaner for performance */}
        <div className="relative z-20 h-full flex flex-col">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
