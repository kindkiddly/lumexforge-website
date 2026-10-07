"use client";

import { useProteinSnapsPath } from "@/components/proteinsnaps/ProteinSnapsPathContext";
import { PROTEINSNAPS } from "@/lib/proteinsnaps/constants";
import Link from "next/link";

export function ProteinSnapsFooter() {
  const { href: psHref } = useProteinSnapsPath();
  return (
    <footer className="ps-site-footer">
      <div className="ps-site-footer-inner mx-auto max-w-7xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-serif text-xl font-semibold text-[#F8FAFC]">
              Protein<span className="text-[#00e6a8]">Snaps</span>
            </p>
            <p className="mt-1.5 text-sm leading-snug text-[#F8FAFC]">
              AI nutrition and fitness tracking, made simple.
            </p>
            <p className="mt-1.5 text-sm leading-snug text-[#F8FAFC]">A LumexForge product</p>
            <p className="mt-1.5 leading-snug">
              <a
                href={`mailto:${PROTEINSNAPS.contactEmail}`}
                className="whitespace-nowrap text-[13px] text-[#00E6A8] transition-colors hover:text-[#00e6a8]"
              >
                {PROTEINSNAPS.contactEmail}
              </a>
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00E6A8]">
              Product
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[#94A3B8]">
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

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00E6A8]">
              Legal
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[#94A3B8]">
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
        <p className="ps-site-footer-copyright text-center">
          © {new Date().getFullYear()} LumexForge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
