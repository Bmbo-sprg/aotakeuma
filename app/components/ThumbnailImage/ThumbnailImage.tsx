import { useState } from "react";

// src が無い、または読み込みに失敗した場合のフォールバック。
// Banner と同じ画像を使う
const FALLBACK_SRC = "/images/aotakeuma_ogp.png";

type ThumbnailImageProps = {
  src: string | null;
  alt: string;
  // YouTube のサムネイル（hqdefault.jpg）は常に 4:3 で、実際の動画が
  // 16:9 の場合は上下に黒帯が焼き込まれている。
  // - "cover": 画像を 16:9 とみなして枠いっぱいに敷き詰める（黒帯は
  //   自動的に切り取られる）。WorkCard の正方形サムネイルなど
  // - "cover-contain": 黒帯だけを切り取った 16:9 の塊として、"contain"
  //   と同様に枠内に収める（枠自体が横長でも画像を引き伸ばし過ぎない）。
  //   横長の Banner 用
  fit?: "contain" | "cover" | "cover-contain";
  className?: string;
};

// 正方形など元画像の縦横比が表示枠と異なる場合、余白をその画像自体の
// 拡大・ブラー版で埋める（Banner と同じ表現）
export const ThumbnailImage = ({
  src,
  alt,
  fit = "contain",
  className,
}: ThumbnailImageProps) => {
  const [imgSrc, setImgSrc] = useState(src ?? FALLBACK_SRC);

  const handleError = () => {
    setImgSrc(FALLBACK_SRC);
  };

  return (
    <div
      className={["relative h-full w-full overflow-hidden", className]
        .filter(Boolean)
        .join(" ")}
    >
      <img
        src={imgSrc}
        alt=""
        aria-hidden="true"
        onError={handleError}
        className="absolute inset-0 h-full w-full scale-105 object-cover blur-sm opacity-80"
      />
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        {fit === "cover-contain" ? (
          <div className="aspect-video h-full max-w-full overflow-hidden">
            <img
              src={imgSrc}
              alt={alt}
              onError={handleError}
              className="h-full w-full object-cover drop-shadow-2xl"
            />
          </div>
        ) : (
          <img
            src={imgSrc}
            alt={alt}
            onError={handleError}
            className={[
              "h-full w-full drop-shadow-2xl",
              fit === "cover" ? "aspect-video object-cover" : "object-contain",
            ].join(" ")}
          />
        )}
      </div>
    </div>
  );
};
