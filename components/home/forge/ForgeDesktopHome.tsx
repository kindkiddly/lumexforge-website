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
    id: "proteinsnaps",
    name: "ProteinSnaps",
    tagline: "AI Nutrition & Fitness Tracker",
    status: "Live on iOS & Android",
    initial: "PS",
    placeholderClass: "lf-placeholder-ps",
    imageSrc: "/images/proteinsnaps/PSL-1.webp",
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
    imageSrc: "/images/lumexforge-hero.jpg",
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
    iconClass: "lf-placeholder-ps",
    iconLabel: "PS",
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
    iconClass: "lf-placeholder-ph",
    iconLabel: "PH",
    cta: "Learn More →",
    href: "/contact",
    external: false,
  },
  {
    id: "amora",
    name: "AMORA",
    tagline: "AI grief companion and portrait app",
    status: "In Development",
    statusClass: "bg-[#3B82F6]/15 text-[#3B82F6] ring-[#3B82F6]/30",
    iconClass: "lf-placeholder-am",
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
    iconClass: "lf-placeholder-mb",
    iconLabel: "MB",
    cta: "Learn More →",
    href: "/contact",
    external: false,
  },
] as const;

function ProteinSnapsStoreSection() {
  return (
    <div className="mt-4 border-t border-white/[0.06] pt-4">
      <div className="flex flex-wrap gap-2">
        <a
          href={PROTEINSNAPS_PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="lf-store-compact-btn lf-store-compact-btn--play"
        >
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M3.609 1.814L13.792 12 3.61 22.186a1.006 1.006 0 01-.61-.92V2.734a1.006 1.006 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1.002 1.002 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
          </svg>
          Google Play
        </a>
        <a
          href={PROTEINSNAPS_APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="lf-store-compact-btn lf-store-compact-btn--apple"
        >
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          App Store
        </a>
      </div>

      <div className="lf-store-qr-pair mt-3">
        <div className="lf-store-qr-item">
          <div className="lf-store-qr-box">
            <QRCode
              value={PROTEINSNAPS_PLAY_STORE_URL}
              size={70}
              bgColor="#ffffff"
              fgColor="#050811"
              level="M"
            />
          </div>
          <span className="lf-store-qr-label">Android</span>
        </div>
        <div className="lf-store-qr-item">
          <div className="lf-store-qr-box">
            <QRCode
              value={PROTEINSNAPS_APP_STORE_URL}
              size={70}
              bgColor="#ffffff"
              fgColor="#050811"
              level="M"
            />
          </div>
          <span className="lf-store-qr-label">iOS</span>
        </div>
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
            className="object-cover object-center"
          />
          <div className="lf-coverflow-image-overlay" aria-hidden="true" />
        </div>
        <div className="lf-coverflow-card-meta">
          <h3 className="text-xl font-bold tracking-tight text-foreground">{card.name}</h3>
          <p className="mt-1.5 text-sm text-foreground-secondary">{card.tagline}</p>
          <span className="mt-3 inline-flex rounded-full border border-white/[0.12] bg-white/[0.06] px-3 py-1 text-xs font-medium text-foreground-secondary">
            {card.status}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`lf-coverflow-cover ${card.placeholderClass}`}>
      <div className="lf-coverflow-logo">{card.initial}</div>
      <h3 className="text-2xl font-bold tracking-tight text-foreground">{card.name}</h3>
      <p className="mt-3 text-base text-foreground-secondary">{card.tagline}</p>
      <span className="mt-4 inline-flex rounded-full border border-white/[0.12] bg-white/[0.06] px-3 py-1 text-xs font-medium text-foreground-secondary">
        {card.status}
      </span>
    </div>
  );
}

const FEATURE_BADGES = [
  {
    title: "Mobile Apps",
    description: "Beautiful. Fast. Purpose-built.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: "AI Products",
    description: "Smarter systems. Real intelligence.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: "SaaS Platforms",
    description: "Scalable. Secure. Built to grow.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125A3.375 3.375 0 016.375 3.75h11.25A3.375 3.375 0 0121 7.125v9.75A3.375 3.375 0 0117.625 20.25H6.375A3.375 3.375 0 013 16.875v-9.75zM8.25 9.75h7.5M8.25 12.75h4.5" />
      </svg>
    ),
  },
  {
    title: "Business Solutions",
    description: "Streamlined ops. Stronger results.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15l-.75 18H5.25L4.5 3zm3 3v12m4.5-12v12m4.5-12v12" />
      </svg>
    ),
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

const SERVICES = {
  row1: [
    {
      title: "Mobile Apps",
      description: "Native iOS and Android experiences built for performance, polish, and daily use.",
      variant: "wide portrait" as const,
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
    },
    {
      title: "AI Products",
      description: "Intelligent features and agents that turn complex workflows into simple outcomes.",
      variant: "wide portrait" as const,
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      ),
    },
    {
      title: "SaaS Platforms",
      description: "Scalable cloud software with secure foundations and room to grow with your users.",
      variant: "wide portrait" as const,
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125A3.375 3.375 0 016.375 3.75h11.25A3.375 3.375 0 0121 7.125v9.75A3.375 3.375 0 0117.625 20.25H6.375A3.375 3.375 0 013 16.875v-9.75zM8.25 9.75h7.5M8.25 12.75h4.5" />
        </svg>
      ),
    },
  ],
  row2: [
    {
      title: "UI/UX Design",
      description: "Human-centered interfaces and product flows that feel intuitive from the first tap.",
      variant: "medium" as const,
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-1.242-.39-2.4-1.062-3.346M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
    {
      title: "Business Software",
      description: "Custom tools that streamline operations, reporting, and team productivity.",
      variant: "medium" as const,
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15l-.75 18H5.25L4.5 3zm3 3v12m4.5-12v12m4.5-12v12" />
        </svg>
      ),
    },
  ],
  row3: [
    {
      title: "Book Writing & Publishing",
      description: "End-to-end support for authors — from manuscript development to digital publishing.",
      variant: "landscape" as const,
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
    },
    {
      title: "Digital Consulting",
      description: "Strategic guidance on product direction, technology choices, and go-to-market planning.",
      variant: "landscape" as const,
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.697c0-1.355-.852-2.487-2.094-2.777M15.75 8.25V6.75m0 1.5v1.5m0-1.5h-3m3 0h3" />
        </svg>
      ),
    },
  ],
} as const;

