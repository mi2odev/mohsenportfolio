import { section, wrap, h2 } from '../theme.js';
import SectionHead from './SectionHead.jsx';
import { INTERESTS } from '../data.js';
import { INTEREST_GLYPHS } from './Icons.jsx';

export default function Interests() {
  return (
    <section id="interests" style={section}>
      <div style={wrap(1000)}>
        <SectionHead num="08" label="Interests" />
        <h2 data-reveal="0" style={{ ...h2, margin: '0 0 clamp(28px,3.5vw,44px)' }}>
          Areas of Interest
        </h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {INTERESTS.map((label, i) => {
            const Glyph = INTEREST_GLYPHS[i % 4];
            return (
              <span
                key={label}
                data-reveal={i * 45}
                className="chip-hover"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 9,
                  padding: '11px 16px',
                  minHeight: 44,
                  borderRadius: 999,
                  fontSize: 13.5,
                  fontWeight: 500,
                  cursor: 'default'
                }}
              >
                <Glyph />
                {label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
