import { useState } from "react";

// src が無い、または読み込みに失敗した場合のフォールバック。
// Banner と同じ画像を使う
const FALLBACK_SRC = "/images/aotakeuma_ogp.png";

type ThumbnailImageProps = {
  src: string | null;
  alt: string;
  className?: string;
};

// 正方形など元画像の縦横比が表示枠と異なる場合、余白をその画像自体の
// 拡大・ブラー版で埋める（Banner と同じ表現）
export const ThumbnailImage = ({
  src,
  alt,
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
        <img
          src={imgSrc}
          alt={alt}
          onError={handleError}
          className="h-full w-full object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  );
};
