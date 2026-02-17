import { Outlet } from "react-router";
import { BottomNav } from "../../components/BottomNav/BottomNav";

export default function WorksLayout() {
  return (
    // バナーをフルで表示させたいので、lg:max-w-4xl lg:mx-auto は各作品のページでかける
    <main>
      <Outlet />
      <BottomNav active="works" />
    </main>
  );
}
