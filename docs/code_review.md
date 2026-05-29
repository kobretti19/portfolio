# Code Review — Portfolio (Petroski Martin)

**Project**: Next.js 15, React 19, TypeScript, Tailwind CSS v3, Framer Motion  
**Date**: May 2026  
**Scope**: Full source review of all 48 `.ts`/`.tsx` files, config files, data files

---

## Architecture (Good)

- Clean layered separation: `sections/` → `components/cards/` → `components/ui/`
- Data-driven content via `data/` — editing content doesn't touch JSX
- `WaterWaveWrapper` correctly loaded via `next/dynamic` with `{ ssr: false }`
- `cn()` utility (`clsx` + `tailwind-merge`) used consistently for class merging
- `CLAUDE.md` accurately documents the project conventions

---

## Critical Issues

### 1. TypeScript errors are entirely masked

- `next.config.ts` sets `typescript.ignoreBuildErrors: true`
- This hides real type issues across the codebase (e.g., `curve.tsx` referencing `window` at module level, `<img>` in modal, `any`-typed values)
- **Fix**: Address the underlying TS issues, then remove `ignoreBuildErrors`

### 2. `svg-curve.tsx` animation logic is broken

- `animateIn()` calls itself recursively via `requestAnimationFrame` but `progress` is captured by closure and never changes — it's a no-op infinite loop that never terminates
- `animateOut()` uses `setProgress` (a React state setter) inside a recursive `requestAnimationFrame` — fighting React's batching, likely causing stale closures
- Module-level `let time = Math.PI / 2` is re-initialized on every render, breaking the decay math
- **Fix**: Rewrite the animation using `useRef` for mutable values and `requestAnimationFrame` with proper termination conditions

---

## CSS (`app/globals.css`)

### 3. Typo: `.swioer-pagination` (line 92)

```css
.swioer-pagination {  /* should be .swiper-pagination */
```

The class name has no effect — Swiper's pagination class is `.swiper-pagination`.

### 4. Typo: `backdrop-filter: blue(4px)` (line 98)

```css
backdrop-filter: blue(4px) !important;  /* should be blur(4px) */
```

This is an invalid CSS function — the backdrop blur won't apply.

### 5. Wrong gradient in `.bottom-fade` (line 34-40)

```css
background-image: linear-gradient(
  0deg,
  rgba(0, 0, 0, 0) 20.1275%,
  rgba(255, 255, 255) 100%  /* should be rgba(0, 0, 0) */
);
```

The site background is black, but the gradient fades to white, producing a visible white band.

---

## Dead & Unused Code

### 6. Commented-out imports

| File | Line(s) | What |
|---|---|---|
| `app/page.tsx` | 3 | `// import WaterWaveWrapper...` (unnecessary — uses dynamic import) |
| `sections/featured.tsx` | 1, 5, 7, 15-20 | Entire `FeaturedCard` import and usage commented out |
| `sections/about.tsx` | 45 | `<Gallery />` commented out |

### 7. `featuredData` array is never consumed

`data/featured.ts` exports `featuredData` (4 Dribbble video entries), which is re-exported from `data/index.ts`. But `FeaturedSection` uses `projectFinishedGalleryImages` directly from `@/data/featured`, not `featuredData`. The entire `featuredData` array + its re-export is dead code.

### 8. `components/ui/gallery.tsx` is orphaned

Gallery component exists but is commented out of `AboutSection`. It also imports `galleryImages` from `components/cards/featured/galleryImages.tsx` (which itself is only used here), so both files are dead when the Gallery is not rendered.

---

## Data Errors

### 9. "MongoDB" miscategorized under "Monorepos" (`data/stack.ts:81`)

```typescript
{
  title: "Monorepos",
  stack: [{ id: 9, title: "MongoDB", ... }]
}
```

MongoDB is a document database, not a monorepo tool. Should have its own "Databases" category.

### 10. Duplicate featured entries (`data/featured.ts`)

Entries at index 1 and index 3 are identical — same title ("Social Media Video App"), same video URL, same Dribbble link.

### 11. Wrong link in featured entry 2 (`data/featured.ts:26-27`)

"Frontline Creative Studio Website" links to the Social Media Video App dribbble shot:

```typescript
link: 'https://cdn.dribbble.com/shots/23626219.Social-Media-Video-App',
```

Should point to its own Dribbble URL.

---

## Contact Form (`sections/contact.tsx`)

### 12. Console log left in production

```typescript
console.log(budgets, "budgets");  // line 20
```

### 13. No submission UX feedback

After clicking send, the user receives no loading indicator, success message, or error state. The form appears unresponsive until EmailJS resolves (or silently fails).

