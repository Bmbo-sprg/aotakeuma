import { useEffect, useRef, useState } from "react";
import type { Route } from "./+types/neuronSim";
import { ColorField } from "../../components/ColorField/ColorField";
import { SliderField } from "../../components/SliderField/SliderField";
import { ToolPanel } from "../../components/ToolPanel/ToolPanel";
import { hexToRgb } from "../../utils/formats";
import { randomNormal } from "../../utils/random";
import { buildOGMeta } from "../../utils/paths";

export function meta(_: Route.MetaArgs) {
  return [
    ...buildOGMeta({
      title: ["ノード接続シミュレーター", "ツール"],
      description: "ノードと接続線をランダム生成し、透過 PNG で書き出すツール",
      path: "/tools/neuron_sim",
    }),
    { name: "robots", content: "noindex" },
  ];
}

const CANVAS_SIZE = 2000;

type Node = {
  x: number;
  y: number;
  thickness: number;
  opacity: number;
};

type NodeParams = {
  count: number;
  distMax: number;
  posVar: number;
  nodeThicknessAvg: number;
  lineThicknessAvg: number;
  opacityAvg: number;
  opacityVar: number;
};

const defaultParams: NodeParams = {
  count: 50,
  distMax: 300,
  posVar: 300,
  nodeThicknessAvg: 5,
  lineThicknessAvg: 2,
  opacityAvg: 0.8,
  opacityVar: 0.1,
};

const generateNodes = (params: NodeParams): Node[] => {
  const baseCenterX = CANVAS_SIZE / 2;
  const baseCenterY = CANVAS_SIZE / 2;

  return Array.from({ length: params.count }, () => {
    const x = randomNormal(baseCenterX, params.posVar);
    const y = randomNormal(baseCenterY, params.posVar);
    const thickness = Math.max(
      1,
      randomNormal(params.nodeThicknessAvg, params.nodeThicknessAvg / 2)
    );
    const opacity = Math.max(
      0,
      Math.min(1, randomNormal(params.opacityAvg, params.opacityVar))
    );

    return { x, y, thickness, opacity };
  });
};

// 線の太さを描画のたびに再サンプリングするため、この関数は呼び出すたびに結果が変わる（元実装の挙動を維持）
const drawNodes = (
  ctx: CanvasRenderingContext2D,
  nodes: Node[],
  nodeColor: string,
  distMax: number,
  lineThicknessAvg: number
) => {
  ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  const rgb = hexToRgb(nodeColor);

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const nodeA = nodes[i];
      const nodeB = nodes[j];
      const dx = nodeA.x - nodeB.x;
      const dy = nodeA.y - nodeB.y;
      const distSq = dx * dx + dy * dy;

      if (distSq < distMax * distMax) {
        ctx.beginPath();
        ctx.moveTo(nodeA.x, nodeA.y);
        ctx.lineTo(nodeB.x, nodeB.y);
        const opacity = Math.min(nodeA.opacity, nodeB.opacity);
        ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
        ctx.lineWidth = Math.max(
          0.5,
          randomNormal(lineThicknessAvg, lineThicknessAvg / 2)
        );
        ctx.stroke();
      }
    }
  }

  nodes.forEach((node) => {
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.thickness / 2, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${node.opacity})`;
    ctx.fill();
  });
};

export default function NeuronSimRoute(_: Route.ComponentProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [params, setParams] = useState(defaultParams);
  const [bgColor, setBgColor] = useState("#0a1128");
  const [nodeColor, setNodeColor] = useState("#ffeb3b");
  const [nodes, setNodes] = useState<Node[]>(() =>
    generateNodes(defaultParams)
  );

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    drawNodes(ctx, nodes, nodeColor, params.distMax, params.lineThicknessAvg);
  }, [nodes, nodeColor, params.distMax, params.lineThicknessAvg]);

  const updateParam = <K extends keyof NodeParams>(
    key: K,
    value: NodeParams[K]
  ) => {
    const nextParams = { ...params, [key]: value };
    setParams(nextParams);
    setNodes(generateNodes(nextParams));
  };

  const regenerate = () => setNodes(generateNodes(params));

  const download = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "node_connections_transparent.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <ToolPanel title="ノード接続パラメーター">
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
            label="ノード・線の色"
            value={nodeColor}
            onChange={setNodeColor}
          />
        </div>

        <SliderField
          label="ノード数"
          value={params.count}
          onChange={(v) => updateParam("count", v)}
          min={10}
          max={200}
        />
        <SliderField
          label="最大接続距離"
          value={params.distMax}
          onChange={(v) => updateParam("distMax", v)}
          min={50}
          max={1000}
          unit="px"
        />
        <SliderField
          label="ノードの位置ばらつき（分散）"
          value={params.posVar}
          onChange={(v) => updateParam("posVar", v)}
          min={10}
          max={1000}
        />
        <SliderField
          label="ノードの太さ（平均）"
          value={params.nodeThicknessAvg}
          onChange={(v) => updateParam("nodeThicknessAvg", v)}
          min={1}
          max={20}
          step={0.5}
          unit="px"
        />
        <SliderField
          label="線の太さ（平均）"
          value={params.lineThicknessAvg}
          onChange={(v) => updateParam("lineThicknessAvg", v)}
          min={0.5}
          max={10}
          step={0.5}
          unit="px"
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
