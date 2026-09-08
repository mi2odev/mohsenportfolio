import { useState } from 'react';
import { C, F, section, wrap, h2, pad, mono } from '../theme.js';
import SectionHead from './SectionHead.jsx';
import { CERTS } from '../data.js';
import { ChevronDown } from './Icons.jsx';

export default function Certifications() {
  const [open, setOpen] = useState(-1);

  return (
    <section id="certifications" style={{ ...section, background: C.surface }}>
      <div style={wrap(900)}>
        <SectionHead num="07" label="Certifications" />
        <h2 data-reveal="0" style={{ ...h2, margin: '0 0 clamp(28px,3.5vw,44px)' }}>
          Workshops &amp; Certifications
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {CERTS.map((cert, i) => {
            const isOpen = open === i;
            const panelId = 'cert-panel-' + i;
            const buttonId = 'cert-button-' + i;
            return (
              <div
                key={cert.title}
                data-reveal={i * 55}
                style={{
                  border: '1px solid ' + (isOpen ? C.green : C.line),
                  borderRadius: 18,
                  background: C.bg,
                  overflow: 'hidden',
                  transition: 'border-color .35s ease'
                }}
              >
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'clamp(12px,2vw,20px)',
                    padding: 'clamp(16px,2.4vw,22px)',
                    background: 'transparent',
                    border: 0,
                    cursor: 'pointer',
                    textAlign: 'left',
                    minHeight: 56
                  }}
                >
                  <span aria-hidden="true" style={{ flex: '0 0 auto', ...mono(10, { color: C.greenInk }) }}>
                    {pad(i + 1)}
                  </span>
                  <span
                    style={{
                      flex: 1,
                      minWidth: 0,
                      fontFamily: F.display,
                      fontWeight: 600,
                      fontSize: 'clamp(14px,1.7vw,16.5px)',
                      lineHeight: 1.4,
                      color: C.deep
                    }}
                  >
                    {cert.title}
                  </span>
                  <span style={{ flex: '0 0 auto', ...mono(10, { letterSpacing: '0.1em', color: C.muted }) }}>
                    {cert.year}
                  </span>
                  <span
                    aria-hidden="true"
                    className="no-print"
                    style={{
                      flex: '0 0 auto',
                      width: 26,
                      height: 26,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      border: '1px solid ' + C.line,
                      background: C.surface,
                      transition: 'transform .35s ease',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  >
                    <ChevronDown />
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="panel-in"
                  style={{
                    padding: '16px clamp(16px,2.4vw,22px) clamp(18px,2.4vw,24px)',
                    margin: '0 clamp(16px,2.4vw,22px)',
                    display: isOpen ? 'flex' : 'none',
                    flexWrap: 'wrap',
                    gap: '10px 22px',
                    alignItems: 'center',
                    borderTop: '1px solid ' + C.line
                  }}
                >
                  <span style={mono(10, { color: C.muted })}>Institution</span>
                  <span style={{ fontSize: 14, fontWeight: 500, color: C.ink }}>{cert.org}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
