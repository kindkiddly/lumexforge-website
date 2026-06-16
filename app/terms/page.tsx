import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import { CONTACT_EMAILS } from "@/lib/constants";
import { termsMetadata } from "@/lib/metadata";

export const metadata = termsMetadata;

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      breadcrumbLabel="Terms"
      lastUpdated="June 16, 2026"
    >
      <div className="space-y-4 text-base leading-[1.75]">
        <p>
          Welcome to AMORA. These terms govern your use of our app and service.
          Please read them carefully — they include important information about
          what AMORA is and is not.
        </p>
      </div>

      <LegalSection title="1. What AMORA is">
        <p>
          AMORA is an emotional companion app that helps you preserve and revisit
          memories of loved ones through AI-assisted conversations and voice
          reconstructions.
        </p>
        <p>AMORA is NOT:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>A substitute for professional mental health care or therapy</li>
          <li>A crisis intervention service</li>
          <li>A medical or psychological diagnostic tool</li>
          <li>
            A means of contacting actual deceased persons (the conversations are
            AI-generated, based on the information you provide)
          </li>
        </ul>
        <p>
          If you are experiencing a mental health crisis or having thoughts of
          self-harm, please contact a qualified mental health professional or use
          the helplines provided in the app (Settings → Get support).
        </p>
      </LegalSection>

      <LegalSection title="2. Eligibility">
        <p>
          You must be at least 18 years old to use AMORA. By creating an account,
          you confirm you meet this age requirement.
        </p>
      </LegalSection>

      <LegalSection title="3. Your account">
        <ul className="list-disc space-y-2 pl-5">
          <li>You are responsible for keeping your login credentials secure.</li>
          <li>You must provide accurate information during signup.</li>
          <li>One account per person — please don&apos;t share accounts.</li>
          <li>
            We may suspend or terminate accounts that violate these terms.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Acceptable use">
        <p>You agree NOT to use AMORA to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Create profiles of real public figures, celebrities, or political
            leaders without their consent.
          </li>
          <li>
            Create profiles intended to harass, defame, or harm others.
          </li>
          <li>
            Upload voice samples or photos you do not have the right to use.
          </li>
          <li>Use the service for any illegal purpose.</li>
          <li>
            Attempt to extract, copy, or reverse-engineer the AI&apos;s behavior.
          </li>
          <li>Resell or commercially redistribute access to the app.</li>
          <li>Bypass security or access restrictions.</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Voice cloning and intellectual property">
        <p>When you upload a voice sample for cloning:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            You confirm you have the legal right to use that voice (as the person
            themselves, as next of kin for deceased persons, or with explicit
            written consent from a living person).
          </li>
          <li>You retain ownership of the voice and recordings.</li>
          <li>
            You grant AMORA a limited license to use them solely to generate
            conversations for you within the app.
          </li>
          <li>
            We do not use your loved ones&apos; voices for any external purpose or
            training.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Subscriptions and payments">
        <p>
          Free tier includes basic profile creation and limited conversation
          minutes per month. Some features (advanced voices, voice cloning) require
          a paid subscription.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Paid plans auto-renew monthly unless cancelled before the renewal
            date.
          </li>
          <li>
            You can cancel anytime through your device&apos;s subscription settings
            (Apple App Store / Google Play Store).
          </li>
          <li>
            Refunds are handled per the policies of Apple and Google.
          </li>
          <li>Prices may change with 30 days&apos; notice.</li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Disclaimer">
        <p>
          AMORA is provided &quot;as is&quot; without warranties of any kind. While
          we make every effort to provide a meaningful and emotionally sensitive
          experience:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            AI-generated content may sometimes feel unexpected, inaccurate, or out
            of character.
          </li>
          <li>
            The likeness of your loved one is an approximation, not a true
            representation.
          </li>
          <li>We cannot guarantee uninterrupted or error-free service.</li>
          <li>
            We are not responsible for emotional, psychological, or relational
            consequences of using the service.
          </li>
        </ul>
        <p>
          <strong className="text-foreground">Important:</strong> Use of AMORA can
          bring up complex emotions. If you find yourself struggling, please reach
          out to a qualified mental health professional.
        </p>
      </LegalSection>

      <LegalSection title="8. Limitation of liability">
        <p>
          To the maximum extent permitted by law, LumexForge and its team are not
          liable for:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Emotional distress arising from app use</li>
          <li>
            Loss of memories, profiles, or data (we recommend regular exports)
          </li>
          <li>Indirect, consequential, or punitive damages</li>
          <li>
            Issues caused by third-party services we depend on (Supabase, AI
            providers, payment processors)
          </li>
        </ul>
        <p>
          Our total liability for any claim is limited to the amount you paid us in
          the 12 months before the claim arose.
        </p>
      </LegalSection>

      <LegalSection title="9. Termination">
        <p>
          You can stop using AMORA and delete your account at any time. We may
          suspend or terminate accounts that violate these terms or for legal
          reasons. Upon termination, your data will be deleted per our Privacy
          Policy.
        </p>
      </LegalSection>

      <LegalSection title="10. Changes to terms">
        <p>
          We may update these terms as our service evolves. Material changes will
          be communicated through the app at least 14 days in advance. Continued
          use after changes means acceptance.
        </p>
      </LegalSection>

      <LegalSection title="11. Governing law">
        <p>
          These terms are governed by the laws of the Islamic Republic of
          Pakistan. Disputes will be resolved in the courts of Karachi, Pakistan.
        </p>
      </LegalSection>

      <LegalSection title="12. Contact">
        <p>
          Email:{" "}
          <a
            href={`mailto:${CONTACT_EMAILS.business}`}
            className="text-accent-secondary transition-colors hover:underline"
          >
            {CONTACT_EMAILS.business}
          </a>
        </p>
        <p>Address: LumexForge, Karachi, Pakistan</p>
        <p>We respond to all questions within 7 business days.</p>
      </LegalSection>
    </LegalLayout>
  );
}
