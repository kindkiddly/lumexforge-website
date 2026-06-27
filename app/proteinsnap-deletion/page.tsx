import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import { CONTACT_EMAILS } from "@/lib/constants";
import { proteinsnapDeletionMetadata } from "@/lib/metadata";

export const metadata = proteinsnapDeletionMetadata;

export default function ProteinSnapDeletionPage() {
  return (
    <div className="bg-black">
      <LegalLayout
        title="ProteinSnap Account Deletion Policy"
        breadcrumbLabel="Account Deletion"
        lastUpdated="June 21, 2026"
      >
        <div className="space-y-4 text-base leading-[1.75]">
          <p>
            At ProteinSnap, we believe in providing you with full control over your
            digital footprint. We are committed to transparency regarding how your
            data is handled, stored, and deleted.
          </p>
        </div>

        <LegalSection title="How to Request Account Deletion">
          <p>
            You can permanently delete your ProteinSnap account and all associated
            data directly from within our application. Please follow these simple
            steps:
          </p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Open the ProteinSnap app.</li>
            <li>Go to the &apos;Me&apos; tab.</li>
            <li>Scroll to the footer of the page.</li>
            <li>
              Tap the &apos;Delete Account&apos; button in red text.
            </li>
            <li>
              Confirm your choice when prompted to finalize the permanent deletion.
            </li>
          </ol>
        </LegalSection>

        <LegalSection title="What Data is Permanently Removed">
          <p>
            Once you initiate the deletion process, we immediately remove your
            personal data from our servers. This includes:
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
            Contact our support team:{" "}
            <a
              href={`mailto:${CONTACT_EMAILS.support}`}
              className="text-accent-secondary transition-colors hover:underline"
            >
              {CONTACT_EMAILS.support}
            </a>
          </p>
        </LegalSection>
      </LegalLayout>
    </div>
  );
}
