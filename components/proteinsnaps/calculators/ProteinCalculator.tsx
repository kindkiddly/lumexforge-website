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
import { UnitToggle } from './BodyInputs';
import AppCta from './AppCta';
import {
  CalcButton,
  ErrorBox,
  InlineField,
  RangeBarProtein,
  SoftNote,
} from './Parts';
import { ui } from './ui';

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
      <form onSubmit={calculate} className={ui.cardPad}>
        <div className={ui.cardTitleRow}>
          <h2 className={ui.cardTitle}>Your Details</h2>
          <UnitToggle
            value={unit}
            onChange={v => setUnit(v as WeightUnit)}
            options={[
              { value: 'lb', label: 'lb' },
              { value: 'kg', label: 'kg' },
            ]}
          />
        </div>
        <div className={ui.form}>
          <InlineField label={`Body weight (${unit})`}>
            <input
              className={ui.input}
              type="number"
              inputMode="decimal"
              value={weight}
              onChange={e => setWeight(e.target.value)}
              placeholder={WEIGHT_PLACEHOLDER[unit]}
              required
            />
          </InlineField>
          <div>
            <p className={ui.legend}>Activity</p>
            <div className={`${ui.pillRow} mt-2`}>
              <label
                className={`${ui.pill} flex-1 ${level === 'rda' ? ui.pillOn : ''}`}
              >
                <input
                  className="sr-only"
                  type="radio"
                  name="level"
                  checked={level === 'rda'}
                  onChange={() => setLevel('rda')}
                />
                Not regularly exercising (general adult baseline)
              </label>
              <label
                className={`${ui.pill} flex-1 ${level === 'active' ? ui.pillOn : ''}`}
              >
                <input
                  className="sr-only"
                  type="radio"
                  name="level"
                  checked={level === 'active'}
                  onChange={() => setLevel('active')}
                />
                Exercising regularly (strength, cardio or classes)
              </label>
            </div>
          </div>
          {error ? <ErrorBox>{error}</ErrorBox> : null}
          <div>
            <CalcButton>Calculate Protein</CalcButton>
          </div>
        </div>
      </form>

      {result ? (
        <>
          <div ref={resultRef} className={ui.cardPad} aria-live="polite">
            <div className={ui.resultGrid}>
              <div>
                <p className={ui.resultLabel}>Your daily protein</p>
                <p className={ui.big}>
                  {result.lo === result.hi ? result.lo : `${result.lo}–${result.hi}`}{' '}
                  <span className={ui.bigSuffix}>g</span>
                </p>
                <p className={ui.resultLine}>protein per day</p>
                {result.lo !== result.hi && (
                  <RangeBarProtein lo={result.lo} hi={result.hi} rda={rda} />
                )}
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
              <div className={ui.sideChips}>
                <div className={ui.chip}>
                  <p className={ui.chipLabel}>Per meal (about 0.25 g/kg)</p>
                  <p className={ui.chipValue}>~{result.meal} g</p>
                </div>
                <div className={ui.chip}>
                  <p className={ui.chipLabel}>Factor used</p>
                  <p className={ui.chipValue}>{factorLabel}</p>
                </div>
              </div>
            </div>
          </div>
          <AppCta
            headline="Track this every day with ProteinSnaps."
            text="Snap a photo of your meal for an estimate of protein, macros and calories, scan packaged food barcodes, and let Fill the Gap show what's left for the day."
          />
        </>
      ) : null}
    </section>
  );
}
