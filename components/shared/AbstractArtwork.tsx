"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type ArtworkVariant = "proteinsnap" | "amora" | "kepaso" | "future" | "hero";

interface AbstractArtworkProps {
  variant: ArtworkVariant;
  className?: string;
  animated?: boolean;
}

export function AbstractArtwork({
  variant,
  className,
  animated = true,
}: AbstractArtworkProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/[0.06] bg-background-secondary",
        className
      )}
      aria-hidden="true"
    >
      {variant === "proteinsnap" && <ProteinSnapArt animated={animated} />}
      {variant === "amora" && <AmoraArt animated={animated} />}
      {variant === "kepaso" && <KePasoArt animated={animated} />}
      {variant === "future" && <FutureArt animated={animated} />}
      {variant === "hero" && <HeroArt />}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
    </div>
  );
}

function ProteinSnapArt({ animated }: { animated: boolean }) {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-success/25 via-[#0a1628] to-accent-primary/15" />
      <div className="absolute -left-8 top-1/4 h-40 w-40 rounded-full bg-success/30 blur-[60px] animate-pulse-glow" />
      <div className="absolute -right-4 bottom-1/4 h-48 w-48 rounded-full bg-accent-primary/20 blur-[70px]" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="ps-ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E6A8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="ps-fill" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00E6A8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.1" />
          </linearGradient>
          <filter id="ps-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Nutrition ring visualization */}
        <circle cx="200" cy="140" r="90" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <motion.circle
          cx="200" cy="140" r="90" fill="none" stroke="url(#ps-ring)" strokeWidth="2"
          strokeDasharray="565" strokeDashoffset="140" strokeLinecap="round"
          transform="rotate(-90 200 140)"
          animate={animated ? { strokeDashoffset: [140, 100, 140] } : undefined}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <circle cx="200" cy="140" r="60" fill="none" stroke="rgba(0,230,168,0.2)" strokeWidth="0.5" />
        <circle cx="200" cy="140" r="30" fill="url(#ps-fill)" />

        {/* Macro nodes */}
        {[
          { cx: 200, cy: 50, label: "P", color: "#00E6A8" },
          { cx: 310, cy: 140, label: "C", color: "#00C2FF" },
          { cx: 200, cy: 230, label: "F", color: "#4F46E5" },
          { cx: 90, cy: 140, label: "K", color: "#F8FAFC" },
        ].map((node, i) => (
          <g key={i}>
            <line x1="200" y1="140" x2={node.cx} y2={node.cy} stroke={node.color} strokeWidth="0.5" opacity="0.25" />
            <circle cx={node.cx} cy={node.cy} r="14" fill="rgba(5,8,17,0.8)" stroke={node.color} strokeWidth="1" opacity="0.7" />
            <text x={node.cx} y={node.cy + 4} textAnchor="middle" fill={node.color} fontSize="9" fontWeight="600" opacity="0.9">
              {node.label}
            </text>
          </g>
        ))}

        {/* Scan line */}
        <motion.line
          x1="80" y1="0" x2="320" y2="0" stroke="rgba(0,230,168,0.3)" strokeWidth="1"
          animate={animated ? { y1: [60, 220, 60], y2: [60, 220, 60] } : undefined}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-50" />
    </div>
  );
}

function AmoraArt({ animated }: { animated: boolean }) {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/30 via-[#0a0f1e] to-accent-secondary/25" />
      <div className="absolute left-1/3 top-1/4 h-56 w-56 rounded-full bg-accent-secondary/20 blur-[80px] animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-accent-primary/25 blur-[60px]" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="amora-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#00C2FF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="amora-glow" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#00C2FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Prismatic crystal structure */}
        <polygon points="200,40 340,220 60,220" fill="none" stroke="url(#amora-grad)" strokeWidth="1" opacity="0.5" />
        <polygon points="200,80 300,210 100,210" fill="url(#amora-grad)" opacity="0.08" />
        <polygon points="200,40 270,220 130,220" fill="url(#amora-glow)" opacity="0.15" />

        {/* Inner facets */}
        <line x1="200" y1="40" x2="200" y2="220" stroke="#00C2FF" strokeWidth="0.5" opacity="0.3" />
        <line x1="60" y1="220" x2="340" y2="220" stroke="#4F46E5" strokeWidth="0.5" opacity="0.3" />
        <line x1="130" y1="220" x2="200" y2="40" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
        <line x1="270" y1="220" x2="200" y2="40" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />

        {/* Floating particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.circle
            key={i}
            cx={80 + i * 35}
            cy={100 + (i % 3) * 40}
            r="2"
            fill="#00C2FF"
            opacity="0.6"
            animate={animated ? { opacity: [0.3, 0.8, 0.3], cy: [100 + (i % 3) * 40, 90 + (i % 3) * 40, 100 + (i % 3) * 40] } : undefined}
            transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {/* Horizon glow */}
        <rect x="0" y="215" width="400" height="65" fill="url(#amora-glow)" opacity="0.3" />
      </svg>
    </div>
  );
}

