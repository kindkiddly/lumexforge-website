import { LegalSection } from "@/components/legal/LegalLayout";
import { Brand, PostHuntLegalShell } from "@/components/legal/PostHuntLegalShell";
import Link from "next/link";
import { CONTACT_EMAILS } from "@/lib/constants";
import { posthuntPrivacyMetadata } from "@/lib/metadata";

export const metadata = posthuntPrivacyMetadata;

export default function PostHuntPrivacyPage() {
  return (
    <PostHuntLegalShell
      activePage="privacy"
      title="Privacy Policy"
      breadcrumbLabel="PostHunt Privacy"
      lastUpdated="September 6, 2026"
    >
      <div className="space-y-4 text-base leading-[1.75]">
        <p>
          PostHunt is an AI-powered social media management and content automation
          platform developed by <Brand />. PostHunt is available as a mobile
          application for iOS and Android and as a web application.
        </p>
        <p>
          PostHunt allows users to create, generate, manage, schedule, review, and
          publish social media content across supported social platforms. This
          Privacy Policy explains what information we collect, how we use and share
          it, and the choices you have.
        </p>
      </div>

      <LegalSection title="1. Introduction and Scope">
        <p>
          This Privacy Policy applies to PostHunt on iOS, Android, and Web when you
          use our services, create an account, connect social media accounts, upload
          content, or interact with AI-powered features.
        </p>
        <p>
          By using PostHunt, you acknowledge that you have read this Privacy Policy.
          If you do not agree, please do not use the service.
        </p>
      </LegalSection>

      <LegalSection title="2. Information We Collect">
        <p>
          We collect information in several categories. Some information is
          provided directly by you, some is generated through your use of PostHunt,
          and some is collected automatically.
        </p>

        <p>
          <strong className="text-foreground">Account information:</strong> Email
          address, authentication credentials, account identifiers, and other details
          needed to create and maintain your PostHunt account.
        </p>
        <p>
          <strong className="text-foreground">Profile information:</strong> Name,
          display preferences, workspace or brand settings, and other profile details
          you choose to provide.
        </p>
        <p>
          <strong className="text-foreground">Content you upload:</strong> Images,
          videos, audio, reference media, brand assets, captions, hashtags, and
          other materials you submit for storage, editing, scheduling, or publishing.
        </p>
        <p>
          <strong className="text-foreground">AI-generated content:</strong> Text,
          images, videos, stories, voice or narration outputs, captions, hashtags,
          and other content created through PostHunt&apos;s AI Studio, Auto Pilot,
          and related features based on your inputs and settings.
        </p>
        <p>
          <strong className="text-foreground">
            Social media account connection information:
          </strong>{" "}
          Information about connected social accounts, including account identifiers,
          profile metadata, permissions granted, and publishing-related configuration.
        </p>
        <p>
          <strong className="text-foreground">
            OAuth and authentication information:
          </strong>{" "}
          Tokens, authorization scopes, and related credentials needed to connect
          and operate linked social accounts through third-party integration services.
        </p>
        <p>
          <strong className="text-foreground">Usage information:</strong> Feature
          usage, content creation activity, scheduling actions, approval workflow
          events, queue interactions, and other information about how you use
          PostHunt.
        </p>
        <p>
          <strong className="text-foreground">Device and browser information:</strong>{" "}
          Device type, operating system, app version, browser type, language
          settings, and similar technical details.
        </p>
        <p>
          <strong className="text-foreground">Log and technical information:</strong>{" "}
          IP address, timestamps, diagnostic logs, crash reports, performance data,
          and security-related records.
        </p>
        <p>
          <strong className="text-foreground">
            Cookies and similar technologies (Web):
          </strong>{" "}
          When you use the PostHunt web application, we may use cookies, local
          storage, and similar technologies to maintain sessions, remember preferences,
          and support security and analytics where applicable.
        </p>
        <p>
          You should only upload content and connect social accounts that you are
          authorized to use. Do not submit content you do not have rights to use or
          distribute.
        </p>
      </LegalSection>

      <LegalSection title="3. How We Use Information">
        <p>We may use information to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Provide, operate, and maintain PostHunt across iOS, Android, and Web</li>
          <li>
            Process AI-assisted content generation, including text, image, video,
            story, and voice outputs
          </li>
          <li>
            Store, organize, preview, queue, schedule, and publish content according
            to your settings
          </li>
          <li>
            Operate AI Studio features such as Quick Create, Social Content Hub,
            Commercial Ads Hub, and Auto Pilot
          </li>
          <li>
            Connect to supported social platforms and perform publishing actions you
            authorize
          </li>
          <li>
            Provide analytics, insights, post history, and media library functionality
          </li>
          <li>
            Manage subscriptions, credits, and payment-related features where enabled
          </li>
          <li>Authenticate users and secure accounts</li>
          <li>Detect, prevent, and address fraud, abuse, and security issues</li>
          <li>Provide customer support and respond to requests</li>
          <li>Improve, develop, and troubleshoot the service</li>
          <li>Send service-related communications</li>
          <li>Comply with legal obligations and enforce our agreements</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. AI Processing">
        <p>
          PostHunt uses AI and automation to help generate, adapt, and manage social
          media content. Depending on the feature you use, your prompts, uploaded
          media, connected account context, and configuration settings may be processed
          to produce AI-generated outputs.
        </p>
        <p>
          AI processing may involve third-party AI service providers. We use such
          providers to deliver functionality such as text generation, creative
          direction, image generation, video generation, voice or text-to-speech
          generation, transcription, and related capabilities.
        </p>
        <p>
          AI-generated content may not always be accurate or appropriate. You remain
          responsible for reviewing content before publishing where review or approval
          is available or required.
        </p>
      </LegalSection>

      <LegalSection title="5. How Information May Be Shared">
        <p>
          We do not sell your personal information. We may share information only as
          necessary to operate PostHunt, as described below, or as required by law.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-foreground">Third-party service providers:</strong>{" "}
            Cloud hosting, storage, authentication, analytics, customer support tools,
            payment processors, and other vendors that help us provide the service
          </li>
          <li>
            <strong className="text-foreground">AI service providers:</strong>{" "}
            Providers that process inputs to generate AI-assisted content on our behalf
          </li>
          <li>
            <strong className="text-foreground">
              Social media platforms and integration services:
            </strong>{" "}
            When you connect accounts or publish content, information may be shared
            with the relevant platform or integration provider according to your
            authorization and the platform&apos;s policies
          </li>
          <li>
            <strong className="text-foreground">Payment providers:</strong> Where
            subscriptions or payments are enabled, payment-related information may be
            processed by applicable payment providers
          </li>
          <li>
            <strong className="text-foreground">Legal and safety purposes:</strong>{" "}
            Where required by law, regulation, legal process, or to protect rights,
            safety, and security
          </li>
          <li>
            <strong className="text-foreground">Business transfers:</strong> In
            connection with a merger, acquisition, financing, or sale of assets, subject
            to appropriate safeguards
          </li>
        </ul>
        <p>
          Third-party services may process data under their own privacy policies. We
          encourage you to review the policies of connected platforms and services you
          use with PostHunt.
        </p>
      </LegalSection>

      <LegalSection title="6. Data Retention">
        <p>
          We retain information for as long as necessary to provide PostHunt, fulfill
          the purposes described in this policy, comply with legal obligations, resolve
          disputes, and enforce our agreements.
        </p>
        <p>
          Retention periods may vary depending on the type of information, your account
          status, legal requirements, and operational needs. When you delete your
          account, we process deletion according to our account deletion practices and
          applicable retention requirements.
        </p>
        <p>
          For details on account deletion, see our{" "}
          <Link
            href="/posthunt-deletion"
            className="text-accent-secondary transition-colors hover:underline"
          >
            Account & Data Deletion
          </Link>{" "}
          page.
        </p>
      </LegalSection>

      <LegalSection title="7. Your Rights and Choices">
        <p>
          Depending on your location and applicable law, you may have rights to access,
          correct, delete, export, or restrict certain processing of your personal
          information, or to object to certain uses.
        </p>
        <p>
          You may update certain account and profile information within PostHunt where
          available. You may disconnect linked social accounts through your account
          settings where supported.
        </p>
        <p>
          To exercise privacy rights or submit a request, contact us at{" "}
          <a
            href={`mailto:${CONTACT_EMAILS.privacy}`}
            className="text-accent-secondary transition-colors hover:underline"
          >
            {CONTACT_EMAILS.privacy}
          </a>{" "}
          or through our{" "}
          <Link
            href="/contact"
            className="text-accent-secondary transition-colors hover:underline"
          >
            Contact page
          </Link>
          . We may need to verify your identity before processing certain requests.
        </p>
      </LegalSection>

      <LegalSection title="8. International Data Processing">
        <p>
          PostHunt is available globally. Your information may be processed in
          countries other than your own, including where we or our service providers
          operate.
        </p>
        <p>
          Where required, we take steps designed to protect personal information in
          accordance with applicable data protection laws.
        </p>
      </LegalSection>

      <LegalSection title="9. Children's Privacy">
        <ul className="list-disc space-y-2 pl-5">
          <li>PostHunt is not intended for children under 13 years of age</li>
          <li>We do not knowingly collect personal information from children under 13</li>
          <li>
            If you believe a child has provided personal information to us, please
            contact us and we will take appropriate steps to delete it
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="10. Security">
        <p>
          We use administrative, technical, and organizational measures designed to
          protect personal information. However, no method of transmission or storage
          is completely secure, and we cannot guarantee absolute security.
        </p>
        <p>
          If we become aware of a security incident that affects your personal
          information, we may notify you as required by applicable law.
        </p>
      </LegalSection>

      <LegalSection title="11. Changes to This Privacy Policy">
        <p>
          We may update this Privacy Policy from time to time. When we make material
          changes, we may provide notice through PostHunt, by email, or by updating
          the &quot;Last updated&quot; date at the top of this page.
        </p>
        <p>
          Your continued use of PostHunt after changes become effective constitutes
          acceptance of the updated policy, except where applicable law requires
          additional consent.
        </p>
      </LegalSection>

      <LegalSection title="12. Contact Us">
        <p>
          Questions about this Privacy Policy or our privacy practices? Contact us:
        </p>
        <p>
          Privacy:{" "}
          <a
            href={`mailto:${CONTACT_EMAILS.privacy}`}
            className="text-accent-secondary transition-colors hover:underline"
          >
            {CONTACT_EMAILS.privacy}
          </a>
        </p>
        <p>
          General inquiries:{" "}
          <a
            href={`mailto:${CONTACT_EMAILS.business}`}
            className="text-accent-secondary transition-colors hover:underline"
          >
            {CONTACT_EMAILS.business}
          </a>
        </p>
        <p>
          <Link
            href="/contact"
            className="text-accent-secondary transition-colors hover:underline"
          >
            Contact page
          </Link>
        </p>
        <p>
          <Brand /> — PostHunt
        </p>
      </LegalSection>
    </PostHuntLegalShell>
  );
}
