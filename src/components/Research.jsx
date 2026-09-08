import { C, F, section, wrap, chip, mono, SHADOW } from '../theme.js';
import SectionHead from './SectionHead.jsx';
import { RESEARCH } from '../data.js';

export default function Research() {
  return (
    <section id="research" style={{ ...section, background: C.surface }}>
      <div style={wrap()}>
        <SectionHead num="05" label="Research" />

        <div
          data-reveal="0"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            border: '1px solid ' + C.line,
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: SHADOW
          }}
        >
          <div
            className="no-print"
            style={{
              flex: '1 1 300px',
              minWidth: 0,
              position: 'relative',
              minHeight: 260,
              background: C.deep,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 32
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)',
                backgroundSize: '40px 40px'
              }}
            ></div>

            <svg
              viewBox="0 0 300 300"
              style={{ position: 'relative', width: '100%', maxWidth: 280, height: 'auto', overflow: 'visible' }}
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="mmGlow" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0" stopColor={C.green} stopOpacity="0.26" />
                  <stop offset="1" stopColor={C.green} stopOpacity="0" />
                </radialGradient>
                <linearGradient id="mmBond" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor={C.green2} />
                  <stop offset="1" stopColor={C.blue} />
                </linearGradient>
              </defs>
              <circle cx="150" cy="150" r="132" fill="url(#mmGlow)" />
              <circle cx="150" cy="150" r="104" stroke="rgba(255,255,255,.14)" strokeWidth="1" strokeDasharray="2 8" />
              <circle cx="150" cy="150" r="134" stroke="rgba(255,255,255,.09)" strokeWidth="1" />
              <g data-amb="1" style={{ transformOrigin: '150px 150px', animation: 'slowSpin 70s linear infinite' }}>
                <g stroke="url(#mmBond)" strokeWidth="1.2">
                  <path d="M150 96 L196.8 123 L196.8 177 L150 204 L103.2 177 L103.2 123 Z" />
                  <path d="M150 108 L186.4 129" opacity="0.55" />
                  <path d="M186.4 171 L150 192" opacity="0.55" />
                  <path d="M113.6 171 L113.6 129" opacity="0.55" />
                </g>
                <g
                  stroke={C.green2}
                  strokeWidth="1"
                  opacity="0.8"
                  strokeDasharray="4 6"
                  data-amb="1"
                  style={{ animation: 'dashFlow 9s linear infinite' }}
                >
                  <path d="M150 96 L150 46" />
                  <path d="M196.8 177 L240 202" />
                  <path d="M103.2 123 L60 98" />
                  <path d="M196.8 123 L240 98" />
                  <path d="M103.2 177 L60 202" />
                </g>
                <g fill={C.green}>
                  <circle cx="150" cy="96" r="4" />
                  <circle cx="196.8" cy="123" r="4" />
                  <circle cx="196.8" cy="177" r="4" />
                  <circle cx="150" cy="204" r="4" />
                  <circle cx="103.2" cy="177" r="4" />
                  <circle cx="103.2" cy="123" r="4" />
                </g>
                <g fill={C.blue}>
                  <circle cx="150" cy="46" r="5" />
                  <circle cx="240" cy="98" r="3.4" />
                </g>
                <g fill={C.green2}>
                  <circle cx="240" cy="202" r="4.2" />
                  <circle cx="60" cy="98" r="4.2" />
                  <circle cx="60" cy="202" r="3.4" />
                </g>
                <g stroke={C.green2} opacity="0.4" data-amb="1" style={{ animation: 'nodePulse 6s ease-in-out infinite' }}>
                  <circle cx="150" cy="46" r="10" />
                  <circle cx="240" cy="202" r="9" />
                  <circle cx="60" cy="98" r="9" />
                </g>
              </g>
              <circle cx="150" cy="150" r="7" fill={C.surface} />
              <circle
                cx="150"
                cy="150"
                r="14"
                stroke={C.surface}
                opacity="0.35"
                data-amb="1"
                style={{ animation: 'nodePulse 3.5s ease-in-out infinite' }}
              />
              <g data-amb="1" style={{ transformOrigin: '150px 150px', animation: 'slowSpin 34s linear infinite reverse' }}>
                <circle cx="150" cy="16" r="2.6" fill={C.green2} opacity="0.9" />
                <circle cx="284" cy="150" r="2" fill={C.blue} opacity="0.6" />
                <circle cx="150" cy="284" r="2.2" fill={C.green2} opacity="0.6" />
              </g>
            </svg>
          </div>

          <div style={{ flex: '1.25 1 380px', minWidth: 0, padding: 'clamp(28px,4vw,48px)', background: C.surface }}>
            <span style={mono(11, { color: C.greenInk })}>Featured Research</span>
            <h2
              style={{
                margin: '16px 0 0',
                fontFamily: F.display,
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.18,
                fontSize: 'clamp(1.45rem,3vw,2.1rem)',
                color: C.deep,
                textWrap: 'balance'
              }}
            >
              {RESEARCH.title}
            </h2>
            <p
              style={{
                margin: '18px 0 0',
                maxWidth: '52ch',
                fontSize: 'clamp(14.5px,1.5vw,16.5px)',
                lineHeight: 1.75,
                color: C.muted,
                textWrap: 'pretty'
              }}
            >
              {RESEARCH.summary}
            </p>
            <div
              style={{
                marginTop: 26,
                paddingTop: 22,
                borderTop: '1px solid ' + C.line,
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8
              }}
            >
              {RESEARCH.tags.map(t => (
                <span key={t} style={chip}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
