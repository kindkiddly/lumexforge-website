import { LegalSection } from "@/components/legal/LegalLayout";
import { Brand, PostHuntLegalShell } from "@/components/legal/PostHuntLegalShell";
import Link from "next/link";
import { CONTACT_EMAILS } from "@/lib/constants";
import { posthuntDeletionMetadata } from "@/lib/metadata";

export const metadata = posthuntDeletionMetadata;

export default function PostHuntDeletionPage() {
  return (
    <PostHuntLegalShell
      activePage="deletion"
      title="Account & Data Deletion"
      breadcrumbLabel="PostHunt Account Deletion"
      lastUpdated="September 6, 2026"
    >
      <div className="space-y-4 text-base leading-[1.75]">
        <p>
          At PostHunt, we believe you should have control over your account and
          personal data. This page explains how to request deletion of your PostHunt
          account and associated personal data on iOS, Android, and Web.
        </p>
        <p>
          PostHunt is developed by <Brand />. This page applies to PostHunt across
          all supported platforms and is separate from account deletion information
          for other LumexForge products.
        </p>
      </div>

      <LegalSection title="Account Deletion Overview">
        <p>
          You may request deletion of your PostHunt account and eligible associated
          personal data. Account deletion is intended to remove your access to
          PostHunt and delete personal data from our active systems according to our
          deletion process and applicable retention requirements.
        </p>
        <p>
          <strong className="text-foreground">Account deletion is permanent.</strong>{" "}
          Once completed, your account generally cannot be restored and deleted
          personal data cannot be recovered.
        </p>
      </LegalSection>

      <LegalSection title="How to Delete Your Account">
        <p>
          You can request account deletion from within PostHunt by following these
          general steps:
        </p>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Sign in to PostHunt on iOS, Android, or Web.</li>
          <li>Open your Profile or Account settings.</li>
          <li>Locate the account deletion option.</li>
          <li>Review the information shown about what will be deleted.</li>
          <li>Confirm your deletion request when prompted.</li>
        </ol>
        <p>
          The exact labels and layout may vary by platform or app version, but the
          account deletion option is available within your account settings.
        </p>
        <p>
          If you are unable to access your account, you may request account deletion
          through our{" "}
          <Link
            href="/contact"
            className="text-accent-secondary transition-colors hover:underline"
          >
            Contact page
          </Link>
          . Please provide the email address associated with your PostHunt account.
          We may ask you to verify your identity before processing the request.
        </p>
      </LegalSection>

      <LegalSection title="What Happens After You Submit a Request">
        <p>
          When you confirm account deletion, the deletion process begins for your
          PostHunt account. Your access to the account and its data in PostHunt will
          end as part of this process.
        </p>
        <p>
          Eligible personal data linked to your account is removed from our active
          systems as part of deletion. Timing may depend on system processing, backup
          cycles, and legal requirements. If you contact us regarding a deletion
          request, we will respond and assist you with the status of your request.
        </p>
      </LegalSection>

      <LegalSection title="Data That Is Deleted">
        <p>
          When your PostHunt account is deleted, we remove eligible personal data
          associated with your account from our active systems, which may include:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Account information and authentication profile</li>
          <li>Profile and workspace settings</li>
          <li>AI-generated content stored in your account</li>
          <li>Uploaded media and user-provided content</li>
          <li>Connected social account authorization information stored in PostHunt</li>
          <li>Content queue, scheduling, and approval workflow data</li>
          <li>Post history and analytics-related account data stored in PostHunt</li>
          <li>Media library items associated with your account</li>
          <li>Preferences and configuration settings</li>
        </ul>
      </LegalSection>

      <LegalSection title="Data That May Be Retained">
        <p>
          Some information may be retained where necessary, including for:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-foreground">Legal obligations:</strong> Where
            retention is required by applicable law, regulation, or valid legal process
          </li>
          <li>
            <strong className="text-foreground">Security and fraud prevention:</strong>{" "}
            Records needed to prevent abuse, secure systems, or investigate incidents
          </li>
          <li>
            <strong className="text-foreground">Dispute resolution:</strong> Information
            needed to resolve disputes or enforce agreements
          </li>
          <li>
            <strong className="text-foreground">
              Financial and accounting requirements:
            </strong>{" "}
            Billing, transaction, or subscription records where applicable and
            permitted by law
          </li>
          <li>
            <strong className="text-foreground">Technical backups:</strong> Encrypted
            backup systems may briefly retain data before automatic purging as part of
            standard infrastructure practices
          </li>
          <li>
            <strong className="text-foreground">Aggregated or de-identified data:</strong>{" "}
            Information that no longer identifies you, used for analytics or service
            improvement where permitted
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Published Content on External Platforms">
        <p>
          <strong className="text-foreground">
            Deleting your PostHunt account does not automatically delete content
            already published to external social platforms.
          </strong>
        </p>
        <p>
          If a post has already been published to Instagram, Facebook, LinkedIn,
          TikTok, YouTube, or another supported platform, removing your PostHunt
          account does not remove that post from the external platform. You may need
          to delete externally published content directly through the relevant social
          platform.
        </p>
        <p>
          Disconnecting or removing a connected social account from PostHunt is
          separate from deleting your account on that third-party platform.
        </p>
      </LegalSection>

      <LegalSection title="Subscriptions and Billing">
        <p>
          If you have an active PostHunt subscription purchased through the Apple App
          Store or Google Play,{" "}
          <strong className="text-foreground">
            deleting your PostHunt account does not automatically cancel your
            subscription
          </strong>
          .
        </p>
        <p>
          Mobile subscriptions are managed by the applicable app store. Cancel or
          manage billing through your Apple or Google account subscription settings.
          Refunds and billing questions for app store purchases are handled according
          to the relevant store&apos;s policies.
        </p>
        <p>
          For web or other payment methods where applicable, cancellation and refund
          terms depend on the payment provider and stated billing policy.
        </p>
      </LegalSection>

      <LegalSection title="Uninstalling or Closing the App Does Not Delete Your Account">
        <p>
          <strong className="text-foreground">
            Removing PostHunt from your device or closing the web application does
            not delete your account or personal data.
          </strong>{" "}
          Your account and stored data remain until you complete the in-app account
          deletion process or submit a verified deletion request through our Contact
          page.
        </p>
      </LegalSection>

      <LegalSection title="Privacy Policy">
        <p>
          For more information about how PostHunt collects, uses, and protects your
          data, please read our{" "}
          <Link
            href="/posthunt-privacy"
            className="text-accent-secondary transition-colors hover:underline"
          >
            Privacy Policy
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
          Support:{" "}
          <a
            href={`mailto:${CONTACT_EMAILS.support}`}
            className="text-accent-secondary transition-colors hover:underline"
          >
            {CONTACT_EMAILS.support}
          </a>
        </p>
        <p>
          Or visit our{" "}
          <Link
            href="/contact"
            className="text-accent-secondary transition-colors hover:underline"
          >
            Contact page
          </Link>
          .
        </p>
        <p>
          <Brand /> — PostHunt
        </p>
      </LegalSection>
    </PostHuntLegalShell>
  );
}
