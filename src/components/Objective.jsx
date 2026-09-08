import { C, F, pill } from '../theme.js';
import { ArrowRight } from './Icons.jsx';

export default function Objective() {
  return (
    <section
      id="objective"
      style={{
        position: 'relative',
        overflow: 'hidden',
        scrollMarginTop: 84,
        padding: 'clamp(64px,9vw,120px) clamp(20px,5vw,40px)',
        background: C.deep
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px)',
          backgroundSize: '46px 46px',
          pointerEvents: 'none'
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: '-30%',
          right: '-6%',
          width: 'min(620px,90vw)',
          height: 'min(620px,90vw)',
          borderRadius: '50%',
          background: 'radial-gradient(circle,rgba(16,185,129,.16) 0%,rgba(16,185,129,0) 68%)',
          pointerEvents: 'none'
        }}
      ></div>

      <div style={{ position: 'relative', width: '100%', maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
        <span
          data-reveal="0"
          style={{
            display: 'inline-block',
            fontFamily: F.mono,
            fontSize: 11,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: C.green
          }}
        >
          SEC.10 / Objective
        </span>
        <h2
          data-reveal="0"
          style={{
            margin: '22px 0 0',
            fontFamily: F.display,
            fontWeight: 800,
            letterSpacing: '-0.025em',
            lineHeight: 1.12,
            fontSize: 'clamp(1.85rem,4.6vw,3.2rem)',
            color: '#FFFFFF',
            textWrap: 'balance'
          }}
        >
          Building the Future of Bioprocessing
        </h2>
        <p
          data-reveal="80"
          style={{
            margin: '24px auto 0',
            maxWidth: '60ch',
            fontSize: 'clamp(15px,1.6vw,17.5px)',
            lineHeight: 1.75,
            color: 'rgba(255,255,255,.72)',
            textWrap: 'pretty'
          }}
        >
          Eager to leverage technical expertise in GMP-compliant environments and contribute to innovative
          biopharmaceutical manufacturing and biotechnology research.
        </p>
        <div data-reveal="140" style={{ marginTop: 34, display: 'flex', justifyContent: 'center' }}>
          <a href="#contact" className="btn-white" style={{ ...pill, padding: '0 26px' }}>
            Let's Connect
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
