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

        <div style={{ display: 'grid', gap: 14, gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,258px),1fr))' }}>
          {SKILLS.map(([key, label], i) => {
            const Icon = ICONS[key];
            return (
              <div
                key={label}
                data-reveal={(i % 4) * 40}
                className="lift-shadow"
                style={{ padding: 22, borderRadius: 18, background: C.bg }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
                  <span aria-hidden="true" style={mono(10, { color: C.green })}>
                    {pad(i + 1)}
                  </span>
                  <Icon size={26} />
                </div>
                <div style={{ fontFamily: F.display, fontWeight: 600, fontSize: 15, lineHeight: 1.4, color: C.ink }}>
                  {label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
