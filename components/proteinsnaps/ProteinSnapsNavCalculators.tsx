"use client";

import { useProteinSnapsPath } from "@/components/proteinsnaps/ProteinSnapsPathContext";
import {
  PROTEINSNAPS_CALCULATOR_NAV,
  PROTEINSNAPS_CALCULATOR_PATHS,
} from "@/lib/proteinsnaps/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

function CalcMenuLinks({
  activePath,
  onNavigate,
  className,
}: {
  activePath: string;
  onNavigate?: () => void;
  className?: string;
}) {
  const { href: psHref } = useProteinSnapsPath();

  return (
    <ul className={cn("m-0 list-none p-0", className)}>
      {PROTEINSNAPS_CALCULATOR_NAV.map((item) => {
        const active = activePath === item.href;
        return (
          <li key={item.href}>
            <Link
              href={psHref(item.href)}
              onClick={onNavigate}
              className={cn(
                "block rounded-lg px-3 py-2.5 transition-colors hover:bg-white/70",
                active && "bg-[#00E6A8]/12",
              )}
            >
              <span
                className={cn(
                  "block text-sm font-semibold",
                  active ? "text-[#008B7D]" : "text-[#1A1A1A]",
                )}
              >
                {item.label}
              </span>
              <span className="mt-0.5 block text-xs leading-snug text-[#666666]">
                {item.description}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function ProteinSnapsNavCalculatorsDesktop({
  activePath,
}: {
  activePath: string;
}) {
  const calcActive = (PROTEINSNAPS_CALCULATOR_PATHS as readonly string[]).includes(activePath);

  return (
    <div className="group relative">
      <button
        type="button"
        className={cn(
          "ps-nav-link inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
          calcActive ? "active text-[#00B386]" : "text-[#1A1A1A] hover:text-[#00E6A8]",
        )}
        aria-haspopup="true"
        aria-expanded={false}
      >
        Calculator
        <svg
          className="h-4 w-4 opacity-70 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden
        >
          <path d="m6 9 6 6 6-6" strokeLinecap="round" />
        </svg>
      </button>
      <div className="pointer-events-none invisible absolute left-0 top-full z-[100] w-[min(100vw-2rem,17.5rem)] pt-2 opacity-0 transition-[opacity,visibility] duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
        <div className="ps-glass-panel ps-3d-card rounded-xl border border-white/80 p-2 shadow-[0_12px_40px_rgba(0,139,125,0.16)] backdrop-blur-[20px]">
          <p className="px-3 pb-1 pt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#00A88E]">
            Free tools
          </p>
          <CalcMenuLinks activePath={activePath} />
        </div>
      </div>
    </div>
  );
}

export function ProteinSnapsNavCalculatorsMobile({
  activePath,
  onNavigate,
}: {
  activePath: string;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const calcActive = (PROTEINSNAPS_CALCULATOR_PATHS as readonly string[]).includes(activePath);

  return (
    <div className="rounded-lg">
      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        className={cn(
          "ps-nav-link flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium transition-colors",
          calcActive ? "active text-[#00B386]" : "text-[#1A1A1A] hover:text-[#00E6A8]",
        )}
        aria-expanded={expanded}
      >
        Calculator
        <svg
          className={cn("h-5 w-5 opacity-70 transition-transform", expanded && "rotate-180")}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden
        >
          <path d="m6 9 6 6 6-6" strokeLinecap="round" />
        </svg>
      </button>
      {expanded ? (
        <div className="ps-glass-panel ps-3d-card mx-1 mb-1 mt-1 rounded-xl border border-white/75 p-2 shadow-[0_8px_24px_rgba(0,139,125,0.12)]">
          <CalcMenuLinks activePath={activePath} onNavigate={onNavigate} />
        </div>
      ) : null}
    </div>
  );
}
