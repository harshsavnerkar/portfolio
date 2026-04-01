"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingNameProps {
  name: string;
  className?: string;
}

export default function TypingName({ name, className = "" }: TypingNameProps) {
  const [displayedName, setDisplayedName] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < name.length) {
      const timeout = setTimeout(() => {
        setDisplayedName((prev) => prev + name[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 150); // Speed of typing per letter

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, name]);

  return (
    <div className={`font-mono ${className} text-center`}>
      <motion.span
        className="text-4xl md:text-6xl text-white font-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: isComplete ? 1 : 0.7 }}
        transition={{ duration: 0.3 }}
      >
        {displayedName}
      </motion.span>
      <motion.span
        className="inline-block w-[2px] h-[1.1em] bg-neon-blue ml-2 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      />
    </div>
  );
}
