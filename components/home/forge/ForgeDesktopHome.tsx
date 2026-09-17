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
    name: "LumexForge",
    tagline: "Software Studio · Building Tomorrow's Digital Products",
    status: "Est. 2024",
    initial: "LF",
    placeholderClass: "lf-placeholder-studio",
    imageSrc: "/images/lumexforge/LF-carousel/LF-1.webp",
  },
  {
    id: "proteinsnaps",
    name: "ProteinSnaps",
    tagline: "AI Nutrition & Fitness Tracker · Available on iOS & Android",
    status: "Live on iOS & Android",
    initial: "PS",
    placeholderClass: "lf-placeholder-ps",
    imageSrc: "/images/lumexforge/LF-carousel/LF-2.webp",
  },
  {
    id: "ammora",
    name: "AMMORA",
    tagline: "AI Grief Companion & Portrait App · In Development",
    status: "In Development",
    initial: "AM",
    placeholderClass: "lf-placeholder-am",
    imageSrc: "/images/lumexforge/LF-carousel/LF-3.webp",
  },
  {
    id: "posthunt",
    name: "PostHunt",
    tagline: "Create. Schedule. Automate. · AI Social Media Marketing Hub",
    status: "In Development",
    initial: "PH",
    placeholderClass: "lf-placeholder-ph",
    imageSrc: "/images/lumexforge/LF-carousel/LF-4.webp",
  },
  {
    id: "mipaw",
    name: "MiPaw",
    tagline: "Dog Nutrition, Fitness & Health Tracker · In Development",
    status: "In Development",
    initial: "MP",
    placeholderClass: "lf-placeholder-mb",
    imageSrc: "/images/lumexforge/LF-carousel/LF-5.webp",
  },
  {
    id: "admina",
    name: "ADMINA",
    tagline: "Business Finances Simplified · Income, Invoicing & Reports",
    status: "In Development",
    initial: "AD",
    placeholderClass: "lf-placeholder-ps-ios",
    imageSrc: "/images/lumexforge/LF-carousel/LF-6.webp",
  },
  {
    id: "stealth",
    name: "Coming Next",
    tagline: "New App in Stealth Mode · Stay Tuned",
    status: "Stay Tuned",
    initial: "?",
    placeholderClass: "lf-placeholder-stealth",
    imageSrc: "/images/proteinsnaps/BG-3.webp",
  },
] ;

type AppCard = {
  id: string;
  name: string;
  tagline: string;
  status: string;
  statusClass: string;
  placeholderClass: string;
  iconLabel: string;
  imageSrc?: string;
  cta: string;
  href: string;
  external: boolean;
};

const APPS: AppCard[] = [
  {
    id: "proteinsnaps",
    name: "ProteinSnaps",
    tagline: "AI-powered nutrition and fitness tracking",
    status: "Live on iOS & Android",
    statusClass: "bg-success/10 text-success ring-success/30",
    placeholderClass: "lf-placeholder-ps",
    iconLabel: "PS",
    imageSrc: "/images/lumexforge/LF-app/LF-APP-PS.webp",
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
    imageSrc: "/images/lumexforge/LF-app/LF-APP-PH.webp",
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
    imageSrc: "/images/lumexforge/LF-app/LF-APP-AM.webp",
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
    imageSrc: "/images/proteinsnaps/BG-6.webp",
    cta: "Learn More →",
    href: "/contact",
    external: false,
  },
  {
    id: "mipaw",
    name: "MiPaw",
    tagline: "Dog nutrition, fitness and health tracking",
    status: "In Development",
    statusClass: "bg-[#3B82F6]/15 text-[#3B82F6] ring-[#3B82F6]/30",
    placeholderClass: "lf-placeholder-mb",
    iconLabel: "MP",
    imageSrc: "/images/lumexforge/LF-app/LF-APP-MP.webp",
    cta: "Learn More →",
    href: "/contact",
    external: false,
  },
  {
    id: "admina",
    name: "ADMINA",
    tagline: "Business finances simplified — income, invoicing and reports",
    status: "In Development",
    statusClass: "bg-[#06B6D4]/15 text-[#06B6D4] ring-[#06B6D4]/30",
    placeholderClass: "lf-placeholder-ps-ios",
    iconLabel: "AD",
    imageSrc: "/images/lumexforge/LF-app/LF-APP-AD.webp",
    cta: "Learn More →",
    href: "/contact",
    external: false,
  },
];

