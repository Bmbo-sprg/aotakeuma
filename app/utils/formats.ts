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
