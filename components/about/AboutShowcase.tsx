"use client";

import { CONTACT_EMAILS, FOUNDER } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const STATS = [
  { value: "5+", label: "Products in motion" },
  { value: "2024", label: "Studio founded" },
  { value: "Houston", label: "USA headquarters" },
];

const FOCUS = [
  {
    title: "Mobile Applications",
    text: "Native-quality apps built for speed, clarity, and everyday use — from nutrition to wellness and beyond.",
  },
  {
    title: "AI Products",
    text: "Intelligent systems that feel human: meal insight, emotional support, content creation, and automation.",
  },
  {
    title: "SaaS & Platforms",
    text: "Scalable digital platforms that connect people, data, and workflows without unnecessary complexity.",
  },
  {
    title: "Automation",
    text: "Tools that remove friction — so teams and individuals spend time on what actually matters.",
  },
];

const JOURNEY = [
  {
    year: "2024",
    title: "LumexForge begins",
    text: "An independent studio is founded in Houston, USA with one mandate: turn ambitious ideas into products people trust.",
  },
  {
    year: "2025",
    title: "ProteinSnaps goes live",
    text: "Our first major release reaches iOS and Android — proving that craft, AI, and usefulness can ship together.",
  },
  {
    year: "Now",
    title: "Building the ecosystem",
    text: "PostHunt, AMMORA, MiPaw, Bookora, and more advance under the same standard — from Houston to the world.",
  },
];

const VALUES = [
  {
    n: "01",
    title: "Innovation",
    text: "We explore what technology can become — then build what people actually need.",
  },
  {
    n: "02",
    title: "Craft",
    text: "Every detail is intentional. Quality is not a phase; it is the standard we ship with.",
  },
  {
    n: "03",
    title: "Impact",
    text: "Products should empower, simplify, and endure long after the launch moment fades.",
  },
  {
    n: "04",
    title: "Integrity",
    text: "Clear communication, ethical design, and trust that compounds with every release.",
  },
];

const PRODUCTS = [
  { label: "ProteinSnaps", href: "/products#proteinsnaps", note: "Live" },
  { label: "PostHunt", href: "/products#posthunt", note: "In development" },
  { label: "AMMORA", href: "/products#ammora", note: "In development" },
  { label: "MiPaw", href: "/products#mipaw", note: "Coming soon" },
  { label: "Bookora", href: "/products#bookora", note: "Coming soon" },
];

