import { AnimatedCardBg } from "./AnimatedCardBg";

export function MobileAnim() {
  return (
    <AnimatedCardBg>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 320 200"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <rect
          x="72"
          y="48"
          width="52"
          height="88"
          rx="10"
          className="wwb-mobile-phone-a"
          stroke="#5B5FE8"
          strokeWidth="1.5"
          opacity="0.7"
        />
        <rect x="86" y="58" width="28" height="4" rx="2" fill="#00D4FF" opacity="0.35" />
        <rect
          x="168"
          y="56"
          width="48"
          height="80"
          rx="9"
          className="wwb-mobile-phone-b"
          stroke="#9B6BFF"
          strokeWidth="1.5"
          opacity="0.65"
        />
        <rect x="180" y="64" width="24" height="3" rx="1.5" fill="#00D4FF" opacity="0.3" />

        <circle cx="118" cy="88" r="2" className="wwb-mobile-particle wwb-mobile-particle-1" fill="#00D4FF" />
        <circle cx="132" cy="96" r="1.5" className="wwb-mobile-particle wwb-mobile-particle-2" fill="#5B5FE8" />
        <circle cx="145" cy="84" r="2" className="wwb-mobile-particle wwb-mobile-particle-3" fill="#9B6BFF" />
        <circle cx="128" cy="104" r="1.5" className="wwb-mobile-particle wwb-mobile-particle-4" fill="#00D4FF" />
        <circle cx="152" cy="98" r="1.5" className="wwb-mobile-particle wwb-mobile-particle-5" fill="#5B5FE8" />
      </svg>
    </AnimatedCardBg>
  );
}
