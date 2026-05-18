# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Personal artist website for **竹馬あお** (aotakeuma.com). A React Router v7 SSR app running on Cloudflare Workers, with a signed download feature backed by Cloudflare R2 and KV.

## Commands

```bash
pnpm install          # install deps (also runs typegen via postinstall)
pnpm dev              # local dev server — KV/R2 はローカルシミュレーション
pnpm dev:remote       # dev server — KV/R2 を本番に接続（wrangler dev --remote）
pnpm build            # production build（admin ルート・API を除外）
pnpm lint             # prettier + eslint check
pnpm fix              # prettier + eslint autofix
pnpm storybook        # Storybook dev server (port 6006)

# typegen (run after changing wrangler.jsonc or adding routes)
pnpm typegen
```

Tests use Vitest and run via Storybook's addon-vitest. There is no standalone `pnpm test` script — run tests through Storybook or check `*.test.ts` files with `vitest` directly.

**Deploy**: GitHub Actions が main push 時に自動デプロイ。手動: `pnpm deploy`。

## Architecture

### Request flow

```
Request → workers/app.ts (ExportedHandler)
  ├── /api/*  → Hono router (workers/api/router.ts)
  │     ├── POST /api/validate-key  → controllers/validateKey.ts
  │     ├── GET  /api/download      → controllers/signedDownload.ts
  │     └── [DEV only] /api/admin/* → admin/router.ts
  └── *       → React Router SSR handler
```

The Cloudflare Worker (`workers/app.ts`) is the true entry point. All API routes are handled by Hono before falling through to React Router.

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

Keys are stored in KV binding `aotakeuma_keys`. The secret for signing is `SIGNED_URL_SECRET` (set via `wrangler secret`). ダウンロードキーの管理は `/admin` ダッシュボードから行う。

`Album` 型の `downloadEnabled: true` が設定されているアルバムにのみダウンロードセクションが表示される。

### Admin dashboard

`/admin/*` ルートはローカル開発専用。本番ビルドには含まれない。

- **フロントエンド除外**: `app/routes.ts` で `process.env.NODE_ENV === "development"` 時のみ登録
- **バックエンド除外**: `workers/api/router.ts` で `import.meta.env.DEV` 時のみ Hono にマウント（Vite がビルド時に dead code として除去）

ローダー・アクションは `api.fetch(new Request(...), context.cloudflare.env)` で Hono を直接呼び出す（HTTP ラウンドトリップなし）。`pnpm dev:remote` での動作に必要な設計。

### `pnpm dev` vs `pnpm dev:remote` の仕組み

→ 詳細は README.md の「開発モードの仕組み」セクションを参照。

### Routing

Routes are explicitly declared in `app/routes.ts` (not filesystem-based). The `:legacyId` catch-all at root handles redirects from old SPA-era URLs.

### Storybook

Every component in `app/components/` has a colocated `.stories.tsx`. Route files in `app/routes/` also have stories — these use `storybook-addon-remix-react-router` to simulate the router context.

**新しいコンポーネントを追加する際は、必ず同階層に `.stories.tsx` も作成すること。**

### Cloudflare bindings

| Binding              | Type   | Purpose                           |
| -------------------- | ------ | --------------------------------- |
| `aotakeuma_contents` | R2     | Stores downloadable `.zip` files  |
| `aotakeuma_keys`     | KV     | Stores download key records       |
| `SIGNED_URL_SECRET`  | Secret | HMAC key for signed download URLs |
| `LAST_DEPLOYED_AT`   | Var    | Injected at deploy time           |

Run `pnpm typegen` after changing `wrangler.jsonc` to regenerate `worker-configuration.d.ts`.
