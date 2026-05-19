/**
 * wrangler dev --remote では Origin と Host が食い違い React Router の CSRF チェックで
 * 弾かれるため、開発環境のみ Origin ヘッダーを Host に合わせて書き換える
 */
export function fixDevOrigin(request: Request): Request {
  if (!import.meta.env.DEV) return request;

  const host = request.headers.get("host");
  const origin = request.headers.get("origin");
  if (!host || !origin || new URL(origin).host === host) return request;

  const headers = new Headers(request.headers);
  headers.set("origin", `${new URL(origin).protocol}//${host}`);
  return new Request(request, { headers });
}
