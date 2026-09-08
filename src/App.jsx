import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { C, pad } from './theme.js';
import { NAV, STATS } from './data.js';
import { useBreakpoints, useScrollSpy, useReveal, useCountUp, useAmbientMotion } from './hooks.js';

import Header from './components/Header.jsx';
import MobileNav from './components/MobileNav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Research from './components/Research.jsx';
import Journey from './components/Journey.jsx';
import Certifications from './components/Certifications.jsx';
import Interests from './components/Interests.jsx';
import Languages from './components/Languages.jsx';
import Objective from './components/Objective.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const NAV_IDS = NAV.map(n => n.id);
const STAT_TARGETS = STATS.map(s => s.value);
const MOBILE_NAV_ID = 'mobile-nav';

export default function App({ statusOpen = true, heroPortrait = true, ambientMotion = true }) {
  const rootRef = useRef(null);
  const barRef = useRef(null);
  const burgerRef = useRef(null);
  const [navOpen, setNavOpen] = useState(false);

  const { wide, xwide } = useBreakpoints();
  const active = useScrollSpy(NAV_IDS, barRef);
  const [counts, statsRef] = useCountUp(STAT_TARGETS);
  useReveal(rootRef);
  useAmbientMotion(rootRef, ambientMotion);

  // Widening the window past the mobile breakpoint reveals the real nav.
  useEffect(() => {
    if (wide) setNavOpen(false);
  }, [wide]);

  const closeNav = useCallback(() => {
    setNavOpen(false);
    burgerRef.current?.focus();
  }, []);

  const navLinks = useMemo(
    () =>
      NAV.map((item, i) => ({
        label: item.label,
        href: '#' + item.id,
        current: active === item.id,
        num: pad(i + 1),
        delay: 60 + i * 55 + 'ms'
      })),
    [active]
  );

  const stats = useMemo(
    () => STATS.map((s, i) => ({ label: s.label, shown: counts[i] + s.suffix })),
    [counts]
  );

  return (
    <div ref={rootRef} style={{ position: 'relative', width: '100%', background: C.bg }}>
      <a className="skip-link" href="#home">
        Skip to content
      </a>

      <div
        aria-hidden="true"
        className="no-print"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          zIndex: 120,
          background: 'rgba(11,61,46,.06)'
        }}
      >
        <div
          ref={barRef}
          style={{
            height: '100%',
            width: '0%',
            background: 'linear-gradient(90deg,' + C.deep + ',' + C.green + ')',
            transition: 'width .12s linear'
          }}
        />
      </div>

      <Header
        navLinks={navLinks}
        wide={wide}
        statusPill={statusOpen && xwide}
        navOpen={navOpen}
        navPanelId={MOBILE_NAV_ID}
        burgerRef={burgerRef}
        onToggleNav={() => setNavOpen(v => !v)}
      />

      {navOpen && <MobileNav id={MOBILE_NAV_ID} navLinks={navLinks} onClose={closeNav} />}

      <main>
        <Hero portraitOn={heroPortrait} />
        <About stats={stats} statsRef={statsRef} />
        <Education />
        <Skills />
        <Experience />
        <Research />
        <Journey />
        <Certifications />
        <Interests />
        <Languages />
        <Objective />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
