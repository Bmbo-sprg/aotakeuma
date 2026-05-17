# workers/ リファクタリング TODO

## ディレクトリ構造（移行後）

```
workers/
  app.ts                          # エントリポイント（変更なし）
  lastCommit.ts                   # github.ts → リネーム
  api/
    router.ts                     # Hono ルーター（変更なし）
    types.ts                      # 共通型定義（download/types.ts から移動・整理）
    controllers/
      validateKey.ts              # handleValidateKey（Hono Context ベースに書き直し）
      signedDownload.ts           # handleSignedDownload（Hono Context ベースに書き直し）
    models/
      downloadKey.ts              # ダウンロードコードの正規化ロジック（store.ts から）
      keyStore.ts                 # Cloudflare KV の読み書き（store.ts から）
      contentStore.ts             # Cloudflare R2 のファイル取得（新規）
      signedUrl.ts                # 署名付きURL の発行・検証（signature.ts から）
```

## タスク一覧

### 1. `github.ts` → `lastCommit.ts` にリネーム

- `workers/github.ts` を `workers/lastCommit.ts` に改名
- `workers/app.ts` の import を更新

### 2. `api/types.ts` を作成

- `download/types.ts` から以下を移動・整理：
  - `ValidationFailureReason`（validateKey 用）
  - `ValidateResponse` / `ValidateResponseSuccess` / `ValidateResponseFailure`
  - `KeyUsageLog`、`DownloadKeyRecord`
  - 全エンドポイント共通のエラー型 `{ ok: false; reason: string; message: string }` を追加
  - `DownloadEnv` は廃止（各 model が必要な binding だけを引数で受け取る形に）

### 3. `models/downloadKey.ts` を作成

- `store.ts` からダウンロードコードの正規化ロジックを移動：
  - `normalizeDownloadKey`
  - `formatNormalizedDownloadKey`（内部関数）

### 4. `models/keyStore.ts` を作成

- `store.ts` から KV の読み書きロジックを移動：
  - `getDownloadKeyRecord(kv: KVNamespace, key: string)`
  - `putDownloadKeyRecord(kv: KVNamespace, key: string, value: DownloadKeyRecord)`
  - `appendUsageLog(kv: KVNamespace, key: string, record, log)`
  - 引数から `DownloadEnv` を排除し、`KVNamespace` を直接受け取る形に

### 5. `models/contentStore.ts` を作成（新規）

- R2 からのファイル取得ロジック：
  - `getContent(bucket: R2Bucket, productId: string): Promise<R2ObjectBody | null>`

### 6. `models/signedUrl.ts` を作成

- `signature.ts` から移動・拡張：
  - `createSignature`（現行のまま移動）
  - `safeEquals` （現行のまま移動）
  - `verifySignature(params): Promise<boolean>` を新たに切り出す（handlers.ts のループ検証ロジックをここに移動）
  - `buildSignedDownloadUrl(params): URL` を切り出す（URL 組み立てロジック）

### 7. `controllers/validateKey.ts` を作成

- Hono `Context` を受け取る形に書き直し
- `c.req.json()` でリクエストボディを取得
- `c.json()` でレスポンスを返す
- ドメインロジックは model 層に移譲（controller は薄く）
- `router.ts` の import を更新

### 8. `controllers/signedDownload.ts` を作成

- Hono `Context` を受け取る形に書き直し
- エラーレスポンスを `c.json({ ok: false, reason, message }, status)` に統一（plaintext 廃止）
- 署名検証・期限チェックは `signedUrl.ts` に移譲
- R2 取得は `contentStore.ts` に移譲
- `router.ts` の import を更新

### 9. 旧ファイルの削除

- `workers/download/handlers.ts`
- `workers/download/store.ts`
- `workers/download/signature.ts`
- `workers/download/types.ts`
- `workers/github.ts`
- `workers/download/` ディレクトリが空になるなら削除

### 10. `signature.test.ts` の移動・更新

- `workers/download/signature.test.ts` → `workers/api/models/signedUrl.test.ts`
- 関数名変更に合わせてテストを更新
