'use client';
import { ACTIVITY, GOAL, type Activity, type Goal, type Sex } from './energyMath';
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
      <fieldset className={ui.fieldset}><legend className={ui.legend}>Sex (used by the formula)</legend>
        <label className={ui.radio}><input type="radio" checked={s.sex === 'female'} onChange={() => set({ sex: 'female' })} /> Female</label>
        <label className={ui.radio}><input type="radio" checked={s.sex === 'male'} onChange={() => set({ sex: 'male' })} /> Male</label>
      </fieldset>
      <label className={ui.label}>Age<input className={ui.input} type="number" inputMode="numeric" value={s.age} onChange={e => set({ age: e.target.value })} placeholder={`e.g. ${PLACEHOLDERS.age}`} required /></label>
      {s.unit === 'imperial' ? (<>
        <div className={ui.row}>
          <label className={ui.label}>Height (ft)<input className={ui.input} type="number" inputMode="numeric" value={s.ft} onChange={e => set({ ft: e.target.value })} placeholder={PLACEHOLDERS.ft} required /></label>
          <label className={ui.label}>Height (in)<input className={ui.input} type="number" inputMode="decimal" value={s.inch} onChange={e => set({ inch: e.target.value })} placeholder={PLACEHOLDERS.inch} /></label>
        </div>
        <label className={ui.label}>Weight (lb)<input className={ui.input} type="number" inputMode="decimal" value={s.lb} onChange={e => set({ lb: e.target.value })} placeholder={PLACEHOLDERS.lb} required /></label>
      </>) : (<div className={ui.row}>
        <label className={ui.label}>Height (cm)<input className={ui.input} type="number" inputMode="decimal" value={s.cm} onChange={e => set({ cm: e.target.value })} placeholder={PLACEHOLDERS.cm} required /></label>
        <label className={ui.label}>Weight (kg)<input className={ui.input} type="number" inputMode="decimal" value={s.kg} onChange={e => set({ kg: e.target.value })} placeholder={PLACEHOLDERS.kg} required /></label>
      </div>)}
      <label className={ui.label}>Activity<select className={ui.select} value={s.activity} onChange={e => set({ activity: e.target.value as Activity })}>
        {(Object.keys(ACTIVITY) as Activity[]).map(k => <option key={k} value={k}>{ACTIVITY[k].label} (×{ACTIVITY[k].factor})</option>)}
      </select></label>
      <label className={ui.label}>Goal<select className={ui.select} value={s.goal} onChange={e => { const g = e.target.value as Goal; set({ goal: g }); onGoal?.(g); }}>
        {(Object.keys(GOAL) as Goal[]).map(k => <option key={k} value={k}>{GOAL[k].label}</option>)}
      </select></label>
    </>
  );
}
