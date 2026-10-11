import type { Route } from "./+types/home";
import { Link } from "react-router";
import { events } from "../contents/events";
import { works } from "../contents/works";
import { getPerson } from "../contents/persons";
import { EventCard } from "../components/EventCard/EventCard";
import { BottomNav } from "../components/BottomNav/BottomNav";
import { SocialLinkList } from "../components/SocialLinkList/SocialLinkList";
import { WorkCard } from "../components/WorkCard/WorkCard";
import { HomeSection } from "../components/HomeSection/HomeSection";
import { albums } from "../contents/works/albums";
import { musics } from "../contents/works/musics";
import { games } from "../contents/works/games";
import { exhibitions } from "../contents/events/exhibitions";
import { performances } from "../contents/events/performances";
import { daysUntil, toLocaleDateString } from "../utils/formats";
import { buildFutureSchedule } from "../utils/schedule";
import { buildOGMeta, getEventPath, getWorkPath } from "../utils/paths";
import { Random } from "../utils/random";

export function meta(_: Route.MetaArgs) {
  return buildOGMeta({
    path: "",
  });
}

export function loader({ context }: Route.LoaderArgs) {
  return {
    lastCommitAt: context.lastCommitAt,
    seed: Date.now(),
    now: new Date(),
  };
}

export function HomeView({
  seed,
  now,
  lastCommitAt,
}: {
  seed: number;
  now: Date;
  lastCommitAt: string | null;
}) {
  const lastUpdatedDate = lastCommitAt ? new Date(lastCommitAt) : null;
  const lastUpdatedText =
    lastUpdatedDate !== null && !Number.isNaN(lastUpdatedDate.getTime())
      ? toLocaleDateString(lastUpdatedDate)
      : null;

  const random = new Random(seed);
  const featuredWorks = works
    .filter((work) => daysUntil(work.releaseDate, now) < 0)
    .sort((a, b) => b.releaseDate.getTime() - a.releaseDate.getTime())
    .slice(0, 4);
  const randomWork = works[random.nextInt(0, works.length - 1)];
  const featuredEvents = events
    .filter((event) => daysUntil(event.date, now) < 0)
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, 4);
  const randomEvent = events[random.nextInt(0, events.length - 1)];
  const featuredSchedule = buildFutureSchedule(works, events, now).slice(0, 4);

  return (
    <main className="space-y-16 pb-20">
      <section className="relative overflow-hidden bg-linear-to-br from-white via-primary-50 to-secondary/30">
        <div className="absolute -left-20 top-0 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-6 py-16">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Takeuma Ao
            </p>
            <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              竹馬あお
            </h1>
            <p className="max-w-2xl text-sm text-slate-700 md:text-base">
              音楽と生きる ／ 合成音声オールジャンルポップス作編曲
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/works"
              className="rounded-full border border-slate-300 bg-primary/50 px-4 py-2"
            >
              <p className="text-sm text-slate-700 font-semibold">
                作曲・編曲・ゲーム制作などをしてます
              </p>
              <p className="text-xs text-slate-500">
                『縋想』プロジェクト, HARCA project など所属
              </p>
            </Link>
            <Link
              to="/events"
              className="rounded-full border border-slate-300 bg-secondary/50 px-4 py-2"
            >
              <p className="text-sm text-slate-700 font-semibold">
                即売会出展・DJ 出演などをしてます
              </p>
              <p className="text-xs text-slate-500">
                声音文脈, 秘密結社D.D.D.D. など所属
              </p>
            </Link>
          </div>
          <SocialLinkList
            links={getPerson("竹馬あお").socialLinks ?? []}
            size="xs"
          />
          {lastUpdatedText ? (
            <p className="text-xs text-slate-500">
              最終更新日:{" "}
              <a
                href="https://github.com/Bmbo-sprg/aotakeuma/commits/main"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {lastUpdatedText}
              </a>{" "}
              更新されてなかったら急かしてね！
            </p>
          ) : null}
        </div>
      </section>

      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 lg:grid-cols-3 lg:items-start lg:gap-6">
        <HomeSection
          title="今後の予定"
          viewAllHref="/schedule"
          items={featuredSchedule.map((scheduleItem) => ({
            key: scheduleItem.item.id,
            node:
              scheduleItem.kind === "work" ? (
                <WorkCard work={scheduleItem.item} now={now} />
              ) : (
                <EventCard event={scheduleItem.item} now={now} />
              ),
          }))}
        />

        <HomeSection
          title="最近の作品"
          countText={`アルバム x${albums.length} ／ 楽曲 x${musics.length} ／ ゲーム x${games.length} たくさん作ってるね`}
          viewAllHref="/works"
          randomHref={getWorkPath(randomWork)}
          items={featuredWorks.map((work) => ({
            key: work.id,
            node: <WorkCard work={work} now={now} />,
          }))}
        />

        <HomeSection
          title="最近のイベント"
          countText={`即売会 x${exhibitions.length} ／ DJ・ライブ x${performances.length} こっちもぼちぼち頑張りたい`}
          viewAllHref="/events"
          randomHref={getEventPath(randomEvent)}
          items={featuredEvents.map((event) => ({
            key: event.id,
            node: <EventCard event={event} now={now} />,
          }))}
        />
      </div>

      <section className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">連絡先</h2>
            <p className="text-sm text-slate-700">
              楽曲制作のご依頼・コンピアルバムへのお誘い・DJ の出演オファー
              など、 お気軽にご相談ください。
            </p>
            <Link
              to="/contact"
              className="inline-flex w-fit rounded-full border border-slate-300 bg-primary/50 px-4 py-2 text-sm font-semibold text-slate-700"
            >
              詳細へ
            </Link>
          </div>
          <div className="card space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">投稿</h2>
            <p className="text-sm text-slate-700">
              生存確認には便利ですが、X の DM には気付けないかもしれません。
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <Link
                to="https://x.com/aotakeuma"
                className="inline-flex w-fit rounded-full border border-slate-300 bg-primary/50 px-4 py-2 text-sm font-semibold text-slate-700"
                target="_blank"
                rel="noreferrer"
              >
                X (音楽)
              </Link>
              <Link
                to="https://x.com/Bmbo_sprg"
                className="inline-flex w-fit rounded-full border border-slate-300 bg-pink-200 px-4 py-2 text-sm font-semibold text-slate-700"
                target="_blank"
                rel="noreferrer"
              >
                X (生活)
              </Link>
              <Link
                to="https://note.com/bmbo_sprg"
                className="inline-flex w-fit rounded-full border border-slate-300 bg-gray-200 px-4 py-2 text-sm font-semibold text-slate-700"
                target="_blank"
                rel="noreferrer"
              >
                note
              </Link>
            </div>
          </div>
        </div>
      </section>
      <BottomNav />
    </main>
  );
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <HomeView
      seed={loaderData.seed}
      now={loaderData.now}
      lastCommitAt={loaderData.lastCommitAt}
    />
  );
}
