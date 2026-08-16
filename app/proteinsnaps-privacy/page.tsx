import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProteinSnaps Privacy Policy",
  description:
    "ProteinSnaps iOS app privacy policy — how LumexForge collects, uses, and protects your nutrition, fitness, and health data.",
};

const SUPPORT_EMAIL = "support@lumexforge.com";

function Brand() {
  return <span className="text-accent-secondary">LumexForge</span>;
}

export default function ProteinSnapsPrivacyPage() {
  return (
    <LegalLayout
      title="ProteinSnaps Privacy Policy"
      breadcrumbLabel="ProteinSnaps Privacy"
      lastUpdated="August 16, 2026"
    >
      <div className="space-y-4 text-base leading-[1.75]">
        <p>
          ProteinSnaps is a nutrition and fitness tracking app for iOS, made by{" "}
          <Brand />. We built it to help you log meals, track macros, monitor
          progress, and get AI-powered coaching — and we know that means trusting
          us with personal health data.
        </p>
        <p>
          This Privacy Policy applies to the ProteinSnaps iOS app and explains
          what information we collect, how we use it, how we protect it, and the
          rights you have over your data.
        </p>
      </div>

      <LegalSection title="1. Information We Collect">
        <p>
          <strong className="text-foreground">Account information:</strong> Email
          address (for sign-up, sign-in, and account recovery) and optional profile
          details you choose to provide.
        </p>
        <p>
          <strong className="text-foreground">Nutrition data:</strong> Meal logs,
          macro and calorie information, food entries, AI-generated nutrition
          estimates, and related dietary history.
        </p>
        <p>
          <strong className="text-foreground">Photos:</strong> Meal photos you
          capture or upload for AI analysis, and progress photos you choose to
          store in the app.
        </p>
        <p>
          <strong className="text-foreground">Body stats:</strong> Height, weight,
          age, sex, body fat percentage, goals, activity level, body measurements,
          weight history, and water intake logs.
        </p>
        <p>
          <strong className="text-foreground">Workout data:</strong> Workout
          history, exercise logs, and performance-related information you record
          in the app.
        </p>
        <p>
          <strong className="text-foreground">Usage and device data:</strong> App
          feature usage, preferences, crash reports, and diagnostic information
          needed to operate and improve the service.
        </p>
      </LegalSection>

      <LegalSection title="2. Camera and Photo Library">
        <p>
          ProteinSnaps may request access to your device camera and photo library
          so you can snap or upload meal photos for AI nutrition analysis and
          store progress photos. You can deny or revoke these permissions in your
          iOS Settings at any time.
        </p>
        <p>
          Photos you submit are used to provide app features such as meal
          recognition and nutrition tracking. We do not use your photos for
          advertising purposes.
        </p>
      </LegalSection>

      <LegalSection title="3. Third-Party Services">
        <p>
          ProteinSnaps uses trusted third-party services to operate the app. These
          providers process data only as needed to deliver their services:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-foreground">Supabase</strong> — authentication,
            database storage, and secure backend infrastructure for your account
            and app data.
          </li>
          <li>
            <strong className="text-foreground">Gemini AI</strong> — AI-powered
            meal analysis, coaching, and nutrition-related features based on
            information and photos you submit.
          </li>
          <li>
            <strong className="text-foreground">RevenueCat</strong> — subscription
            status, entitlement management, and purchase validation for in-app
            subscriptions processed through the Apple App Store.
          </li>
          <li>
            <strong className="text-foreground">Sentry</strong> — error monitoring
            and crash reporting to help us diagnose and fix technical issues.
          </li>
        </ul>
        <p>
          Each provider maintains its own privacy practices. We recommend reviewing
          their policies for additional details.
        </p>
      </LegalSection>

      <LegalSection title="4. How We Use Your Information">
        <ul className="list-disc space-y-2 pl-5">
          <li>Provide core app features (meal tracking, macros, coaching, workouts)</li>
          <li>Analyze meal photos and generate nutrition insights</li>
          <li>Personalize recommendations based on your goals and history</li>
          <li>Manage subscriptions and premium access</li>
          <li>Maintain, secure, and improve the app</li>
          <li>Respond to support requests</li>
          <li>Detect, prevent, and address fraud, abuse, or technical problems</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Data Storage and Protection">
        <p>
          Your data is stored on secure servers operated through Supabase and
          related cloud infrastructure. Data is transmitted over encrypted
          connections (TLS) and protected using industry-standard security
          practices, including access controls and monitoring.
        </p>
        <p>
          While we work hard to protect your information, no method of storage or
          transmission over the internet is completely secure. Please use a strong
          password and keep your device secure.
        </p>
      </LegalSection>

      <LegalSection title="6. Your Rights">
        <p>You have the right to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Access and review your personal data within the app</li>
          <li>Correct inaccurate information by editing your profile and logs</li>
          <li>Export your data where export features are available in the app</li>
          <li>
            Delete your account and associated personal data permanently through
            in-app account deletion or by contacting us
          </li>
          <li>Withdraw permissions such as camera or photo library access via iOS Settings</li>
        </ul>
        <p>
          Account deletion is permanent. Once completed, personal data is removed
          from our active systems, subject to limited retention required by law or
          for legitimate business purposes such as fraud prevention.
        </p>
      </LegalSection>

      <LegalSection title="7. Subscriptions and Payments">
        <p>
          ProteinSnaps offers optional premium subscriptions managed through{" "}
          <strong className="text-foreground">RevenueCat</strong> and billed via
          the <strong className="text-foreground">Apple App Store</strong>. We do
          not store your full payment card details.
        </p>
        <p>
          RevenueCat receives information needed to verify subscription status and
          entitlements (such as purchase receipts and product identifiers). Payment
          processing is handled by Apple under its own terms and privacy policy.
        </p>
        <p>
          Subscriptions renew automatically unless cancelled at least 24 hours
          before the end of the current billing period through your Apple ID
          subscription settings.
        </p>
      </LegalSection>

      <LegalSection title="8. Children&apos;s Privacy">
        <p>
          ProteinSnaps is intended for users aged <strong className="text-foreground">13 and above</strong>.
          We do not knowingly collect personal information from children under 13.
          If you believe a child under 13 has provided us with personal data,
          please contact us and we will take steps to delete it.
        </p>
      </LegalSection>

      <LegalSection title="9. Data Retention">
        <p>
          We retain your personal data for as long as your account is active or as
          needed to provide the service. When you delete your account, we remove
          personal data from our active systems, except where retention is required
          by law, for dispute resolution, or for limited backup and security
          purposes.
        </p>
      </LegalSection>

      <LegalSection title="10. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. If we make material
          changes, we will notify you through the app or by other appropriate
          means. Continued use of ProteinSnaps after changes take effect means you
          accept the updated policy.
        </p>
      </LegalSection>

      <LegalSection title="11. Contact Us">
        <p>
          Questions, concerns, or requests about your privacy? Contact us at:
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
