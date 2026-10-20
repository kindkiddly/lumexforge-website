'use client';
import { useState } from 'react';
import { DEFAULT_WEIGHT_UNIT, WEIGHT_PLACEHOLDER, proteinRange, type Level, type WeightUnit } from './proteinMath';
import { UnitToggle } from './BodyInputs';
import AppCta from './AppCta';
import { CalcButton, ErrorBox, Field, Placeholder, RangeBar, ResultLabel, ScaleIcon, SoftNote, TargetIcon } from './Parts';
import { ui } from './ui';

export default function ProteinCalculator() {
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState<WeightUnit>(DEFAULT_WEIGHT_UNIT);
  const [level, setLevel] = useState<Level>('active');
  const [result, setResult] = useState<null | { lo: number; hi: number; meal: number }>(null);
  const [error, setError] = useState('');
  function calculate(e: React.FormEvent) {
    e.preventDefault();
    const r = proteinRange(parseFloat(weight), unit, level);
    if ('error' in r) { setResult(null); setError(r.error); return; }
    setError(''); setResult(r);
  }
  return (
    <section>
      <div className={ui.grid}>
        <form onSubmit={calculate} className={ui.card}>
          <h2 className={ui.cardTitle}>Your Details</h2>
          <div className={ui.form}>
            <UnitToggle value={unit} onChange={v => setUnit(v as WeightUnit)} options={[{ value: 'lb', label: 'lb' }, { value: 'kg', label: 'kg' }]} />
            <Field label={`Body weight (${unit})`} icon={<ScaleIcon />}>
              <input className={ui.input} type="number" inputMode="decimal" value={weight} onChange={e => setWeight(e.target.value)} placeholder={WEIGHT_PLACEHOLDER[unit]} required />
            </Field>
            <fieldset className={ui.fieldset}>
              <legend className={ui.legend}>Activity</legend>
              <label className={ui.optionCard}><input className={ui.radio} type="radio" name="level" checked={level === 'rda'} onChange={() => setLevel('rda')} /> Not regularly exercising (general adult baseline)</label>
              <label className={ui.optionCard}><input className={ui.radio} type="radio" name="level" checked={level === 'active'} onChange={() => setLevel('active')} /> Exercising regularly (strength, cardio or classes)</label>
            </fieldset>
            <div><CalcButton>Calculate Protein</CalcButton></div>
          </div>
        </form>
        <div className={ui.resultCard} aria-live="polite">
          {error ? <ErrorBox>{error}</ErrorBox> : result ? (<>
            <ResultLabel icon={<TargetIcon />}>Daily protein target</ResultLabel>
            <p className={ui.big}>{result.lo === result.hi ? result.lo : `${result.lo}–${result.hi}`} <span className={ui.bigUnit}>g / day</span></p>
            {result.lo !== result.hi && <RangeBar lo={result.lo} hi={result.hi} />}
            {level === 'active' && <p className={ui.resultLine}>Spread across meals, roughly {result.meal} g per meal (about 0.25 g/kg; ISSN suggests 20–40 g per dose).</p>}
            <div className={ui.notes}><SoftNote>An estimate for healthy adults, not medical advice. If you are pregnant, breastfeeding, have kidney disease or another condition, talk to your doctor or a registered dietitian.</SoftNote></div>
          </>) : <Placeholder />}
        </div>
      </div>
      {result && <AppCta image="/images/proteinsnaps/PS-3.webp" headline="Track this every day with ProteinSnaps." text="Snap a photo of your meal for an estimate of protein, macros and calories, scan packaged food barcodes, and let Fill the Gap show what's left for the day." />}
    </section>
  );
}
