"use client";

import { motion } from "framer-motion";

interface StaggerWordsProps {
  text: string;
  className?: string;
  wordClassName?: string;
}

export function StaggerWords({ text, className, wordClassName }: StaggerWordsProps) {
  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.08 } },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className={`inline-block ${wordClassName ?? ""} ${i < words.length - 1 ? "mr-[0.3em]" : ""}`}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
