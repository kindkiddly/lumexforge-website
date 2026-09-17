import { ContactFormPanel } from "@/components/contact/ContactFormPanel";
import { CONTACT_EMAILS } from "@/lib/constants";

const CHANNELS = [
  {
    label: "Business",
    description: "Partnerships & inquiries",
    value: CONTACT_EMAILS.business,
  },
  {
    label: "Support",
    description: "Product help & assistance",
    value: CONTACT_EMAILS.support,
  },
  {
    label: "Privacy",
    description: "Data & privacy matters",
    value: CONTACT_EMAILS.privacy,
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
            <div className="lf-contact-channels">
              {CHANNELS.map((channel) => (
                <a
                  key={channel.label}
                  href={`mailto:${channel.value}`}
                  className="lf-contact-channel"
                >
                  <div>
                    <strong>{channel.label}</strong>
                    <span>{channel.description}</span>
                  </div>
                  <span className="lf-contact-channel-email">{channel.value}</span>
                </a>
              ))}
            </div>
            <p className="lf-contact-meta">
              <strong>Web</strong> lumexforge.com · <strong>HQ</strong> Houston, USA
            </p>
          </aside>

          <div className="lf-contact-form-wrap">
            <ContactFormPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
