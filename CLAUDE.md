# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Personal artist website for **竹馬あお** (aotakeuma.com). A React Router v7 SSR app running on Cloudflare Workers, with a signed download feature backed by Cloudflare R2 and KV.

> The `aotakeuma2/` directory is a legacy build artifact from before the repo restructure. Do not edit it.

## Commands

```bash
pnpm install          # install deps (also runs typegen via postinstall)
pnpm dev              # local dev server (runs typegen first)
pnpm build            # production build
pnpm lint             # prettier + eslint check
pnpm fix              # prettier + eslint autofix
pnpm storybook        # Storybook dev server (port 6006)

# download key management (see scripts/README.md for full docs)
pnpm seed:keys        # generate and insert test keys into local KV
pnpm key:get <KEY>    # inspect a key's status
pnpm key:set <KEY>    # update a key's properties

# typegen (run after changing wrangler.jsonc or adding routes)
pnpm typegen
```

Tests use Vitest and run via Storybook's addon-vitest. There is no standalone `pnpm test` script — run tests through Storybook or check `*.test.ts` files with `vitest` directly.

**Deploy**: Cloudflare auto-deploys from GitHub. For manual deploy: `pnpm deploy`.

## Architecture

### Request flow

```
Request → workers/app.ts (ExportedHandler)
  ├── POST /api/validate-key  → workers/download/handlers.ts
  ├── GET  /api/download      → workers/download/handlers.ts
  └── *                       → React Router SSR handler
```

The Cloudflare Worker (`workers/app.ts`) is the true entry point. It intercepts download API routes before delegating to React Router. Routes under `/yohkoh*` have `X-Robots-Tag: noindex, nofollow` injected at the Worker level.

### Content data model

All site content lives as static TypeScript in `app/contents/`. Types are defined in `app/types.ts`. The main types are `Album`, `Music`, `Game`, `Event` (Performance/Exhibition). When adding a new work or event:

1. Create a file in the appropriate `app/contents/works/` or `app/contents/events/` subdirectory
2. Export it from the subdirectory's `index.ts`
3. The top-level `app/contents/works/index.ts` and `app/contents/events/index.ts` aggregate everything — add the new item there too

IDs must be unique across both works and events, match `^[a-z0-9_]+$`, and avoid reserved path names (`works`, `events`, `contact`).

### Download system

Two-phase flow:

1. **`POST /api/validate-key`** — validates an 8-char download key against Cloudflare KV, returns a signed download URL (TTL: 300s, HMAC-SHA256 signed)
2. **`GET /api/download`** — verifies the signature and expiry, then streams the file from R2 bucket `aotakeuma_contents` as `{productId}.zip`

Keys are stored in KV binding `aotakeuma_keys`. The secret for signing is `SIGNED_URL_SECRET` (set via `wrangler secret`). The `scripts/` directory has CLI tools for managing keys locally and in production — see `scripts/README.md`.

### Routing

Routes are explicitly declared in `app/routes.ts` (not filesystem-based). The `:legacyId` catch-all at root handles redirects from old SPA-era URLs.

### Storybook

Every component in `app/components/` has a colocated `.stories.tsx`. Route files in `app/routes/` also have stories — these use `storybook-addon-remix-react-router` to simulate the router context.

### Cloudflare bindings

| Binding              | Type   | Purpose                           |
| -------------------- | ------ | --------------------------------- |
| `aotakeuma_contents` | R2     | Stores downloadable `.zip` files  |
| `aotakeuma_keys`     | KV     | Stores download key records       |
| `SIGNED_URL_SECRET`  | Secret | HMAC key for signed download URLs |
| `LAST_DEPLOYED_AT`   | Var    | Injected at deploy time           |

Run `pnpm typegen` after changing `wrangler.jsonc` to regenerate `worker-configuration.d.ts`.
