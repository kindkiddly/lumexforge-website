"use client";

import { useProteinSnapsPath } from "@/components/proteinsnaps/ProteinSnapsPathContext";
import { PROTEINSNAPS } from "@/lib/proteinsnaps/constants";
import Link from "next/link";

export function ProteinSnapsFooter() {
  const { href: psHref } = useProteinSnapsPath();
  return (
    <footer className="border-t border-white/[0.06] bg-background-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-serif text-xl font-semibold text-foreground">
              {PROTEINSNAPS.name}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
              {PROTEINSNAPS.tagline}. Built by LumexForge.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00e6a8]">
              Product
            </p>
            <ul className="mt-4 space-y-2 text-sm text-foreground-secondary">
              <li>
                <Link href={psHref("/features")} className="transition-colors hover:text-[#00c2ff]">
                  Features
                </Link>
              </li>
              <li>
                <Link href={psHref("/how-it-works")} className="transition-colors hover:text-[#00c2ff]">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href={psHref("/blog")} className="transition-colors hover:text-[#00c2ff]">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00e6a8]">
              Legal
            </p>
            <ul className="mt-4 space-y-2 text-sm text-foreground-secondary">
              <li>
                <a
                  href={PROTEINSNAPS.lumexforgeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#00c2ff]"
                >
                  LumexForge.com
                </a>
              </li>
              <li>
                <a
                  href={PROTEINSNAPS.privacyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#00c2ff]"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href={PROTEINSNAPS.termsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#00c2ff]"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href={PROTEINSNAPS.deletionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#00c2ff]"
                >
                  Delete Account
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="ps-divider mt-10" />
        <p className="mt-6 text-center text-xs text-foreground-muted">
          © {new Date().getFullYear()} LumexForge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
