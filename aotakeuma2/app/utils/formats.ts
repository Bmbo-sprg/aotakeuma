export const toLocaleDateString = (date: Date) => {
  return date.toLocaleDateString("ja-JP", {
    dateStyle: "short",
  });
};
