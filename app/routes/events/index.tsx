import type { Event, Tag } from "~/types";
import type { Route } from "./+types/index";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router";
import { DatePickerInput } from "../../components/DatePickerInput/DatePickerInput";
import { events } from "../../contents/events";
import { tags } from "../../contents/tags";
import { normalizeText } from "../../utils/searches";
import { EventCard } from "../../components/EventCard/EventCard";
import { BadgeButtonList } from "../../components/BadgeButtonList/BadgeButtonList";
import { Toggle } from "../../components/Toggle/Toggle";
import { buildOGMeta } from "../../utils/paths";

export function meta(_: Route.MetaArgs) {
  return buildOGMeta({
    title: ["イベント"],
    description: "竹馬あおの出演イベントや即売会などの情報",
    path: "/events",
  });
}

type SortOrder = "new" | "old";

type EventFilter = {
  query: string;
  type: Event["type"] | "";
  tag: string;
  from: string;
  to: string;
  sort: SortOrder;
};

const filterEvents = (items: Event[], filters: EventFilter) => {
  const query = normalizeText(filters.query);
  const filtered = items.filter((event) => {
    if (query && !normalizeText(event.title).includes(query)) {
      return false;
    }
    if (filters.type && event.type !== filters.type) {
      return false;
    }
    if (filters.tag && !event.tags.includes(filters.tag as Tag)) {
      return false;
    }
    if (filters.from && event.date < new Date(filters.from)) {
      return false;
    }
    if (filters.to && event.date > new Date(filters.to)) {
      return false;
    }
    return true;
  });

  return filtered.sort((a, b) => {
    const diff = a.date.getTime() - b.date.getTime();
    return filters.sort === "old" ? diff : -diff;
  });
};

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);

  return {
    filters: {
      query: url.searchParams.get("query") ?? "",
      type: (url.searchParams.get("type") ?? "") as Event["type"] | "",
      tag: url.searchParams.get("tag") ?? "",
      from: url.searchParams.get("from") ?? "",
      to: url.searchParams.get("to") ?? "",
      sort: (url.searchParams.get("sort") as SortOrder) ?? "new",
    },
    now: new Date(),
  };
}

const DEBOUNCE_MS = 300;

export function EventsView({
  filters,
  now,
}: {
  filters: EventFilter;
  now: Date;
}) {
  const [, setSearchParams] = useSearchParams();
  const [queryInput, setQueryInput] = useState(filters.query);
  const debounceRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (debounceRef.current !== null)
        window.clearTimeout(debounceRef.current);
    };
  }, []);

  const updateParam = (key: string, value: string) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (value) {
          next.set(key, value);
        } else {
          next.delete(key);
        }
        return next;
      },
      { replace: true }
    );
  };

  const handleQueryChange = (value: string) => {
    setQueryInput(value);
    if (debounceRef.current !== null) window.clearTimeout(debounceRef.current);
    debounceRef.current = window.setTimeout(() => {
      updateParam("query", value);
    }, DEBOUNCE_MS);
  };

  const filteredEvents = useMemo(
    () => filterEvents(events, filters),
    [filters]
  );

  const activeType = filters.type;
  const activeTag = filters.tag;
  const activeSort = filters.sort;

  return (
    <main className="space-y-8 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-slate-900">イベント</h1>
        <Toggle
          value={activeSort}
          onChange={(nextValue) => updateParam("sort", nextValue)}
          left={{ value: "new", label: "新しい順" }}
          right={{ value: "old", label: "古い順" }}
        />
      </div>

      <form className="card space-y-4">
        <div className="space-y-2 -mt-2">
          <label className="text-sm font-medium text-slate-700">検索</label>
          <input
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none"
            placeholder="イベント名で検索"
            type="text"
            value={queryInput}
            onChange={(e) => handleQueryChange(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">タイプ</label>
          <BadgeButtonList
            value={activeType}
            onChange={(value) => updateParam("type", value)}
            options={[
              { value: "", label: "すべて" },
              { value: "exhibition", label: "即売会" },
              { value: "performance", label: "DJ／ライブ" },
            ]}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">タグ</label>
          <BadgeButtonList
            value={activeTag}
            onChange={(value) => updateParam("tag", value)}
            options={[
              { value: "", label: "すべて" },
              ...tags.map((tag) => ({ value: tag, label: tag })),
            ]}
          />
        </div>

        <div className="grid gap-4 mb-0 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">From</label>
            <DatePickerInput
              value={filters.from}
              onChange={(value) => updateParam("from", value)}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">To</label>
            <DatePickerInput
              value={filters.to}
              onChange={(value) => updateParam("to", value)}
            />
          </div>
        </div>
      </form>

      <p className="text-sm text-slate-700">
        {filteredEvents.length}件のイベント
      </p>

      <ul className="grid gap-4">
        {filteredEvents.map((event) => (
          <li key={event.id}>
            <EventCard event={event} now={now} className="animate-subtle-in" />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default function EventsIndex({ loaderData }: Route.ComponentProps) {
  return <EventsView filters={loaderData.filters} now={loaderData.now} />;
}
