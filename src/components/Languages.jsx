import { C, F, section, wrap, pad, mono, h2 } from '../theme.js';
import SectionHead from './SectionHead.jsx';
import { LANGS } from '../data.js';

export default function Languages() {
  return (
    <section id="languages" style={{ ...section, background: C.surface }}>
      <div style={wrap(1000)}>
        <SectionHead num="09" label="Languages" />
        <h2 data-reveal="0" style={{ ...h2, margin: '0 0 clamp(28px,3.5vw,44px)' }}>
          Languages
        </h2>

        <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))' }}>
          {LANGS.map(([name, native, code, glyph], i) => (
            <div
              key={name}
              data-reveal={i * 80}
              className="lift-shadow"
              style={{ position: 'relative', overflow: 'hidden', padding: '26px 24px', borderRadius: 18, background: C.bg }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  right: 6,
                  bottom: -26,
                  fontFamily: F.display,
                  fontWeight: 800,
                  fontSize: 104,
                  lineHeight: 1,
                  color: 'rgba(11,61,46,.05)',
                  pointerEvents: 'none',
                  userSelect: 'none'
                }}
              >
                {glyph}
              </span>

              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 18 }}>
                <span
                  style={{
                    position: 'relative',
                    width: 62,
                    height: 62,
                    flex: '0 0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <svg
                    viewBox="0 0 62 62"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="31" cy="31" r="27" stroke={C.line} strokeWidth="1.5" />
                    <g data-amb="1" style={{ transformOrigin: '31px 31px', animation: 'slowSpin 22s linear infinite' }}>
                      <circle
                        cx="31"
                        cy="31"
                        r="27"
                        stroke={C.green}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="44.5 12"
                      />
                    </g>
                    <circle cx="31" cy="31" r="21" stroke={C.line} strokeWidth="1" strokeDasharray="1.5 5" />
                  </svg>
                  <span
                    style={{
                      fontFamily: F.mono,
                      fontSize: 11.5,
                      letterSpacing: '0.1em',
                      fontWeight: 500,
                      color: C.deep
                    }}
                  >
                    {code}
                  </span>
                </span>

                <div style={{ minWidth: 0 }}>
                  <div aria-hidden="true" style={mono(9.5, { letterSpacing: '0.14em', color: C.green })}>
                    LNG.{pad(i + 1)}
                  </div>
                  <div
                    style={{
                      marginTop: 6,
                      fontFamily: F.display,
                      fontWeight: 700,
                      fontSize: 18,
                      letterSpacing: '-0.01em',
                      color: C.deep
                    }}
                  >
                    {name}
                  </div>
                  <div style={{ marginTop: 4, fontSize: 13.5, color: C.muted }}>{native}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
