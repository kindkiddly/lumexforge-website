"use client";

import { useProteinSnapsPath } from "@/components/proteinsnaps/ProteinSnapsPathContext";
import { PROTEINSNAPS } from "@/lib/proteinsnaps/constants";
import Link from "next/link";

function FooterStoreButtons() {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      <a
        href={PROTEINSNAPS.appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-[#1A1A1A] transition-opacity hover:opacity-90"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M17.05 20.28c-.96.95-2.1 1.72-3.4 1.72-1.3 0-2.45-.77-3.4-1.72-1.9-1.88-3.05-4.46-3.05-7.28 0-2.82 1.15-5.4 3.05-7.28.95-.95 2.1-1.72 3.4-1.72s2.45.77 3.4 1.72c1.9 1.88 3.05 4.46 3.05 7.28 0 2.82-1.15 5.4-3.05 7.28zM12.03 3.5c.73-.88 1.22-2.1 1.08-3.5-1.04.04-2.3.72-3.05 1.6-.68.78-1.27 2.02-1.11 3.22 1.18.09 2.38-.6 3.08-1.32z" />
        </svg>
        App Store
      </a>
      <a
        href={PROTEINSNAPS.playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-lg border border-white/25 bg-transparent px-3 py-2 text-xs font-semibold text-[#F8FAFC] transition-colors hover:bg-white/10"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M3.609 1.814L13.792 12 3.61 22.186a1.006 1.006 0 01-.61-.92V2.734a1.006 1.006 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1.002 1.002 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
        </svg>
        Google Play
      </a>
    </div>
  );
}

export function ProteinSnapsFooter() {
  const { href: psHref } = useProteinSnapsPath();
  const year = new Date().getFullYear();
  return (
    <footer className="ps-site-footer !shadow-none">
      <div className="ps-site-footer-inner mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="ps-site-footer-grid !grid-cols-1 !gap-y-8 sm:!grid-cols-2 lg:!grid-cols-[1.35fr_1fr_1fr_1fr] lg:!gap-x-8">
          <div className="ps-site-footer-brand">
            <p className="ps-site-footer-brand-title font-serif text-xl font-semibold text-[#F8FAFC]">
              Protein<span className="text-[#00e6a8]">Snaps</span>
            </p>
            <p className="ps-site-footer-brand-meta text-sm leading-snug text-[#F8FAFC]">
              AI nutrition and fitness tracking
              <br />
              A LumexForge product
            </p>
            <FooterStoreButtons />
          </div>

          <div className="ps-site-footer-col">
            <p className="ps-site-footer-col-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#00E6A8]">
              Product
            </p>
            <ul className="ps-site-footer-links text-sm text-[#94A3B8]">
              <li>
                <Link href={psHref("/features")} className="transition-colors hover:text-[#00E6A8]">
                  Features
                </Link>
              </li>
              <li>
                <Link href={psHref("/how-it-works")} className="transition-colors hover:text-[#00E6A8]">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href={psHref("/blog")} className="transition-colors hover:text-[#00E6A8]">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="ps-site-footer-col">
            <p className="ps-site-footer-col-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#00E6A8]">
              Free tools
            </p>
            <ul className="ps-site-footer-links text-sm text-[#94A3B8]">
              <li>
                <Link href={psHref("/protein-calculator")} className="transition-colors hover:text-[#00E6A8]">
                  Protein Calculator
                </Link>
              </li>
              <li>
                <Link href={psHref("/calorie-calculator")} className="transition-colors hover:text-[#00E6A8]">
                  Calorie Calculator
                </Link>
              </li>
              <li>
                <Link href={psHref("/macro-calculator")} className="transition-colors hover:text-[#00E6A8]">
                  Macro Calculator
                </Link>
              </li>
            </ul>
          </div>

          <div className="ps-site-footer-col">
            <p className="ps-site-footer-col-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#00E6A8]">
              Legal
            </p>
            <ul className="ps-site-footer-links text-sm text-[#94A3B8]">
              <li>
                <a
                  href={PROTEINSNAPS.lumexforgeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#00E6A8]"
                >
                  LumexForge.com
                </a>
              </li>
              <li>
                <a
                  href={PROTEINSNAPS.privacyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#00E6A8]"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href={PROTEINSNAPS.termsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#00E6A8]"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href={PROTEINSNAPS.deletionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#00E6A8]"
                >
                  Delete Account
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="ps-divider" />
        <div className="flex flex-col gap-2 pt-4 text-left sm:flex-row sm:items-center sm:justify-between">
          <p className="ps-site-footer-copyright !mt-0 text-left">
            © {year} LumexForge. All rights reserved.
          </p>
          <a
            href={`mailto:${PROTEINSNAPS.contactEmail}`}
            className="text-sm text-[#00E6A8] transition-colors hover:text-[#00e6a8]"
          >
            {PROTEINSNAPS.contactEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}
