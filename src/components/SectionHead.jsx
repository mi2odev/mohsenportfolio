import { C, F } from '../theme.js';

export default function SectionHead({ num, label, marginBottom }) {
  return (
    <div
      data-reveal="0"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: marginBottom || 'clamp(28px,4vw,48px)'
      }}
    >
      <span
        style={{
          fontFamily: F.mono,
          fontSize: 11,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: C.green
        }}
      >
        SEC.{num} / {label}
      </span>
      <span style={{ flex: 1, height: 1, background: C.line }}></span>
    </div>
  );
}
