import { MiPawLegalLayout } from "@/components/mipaw/MiPawLegalLayout";
import { getMipawBasePath, mipawHref } from "@/lib/mipaw/serverPath";
import { mipawPageMetadata } from "@/lib/mipaw/metadata";
import Link from "next/link";

export const metadata = mipawPageMetadata(
  "Home",
  "MiPaw helps you look after your dog's nutrition, fitness, training, health and memories with friendly AI guidance on iPhone and Android.",
);

export default async function MiPawHomePage() {
  const basePath = await getMipawBasePath();
  const homeHref = mipawHref(basePath, "/");

  return (
    <MiPawLegalLayout
      title="AI-powered care for your dog"
      breadcrumbLabel="MiPaw"
      homeHref={homeHref}
      effectiveDate="October 19, 2026"
    >
      <div className="space-y-4 text-base leading-[1.75]">
        <p>
          MiPaw is a dog care companion for iOS and Android. It helps you look after
          your dog&apos;s nutrition, fitness, training, health, and memories in one
          place, with friendly AI guidance along the way.
        </p>
        <p>
          MiPaw is a wellness companion, not a veterinary service. Always contact your
          vet for medical concerns.
        </p>
      </div>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong className="text-foreground">Nutrition:</strong> log meals and water,
          snap a meal photo for an AI estimate, scan dog-food labels, and check which
          foods are safe.
        </li>
        <li>
          <strong className="text-foreground">Walks &amp; fitness:</strong> track walks
          with GPS while the walk screen is open, set daily goals, and see weekly trends.
        </li>
        <li>
          <strong className="text-foreground">Training:</strong> step-by-step
          reward-based lessons, practice sessions, and progress.
        </li>
        <li>
          <strong className="text-foreground">Health:</strong> weight, vaccines,
          medications, vet visits, observations, documents, reminders, and a vet summary
          you can share.
        </li>
        <li>
          <strong className="text-foreground">Memories &amp; Pose Studio:</strong> photo
          memories, albums, milestones, growth comparisons, and guided dog photo poses.
        </li>
        <li>
          <strong className="text-foreground">AI assistant:</strong> daily briefing,
          coach chat, insights, and activity advice based on your dog&apos;s records.
        </li>
      </ul>
      <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="MiPaw pages">
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
          href={mipawHref(basePath, "/support")}
          className="text-accent-secondary transition-colors hover:underline"
        >
          Support
        </Link>
        <Link
          href={mipawHref(basePath, "/delete-account")}
          className="text-accent-secondary transition-colors hover:underline"
        >
          Delete Account
        </Link>
      </nav>
      <p>Available on iPhone and Android.</p>
      {/* TODO: App Store and Google Play links when store URLs are ready */}
    </MiPawLegalLayout>
  );
}
