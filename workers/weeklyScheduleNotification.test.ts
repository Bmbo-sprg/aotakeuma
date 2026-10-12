import { describe, expect, it, vi } from "vitest";
import type { Event, Work } from "../app/types";
import {
  buildWeeklyScheduleDiscordPayload,
  sendWeeklyScheduleNotification,
} from "./weeklyScheduleNotification";

const futureWork: Work = {
  type: "music",
  id: "future_music",
  title: "未来の新曲",
  description: "",
  tags: [],
  credits: [],
  releaseDate: new Date("2099-01-01"),
};

const futureEvent: Event = {
  type: "performance",
  id: "future_event",
  title: "未来のイベント",
  description: "",
  tags: [],
  date: new Date("2099-01-02"),
  location: "どこか",
};

describe("buildWeeklyScheduleDiscordPayload", () => {
  it("今後の予定があれば、コードブロックと intent リンクを含む content を返す", () => {
    const payload = buildWeeklyScheduleDiscordPayload(
      [futureWork],
      [futureEvent],
      new Date("2026-01-01")
    );
    expect(payload).not.toBeNull();
    expect(payload?.content).toContain("```");
    expect(payload?.content).toContain("未来の新曲");
    expect(payload?.content).toContain("https://x.com/intent/post?text=");
  });

  it("今後の予定がなければ null を返す（通知しない）", () => {
    const payload = buildWeeklyScheduleDiscordPayload(
      [],
      [],
      new Date("2026-01-01")
    );
    expect(payload).toBeNull();
  });
});

describe("sendWeeklyScheduleNotification", () => {
  it("予定があれば webhook へ POST する", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(null));
    await sendWeeklyScheduleNotification(
      [futureWork],
      [futureEvent],
      { DISCORD_WEBHOOK_URL: "https://discord.example.com/webhook" } as Env,
      fetchMock
    );
    expect(fetchMock).toHaveBeenCalledWith(
      "https://discord.example.com/webhook",
      expect.objectContaining({ method: "POST" })
    );
  });

  it("予定がなければ webhook を呼ばない", async () => {
    const fetchMock = vi.fn();
    await sendWeeklyScheduleNotification(
      [],
      [],
      { DISCORD_WEBHOOK_URL: "https://discord.example.com/webhook" } as Env,
      fetchMock
    );
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
