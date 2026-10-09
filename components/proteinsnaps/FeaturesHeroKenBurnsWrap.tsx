"use client";

import { useEffect, useRef, type ReactNode } from "react";

type FeaturesHeroKenBurnsWrapProps = {
  className?: string;
  children: ReactNode;
};

export function FeaturesHeroKenBurnsWrap({ className, children }: FeaturesHeroKenBurnsWrapProps) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const mobileQuery = window.matchMedia("(max-width: 1023px)");
    let observer: IntersectionObserver | null = null;

    const setActive = (active: boolean) => {
      el.classList.toggle("ps-features-hero-kenburns-active", active);
    };

    const teardown = () => {
      observer?.disconnect();
      observer = null;
      setActive(false);
    };

    const setup = () => {
      if (!mobileQuery.matches) {
        teardown();
        return;
      }

      if (observer) return;

      observer = new IntersectionObserver(
        ([entry]) => {
          setActive(Boolean(entry?.isIntersecting));
        },
        { threshold: 0.2, rootMargin: "0px 0px -5% 0px" }
      );
      observer.observe(el);
    };

    setup();
    mobileQuery.addEventListener("change", setup);

    return () => {
      mobileQuery.removeEventListener("change", setup);
      teardown();
    };
  }, []);

  return (
    <div ref={wrapRef} className={className}>
      {children}
    </div>
  );
}
