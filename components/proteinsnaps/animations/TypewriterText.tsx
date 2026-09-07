"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export function TypewriterText({ text, className, speed = 45 }: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayed}
      {!done && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity }}
          className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-[#00e6a8]"
        />
      )}
    </span>
  );
}
