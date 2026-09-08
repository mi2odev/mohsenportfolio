import { Component } from 'react';
import { C, F, mono, pill } from '../theme.js';
import { EMAIL, LINKEDIN, PHONE, PHONE_HREF } from '../data.js';

/**
 * A render error anywhere in the tree unmounts the whole page and leaves the
 * visitor staring at a blank white screen. Since that visitor is likely a
 * recruiter, fall back to the one thing the site exists to deliver: how to
 * get in touch.
 */
export default class ErrorBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error, info) {
    // Nothing collects these in production, but they are worth having in the
    // console when someone is debugging locally.
    console.error('Portfolio failed to render:', error, info);
  }

  render() {
    if (!this.state.failed) return this.props.children;

    return (
      <main
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 18,
          padding: '48px 24px',
          background: C.bg,
          textAlign: 'center'
        }}
      >
        <span style={mono(11, { color: C.greenInk })}>Mohcene Meradji</span>
        <h1
          style={{
            margin: 0,
            fontFamily: F.display,
            fontWeight: 800,
            letterSpacing: '-0.025em',
            fontSize: 'clamp(1.6rem,4vw,2.4rem)',
            color: C.deep
          }}
        >
          Bioprocess Engineer
        </h1>
        <p style={{ margin: 0, maxWidth: '46ch', lineHeight: 1.7, color: C.muted }}>
          This page ran into a problem while loading. Reloading usually fixes it — and
          the details that matter are here either way.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
          <a href={'mailto:' + EMAIL} className="btn-green" style={{ ...pill, padding: '0 22px' }}>
            {EMAIL}
          </a>
          <a href={PHONE_HREF} className="btn-outline" style={{ ...pill, padding: '0 22px' }}>
            {PHONE}
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark"
            style={{ ...pill, padding: '0 22px' }}
          >
            LinkedIn
          </a>
        </div>
      </main>
    );
  }
}
