'use client';

import { ACTIVITY, GOAL, type Activity, type Goal, type Sex } from './energyMath';
import { InlineField, PillButtons, ProteinInlineField } from './Parts';
import { calcGlass, proteinGlass, ui } from './ui';

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

function SelectChevron({ glass, compact }: { glass?: boolean; compact?: boolean }) {
  const chevronClass = !glass
    ? ui.selectChevron
    : compact
      ? calcGlass.selectChevron
      : proteinGlass.selectChevron;
  return (
    <svg
      className={chevronClass}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function GlassUnitToggle({
  value,
  onChange,
  options,
  compact = false,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  compact?: boolean;
}) {
  const g = compact ? calcGlass : proteinGlass;
  const wrapClass = compact
    ? g.toggle
    : `${proteinGlass.toggle} w-full max-w-[280px] sm:w-auto`;
  const selectedRing = compact ? calcGlass.optionBtnSelected : proteinGlass.optionBtnSelected;

  return (
    <div className={wrapClass} role="group" aria-label="Units">
      {options.map(o => (
        <button
          key={o.value}
          type="button"
          aria-pressed={value === o.value}
          className={`${g.toggleBtn} ${value === o.value ? `${g.toggleOn} ${selectedRing}` : g.toggleOff}`}
          onClick={() => onChange(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function SexOptions({
  sex,
  onChange,
  glass,
  compact = false,
}: {
  sex: Sex;
  onChange: (s: Sex) => void;
  glass?: boolean;
  compact?: boolean;
}) {
  if (!glass) {
    return (
      <div className={`${ui.pillEqual} mt-2`}>
        {(['female', 'male'] as Sex[]).map(s => (
          <label key={s} className={`${ui.pill} cursor-pointer ${sex === s ? ui.pillOn : ''}`}>
            <input
              className={ui.pillRadio}
              type="radio"
              name="sex"
              checked={sex === s}
              onChange={() => onChange(s)}
            />
            {s === 'female' ? 'Female' : 'Male'}
          </label>
        ))}
      </div>
    );
  }
  const btn = compact ? calcGlass.optionBtn : proteinGlass.optionBtn;
  const btnOn = compact ? calcGlass.optionBtnSelected : proteinGlass.optionBtnSelected;
  return (
    <div
      className={`relative z-[1] grid grid-cols-2 ${compact ? 'mt-1 gap-1.5' : 'mt-2 gap-2'}`}
    >
      {(['female', 'male'] as Sex[]).map(s => (
        <button
          key={s}
          type="button"
          aria-pressed={sex === s}
          className={`${btn} ${sex === s ? btnOn : ''}`}
          onClick={() => onChange(s)}
        >
          {s === 'female' ? 'Female' : 'Male'}
        </button>
      ))}
    </div>
  );
}

export default function BodyInputs({
  s,
  set,
  onGoal,
  glass = false,
  compact = false,
}: {
  s: BodyState;
  set: (p: Partial<BodyState>) => void;
  onGoal?: (g: Goal) => void;
  glass?: boolean;
  compact?: boolean;
}) {
  const Field = glass ? ProteinInlineField : InlineField;
  const fieldLabelClass = compact ? calcGlass.fieldLabel : proteinGlass.fieldLabel;
  const inputClass = glass ? (compact ? calcGlass.input : proteinGlass.input) : ui.input;
  const selectClass = glass ? (compact ? calcGlass.select : proteinGlass.select) : ui.select;
  const selectWrapClass = glass
    ? compact
      ? calcGlass.selectWrap
      : proteinGlass.selectWrap
    : ui.selectWrap;
  const rowClass = glass ? (compact ? calcGlass.row2 : 'grid grid-cols-1 gap-3 sm:grid-cols-2') : ui.row2;
  const legendClass = compact ? calcGlass.legendTight : ui.legend;
  const legendWrap = compact ? calcGlass.legendMt : 'mt-2';

  const fieldProps = glass
    ? { labelClassName: fieldLabelClass }
    : ({} as { labelClassName?: string });

  return (
    <>
      <div className={compact ? calcGlass.topRow : 'flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between'}>
        <div className="w-full min-w-0 lg:max-w-md">
          <p className={legendClass}>Sex</p>
          <SexOptions
            sex={s.sex}
            onChange={sex => set({ sex })}
            glass={glass}
            compact={compact}
          />
        </div>
        {glass ? (
          <GlassUnitToggle
            value={s.unit}
            onChange={v => set({ unit: v as UnitSystem })}
            compact={compact}
            options={[
              { value: 'imperial', label: 'lb / ft + in' },
              { value: 'metric', label: 'kg / cm' },
            ]}
          />
        ) : (
          <UnitToggle
            value={s.unit}
            onChange={v => set({ unit: v as UnitSystem })}
            options={[
              { value: 'imperial', label: 'lb / ft + in' },
              { value: 'metric', label: 'kg / cm' },
            ]}
          />
        )}
      </div>

      <div className={rowClass}>
        <Field label="Age" {...fieldProps}>
          <input
            className={inputClass}
            type="number"
            inputMode="numeric"
            value={s.age}
            onChange={e => set({ age: e.target.value })}
            placeholder={PLACEHOLDERS.age}
            required
          />
        </Field>
        {s.unit === 'imperial' ? (
          <Field label="Weight (lb)" {...fieldProps}>
            <input
              className={inputClass}
              type="number"
              inputMode="decimal"
              value={s.lb}
              onChange={e => set({ lb: e.target.value })}
              placeholder={PLACEHOLDERS.lb}
              required
            />
          </Field>
        ) : (
          <Field label="Weight (kg)" {...fieldProps}>
            <input
              className={inputClass}
              type="number"
              inputMode="decimal"
              value={s.kg}
              onChange={e => set({ kg: e.target.value })}
              placeholder={PLACEHOLDERS.kg}
              required
            />
          </Field>
        )}
      </div>

      {s.unit === 'imperial' ? (
        <div className={rowClass}>
          <Field label="Height (ft)" {...fieldProps}>
            <input
              className={inputClass}
              type="number"
              inputMode="numeric"
              value={s.ft}
              onChange={e => set({ ft: e.target.value })}
              placeholder={PLACEHOLDERS.ft}
              required
            />
          </Field>
          <Field label="Height (in)" {...fieldProps}>
            <input
              className={inputClass}
              type="number"
              inputMode="decimal"
              value={s.inch}
              onChange={e => set({ inch: e.target.value })}
              placeholder={PLACEHOLDERS.inch}
            />
          </Field>
        </div>
      ) : (
        <Field label="Height (cm)" {...fieldProps}>
          <input
            className={inputClass}
            type="number"
            inputMode="decimal"
            value={s.cm}
            onChange={e => set({ cm: e.target.value })}
            placeholder={PLACEHOLDERS.cm}
            required
          />
        </Field>
      )}

      <Field label="Activity" {...fieldProps}>
        <div className={selectWrapClass}>
          <select
            className={selectClass}
            value={s.activity}
            onChange={e => set({ activity: e.target.value as Activity })}
          >
            {(Object.keys(ACTIVITY) as Activity[]).map(k => (
              <option key={k} value={k}>
                {ACTIVITY[k].label} (×{ACTIVITY[k].factor})
              </option>
            ))}
          </select>
          <SelectChevron glass={glass} compact={compact} />
        </div>
      </Field>

      <div>
        <p className={legendClass}>Goal</p>
        <div className={legendWrap}>
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
            glass={glass}
            compact={compact}
          />
        </div>
      </div>
    </>
  );
}
