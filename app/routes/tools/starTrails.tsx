import { useEffect, useRef, useState } from "react";
import type { Route } from "./+types/starTrails";
import { ColorField } from "../../components/ColorField/ColorField";
import { SliderField } from "../../components/SliderField/SliderField";
import { ToolPanel } from "../../components/ToolPanel/ToolPanel";
import { hexToRgb } from "../../utils/formats";
import { randomNormal } from "../../utils/random";
import { buildOGMeta } from "../../utils/paths";

export function meta(_: Route.MetaArgs) {
  return [
    ...buildOGMeta({
      title: ["星の軌跡シミュレーター", "ツール"],
      description: "円弧状の軌跡をランダム生成し、透過 PNG で書き出すツール",
      path: "/tools/star_trails",
    }),
    { name: "robots", content: "noindex" },
  ];
}

const CANVAS_SIZE = 2000;

type Star = {
  cx: number;
  cy: number;
  radius: number;
  startAngle: number;
  endAngle: number;
  thickness: number;
  opacity: number;
};

type StarParams = {
  count: number;
  radiusAvg: number;
  radiusVar: number;
  lengthAvgDeg: number;
  lengthVarDeg: number;
  thicknessAvg: number;
  thicknessVar: number;
  opacityAvg: number;
  opacityVar: number;
  centerVar: number;
};

const defaultParams: StarParams = {
  count: 50,
  radiusAvg: 500,
  radiusVar: 250,
  lengthAvgDeg: 60,
  lengthVarDeg: 30,
  thicknessAvg: 3,
  thicknessVar: 1.5,
  opacityAvg: 0.8,
  opacityVar: 0.2,
  centerVar: 40,
};

const generateStars = (params: StarParams): Star[] => {
  const lengthAvg = (params.lengthAvgDeg * Math.PI) / 180;
  const lengthVar = (params.lengthVarDeg * Math.PI) / 180;
  const baseCenterX = CANVAS_SIZE / 2;
  const baseCenterY = CANVAS_SIZE / 2;

  return Array.from({ length: params.count }, () => {
    const cx = randomNormal(baseCenterX, params.centerVar);
    const cy = randomNormal(baseCenterY, params.centerVar);
    const radius = Math.max(
      10,
      randomNormal(params.radiusAvg, params.radiusVar)
    );
    const startAngle = Math.random() * Math.PI * 2;
    const arcLength = Math.max(0.01, randomNormal(lengthAvg, lengthVar));
    const endAngle = startAngle + arcLength;
    const thickness = Math.max(
      0.2,
      randomNormal(params.thicknessAvg, params.thicknessVar)
    );
    const opacity = Math.max(
      0,
      Math.min(1, randomNormal(params.opacityAvg, params.opacityVar))
    );

    return { cx, cy, radius, startAngle, endAngle, thickness, opacity };
  });
};

const drawStars = (
  ctx: CanvasRenderingContext2D,
  stars: Star[],
  trailColor: string
) => {
  ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  const rgb = hexToRgb(trailColor);

  stars.forEach((star) => {
    ctx.beginPath();
    ctx.arc(star.cx, star.cy, star.radius, star.startAngle, star.endAngle);
    ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${star.opacity})`;
    ctx.lineWidth = star.thickness;
    ctx.lineCap = "round";
    ctx.stroke();
  });
};

export default function StarTrailsRoute(_: Route.ComponentProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [params, setParams] = useState(defaultParams);
  const [bgColor, setBgColor] = useState("#0a1128");
  const [trailColor, setTrailColor] = useState("#b4e6ff");
  const [stars, setStars] = useState<Star[]>(() =>
    generateStars(defaultParams)
  );

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    drawStars(ctx, stars, trailColor);
  }, [stars, trailColor]);

  const updateParam = <K extends keyof StarParams>(
    key: K,
    value: StarParams[K]
  ) => {
    const nextParams = { ...params, [key]: value };
    setParams(nextParams);
    setStars(generateStars(nextParams));
  };

  const regenerate = () => setStars(generateStars(params));

  const download = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "star_trails_transparent.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <ToolPanel title="軌跡パラメーター">
        <button type="button" className="btn-tool-primary" onClick={regenerate}>
          ランダム再生成
        </button>
        <button type="button" className="btn-tool-success" onClick={download}>
          透過画像として保存
        </button>

        <div className="grid grid-cols-2 gap-3">
          <ColorField
            label="確認用背景色"
            value={bgColor}
            onChange={setBgColor}
          />
          <ColorField
            label="軌跡の色"
            value={trailColor}
            onChange={setTrailColor}
          />
        </div>

        <SliderField
          label="軌跡の本数"
          value={params.count}
          onChange={(v) => updateParam("count", v)}
          min={5}
          max={100}
        />
        <SliderField
          label="中心からの距離（平均）"
          value={params.radiusAvg}
          onChange={(v) => updateParam("radiusAvg", v)}
          min={20}
          max={1200}
          unit="px"
        />
        <SliderField
          label="中心からの距離（分散）"
          value={params.radiusVar}
          onChange={(v) => updateParam("radiusVar", v)}
          min={0}
          max={800}
        />
        <SliderField
          label="弧の長さ（平均）"
          value={params.lengthAvgDeg}
          onChange={(v) => updateParam("lengthAvgDeg", v)}
          min={5}
          max={180}
          unit="°"
        />
        <SliderField
          label="弧の長さ（分散）"
          value={params.lengthVarDeg}
          onChange={(v) => updateParam("lengthVarDeg", v)}
          min={0}
          max={90}
        />
        <SliderField
          label="太さ（平均）"
          value={params.thicknessAvg}
          onChange={(v) => updateParam("thicknessAvg", v)}
          min={1}
          max={20}
          step={0.5}
          unit="px"
        />
        <SliderField
          label="太さ（分散）"
          value={params.thicknessVar}
          onChange={(v) => updateParam("thicknessVar", v)}
          min={0}
          max={10}
          step={0.5}
        />
        <SliderField
          label="不透明度（平均）"
          value={params.opacityAvg}
          onChange={(v) => updateParam("opacityAvg", v)}
          min={0.1}
          max={1}
          step={0.01}
        />
        <SliderField
          label="不透明度（分散）"
          value={params.opacityVar}
          onChange={(v) => updateParam("opacityVar", v)}
          min={0}
          max={0.5}
          step={0.01}
        />
        <SliderField
          label="中心のブレ（分散）"
          value={params.centerVar}
          onChange={(v) => updateParam("centerVar", v)}
          min={0}
          max={200}
          unit="px"
        />
      </ToolPanel>

      <canvas
        ref={canvasRef}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        className="block h-[100vmin] max-h-screen w-[100vmin] max-w-screen shadow-[0_0_30px_rgba(0,0,0,0.6)]"
      />
    </div>
  );
}
