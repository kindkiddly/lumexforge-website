import { AnimatedCardBg } from "./AnimatedCardBg";

export function FutureAnim() {
  return (
    <AnimatedCardBg>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 320 200"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <ellipse
          cx="160"
          cy="100"
          rx="110"
          ry="42"
          stroke="#5B5FE8"
          strokeWidth="1"
          opacity="0.3"
        />
        <ellipse
          cx="160"
          cy="100"
          rx="85"
          ry="58"
          stroke="#9B6BFF"
          strokeWidth="1"
          opacity="0.25"
          className="wwb-orbit-ring-tilt"
        />
        <ellipse
          cx="160"
          cy="100"
          rx="65"
          ry="70"
          stroke="#00D4FF"
          strokeWidth="0.75"
          opacity="0.2"
          className="wwb-orbit-ring-tilt-2"
        />

        <g transform="translate(160, 100)">
          <g className="wwb-orbit-spin-1">
            <circle cx="110" cy="0" r="3" fill="#00D4FF" />
          </g>
          <g transform="rotate(60)">
            <g className="wwb-orbit-spin-2">
              <circle cx="85" cy="0" r="2.5" fill="#5B5FE8" />
            </g>
          </g>
          <g transform="rotate(-30)">
            <g className="wwb-orbit-spin-3">
              <circle cx="65" cy="0" r="2" fill="#9B6BFF" />
            </g>
          </g>
        </g>
      </svg>
    </AnimatedCardBg>
  );
}
