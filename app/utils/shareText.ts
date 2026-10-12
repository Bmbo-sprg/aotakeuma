import type { Album, Event, Music, Performance, Work } from "~/types";
import type { ScheduleItem } from "./schedule";
import { toLocaleDateString } from "./formats";
import { SITE_URL, getEventPath, getWorkPath } from "./paths";

const WORK_TYPE_DISCOVERY_LABEL: Record<Work["type"], string> = {
  album: "アルバム",
  music: "音楽",
  game: "ゲーム",
  other: "作品",
};

const getWorkVideo = (work: Work) =>
  work.type === "album" || work.type === "music"
    ? (work as Album | Music).video
    : undefined;

// Work（作品）の紹介文を組み立てる。「発見した」等の案内文は含まない
// （viewer向け／本人投稿向けで文言が変わるため、UI 側で付与する）
export const buildWorkShareText = (work: Work): string => {
  const video = getWorkVideo(work);
  const lines = [`🎶 ${work.title}`, ""];
  if (video?.niconicoUrl) lines.push(`ニコニコ: ${video.niconicoUrl}`);
  if (video?.youtubeUrl) lines.push(`YouTube: ${video.youtubeUrl}`);
  if (video?.bilibiliUrl) lines.push(`bilibili: ${video.bilibiliUrl}`);
  lines.push(`Website: ${SITE_URL}${getWorkPath(work)}`);
  return lines.join("\n");
};

// Event（イベント）の紹介文を組み立てる。buildWorkShareText と同様
export const buildEventShareText = (event: Event): string => {
  const mixcloudLink =
    event.type === "performance"
      ? (event as Performance).mixcloudLink
      : undefined;
  const lines = [`🎶 ${event.title}`, ""];
  if (mixcloudLink) lines.push(`Mixcloud: ${mixcloudLink.url}`);
  lines.push(`Website: ${SITE_URL}${getEventPath(event)}`);
  return lines.join("\n");
};

// サイト上の「X に共有」ボタン用。閲覧者向けの「発見した」案内文を先頭に
// 付ける（先生はこれを消して投稿用の素材を足して使う想定。スケジュール
// メモ参照）
export const buildWorkDiscoveryShareText = (work: Work): string =>
  `🎈 竹馬あお Website で${WORK_TYPE_DISCOVERY_LABEL[work.type]}を発見した！\n\n${buildWorkShareText(work)}`;

export const buildEventDiscoveryShareText = (event: Event): string =>
  `🎈 竹馬あお Website でイベントを発見した！\n\n${buildEventShareText(event)}`;

const buildScheduleItemText = (scheduleItem: ScheduleItem) => {
  const dateText = toLocaleDateString(scheduleItem.date);
  const locationLine =
    scheduleItem.kind === "event" ? `\n📍 ${scheduleItem.item.location}` : "";
  return `${scheduleItem.item.title}\n📅 ${dateText}${locationLine}`;
};

// 週次の Discord 通知用に、今後の予定一覧を1つのテキストにまとめる
// （Discord 上で先生がコピペして使う前提のため、文字数上限は設けない）
export const buildScheduleShareText = (schedule: ScheduleItem[]): string => {
  const header = "🎈 竹馬あお 今後の予定一覧";
  const itemTexts = schedule.map(buildScheduleItemText);
  return [header, ...itemTexts].join("\n\n");
};

// X の投稿画面を開く intent リンクを組み立てる
export const buildXIntentUrl = (text: string): string =>
  `https://x.com/intent/post?text=${encodeURIComponent(text)}`;
