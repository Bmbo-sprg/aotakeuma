import { Link } from "react-router";
import type { Route } from "./+types/index";
import { buildOGMeta } from "../../utils/paths";

export function meta(_: Route.MetaArgs) {
  return [
    ...buildOGMeta({
      title: ["ツール"],
      description: "竹馬あおが作った制作補助ツール一覧",
      path: "/tools",
    }),
    { name: "robots", content: "noindex" },
  ];
}

const tools = [
  {
    to: "/tools/cardboard_box",
    title: "段ボール箱シミュレーター",
    description: "蓋の角度・サイズ・色を変えられる 3D 段ボール箱",
  },
  {
    to: "/tools/neuron_sim",
    title: "ノード接続シミュレーター",
    description: "ノードと接続線をランダム生成し、透過 PNG で書き出す",
  },
  {
    to: "/tools/star_trails",
    title: "星の軌跡シミュレーター",
    description: "円弧状の軌跡をランダム生成し、透過 PNG で書き出す",
  },
];

export default function ToolsIndexRoute(_: Route.ComponentProps) {
  return (
    <div className="space-y-6 p-6 lg:max-w-4xl lg:mx-auto">
      <h1 className="text-2xl font-semibold text-slate-900">ツール</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {tools.map((tool) => (
          <Link key={tool.to} to={tool.to} className="card interactive block">
            <h2 className="text-lg font-semibold text-slate-900">
              {tool.title}
            </h2>
            <p className="mt-1 text-sm text-slate-700">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
