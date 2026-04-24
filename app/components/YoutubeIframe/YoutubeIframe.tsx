type YoutubeIframeProps = {
  url: string;
  width?: number | string;
  height?: number | string;
};

const urlToEmbed = (url: string) => {
  const match = url.match(/https?:\/\/www\.youtube\.com\/watch\?v=([^&]+)/);
  if (!match) {
    return null;
  }
  const [, id] = match;
  return `https://www.youtube.com/embed/${id}`;
};

export const YoutubeIframe = ({ url, width, height }: YoutubeIframeProps) => {
  const embedUrl = urlToEmbed(url);
  if (!embedUrl) {
    return null;
  }

  return (
    <iframe
      style={{ borderRadius: "12px" }}
      src={embedUrl}
      width={width || "100%"}
      height={height || "400"}
      title="YouTube video player"
      allowFullScreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );
};
