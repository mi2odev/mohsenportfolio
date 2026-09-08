import { section, wrap, h2 } from '../theme.js';
import SectionHead from './SectionHead.jsx';
import { INTERESTS } from '../data.js';

export default function Interests() {
  return (
    <section id="interests" style={section}>
      <div style={wrap()}>
        <SectionHead num="08" label="Interests" />
        <h2 data-reveal="0" style={{ ...h2, margin: '0 0 clamp(28px,3.5vw,44px)' }}>
          Areas of Interest
        </h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {INTERESTS.map((label, i) => (
            <span
              key={label}
              data-reveal={i * 45}
              className="chip-hover"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '11px 18px',
                minHeight: 44,
                borderRadius: 999,
                fontSize: 13.5,
                fontWeight: 500,
                cursor: 'default'
              }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
