import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import { CONTACT_EMAILS } from "@/lib/constants";
import { proteinsnapTermsMetadata } from "@/lib/metadata";

export const metadata = proteinsnapTermsMetadata;

export default function ProteinSnapTermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      breadcrumbLabel="ProteinSnap Terms"
      lastUpdated="June 21, 2026"
    >
      <div className="space-y-4 text-base leading-[1.75]">
        <p>
          By using ProteinSnap, you agree to these terms. If you don&apos;t
          agree, please don&apos;t use the app.
        </p>
      </div>

      <LegalSection title="1. About the Service">
        <p>
          ProteinSnap is a nutrition and fitness tracking app made by LumexForge
          studio. It helps you log meals, track macros, get AI coaching, and
          monitor body measurements.
        </p>
      </LegalSection>

      <LegalSection title="2. Your Account">
        <ul className="list-disc space-y-2 pl-5">
          <li>You must be at least 13 years old to use ProteinSnap</li>
          <li>You&apos;re responsible for keeping your password secure</li>
          <li>You&apos;re responsible for all activity under your account</li>
          <li>One person, one account — no sharing</li>
          <li>Contact us if you suspect your account was compromised</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Free and Premium Tiers">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            The app includes free features with daily limits (1 AI Coach
            session/day, 1 Snap a Meal/day, 10 Morning Briefings/month, and
            others)
          </li>
          <li>
            Premium subscription (when available) unlocks unlimited use
          </li>
          <li>
            Free-tier limits may change. We&apos;ll notify you of significant
            changes.
          </li>
          <li>
            Subscriptions auto-renew unless cancelled per Google Play / App Store
            rules
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Acceptable Use">
        <p>You agree NOT to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Use the app for illegal purposes</li>
          <li>Try to hack, reverse-engineer, or break the app</li>
          <li>Upload harmful content or attempt to harm other users</li>
          <li>Impersonate someone else</li>
          <li>Share inappropriate or copyrighted photos</li>
          <li>
            Abuse the AI features (e.g., trying to extract harmful information)
          </li>
        </ul>
        <p>
          We may suspend or terminate accounts that violate these rules.
        </p>
      </LegalSection>

      <LegalSection title="5. AI-Generated Content Disclaimer">
        <p>
          <strong className="text-foreground">Important:</strong> ProteinSnap
          uses AI (Google Gemini and Anthropic Claude) to analyze meal photos and
          provide coaching.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Nutritional information is an{" "}
            <strong className="text-foreground">ESTIMATE</strong> — AI vision is
            not perfect. Always verify critical values.
          </li>
          <li>
            AI Coach guidance is{" "}
            <strong className="text-foreground">NOT medical advice</strong> —
            it&apos;s based on general fitness principles. Consult a doctor,
            nutritionist, or qualified professional before making major health
            decisions.
          </li>
          <li>
            Briefings and recommendations are educational only — not medical,
            diagnostic, or treatment advice.
          </li>
        </ul>
        <p>You use AI features at your own discretion.</p>
      </LegalSection>

      <LegalSection title="6. Your Content">
        <ul className="list-disc space-y-2 pl-5">
          <li>Photos you upload and data you log remain YOUR content</li>
          <li>
            By using the app, you grant us limited permission to process your
            content to provide the service (storing it, sending photos to AI for
            analysis, and so on)
          </li>
          <li>We don&apos;t claim ownership of your content</li>
          <li>We don&apos;t share or sell your content</li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Subscription Cancellation">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            You can cancel a Premium subscription anytime through Google Play
            (or App Store when available)
          </li>
          <li>
            Cancellations take effect at the end of the current billing period
          </li>
          <li>
            We don&apos;t offer refunds for partial billing periods unless
            required by law
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="8. Disclaimers">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            ProteinSnap is provided &quot;as is&quot; — we work hard to keep it
            reliable but can&apos;t guarantee zero bugs or downtime
          </li>
          <li>AI analysis may be inaccurate</li>
          <li>
            Use the app at your own risk for fitness and nutrition decisions
          </li>
          <li>
            Always consult a qualified healthcare provider for medical concerns
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="9. Limitation of Liability">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            LumexForge is not liable for any indirect, incidental, or
            consequential damages from using the app
          </li>
          <li>
            Maximum total liability is the amount you paid us in the past 12
            months (or zero if you only used the free tier)
          </li>
          <li>
            Some jurisdictions don&apos;t allow these limitations — they apply
            only where legal
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="10. Termination">
        <ul className="list-disc space-y-2 pl-5">
          <li>You can stop using ProteinSnap anytime and delete your account</li>
          <li>We can suspend or terminate accounts that violate these terms</li>
          <li>
            Upon termination, your access ends and your data is deleted within
            30 days
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="11. Changes to Terms">
        <ul className="list-disc space-y-2 pl-5">
          <li>We may update these terms occasionally</li>
          <li>We&apos;ll notify you of material changes in the app</li>
          <li>
            Continued use after changes means you accept the new terms
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="12. Governing Law and Disputes">
        <p>
          These terms are governed by the laws of the jurisdiction where
          LumexForge is established. Any disputes will be resolved through
          good-faith negotiation first. For US residents, your consumer
          protection rights under federal and state law still apply. For EU
          residents, your applicable consumer protection rights still apply.
        </p>
      </LegalSection>

      <LegalSection title="13. Contact Us">
        <p>Questions? Email:</p>
        <p>
          <a
            href={`mailto:${CONTACT_EMAILS.business}`}
            className="text-accent-secondary transition-colors hover:underline"
          >
            {CONTACT_EMAILS.business}
          </a>
        </p>
        <p>LumexForge Studio</p>
      </LegalSection>
    </LegalLayout>
  );
}
