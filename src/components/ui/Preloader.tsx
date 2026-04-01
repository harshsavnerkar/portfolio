"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = "hidden";

    // Simulate loading progress
    const duration = 2500; // 2.5 seconds total
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        // Add a tiny delay at 100% before firing complete
        setTimeout(() => {
          document.body.style.overflow = "auto";
          onComplete();
        }, 300);
      }
    }, interval);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "auto";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0, 
          transition: { duration: 0.8, ease: "easeInOut" } 
        }}
      >
        {/* Central Logo Container */}
        <motion.div
          className="relative w-40 h-40 flex items-center justify-center mb-12"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Subtle logo backglow */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-neon-blue to-neon-purple rounded-3xl blur-2xl opacity-40 mix-blend-screen"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="relative z-10 w-full h-full bg-[#0a0a0a] rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            <span className="text-6xl font-extrabold gradient-text tracking-tighter">
              HS
            </span>
          </div>
        </motion.div>

        {/* Loading Progress Section */}
        <div className="w-[280px] sm:w-[400px]">
          <div className="flex justify-between items-end mb-3 font-mono text-xs tracking-widest text-gray-400 uppercase">
            <span>Initializing System...</span>
            <span className="text-neon-blue font-bold">{Math.round(progress)}%</span>
          </div>
          
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-neon-blue to-neon-purple origin-left"
              style={{ width: `${progress}%` }}
              layout
            />
          </div>
          
          <div className="mt-4 flex flex-col gap-1 font-mono text-[10px] text-gray-600 uppercase tracking-widest overflow-hidden h-8 [mask-image:linear-gradient(to_bottom,black,transparent)]">
            <motion.div
               animate={{ y: [0, -14, -28] }}
               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <div>Loading kernel modules...</div>
              <div>Mounting visual assets...</div>
              <div>Establishing neural connection...</div>
              <div>Starting main thread...</div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
