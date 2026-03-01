# Tailwind v3 → v4 Migration

> **Status:** Not started
> **Evaluated:** 2026-02-28  
> **LLM Model:** Google Gemini (Antigravity) / Claude Sonnet 4.6 Thinking

## Current Setup

- **Tailwind:** `^3.4.19`
- **Plugins:** `@tailwindcss/typography`, `daisyui ^2.51.0`
- **Framework:** Next.js 13
- **Config:** `tailwind.config.js` with `darkMode: 'class'`, minimal theme extension

---

## Benefits

| Benefit | Impact |
|---|---|
| CSS-first config (no more `tailwind.config.js`) | Medium — config is simple, easy to port |
| ~5–10× faster builds (Rust-based engine) | High — noticeable during `next dev` |
| No PostCSS required — remove `autoprefixer` | Small cleanup |
| `@import "tailwindcss"` replaces `@tailwind` directives | Minor syntax update |
| P3 color palette + new color system | Low — no custom colors in use |

---

## Effort & Blockers

| Issue | Severity | Notes |
|---|---|---|
| **DaisyUI v2 not compatible with Tailwind v4** | 🔴 Blocker | Must upgrade to **daisyui v5** first; may have component-level breaking changes |
| `@tailwindcss/typography` plugin syntax change | 🟡 Medium | Works with v4, import syntax changes slightly |
| `darkMode: 'class'` moves to CSS | 🟢 Easy | One-liner in CSS file |
| `tailwind.config.js` replacement | 🟢 Easy | Minimal config, quick to port |
| Remove `postcss` + `autoprefixer` | 🟢 Easy | Dependency cleanup only |
| Next.js 13 compatibility | 🟡 Medium | Works but v4 is smoother with Next.js 14+ |

---

## Recommended Migration Order

1. **Upgrade DaisyUI v2 → v5** and test all components
2. Upgrade `tailwindcss` to v4
3. Migrate `tailwind.config.js` → CSS config (`@import "tailwindcss"`)
4. Update `darkMode` config in CSS
5. Remove `postcss.config.js` and `autoprefixer`
6. Update `@tailwindcss/typography` import syntax

---

## Summary

| | |
|---|---|
| **Overall effort** | Medium-High |
| **Biggest risk** | DaisyUI v2 → v5 (major version; likely component breaking changes) |
| **Urgency** | Low — migration not urgent unless build speed is a pain point |

See [DaisyUI v5 changelog](https://daisyui.com/docs/changelog/) before committing.
