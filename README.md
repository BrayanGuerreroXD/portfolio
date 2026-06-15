# Brayan Guerrero — Portfolio 🪐

Space-themed personal portfolio for **Brayan Guerrero**, Software Engineer.
Built with **React + TypeScript + Material UI (MUI)** and Vite, replicating the
"Enhanced Space Portfolio" design created in Google Stitch.

## Stack

- **React 18** + **TypeScript**
- **Material UI 6** (`@mui/material`, `@mui/icons-material`) with Emotion
- **Vite 6** for dev/build
- **Fredoka** + **Space Mono** fonts (self-hosted via `@fontsource`)
- **Devicon** (CDN) for tech-stack logos

## Sections

Navbar · Hero · About · Projects · Tech Stack (Skills) · Contact · Footer —
all on a glassmorphism + dashed-border "playful space" theme with a starfield
background, floating alien mascot and UFO.

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Deployment (GitHub Pages)

The site deploys automatically to GitHub Pages via GitHub Actions
(`.github/workflows/deploy.yml`) on every push to `main`, and is served at:

> https://brayanguerreroxd.github.io/portfolio/

The production `base` is set to `/portfolio/` in `vite.config.ts` to match the
repository name. **If you rename the repo, update that `base` value** (and the
URL above) accordingly. Public assets are resolved through `src/utils/asset.ts`
so they keep working under the sub-path.

One-time setup in the GitHub repo: **Settings → Pages → Build and deployment →
Source: GitHub Actions**.

## Editing content

All copy, projects, skills and links live in **`src/data/portfolio.ts`** —
edit that single file to update the site. Design tokens (colors, fonts) are in
**`src/theme.ts`**.

Contact details currently set:

- **Email:** brayanstewartguor@gmail.com
- **GitHub:** https://github.com/BrayanGuerreroXD
- **LinkedIn:** _placeholder_ — update `contact.linkedin` in `src/data/portfolio.ts`.

## Assets

Image assets (alien mascot, UFO, logo, nebula background) were exported from the
Stitch design into `public/assets/`. The original design HTML is kept for
reference in `design-reference/stitch-design.html`.

## Project structure

```
src/
├─ main.tsx              # entry: ThemeProvider + CssBaseline + fonts
├─ App.tsx               # page assembly
├─ theme.ts              # MUI dark theme + design tokens
├─ data/portfolio.ts     # all editable content
└─ components/
   ├─ StarfieldBackground.tsx
   ├─ GlassPanel.tsx     # reusable glassmorphism panel
   ├─ Navbar.tsx         # responsive nav + mobile drawer
   ├─ Hero.tsx
   ├─ About.tsx
   ├─ Projects.tsx
   ├─ Skills.tsx
   ├─ Contact.tsx
   └─ Footer.tsx
```
