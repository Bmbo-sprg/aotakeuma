import type { Video } from "~/types";
import { CreditCardList } from "../CreditCardList/CreditCardList";
import { YoutubeIframe } from "../YoutubeIframe/YoutubeIframe";
import { SocialLinkItem } from "../SocialLinkItem/SocialLinkItem";

type VideoIframeProps = {
  video: Video;
  className?: string;
};

export const VideoIframe = ({ video, className }: VideoIframeProps) => {
  return (
    <div className={["space-y-2", className].filter(Boolean).join(" ")}>
      <CreditCardList credits={video.credits} />
      {video.youtubeUrl ? <YoutubeIframe url={video.youtubeUrl} /> : null}
      {/* TODO: マジでニコニコを優位にする */}
      {(video.niconicoUrl || video.bilibiliUrl) && (
        <div className="flex flex-wrap gap-2 text-sm">
          {video.niconicoUrl ? (
            <SocialLinkItem
              link={{ platform: "niconico", url: video.niconicoUrl }}
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
