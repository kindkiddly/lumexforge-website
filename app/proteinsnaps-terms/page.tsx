import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProteinSnaps Terms of Use",
  description:
    "ProteinSnaps iOS app terms of use — subscriptions, acceptable use, intellectual property, and liability.",
};

const SUPPORT_EMAIL = "support@lumexforge.com";

function Brand() {
  return <span className="text-accent-secondary">LumexForge</span>;
}

export default function ProteinSnapsTermsPage() {
  return (
    <LegalLayout
      title="ProteinSnaps Terms of Use"
      breadcrumbLabel="ProteinSnaps Terms"
      lastUpdated="August 16, 2026"
    >
      <div className="space-y-4 text-base leading-[1.75]">
        <p>
          These Terms of Use (&quot;Terms&quot;) govern your use of the ProteinSnaps
          iOS application (&quot;ProteinSnaps&quot; or the &quot;App&quot;) provided
          by <Brand />. By downloading, accessing, or using ProteinSnaps, you agree
          to these Terms. If you do not agree, do not use the App.
        </p>
      </div>

      <LegalSection title="1. About ProteinSnaps">
        <p>
          ProteinSnaps is a nutrition and fitness tracking app for iOS that helps
          you log meals, track macros, analyze nutrition with AI, monitor body
          stats, and manage workouts. The App is provided by LumexForge for personal,
          non-commercial use unless otherwise agreed in writing.
        </p>
        <p>
          ProteinSnaps provides informational and tracking tools only. It is not
          medical advice, diagnosis, or treatment. Consult a qualified healthcare
          professional before making health or dietary decisions.
        </p>
      </LegalSection>

      <LegalSection title="2. Eligibility and Account">
        <ul className="list-disc space-y-2 pl-5">
          <li>You must be at least 13 years old to use ProteinSnaps</li>
          <li>You are responsible for maintaining the security of your account credentials</li>
          <li>You are responsible for all activity that occurs under your account</li>
          <li>You must provide accurate information when creating an account</li>
          <li>One person, one account — account sharing is not permitted</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. App Usage Terms">
        <p>You agree to use ProteinSnaps only for lawful purposes and in accordance with these Terms. You agree NOT to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Use the App for any illegal or unauthorized purpose</li>
          <li>Attempt to reverse-engineer, decompile, or extract source code from the App</li>
          <li>Interfere with or disrupt the App, servers, or networks</li>
          <li>Upload harmful, abusive, or infringing content</li>
          <li>Misuse AI features or attempt to generate harmful or unlawful output</li>
          <li>Access the App through automated means without authorization</li>
          <li>Resell, sublicense, or commercially exploit the App without permission</li>
        </ul>
        <p>
          We may suspend or terminate access if you violate these Terms or use the
          App in a way that could harm us, other users, or third-party services.
        </p>
      </LegalSection>

      <LegalSection title="4. Subscriptions">
        <p>
          ProteinSnaps offers optional premium subscriptions billed through the{" "}
          <strong className="text-foreground">Apple App Store</strong> and managed
          via <strong className="text-foreground">RevenueCat</strong>.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-foreground">Monthly subscription:</strong> $9.99
            per month (USD, or equivalent local pricing)
          </li>
          <li>
            <strong className="text-foreground">Yearly subscription:</strong> $59.99
            per year (USD, or equivalent local pricing)
          </li>
        </ul>
        <p>
          Prices may vary by region and are displayed in the App at the time of
          purchase. Subscriptions automatically renew unless cancelled at least
          24 hours before the end of the current billing period through your Apple
          ID subscription settings.
        </p>
        <p>
          Premium features and pricing may change over time. Any changes to
          subscription terms will be communicated as required by applicable law and
          App Store policies.
        </p>
      </LegalSection>

      <LegalSection title="5. Refund Policy">
        <p>
          All purchases are processed by Apple.{" "}
          <strong className="text-foreground">
            Refunds are handled exclusively by Apple
          </strong>{" "}
          in accordance with Apple App Store policies.
        </p>
        <p>
          To request a refund, visit your Apple purchase history or Apple Support.
          LumexForge does not process App Store payment refunds directly.
        </p>
      </LegalSection>

      <LegalSection title="6. AI Features Disclaimer">
        <p>
          ProteinSnaps uses AI (including Google Gemini) to analyze meals and
          provide coaching. AI-generated results may be inaccurate or incomplete.
          You are responsible for verifying nutrition information important to your
          health. Do not rely solely on AI output for medical or dietary decisions.
        </p>
      </LegalSection>

      <LegalSection title="7. Intellectual Property">
        <p>
          ProteinSnaps, including its design, code, branding, text, graphics, and
          other content (excluding user-generated content), is owned by LumexForge
          or its licensors and protected by intellectual property laws.
        </p>
        <p>
          You retain ownership of content you submit (such as photos and logs).
          By submitting content, you grant LumexForge a limited license to use,
          store, and process that content solely to operate and improve the App
          and provide features to you.
        </p>
        <p>
          You may not copy, modify, distribute, sell, or create derivative works
          from the App or its content without our prior written consent.
        </p>
      </LegalSection>

      <LegalSection title="8. Limitation of Liability">
        <p>
          To the fullest extent permitted by applicable law, ProteinSnaps is
          provided &quot;as is&quot; and &quot;as available&quot; without warranties
          of any kind, whether express or implied.
        </p>
        <p>
          LumexForge shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages, or for any loss of data, profits,
          health outcomes, or goodwill arising from your use of the App.
        </p>
        <p>
          Our total liability for any claim related to the App shall not exceed
          the amount you paid us for subscriptions in the twelve (12) months
          preceding the claim, or one hundred US dollars ($100), whichever is
          greater, to the extent permitted by law.
        </p>
      </LegalSection>

      <LegalSection title="9. Termination">
        <p>
          You may stop using ProteinSnaps at any time and delete your account
          through the App or by contacting support. We may suspend or terminate
          your access if you violate these Terms or for other legitimate reasons,
          including legal or security concerns.
        </p>
        <p>
          Upon termination, your right to use the App ceases. Provisions that by
          their nature should survive termination (including intellectual property,
          disclaimers, and limitation of liability) will remain in effect.
        </p>
      </LegalSection>

      <LegalSection title="10. Governing Law">
        <p>
          These Terms are governed by the laws of the Islamic Republic of Pakistan,
          without regard to conflict-of-law principles. Any disputes arising from
          these Terms or your use of ProteinSnaps shall be subject to the exclusive
          jurisdiction of the courts of Karachi, Pakistan, unless applicable consumer
          protection law in your jurisdiction requires otherwise.
        </p>
      </LegalSection>

      <LegalSection title="11. Changes to These Terms">
        <p>
          We may update these Terms from time to time. Material changes will be
          communicated through the App or other appropriate means. Continued use of
          ProteinSnaps after changes take effect constitutes acceptance of the
          updated Terms.
        </p>
      </LegalSection>

      <LegalSection title="12. Contact Us">
        <p>
          Questions about these Terms? Contact us at:
        </p>
        <p>
          Email:{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-accent-secondary transition-colors hover:underline"
          >
            {SUPPORT_EMAIL}
          </a>
        </p>
        <p>
          <Brand /> — ProteinSnaps iOS App
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
