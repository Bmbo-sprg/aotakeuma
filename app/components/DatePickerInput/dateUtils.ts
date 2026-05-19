const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export function parseDate(s: string): Date | undefined {
  if (!DATE_RE.test(s)) return undefined;
  const d = new Date(s);
  return isNaN(d.getTime()) ? undefined : d;
}

export function formatDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${dd}`;
}

// 数字のみ抽出し、4桁・6桁の区切りに「-」を自動挿入する
export function applyMask(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 8);
  if (digits.length <= 4) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 4)}-${digits.slice(4)}`;
  return `${digits.slice(0, 4)}-${digits.slice(4, 6)}-${digits.slice(6)}`;
}

export { DATE_RE };
