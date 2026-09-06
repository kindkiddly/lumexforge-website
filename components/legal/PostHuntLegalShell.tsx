import Link from "next/link";
import { LegalLayout } from "@/components/legal/LegalLayout";

export type PostHuntLegalPage = "privacy" | "terms" | "deletion";

const LEGAL_NAV: { id: PostHuntLegalPage; href: string; label: string }[] = [
  { id: "privacy", href: "/posthunt-privacy", label: "Privacy Policy" },
  { id: "terms", href: "/posthunt-terms", label: "Terms of Use" },
  { id: "deletion", href: "/posthunt-deletion", label: "Account & Data Deletion" },
];

function PostHuntIdentity() {
  return (
    <div className="mb-8 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-accent-primary/10 via-white/[0.02] to-accent-secondary/5 p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-secondary">
        PostHunt
      </p>
      <p className="mt-2 font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        AI Social Media Agent
      </p>
      <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
        Available on iOS, Android, and Web — an AI-powered social media management
        and content automation platform by{" "}
        <span className="text-accent-secondary">LumexForge</span>.
      </p>
    </div>
  );
}

function PostHuntLegalNav({ activePage }: { activePage: PostHuntLegalPage }) {
  return (
    <nav
      aria-label="PostHunt legal pages"
      className="mb-8 flex flex-wrap gap-2 border-b border-white/[0.08] pb-6"
    >
      {LEGAL_NAV.map((item) => {
        const isActive = item.id === activePage;
        return (
          <Link
            key={item.id}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors sm:px-4 ${
              isActive
                ? "bg-accent-primary/15 text-accent-secondary ring-1 ring-accent-secondary/25"
                : "text-foreground-secondary hover:bg-white/[0.04] hover:text-foreground"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

interface PostHuntLegalShellProps {
  activePage: PostHuntLegalPage;
  title: string;
  breadcrumbLabel: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export function PostHuntLegalShell({
  activePage,
  title,
  breadcrumbLabel,
  lastUpdated,
  children,
}: PostHuntLegalShellProps) {
  return (
    <LegalLayout
      title={title}
      breadcrumbLabel={breadcrumbLabel}
      lastUpdated={lastUpdated}
      beforeTitle={
        <>
          <PostHuntIdentity />
          <PostHuntLegalNav activePage={activePage} />
        </>
      }
    >
      {children}
    </LegalLayout>
  );
}

export function Brand() {
  return <span className="text-accent-secondary">LumexForge</span>;
}
