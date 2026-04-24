import { createRequestHandler } from "react-router";
import { handleSignedDownload, handleValidateKey } from "./download/handlers";

declare module "react-router" {
  export interface AppLoadContext {
    cloudflare: {
      env: Env;
      ctx: ExecutionContext;
    };
  }
}

const requestHandler = createRequestHandler(
  // eslint-disable-next-line import/no-unresolved
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE
);

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/api/validate-key") {
      if (request.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405 }); // TODO: ちょっといい感じのエラーレスポンスを返す
      }
      return handleValidateKey(request, env);
    }

    if (url.pathname === "/api/download") {
      if (request.method !== "GET") {
        return new Response("Method Not Allowed", { status: 405 }); // TODO: ちょっといい感じのエラーレスポンスを返す
      }
      return handleSignedDownload(request, env);
    }

    const response = await requestHandler(request, {
      cloudflare: { env, ctx },
    });

    if (url.pathname.startsWith("/yohkoh")) {
      const blocked = new Response(response.body, response);
      blocked.headers.set("X-Robots-Tag", "noindex, nofollow");
      return blocked;
    }

    return response;
  },
} satisfies ExportedHandler<Env>;
