"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

function FadeInUp({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const COVERFLOW_CARDS = [
  {
    id: "proteinsnaps",
    name: "ProteinSnaps",
    tagline: "AI Nutrition & Fitness Tracker",
    status: "Live on Android",
    initial: "PS",
    placeholderClass: "lf-placeholder-ps",
  },
  {
    id: "proteinsnaps-ios",
    name: "ProteinSnaps iOS",
    tagline: "Coming Soon to App Store",
    status: "Coming Soon",
    initial: "iOS",
    placeholderClass: "lf-placeholder-ps-ios",
  },
  {
    id: "posthunt",
    name: "PostHunt",
    tagline: "AI Social Media Agent",
    status: "In Development",
    initial: "PH",
    placeholderClass: "lf-placeholder-ph",
  },
  {
    id: "amora",
    name: "AMORA",
    tagline: "AI Grief Companion",
    status: "In Development",
    initial: "AM",
    placeholderClass: "lf-placeholder-am",
  },
  {
    id: "money-burn-board",
    name: "Money Burn Board",
    tagline: "Crypto Charity Leaderboard",
    status: "Coming Soon",
    initial: "MB",
    placeholderClass: "lf-placeholder-mb",
  },
  {
    id: "studio",
    name: "LumexForge Studio",
    tagline: "Building Tomorrow's Apps",
    status: "Est. 2024",
    initial: "LF",
    placeholderClass: "lf-placeholder-studio",
  },
  {
    id: "stealth",
    name: "Coming Next",
    tagline: "New App in Stealth Mode",
    status: "Stay Tuned",
    initial: "?",
    placeholderClass: "lf-placeholder-stealth",
  },
] as const;

const APPS = [
  {
    id: "proteinsnaps",
    name: "ProteinSnaps",
    tagline: "AI-powered nutrition and fitness tracking",
    status: "Live on Android",
    statusClass: "bg-success/10 text-success ring-success/30",
    placeholderClass: "lf-placeholder-ps",
    imageLabel: "LF-App-PS.webp",
    cta: "Visit App →",
    href: "https://proteinsnaps.lumexforge.com",
    external: true,
  },
  {
    id: "posthunt",
    name: "PostHunt",
    tagline: "AI social media content creation agent",
    status: "In Development",
    statusClass: "bg-amber-500/15 text-amber-400 ring-amber-500/30",
    placeholderClass: "lf-placeholder-ph",
    imageLabel: "LF-App-PH.webp",
    cta: "Learn More →",
    href: "/contact",
    external: false,
  },
  {
    id: "amora",
    name: "AMORA",
    tagline: "AI grief companion and portrait app",
    status: "In Development",
    statusClass: "bg-amber-500/15 text-amber-400 ring-amber-500/30",
    placeholderClass: "lf-placeholder-am",
    imageLabel: "LF-App-AM.webp",
    cta: "Learn More →",
    href: "/contact",
    external: false,
  },
  {
    id: "money-burn-board",
    name: "Money Burn Board",
    tagline: "Crypto charity money destruction leaderboard",
    status: "Coming Soon",
    statusClass: "bg-accent-secondary/15 text-accent-secondary ring-accent-secondary/30",
    placeholderClass: "lf-placeholder-mb",
    imageLabel: "LF-App-MB.webp",
    cta: "Learn More →",
    href: "/contact",
    external: false,
  },
] as const;

const VALUES = [
  {
    title: "Intelligent Design",
    description: "We build AI-first products that solve real problems with thoughtful, human-centered interfaces.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    title: "Mobile Native",
    description: "iOS and Android from day one — crafted for performance, polish, and the platforms people use daily.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: "Quality Obsessed",
    description: "Every pixel, every interaction matters — we ship with the care of a boutique studio, not a factory.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
] as const;

const STATS = [
  { value: "4 Apps Built", label: "Product ecosystem" },
  { value: "2 Platforms", label: "iOS & Android" },
  { value: "1 Vision", label: "Craft with purpose" },
] as const;

function getCoverflowTransform(index: number, currentIndex: number, total: number) {
  let offset = index - currentIndex;

  if (offset > total / 2) {
    offset -= total;
  } else if (offset < -total / 2) {
    offset += total;
  }

  const absOffset = Math.abs(offset);
  const sign = Math.sign(offset) || 1;

  let translateX = offset * 320;
  const translateZ = -absOffset * 200;
  const rotateY = -sign * Math.min(absOffset * 60, 60);
  let opacity = 1 - absOffset * 0.2;
  const scale = 1 - absOffset * 0.1;

  if (absOffset > 3) {
    opacity = 0;
    translateX = sign * 800;
  }

  return {
    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
    opacity,
    zIndex: 100 - absOffset,
    isActive: index === currentIndex,
  };
}

function CoverflowCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = COVERFLOW_CARDS.length;

  const updateIndex = useCallback(
    (nextIndex: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(((nextIndex % total) + total) % total);
      window.setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating, total]
  );

  const navigate = useCallback(
    (direction: number) => {
      updateIndex(currentIndex + direction);
    },
    [currentIndex, updateIndex]
  );

  const goToIndex = useCallback(
    (index: number) => {
      if (index === currentIndex) return;
      updateIndex(index);
    },
    [currentIndex, updateIndex]
  );

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
    setIsPlaying(false);
  }, []);

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) return;
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % total;
        setIsAnimating(true);
        window.setTimeout(() => setIsAnimating(false), 600);
        return next;
      });
    }, 4000);
    setIsPlaying(true);
  }, [total]);

  const toggleAutoplay = useCallback(() => {
    if (isPlaying) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  }, [isPlaying, startAutoplay, stopAutoplay]);

  const handleUserInteraction = useCallback(() => {
    stopAutoplay();
  }, [stopAutoplay]);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [startAutoplay]);

  useEffect(() => {
    containerRef.current?.focus();
  }, []);

  const activeCard = COVERFLOW_CARDS[currentIndex];

  return (
    <div className="lf-coverflow-wrapper">
      <div
        ref={containerRef}
        className="lf-coverflow-container"
        tabIndex={0}
        role="region"
        aria-label="Product coverflow carousel"
        aria-roledescription="carousel"
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            handleUserInteraction();
            navigate(-1);
          }
          if (e.key === "ArrowRight") {
            handleUserInteraction();
            navigate(1);
          }
        }}
      >
        <div className="lf-coverflow">
          {COVERFLOW_CARDS.map((card, index) => {
            const { transform, opacity, zIndex, isActive } = getCoverflowTransform(
              index,
              currentIndex,
              total
            );

            return (
              <div
                key={card.id}
                className={`lf-coverflow-item${isActive ? " active" : ""}`}
                style={{ transform, opacity, zIndex }}
                onClick={() => {
                  handleUserInteraction();
                  goToIndex(index);
                }}
                role="button"
                tabIndex={-1}
                aria-hidden={!isActive}
                aria-label={`${card.name}: ${card.tagline}`}
              >
                <div className={`lf-coverflow-cover ${card.placeholderClass}`}>
                  <div className="lf-coverflow-logo">{card.initial}</div>
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">
                    {card.name}
                  </h3>
                  <p className="mt-3 text-base text-foreground-secondary">{card.tagline}</p>
                  <span className="mt-4 inline-flex rounded-full border border-white/[0.12] bg-white/[0.06] px-3 py-1 text-xs font-medium text-foreground-secondary">
                    {card.status}
                  </span>
                </div>
                <div className="lf-coverflow-reflection" aria-hidden="true">
                  <div className={`lf-coverflow-reflection-inner ${card.placeholderClass}`} />
                  <div className="lf-coverflow-reflection-fade" />
                </div>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          className="lf-coverflow-nav prev"
          aria-label="Previous slide"
          onClick={() => {
            handleUserInteraction();
            navigate(-1);
          }}
        >
          ‹
        </button>
        <button
          type="button"
          className="lf-coverflow-nav next"
          aria-label="Next slide"
          onClick={() => {
            handleUserInteraction();
            navigate(1);
          }}
        >
          ›
        </button>

        <div className="lf-coverflow-dots" role="tablist" aria-label="Carousel slides">
          {COVERFLOW_CARDS.map((card, index) => (
            <button
              key={card.id}
              type="button"
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Go to ${card.name}`}
              className={`lf-coverflow-dot${index === currentIndex ? " active" : ""}`}
              onClick={() => {
                handleUserInteraction();
                goToIndex(index);
              }}
            />
          ))}
        </div>

        <button
          type="button"
          className="lf-coverflow-play-pause"
          aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
          onClick={toggleAutoplay}
        >
          {isPlaying ? (
            <span className="lf-pause-icon">❚❚</span>
          ) : (
            <span className="lf-play-icon">▶</span>
          )}
        </button>
      </div>

      <div className="mt-6 text-center" aria-live="polite">
        <p key={activeCard.id} className="lf-coverflow-info-animate text-lg font-semibold text-foreground">
          {activeCard.name}
        </p>
        <p key={`${activeCard.id}-desc`} className="lf-coverflow-info-animate mt-1 text-sm text-foreground-secondary">
          {activeCard.tagline}
        </p>
      </div>
    </div>
  );
}

function AboutParallaxSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let ticking = false;

    const update = () => {
      if (motionQuery.matches) {
        bg.style.transform = "none";
        ticking = false;
        return;
      }

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.bottom < 0 || rect.top > windowHeight) {
        ticking = false;
        return;
      }

      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      const offset = (progress - 0.5) * rect.height * 0.2;
      bg.style.transform = `translate3d(0, ${offset}px, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden py-28">
      <div ref={bgRef} className="lf-about-parallax-bg absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-background-secondary via-[#1a1a2e] to-[#0f0f1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_20%_50%,rgba(79,70,229,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_85%_40%,rgba(0,194,255,0.12),transparent_55%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-16 px-6">
        <FadeInUp>
          <h2 className="heading-section">About LumexForge</h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground-secondary">
            LumexForge is an independent mobile studio crafting intelligent apps
            for iOS and Android. We combine AI, thoughtful design, and native
            performance to build products that earn their place on your home screen.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.12}>
          <div className="grid grid-cols-3 gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.value}
                className="rounded-2xl border border-white/[0.08] bg-[#141428]/80 p-6 text-center backdrop-blur-sm"
              >
                <p className="text-xl font-bold tracking-tight text-foreground">{stat.value}</p>
                <p className="mt-2 text-xs text-foreground-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

export function ForgeDesktopHome() {
  return (
    <div className="lf-desktop-home">
      {/* SECTION 1 — HERO + COVERFLOW */}
      <section className="relative flex min-h-screen flex-col overflow-hidden pt-[4.5rem]">
        <div className="absolute inset-0 -z-20 bg-[#0F0F1A]" aria-hidden="true" />
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(79,70,229,0.18),transparent_65%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_45%_40%_at_80%_70%,rgba(0,194,255,0.08),transparent_60%)]"
          aria-hidden="true"
        />

        <div className="lf-particles absolute inset-0 -z-10" aria-hidden="true">
          <span className="lf-particle lf-particle--violet" />
          <span className="lf-particle lf-particle--cyan" />
          <span className="lf-particle lf-particle--violet" />
          <span className="lf-particle lf-particle--cyan" />
          <span className="lf-particle lf-particle--violet" />
          <span className="lf-particle lf-particle--cyan" />
          <span className="lf-particle lf-particle--violet" />
          <span className="lf-particle lf-particle--cyan" />
          <span className="lf-particle lf-particle--violet" />
          <span className="lf-particle lf-particle--cyan" />
        </div>

        <div className="mx-auto w-full max-w-7xl flex-1 px-6 py-16">
          <FadeInUp className="text-center">
            <h1 className="text-6xl font-bold leading-[1.05] tracking-tight">
              <span className="text-gradient">We Build Apps</span>
              <br />
              <span className="text-gradient-accent">That Matter.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-foreground-secondary">
              A boutique mobile studio crafting intelligent apps for iOS and Android
            </p>
          </FadeInUp>

          <FadeInUp delay={0.15} className="mt-12">
            <CoverflowCarousel />
          </FadeInUp>
        </div>
      </section>

      {/* SECTION 2 — APPS SHOWCASE */}
      <section id="products" className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInUp className="mb-16 text-center">
            <p className="eyebrow mb-4">What We Build</p>
            <h2 className="heading-section">Our Products</h2>
          </FadeInUp>

          <div className="grid grid-cols-2 gap-8">
            {APPS.map((app, index) => (
              <FadeInUp key={app.id} delay={index * 0.08}>
                <article className="lf-3d-card group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#141428]">
                  <div
                    className={`relative aspect-video ${app.placeholderClass}`}
                    aria-label={`${app.name} preview placeholder`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141428] via-transparent to-transparent opacity-80" />
                    <span className="absolute bottom-4 right-4 rounded-md bg-black/40 px-2 py-1 font-mono text-[10px] text-foreground-muted backdrop-blur-sm">
                      {app.imageLabel}
                    </span>
                  </div>

                  <div className="p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                          {app.name}
                        </h3>
                        <p className="mt-2 text-foreground-secondary">{app.tagline}</p>
                      </div>
                      <span
                        className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ring-1 ${app.statusClass}`}
                      >
                        {app.status}
                      </span>
                    </div>

                    {app.external ? (
                      <a
                        href={app.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground-secondary transition-all duration-300 hover:text-accent-secondary"
                      >
                        {app.cta}
                      </a>
                    ) : (
                      <Link
                        href={app.href}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground-secondary transition-all duration-300 hover:text-accent-secondary"
                      >
                        {app.cta}
                      </Link>
                    )}
                  </div>
                </article>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — STUDIO VALUES */}
      <section id="values" className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInUp className="mb-16 text-center">
            <h2 className="heading-section">Studio Values</h2>
          </FadeInUp>

          <div className="grid grid-cols-3 gap-8">
            {VALUES.map((value, index) => (
              <FadeInUp key={value.title} delay={index * 0.1}>
                <article className="lf-clay-card lf-3d-card h-full rounded-2xl border border-accent-primary/20 p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-primary/5 text-accent-primary ring-1 ring-accent-primary/20">
                    {value.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    {value.description}
                  </p>
                </article>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — ABOUT STRIP */}
      <AboutParallaxSection />

      {/* SECTION 5 — CTA */}
      <section id="cta" className="py-28">
        <FadeInUp>
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-br from-accent-primary/30 via-[#141428] to-accent-secondary/25 px-16 py-20 text-center shadow-[0_30px_80px_-30px_rgba(79,70,229,0.45)]">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)]"
                aria-hidden="true"
              />

              <h2 className="relative heading-section text-balance">
                Ready to build something great?
              </h2>
              <p className="relative mx-auto mt-5 max-w-2xl text-lg text-foreground-secondary">
                Explore our apps or get in touch with the team
              </p>

              <div className="relative mt-10 flex items-center justify-center gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-xl bg-accent-primary px-7 py-3.5 text-base font-semibold text-white shadow-[0_0_30px_-6px_rgba(79,70,229,0.55)] transition-all hover:opacity-90"
                >
                  View All Apps
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/[0.06] px-7 py-3.5 text-base font-semibold text-foreground backdrop-blur-sm transition-all hover:border-accent-secondary/40 hover:text-accent-secondary"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </FadeInUp>
      </section>
    </div>
  );
}
