/**
 * wrangler dev --remote では Origin と request.url が食い違い React Router の CSRF チェックで
 * 弾かれるため、開発環境のみ Origin ヘッダーを request.url の origin に合わせて書き換える
 */
export function fixDevOrigin(request: Request): Request {
  if (!import.meta.env.DEV) return request;

  const origin = request.headers.get("origin");
  const expected = new URL(request.url).origin;
  if (!origin || origin === expected) return request;

  const headers = new Headers(request.headers);
  headers.set("origin", expected);
  return new Request(request, { headers });
}
