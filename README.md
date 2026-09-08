# Mohcene Meradji — Portfolio (React)

A React port of the portfolio prototype. Same layout, colors, type, animations and
interactions — rebuilt as a standard Vite + React project you can run, edit and deploy.

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
index.html                 Google Fonts + #root mount
src/
  main.jsx                 React entry; passes the three display flags to <App>
  App.jsx                  Page shell: scroll bar, header, all sections
  index.css                Resets, keyframes, hover/focus states
  theme.js                 Colors, font stacks, shared style objects
  data.js                  All content: nav, stats, education, skills, certs, languages…
  hooks.js                 Breakpoints, scroll spy, reveal-on-scroll, count-up, motion toggle
  assets/                  Logo, photos, CV PDF
  components/
    Header.jsx             Sticky header, nav underline, status pill, burger
    MobileNav.jsx          Full-screen menu (below 900px)
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
updates. Long-form copy (hero headline, bio, research blurb) sits inline in its own
component. Colors and font stacks are in `src/theme.js`.

## Display flags

`src/main.jsx` renders:

```jsx
<App statusOpen={true} heroPortrait={true} ambientMotion={true} />
```

- `statusOpen` — show the "Open to opportunities" pill in the header (wide screens only)
- `heroPortrait` — show the circular portrait in the hero artwork
- `ambientMotion` — run the decorative animations (particles, spinning rings, bubbles)

## Notes

- Fonts (Manrope, Inter, JetBrains Mono) load from Google Fonts in `index.html`.
- `prefers-reduced-motion` is respected: animations and the reveal-on-scroll effect turn off.
- Replace the CV by overwriting `src/assets/Mohcene_Meradji_CV.pdf` (keep the filename)
  or update the import in `Hero.jsx` and `Contact.jsx`.
