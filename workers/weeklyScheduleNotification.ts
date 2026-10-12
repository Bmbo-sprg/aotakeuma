import type { Event, Work } from "../app/types";
import { buildFutureSchedule } from "../app/utils/schedule";
import {
  buildScheduleShareText,
  buildXIntentUrl,
} from "../app/utils/shareText";

export const buildWeeklyScheduleDiscordPayload = (
  works: Work[],
  events: Event[],
  now: Date
): { content: string } | null => {
  const schedule = buildFutureSchedule(works, events, now);
  if (schedule.length === 0) return null;

  const text = buildScheduleShareText(schedule);
  const intentUrl = buildXIntentUrl(text);
  return { content: `\`\`\`\n${text}\n\`\`\`\n${intentUrl}` };
};

// 週次で、今後の予定一覧を Discord の webhook に通知する。予定が0件の
// 週は通知しない。fetch は Workers のグローバル fetch を既定で使うが、
// テストから差し替えられるよう引数で受け取る
export const sendWeeklyScheduleNotification = async (
  works: Work[],
  events: Event[],
  env: Env,
  fetchImpl: typeof fetch = fetch
): Promise<void> => {
  const payload = buildWeeklyScheduleDiscordPayload(works, events, new Date());
  if (!payload) return;

  await fetchImpl(env.DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
};
