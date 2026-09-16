"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import QRCode from "react-qr-code";

const PROTEINSNAPS_PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.proteinsnap.app&pcampaignid=web_share";
const PROTEINSNAPS_APP_STORE_URL =
  "https://apps.apple.com/us/app/proteinsnaps/id6801353318";

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

type CoverflowCard = {
  id: string;
  name: string;
  tagline: string;
  status: string;
  initial: string;
  placeholderClass: string;
  imageSrc?: string;
};

const COVERFLOW_CARDS: CoverflowCard[] = [
  {
    id: "studio",
    name: "LumexForge Studio",
    tagline: "Building Tomorrow's Apps",
    status: "Est. 2024",
    initial: "LF",
    placeholderClass: "lf-placeholder-studio",
    imageSrc: "/images/lumexforge/LF-carousel/LF-1.webp",
  },
  {
    id: "proteinsnaps",
    name: "ProteinSnaps",
    tagline: "AI Nutrition & Fitness Tracker",
    status: "Live on iOS & Android",
    initial: "PS",
    placeholderClass: "lf-placeholder-ps",
    imageSrc: "/images/lumexforge/LF-carousel/LF-2.webp",
  },
  {
    id: "ammora",
    name: "AMMORA",
    tagline: "AI Grief Companion",
    status: "In Development",
    initial: "AM",
    placeholderClass: "lf-placeholder-am",
    imageSrc: "/images/lumexforge/LF-carousel/LF-3.webp",
  },
  {
    id: "posthunt",
    name: "PostHunt",
    tagline: "AI Social Media Agent",
    status: "In Development",
    initial: "PH",
    placeholderClass: "lf-placeholder-ph",
    imageSrc: "/images/lumexforge/LF-carousel/LF-4.webp",
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
    id: "proteinsnaps-ios",
    name: "ProteinSnaps iOS",
    tagline: "Coming Soon to App Store",
    status: "Coming Soon",
    initial: "iOS",
    placeholderClass: "lf-placeholder-ps-ios",
  },
  {
    id: "stealth",
    name: "Coming Next",
    tagline: "New App in Stealth Mode",
    status: "Stay Tuned",
    initial: "?",
    placeholderClass: "lf-placeholder-stealth",
  },
] ;

const APPS = [
  {
    id: "proteinsnaps",
    name: "ProteinSnaps",
    tagline: "AI-powered nutrition and fitness tracking",
    status: "Live on iOS & Android",
    statusClass: "bg-success/10 text-success ring-success/30",
    placeholderClass: "lf-placeholder-ps",
    iconLabel: "PS",
    imageSrc: "/images/proteinsnaps/PSL-1.webp",
    cta: "Visit App →",
    href: "https://proteinsnaps.lumexforge.com",
    external: true,
  },
  {
    id: "posthunt",
    name: "PostHunt",
    tagline: "AI social media content creation agent",
    status: "In Development",
    statusClass: "bg-[#3B82F6]/15 text-[#3B82F6] ring-[#3B82F6]/30",
    placeholderClass: "lf-placeholder-ph",
    iconLabel: "PH",
    cta: "Learn More →",
    href: "/contact",
    external: false,
  },
  {
    id: "ammora",
    name: "AMMORA",
    tagline: "AI grief companion and portrait app",
    status: "In Development",
    statusClass: "bg-[#3B82F6]/15 text-[#3B82F6] ring-[#3B82F6]/30",
    placeholderClass: "lf-placeholder-am",
    iconLabel: "AM",
    cta: "Learn More →",
    href: "/contact",
    external: false,
  },
  {
    id: "money-burn-board",
    name: "Money Burn Board",
    tagline: "Crypto charity money destruction leaderboard",
    status: "Coming Soon",
    statusClass: "bg-[#06B6D4]/15 text-[#06B6D4] ring-[#06B6D4]/30",
    placeholderClass: "lf-placeholder-mb",
    iconLabel: "MB",
    cta: "Learn More →",
    href: "/contact",
    external: false,
  },
] as const;

