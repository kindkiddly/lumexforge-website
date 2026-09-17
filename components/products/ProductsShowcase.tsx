import Image from "next/image";
import Link from "next/link";
import {
  GhostWriterServices,
  type GwhIconId,
} from "@/components/products/GhostWriterServices";
import { ProductsNav } from "@/components/products/ProductsNav";

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
  /** Premium service grid (GhostWriterHunt) */
  serviceCatalog?: { title: string; detail: string; icon: GwhIconId }[];
  banner?: string;
  /** Banner aspect: default 1760×720; use "640" for 1760×640 assets */
  bannerAspect?: "720" | "640";
  /** Full-width secondary image under the main banner (natural aspect, no stretch) */
  secondaryBanner?: string;
  /** Secondary aspect: "980" = 1760×980, "974" = 1760×974, "640" = 1760×640 */
  secondaryAspect?: "980" | "974" | "640";
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
    secondaryBanner: "/images/lumexforge/LF-products/Products-PS1.webp",
    secondaryAspect: "980",
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
    category: "AI Social Media Suite",
    tagline: "Create. Schedule. Grow. — your all-in-one AI marketing hub.",
    description:
      "PostHunt is an all-in-one AI social media marketing suite. From AI-powered content creation to automated posting and performance tracking, it helps brands and creators move from idea to published post — across every major platform — without losing brand control.",
    status: "dev",
    statusLabel: "In Development",
    platforms: "Web first · Mobile planned",
    features: [
      {
        title: "AI Agent",
        detail: "Posts, engages, and analyzes on autopilot — with review before publish.",
      },
      {
        title: "AI Studio",
        detail: "Images, videos, ads, brand assets, templates, and voice generation in one place.",
      },
      {
        title: "Multi-Platform Publishing",
        detail: "Reach Instagram, TikTok, Facebook, YouTube, X, LinkedIn, and more from one hub.",
      },
      {
        title: "Smart Scheduling & Analytics",
        detail: "Plan for peak times, track reach and engagement, and grow with clearer insight.",
      },
    ],
    banner: "/images/lumexforge/LF-products/Products-PH.webp",
    bannerAspect: "640",
    secondaryBanner: "/images/lumexforge/LF-products/Products-PH1.webp",
    secondaryAspect: "980",
    reverse: true,
    primaryCta: { label: "Request Early Access", href: "/contact" },
    secondaryCta: { label: "Discuss Your Brand", href: "/contact" },
  },
  {
    id: "ammora",
    indexLabel: "03",
    name: "AMMORA",
    category: "Emotional AI Companion",
    tagline: "Love connects. Distance never breaks us.",
    description:
      "AMMORA brings voices, memories, and moments back to life. It is an AI companion for families who want presence across distance — through voice, photos, and natural conversation — built with privacy, dignity, and emotional care at the center. Real voices. Real memories. Real connection.",
    status: "dev",
    statusLabel: "In Development",
    platforms: "Mobile experience",
    features: [
      {
        title: "AI Voice Cloning",
        detail: "Preserve familiar voices so conversations feel personal and present.",
      },
      {
        title: "Photo Integration",
        detail: "Bring portraits and shared moments into a living memory experience.",
      },
      {
        title: "Natural Conversations",
        detail: "Talk in a way that feels human — guided by story, not spectacle.",
      },
      {
        title: "Private & Secure",
        detail: "Emotional bonding with privacy-first handling of personal media and voice.",
      },
    ],
    banner: "/images/lumexforge/LF-products/Products-AM.webp",
    secondaryBanner: "/images/lumexforge/LF-products/Products-AM1.webp",
    secondaryAspect: "640",
    primaryCta: { label: "Learn About AMMORA", href: "/contact" },
    secondaryCta: { label: "Read Privacy Approach", href: "/privacy" },
  },
  {
    id: "mipaw",
    indexLabel: "04",
    name: "MiPaw",
    category: "Pet Wellness",
    tagline: "Smarter care for a happier, healthier dog.",
    description:
      "MiPaw brings track, feed, walk, and play into one app for pet parents. Scan meals for nutrition, log activity, monitor health signals, save photo memories, and follow daily progress — so better nutrition and more activity support longer, healthier lives.",
    status: "dev",
    statusLabel: "In Development",
    platforms: "Mobile experience",
    features: [
      {
        title: "Food Tracking & Scan",
        detail: "Know what they eat — protein, calories, and macros for every meal.",
      },
      {
        title: "Walks & Activity",
        detail: "More steps, better health — with clear daily movement patterns.",
      },
      {
        title: "Health Monitoring",
        detail: "Stay ahead with wellness signals and a timeline you can trust.",
      },
      {
        title: "Memories & Behavior",
        detail: "Capture moments, understand habits, and improve care over time.",
      },
    ],
    banner: "/images/lumexforge/LF-products/Products-MP.webp",
    secondaryBanner: "/images/lumexforge/LF-products/Products-MP1.webp",
    secondaryAspect: "980",
    reverse: true,
    primaryCta: { label: "Join the Waitlist", href: "/contact" },
    secondaryCta: { label: "Talk to the Studio", href: "/contact" },
  },
  {
    id: "admina",
    indexLabel: "05",
    name: "ADMINA",
    category: "Business ERP",
    tagline: "Run your entire business. All in one system.",
    description:
      "ADMINA ERP brings sales, finance, inventory, and HR together for smarter, faster operations. From CRM and purchasing to accounting, projects, and payroll — one secure system for real-time insight, automation, multi-branch control, and scalable growth.",
    status: "dev",
    statusLabel: "In Development",
    platforms: "Web first · Mobile planned",
    features: [
      {
        title: "CRM & Sales",
        detail: "Manage customers, leads, and sales pipelines in one workspace.",
      },
      {
        title: "Inventory & Purchasing",
        detail: "Track stock, warehouses, vendors, and procurement without guesswork.",
      },
      {
        title: "Accounting & Reports",
        detail: "Invoicing, expenses, and live financial views for clearer decisions.",
      },
      {
        title: "HR, Payroll & Projects",
        detail: "Team attendance, salaries, tasks, and timelines — built to scale.",
      },
    ],
    banner: "/images/lumexforge/LF-products/Products-Admina.webp",
    secondaryBanner: "/images/lumexforge/LF-products/Products-Admina1.webp",
    secondaryAspect: "974",
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "Contact LumexForge", href: "/contact" },
  },
  {
    id: "ghostwriterhunt",
    indexLabel: "06",
    name: "GhostWriterHunt",
    category: "Ghostwriting & Digital Publishing",
    tagline: "Expert writers, designers, and editors — your vision, brought to life.",
    description:
      "GhostWriterHunt is a premium professional ghostwriting platform where expert writers, designers, and editors bring author visions to life. Every book is human-crafted with skill, care, and precision. Pure professional craft. All delivery is digital — ready for every major reading platform.",
    status: "soon",
    statusLabel: "Launching Soon",
    platforms: "Web & Mobile · Digital delivery",
    features: [],
    serviceCatalog: [
      {
        title: "Ghostwriting",
        detail:
          "Professional ghostwriters craft your complete book in your voice and vision — fiction, non-fiction, biography, memoir, business, and beyond. Any genre, any length, written to perfection.",
        icon: "quill",
      },
      {
        title: "Book Cover Design",
        detail:
          "Custom covers that capture your story and stop readers instantly — designed for Amazon KDP, Kindle, Apple Books, Google Play Books, and more.",
        icon: "palette",
      },
      {
        title: "Interior Layout & Formatting",
        detail:
          "Every page designed with care — chapter headings, typography, spacing, page numbers, and a full interior layout refined for digital reading.",
        icon: "layout",
      },
      {
        title: "Illustration & Graphics",
        detail:
          "Custom illustrations, chapter artwork, infographics, and visual storytelling — from children's book art to elegant non-fiction diagrams.",
        icon: "brush",
      },
      {
        title: "Editing & Proofreading",
        detail:
          "Developmental editing, copy editing, and proofreading so your manuscript is polished, error-free, and publication ready.",
        icon: "edit",
      },
      {
        title: "eBook Conversion",
        detail:
          "Your finished book converted to ePub, MOBI, PDF, and KDP-ready files — compatible with every major digital reading platform.",
        icon: "ebook",
      },
      {
        title: "Digital Publishing Support",
        detail:
          "End-to-end assistance for Amazon KDP, Apple Books, Google Play Books, Smashwords, and more — including metadata, keywords, and listing optimization.",
        icon: "globe",
      },
      {
        title: "Author Branding",
        detail:
          "Author bio writing, website copy, social media presence, and brand identity guidance to establish a distinguished voice online.",
        icon: "brand",
      },
    ],
    banner: "/images/lumexforge/LF-products/Products-GR.webp",
    reverse: true,
    primaryCta: { label: "Begin Your Book", href: "/contact" },
    secondaryCta: { label: "Contact Studio", href: "/contact" },
  },
];

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
  const hasFeatures = product.features.length > 0;
  const hasServices = Boolean(product.serviceCatalog && product.serviceCatalog.length > 0);

  return (
    <section id={product.id} className="lf-prod-section">
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
            <div
              className={`lf-prod-banner${product.bannerAspect === "640" ? " lf-prod-banner--640" : ""}`}
            >
              <Image
                src={product.banner}
                alt={`${product.name} — ${product.category}`}
                fill
                sizes="(max-width: 900px) 100vw, 760px"
                quality={product.id === "ghostwriterhunt" ? 90 : 80}
                className={
                  product.bannerAspect === "640"
                    ? "object-contain object-center"
                    : "object-cover object-center"
                }
                priority={index < 2}
                loading="eager"
                fetchPriority={index < 2 ? "high" : "auto"}
              />
              <div className="lf-prod-banner-glow" aria-hidden="true" />
              <span className="lf-prod-index" aria-hidden="true">
                {product.indexLabel}
              </span>
            </div>
          ) : product.atmosphere ? (
            <div className="lf-prod-atmosphere">
              <div className="lf-prod-atmosphere-bg">
                <Image
                  src={product.atmosphere}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 760px"
                  quality={75}
                  loading="lazy"
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

          {product.secondaryBanner && (
            <div
              className={`lf-prod-secondary-banner${
                product.secondaryAspect === "640"
                  ? " lf-prod-secondary-banner--640"
                  : product.secondaryAspect === "974"
                    ? " lf-prod-secondary-banner--974"
                    : " lf-prod-secondary-banner--980"
              }`}
            >
              <Image
                src={product.secondaryBanner}
                alt={`${product.name} feature showcase`}
                fill
                sizes="(max-width: 900px) 100vw, 760px"
                quality={75}
                loading="eager"
                className="object-contain object-center"
              />
            </div>
          )}

          {product.phones && product.phones.length > 0 && (
            <div className="lf-prod-phones" aria-label={`${product.name} app screens`}>
              {product.phones.map((src, i) => (
                <div
                  key={src}
                  className={`lf-prod-phone${i % 2 === 1 ? " lf-prod-phone--lift" : ""}`}
                >
                  <Image
                    src={src}
                    alt={`${product.name} screen ${i + 1}`}
                    fill
                    sizes="140px"
                    quality={75}
                    className="object-cover object-top"
                  />
                </div>
              ))}
            </div>
          )}

          {product.gallery && product.gallery.length > 0 && (
            <div className="lf-prod-gallery">
              {product.gallery.map((src, i) => (
                <div key={src} className="lf-prod-gallery-item">
                  <Image
                    src={src}
                    alt={`${product.name} lifestyle ${i + 1}`}
                    fill
                    sizes="220px"
                    quality={75}
                    className="object-cover object-center"
                  />
                </div>
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
          <span className="lf-prod-name-rule" aria-hidden="true" />

          <p className="lf-prod-tagline">{product.tagline}</p>
          <p className="lf-prod-desc">{product.description}</p>

          {hasFeatures && (
            <>
              <p className="lf-prod-features-label">What you get</p>
              <div className="lf-prod-feature-grid">
                {product.features.map((feature, i) => (
                  <div key={feature.title} className="lf-prod-feature-card">
                    <h3>
                      <span className="lf-prod-feature-num">0{i + 1}</span>
                      {feature.title}
                    </h3>
                    <p>{feature.detail}</p>
                  </div>
                ))}
              </div>
            </>
          )}

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

      {hasServices && product.serviceCatalog && (
        <GhostWriterServices services={product.serviceCatalog} />
      )}
    </section>
  );
}

export function ProductsShowcase() {
  return (
    <div className="lf-products-page">
      <div className="lf-products-glow" aria-hidden="true" />

      <div className="lf-products-inner">
        <header className="lf-prod-hero">
          <p className="lf-prod-eyebrow">LumexForge Product Studio</p>
          <h1 className="lf-prod-title">
            Built with <em>intention</em>
          </h1>
          <p className="lf-prod-lead">
            A curated line of mobile apps, AI products, and SaaS platforms — each crafted
            for clarity, usefulness, and long-term value.
          </p>
        </header>

        <ProductsNav
          products={PRODUCTS.map((p) => ({
            id: p.id,
            indexLabel: p.indexLabel,
            name: p.name,
          }))}
        />

        {PRODUCTS.map((product, index) => (
          <ProductSection key={product.id} product={product} index={index} />
        ))}

        <div className="lf-prod-footer-cta">
          <p className="lf-prod-eyebrow">Partnership</p>
          <h2>
            Have a product worth <em>forging?</em>
          </h2>
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
        </div>
      </div>
    </div>
  );
}
