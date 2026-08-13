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
