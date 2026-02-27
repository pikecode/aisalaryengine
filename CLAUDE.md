# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (defaults to :5173, auto-increments if busy)
npm run build      # Type-check + production build (vue-tsc && vite build)
npm run preview    # Preview production build
npx tsc --noEmit   # Type-check only
```

No test runner is configured yet.

## Git Remote

Uses SSH multi-account config. Push with:
```bash
git push git@github-pikecode:pikecode/aisalaryengine.git main
```

## Architecture

**Mobile-first responsive** — default styles target H5 (< 768px), `md:` prefix overrides for PC. Components use a single-file approach with Tailwind responsive prefixes rather than separate mobile/desktop components. Sections with large layout differences use `flex md:hidden` / `hidden md:flex` to swap structures.

**Data flow:**
```
src/data/       ← static mock arrays (source of truth during dev)
src/api/        ← async functions wrapping data/ (TODO: replace with real fetch)
src/stores/     ← Pinia stores consuming api/ or data/
components/     ← read from stores or import data/ directly
```

When connecting a real backend, only `src/api/` needs to change.

**Layouts:** `src/layouts/DefaultLayout.vue` wraps `AppHeader + <slot> + AppFooter`. Views that need the standard shell should use it.

**Composables:** `useSearch<T>(items, keys)` and `useFilter<T>(items, key)` in `src/composables/` are generic and reusable across views.

**Types:** All interfaces live in `src/types/` (project, pricing, common) and are re-exported from `src/types/index.ts`. Import from `@/types`.

## Tailwind Custom Config

`tailwind.config.js` defines:
- `hero-gradient` background image class (dark purple gradient used in PC HeroSection)
- Custom brand colors under `theme.extend.colors`

Global component classes (`.btn-primary`, `.card`, `.tag`, `.section-title`, `.section-subtitle`) are defined in `src/assets/main.css` using `@layer components`.
