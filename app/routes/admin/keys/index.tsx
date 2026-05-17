import { Link } from "react-router";
import type { Route } from "./+types/index";
import type { DownloadKeyRecord } from "~/types";
import { api } from "../../../../workers/api/router";

export async function loader({ request, context }: Route.LoaderArgs) {
  const res = await api.fetch(
    new Request(new URL("/api/admin/keys", request.url)),
    context.cloudflare.env
  );
  const entries = (await res.json()) as { key: string; record: DownloadKeyRecord }[];
  return { entries };
}

function fmt(key: string) {
  return key.length === 8 ? `${key.slice(0, 4)}-${key.slice(4)}` : key;
}

export default function KeysIndex({ loaderData }: Route.ComponentProps) {
  const { entries } = loaderData;
  const now = Date.now();

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-blue-400">キー一覧</h1>
        <Link
          to="/admin/keys/new"
          className="bg-blue-700 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded"
        >
          + キー発行
        </Link>
      </div>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="text-gray-500 text-left">
            <th className="py-2 px-3 bg-gray-900">Key</th>
            <th className="py-2 px-3 bg-gray-900">Product</th>
            <th className="py-2 px-3 bg-gray-900">Status</th>
            <th className="py-2 px-3 bg-gray-900">Uses / Max</th>
            <th className="py-2 px-3 bg-gray-900">Expires</th>
            <th className="py-2 px-3 bg-gray-900">Logs</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(({ key, record: r }) => {
            const isExpired = now > new Date(r.expiresAt).getTime();
            const isExhausted = r.useCount >= r.maxUseCount;
            const statusColor = !r.isActive
              ? "text-gray-500"
              : isExpired || isExhausted
                ? "text-red-400"
                : r.useCount > 0
                  ? "text-yellow-400"
                  : "text-green-400";
            const statusText = !r.isActive
              ? "Inactive"
              : isExpired
                ? "期限切れ"
                : isExhausted
                  ? "上限到達"
                  : r.useCount > 0
                    ? "使用済"
                    : "未使用";

            return (
              <tr key={key} className="border-b border-gray-800 hover:bg-gray-900">
                <td className="py-2 px-3">
                  <Link to={`/admin/keys/${key}`} className="text-blue-400 hover:underline">
                    {fmt(key)}
                  </Link>
                </td>
                <td className="py-2 px-3">{r.productId}</td>
                <td className={`py-2 px-3 ${statusColor}`}>{statusText}</td>
                <td className="py-2 px-3">{r.useCount} / {r.maxUseCount}</td>
                <td className="py-2 px-3">{new Date(r.expiresAt).toLocaleDateString("ja-JP")}</td>
                <td className="py-2 px-3">{r.usageLogs.length}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
