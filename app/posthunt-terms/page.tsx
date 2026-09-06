import { LegalSection } from "@/components/legal/LegalLayout";
import { Brand, PostHuntLegalShell } from "@/components/legal/PostHuntLegalShell";
import Link from "next/link";
import { CONTACT_EMAILS } from "@/lib/constants";
import { posthuntTermsMetadata } from "@/lib/metadata";

export const metadata = posthuntTermsMetadata;

export default function PostHuntTermsPage() {
  return (
    <PostHuntLegalShell
      activePage="terms"
      title="Terms of Use"
      breadcrumbLabel="PostHunt Terms"
      lastUpdated="September 6, 2026"
    >
      <div className="space-y-4 text-base leading-[1.75]">
        <p>
          These Terms of Use (&quot;Terms&quot;) govern your access to and use of
          PostHunt, an AI-powered social media management and content automation
          platform developed by <Brand />, available on iOS, Android, and Web.
        </p>
        <p>
          By accessing or using PostHunt, you agree to these Terms. If you do not
          agree, do not use the service.
        </p>
      </div>

      <LegalSection title="1. Acceptance of Terms">
        <p>
          These Terms form a binding agreement between you and LumexForge regarding
          PostHunt. You represent that you have the legal capacity to enter into
          this agreement and that your use of PostHunt complies with applicable laws
          and platform rules.
        </p>
      </LegalSection>

      <LegalSection title="2. Description of PostHunt">
        <p>
          PostHunt allows users to create, generate, manage, schedule, review, and
          publish social media content across supported social platforms.
        </p>
        <p>PostHunt includes features such as:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            AI Studio with Quick Create tools for AI Image, AI Video, AI Story, and
            AI Voice Post creation
          </li>
          <li>Social Content Hub for AI-assisted organic social content</li>
          <li>Commercial Ads Hub for AI-assisted promotional and advertising content</li>
          <li>Auto Pilot for automated content generation based on your settings</li>
          <li>AI-generated captions, hashtags, images, videos, stories, and voice content</li>
          <li>Content preview, queue, scheduling, approval workflows, and media library</li>
          <li>Post history, insights, analytics, and connected social account publishing</li>
          <li>Subscription and credit-related functionality where applicable</li>
        </ul>
        <p>
          PostHunt is designed as an AI social media agent. You are not required to
          manually create every post, but you remain responsible for content you create,
          approve, schedule, and publish.
        </p>
      </LegalSection>

      <LegalSection title="3. Eligibility">
        <ul className="list-disc space-y-2 pl-5">
          <li>You must be at least 13 years old to use PostHunt</li>
          <li>
            If you use PostHunt on behalf of a business or organization, you represent
            that you have authority to bind that entity
          </li>
          <li>
            You may not use PostHunt where prohibited by applicable law or platform
            policy
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Account Registration and Security">
        <ul className="list-disc space-y-2 pl-5">
          <li>You are responsible for maintaining the confidentiality of your account credentials</li>
          <li>You are responsible for all activity under your account</li>
          <li>You must provide accurate account information and keep it up to date</li>
          <li>
            Notify us promptly if you suspect unauthorized access to your account
          </li>
          <li>One person or authorized entity per account unless we approve otherwise</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. User Responsibilities">
        <p>You agree that you will:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Use PostHunt only for lawful purposes</li>
          <li>
            Ensure you have the rights and permissions needed for content you upload,
            generate, or publish
          </li>
          <li>
            Comply with applicable laws, advertising rules, copyright requirements, and
            third-party platform policies
          </li>
          <li>
            Review AI-generated content before publishing when review or approval is
            available or required
          </li>
          <li>
            Connect only social media accounts you are authorized to manage
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Acceptable Use">
        <p>You agree NOT to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Use PostHunt for illegal, harmful, deceptive, or abusive activity</li>
          <li>Upload or publish content that infringes intellectual property or privacy rights</li>
          <li>Publish misleading, fraudulent, or unauthorized advertising where prohibited</li>
          <li>Attempt to hack, reverse-engineer, scrape, or disrupt PostHunt or related systems</li>
          <li>Circumvent security, usage limits, or access controls</li>
          <li>Impersonate others or misrepresent your affiliation</li>
          <li>Use PostHunt to spam, manipulate platforms, or violate platform terms</li>
          <li>Use AI features to generate unlawful, harmful, or prohibited content</li>
        </ul>
        <p>
          We may investigate violations and suspend or terminate accounts where
          appropriate.
        </p>
      </LegalSection>

      <LegalSection title="7. User-Generated and AI-Generated Content">
        <p>
          PostHunt may store, process, and display content you upload and content
          generated through AI features based on your inputs and settings.
        </p>
        <p>
          <strong className="text-foreground">AI limitations:</strong> AI-generated
          content may contain errors, inaccuracies, inappropriate suggestions, unintended
          results, or outputs that do not match your intent. AI outputs are not
          guaranteed to be accurate, compliant, or suitable for any particular platform
          or audience.
        </p>
        <p>
          You are solely responsible for reviewing, editing, approving, and publishing
          content through PostHunt. PostHunt does not guarantee engagement, followers,
          sales, reach, viral performance, advertising results, platform availability,
          or uninterrupted service.
        </p>
      </LegalSection>

      <LegalSection title="8. Content Ownership and License">
        <p>
          As between you and LumexForge, you retain ownership of content you upload
          and lawful rights in content you create, subject to third-party rights and
          applicable law.
        </p>
        <p>
          You grant LumexForge a limited license to host, store, reproduce, process,
          adapt, display, and distribute your content solely as necessary to provide,
          operate, improve, and secure PostHunt, including AI processing, preview,
          scheduling, publishing, backup, and support functions.
        </p>
        <p>
          This license ends when your content is deleted from our active systems,
          except where retention is permitted or required as described in our privacy
          and deletion policies.
        </p>
      </LegalSection>

      <LegalSection title="9. Social Media Publishing and Connected Accounts">
        <p>
          PostHunt may connect to supported social platforms through third-party
          integration services and OAuth authorization. When you connect an account,
          you authorize PostHunt to access and use permitted information and perform
          actions you request, such as scheduling or publishing content.
        </p>
        <p>
          You are responsible for all content published through your connected accounts,
          including content created manually, generated by AI, or prepared through Auto
          Pilot according to your settings.
        </p>
        <p>
          Disconnecting a social account from PostHunt is separate from deleting your
          account on that third-party platform. Published content may remain live on
          external platforms unless you remove it directly through those platforms.
        </p>
      </LegalSection>

      <LegalSection title="10. Auto Pilot, Scheduling, and Approval Workflows">
        <p>
          Auto Pilot and automated features may generate or prepare content according
          to your configured preferences. Where approval workflows are available, you
          are responsible for reviewing content before publication when required or
          advisable.
        </p>
        <p>
          Scheduling and automated publishing depend on third-party platform
          availability, account permissions, network conditions, and service status.
          We do not guarantee successful delivery, timing, or performance of scheduled
          or automated posts.
        </p>
      </LegalSection>

      <LegalSection title="11. Third-Party Services and Platforms">
        <p>
          PostHunt relies on third-party providers for functionality such as AI
          generation, cloud storage, authentication, social publishing, analytics, and
          payments where enabled. Your use of those services may be subject to separate
          terms and policies.
        </p>
        <p>
          We are not responsible for third-party platforms, APIs, outages, policy
          changes, account suspensions, or actions taken by social networks independent
          of PostHunt.
        </p>
      </LegalSection>

      <LegalSection title="12. Credits, Subscriptions, and Payments">
        <p>
          Where PostHunt offers paid plans, credits, or subscriptions, applicable
          pricing, billing terms, and feature limits will be presented within the
          service or at purchase.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Mobile subscriptions purchased through Apple or Google are managed by the
            applicable app store according to its policies
          </li>
          <li>
            Web or other payment methods, where available, may be processed by third-party
            payment providers
          </li>
          <li>
            Refunds and cancellations, where applicable, are handled according to the
            relevant store, payment provider, or stated policy
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="13. Intellectual Property">
        <p>
          PostHunt, including its software, design, branding, and underlying technology,
          is owned by LumexForge or its licensors and is protected by intellectual
          property laws. These Terms do not grant you ownership of PostHunt or our
          intellectual property.
        </p>
        <p>
          If you believe content on PostHunt infringes your copyright or trademark,
          contact us with sufficient detail to review your claim.
        </p>
      </LegalSection>

      <LegalSection title="14. Beta and Experimental Features">
        <p>
          PostHunt may include beta, preview, or experimental features. Such features
          may change, be limited, or be discontinued at any time and are provided
          &quot;as is&quot; without guarantees of availability or performance.
        </p>
      </LegalSection>

      <LegalSection title="15. Disclaimers">
        <p>
          POSTHUNT IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; TO THE
          MAXIMUM EXTENT PERMITTED BY LAW. WE DISCLAIM ALL WARRANTIES, EXPRESS OR
          IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT.
        </p>
        <p>
          We do not warrant that PostHunt will be uninterrupted, error-free, secure,
          or free of harmful components, or that AI outputs will be accurate, lawful,
          or suitable for your intended use.
        </p>
      </LegalSection>

      <LegalSection title="16. Limitation of Liability">
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, LUMEXFORGE AND ITS AFFILIATES,
          OFFICERS, EMPLOYEES, AND SUPPLIERS WILL NOT BE LIABLE FOR ANY INDIRECT,
          INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF
          PROFITS, DATA, GOODWILL, BUSINESS OPPORTUNITY, OR PLATFORM ACCESS ARISING
          FROM YOUR USE OF POSTHUNT.
        </p>
        <p>
          OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO POSTHUNT
          WILL NOT EXCEED THE GREATER OF THE AMOUNT YOU PAID US FOR POSTHUNT IN THE
          TWELVE (12) MONTHS BEFORE THE CLAIM OR ONE HUNDRED U.S. DOLLARS (USD $100),
          EXCEPT WHERE LIABILITY CANNOT BE LIMITED BY APPLICABLE LAW.
        </p>
      </LegalSection>

      <LegalSection title="17. Indemnification">
        <p>
          You agree to indemnify and hold harmless LumexForge from claims, damages,
          losses, and expenses (including reasonable legal fees) arising from your
          content, your use of PostHunt, your connected accounts, your violation of
          these Terms, or your violation of applicable law or third-party rights.
        </p>
      </LegalSection>

      <LegalSection title="18. Termination and Suspension">
        <p>
          You may stop using PostHunt at any time. You may request account deletion
          as described on our{" "}
          <Link
            href="/posthunt-deletion"
            className="text-accent-secondary transition-colors hover:underline"
          >
            Account & Data Deletion
          </Link>{" "}
          page.
        </p>
        <p>
          We may suspend or terminate access to PostHunt if you violate these Terms,
          create risk or legal exposure, or where required for security or operational
          reasons. Provisions that by their nature should survive termination will
          survive.
        </p>
      </LegalSection>

      <LegalSection title="19. Changes to These Terms">
        <p>
          We may update these Terms from time to time. Material changes may be
          communicated through PostHunt, by email, or by updating the &quot;Last
          updated&quot; date above. Continued use after changes become effective
          constitutes acceptance, except where applicable law requires otherwise.
        </p>
      </LegalSection>

      <LegalSection title="20. Governing Law and Disputes">
        <p>
          These Terms are governed by applicable law in the jurisdiction where LumexForge
          operates, without regard to conflict-of-law principles, except where mandatory
          consumer protection laws in your jurisdiction provide otherwise.
        </p>
        <p>
          Before initiating formal dispute proceedings, you agree to contact us and
          attempt to resolve the dispute informally in good faith.
        </p>
      </LegalSection>

      <LegalSection title="21. Contact">
        <p>Questions about these Terms? Contact us:</p>
        <p>
          Email:{" "}
          <a
            href={`mailto:${CONTACT_EMAILS.business}`}
            className="text-accent-secondary transition-colors hover:underline"
          >
            {CONTACT_EMAILS.business}
          </a>
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
