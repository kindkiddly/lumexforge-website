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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#050811]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={psHref("/")} className="group flex items-center gap-2.5">
          <Image
            src="/images/proteinsnaps/ProteinSnaps.webp"
            alt={PROTEINSNAPS.name}
            width={140}
            height={36}
            className="h-8 w-auto sm:h-9"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {PROTEINSNAPS_NAV.map((link) => {
            const active = activePath === link.href;
            return (
              <Link
                key={link.href}
                href={psHref(link.href)}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-[#00E6A8]"
                    : "text-white/70 hover:text-white"
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
            className="ps-play-button inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold"
          >
            Download
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-white/70 hover:bg-white/[0.05] hover:text-white lg:hidden"
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
            className="overflow-hidden border-t border-white/[0.06] lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
              {PROTEINSNAPS_NAV.map((link) => (
                <Link
                  key={link.href}
                  href={psHref(link.href)}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-white/70 hover:bg-white/[0.04] hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={PROTEINSNAPS.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ps-play-button mt-2 rounded-full px-5 py-3 text-center text-sm font-semibold"
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
