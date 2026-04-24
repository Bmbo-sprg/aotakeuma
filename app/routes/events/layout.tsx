import { Outlet } from "react-router";
import { BottomNav } from "../../components/BottomNav/BottomNav";

export default function EventsLayout() {
  return (
    <main className="lg:max-w-4xl lg:mx-auto">
      <Outlet />
      <BottomNav active="events" />
    </main>
  );
}