function ProteinSnapsStoreOverlay() {
  return (
    <div className="lf-ps-media-store">
      <div className="lf-ps-store-btn-row">
        <a
          href={PROTEINSNAPS_PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="lf-store-compact-btn lf-store-compact-btn--play"
        >
          Google Play
        </a>
        <a
          href={PROTEINSNAPS_APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="lf-store-compact-btn lf-store-compact-btn--apple"
        >
          App Store
        </a>
      </div>
      <div className="lf-ps-store-qr-row">
        <div className="lf-store-qr-box">
          <QRCode
            value={PROTEINSNAPS_PLAY_STORE_URL}
            size={50}
            bgColor="#ffffff"
            fgColor="#050811"
            level="M"
          />
        </div>
        <span className="lf-store-qr-label">Scan to download</span>
      </div>
    </div>
  );
}

function CoverflowCardFace({ card }: { card: CoverflowCard }) {
  if (card.imageSrc) {
    return (
      <div className="lf-coverflow-cover lf-coverflow-cover--image">
        <div className="lf-coverflow-image-slot">
          <Image
            src={card.imageSrc}
            alt={card.name}
            fill
            sizes="480px"
            quality={100}
            unoptimized
            className="object-cover object-center"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`lf-coverflow-cover ${card.placeholderClass}`}
      aria-hidden="true"
    />
  );
}

const SERVICES_LEFT = [
  { title: "Mobile Apps", description: "iOS & Android native" },
  { title: "AI Products", description: "Intelligent automation built-in" },
  { title: "SaaS Platforms", description: "Scalable web software" },
  { title: "UI/UX Design", description: "Pixel-perfect interfaces" },
] as const;

const SERVICES_RIGHT = [
  { title: "Business Software", description: "Custom tools that work" },
  { title: "Book Publishing", description: "Writing, design, distribution" },
  { title: "Digital Consulting", description: "Strategy meets execution" },
] as const;

function ServiceListItem({ title, description }: { title: string; description: string }) {
  return (
    <p className="lf-service-list-item">
      <span className="text-sm font-medium text-foreground">{title}</span>
      <span className="text-foreground-muted" aria-hidden="true">
        {" "}
        ·{" "}
      </span>
      <span className="text-xs text-foreground-muted">{description}</span>
    </p>
  );
}

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
  }, [total]);

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
        className="lf-coverflow-container focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
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
                <CoverflowCardFace card={card} />
                <div className="lf-coverflow-reflection" aria-hidden="true">
                  {card.imageSrc ? (
                    <div className="lf-coverflow-reflection-inner relative overflow-hidden">
                      <Image
                        src={card.imageSrc}
                        alt=""
                        fill
                        sizes="480px"
                        quality={100}
                        unoptimized
                        className="lf-coverflow-reflection-image"
                      />
                    </div>
                  ) : (
                    <div className={`lf-coverflow-reflection-inner ${card.placeholderClass}`} />
                  )}
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

