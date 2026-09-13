"use client";

import { motion } from "framer-motion";

interface StaggerWordsProps {
  text: string;
  className?: string;
  wordClassName?: string;
  /** Animate when mounted (carousels) instead of on scroll into view. */
  animateOnMount?: boolean;
  /** Opacity-only stagger — avoids vertical layout shift. */
  fadeOnly?: boolean;
}

export function StaggerWords({
  text,
  className,
  wordClassName,
  animateOnMount = false,
  fadeOnly = false,
}: StaggerWordsProps) {
  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      initial="hidden"
      {...(animateOnMount
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: { once: true } })}
      variants={{
        visible: { transition: { staggerChildren: 0.06 } },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={{
            hidden: fadeOnly ? { opacity: 0 } : { opacity: 0, y: 12 },
            visible: {
              opacity: 1,
              ...(fadeOnly ? {} : { y: 0 }),
              transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
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
