import type { Music } from "~/types";
import type { Route } from "./+types/music";
import { musics } from "../../contents/works/musics";
import { albums } from "../../contents/works/albums";
import { Banner } from "../../components/Banner/Banner";
import { CreditCardList } from "../../components/CreditCardList/CreditCardList";
import { SocialLinkItem } from "../../components/SocialLinkItem/SocialLinkItem";
import { SpotifyIframe } from "../../components/SpotifyIframe/SpotifyIframe";
import { TagList } from "../../components/TagList/TagList";
import { VideoIframe } from "../../components/VideoIframe/VideoIframe";
import { WorkCard } from "../../components/WorkCard/WorkCard";
import { AccordionSection } from "../../components/AccordionSection/AccordionSection";
import { toLocaleDateString } from "../../utils/formats";
import { buildOGMeta, getWorkPath } from "../../utils/paths";

const aggregateAlbums = (music: Music) =>
  albums
    .filter((album) => album.tracks.some((track) => track.id === music.id))
    .sort((a, b) => b.releaseDate.getTime() - a.releaseDate.getTime());

const getBannerPath = (music: Music) => {
  const latestAlbum = aggregateAlbums(music)[0];
  return latestAlbum ? latestAlbum.jacketImageUrl : "/images/aotakeuma_ogp.png";
};

/**
 * 楽曲のリンク集をその収録アルバムから集める
 * 以下の優先順位で同一プラットフォームのリンクをマージする
 * - 楽曲自体のリンク
 * - 収録アルバムのリンク（新しい順)
 */
const aggregateLinks = (music: Music) => {
  const musicLinks = music.links ?? [];
  const albumLinks = aggregateAlbums(music).flatMap(
    (album) => album.links ?? []
  );
  const mergedLinks = new Map<string, (typeof musicLinks)[0]>();
  for (const link of [...albumLinks, ...musicLinks]) {
    mergedLinks.set(link.platform, link);
  }
  return Array.from(mergedLinks.values());
};

export function meta({ loaderData }: Route.MetaArgs) {
  return buildOGMeta({
    title: [loaderData.music.title, "音楽"],
    description: loaderData.music.description,
    path: getWorkPath(loaderData.music),
    imagePath: getBannerPath(loaderData.music),
  });
}

export function loader({ params }: Route.LoaderArgs) {
  const music = musics.find((item) => item.id === params.workId);
  if (!music) {
    throw new Response("Not Found", { status: 404 });
  }
  return { music };
}

export function MusicView({ music }: { music: Music }) {
  const albumsWithTrack = aggregateAlbums(music);
  const links = aggregateLinks(music);

  return (
    <main>
      <Banner src={getBannerPath(music)} alt={`${music.title}のジャケット`} />

      <div className="space-y-8 px-6 py-8 lg:max-w-4xl lg:mx-auto">
        <section>
          <p className="text-sm font-medium text-slate-500 -mb-1">音楽</p>
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-2xl font-semibold text-slate-900">
              {music.title}
            </h1>
            <TagList tags={music.tags} />
          </div>
          <div className="flex flex-wrap items-center text-sm font-medium text-slate-500 gap-2">
            <span>{toLocaleDateString(music.releaseDate)}</span>
            {music.team ? <span>by {music.team}</span> : null}
          </div>
        </section>

        <section>
          <p className="text-slate-700 whitespace-pre-line">
            {music.description.trim()}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">クレジット</h2>
          <CreditCardList credits={music.credits} />
        </section>

        {music.video ? (
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">動画</h2>
            <VideoIframe video={music.video} />
          </section>
        ) : null}

        {music.lyrics ? (
          <AccordionSection title="歌詞">
            {music.lyrics.trim()}
          </AccordionSection>
        ) : null}

        {albumsWithTrack.length > 0 ? (
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">
              収録されているアルバム
            </h2>
            <div className="space-y-3">
              {albumsWithTrack.map((album) => (
                <WorkCard key={album.id} work={album} />
              ))}
            </div>
          </section>
        ) : null}

        {links.length > 0 ? (
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">
              聴いたり買ったりできる場所
            </h2>
            {links.find((link) => link.platform === "spotify") ? (
              <SpotifyIframe
                url={links.find((link) => link.platform === "spotify")!.url}
              />
            ) : null}
            <div className="flex flex-wrap gap-2">
              {links.map((link) => (
                <SocialLinkItem
                  key={`${link.platform}-${link.url}`}
                  link={link}
                  size="md"
                />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}

export default function MusicRoute({ loaderData }: Route.ComponentProps) {
  return <MusicView music={loaderData.music} />;
}
