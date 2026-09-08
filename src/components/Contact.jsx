import { useCallback, useEffect, useRef, useState } from 'react';
import { C, F, pill, mono, sectionBase, glow, SHADOW } from '../theme.js';
import SectionHead from './SectionHead.jsx';
import { EMAIL, PHONE, PHONE_HREF, LINKEDIN } from '../data.js';
import { CopyIcon, DownloadIcon, LinkedInIcon, MailIcon } from './Icons.jsx';
import logo from '../assets/logo.png';
import cv from '../assets/Mohcene_Meradji_CV.pdf';

const meta = mono(10.5, { color: C.muted });

/** Clipboard API where available, hidden-textarea fallback everywhere else. */
async function copyToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      /* Blocked (insecure origin, denied permission) — fall through. */
    }
  }
  const area = document.createElement('textarea');
  area.value = text;
  area.setAttribute('readonly', '');
  area.style.cssText = 'position:fixed;top:0;left:-9999px;opacity:0';
  document.body.appendChild(area);
  area.select();
  let ok = false;
  try {
    ok = document.execCommand('copy');
  } catch {
    ok = false;
  }
  document.body.removeChild(area);
  return ok;
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef(0);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copyEmail = useCallback(async () => {
    if (!(await copyToClipboard(EMAIL))) return;
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  }, []);

  return (
    <section id="contact" style={{ ...sectionBase, overflow: 'hidden' }}>
      <div aria-hidden="true" style={glow({ width: 'min(760px,110vw)', height: 480 })} />

      <div style={{ position: 'relative', width: '100%', maxWidth: 720, margin: '0 auto' }}>
        <SectionHead num="11" label="Contact" align="center" marginBottom="clamp(28px,4vw,44px)" />

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
            width="108"
            height="72"
            loading="lazy"
            style={{ height: 'clamp(52px,7vw,72px)', width: 'auto', margin: '0 auto 16px' }}
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
          <div
            style={{
              marginTop: 12,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '8px 16px'
            }}
          >
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
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10
              }}
            >
              <a
                href={'mailto:' + EMAIL}
                style={{
                  fontSize: 'clamp(14px,1.8vw,17px)',
                  fontWeight: 600,
                  color: C.deep,
                  wordBreak: 'break-all'
                }}
              >
                {EMAIL}
              </a>
              <button
                type="button"
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
                role="status"
                style={{
                  ...mono(10, { color: C.greenInk }),
                  transition: 'opacity .3s ease',
                  opacity: copied ? 1 : 0
                }}
              >
                {copied ? 'Copied' : ''}
              </span>
            </div>
            <a
              href={PHONE_HREF}
              style={{ fontSize: 'clamp(14px,1.6vw,16px)', fontWeight: 500, color: C.muted }}
            >
              {PHONE}
            </a>
          </div>

          <div
            style={{
              marginTop: 30,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 10
            }}
          >
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
            <a
              href={cv}
              download
              className="btn-outline"
              style={{ ...pill, gap: 9, padding: '0 22px' }}
            >
              <DownloadIcon />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
