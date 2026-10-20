'use client';
import { useState } from 'react';
import { DEFAULT_WEIGHT_UNIT, WEIGHT_PLACEHOLDER, proteinRange, type Level, type WeightUnit } from './proteinMath';
import { UnitToggle } from './BodyInputs';
import AppCta from './AppCta';
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
    <section className={ui.card}>
      <form onSubmit={calculate} className={ui.form}>
        <UnitToggle value={unit} onChange={v => setUnit(v as WeightUnit)} options={[{ value: 'lb', label: 'lb' }, { value: 'kg', label: 'kg' }]} />
        <label className={ui.label}>Body weight ({unit})
          <input className={ui.input} type="number" inputMode="decimal" value={weight} onChange={e => setWeight(e.target.value)} placeholder={WEIGHT_PLACEHOLDER[unit]} required />
        </label>
        <fieldset className={ui.fieldset}>
          <legend className={ui.legend}>Activity</legend>
          <label className={ui.radio}><input type="radio" checked={level === 'rda'} onChange={() => setLevel('rda')} /> Not regularly exercising (general adult baseline)</label>
          <label className={ui.radio}><input type="radio" checked={level === 'active'} onChange={() => setLevel('active')} /> Exercising regularly (strength, cardio or classes)</label>
        </fieldset>
        <div><button type="submit" className={ui.button}>Calculate</button></div>
      </form>
      {error && <p role="alert" className={ui.error}>{error}</p>}
      {result && (<div className={ui.result} aria-live="polite">
        <p className={ui.big}>{result.lo === result.hi ? `${result.lo} g` : `${result.lo}–${result.hi} g`} protein per day</p>
        {level === 'active' && <p className={ui.body}>Spread across meals, roughly {result.meal} g per meal (about 0.25 g/kg; ISSN suggests 20–40 g per dose).</p>}
        <p className={ui.note}>An estimate for healthy adults, not medical advice. If you are pregnant, breastfeeding, have kidney disease or another condition, talk to your doctor or a registered dietitian.</p>
      </div>)}
      {result && <AppCta headline="Track this every day with ProteinSnaps." text="Snap a photo of your meal for an estimate of protein, macros and calories, scan packaged food barcodes, and let Fill the Gap show what's left for the day." />}
    </section>
  );
}
