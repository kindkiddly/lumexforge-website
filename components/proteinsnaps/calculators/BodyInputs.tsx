'use client';

import { ACTIVITY, GOAL, type Activity, type Goal, type Sex } from './energyMath';
import { InlineField, PillButtons } from './Parts';
import { ui } from './ui';

export type UnitSystem = 'imperial' | 'metric';
export interface BodyState {
  sex: Sex;
  age: string;
  unit: UnitSystem;
  kg: string;
  cm: string;
  lb: string;
  ft: string;
  inch: string;
  activity: Activity;
  goal: Goal;
}
export const DEFAULT_UNIT: UnitSystem = 'imperial';
export const PLACEHOLDERS = {
  lb: '143',
  ft: '5',
  inch: '5',
  kg: '65',
  cm: '165',
  age: '30',
} as const;
export const initialBody: BodyState = {
  sex: 'female',
  age: '',
  unit: DEFAULT_UNIT,
  kg: '',
  cm: '',
  lb: '',
  ft: '',
  inch: '',
  activity: 'light',
  goal: 'maintain',
};

export function UnitToggle({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className={ui.toggle} role="group" aria-label="Units">
      {options.map(o => (
        <button
          key={o.value}
          type="button"
          aria-pressed={value === o.value}
          className={`${ui.toggleBtn} ${value === o.value ? ui.toggleOn : ui.toggleOff}`}
          onClick={() => onChange(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function SelectChevron() {
  return (
    <svg className={ui.selectChevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function BodyInputs({
  s,
  set,
  onGoal,
}: {
  s: BodyState;
  set: (p: Partial<BodyState>) => void;
  onGoal?: (g: Goal) => void;
}) {
  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="w-full lg:max-w-md">
          <p className={ui.legend}>Sex</p>
          <div className={`${ui.pillEqual} mt-2`}>
            {(['female', 'male'] as Sex[]).map(sex => (
              <label
                key={sex}
                className={`${ui.pill} cursor-pointer ${s.sex === sex ? ui.pillOn : ''}`}
              >
                <input
                  className={ui.pillRadio}
                  type="radio"
                  name="sex"
                  checked={s.sex === sex}
                  onChange={() => set({ sex })}
                />
                {sex === 'female' ? 'Female' : 'Male'}
              </label>
            ))}
          </div>
        </div>
        <UnitToggle
          value={s.unit}
          onChange={v => set({ unit: v as UnitSystem })}
          options={[
            { value: 'imperial', label: 'lb / ft + in' },
            { value: 'metric', label: 'kg / cm' },
          ]}
        />
      </div>

      <div className={ui.row2}>
        <InlineField label="Age">
          <input
            className={ui.input}
            type="number"
            inputMode="numeric"
            value={s.age}
            onChange={e => set({ age: e.target.value })}
            placeholder={PLACEHOLDERS.age}
            required
          />
        </InlineField>
        {s.unit === 'imperial' ? (
          <InlineField label="Weight (lb)">
            <input
              className={ui.input}
              type="number"
              inputMode="decimal"
              value={s.lb}
              onChange={e => set({ lb: e.target.value })}
              placeholder={PLACEHOLDERS.lb}
              required
            />
          </InlineField>
        ) : (
          <InlineField label="Weight (kg)">
            <input
              className={ui.input}
              type="number"
              inputMode="decimal"
              value={s.kg}
              onChange={e => set({ kg: e.target.value })}
              placeholder={PLACEHOLDERS.kg}
              required
            />
          </InlineField>
        )}
      </div>

      {s.unit === 'imperial' ? (
        <div className={ui.row2}>
          <InlineField label="Height (ft)">
            <input
              className={ui.input}
              type="number"
              inputMode="numeric"
              value={s.ft}
              onChange={e => set({ ft: e.target.value })}
              placeholder={PLACEHOLDERS.ft}
              required
            />
          </InlineField>
          <InlineField label="Height (in)">
            <input
              className={ui.input}
              type="number"
              inputMode="decimal"
              value={s.inch}
              onChange={e => set({ inch: e.target.value })}
              placeholder={PLACEHOLDERS.inch}
            />
          </InlineField>
        </div>
      ) : (
        <InlineField label="Height (cm)">
          <input
            className={ui.input}
            type="number"
            inputMode="decimal"
            value={s.cm}
            onChange={e => set({ cm: e.target.value })}
            placeholder={PLACEHOLDERS.cm}
            required
          />
        </InlineField>
      )}

      <InlineField label="Activity">
        <div className={ui.selectWrap}>
          <select
            className={ui.select}
            value={s.activity}
            onChange={e => set({ activity: e.target.value as Activity })}
          >
            {(Object.keys(ACTIVITY) as Activity[]).map(k => (
              <option key={k} value={k}>
                {ACTIVITY[k].label} (×{ACTIVITY[k].factor})
              </option>
            ))}
          </select>
          <SelectChevron />
        </div>
      </InlineField>

      <div>
        <p className={ui.legend}>Goal</p>
        <div className="mt-2">
          <PillButtons<Goal>
            label="Goal"
            value={s.goal}
            onChange={g => {
              set({ goal: g });
              onGoal?.(g);
            }}
            options={(Object.keys(GOAL) as Goal[]).map(k => ({
              value: k,
              label: GOAL[k].label,
            }))}
          />
        </div>
      </div>
    </>
  );
}
