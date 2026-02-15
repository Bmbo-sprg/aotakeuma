import type { Route } from "./+types/layout";
import { Outlet } from "react-router";

export function meta(_: Route.MetaArgs) {
  return [{ title: "作品 - 竹馬あお" }];
}

export default function WorksLayout() {
  return (
    // バナーをフルで表示させたいので、lg:max-w-4xl lg:mx-auto は各作品のページでかける
    <main>
      <Outlet />
    </main>
  );
}
