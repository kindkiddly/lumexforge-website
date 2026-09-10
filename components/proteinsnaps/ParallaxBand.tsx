"use client";

import {
  useCallback,
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";

const DESKTOP_MIN_WIDTH = 1024;

interface ParallaxBandProps {
  imageSrc: string;
  minHeight?: string;
  children?: ReactNode;
  overlayOpacity?: number;
  speed?: number;
}

export function ParallaxBand({
  imageSrc,
  minHeight = "50vh",
  children,
  overlayOpacity = 0.7,
  speed = 0.4,
}: ParallaxBandProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const tickingRef = useRef(false);

  const updateParallax = useCallback(() => {
    const bg = bgRef.current;
    const section = sectionRef.current;
    if (!bg || !section) {
      tickingRef.current = false;
      return;
    }

    if (window.innerWidth < DESKTOP_MIN_WIDTH) {
      bg.style.transform = "";
      tickingRef.current = false;
      return;
    }

    const windowHeight = window.innerHeight;
    const rect = section.getBoundingClientRect();

    if (rect.bottom < -300 || rect.top > windowHeight + 300) {
      tickingRef.current = false;
      return;
    }

    const sectionCenterY = rect.top + rect.height / 2;
    const viewportCenterY = windowHeight / 2;
    const offset = sectionCenterY - viewportCenterY;
    const totalTravel = windowHeight + rect.height;
    let normalized = offset / (totalTravel / 2);
    normalized = Math.max(-1, Math.min(1, normalized));

    const maxShift = windowHeight * speed;
    const translateY = normalized * maxShift;

    bg.style.transform = `translate3d(0,${translateY.toFixed(1)}px,0)`;
    tickingRef.current = false;
  }, [speed]);

  useEffect(() => {
    const onScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;
        window.requestAnimationFrame(updateParallax);
      }
    };

    const onResize = () => {
      if (window.innerWidth < DESKTOP_MIN_WIDTH && bgRef.current) {
        bgRef.current.style.transform = "";
      } else {
        updateParallax();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    updateParallax();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [updateParallax]);

  const overlayStyle: CSSProperties = { opacity: overlayOpacity };

  return (
    <section
      ref={sectionRef}
      className="ps-parallax-section"
      style={{ minHeight }}
    >
      <div
        ref={bgRef}
        className="ps-parallax-bg"
        style={{ backgroundImage: `url(${imageSrc})` }}
        aria-hidden="true"
      />
      <div
        className="ps-parallax-overlay"
        style={overlayStyle}
        aria-hidden="true"
      />
      {children ? <div className="ps-parallax-content">{children}</div> : null}
    </section>
  );
}
