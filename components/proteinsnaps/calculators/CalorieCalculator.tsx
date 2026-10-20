'use client';

import { useRef, useState } from 'react';
import BodyInputs, { initialBody, type BodyState } from './BodyInputs';
import { toMetric } from './bodyParse';
import { energy, validate, type EnergyResult } from './energyMath';
import SafetyNote from './SafetyNote';
import AppCta from './AppCta';
import { CalcButton, CalorieGauge, ErrorBox } from './Parts';
import { ui } from './ui';

function goalAdjustmentLabel(goal: BodyState['goal']): string {
  if (goal === 'fatloss') return '−400';
  if (goal === 'gain') return '+350';
  if (goal === 'recomp') return '±100';
  return '0';
}

export default function CalorieCalculator() {
  const [s, setS] = useState<BodyState>(initialBody);
  const [r, setR] = useState<EnergyResult | null>(null);
  const [error, setError] = useState('');
  const resultRef = useRef<HTMLDivElement>(null);

  function calculate(e: React.FormEvent) {
    e.preventDefault();
    const { kg, cm, age } = toMetric(s);
    const err = validate(kg, cm, age);
    if (err) {
      setR(null);
      setError(err);
      return;
    }
    setError('');
    const res = energy(s.sex, kg, cm, age, s.activity, s.goal);
    setR(res);
    requestAnimationFrame(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  const n = (v: number) => v.toLocaleString('en-US');

  return (
    <section className={ui.stack}>
      <form onSubmit={calculate} className={ui.cardPad}>
        <h2 className={ui.cardTitle}>Your Details</h2>
        <div className={ui.form}>
          <BodyInputs s={s} set={p => setS(prev => ({ ...prev, ...p }))} />
          {error ? <ErrorBox>{error}</ErrorBox> : null}
          <div>
            <CalcButton>Calculate Calories</CalcButton>
          </div>
        </div>
      </form>

      {r ? (
        <>
          <div ref={resultRef} className={ui.cardPad} aria-live="polite">
            <div className={ui.resultGrid}>
              <div>
                <p className={ui.resultLabel}>Your daily calorie target</p>
                <p className={ui.big}>
                  <span className={ui.bigSuffix}>About </span>
                  {r.low === r.high ? n(r.low) : `${n(r.low)}–${n(r.high)}`}
                  <span className={ui.bigSuffix}> kcal per day</span>
                </p>
                <div className={ui.chips}>
                  <div className={ui.chip}>
                    <p className={ui.chipLabel}>Maintenance (TDEE)</p>
                    <p className={ui.chipValue}>{n(r.tdee)}</p>
                  </div>
                  <div className={ui.chip}>
                    <p className={ui.chipLabel}>Resting (BMR)</p>
                    <p className={ui.chipValue}>{n(r.bmr)}</p>
                  </div>
                  <div className={ui.chip}>
                    <p className={ui.chipLabel}>Goal adjustment</p>
                    <p className={ui.chipValue}>{goalAdjustmentLabel(s.goal)}</p>
                  </div>
                </div>
                <p className={ui.resultLine}>
                  Goal adjustment uses the ProteinSnaps app&apos;s settings.
                </p>
                <p className={ui.resultLine}>
                  <a className={ui.link} href="/macro-calculator">
                    Turn this into protein, carbs and fat →
                  </a>
                </p>
                <SafetyNote belowBmr={r.belowBmr} />
              </div>
              <CalorieGauge
                bmr={r.bmr}
                tdee={r.tdee}
                low={r.low}
                high={r.high}
                goal={s.goal}
                belowBmr={r.belowBmr}
              />
            </div>
          </div>
          <AppCta text="ProteinSnaps sets your calories the same way during onboarding. After about two weeks of logging, it compares what you ate with your weight trend to estimate your real maintenance calories. Log meals with an AI photo estimate, the barcode scanner, or Fill the Gap." />
        </>
      ) : null}
    </section>
  );
}
