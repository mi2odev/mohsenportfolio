import { useEffect, useRef, useState } from 'react';

export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;
}

/** Tracks the two layout breakpoints used by the header. */
export function useBreakpoints() {
  const [bp, setBp] = useState({ wide: true, xwide: true });
  useEffect(() => {
    const onResize = () => {
      const wide = window.innerWidth >= 900;
      const xwide = window.innerWidth >= 1160;
      setBp(prev => (prev.wide === wide && prev.xwide === xwide ? prev : { wide, xwide }));
    };
    window.addEventListener('resize', onResize);
    onResize();
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return bp;
}

/** Scroll progress bar width + active section id for the nav underline. */
export function useScrollSpy(ids, barRef) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const now = Date.now();
      if (last && now - last < 80) return;
      last = now;

      const se = document.scrollingElement || document.documentElement;
      const y = window.scrollY || se.scrollTop || document.body.scrollTop || 0;
      const sh = Math.max(se.scrollHeight, document.body.scrollHeight);
      const vh = window.innerHeight || se.clientHeight;
      const max = sh - vh || 1;
      if (barRef.current) {
        barRef.current.style.width = Math.min(100, Math.max(0, (y / max) * 100)) + '%';
      }

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 140 && r.bottom > 140) {
          setActive(prev => (prev === id ? prev : id));
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    document.body.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.body.removeEventListener('scroll', onScroll);
    };
  }, [ids, barRef]);
  return active;
}

/**
 * Fades every [data-reveal] element in as it enters the viewport.
 * The attribute value is the stagger delay in ms.
 */
export function useReveal(scopeRef) {
  useEffect(() => {
    const reduce = prefersReducedMotion();
    const scope = scopeRef.current || document;
    const els = Array.from(scope.querySelectorAll('[data-reveal]'));
    if (!els.length || reduce || !('IntersectionObserver' in window)) return;

    const vh = window.innerHeight;
    const hidden = els.filter(el => el.getBoundingClientRect().top > vh * 0.92);
    hidden.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity .7s cubic-bezier(.16,1,.3,1), transform .7s cubic-bezier(.16,1,.3,1)';
      el.style.willChange = 'opacity, transform';
    });

    const show = (el, d) => setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.willChange = 'auto';
    }, d);

    let fired = false;
    const io = new IntersectionObserver(entries => {
      fired = true;
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        show(e.target, parseInt(e.target.getAttribute('data-reveal') || '0', 10) || 0);
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
    hidden.forEach(el => io.observe(el));

    // Safety net: if observer callbacks never arrive, reveal everything.
    const safety = setTimeout(() => {
      if (fired) return;
      io.disconnect();
      hidden.forEach((el, i) => show(el, Math.min(i * 40, 600)));
    }, 1200);

    return () => { clearTimeout(safety); io.disconnect(); };
  }, [scopeRef]);
}

/** Counts 0 → target with an ease-out curve once the block scrolls into view. */
export function useCountUp(targets) {
  const hostRef = useRef(null);
  const [counts, setCounts] = useState(targets.map(() => 0));

  useEffect(() => {
    const reduce = prefersReducedMotion();
    let ran = false;
    let raf = 0;

    const run = () => {
      if (ran) return;
      ran = true;
      if (reduce) { setCounts(targets); return; }
      const t0 = performance.now();
      const dur = 1400;
      const tick = now => {
        const p = Math.min(1, (now - t0) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        setCounts(targets.map(n => Math.round(n * e)));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    if (!hostRef.current || !('IntersectionObserver' in window)) {
      run();
      return () => cancelAnimationFrame(raf);
    }

    const io = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) { run(); io.disconnect(); }
    }, { threshold: 0.3 });
    io.observe(hostRef.current);

    const fallback = setTimeout(() => { if (!ran) { ran = true; setCounts(targets); io.disconnect(); } }, 2500);
    return () => { clearTimeout(fallback); io.disconnect(); cancelAnimationFrame(raf); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [counts, hostRef];
}

/** Pauses/resumes every [data-amb] decorative animation. */
export function useAmbientMotion(scopeRef, on) {
  useEffect(() => {
    const want = on && !prefersReducedMotion() ? 'running' : 'paused';
    const scope = scopeRef.current || document;
    scope.querySelectorAll('[data-amb]').forEach(el => { el.style.animationPlayState = want; });
  }, [scopeRef, on]);
}
