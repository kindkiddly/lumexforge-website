import { ContactForm } from "@/components/contact/ContactForm";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { GradientMesh } from "@/components/shared/GradientMesh";
import { PageHeader } from "@/components/shared/PageHeader";
import { Container } from "@/components/ui/Container";
import { CONTACT_EMAILS } from "@/lib/constants";
import { contactMetadata } from "@/lib/metadata";

export const metadata = contactMetadata;

const contactChannels = [
  {
    label: "Business",
    description: "Partnerships & inquiries",
    value: CONTACT_EMAILS.business,
    href: `mailto:${CONTACT_EMAILS.business}`,
    icon: "business",
  },
  {
    label: "Support",
    description: "Product help & assistance",
    value: CONTACT_EMAILS.support,
    href: `mailto:${CONTACT_EMAILS.support}`,
    icon: "support",
  },
  {
    label: "Privacy",
    description: "Data & privacy matters",
    value: CONTACT_EMAILS.privacy,
    href: `mailto:${CONTACT_EMAILS.privacy}`,
    icon: "privacy",
  },
];

export default function ContactPage() {
  return (
    <div className="relative pt-24 pb-16 lg:pt-32 lg:pb-24">
      <GradientMesh variant="section" className="top-0 h-[50vh]" />

      <Container>
        <PageHeader
          eyebrow="Reach Out"
          title="Contact"
          description="Reach out for partnerships, business inquiries, or support. We typically respond within 1–2 business days."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <AnimatedSection className="space-y-4" delay={0.1}>
              {contactChannels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  className="group flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-primary/10 text-accent-primary transition-colors group-hover:bg-accent-primary/20">
                    <ChannelIcon type={channel.icon} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{channel.label}</p>
                    <p className="text-xs text-foreground-muted">{channel.description}</p>
                    <p className="mt-1.5 text-sm text-accent-secondary transition-colors group-hover:text-accent-secondary/80">
                      {channel.value}
                    </p>
                  </div>
                </a>
              ))}

              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                <p className="text-sm font-semibold text-foreground">Website</p>
                <p className="mt-1 text-sm text-foreground-secondary">lumexforge.com</p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="lg:col-span-3" delay={0.2}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </Container>
    </div>
  );
}

function ChannelIcon({ type }: { type: string }) {
  if (type === "business") {
    return (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25V6.75m8.25 0V5.25A2.25 2.25 0 0018 4.5H6a2.25 2.25 0 00-2.25 2.25v1.5m16.5 0H3.75" />
      </svg>
    );
  }
  if (type === "support") {
    return (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    );
  }
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}