### 14. No form validation

All fields (`name`, `email`, `subject`, `message`, `services`, `budgets`) are freely submittable empty. Email field has `type="email"` but no HTML5 `required` or pattern validation.

### 15. Fragile submission pattern

The form uses a hidden `<div onClick>` → hidden `<button ref>` → programmatic click chain instead of a standard `<button type="submit">`. This can be simplified to `formRef.current.requestSubmit()` or just a visible submit button.

---

## Accessibility

### 16. Gallery modal issues (`components/expandable/expandable-featured.tsx`)

- Uses `<img>` instead of Next.js `<Image>` — loses optimization, no `alt` text on navigation
- **No keyboard navigation**: pressing Escape does not close the modal, arrow keys don't navigate
- **No focus trap**: focus can tab outside the modal into the page behind it
- **No ARIA attributes**: missing `role="dialog"`, `aria-modal="true"`, `aria-label`

### 17. Live clock loading state (`components/ui/live-clock.tsx`)

```typescript
{time ? (...) : <div>loading...</div>}
```

The fallback renders visible text with no screen-reader consideration. Could use `aria-live="polite"`.

---

## Dependencies & Config

### 18. Unused `@tailwindcss/postcss` dependency (`package.json`)

Listed in `dependencies` but the active PostCSS config is the v3 `postcss.config.js` (Tailwind v3). The v4 `postcss.config.mjs` and this package are leftovers.

### 19. `moment-timezone` is overkill

A single `HH:mm` format with timezone could be done with `Intl.DateTimeFormat`:

```typescript
new Intl.DateTimeFormat('de-CH', {
  hour: '2-digit', minute: '2-digit',
  timeZone: 'Europe/Zurich'
}).format(new Date());
```

This would eliminate a ~350kB dependency.

### 20. Unnecessary ESLint disable (`components/navigation/header/header.tsx:1`)

```typescript
/* eslint-disable react/jsx-no-undef */
```

This disables a useful rule for the entire file without clear justification.

### 21. Inconsistent font variable pattern (`app/layout.tsx`)

- `MainFont` uses `.className` (applied as a class string)
- `OswaldFont` uses `.variable` (CSS custom property)
- `PixelFont` uses `.variable`

Only the className variant is applied to `<body>`. The CSS variables are available but only `Oswald` and `Pixel` are used via `font-oswald`/`font-pixel` in Tailwind config. Consider making `MainFont` a variable too for consistency, or removing the variable pattern if only one font family is the base.

---

## SSR & Runtime

### 22. `window` at module level in `curve.tsx`

```typescript
const initialPath = `M100 0 L100 ${window.innerHeight}...`;  // top-level, line 5
```

Runs at module evaluation time, not inside a component or effect. Currently safe because the parent chain (`FullScreenMenu` → `Header` → `LandingSection` → `page.tsx`) is entirely `'use client'`, but any server-side import of this module would crash with `ReferenceError: window is not defined`. Move inside a `useEffect` or `useLayoutEffect`.

---

## Nitpicks

- `data/stack.ts` uses sequential `id` values but the gap after `id: 2` (jumps to `4`) is sloppy
- `featured-card.tsx` references `/assets/images/placeholder.jpg` as fallback — this file may not exist
- `education.tsx` card title is lowercase `'education'` while all other card titles use `'title case'` or `'Title Case'`
- `heading.tsx` has a typo in the class `uotline-none` (line 15) — should be `outline-none` (though it has no effect since it's on a custom class)
- The `expandable-featured.tsx` modal uses React state for `currentImageIndex` but doesn't reset the key on the `<img>` element, so no re-mount occurs when switching projects

---

## Summary

| Category | Count | Key Takeaway |
|---|---|---|
| **Critical bugs** | 2 | TS build errors masked; SVG curve animation broken |
| **CSS typos** | 3 | Swiper class misspelling, `blue`→`blur`, wrong gradient color |
| **Dead code** | 3 files/segments | `featuredData`, unused imports, orphaned Gallery |
| **Logic errors** | 2 | Duplicate featured entry, MongoDB miscategorized |
| **UX gaps** | 2 | No form feedback, no validation |
| **Accessibility** | 4 | Modal lacks keyboard + focus + ARIA, clock missing a11y |
| **Tech debt** | 4 | Unused dependency, heavy moment.js, unnecessary eslint-disable, inconsistent fonts |

The project structure is sound and the visual ambition is impressive. The main areas to address are the two critical bugs (`ignoreBuildErrors` and the SVG animation), cleaning up dead code, fixing CSS typos, and hardening the contact form and gallery modal for production quality.
