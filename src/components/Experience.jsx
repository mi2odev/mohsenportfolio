import { C, F, section, wrap, h2, mono, SHADOW } from '../theme.js';
import SectionHead from './SectionHead.jsx';
import { EXPERIENCE } from '../data.js';
import { ICONS } from './Icons.jsx';

export default function Experience() {
  return (
    <section id="experience" style={section}>
      <div style={wrap()}>
        <SectionHead num="04" label="Experience" />
        <h2 data-reveal="0" style={{ ...h2, margin: '0 0 clamp(30px,4vw,52px)' }}>
          Industrial &amp; Research Experience
        </h2>

        <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,390px),1fr))' }}>
          {EXPERIENCE.map(([key, year, org, kind, tone, detail], i) => {
            const Icon = ICONS[key];
            return (
              <div
                key={org}
                data-reveal={(i % 2) * 60}
                className="lift"
                style={{
                  display: 'flex',
                  gap: 18,
                  padding: 'clamp(22px,3vw,30px)',
                  borderRadius: 20,
                  background: C.surface,
                  boxShadow: SHADOW
                }}
              >
                <div
                  style={{
                    flex: '0 0 auto',
                    width: 46,
                    height: 46,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid ' + C.line,
                    borderRadius: 14,
                    background: C.bg
                  }}
                >
                  <Icon size={24} />
                </div>

                <div style={{ minWidth: 0 }}>
                  <div style={mono(10, { color: C.green })}>{year}</div>
                  <h3
                    style={{
                      margin: '8px 0 0',
                      fontFamily: F.display,
                      fontWeight: 700,
                      letterSpacing: '-0.015em',
                      fontSize: 'clamp(1.05rem,1.9vw,1.3rem)',
                      lineHeight: 1.3,
                      color: C.deep
                    }}
                  >
                    {org}
                  </h3>
                  <div
                    style={{
                      marginTop: 12,
                      display: 'inline-flex',
                      padding: '5px 11px',
                      borderRadius: 999,
                      background: tone === 'blue' ? 'rgba(37,99,235,.08)' : 'rgba(16,185,129,.1)',
                      ...mono(10, {
                        letterSpacing: '0.1em',
                        color: tone === 'blue' ? C.blue : C.deep
                      })
                    }}
                  >
                    {kind}
                  </div>
                  <p style={{ margin: '14px 0 0', fontSize: 14.5, lineHeight: 1.65, color: C.muted }}>{detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
