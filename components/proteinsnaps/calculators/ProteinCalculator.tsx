'use client';

import { useRef, useState } from 'react';
import { LB_TO_KG } from './energyMath';
import {
  DEFAULT_WEIGHT_UNIT,
  WEIGHT_PLACEHOLDER,
  proteinRange,
  type Level,
  type ProteinGoal,
  type WeightUnit,
} from './proteinMath';
import AppCta from './AppCta';
import {
  BuildMuscleIcon,
  ErrorBox,
  ExerciseIcon,
  FlameGoalIcon,
  HeartGoalIcon,
  ProteinCalcButton,
  ProteinGlassCard,
  ProteinInputGroup,
  ProteinRangeRing,
  ProteinResultColorTiles,
  ProteinSegmentedControl,
  ProteinWeightInput,
  RangeBarProtein,
  RestIcon,
  SoftNote,
} from './Parts';
import { proteinGlass, PROTEIN_CTA_PHONE_SRC, ui } from './ui';

type AgeBand = 'under65' | '65plus';

type ResultState = {
  lo: number;
  hi: number;
  meal: number;
  factorLo: number;
  factorHi: number;
};

export default function ProteinCalculator() {
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState<WeightUnit>(DEFAULT_WEIGHT_UNIT);
  const [level, setLevel] = useState<Level>('active');
  const [ageBand, setAgeBand] = useState<AgeBand>('under65');
  const [goal, setGoal] = useState<ProteinGoal>('general');
  const [result, setResult] = useState<null | ResultState>(null);
  const [error, setError] = useState('');
  const resultRef = useRef<HTMLDivElement>(null);

  const age65 = ageBand === '65plus';
  const goalsVisible = level === 'active';

  function calculate(e: React.FormEvent) {
    e.preventDefault();
    const r = proteinRange(parseFloat(weight), unit, level, { age65, goal });
    if ('error' in r) {
      setResult(null);
      setError(r.error);
      return;
    }
    setError('');
    setResult(r);
    requestAnimationFrame(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  const w = parseFloat(weight);
  const kg = unit === 'lb' ? w * LB_TO_KG : w;
  const rda = Number.isFinite(kg) ? Math.round(kg * 0.8) : 0;

  const inputFields = (
    <>
      <ProteinInputGroup label="Units">
        <ProteinSegmentedControl
          ariaLabel="Units"
          value={unit}
          onChange={setUnit}
          options={[
            { value: 'lb' as const, label: 'lb' },
            { value: 'kg' as const, label: 'kg' },
          ]}
        />
      </ProteinInputGroup>
      <ProteinWeightInput
        unit={unit}
        value={weight}
        onChange={setWeight}
        placeholder={WEIGHT_PLACEHOLDER[unit]}
      />
      <ProteinInputGroup label="Age">
        <ProteinSegmentedControl
          ariaLabel="Age"
          value={ageBand}
          onChange={setAgeBand}
          options={[
            { value: 'under65' as const, label: 'Under 65' },
            { value: '65plus' as const, label: '65+' },
          ]}
        />
      </ProteinInputGroup>
      <ProteinInputGroup label="Activity">
        <ProteinSegmentedControl
          ariaLabel="Activity level"
          value={level}
          onChange={setLevel}
          options={[
            { value: 'rda' as const, label: 'Not exercising', icon: <RestIcon /> },
            { value: 'active' as const, label: 'Exercising', icon: <ExerciseIcon /> },
          ]}
        />
      </ProteinInputGroup>
    </>
  );

  const goalField = (
    <ProteinInputGroup label="Goal">
      <div className={`${proteinGlass.goalRowFade} ${goalsVisible ? '' : proteinGlass.goalRowHidden}`}>
        <ProteinSegmentedControl
          ariaLabel="Goal"
          value={goal}
          onChange={setGoal}
          disabled={!goalsVisible}
          options={[
            { value: 'general' as const, label: 'General fitness', icon: <HeartGoalIcon /> },
            { value: 'build' as const, label: 'Build muscle', icon: <BuildMuscleIcon /> },
            { value: 'fatloss' as const, label: 'Fat loss', icon: <FlameGoalIcon /> },
          ]}
        />
      </div>
    </ProteinInputGroup>
  );

  return (
    <section className={ui.stack}>
      <ProteinGlassCard tint="mint">
        <form onSubmit={calculate} className={proteinGlass.cardPad}>
          <h2 className={proteinGlass.cardTitle}>Your Details</h2>

          <div className={`${proteinGlass.inputRowLg} lg:mt-3`}>{inputFields}</div>
          <div className={proteinGlass.inputRow2Lg}>
            {goalField}
            <ProteinCalcButton>Calculate Protein</ProteinCalcButton>
          </div>

          <div className={`${proteinGlass.inputStack} lg:hidden`}>
            {inputFields}
            {goalField}
            {error ? <ErrorBox>{error}</ErrorBox> : null}
            <ProteinCalcButton>Calculate Protein</ProteinCalcButton>
          </div>

          {error ? (
            <div className="mt-3 hidden lg:block">
              <ErrorBox>{error}</ErrorBox>
            </div>
          ) : null}
        </form>
      </ProteinGlassCard>

      {result ? (
        <>
          <ProteinGlassCard tint="cyan">
            <div ref={resultRef} className={proteinGlass.cardPad} aria-live="polite">
              <p className={ui.resultLabel}>Your daily protein</p>
              <p className={ui.big}>
                {result.lo === result.hi ? result.lo : `${result.lo}–${result.hi}`}{' '}
                <span className={ui.bigSuffix}>g</span>
              </p>
              <p className={ui.resultLine}>protein per day</p>

              <div className="mt-4 flex justify-center lg:hidden">
                <ProteinRangeRing lo={result.lo} hi={result.hi} />
              </div>

              <div className={proteinGlass.resultSplit}>
                <div className="min-w-0">
                  <RangeBarProtein lo={result.lo} hi={result.hi} rda={rda} />
                  <ProteinResultColorTiles
                    meal={result.meal}
                    level={level}
                    age65={age65}
                    goal={goal}
                    factorLo={result.factorLo}
                    factorHi={result.factorHi}
                  />
                  {level === 'active' && (
                    <p className={ui.resultLine}>
                      Spread across meals, roughly {result.meal} g per meal (about 0.25 g/kg; ISSN
                      suggests 20–40 g per dose).
                    </p>
                  )}
                  <SoftNote>
                    An estimate for healthy adults, not medical advice. If you are pregnant,
                    breastfeeding, have kidney disease or another condition, talk to your doctor or a
                    registered dietitian.
                  </SoftNote>
                </div>
                <div className="hidden shrink-0 justify-center lg:flex lg:items-center">
                  <ProteinRangeRing lo={result.lo} hi={result.hi} />
                </div>
              </div>
            </div>
          </ProteinGlassCard>
          <AppCta
            glass
            phoneSrc={PROTEIN_CTA_PHONE_SRC}
            headline="Track this every day with ProteinSnaps."
            text="Snap a photo of your meal for an estimate of protein, macros and calories, scan packaged food barcodes, and let Fill the Gap show what's left for the day."
          />
        </>
      ) : null}
    </section>
  );
}