function KePasoArt({ animated }: { animated: boolean }) {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-bl from-accent-secondary/20 via-[#080d18] to-accent-primary/20" />
      <div className="absolute bottom-1/4 right-1/4 h-44 w-44 rounded-full bg-accent-primary/25 blur-[70px]" />
      <div className="absolute top-1/3 left-1/4 h-32 w-32 rounded-full bg-accent-secondary/15 blur-[50px]" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="kp-bar" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00C2FF" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="kp-flow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#00C2FF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Platform architecture layers */}
        {[0, 1, 2, 3].map((layer) => (
          <g key={layer} opacity={0.5 + layer * 0.1}>
            <rect
              x={60 + layer * 8}
              y={50 + layer * 12}
              width={280 - layer * 16}
              height={40}
              rx="4"
              fill="none"
              stroke="url(#kp-bar)"
              strokeWidth="0.75"
              opacity={0.4 + layer * 0.1}
            />
            {[0, 1, 2, 3, 4].map((bar) => (
              <rect
                key={bar}
                x={80 + bar * 48 + layer * 8}
                y={58 + layer * 12}
                width={28}
                height={24}
                rx="2"
                fill="url(#kp-bar)"
                opacity={0.1 + bar * 0.05}
              />
            ))}
          </g>
        ))}

        {/* Data flow lines */}
        <motion.path
          d="M 60 200 Q 200 160 340 200"
          fill="none"
          stroke="url(#kp-flow)"
          strokeWidth="2"
          animate={animated ? { strokeDashoffset: [0, -200] } : undefined}
          strokeDasharray="20 10"
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 60 230 Q 200 190 340 230"
          fill="none"
          stroke="rgba(79,70,229,0.4)"
          strokeWidth="1"
          animate={animated ? { strokeDashoffset: [0, -200] } : undefined}
          strokeDasharray="15 15"
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* Connection nodes */}
        {[
          { x: 100, y: 200 },
          { x: 200, y: 175 },
          { x: 300, y: 200 },
        ].map((node, i) => (
          <circle key={i} cx={node.x} cy={node.y} r="4" fill="#00C2FF" opacity="0.6">
            {animated && (
              <animate attributeName="opacity" values="0.4;0.9;0.4" dur={`${2 + i}s`} repeatCount="indefinite" />
            )}
          </circle>
        ))}
      </svg>
    </div>
  );
}

function FutureArt({ animated }: { animated: boolean }) {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-r from-background-secondary via-accent-primary/8 to-background-secondary" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute h-40 w-40 rounded-full border border-white/[0.06] bg-white/[0.02]" />
        <motion.div
          className="absolute h-56 w-56 rounded-full border border-accent-primary/15"
          animate={animated ? { scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] } : undefined}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute h-72 w-72 rounded-full border border-accent-secondary/10"
          animate={animated ? { scale: [1, 1.03, 1], opacity: [0.2, 0.4, 0.2] } : undefined}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="future-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        <circle cx="200" cy="140" r="50" fill="url(#future-core)" />

        {/* Orbital paths */}
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 22.5 * Math.PI) / 180;
          const x1 = 200 + 35 * Math.cos(angle);
          const y1 = 140 + 35 * Math.sin(angle);
          const x2 = 200 + 110 * Math.cos(angle);
          const y2 = 140 + 110 * Math.sin(angle);
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(148,163,184,0.15)" strokeWidth="0.5" />
          );
        })}

        {/* Orbiting dots */}
        {Array.from({ length: 6 }).map((_, i) => {
          const baseAngle = (i * 60 * Math.PI) / 180;
          return (
            <motion.circle
              key={i}
              r="3"
              fill={i % 2 === 0 ? "#4F46E5" : "#00C2FF"}
              animate={animated ? {
                cx: [200 + 80 * Math.cos(baseAngle), 200 + 80 * Math.cos(baseAngle + Math.PI), 200 + 80 * Math.cos(baseAngle)],
                cy: [140 + 80 * Math.sin(baseAngle), 140 + 80 * Math.sin(baseAngle + Math.PI), 140 + 80 * Math.sin(baseAngle)],
              } : { cx: 200 + 80 * Math.cos(baseAngle), cy: 140 + 80 * Math.sin(baseAngle) }}
              transition={{ duration: 8 + i, repeat: Infinity, ease: "linear" }}
              opacity="0.7"
            />
          );
        })}

        {/* Constellation points */}
        {[
          { x: 80, y: 60 }, { x: 320, y: 80 }, { x: 350, y: 200 },
          { x: 50, y: 190 }, { x: 180, y: 250 }, { x: 250, y: 50 },
        ].map((pt, i) => (
          <circle key={i} cx={pt.x} cy={pt.y} r="1.5" fill="#F8FAFC" opacity="0.4" />
        ))}
      </svg>
    </div>
  );
}

function HeroArt() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/15 via-transparent to-background" />
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-accent-primary/12 blur-[120px] animate-pulse-glow" />
      <div className="absolute right-1/4 top-1/4 h-[250px] w-[250px] rounded-full bg-accent-secondary/8 blur-[100px]" />
      <div className="absolute inset-0 mesh-grid opacity-40" />
    </div>
  );
}
