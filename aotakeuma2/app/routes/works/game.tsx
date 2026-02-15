import type { Game } from "~/types";
import type { Route } from "./+types/game";
import { exhibitions } from "../../contents/events/exhibitions";
import { games } from "../../contents/works/games";
import { toLocaleDateString } from "../../utils/formats";
import { AccordionSection } from "../../components/AccordionSection/AccordionSection";
import { CreditCardList } from "../../components/CreditCardList/CreditCardList";
import { EventCard } from "../../components/EventCard/EventCard";
import { SocialLinkItem } from "../../components/SocialLinkItem/SocialLinkItem";
import { TagList } from "../../components/TagList/TagList";

export function meta({ loaderData }: Route.MetaArgs) {
  return [{ title: `${loaderData.game.title} - ゲーム - 竹馬あお` }];
}

export function loader({ params }: Route.LoaderArgs) {
  const game = games.find((item) => item.id === params.workId);
  if (!game) {
    throw new Response("Not Found", { status: 404 });
  }
  return { game };
}

export function GameView({ game }: { game: Game }) {
  const exhibitionsWithGame = exhibitions
    .filter((exhibition) =>
      exhibition.catalog.some((item) => item.id === game.id)
    )
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <main className="space-y-8 p-6 lg:max-w-4xl lg:mx-auto">
      <section>
        <p className="text-sm font-medium text-slate-500 -mb-1">ゲーム</p>
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-2xl font-semibold text-slate-900">
            {game.title}
          </h1>
          <TagList tags={game.tags} />
        </div>
        <div className="flex flex-wrap items-center text-sm font-medium text-slate-500 gap-2">
          <span>{toLocaleDateString(game.releaseDate)}</span>
          {game.team ? <span>by {game.team}</span> : null}
        </div>
      </section>

      <section>
        <p className="text-slate-700 whitespace-pre-line">
          {game.description.trim()}
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">クレジット</h2>
        <CreditCardList credits={game.credits} />
      </section>

      {game.links && game.links.length > 0 ? (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">
            遊べたり買ったりできる場所
          </h2>
          <div className="flex flex-wrap gap-2">
            {game.links.map((link) => (
              <SocialLinkItem
                key={`${link.platform}-${link.url}`}
                link={link}
                size="md"
              />
            ))}
          </div>
        </section>
      ) : null}

      {exhibitionsWithGame.length > 0 ? (
        <AccordionSection
          title="即売会遍歴"
          defaultOpen={true}
          className="space-y-2"
        >
          {exhibitionsWithGame.map((exhibition) => (
            <EventCard key={exhibition.id} event={exhibition} />
          ))}
        </AccordionSection>
      ) : null}
    </main>
  );
}

export default function GameRoute({ loaderData }: Route.ComponentProps) {
  return <GameView game={loaderData.game} />;
}
