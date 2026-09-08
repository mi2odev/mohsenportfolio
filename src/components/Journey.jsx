import { useState } from 'react';
import { C, section, wrap, h2, pad, mono, glow } from '../theme.js';
import SectionHead from './SectionHead.jsx';
import { STAGES } from '../data.js';
import { ICONS } from './Icons.jsx';

const PANEL_ID = 'journey-detail';

export default function Journey() {
  const [active, setActive] = useState(2);
  const [, activeLabel, activeText] = STAGES[active];

  return (
    <section id="journey" style={{ ...section, overflow: 'hidden' }}>
      <div aria-hidden="true" style={glow({ width: 'min(900px,110vw)', height: 420, top: '-10%' })} />

      <div style={{ ...wrap(), position: 'relative' }}>
        <SectionHead num="06" label="Journey" />
        <h2 data-reveal="0" style={{ ...h2, margin: '0 0 12px' }}>
          The Bioprocess Journey
        </h2>
        <p
          data-reveal="0"
          style={{
            margin: '0 0 clamp(34px,4.5vw,56px)',
            maxWidth: '56ch',
            fontSize: 'clamp(14.5px,1.5vw,16.5px)',
            lineHeight: 1.7,
            color: C.muted
          }}
        >
          From a single colony to a released biopharmaceutical product. Select a stage to read its
          definition.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: 'clamp(6px,1vw,10px)',
            rowGap: 'clamp(18px,2.5vw,26px)'
          }}
        >
          {STAGES.map(([key, label], i) => {
            const Icon = ICONS[key];
            const on = i === active;
            const pick = () => setActive(i);
            return (
              <div key={label} style={{ display: 'contents' }}>
                <button
                  type="button"
                  className="stage-btn"
                  data-reveal={i * 110}
                  onClick={pick}
                  onMouseEnter={pick}
                  onFocus={pick}
                  aria-pressed={on}
                  aria-controls={PANEL_ID}
                  style={{
                    flex: '0 0 auto',
                    width: 'clamp(96px,11.5vw,128px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 12,
                    textAlign: 'center'
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'relative',
                      width: 'clamp(52px,6vw,64px)',
                      height: 'clamp(52px,6vw,64px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      border: '1px solid ' + (on ? C.green : C.line),
                      background: on ? 'rgba(16,185,129,0.1)' : C.surface,
                      boxShadow: on
                        ? '0 8px 30px rgba(16,185,129,0.22)'
                        : '0 8px 30px rgba(11,61,46,0.05)',
                      transition:
                        'border-color .4s ease,background .4s ease,box-shadow .4s ease,transform .4s ease',
                      transform: on ? 'scale(1.08)' : 'scale(1)'
                    }}
                  >
                    <svg
                      viewBox="0 0 72 72"
                      data-amb="1"
                      style={{
                        position: 'absolute',
                        inset: -8,
                        width: 'calc(100% + 16px)',
                        height: 'calc(100% + 16px)',
                        opacity: on ? 1 : 0,
                        transition: 'opacity .4s ease',
                        animation: 'haloSpin 14s linear infinite'
                      }}
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle cx="36" cy="36" r="34.5" stroke={C.green} strokeWidth="1" strokeDasharray="3 7" />
                    </svg>
                    <Icon size={24} stroke={on ? C.deep : C.muted} />
                  </span>
                  <span aria-hidden="true" style={mono(9.5, { letterSpacing: '0.1em', color: C.green })}>
                    {pad(i + 1)}
                  </span>
                  <span style={{ fontSize: 12.5, fontWeight: 600, lineHeight: 1.4, color: C.ink }}>
                    {label}
                  </span>
                </button>

                {i < STAGES.length - 1 && (
                  <span
                    data-amb="1"
                    aria-hidden="true"
                    style={{
                      flex: '0 0 auto',
                      alignSelf: 'flex-start',
                      marginTop: 'clamp(25px,3vw,31px)',
                      width: 'clamp(20px,2.6vw,32px)',
                      height: 2,
                      borderRadius: 2,
                      backgroundImage:
                        'radial-gradient(circle at 3px 1px,' + C.green + ' 1.3px,transparent 1.7px)',
                      backgroundSize: '6px 2px',
                      backgroundRepeat: 'repeat-x',
                      animation: 'flow 1.6s linear infinite',
                      opacity: 0.7
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        <div
          id={PANEL_ID}
          data-reveal="0"
          aria-live="polite"
          style={{
            margin: 'clamp(30px,4vw,44px) auto 0',
            maxWidth: 720,
            padding: '22px 24px',
            border: '1px solid ' + C.line,
            borderRadius: 18,
            background: 'rgba(255,255,255,.72)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            textAlign: 'center',
            minHeight: 112
          }}
        >
          <div style={mono(10, { letterSpacing: '0.14em', color: C.green })}>
            {pad(active + 1)} — {activeLabel}
          </div>
          <p
            style={{
              margin: '12px 0 0',
              fontSize: 'clamp(14px,1.5vw,16px)',
              lineHeight: 1.7,
              color: C.muted,
              textWrap: 'pretty'
            }}
          >
            {activeText}
          </p>
        </div>
      </div>
    </section>
  );
}
