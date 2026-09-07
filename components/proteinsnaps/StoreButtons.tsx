"use client";

import { PROTEINSNAPS } from "@/lib/proteinsnaps/constants";
import QRCode from "react-qr-code";

interface StoreButtonsProps {
  size?: "md" | "lg";
  showQr?: boolean;
  className?: string;
}

export function StoreButtons({ size = "md", showQr = true, className }: StoreButtonsProps) {
  const btnClass =
    size === "lg"
      ? "px-8 py-4 text-base min-h-[52px]"
      : "px-6 py-3 text-sm min-h-[48px]";

  return (
    <div className={className}>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <a
          href={PROTEINSNAPS.playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`ps-glow-button inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#00e6a8]/40 bg-[#00e6a8]/10 font-medium text-[#00e6a8] transition-all hover:bg-[#00e6a8]/20 sm:w-auto ${btnClass}`}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M3.609 1.814L13.792 12 3.61 22.186a1.006 1.006 0 01-.61-.92V2.734a1.006 1.006 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1.002 1.002 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
          </svg>
          Get it on Google Play
        </a>
        <span
          className={`inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] font-medium text-foreground-muted sm:w-auto ${btnClass}`}
          aria-disabled="true"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          App Store — Coming Soon
        </span>
      </div>

      {showQr && (
        <div className="mt-6 hidden md:block">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-foreground-muted">
            Scan to download
          </p>
          <div className="inline-block rounded-xl border border-[#00e6a8]/20 bg-white p-3 ps-glow-frame">
            <QRCode
              value={PROTEINSNAPS.playStoreUrl}
              size={120}
              bgColor="#ffffff"
              fgColor="#050811"
              level="M"
            />
          </div>
        </div>
      )}
    </div>
  );
}
