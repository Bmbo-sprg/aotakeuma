import { SocialLinkItem } from "../SocialLinkItem/SocialLinkItem";

type SpotifyIframeProps = {
  url: string;
};

const urlToEmbed = (url: string): string | null => {
  const match = url.match(
    /https:\/\/open\.spotify\.com\/(?:intl-[a-zA-Z]+\/)?(album|track|playlist)\/([a-zA-Z0-9]+)/
  );
  if (!match) {
    return null;
  }
  const [, type, id] = match;
  return `https://open.spotify.com/embed/${type}/${id}?utm_source=generator`;
};

export const SpotifyIframe = ({ url }: SpotifyIframeProps) => {
  const embedUrl = urlToEmbed(url);
  if (!embedUrl) {
    return <SocialLinkItem link={{ platform: "spotify", url }} size="md" />;
  }

  return (
    <iframe
      data-testid="embed-iframe"
      style={{ borderRadius: "12px" }}
      src={embedUrl}
      width="100%"
      height="400"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  );
};
