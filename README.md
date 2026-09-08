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

## Structure

```
index.html                 Meta tags, JSON-LD, Google Fonts, #root mount
public/                    Copied to dist/ as-is: favicons, manifest, robots, share card
src/
  main.jsx                 React entry; passes the three display flags to <App>
  App.jsx                  Page shell: skip link, scroll bar, header, all sections
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

## Printing

`@media print` in `src/index.css` strips the header, footer, artwork and the dark
call-to-action band, and spells out every external link's URL, so Ctrl+P produces a
readable one-colour CV. Anything decorative that is not an `<svg>` carries a
`no-print` class — add that class to new decoration rather than widening the
selector list.

## Assets

Photos are stored at roughly twice their largest rendered size and no more — the whole
page ships about 180 KB of images. If you replace one, resize it first:

- `logo.png` — 480×320, never rendered taller than 72 px
- `portrait.jpg` — 640×640, the circular hero photo
- `presenting.jpg` — 1000×1000, cropped to 4:3 in the About card
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

## Notes

- Fonts (Manrope, Inter, JetBrains Mono) load from Google Fonts in `index.html`.
