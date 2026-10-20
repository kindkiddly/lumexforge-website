'use client';
import { useState } from 'react';
import BodyInputs, { initialBody, type BodyState } from './BodyInputs';
import { toMetric } from './bodyParse';
import { energy, macros, validate, type Macros, type Goal } from './energyMath';
import { FAT_OPTIONS, PROTEIN_OPTIONS, initialProtein, onGoalChange, parseKnownCalories, pickProtein, proteinLabel, type ProteinPick } from './macroLogic';
import SafetyNote from './SafetyNote';
import AppCta from './AppCta';
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
  return (
    <section className={ui.card}>
      <form onSubmit={calculate} className={ui.form}>
        <BodyInputs s={s} set={x => setS(prev => ({ ...prev, ...x }))} onGoal={(g: Goal) => setP(onGoalChange(g))} />
        <label className={ui.label}>Already know your calories? (optional)<input className={ui.input} type="number" inputMode="numeric" value={known} onChange={e => setKnown(e.target.value)} placeholder="Leave blank to estimate" /></label>
        <label className={ui.label}>Protein<select className={ui.select} value={p.value} onChange={e => setP(pickProtein(parseFloat(e.target.value)))}>
          {PROTEIN_OPTIONS.map(v => <option key={v} value={v}>{proteinLabel(v, s.goal)}</option>)}
        </select></label>
        <p className={ui.note}>{p.manual ? 'You picked this protein level. Changing the goal resets it to the app setting.' : "Set from the ProteinSnaps app's settings for your goal. You can pick any option."}</p>
        <label className={ui.label}>Fat (% of calories)<select className={ui.select} value={f} onChange={e => setF(parseInt(e.target.value, 10))}>
          {FAT_OPTIONS.map(v => <option key={v} value={v}>{v}%</option>)}
        </select></label>
        <div><button type="submit" className={ui.button}>Calculate</button></div>
      </form>
      {error && <p role="alert" className={ui.error}>{error}</p>}
      {out && (<div className={ui.result} aria-live="polite">
        <p className={ui.big}>{out.kcal} kcal: {out.m.protein} g protein · {out.m.carbs} g carbs · {out.m.fat} g fat</p>
        <p className={ui.body}>That is about {out.m.pPct}% protein, {out.m.cPct}% carbs and {out.m.fPct}% fat.</p>
        {out.m.warnings.map(w => <p key={w} className={ui.note}>{w}</p>)}
        <SafetyNote belowBmr={out.belowBmr} />
      </div>)}
      {out && <AppCta text="In the app your macros are set automatically for your goal, and you can switch presets (Balanced, High Protein, Keto, Carnivore, Low Fat or Custom) or edit them in Profile. Fill the Gap then shows what's left for the day." />}
    </section>
  );
}
