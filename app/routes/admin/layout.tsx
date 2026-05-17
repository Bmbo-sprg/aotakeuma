import { Link, Outlet, useLocation } from "react-router";

const NAV = [
  { to: "/admin", label: "ホーム", exact: true },
  { to: "/admin/keys", label: "キー一覧" },
  { to: "/admin/keys/new", label: "キー発行" },
  { to: "/admin/upload", label: "R2 アップロード" },
  { to: "/admin/contents", label: "コンテンツ" },
];

export default function AdminLayout() {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-mono">
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-3 flex gap-6 items-center">
        <span className="text-blue-400 font-bold mr-4">🛠 Admin</span>
        {NAV.map(({ to, label, exact }) => {
          const active = exact ? pathname === to : pathname.startsWith(to);
          return (
            <Link
              key={to}
              to={to}
              className={`text-sm ${active ? "text-blue-300 underline" : "text-gray-400 hover:text-gray-200"}`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
