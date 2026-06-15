import { AnimatedCardBg } from "./AnimatedCardBg";

const AGENTS = [
  { className: "wwb-agent-1", color: "#00D4FF" },
  { className: "wwb-agent-2", color: "#5B5FE8" },
  { className: "wwb-agent-3", color: "#9B6BFF" },
  { className: "wwb-agent-4", color: "#00D4FF" },
  { className: "wwb-agent-5", color: "#5B5FE8" },
];

export function AgentsAnim() {
  return (
    <AnimatedCardBg>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 320 200"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <path
          d="M 40 100 Q 100 40 160 100 T 280 100"
          stroke="#5B5FE8"
          strokeWidth="0.75"
          opacity="0.2"
          strokeDasharray="4 6"
        />
        <path
          d="M 60 160 Q 160 60 260 140"
          stroke="#9B6BFF"
          strokeWidth="0.75"
          opacity="0.15"
          strokeDasharray="4 6"
        />
        {AGENTS.map((agent, i) => (
          <circle
            key={i}
            r="4"
            className={`wwb-agent-dot ${agent.className}`}
            fill={agent.color}
          />
        ))}
      </svg>
    </AnimatedCardBg>
  );
}
