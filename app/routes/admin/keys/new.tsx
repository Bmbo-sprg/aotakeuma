import { Form, redirect, useNavigation } from "react-router";
import type { Route } from "./+types/new";

export async function action({ request }: Route.ActionArgs) {
  const fd = await request.formData();
  const count = Number(fd.get("count") ?? 1);
  const productId = String(fd.get("productId") ?? "");
  const expiresAt = String(fd.get("expiresAt") ?? "");
  const maxUseCount = Number(fd.get("maxUseCount") ?? 1);

  await fetch("/api/admin/keys", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ count, productId, expiresAt, maxUseCount }),
  });

  return redirect("/admin/keys");
}

export default function KeysNew({ actionData }: Route.ComponentProps) {
  const nav = useNavigation();
  const submitting = nav.state === "submitting";

  const defaultExpiry = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  return (
    <div className="max-w-lg">
      <h1 className="text-2xl font-bold text-blue-400 mb-6">キー発行</h1>
      <Form method="post" className="flex flex-col gap-4">
        <label className="flex flex-col gap-1">
          <span className="text-gray-400 text-sm">発行枚数</span>
          <input
            type="number"
            name="count"
            defaultValue={1}
            min={1}
            max={100}
            className="bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-gray-400 text-sm">Product ID</span>
          <input
            type="text"
            name="productId"
            required
            className="bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-gray-400 text-sm">有効期限</span>
          <input
            type="date"
            name="expiresAt"
            defaultValue={defaultExpiry}
            required
            className="bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-gray-400 text-sm">最大使用回数</span>
          <input
            type="number"
            name="maxUseCount"
            defaultValue={1}
            min={1}
            className="bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white"
          />
        </label>
        <button
          type="submit"
          disabled={submitting}
          className="bg-blue-700 hover:bg-blue-600 disabled:opacity-50 text-white px-4 py-2 rounded mt-2"
        >
          {submitting ? "発行中..." : "発行する"}
        </button>
      </Form>
    </div>
  );
}
