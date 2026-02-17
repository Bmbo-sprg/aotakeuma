import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "icon",
    href: "/favicon.ico",
    type: "image/x-icon",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta property="og:site_name" content="竹馬あお" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@aotakeuma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "エラー";
  let details = "予期しないエラーが発生しました。";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        message = "404";
        details = "お探しのページは見つかりませんでした。";
        break;
      case 500:
        message = "500";
        details =
          "サーバーで問題が発生しました。しばらくしてから再度お試しください。";
        break;
      case 503:
        message = "503";
        details =
          "現在メンテナンス中です。しばらくしてから再度お試しください。";
        break;
      default:
        message = "エラー";
        details = error.statusText || details;
        break;
    }
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto space-y-3">
      <h1 className="text-2xl font-semibold text-slate-900">{message}</h1>
      <p className="text-slate-700">{details}</p>
      <Link
        to="/"
        className="inline-flex items-center rounded-full border border-slate-300 bg-white/80 px-3 py-1 text-sm font-semibold text-slate-700 shadow-sm"
      >
        TOP に戻る
      </Link>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code className="tracking-normal">{stack}</code>
        </pre>
      )}
    </main>
  );
}
