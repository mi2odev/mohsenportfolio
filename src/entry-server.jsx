import { renderToString } from 'react-dom/server';
import App from './App.jsx';

/**
 * Used only by scripts/prerender.mjs at build time. The flags must match the
 * ones main.jsx passes, or the prerendered markup will not match what the
 * browser renders during hydration.
 */
export function render() {
  return renderToString(<App statusOpen={true} heroPortrait={true} ambientMotion={true} />);
}
