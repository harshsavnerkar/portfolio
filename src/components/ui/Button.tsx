"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  icon?: ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  icon,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-offset-2 focus:ring-offset-black overflow-hidden group";

  const variants = {
    primary:
      "bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:shadow-[0_0_40px_rgba(188,19,254,0.6)] border border-white/20 hover:border-white/50",
    secondary:
      "bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 border border-white/10 hover:border-white/30 shadow-lg hover:shadow-white/10",
    outline:
      "border-2 border-neon-blue/60 text-neon-blue hover:bg-neon-blue/10 hover:border-neon-blue hover:text-white hover:shadow-[0_0_20px_rgba(0,243,255,0.3)]",
    ghost:
      "text-gray-300 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-2 rounded-lg",
    md: "px-6 py-3 text-base gap-2.5 rounded-xl",
    lg: "px-8 py-4 text-lg gap-3 rounded-2xl",
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {/* Glossy Reflection overlay for Primary buttons */}
      {variant === "primary" && (
        <span className="absolute inset-0 w-full h-full bg-gradient-to-t from-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span>{icon}</span>}
      </span>
    </motion.button>
  );
}
