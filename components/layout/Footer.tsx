import { Logo } from "@/components/shared/Logo";
import { Container } from "@/components/ui/Container";
import { CONTACT_EMAILS, FOOTER_LINKS, FOUNDER } from "@/lib/constants";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="lf-site-footer relative border-t border-white/[0.06] bg-[#000814]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#06b6d4]/35 to-transparent"
        aria-hidden="true"
      />

      <Container className="py-8 lg:py-9">
        <div className="lf-footer-grid">
          <div className="lf-footer-brand">
            <Logo size="sm" />
            <p className="lf-footer-tagline">
              Independent technology studio — mobile, AI, and SaaS built for clarity and
              lasting impact.
            </p>
            <p className="lf-footer-founded">Founded by {FOUNDER}</p>
          </div>

          <nav className="lf-footer-nav" aria-label="Footer">
            <FooterColumn title="Products" links={FOOTER_LINKS.products} />
            <FooterColumn title="Company" links={FOOTER_LINKS.company} />
            <FooterColumn title="Legal" links={FOOTER_LINKS.legal} />
          </nav>

          <div className="lf-footer-cta">
            <p className="lf-footer-cta-label">Ready to build?</p>
            <Link href="/contact" className="lf-footer-btn">
              Get In Touch <span aria-hidden="true">→</span>
            </Link>
            <a href={`mailto:${CONTACT_EMAILS.business}`} className="lf-footer-email">
              {CONTACT_EMAILS.business}
            </a>
          </div>
        </div>

        <div className="lf-footer-bottom">
          <p>© 2026 LumexForge. All rights reserved.</p>
          <div className="lf-footer-bottom-links">
            <Link href="/privacy">Privacy</Link>
            <span aria-hidden="true">·</span>
            <Link href="/terms">Terms</Link>
            <span aria-hidden="true">·</span>
            <a href={`mailto:${CONTACT_EMAILS.support}`}>Support</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="lf-footer-col">
      <h3>{title}</h3>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            {link.href.startsWith("mailto:") ? (
              <a href={link.href}>{link.label}</a>
            ) : (
              <Link href={link.href}>{link.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
