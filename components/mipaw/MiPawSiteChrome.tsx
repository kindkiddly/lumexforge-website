import { getMipawBasePath, mipawHref } from "@/lib/mipaw/serverPath";
import Link from "next/link";
import type { ReactNode } from "react";

export async function MiPawSiteChrome({ children }: { children: ReactNode }) {
  const basePath = await getMipawBasePath();
  const homeHref = mipawHref(basePath, "/");

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b border-white/[0.06] bg-[#000814]/95">
        <div className="mx-auto max-w-legal px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href={homeHref}
            className="font-sans text-sm font-semibold text-foreground transition-colors hover:text-accent-secondary"
          >
            MiPaw <span className="font-normal text-foreground-secondary">by LumexForge</span>
          </Link>
        </div>
      </header>
      <div className="flex-1">{children}</div>
      <footer className="border-t border-white/[0.06] bg-[#000814]">
        <div className="mx-auto max-w-legal px-4 py-6 sm:px-6 lg:px-8">
          <nav
            className="flex flex-wrap gap-x-4 gap-y-2 font-sans text-sm text-foreground-secondary"
            aria-label="MiPaw legal and support"
          >
            <Link
              href={mipawHref(basePath, "/privacy")}
              className="transition-colors hover:text-accent-secondary"
            >
              Privacy
            </Link>
            <Link
              href={mipawHref(basePath, "/terms")}
              className="transition-colors hover:text-accent-secondary"
            >
              Terms
            </Link>
            <Link
              href={mipawHref(basePath, "/support")}
              className="transition-colors hover:text-accent-secondary"
            >
              Support
            </Link>
            <Link
              href={mipawHref(basePath, "/delete-account")}
              className="transition-colors hover:text-accent-secondary"
            >
              Delete Account
            </Link>
          </nav>
          <p className="mt-4 font-sans text-xs leading-relaxed text-foreground-muted">
            © LumexForge. MiPaw is available on iPhone (App Store) and Android (Google
            Play).
          </p>
          <p className="mt-2 font-sans text-xs leading-relaxed text-foreground-muted">
            LumexForge, Rosenberg, Texas, USA (MiPaw)
          </p>
        </div>
      </footer>
    </div>
  );
}
