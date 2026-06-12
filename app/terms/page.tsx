import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import { CONTACT_EMAILS, SITE_NAME } from "@/lib/constants";
import { termsMetadata } from "@/lib/metadata";

export const metadata = termsMetadata;

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="June 13, 2026">
      <LegalSection title="Acceptance of Terms">
        <p>
          By accessing or using the {SITE_NAME} website at lumexforge.com and any
          related products or services, including ProteinSnap, AMORA, KePaso, and
          future LumexForge products, you agree to be bound by these Terms of
          Service. If you do not agree to these terms, please do not use our
          services.
        </p>
      </LegalSection>

      <LegalSection title="Description of Services">
        <p>
          {SITE_NAME} is an independent technology studio that develops software,
          AI-powered tools, intelligent agents, automation systems, digital
          platforms, and related digital products. We reserve the right to modify,
          suspend, or discontinue any aspect of our services at any time.
        </p>
      </LegalSection>

      <LegalSection title="User Responsibilities">
        <p>When using our services, you agree to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Provide accurate and complete information when required</li>
          <li>Maintain the security of your account credentials</li>
          <li>Use our services only for lawful purposes</li>
          <li>Not interfere with or disrupt the integrity or performance of our services</li>
          <li>Not attempt to gain unauthorized access to our systems or networks</li>
          <li>Comply with all applicable laws and regulations</li>
        </ul>
      </LegalSection>

      <LegalSection title="Intellectual Property">
        <p>
          All content, features, and functionality of our website and products,
          including but not limited to text, graphics, logos, icons, images, software,
          and design, are owned by {SITE_NAME} or its licensors and are protected by
          copyright, trademark, and other intellectual property laws. You may not
          reproduce, distribute, modify, or create derivative works without our prior
          written consent.
        </p>
      </LegalSection>

      <LegalSection title="Prohibited Activities">
        <p>You may not use our services to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Violate any applicable law or regulation</li>
          <li>Infringe upon the rights of others</li>
          <li>Transmit harmful, offensive, or unlawful content</li>
          <li>Distribute malware or engage in phishing or fraud</li>
          <li>Harvest or collect user data without authorization</li>
          <li>Reverse engineer, decompile, or disassemble our software</li>
          <li>Use automated systems to access our services without permission</li>
        </ul>
      </LegalSection>

      <LegalSection title="Disclaimer">
        <p>
          OUR SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES
          OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
          IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
          AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT OUR SERVICES WILL BE
          UNINTERRUPTED, ERROR-FREE, OR SECURE.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of Liability">
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, {SITE_NAME} AND ITS FOUNDERS,
          EMPLOYEES, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT,
          INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF
          PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR
          USE OF OUR SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY
          OTHER LEGAL THEORY.
        </p>
      </LegalSection>

      <LegalSection title="Indemnification">
        <p>
          You agree to indemnify and hold harmless {SITE_NAME} and its officers,
          directors, employees, and agents from any claims, damages, losses,
          liabilities, and expenses arising out of your use of our services or
          violation of these Terms.
        </p>
      </LegalSection>

      <LegalSection title="Termination">
        <p>
          We may terminate or suspend your access to our services immediately,
          without prior notice or liability, for any reason, including breach of
          these Terms. Upon termination, your right to use our services will cease
          immediately. Provisions that by their nature should survive termination
          shall remain in effect.
        </p>
      </LegalSection>

      <LegalSection title="Governing Law">
        <p>
          These Terms shall be governed by and construed in accordance with
          applicable laws, without regard to conflict of law principles. Any
          disputes arising under these Terms shall be resolved in the appropriate
          courts of jurisdiction.
        </p>
      </LegalSection>

      <LegalSection title="Changes to Terms">
        <p>
          We reserve the right to modify these Terms at any time. We will provide
          notice of material changes by posting the updated Terms on this page and
          updating the &quot;Last updated&quot; date. Your continued use of our services
          after such changes constitutes acceptance of the new Terms.
        </p>
      </LegalSection>

      <LegalSection title="Contact Information">
        <p>
          If you have questions about these Terms of Service, please contact us at:
        </p>
        <p>
          Email:{" "}
          <a
            href={`mailto:${CONTACT_EMAILS.business}`}
            className="text-accent-secondary hover:underline"
          >
            {CONTACT_EMAILS.business}
          </a>
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
