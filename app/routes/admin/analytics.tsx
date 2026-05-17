import type { Route } from "./+types/analytics";
import type { DownloadKeyRecord, KeyUsageLog } from "~/types";
import { api } from "../../../workers/api/router";
import { toLocaleString } from "../../utils/formats";

export async function loader({ request, context }: Route.LoaderArgs) {
  const res = await api.fetch(
    new Request(new URL("/api/admin/keys", request.url)),
    context.cloudflare.env
  );
  const entries = (await res.json()) as {
    key: string;
    record: DownloadKeyRecord;
  }[];
  return { entries };
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

function classifyUA(
  ua: string | null
): "bot" | "mobile" | "desktop" | "unknown" {
  if (!ua) return "unknown";
  if (BOT_PATTERNS.some((re) => re.test(ua))) return "bot";
  if (/Mobile|Android|iPhone|iPad/i.test(ua)) return "mobile";
  return "desktop";
}

const UA_LABELS: Record<string, { label: string; color: string }> = {
  bot: { label: "Bot / CLI", color: "text-red-400" },
  mobile: { label: "モバイル", color: "text-yellow-400" },
  desktop: { label: "デスクトップ", color: "text-green-400" },
  unknown: { label: "不明", color: "text-gray-500" },
};

// --- 時系列グラフ（日単位固定）---

function TimeSeriesChart({
  logs,
  productId,
}: {
  logs: KeyUsageLog[];
  productId: string;
}) {
  if (logs.length === 0)
    return <p className="text-gray-600 text-sm">ログなし</p>;

  const successLogs = logs.filter((l) => l.success);
  if (successLogs.length === 0)
    return <p className="text-gray-600 text-sm">成功ログなし</p>;

  const timestamps = successLogs.map((l) => new Date(l.timestamp).getTime());
  const DAY_MS = 86400_000;
  const minDay = Math.floor(Math.min(...timestamps) / DAY_MS) * DAY_MS;
  const maxDay = Math.floor(Math.max(...timestamps) / DAY_MS) * DAY_MS;
  const dayCount = Math.max(Math.round((maxDay - minDay) / DAY_MS) + 1, 7);

  const counts = new Array<number>(dayCount).fill(0);
  for (const ts of timestamps) {
    const idx = Math.floor((ts - minDay) / DAY_MS);
    if (idx >= 0 && idx < dayCount) counts[idx]++;
  }

  const maxCount = Math.max(...counts, 1);
  const W = 480;
  const H = 120;
  const PAD = { top: 10, right: 12, bottom: 28, left: 28 };
  const chartW = W - PAD.left - PAD.right;
  const chartH = H - PAD.top - PAD.bottom;

  const xOf = (i: number) =>
    PAD.left + (dayCount > 1 ? (i / (dayCount - 1)) * chartW : chartW / 2);
  const yOf = (v: number) => PAD.top + chartH - (v / maxCount) * chartH;

  const points = counts.map((v, i) => `${xOf(i)},${yOf(v)}`).join(" ");

  const labelStep = Math.ceil(dayCount / 5);
  const xLabels: { i: number; label: string }[] = [];
  for (let i = 0; i < dayCount; i += labelStep) {
    const d = new Date(minDay + i * DAY_MS);
    xLabels.push({ i, label: `${d.getMonth() + 1}/${d.getDate()}` });
  }

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full max-w-lg"
      aria-label={`${productId} アクセス時系列`}
    >
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
      <polyline
        points={points}
        fill="none"
        stroke="#60a5fa"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {counts.map((v, i) =>
        v > 0 ? (
          <circle key={i} cx={xOf(i)} cy={yOf(v)} r="3" fill="#3b82f6" />
        ) : null
      )}
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
  );
}

// --- ページ本体 ---

export default function Analytics({ loaderData }: Route.ComponentProps) {
  const { entries } = loaderData;

  // product ごとにログを集約
  const byProduct = new Map<
    string,
    { logs: KeyUsageLog[]; keyCount: number }
  >();
  for (const { record } of entries) {
    const p = byProduct.get(record.productId) ?? { logs: [], keyCount: 0 };
    p.logs.push(...record.usageLogs);
    p.keyCount++;
    byProduct.set(record.productId, p);
  }

  if (byProduct.size === 0) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-blue-400 mb-4">
          アナリティクス
        </h1>
        <p className="text-gray-500 text-sm">データなし</p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold text-blue-400">アナリティクス</h1>

      {[...byProduct.entries()].map(([productId, { logs, keyCount }]) => {
        const successLogs = logs.filter((l) => l.success);
        const failedLogs = logs.filter((l) => !l.success);

        // UA 分類
        const uaCounts: Record<string, number> = {
          bot: 0,
          mobile: 0,
          desktop: 0,
          unknown: 0,
        };
        for (const l of successLogs) uaCounts[classifyUA(l.userAgent)]++;

        // 最新失敗ログ（最大5件）
        const recentFailed = [...failedLogs]
          .sort(
            (a, b) =>
              new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
          )
          .slice(0, 5);

        return (
          <section
            key={productId}
            className="border border-gray-800 rounded-lg p-5 space-y-6"
          >
            <div className="flex items-baseline gap-3">
              <h2 className="text-xl font-bold text-white">{productId}</h2>
              <span className="text-gray-500 text-sm">
                キー {keyCount} 枚 / 成功 {successLogs.length} 回 / 失敗{" "}
                {failedLogs.length} 回
              </span>
            </div>

            {/* 時系列 */}
            <div>
              <p className="text-gray-500 text-xs mb-2">
                ダウンロード数（日単位）
              </p>
              <TimeSeriesChart logs={logs} productId={productId} />
            </div>

            {/* UA 分類 */}
            <div>
              <p className="text-gray-500 text-xs mb-2">UserAgent 分類</p>
              <div className="flex gap-4 flex-wrap">
                {Object.entries(uaCounts)
                  .filter(([, count]) => count > 0)
                  .map(([type, count]) => (
                    <div key={type} className="text-sm">
                      <span className={UA_LABELS[type].color}>
                        {UA_LABELS[type].label}
                      </span>
                      <span className="text-gray-400 ml-1">{count}</span>
                    </div>
                  ))}
                {successLogs.length === 0 && (
                  <span className="text-gray-600 text-sm">成功ログなし</span>
                )}
              </div>
            </div>

            {/* 最新失敗ログ */}
            {recentFailed.length > 0 && (
              <div>
                <p className="text-gray-500 text-xs mb-2">
                  最新失敗ログ（最大5件）
                </p>
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="text-gray-500 text-left">
                      <th className="py-1 px-2 bg-gray-900">日時</th>
                      <th className="py-1 px-2 bg-gray-900">理由</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentFailed.map((log, i) => (
                      <tr key={i} className="border-b border-gray-800">
                        <td className="py-1 px-2 text-gray-300">
                          {toLocaleString(new Date(log.timestamp))}
                        </td>
                        <td className="py-1 px-2 text-red-400">
                          {log.reason ?? "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
