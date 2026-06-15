import { AnimatedCardBg } from "./AnimatedCardBg";

const NODES = [
  { cx: 160, cy: 50 },
  { cx: 70, cy: 90 },
  { cx: 250, cy: 85 },
  { cx: 100, cy: 155 },
  { cx: 200, cy: 150 },
  { cx: 160, cy: 110 },
  { cx: 260, cy: 155 },
];

const LINKS = [
  [0, 1],
  [0, 2],
  [0, 5],
  [1, 3],
  [1, 5],
  [2, 5],
  [2, 6],
  [3, 4],
  [4, 5],
  [4, 6],
  [5, 6],
];

export function PlatformAnim() {
  return (
    <AnimatedCardBg>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 320 200"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {LINKS.map(([a, b], i) => (
          <line
            key={i}
            x1={NODES[a].cx}
            y1={NODES[a].cy}
            x2={NODES[b].cx}
            y2={NODES[b].cy}
            stroke="#5B5FE8"
            strokeWidth="1"
            opacity="0.25"
          />
        ))}
        {LINKS.map(([a, b], i) => (
          <line
            key={`pulse-${i}`}
            x1={NODES[a].cx}
            y1={NODES[a].cy}
            x2={NODES[b].cx}
            y2={NODES[b].cy}
            stroke="#00D4FF"
            strokeWidth="1.5"
            className="wwb-platform-pulse"
            style={{ animationDelay: `${i * 0.45}s` }}
          />
        ))}
        {NODES.map((node, i) => (
          <circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r="3.5"
            fill="#9B6BFF"
            opacity="0.55"
          />
        ))}
      </svg>
    </AnimatedCardBg>
  );
}
