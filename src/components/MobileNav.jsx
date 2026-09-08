import { C, F } from '../theme.js';
import { Close } from './Icons.jsx';

export default function MobileNav({ navLinks, onClose }) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: C.bg,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div
        style={{
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(18px,5vw,40px)',
          borderBottom: '1px solid ' + C.line
        }}
      >
        <span
          style={{
            fontFamily: F.mono,
            fontSize: 10,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: C.muted
          }}
        >
          Menu
        </span>
        <button
          onClick={onClose}
          aria-label="Close menu"
          style={{
            width: 44,
            height: 44,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            border: '1px solid ' + C.line,
            borderRadius: 12,
            cursor: 'pointer'
          }}
        >
          <Close />
        </button>
      </div>

      <nav
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 4,
          padding: '0 clamp(22px,7vw,56px)'
        }}
      >
        {navLinks.map(l => (
          <a
            key={l.href}
            href={l.href}
            onClick={onClose}
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 14,
              padding: '13px 0',
              borderBottom: '1px solid ' + C.line,
              fontFamily: F.display,
              fontWeight: 700,
              fontSize: 'clamp(1.4rem,7vw,2.1rem)',
              letterSpacing: '-0.02em',
              color: C.deep,
              animation: 'wordIn .5s cubic-bezier(.16,1,.3,1) both',
              animationDelay: l.delay
            }}
          >
            <span style={{ fontFamily: F.mono, fontSize: 10, letterSpacing: '0.12em', color: C.green }}>{l.num}</span>
            {l.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
