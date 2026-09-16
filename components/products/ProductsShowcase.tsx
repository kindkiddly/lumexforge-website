"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type ProductStatus = "live" | "dev" | "soon";

type ShowcaseProduct = {
  id: string;
  indexLabel: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  status: ProductStatus;
  statusLabel: string;
  platforms: string;
  features: { title: string; detail: string }[];
  banner?: string;
  /** Portrait phone UI shots — rendered in device frames under the banner */
  phones?: string[];
  /** Optional landscape thumbs under banner (non-phone apps) */
  gallery?: string[];
  atmosphere?: string;
  atmosphereLabel?: string;
  reverse?: boolean;
  featured?: boolean;
  primaryCta: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string };
};

const PRODUCTS: ShowcaseProduct[] = [
  {
    id: "proteinsnaps",
    indexLabel: "01",
    name: "ProteinSnaps",
    category: "Health & Fitness",
    tagline: "Snap a meal. Know your macros. Train with clarity.",
    description:
      "ProteinSnaps is LumexForge’s live AI nutrition and fitness companion. Point your camera at a meal, get instant macro insight, and keep protein, calories, and training aligned — without spreadsheet friction. Built for people who want results, not busywork.",
    status: "live",
    statusLabel: "Live on iOS & Android",
    platforms: "Available now · iOS & Android",
    features: [
      {
        title: "AI Meal Scanner",
        detail: "Photograph food and receive fast protein, calorie, and macro estimates.",
      },
      {
        title: "Protein-First Tracking",
        detail: "Stay focused on the metrics that matter for muscle, recovery, and daily goals.",
      },
      {
        title: "Fitness-Aware Guidance",
        detail: "Nutrition that respects how you train — practical, not theoretical.",
      },
      {
        title: "Clear Daily Progress",
        detail: "Simple views that turn today’s choices into tomorrow’s momentum.",
      },
    ],
    banner: "/images/lumexforge/LF-products/Products-PS.webp",
    phones: [
      "/images/proteinsnaps/PS-1.webp",
      "/images/proteinsnaps/PS-4.webp",
      "/images/proteinsnaps/PS-6.webp",
      "/images/proteinsnaps/PSL-M2.webp",
    ],
    gallery: [
      "/images/proteinsnaps/PSL-2.webp",
      "/images/proteinsnaps/PSL-5.webp",
      "/images/proteinsnaps/PSL-8.webp",
    ],
    featured: true,
    primaryCta: {
      label: "Open ProteinSnaps",
      href: "https://proteinsnaps.lumexforge.com",
      external: true,
    },
    secondaryCta: { label: "Contact Studio", href: "/contact" },
  },
  {
    id: "posthunt",
    indexLabel: "02",
    name: "PostHunt",
    category: "AI Social Agent",
    tagline: "From blank page to published post — on brand, on schedule.",
    description:
      "PostHunt is an AI social media agent for creators and teams who need consistency without burning hours on drafts. It helps shape hooks, captions, and publishing flows so your voice stays sharp across every feed.",
    status: "dev",
    statusLabel: "In Development",
    platforms: "Web first · Mobile planned",
    features: [
      {
        title: "Content Generation",
        detail: "Draft captions, variations, and campaign angles in your brand voice.",
      },
      {
        title: "Smart Scheduling",
        detail: "Plan and publish with workflows built for modern social cadence.",
      },
      {
        title: "Voice Memory",
        detail: "Keep tone consistent so every post feels like you — not a template.",
      },
      {
        title: "Performance Mindset",
        detail: "Structure content for attention, clarity, and platform-native rhythm.",
      },
    ],
    banner: "/images/lumexforge/LF-products/Products-PH.webp",
    reverse: true,
    primaryCta: { label: "Request Early Access", href: "/contact" },
    secondaryCta: { label: "Discuss Your Brand", href: "/contact" },
  },
  {
    id: "ammora",
    indexLabel: "03",
    name: "AMMORA",
    category: "Emotional AI",
    tagline: "A quiet place for memory, presence, and gentle remembrance.",
    description:
      "AMMORA is an AI companion for preserving meaningful connections with dignity. Through portraits, voice, and guided conversation, it supports reflection and remembrance — designed with care, privacy, and emotional responsibility at the center.",
    status: "dev",
    statusLabel: "In Development",
    platforms: "Mobile experience",
    features: [
      {
        title: "Memory Profiles",
        detail: "Portraits and stories organized with sensitivity, not spectacle.",
      },
      {
        title: "Guided Conversation",
        detail: "Speak with context grounded in shared memories and personal history.",
      },
      {
        title: "Privacy by Design",
        detail: "Personal media and conversations treated as sacred, not as training fuel.",
      },
      {
        title: "Human-Centered UX",
        detail: "Calm interfaces for reflection — never a replacement for professional care.",
      },
    ],
    banner: "/images/lumexforge/LF-products/Products-AM.webp",
    primaryCta: { label: "Learn About AMMORA", href: "/contact" },
    secondaryCta: { label: "Read Privacy Approach", href: "/privacy" },
  },
  {
    id: "mipaw",
    indexLabel: "04",
    name: "MiPaw",
    category: "Pet Wellness",
    tagline: "Nutrition, activity, and health — for the dog who depends on you.",
    description:
      "MiPaw helps pet parents turn daily care into a clear wellness picture. Track meals, movement, and health signals so you can notice changes early and give your dog the consistency they deserve.",
    status: "dev",
    statusLabel: "In Development",
    platforms: "Mobile experience",
    features: [
      {
        title: "Canine Nutrition Logs",
        detail: "Meal tracking shaped around dog dietary needs, not human calorie apps.",
      },
      {
        title: "Activity Patterns",
        detail: "See walks, play, and energy trends without complicated dashboards.",
      },
      {
        title: "Health Timeline",
        detail: "A living record that helps you spot shifts before they become surprises.",
      },
      {
        title: "Owner-Friendly Design",
        detail: "Fast logging for busy people who still want excellent care habits.",
      },
    ],
    banner: "/images/lumexforge/LF-products/Products-MP.webp",
    reverse: true,
    primaryCta: { label: "Join the Waitlist", href: "/contact" },
    secondaryCta: { label: "Talk to the Studio", href: "/contact" },
  },
  {
    id: "bookora",
    indexLabel: "05",
    name: "Bookora",
    category: "Business Finance",
    tagline: "Income, invoices, and reports — without the accounting fog.",
    description:
      "Bookora is finance clarity for freelancers and small businesses. Capture income, send polished invoices, and read reports that explain where you stand — so decisions come from numbers you trust, not guesswork.",
    status: "dev",
    statusLabel: "In Development",
    platforms: "Web first · Mobile planned",
    features: [
      {
        title: "Income Clarity",
        detail: "Track money in with clean categories that stay easy to maintain.",
      },
      {
        title: "Professional Invoicing",
        detail: "Create and send invoices that look sharp and get paid faster.",
      },
      {
        title: "Actionable Reports",
        detail: "Cash-flow insight without enterprise complexity or spreadsheet chaos.",
      },
      {
        title: "Operator-First UX",
        detail: "Built for people who run businesses — not only for accountants.",
      },
    ],
    banner: "/images/lumexforge/LF-products/Products-BK.webp",
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "Contact LumexForge", href: "/contact" },
  },
  {
    id: "money-burn-board",
    indexLabel: "06",
    name: "Money Burn Board",
    category: "Crypto Impact",
    tagline: "Transparent giving. Public signal. Charity with a new vocabulary.",
    description:
      "Money Burn Board is an early LumexForge exploration of visible impact in crypto culture — a leaderboard and storytelling surface for charity-linked actions. Bold by design, and still taking shape.",
    status: "soon",
    statusLabel: "Coming Soon",
    platforms: "Web concept",
    features: [
      {
        title: "Public Leaderboard",
        detail: "Surface contributions in a way communities can see and discuss.",
      },
      {
        title: "Impact Narrative",
        detail: "Connect on-chain action to a human story of giving.",
      },
      {
        title: "Verifiable Signals",
        detail: "Designed around transparency rather than private claim culture.",
      },
      {
        title: "Conversation Starter",
        detail: "A product meant to provoke better questions about value and good.",
      },
    ],
    atmosphere: "/images/proteinsnaps/BG-7.webp",
    atmosphereLabel: "Impact, made visible.",
    reverse: true,
    primaryCta: { label: "Get Notified", href: "/contact" },
    secondaryCta: { label: "Share an Idea", href: "/contact" },
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

function StatusPill({ status, label }: { status: ProductStatus; label: string }) {
  const cls =
    status === "live"
      ? "lf-prod-status lf-prod-status--live"
      : status === "dev"
        ? "lf-prod-status lf-prod-status--dev"
        : "lf-prod-status lf-prod-status--soon";
  return <span className={cls}>{label}</span>;
}

function ProductSection({ product, index }: { product: ShowcaseProduct; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id={product.id}
      className="lf-prod-section"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.75, delay: 0.04, ease }}
    >
      <div
        className={[
          "lf-prod-panel",
          product.reverse ? "is-reverse" : "",
          product.featured ? "is-featured" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="lf-prod-media">
          {product.banner ? (
            <motion.div
              className="lf-prod-banner"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.45, ease }}
            >
              <Image
                src={product.banner}
                alt={`${product.name} — ${product.category}`}
                fill
                sizes="(max-width: 900px) 100vw, 760px"
                className="object-cover object-center"
                priority={index === 0}
              />
              <div className="lf-prod-banner-glow" aria-hidden="true" />
              <span className="lf-prod-index" aria-hidden="true">
                {product.indexLabel}
              </span>
            </motion.div>
          ) : product.atmosphere ? (
            <div className="lf-prod-atmosphere">
              <div className="lf-prod-atmosphere-bg">
                <Image
                  src={product.atmosphere}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 760px"
                  className="object-cover object-center"
                />
              </div>
              <div className="lf-prod-atmosphere-overlay" aria-hidden="true" />
              <div className="lf-prod-atmosphere-content">
                <span className="lf-prod-index lf-prod-index--light" aria-hidden="true">
                  {product.indexLabel}
                </span>
                <p className="lf-prod-atmosphere-label">{product.atmosphereLabel}</p>
              </div>
            </div>
          ) : null}

          {product.phones && product.phones.length > 0 && (
            <div className="lf-prod-phones" aria-label={`${product.name} app screens`}>
              {product.phones.map((src, i) => (
                <motion.div
                  key={src}
                  className={`lf-prod-phone${i % 2 === 1 ? " lf-prod-phone--lift" : ""}`}
                  initial={{ opacity: 0, y: 22 }}
                  animate={inView ? { opacity: 1, y: 0 } : undefined}
                  transition={{ duration: 0.55, delay: 0.16 + i * 0.08, ease }}
                  whileHover={{ y: -6 }}
                >
                  <Image
                    src={src}
                    alt={`${product.name} screen ${i + 1}`}
                    fill
                    sizes="140px"
                    className="object-cover object-top"
                  />
                </motion.div>
              ))}
            </div>
          )}

          {product.gallery && product.gallery.length > 0 && (
            <div className="lf-prod-gallery">
              {product.gallery.map((src, i) => (
                <motion.div
                  key={src}
                  className="lf-prod-gallery-item"
                  initial={{ opacity: 0, y: 18 }}
                  animate={inView ? { opacity: 1, y: 0 } : undefined}
                  transition={{ duration: 0.55, delay: 0.28 + i * 0.08, ease }}
                  whileHover={{ y: -3 }}
                >
                  <Image
                    src={src}
                    alt={`${product.name} lifestyle ${i + 1}`}
                    fill
                    sizes="220px"
                    className="object-cover object-center"
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>

        <div className="lf-prod-copy">
          <div className="lf-prod-copy-top">
            <StatusPill status={product.status} label={product.statusLabel} />
            <span className="lf-prod-category">{product.category}</span>
          </div>
          <h2 className="lf-prod-name">{product.name}</h2>
          <p className="lf-prod-tagline">{product.tagline}</p>
          <p className="lf-prod-desc">{product.description}</p>

          <p className="lf-prod-features-label">What you get</p>
          <div className="lf-prod-feature-grid">
            {product.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="lf-prod-feature-card"
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.5, delay: 0.12 + i * 0.06, ease }}
              >
                <h3>
                  <span className="lf-prod-feature-num">0{i + 1}</span>
                  {feature.title}
                </h3>
                <p>{feature.detail}</p>
              </motion.div>
            ))}
          </div>

          <p className="lf-prod-meta">{product.platforms}</p>

          <div className="lf-prod-actions">
            {product.primaryCta.external ? (
              <a
                href={product.primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="lf-prod-btn lf-prod-btn--primary"
              >
                {product.primaryCta.label}
                <span aria-hidden="true">→</span>
              </a>
            ) : (
              <Link href={product.primaryCta.href} className="lf-prod-btn lf-prod-btn--primary">
                {product.primaryCta.label}
                <span aria-hidden="true">→</span>
              </Link>
            )}
            {product.secondaryCta && (
              <Link href={product.secondaryCta.href} className="lf-prod-btn lf-prod-btn--ghost">
                {product.secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export function ProductsShowcase() {
  const [activeId, setActiveId] = useState(PRODUCTS[0]?.id ?? "");

  useEffect(() => {
    const nodes = PRODUCTS.map((p) => document.getElementById(p.id)).filter(
      Boolean
    ) as HTMLElement[];
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.15, 0.35, 0.55] }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="lf-products-page">
      <div className="lf-products-glow" aria-hidden="true" />
      <div className="lf-products-grain" aria-hidden="true" />

      <div className="lf-products-inner">
        <motion.header
          className="lf-prod-hero"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease }}
        >
          <p className="lf-prod-eyebrow">LumexForge Product Studio</p>
          <h1 className="lf-prod-title">
            Built with <em>intention</em>
          </h1>
          <p className="lf-prod-lead">
            A curated line of mobile apps, AI products, and SaaS platforms — each crafted
            for clarity, usefulness, and long-term value.
          </p>
          <motion.div
            className="lf-prod-hero-stats"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease }}
          >
            <div>
              <strong>6</strong>
              <span>Active products</span>
            </div>
            <div>
              <strong>1</strong>
              <span>Live on stores</span>
            </div>
            <div>
              <strong>AI</strong>
              <span>Across the stack</span>
            </div>
          </motion.div>
        </motion.header>

        <nav className="lf-prod-nav-wrap" aria-label="Jump to product">
          <div className="lf-prod-nav">
            {PRODUCTS.map((product) => (
              <a
                key={product.id}
                href={`#${product.id}`}
                className={`lf-prod-nav-chip${activeId === product.id ? " is-active" : ""}`}
              >
                <span className="lf-prod-nav-num">{product.indexLabel}</span>
                {product.name}
              </a>
            ))}
          </div>
        </nav>

        {PRODUCTS.map((product, index) => (
          <ProductSection key={product.id} product={product} index={index} />
        ))}

        <motion.div
          className="lf-prod-footer-cta"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="lf-prod-eyebrow">Partnership</p>
          <h2>Have a product worth forging?</h2>
          <p>
            From concept to launch, LumexForge builds intelligent digital products with
            disciplined craft — for founders, teams, and ideas that deserve permanence.
          </p>
          <div className="lf-prod-actions">
            <Link href="/contact" className="lf-prod-btn lf-prod-btn--primary">
              Start a Conversation <span aria-hidden="true">→</span>
            </Link>
            <Link href="/" className="lf-prod-btn lf-prod-btn--ghost">
              Return Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
