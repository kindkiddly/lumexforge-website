import { AnimatedCardBg } from "./AnimatedCardBg";

function Gear({ r, teeth, className }: { r: number; teeth: number; className: string }) {
  const points: string[] = [];
  const outer = r;
  const inner = r * 0.72;
  for (let i = 0; i < teeth * 2; i++) {
    const angle = (Math.PI * i) / teeth - Math.PI / 2;
    const radius = i % 2 === 0 ? outer : inner;
    points.push(`${radius * Math.cos(angle)},${radius * Math.sin(angle)}`);
  }
  return (
    <g className={className}>
      <circle r={r * 0.35} stroke="#00D4FF" strokeWidth="1" opacity="0.4" />
      <polygon points={points.join(" ")} fill="#5B5FE8" opacity="0.35" stroke="#5B5FE8" strokeWidth="0.75" />
    </g>
  );
}

export function AutomationAnim() {
  return (
    <AnimatedCardBg>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 320 200"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <g transform="translate(160, 100)">
          <Gear r={36} teeth={8} className="wwb-gear-slow" />
        </g>
        <g transform="translate(88, 118)">
          <Gear r={22} teeth={6} className="wwb-gear-fast" />
        </g>
        <g transform="translate(232, 82)">
          <Gear r={20} teeth={6} className="wwb-gear-fast-reverse" />
        </g>

        <path
          d="M 110 118 L 138 108"
          stroke="#00D4FF"
          strokeWidth="1.25"
          className="wwb-flow-arrow wwb-flow-arrow-1"
        />
        <path
          d="M 182 92 L 210 82"
          stroke="#9B6BFF"
          strokeWidth="1.25"
          className="wwb-flow-arrow wwb-flow-arrow-2"
        />
      </svg>
    </AnimatedCardBg>
  );
}
