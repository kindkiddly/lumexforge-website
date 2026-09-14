"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

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

const APPS = [
  {
    id: "proteinsnaps",
    name: "ProteinSnaps",
    tagline: "AI-powered nutrition and fitness tracking",
    status: "Live on Android",
    statusClass: "bg-emerald-500/15 text-emerald-400 ring-emerald-500/30",
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
    statusClass: "bg-sky-500/15 text-sky-400 ring-sky-500/30",
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
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden py-28"
    >
      <div
        ref={bgRef}
        className="lf-about-parallax-bg absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#141428] via-[#1a1a2e] to-[#0f0f1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_20%_50%,rgba(124,58,237,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_85%_40%,rgba(6,182,212,0.12),transparent_55%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-16 px-6">
        <FadeInUp>
          <h2 className="text-4xl font-bold tracking-tight text-[#F8FAFC]">
            About LumexForge
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#94A3B8]">
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
                <p className="text-xl font-bold tracking-tight text-[#F8FAFC]">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs text-[#94A3B8]">{stat.label}</p>
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
      {/* SECTION 1 — HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-[4.5rem]">
        <div
          className="absolute inset-0 -z-20 bg-gradient-to-br from-[#0F0F1A] via-[#151528] to-[#1a1a2e]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_15%_40%,rgba(124,58,237,0.22),transparent_65%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_45%_40%_at_85%_60%,rgba(6,182,212,0.08),transparent_60%)]"
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

        <div className="mx-auto grid w-full max-w-7xl grid-cols-[55fr_45fr] items-center gap-12 px-6 py-28">
          <FadeInUp>
            <span className="inline-flex items-center rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-4 py-1.5 text-sm font-medium text-[#7C3AED]">
              LumexForge Studio
            </span>

            <h1 className="mt-8 text-6xl font-bold leading-[1.05] tracking-tight">
              <span className="block text-[#F8FAFC]">We Build Apps</span>
              <span className="block text-[#7C3AED]">That Matter.</span>
            </h1>

            <p className="mt-6 max-w-xl text-xl leading-relaxed text-[#94A3B8]">
              A boutique mobile studio crafting intelligent apps for iOS and Android
            </p>

            <div className="mt-10 flex items-center gap-4">
              <Link
                href="#products"
                className="inline-flex items-center justify-center rounded-xl bg-[#7C3AED] px-7 py-3.5 text-base font-semibold text-white shadow-[0_0_30px_-6px_rgba(124,58,237,0.55)] transition-all duration-300 hover:bg-[#6D28D9] hover:shadow-[0_0_40px_-4px_rgba(124,58,237,0.65)]"
              >
                Explore Our Apps
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-xl border border-white/[0.14] bg-transparent px-7 py-3.5 text-base font-semibold text-[#F8FAFC] transition-all duration-300 hover:border-[#06B6D4]/40 hover:text-[#06B6D4]"
              >
                Learn About Us
              </Link>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.15}>
            <div className="lf-3d-card relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#7C3AED]/25">
              <div className="lf-placeholder-hero absolute inset-0" aria-hidden="true" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A]/90 via-[#0F0F1A]/20 to-transparent" />
              <div className="absolute inset-0 shadow-[inset_0_0_60px_-20px_rgba(6,182,212,0.25)]" />

              <div className="relative flex h-full flex-col justify-end p-8">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#06B6D4]">
                  Featured App
                </p>
                <p className="mt-2 text-3xl font-bold tracking-tight text-[#F8FAFC]">
                  ProteinSnaps
                </p>
                <p className="mt-2 text-sm text-[#94A3B8]">
                  LF-Hero-1.webp — coming soon
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* SECTION 2 — APPS SHOWCASE */}
      <section id="products" className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInUp className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#06B6D4]">
              What We Build
            </p>
            <h2 className="mt-4 text-5xl font-bold tracking-tight text-[#F8FAFC]">
              Our Products
            </h2>
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
                    <span className="absolute bottom-4 right-4 rounded-md bg-black/40 px-2 py-1 text-[10px] font-mono text-[#94A3B8] backdrop-blur-sm">
                      {app.imageLabel}
                    </span>
                  </div>

                  <div className="p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold tracking-tight text-[#F8FAFC]">
                          {app.name}
                        </h3>
                        <p className="mt-2 text-[#94A3B8]">{app.tagline}</p>
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
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#06B6D4] transition-colors hover:text-[#7C3AED]"
                      >
                        {app.cta}
                      </a>
                    ) : (
                      <Link
                        href={app.href}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#06B6D4] transition-colors hover:text-[#7C3AED]"
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
            <h2 className="text-4xl font-bold tracking-tight text-[#F8FAFC]">
              Studio Values
            </h2>
          </FadeInUp>

          <div className="grid grid-cols-3 gap-8">
            {VALUES.map((value, index) => (
              <FadeInUp key={value.title} delay={index * 0.1}>
                <article className="lf-clay-card lf-3d-card h-full rounded-2xl border border-[#7C3AED]/20 p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7C3AED]/15 text-[#7C3AED] ring-1 ring-[#7C3AED]/25">
                    {value.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-[#F8FAFC]">
                    {value.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-[#94A3B8]">
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
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-br from-[#7C3AED]/30 via-[#141428] to-[#06B6D4]/25 px-16 py-20 text-center shadow-[0_30px_80px_-30px_rgba(124,58,237,0.45)]">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)]"
                aria-hidden="true"
              />

              <h2 className="relative text-5xl font-bold tracking-tight text-[#F8FAFC]">
                Ready to build something great?
              </h2>
              <p className="relative mx-auto mt-5 max-w-2xl text-lg text-[#94A3B8]">
                Explore our apps or get in touch with the team
              </p>

              <div className="relative mt-10 flex items-center justify-center gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-xl bg-[#7C3AED] px-7 py-3.5 text-base font-semibold text-white shadow-[0_0_30px_-6px_rgba(124,58,237,0.55)] transition-all hover:bg-[#6D28D9]"
                >
                  View All Apps
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/[0.06] px-7 py-3.5 text-base font-semibold text-[#F8FAFC] backdrop-blur-sm transition-all hover:border-[#06B6D4]/40 hover:text-[#06B6D4]"
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
