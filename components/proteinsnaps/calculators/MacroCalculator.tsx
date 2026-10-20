'use client';

import { useRef, useState } from 'react';
import BodyInputs, { initialBody, type BodyState } from './BodyInputs';
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
  Donut,
  ErrorBox,
  MACRO_COLOR,
  MacroBars,
  PillButtons,
  ProteinCalcButton,
  ProteinGlassCard,
  ProteinInlineField,
  SoftNote,
} from './Parts';
import { proteinGlass, ui } from './ui';

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
    <section className={ui.stack}>
      <ProteinGlassCard tint="mint">
        <form onSubmit={calculate} className={proteinGlass.cardPad}>
          <h2 className={proteinGlass.cardTitle}>Your Details</h2>
          <div className="mt-3 grid gap-3">
            <BodyInputs
              s={s}
              set={x => setS(prev => ({ ...prev, ...x }))}
              onGoal={(g: Goal) => setP(onGoalChange(g))}
              glass
            />
            <div className="grid gap-3 lg:grid-cols-2 lg:items-end">
              <ProteinInlineField label="Already know your calories? (optional)">
                <input
                  className={proteinGlass.input}
                  type="number"
                  inputMode="numeric"
                  value={known}
                  onChange={e => setKnown(e.target.value)}
                  placeholder="Leave blank to estimate"
                />
              </ProteinInlineField>
              <div>
                <p className={ui.legend}>Fat (% of calories)</p>
                <div className="mt-2">
                  <PillButtons<number>
                    label="Fat percent of calories"
                    value={f}
                    onChange={setF}
                    options={FAT_OPTIONS.map(v => ({ value: v, label: `${v}%` }))}
                    equalWidth
                    glass
                  />
                </div>
              </div>
            </div>
            <div>
              <ProteinInlineField label="Protein">
                <div className={proteinGlass.selectWrap}>
                  <select
                    className={proteinGlass.select}
                    value={p.value}
                    onChange={e => setP(pickProtein(parseFloat(e.target.value)))}
                  >
                    {PROTEIN_OPTIONS.map(v => (
                      <option key={v} value={v}>
                        {proteinLabel(v, s.goal)}
                      </option>
                    ))}
                  </select>
                  <svg
                    className={proteinGlass.selectChevron}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </ProteinInlineField>
              <p className={ui.hint}>
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
            {error ? <ErrorBox>{error}</ErrorBox> : null}
            <ProteinCalcButton>Calculate Macros</ProteinCalcButton>
          </div>
        </form>
      </ProteinGlassCard>

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
          <AppCta text="In the app your macros are set automatically for your goal, and you can switch presets (Balanced, High Protein, Keto, Carnivore, Low Fat or Custom) or edit them in Profile. Fill the Gap then shows what's left for the day." />
        </>
      ) : null}
    </section>
  );
}
