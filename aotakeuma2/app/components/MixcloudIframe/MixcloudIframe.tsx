type MixcloudIframeProps = {
  url: string;
  width?: number | string;
  height?: number | string;
};

const urlToEmbed = (url: string) => {
  const match = url.match(
    /https?:\/\/www\.mixcloud\.com\/([^\/]+)\/([^\/]+)\/?/
  );
  if (!match) {
    return null;
  }
  const [, user, id] = match;
  return `https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2F${user}%2F${id}%2F`;
};

export const MixcloudIframe = ({ url, width, height }: MixcloudIframeProps) => {
  const embedUrl = urlToEmbed(url);
  if (!embedUrl) {
    return null;
  }

  return (
    <iframe
      style={{
        borderRadius: "12px",
        borderWidth: "2px",
        borderColor: "#ccc",
        boxSizing: "content-box",
      }}
      src={embedUrl}
      width={width || "100%"}
      height={height || "120"}
      allowFullScreen
      allow="encrypted-media; autoplay; idle-detection; speaker-selection; web-share;"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );
};
