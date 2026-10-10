import { Logo } from "@/components/shared/Logo";
import { Container } from "@/components/ui/Container";
import {
  BUSINESS_ADDRESS,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_TEL,
  CONTACT_EMAILS,
  FOOTER_LINKS,
  FOUNDER,
} from "@/lib/constants";
import Link from "next/link";

const FOOTER_LEGAL_LINKS = [
  ...FOOTER_LINKS.legal,
  { label: "Support", href: `mailto:${CONTACT_EMAILS.support}` },
];

export function Footer() {
  return (
    <footer className="lf-site-footer relative border-t border-white/[0.06] bg-[#000814]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#06b6d4]/35 to-transparent"
        aria-hidden="true"
      />

      <Container className="py-5 lg:py-6">
        <div className="lf-footer-grid">
          <div className="lf-footer-brand">
            <Logo size="sm" />
            <p className="lf-footer-tagline">
              Where technology, intelligence and creativity are forged into products that
              last.
            </p>
            <p className="lf-footer-founded">Founded by {FOUNDER}</p>
          </div>

          <FooterColumn title="Company" links={FOOTER_LINKS.company} />
          <FooterColumn title="Legal" links={FOOTER_LEGAL_LINKS} />

          <div className="lf-footer-cta">
            <p className="lf-footer-cta-label">Ready to build?</p>
            <Link href="/contact" className="lf-footer-btn">
              Get In Touch <span aria-hidden="true">→</span>
            </Link>
            <a href={`mailto:${CONTACT_EMAILS.business}`} className="lf-footer-email">
              {CONTACT_EMAILS.business}
            </a>
            <a href={BUSINESS_PHONE_TEL} className="lf-footer-email">
              Call: {BUSINESS_PHONE_DISPLAY}
            </a>
            <span className="lf-footer-email lf-footer-email--plain">{BUSINESS_ADDRESS}</span>
          </div>
        </div>

        <div className="lf-footer-bottom">
          <p>© 2026 LumexForge. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterLink({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  if (href.startsWith("mailto:")) {
    return <a href={href}>{label}</a>;
  }
  return <Link href={href}>{label}</Link>;
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
            <FooterLink label={link.label} href={link.href} />
          </li>
        ))}
      </ul>
    </div>
  );
}
