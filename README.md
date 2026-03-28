# aotakeuma.com

音楽と生きる

## 環境構築

### aotakeuma (deprecated)

でぷりけいてっど！

### aotakeuma2

#### mise をセットアップ

https://mise.jdx.dev/getting-started.html

#### んで

1. `cd aotakeuma2`
1. `mise install`
1. `pnpm install`
1. `pnpm run dev` でローカル起動
1. `pnpm run deploy` でデプロイ

#### ダウンロード機能

HMAC シークレットキーを作る必要があります。

1. `VALUE=$(openssl rand -base64 32 | tr '+/' '-_' | tr -d '='); echo "$VALUE"`
1. `pnpm dlx wrangler secret put SIGNED_URL_SECRET`

## Dependabot

週に一回走るので、なんかいい感じにマージする
