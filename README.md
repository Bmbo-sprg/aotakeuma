# aotakeuma.com

音楽と生きる

## 環境構築

### mise をセットアップ

https://mise.jdx.dev/getting-started.html

### んで

1. `cd aotakeuma2`
1. `mise install`
1. `pnpm install`
1. `pnpm run dev` でローカル起動
1. `pnpm run deploy` でデプロイ

### ダウンロード機能

HMAC シークレットキーを作る必要があります。

1. `VALUE=$(openssl rand -base64 32 | tr '+/' '-_' | tr -d '='); echo "$VALUE"`
1. `pnpm dlx wrangler secret put SIGNED_URL_SECRET`

## Dependabot

週に一回走るので、なんかいい感じにマージする

## デプロイ

基本的に Cloudflare 側で設定してあるので、GitHub Actions とかは使ってないです

手動で実行したい場合は `pnpm run deploy` で

# Cloudflare / React Router / Tailwind CSS

Built from https://developers.cloudflare.com/workers/framework-guides/web-apps/react-router/

## Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

### Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

### Getting Started

#### Installation

Install the dependencies:

```bash
npm install
```

#### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

### Previewing the Production Build

Preview the production build locally:

```bash
npm run preview
```

### Building for Production

Create a production build:

```bash
npm run build
```

### Deployment

Deployment is done using the Wrangler CLI.

To build and deploy directly to production:

```sh
npm run deploy
```

To deploy a preview URL:

```sh
npx wrangler versions upload
```

You can then promote a version to production after verification or roll it out progressively.

```sh
npx wrangler versions deploy
```

### Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
