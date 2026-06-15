import { AnimatedCardBg } from "./AnimatedCardBg";

const NODES = [
  { cx: 80, cy: 60, delay: 0 },
  { cx: 160, cy: 40, delay: 0.4 },
  { cx: 240, cy: 70, delay: 0.8 },
  { cx: 60, cy: 130, delay: 1.2 },
  { cx: 160, cy: 150, delay: 1.6 },
  { cx: 250, cy: 140, delay: 2 },
];

const LINKS = [
  [0, 1],
  [1, 2],
  [0, 3],
  [1, 4],
  [2, 5],
  [3, 4],
  [4, 5],
  [0, 4],
];

export function AINetworkAnim() {
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
            className="wwb-ai-link"
            style={{ animationDelay: `${i * 0.35}s` }}
          />
        ))}
        {NODES.map((node, i) => (
          <g key={i}>
            <circle
              cx={node.cx}
              cy={node.cy}
              r="6"
              className="wwb-ai-node-glow"
              fill="#9B6BFF"
              style={{ animationDelay: `${node.delay}s` }}
            />
            <circle
              cx={node.cx}
              cy={node.cy}
              r="3.5"
              className="wwb-ai-node"
              fill="#00D4FF"
              style={{ animationDelay: `${node.delay}s` }}
            />
          </g>
        ))}
      </svg>
    </AnimatedCardBg>
  );
}
