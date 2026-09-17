import { CONTACT_EMAILS, FOUNDER } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const FOCUS = [
  {
    title: "Mobile Applications",
    text: "Native-quality apps built for speed, clarity, and everyday use.",
  },
  {
    title: "AI Products",
    text: "Intelligent systems for meals, emotion, content, and automation.",
  },
  {
    title: "SaaS & Platforms",
    text: "Scalable platforms that connect people, data, and workflows.",
  },
  {
    title: "Automation",
    text: "Tools that remove friction so teams focus on what matters.",
  },
];

const JOURNEY = [
  {
    year: "2026",
    title: "LumexForge begins",
    text: "An independent studio established to turn ambitious ideas into products people trust.",
  },
  {
    year: "Live",
    title: "ProteinSnaps ships",
    text: "First major release on iOS and Android — craft, AI, and usefulness shipping together.",
  },
  {
    year: "Next",
    title: "Building the ecosystem",
    text: "PostHunt, AMMORA, MiPaw, ADMINA, and more advancing under the same standard.",
  },
];

const VALUES = [
  { n: "01", title: "Innovation", text: "Explore what technology can become — then build what people need." },
  { n: "02", title: "Craft", text: "Every detail is intentional. Quality is the standard we ship with." },
  { n: "03", title: "Impact", text: "Products should empower, simplify, and endure beyond launch." },
  { n: "04", title: "Integrity", text: "Clear communication, ethical design, and trust that compounds." },
];

const PRODUCTS = [
  { label: "ProteinSnaps", href: "/products#proteinsnaps", note: "Live" },
  { label: "PostHunt", href: "/products#posthunt", note: "Dev" },
  { label: "AMMORA", href: "/products#ammora", note: "Dev" },
  { label: "MiPaw", href: "/products#mipaw", note: "Soon" },
  { label: "ADMINA", href: "/products#admina", note: "Soon" },
];

/** Server component — no Framer Motion / scroll observers for smooth scrolling */
export function AboutShowcase() {
  return (
    <div className="lf-about-page">
      <div className="lf-about-bg" aria-hidden="true" />

      <div className="lf-about-inner">
        <header className="lf-about-hero">
          <p className="lf-about-eyebrow">About</p>
          <h1 className="lf-about-title">
            We forge digital products with <em>purpose</em>
          </h1>
          <p className="lf-about-lead">
            Independent technology studio in <strong>Houston, USA</strong> — mobile apps,
            AI products, and SaaS built for clarity and lasting value.
          </p>
          <div className="lf-about-bar">
            <Link href="/products" className="lf-about-btn lf-about-btn--primary">
              Products <span aria-hidden="true">→</span>
            </Link>
            <Link href="/contact" className="lf-about-btn lf-about-btn--ghost">
              Contact
            </Link>
          </div>
        </header>

        <section className="lf-about-visual">
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
        </section>

        <section className="lf-about-block">
          <p className="lf-about-eyebrow">Story</p>
          <h2 className="lf-about-h2">
            From ambitious ideas to products people <em>rely on</em>
          </h2>
          <div className="lf-about-story-grid">
            <div className="lf-about-prose">
              <p>
                LumexForge was founded on a simple conviction: technology should feel
                inevitable — elegant enough to disappear into daily life, powerful enough
                to change what is possible.
              </p>
              <p>
                We study real human needs — nutrition, wellness, creativity, companionship,
                business systems — and forge tools people can rely on. ProteinSnaps is live
                on iOS and Android; PostHunt, AMMORA, MiPaw, ADMINA, and more advance with
                the same bar for craft.
              </p>
            </div>
            <aside className="lf-about-mission">
              <p className="lf-about-mission-quote">
                Create technology that empowers, simplifies, and inspires — then ship it
                with uncompromising care.
              </p>
              <p className="lf-about-mission-attr">Mission</p>
            </aside>
          </div>
        </section>

        <section className="lf-about-block">
          <p className="lf-about-eyebrow">Journey</p>
          <h2 className="lf-about-h2">
            <em>Milestones</em>
          </h2>
          <div className="lf-about-timeline">
            {JOURNEY.map((item) => (
              <article key={item.year} className="lf-about-timeline-item">
                <span className="lf-about-timeline-year">{item.year}</span>
                <div>
                  <h3 className="lf-about-timeline-title">{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="lf-about-block">
          <p className="lf-about-eyebrow">Build</p>
          <h2 className="lf-about-h2">
            What we <em>ship</em>
          </h2>
          <div className="lf-about-bento">
            {FOCUS.map((f) => (
              <div key={f.title} className="lf-about-bento-item">
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
          <div className="lf-about-products-row">
            {PRODUCTS.map((p) => (
              <Link key={p.label} href={p.href} className="lf-about-product-link">
                {p.label}
                <em>{p.note}</em>
              </Link>
            ))}
          </div>
        </section>

        <section className="lf-about-block">
          <p className="lf-about-eyebrow">Values</p>
          <h2 className="lf-about-h2">
            How we <em>work</em>
          </h2>
          <div className="lf-about-values">
            {VALUES.map((v) => (
              <div key={v.title} className="lf-about-value">
                <em>{v.n}</em>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="lf-about-block lf-about-founder">
          <div className="lf-about-photo">
            <Image
              src="/images/proteinsnaps/BG-M15.webp"
              alt={`${FOUNDER} — temporary portrait`}
              fill
              sizes="136px"
              className="object-cover object-center"
            />
          </div>
          <div>
            <p className="lf-about-eyebrow">Founder</p>
            <h2 className="lf-about-founder-name">
              A.R <em>Mirani</em>
            </h2>
            <p className="lf-about-founder-role">Founder &amp; Vision</p>
            <p className="lf-about-founder-loc">Houston, USA</p>
            <div className="lf-about-prose lf-about-prose--founder">
              <p>
                {FOUNDER} founded LumexForge to prove an independent studio can compete at a
                global standard — by building better products, not louder ones.
              </p>
              <p>
                From nutrition and pet wellness to emotional AI and business systems, he
                leads with a long-term lens: clarity over noise, usefulness over hype.
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
          </div>
        </section>

        <section className="lf-about-foot">
          <p className="lf-about-foot-line">
            Independent Studio · Est. 2026 · Mobile · AI · SaaS · Houston, USA
          </p>
          <div className="lf-about-bar lf-about-bar--center">
            <Link href="/products" className="lf-about-btn lf-about-btn--primary">
              Explore Products <span aria-hidden="true">→</span>
            </Link>
            <Link href="/contact" className="lf-about-btn lf-about-btn--ghost">
              Get In Touch
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
