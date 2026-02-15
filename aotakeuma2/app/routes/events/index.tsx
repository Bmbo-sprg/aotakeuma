import type { Event, Tag } from "~/types";
import type { Route } from "./+types/index";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { events } from "../../contents/events";
import { tags } from "../../contents/tags";
import { normalizeText, toDate, toDateString } from "../../utils/searches";
import { EventCard } from "../../components/EventCard/EventCard";
import { BadgeButtonList } from "../../components/BadgeButtonList/BadgeButtonList";
import { Toggle } from "../../components/Toggle/Toggle";

export function meta(_: Route.MetaArgs) {
  return [{ title: "イベント - 竹馬あお" }];
}

type SortOrder = "new" | "old";

const filterEvents = (
  items: Event[],
  filters: {
    query: string;
    type: Event["type"] | "";
    tag: string;
    from: Date | null;
    to: Date | null;
    sort: SortOrder;
  }
) => {
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
    if (filters.from && event.date < filters.from) {
      return false;
    }
    if (filters.to && event.date > filters.to) {
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
  const query = url.searchParams.get("q") ?? "";
  const type = (url.searchParams.get("type") ?? "") as Event["type"] | "";
  const tag = url.searchParams.get("tag") ?? "";
  const from = toDate(url.searchParams.get("from"));
  const to = toDate(url.searchParams.get("to"));
  const sort = (url.searchParams.get("sort") as SortOrder) ?? "new";

  const filteredEvents = filterEvents(events, {
    query,
    type,
    tag,
    from,
    to,
    sort,
  });

  return {
    events: filteredEvents,
    filters: {
      query,
      type,
      tag,
      from: toDateString(from),
      to: toDateString(to),
      sort,
    },
  };
}

type EventFilterForm = {
  q: string;
  type: Event["type"] | "";
  tag: string;
  from: string;
  to: string;
  sort: SortOrder;
};

export function EventsView({
  filters,
  events,
}: {
  filters: {
    query: string;
    type: Event["type"] | "";
    tag: string;
    from: string;
    to: string;
    sort: SortOrder;
  };
  events: Event[];
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const { register, control, setValue } = useForm<EventFilterForm>({
    defaultValues: {
      q: filters.query,
      type: filters.type,
      tag: filters.tag,
      from: filters.from,
      to: filters.to,
      sort: filters.sort,
    },
  });
  const watchedValues = useWatch({ control });

  useEffect(() => {
    const handler = window.setTimeout(() => {
      const params = new URLSearchParams();
      if (watchedValues.q) params.set("q", watchedValues.q);
      if (watchedValues.type) params.set("type", watchedValues.type);
      if (watchedValues.tag) params.set("tag", watchedValues.tag);
      if (watchedValues.from) params.set("from", watchedValues.from);
      if (watchedValues.to) params.set("to", watchedValues.to);
      if (watchedValues.sort) params.set("sort", watchedValues.sort);
      const nextSearch = params.toString() ? `?${params.toString()}` : "";
      if (nextSearch !== location.search) {
        navigate(nextSearch, { replace: true });
      }
    }, 300);

    return () => window.clearTimeout(handler);
  }, [watchedValues, navigate, location.search]);

  const activeType = watchedValues.type;
  const activeTag = watchedValues.tag;
  const activeSort = watchedValues.sort;

  return (
    <main className="space-y-8 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-slate-900">イベント</h1>
        <Toggle
          value={activeSort}
          onChange={(nextValue) =>
            setValue("sort", nextValue as SortOrder, { shouldDirty: true })
          }
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
            {...register("q")}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">タイプ</label>
          <BadgeButtonList
            value={activeType}
            onChange={(value) =>
              setValue("type", value as Event["type"] | "", {
                shouldDirty: true,
              })
            }
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
            onChange={(value) =>
              setValue("tag", value, {
                shouldDirty: true,
              })
            }
            options={[
              { value: "", label: "すべて" },
              ...tags.map((tag) => ({ value: tag, label: tag })),
            ]}
          />
        </div>

        <div className="grid gap-4 mb-0 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">From</label>
            <input
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none"
              type="date"
              {...register("from")}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">To</label>
            <input
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none"
              type="date"
              {...register("to")}
            />
          </div>
        </div>

        <input type="hidden" {...register("type")} />
        <input type="hidden" {...register("tag")} />
        <input type="hidden" {...register("sort")} />
      </form>

      <ul className="grid gap-4">
        {events.map((event) => (
          <li key={event.id}>
            <EventCard event={event} className="animate-subtle-in" />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default function EventsIndex({ loaderData }: Route.ComponentProps) {
  return <EventsView filters={loaderData.filters} events={loaderData.events} />;
}
