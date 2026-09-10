"use client";

import { useEffect, useRef } from "react";

interface ParallaxImageProps {
  src: string;
  speed?: number;
  minHeight?: string;
}

const DESKTOP_MIN_WIDTH = 1024;

export function ParallaxImage({ src, speed = 0.2, minHeight }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const inner = innerRef.current;
    const container = containerRef.current;
    if (!inner || !container) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      inner.style.transform = "none";
      return;
    }

    let ticking = false;

    const updateParallax = () => {
      if (window.innerWidth < DESKTOP_MIN_WIDTH) {
        inner.style.transform = "none";
        ticking = false;
        return;
      }

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.bottom < -300 || rect.top > windowHeight + 300) {
        ticking = false;
        return;
      }

      const sectionCenterY = rect.top + rect.height / 2;
      const viewportCenterY = windowHeight / 2;
      const offset = sectionCenterY - viewportCenterY;
      const translateY = offset * speed;

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
