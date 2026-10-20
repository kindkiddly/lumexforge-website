'use client';

import { useRef, useState } from 'react';
import { LB_TO_KG } from './energyMath';
import {
  DEFAULT_WEIGHT_UNIT,
  WEIGHT_PLACEHOLDER,
  proteinRange,
  type Level,
  type WeightUnit,
} from './proteinMath';
import AppCta from './AppCta';
import {
  ErrorBox,
  ProteinCalcButton,
  ProteinInlineField,
  RangeBarProtein,
  SoftNote,
} from './Parts';
import { proteinGlass, ui } from './ui';

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
          className={`${proteinGlass.toggleBtn} ${value === u ? proteinGlass.toggleOn : proteinGlass.toggleOff}`}
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
    <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-2">
      <label className={`${proteinGlass.pill} ${level === 'rda' ? proteinGlass.pillOn : ''}`}>
        <input
          className="sr-only"
          type="radio"
          name="level"
          checked={level === 'rda'}
          onChange={() => onChange('rda')}
        />
        Not regularly exercising (general adult baseline)
      </label>
      <label className={`${proteinGlass.pill} ${level === 'active' ? proteinGlass.pillOn : ''}`}>
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

export default function ProteinCalculator() {
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState<WeightUnit>(DEFAULT_WEIGHT_UNIT);
  const [level, setLevel] = useState<Level>('active');
  const [result, setResult] = useState<null | { lo: number; hi: number; meal: number }>(null);
  const [error, setError] = useState('');
  const resultRef = useRef<HTMLDivElement>(null);

  function calculate(e: React.FormEvent) {
    e.preventDefault();
    const r = proteinRange(parseFloat(weight), unit, level);
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
  const factorLabel = level === 'active' ? '1.4–2.0 g/kg' : '0.8 g/kg';

  return (
    <section className={ui.stack}>
      <form onSubmit={calculate} className={proteinGlass.cardPad}>
        <h2 className={proteinGlass.cardTitle}>Your Details</h2>

        <div className="mt-3 hidden lg:grid lg:grid-cols-[7.5rem_minmax(9rem,11rem)_minmax(0,1fr)_auto] lg:items-end lg:gap-3">
          <ProteinUnitToggle value={unit} onChange={setUnit} />
          <ProteinInlineField label={`Body weight (${unit})`}>
            <input
              className={proteinGlass.input}
              type="number"
              inputMode="decimal"
              value={weight}
              onChange={e => setWeight(e.target.value)}
              placeholder={WEIGHT_PLACEHOLDER[unit]}
              required
            />
          </ProteinInlineField>
          <ActivityPills level={level} onChange={setLevel} />
          <ProteinCalcButton>Calculate Protein</ProteinCalcButton>
        </div>

        <div className="mt-3 grid gap-3 lg:hidden md:grid-cols-2 md:items-end">
          <ProteinUnitToggle value={unit} onChange={setUnit} />
          <ProteinInlineField label={`Body weight (${unit})`}>
            <input
              className={proteinGlass.input}
              type="number"
              inputMode="decimal"
              value={weight}
              onChange={e => setWeight(e.target.value)}
              placeholder={WEIGHT_PLACEHOLDER[unit]}
              required
            />
          </ProteinInlineField>
          <div className="md:col-span-2">
            <ActivityPills level={level} onChange={setLevel} />
          </div>
          {error ? (
            <div className="md:col-span-2">
              <ErrorBox>{error}</ErrorBox>
            </div>
          ) : null}
          <div className="md:col-span-2">
            <ProteinCalcButton>Calculate Protein</ProteinCalcButton>
          </div>
        </div>

        {error ? (
          <div className="mt-3 hidden lg:block">
            <ErrorBox>{error}</ErrorBox>
          </div>
        ) : null}
      </form>

      {result ? (
        <>
          <div ref={resultRef} className={proteinGlass.cardPad} aria-live="polite">
            <p className={ui.resultLabel}>Your daily protein</p>
            <p className={ui.big}>
              {result.lo === result.hi ? result.lo : `${result.lo}–${result.hi}`}{' '}
              <span className={ui.bigSuffix}>g</span>
            </p>
            <p className={ui.resultLine}>protein per day</p>
            {result.lo !== result.hi && (
              <RangeBarProtein lo={result.lo} hi={result.hi} rda={rda} />
            )}
            <div className={proteinGlass.chipRow}>
              <div className={proteinGlass.chip}>
                <p className={ui.chipLabel}>Per meal (about 0.25 g/kg)</p>
                <p className={ui.chipValue}>~{result.meal} g</p>
              </div>
              <div className={proteinGlass.chip}>
                <p className={ui.chipLabel}>Factor used</p>
                <p className={ui.chipValue}>{factorLabel}</p>
              </div>
            </div>
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
          <AppCta
            glass
            headline="Track this every day with ProteinSnaps."
            text="Snap a photo of your meal for an estimate of protein, macros and calories, scan packaged food barcodes, and let Fill the Gap show what's left for the day."
          />
        </>
      ) : null}
    </section>
  );
}
