import { useMemo } from 'react';
import { C, mono } from '../theme.js';
import logo from '../assets/logo.png';

export default function Footer() {
  const particles = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        l: ((i * 71) % 97) + 2 + '%',
        t: ((i * 37) % 78) + 8 + '%',
        s: 2 + (i % 3),
        o: (0.18 + ((i * 5) % 4) * 0.07).toFixed(2),
        d: (15 + (i % 7) * 2.2).toFixed(1) + 's',
        dl: ((i * 0.81) % 8).toFixed(2) + 's'
      })),
    []
  );

  return (
    <footer
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: C.deep,
        padding: 'clamp(40px,6vw,64px) clamp(20px,5vw,40px)'
      }}
    >
      {particles.map((p, i) => (
        <span
          key={i}
          data-amb="1"
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: p.l,
            top: p.t,
            width: p.s,
            height: p.s,
            opacity: p.o,
            borderRadius: '50%',
            background: C.green,
            pointerEvents: 'none',
            animation: 'drift ' + p.d + ' ease-in-out infinite',
            animationDelay: p.dl
          }}
        ></span>
      ))}

      <div style={{ position: 'relative', width: '100%', maxWidth: 1180, margin: '0 auto' }}>
        <svg
          viewBox="0 0 1200 24"
          preserveAspectRatio="none"
          style={{ width: '100%', height: 24, opacity: 0.5 }}
          fill="none"
          stroke={C.green}
          strokeWidth="1"
          aria-hidden="true"
        >
          <path d="M0 12 C50 0 100 24 150 12 C200 0 250 24 300 12 C350 0 400 24 450 12 C500 0 550 24 600 12 C650 0 700 24 750 12 C800 0 850 24 900 12 C950 0 1000 24 1050 12 C1100 0 1150 24 1200 12" />
          <path
            d="M0 12 C50 24 100 0 150 12 C200 24 250 0 300 12 C350 24 400 0 450 12 C500 24 550 0 600 12 C650 24 700 0 750 12 C800 24 850 0 900 12 C950 24 1000 0 1050 12 C1100 24 1150 0 1200 12"
            opacity="0.6"
          />
        </svg>

        <div
          style={{
            marginTop: 26,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 14
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, minWidth: 0 }}>
            <img
              src={logo}
              alt=""
              width="51"
              height="34"
              loading="lazy"
              style={{ height: 34, width: 'auto', filter: 'drop-shadow(0 0 10px rgba(16,185,129,.25))' }}
            />
            <span style={mono(10, { color: 'rgba(255,255,255,.55)', lineHeight: 1.7 })}>
              © {new Date().getFullYear()} Mohcene Meradji — Bioprocess Engineer · Constantine, DZ
            </span>
          </div>
          <a
            href="#home"
            style={{
              ...mono(10, { color: C.green }),
              display: 'inline-flex',
              alignItems: 'center',
              minHeight: 44,
              padding: '0 2px'
            }}
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
