import { LegalSection } from "@/components/legal/LegalLayout";
import { MiPawLegalLayout } from "@/components/mipaw/MiPawLegalLayout";
import {
  MIPAW_CANONICAL_BASE,
  MIPAW_EFFECTIVE_DATE,
  MIPAW_SUPPORT_EMAIL,
} from "@/lib/mipaw/constants";
import { getMipawBasePath, mipawHref } from "@/lib/mipaw/serverPath";
import { mipawPageMetadata } from "@/lib/mipaw/metadata";
import Link from "next/link";

export const metadata = mipawPageMetadata(
  "Privacy Policy",
  "MiPaw privacy policy for iPhone and Android: how LumexForge collects, uses, and protects your dog care data.",
);

function Brand() {
  return <span className="text-accent-secondary">LumexForge</span>;
}

export default async function MiPawPrivacyPage() {
  const basePath = await getMipawBasePath();

  return (
    <MiPawLegalLayout
      title="MiPaw Privacy Policy"
      breadcrumbLabel="MiPaw Privacy"
      homeHref={mipawHref(basePath, "/")}
      effectiveDate={MIPAW_EFFECTIVE_DATE}
    >
      <div className="space-y-4 text-base leading-[1.75]">
        <p>
          MiPaw is a dog care companion for iOS and Android, made by <Brand />. We
          built it to help you log nutrition, walks, training, health records, and
          memories for your dogs, and we know that means trusting us with personal
          information and photos.
        </p>
        <p>
          This Privacy Policy applies to the MiPaw iOS and Android app and explains
          what information we collect, how we use it, how we protect it, and the rights
          you have over your data.
        </p>
      </div>

      <LegalSection title="1. Information We Collect">
        <p>
          <strong className="text-foreground">Account information:</strong> Email
          address (for sign-up, sign-in, and account recovery) and the name you add to
          your profile.
        </p>
        <p>
          <strong className="text-foreground">Your dogs:</strong> Name, breed, birth
          date, sex, size, weight history, activity level, goals, allergies and food
          restrictions, and the vet clinic name and phone you choose to add.
        </p>
        <p>
          <strong className="text-foreground">Care records you enter:</strong> Meals,
          water, saved foods, walks, training sessions, vaccines, medications, vet
          visits, observations, reminders, notes, and documents you upload.
        </p>
        <p>
          <strong className="text-foreground">Photos:</strong> Photos you take or
          choose for your dogs, memories, milestones, Pose Studio, meal snaps, and
          food-label scans.
        </p>
        <p>
          <strong className="text-foreground">Location:</strong> Only while you are
          recording a walk with the walk screen open. We save the walk route,
          distance, and time with that walk. MiPaw does not track your location in the
          background and does not use location for advertising.
        </p>
        <p>
          <strong className="text-foreground">Purchases:</strong> If you subscribe,
          the App Store or Google Play processes payment. We receive only subscription
          status (for example active or expired), never your card details.
        </p>
        <p>
          <strong className="text-foreground">Usage and device data:</strong> App
          version, device type, operating system, notification token (for reminders and
          app notices), and basic error information to keep the app working.
        </p>
      </LegalSection>

      <LegalSection title="2. Camera, Photos, and Location">
        <p>
          MiPaw may request access to your camera, photo library, and location (while
          using the app) so you can take dog and meal photos, save share cards, and
          record walks. You can deny or revoke these permissions in your device Settings
          at any time. Saying no only disables that feature.
        </p>
        <p>
          Photos you submit are used to provide app features such as memories, meal
          snaps, and food-label scans. We do not use your photos for advertising
          purposes.
        </p>
      </LegalSection>

      <LegalSection title="3. Third-Party Services">
        <p>
          MiPaw uses trusted third-party services to operate the app. These providers
          process data only as needed to deliver their services:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-foreground">Supabase:</strong> authentication,
            database storage, and private file storage for your account and app data.
          </li>
          <li>
            <strong className="text-foreground">Google (Gemini API) and Anthropic
            (Claude API):</strong> AI features such as daily briefing, coach chat,
            insights, and photo-based estimates. We do not send your name, email, or
            account identifiers to AI providers.
          </li>
          <li>
            <strong className="text-foreground">RevenueCat, Apple App Store, and Google
            Play:</strong> subscription status and purchase validation.
          </li>
          <li>
            <strong className="text-foreground">Expo / Apple Push Notification service /
            Firebase Cloud Messaging:</strong> delivering notifications you turn on.
          </li>
          <li>
            <strong className="text-foreground">Resend:</strong> account emails
            (confirmation and password reset).
          </li>
          <li>
            <strong className="text-foreground">Apple Maps (iPhone) and Google Maps
            (Android):</strong> showing the walk map on your device.
          </li>
        </ul>
        <p>
          Each provider maintains its own privacy practices. We recommend reviewing
          their policies for additional details.
        </p>
      </LegalSection>

      <LegalSection title="4. How We Use Your Information">
        <ul className="list-disc space-y-2 pl-5">
          <li>Provide core app features (care records, walks, training, health tools)</li>
          <li>Run AI features you choose to use (briefings, chat, insights, scans)</li>
          <li>Send reminders and notifications you turn on</li>
          <li>Manage subscriptions and premium access</li>
          <li>Maintain, secure, and improve the app</li>
          <li>Respond to support requests</li>
          <li>Detect, prevent, and address fraud, abuse, or technical problems</li>
        </ul>
        <p>
          We do not sell your personal information and do not use it for advertising.
        </p>
      </LegalSection>

      <LegalSection title="5. Data Storage and Protection">
        <p>
          Your data is stored on secure servers operated through Supabase and related
          cloud infrastructure. Photos and documents are kept in private storage and
          shown through short-lived secure links. Data is transmitted over encrypted
          connections (TLS) and protected using industry-standard security practices.
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
          <li>Access and review your information in the app</li>
          <li>Correct inaccurate information by editing profiles and records</li>
          <li>Export a vet summary from the app</li>
          <li>
            Request a copy of your data by emailing{" "}
            <a
              href={`mailto:${MIPAW_SUPPORT_EMAIL}`}
              className="text-accent-secondary transition-colors hover:underline"
            >
              {MIPAW_SUPPORT_EMAIL}
            </a>
          </li>
          <li>
            Delete your account and associated data through in-app deletion or by
            contacting us
          </li>
          <li>
            Withdraw permissions such as camera, photos, location, or notifications via
            your device Settings
          </li>
        </ul>
        <p>
          Account deletion is permanent. See our{" "}
          <Link
            href={mipawHref(basePath, "/delete-account")}
            className="text-accent-secondary transition-colors hover:underline"
          >
            Delete Account
          </Link>{" "}
          page ({MIPAW_CANONICAL_BASE}/delete-account) for details.
        </p>
      </LegalSection>

      <LegalSection title="7. Subscriptions and Payments">
        <p>
          MiPaw offers optional premium subscriptions (MiPaw Premium) managed through{" "}
          <strong className="text-foreground">RevenueCat</strong> and billed via the{" "}
          <strong className="text-foreground">Apple App Store</strong> or{" "}
          <strong className="text-foreground">Google Play Store</strong>. We do not
          store your full payment card details.
        </p>
        <p>
          RevenueCat receives information needed to verify subscription status and
          entitlements (such as purchase receipts and product identifiers). Payment
          processing is handled by Apple or Google under their own terms and privacy
          policies.
        </p>
        <p>
          Subscriptions renew automatically unless cancelled at least 24 hours before
          the end of the current billing period through your Apple ID or Google Play
          subscription settings.
        </p>
      </LegalSection>

      <LegalSection title="8. Children&apos;s Privacy">
        <p>
          MiPaw is not directed at children under 13 (under 16 in the EU/UK). We do
          not knowingly collect personal information from children under those ages. If
          you believe a child has provided us with personal data, please contact us and
          we will take steps to delete it.
        </p>
      </LegalSection>

      <LegalSection title="9. Data Retention">
        <p>
          We retain your personal data for as long as your account is active or as
          needed to provide the service. When you delete a dog, its records and photos
          are deleted. When you delete your account, we remove personal data from our
          active systems, except where retention is required by law or for limited
          backup purposes (removed within 30 days).
        </p>
      </LegalSection>

      <LegalSection title="10. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. If we make material
          changes, we will notify you through the app or by other appropriate means.
          Continued use of MiPaw after changes take effect means you accept the updated
          policy.
        </p>
      </LegalSection>

      <LegalSection title="11. Contact Us">
        <p>Questions, concerns, or requests about your privacy? Contact us at:</p>
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
