'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useId, type ReactNode } from 'react';
import { useProteinSnapsPath } from '@/components/proteinsnaps/ProteinSnapsPathContext';
import type { Goal } from './energyMath';
import type { Level, ProteinGoal } from './proteinMath';
import { proteinGlass, ui } from './ui';

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

export const MealIcon = () => (
  <svg {...svg} width={22} height={22}>
    <path d="M4 11h16M4 7h16M4 15h10" />
    <circle cx="18" cy="15" r="2" />
  </svg>
);

export const ScaleIcon = () => (
  <svg {...svg} width={22} height={22}>
    <path d="M12 3v18M5 8l7-5 7 5M5 16l7 5 7-5" />
  </svg>
);

export const HeartGoalIcon = () => (
  <svg {...svg} width={20} height={20} fill="currentColor" stroke="none">
    <path d="M12 21s-6.5-4.35-9-8.35C1.05 9.5 2.5 5 6.5 5c2.1 0 3.35 1.1 4 2.1.65-1 1.9-2.1 4-2.1 4 0 5.45 4.5 3.5 7.65C18.5 16.65 12 21 12 21z" />
  </svg>
);

export const DumbbellGoalIcon = () => (
  <svg {...svg} width={20} height={20}>
    <path d="M6 9H4a2 2 0 00-2 2v2a2 2 0 002 2h2M18 9h2a2 2 0 012 2v2a2 2 0 01-2 2h-2M8 12h8" />
  </svg>
);

export const FlameGoalIcon = () => (
  <svg {...svg} width={20} height={20}>
    <path d="M12 3c1 3 3 4.5 3 7a3 3 0 11-6 0c0-2.5 2-4 3-7z" />
  </svg>
);

function FactorGauge({ lo, hi }: { lo: number; hi: number }) {
  const min = 0.8;
  const max = 2.2;
  const span = max - min;
  const left = ((lo - min) / span) * 100;
  const width = Math.max(((hi - lo) / span) * 100, hi === lo ? 4 : 2);
  return (
    <div className="mt-3">
      <div className="relative h-2 w-full rounded-full bg-black/[0.08]">
        <div
          className="absolute inset-y-0 rounded-full bg-gradient-to-r from-[#00C2FF] to-[#00B386]"
          style={{ left: `${left}%`, width: `${width}%` }}
        />
      </div>
      <div className="mt-1 flex justify-between text-[9px] font-medium text-[#555555]">
        <span>0.8</span>
        <span>2.2 g/kg</span>
      </div>
    </div>
  );
}

function MealDots({ meal }: { meal: number }) {
  const filled = meal >= 30 ? 4 : meal >= 22 ? 3 : meal >= 15 ? 2 : 1;
  return (
    <div className="mt-3 flex gap-1.5" aria-hidden>
      {[1, 2, 3, 4].map(i => (
        <span
          key={i}
          className={`h-2.5 w-2.5 rounded-full ${i <= filled ? 'bg-[#00B386]' : 'bg-black/[0.08]'}`}
        />
      ))}
    </div>
  );
}

function factorMeta(
  level: Level,
  age65: boolean,
  goal: ProteinGoal,
  factorLo: number,
  factorHi: number,
): { label: string; source?: string } {
  if (level === 'rda') {
    if (age65) return { label: '1.0–1.2 g/kg', source: 'PROT-AGE 2013' };
    return { label: '0.8 g/kg' };
  }
  if (factorLo === factorHi) return { label: `${factorLo} g/kg`, source: 'ProteinSnaps app setting' };
  if (goal === 'build') return { label: '1.6–2.2 g/kg', source: 'Morton et al. 2018' };
  return { label: '1.4–2.0 g/kg', source: 'ISSN 2017' };
}

function goalMeta(goal: ProteinGoal): {
  title: string;
  source: string;
  Icon: () => React.JSX.Element;
} {
  if (goal === 'build') {
    return { title: 'Build muscle', source: 'Morton et al. 2018', Icon: DumbbellGoalIcon };
  }
  if (goal === 'fatloss') {
    return {
      title: 'Fat loss',
      source: 'ProteinSnaps app setting',
      Icon: FlameGoalIcon,
    };
  }
  return { title: 'General fitness', source: 'ISSN 2017', Icon: HeartGoalIcon };
}

