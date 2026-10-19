import { LegalSection } from "@/components/legal/LegalLayout";
import { MiPawLegalLayout } from "@/components/mipaw/MiPawLegalLayout";
import {
  MIPAW_EFFECTIVE_DATE,
  MIPAW_SUPPORT_EMAIL,
} from "@/lib/mipaw/constants";
import { getMipawBasePath, mipawHref } from "@/lib/mipaw/serverPath";
import { mipawPageMetadata } from "@/lib/mipaw/metadata";
import Link from "next/link";

export const metadata = mipawPageMetadata(
  "Terms of Use",
  "MiPaw terms of use for iPhone and Android: subscriptions, acceptable use, and liability.",
);

function Brand() {
  return <span className="text-accent-secondary">LumexForge</span>;
}

export default async function MiPawTermsPage() {
  const basePath = await getMipawBasePath();

  return (
    <MiPawLegalLayout
      title="MiPaw Terms of Use"
      breadcrumbLabel="MiPaw Terms"
      homeHref={mipawHref(basePath, "/")}
      effectiveDate={MIPAW_EFFECTIVE_DATE}
    >
      <div className="space-y-4 text-base leading-[1.75]">
        <p>
          These Terms of Use (&quot;Terms&quot;) govern your use of the MiPaw iOS and
          Android application (&quot;MiPaw&quot; or the &quot;App&quot;) provided by{" "}
          <Brand />. By downloading, accessing, or using MiPaw, you agree to these
          Terms and our{" "}
          <Link
            href={mipawHref(basePath, "/privacy")}
            className="text-accent-secondary transition-colors hover:underline"
          >
            Privacy Policy
          </Link>
          . If you do not agree, do not use the App.
        </p>
      </div>

      <LegalSection title="1. About MiPaw">
        <p>
          MiPaw is a dog care companion for iOS and Android that helps you log
          nutrition, walks, training, health records, photos, and memories, with
          optional AI guidance. The App is provided by LumexForge for personal,
          non-commercial use unless otherwise agreed in writing.
        </p>
        <p>
          MiPaw provides general wellness information only. It is not veterinary
          advice, diagnosis, or treatment. In an emergency (for example your dog ate
          something toxic, has trouble breathing, collapses, or has a seizure) contact
          your vet or an emergency clinic immediately. Never delay professional care
          because of something in the app.
        </p>
      </LegalSection>

      <LegalSection title="2. Eligibility and Account">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            You must be old enough to use the app under our Privacy Policy (13+, or 16+
            in the EU/UK)
          </li>
          <li>You are responsible for maintaining the security of your account credentials</li>
          <li>You are responsible for all activity that occurs under your account</li>
          <li>You must provide accurate information when creating an account</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. App Usage Terms">
        <p>
          You agree to use MiPaw only for lawful purposes and in accordance with these
          Terms. You agree NOT to:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Use the App for any illegal or unauthorized purpose</li>
          <li>Attempt to reverse-engineer, decompile, or extract source code from the App</li>
          <li>Interfere with or disrupt the App, servers, or networks</li>
          <li>Upload harmful, abusive, or infringing content</li>
          <li>Misuse AI features or attempt to generate harmful or unlawful output</li>
          <li>Use MiPaw to harm animals or people</li>
          <li>Access the App through automated means without authorization</li>
        </ul>
        <p>
          We may suspend or terminate access if you violate these Terms or use the App in
          a way that could harm us, other users, or third-party services.
        </p>
      </LegalSection>

      <LegalSection title="4. Subscriptions">
        <p>
          Some features require a paid subscription (MiPaw Premium). Subscriptions are
          billed through the <strong className="text-foreground">Apple App Store</strong>{" "}
          or <strong className="text-foreground">Google Play Store</strong> and managed
          via <strong className="text-foreground">RevenueCat</strong>.
        </p>
        <p>
          Prices and periods are shown in the App before you buy. Prices may vary by
          region and are displayed at the time of purchase. Subscriptions automatically
          renew unless cancelled at least 24 hours before the end of the current billing
          period through your Apple ID or Google Play subscription settings.
        </p>
        <p>
          Subscriptions on Android are billed through the Google Play Store. Payment is
          charged when you confirm the purchase. Deleting the app or your account does
          not cancel a subscription.
        </p>
        <p>
          Premium features and pricing may change over time. Any changes to subscription
          terms will be communicated as required by applicable law and store policies.
        </p>
      </LegalSection>

      <LegalSection title="5. Refund Policy">
        <p>
          All purchases are processed by Apple or Google depending on your platform.
          Refunds are handled by Apple (App Store) or Google (Play Store) in accordance
          with their respective policies. LumexForge does not process payment refunds
          directly.
        </p>
      </LegalSection>

      <LegalSection title="6. AI Features Disclaimer">
        <p>
          MiPaw uses AI (including Google Gemini, with Anthropic Claude as a backup) for
          briefings, chat, insights, and photo-based estimates. AI-generated results may
          be inaccurate or incomplete. Food-safety warnings in MiPaw come from our own
          reviewed list, not from AI. You are responsible for checking AI output and
          using your own judgement. Do not rely solely on AI for decisions about your
          dog&apos;s health or care.
        </p>
      </LegalSection>

      <LegalSection title="7. Intellectual Property">
        <p>
          MiPaw, including its design, code, branding, text, graphics, and other content
          (excluding user-generated content), is owned by LumexForge or its licensors and
          protected by intellectual property laws.
        </p>
        <p>
          You retain ownership of photos and records you add. By submitting content, you
          grant LumexForge a limited license to use, store, and process that content
          solely to operate and improve the App and provide features to you.
        </p>
      </LegalSection>

      <LegalSection title="8. Limitation of Liability">
        <p>
          To the fullest extent permitted by applicable law, MiPaw is provided &quot;as
          is&quot; and &quot;as available&quot; without warranties of any kind, whether
          express or implied.
        </p>
        <p>
          LumexForge shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages, or for any loss of data or decisions made
          about your dog&apos;s care based on the App.
        </p>
        <p>
          Nothing in these Terms limits rights you have under mandatory consumer law
          where you live.
        </p>
      </LegalSection>

      <LegalSection title="9. Termination">
        <p>
          You may stop using MiPaw at any time and delete your account through the App
          or by contacting support. We may suspend or terminate your access if you
          violate these Terms.
        </p>
      </LegalSection>

      <LegalSection title="10. Governing Law">
        <p>
          These Terms are governed by the laws of the State of Texas, USA. Any disputes
          arising from these Terms or your use of MiPaw shall be subject to the
          exclusive jurisdiction of the courts located in the State of Texas, USA,
          unless applicable consumer protection law in your jurisdiction requires
          otherwise.
        </p>
      </LegalSection>

      <LegalSection title="11. Changes to These Terms">
        <p>
          We may update these Terms from time to time. Material changes will be
          communicated through the App or other appropriate means. Continued use of MiPaw
          after changes take effect constitutes acceptance of the updated Terms.
        </p>
      </LegalSection>

      <LegalSection title="12. Contact Us">
        <p>Questions about these Terms? Contact us at:</p>
        <p>
          Contact:{" "}
          <a
            href={`mailto:${MIPAW_SUPPORT_EMAIL}`}
            className="text-accent-secondary transition-colors hover:underline"
          >
            {MIPAW_SUPPORT_EMAIL}
          </a>
        </p>
      </LegalSection>
    </MiPawLegalLayout>
  );
}
