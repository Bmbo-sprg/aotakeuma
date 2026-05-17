import { Form, useNavigation, useActionData } from "react-router";
import type { Route } from "./+types/upload";

export async function action({ request }: Route.ActionArgs) {
  const fd = await request.formData();
  const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
  const result = await res.json<{ key?: string; size?: number; error?: string }>();
  return result;
}

export default function Upload({ actionData }: Route.ComponentProps) {
  const nav = useNavigation();
  const submitting = nav.state === "submitting";

  return (
    <div className="max-w-lg">
      <h1 className="text-2xl font-bold text-blue-400 mb-6">R2 アップロード</h1>
      <Form method="post" encType="multipart/form-data" className="flex flex-col gap-4">
        <label className="flex flex-col gap-1">
          <span className="text-gray-400 text-sm">ファイル</span>
          <input
            type="file"
            name="file"
            required
            className="text-white file:bg-gray-700 file:border-0 file:text-white file:px-3 file:py-1 file:rounded file:mr-3"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-gray-400 text-sm">R2 キー（省略時はファイル名）</span>
          <input
            type="text"
            name="key"
            placeholder="例: yohkoh.zip"
            className="bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white placeholder-gray-600"
          />
        </label>
        <button
          type="submit"
          disabled={submitting}
          className="bg-blue-700 hover:bg-blue-600 disabled:opacity-50 text-white px-4 py-2 rounded mt-2"
        >
          {submitting ? "アップロード中..." : "アップロード"}
        </button>
      </Form>

      {actionData && (
        <div className={`mt-6 p-4 rounded text-sm ${actionData.error ? "bg-red-900 text-red-300" : "bg-green-900 text-green-300"}`}>
          {actionData.error
            ? `エラー: ${actionData.error}`
            : `完了: ${actionData.key} (${((actionData.size ?? 0) / 1024).toFixed(1)} KB)`}
        </div>
      )}
    </div>
  );
}
