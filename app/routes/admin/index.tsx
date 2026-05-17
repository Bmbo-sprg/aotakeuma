import { useLoaderData } from "react-router";
import type { Route } from "./+types/index";

export async function loader() {
  const res = await fetch("/api/admin/keys");
  const entries = (await res.json()) as {
    key: string;
    record: {
      isActive: boolean;
      expiresAt: string;
      useCount: number;
      maxUseCount: number;
      usageLogs: unknown[];
    };
  }[];

  const now = Date.now();
  const total = entries.length;
  const unused = entries.filter((e) => e.record.useCount === 0).length;
  const used = entries.filter(
    (e) => e.record.useCount > 0 && e.record.useCount < e.record.maxUseCount
  ).length;
  const exhausted = entries.filter(
    (e) =>
      e.record.useCount >= e.record.maxUseCount ||
      now > new Date(e.record.expiresAt).getTime()
  ).length;

  return { total, unused, used, exhausted };
}

export default function AdminIndex({ loaderData }: Route.ComponentProps) {
  const { total, unused, used, exhausted } = loaderData;
  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-400 mb-6">ダッシュボード</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "total", value: total, color: "text-blue-300" },
          { label: "未使用", value: unused, color: "text-green-400" },
          { label: "使用済", value: used, color: "text-yellow-400" },
          { label: "上限/期限切れ", value: exhausted, color: "text-red-400" },
        ].map(({ label, value, color }) => (
          <div key={label} className="bg-gray-900 rounded-lg p-4">
            <div className={`text-3xl font-bold ${color}`}>{value}</div>
            <div className="text-gray-500 text-sm mt-1">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
