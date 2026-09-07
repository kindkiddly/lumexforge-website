"use client";

import { motion } from "framer-motion";

interface ZoomRevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ZoomRevealText({ children, className, delay = 0 }: ZoomRevealTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
