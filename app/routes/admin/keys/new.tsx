import { useState } from "react";
import { Form, redirect, useNavigation } from "react-router";
import type { Route } from "./+types/new";
import { api } from "../../../../workers/api/router";
import { DatePickerInput } from "../../../components/DatePickerInput/DatePickerInput";
import { normalizeDownloadKey } from "../../../../workers/api/models/downloadKey";

export function loader() {
  const defaultExpiry = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);
  return { defaultExpiry };
}

export async function action({ request, context }: Route.ActionArgs) {
  const fd = await request.formData();
  const mode = String(fd.get("mode") ?? "random");
  const productId = String(fd.get("productId") ?? "");
  const expiresAt = String(fd.get("expiresAt") ?? "");
  const maxUseCount = Number(fd.get("maxUseCount") ?? 1);

  let body: object;
  if (mode === "manual") {
    const raw = String(fd.get("keys") ?? "");
    const keys = raw
      .split("\n")
      .map((l) => normalizeDownloadKey(l.trim()))
      .filter((k) => k.length > 0);
    body = { keys, productId, expiresAt, maxUseCount, count: keys.length };
  } else {
    const count = Number(fd.get("count") ?? 1);
    body = { count, productId, expiresAt, maxUseCount };
  }

  await api.fetch(
    new Request(new URL("/api/admin/keys", request.url), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }),
    context.cloudflare.env
  );

  return redirect("/admin/keys");
}

function parseManualKeys(raw: string): {
  keys: string[];
  errors: string[];
} {
  const lines = raw.split("\n").filter((l) => l.trim() !== "");
  const keys: string[] = [];
  const errors: string[] = [];
  const seen = new Set<string>();

  for (const line of lines) {
    const normalized = normalizeDownloadKey(line.trim());
    if (normalized.length !== 8) {
      errors.push(
        `"${line.trim()}" は正規化後 ${normalized.length} 文字になるため無効です（8文字必要）`
      );
    } else if (seen.has(normalized)) {
      errors.push(`"${line.trim()}" は重複しています`);
    } else {
      seen.add(normalized);
      keys.push(normalized);
    }
  }

  return { keys, errors };
}

export default function KeysNew({ loaderData }: Route.ComponentProps) {
  const { defaultExpiry } = loaderData;
  const [expiresAt, setExpiresAt] = useState(defaultExpiry);
  const [mode, setMode] = useState<"random" | "manual">("random");
  const [manualRaw, setManualRaw] = useState("");
  const nav = useNavigation();
  const submitting = nav.state === "submitting";

  const { keys: parsedKeys, errors: parseErrors } = parseManualKeys(manualRaw);
  const manualValid =
    manualRaw.trim() !== "" &&
    parseErrors.length === 0 &&
    parsedKeys.length > 0;

  return (
    <div className="max-w-lg">
      <h1 className="text-2xl font-bold text-blue-400 mb-6">キー発行</h1>
      <Form method="post" className="flex flex-col gap-4">
        <input type="hidden" name="mode" value={mode} />

        {/* モード切替 */}
        <div className="flex rounded overflow-hidden border border-gray-700 w-fit">
          <button
            type="button"
            onClick={() => setMode("random")}
            className={`px-4 py-2 text-sm ${mode === "random" ? "bg-blue-700 text-white" : "bg-gray-900 text-gray-400 hover:text-white"}`}
          >
            ランダム生成
          </button>
          <button
            type="button"
            onClick={() => setMode("manual")}
            className={`px-4 py-2 text-sm border-l border-gray-700 ${mode === "manual" ? "bg-blue-700 text-white" : "bg-gray-900 text-gray-400 hover:text-white"}`}
          >
            手動入力
          </button>
        </div>

        {/* ランダム生成モード */}
        {mode === "random" && (
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
        )}

        {/* 手動入力モード */}
        {mode === "manual" && (
          <div className="flex flex-col gap-1">
            <span className="text-gray-400 text-sm">既存キー（1行1キー）</span>
            <textarea
              name="keys"
              rows={6}
              value={manualRaw}
              onChange={(e) => setManualRaw(e.target.value)}
              placeholder={"ABCD1234\nEFGH5678"}
              className="bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white font-mono text-sm resize-y"
            />
            {manualRaw.trim() !== "" && (
              <div className="text-sm mt-1 flex flex-col gap-1">
                {parseErrors.map((err, i) => (
                  <p key={i} className="text-red-400">
                    {err}
                  </p>
                ))}
                {parseErrors.length === 0 && parsedKeys.length > 0 && (
                  <p className="text-green-400">
                    {parsedKeys.length} 件のキーが有効です
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        <label className="flex flex-col gap-1">
          <span className="text-gray-400 text-sm">Product ID</span>
          <input
            type="text"
            name="productId"
            required
            className="bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white"
          />
        </label>
        <div className="flex flex-col gap-1">
          <span className="text-gray-400 text-sm">有効期限</span>
          <input type="hidden" name="expiresAt" value={expiresAt} />
          <DatePickerInput value={expiresAt} onChange={setExpiresAt} />
        </div>
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
          disabled={submitting || (mode === "manual" && !manualValid)}
          className="bg-blue-700 hover:bg-blue-600 disabled:opacity-50 text-white px-4 py-2 rounded mt-2"
        >
          {submitting ? "発行中..." : "発行する"}
        </button>
      </Form>
    </div>
  );
}
