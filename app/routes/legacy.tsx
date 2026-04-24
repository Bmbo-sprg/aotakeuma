import type { Route } from "./+types/legacy";
import { redirect } from "react-router";
import { works } from "../contents/works";
import { events } from "../contents/events";
import { getEventPath, getWorkPath, normalizeLegacyId } from "../utils/paths";

export function loader({ params }: Route.LoaderArgs) {
  const legacyId = params.legacyId;
  const normalizedId = normalizeLegacyId(legacyId);

  const work = works.find((item) => item.id === normalizedId);
  if (work) {
    return redirect(getWorkPath(work));
  }

  const event = events.find((item) => item.id === normalizedId);
  if (event) {
    return redirect(getEventPath(event));
  }

  throw new Response("Not Found", { status: 404 });
}

export default function LegacyRoute() {
  return null;
}
