import { createRequestHandler, type AppLoadContext } from "react-router";
import { fetchLastCommitAt } from "./github";
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

    return requestHandler(request, await buildAppLoadContext(env, ctx));
  },
} satisfies ExportedHandler<Env>;
