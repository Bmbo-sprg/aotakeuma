import type { Video } from "~/types";
import { CreditCardList } from "../CreditCardList/CreditCardList";
import { YoutubeIframe } from "../YoutubeIframe/YoutubeIframe";
import { SocialLinkItem } from "../SocialLinkItem/SocialLinkItem";
import { NiconicoIframe } from "../NiconicoIframe/NiconicoIframe";

type VideoIframeProps = {
  video: Video;
  className?: string;
};

export const VideoIframe = ({ video, className }: VideoIframeProps) => {
  return (
    <div className={["space-y-2", className].filter(Boolean).join(" ")}>
      <CreditCardList credits={video.credits} />
      {video.niconicoUrl ? (
        <NiconicoIframe url={video.niconicoUrl} />
      ) : video.youtubeUrl ? (
        <YoutubeIframe url={video.youtubeUrl} />
      ) : null}
      {(video.niconicoUrl || video.youtubeUrl || video.bilibiliUrl) && (
        <div className="flex flex-wrap gap-2 text-sm">
          {video.niconicoUrl ? (
            <SocialLinkItem
              link={{ platform: "niconico", url: video.niconicoUrl }}
              size="md"
            />
          ) : null}
          {video.youtubeUrl ? (
            <SocialLinkItem
              link={{ platform: "youtube", url: video.youtubeUrl }}
              size="md"
            />
          ) : null}
          {video.bilibiliUrl ? (
            <SocialLinkItem
              link={{ platform: "bilibili", url: video.bilibiliUrl }}
              size="md"
            />
          ) : null}
        </div>
      )}
    </div>
  );
};
