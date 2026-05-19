# aotakeuma.com

音楽と生きる

## 環境構築

### mise をセットアップ

https://mise.jdx.dev/getting-started.html

```bash
mise install
pnpm install
pnpm dev        # ローカル起動（KV/R2 はローカルシミュレーション）
```

### ダウンロード機能の初期設定

HMAC シークレットキーを作成して wrangler secret に登録する。

```bash
VALUE=$(openssl rand -base64 32 | tr '+/' '-_' | tr -d '='); echo "$VALUE"
pnpm dlx wrangler secret put SIGNED_URL_SECRET
```

## デプロイ

main ブランチへの push で GitHub Actions が自動デプロイする。

手動デプロイ:

```bash
pnpm deploy
```

## Dependabot

週に一回走るので、なんかいい感じにマージする。

## ダウンロード機能運用

- `pnpm dev:remote` で admin 機能にアクセス
- `R2 アップロード` タブでアルバムの {workId}.zip をアップロード
- `キー発行` タブで、Product ID のところには {workId} を記入し、発行
- contents 以下の {workId} の定義で、downloadEnabled を true にする

---

## 開発モードの仕組み

`pnpm dev` と `pnpm dev:remote` では、Worker の実行基盤と Cloudflare バインディングの接続先が根本的に異なる。

### pnpm dev（通常開発）

```
ブラウザ
  └─ HTTP ──→ Vite dev server (localhost:5173)
                ├─ HMR WebSocket（ファイル変更を即反映）
                ├─ フロントエンド JS/CSS（Vite が直接配信）
                └─ SSR リクエスト
                     └─ @cloudflare/vite-plugin が Worker を Vite プロセス内で実行
                           └─ miniflare（Cloudflare ランタイムのローカル実装）
                                ├─ KV  → .wrangler/state/v3/kv/  （ローカルファイル）
                                └─ R2  → .wrangler/state/v3/r2/  （ローカルファイル）
```

**ポイント:**

- Worker のコードは Vite プロセスにインプロセスで埋め込まれて動く
- KV/R2 は `.wrangler/state/` 以下のファイルに読み書きされる（本番とは無関係）
- ファイル変更が HMR で即反映される

### pnpm dev:remote（本番バインディング接続）

```
ブラウザ
  └─ HTTP ──→ wrangler dev --remote (localhost:8787)
                └─ wrangler がビルド済みの Worker をリモート実行基盤に送信
                     └─ Cloudflare エッジ（実際のインフラ）
                          ├─ KV  → 本番 KV namespace（aotakeuma_keys）
                          └─ R2  → 本番 R2 bucket（aotakeuma_contents）
```

**ポイント:**

- `NODE_ENV=development react-router build` で admin ルート・admin API 入りのビルドを生成してから wrangler に渡す
- Worker は Cloudflare のエッジで実際に実行される（ローカルシミュレーションなし）
- KV/R2 の読み書きが本番データに直接反映されるので注意
- HMR なし。変更のたびにビルド → 再起動が必要
- `wrangler login`（OAuth）が必要

### admin ルートが本番ビルドに含まれない仕組み

admin 機能は 2 か所のビルド時フラグで除外される。

**フロントエンド（`app/routes.ts`）:**

```ts
const adminRoutes = process.env.NODE_ENV === "development"
  ? [route("admin", ...)]
  : [];
```

React Router のビルドは `NODE_ENV=production` で実行されるため、`adminRoutes` は空配列になり、admin ページのコードがバンドルに含まれない。

**バックエンド（`workers/api/router.ts`）:**

```ts
if (import.meta.env.DEV) {
  const { adminRouter } = await import("./admin/router");
  api.route("/admin", adminRouter);
}
```

Vite は `import.meta.env.DEV` を本番ビルド時に `false` へ置換するため、この `if` ブロック全体が dead code として除去される。

### ローダーが `api.fetch()` を使う理由

admin のローダー・アクションは、`fetch("http://...")` ではなく `api.fetch(new Request(...), env)` で Hono を直接呼び出している。

`pnpm dev` では miniflare がローカルで動くため、ループバック fetch でも動作するが、`pnpm dev:remote` では Worker がエッジで実行されるため、`fetch("http://localhost:8787/...")` はエッジから localhost に届かずタイムアウトする（Cloudflare の 522 エラー）。`api.fetch()` で直接呼び出すことで両モードで動作する。

```
❌ pnpm dev:remote では動かない
   SSR loader → fetch("http://localhost:8787/api/admin/keys")
                  → エッジからローカルホストに到達できず 522

✅ 両モードで動く
   SSR loader → api.fetch(new Request("/api/admin/keys"), env)
                  → Hono を直接呼び出し（ネットワークなし）
```

### R2 大容量アップロードの仕組み

#### 問題

当初のアップロード実装は `multipart/form-data` でファイルを丸ごと Worker に POST し、Worker が R2 binding の `put()` で保存する単純な構成だった。

```
ブラウザ → POST /api/admin/upload（ファイル全体）→ Worker → R2.put()
```

Cloudflare Workers の無料プランはリクエストボディの上限が **100MB** のため、それを超えるファイルで `413 Entity Too Large` が発生していた。Cloudflare ダッシュボードからの直接アップロードも上限 300MB のため回避策にならなかった。

#### 解決策：R2 binding のマルチパートアップロード

R2 binding には S3 互換のマルチパートアップロード API が組み込まれている。ブラウザ側でファイルを **50MB ずつ分割** し、パートごとに別リクエストとして送ることで 100MB 制限を回避した。

```
① ブラウザ → POST /api/admin/upload/initiate
              Worker: R2.createMultipartUpload(key) → uploadId を返す

② ブラウザ → PUT /api/admin/upload/part?partNumber=N&uploadId=...  ×パート数
   （1パート最大 50MB のバイナリ）
              Worker: R2.resumeMultipartUpload(key, uploadId).uploadPart(N, body)
              → ETag を返す

③ ブラウザ → POST /api/admin/upload/complete
              Worker: upload.complete([{partNumber, etag}, ...])
              → R2 がパートを結合して 1 オブジェクトとして保存

エラー時:
   ブラウザ → DELETE /api/admin/upload/abort
              Worker: upload.abort()  ← 中途半端なパートを破棄
```

#### ポイント

- **S3 互換 API・追加認証情報が不要**: R2 binding を直接使うため、S3 API キー（`R2_ACCESS_KEY_ID` 等）やリクエスト署名（SigV4）は一切不要。Worker の env に既存の R2 binding があれば動く
- **ファイルデータは Worker 経由**: presigned URL を使ってブラウザが R2 に直接 PUT する方式と異なり、各パートは Worker を経由する。ただし各パートが 50MB なので制限に引っかからない
- **admin 専用**: このエンドポイントは `import.meta.env.DEV` フラグで本番ビルドから除外されており、外部からは到達不能
