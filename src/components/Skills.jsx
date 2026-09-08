import { C, F, section, wrap, h2, pad, mono } from '../theme.js';
import SectionHead from './SectionHead.jsx';
import { SKILLS } from '../data.js';
import { ICONS } from './Icons.jsx';

export default function Skills() {
  return (
    <section id="skills" style={{ ...section, background: C.surface }}>
      <div style={wrap()}>
        <SectionHead num="03" label="Expertise" />
        <h2 data-reveal="0" style={{ ...h2, margin: '0 0 clamp(30px,4vw,52px)' }}>
          Scientific Expertise
        </h2>

        <div
          style={{
            display: 'grid',
            gap: 14,
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,258px),1fr))'
          }}
        >
          {SKILLS.map((skill, i) => {
            const Icon = ICONS[skill.icon];
            return (
              <div
                key={skill.label}
                data-reveal={(i % 4) * 40}
                className="skill-card lift-shadow"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 18,
                  padding: 22,
                  borderRadius: 18,
                  background: C.bg
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: 12
                  }}
                >
                  {/* Same icon tile the experience cards use, so the two grids read as one system. */}
                  <span
                    aria-hidden="true"
                    className="skill-icon no-print"
                    style={{
                      flex: '0 0 auto',
                      width: 46,
                      height: 46,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid ' + C.line,
                      borderRadius: 14,
                      background: C.surface,
                      transition: 'border-color .35s ease, background .35s ease'
                    }}
                  >
                    <Icon size={24} />
                  </span>
                  <span aria-hidden="true" style={mono(10, { color: C.greenInk })}>
                    {pad(i + 1)}
                  </span>
                </div>

                <div
                  style={{
                    marginTop: 'auto',
                    fontFamily: F.display,
                    fontWeight: 600,
                    fontSize: 15,
                    lineHeight: 1.4,
                    color: C.ink
                  }}
                >
                  {skill.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
