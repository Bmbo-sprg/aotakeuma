import { createRequestHandler, type AppLoadContext } from "react-router";
import { fetchLastCommitAt } from "./lastCommit";
import { api } from "./api/router";

declare module "react-router" {
  export interface AppLoadContext {
    cloudflare: {
      env: Env;
      ctx: ExecutionContext;
    };
    lastCommitAt: string | null;
  }
}

async function buildAppLoadContext(
  env: Env,
  ctx: ExecutionContext
): Promise<AppLoadContext> {
  return {
    cloudflare: { env, ctx },
    lastCommitAt: await fetchLastCommitAt(),
  };
}

const requestHandler = createRequestHandler(
  // eslint-disable-next-line import/no-unresolved
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE
);

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api/")) {
      return api.fetch(request, env, ctx);
    }

    // wrangler dev --remote では Origin と Host が食い違い React Router の CSRF チェックで弾かれるため修正
    if (import.meta.env.DEV) {
      const host = request.headers.get("host");
      const origin = request.headers.get("origin");
      if (host && origin && new URL(origin).host !== host) {
        const headers = new Headers(request.headers);
        headers.set("origin", `${new URL(origin).protocol}//${host}`);
        request = new Request(request, { headers });
      }
    }

    return requestHandler(request, await buildAppLoadContext(env, ctx));
  },
} satisfies ExportedHandler<Env>;
