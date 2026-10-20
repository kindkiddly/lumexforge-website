'use client';
import { ACTIVITY, GOAL, type Activity, type Goal, type Sex } from './energyMath';
import { BoltIcon, Field, PillButtons, RulerIcon, ScaleIcon, UserIcon } from './Parts';
import { ui } from './ui';
export type UnitSystem = 'imperial' | 'metric';
export interface BodyState { sex: Sex; age: string; unit: UnitSystem; kg: string; cm: string; lb: string; ft: string; inch: string; activity: Activity; goal: Goal }
// v2: imperial (lb, ft + in) is the default; kg / cm is the option.
export const DEFAULT_UNIT: UnitSystem = 'imperial';
export const PLACEHOLDERS = { lb: '143', ft: '5', inch: '5', kg: '65', cm: '165', age: '30' } as const;
export const initialBody: BodyState = { sex: 'female', age: '', unit: DEFAULT_UNIT, kg: '', cm: '', lb: '', ft: '', inch: '', activity: 'light', goal: 'maintain' };

export function UnitToggle({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: { value: string; label: string }[] }) {
  return (
    <div className={ui.toggle} role="group" aria-label="Units">
      {options.map(o => (
        <button key={o.value} type="button" aria-pressed={value === o.value}
          className={value === o.value ? ui.toggleOn : ui.toggleOff} onClick={() => onChange(o.value)}>{o.label}</button>
      ))}
    </div>
  );
}

export default function BodyInputs({ s, set, onGoal }: { s: BodyState; set: (p: Partial<BodyState>) => void; onGoal?: (g: Goal) => void }) {
  return (
    <>
      <UnitToggle value={s.unit} onChange={v => set({ unit: v as UnitSystem })}
        options={[{ value: 'imperial', label: 'lb / ft + in' }, { value: 'metric', label: 'kg / cm' }]} />
      <fieldset className={ui.fieldset}><legend className={ui.legend}>Sex <span className={ui.hint}>(used by the formula)</span></legend>
        <div className={ui.pillGroup}>
          <label className={ui.pillRadio}><input className="sr-only" type="radio" name="sex" checked={s.sex === 'female'} onChange={() => set({ sex: 'female' })} />Female</label>
          <label className={ui.pillRadio}><input className="sr-only" type="radio" name="sex" checked={s.sex === 'male'} onChange={() => set({ sex: 'male' })} />Male</label>
        </div>
      </fieldset>
      <Field label="Age" icon={<UserIcon />}><input className={ui.input} type="number" inputMode="numeric" value={s.age} onChange={e => set({ age: e.target.value })} placeholder={`e.g. ${PLACEHOLDERS.age}`} required /></Field>
      {s.unit === 'imperial' ? (<>
        <div className={ui.row}>
          <Field label="Height (ft)" icon={<RulerIcon />}><input className={ui.input} type="number" inputMode="numeric" value={s.ft} onChange={e => set({ ft: e.target.value })} placeholder={PLACEHOLDERS.ft} required /></Field>
          <Field label="Height (in)" icon={<RulerIcon />}><input className={ui.input} type="number" inputMode="decimal" value={s.inch} onChange={e => set({ inch: e.target.value })} placeholder={PLACEHOLDERS.inch} /></Field>
        </div>
        <Field label="Weight (lb)" icon={<ScaleIcon />}><input className={ui.input} type="number" inputMode="decimal" value={s.lb} onChange={e => set({ lb: e.target.value })} placeholder={PLACEHOLDERS.lb} required /></Field>
      </>) : (<div className={ui.row}>
        <Field label="Height (cm)" icon={<RulerIcon />}><input className={ui.input} type="number" inputMode="decimal" value={s.cm} onChange={e => set({ cm: e.target.value })} placeholder={PLACEHOLDERS.cm} required /></Field>
        <Field label="Weight (kg)" icon={<ScaleIcon />}><input className={ui.input} type="number" inputMode="decimal" value={s.kg} onChange={e => set({ kg: e.target.value })} placeholder={PLACEHOLDERS.kg} required /></Field>
      </div>)}
      <Field label="Activity" icon={<BoltIcon />}><select className={ui.select} value={s.activity} onChange={e => set({ activity: e.target.value as Activity })}>
        {(Object.keys(ACTIVITY) as Activity[]).map(k => <option key={k} value={k}>{ACTIVITY[k].label} (×{ACTIVITY[k].factor})</option>)}
      </select></Field>
      <div><span className={ui.legend}>Goal</span>
        <PillButtons<Goal> label="Goal" value={s.goal} onChange={g => { set({ goal: g }); onGoal?.(g); }}
          options={(Object.keys(GOAL) as Goal[]).map(k => ({ value: k, label: GOAL[k].label }))} />
      </div>
    </>
  );
}
