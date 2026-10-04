import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import { CONTACT_EMAILS } from "@/lib/constants";
import { proteinsnapDeletionMetadata } from "@/lib/metadata";

export const metadata = proteinsnapDeletionMetadata;

export default function ProteinSnapDeletionPage() {
  return (
    <div className="bg-black">
      <LegalLayout
        title="ProteinSnaps Account Deletion Policy"
        breadcrumbLabel="Account Deletion"
        lastUpdated="October 5, 2026"
      >
        <div className="space-y-4 text-base leading-[1.75]">
          <p>
            At ProteinSnaps, we believe in providing you with full control over your
            digital footprint. We are committed to transparency regarding how your
            data is handled, stored, and deleted.
          </p>
        </div>

        <LegalSection title="How to Request Account Deletion">
          <p>
            You can permanently delete your ProteinSnaps account and all associated
            data directly from within our application. Please follow these simple
            steps:
          </p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Open the ProteinSnaps app.</li>
            <li>Go to the &apos;Me&apos; tab.</li>
            <li>Scroll to the footer of the page.</li>
            <li>
              Tap the &apos;Delete Account&apos; button in red text.
            </li>
            <li>
              Confirm your choice when prompted to finalize the permanent deletion.
            </li>
          </ol>
          <p>
            Don&apos;t have access to the app? Email proteinsnaps@lumexforge.com from
            the email address linked to your account with the subject &quot;Delete my
            account&quot;, and we will delete your account and all associated data
            within 30 days.
          </p>
        </LegalSection>

        <LegalSection title="What Data is Permanently Removed">
          <p>
            Once you initiate the deletion process, your personal data is
            permanently removed from our servers within 30 days. This includes:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Account Credentials (email and auth profile).</li>
            <li>
              Personalized Metrics (weight, water, measurements, meal history).
            </li>
            <li>Progress Tracking (photos and workout history).</li>
            <li>AI Insights (coaching data).</li>
            <li>User-Generated Content.</li>
          </ul>
        </LegalSection>

        <LegalSection title="Data Retention & Security">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-foreground">Irreversibility:</strong> Deletion
              is permanent. Data cannot be recovered.
            </li>
            <li>
              <strong className="text-foreground">Legal Compliance:</strong> We do
              not retain personal account data after deletion, except where required
              by law, fraud prevention, or technical backup processes.
            </li>
            <li>
              <strong className="text-foreground">Privacy Commitment:</strong> We do
              not sell or share your data with third parties.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="Need Assistance?">
          <p>
            Support:{" "}
            <a
              href={`mailto:${CONTACT_EMAILS.proteinsnaps}`}
              className="text-accent-secondary transition-colors hover:underline"
            >
              {CONTACT_EMAILS.proteinsnaps}
            </a>
          </p>
        </LegalSection>
      </LegalLayout>
    </div>
  );
}