function ProteinSnapsStoreFooter() {
  return (
    <div className="lf-ps-store-inline">
      <a
        href={PROTEINSNAPS_PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="lf-store-badge lf-store-badge--google"
        aria-label="Get ProteinSnaps on Google Play"
      >
        <svg className="lf-store-badge-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="#00E6A8"
            d="M3.609 1.814L13.792 12 3.61 22.186a1.006 1.006 0 01-.61-.92V2.734a1.006 1.006 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1.002 1.002 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"
          />
        </svg>
        <span className="lf-store-badge-copy">
          <span className="lf-store-badge-label">GET IT ON</span>
          <span className="lf-store-badge-name">Google Play</span>
        </span>
      </a>
      <a
        href={PROTEINSNAPS_APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="lf-store-badge lf-store-badge--apple"
        aria-label="Download ProteinSnaps on the App Store"
      >
        <svg className="lf-store-badge-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <span className="lf-store-badge-copy">
          <span className="lf-store-badge-label">Download on the</span>
          <span className="lf-store-badge-name">App Store</span>
        </span>
      </a>
      <span className="lf-store-qr-label">Scan to download</span>
      <div className="lf-store-qr-box" title="Google Play">
        <QRCode
          value={PROTEINSNAPS_PLAY_STORE_URL}
          size={24}
          bgColor="#ffffff"
          fgColor="#050811"
          level="M"
        />
      </div>
      <div className="lf-store-qr-box" title="App Store">
        <QRCode
          value={PROTEINSNAPS_APP_STORE_URL}
          size={24}
          bgColor="#ffffff"
          fgColor="#050811"
          level="M"
        />
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
            sizes="380px"
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
      <span className="font-sans text-sm font-medium text-foreground">{title}</span>
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
                        sizes="380px"
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

      </div>

      <div className="lf-coverflow-info mt-2 text-center" aria-live="polite">
        <p key={activeCard.id} className="lf-coverflow-info-animate font-serif text-lg font-semibold text-foreground">
          {activeCard.name}
        </p>
        <p
          key={`${activeCard.id}-desc`}
          className="lf-coverflow-info-animate mt-1 font-sans text-sm font-normal text-foreground-secondary"
        >
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
      <section className="relative overflow-hidden pt-[4.5rem] py-8">
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
            <h1 className="text-xl font-serif font-bold leading-tight tracking-tight">
              <span className="text-foreground">We Forge</span>
              <br />
              <em className="lf-text-cyan-gradient">Digital Products.</em>
            </h1>
            <p className="lf-hero-subtitle mt-2">
              Mobile apps, AI products, and SaaS platforms — built with purpose, precision, and long-term value.
            </p>
            <div className="lf-hero-carousel">
              <CoverflowCarousel />
            </div>
          </FadeInUp>
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
                    {app.imageSrc ? (
                      <Image
                        src={app.imageSrc}
                        alt={app.name}
                        fill
                        sizes="(max-width: 896px) 50vw, 448px"
                        className="object-cover object-center"
                      />
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
                      <h3 className="font-serif text-base font-semibold tracking-tight text-foreground">
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

                  <div
                    className={`lf-app-card-footer${app.id === "proteinsnaps" ? " lf-app-card-footer--proteinsnaps" : ""}`}
                  >
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

                    {app.id === "proteinsnaps" && <ProteinSnapsStoreFooter />}
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
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Let&apos;s build <em>something great.</em>
            </h2>
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
