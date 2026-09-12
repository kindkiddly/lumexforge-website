"use client";

import { useEffect, useRef } from "react";

const LINE_COUNT = 100;
const CANVAS_HEIGHT = 180;
const MINT = "#00e6a8";
const CYAN = "#00c2ff";
const MIN_LENGTH = 60;
const MAX_LENGTH = 280;
const BREATHE_AMPLITUDE = 15;
const BREATHE_SPEED = 0.8;
const MAX_DEFLECTION = 15;
const STROKE_WIDTH = 0.8;
const DOT_RADIUS = 2;

type SunburstLine = {
  angle: number;
  baseLength: number;
  opacity: number;
  color: string;
  phase: number;
};

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function createLines(): SunburstLine[] {
  return Array.from({ length: LINE_COUNT }, (_, index) => ({
    angle: (index / (LINE_COUNT - 1)) * Math.PI,
    baseLength: randomBetween(MIN_LENGTH, MAX_LENGTH),
    opacity: randomBetween(0.3, 0.9),
    color: index % 2 === 0 ? MINT : CYAN,
    phase: randomBetween(0, Math.PI * 2),
  }));
}

function SunburstAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<SunburstLine[]>(createLines());
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const width = container.clientWidth;
      const dpr = window.devicePixelRatio || 1;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(CANVAS_HEIGHT * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${CANVAS_HEIGHT}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const draw = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = (timestamp - startTimeRef.current) / 1000;
      const width = container.clientWidth;
      const height = CANVAS_HEIGHT;
      const originX = width / 2;
      const originY = height;

      ctx.clearRect(0, 0, width, height);

      for (const line of linesRef.current) {
        const breathe =
          Math.sin(elapsed * BREATHE_SPEED + line.phase) * BREATHE_AMPLITUDE;
        const length = line.baseLength + breathe;

        let endX = originX + Math.cos(line.angle) * length;
        let endY = originY - Math.sin(line.angle) * length;

        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - endX;
          const dy = mouseRef.current.y - endY;
          const distance = Math.hypot(dx, dy) || 1;
          const influence = Math.max(0, 1 - distance / Math.max(width, height));
          const eased = influence * influence;
          const deflection = eased * MAX_DEFLECTION;

          endX += (dx / distance) * deflection;
          endY += (dy / distance) * deflection;
        }

        ctx.beginPath();
        ctx.moveTo(originX, originY);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = line.color;
        ctx.globalAlpha = line.opacity;
        ctx.lineWidth = STROKE_WIDTH;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(endX, endY, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = line.color;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      rafRef.current = window.requestAnimationFrame(draw);
    };

    resizeCanvas();
    rafRef.current = window.requestAnimationFrame(draw);

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(container);

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.cancelAnimationFrame(rafRef.current);
      resizeObserver.disconnect();
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="h-full w-full">
      <canvas
        ref={canvasRef}
        className="block h-full w-full"
        aria-hidden="true"
      />
    </div>
  );
}

export default SunburstAnimation;
export { SunburstAnimation };
