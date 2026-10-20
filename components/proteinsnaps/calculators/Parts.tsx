'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { useProteinSnapsPath } from '@/components/proteinsnaps/ProteinSnapsPathContext';
import type { Goal } from './energyMath';
import { ui } from './ui';

const svg = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
} as const;

export const ArrowIcon = () => (
  <svg {...svg} width={18} height={18}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const WarnIcon = () => (
  <svg {...svg} width={18} height={18} className="shrink-0">
    <path d="M12 3 2.5 20h19L12 3z" />
    <path d="M12 10v5M12 18h.01" />
  </svg>
);
export const InfoIcon = () => (
  <svg {...svg} width={16} height={16} className="shrink-0">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5M12 8h.01" />
  </svg>
);
export const DocIcon = () => (
  <svg {...svg} width={16} height={16} className="shrink-0 text-[#00B386]">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
  </svg>
);
const Chevron = () => (
  <svg {...svg} width={16} height={16}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export function CalcHero({
  badge,
  titleBefore,
  titleMint,
  titleAfter,
  intro,
  chips,
}: {
  badge: string;
  titleBefore: string;
  titleMint: string;
  titleAfter?: string;
  intro: string;
  chips: string[];
}) {
  return (
    <header>
      <p className={ui.badge}>{badge}</p>
      <h1 className={`${ui.h1} mt-4`}>
        {titleBefore}
        <span className={ui.h1Mint}>{titleMint}</span>
        {titleAfter}
      </h1>
      <p className={ui.lead}>{intro}</p>
      <div className={ui.heroChips}>
        {chips.map(c => (
          <span key={c} className={ui.heroChip}>
            {c}
          </span>
        ))}
      </div>
    </header>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className={ui.faq}>
      {items.map(f => (
        <details key={f.q} className={ui.faqItem}>
          <summary className={ui.faqSummary}>
            {f.q}
            <span className={ui.faqChevron}>
              <Chevron />
            </span>
          </summary>
          <p className={ui.faqAnswer}>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function InlineField({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`${ui.field} block ${className ?? ''}`}>
      <span className={ui.fieldLabel}>{label}</span>
      {children}
    </label>
  );
}

export function CalcButton({ children }: { children: ReactNode }) {
  return (
    <button type="submit" className={ui.button}>
      {children}
      <ArrowIcon />
    </button>
  );
}

export function ErrorBox({ children }: { children: ReactNode }) {
  return (
    <p role="alert" className={ui.error}>
      <WarnIcon />
      <span>{children}</span>
    </p>
  );
}

export function SoftNote({ children }: { children: ReactNode }) {
  return (
    <p className={ui.softNote}>
      <InfoIcon />
      <span>{children}</span>
    </p>
  );
}

export function PillButtons<T extends string | number>({
  value,
  onChange,
  options,
  label,
  equalWidth,
}: {
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
  label: string;
  equalWidth?: boolean;
}) {
  return (
    <div
      className={equalWidth ? ui.pillEqual : ui.pillRow}
      role="group"
      aria-label={label}
    >
      {options.map(o => (
        <button
          key={String(o.value)}
          type="button"
          aria-pressed={value === o.value}
          className={`${ui.pill} ${value === o.value ? ui.pillOn : ''}`}
          onClick={() => onChange(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function RangeBarProtein({
  lo,
  hi,
  rda,
}: {
  lo: number;
  hi: number;
  rda: number;
}) {
  const min = Math.min(rda, lo) * 0.85;
  const max = Math.max(hi, rda) * 1.15;
  const pct = (v: number) => `${((v - min) / (max - min)) * 100}%`;
  const same = lo === hi;
  return (
    <div className="mt-6">
      <div className="relative h-2 w-full rounded-full bg-black/[0.06]">
        {!same && (
          <div
            className="absolute inset-y-0 rounded-full bg-gradient-to-r from-[#00E6A8] to-[#00C2FF]"
            style={{ left: pct(lo), right: `${100 - parseFloat(pct(hi))}%` }}
          />
        )}
        {same && (
          <div
            className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white bg-[#00B386]"
            style={{ left: pct(lo) }}
          />
        )}
        <span
          className="absolute -top-8 -translate-x-1/2 rounded-md bg-[#1A1A1A] px-2 py-0.5 text-xs font-semibold text-white"
          style={{ left: pct(lo) }}
        >
          {lo} g
        </span>
        {!same && (
          <span
            className="absolute -top-8 -translate-x-1/2 rounded-md bg-[#1A1A1A] px-2 py-0.5 text-xs font-semibold text-white"
            style={{ left: pct(hi) }}
          >
            {hi} g
          </span>
        )}
      </div>
      <div className="relative mt-6 h-6 text-xs text-[#555555]">
        <span
          className="absolute -translate-x-1/2 whitespace-nowrap"
          style={{ left: pct(rda) }}
        >
          RDA {rda} g
        </span>
        {!same && (
          <span className="absolute right-0 whitespace-nowrap">
            ISSN {lo}–{hi} g
          </span>
        )}
      </div>
    </div>
  );
}

const DONUT = { protein: '#00B386', carbs: '#00C2FF', fat: '#00785A' } as const;
export const MACRO_COLOR = DONUT;

export function Donut({
  pPct,
  cPct,
  fPct,
  center,
  caption,
}: {
  pPct: number;
  cPct: number;
  fPct: number;
  center: string;
  caption: string;
}) {
  const total = pPct + cPct + fPct || 1;
  const segs = [
    { v: pPct, c: DONUT.protein },
    { v: cPct, c: DONUT.carbs },
    { v: fPct, c: DONUT.fat },
  ];
  let offset = 25;
  return (
    <svg
      viewBox="0 0 42 42"
      className="mx-auto h-44 w-44 sm:h-48 sm:w-48"
      role="img"
      aria-label={`Protein ${pPct}%, carbs ${cPct}%, fat ${fPct}%`}
    >
      <circle
        cx="21"
        cy="21"
        r="15.9155"
        fill="none"
        stroke="rgba(0,0,0,0.06)"
        strokeWidth="5"
      />
      {segs.map((s, i) => {
        const len = (s.v / total) * 100;
        const el = (
          <circle
            key={i}
            cx="21"
            cy="21"
            r="15.9155"
            fill="none"
            stroke={s.c}
            strokeWidth="5"
            strokeDasharray={`${Math.max(len - 0.6, 0)} ${100 - Math.max(len - 0.6, 0)}`}
            strokeDashoffset={offset}
          />
        );
        offset -= len;
        return el;
      })}
      <text
        x="21"
        y="20.5"
        textAnchor="middle"
        className="fill-[#1A1A1A] font-serif"
        style={{ fontSize: 6.5, fontWeight: 600 }}
      >
        {center}
      </text>
      <text
        x="21"
        y="27"
        textAnchor="middle"
        className="fill-[#555555]"
        style={{ fontSize: 2.8 }}
      >
        {caption}
      </text>
    </svg>
  );
}

export function MacroBars({
  cols,
}: {
  cols: { name: string; pct: number; g: number; color: string }[];
}) {
  return (
    <div className={ui.macroBarRow}>
      {cols.map(c => (
        <div key={c.name}>
          <div className={ui.macroBarHead}>
            <span className="font-semibold text-[#1A1A1A]">{c.name}</span>
            <span className="text-sm text-[#555555]">
              {c.g} g ({c.pct}%)
            </span>
          </div>
          <div className={ui.macroBarTrack}>
            <div
              className="h-full rounded-full"
              style={{ width: `${Math.min(c.pct, 100)}%`, background: c.color }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function gaugeAngle(v: number, min: number, max: number) {
  const t = (v - min) / (max - min);
  return 180 - Math.max(0, Math.min(1, t)) * 180;
}

export function CalorieGauge({
  bmr,
  tdee,
  low,
  high,
  goal,
  belowBmr,
}: {
  bmr: number;
  tdee: number;
  low: number;
  high: number;
  goal: Goal;
  belowBmr: boolean;
}) {
  const target = goal === 'recomp' ? tdee : low;
  const min = Math.min(bmr, low, tdee) - 150;
  const max = Math.max(bmr, high, tdee) + 150;
  const cx = 100;
  const cy = 95;
  const r = 72;
  const pt = (deg: number) => {
    const rad = (deg * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy - r * Math.sin(rad) };
  };
  const arc = (a0: number, a1: number, color: string, sw = 10) => {
    const p0 = pt(a0);
    const p1 = pt(a1);
    const large = a0 - a1 > 180 ? 1 : 0;
    return (
      <path
        d={`M ${p0.x} ${p0.y} A ${r} ${r} 0 ${large} 0 ${p1.x} ${p1.y}`}
        fill="none"
        stroke={color}
        strokeWidth={sw}
        strokeLinecap="round"
      />
    );
  };
  const marker = (value: number, color: string, label: string) => {
    const deg = gaugeAngle(value, min, max);
    const p = pt(deg);
    const outerR = r + 14;
    const rad = (deg * Math.PI) / 180;
    const ox = cx + outerR * Math.cos(rad);
    const oy = cy - outerR * Math.sin(rad);
    return (
      <g key={label}>
        <circle cx={p.x} cy={p.y} r={5} fill="white" stroke={color} strokeWidth={2.5} />
        <text
          x={ox}
          y={oy}
          textAnchor="middle"
          className="fill-[#555555] text-[9px] font-medium"
        >
          {label}
        </text>
      </g>
    );
  };
  const bmrDeg = gaugeAngle(bmr, min, max);
  const tdeeDeg = gaugeAngle(tdee, min, max);
  const targetDeg = gaugeAngle(target, min, max);
  const arcColor = belowBmr ? '#e57373' : '#00B386';
  const baseStart = Math.min(bmrDeg, tdeeDeg);
  const baseEnd = Math.max(bmrDeg, tdeeDeg);

  return (
    <div className="mx-auto w-full max-w-[280px]">
      <svg viewBox="0 0 200 120" className="w-full" role="img" aria-label="Calorie gauge">
        <path
          d={`M ${pt(180).x} ${pt(180).y} A ${r} ${r} 0 0 0 ${pt(0).x} ${pt(0).y}`}
          fill="none"
          stroke="rgba(0,0,0,0.08)"
          strokeWidth={10}
          strokeLinecap="round"
        />
        {arc(baseEnd, baseStart, '#00C2FF', 10)}
        {goal === 'recomp' &&
          arc(gaugeAngle(tdee + 100, min, max), gaugeAngle(tdee - 100, min, max), '#00E6A8', 12)}
        {goal !== 'recomp' &&
          arc(
            Math.max(targetDeg, baseStart),
            Math.min(targetDeg, baseEnd),
            arcColor,
            12,
          )}
        {marker(bmr, '#00785A', 'BMR')}
        {marker(tdee, '#00C2FF', 'TDEE')}
        {marker(
          goal === 'recomp' ? tdee : low,
          belowBmr ? '#c62828' : '#1A1A1A',
          'Your target',
        )}
      </svg>
      <div className="mt-2 flex flex-wrap justify-center gap-3 text-[10px] text-[#555555]">
        <span className="inline-flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-[#00785A]" />
          BMR
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-[#1A1A1A]" />
          Your Target
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-[#00C2FF]" />
          TDEE
        </span>
      </div>
    </div>
  );
}

const FEATURES = [
  {
    title: 'AI meal photo estimates',
    text: 'Snap a photo of your meal for an estimate of protein, macros and calories.',
    icon: (
      <svg {...svg} className="h-5 w-5">
        <path d="M4 7h16M4 12h16M4 17h10" />
      </svg>
    ),
  },
  {
    title: 'Barcode scanner',
    text: 'Scan packaged food barcodes to log them in seconds.',
    icon: (
      <svg {...svg} className="h-5 w-5">
        <path d="M4 4h4v16H4zM10 4h2v16h-2zM16 4h4v16h-4z" />
      </svg>
    ),
  },
  {
    title: 'Fill the Gap',
    text: "See what's left of your protein and macros for the day.",
    icon: (
      <svg {...svg} className="h-5 w-5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
] as const;

export function FeatureCards() {
  return (
    <div className={ui.featureGrid}>
      {FEATURES.map(f => (
        <div key={f.title} className={ui.featureCard}>
          <div className={ui.featureIcon}>{f.icon}</div>
          <p className={ui.featureTitle}>{f.title}</p>
          <p className={`${ui.body} mt-2`}>{f.text}</p>
        </div>
      ))}
    </div>
  );
}

export function MoreFreeTools({ current }: { current: 'protein' | 'calorie' | 'macro' }) {
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
    <div className={ui.toolsGrid}>
      {tools.map(t => {
        const here = t.id === current;
        const inner = (
          <>
            <p className="font-serif text-base font-semibold text-[#1A1A1A]">{t.title}</p>
            <p className={`${ui.note} mt-1 flex-1`}>{t.desc}</p>
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
          <div key={t.id} className={`${ui.toolCard} ${ui.toolCardHere}`}>
            {inner}
          </div>
        ) : (
          <Link key={t.id} href={t.href} className={ui.toolCard}>
            {inner}
          </Link>
        );
      })}
    </div>
  );
}

export function SourceLinks({ children }: { children: ReactNode }) {
  return <ul className={ui.sources}>{children}</ul>;
}

export function SourceItem({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li>
      <a className={ui.sourceLink} href={href} rel="noopener noreferrer">
        <DocIcon />
        {children}
      </a>
    </li>
  );
}
