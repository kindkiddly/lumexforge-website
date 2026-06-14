"use client";

import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/[0.06] bg-background/85 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav
          className="flex h-16 items-center justify-between lg:h-[4.5rem]"
          aria-label="Main navigation"
        >
          <Logo size="md" />

          <div className="hidden items-center gap-1 md:flex">
            <div className="flex items-center rounded-full border border-white/[0.06] bg-white/[0.03] p-1 backdrop-blur-sm">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300",
                      isActive
                        ? "text-foreground"
                        : "text-foreground-secondary hover:text-foreground"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-white/[0.08]"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </div>
            <Button href="/contact" size="sm" className="ml-4">
              Get In Touch
            </Button>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-foreground transition-colors hover:bg-white/[0.06] md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-16 z-40 bg-background/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 right-0 top-full border-b border-white/[0.06] bg-background/95 backdrop-blur-2xl md:hidden"
            >
              <Container className="py-6">
                <div className="flex flex-col gap-1">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                        pathname === link.href
                          ? "bg-white/[0.06] text-foreground"
                          : "text-foreground-secondary hover:bg-white/[0.04] hover:text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <Button href="/contact" className="mt-6 w-full">
                  Get In Touch
                </Button>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
