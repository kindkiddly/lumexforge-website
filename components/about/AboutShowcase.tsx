"use client";

import { CONTACT_EMAILS, FOUNDER } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

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
    year: "2026",
    title: "LumexForge begins",
    text: "An independent studio is established with one mandate: turn ambitious ideas into products people trust.",
  },
  {
    year: "Live",
    title: "ProteinSnaps ships",
    text: "Our first major release reaches iOS and Android — proving that craft, AI, and usefulness can ship together.",
  },
  {
    year: "Next",
    title: "Building the ecosystem",
    text: "PostHunt, AMMORA, MiPaw, ADMINA, and more advance under the same standard of craft.",
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
  { label: "ADMINA", href: "/products#admina", note: "Coming soon" },
];

export function AboutShowcase() {
  return (
    <div className="lf-about-page">
      <div className="lf-about-glow" aria-hidden="true" />
      <div className="lf-about-grain" aria-hidden="true" />

      <div className="lf-about-inner">
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
        </motion.header>

        <motion.section
          className="lf-about-visual"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          <div className="lf-about-visual-frame">
            <Image
              src="/images/lumexforge/LF-about/About-hero.webp"
              alt="LumexForge studio atmosphere"
              fill
              sizes="(max-width: 900px) 100vw, 1152px"
              quality={100}
              unoptimized
              priority
              className="object-cover object-center"
            />
            <div className="lf-about-visual-overlay" aria-hidden="true" />
            <div className="lf-about-visual-caption">
              <span>Studio atmosphere</span>
              <p>Building products with clarity and craft</p>
            </div>
          </div>
        </motion.section>

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
                to change what is possible. We design and ship products that turn
                complexity into clarity.
              </p>
              <p>
                We do not chase trends for their own sake. We study real human needs —
                nutrition, wellness, creativity, companionship, business systems — and
                forge tools that people can rely on. That discipline shows in every
                interface, every release, and every product still on the road ahead.
              </p>
              <p>
                ProteinSnaps is already live on iOS and Android. PostHunt, AMMORA, MiPaw,
                ADMINA, and more are advancing with the same standard of craft. One studio.
                One bar for quality. A growing family of products built to last.
              </p>
            </motion.div>

            <motion.aside className="lf-about-mission" variants={fadeUp}>
              <p className="lf-about-eyebrow">Mission</p>
              <p className="lf-about-mission-quote">
                Create technology that empowers, simplifies, and inspires — then ship it
                with uncompromising care.
              </p>
              <p className="lf-about-mission-attr">Mission · LumexForge</p>
            </motion.aside>
          </div>
        </motion.section>

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
          </motion.div>

          <div className="lf-about-timeline">
            {JOURNEY.map((item) => (
              <motion.article key={item.year} className="lf-about-timeline-item" variants={fadeUp}>
                <span className="lf-about-timeline-year">{item.year}</span>
                <div>
                  <h3 className="lf-about-timeline-title">{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

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
          </motion.div>

          <div className="lf-about-focus">
            {FOCUS.map((f) => (
              <motion.div key={f.title} className="lf-about-focus-row" variants={fadeUp}>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div className="lf-about-products-row" variants={fadeUp}>
            <span className="lf-about-inline-label">Ecosystem</span>
            <div className="lf-about-products">
              {PRODUCTS.map((p) => (
                <Link key={p.label} href={p.href} className="lf-about-product-link">
                  {p.label}
                  <em>{p.note}</em>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className="lf-about-block"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <p className="lf-about-eyebrow">What drives us</p>
            <h2 className="lf-about-h2">Values we build with</h2>
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
              <span>Photo soon</span>
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
              </p>
              <p>
                Every product under LumexForge carries the same promise: clarity over noise,
                usefulness over hype, and a lasting mark over a fleeting launch.
              </p>
            </div>

            <div className="lf-about-bar">
              <Link href="/contact" className="lf-about-btn lf-about-btn--primary">
                Connect <span aria-hidden="true">→</span>
              </Link>
              <a href={`mailto:${CONTACT_EMAILS.business}`} className="lf-about-btn lf-about-btn--ghost">
                {CONTACT_EMAILS.business}
              </a>
            </div>
          </motion.div>
        </motion.section>

        {/* Bottom studio bar — meta, stats, actions (moved from hero) */}
        <motion.section
          className="lf-about-foot"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="lf-about-foot-meta">
            <span>Independent Studio</span>
            <span aria-hidden="true">·</span>
            <span>Est. 2026</span>
            <span aria-hidden="true">·</span>
            <span>Mobile · AI · SaaS</span>
          </div>

          <div className="lf-about-foot-stats">
            <span>
              <strong>5+</strong> products
            </span>
            <span aria-hidden="true">·</span>
            <span>
              <strong>2026</strong> founded
            </span>
            <span aria-hidden="true">·</span>
            <span>
              <strong>Houston</strong> USA
            </span>
          </div>

          <div className="lf-about-bar lf-about-bar--center">
            <Link href="/products" className="lf-about-btn lf-about-btn--primary">
              Explore Products <span aria-hidden="true">→</span>
            </Link>
            <Link href="/contact" className="lf-about-btn lf-about-btn--ghost">
              Get In Touch
            </Link>
            <Link href="/" className="lf-about-btn lf-about-btn--ghost">
              Home
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
