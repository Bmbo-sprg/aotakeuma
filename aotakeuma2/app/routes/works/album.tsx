import type { Album } from "~/types";
import type { Route } from "./+types/album";
import { exhibitions } from "../../contents/events/exhibitions";
import { albums } from "../../contents/works/albums";
import { toLocaleDateString } from "../../utils/formats";
import { AccordionSection } from "../../components/AccordionSection/AccordionSection";
import { Banner } from "../../components/Banner/Banner";
import { CreditCardList } from "../../components/CreditCardList/CreditCardList";
import { EventCard } from "../../components/EventCard/EventCard";
import { SocialLinkItem } from "../../components/SocialLinkItem/SocialLinkItem";
import { SpotifyIframe } from "../../components/SpotifyIframe/SpotifyIframe";
import { TagList } from "../../components/TagList/TagList";
import { TrackList } from "../../components/TrackList/TrackList";
import { VideoIframe } from "../../components/VideoIframe/VideoIframe";

export function meta({ loaderData }: Route.MetaArgs) {
  return [{ title: `${loaderData.album.title} - アルバム - 竹馬あお` }];
}

export function loader({ params }: Route.LoaderArgs) {
  const album = albums.find((item) => item.id === params.workId);
  if (!album) {
    throw new Response("Not Found", { status: 404 });
  }
  return { album };
}

export function AlbumView({ album }: { album: Album }) {
  const exhibitionsWithAlbum = exhibitions
    .filter((exhibition) =>
      exhibition.catalog.some((item) => item.id === album.id)
    )
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <main>
      <Banner src={album.jacketImageUrl} alt={`${album.title}のジャケット`} />

      <div className="space-y-8 px-6 py-8 lg:max-w-4xl lg:mx-auto">
        <section>
          <p className="text-sm font-medium text-slate-500 -mb-1">
            {album.titlePrefix ?? "アルバム"}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-2xl font-semibold text-slate-900">
              {album.title}
            </h1>
            <TagList tags={album.tags} />
          </div>
          <p className="flex flex-wrap items-center text-sm font-medium text-slate-500 gap-2">
            <span>{toLocaleDateString(album.releaseDate)}</span>
            {album.team ? <span>by {album.team}</span> : null}
          </p>
        </section>

        <section>
          <p className="text-slate-700 whitespace-pre-line">
            {album.description.trim()}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">クレジット</h2>
          <CreditCardList credits={album.credits} />
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">収録楽曲</h2>
          <TrackList tracks={album.tracks} />
        </section>

        {album.links && album.links.length > 0 ? (
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">
              聴いたり買ったりできる場所
            </h2>
            {album.links.find((link) => link.platform === "spotify") ? (
              <SpotifyIframe
                url={
                  album.links.find((link) => link.platform === "spotify")!.url
                }
              />
            ) : null}
            <div className="flex flex-wrap gap-2">
              {album.links.map((link) => (
                <SocialLinkItem
                  key={`${link.platform}-${link.url}`}
                  link={link}
                  size="md"
                />
              ))}
            </div>
          </section>
        ) : null}

        {exhibitionsWithAlbum.length > 0 ? (
          <AccordionSection
            title="即売会遍歴"
            defaultOpen={true}
            className="space-y-2"
          >
            {exhibitionsWithAlbum.map((exhibition) => (
              <EventCard key={exhibition.id} event={exhibition} />
            ))}
          </AccordionSection>
        ) : null}

        {album.video ? (
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">動画</h2>
            <VideoIframe video={album.video} />
          </section>
        ) : null}
      </div>
    </main>
  );
}

export default function AlbumRoute({ loaderData }: Route.ComponentProps) {
  return <AlbumView album={loaderData.album} />;
}
