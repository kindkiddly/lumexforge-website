import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProteinSnaps Account Deletion",
  description:
    "How to delete your ProteinSnaps iOS account, what data is removed, subscription management, and contact information.",
};

const SUPPORT_EMAIL = "support@lumexforge.com";

function Brand() {
  return <span className="text-accent-secondary">LumexForge</span>;
}

export default function ProteinSnapsDeletionPage() {
  return (
    <LegalLayout
      title="ProteinSnaps Account Deletion"
      breadcrumbLabel="ProteinSnaps Account Deletion"
      lastUpdated="August 17, 2026"
    >
      <div className="space-y-4 text-base leading-[1.75]">
        <p>
          At ProteinSnaps, we believe you should have full control over your account
          and personal data. This page explains how account deletion works for the{" "}
          <strong className="text-foreground">ProteinSnaps iOS app</strong>, what
          happens when you delete your account, and how to manage related settings
          such as App Store subscriptions.
        </p>
        <p>
          ProteinSnaps is provided by <Brand />. This page applies only to the
          ProteinSnaps iOS app and is separate from account deletion information
          for other LumexForge products.
        </p>
      </div>

      <LegalSection title="Account Deletion Overview">
        <p>
          When you delete your ProteinSnaps account, you permanently remove access
          to your profile and request deletion of the personal data associated with
          that account from our active systems.
        </p>
        <p>
          <strong className="text-foreground">Account deletion is permanent.</strong>{" "}
          Once completed, your account cannot be restored and deleted personal data
          cannot be recovered.
        </p>
      </LegalSection>

      <LegalSection title="How to Request Account Deletion">
        <p>
          You can request permanent account deletion directly within the ProteinSnaps
          iOS app:
        </p>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Open the ProteinSnaps app on your iPhone or iPad.</li>
          <li>Go to the &apos;Me&apos; tab.</li>
          <li>Scroll to the footer of the page.</li>
          <li>Tap &apos;Delete Account&apos; (shown in red text).</li>
          <li>Confirm your choice when prompted to finalize the deletion request.</li>
        </ol>
        <p>
          If you are unable to access the app, you may also request account deletion
          through our{" "}
          <Link
            href="/contact"
            className="text-accent-secondary transition-colors hover:underline"
          >
            Contact page
          </Link>
          . Please provide the email address associated with your ProteinSnaps account.
          We may ask you to verify your identity before processing the request.
        </p>
      </LegalSection>

      <LegalSection title="What Happens After You Submit a Request">
        <p>
          When you confirm account deletion in the app, the deletion process begins
          for your ProteinSnaps account. Your access to the account and its data in
          the app will end as part of this process.
        </p>
        <p>
          Personal data linked to your account is removed from our active systems as
          part of deletion. Deletion is intended to be completed promptly once
          confirmed; limited technical or backup copies may persist for a short period
          before being purged as part of routine security and backup operations.
        </p>
        <p>
          We do not specify a fixed number of days for every deletion step, as timing
          may depend on system processing and legal requirements. If you contact us
          regarding a deletion request, we will respond and assist you with the
          status of your request.
        </p>
      </LegalSection>

      <LegalSection title="Personal Data That Is Deleted">
        <p>
          When your ProteinSnaps account is deleted, we remove personal data
          associated with your account from our active systems, including:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Account credentials (email and authentication profile)</li>
          <li>Nutrition and meal data (logs, macros, meal history, AI analysis results)</li>
          <li>Body stats (weight, measurements, goals, water intake, and related metrics)</li>
          <li>Workout and progress data (workout history and progress photos you stored)</li>
          <li>AI coaching and insights tied to your account</li>
          <li>User-generated content you submitted through the app</li>
          <li>App preferences and profile information</li>
        </ul>
      </LegalSection>

      <LegalSection title="Data That May Be Retained">
        <p>
          We do not retain personal account data for ongoing use after deletion,
          except in the following limited circumstances:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-foreground">Legal compliance:</strong> Where
            retention is required by applicable law, regulation, or valid legal
            process
          </li>
          <li>
            <strong className="text-foreground">Security and fraud prevention:</strong>{" "}
            Minimal records needed to prevent abuse, secure our systems, or resolve
            disputes
          </li>
          <li>
            <strong className="text-foreground">Technical backups:</strong>{" "}
            Encrypted backup systems may briefly retain data before automatic purging
            as part of standard infrastructure practices
          </li>
          <li>
            <strong className="text-foreground">Aggregated or de-identified data:</strong>{" "}
            Information that no longer identifies you, used only for analytics or
            service improvement where permitted
          </li>
        </ul>
        <p>
          We do not sell your personal data. Retained information, if any, is kept
          only for the purposes described above and not for marketing.
        </p>
      </LegalSection>

      <LegalSection title="Uninstalling the App Does Not Delete Your Account">
        <p>
          <strong className="text-foreground">
            Removing or uninstalling ProteinSnaps from your device does not delete
            your account or personal data.
          </strong>{" "}
          Your account and stored data remain on our servers until you complete the
          in-app account deletion process or submit a verified deletion request through
          our Contact page.
        </p>
        <p>
          If you reinstall ProteinSnaps after uninstalling, you may still be able to
          sign in to your existing account unless you have deleted it.
        </p>
      </LegalSection>

      <LegalSection title="Apple App Store Subscriptions">
        <p>
          If you have an active ProteinSnaps premium subscription purchased through
          the Apple App Store,{" "}
          <strong className="text-foreground">
            deleting your account does not automatically cancel your subscription
          </strong>
          .
        </p>
        <p>
          Subscriptions are managed by Apple. To cancel or manage billing, open{" "}
          <strong className="text-foreground">Settings</strong> on your device, tap
          your name, then tap <strong className="text-foreground">Subscriptions</strong>,
          and select ProteinSnaps to cancel or change your plan.
        </p>
        <p>
          Refunds and billing questions for App Store purchases are handled by Apple
          according to Apple&apos;s policies. LumexForge does not process App Store
          payment refunds directly.
        </p>
      </LegalSection>

      <LegalSection title="Privacy Policy">
        <p>
          For more information about how ProteinSnaps collects, uses, and protects
          your data, please read our{" "}
          <Link
            href="/proteinsnaps-privacy"
            className="text-accent-secondary transition-colors hover:underline"
          >
            ProteinSnaps Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          If you need help deleting your account, verifying a deletion request, or
          have questions about your data, contact us:
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
