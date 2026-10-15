// Decorative topographic contour lines — the signature "Washington Cascades" motif.
// Pure SVG, no client JS. Reused across sections for depth & atmosphere.

export default function Topo({ className = '', stroke = '#0E5A6B', opacity = 0.12 }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 600"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g stroke={stroke} strokeWidth="1.25" opacity={opacity} fill="none">
        <path d="M-20 120 C120 60 260 180 400 120 S680 40 820 120" />
        <path d="M-20 170 C120 110 260 230 400 170 S680 90 820 170" />
        <path d="M-20 220 C120 160 260 280 400 220 S680 140 820 220" />
        <path d="M-20 280 C140 210 280 340 420 270 S700 190 820 270" />
        <path d="M-20 340 C160 260 300 400 440 330 S720 250 820 330" />
        <path d="M-20 400 C160 320 320 450 460 390 S740 310 820 390" />
        <path d="M-20 460 C180 380 340 500 480 450 S760 380 820 450" />
        <path d="M-20 520 C180 450 360 560 500 510 S780 450 820 520" />
      </g>
      <g stroke={stroke} strokeWidth="1.25" opacity={opacity * 0.7} fill="none">
        <ellipse cx="400" cy="300" rx="120" ry="70" />
        <ellipse cx="400" cy="300" rx="180" ry="110" />
        <ellipse cx="400" cy="300" rx="250" ry="150" />
      </g>
    </svg>
  );
}
