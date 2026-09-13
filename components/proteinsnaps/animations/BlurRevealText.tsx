"use client";

import { motion } from "framer-motion";

interface BlurRevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  /** Blur fade only — no vertical shift (for carousels). */
  fadeOnly?: boolean;
}

export function BlurRevealText({
  text,
  className,
  delay = 0,
  fadeOnly = false,
}: BlurRevealTextProps) {
  return (
    <motion.span
      initial={{
        opacity: 0,
        filter: "blur(12px)",
        ...(fadeOnly ? {} : { y: 8 }),
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        ...(fadeOnly ? {} : { y: 0 }),
      }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {text}
    </motion.span>
  );
}
