import type { Route } from "./+types/layout";
import { Outlet } from "react-router";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Works" }];
}

export default function WorksLayout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}
