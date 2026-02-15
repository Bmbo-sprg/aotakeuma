import type { Tag, Work } from "~/types";
import type { Route } from "./+types/index";
import { useEffect, useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { works } from "../../contents/works";
import { tags } from "../../contents/tags";
import { normalizeText } from "../../utils/searches";
import { WorkCard } from "../../components/WorkCard/WorkCard";
import { BadgeButtonList } from "../../components/BadgeButtonList/BadgeButtonList";
import { Toggle } from "../../components/Toggle/Toggle";

export function meta(_: Route.MetaArgs) {
  return [{ title: "作品 - 竹馬あお" }];
}

type SortOrder = "new" | "old";

type WorkFilter = {
  query: string;
  type: Work["type"] | "";
  tag: string;
  from: string;
  to: string;
  sort: SortOrder;
};

// TODO: 戻るボタンとかでフィルタ状態を維持できるようにする
const filterWorks = (items: Work[], filters: WorkFilter) => {
  const query = normalizeText(filters.query);
  const filtered = items.filter((work) => {
    if (query && !normalizeText(work.title).includes(query)) {
      return false;
    }
    if (filters.type && work.type !== filters.type) {
      return false;
    }
    if (filters.tag && !work.tags.includes(filters.tag as Tag)) {
      return false;
    }
    if (filters.from && work.releaseDate < new Date(filters.from)) {
      return false;
    }
    if (filters.to && work.releaseDate > new Date(filters.to)) {
      return false;
    }
    return true;
  });

  return filtered.sort((a, b) => {
    const diff = a.releaseDate.getTime() - b.releaseDate.getTime();
    return filters.sort === "old" ? diff : -diff;
  });
};

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  return {
    filters: {
      query: url.searchParams.get("query") ?? "",
      type: (url.searchParams.get("type") ?? "") as Work["type"] | "",
      tag: url.searchParams.get("tag") ?? "",
      from: url.searchParams.get("from") ?? "",
      to: url.searchParams.get("to") ?? "",
      sort: (url.searchParams.get("sort") as SortOrder) ?? "new",
    } satisfies WorkFilter,
  };
}

export function WorksView({ filters }: { filters: WorkFilter }) {
  const { register, control, setValue } = useForm<WorkFilter>();
  const watchedValues = useWatch({ control });

  const activeType = watchedValues.type;
  const activeTag = watchedValues.tag;
  const activeSort = watchedValues.sort;

  const filteredWorks = useMemo(() => {
    return filterWorks(works, {
      query: watchedValues.query ?? "",
      type: activeType ?? "",
      tag: activeTag ?? "",
      from: watchedValues.from ?? "",
      to: watchedValues.to ?? "",
      sort: activeSort ?? "new",
    });
  }, [watchedValues, activeType, activeTag, activeSort]);

  useEffect(() => {
    setValue("query", filters.query, { shouldDirty: false });
    setValue("type", filters.type, { shouldDirty: false });
    setValue("tag", filters.tag, { shouldDirty: false });
    setValue("from", filters.from, { shouldDirty: false });
    setValue("to", filters.to, { shouldDirty: false });
    setValue("sort", filters.sort, { shouldDirty: false });
  }, [filters, setValue]);

  return (
    <main className="space-y-8 p-6 lg:max-w-4xl lg:mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-slate-900">作品</h1>
        <Toggle
          value={activeSort}
          onChange={(nextValue) =>
            setValue("sort", nextValue as SortOrder, { shouldDirty: true })
          }
          left={{ value: "new", label: "新しい順" }}
          right={{ value: "old", label: "古い順" }}
        />
      </div>

      <form className="card space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2 -mt-2">
          <label className="text-sm font-medium text-slate-700">検索</label>
          <input
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none"
            placeholder="作品名で検索"
            type="text"
            {...register("query")}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">タイプ</label>
          <BadgeButtonList
            value={activeType}
            onChange={(value) =>
              setValue("type", value as Work["type"] | "", {
                shouldDirty: true,
              })
            }
            options={[
              { value: "", label: "すべて" },
              { value: "album", label: "アルバム" },
              { value: "music", label: "音楽" },
              { value: "game", label: "ゲーム" },
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
            {/* TODO: マジで datepicker を導入する */}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">To</label>
            <input
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none"
              type="date"
              {...register("to")}
            />
            {/* TODO: マジで datepicker を導入する */}
          </div>
        </div>

        <input type="hidden" {...register("type")} />
        <input type="hidden" {...register("tag")} />
        <input type="hidden" {...register("sort")} />
      </form>

      <p className="text-sm text-slate-700">{filteredWorks.length}件の作品</p>

      <ul className="grid gap-4">
        {filteredWorks.map((work) => (
          <li key={work.id}>
            <WorkCard work={work} className="animate-subtle-in" />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default function WorksIndex({ loaderData }: Route.ComponentProps) {
  return <WorksView filters={loaderData.filters} />;
}
