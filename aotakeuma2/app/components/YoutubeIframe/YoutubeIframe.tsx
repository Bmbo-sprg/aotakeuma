import { SocialLinkItem } from "../SocialLinkItem/SocialLinkItem";

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

export const YoutubeIframe = ({ url }: YoutubeIframeProps) => {
  const embedUrl = urlToEmbed(url);
  if (!embedUrl) {
    return <SocialLinkItem link={{ platform: "youtube", url }} size="md" />;
  }

  return (
    <iframe
      style={{ borderRadius: "12px" }}
      src={embedUrl}
      width="100%"
      height="400"
      title="YouTube video player"
      allowFullScreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );
};
