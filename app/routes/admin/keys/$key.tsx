import { useState } from "react";
import { Form, useNavigation } from "react-router";
import type { Route } from "./+types/$key";
import type { DownloadKeyRecord, KeyUsageLog } from "~/types";
import { api } from "../../../../workers/api/router";
import { DatePickerInput } from "../../../components/DatePickerInput/DatePickerInput";
import { toLocaleString } from "../../../utils/formats";

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

// --- UserAgent 分類 ---

const BOT_PATTERNS = [
  /bot/i,
  /crawl/i,
  /spider/i,
  /slurp/i,
  /curl/i,
  /wget/i,
  /python/i,
  /java\//i,
  /go-http/i,
  /axios/i,
  /node-fetch/i,
  /okhttp/i,
  /libwww/i,
  /scrapy/i,
];

function classifyUA(ua: string | null): { label: string; color: string } {
  if (!ua) return { label: "不明（空）", color: "text-gray-500" };
  if (BOT_PATTERNS.some((re) => re.test(ua)))
    return { label: "Bot / CLI", color: "text-red-400" };
  if (/Mobile|Android|iPhone|iPad/i.test(ua))
    return { label: "モバイル", color: "text-yellow-400" };
  return { label: "デスクトップ", color: "text-green-400" };
}

// --- 時系列グラフ ---

function TimeSeriesChart({ logs }: { logs: KeyUsageLog[] }) {
  if (logs.length === 0) return null;

  const timestamps = logs.map((l) => new Date(l.timestamp).getTime());
  const minTs = Math.min(...timestamps);
  const maxTs = Math.max(...timestamps);
  const rangeMs = maxTs - minTs;

  // 3日以内なら時間単位、それ以上なら日単位
  const bucketMs = rangeMs <= 3 * 86400_000 ? 3600_000 : 86400_000;
  const bucketLabel = bucketMs === 3600_000 ? "時間" : "日";

  const bucketCount = Math.max(
    Math.ceil(rangeMs / bucketMs) + 1,
    bucketMs === 3600_000 ? 24 : 7
  );
  const startBucket = Math.floor(minTs / bucketMs) * bucketMs;

  const counts = new Array<number>(bucketCount).fill(0);
  for (const ts of timestamps) {
    const idx = Math.floor((ts - startBucket) / bucketMs);
    if (idx >= 0 && idx < bucketCount) counts[idx]++;
  }

  const maxCount = Math.max(...counts, 1);
  const W = 480;
  const H = 120;
  const PAD = { top: 10, right: 12, bottom: 28, left: 28 };
  const chartW = W - PAD.left - PAD.right;
  const chartH = H - PAD.top - PAD.bottom;

  const xOf = (i: number) => PAD.left + (i / (bucketCount - 1)) * chartW;
  const yOf = (v: number) => PAD.top + chartH - (v / maxCount) * chartH;

  const points = counts.map((v, i) => `${xOf(i)},${yOf(v)}`).join(" ");

  // x軸ラベル（最大5本）
  const labelStep = Math.ceil(bucketCount / 5);
  const xLabels: { i: number; label: string }[] = [];
  for (let i = 0; i < bucketCount; i += labelStep) {
    const d = new Date(startBucket + i * bucketMs);
    const label =
      bucketMs === 3600_000
        ? `${d.getHours()}時`
        : `${d.getMonth() + 1}/${d.getDate()}`;
    xLabels.push({ i, label });
  }

  return (
    <div>
      <p className="text-gray-500 text-xs mb-1">
        アクセス頻度（{bucketLabel}単位）
      </p>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-lg">
        {/* y軸グリッド */}
        {[0, 0.5, 1].map((frac) => {
          const y = PAD.top + chartH * (1 - frac);
          return (
            <g key={frac}>
              <line
                x1={PAD.left}
                y1={y}
                x2={W - PAD.right}
                y2={y}
                stroke="#374151"
                strokeWidth="1"
              />
              <text
                x={PAD.left - 4}
                y={y + 4}
                textAnchor="end"
                fontSize="9"
                fill="#6b7280"
              >
                {Math.round(maxCount * frac)}
              </text>
            </g>
          );
        })}
        {/* 折れ線 */}
        <polyline
          points={points}
          fill="none"
          stroke="#60a5fa"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* データ点 */}
        {counts.map((v, i) =>
          v > 0 ? (
            <circle key={i} cx={xOf(i)} cy={yOf(v)} r="3" fill="#3b82f6" />
          ) : null
        )}
        {/* x軸ラベル */}
        {xLabels.map(({ i, label }) => (
          <text
            key={i}
            x={xOf(i)}
            y={H - 4}
            textAnchor="middle"
            fontSize="9"
            fill="#6b7280"
          >
            {label}
          </text>
        ))}
      </svg>
    </div>
  );
}

// --- IP insights ---

