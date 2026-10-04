import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import { CONTACT_EMAILS } from "@/lib/constants";
import { privacyMetadata } from "@/lib/metadata";

export const metadata = privacyMetadata;

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      breadcrumbLabel="Privacy"
      lastUpdated="October 4, 2026"
    >
      <LegalSection title="1. Who we are">
        <p>
          LumexForge is an independent technology and creative studio, and the parent
          company of a growing family of digital products and services. We bring
          together technology, artificial intelligence and creative craft to build
          products that make everyday life simpler, healthier and more meaningful,
          from mobile apps and AI-powered tools to SaaS platforms, business software,
          and professional writing and book publishing services. Every product we
          create is built with care, clarity and long-term value in mind, for people
          and businesses around the world. In this policy, &quot;LumexForge&quot;,
          &quot;we&quot;, &quot;us&quot; and &quot;our&quot; refer to LumexForge.
        </p>
      </LegalSection>

      <LegalSection title="2. Scope of this policy">
        <p>
          This policy covers the LumexForge company website at lumexforge.com and
          any information you share with LumexForge directly, for example through
          our contact form or by email.
        </p>
        <p>
          Each LumexForge product has its own Privacy Policy, published on that
          product&apos;s own website and inside the product. When you use a product,
          that product&apos;s Privacy Policy applies to the data collected through
          it.
        </p>
      </LegalSection>

      <LegalSection title="3. Our products">
        <p>LumexForge&apos;s portfolio includes, but is not limited to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            ProteinSnaps: AI nutrition and fitness tracker. Live on iOS and Android.
          </li>
          <li>
            GhostWriterHunt: Ghostwriting, book design and digital publishing
            services. Live.
          </li>
          <li>AMMORA: AI grief companion and portrait app. Ready to launch.</li>
          <li>
            PostHunt: AI social media content creation and scheduling platform.
            Ready to launch.
          </li>
          <li>MiPaw: Dog nutrition, fitness and health tracking. In development.</li>
          <li>ADMINA: Business finances, invoicing and reports. In development.</li>
        </ul>
        <p>
          Many more products are on the way. Each product&apos;s privacy policy and
          terms are available on its own website and within the product.
        </p>
      </LegalSection>

      <LegalSection title="4. Information we collect on this website">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Information you give us: your name, email address, and the content of
            your message when you contact us through the form or by email.
          </li>
          <li>
            Information collected automatically: basic technical data such as browser
            type, device type, approximate location (from IP address), pages visited,
            and referring website. This is collected through standard server logs
            and, where used, privacy-friendly analytics.
          </li>
          <li>
            We do not ask for payment details, passwords, or sensitive personal data
            on this website.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="5. How we use your information">
        <ul className="list-disc space-y-2 pl-5">
          <li>To respond to your inquiries and support requests.</li>
          <li>To discuss projects, partnerships or services you ask about.</li>
          <li>
            To keep the website secure, prevent abuse, and fix technical issues.
          </li>
          <li>
            To understand how visitors use the website and improve it, using
            aggregated data.
          </li>
          <li>To comply with legal obligations.</li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Legal basis (for visitors in the EU/UK)">
        <p>
          We process your data based on your consent (when you contact us), our
          legitimate interests (running and securing the website), and legal
          obligations where applicable.
        </p>
      </LegalSection>

      <LegalSection title="7. Sharing your information">
        <p>We do not sell or rent your personal data. We only share it with:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Service providers that help us run the website (hosting, email delivery,
            analytics), only as needed to provide their service.
          </li>
          <li>
            Authorities, if required by law or to protect our rights and the safety
            of our users.
          </li>
          <li>
            A successor business, if LumexForge is involved in a merger or
            acquisition, with this policy continuing to apply.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="8. Cookies">
        <p>
          The website uses only essential cookies needed for it to work properly,
          and may use analytics cookies to understand traffic. You can block or
          delete cookies in your browser settings.
        </p>
      </LegalSection>

      <LegalSection title="9. Data retention">
        <p>
          Contact messages are kept as long as needed to respond and follow up, then
          deleted or archived. Technical logs are kept for a limited period for
          security and troubleshooting.
        </p>
      </LegalSection>

      <LegalSection title="10. Security">
        <p>
          We use HTTPS encryption and industry-standard practices to protect your
          data. No online system is completely secure, but we work continuously to
          protect your information.
        </p>
      </LegalSection>

      <LegalSection title="11. International transfers">
        <p>
          Our service providers may process data in the United States and other
          countries. We take reasonable steps to ensure your data is protected
          wherever it is processed.
        </p>
      </LegalSection>

      <LegalSection title="12. Your rights">
        <p>
          Depending on where you live, you may have the right to access, correct, or
          delete your personal data, object to or limit its processing, and withdraw
          your consent. To make a request, email us at{" "}
          <a
            href={`mailto:${CONTACT_EMAILS.business}`}
            className="text-accent-secondary transition-colors hover:underline"
          >
            {CONTACT_EMAILS.business}
          </a>
          . We respond within 30 days.
        </p>
        <p>
          For data inside a specific product, please use that product&apos;s in-app
          settings or its own privacy contact.
        </p>
      </LegalSection>

      <LegalSection title="13. Children">
        <p>
          This website is not directed at children under 16, and we do not knowingly
          collect their data. If you believe a child has sent us information, contact
          us and we will delete it.
        </p>
      </LegalSection>

      <LegalSection title="14. Third-party links">
        <p>
          This website links to app stores and to our product websites. Those sites
          have their own policies, and we are not responsible for the practices of
          third-party sites.
        </p>
      </LegalSection>

      <LegalSection title="15. Changes to this policy">
        <p>
          We may update this policy from time to time. The &quot;Last updated&quot;
          date at the top shows the latest version.
        </p>
      </LegalSection>

      <LegalSection title="16. Contact us">
        <p>
          Email:{" "}
          <a
            href={`mailto:${CONTACT_EMAILS.business}`}
            className="text-accent-secondary transition-colors hover:underline"
          >
            {CONTACT_EMAILS.business}
          </a>
        </p>
        <p>
          Support:{" "}
          <a
            href={`mailto:${CONTACT_EMAILS.support}`}
            className="text-accent-secondary transition-colors hover:underline"
          >
            {CONTACT_EMAILS.support}
          </a>
        </p>
        <p>LumexForge, Houston, Texas, USA</p>
      </LegalSection>
    </LegalLayout>
  );
}
