import { C, mono } from '../theme.js';

/**
 * The recurring "SEC.0X / Label" rule above every section heading.
 * `align="center"` drops the trailing hairline for the centred sections.
 */
export default function SectionHead({ num, label, marginBottom, align = 'left' }) {
  const centered = align === 'center';
  return (
    <div
      data-reveal="0"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: centered ? 'center' : 'flex-start',
        gap: 12,
        marginBottom: marginBottom || 'clamp(28px,4vw,48px)'
      }}
    >
      <span style={mono(11, { color: C.green })}>
        SEC.{num} / {label}
      </span>
      {!centered && <span aria-hidden="true" style={{ flex: 1, height: 1, background: C.line }} />}
    </div>
  );
}
