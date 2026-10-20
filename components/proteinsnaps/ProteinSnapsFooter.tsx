"use client";

import { useProteinSnapsPath } from "@/components/proteinsnaps/ProteinSnapsPathContext";
import { PROTEINSNAPS } from "@/lib/proteinsnaps/constants";
import Link from "next/link";

const STORE_BTN_CLASS =
  "box-border !inline-flex h-[52px] w-[168px] min-h-[52px] max-h-[52px] min-w-[168px] max-w-[168px] shrink-0 grow-0 basis-[168px] items-center gap-2 rounded-lg border border-[#888888]/45 bg-black px-2.5 transition-opacity hover:opacity-90";

function AppleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0 fill-white" aria-hidden>
      <path d="M17.05 20.28c-.96.95-2.1 1.72-3.4 1.72-1.3 0-2.45-.77-3.4-1.72-1.9-1.88-3.05-4.46-3.05-7.28 0-2.82 1.15-5.4 3.05-7.28.95-.95 2.1-1.72 3.4-1.72s2.45.77 3.4 1.72c1.9 1.88 3.05 4.46 3.05 7.28 0 2.82-1.15 5.4-3.05 7.28zM12.03 3.5c.73-.88 1.22-2.1 1.08-3.5-1.04.04-2.3.72-3.05 1.6-.68.78-1.27 2.02-1.11 3.22 1.18.09 2.38-.6 3.08-1.32z" />
    </svg>
  );
}

function GooglePlayLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" aria-hidden>
      <path fill="#EA4335" d="M3.6 2.4 13.2 12 3.6 21.6a1.2 1.2 0 0 1-1.2-1.04V3.44A1.2 1.2 0 0 1 3.6 2.4z" />
      <path fill="#FBBC04" d="M14.4 10.8 18.6 8.1a1.2 1.2 0 0 1 1.92.96v7.88a1.2 1.2 0 0 1-1.92.96l-4.2-2.7-2.4-1.44z" />
      <path fill="#4285F4" d="M14.4 13.2 16.8 14.64 18.6 15.9 14.4 18.6 12 17.16z" />
      <path fill="#34A853" d="M3.6 2.4 12 9.6l2.4-1.44L14.4 10.8 3.6 21.6V3.44z" />
    </svg>
  );
}

function FooterStoreButtons() {
  return (
    <div className="mt-2 flex w-max max-w-full flex-nowrap items-center gap-3">
      <a href={PROTEINSNAPS.appStoreUrl} target="_blank" rel="noopener noreferrer" className={STORE_BTN_CLASS}>
        <AppleLogo />
        <span className="min-w-0 flex-1 text-left leading-tight text-white">
          <span className="block text-[9px] font-normal tracking-wide">Download on the</span>
          <span className="block text-[15px] font-semibold leading-none">App Store</span>
        </span>
      </a>
      <a href={PROTEINSNAPS.playStoreUrl} target="_blank" rel="noopener noreferrer" className={STORE_BTN_CLASS}>
        <GooglePlayLogo />
        <span className="min-w-0 flex-1 text-left leading-tight text-white">
          <span className="block text-[9px] font-normal uppercase tracking-wide">Get it on</span>
          <span className="block text-[15px] font-semibold leading-none">Google Play</span>
        </span>
      </a>
    </div>
  );
}

export function ProteinSnapsFooter() {
  const { href: psHref } = useProteinSnapsPath();
  const year = new Date().getFullYear();
  return (
    <footer className="ps-site-footer !shadow-none !py-5 !pt-6 !pb-3 sm:!px-6 lg:!px-8">
      <div className="ps-site-footer-inner mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="ps-site-footer-grid !grid-cols-1 !gap-y-5 sm:!grid-cols-2 lg:!grid-cols-[1.35fr_1fr_1fr_1fr] lg:!gap-x-8 lg:!gap-y-4">
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

        <div className="ps-divider !mt-3" />
        <div className="flex flex-col gap-1.5 pt-2 text-left sm:flex-row sm:items-center sm:justify-between">
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
