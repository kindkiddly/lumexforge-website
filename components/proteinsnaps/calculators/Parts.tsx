import Image from 'next/image';
import type { ReactNode } from 'react';
import { ui } from './ui';

const svg = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;
export const CalcIcon = () => (<svg {...svg}><rect x="5" y="3" width="14" height="18" rx="2.5" /><path d="M9 7.5h6M9 12h.01M12 12h.01M15 12h.01M9 16h.01M12 16h.01M15 16h.01" /></svg>);
export const ArrowIcon = () => (<svg {...svg} width={16} height={16}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
export const WarnIcon = () => (<svg {...svg} width={18} height={18} className="shrink-0"><path d="M12 3 2.5 20h19L12 3z" /><path d="M12 10v5M12 18h.01" /></svg>);
export const InfoIcon = () => (<svg {...svg} width={16} height={16} className="shrink-0"><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>);
const small = { ...svg, width: 18, height: 18 } as const;
export const UserIcon = () => (<svg {...small}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" /></svg>);
export const RulerIcon = () => (<svg {...small}><path d="M3 17 17 3l4 4L7 21l-4-4z" /><path d="m7 13 2 2M10 10l2 2M13 7l2 2" /></svg>);
export const ScaleIcon = () => (<svg {...small}><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M8 9a4 4 0 0 1 8 0M12 9l2-2" /></svg>);
export const FlameIcon = () => (<svg {...small}><path d="M12 3c1 4 5 6 5 11a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-4-1-6 1-10z" /></svg>);
export const TargetIcon = () => (<svg {...small}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /></svg>);
export const PieIcon = () => (<svg {...small}><path d="M12 3v9h9a9 9 0 1 1-9-9z" /><path d="M16 3.5A9 9 0 0 1 20.5 8H16V3.5z" /></svg>);
export const BoltIcon = () => (<svg {...small}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" /></svg>);
const Chevron = () => (<svg {...svg} width={18} height={18} className="shrink-0 text-[#00B386] transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg>);

export function CalcHero({ title, intro, image, alt }: { title: string; intro: string; image: string; alt: string }) {
  return (
    <header className={ui.hero}>
      <div className={ui.heroGrid}>
        <div>
          <h1 className={ui.h1}>{title}</h1>
          <p className={ui.lead}>{intro}</p>
        </div>
        <div className={ui.heroImage}>
          <Image src={image} alt={alt} fill priority sizes="(min-width: 768px) 40vw, 0px" className="object-cover" />
        </div>
      </div>
    </header>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className={ui.faq}>
      {items.map(f => (
        <details key={f.q} className={ui.faqItem}>
          <summary className={ui.faqSummary}>{f.q}<Chevron /></summary>
          <p className={ui.faqAnswer}>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function Field({ label, icon, children }: { label: string; icon: ReactNode; children: ReactNode }) {
  return (
    <label className={ui.label}>{label}
      <span className={ui.fieldWrap}><span className={ui.fieldIcon}>{icon}</span>{children}</span>
    </label>
  );
}

export function ResultLabel({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (<p className={ui.resultLabel}><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00E6A8]/20">{icon}</span>{children}</p>);
}

export function StatChip({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (<div className={ui.chip}><span className={ui.badge}>{icon}</span><div><p className={ui.chipLabel}>{label}</p><p className={ui.chipValue}>{value}</p></div></div>);
}

export function CalcButton({ children }: { children: ReactNode }) {
  return (<button type="submit" className={ui.button}><CalcIcon />{children}<ArrowIcon /></button>);
}

export function ErrorBox({ children }: { children: ReactNode }) {
  return (<p role="alert" className={ui.error}><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-red-700"><WarnIcon /></span><span>{children}</span></p>);
}

export function SoftNote({ children }: { children: ReactNode }) {
  return (<p className={ui.softNote}><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#00B386]/30 bg-[#00E6A8]/15 text-[#00B386]"><InfoIcon /></span><span>{children}</span></p>);
}

export function Placeholder() {
  return (
    <div className={ui.placeholder}>
      <span className={ui.placeholderIcon}><CalcIcon /></span>
      <p>Enter your details to see your result</p>
    </div>
  );
}

export function PillButtons<T extends string | number>({ value, onChange, options, label }: { value: T; onChange: (v: T) => void; options: { value: T; label: string }[]; label: string }) {
  return (
    <div className={ui.pillGroup} role="group" aria-label={label}>
      {options.map(o => (
        <button key={String(o.value)} type="button" aria-pressed={value === o.value}
          className={`${ui.pill} ${value === o.value ? ui.pillOn : ''}`} onClick={() => onChange(o.value)}>{o.label}</button>
      ))}
    </div>
  );
}

/** Plain SVG range bar: low at the left end, high at the right end of the mint-to-cyan bar. */
export function RangeBar({ lo, hi }: { lo: number; hi: number }) {
  return (
    <div>
      <div className={ui.barTrack}><div className={ui.barFill} /><span className={ui.barDot} /></div>
      <div className={ui.barLabels}><span>{lo} g</span><span>{hi} g</span></div>
    </div>
  );
}

const DONUT = { protein: '#00E6A8', carbs: '#00C2FF', fat: '#00785A' } as const;
export const MACRO_COLOR = DONUT;

/** Plain SVG donut. Segment sizes follow the grams-based percentages passed in. */
export function Donut({ pPct, cPct, fPct, center, caption }: { pPct: number; cPct: number; fPct: number; center: string; caption: string }) {
  const total = pPct + cPct + fPct || 1;
  const segs = [
    { v: pPct, c: DONUT.protein }, { v: cPct, c: DONUT.carbs }, { v: fPct, c: DONUT.fat },
  ];
  let offset = 25;
  return (
    <svg viewBox="0 0 42 42" className="mx-auto h-44 w-44 sm:h-52 sm:w-52" role="img" aria-label={`Protein ${pPct}%, carbs ${cPct}%, fat ${fPct}%`}>
      <circle cx="21" cy="21" r="15.9155" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="5" />
      {segs.map((s, i) => {
        const len = (s.v / total) * 100;
        const el = <circle key={i} cx="21" cy="21" r="15.9155" fill="none" stroke={s.c} strokeWidth="5" strokeDasharray={`${Math.max(len - 0.6, 0)} ${100 - Math.max(len - 0.6, 0)}`} strokeDashoffset={offset} />;
        offset -= len;
        return el;
      })}
      <text x="21" y="21.5" textAnchor="middle" className="fill-[#1A1A1A] font-serif" style={{ fontSize: 6.5, fontWeight: 600 }}>{center}</text>
      <text x="21" y="27" textAnchor="middle" className="fill-[#555555]" style={{ fontSize: 2.8 }}>{caption}</text>
    </svg>
  );
}
