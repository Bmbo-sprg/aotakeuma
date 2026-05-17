# Dashboard 再実装 TODO（issue #139, #140）

## 目標

`scripts/` の全機能を local dashboard に統合し、`scripts/` を廃止する。
`/admin/*` はビルド時に除外され、プロダクションには含まれない。

## アーキテクチャ方針

- **フロントエンド**: 既存の React Router v7 アプリに `/admin/*` ルートを追加
  - `process.env.NODE_ENV === "development"` 時のみ `routes.ts` に登録（バンドルから除外）
- **バックエンド**: Hono の `/api/admin/*` を追加
  - `import.meta.env.DEV` が `true` の時のみ登録（バンドルから除外）
  - 既存の `keyStore.ts`・`contentStore.ts` model を活用
- **KV/R2 アクセス**: Cloudflare binding 経由（dev 時は local、`wrangler dev --remote` で本番）
- **`scripts/` は全廃止**: `kvClient.ts`・`seedKeys.ts`・`getKey.ts`・`setKey.ts`・`generateKey.ts`・`uploadToR2.ts` を削除

## ルート構成

### フロントエンド（`app/routes/admin/`）

| パス               | 概要                                         |
| ------------------ | -------------------------------------------- |
| `/admin`           | トップ（統計サマリー）                       |
| `/admin/keys`      | キー一覧・usageLog 分析                      |
| `/admin/keys/new`  | キー発行（件数・product・期限・maxUseCount） |
| `/admin/keys/:key` | キー詳細・編集・usageLog                     |
| `/admin/upload`    | R2 へのファイルアップロード                  |
| `/admin/contents`  | コンテンツ管理（stub、将来実装）             |

### バックエンド（`workers/api/admin/`）

| メソッド | パス                   | 概要                                           |
| -------- | ---------------------- | ---------------------------------------------- |
| GET      | `/api/admin/keys`      | 全キー一覧（record 含む）                      |
| POST     | `/api/admin/keys`      | キー発行（複数件）                             |
| GET      | `/api/admin/keys/:key` | キー詳細取得                                   |
| PATCH    | `/api/admin/keys/:key` | キー更新（isActive / maxUseCount / expiresAt） |
| POST     | `/api/admin/upload`    | R2 へファイルアップロード                      |

## タスク一覧

### 1. `models/downloadKey.ts` にキー生成ロジックを追加

- `generateKey.ts` から `generateRandomKey()` を移植
- `formatKey` は既存の `formatDownloadKey` に統合（重複削除）
- `kvClient.ts` の重複した `normalizeDownloadKey` も削除

### 2. `workers/api/admin/` を作成（dev only）

- `workers/api/admin/router.ts` — admin 用 Hono ルーター
- `workers/api/admin/controllers/keys.ts` — キー CRUD
- `workers/api/admin/controllers/upload.ts` — R2 アップロード
- `workers/api/router.ts` で `import.meta.env.DEV` 時のみ mount

### 3. `app/routes/admin/` を作成（dev only）

- `app/routes.ts` で `process.env.NODE_ENV === "development"` 時のみ登録
- 各ルートファイルを作成（layout / index / keys / keys.$key / keys.new / upload / contents）

### 4. `scripts/` を廃止

- `kvClient.ts`・`seedKeys.ts`・`getKey.ts`・`setKey.ts`・`generateKey.ts`・`uploadToR2.ts` を削除
- `dashboard/server.ts`・`dashboard/` を削除
- `package.json` から `dashboard` スクリプトを削除
- `README.md` を更新（または削除）
- `@hono/node-server` を dependencies から削除（devDependencies へ移動も不要）

### 5. `Album` 型に `downloadEnabled` フラグを追加（issue #139 タスク2）

- `app/types.ts` の `Album` 型に `downloadEnabled?: boolean` を追加
- `app/contents/works/albums/yohkoh.ts` で `downloadEnabled: true` を設定
- `app/routes/works/album.tsx` の `DOWNLOAD_ENABLED_ALBUM_IDS` を廃止し型フィールドで判定

## 将来スコープ（今回は対象外）

- `/admin/contents/*` — `app/contents/` のコンテンツ CRUD（issue #140）
  - JSON 移行の検討も含む
