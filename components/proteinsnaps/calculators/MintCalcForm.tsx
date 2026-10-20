'use client';

import type { ReactNode } from 'react';
import { ACTIVITY, GOAL, type Activity, type Goal, type Sex } from './energyMath';
import {
  PLACEHOLDERS,
  type BodyState,
  type UnitSystem,
} from './BodyInputs';
import { calcMint } from './ui';

function IconPerson({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" strokeLinecap="round" />
    </svg>
  );
}

function IconFemale({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
      <circle cx="12" cy="9" r="4" />
      <path d="M12 13v8M9 18h6" strokeLinecap="round" />
    </svg>
  );
}

function IconMale({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
      <circle cx="10" cy="14" r="4" />
      <path d="M14 10l6-6M16 4h4v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCalendar({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M4 11h16" strokeLinecap="round" />
    </svg>
  );
}

function IconHeight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
      <path d="M12 4v16M9 7l3-3 3 3M9 17l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconScale({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
      <path d="M12 3v18" strokeLinecap="round" />
      <path d="M5 8h14l-2 10H7L5 8z" strokeLinejoin="round" />
    </svg>
  );
}

function IconBolt({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  );
}

function IconTarget({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeLinecap="round" />
    </svg>
  );
}

function IconCalc({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 7h8M8 11h2M12 11h2M16 11h0M8 15h2M12 15h2M16 15h0" strokeLinecap="round" />
    </svg>
  );
}

function IconFlame({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
      <path d="M12 3c1.5 3 4 5 4 8a4 4 0 11-8 0c0-3 2.5-5 4-8z" strokeLinejoin="round" />
    </svg>
  );
}

function IconDumbbell({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
      <path d="M6 9H4a2 2 0 00-2 2v2a2 2 0 002 2h2M18 9h2a2 2 0 012 2v2a2 2 0 01-2 2h-2M8 12h8" strokeLinecap="round" />
    </svg>
  );
}

