import { LegalSection } from "@/components/legal/LegalLayout";
import { MiPawLegalLayout } from "@/components/mipaw/MiPawLegalLayout";
import { MIPAW_SUPPORT_EMAIL } from "@/lib/mipaw/constants";
import { getMipawBasePath, mipawHref } from "@/lib/mipaw/serverPath";
import { mipawPageMetadata } from "@/lib/mipaw/metadata";
import Link from "next/link";

export const metadata = mipawPageMetadata(
  "Support",
  "Get help with MiPaw on iPhone and Android.",
);

export default async function MiPawSupportPage() {
  const basePath = await getMipawBasePath();

  return (
    <MiPawLegalLayout
      title="MiPaw Support"
      breadcrumbLabel="MiPaw Support"
      homeHref={mipawHref(basePath, "/")}
      effectiveDate="October 19, 2026"
    >
      <div className="space-y-4 text-base leading-[1.75]">
        <p>
          Need help with MiPaw on iPhone or Android? Email us and we&apos;ll reply
          within 2 business days. Please include your device (iPhone/Android), app
          version (Settings &gt; About in MiPaw), and a short description.
        </p>
      </div>

      <LegalSection title="Contact Us">
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

      <LegalSection title="FAQ">
        <dl className="space-y-6">
          <div>
            <dt className="font-semibold text-foreground">How do I add another dog?</dt>
            <dd className="mt-1">
              Open your profile or the dog switcher and choose Add Another Dog.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">
              Why isn&apos;t my walk recording?
            </dt>
            <dd className="mt-1">
              Allow location &quot;While using the app&quot; and keep the walk screen
              open; MiPaw records walks only while that screen is open.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">
              I&apos;m not getting reminders.
            </dt>
            <dd className="mt-1">
              Turn on notifications for MiPaw in your phone&apos;s Settings and in
              MiPaw&apos;s settings. On Android, also allow notifications for the
              &quot;Dog care reminders&quot; channel.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">
              How accurate is AI Meal Snap?
            </dt>
            <dd className="mt-1">
              Amounts are estimates; check and edit them before logging. Food-safety
              warnings come from our own reviewed list.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">
              How do I restore my subscription?
            </dt>
            <dd className="mt-1">
              Settings &gt; Subscription &gt; Restore Purchases, signed in with the same
              Apple ID or Google account.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">
              How do I cancel my subscription?
            </dt>
            <dd className="mt-1">
              iPhone: Settings &gt; your name &gt; Subscriptions. Android: Google Play
              &gt; Payments &amp; subscriptions &gt; Subscriptions.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">How do I delete my account?</dt>
            <dd className="mt-1">
              See our{" "}
              <Link
                href={mipawHref(basePath, "/delete-account")}
                className="text-accent-secondary transition-colors hover:underline"
              >
                Delete Account
              </Link>{" "}
              page.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">Is MiPaw a vet?</dt>
            <dd className="mt-1">
              No. For medical concerns or emergencies, contact your vet.
            </dd>
          </div>
        </dl>
      </LegalSection>

      <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Related MiPaw pages">
        <Link
          href={mipawHref(basePath, "/privacy")}
          className="text-accent-secondary transition-colors hover:underline"
        >
          Privacy Policy
        </Link>
        <Link
          href={mipawHref(basePath, "/terms")}
          className="text-accent-secondary transition-colors hover:underline"
        >
          Terms of Use
        </Link>
        <Link
          href={mipawHref(basePath, "/delete-account")}
          className="text-accent-secondary transition-colors hover:underline"
        >
          Delete Account
        </Link>
      </nav>
    </MiPawLegalLayout>
  );
}
