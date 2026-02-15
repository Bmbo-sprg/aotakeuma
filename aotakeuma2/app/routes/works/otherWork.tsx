import type { Work } from "~/types";
import type { Route } from "./+types/otherWork";
import { works } from "../../contents/works";
import { toLocaleDateString } from "../../utils/formats";
import { CreditCardList } from "../../components/CreditCardList/CreditCardList";
import { SocialLinkItem } from "../../components/SocialLinkItem/SocialLinkItem";
import { SpotifyIframe } from "../../components/SpotifyIframe/SpotifyIframe";
import { TagList } from "../../components/TagList/TagList";

export function meta({ loaderData }: Route.MetaArgs) {
  return [{ title: `${loaderData.work.title} - その他作品 - 竹馬あお` }];
}

export function loader({ params }: Route.LoaderArgs) {
  const work = works.find((item) => item.id === params.workId);
  if (!work) {
    throw new Response("Not Found", { status: 404 });
  }
  return { work };
}

export function OtherWorkView({ work }: { work: Work }) {
  return (
    <main className="space-y-8 p-6 lg:max-w-4xl lg:mx-auto">
      <section>
        <p className="text-sm font-medium text-slate-500 -mb-1">その他作品</p>
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-2xl font-semibold text-slate-900">
            {work.title}
          </h1>
          <TagList tags={work.tags} />
        </div>
        <div className="flex flex-wrap items-center text-sm font-medium text-slate-500 gap-2">
          <span>{toLocaleDateString(work.releaseDate)}</span>
          {work.team ? <span>by {work.team}</span> : null}
        </div>
      </section>

      <section>
        <p className="text-slate-700 whitespace-pre-line">
          {work.description.trim()}
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">クレジット</h2>
        <CreditCardList credits={work.credits} />
      </section>

      {work.links && work.links.length > 0 ? (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">リンク</h2>
          {work.links.find((link) => link.platform === "spotify") ? (
            <SpotifyIframe
              url={work.links.find((link) => link.platform === "spotify")!.url}
            />
          ) : null}
          <div className="flex flex-wrap gap-2">
            {work.links.map((link) => (
              <SocialLinkItem
                key={`${link.platform}-${link.url}`}
                link={link}
                size="md"
              />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}

export default function OtherWorkRoute({ loaderData }: Route.ComponentProps) {
  return <OtherWorkView work={loaderData.work} />;
}
