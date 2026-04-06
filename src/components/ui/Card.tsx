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
      whileHover={hoverEffect ? { y: -12, scale: 1.03 } : {}}
      transition={{ type: "spring", stiffness: 350, damping: 15 }}
      {...props}
    >
      {/* Enhanced Glow Shadow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-2xl shadow-neon-blue/30 pointer-events-none" />

      {/* Animated Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/30 via-neon-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl" />

      {/* Top Border Highlight with Animation */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 z-10"
        initial={false}
        animate={{ backgroundPosition: ["0% 0%", "100% 0%"] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
      />

      {/* Main Card Content */}
      <div className="relative glass-card rounded-2xl p-6 h-full flex flex-col z-10 backdrop-blur-xl border border-white/10 group-hover:border-neon-blue/50 transition-all duration-500 overflow-hidden shadow-lg group-hover:shadow-xl group-hover:shadow-neon-blue/20">
        {/* Glow effect background */}
        <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-700 -z-10 group-hover:-z-5" />

        <div className="relative z-20 h-full flex flex-col">{children}</div>
      </div>
    </motion.div>
  );
}
