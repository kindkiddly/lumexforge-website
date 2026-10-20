'use client';
import { useState } from 'react';
import BodyInputs, { initialBody, type BodyState } from './BodyInputs';
import { toMetric } from './bodyParse';
import { energy, validate, type EnergyResult } from './energyMath';
import SafetyNote from './SafetyNote';
import AppCta from './AppCta';
import { CalcButton, ErrorBox, Placeholder } from './Parts';
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
  const n = (v: number) => v.toLocaleString('en-US');
  return (
    <section>
      <div className={ui.grid}>
        <form onSubmit={calculate} className={ui.card}>
          <h2 className={ui.cardTitle}>Your Details</h2>
          <div className={ui.form}>
            <BodyInputs s={s} set={p => setS(prev => ({ ...prev, ...p }))} />
            <div><CalcButton>Calculate Calories</CalcButton></div>
          </div>
        </form>
        <div className={ui.resultCard} aria-live="polite">
          {error ? <ErrorBox>{error}</ErrorBox> : r ? (<>
            <p className={ui.resultLabel}>Your daily calorie target</p>
            <p className={ui.big}>{r.low === r.high ? n(r.low) : `${n(r.low)}–${n(r.high)}`} <span className={ui.bigUnit}>kcal / day</span></p>
            <div className={ui.chips}>
              <div className={ui.chip}><p className={ui.chipLabel}>Maintenance (TDEE)</p><p className={ui.chipValue}>{n(r.tdee)} kcal</p></div>
              <div className={ui.chip}><p className={ui.chipLabel}>Resting energy (BMR)</p><p className={ui.chipValue}>{n(r.bmr)} kcal</p></div>
            </div>
            <p className={ui.resultLine}>Goal adjustment uses the ProteinSnaps app&apos;s settings.</p>
            <p className={ui.resultLine}><a className={ui.link} href="/macro-calculator">Turn this into protein, carbs and fat →</a></p>
            <SafetyNote belowBmr={r.belowBmr} />
          </>) : <Placeholder />}
        </div>
      </div>
      {r && <AppCta image="/images/proteinsnaps/PS-5.webp" text="ProteinSnaps sets your calories the same way during onboarding. After about two weeks of logging, it compares what you ate with your weight trend to estimate your real maintenance calories. Log meals with an AI photo estimate, the barcode scanner, or Fill the Gap." />}
    </section>
  );
}
