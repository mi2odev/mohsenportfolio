import { useState } from 'react';
import { C, F, pill, SHADOW } from '../theme.js';
import { EMAIL, PHONE, PHONE_HREF, LINKEDIN } from '../data.js';
import { CopyIcon, DownloadIcon, LinkedInIcon, MailIcon } from './Icons.jsx';
import logo from '../assets/logo.png';
import cv from '../assets/Mohcene_Meradji_CV.pdf';

const meta = {
  fontFamily: F.mono,
  fontSize: 10.5,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: C.muted
};

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    const done = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    };
    if (navigator.clipboard) navigator.clipboard.writeText(EMAIL).then(done, done);
    else done();
  };

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        overflow: 'hidden',
        scrollMarginTop: 84,
        padding: 'clamp(64px,9vw,120px) clamp(20px,5vw,40px)'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(760px,110vw)',
          height: 480,
          background: 'radial-gradient(ellipse,rgba(16,185,129,.07) 0%,rgba(16,185,129,0) 70%)',
          pointerEvents: 'none'
        }}
      ></div>

      <div style={{ position: 'relative', width: '100%', maxWidth: 720, margin: '0 auto' }}>
        <div
          data-reveal="0"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 'clamp(28px,4vw,44px)',
            justifyContent: 'center'
          }}
        >
          <span
            style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.green }}
          >
            SEC.11 / Contact
          </span>
        </div>

        <div
          data-reveal="0"
          style={{
            padding: 'clamp(28px,4vw,44px)',
            border: '1px solid ' + C.line,
            borderRadius: 22,
            background: 'rgba(255,255,255,.72)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            boxShadow: SHADOW,
            textAlign: 'center'
          }}
        >
          <img
            src={logo}
            alt=""
            style={{ height: 'clamp(52px,7vw,72px)', width: 'auto', display: 'block', margin: '0 auto 16px' }}
          />
          <h2
            style={{
              margin: 0,
              fontFamily: F.display,
              fontWeight: 800,
              letterSpacing: '-0.025em',
              lineHeight: 1.12,
              fontSize: 'clamp(1.7rem,4vw,2.6rem)',
              color: C.deep
            }}
          >
            Mohcene Meradji
          </h2>
          <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px 16px' }}>
            <span style={meta}>Bioprocess Engineer</span>
            <span style={meta}>Constantine, Algeria</span>
          </div>

          <div
            style={{
              marginTop: 30,
              paddingTop: 26,
              borderTop: '1px solid ' + C.line,
              display: 'grid',
              gap: 12
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
              <a
                href={'mailto:' + EMAIL}
                style={{ fontSize: 'clamp(14px,1.8vw,17px)', fontWeight: 600, color: C.deep, wordBreak: 'break-all' }}
              >
                {EMAIL}
              </a>
              <button
                onClick={copyEmail}
                aria-label="Copy email address"
                className="icon-btn"
                style={{
                  width: 34,
                  height: 34,
                  flex: '0 0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  background: C.surface,
                  cursor: 'pointer'
                }}
              >
                <CopyIcon />
              </button>
              <span
                style={{
                  fontFamily: F.mono,
                  fontSize: 10,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: C.green,
                  transition: 'opacity .3s ease',
                  opacity: copied ? 1 : 0
                }}
              >
                Copied
              </span>
            </div>
            <a href={PHONE_HREF} style={{ fontSize: 'clamp(14px,1.6vw,16px)', fontWeight: 500, color: C.muted }}>
              {PHONE}
            </a>
          </div>

          <div style={{ marginTop: 30, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark"
              style={{ ...pill, gap: 9, padding: '0 22px' }}
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a href={'mailto:' + EMAIL} className="btn-green" style={{ ...pill, gap: 9, padding: '0 22px' }}>
              <MailIcon />
              Email
            </a>
            <a href={cv} download className="btn-outline" style={{ ...pill, gap: 9, padding: '0 22px' }}>
              <DownloadIcon />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
