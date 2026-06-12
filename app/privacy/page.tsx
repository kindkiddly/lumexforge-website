import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import { CONTACT_EMAILS, SITE_NAME } from "@/lib/constants";
import { privacyMetadata } from "@/lib/metadata";

export const metadata = privacyMetadata;

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="June 13, 2026">
      <LegalSection title="Introduction">
        <p>
          This Privacy Policy describes how {SITE_NAME} (&quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;) collects, uses, and protects your information when you use our
          website at lumexforge.com and our products, including ProteinSnap, AMORA,
          KePaso, and future LumexForge products and services.
        </p>
      </LegalSection>

      <LegalSection title="Information Collection">
        <p>
          We may collect information you provide directly to us, such as when you
          create an account, use our products, fill out a contact form, subscribe to
          updates, or communicate with us. This may include:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Name and email address</li>
          <li>Account credentials and profile information</li>
          <li>Messages and correspondence</li>
          <li>Usage data and product interaction data</li>
          <li>Device information and browser type</li>
        </ul>
      </LegalSection>

      <LegalSection title="Usage of Information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Provide, maintain, and improve our products and services</li>
          <li>Process transactions and send related information</li>
          <li>Respond to your comments, questions, and requests</li>
          <li>Send technical notices, updates, and support messages</li>
          <li>Monitor and analyze trends, usage, and activities</li>
          <li>Detect, investigate, and prevent fraudulent or unauthorized activity</li>
        </ul>
      </LegalSection>

      <LegalSection title="Analytics">
        <p>
          We may use third-party analytics services to help us understand how users
          interact with our website and products. These services may collect
          information sent by your device, including web pages visited and usage
          patterns. Analytics data is used to improve our services and user
          experience.
        </p>
      </LegalSection>

      <LegalSection title="Cookies">
        <p>
          We use cookies and similar tracking technologies to collect and store
          information about your preferences and activity. Cookies help us
          authenticate users, remember preferences, and analyze site traffic. You
          can control cookies through your browser settings, though disabling cookies
          may affect functionality of our services.
        </p>
      </LegalSection>

      <LegalSection title="Data Security">
        <p>
          We implement appropriate technical and organizational measures to protect
          your personal information against unauthorized access, alteration,
          disclosure, or destruction. However, no method of transmission over the
          Internet or electronic storage is completely secure, and we cannot
          guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection title="User Rights">
        <p>
          Depending on your location, you may have certain rights regarding your
          personal information, including:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>The right to access and receive a copy of your personal data</li>
          <li>The right to rectify inaccurate personal data</li>
          <li>The right to request deletion of your personal data</li>
          <li>The right to restrict or object to processing of your data</li>
          <li>The right to data portability</li>
          <li>The right to withdraw consent at any time</li>
        </ul>
        <p>
          To exercise these rights, please contact us using the information below.
        </p>
      </LegalSection>

      <LegalSection title="Third-Party Services">
        <p>
          Our products may contain links to third-party websites or integrate with
          third-party services. We are not responsible for the privacy practices of
          these third parties. We encourage you to review their privacy policies.
        </p>
      </LegalSection>

      <LegalSection title="Children's Privacy">
        <p>
          Our services are not directed to individuals under the age of 13. We do
          not knowingly collect personal information from children. If we become
          aware that we have collected personal information from a child, we will
          take steps to delete such information.
        </p>
      </LegalSection>

      <LegalSection title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. We will notify you of
          any changes by posting the new Privacy Policy on this page and updating the
          &quot;Last updated&quot; date. Your continued use of our services after any
          modifications indicates your acceptance of the updated policy.
        </p>
      </LegalSection>

      <LegalSection title="Contact Information">
        <p>
          If you have questions about this Privacy Policy or our data practices,
          please contact us at:
        </p>
        <p>
          Privacy Email:{" "}
          <a
            href={`mailto:${CONTACT_EMAILS.privacy}`}
            className="text-accent-secondary hover:underline"
          >
            {CONTACT_EMAILS.privacy}
          </a>
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