function IconTrend({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
      <path d="M4 18h16M7 14l3-3 3 2 5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const GOAL_MINT: Record<
  Goal,
  { short: string; Icon: (props: { className?: string }) => ReactNode }
> = {
  fatloss: { short: 'Fat loss goal', Icon: IconFlame },
  maintain: { short: 'Maintain', Icon: IconTarget },
  recomp: { short: 'Recomp', Icon: IconDumbbell },
  gain: { short: 'Build / gain', Icon: IconTrend },
};

function Stepper({
  onInc,
  onDec,
  label,
}: {
  onInc: () => void;
  onDec: () => void;
  label: string;
}) {
  return (
    <div className={calcMint.stepper} aria-hidden>
      <button type="button" className={calcMint.stepperBtn} onClick={onInc} aria-label={`Increase ${label}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-3 w-3">
          <path d="m6 15 6-6 6 6" strokeLinecap="round" />
        </svg>
      </button>
      <button type="button" className={calcMint.stepperBtn} onClick={onDec} aria-label={`Decrease ${label}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-3 w-3">
          <path d="m6 9 6 6 6-6" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}

function bumpNum(raw: string, delta: number, min = 0, decimals = 0): string {
  const n = parseFloat(raw);
  const base = Number.isFinite(n) ? n : 0;
  const next = Math.max(min, base + delta);
  return decimals > 0 ? String(Math.round(next * 10 ** decimals) / 10 ** decimals) : String(Math.round(next));
}

function MintNumberField({
  icon,
  label,
  value,
  onChange,
  placeholder,
  required,
  stepUp = 1,
  stepDown = 1,
  min = 0,
  decimals = 0,
  inputMode = 'numeric' as 'numeric' | 'decimal',
}: {
  icon: ReactNode;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  required?: boolean;
  stepUp?: number;
  stepDown?: number;
  min?: number;
  decimals?: number;
  inputMode?: 'numeric' | 'decimal';
}) {
  return (
    <div className={calcMint.fieldBox}>
      <div className={calcMint.fieldInner}>
        <div className={calcMint.fieldIcon}>{icon}</div>
        <div className="min-w-0 flex-1 overflow-hidden">
          <span className={calcMint.fieldLabel}>{label}</span>
          <input
            className={calcMint.fieldInput}
            type="number"
            inputMode={inputMode}
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
            required={required}
          />
        </div>
        <Stepper
          label={label}
          onInc={() => onChange(bumpNum(value, stepUp, min, decimals))}
          onDec={() => onChange(bumpNum(value, -stepDown, min, decimals))}
        />
      </div>
    </div>
  );
}

export function MintCalcHeader({
  unit,
  onUnit,
}: {
  unit: UnitSystem;
  onUnit: (u: UnitSystem) => void;
}) {
  return (
    <div className={calcMint.cardHeader}>
      <div className={calcMint.cardTitle}>
        <span className={calcMint.cardTitleIcon}>
          <IconPerson className="h-4 w-4" />
        </span>
        Your Details
      </div>
      <div className={calcMint.unitTrack} role="group" aria-label="Units">
        {(
          [
            { value: 'imperial' as const, label: 'lb / ft + in' },
            { value: 'metric' as const, label: 'kg / cm' },
          ] as const
        ).map(o => (
          <button
            key={o.value}
            type="button"
            aria-pressed={unit === o.value}
            className={`${calcMint.unitBtn} ${unit === o.value ? calcMint.unitOn : calcMint.unitOff}`}
            onClick={() => onUnit(o.value)}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function MintCalcBodyFields({
  s,
  set,
  onGoal,
}: {
  s: BodyState;
  set: (p: Partial<BodyState>) => void;
  onGoal?: (g: Goal) => void;
}) {
  return (
    <div className={calcMint.fieldsStack}>
      <div>
        <p className={calcMint.sectionLabel}>Sex</p>
        <div className={calcMint.sexTrack} role="group" aria-label="Sex">
          {(['female', 'male'] as Sex[]).map(sex => {
            const on = s.sex === sex;
            return (
              <button
                key={sex}
                type="button"
                aria-pressed={on}
                className={`${calcMint.sexBtn} ${on ? calcMint.sexOn : calcMint.sexOff}`}
                onClick={() => set({ sex })}
              >
                {sex === 'female' ? (
                  <IconFemale className="h-4 w-4 shrink-0" />
                ) : (
                  <IconMale className="h-4 w-4 shrink-0" />
                )}
                {sex === 'female' ? 'Female' : 'Male'}
              </button>
            );
          })}
        </div>
      </div>

      {s.unit === 'imperial' ? (
        <div className={calcMint.metricsRows}>
          <div className={calcMint.metrics2}>
            <MintNumberField
              icon={<IconCalendar className="h-5 w-5" />}
              label="Age"
              value={s.age}
              onChange={age => set({ age })}
              placeholder={PLACEHOLDERS.age}
              required
            />
            <MintNumberField
              icon={<IconScale className="h-5 w-5" />}
              label="Weight (lb)"
              value={s.lb}
              onChange={lb => set({ lb })}
              placeholder={PLACEHOLDERS.lb}
              required
              inputMode="decimal"
              decimals={1}
            />
          </div>
          <div className={calcMint.metrics2}>
            <MintNumberField
              icon={<IconHeight className="h-5 w-5" />}
              label="Height (ft)"
              value={s.ft}
              onChange={ft => set({ ft })}
              placeholder={PLACEHOLDERS.ft}
              required
            />
            <MintNumberField
              icon={<IconHeight className="h-5 w-5" />}
              label="Height (in)"
              value={s.inch}
              onChange={inch => set({ inch })}
              placeholder={PLACEHOLDERS.inch}
              decimals={1}
              inputMode="decimal"
            />
          </div>
        </div>
      ) : (
        <div className={calcMint.metricsRows}>
          <div className={calcMint.metrics2}>
            <MintNumberField
              icon={<IconCalendar className="h-5 w-5" />}
              label="Age"
              value={s.age}
              onChange={age => set({ age })}
              placeholder={PLACEHOLDERS.age}
              required
            />
            <MintNumberField
              icon={<IconScale className="h-5 w-5" />}
              label="Weight (kg)"
              value={s.kg}
              onChange={kg => set({ kg })}
              placeholder={PLACEHOLDERS.kg}
              required
              inputMode="decimal"
              decimals={1}
            />
          </div>
          <div className={calcMint.metrics2}>
            <div className="col-span-2 min-w-0">
              <MintNumberField
                icon={<IconHeight className="h-5 w-5" />}
                label="Height (cm)"
                value={s.cm}
                onChange={cm => set({ cm })}
                placeholder={PLACEHOLDERS.cm}
                required
                inputMode="decimal"
                decimals={1}
              />
            </div>
          </div>
        </div>
      )}

      <div className={calcMint.activityBox}>
        <div className={calcMint.fieldInner}>
          <div className={calcMint.fieldIcon}>
            <IconBolt className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <span className={calcMint.fieldLabel}>Activity</span>
            <p className={calcMint.activityValue}>
              {ACTIVITY[s.activity].label} (×{ACTIVITY[s.activity].factor})
            </p>
          </div>
          <svg
            className={calcMint.activityChevron}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
        <select
          className={calcMint.activitySelect}
          value={s.activity}
          aria-label="Activity level"
          onChange={e => set({ activity: e.target.value as Activity })}
        >
          {(Object.keys(ACTIVITY) as Activity[]).map(k => (
            <option key={k} value={k}>
              {ACTIVITY[k].label} (×{ACTIVITY[k].factor})
            </option>
          ))}
        </select>
      </div>

      <div>
        <p className={calcMint.goalHeading}>
          <IconTarget className="h-4 w-4 text-[#00A88E]" />
          Goal
        </p>
        <div className={calcMint.goalGrid} role="group" aria-label="Goal">
          {(Object.keys(GOAL) as Goal[]).map(k => {
            const on = s.goal === k;
            const { short, Icon } = GOAL_MINT[k];
            return (
              <button
                key={k}
                type="button"
                aria-pressed={on}
                aria-label={GOAL[k].label}
                title={GOAL[k].label}
                className={`${calcMint.goalBtn} ${on ? calcMint.goalBtnOn : ''}`}
                onClick={() => {
                  set({ goal: k });
                  onGoal?.(k);
                }}
              >
                <Icon className={`h-4 w-4 shrink-0 ${on ? 'text-[#008B7D]' : 'text-[#AAAAAA]'}`} />
                <span>{short}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function MintCalcSubmit({ children }: { children: ReactNode }) {
  return (
    <div className={calcMint.submitWrap}>
      <div className={calcMint.submitGlow} aria-hidden />
      <button type="submit" className={calcMint.submitBtn}>
        <IconCalc className="h-5 w-5 shrink-0" />
        <span>{children}</span>
        <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}

export function MintCalcField({
  icon,
  label,
  children,
}: {
  icon?: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className={calcMint.fieldBox}>
      <div className={calcMint.fieldInner}>
        {icon ? <div className={calcMint.fieldIcon}>{icon}</div> : null}
        <div className="min-w-0 flex-1">
          <span className={calcMint.fieldLabel}>{label}</span>
          {children}
        </div>
      </div>
    </div>
  );
}

export function MintCalcSelect({
  value,
  onChange,
  children,
  label,
}: {
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: ReactNode;
  label: string;
}) {
  return (
    <div className={calcMint.fieldBox}>
      <div className={calcMint.fieldInner}>
        <div className="min-w-0 flex-1">
          <span className={calcMint.fieldLabel}>{label}</span>
          <div className="relative">
            <select className={calcMint.inlineSelect} value={value} onChange={onChange}>
              {children}
            </select>
            <svg
              className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-[#888888]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MintGoalPills<T extends string | number>({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
}) {
  return (
    <div>
      <p className={calcMint.sectionLabel}>{label}</p>
      <div className={calcMint.goalGrid} role="group" aria-label={label}>
        {options.map(o => {
          const on = value === o.value;
          return (
            <button
              key={String(o.value)}
              type="button"
              aria-pressed={on}
              className={`${calcMint.goalBtn} ${on ? calcMint.goalBtnOn : ''}`}
              onClick={() => onChange(o.value)}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
