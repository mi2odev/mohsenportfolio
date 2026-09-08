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

export function mono(size, extra) {
  return Object.assign({
    fontFamily: F.mono,
    fontSize: size,
    letterSpacing: '0.12em',
    textTransform: 'uppercase'
  }, extra || {});
}

export const section = {
  position: 'relative',
  scrollMarginTop: 84,
  padding: 'clamp(64px,9vw,120px) clamp(20px,5vw,40px)',
  borderTop: '1px solid ' + C.line
};

export function wrap(max) {
  return { width: '100%', maxWidth: max || 1180, margin: '0 auto' };
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

export function pad(n) {
  return String(n).padStart(2, '0');
}
