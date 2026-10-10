"use client";

import { useProteinSnapsPath } from "@/components/proteinsnaps/ProteinSnapsPathContext";
import { PROTEINSNAPS, PROTEINSNAPS_NAV } from "@/lib/proteinsnaps/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function ProteinSnapsNavbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { href: psHref } = useProteinSnapsPath();
  const activePath = pathname.replace(/^\/proteinsnaps/, "") || "/";

  return (
    <header className="ps-site-navbar fixed inset-x-0 top-0 border-b border-black/[0.08]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={psHref("/")} className="group flex shrink-0 items-center">
          <span className="inline-flex overflow-hidden rounded-[9px] shadow-[0_4px_12px_rgba(0,0,0,0.35),0_1px_3px_rgba(0,0,0,0.25)]">
            <Image
              src="/images/proteinsnaps/ProteinSnaps.webp"
              alt={PROTEINSNAPS.name}
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
              priority
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          <Link
            href={psHref("/")}
            className={cn(
              "ps-nav-link rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              activePath === "/"
                ? "active text-[#00B386]"
                : "text-[#1A1A1A] hover:text-[#00E6A8]"
            )}
          >
            Home
          </Link>
          {PROTEINSNAPS_NAV.map((link) => {
            const active = activePath === link.href;
            return (
              <Link
                key={link.href}
                href={psHref(link.href)}
                className={cn(
                  "ps-nav-link rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "active text-[#00B386]"
                    : "text-[#1A1A1A] hover:text-[#00E6A8]"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <a
            href={PROTEINSNAPS.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ps-play-button inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold text-[#0A0A0A]"
          >
            Download
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-[#1A1A1A] hover:bg-black/[0.05] hover:text-[#1A1A1A] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-black/[0.08] bg-[#F2EDE4] lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
              <Link
                href={psHref("/")}
                onClick={() => setOpen(false)}
                className={cn(
                  "ps-nav-link rounded-lg px-3 py-3 text-base font-medium transition-colors",
                  activePath === "/"
                    ? "active text-[#00B386]"
                    : "text-[#1A1A1A] hover:text-[#00E6A8]"
                )}
              >
                Home
              </Link>
              {PROTEINSNAPS_NAV.map((link) => {
                const active = activePath === link.href;
                return (
                  <Link
                    key={link.href}
                    href={psHref(link.href)}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "ps-nav-link rounded-lg px-3 py-3 text-base font-medium transition-colors",
                      active
                        ? "active text-[#00B386]"
                        : "text-[#1A1A1A] hover:text-[#00E6A8]"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href={PROTEINSNAPS.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ps-nav-mobile-play-button ps-play-button mt-2 rounded-full px-5 py-3 text-center text-sm font-semibold"
              >
                Download on Google Play
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
