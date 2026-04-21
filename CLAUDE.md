# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` - Start dev server on http://localhost:3000
- `npm run build` - Production build (outputs to `.next/`, uses `output: "standalone"`)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint (uses flat config in `eslint.config.mjs`)

## Tech Stack

- **Next.js**: 16.2.2 with App Router
- **React**: 19.2.4
- **TypeScript**: 5 (strict mode enabled)
- **Tailwind CSS**: v4 (use `@import "tailwindcss"` in CSS, not directives)
- **Package Manager**: Uses `bun` in deployment, `package-lock.json` present for npm
- **Font**: Geist/Geist_Mono via `next/font/google`

## Architecture

**App**: "Zero Fucks Given as a Service" — generates humorous "sorry" messages.

**Structure**:
- `app/page.tsx` — Client component (`"use client"`) with UI for fetching/displaying apologies
- `app/api/sorry/route.ts` — API route that proxies to external backend
- `app/layout.tsx` — Root layout with Geist font, Vercel Analytics, Speed Insights

**Configuration**:
- `next.config.ts` — Standalone output for containerized deployment (`output: "standalone"`)
- `eslint.config.mjs` — Flat config using `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`

**External Dependencies**:
- Backend API: `https://zfgaas.downormal.dev/sorry`
- Configurable via `BACKEND_URL` environment variable

**Key Patterns**:
- Client-side data fetching with `useState` for loading/error/success states
- Clipboard API for copy functionality with timeout-based reset
- Graceful error handling — user-friendly messages on API failures
- Dark-themed UI with Tailwind (`bg-zinc-950`, `text-zinc-100`)

**CSS/Tailwind v4 Setup**:
- Entry: `@import "tailwindcss"` (not `@tailwind` directives)
- Theme extension via `@theme inline` block
- CSS variables for colors (`--background`, `--foreground`)
- Dark mode: `prefers-color-scheme` media query, not `darkMode: 'class'`
- Font integration: `next/font` variables (`--font-geist-sans`, `--font-geist-mono`) mapped to Tailwind theme

**API Route Pattern**:
- Simple proxy pattern with env-based URL fallback
- Structured error responses: `{ error: string, details?: string }` with appropriate HTTP status
- Try/catch with logging for backend failures

## Important Notes

- **Next.js 16**: Check `node_modules/next/dist/docs/` for current APIs — breaking changes from training data
- **No tests**: Project has no test runner configured
- **No environment files**: `.env*` files not committed; `BACKEND_URL` optional (has default)
