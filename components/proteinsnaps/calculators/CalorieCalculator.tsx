'use client';
import { useState } from 'react';
import BodyInputs, { initialBody, type BodyState } from './BodyInputs';
import { toMetric } from './bodyParse';
import { energy, validate, type EnergyResult } from './energyMath';
import SafetyNote from './SafetyNote';
import AppCta from './AppCta';
import { ui } from './ui';

export default function CalorieCalculator() {
  const [s, setS] = useState<BodyState>(initialBody);
  const [r, setR] = useState<EnergyResult | null>(null);
  const [error, setError] = useState('');
  function calculate(e: React.FormEvent) {
    e.preventDefault();
    const { kg, cm, age } = toMetric(s);
    const err = validate(kg, cm, age);
    if (err) { setR(null); setError(err); return; }
    setError(''); setR(energy(s.sex, kg, cm, age, s.activity, s.goal));
  }
  return (
    <section className={ui.card}>
      <form onSubmit={calculate} className={ui.form}>
        <BodyInputs s={s} set={p => setS(prev => ({ ...prev, ...p }))} />
        <div><button type="submit" className={ui.button}>Calculate</button></div>
      </form>
      {error && <p role="alert" className={ui.error}>{error}</p>}
      {r && (<div className={ui.result} aria-live="polite">
        <p className={ui.big}>{r.low === r.high ? `About ${r.low} kcal` : `About ${r.low}–${r.high} kcal`} per day</p>
        <p className={ui.body}>Estimated maintenance (TDEE): {r.tdee} kcal. Resting energy (BMR): {r.bmr} kcal. Goal adjustment uses the ProteinSnaps app&apos;s settings.</p>
        <p className={ui.body}><a className={ui.link} href="/macro-calculator">Turn this into protein, carbs and fat →</a></p>
        <SafetyNote belowBmr={r.belowBmr} />
      </div>)}
      {r && <AppCta text="ProteinSnaps sets your calories the same way during onboarding. After about two weeks of logging, it compares what you ate with your weight trend to estimate your real maintenance calories. Log meals with an AI photo estimate, the barcode scanner, or Fill the Gap." />}
    </section>
  );
}
