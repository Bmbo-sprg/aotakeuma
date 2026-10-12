import { describe, expect, it } from "vitest";
import type { Event, Work } from "~/types";
import { buildFutureSchedule } from "./schedule";

const work = (id: string, releaseDate: string): Work => ({
  type: "music",
  id,
  title: id,
  description: "",
  tags: [],
  credits: [],
  releaseDate: new Date(releaseDate),
});

const event = (id: string, date: string): Event => ({
  type: "performance",
  id,
  title: id,
  description: "",
  tags: [],
  date: new Date(date),
  location: "",
});

describe("buildFutureSchedule", () => {
  const now = new Date("2026-04-26T00:00:00+09:00");

  it("過去の Work / Event を除外する", () => {
    const result = buildFutureSchedule(
      [work("past_work", "2026-04-25")],
      [event("past_event", "2026-04-25")],
      now
    );
    expect(result).toEqual([]);
  });

  it("当日は含める", () => {
    const result = buildFutureSchedule(
      [work("today_work", "2026-04-26")],
      [],
      now
    );
    expect(result).toHaveLength(1);
  });

  it("未来の Work と Event を日付の昇順でまとめる", () => {
    const result = buildFutureSchedule(
      [work("far_work", "2026-05-10")],
      [event("near_event", "2026-04-27")],
      now
    );
    expect(result.map((item) => item.kind)).toEqual(["event", "work"]);
    expect(result.map((item) => item.item.id)).toEqual([
      "near_event",
      "far_work",
    ]);
  });
});
