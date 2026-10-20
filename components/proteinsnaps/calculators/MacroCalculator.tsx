'use client';

import { useRef, useState } from 'react';
import { initialBody, type BodyState } from './BodyInputs';
import { toMetric } from './bodyParse';
import { energy, macros, validate, type Goal, type Macros } from './energyMath';
import {
  FAT_OPTIONS,
  PROTEIN_OPTIONS,
  initialProtein,
  onGoalChange,
  parseKnownCalories,
  pickProtein,
  proteinLabel,
  type ProteinPick,
} from './macroLogic';
import SafetyNote from './SafetyNote';
import AppCta from './AppCta';
import { BrandName } from './BrandName';
import {
  MintCalcBodyFields,
  MintCalcField,
  MintCalcHeader,
  MintCalcSelect,
  MintCalcSubmit,
  MintGoalPills,
} from './MintCalcForm';
import { Donut, ErrorBox, MACRO_COLOR, MacroBars, SoftNote } from './Parts';
import { calcMint, ui } from './ui';

export default function MacroCalculator() {
  const [s, setS] = useState<BodyState>(initialBody);
  const [known, setKnown] = useState('');
  const [p, setP] = useState<ProteinPick>(() => initialProtein(initialBody.goal));
  const [f, setF] = useState(30);
  const [out, setOut] = useState<null | { kcal: number; m: Macros; belowBmr: boolean }>(null);
  const [error, setError] = useState('');
  const resultRef = useRef<HTMLDivElement>(null);

  function calculate(e: React.FormEvent) {
    e.preventDefault();
    const { kg, cm, age } = toMetric(s);
    const err = validate(kg, cm, age);
    if (err) {
      setOut(null);
      setError(err);
      return;
    }
    const kc = parseKnownCalories(known);
    if (kc.error) {
      setOut(null);
      setError(kc.error);
      return;
    }
    const en = energy(s.sex, kg, cm, age, s.activity, s.goal);
    const kcal = kc.kcal ?? Math.round((en.low + en.high) / 2);
    setError('');
    setOut({ kcal, m: macros(kcal, kg, p.value, f), belowBmr: kcal < en.bmr });
    requestAnimationFrame(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  const cols = out
    ? [
        { name: 'Protein', pct: out.m.pPct, g: out.m.protein, color: MACRO_COLOR.protein },
        { name: 'Carbs', pct: out.m.cPct, g: out.m.carbs, color: MACRO_COLOR.carbs },
        { name: 'Fat', pct: out.m.fPct, g: out.m.fat, color: MACRO_COLOR.fat },
      ]
    : [];

  return (
    <section className={calcMint.section}>
      <div className={calcMint.cardGlowWrap}>
        <div className={calcMint.cardGlow} aria-hidden />
        <form onSubmit={calculate} className={calcMint.card}>
          <MintCalcHeader unit={s.unit} onUnit={unit => setS(prev => ({ ...prev, unit }))} />
          <MintCalcBodyFields
            s={s}
            set={x => setS(prev => ({ ...prev, ...x }))}
            onGoal={(g: Goal) => setP(onGoalChange(g))}
          />
          <div className={calcMint.macroExtra}>
            <div className="grid gap-4 sm:grid-cols-2">
              <MintCalcField label="Already know your calories? (optional)">
                <input
                  className={calcMint.fieldInput}
                  type="number"
                  inputMode="numeric"
                  value={known}
                  onChange={e => setKnown(e.target.value)}
                  placeholder="Leave blank to estimate"
                />
              </MintCalcField>
              <MintGoalPills
                label="Fat (% of calories)"
                value={f}
                onChange={setF}
                options={FAT_OPTIONS.map(v => ({ value: v, label: `${v}%` }))}
              />
            </div>
            <MintCalcSelect
              label="Protein"
              value={p.value}
              onChange={e => setP(pickProtein(parseFloat(e.target.value)))}
            >
              {PROTEIN_OPTIONS.map(v => (
                <option key={v} value={v}>
                  {proteinLabel(v, s.goal)}
                </option>
              ))}
            </MintCalcSelect>
            <p className={calcMint.hint}>
              {p.manual
                ? 'You picked this protein level. Changing the goal resets it to the app setting.'
                : (
                    <>
                      Set from the <BrandName /> app&apos;s settings for your goal. You can pick any
                      option.
                    </>
                  )}
            </p>
          </div>
          {error ? (
            <div className="mt-4">
              <ErrorBox>{error}</ErrorBox>
            </div>
          ) : null}
          <MintCalcSubmit>Calculate Macros</MintCalcSubmit>
        </form>
      </div>

      {out ? (
        <>
          <div ref={resultRef} className={ui.cardPad} aria-live="polite">
            <div className={ui.resultGrid}>
              <div>
                <p className={ui.resultLabel}>Your daily macros</p>
                <p className={ui.big}>
                  {out.kcal.toLocaleString('en-US')}
                  <span className={ui.bigSuffix}> kcal per day</span>
                </p>
                <MacroBars cols={cols} />
                <p className={ui.resultLine}>
                  That is about {out.m.pPct}% protein, {out.m.cPct}% carbs and {out.m.fPct}% fat.
                </p>
                {out.m.warnings.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {out.m.warnings.map(w => (
                      <SoftNote key={w}>{w}</SoftNote>
                    ))}
                  </div>
                )}
                <SafetyNote belowBmr={out.belowBmr} />
              </div>
              <Donut
                pPct={out.m.pPct}
                cPct={out.m.cPct}
                fPct={out.m.fPct}
                center={out.kcal.toLocaleString('en-US')}
                caption="kcal per day"
              />
            </div>
          </div>
          <AppCta
            glass
            offerGlass
            text="In the app your macros are set automatically for your goal, and you can switch presets (Balanced, High Protein, Keto, Carnivore, Low Fat or Custom) or edit them in Profile. Fill the Gap then shows what's left for the day."
          />
        </>
      ) : null}
    </section>
  );
}
