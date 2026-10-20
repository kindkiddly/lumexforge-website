import Image from 'next/image';
import type { ReactNode } from 'react';
import { ui } from './ui';

const svg = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;
export const CalcIcon = () => (<svg {...svg}><rect x="5" y="3" width="14" height="18" rx="2.5" /><path d="M9 7.5h6M9 12h.01M12 12h.01M15 12h.01M9 16h.01M12 16h.01M15 16h.01" /></svg>);
export const ArrowIcon = () => (<svg {...svg} width={16} height={16}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
export const WarnIcon = () => (<svg {...svg} className="mt-0.5 shrink-0"><path d="M12 3 2.5 20h19L12 3z" /><path d="M12 10v5M12 18h.01" /></svg>);
export const InfoIcon = () => (<svg {...svg} width={18} height={18} className="mt-0.5 shrink-0 text-[#00B386]"><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>);
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

export function CalcButton({ children }: { children: ReactNode }) {
  return (<button type="submit" className={ui.button}><CalcIcon />{children}<ArrowIcon /></button>);
}

export function ErrorBox({ children }: { children: ReactNode }) {
  return (<p role="alert" className={ui.error}><WarnIcon /><span>{children}</span></p>);
}

export function SoftNote({ children }: { children: ReactNode }) {
  return (<p className={ui.softNote}><InfoIcon /><span>{children}</span></p>);
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
      <div className={ui.barTrack}><div className={ui.barFill} /></div>
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
