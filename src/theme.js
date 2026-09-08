/**
 * Design tokens shared by every component.
 *
 * The colour values are mirrored as CSS custom properties in `index.css`
 * (`--c-bg`, `--c-deep`, …) for the rules that live in plain CSS. Change a
 * colour here and change it there too.
 */

export const C = {
  bg: '#FAFBFA',
  surface: '#FFFFFF',
  ink: '#1A2421',
  deep: '#0B3D2E',
  green: '#10B981',
  green2: '#34D399',
  muted: '#5B6B64',
  line: '#E5EBE8',
  blue: '#2563EB'
};

export const F = {
  display: "'Manrope',sans-serif",
  body: "'Inter',ui-sans-serif,system-ui,sans-serif",
  mono: "'JetBrains Mono',ui-monospace,monospace"
};

export const SHADOW = '0 8px 30px rgba(11,61,46,.06)';

/** Height of the sticky header — sections offset their scroll anchor by it. */
export const HEADER_H = 64;

const SECTION_PAD = 'clamp(64px,9vw,120px) clamp(20px,5vw,40px)';

/** Section shell without the hairline rule (for full-bleed / dark bands). */
export const sectionBase = {
  position: 'relative',
  scrollMarginTop: HEADER_H + 20,
  padding: SECTION_PAD
};

/** Standard section shell, separated from the previous one by a hairline. */
export const section = { ...sectionBase, borderTop: '1px solid ' + C.line };

/** Uppercase monospace label — the recurring "SEC.01", "2024", "LNG.02" type. */
export function mono(size, extra) {
  return {
    fontFamily: F.mono,
    fontSize: size,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    ...extra
  };
}

/** Centred content column. */
export function wrap(max = 1180) {
  return { width: '100%', maxWidth: max, margin: '0 auto' };
}

/** Soft green halo used behind a few sections. */
export function glow({ width, height, top = '-20%', left = '50%', right }) {
  return {
    position: 'absolute',
    top,
    ...(right === undefined ? { left, transform: 'translateX(-50%)' } : { right }),
    width,
    height,
    background: 'radial-gradient(ellipse,rgba(16,185,129,.07) 0%,rgba(16,185,129,0) 70%)',
    pointerEvents: 'none'
  };
}

export const h2 = {
  margin: 0,
  fontFamily: F.display,
  fontWeight: 700,
  letterSpacing: '-0.02em',
  fontSize: 'clamp(1.6rem,3.4vw,2.5rem)',
  color: C.deep
};

export const chip = {
  padding: '7px 13px',
  border: '1px solid ' + C.line,
  borderRadius: 999,
  fontSize: 12.5,
  color: C.ink,
  background: C.bg
};

export const pill = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  minHeight: 48,
  padding: '0 24px',
  borderRadius: 999,
  fontSize: 14,
  fontWeight: 600
};

/** 1 → "01". Used for every section and list index in the UI. */
export function pad(n) {
  return String(n).padStart(2, '0');
}