export function AboutShowcase() {
  return (
    <div className="lf-about-page">
      <div className="lf-about-glow" aria-hidden="true" />
      <div className="lf-about-grain" aria-hidden="true" />

      <div className="lf-about-inner">
        {/* Hero */}
        <motion.header
          className="lf-about-hero"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          <motion.p className="lf-about-eyebrow" variants={fadeUp}>
            About LumexForge
          </motion.p>
          <motion.h1 className="lf-about-title" variants={fadeUp}>
            We forge digital products with <em>purpose</em>
          </motion.h1>
          <motion.p className="lf-about-lead" variants={fadeUp}>
            LumexForge is an independent technology studio based in{" "}
            <strong>Houston, USA</strong> — building mobile apps, AI products, and SaaS
            platforms designed for clarity, usefulness, and long-term value.
          </motion.p>

          <motion.div className="lf-about-meta" variants={fadeUp}>
            <span className="lf-about-chip lf-about-chip--loc">Houston, USA</span>
            <span className="lf-about-chip">Independent Studio</span>
            <span className="lf-about-chip">Est. 2024</span>
            <span className="lf-about-chip">Mobile · AI · SaaS</span>
          </motion.div>

          <motion.div className="lf-about-actions" variants={fadeUp}>
            <Link href="/products" className="lf-about-btn lf-about-btn--primary">
              Explore Products <span aria-hidden="true">→</span>
            </Link>
            <Link href="/contact" className="lf-about-btn lf-about-btn--glass">
              Get In Touch
            </Link>
          </motion.div>

          <motion.div className="lf-about-stats" variants={fadeUp}>
            {STATS.map((s) => (
              <div key={s.label} className="lf-about-stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.header>

        {/* Visual band */}
        <motion.section
          className="lf-about-visual"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          <div className="lf-about-visual-frame">
            <Image
              src="/images/lumexforge/LF-carousel/LF-4.webp"
              alt="LumexForge studio — Houston, USA"
              fill
              sizes="(max-width: 900px) 100vw, 1120px"
              className="object-cover object-center"
              priority
            />
            <div className="lf-about-visual-overlay" aria-hidden="true" />
            <div className="lf-about-visual-caption">
              <span>Houston, USA</span>
              <p>Home base for a studio building for the world</p>
            </div>
          </div>
        </motion.section>

        {/* Story */}
        <motion.section
          className="lf-about-block"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <p className="lf-about-eyebrow">Our story</p>
            <h2 className="lf-about-h2">
              From a belief in better software to a growing product ecosystem
            </h2>
          </motion.div>

          <div className="lf-about-story-grid">
            <motion.div className="lf-about-prose" variants={fadeUp}>
              <p>
                LumexForge was founded on a simple conviction: technology should feel
                inevitable — elegant enough to disappear into daily life, powerful enough
                to change what is possible. From Houston, USA, we design and ship products
                that turn complexity into clarity.
              </p>
              <p>
                We do not chase trends for their own sake. We study real human needs —
                nutrition, wellness, creativity, companionship, business systems — and
                forge tools that people can rely on. That discipline shows in every
                interface, every release, and every product still on the road ahead.
              </p>
              <p>
                ProteinSnaps is already live on iOS and Android. PostHunt, AMMORA, MiPaw,
                Bookora, and more are advancing with the same standard of craft. One studio.
                One bar for quality. A growing family of products built to last.
              </p>
            </motion.div>

            <motion.aside className="lf-about-mission" variants={fadeUp}>
              <p className="lf-about-eyebrow">Mission</p>
              <p className="lf-about-mission-quote">
                Create technology that empowers, simplifies, and inspires — then ship it
                with uncompromising care.
              </p>
              <p className="lf-about-mission-attr">LumexForge · Houston, USA</p>
            </motion.aside>
          </div>
        </motion.section>

        {/* Journey */}
        <motion.section
          className="lf-about-block"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <p className="lf-about-eyebrow">The journey</p>
            <h2 className="lf-about-h2">Milestones that shaped the studio</h2>
            <p className="lf-about-sub">
              A focused path from founding in Houston to shipping live products — and
              building what comes next.
            </p>
          </motion.div>

          <div className="lf-about-timeline">
            {JOURNEY.map((item) => (
              <motion.article key={item.year} className="lf-about-timeline-item" variants={fadeUp}>
                <span className="lf-about-timeline-year">{item.year}</span>
                <h3 className="lf-about-timeline-title">{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* What we build */}
        <motion.section
          className="lf-about-block"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <p className="lf-about-eyebrow">What we build</p>
            <h2 className="lf-about-h2">Capabilities shaped by real products</h2>
            <p className="lf-about-sub">
              Mobile, AI, platforms, and automation — practiced in shipping software, not
              just slide decks.
            </p>
          </motion.div>

          <div className="lf-about-focus">
            {FOCUS.map((f) => (
              <motion.div key={f.title} className="lf-about-focus-card" variants={fadeUp}>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div className="lf-about-products-row" variants={fadeUp}>
            <p className="lf-about-eyebrow">In the ecosystem</p>
            <div className="lf-about-products">
              {PRODUCTS.map((p) => (
                <Link key={p.label} href={p.href} className="lf-about-product-link">
                  <span>{p.label}</span>
                  <em>{p.note}</em>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Values */}
        <motion.section
          className="lf-about-block"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div className="lf-about-center" variants={fadeUp}>
            <p className="lf-about-eyebrow">What drives us</p>
            <h2 className="lf-about-h2">Values we build with</h2>
            <p className="lf-about-sub">
              Four principles that guide every decision — from first sketch to final ship.
            </p>
          </motion.div>

          <div className="lf-about-values">
            {VALUES.map((v) => (
              <motion.div key={v.title} className="lf-about-value" variants={fadeUp}>
                <em>{v.n}</em>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Founder */}
        <motion.section
          className="lf-about-block lf-about-founder"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div className="lf-about-photo" variants={fadeUp}>
            <div className="lf-about-photo-placeholder" aria-label="Founder photo placeholder">
              <strong>AR</strong>
              <span>Photo coming soon</span>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="lf-about-eyebrow">Founder</p>
            <h2 className="lf-about-founder-name">{FOUNDER}</h2>
            <p className="lf-about-founder-role">Founder &amp; Vision · LumexForge</p>
            <p className="lf-about-founder-loc">Based in Houston, USA</p>

            <div className="lf-about-prose lf-about-prose--founder">
              <p>
                {FOUNDER} founded LumexForge to prove that an independent studio can compete
                at a global standard — not by building louder products, but by building
                better ones. His vision is rooted in disciplined craft: understand the
                human need, engineer with precision, and ship with integrity.
              </p>
              <p>
                From nutrition and pet wellness to emotional AI, social automation, and
                business systems, he leads with a long-term lens — creating software that
                feels personal, performs reliably, and earns trust one release at a time.
                Houston is home base; the ambition is worldwide.
              </p>
              <p>
                Every product under LumexForge carries the same promise: clarity over noise,
                usefulness over hype, and a lasting mark over a fleeting launch.
              </p>
            </div>

            <div className="lf-about-actions">
              <Link href="/contact" className="lf-about-btn lf-about-btn--primary">
                Connect with the Studio <span aria-hidden="true">→</span>
              </Link>
              <a
                href={`mailto:${CONTACT_EMAILS.business}`}
                className="lf-about-btn lf-about-btn--glass"
              >
                {CONTACT_EMAILS.business}
              </a>
            </div>
          </motion.div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="lf-about-cta"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
        >
          <p className="lf-about-eyebrow">Partnership</p>
          <h2 className="lf-about-h2">Building something that deserves permanence?</h2>
          <p className="lf-about-cta-lead">
            Whether you are launching a product or shaping the next chapter of an idea —
            LumexForge partners from concept to launch, from Houston, USA to the world.
          </p>
          <div className="lf-about-actions lf-about-actions--center">
            <Link href="/contact" className="lf-about-btn lf-about-btn--primary">
              Start a Conversation <span aria-hidden="true">→</span>
            </Link>
            <Link href="/products" className="lf-about-btn lf-about-btn--glass">
              View Products
            </Link>
            <Link href="/" className="lf-about-btn lf-about-btn--glass">
              Back to Home
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