function serviceCardClass(variant: "wide portrait" | "medium" | "landscape") {
  if (variant === "wide portrait") return "lf-service-card lf-service-card--wide lf-service-card--portrait";
  if (variant === "medium") return "lf-service-card lf-service-card--medium";
  return "lf-service-card lf-service-card--landscape";
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
                <CoverflowCardFace card={card} />
                <div className="lf-coverflow-reflection" aria-hidden="true">
                  {card.imageSrc ? (
                    <div className="lf-coverflow-reflection-inner relative overflow-hidden">
                      <Image
                        src={card.imageSrc}
                        alt=""
                        fill
                        sizes="480px"
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

function AboutFounderSection() {
  return (
    <section id="about" className="lf-about-section py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInUp className="mb-12 text-center">
          <p className="lf-eyebrow-cyan mb-4">About LumexForge</p>
          <h2 className="heading-section">Built With Purpose</h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="lf-founder-panel mx-auto flex max-w-6xl flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,16rem)_auto_1fr] lg:items-start lg:gap-10">
            <div className="flex flex-col items-center text-center lg:items-center">
              <div className="lf-founder-avatar" aria-hidden="true">
                ARM
              </div>
              <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground">A.R. Mirani</h2>
              <h4 className="mt-2 text-base font-medium text-[#06B6D4]">Founder &amp; CEO</h4>
              <p className="mt-4 text-sm text-foreground-secondary">Houston, USA</p>
              <p className="mt-1 text-sm text-foreground-muted">Founded: 2026</p>
            </div>

            <div className="hidden lg:block lg:self-stretch">
              <div className="h-full min-h-[12rem] w-0.5 bg-gradient-to-b from-[#06B6D4] to-[#3B82F6]" />
            </div>
            <div className="lg:hidden">
              <div className="lf-about-accent-line" />
            </div>

            <div className="space-y-5 text-base leading-relaxed text-foreground-secondary">
              <p>
                LumexForge was founded on a clear vision: building intelligent digital products
                that solve real problems for people and businesses around the world.
              </p>
              <p>
                We design and ship mobile apps, AI-powered products, SaaS platforms, UI/UX
                experiences, business software, and publishing projects — each crafted with
                attention to detail and long-term value.
              </p>
              <p>
                Our mission is to craft purpose-built software for global markets — products
                that are fast, thoughtful, and built to earn trust from day one.
              </p>
            </div>
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

        <div className="mx-auto w-full max-w-7xl flex-1 px-6 py-16">
          <FadeInUp className="text-center">
            <h1 className="text-6xl font-bold leading-[1.05] tracking-tight">
              <span className="text-foreground">We Build Apps</span>
              <br />
              <span className="lf-text-cyan-gradient">That Matter.</span>
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

      {/* FEATURE BADGES */}
      <section id="features" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-4 gap-6">
            {FEATURE_BADGES.map((feature, index) => (
              <FadeInUp key={feature.title} delay={index * 0.08}>
                <article className="lf-feature-glass rounded-2xl p-6">
                  <div className="lf-feature-icon">{feature.icon}</div>
                  <h3 className="mt-5 text-lg font-bold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                    {feature.description}
                  </p>
                </article>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — APPS SHOWCASE */}
      <section id="products" className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInUp className="mb-16 text-center">
            <p className="lf-eyebrow-cyan mb-4">What We Build</p>
            <h2 className="heading-section">Our Products</h2>
          </FadeInUp>

          <div className="lf-apps-grid">
            {APPS.map((app, index) => (
              <FadeInUp key={app.id} delay={index * 0.08}>
                <article className="lf-app-card-compact lf-3d-card group">
                  <div className="flex items-start gap-4">
                    <div
                      className={`lf-app-icon shrink-0 ${app.iconClass}`}
                      aria-hidden="true"
                    >
                      {app.iconLabel}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="truncate text-lg font-bold tracking-tight text-foreground">
                          {app.name}
                        </h3>
                        <span
                          className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ring-1 ${app.statusClass}`}
                        >
                          {app.status}
                        </span>
                      </div>
                      <p className="mt-1 line-clamp-2 text-sm text-foreground-secondary">
                        {app.tagline}
                      </p>
                    </div>
                  </div>

                  {app.external ? (
                    <a
                      href={app.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground-secondary transition-colors hover:text-[#06B6D4]"
                    >
                      {app.cta}
                    </a>
                  ) : (
                    <Link
                      href={app.href}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground-secondary transition-colors hover:text-[#06B6D4]"
                    >
                      {app.cta}
                    </Link>
                  )}

                  {app.id === "proteinsnaps" && <ProteinSnapsStoreSection />}
                </article>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInUp className="mb-16 text-center">
            <p className="lf-eyebrow-cyan mb-4">What We Offer</p>
            <h2 className="heading-section">Our Services</h2>
          </FadeInUp>

          <div className="lf-services-section">
            <div className="lf-services-row-3">
              {SERVICES.row1.map((service, index) => (
                <FadeInUp key={service.title} delay={index * 0.06}>
                  <article className={serviceCardClass(service.variant)}>
                    <div className="lf-service-icon">{service.icon}</div>
                    <h3 className="lf-service-title text-foreground">{service.title}</h3>
                    <p className="lf-service-desc">{service.description}</p>
                  </article>
                </FadeInUp>
              ))}
            </div>

            <div className="lf-services-row-2">
              {SERVICES.row2.map((service, index) => (
                <FadeInUp key={service.title} delay={0.15 + index * 0.06}>
                  <article className={serviceCardClass(service.variant)}>
                    <div className="lf-service-icon">{service.icon}</div>
                    <h3 className="lf-service-title text-foreground">{service.title}</h3>
                    <p className="lf-service-desc">{service.description}</p>
                  </article>
                </FadeInUp>
              ))}
            </div>

            <div className="lf-services-row-2">
              {SERVICES.row3.map((service, index) => (
                <FadeInUp key={service.title} delay={0.25 + index * 0.06}>
                  <article className={serviceCardClass(service.variant)}>
                    <div className="lf-service-icon">{service.icon}</div>
                    <h3 className="lf-service-title text-foreground">{service.title}</h3>
                    <p className="lf-service-desc">{service.description}</p>
                  </article>
                </FadeInUp>
              ))}
            </div>
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
                <article className="lf-clay-card lf-3d-card h-full rounded-2xl border border-[#06B6D4]/20 p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#06B6D4]/20 to-[#3B82F6]/10 text-[#06B6D4] ring-1 ring-[#06B6D4]/25">
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

      {/* SECTION 4 — ABOUT */}
      <AboutFounderSection />

      {/* SECTION 5 — CTA */}
      <section id="cta" className="py-28">
        <FadeInUp>
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative overflow-hidden rounded-3xl border border-[#06B6D4]/20 bg-gradient-to-br from-[#06B6D4]/25 via-[#0a1628] to-[#3B82F6]/20 px-16 py-20 text-center shadow-[0_30px_80px_-30px_rgba(6,182,212,0.35)]">
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
                <Link href="/products" className="lf-btn-clay px-7 py-3.5 text-base">
                  View All Apps
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-[#06B6D4]/30 bg-white/[0.04] px-7 py-3.5 text-base font-semibold text-foreground backdrop-blur-sm transition-all hover:border-[#06B6D4]/50 hover:text-[#06B6D4]"
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
