import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import { CONTACT_EMAILS } from "@/lib/constants";
import { proteinsnapPrivacyMetadata } from "@/lib/metadata";

export const metadata = proteinsnapPrivacyMetadata;

function Brand() {
  return <span className="text-accent-secondary">LumexForge</span>;
}

export default function ProteinSnapPrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      breadcrumbLabel="ProteinSnap Privacy"
      lastUpdated="June 21, 2026"
    >
      <div className="space-y-4 text-base leading-[1.75]">
        <p>
          ProteinSnap is a nutrition and fitness tracking app made by{" "}
          <Brand />. We built it to help you log meals, track
          macros, monitor progress, and get thoughtful AI coaching — and we
          know that means trusting us with personal health data.
        </p>
        <p>
          This Privacy Policy explains what we collect, how we use it, how we
          protect it, and the rights you have over your information.
        </p>
      </div>

      <LegalSection title="1. Information We Collect">
        <p>
          <strong className="text-foreground">Account information:</strong>{" "}
          Email address (for sign-up and password reset), name (optional).
        </p>
        <p>
          <strong className="text-foreground">Body metrics you provide:</strong>{" "}
          Body Stats (height, weight, age, sex, body fat %), goals (cut,
          maintain, bulk), activity level, body measurements (chest, waist,
          hips, arms, thighs), weight log history, water intake log, and
          progress photos (if you upload them).
        </p>
        <p>
          <strong className="text-foreground">Meal and food data:</strong>{" "}
          Photos of meals you snap with the camera (used for AI analysis only),
          manually logged food entries, macro and calorie data, and meal history.
        </p>
        <p>
          <strong className="text-foreground">Usage data:</strong> Which features
          you use (AI Coach, Snap a Meal, Morning Briefing, and others), daily
          usage counts (for free-tier limits), and app preferences.
        </p>
      </LegalSection>

      <LegalSection title="2. How We Collect It">
        <ul className="list-disc space-y-2 pl-5">
          <li>Information you enter directly in the app</li>
          <li>Photos you take or upload through the app</li>
          <li>Automatic usage tracking inside the app</li>
        </ul>
        <p>
          <strong className="text-foreground">We do NOT track your location.</strong>
        </p>
        <p>
          <strong className="text-foreground">
            We do NOT use third-party advertising trackers.
          </strong>
        </p>
      </LegalSection>

      <LegalSection title="3. How We Use Your Information">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Provide app features (track macros, generate briefings, AI coaching)
          </li>
          <li>
            Analyze meal photos via AI to identify foods and estimate nutrition
          </li>
          <li>Personalize recommendations based on your goals</li>
          <li>Calculate daily totals, streaks, and trends</li>
          <li>Maintain your account and authentication</li>
          <li>Improve our service</li>
          <li>
            Send you transactional emails (email verification, password reset)
          </li>
        </ul>
        <p>
          <strong className="text-foreground">We do NOT sell your data.</strong>{" "}
          We do NOT use it for advertising.
        </p>
      </LegalSection>

      <LegalSection title="4. Third-Party Services">
        <p>We use these services to make the app work:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-foreground">Google Gemini AI</strong> —
            analyzes meal photos to identify foods and estimate macros. Photos
            are sent to Google&apos;s servers for processing. Subject to
            Google&apos;s privacy policy.
          </li>
          <li>
            <strong className="text-foreground">Anthropic Claude</strong> — used
            as a backup AI when Gemini is unavailable. Subject to
            Anthropic&apos;s privacy policy.
          </li>
          <li>
            <strong className="text-foreground">Supabase</strong> — secure
            database and authentication. Stores your account and app data.
          </li>
          <li>
            <strong className="text-foreground">Resend</strong> — sends
            transactional emails (verification, password reset).
          </li>
          <li>
            <strong className="text-foreground">Sentry</strong> — error
            monitoring for app stability.
          </li>
        </ul>
        <p>
          These services process your data on our behalf and follow their own
          privacy commitments. We never share your data for advertising or sell
          it to third parties.
        </p>
      </LegalSection>

      <LegalSection title="5. Data Storage and Retention">
        <ul className="list-disc space-y-2 pl-5">
          <li>Your data is stored securely in Supabase databases</li>
          <li>Photos are stored in Supabase Storage with restricted access</li>
          <li>Data is retained as long as your account is active</li>
          <li>
            When you delete your account, your data is removed within 30 days
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Your Privacy Rights">
        <p>You have the right to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-foreground">Access your data</strong> — see
            everything we have about you
          </li>
          <li>
            <strong className="text-foreground">Correct your data</strong> —
            update inaccurate information
          </li>
          <li>
            <strong className="text-foreground">Delete your data</strong> —
            request account deletion
          </li>
          <li>
            <strong className="text-foreground">Export your data</strong> — get
            a copy in a portable format
          </li>
          <li>
            <strong className="text-foreground">Withdraw consent</strong> —
            stop using the app anytime
          </li>
        </ul>
        <p>
          <strong className="text-foreground">For California residents (CCPA):</strong>
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>You have the right to know what personal information we collect</li>
          <li>You have the right to request deletion</li>
          <li>
            You have the right to opt out of any sale of personal information
            (we don&apos;t sell)
          </li>
          <li>
            You have the right to non-discrimination for exercising these rights
          </li>
        </ul>
        <p>
          <strong className="text-foreground">For EU residents (GDPR):</strong>
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            You have full data access, correction, deletion, and portability
            rights
          </li>
          <li>
            You can lodge a complaint with your local data protection authority
          </li>
          <li>
            Our legal basis: contract (providing the service you signed up for)
            and your consent
          </li>
        </ul>
        <p>
          To exercise any rights, email{" "}
          <a
            href={`mailto:${CONTACT_EMAILS.business}`}
            className="text-accent-secondary transition-colors hover:underline"
          >
            {CONTACT_EMAILS.business}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="7. Children's Privacy (COPPA)">
        <ul className="list-disc space-y-2 pl-5">
          <li>ProteinSnap is intended for users 13 years and older</li>
          <li>We do not knowingly collect data from children under 13</li>
          <li>
            If you believe a child has signed up, contact us and we will delete
            the account
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="8. Security">
        <ul className="list-disc space-y-2 pl-5">
          <li>All data encrypted in transit (HTTPS) and at rest</li>
          <li>Strong authentication via Supabase</li>
          <li>Regular security monitoring via Sentry</li>
          <li>We follow industry best practices</li>
        </ul>
        <p>
          But no system is 100% secure. If a breach occurs that affects you, we
          will notify you promptly.
        </p>
      </LegalSection>

      <LegalSection title="9. International Users">
        <p>ProteinSnap is available globally.</p>
        <p>
          By using the app, you understand your data may be processed in the
          United States (Google, Anthropic), the EU (Supabase), or other
          countries where our service providers operate.
        </p>
        <p>
          We apply the same privacy protections regardless of where you are.
        </p>
      </LegalSection>

      <LegalSection title="10. Changes to This Policy">
        <ul className="list-disc space-y-2 pl-5">
          <li>We may update this policy occasionally</li>
          <li>
            Material changes will be highlighted with a notice in the app
          </li>
          <li>
            The &quot;Last updated&quot; date at the top will always show when
            changes were made
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="11. Governing Law">
        <p>
          This policy is governed by the laws of the jurisdiction where{" "}
          <Brand /> is established. For US residents, your privacy rights under
          CCPA, COPPA, and other applicable US laws still fully apply. For EU
          residents, your GDPR rights still apply.
        </p>
      </LegalSection>

      <LegalSection title="12. Contact Us">
        <p>Questions? Reach us at:</p>
        <p>
          Email:{" "}
          <a
            href={`mailto:${CONTACT_EMAILS.business}`}
            className="text-accent-secondary transition-colors hover:underline"
          >
            {CONTACT_EMAILS.business}
          </a>
        </p>
        <p><Brand /></p>
      </LegalSection>
    </LegalLayout>
  );
}
