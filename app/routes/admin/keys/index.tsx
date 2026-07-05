import { useMemo, useState } from "react";
import { Link } from "react-router";
import type { Route } from "./+types/index";
import type { DownloadKeyRecord } from "~/types";
import { api } from "../../../../workers/api/router";
import { toLocaleDateString } from "../../../utils/formats";

export async function loader({ request, context }: Route.LoaderArgs) {
  const res = await api.fetch(
    new Request(new URL("/api/admin/keys", request.url)),
    context.cloudflare.env
  );
  const entries = (await res.json()) as {
    key: string;
    record: DownloadKeyRecord;
  }[];
  return { entries, now: Date.now() };
}

function fmt(key: string) {
  return key.length === 8 ? `${key.slice(0, 4)}-${key.slice(4)}` : key;
}

type SortColumn = "key" | "product" | "status" | "uses" | "expires" | "logs";
type SortDirection = "asc" | "desc";
type KeyEntry = { key: string; record: DownloadKeyRecord };
type KeysIndexProps = { loaderData: { entries: KeyEntry[]; now: number } };

function getStatusMeta(record: DownloadKeyRecord, now: number) {
  const isExpired = now > new Date(record.expiresAt).getTime();
  const isExhausted = record.useCount >= record.maxUseCount;

  if (!record.isActive) {
    return { color: "text-gray-500", text: "Inactive", rank: 0 };
  }
  if (isExpired) {
    return { color: "text-red-400", text: "期限切れ", rank: 1 };
  }
  if (isExhausted) {
    return { color: "text-red-400", text: "上限到達", rank: 2 };
  }
  if (record.useCount > 0) {
    return { color: "text-yellow-400", text: "使用済", rank: 3 };
  }

  return { color: "text-green-400", text: "未使用", rank: 4 };
}

export default function KeysIndex({ loaderData }: KeysIndexProps) {
  const { entries, now } = loaderData;
  const [sort, setSort] = useState<{
    column: SortColumn;
    direction: SortDirection;
  } | null>(null);

  const sortedEntries: typeof entries = useMemo(() => {
    if (!sort) {
      return entries;
    }

    const direction = sort.direction === "asc" ? 1 : -1;
    return [...entries].sort((a, b) => {
      let result = 0;

      switch (sort.column) {
        case "key":
          result = a.key.localeCompare(b.key);
          break;
        case "product":
          result = a.record.productId.localeCompare(b.record.productId);
          break;
        case "status": {
          const aStatus = getStatusMeta(a.record, now);
          const bStatus = getStatusMeta(b.record, now);
          result = aStatus.rank - bStatus.rank;
          break;
        }
        case "uses":
          result = a.record.useCount - b.record.useCount;
          if (result === 0) {
            result = a.record.maxUseCount - b.record.maxUseCount;
          }
          break;
        case "expires":
          result =
            new Date(a.record.expiresAt).getTime() -
            new Date(b.record.expiresAt).getTime();
          break;
        case "logs":
          result = a.record.usageLogs.length - b.record.usageLogs.length;
          break;
      }

      return result * direction;
    });
  }, [entries, now, sort]);

  const onSort = (column: SortColumn) => {
    setSort((current) => {
      if (!current || current.column !== column) {
        return { column, direction: "asc" };
      }

      return {
        column,
        direction: current.direction === "asc" ? "desc" : "asc",
      };
    });
  };

  const sortMark = (column: SortColumn) => {
    if (!sort || sort.column !== column) {
      return "↕";
    }
    return sort.direction === "asc" ? "▲" : "▼";
  };

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
            <th className="py-2 px-3 bg-gray-900">
              <button
                type="button"
                className="inline-flex items-center gap-1 hover:text-white"
                onClick={() => onSort("key")}
              >
                <span>Key</span>
                <span aria-hidden>{sortMark("key")}</span>
              </button>
            </th>
            <th className="py-2 px-3 bg-gray-900">
              <button
                type="button"
                className="inline-flex items-center gap-1 hover:text-white"
                onClick={() => onSort("product")}
              >
                <span>Product</span>
                <span aria-hidden>{sortMark("product")}</span>
              </button>
            </th>
            <th className="py-2 px-3 bg-gray-900">
              <button
                type="button"
                className="inline-flex items-center gap-1 hover:text-white"
                onClick={() => onSort("status")}
              >
                <span>Status</span>
                <span aria-hidden>{sortMark("status")}</span>
              </button>
            </th>
            <th className="py-2 px-3 bg-gray-900">
              <button
                type="button"
                className="inline-flex items-center gap-1 hover:text-white"
                onClick={() => onSort("uses")}
              >
                <span>Uses / Max</span>
                <span aria-hidden>{sortMark("uses")}</span>
              </button>
            </th>
            <th className="py-2 px-3 bg-gray-900">
              <button
                type="button"
                className="inline-flex items-center gap-1 hover:text-white"
                onClick={() => onSort("expires")}
              >
                <span>Expires</span>
                <span aria-hidden>{sortMark("expires")}</span>
              </button>
            </th>
            <th className="py-2 px-3 bg-gray-900">
              <button
                type="button"
                className="inline-flex items-center gap-1 hover:text-white"
                onClick={() => onSort("logs")}
              >
                <span>Logs</span>
                <span aria-hidden>{sortMark("logs")}</span>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedEntries.map(({ key, record: r }: KeyEntry) => {
            const status = getStatusMeta(r, now);

            return (
              <tr
                key={key}
                className="border-b border-gray-800 hover:bg-gray-900"
              >
                <td className="py-2 px-3">
                  <Link
                    to={`/admin/keys/${key}`}
                    className="text-blue-400 hover:underline"
                  >
                    {fmt(key)}
                  </Link>
                </td>
                <td className="py-2 px-3">{r.productId}</td>
                <td className={`py-2 px-3 ${status.color}`}>{status.text}</td>
                <td className="py-2 px-3">
                  {r.useCount} / {r.maxUseCount}
                </td>
                <td className="py-2 px-3">
                  {toLocaleDateString(new Date(r.expiresAt))}
                </td>
                <td className="py-2 px-3">{r.usageLogs.length}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
