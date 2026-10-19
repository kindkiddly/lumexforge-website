import { LegalSection } from "@/components/legal/LegalLayout";
import { MiPawLegalLayout } from "@/components/mipaw/MiPawLegalLayout";
import { MIPAW_SUPPORT_EMAIL } from "@/lib/mipaw/constants";
import { getMipawBasePath, mipawHref } from "@/lib/mipaw/serverPath";
import { mipawPageMetadata } from "@/lib/mipaw/metadata";
import Link from "next/link";

export const metadata = mipawPageMetadata(
  "Delete Account",
  "How to delete your MiPaw iOS and Android account and what data is removed.",
);

function Brand() {
  return <span className="text-accent-secondary">LumexForge</span>;
}

export default async function MiPawDeleteAccountPage() {
  const basePath = await getMipawBasePath();

  return (
    <MiPawLegalLayout
      title="Delete your MiPaw account and data"
      breadcrumbLabel="Delete Account"
      homeHref={mipawHref(basePath, "/")}
      effectiveDate="October 19, 2026"
    >
      <div className="space-y-4 text-base leading-[1.75]">
        <p>
          At MiPaw, we believe you should have full control over your account and
          personal data. This page explains how account deletion works for the{" "}
          <strong className="text-foreground">MiPaw app</strong>, what happens when you
          delete your account, and how to manage subscriptions.
        </p>
        <p>
          MiPaw is provided by <Brand />. This page applies to the MiPaw app on iOS and
          Android and is separate from account deletion information for other LumexForge
          products.
        </p>
      </div>

      <LegalSection title="Account Deletion Overview">
        <p>
          When you delete your MiPaw account, you permanently remove access to your
          profile and request deletion of the personal data associated with that account
          from our active systems.
        </p>
        <p>
          <strong className="text-foreground">Account deletion is permanent.</strong> Once
          completed, your account cannot be restored and deleted personal data cannot be
          recovered.
        </p>
      </LegalSection>

      <LegalSection title="How to Request Account Deletion">
        <p>You can delete your MiPaw account in the app (iPhone and Android):</p>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Open MiPaw on your iPhone or Android device.</li>
          <li>Go to Settings &gt; Account &gt; Delete Account.</li>
          <li>Confirm when prompted. Deletion starts immediately.</li>
        </ol>
        <p>
          Don&apos;t have access to the app? Email{" "}
          <a
            href={`mailto:${MIPAW_SUPPORT_EMAIL}`}
            className="text-accent-secondary transition-colors hover:underline"
          >
            {MIPAW_SUPPORT_EMAIL}
          </a>{" "}
          from the email address of your MiPaw account with the subject &quot;Delete my
          MiPaw account&quot;. We will verify the request and delete your account within
          30 days and confirm by email.
        </p>
      </LegalSection>

      <LegalSection title="What Happens After You Submit a Request">
        <p>
          When you confirm account deletion in the app, the deletion process begins for
          your MiPaw account. Your access to the account and its data in the app will
          end as part of this process.
        </p>
        <p>
          Personal data linked to your account is removed from our active systems. Copies
          in routine backups are removed within 30 days.
        </p>
      </LegalSection>

      <LegalSection title="Personal Data That Is Deleted">
        <p>When your MiPaw account is deleted, we remove from our active systems:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Your account and sign-in, and profile</li>
          <li>
            All dogs and their records (meals, water, saved foods, walks and routes,
            training, health records, reminders, documents)
          </li>
          <li>All photos and files</li>
          <li>AI briefings, chats, insights, and scan results</li>
          <li>Notification tokens</li>
        </ul>
      </LegalSection>

      <LegalSection title="Data That May Be Retained">
        <p>
          Purchase and subscription records are kept by Apple, Google, and RevenueCat
          under their own policies and legal requirements. Copies in routine backups are
          removed within 30 days.
        </p>
      </LegalSection>

      <LegalSection title="Uninstalling the App Does Not Delete Your Account">
        <p>
          <strong className="text-foreground">
            Removing MiPaw from your device does not delete your account or personal
            data.
          </strong>{" "}
          Your account and stored data remain until you complete in-app account deletion
          or submit a verified email request.
        </p>
      </LegalSection>

      <LegalSection title="Subscriptions">
        <p>
          If you have an active MiPaw Premium subscription, deleting your account does
          not automatically cancel your subscription. On iOS: open Settings, tap your
          name, then Subscriptions, and cancel MiPaw. On Android: open Google Play,
          tap Payments and subscriptions, and cancel MiPaw. Refunds are handled by
          Apple or Google under their policies.
        </p>
      </LegalSection>

      <LegalSection title="Delete Just One Dog">
        <p>
          In MiPaw, open the dog&apos;s profile &gt; Delete Dog. That removes only that
          dog&apos;s records and photos.
        </p>
      </LegalSection>

      <LegalSection title="Privacy Policy">
        <p>
          For more information about how MiPaw collects, uses, and protects your data,
          read our{" "}
          <Link
            href={mipawHref(basePath, "/privacy")}
            className="text-accent-secondary transition-colors hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>If you need help deleting your account or have questions about your data:</p>
        <p>
          Support:{" "}
          <a
            href={`mailto:${MIPAW_SUPPORT_EMAIL}`}
            className="text-accent-secondary transition-colors hover:underline"
          >
            {MIPAW_SUPPORT_EMAIL}
          </a>
        </p>
        <p>
          <Brand /> (MiPaw)
        </p>
      </LegalSection>
    </MiPawLegalLayout>
  );
}
