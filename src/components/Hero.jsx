import { useMemo } from 'react';
import { C, F, pill, mono, sectionBase } from '../theme.js';
import { ArrowDown, DownloadIcon } from './Icons.jsx';
import portrait from '../assets/portrait.jpg';
import cv from '../assets/Mohcene_Meradji_CV.pdf';

const word = delay => ({
  display: 'inline-block',
  animation: 'wordIn .9s cubic-bezier(.16,1,.3,1) both',
  animationDelay: delay
});

const meta = mono(11, { color: C.muted });

export default function Hero({ portraitOn }) {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => {
        const a = (i * 137.508) % 360;
        const r = 18 + ((i * 53) % 34);
        return {
          l: (50 + r * Math.cos((a * Math.PI) / 180)).toFixed(1) + '%',
          t: (50 + r * Math.sin((a * Math.PI) / 180)).toFixed(1) + '%',
          s: 2 + (i % 4),
          o: (0.3 + ((i * 7) % 4) * 0.08).toFixed(2),
          d: (13 + (i % 9) * 1.8).toFixed(1) + 's',
          dl: ((i * 0.63) % 7).toFixed(2) + 's'
        };
      }),
    []
  );

  return (
    <section
      id="home"
      style={{
        ...sectionBase,
        overflow: 'hidden',
        padding: 'clamp(48px,7vw,92px) clamp(20px,5vw,40px) clamp(56px,7vw,96px)'
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-18%',
          right: '-8%',
          width: 'min(760px,95vw)',
          height: 'min(760px,95vw)',
          borderRadius: '50%',
          background: 'radial-gradient(circle,rgba(16,185,129,.08) 0%,rgba(16,185,129,0) 68%)',
          pointerEvents: 'none'
        }}
      ></div>
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(11,61,46,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(11,61,46,.04) 1px,transparent 1px)',
          backgroundSize: '52px 52px',
          pointerEvents: 'none',
          maskImage: 'linear-gradient(180deg,#000,transparent 88%)',
          WebkitMaskImage: 'linear-gradient(180deg,#000,transparent 88%)'
        }}
      ></div>

      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 1180,
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 'clamp(36px,5vw,64px)'
        }}
      >
        <div style={{ flex: '1.35 1 400px', minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
            <span aria-hidden="true" style={{ width: 26, height: 1, background: C.green }} />
            <span style={mono(11, { color: C.green })}>
              Bioprocess Engineer — Microbial Biotechnology
            </span>
          </div>

          <h1
            style={{
              margin: 0,
              fontFamily: F.display,
              fontWeight: 800,
              letterSpacing: '-0.025em',
              lineHeight: 1.05,
              fontSize: 'clamp(2.5rem,6vw,4.5rem)',
              color: C.deep,
              textWrap: 'balance'
            }}
          >
            <span style={word('.04s')}>Engineering</span>{' '}
            <span style={{ ...word('.16s'), color: C.green }}>Biology.</span>
            <br />
            <span style={word('.28s')}>Optimizing</span>{' '}
            <span style={{ ...word('.4s'), color: C.green }}>Bioprocesses.</span>
          </h1>

          <p
            style={{
              margin: '26px 0 0',
              maxWidth: '56ch',
              fontSize: 'clamp(15px,1.6vw,18px)',
              lineHeight: 1.7,
              color: C.muted,
              textWrap: 'pretty',
              ...word('.52s'),
              display: 'block'
            }}
          >
            Bioprocess Engineer specializing in Microbial Biotechnology, Bioprocess Optimization, Upstream &amp;
            Downstream Processing, and Quality Control.
          </p>

          <div
            style={{
              margin: '32px 0 0',
              padding: '18px 0 0',
              borderTop: '1px solid ' + C.line,
              ...word('.6s'),
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'baseline',
              gap: '8px 18px'
            }}
          >
            <span
              style={{
                fontFamily: F.display,
                fontWeight: 700,
                fontSize: 'clamp(17px,2vw,20px)',
                letterSpacing: '-0.01em',
                color: C.ink
              }}
            >
              Mohcene Meradji
            </span>
            <span style={meta}>Bioprocess Engineer</span>
            <span style={meta}>Est. Constantine, DZ</span>
          </div>

          <div style={{ marginTop: 30, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a href="#experience" className="btn-primary" style={{ ...pill, boxShadow: '0 8px 24px rgba(16,185,129,.24)' }}>
              Explore My Work
              <ArrowDown />
            </a>
            <a href={cv} download className="btn-outline" style={{ ...pill, padding: '0 22px' }}>
              Download CV
              <DownloadIcon />
            </a>
          </div>
        </div>

        <div style={{ flex: '1 1 320px', minWidth: 0, display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: 'min(500px,88vw)',
              aspectRatio: '1/1',
              perspective: '900px'
            }}
          >
            <svg
              viewBox="0 0 400 400"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="mmNet" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#10B981" />
                  <stop offset="1" stopColor="#2563EB" />
                </linearGradient>
              </defs>
              <g
                stroke="url(#mmNet)"
                strokeWidth="1"
                opacity="0.55"
                strokeDasharray="5 7"
                data-amb="1"
                style={{ animation: 'dashFlow 10s linear infinite' }}
              >
                <path d="M46 92 L128 54 L206 96 L286 62 L352 118" />
                <path d="M46 92 L74 186 L152 214 L206 96" />
                <path d="M152 214 L246 262 L336 224 L286 62" />
                <path d="M74 186 L58 300 L156 342 L246 262" />
                <path d="M336 224 L360 322 L262 356 L156 342" />
              </g>
              <g stroke="#10B981" strokeWidth="1" opacity="0.35" data-amb="1" style={{ animation: 'nodePulse 8s ease-in-out infinite' }}>
                <circle cx="46" cy="92" r="7.5" />
                <circle cx="206" cy="96" r="8" />
                <circle cx="152" cy="214" r="8" />
                <circle cx="336" cy="224" r="7" />
                <circle cx="156" cy="342" r="6.5" />
              </g>
              <g fill="#10B981" data-amb="1" style={{ animation: 'nodePulse 5.5s ease-in-out infinite' }}>
                <circle cx="46" cy="92" r="3.4" />
                <circle cx="128" cy="54" r="2.4" />
                <circle cx="206" cy="96" r="3.4" />
                <circle cx="286" cy="62" r="2.4" />
                <circle cx="352" cy="118" r="3" />
                <circle cx="74" cy="186" r="2.6" />
                <circle cx="152" cy="214" r="3.4" />
                <circle cx="246" cy="262" r="2.6" />
                <circle cx="336" cy="224" r="3.2" />
                <circle cx="58" cy="300" r="2.4" />
                <circle cx="156" cy="342" r="3" />
                <circle cx="360" cy="322" r="2.4" />
                <circle cx="262" cy="356" r="2.8" />
              </g>
              <circle cx="200" cy="200" r="152" stroke="#E5EBE8" strokeWidth="1" strokeDasharray="2 7" />
              <circle cx="200" cy="200" r="188" stroke="#E5EBE8" strokeWidth="1" />
              <g data-amb="1" style={{ transformOrigin: '200px 200px', animation: 'slowSpin 44s linear infinite' }}>
                <circle cx="200" cy="12" r="3" fill="#2563EB" opacity="0.55" />
                <circle cx="388" cy="200" r="2.6" fill="#10B981" opacity="0.8" />
                <circle cx="200" cy="388" r="2.2" fill="#10B981" opacity="0.55" />
                <circle cx="48" cy="200" r="2" fill="#0B3D2E" opacity="0.4" />
              </g>
              <g data-amb="1" style={{ transformOrigin: '200px 200px', animation: 'slowSpin 30s linear infinite reverse' }}>
                <circle cx="200" cy="48" r="2.4" fill="#10B981" opacity="0.7" />
                <circle cx="352" cy="200" r="1.8" fill="#2563EB" opacity="0.45" />
              </g>
            </svg>

            <div
              data-amb="1"
              style={{ position: 'absolute', left: '2%', top: '8%', width: 78, height: '84%', animation: 'floatY 9s ease-in-out infinite' }}
            >
              <div
                data-amb="1"
                style={{ width: '100%', height: '100%', transformStyle: 'preserve-3d', animation: 'helixSpin 26s linear infinite' }}
              >
                <svg
                  viewBox="0 0 80 320"
                  style={{ width: '100%', height: '100%' }}
                  fill="none"
                  stroke="#0B3D2E"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path
                    d="M40 0 C72 26 72 54 40 80 C8 106 8 134 40 160 C72 186 72 214 40 240 C8 266 8 294 40 320"
                    opacity="0.72"
                  />
                  <path
                    d="M40 0 C8 26 8 54 40 80 C72 106 72 134 40 160 C8 186 8 214 40 240 C72 266 72 294 40 320"
                    stroke="#10B981"
                    opacity="0.85"
                  />
                  <g stroke="#10B981" strokeWidth="0.9" opacity="0.5">
                    <path d="M31 10h18M19 30h42M19 50h42M31 70h18" />
                    <path d="M31 90h18M19 110h42M19 130h42M31 150h18" />
                    <path d="M31 170h18M19 190h42M19 210h42M31 230h18" />
                    <path d="M31 250h18M19 270h42M19 290h42M31 310h18" />
                  </g>
                  <g fill="#10B981" stroke="none" opacity="0.9">
                    <circle cx="40" cy="0" r="2.2" />
                    <circle cx="40" cy="80" r="2.2" />
                    <circle cx="40" cy="160" r="2.2" />
                    <circle cx="40" cy="240" r="2.2" />
                    <circle cx="40" cy="320" r="2.2" />
                  </g>
                  <g fill="#0B3D2E" stroke="none" opacity="0.55">
                    <circle cx="61" cy="40" r="1.7" />
                    <circle cx="19" cy="120" r="1.7" />
                    <circle cx="61" cy="200" r="1.7" />
                    <circle cx="19" cy="280" r="1.7" />
                  </g>
                </svg>
              </div>
            </div>

            <div style={{ position: 'absolute', right: '1%', bottom: '2%', width: 104 }}>
              <svg
                viewBox="0 0 100 132"
                style={{ width: '100%', height: 'auto' }}
                fill="none"
                stroke="#0B3D2E"
                strokeWidth="1.1"
                strokeLinecap="round"
                opacity="0.6"
                aria-hidden="true"
              >
                <path d="M14 22h72M22 22v78a24 24 0 0 0 24 24h8a24 24 0 0 0 24-24V22" />
                <path d="M50 10v72" stroke="#10B981" />
                <path d="M26 58h48" stroke="#10B981" opacity="0.4" strokeDasharray="3 4" />
                <g data-amb="1" style={{ transformOrigin: '50px 87px', animation: 'stir 2.4s ease-in-out infinite' }}>
                  <path d="M36 82h28M40 92h20" stroke="#10B981" />
                </g>
                <path d="M8 40h6M8 62h6M86 52h6" />
                <g data-amb="1" fill="#10B981" stroke="none" opacity="0.75">
                  <circle cx="38" cy="104" r="2.6" style={{ animation: 'bubble 3.6s ease-in infinite' }} />
                  <circle cx="52" cy="108" r="2" style={{ animation: 'bubble 4.4s ease-in infinite', animationDelay: '.9s' }} />
                  <circle cx="64" cy="102" r="2.4" style={{ animation: 'bubble 4s ease-in infinite', animationDelay: '1.8s' }} />
                  <circle cx="45" cy="110" r="1.6" style={{ animation: 'bubble 5s ease-in infinite', animationDelay: '2.6s' }} />
                  <circle cx="58" cy="112" r="1.4" style={{ animation: 'bubble 4.6s ease-in infinite', animationDelay: '3.4s' }} />
                </g>
              </svg>
            </div>

            {portraitOn && (
              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '48%',
                  transform: 'translate(-50%,-50%)',
                  width: '54%',
                  aspectRatio: '1/1',
                  borderRadius: '50%',
                  padding: 7,
                  background: 'rgba(255,255,255,.65)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid ' + C.line,
                  boxShadow: '0 8px 30px rgba(11,61,46,.1)'
                }}
              >
                <img
                  src={portrait}
                  alt="Mohcene Meradji in the laboratory"
                  width="640"
                  height="640"
                  decoding="async"
                  fetchpriority="high"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: '50% 22%',
                    borderRadius: '50%',
                    display: 'block'
                  }}
                />
              </div>
            )}

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
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          margin: 'clamp(36px,5vw,64px) auto 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8
        }}
      >
        <span style={mono(10, { letterSpacing: '0.18em', color: C.muted })}>Scroll</span>
        <svg
          data-amb="1"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#10B981"
          strokeWidth="1.6"
          strokeLinecap="round"
          aria-hidden="true"
          style={{ animation: 'chev 2.2s ease-in-out infinite' }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
