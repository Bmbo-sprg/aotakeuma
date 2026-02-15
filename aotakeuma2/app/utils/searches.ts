export const normalizeText = (value: string) => value.trim().toLowerCase();

export const toDate = (value: string | null) => {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
};

export const toDateString = (date: Date | null) => {
  if (!date) return "";
  return date.toISOString().slice(0, 10);
};
