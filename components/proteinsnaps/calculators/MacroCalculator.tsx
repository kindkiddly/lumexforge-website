'use client';
import { useState } from 'react';
import BodyInputs, { initialBody, type BodyState } from './BodyInputs';
import { toMetric } from './bodyParse';
import { energy, macros, validate, type Macros, type Goal } from './energyMath';
import { FAT_OPTIONS, PROTEIN_OPTIONS, initialProtein, onGoalChange, parseKnownCalories, pickProtein, proteinLabel, type ProteinPick } from './macroLogic';
import SafetyNote from './SafetyNote';
import AppCta from './AppCta';
import { CalcButton, Donut, ErrorBox, Field, FlameIcon, MACRO_COLOR, PieIcon, Placeholder, PillButtons, ResultLabel, SoftNote, TargetIcon } from './Parts';
import { ui } from './ui';

// Behavior: protein default follows the goal (the ProteinSnaps app's settings: cut 2.2, maintain 1.6,
// build 1.8, recomp 2.0 g/kg). A manual pick is kept until the user changes the goal again, which resets it.
export default function MacroCalculator() {
  const [s, setS] = useState<BodyState>(initialBody);
  const [known, setKnown] = useState('');
  const [p, setP] = useState<ProteinPick>(() => initialProtein(initialBody.goal));
  const [f, setF] = useState(30);
  const [out, setOut] = useState<null | { kcal: number; m: Macros; belowBmr: boolean }>(null);
  const [error, setError] = useState('');
  function calculate(e: React.FormEvent) {
    e.preventDefault();
    const { kg, cm, age } = toMetric(s);
    const err = validate(kg, cm, age);
    if (err) { setOut(null); setError(err); return; }
    const kc = parseKnownCalories(known);
    if (kc.error) { setOut(null); setError(kc.error); return; }
    const en = energy(s.sex, kg, cm, age, s.activity, s.goal);
    const kcal = kc.kcal ?? Math.round((en.low + en.high) / 2);
    setError(''); setOut({ kcal, m: macros(kcal, kg, p.value, f), belowBmr: kcal < en.bmr });
  }
  const cols = out ? [
    { name: 'Protein', pct: out.m.pPct, g: out.m.protein, color: MACRO_COLOR.protein },
    { name: 'Carbs', pct: out.m.cPct, g: out.m.carbs, color: MACRO_COLOR.carbs },
    { name: 'Fat', pct: out.m.fPct, g: out.m.fat, color: MACRO_COLOR.fat },
  ] : [];
  return (
    <section>
      <div className={ui.grid}>
        <form onSubmit={calculate} className={ui.card}>
          <h2 className={ui.cardTitle}>Your Details</h2>
          <div className={ui.form}>
            <BodyInputs s={s} set={x => setS(prev => ({ ...prev, ...x }))} onGoal={(g: Goal) => setP(onGoalChange(g))} />
            <Field label="Already know your calories? (optional)" icon={<FlameIcon />}><input className={ui.input} type="number" inputMode="numeric" value={known} onChange={e => setKnown(e.target.value)} placeholder="Leave blank to estimate" /></Field>
            <div>
              <Field label="Protein" icon={<TargetIcon />}><select className={ui.select} value={p.value} onChange={e => setP(pickProtein(parseFloat(e.target.value)))}>
                {PROTEIN_OPTIONS.map(v => <option key={v} value={v}>{proteinLabel(v, s.goal)}</option>)}
              </select></Field>
              <p className={`${ui.note} mt-2`}>{p.manual ? 'You picked this protein level. Changing the goal resets it to the app setting.' : "Set from the ProteinSnaps app's settings for your goal. You can pick any option."}</p>
            </div>
            <div><span className={ui.legend}>Fat (% of calories)</span>
              <PillButtons<number> label="Fat percent of calories" value={f} onChange={setF} options={FAT_OPTIONS.map(v => ({ value: v, label: `${v}%` }))} />
            </div>
            <div><CalcButton>Calculate Macros</CalcButton></div>
          </div>
        </form>
        <div className={ui.resultCard} aria-live="polite">
          {error ? <ErrorBox>{error}</ErrorBox> : out ? (<>
            <ResultLabel icon={<PieIcon />}>Your macro breakdown</ResultLabel>
            <div className="mt-3"><Donut pPct={out.m.pPct} cPct={out.m.cPct} fPct={out.m.fPct} center={out.kcal.toLocaleString('en-US')} caption="kcal / day" /></div>
            <div className={ui.macroCols}>
              {cols.map(c => (
                <div key={c.name}>
                  <p className="flex flex-col items-center gap-1 text-sm font-semibold text-[#1A1A1A]"><span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/5 bg-white/70"><span className="h-3.5 w-3.5 rounded-full" style={{ background: c.color }} /></span>{c.name}</p>
                  <p className={ui.macroPct}>{c.pct}%</p>
                  <p className={ui.chipLabel}>{c.g} g / day</p>
                </div>
              ))}
            </div>
            {out.m.warnings.length > 0 && <div className={ui.notes}>{out.m.warnings.map(w => <SoftNote key={w}>{w}</SoftNote>)}</div>}
            <SafetyNote belowBmr={out.belowBmr} />
          </>) : <Placeholder />}
        </div>
      </div>
      {out && <AppCta image="/images/proteinsnaps/PS-1.webp" text="In the app your macros are set automatically for your goal, and you can switch presets (Balanced, High Protein, Keto, Carnivore, Low Fat or Custom) or edit them in Profile. Fill the Gap then shows what's left for the day." />}
    </section>
  );
}
