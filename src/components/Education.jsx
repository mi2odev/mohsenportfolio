import { C, F, section, wrap, h2, chip, SHADOW } from '../theme.js';
import SectionHead from './SectionHead.jsx';
import { EDUCATION } from '../data.js';

export default function Education() {
  return (
    <section id="education" style={section}>
      <div style={wrap()}>
        <SectionHead num="02" label="Education" />
        <h2 data-reveal="0" style={{ ...h2, margin: '0 0 clamp(32px,4vw,56px)' }}>
          Academic Formation
        </h2>

        <div style={{ position: 'relative', paddingLeft: 'clamp(28px,4vw,44px)' }}>
          <span
            style={{
              position: 'absolute',
              left: 5,
              top: 8,
              bottom: 8,
              width: 1,
              background: 'linear-gradient(180deg,#10B981,rgba(16,185,129,.15))'
            }}
          ></span>

          {EDUCATION.map((e, i) => (
            <div
              key={e.title}
              data-reveal={i * 120}
              style={{ position: 'relative', marginBottom: i === EDUCATION.length - 1 ? 0 : 22 }}
            >
              <span
                data-amb="1"
                style={{
                  position: 'absolute',
                  left: 'calc(-1 * clamp(28px,4vw,44px))',
                  top: 26,
                  width: 11,
                  height: 11,
                  borderRadius: '50%',
                  background: C.green,
                  border: '2px solid ' + C.bg,
                  animation: 'dotPulse 2.8s ease-out infinite',
                  animationDelay: i === 0 ? '0s' : '.8s'
                }}
              ></span>

              <div
                className="hover-border"
                style={{
                  padding: 'clamp(22px,3vw,32px)',
                  borderRadius: 20,
                  background: C.surface,
                  boxShadow: SHADOW
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <span
                    style={{
                      fontFamily: F.mono,
                      fontSize: 10,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: C.muted
                    }}
                  >
                    {e.period}
                  </span>
                  {e.badge && (
                    <span
                      style={{
                        padding: '5px 11px',
                        borderRadius: 999,
                        background: 'rgba(16,185,129,.1)',
                        color: C.deep,
                        fontFamily: F.mono,
                        fontSize: 10,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase'
                      }}
                    >
                      {e.badge}
                    </span>
                  )}
                </div>

                <h3
                  style={{
                    margin: 0,
                    fontFamily: F.display,
                    fontWeight: 700,
                    letterSpacing: '-0.015em',
                    fontSize: 'clamp(1.1rem,2.1vw,1.45rem)',
                    lineHeight: 1.3,
                    color: C.deep
                  }}
                >
                  {e.title}
                </h3>
                <p style={{ margin: '8px 0 0', fontSize: 14, fontWeight: 500, color: C.muted }}>{e.school}</p>

                <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {e.tags.map(t => (
                    <span key={t} style={chip}>
                      {t}
                    </span>
                  ))}
                </div>

                {e.note && (
                  <p
                    style={{
                      margin: '20px 0 0',
                      paddingTop: 18,
                      borderTop: '1px solid ' + C.line,
                      fontStyle: 'italic',
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: C.muted,
                      textWrap: 'pretty'
                    }}
                  >
                    {e.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
