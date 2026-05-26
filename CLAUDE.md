# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page personal portfolio for Petroski Martin. Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v3, animation-heavy (Framer Motion, custom WebGL water/grain effects, custom cursor).

## Commands

Package manager is **pnpm** (`pnpm-lock.yaml`, `pnpm-workspace.yaml`). A stale `package-lock.json` is also committed — use pnpm.

- `pnpm dev` — dev server with Turbopack at http://localhost:3000
- `pnpm build` — production build
- `pnpm start` — serve the production build
- `pnpm lint` — ESLint (`next/core-web-vitals` + `next/typescript`)

There is no test suite.

## Architecture

The entire site is **one route**. `app/page.tsx` is a client component (`'use client'`) that stacks four section components inside `WaterWaveWrapper`:

```
app/page.tsx  →  LandingSection → FeaturedSection → AboutSection → ContactSection
```

The composition layering is the key thing to understand:

- **`sections/`** — top-level page regions (`landing`, `featured`, `about`, `contact`). Each section lays out a grid and composes cards/components. Start here to find where something renders.
- **`components/cards/`** — content blocks used by sections (e.g. `me`, `resume`, `stack`, `experience`, `education`, `certifications`, `Projects`, `contact`). `AboutSection` is essentially a grid of these cards.
- **`components/ui/`** — primitives (`button`, `card`, `input`, `select-input`, `text-area`, `gallery`, `timeline`, `tooltip`, `live-clock`, etc.).
- **`components/visualEffects/`** — `water-wave-wrapper`, `grain-effect`, `magnetic-wrapper`, `svg-curve`. These are visual-only wrappers.
- **`components/navigation/`** and **`components/cursor/`** — full-screen menu (with `framer-motion` curve animation in `full-screen-menu/animation.ts`) and the custom animated cursor.
- **`data/`** — all content is data-driven. `data/index.ts` re-exports; `data/featured.ts` (projects + `projectFinishedGalleryImages`), `data/stack.ts`, `data/projectImages.ts`. **Edit content here, not in JSX.**
- **`lib/utils.ts`** — `cn()` = `twMerge(clsx(...))`. Use it for all conditional class merging.

`app/layout.tsx` mounts global chrome once: fonts (`Bricolage_Grotesque` as the base, plus `Oswald` via `--font-oswald` and a local `--font-pixel`), `<GrainEffect />`, and `<Cursor />`.

### Conventions

- **Path alias**: `@/*` maps to the repo root (so `@/components/...`, `@/sections/...`, `@/public/...`, `@/data`).
- Most components are client components — interactivity, animation libraries, and browser APIs (`window.location`) are used throughout.
- `WaterWaveWrapper` is imported via `next/dynamic` with `{ ssr: false }` because the underlying `react-water-wave` needs the DOM. Its `children` is a **render-prop function** `() => ReactNode`, not plain JSX.
- Theme colors/fonts are defined in `tailwind.config.js` (`primary`/`secondary` translucent backgrounds, named `blue`/`green`/`pink` accents, `border`). Custom global CSS classes (`.fancy-btn`, `.bottom-fade`, `.line`, grain animation) live in `app/globals.css`.

## Gotchas

- **TypeScript build errors are ignored**: `next.config.ts` sets `typescript.ignoreBuildErrors: true`, so `pnpm build` will succeed despite type errors. Type-check intentionally; the build won't catch them.
- **Two PostCSS configs coexist**: `postcss.config.js` (CommonJS, `tailwindcss` + `autoprefixer` — the Tailwind **v3** path matching `tailwind.config.js`) and `postcss.config.mjs` (`@tailwindcss/postcss`, the v4 path). The v3 setup is the effective one; `@tailwindcss/postcss` in `dependencies` is a leftover. Don't add v4-only syntax.
- The contact form (`sections/contact.tsx`) submits via **EmailJS** with the service/template/public keys inlined in the client. Hidden read-only inputs mirror the `services`/`budgets` state into the form payload, and a hidden `<button>` is clicked programmatically to submit.
