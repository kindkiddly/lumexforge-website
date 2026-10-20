"use client";

import { useProteinSnapsPath } from "@/components/proteinsnaps/ProteinSnapsPathContext";
import { PROTEINSNAPS } from "@/lib/proteinsnaps/constants";
import Image from "next/image";
import Link from "next/link";

const FOOTER_BADGE_W = 120;
const FOOTER_BADGE_H = 40;

function FooterStoreButtons() {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-3">
      <a
        href={PROTEINSNAPS.appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-[7.5rem] items-center justify-center leading-none"
      >
        <Image
          src="/images/proteinsnaps/badges/app-store.svg"
          alt="Download on the App Store"
          width={FOOTER_BADGE_W}
          height={FOOTER_BADGE_H}
          className="h-[34px] w-[104px] max-w-full object-contain object-left"
          unoptimized
        />
      </a>
      <a
        href={PROTEINSNAPS.playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-[7.5rem] items-center justify-center leading-none"
      >
        <Image
          src="/images/proteinsnaps/badges/google-play.png"
          alt="Get it on Google Play"
          width={FOOTER_BADGE_W}
          height={FOOTER_BADGE_H}
          className="h-10 w-full object-contain object-left"
        />
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
