"use client";

import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  gradient = false,
}: GlassCardProps) {
  return (
    <div
      className={`
        glass rounded-2xl p-6 
        ${
          gradient
            ? "border border-gradient-to-r from-neon-blue/30 to-neon-purple/30"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}
