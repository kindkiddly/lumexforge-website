import { ContactFormPanel } from "@/components/contact/ContactFormPanel";
import { CONTACT_EMAILS, SITE_URL } from "@/lib/constants";

const CHANNELS = [
  {
    label: "Business",
    description: "Partnerships & inquiries",
    value: CONTACT_EMAILS.business,
    href: `mailto:${CONTACT_EMAILS.business}`,
  },
  {
    label: "Support",
    description: "Product help & assistance",
    value: CONTACT_EMAILS.support,
    href: `mailto:${CONTACT_EMAILS.support}`,
  },
  {
    label: "Privacy",
    description: "Data & privacy matters",
    value: CONTACT_EMAILS.privacy,
    href: `mailto:${CONTACT_EMAILS.privacy}`,
  },
];

const META_ROWS = [
  {
    label: "Website",
    description: "Company site",
    value: "lumexforge.com",
    href: SITE_URL as string | null,
  },
  {
    label: "Headquarters",
    description: "Studio location",
    value: "Houston, USA",
    href: null as string | null,
  },
];

/** Server shell — only the form is client for lighter scroll/perf */
export function ContactShowcase() {
  return (
    <div className="lf-contact-page">
      <div className="lf-contact-bg" aria-hidden="true" />

      <div className="lf-contact-inner">
        <header className="lf-contact-hero lf-contact-fade">
          <p className="lf-contact-eyebrow">Contact</p>
          <h1 className="lf-contact-title">
            Let&apos;s start a <em>conversation</em>
          </h1>
          <p className="lf-contact-lead">
            Partnerships, product questions, or support — reach the studio directly.
            Based in Houston, USA.
          </p>
        </header>

        <div className="lf-contact-grid">
          <aside className="lf-contact-side">
            <p className="lf-contact-side-label">Direct channels</p>

            <ul className="lf-contact-channels">
              {CHANNELS.map((channel) => (
                <li key={channel.label} className="lf-contact-channel">
                  <div className="lf-contact-channel-text">
                    <span className="lf-contact-channel-label">{channel.label}</span>
                    <span className="lf-contact-channel-desc">{channel.description}</span>
                  </div>
                  <a href={channel.href} className="lf-contact-channel-value">
                    {channel.value}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="lf-contact-channels lf-contact-channels--meta">
              {META_ROWS.map((row) => (
                <li key={row.label} className="lf-contact-channel">
                  <div className="lf-contact-channel-text">
                    <span className="lf-contact-channel-label">{row.label}</span>
                    <span className="lf-contact-channel-desc">{row.description}</span>
                  </div>
                  {row.href ? (
                    <a
                      href={row.href}
                      className="lf-contact-channel-value"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {row.value}
                    </a>
                  ) : (
                    <span className="lf-contact-channel-value lf-contact-channel-value--plain">
                      {row.value}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </aside>

          <div className="lf-contact-form-wrap">
            <ContactFormPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
