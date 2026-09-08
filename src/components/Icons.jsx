import { C } from '../theme.js';

/**
 * Line icons. Outline strokes use `stroke` (default deep green);
 * accent strokes are always the brand green.
 */
const A = C.green;

function Svg({ size = 26, children, ...rest }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" strokeWidth="1.3" {...rest}>
      {children}
    </svg>
  );
}

export function Reactor({ size, stroke = C.deep }) {
  return (
    <Svg size={size} stroke={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 4h10M8 4v13a4 4 0 0 0 8 0V4" />
      <path d="M12 4v9" stroke={A} />
      <circle cx="12" cy="13.6" r="2.1" stroke={A} />
    </Svg>
  );
}

export function Chart({ size, stroke = C.deep }) {
  return (
    <Svg size={size} stroke={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 19h18" />
      <path d="M3 19c5.5 0 6.5-12 18-14" />
      <path d="M17 5h4v4" stroke={A} />
    </Svg>
  );
}

export function Culture({ size, stroke = C.deep }) {
  return (
    <Svg size={size} stroke={stroke}>
      <circle cx="12" cy="12" r="8.6" />
      <circle cx="9.4" cy="9.8" r="1.4" stroke={A} />
      <circle cx="14.2" cy="13.6" r="1.9" stroke={A} />
      <circle cx="13.6" cy="8.4" r="1" stroke={A} />
    </Svg>
  );
}

export function Upstream({ size, stroke = C.deep }) {
  return (
    <Svg size={size} stroke={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v10M8.4 6.6 12 3l3.6 3.6" stroke={A} />
      <path d="M4 15h16v3.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 18.5z" />
    </Svg>
  );
}

export function Downstream({ size, stroke = C.deep }) {
  return (
    <Svg size={size} stroke={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 4h18l-7 8.5V21l-4-2.4v-6.1z" />
      <path d="M6.6 6.6h10.8" stroke={A} />
    </Svg>
  );
}

export function Check({ size, stroke = C.deep }) {
  return (
    <Svg size={size} stroke={stroke} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8.6" />
      <path d="M8.4 12.3l2.5 2.5 4.7-5.1" stroke={A} />
    </Svg>
  );
}

export function Shield({ size, stroke = C.deep }) {
  return (
    <Svg size={size} stroke={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 2.8v6.1c0 4.4-2.9 7.4-7 9-4.1-1.6-7-4.6-7-9V5.8z" />
      <path d="M9.4 11.9l1.8 1.8 3.4-3.9" stroke={A} />
    </Svg>
  );
}

export function Wrench({ size, stroke = C.deep }) {
  return (
    <Svg size={size} stroke={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M15.6 3.4a5 5 0 0 0-6.1 6.3L3.4 15.9V20.6h4.7l6.2-6.1a5 5 0 0 0 6.3-6.1l-2.9 2.9-3-.5-.5-3z" />
    </Svg>
  );
}

export function Peaks({ size, stroke = C.deep }) {
  return (
    <Svg size={size} stroke={stroke} strokeLinecap="round">
      <path d="M4.6 16.4c3 0 3-8.6 6.4-8.6s3.2 8.2 6.4 8.2c1.6 0 2.4-1.2 2.9-2.2" />
      <circle cx="4.2" cy="16.6" r="1.5" stroke={A} />
      <circle cx="20.1" cy="13.4" r="1.5" stroke={A} />
    </Svg>
  );
}

export function Network({ size, stroke = C.deep }) {
  return (
    <Svg size={size} stroke={stroke} strokeLinecap="round">
      <circle cx="6" cy="7" r="2.2" />
      <circle cx="18" cy="9.2" r="2.2" />
      <circle cx="11.2" cy="17.2" r="2.2" />
      <path d="M8.1 7.4l7.8 1.4M6.9 9.1l3.3 6M16.4 11l-3.7 4.6" stroke={A} />
    </Svg>
  );
}

export function Helix({ size, stroke = C.deep }) {
  return (
    <Svg size={size} stroke={stroke} strokeLinecap="round">
      <path d="M7 3c0 5 10 5 10 9s-10 4-10 9" />
      <path d="M17 3c0 5-10 5-10 9s10 4 10 9" />
      <path d="M8.6 7h6.8M8.6 17h6.8" stroke={A} />
    </Svg>
  );
}

export function Flask({ size, stroke = C.deep }) {
  return (
    <Svg size={size} stroke={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 3h4M11 3v6l-4.8 8.6A2 2 0 0 0 8 21h8a2 2 0 0 0 1.8-3.4L13 9V3" />
      <path d="M8.4 15h7.2" stroke={A} />
    </Svg>
  );
}

export function Purify({ size, stroke = C.deep }) {
  return (
    <Svg size={size} stroke={stroke} strokeLinecap="round">
      <rect x="8" y="3" width="8" height="18" rx="4" />
      <path d="M8 9.4h8M8 14.8h8" stroke={A} />
    </Svg>
  );
}

export function Product({ size, stroke = C.deep }) {
  return (
    <Svg size={size} stroke={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.4 3h5.2v3.4L16.2 9v10a2 2 0 0 1-2 2H9.8a2 2 0 0 1-2-2V9l1.6-2.6z" />
      <path d="M7.8 13.4h8.4" stroke={A} />
    </Svg>
  );
}

export function Microscope({ size, stroke = C.deep }) {
  return (
    <Svg size={size} stroke={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 3h3.2l1.4 9h-6z" />
      <path d="M6.5 20.5h11" />
      <path d="M11.6 12v4.5" />
      <path d="M15.6 6.2A7 7 0 0 1 16.8 18" stroke={A} />
    </Svg>
  );
}

export function TestTube({ size, stroke = C.deep }) {
  return (
    <Svg size={size} stroke={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6M10 3v14.2a2.5 2.5 0 0 0 5 0V3" />
      <path d="M10 12.4h5" stroke={A} />
    </Svg>
  );
}

export const ICONS = {
  reactor: Reactor,
  chart: Chart,
  culture: Culture,
  upstream: Upstream,
  downstream: Downstream,
  check: Check,
  shield: Shield,
  wrench: Wrench,
  peaks: Peaks,
  network: Network,
  helix: Helix,
  flask: Flask,
  purify: Purify,
  product: Product,
  microscope: Microscope,
  testtube: TestTube
};

/* ---------- interface glyphs ---------- */

export function ArrowDown({ size = 15 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  );
}

export function ArrowRight({ size = 15 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function DownloadIcon({ size = 15 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M12 4v11M7.5 10.5 12 15l4.5-4.5M5 20h14" />
    </svg>
  );
}

export function ChevronDown({ size = 12, stroke = C.deep }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function Close({ size = 16 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={C.deep} strokeWidth="1.6" strokeLinecap="round">
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  );
}

export function CopyIcon({ size = 14 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={C.deep} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="11" height="11" rx="2.5" />
      <path d="M15 6.5A2.5 2.5 0 0 0 12.5 4H6.5A2.5 2.5 0 0 0 4 6.5v6A2.5 2.5 0 0 0 6.5 15" />
    </svg>
  );
}

export function LinkedInIcon({ size = 15 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4v11H3zM9.5 9.5h3.8v1.5a4.2 4.2 0 0 1 3.7-1.9c2.7 0 4 1.8 4 4.9v6.5h-4v-5.9c0-1.5-.5-2.4-1.8-2.4-1.1 0-1.7.7-2 1.4-.1.3-.1.7-.1 1v5.9h-3.6z" />
    </svg>
  );
}

export function MailIcon({ size = 15 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

export const INTEREST_GLYPHS = [
  () => (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="2.4" />
    </svg>
  ),
  () => (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M12 3l7.8 4.5v9L12 21l-7.8-4.5v-9z" />
    </svg>
  ),
  () => (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="6.5" cy="7.5" r="2.4" />
      <circle cx="17.5" cy="10" r="2.4" />
      <circle cx="11" cy="17.5" r="2.4" />
      <path d="M8.7 8.1l6.6 1.4M7.6 9.6l2.6 5.6M15.7 11.8l-3.1 3.9" />
    </svg>
  ),
  () => (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M7 3c0 5 10 5 10 9s-10 4-10 9" />
      <path d="M17 3c0 5-10 5-10 9s10 4 10 9" />
    </svg>
  )
];