export function ProteinResultColorTiles({
  meal,
  level,
  age65,
  goal,
  factorLo,
  factorHi,
}: {
  meal: number;
  level: Level;
  age65: boolean;
  goal: ProteinGoal;
  factorLo: number;
  factorHi: number;
}) {
  const factor = factorMeta(level, age65, goal, factorLo, factorHi);
  const showGoal = level === 'active';
  const goalInfo = goalMeta(goal);

  return (
    <div
      className={`${proteinGlass.resultTileGrid} ${showGoal ? '' : 'lg:max-w-2xl lg:grid-cols-2'}`}
    >
      <div className={proteinGlass.resultTileMint}>
        <div className="flex gap-3">
          <div className={proteinGlass.resultTileIconMint}>
            <MealIcon />
          </div>
          <div className="min-w-0 flex-1">
            <p className={ui.chipLabel}>Per meal (about 0.25 g/kg)</p>
            <p className={`${ui.chipValue} mt-0.5`}>~{meal} g</p>
            <MealDots meal={meal} />
          </div>
        </div>
      </div>
      <div className={proteinGlass.resultTileCyan}>
        <div className="flex gap-3">
          <div className={proteinGlass.resultTileIconCyan}>
            <ScaleIcon />
          </div>
          <div className="min-w-0 flex-1">
            <p className={ui.chipLabel}>Factor used</p>
            <p className="mt-0.5 font-serif text-xl font-semibold text-[#1A1A1A] sm:text-2xl">
              {factor.label}
            </p>
            {factor.source ? (
              <p className="mt-1 text-[10px] font-medium text-[#555555]">{factor.source}</p>
            ) : null}
            <FactorGauge lo={factorLo} hi={factorHi} />
          </div>
        </div>
      </div>
      {showGoal ? (
        <div className={`${proteinGlass.resultTileGreen} min-[480px]:col-span-2 lg:col-span-1`}>
          <div className="flex gap-3">
            <div className={proteinGlass.resultTileIconGreen}>
              <goalInfo.Icon />
            </div>
            <div className="min-w-0 flex-1">
              <p className={ui.chipLabel}>Goal</p>
              <p className="mt-0.5 font-serif text-xl font-semibold text-[#1A1A1A]">
                {goalInfo.title}
              </p>
              <p className="mt-1 text-[10px] font-medium text-[#555555]">{goalInfo.source}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
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

/* ── Protein page only (glass) ── */

export function ProteinGlassBackdrop() {
  return (
    <div className={proteinGlass.blobWrap} aria-hidden>
      <div className={`${proteinGlass.blobMint} -left-24 top-32 h-72 w-72 md:h-96 md:w-96`} />
      <div className={`${proteinGlass.blobCyan} right-[-4rem] top-[28rem] h-80 w-80 md:right-[-2rem]`} />
      <div className={`${proteinGlass.blobMint} bottom-48 left-[20%] h-64 w-64 opacity-80`} />
      <div className={`${proteinGlass.blobCyan} bottom-[8rem] right-[15%] h-56 w-56 opacity-90`} />
    </div>
  );
}

export function ProteinGlassCard({
  children,
  className = '',
  tint = 'mint',
}: {
  children: ReactNode;
  className?: string;
  tint?: 'mint' | 'cyan';
}) {
  const glow = tint === 'cyan' ? proteinGlass.cardGlowCyan : proteinGlass.cardGlow;
  return (
    <div className={`${proteinGlass.cardGlowWrap} ${className}`}>
      <div className={glow} aria-hidden />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}

export function ProteinRangeRing({ lo, hi }: { lo: number; hi: number }) {
  const gradId = useId();
  const cap = Math.max(hi, lo, 1) * 1.35;
  const same = lo === hi;
  const startPct = lo / cap;
  const endPct = same ? lo / cap : hi / cap;
  const arcPct = Math.max((endPct - startPct) * 100, same ? (lo / cap) * 100 : 2);
  const gap = 100 - arcPct;
  const offset = 25 - startPct * 100;
  const center = same ? `${lo} g` : `${lo}–${hi} g`;
  return (
    <svg
      viewBox="0 0 42 42"
      className="h-36 w-36 shrink-0 sm:h-40 sm:w-40"
      role="img"
      aria-label={`Daily protein ${center}`}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00E6A8" />
          <stop offset="100%" stopColor="#00C2FF" />
        </linearGradient>
      </defs>
      <circle
        cx="21"
        cy="21"
        r="15.9155"
        fill="none"
        stroke="rgba(0,0,0,0.06)"
        strokeWidth="4.5"
      />
      <circle
        cx="21"
        cy="21"
        r="15.9155"
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeDasharray={`${arcPct} ${gap}`}
        strokeDashoffset={offset}
      />
      <text
        x="21"
        y="20"
        textAnchor="middle"
        className="fill-[#1A1A1A] font-serif"
        style={{ fontSize: same ? 5.5 : 4.8, fontWeight: 600 }}
      >
        {center}
      </text>
      <text
        x="21"
        y="26.5"
        textAnchor="middle"
        className="fill-[#555555]"
        style={{ fontSize: 2.6 }}
      >
        per day
      </text>
    </svg>
  );
}

export function ProteinResultStatTiles({
  meal,
  factorLabel,
}: {
  meal: number;
  factorLabel: string;
}) {
  return (
    <div className={proteinGlass.chipRow}>
      <div className={proteinGlass.resultTile}>
        <div className={proteinGlass.resultTileIcon}>
          <MealIcon />
        </div>
        <div className="min-w-0">
          <p className={ui.chipLabel}>Per meal (about 0.25 g/kg)</p>
          <p className={`${ui.chipValue} mt-0.5`}>~{meal} g</p>
        </div>
      </div>
      <div className={proteinGlass.resultTile}>
        <div className={proteinGlass.resultTileIcon}>
          <ScaleIcon />
        </div>
        <div className="min-w-0">
          <p className={ui.chipLabel}>Factor used</p>
          <p className={`${ui.chipValue} mt-0.5 text-xl sm:text-2xl`}>{factorLabel}</p>
        </div>
      </div>
    </div>
  );
}

export function ProteinCalcHero({
  badge,
  titleBefore,
  titleMint,
  intro,
  chips,
}: {
  badge: string;
  titleBefore: string;
  titleMint: string;
  intro: string;
  chips: string[];
}) {
  return (
    <header className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(220px,340px)] lg:items-center lg:gap-10">
      <div>
        <p className={proteinGlass.heroBadge}>{badge}</p>
        <h1 className={`${ui.h1} mt-4`}>
          {titleBefore}
          <span className={ui.h1Mint}>{titleMint}</span>
        </h1>
        <p className={ui.lead}>{intro}</p>
        <div className={proteinGlass.heroChipGrid}>
          {chips.map(c => (
            <span key={c} className={proteinGlass.heroChip}>
              {c}
            </span>
          ))}
        </div>
      </div>
      <div className={proteinGlass.heroImageWrap}>
        <Image
          src="/images/proteinsnaps/calculators/protein-bowl.webp"
          alt="Protein-rich meal bowl with chicken, grains and vegetables"
          width={680}
          height={680}
          className={proteinGlass.heroImage}
          priority
        />
      </div>
    </header>
  );
}

export function ProteinInlineField({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`relative block ${className ?? ''}`}>
      <span className={proteinGlass.fieldLabel}>{label}</span>
      {children}
    </label>
  );
}

export function ProteinCalcButton({ children }: { children: ReactNode }) {
  return (
    <button type="submit" className={proteinGlass.button}>
      {children}
      <ArrowIcon />
    </button>
  );
}

export function ProteinGlassFeatureCards() {
  return (
    <div className={ui.featureGrid}>
      {FEATURES.map((f, i) => (
        <ProteinGlassCard key={f.title} tint={i % 2 ? 'cyan' : 'mint'}>
          <div className={proteinGlass.featureCard}>
            <div className={ui.featureIcon}>{f.icon}</div>
            <p className={ui.featureTitle}>{f.title}</p>
            <p className={`${ui.body} mt-2`}>{f.text}</p>
          </div>
        </ProteinGlassCard>
      ))}
    </div>
  );
}

export function ProteinGlassFaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <ProteinGlassCard tint="cyan">
    <div className={proteinGlass.faq}>
      {items.map(f => (
        <details key={f.q} className={proteinGlass.faqItem}>
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
    </ProteinGlassCard>
  );
}

export function ProteinGlassMoreFreeTools() {
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
        const here = t.id === 'protein';
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
        return (
          <ProteinGlassCard key={t.id} tint={t.id === 'calorie' ? 'cyan' : 'mint'}>
            {here ? (
              <div className={`${proteinGlass.toolCard} ${proteinGlass.toolCardHere}`}>{inner}</div>
            ) : (
              <Link href={t.href} className={proteinGlass.toolCard}>
                {inner}
              </Link>
            )}
          </ProteinGlassCard>
        );
      })}
    </div>
  );
}
