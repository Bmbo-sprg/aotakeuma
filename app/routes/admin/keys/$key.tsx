import { Form, useNavigation } from "react-router";
import type { Route } from "./+types/$key";
import type { DownloadKeyRecord } from "~/types";
import { api } from "../../../../workers/api/router";

export async function loader({ request, params, context }: Route.LoaderArgs) {
  const res = await api.fetch(
    new Request(new URL(`/api/admin/keys/${params.key}`, request.url)),
    context.cloudflare.env
  );
  if (!res.ok) throw new Response("Not Found", { status: 404 });
  const { key, record } = (await res.json()) as {
    key: string;
    record: DownloadKeyRecord;
  };
  return { key, record };
}

export async function action({ request, params, context }: Route.ActionArgs) {
  const fd = await request.formData();
  const patch: Partial<
    Pick<DownloadKeyRecord, "isActive" | "maxUseCount" | "expiresAt">
  > = {
    isActive: fd.get("isActive") === "true",
    maxUseCount: Number(fd.get("maxUseCount")),
    expiresAt: String(fd.get("expiresAt")),
  };
  await api.fetch(
    new Request(new URL(`/api/admin/keys/${params.key}`, request.url), {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patch),
    }),
    context.cloudflare.env
  );
  return null;
}

function fmt(key: string) {
  return key.length === 8 ? `${key.slice(0, 4)}-${key.slice(4)}` : key;
}

export default function KeyDetail({ loaderData }: Route.ComponentProps) {
  const { key, record: r } = loaderData;
  const nav = useNavigation();
  const submitting = nav.state === "submitting";

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold text-blue-400 mb-1">{fmt(key)}</h1>
      <p className="text-gray-500 text-sm mb-6">Product: {r.productId}</p>

      <Form method="post" className="flex flex-col gap-4 mb-8">
        <label className="flex items-center gap-3">
          <span className="text-gray-400 text-sm w-32">有効</span>
          <select
            name="isActive"
            defaultValue={String(r.isActive)}
            className="bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white"
          >
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </label>
        <label className="flex items-center gap-3">
          <span className="text-gray-400 text-sm w-32">最大使用回数</span>
          <input
            type="number"
            name="maxUseCount"
            defaultValue={r.maxUseCount}
            min={1}
            className="bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white"
          />
        </label>
        <label className="flex items-center gap-3">
          <span className="text-gray-400 text-sm w-32">有効期限</span>
          <input
            type="date"
            name="expiresAt"
            defaultValue={r.expiresAt.slice(0, 10)}
            className="bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white"
          />
        </label>
        <button
          type="submit"
          disabled={submitting}
          className="self-start bg-blue-700 hover:bg-blue-600 disabled:opacity-50 text-white px-4 py-2 rounded"
        >
          {submitting ? "保存中..." : "保存"}
        </button>
      </Form>

      <h2 className="text-lg font-bold text-gray-300 mb-3">
        使用ログ ({r.usageLogs.length} / {r.maxUseCount})
      </h2>
      {r.usageLogs.length === 0 ? (
        <p className="text-gray-600 text-sm">まだ使用されていません</p>
      ) : (
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-gray-500 text-left">
              <th className="py-2 px-3 bg-gray-900">#</th>
              <th className="py-2 px-3 bg-gray-900">日時</th>
              <th className="py-2 px-3 bg-gray-900">IP</th>
            </tr>
          </thead>
          <tbody>
            {r.usageLogs.map((log, i) => (
              <tr key={i} className="border-b border-gray-800">
                <td className="py-2 px-3 text-gray-500">{i + 1}</td>
                <td className="py-2 px-3">
                  {new Date(log.timestamp).toLocaleString("ja-JP")}
                </td>
                <td className="py-2 px-3 text-gray-400">
                  {log.ipAddress ?? "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
