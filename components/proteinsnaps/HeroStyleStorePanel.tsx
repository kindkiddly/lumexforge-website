"use client";

import { PROTEINSNAPS } from "@/lib/proteinsnaps/constants";
import QRCode from "react-qr-code";

/**
 * Exact ProteinSnaps homepage hero store panel (buttons + QR).
 * Used by the bottom “Start Tracking Smarter Today” CTA on all pages.
 */
export function HeroStyleStorePanel() {
  return (
    <div className="ps-hero-desktop-store">
      <div className="flex items-start gap-5">
        <div className="flex flex-col items-center">
          <a
            href={PROTEINSNAPS.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ps-hero-desktop-btn ps-hero-desktop-play inline-flex w-[11.5rem] items-center justify-center gap-1.5 rounded-full text-[#00E6A8]"
          >
            <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a1.006 1.006 0 01-.61-.92V2.734a1.006 1.006 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1.002 1.002 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
            </svg>
            Get it on Google Play
          </a>
          <div className="ps-hero-qr-android mt-3 rounded bg-white p-1">
            <QRCode
              value={PROTEINSNAPS.playStoreUrl}
              size={80}
              bgColor="#ffffff"
              fgColor="#050811"
              level="M"
            />
          </div>
          <p className="ps-hero-desktop-scan mt-1.5 text-center text-white/55">Scan for Android</p>
        </div>

        <div className="flex flex-col items-center">
          <a
            href={PROTEINSNAPS.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ps-hero-desktop-btn ps-hero-desktop-appstore inline-flex w-[11.5rem] items-center justify-center gap-1.5 rounded-full text-white"
          >
            <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on the App Store
          </a>
          <div className="ps-hero-qr-ios mt-3 rounded bg-white p-1">
            <QRCode
              value={PROTEINSNAPS.appStoreUrl}
              size={80}
              bgColor="#ffffff"
              fgColor="#050811"
              level="M"
            />
          </div>
          <p className="ps-hero-desktop-scan mt-1.5 text-center text-white/55">Available</p>
        </div>
      </div>
    </div>
  );
}
