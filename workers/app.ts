import { createRequestHandler, type AppLoadContext } from "react-router";
import { fetchLastCommitAt } from "./lastCommit";
import { api } from "./api/router";
import { fixDevOrigin } from "./middleware/fixDevOrigin";

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

    // API ルートへのリクエストは Hono で処理
    if (url.pathname.startsWith("/api/")) {
      return api.fetch(request, env, ctx);
    }

    // API ルート以外は React Router で処理
    return requestHandler(
      fixDevOrigin(request),
      await buildAppLoadContext(env, ctx)
    );
  },
} satisfies ExportedHandler<Env>;
