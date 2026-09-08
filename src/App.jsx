import { useEffect, useMemo, useRef, useState } from 'react';
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

const NAV_IDS = NAV.map(([, id]) => id);
const STAT_TARGETS = STATS.map(s => s[0]);

export default function App({ statusOpen = true, heroPortrait = true, ambientMotion = true }) {
  const rootRef = useRef(null);
  const barRef = useRef(null);
  const [navOpen, setNavOpen] = useState(false);

  const { wide, xwide } = useBreakpoints();
  const active = useScrollSpy(NAV_IDS, barRef);
  const [counts, statsRef] = useCountUp(STAT_TARGETS);
  useReveal(rootRef);
  useAmbientMotion(rootRef, ambientMotion);

  useEffect(() => {
    if (wide && navOpen) setNavOpen(false);
  }, [wide, navOpen]);

  const navLinks = useMemo(
    () =>
      NAV.map(([label, id], i) => ({
        label,
        href: '#' + id,
        on: active === id ? 1 : 0,
        num: pad(i + 1),
        delay: 60 + i * 55 + 'ms'
      })),
    [active]
  );

  const stats = STATS.map(([, suffix, label], i) => ({ label, shown: counts[i] + suffix }));

  return (
    <div ref={rootRef} style={{ position: 'relative', width: '100%', background: C.bg }}>
      <div
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
            background: 'linear-gradient(90deg,#0B3D2E,#10B981)',
            transition: 'width .12s linear'
          }}
        ></div>
      </div>

      <Header
        navLinks={navLinks}
        wide={wide}
        statusPill={statusOpen && xwide}
        onToggleNav={() => setNavOpen(v => !v)}
      />

      {navOpen && <MobileNav navLinks={navLinks} onClose={() => setNavOpen(false)} />}

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
      <Footer />
    </div>
  );
}
