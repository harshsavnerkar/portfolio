"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (
        (e.target as HTMLElement).tagName === "A" ||
        (e.target as HTMLElement).tagName === "BUTTON"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-neon-blue rounded-full pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.15,
        }}
      />

      {/* Outer glow ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border-2 border-neon-purple rounded-full pointer-events-none z-[9998] opacity-50"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 1.3 : 1,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.2,
        }}
      />

      {/* Glow effect */}
      <div
        className="fixed top-0 left-0 w-32 h-32 rounded-full pointer-events-none z-[9997] opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0, 243, 255, 0.3) 0%, transparent 70%)",
          transform: `translate(${mousePosition.x - 64}px, ${
            mousePosition.y - 64
          }px)`,
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.6, 1)",
        }}
      />
    </>
  );
}
