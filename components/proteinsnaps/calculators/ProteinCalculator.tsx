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
import {
  ErrorBox,
  ProteinCalcButton,
  ProteinGlassCard,
  ProteinInlineField,
  ProteinRangeRing,
  ProteinResultColorTiles,
  RangeBarProtein,
  SoftNote,
} from './Parts';
import { proteinGlass, PROTEIN_CTA_PHONE_SRC, ui } from './ui';

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
          className={`${proteinGlass.toggleBtn} ${value === u ? `${proteinGlass.toggleOn} ${proteinGlass.inputSelected}` : proteinGlass.toggleOff}`}
          onClick={() => onChange(u)}
        >
          {u}
        </button>
      ))}
    </div>
  );
}

function ActivityPills({ level, onChange }: { level: Level; onChange: (l: Level) => void }) {
  return (
    <div className="relative z-[1] grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2">
      <label
        className={`${proteinGlass.pill} ${level === 'rda' ? `${proteinGlass.pillOn} ${proteinGlass.inputSelected}` : ''}`}
        title="Not regularly exercising (general adult baseline)"
      >
        <input
          className="sr-only"
          type="radio"
          name="level"
          checked={level === 'rda'}
          onChange={() => onChange('rda')}
        />
        Not regularly exercising (general adult baseline)
      </label>
      <label
        className={`${proteinGlass.pill} ${level === 'active' ? `${proteinGlass.pillOn} ${proteinGlass.inputSelected}` : ''}`}
        title="Exercising regularly (strength, cardio or classes)"
      >
        <input
          className="sr-only"
          type="radio"
          name="level"
          checked={level === 'active'}
          onChange={() => onChange('active')}
        />
        Exercising regularly (strength, cardio or classes)
      </label>
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
        <label
          key={g.id}
          className={`${proteinGlass.pill} ${goal === g.id && visible ? `${proteinGlass.pillOn} ${proteinGlass.inputSelected}` : ''}`}
        >
          <input
            className="sr-only"
            type="radio"
            name="goal"
            checked={goal === g.id}
            disabled={!visible}
            onChange={() => onChange(g.id)}
          />
          {g.label}
        </label>
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
    <section className={ui.stack}>
      <ProteinGlassCard tint="mint">
        <form onSubmit={calculate} className={proteinGlass.cardPad}>
          <h2 className={proteinGlass.cardTitle}>Your Details</h2>

          <div className="mt-3 hidden lg:block">
            <div className="grid grid-cols-[7.5rem_minmax(9rem,11rem)_minmax(0,1fr)] items-end gap-3">
              <ProteinUnitToggle value={unit} onChange={setUnit} />
              <WeightField unit={unit} weight={weight} onWeightChange={setWeight} />
              <ActivityPills level={level} onChange={setLevel} />
            </div>
            <div className="mt-3 grid grid-cols-[1fr_auto] items-end gap-3">
              <GoalPills goal={goal} onChange={setGoal} visible={goalsVisible} />
              <ProteinCalcButton>Calculate Protein</ProteinCalcButton>
            </div>
          </div>

          <div className="mt-3 grid gap-3 lg:hidden">
            <div className="grid gap-3 min-[480px]:grid-cols-2 min-[480px]:items-end">
              <ProteinUnitToggle value={unit} onChange={setUnit} />
              <WeightField unit={unit} weight={weight} onWeightChange={setWeight} />
            </div>
            <ActivityPills level={level} onChange={setLevel} />
            <GoalPills goal={goal} onChange={setGoal} visible={goalsVisible} />
            {error ? <ErrorBox>{error}</ErrorBox> : null}
            <ProteinCalcButton>Calculate Protein</ProteinCalcButton>
          </div>

          {error ? (
            <div className="mt-3 hidden lg:block">
              <ErrorBox>{error}</ErrorBox>
            </div>
          ) : null}
        </form>
      </ProteinGlassCard>

      {result ? (
        <>
          <ProteinGlassCard tint="cyan">
            <div ref={resultRef} className={proteinGlass.cardPad} aria-live="polite">
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
          </ProteinGlassCard>
          <AppCta
            glass
            phoneSrc={PROTEIN_CTA_PHONE_SRC}
            headline="Track this every day with ProteinSnaps."
            text="Snap a photo of your meal for an estimate of protein, macros and calories, scan packaged food barcodes, and let Fill the Gap show what's left for the day."
          />
        </>
      ) : null}
    </section>
  );
}
