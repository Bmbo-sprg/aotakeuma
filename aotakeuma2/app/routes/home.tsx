import type { Route } from "./+types/home";
import { Link } from "react-router";
import { events } from "../contents/events";
import { works } from "../contents/works";
import { getPerson } from "../contents/persons";
import { EventCard } from "../components/EventCard/EventCard";
import { SocialLinkList } from "../components/SocialLinkList/SocialLinkList";
import { WorkCard } from "../components/WorkCard/WorkCard";
import { albums } from "../contents/works/albums";
import { musics } from "../contents/works/musics";
import { games } from "../contents/works/games";
import { exhibitions } from "../contents/events/exhibitions";
import { performances } from "../contents/events/performances";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "竹馬あお" },
    {
      name: "description",
      content: "音楽・ゲーム・その他制作物とイベント情報をまとめています。",
    },
  ];
}

const getFeaturedWorks = () =>
  [...works]
    .sort((a, b) => b.releaseDate.getTime() - a.releaseDate.getTime())
    .slice(0, 4);

const getFeaturedEvents = () =>
  [...events].sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, 4);

export default function Home(_: Route.ComponentProps) {
  const featuredWorks = getFeaturedWorks();
  const featuredEvents = getFeaturedEvents();
  const profileLinks = getPerson("竹馬あお").socialLinks ?? [];

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
                声音文脈 (レギュラーDJ) など所属
              </p>
            </Link>
          </div>
          {profileLinks.length > 0 ? (
            <SocialLinkList links={profileLinks} size="xs" />
          ) : null}
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-4xl flex-col gap-2 px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-semibold text-slate-900">最近の作品</h2>
          <Link to="/works" className="text-sm font-semibold text-slate-600">
            もっと見る
          </Link>
        </div>
        <p className="text-xs text-slate-700">
          アルバム x{albums.length} ／ 楽曲 x{musics.length} ／ ゲーム x
          {games.length} 具だくさんだね
        </p>
        <div className="grid gap-4">
          {featuredWorks.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-4xl flex-col gap-2 px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-semibold text-slate-900">
            最近のイベント
          </h2>
          <Link to="/events" className="text-sm font-semibold text-slate-600">
            もっと見る
          </Link>
        </div>
        <p className="text-xs text-slate-700">
          即売会 x{exhibitions.length} ／ DJ・ライブ x{performances.length}{" "}
          こっちもぼちぼち頑張りたい
        </p>
        <div className="grid gap-4">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

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
                className="inline-flex w-fit rounded-full border border-slate-300 bg-blue-100 px-4 py-2 text-sm font-semibold text-slate-700"
                target="_blank"
                rel="noreferrer"
              >
                X (音楽)
              </Link>
              <Link
                to="https://x.com/Bmbo_sprg"
                className="inline-flex w-fit rounded-full border border-slate-300 bg-pink-100 px-4 py-2 text-sm font-semibold text-slate-700"
                target="_blank"
                rel="noreferrer"
              >
                X (生活)
              </Link>
              <Link
                to="https://note.com/bmbo_sprg"
                className="inline-flex w-fit rounded-full border border-slate-300 bg-gray-100 px-4 py-2 text-sm font-semibold text-slate-700"
                target="_blank"
                rel="noreferrer"
              >
                note
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
