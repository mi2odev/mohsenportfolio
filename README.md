# Mohcene Meradji — Portfolio (React)

A single-page portfolio for a bioprocess engineer: hero artwork, timeline, expertise
grid, an interactive bioprocess flow, and a contact card. Built as a plain Vite + React
project you can run, edit and deploy.

## Requirements

Node.js 18 or newer (includes npm).

## Run it

```bash
npm install     # once
npm run dev     # http://localhost:5173
```

## Build for production

```bash
npm run build     # outputs to dist/
npm run preview   # serve the built files locally
```

`dist/` is a static folder — drop it on Netlify, Vercel, GitHub Pages, or any web host.
`base: './'` in `vite.config.js` means it also works from a subfolder.

`build` runs three steps: the normal client build, a small SSR build of
`src/entry-server.jsx`, and `scripts/prerender.mjs`, which renders the page once and
writes the markup into `dist/index.html`. The browser hydrates that markup instead of
building the page from scratch, so the text paints as soon as the HTML arrives rather
than after 200 kB of JavaScript has downloaded and run. Measured over seven loads
each on a throttled mobile profile (9 Mbps, 170 ms RTT, 4× CPU slowdown), median
first contentful paint went from 1.09 s to 0.84 s, and transfer from 352 kB to
228 kB — the rest of that drop is the WebP images below. It also means the page is
fully readable with JavaScript disabled or still loading.

Prerendering is deliberately non-fatal: if that last step ever fails it prints a
warning and leaves a working client-rendered `dist/`, so a broken prerender can never
block a deploy. `main.jsx` checks whether `#root` already has markup and hydrates or
mounts accordingly.

Two things to keep in mind when editing:

- The flags in `entry-server.jsx` must match the ones `main.jsx` passes, or the
  prerendered markup will not match what the browser renders.
- Anything that reads `window` during render (not in an effect) will differ between
  the build and the browser. `useMediaQuery` handles this with `useSyncExternalStore`
  and a server snapshot; follow that pattern rather than reading `matchMedia` in a
  `useState` initializer.

## Structure

```
index.html                 Meta tags, JSON-LD, #root mount
public/                    Copied to dist/ as-is: favicons, manifest, robots, share card
scripts/prerender.mjs      Bakes the rendered page into dist/index.html
src/
  main.jsx                 React entry; fonts, error boundary, display flags
  entry-server.jsx         Build-time only: renders <App> to a markup string
  App.jsx                  Page shell: skip link, scroll bar, header, all sections
  fonts.css                @font-face for the three self-hosted variable fonts
  index.css                Tokens (CSS variables), resets, focus styles, print
                           rules, keyframes
  theme.js                 Colors, font stacks, shared style objects and helpers
  data.js                  All content: nav, stats, education, skills, experience,
                           certs, interests, languages, research, contact details
  hooks.js                 Media queries, scroll spy, reveal-on-scroll, count-up,
                           motion toggle, scroll lock, escape key
  assets/                  Logo, photos, CV PDF
  components/
    Header.jsx             Sticky header, nav underline, status pill, burger
    MobileNav.jsx          Full-screen menu dialog (below 900px)
    Hero.jsx               Headline, CTAs, DNA/network/bioreactor artwork, portrait
    About.jsx              Bio, profile card, animated stat counters
    Education.jsx          Timeline of degrees
    Skills.jsx             12 expertise cards
    Experience.jsx         4 internship/research cards
    Research.jsx           Featured research panel
    Journey.jsx            Interactive 7-stage bioprocess flow
    Certifications.jsx     Accordion list
    Interests.jsx          Chip cloud
    Languages.jsx          Language dials
    Objective.jsx          Dark call-to-action band
    Contact.jsx            Contact card, copy-email, LinkedIn, CV
    Footer.jsx             Wave, credits, back to top
    Icons.jsx              All line icons
    SectionHead.jsx        "SEC.0X / Label" heading rule
    ErrorBoundary.jsx      Contact-details fallback if the page fails to render
```

## Editing content

Text, dates, tags and links live in `src/data.js` — change them there and every section
updates. Every entry uses named fields, so adding a job or a certificate is a matter of
copying the block above it:

```js
export const EXPERIENCE = [
  {
    icon: 'microscope',            // a key from the ICONS map in components/Icons.jsx
    year: '2025',
    org: 'Pasteur Institute',
    kind: 'Professional Internship',
    tone: 'blue',                  // 'blue' for industry, 'green' for research
    detail: 'Quality Control (QC) & Microbiology'
  }
];
```

Long-form copy (hero headline, bio, section headings) sits inline in its own component.

Colors and font stacks live in `src/theme.js`. The same colors are mirrored as CSS
custom properties at the top of `src/index.css` for the rules written in plain CSS —
change a colour in one place and change it in the other.

### One column

