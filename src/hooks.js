import { useEffect, useRef, useState } from 'react';

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

function matches(query) {
  return typeof window !== 'undefined' && typeof window.matchMedia === 'function'
    ? window.matchMedia(query).matches
    : false;
}

/** Subscribes to a media query and re-renders when it flips. */
export function useMediaQuery(query, initial = false) {
  const [on, setOn] = useState(() => (typeof window === 'undefined' ? initial : matches(query)));

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const mql = window.matchMedia(query);
    const onChange = e => setOn(e.matches);
    setOn(mql.matches);
    // Safari < 14 only has the deprecated add/removeListener pair.
    if (mql.addEventListener) mql.addEventListener('change', onChange);
    else mql.addListener(onChange);
    return () => {
      if (mql.removeEventListener) mql.removeEventListener('change', onChange);
      else mql.removeListener(onChange);
    };
  }, [query]);

  return on;
}

/** True when the visitor asked the OS to tone animation down. */
export function useReducedMotion() {
  return useMediaQuery(REDUCED_MOTION);
}

/** Non-reactive read, for effects that only need the value once. */
export function prefersReducedMotion() {
  return matches(REDUCED_MOTION);
}

/** The two layout breakpoints used by the header. */
export function useBreakpoints() {
  const wide = useMediaQuery('(min-width: 900px)', true);
  const xwide = useMediaQuery('(min-width: 1160px)', true);
  return { wide, xwide };
}

/**
 * Drives the scroll progress bar and reports the section the reader is in.
 * Writes the bar width straight to the DOM so scrolling never re-renders the
 * tree; only a change of active section does.
 */
export function useScrollSpy(ids, barRef) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const se = document.scrollingElement || document.documentElement;
      const y = window.scrollY || se.scrollTop || 0;
      const vh = window.innerHeight || se.clientHeight;
      const max = Math.max(1, se.scrollHeight - vh);

      if (barRef.current) {
        barRef.current.style.width = Math.min(100, Math.max(0, (y / max) * 100)) + '%';
      }

      // The last section whose top has passed the header wins, so sections that
      // have no nav entry keep the previous one highlighted instead of clearing it.
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      if (y >= max - 2) current = ids[ids.length - 1];
      setActive(prev => (prev === current ? prev : current));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    measure();
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
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
    const scope = scopeRef.current || document;
    const els = Array.from(scope.querySelectorAll('[data-reveal]'));
    if (!els.length || prefersReducedMotion() || !('IntersectionObserver' in window)) return;

    const vh = window.innerHeight;
    const hidden = els.filter(el => el.getBoundingClientRect().top > vh * 0.92);
    hidden.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition =
        'opacity .7s cubic-bezier(.16,1,.3,1), transform .7s cubic-bezier(.16,1,.3,1)';
      el.style.willChange = 'opacity, transform';
    });

    const timers = new Set();
    const show = (el, delay) => {
      const t = setTimeout(() => {
        timers.delete(t);
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.willChange = 'auto';
      }, delay);
      timers.add(t);
    };

    let fired = false;
    const io = new IntersectionObserver(
      entries => {
        fired = true;
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          show(e.target, Number(e.target.dataset.reveal) || 0);
          io.unobserve(e.target);
        });
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 }
    );
    hidden.forEach(el => io.observe(el));

    // Safety net: if observer callbacks never arrive, reveal everything.
    const safety = setTimeout(() => {
      if (fired) return;
      io.disconnect();
      hidden.forEach((el, i) => show(el, Math.min(i * 40, 600)));
    }, 1200);

    return () => {
      clearTimeout(safety);
      timers.forEach(clearTimeout);
      io.disconnect();
    };
  }, [scopeRef]);
}

/** Counts 0 → target with an ease-out curve once the block scrolls into view. */
export function useCountUp(targets) {
  const hostRef = useRef(null);
  const targetsRef = useRef(targets);
  targetsRef.current = targets;
  const [counts, setCounts] = useState(() => targets.map(() => 0));

  useEffect(() => {
    const finals = targetsRef.current;
    let ran = false;
    let raf = 0;

    const run = () => {
      if (ran) return;
      ran = true;
      if (prefersReducedMotion()) {
        setCounts(finals);
        return;
      }
      const t0 = performance.now();
      const dur = 1400;
      const tick = now => {
        const p = Math.min(1, (now - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        setCounts(finals.map(n => Math.round(n * eased)));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    if (!hostRef.current || !('IntersectionObserver' in window)) {
      run();
      return () => cancelAnimationFrame(raf);
    }

    const io = new IntersectionObserver(
      entries => {
        if (entries.some(e => e.isIntersecting)) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(hostRef.current);

    const fallback = setTimeout(() => {
      if (ran) return;
      ran = true;
      setCounts(finals);
      io.disconnect();
    }, 2500);

    return () => {
      clearTimeout(fallback);
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return [counts, hostRef];
}

/** Pauses/resumes every [data-amb] decorative animation. */
export function useAmbientMotion(scopeRef, on) {
  const reduced = useReducedMotion();
  useEffect(() => {
    const want = on && !reduced ? 'running' : 'paused';
    const scope = scopeRef.current || document;
    scope.querySelectorAll('[data-amb]').forEach(el => {
      el.style.animationPlayState = want;
    });
  }, [scopeRef, on, reduced]);
}

/** Freezes the page behind an overlay while `locked` is true. */
export function useBodyScrollLock(locked) {
  useEffect(() => {
    if (!locked) return;
    document.body.classList.add('is-locked');
    return () => document.body.classList.remove('is-locked');
  }, [locked]);
}

/** Calls `onEscape` while `active`. */
export function useEscapeKey(onEscape, active = true) {
  useEffect(() => {
    if (!active) return;
    const onKeyDown = e => {
      if (e.key === 'Escape') onEscape();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onEscape, active]);
}
