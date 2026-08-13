import { Suspense, lazy, useState } from "react";
import type { Route } from "./+types/cardboardBox";
import { ColorField } from "../../components/ColorField/ColorField";
import { SliderField } from "../../components/SliderField/SliderField";
import { ToolPanel } from "../../components/ToolPanel/ToolPanel";
import { buildOGMeta } from "../../utils/paths";

export function meta(_: Route.MetaArgs) {
  return [
    ...buildOGMeta({
      title: ["段ボール箱シミュレーター", "ツール"],
      description: "蓋の角度・サイズ・色を変えられる 3D 段ボール箱",
      path: "/tools/cardboard_box",
    }),
    { name: "robots", content: "noindex" },
  ];
}

const CardboardScene = lazy(() => import("./CardboardScene"));

export type BoxParams = {
  width: number;
  height: number;
  depth: number;
  angle: number;
  showPivot: boolean;
  showLabels: boolean;
  color: string;
};

const defaultParams: BoxParams = {
  width: 2,
  height: 2,
  depth: 2,
  angle: 2.2,
  showPivot: true,
  showLabels: true,
  color: "#d2a679",
};

export default function CardboardBoxRoute(_: Route.ComponentProps) {
  const [params, setParams] = useState(defaultParams);

  const updateParam = <K extends keyof BoxParams>(
    key: K,
    value: BoxParams[K]
  ) => {
    setParams((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-100">
      <ToolPanel title="段ボール箱パラメーター">
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-xs font-medium text-slate-600">
            <input
              type="checkbox"
              checked={params.showPivot}
              onChange={(e) => updateParam("showPivot", e.target.checked)}
            />
            回転軸 (Pivot) を表示
          </label>
          <label className="flex items-center gap-2 text-xs font-medium text-slate-600">
            <input
              type="checkbox"
              checked={params.showLabels}
              onChange={(e) => updateParam("showLabels", e.target.checked)}
            />
            ラベルを表示
          </label>
        </div>

        <ColorField
          label="段ボールの色"
          value={params.color}
          onChange={(v) => updateParam("color", v)}
        />

        <SliderField
          label="蓋の角度"
          value={params.angle}
          onChange={(v) => updateParam("angle", v)}
          min={0}
          max={6.28}
          step={0.01}
        />
        <SliderField
          label="幅 (Width)"
          value={params.width}
          onChange={(v) => updateParam("width", v)}
          min={0.5}
          max={5}
          step={0.1}
        />
        <SliderField
          label="高さ (Height)"
          value={params.height}
          onChange={(v) => updateParam("height", v)}
          min={0.5}
          max={5}
          step={0.1}
        />
        <SliderField
          label="奥行き (Depth)"
          value={params.depth}
          onChange={(v) => updateParam("depth", v)}
          min={0.5}
          max={5}
          step={0.1}
        />

        <p className="text-xs text-slate-500">
          ドラッグで回転 / スクロールでズーム
        </p>
      </ToolPanel>

      <Suspense fallback={null}>
        <CardboardScene params={params} />
      </Suspense>
    </div>
  );
}
