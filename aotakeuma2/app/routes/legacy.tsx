import type { Route } from "./+types/legacy";
import { redirect } from "react-router";
import { works } from "../contents/works";
import { events } from "../contents/events";

const normalizeLegacyId = (legacyId: string) => legacyId.replace(/-/g, "_");

export function loader({ params }: Route.LoaderArgs) {
  const legacyId = params.legacyId;
  const normalizedId = normalizeLegacyId(legacyId);

  const work = works.find((item) => item.id === normalizedId);
  if (work) {
    return redirect(`/works/${work.type}s/${work.id}`);
  }

  const event = events.find((item) => item.id === normalizedId);
  if (event) {
    return redirect(`/events/${event.type}s/${event.id}`);
  }

  throw new Response("Not Found", { status: 404 });
}
