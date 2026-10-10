import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import {
  BUSINESS_ADDRESS,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_TEL,
  CONTACT_EMAILS,
} from "@/lib/constants";
import { termsMetadata } from "@/lib/metadata";

export const metadata = termsMetadata;

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      breadcrumbLabel="Terms"
      lastUpdated="October 4, 2026"
    >
      <LegalSection title="1. About these terms">
        <p>
          These Terms govern your use of the LumexForge website at lumexforge.com.
          By using the website, you agree to these Terms. If you do not agree,
          please do not use the website.
        </p>
      </LegalSection>

      <LegalSection title="2. LumexForge and its products">
        <p>
          LumexForge is an independent technology and creative studio, and the parent
          company of a growing family of digital products and services. We bring
          together technology, artificial intelligence and creative craft to build
          products that make everyday life simpler, healthier and more meaningful,
          from mobile apps and AI-powered tools to SaaS platforms, business software,
          and professional writing and book publishing services.
        </p>
        <p>Our portfolio includes, but is not limited to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>ProteinSnaps: Live on iOS and Android.</li>
          <li>GhostWriterHunt: Live.</li>
          <li>AMMORA: Ready to launch.</li>
          <li>PostHunt: Ready to launch.</li>
          <li>MiPaw: In development.</li>
          <li>ADMINA: In development.</li>
        </ul>
        <p>Many more products are on the way.</p>
      </LegalSection>

      <LegalSection title="3. Product terms">
        <p>
          Each product has its own Terms of Service and Privacy Policy, available on
          its own website and within the product. When you use a product, its own
          terms apply. If there is a conflict, the product&apos;s own terms govern
          for that product.
        </p>
      </LegalSection>

      <LegalSection title="4. Use of the website">
        <p>You agree not to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Use the website for any unlawful purpose.</li>
          <li>
            Try to gain unauthorized access to the website, its servers, or related
            systems.
          </li>
          <li>
            Interfere with the website&apos;s operation, for example through malware,
            spam, or automated attacks.
          </li>
          <li>
            Copy, scrape, or reuse website content for commercial purposes without
            permission.
          </li>
          <li>Impersonate LumexForge or misrepresent your affiliation with us.</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Intellectual property">
        <p>
          The LumexForge name, logo, product names, designs, images and content on
          this website belong to LumexForge. You may not use them without our written
          permission.
        </p>
      </LegalSection>

      <LegalSection title="6. Product information and availability">
        <p>
          Product descriptions, features, screenshots and launch statuses on this
          website are for general information. Products in development may change, be
          delayed, or not be released. We do not guarantee any launch date or
          feature.
        </p>
      </LegalSection>

      <LegalSection title="7. Purchases">
        <p>
          No purchases are made on this website. Purchases and subscriptions for our
          products are handled through the Apple App Store, Google Play, or the
          product&apos;s own website, under their own payment and refund terms.
        </p>
      </LegalSection>

      <LegalSection title="8. Inquiries and services">
        <p>
          Messages sent through our contact form are inquiries only. No agreement,
          project or service commitment exists until it is confirmed in a separate
          written agreement.
        </p>
      </LegalSection>

      <LegalSection title="9. Third-party links">
        <p>
          The website may link to app stores, product websites and other third-party
          services. We are not responsible for their content or practices.
        </p>
      </LegalSection>

      <LegalSection title="10. Disclaimer">
        <p>
          The website is provided &quot;as is&quot; and &quot;as available&quot;. We
          do not guarantee that it will always be available, error-free, or free from
          harmful components.
        </p>
      </LegalSection>

      <LegalSection title="11. Limitation of liability">
        <p>
          To the maximum extent permitted by law, LumexForge is not liable for any
          indirect, incidental, or consequential damages arising from your use of
          this website.
        </p>
      </LegalSection>

      <LegalSection title="12. Changes to these terms">
        <p>
          We may update these Terms from time to time. The &quot;Last updated&quot;
          date at the top shows the latest version. Continued use of the website
          means you accept the updated Terms.
        </p>
      </LegalSection>

      <LegalSection title="13. Governing law">
        <p>
          These Terms are governed by the laws of the State of Texas, USA. Disputes
          will be resolved in the state or federal courts located in Fort Bend County,
          Texas.
        </p>
      </LegalSection>

      <LegalSection title="14. Contact">
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
        <p>
          Call:{" "}
          <a
            href={BUSINESS_PHONE_TEL}
            className="text-accent-secondary transition-colors hover:underline"
          >
            {BUSINESS_PHONE_DISPLAY}
          </a>
        </p>
        <p>LumexForge, {BUSINESS_ADDRESS}</p>
      </LegalSection>
    </LegalLayout>
  );
}
