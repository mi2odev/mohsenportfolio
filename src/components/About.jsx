import { C, F, section, wrap, h2, SHADOW } from '../theme.js';
import SectionHead from './SectionHead.jsx';
import presenting from '../assets/presenting.png';

const dt = {
  fontFamily: F.mono,
  fontSize: 10,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: C.muted
};

const dd = { margin: 0, fontSize: 14, fontWeight: 600, color: C.ink, textAlign: 'right' };

const row = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: 14,
  alignItems: 'baseline',
  paddingBottom: 11,
  borderBottom: '1px solid ' + C.line
};

const FACTS = [
  ['Role', 'Bioprocess Engineer', C.ink],
  ['Field', 'Microbial Biotechnology', C.ink],
  ['Based', 'Constantine, Algeria', C.ink],
  ['Status', 'Open to opportunities', C.green]
];

export default function About({ stats, statsRef }) {
  return (
    <section id="about" style={{ ...section, background: C.surface }}>
      <div style={wrap()}>
        <SectionHead num="01" label="About" />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(32px,4.5vw,64px)' }}>
          <div data-reveal="0" style={{ flex: '1.4 1 380px', minWidth: 0 }}>
            <h2 style={{ ...h2, margin: '0 0 24px', lineHeight: 1.14, textWrap: 'balance' }}>
              A scientific practice built on process, not guesswork.
            </h2>
            <blockquote
              style={{
                margin: 0,
                padding: '0 0 0 20px',
                borderLeft: '2px solid ' + C.green,
                fontSize: 'clamp(15px,1.5vw,17px)',
                lineHeight: 1.75,
                color: C.muted,
                textWrap: 'pretty'
              }}
            >
              Passionate and detail-oriented Bioprocess Engineer with a strong academic foundation in microbial
              biotechnology and extensive hands-on internship experience. Proven skills in upstream and downstream
              processing, quality control, and bioprocess optimization. Eager to leverage technical expertise in
              GMP-compliant environments to contribute to cutting-edge biopharmaceutical manufacturing.
            </blockquote>
          </div>

          <div
            data-reveal="120"
            style={{ flex: '1 1 320px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 18 }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '4/3',
                borderRadius: 18,
                overflow: 'hidden',
                border: '1px solid ' + C.line,
                boxShadow: SHADOW
              }}
            >
              <img
                src={presenting}
                alt="Mohcene Meradji presenting"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '62% 30%', display: 'block' }}
              />
            </div>

            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                padding: 22,
                borderRadius: 18,
                border: '1px solid ' + C.line,
                background: 'rgba(255,255,255,.7)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow: SHADOW
              }}
            >
              <svg
                viewBox="0 0 80 320"
                style={{ position: 'absolute', right: -6, top: -24, height: '150%', width: 'auto', opacity: 0.06, pointerEvents: 'none' }}
                fill="none"
                stroke="#0B3D2E"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M40 0 C72 26 72 54 40 80 C8 106 8 134 40 160 C72 186 72 214 40 240 C8 266 8 294 40 320" />
                <path d="M40 0 C8 26 8 54 40 80 C72 106 72 134 40 160 C8 186 8 214 40 240 C72 266 72 294 40 320" />
              </svg>

              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 12,
                  paddingBottom: 12,
                  borderBottom: '1px solid ' + C.line
                }}
              >
                <span
                  style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.green }}
                >
                  Profile.ID — M.Meradji
                </span>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.green }}></span>
              </div>

              <dl style={{ position: 'relative', margin: 0, padding: '14px 0 0', display: 'grid', gap: 11 }}>
                {FACTS.map(([k, v, color], i) => (
                  <div key={k} style={i === FACTS.length - 1 ? { ...row, paddingBottom: 0, borderBottom: 'none' } : row}>
                    <dt style={dt}>{k}</dt>
                    <dd style={{ ...dd, color }}>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div
          ref={statsRef}
          style={{
            marginTop: 'clamp(36px,5vw,64px)',
            display: 'grid',
            gap: 16,
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,196px),1fr))'
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-reveal={i * 70}
              className="lift"
              style={{ padding: '24px 22px', borderRadius: 18, background: C.bg }}
            >
              <div
                style={{
                  fontFamily: F.display,
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  fontSize: 'clamp(2rem,3.6vw,2.75rem)',
                  lineHeight: 1,
                  color: C.deep
                }}
              >
                {s.shown}
              </div>
              <div
                style={{
                  marginTop: 12,
                  fontFamily: F.mono,
                  fontSize: 10,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: C.muted,
                  lineHeight: 1.6
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
