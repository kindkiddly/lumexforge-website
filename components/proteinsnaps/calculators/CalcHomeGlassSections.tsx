'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { useProteinSnapsPath } from '@/components/proteinsnaps/ProteinSnapsPathContext';
import { textWithBrandName } from '@/components/proteinsnaps/calculators/BrandName';
import { ArrowIcon, CALC_FEATURE_CARDS } from './Parts';
import { calcGlass, ui } from './ui';

const homeFeatureGrid =
  'mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6';

export type CalcToolId = 'protein' | 'calorie' | 'macro';

function HomeGlassPanel({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`ps-glass-panel ps-3d-card rounded-2xl p-5 sm:p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CalcHomeGlassFeatures() {
  return (
    <section className="calc-home-glass mt-10 sm:mt-12">
      <div className="text-center">
        <div
          className={`ps-calc-glass-intro ${calcGlass.featuresIntro} mx-auto w-full max-w-2xl px-5 py-4 text-left sm:text-center`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00e6a8]">
            In the app
          </p>
          <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-[#1A1A1A] sm:text-3xl">
            Keep your numbers on track
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#555555] sm:text-base">
            From AI meal scanning to workout tracking, ProteinSnaps helps you hit your macro targets
            day to day.
          </p>
        </div>
      </div>
      <div className={`${homeFeatureGrid} calc-home-glass-features`}>
        {CALC_FEATURE_CARDS.map(f => (
          <article
            key={f.title}
            className="ps-home-feature-card ps-3d-card flex h-full flex-col rounded-2xl p-5 sm:p-6"
          >
            <div className={ui.featureIcon}>{f.icon}</div>
            <h3 className="ps-home-feature-card-title mt-4 font-serif text-lg font-semibold text-[#1A1A1A]">
              {f.title}
            </h3>
            <p className={`${ui.body} mt-2 flex-1`}>{f.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function CalcHomeGlassPanel({ children }: { children: ReactNode }) {
  return <HomeGlassPanel className="mt-6">{children}</HomeGlassPanel>;
}

function FaqChevron() {
  return (
    <svg
      className={ui.faqChevron}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function CalcHomeGlassFaq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <HomeGlassPanel className="mt-6 overflow-hidden !p-0">
      <div className="divide-y divide-black/[0.06]">
        {items.map(f => (
          <details key={f.q} className={ui.faqItem}>
            <summary className={ui.faqSummary}>
              {f.q}
              <span className={ui.faqChevron}>
                <FaqChevron />
              </span>
            </summary>
            <p className={ui.faqAnswer}>{textWithBrandName(f.a)}</p>
          </details>
        ))}
      </div>
    </HomeGlassPanel>
  );
}

export function CalcHomeGlassSources({ children }: { children: ReactNode }) {
  return <HomeGlassPanel className="mt-6">{children}</HomeGlassPanel>;
}

export function CalcHomeGlassTools({ current }: { current: CalcToolId }) {
  const { href: psHref } = useProteinSnapsPath();
  const tools = [
    {
      id: 'protein' as const,
      href: psHref('/protein-calculator'),
      title: 'Protein Calculator',
      desc: 'Your daily protein range in grams.',
    },
    {
      id: 'calorie' as const,
      href: psHref('/calorie-calculator'),
      title: 'Calorie Calculator',
      desc: 'BMR, TDEE and a target for your goal.',
    },
    {
      id: 'macro' as const,
      href: psHref('/macro-calculator'),
      title: 'Macro Calculator',
      desc: 'Protein, carbs and fat for your goal.',
    },
  ];
  return (
    <div className={`${homeFeatureGrid} calc-home-glass-tools`}>
      {tools.map(t => {
        const here = t.id === current;
        const inner = (
          <>
            <p className="ps-home-feature-card-title text-base font-semibold text-[#1A1A1A]">
              {t.title}
            </p>
            <p className={`${ui.note} mt-2 flex-1`}>{t.desc}</p>
            <p className="mt-3 text-sm font-semibold text-[#00B386]">
              {here ? (
                <span className="text-[#555555]">You are here</span>
              ) : (
                <span className="inline-flex items-center gap-1">
                  Open <ArrowIcon />
                </span>
              )}
            </p>
          </>
        );
        return here ? (
          <article
            key={t.id}
            className="ps-home-feature-card ps-3d-card flex h-full flex-col rounded-2xl p-5 sm:p-6"
          >
            {inner}
          </article>
        ) : (
          <Link
            key={t.id}
            href={t.href}
            className="ps-home-feature-card ps-3d-card flex h-full flex-col rounded-2xl p-5 sm:p-6 transition-transform"
          >
            {inner}
          </Link>
        );
      })}
    </div>
  );
}
