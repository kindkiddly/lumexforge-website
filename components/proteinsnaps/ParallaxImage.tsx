"use client";

import { useEffect, useRef } from "react";

interface ParallaxImageProps {
  src: string;
  speed?: number;
  minHeight?: string;
}

export function ParallaxImage({ src, speed = 0.5, minHeight }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const inner = innerRef.current;
    const container = containerRef.current;
    if (!inner || !container) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let ticking = false;

    const updateParallax = () => {
      if (motionQuery.matches) {
        inner.style.transform = "none";
        ticking = false;
        return;
      }

      const width = window.innerWidth;
      const effectiveSpeed =
        width < 480 ? 0.1 : width < 768 ? 0.15 : width < 1024 ? 0.3 : speed;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.bottom < -300 || rect.top > windowHeight + 300) {
        ticking = false;
        return;
      }

      const scrollRange = windowHeight + rect.height;
      const progress = (windowHeight - rect.top) / scrollRange;
      const clamped = Math.max(0, Math.min(1, progress));
      const maxShift = rect.height * effectiveSpeed;
      const translateY = (0.5 - clamped) * maxShift * 2;

      inner.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    const onResize = () => {
      onScroll();
    };

    const onMotionChange = () => {
      if (motionQuery.matches) {
        inner.style.transform = "none";
      } else {
        updateParallax();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    motionQuery.addEventListener("change", onMotionChange);
    updateParallax();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      motionQuery.removeEventListener("change", onMotionChange);
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        ...(minHeight ? { minHeight } : {}),
      }}
    >
      <div
        ref={innerRef}
        className="ps-parallax-inner"
        style={{ backgroundImage: `url(${src})` }}
      />
    </div>
  );
}