export function ForgeDesktopHome() {
  return (
    <div className="lf-desktop-home">
      {/* SECTION 1 — HERO + COVERFLOW */}
      <section className="relative overflow-hidden pt-[4.5rem] py-10">
        <div className="absolute inset-0 -z-20 bg-[#000814]" aria-hidden="true" />
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(6,182,212,0.12),transparent_65%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_45%_40%_at_80%_70%,rgba(59,130,246,0.1),transparent_60%)]"
          aria-hidden="true"
        />

        <div className="lf-particles absolute inset-0 -z-10" aria-hidden="true">
          <span className="lf-particle lf-particle--cyan" />
          <span className="lf-particle lf-particle--blue" />
          <span className="lf-particle lf-particle--cyan" />
          <span className="lf-particle lf-particle--blue" />
          <span className="lf-particle lf-particle--cyan" />
          <span className="lf-particle lf-particle--blue" />
          <span className="lf-particle lf-particle--cyan" />
          <span className="lf-particle lf-particle--blue" />
          <span className="lf-particle lf-particle--cyan" />
          <span className="lf-particle lf-particle--blue" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-6">
          <FadeInUp className="text-center">
            <h1 className="text-xl font-bold leading-tight tracking-tight">
              <span className="text-foreground">We Forge</span>
              <br />
              <span className="lf-text-cyan-gradient">Digital Products.</span>
            </h1>
            <p className="lf-hero-subtitle mt-2">
              Mobile apps, AI products, and SaaS platforms — built with purpose, precision, and long-term value.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.1} className="mt-2">
            <CoverflowCarousel />
          </FadeInUp>

          <p className="lf-feature-strip mt-3">
            Mobile Apps · AI Products · SaaS Platforms · Digital Publishing
          </p>
        </div>
      </section>

      {/* APPS SHOWCASE */}
      <section id="products" className="py-10">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInUp className="text-center">
            <p className="lf-section-label">OUR PRODUCTS</p>
          </FadeInUp>

          <div className="lf-apps-grid mt-3">
            {APPS.map((app, index) => (
              <FadeInUp key={app.id} delay={index * 0.08}>
                <article className="lf-app-card lf-3d-card group">
                  <div className="lf-app-card-media">
                    {"imageSrc" in app && app.imageSrc ? (
                      <>
                        <Image
                          src={app.imageSrc}
                          alt={app.name}
                          fill
                          sizes="(max-width: 896px) 50vw, 448px"
                          className="object-cover object-center"
                        />
                        {app.id === "proteinsnaps" && <ProteinSnapsStoreOverlay />}
                      </>
                    ) : (
                      <div
                        className={`lf-app-card-placeholder ${app.placeholderClass}`}
                        aria-hidden="true"
                      >
                        <span className="lf-app-card-initial">{app.iconLabel}</span>
                      </div>
                    )}
                  </div>

                  <div className="px-5 pt-4 pb-3">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <h3 className="text-base font-bold tracking-tight text-foreground">
                        {app.name}
                      </h3>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ${app.statusClass}`}
                      >
                        {app.status}
                      </span>
                    </div>
                    <p className="mt-1.5 line-clamp-1 text-sm text-foreground-muted">
                      {app.tagline}
                    </p>
                  </div>

                  <div className="lf-app-card-footer">
                    {app.external ? (
                      <a
                        href={app.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lf-app-card-cta"
                      >
                        {app.cta}
                      </a>
                    ) : (
                      <Link href={app.href} className="lf-app-card-cta">
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

      {/* SERVICES */}
      <section id="services" className="py-10">
        <div className="mx-auto max-w-3xl px-6">
          <FadeInUp>
            <div className="lf-services-list">
              <div className="lf-services-col lf-services-col--left">
                <p className="lf-section-label mb-3">WHAT WE BUILD</p>
                <div className="space-y-2.5">
                  {SERVICES_LEFT.map((service) => (
                    <ServiceListItem
                      key={service.title}
                      title={service.title}
                      description={service.description}
                    />
                  ))}
                </div>
              </div>
              <div className="lf-services-col">
                <div className="space-y-2.5 pt-6 sm:pt-[1.375rem]">
                  {SERVICES_RIGHT.map((service) => (
                    <ServiceListItem
                      key={service.title}
                      title={service.title}
                      description={service.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-10">
        <FadeInUp>
          <div className="mx-auto max-w-2xl px-6 text-center">
            <p className="text-sm italic text-foreground-muted">
              An independent studio building intelligent digital products for global markets.
            </p>
            <Link href="/about" className="mt-3 inline-block text-xs text-[#06B6D4] hover:underline">
              Our Story →
            </Link>
          </div>
        </FadeInUp>
      </section>

      {/* CTA */}
      <section id="cta" className="lf-cta-section py-10">
        <FadeInUp>
          <div className="mx-auto max-w-xl px-6 text-center">
            <h2 className="text-xl font-semibold text-foreground">Let&apos;s build something great.</h2>
            <p className="mt-3 text-sm text-foreground-muted">
              Explore our work or reach out directly.
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
              <Link href="/products" className="lf-btn-sm">
                View Our Work
              </Link>
              <Link href="/contact" className="lf-btn-sm-outline">
                Get In Touch
              </Link>
            </div>
          </div>
        </FadeInUp>
      </section>
    </div>
  );
}
