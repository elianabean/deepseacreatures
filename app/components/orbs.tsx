import React from "react";

type Orb = {
  size: number;
  x: number;
  y: number;
  blur: number;
  opacity: number;
  duration: number;
  delay: number;
  colorA: string;
  colorB: string;
};

const ORBS: Orb[] = [
  { size: 420, x: 10, y: 20, blur: 50, opacity: 0.55, duration: 18, delay: -3, colorA: "	#2f9576", colorB: "#22d3ee" },
  { size: 320, x: 75, y: 25, blur: 45, opacity: 0.45, duration: 22, delay: -10, colorA: "#1f7984", colorB: "#60a5fa" },
  { size: 520, x: 65, y: 80, blur: 60, opacity: 0.35, duration: 28, delay: -6, colorA: "#34d399", colorB: "	#27617b" },
  { size: 260, x: 25, y: 75, blur: 40, opacity: 0.40, duration: 20, delay: -12, colorA: "#414a86", colorB: "#3d3579" },
];

export default function OrbsBackground() {
  return (
    <div className="orbs-bg absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {ORBS.map((o, i) => (
        <span
          key={i}
          className="orb absolute"
          style={{
            width: o.size,
            height: o.size,
            left: `${o.x}%`,
            top: `${o.y}%`,
            filter: `blur(${o.blur}px)`,
            opacity: o.opacity,
            animationDuration: `${o.duration}s`,
            animationDelay: `${o.delay}s`,
            background: `radial-gradient(circle at 30% 30%, ${o.colorA}, transparent 75%), radial-gradient(circle at 70% 70%, ${o.colorB}, transparent 75%)`,
          }}
        />
      ))}
      <div className="orbs-vignette" />
    </div>
  );
}
