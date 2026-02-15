import type { Route } from "./+types/layout";
import { Outlet } from "react-router";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Events" }];
}

export default function EventsLayout() {
  return (
    <main className="lg:max-w-4xl lg:mx-auto">
      <Outlet />
    </main>
  );
}
