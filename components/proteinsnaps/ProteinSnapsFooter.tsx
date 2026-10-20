"use client";

import { useProteinSnapsPath } from "@/components/proteinsnaps/ProteinSnapsPathContext";
import { PROTEINSNAPS } from "@/lib/proteinsnaps/constants";
import Link from "next/link";

const STORE_BTN_CLASS =
  "box-border !inline-flex h-[52px] w-[168px] min-h-[52px] max-h-[52px] min-w-[168px] max-w-[168px] shrink-0 grow-0 basis-[168px] items-center gap-2 rounded-lg border border-[#888888]/45 bg-black px-2.5 transition-opacity hover:opacity-90";

/** Apple logo paths from the official App Store badge SVG in /public/images/proteinsnaps/badges/ */
function AppleLogo() {
  return (
    <svg viewBox="17 8 12 16" className="h-[26px] w-[22px] shrink-0" aria-hidden>
      <path
        fill="#ffffff"
        d="M24.76888,20.30068a4.94881,4.94881,0,0,1,2.35656-4.15206,5.06566,5.06566,0,0,0-3.99116-2.15768c-1.67924-.17626-3.30719,1.00483-4.1629,1.00483-.87227,0-2.18977-.98733-3.6085-.95814a5.31529,5.31529,0,0,0-4.47292,2.72787c-1.934,3.34842-.49141,8.26947,1.3612,10.97608.9269,1.32535,2.01018,2.8058,3.42763,2.7533,1.38706-.05753,1.9051-.88448,3.5794-.88448,1.65876,0,2.14479.88448,3.591.8511,1.48838-.02416,2.42613-1.33124,3.32051-2.66914a10.962,10.962,0,0,0,1.51842-3.09251A4.78205,4.78205,0,0,1,24.76888,20.30068Z"
      />
      <path
        fill="#ffffff"
        d="M22.03725,12.21089a4.87248,4.87248,0,0,0,1.11452-3.49062,4.95746,4.95746,0,0,0-3.20758,1.65961,4.63634,4.63634,0,0,0-1.14371,3.36139A4.09905,4.09905,0,0,0,22.03725,12.21089Z"
      />
    </svg>
  );
}

/** Google Play mark (four-color triangle, same geometry as the official badge) */
function GooglePlayLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-[26px] w-[26px] shrink-0" aria-hidden>
      <path
        fill="#4285F4"
        d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5Z"
      />
      <path fill="#34A853" d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12Z" />
      <path fill="#FBBC04" d="M3.84,2.15C3.34,2.39 3,2.91 3,3.5V12L14.54,12.85L3.84,2.15Z" />
      <path
        fill="#EA4335"
        d="M16.81,8.88L20.16,10.96C20.67,11.24 21,11.77 21,12.35C21,12.93 20.67,13.46 20.16,13.74L16.81,15.82L14.54,13.55L16.81,11.28V8.88Z"
      />
    </svg>
  );
}

function FooterStoreButtons() {
  return (
    <div className="mt-2 flex w-max max-w-full flex-nowrap items-center gap-3">
      <a href={PROTEINSNAPS.appStoreUrl} target="_blank" rel="noopener noreferrer" className={STORE_BTN_CLASS}>
        <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center">
          <AppleLogo />
        </span>
        <span className="min-w-0 flex-1 text-left leading-tight text-white">
          <span className="block text-[9px] font-normal tracking-wide">Download on the</span>
          <span className="block text-[15px] font-semibold leading-none">App Store</span>
        </span>
      </a>
      <a href={PROTEINSNAPS.playStoreUrl} target="_blank" rel="noopener noreferrer" className={STORE_BTN_CLASS}>
        <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center">
          <GooglePlayLogo />
        </span>
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