Every left-aligned section shares the 1180 px column from `wrap()`, so the section
rule and heading start at the same x down the whole page. Objective and Contact are
centred on purpose — they are the two breaks in that rhythm. If you add a section,
use `wrap()` and let the content inside it be as narrow as it needs to be, rather than
narrowing the column and centring it.

### The two greens

`C.green` (`#10B981`) is the brand green, and it measures 2.5:1 on white — fine for a
border or a dot, unreadable as text. `C.greenInk` (`#047857`) is the same green
darkened until it clears WCAG AA at 5.5:1, and it is what every piece of green text on
a light background uses, along with any solid green fill sitting behind white text.

The deep-green bands invert this: there `green` reads at 4.8:1 and `greenInk` drops to
2.2:1, so those sections keep `green` — which is what `SectionHead`'s `onDark` prop is
for. When adding green text, pick by what is behind it.

## Display flags

`src/main.jsx` renders:

```jsx
<App statusOpen={true} heroPortrait={true} ambientMotion={true} />
```

- `statusOpen` — show the "Open to opportunities" pill in the header (wide screens only)
- `heroPortrait` — show the circular portrait in the hero artwork
- `ambientMotion` — run the decorative animations (particles, spinning rings, bubbles)

## Accessibility

- One `<h1>`, then `<h2>` per section and `<h3>` per card — no skipped levels.
- A "Skip to content" link is the first thing keyboard users reach.
- The mobile menu is a real `role="dialog"`: Escape closes it, Tab stays inside, the
  page behind it cannot scroll, and focus returns to the burger on close.
- The journey stage picker and the certification accordion are `<button>`s carrying
  `aria-pressed` / `aria-expanded`, so they work with a keyboard and a screen reader.
- Every decorative shape, particle and rule is `aria-hidden`.
- `prefers-reduced-motion` is respected and watched live: animations, the
  reveal-on-scroll effect and the stat count-up all turn off.
- Native language names carry `lang` and `dir`, so a screen reader pronounces
  العربية and Français correctly instead of reading them as English.
- Every piece of text on the page clears WCAG AA contrast (4.5:1, or 3:1 for
  large headings), verified against the rendered page rather than by eye.
- Every link and button is at least 44 px on its short side, the size a finger
  can reliably hit. The contact email and phone were 17 px tall lines before.

## Printing

`@media print` in `src/index.css` strips the header, footer, artwork and the dark
call-to-action band, and spells out every external link's URL, so Ctrl+P produces a
readable one-colour CV. Anything decorative that is not an `<svg>` carries a
`no-print` class — add that class to new decoration rather than widening the
selector list.

## Assets

Both photos ship as WebP at two widths inside a `<picture>`, with the JPEG as the
fallback for the few browsers without WebP. A phone downloads the small WebP pair
(29 KB) rather than the full-size JPEGs (153 KB).

- `logo.png` — 480×320, never rendered taller than 72 px
- `portrait.jpg` + `portrait-400.webp`, `portrait-640.webp` — the circular hero photo
- `presenting.jpg` + `presenting-500.webp`, `presenting-1000.webp` — the About card

If you replace a photo, regenerate every variant and keep the `sizes` attribute in
`Hero.jsx` / `About.jsx` honest — it tells the browser how wide the image will actually
be, and a wrong value makes it pick the wrong file.
- `og-source.png` — the full-resolution share card artwork; it is not imported
  anywhere, so it never ships. Re-export it to `public/og-image.jpg` at 1200×630
  after editing.

Replace the CV by overwriting `src/assets/Mohcene_Meradji_CV.pdf` (keep the filename)
or update the import in `Hero.jsx` and `Contact.jsx`.

The share card served to Facebook, LinkedIn and X is `public/og-image.jpg` at
1200×630 — the standard size, and the one declared in `index.html`.

## Deploying

Once the site has a real domain, change the two `og:image` / `twitter:image` tags in
`index.html` to absolute URLs (`https://your-domain/og-image.jpg`) and add a
`<link rel="canonical">` — some crawlers will not resolve a relative image path.

## Fonts

Manrope, Inter and JetBrains Mono are self-hosted, not loaded from Google Fonts. The
`@fontsource-variable` packages supply the files and `src/fonts.css` declares the three
faces; one variable file per family covers every weight the design uses.

That means no render-blocking stylesheet on a third-party origin, no extra DNS and TLS
round trip before text can paint, no flash of fallback type, and no request to Google
from an EU visitor's browser.

Only the latin subset is declared. If you add copy in another script, add the matching
`@font-face` block from `node_modules/@fontsource-variable/<family>/wght.css`.

## Continuous integration

`.github/workflows/build.yml` runs `npm ci && npm run build` on every push to `main`
and on pull requests, and uploads `dist/` as an artifact. Since the site is pushed
straight to `main`, this is what catches a build that would otherwise deploy broken.
