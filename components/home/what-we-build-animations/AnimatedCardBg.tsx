"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface AnimatedCardBgProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedCardBg({ children, className }: AnimatedCardBgProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setPaused(!entry.isIntersecting),
      { threshold: 0.08, rootMargin: "50px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-[0.25] transition-opacity duration-300 ease-out group-hover:opacity-[0.45]",
        paused && "wwb-anim-paused",
        className
      )}
      aria-hidden
    >
      {children}
    </div>
  );
}
