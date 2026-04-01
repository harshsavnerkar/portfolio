"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface LogoLoaderProps {
  onComplete: () => void;
}

export default function LogoLoader({ onComplete }: LogoLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [logoFailed, setLogoFailed] = useState(false);

  useEffect(() => {
    const duration = 2000; // 2 seconds for full animation
    const interval = 16; // ~60fps
    const step = (interval / duration) * 100;
    let currentProgress = 0;

    const timer = setInterval(() => {
      currentProgress += step;
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        clearInterval(timer);
        // Complete animation and call callback after a brief pause
        setTimeout(onComplete, 300);
      } else {
        setProgress(currentProgress);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-blue/10 via-transparent to-transparent opacity-60" />

      {/* Logo and Progress Container */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Logo Image */}
        <motion.div
          className="relative"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={
                logoFailed
                  ? "https://via.placeholder.com/200/0c4a6e/ffffff?text=HS"
                  : "/logo.png"
              }
              alt="Harsh Savnerkar Logo"
              width={200}
              height={200}
              className="rounded-full border-4 border-gradient-to-r from-neon-blue to-neon-purple shadow-2xl shadow-neon-blue/50 object-cover"
              onError={() => setLogoFailed(true)}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue/30 to-neon-purple/30 blur-2xl -z-10 animate-pulse" />
          </div>
        </motion.div>

        {/* Progress Container */}
        <motion.div
          className="w-64 flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Progress Bar */}
          <div className="w-full h-1.5 rounded-full bg-white/10 border border-white/20 overflow-hidden backdrop-blur-sm">
            <motion.div
              className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
              style={{
                width: `${progress}%`,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            />
          </div>

          {/* Progress Text */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-gray-400 text-sm font-medium tracking-wider">
              {Math.round(progress)}%
            </p>
            <p className="text-gray-500 text-xs mt-1">Loading portfolio...</p>
          </motion.div>
        </motion.div>

        {/* Animated Text */}
        <motion.div
          className="text-center mt-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <p className="text-gray-400 text-sm">Harsh Savnerkar</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
