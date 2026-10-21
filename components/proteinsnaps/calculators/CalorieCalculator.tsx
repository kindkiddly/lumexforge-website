'use client';

import { useRef, useState } from 'react';
import { initialBody, type BodyState } from './BodyInputs';
import { toMetric } from './bodyParse';
import { energy, validate, type EnergyResult } from './energyMath';
import SafetyNote from './SafetyNote';
import AppCta from './AppCta';
import { BrandName } from './BrandName';
import {
  MintCalcBodyFields,
  MintCalcHeader,
  MintCalcSubmit,
} from './MintCalcForm';
import { CalorieGauge, ErrorBox } from './Parts';
import { calcMint, ui } from './ui';

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
      const el = resultRef.current;
      if (!el) return;
      const mobile = window.matchMedia('(max-width: 1023px)').matches;
      el.scrollIntoView({ behavior: 'smooth', block: mobile ? 'center' : 'start' });
    });
  }

  const n = (v: number) => v.toLocaleString('en-US');

  return (
    <section className={calcMint.section}>
      <div className={calcMint.cardGlowWrap}>
        <div className={calcMint.cardGlow} aria-hidden />
        <form onSubmit={calculate} className={calcMint.card}>
          <MintCalcHeader unit={s.unit} onUnit={unit => setS(prev => ({ ...prev, unit }))} />
          <MintCalcBodyFields s={s} set={p => setS(prev => ({ ...prev, ...p }))} />
          {error ? (
            <div className="mt-4">
              <ErrorBox>{error}</ErrorBox>
            </div>
          ) : null}
          <MintCalcSubmit>Calculate Calories</MintCalcSubmit>
        </form>
      </div>

      {r ? (
        <>
          <div
            ref={resultRef}
            className="ps-glass-panel ps-3d-card max-lg:scroll-mt-28 rounded-2xl p-5 sm:p-6 lg:p-8"
            aria-live="polite"
          >
            <div className={`${ui.resultGrid} max-lg:flex max-lg:flex-col max-lg:gap-6`}>
              <div className="min-w-0">
                <p className={ui.resultLabel}>Your daily calorie target</p>
                <div className="mt-2 lg:hidden">
                  <p className="font-sans text-sm text-[#555555]">About</p>
                  <p className="mt-1 font-serif text-[2.25rem] font-semibold leading-tight text-[#1A1A1A]">
                    {r.low === r.high ? n(r.low) : `${n(r.low)}–${n(r.high)}`}
                  </p>
                  <p className="mt-1.5 font-sans text-base text-[#555555]">kcal per day</p>
                </div>
                <p className={`${ui.big} max-lg:hidden`}>
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
                  Goal adjustment uses the <BrandName /> app&apos;s settings.
                </p>
                <p className={ui.resultLine}>
                  <a className={ui.link} href="/macro-calculator">
                    Turn this into protein, carbs and fat →
                  </a>
                </p>
                <SafetyNote belowBmr={r.belowBmr} />
              </div>
              <div className="max-lg:w-full max-lg:border-t max-lg:border-black/[0.06] max-lg:pt-6 lg:col-start-2 lg:row-start-1 lg:self-center">
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
          </div>
          <AppCta
            glass
            offerGlass
            text={
              <>
                <BrandName /> sets your calories the same way during onboarding. After about two
                weeks of logging, it compares what you ate with your weight trend to estimate your
                real maintenance calories. Log meals with an AI photo estimate, the barcode scanner,
                or Fill the Gap.
              </>
            }
          />
        </>
      ) : null}
    </section>
  );
}
