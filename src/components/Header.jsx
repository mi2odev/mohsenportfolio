import { C, F } from '../theme.js';
import logo from '../assets/logo.png';

export default function Header({ navLinks, wide, statusPill, onToggleNav }) {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        background: 'rgba(255,255,255,.65)',
        borderBottom: '1px solid ' + C.line
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 1180,
          margin: '0 auto',
          padding: '0 clamp(18px,4vw,40px)',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16
        }}
      >
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 10, flex: '0 0 auto' }}>
          <img src={logo} alt="Mohcene Meradji logo" style={{ height: 38, width: 'auto', display: 'block' }} />
          <span
            style={{
              fontFamily: F.display,
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: '-0.01em',
              color: C.deep,
              whiteSpace: 'nowrap'
            }}
          >
            Mohcene Meradji
          </span>
        </a>

        {wide && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: 'clamp(10px,1.6vw,24px)' }}>
            {navLinks.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link"
                style={{ display: 'block', fontSize: 13, fontWeight: 500, padding: '4px 0' }}
              >
                {l.label}
                <span
                  style={{
                    display: 'block',
                    marginTop: 5,
                    height: 2,
                    borderRadius: 2,
                    background: C.green,
                    transition: 'opacity .3s ease',
                    opacity: l.on
                  }}
                ></span>
              </a>
            ))}
          </nav>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: 14, flex: '0 0 auto' }}>
          {statusPill && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '7px 12px',
                border: '1px solid ' + C.line,
                borderRadius: 999,
                background: 'rgba(255,255,255,.7)'
              }}
            >
              <span
                data-amb="1"
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: C.green,
                  animation: 'dotPulse 2.4s ease-out infinite'
                }}
              ></span>
              <span
                style={{
                  fontFamily: F.mono,
                  fontSize: 10,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: C.deep,
                  whiteSpace: 'nowrap'
                }}
              >
                Open to opportunities
              </span>
            </div>
          )}

          {!wide && (
            <button
              onClick={onToggleNav}
              aria-label="Open menu"
              style={{
                width: 44,
                height: 44,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 5,
                background: 'transparent',
                border: '1px solid ' + C.line,
                borderRadius: 12,
                cursor: 'pointer'
              }}
            >
              <span style={{ display: 'block', width: 16, height: 1.5, background: C.deep, borderRadius: 2 }}></span>
              <span style={{ display: 'block', width: 16, height: 1.5, background: C.deep, borderRadius: 2 }}></span>
              <span style={{ display: 'block', width: 16, height: 1.5, background: C.deep, borderRadius: 2 }}></span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
