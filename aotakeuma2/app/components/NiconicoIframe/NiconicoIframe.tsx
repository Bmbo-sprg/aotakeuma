import { useEffect, useRef } from "react";

type NiconicoIframeProps = {
  url: string;
  width?: number | string;
  height?: number | string;
};

const urlToEmbed = (url: string) => {
  const match = url.match(/https?:\/\/www\.nicovideo\.jp\/watch\/([^&]+)/);
  if (!match) {
    return null;
  }
  const [, id] = match;
  return `https://embed.nicovideo.jp/watch/${id}?persistence=1&oldScript=1&referer=&from=0&allowProgrammaticFullScreen=1`;
};

// See: https://embed.nicovideo.jp/watch/sm9/script
// localhost からだと 403 が返ってくるが、デプロイしたら問題なく動くはず（なぜ？）
export const NiconicoIframe = ({ url, width, height }: NiconicoIframeProps) => {
  const embedUrl = urlToEmbed(url);
  if (!embedUrl) {
    return null;
  }

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const exitFullScreenRef = useRef<(() => void) | null>(null);

  const programmaticFullScreen = (iframe: HTMLIFrameElement) => {
    const stylesToModify = [
      "width",
      "height",
      "top",
      "left",
      "position",
      "z-index",
      "max-width",
      "transform",
      "-webkit-transform",
      "transform-origin",
      "-webkit-transform-origin",
    ] as const;
    const originalStyles = stylesToModify.reduce(
      (acc, style) => {
        acc[style] = {
          value: iframe.style.getPropertyValue(style),
          priority: iframe.style.getPropertyPriority(style),
        };
        return acc;
      },
      {} as Record<
        (typeof stylesToModify)[number],
        { value: string; priority: string }
      >
    );
    let timer: ReturnType<typeof setTimeout>;
    let ended = false;
    const initialScrollX = window.scrollX;
    const initialScrollY = window.scrollY;
    let wasLandscape: boolean | null = null;

    const pollingResize = () => {
      if (ended) {
        return;
      }
      const isLandscape = window.innerWidth >= window.innerHeight;
      const windowWidth = `${isLandscape ? window.innerWidth : window.innerHeight}px`;
      const windowHeight = `${isLandscape ? window.innerHeight : window.innerWidth}px`;

      if (
        iframe.style.width !== windowWidth ||
        iframe.style.height !== windowHeight
      ) {
        iframe.style.setProperty("width", windowWidth, "important");
        iframe.style.setProperty("height", windowHeight, "important");
        window.scrollTo(0, 0);
      }

      if (isLandscape !== wasLandscape) {
        wasLandscape = isLandscape;
        if (isLandscape) {
          iframe.style.setProperty("transform", "none", "important");
          iframe.style.setProperty("-webkit-transform", "none", "important");
          iframe.style.setProperty("left", "0", "important");
        } else {
          iframe.style.setProperty("transform", "rotate(90deg)", "important");
          iframe.style.setProperty(
            "-webkit-transform",
            "rotate(90deg)",
            "important"
          );
          iframe.style.setProperty("left", "100%", "important");
        }
      }

      timer = setTimeout(startPollingResize, 200);
    };

    const startPollingResize = () => {
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(pollingResize);
      } else {
        pollingResize();
      }
    };

    startPollingResize();

    iframe.style.setProperty("top", "0", "important");
    iframe.style.setProperty("position", "fixed", "important");
    iframe.style.setProperty("z-index", "2147483647", "important");
    iframe.style.setProperty("max-width", "none", "important");
    iframe.style.setProperty("transform-origin", "0% 0%", "important");
    iframe.style.setProperty("-webkit-transform-origin", "0% 0%", "important");

    return () => {
      stylesToModify.forEach((style) => {
        const originalStyle = originalStyles[style];
        iframe.style.removeProperty(style);
        iframe.style.setProperty(
          style,
          originalStyle.value,
          originalStyle.priority
        );
      });
      clearTimeout(timer);
      ended = true;
      window.scrollTo(initialScrollX, initialScrollY);
    };
  };

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    if (
      window.getComputedStyle(iframe).getPropertyValue("max-width") === "none"
    ) {
      iframe.style.maxWidth = "100%";
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onMessage = (event: MessageEvent<any>) => {
      if (
        !iframeRef.current ||
        event.source !== iframeRef.current.contentWindow
      ) {
        return;
      }
      if (event.data.eventName === "enterProgrammaticFullScreen") {
        exitFullScreenRef.current ||= programmaticFullScreen(iframeRef.current);
      } else if (event.data.eventName === "exitProgrammaticFullScreen") {
        exitFullScreenRef.current?.();
        exitFullScreenRef.current = null;
      }
    };

    window.addEventListener("message", onMessage);

    return () => {
      window.removeEventListener("message", onMessage);
      exitFullScreenRef.current?.();
      exitFullScreenRef.current = null;
    };
  }, []);

  return (
    <iframe
      style={{ borderRadius: "12px" }}
      ref={iframeRef}
      src={embedUrl}
      width={width || "100%"}
      height={height || "400"}
      allowFullScreen
      allow="autoplay"
    />
  );
};
