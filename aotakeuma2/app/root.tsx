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
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <nav className="fixed left-6 bottom-6 z-50 flex flex-col flex-wrap gap-2">
          <Link
            to="/"
            className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 text-sm font-semibold text-slate-700 shadow-sm"
          >
            TOP
          </Link>
          <Link
            to="/works"
            className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 text-sm font-semibold text-slate-700 shadow-sm"
          >
            作品
          </Link>
          <Link
            to="/events"
            className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 text-sm font-semibold text-slate-700 shadow-sm"
          >
            イベント
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 text-sm font-semibold text-slate-700 shadow-sm"
          >
            連絡先
          </Link>
        </nav>
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
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