function IpInsights({ logs }: { logs: KeyUsageLog[] }) {
  const ipCounts = new Map<string, number>();
  for (const log of logs) {
    const ip = log.ipAddress ?? "(不明)";
    ipCounts.set(ip, (ipCounts.get(ip) ?? 0) + 1);
  }
  const sorted = [...ipCounts.entries()].sort((a, b) => b[1] - a[1]);
  const uniqueCount = ipCounts.size;
  const sharedIps = sorted.filter(([, c]) => c > 1);

  return (
    <div className="space-y-2">
      <p className="text-gray-400 text-sm">
        ユニーク IP: <span className="text-white font-mono">{uniqueCount}</span>
        {sharedIps.length > 0 && (
          <span className="ml-3 text-yellow-400 text-xs">
            ⚠ {sharedIps.length} 件の IP が複数回アクセス（キー共有の可能性）
          </span>
        )}
      </p>
      {sorted.length > 0 && (
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="text-gray-500 text-left">
              <th className="py-1 px-2 bg-gray-900">IP</th>
              <th className="py-1 px-2 bg-gray-900">回数</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map(([ip, count]) => (
              <tr key={ip} className="border-b border-gray-800">
                <td className="py-1 px-2 font-mono text-gray-300">{ip}</td>
                <td
                  className={`py-1 px-2 ${count > 1 ? "text-yellow-400" : "text-gray-400"}`}
                >
                  {count}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

// --- UserAgent 分類 ---

function UaBreakdown({ logs }: { logs: KeyUsageLog[] }) {
  const groups = new Map<
    string,
    { color: string; count: number; uas: Set<string> }
  >();
  for (const log of logs) {
    const { label, color } = classifyUA(log.userAgent);
    const g = groups.get(label) ?? { color, count: 0, uas: new Set() };
    g.count++;
    if (log.userAgent) g.uas.add(log.userAgent);
    groups.set(label, g);
  }

  return (
    <div className="space-y-2">
      {[...groups.entries()].map(([label, { color, count, uas }]) => (
        <details key={label} className="text-sm">
          <summary className="cursor-pointer select-none">
            <span className={`${color} font-medium`}>{label}</span>
            <span className="text-gray-500 ml-2">{count} 件</span>
          </summary>
          <ul className="mt-1 ml-4 space-y-0.5">
            {[...uas].map((ua) => (
              <li
                key={ua}
                className="text-gray-500 text-xs font-mono truncate max-w-md"
              >
                {ua}
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}

// --- 失敗ログ ---

function FailedLogs({ logs }: { logs: KeyUsageLog[] }) {
  const failed = [...logs]
    .filter((l) => !l.success)
    .sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );

  if (failed.length === 0)
    return <p className="text-gray-600 text-sm">失敗ログなし</p>;

  return (
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="text-gray-500 text-left">
          <th className="py-2 px-3 bg-gray-900">日時</th>
          <th className="py-2 px-3 bg-gray-900">IP</th>
          <th className="py-2 px-3 bg-gray-900">理由</th>
        </tr>
      </thead>
      <tbody>
        {failed.map((log, i) => (
          <tr key={i} className="border-b border-gray-800">
            <td className="py-2 px-3 text-gray-300">
              {toLocaleString(new Date(log.timestamp))}
            </td>
            <td className="py-2 px-3 font-mono text-gray-400">
              {log.ipAddress ?? "-"}
            </td>
            <td className="py-2 px-3 text-red-400">{log.reason ?? "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// --- ページ本体 ---

export default function KeyDetail({ loaderData }: Route.ComponentProps) {
  const { key, record: r } = loaderData;
  const [expiresAt, setExpiresAt] = useState(r.expiresAt.slice(0, 10));
  const nav = useNavigation();
  const submitting = nav.state === "submitting";

  return (
    <div className="max-w-2xl space-y-10">
      {/* キー情報・編集フォーム */}
      <section>
        <h1 className="text-2xl font-bold text-blue-400 mb-1">{fmt(key)}</h1>
        <p className="text-gray-500 text-sm mb-6">Product: {r.productId}</p>

        <Form method="post" className="flex flex-col gap-4">
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
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-sm w-32">有効期限</span>
            <div className="flex-1">
              <input type="hidden" name="expiresAt" value={expiresAt} />
              <DatePickerInput value={expiresAt} onChange={setExpiresAt} />
            </div>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="self-start bg-blue-700 hover:bg-blue-600 disabled:opacity-50 text-white px-4 py-2 rounded"
          >
            {submitting ? "保存中..." : "保存"}
          </button>
        </Form>
      </section>

      {/* 使用ログ可視化 */}
      {r.usageLogs.length > 0 && (
        <>
          <section>
            <h2 className="text-lg font-bold text-gray-300 mb-3">
              アクセス時系列
            </h2>
            <TimeSeriesChart logs={r.usageLogs} />
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-300 mb-3">IP 分析</h2>
            <IpInsights logs={r.usageLogs} />
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-300 mb-3">
              UserAgent 分類
            </h2>
            <UaBreakdown logs={r.usageLogs} />
          </section>
        </>
      )}

      <section>
        <h2 className="text-lg font-bold text-gray-300 mb-3">
          失敗ログ
          {r.usageLogs.filter((l) => !l.success).length > 0 && (
            <span className="ml-2 text-red-400 text-sm">
              ({r.usageLogs.filter((l) => !l.success).length})
            </span>
          )}
        </h2>
        <FailedLogs logs={r.usageLogs} />
      </section>

      {/* 全ログ一覧 */}
      <section>
        <h2 className="text-lg font-bold text-gray-300 mb-3">
          全ログ ({r.usageLogs.length} / {r.maxUseCount})
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
                <th className="py-2 px-3 bg-gray-900">結果</th>
              </tr>
            </thead>
            <tbody>
              {r.usageLogs.map((log, i) => (
                <tr key={i} className="border-b border-gray-800">
                  <td className="py-2 px-3 text-gray-500">{i + 1}</td>
                  <td className="py-2 px-3">
                    {toLocaleString(new Date(log.timestamp))}
                  </td>
                  <td className="py-2 px-3 font-mono text-gray-400">
                    {log.ipAddress ?? "-"}
                  </td>
                  <td className="py-2 px-3">
                    {log.success ? (
                      <span className="text-green-400">成功</span>
                    ) : (
                      <span className="text-red-400">失敗</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}
