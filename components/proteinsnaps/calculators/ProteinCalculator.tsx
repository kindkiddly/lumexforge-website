'use client';

import { useRef, useState } from 'react';
import { LB_TO_KG } from './energyMath';
import {
  DEFAULT_WEIGHT_UNIT,
  WEIGHT_PLACEHOLDER,
  proteinRange,
  type Level,
  type ProteinGoal,
  type WeightUnit,
} from './proteinMath';
import AppCta from './AppCta';
import { BrandName } from './BrandName';
import { MintCalcSubmit } from './MintCalcForm';
import {
  ErrorBox,
  ProteinInlineField,
  ProteinRangeRing,
  ProteinResultColorTiles,
  RangeBarProtein,
  SoftNote,
} from './Parts';
import { MintGlassDropdown } from './MintGlassDropdown';
import { calcMint, proteinGlass, PROTEIN_CTA_PHONE_SRC, ui } from './ui';

function IconActivity({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
      <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const LEVEL_DROPDOWN_OPTIONS = [
  {
    value: 'rda' as const,
    label: 'Not regularly exercising (general adult baseline)',
  },
  {
    value: 'active' as const,
    label: 'Exercising regularly (strength, cardio or classes)',
  },
];

function ProteinUnitToggle({
  value,
  onChange,
}: {
  value: WeightUnit;
  onChange: (v: WeightUnit) => void;
}) {
  return (
    <div className={proteinGlass.toggle} role="group" aria-label="Units">
      {(['lb', 'kg'] as WeightUnit[]).map(u => (
        <button
          key={u}
          type="button"
          aria-pressed={value === u}
          className={`${proteinGlass.toggleBtn} ${value === u ? `${proteinGlass.toggleOn} ${proteinGlass.optionBtnSelected}` : proteinGlass.toggleOff}`}
          onClick={() => onChange(u)}
        >
          {u}
        </button>
      ))}
    </div>
  );
}

const GOALS: { id: ProteinGoal; label: string }[] = [
  { id: 'general', label: 'General fitness' },
  { id: 'build', label: 'Build muscle' },
  { id: 'fatloss', label: 'Fat loss' },
];

function GoalPills({
  goal,
  onChange,
  visible,
}: {
  goal: ProteinGoal;
  onChange: (g: ProteinGoal) => void;
  visible: boolean;
}) {
  return (
    <div
      className={`relative z-[1] ${proteinGlass.goalFade} grid grid-cols-1 gap-2 min-[480px]:grid-cols-3 ${visible ? '' : proteinGlass.goalHidden}`}
      aria-hidden={!visible}
    >
      {GOALS.map(g => (
        <button
          key={g.id}
          type="button"
          disabled={!visible}
          aria-pressed={goal === g.id}
          className={`${proteinGlass.optionBtn} ${goal === g.id && visible ? proteinGlass.optionBtnSelected : ''}`}
          onClick={() => onChange(g.id)}
        >
          {g.label}
        </button>
      ))}
    </div>
  );
}

function WeightField({
  unit,
  weight,
  onWeightChange,
}: {
  unit: WeightUnit;
  weight: string;
  onWeightChange: (v: string) => void;
}) {
  return (
    <div className="relative z-[1] min-w-0">
      <p className={proteinGlass.ageNote}>For adults under 65</p>
      <ProteinInlineField label={`Body weight (${unit})`}>
        <input
          className={proteinGlass.input}
          type="number"
          inputMode="decimal"
          value={weight}
          onChange={e => onWeightChange(e.target.value)}
          placeholder={WEIGHT_PLACEHOLDER[unit]}
          required
        />
      </ProteinInlineField>
    </div>
  );
}

type ResultState = {
  lo: number;
  hi: number;
  meal: number;
  factorLo: number;
  factorHi: number;
};

export default function ProteinCalculator() {
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState<WeightUnit>(DEFAULT_WEIGHT_UNIT);
  const [level, setLevel] = useState<Level>('active');
  const [goal, setGoal] = useState<ProteinGoal>('general');
  const [result, setResult] = useState<null | ResultState>(null);
  const [error, setError] = useState('');
  const resultRef = useRef<HTMLDivElement>(null);

  function calculate(e: React.FormEvent) {
    e.preventDefault();
    const r = proteinRange(parseFloat(weight), unit, level, { age65: false, goal });
    if ('error' in r) {
      setResult(null);
      setError(r.error);
      return;
    }
    setError('');
    setResult(r);
    requestAnimationFrame(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  const w = parseFloat(weight);
  const kg = unit === 'lb' ? w * LB_TO_KG : w;
  const rda = Number.isFinite(kg) ? Math.round(kg * 0.8) : 0;
  const goalsVisible = level === 'active';

  return (
    <section className={calcMint.section}>
      <div className={calcMint.cardGlowWrap}>
        <div className={calcMint.cardGlow} aria-hidden />
        <form onSubmit={calculate} className={calcMint.card}>
          <h2 className={`${calcMint.cardTitle} mb-4 border-b border-white/40 pb-4`}>
            <span className={calcMint.cardTitleIcon} aria-hidden>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
                <path d="M12 3v18M3 12h18" strokeLinecap="round" />
              </svg>
            </span>
            Your details
          </h2>

          <div className="flex flex-col gap-4">
            <div className="grid gap-3 min-[480px]:grid-cols-[7.5rem_minmax(0,1fr)] min-[480px]:items-end lg:max-w-md">
              <ProteinUnitToggle value={unit} onChange={setUnit} />
              <WeightField unit={unit} weight={weight} onWeightChange={setWeight} />
            </div>
            <MintGlassDropdown
              icon={<IconActivity className="h-5 w-5" />}
              label="Activity"
              listLabel="Exercise level"
              value={level}
              options={LEVEL_DROPDOWN_OPTIONS}
              onChange={setLevel}
            />
            <GoalPills goal={goal} onChange={setGoal} visible={goalsVisible} />
            {error ? <ErrorBox>{error}</ErrorBox> : null}
            <MintCalcSubmit>Calculate Protein</MintCalcSubmit>
          </div>
        </form>
      </div>

      {result ? (
        <>
          <div
            ref={resultRef}
            className="ps-glass-panel ps-3d-card rounded-2xl p-5 sm:p-6 lg:p-8"
            aria-live="polite"
          >
              <p className={ui.resultLabel}>Your daily protein</p>
              <p className={ui.big}>
                {result.lo === result.hi ? result.lo : `${result.lo}–${result.hi}`}{' '}
                <span className={ui.bigSuffix}>g</span>
              </p>
              <p className={ui.resultLine}>protein per day</p>

              <div className="mt-4 flex justify-center lg:hidden">
                <ProteinRangeRing lo={result.lo} hi={result.hi} />
              </div>

              <div className={proteinGlass.resultSplit}>
                <div className="min-w-0">
                  <RangeBarProtein lo={result.lo} hi={result.hi} rda={rda} />
                  <ProteinResultColorTiles
                    meal={result.meal}
                    level={level}
                    age65={false}
                    goal={goal}
                    factorLo={result.factorLo}
                    factorHi={result.factorHi}
                  />
                  {level === 'active' && (
                    <p className={ui.resultLine}>
                      Spread across meals, roughly {result.meal} g per meal (about 0.25 g/kg; ISSN
                      suggests 20–40 g per dose).
                    </p>
                  )}
                  <SoftNote>
                    An estimate for healthy adults, not medical advice. If you are pregnant,
                    breastfeeding, have kidney disease or another condition, talk to your doctor or a
                    registered dietitian.
                  </SoftNote>
                </div>
                <div className="hidden shrink-0 justify-center lg:flex lg:items-center">
                  <ProteinRangeRing lo={result.lo} hi={result.hi} />
                </div>
              </div>
          </div>
          <AppCta
            glass
            offerGlass
            phoneSrc={PROTEIN_CTA_PHONE_SRC}
            headline={
              <>
                Track this every day with <BrandName />.
              </>
            }
            text="Snap a photo of your meal for an estimate of protein, macros and calories, scan packaged food barcodes, and let Fill the Gap show what's left for the day."
          />
        </>
      ) : null}
    </section>
  );
}
