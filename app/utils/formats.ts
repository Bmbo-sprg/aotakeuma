export const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 255, g: 255, b: 255 };
};

export const toLocaleDateString = (date: Date) => {
  return date.toLocaleDateString("ja-JP", {
    dateStyle: "short",
    timeZone: "Asia/Tokyo",
  });
};

export const toLocaleString = (date: Date) => {
  return date.toLocaleString("ja-JP", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "Asia/Tokyo",
  });
};

// date を JST の日付（時刻は落とす）に変換してから now との差を日数で返す。
// 実行環境のタイムゾーンに依存しないよう、Intl の timeZone を明示指定する。
const toJstDateOnly = (date: Date) => {
  const [year, month, day] = date
    .toLocaleDateString("en-CA", { timeZone: "Asia/Tokyo" })
    .split("-")
    .map(Number);
  return Date.UTC(year, month - 1, day);
};

export const daysUntil = (date: Date, now: Date) => {
  const msPerDay = 24 * 60 * 60 * 1000;
  return Math.round((toJstDateOnly(date) - toJstDateOnly(now)) / msPerDay);
};
