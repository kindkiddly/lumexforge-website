import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import { CONTACT_EMAILS } from "@/lib/constants";
import { privacyMetadata } from "@/lib/metadata";

export const metadata = privacyMetadata;

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      breadcrumbLabel="Privacy"
      lastUpdated="June 16, 2026"
    >
      <div className="space-y-4 text-base leading-[1.75]">
        <p>
          AMORA is an emotional companion app created by LumexForge (Karachi,
          Pakistan) to help people stay connected with the memories of loved ones
          they have lost. We understand the deeply personal nature of what you
          share with us, and we take our responsibility to protect it seriously.
        </p>
        <p>
          This Privacy Policy explains what information we collect, why, and how
          we handle it.
        </p>
      </div>

      <LegalSection title="1. Information we collect">
        <p>
          <strong className="text-foreground">Account information:</strong> Email
          address (for sign-in and account recovery), display name (optional),
          country (for crisis-support resources and language), subscription
          status.
        </p>
        <p>
          <strong className="text-foreground">Memory profile data:</strong> Names,
          relationships, photos, dates, and personality details of your loved
          ones. Stories, sayings, pet names, and other personal memories you
          choose to share. Voice recordings (only if you upload them for
          voice-cloning features).
        </p>
        <p>
          <strong className="text-foreground">Conversation data:</strong> Messages
          you send within the app, AI replies generated for you, time of
          conversation, duration, and detected mood (used to improve emotional
          sensitivity).
        </p>
        <p>
          <strong className="text-foreground">Usage analytics:</strong> App
          version, device type, anonymous usage patterns, crash reports (no
          personal content).
        </p>
      </LegalSection>

      <LegalSection title="2. How we use your information">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            To provide the AMORA service (creating profiles, generating
            conversations, producing voices).
          </li>
          <li>
            To remember context across conversations (so your loved one&apos;s
            profile feels consistent).
          </li>
          <li>
            To detect signs of grief or distress and offer professional support
            resources when appropriate.
          </li>
          <li>
            To process payments through trusted payment partners (we never store
            your card details).
          </li>
          <li>
            To improve the app (using anonymous, aggregated data only).
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Voice cloning consent">
        <p>For features that recreate a loved one&apos;s voice using AI:</p>
        <p>
          <strong className="text-foreground">For deceased persons:</strong> by
          uploading their voice, you confirm you have the legal and ethical right
          to do so (typically as next of kin or heir).
        </p>
        <p>
          <strong className="text-foreground">For living persons:</strong>{" "}
          explicit consent from the living person is required. They must record
          and submit a consent statement before their voice can be cloned. You are
          responsible for ensuring this consent is genuine.
        </p>
        <p>
          We do not use uploaded voices for any purpose other than serving your
          conversations within AMORA. We never share, sell, or train external
          models with your loved ones&apos; voices.
        </p>
      </LegalSection>

      <LegalSection title="4. How we store your data">
        <p>
          All data is stored on secure servers operated by Supabase (Amazon Web
          Services infrastructure). Data is encrypted at rest and in transit
          (TLS). Voice recordings are stored separately with restricted access. We
          use industry-standard security practices to protect against unauthorized
          access.
        </p>
      </LegalSection>

      <LegalSection title="5. Who can access your data">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-foreground">You</strong> — through the app,
            anytime.
          </li>
          <li>
            <strong className="text-foreground">Our authorized staff</strong> —
            only when investigating bugs or providing customer support, and only
            with your explicit request.
          </li>
          <li>
            <strong className="text-foreground">No one else</strong> — we never
            sell, share, or rent your personal data to third parties for marketing
            or any other purpose.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Your rights">
        <p>You have the right to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Access all your data through the in-app Profile and Settings screens.
          </li>
          <li>
            Export your data in JSON format (via Settings → Export my data).
          </li>
          <li>Correct any information by editing your profiles.</li>
          <li>
            Delete your account and all associated data permanently (via Settings
            → Delete my account). This action is irreversible.
          </li>
          <li>
            Opt out of analytics (via Settings → Privacy → Disable usage
            analytics).
          </li>
        </ul>
        <p>
          Deletion requests are completed within 30 days. We retain only minimal
          records required by law (e.g., billing) for limited periods.
        </p>
      </LegalSection>

      <LegalSection title="7. Children's policy">
        <p>
          AMORA is not intended for users under 18 years of age. We do not
          knowingly collect data from minors. If you believe a minor has used our
          service, please contact us and we will delete their data immediately.
        </p>
      </LegalSection>

      <LegalSection title="8. International users">
        <p>
          AMORA is operated from Pakistan. By using the app, you consent to your
          data being processed in Pakistan and the United States (where our
          servers are located). We comply with applicable data protection
          regulations including GDPR (for European users) and CCPA (for
          California users).
        </p>
      </LegalSection>

      <LegalSection title="9. Changes to this policy">
        <p>
          We may update this policy as our service evolves. We will notify you
          of significant changes through the app at least 14 days before they take
          effect. Continued use of AMORA after changes means you accept them.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact us">
        <p>Questions, concerns, or requests about your privacy?</p>
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
        <p>We respond to all privacy inquiries within 7 business days.</p>
      </LegalSection>
    </LegalLayout>
  );
}
