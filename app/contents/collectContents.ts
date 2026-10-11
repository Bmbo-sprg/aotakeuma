// import.meta.glob で読み込んだモジュール群から、すべての値エクスポート（単一オブジェクトまたは配列）を
// 1 本の配列にまとめる。ファイルを置くだけで index.ts への手動登録が不要になる。
export function collectContents<T>(
  modules: Record<string, Record<string, unknown>>
): T[] {
  return Object.values(modules).flatMap((mod) =>
    Object.values(mod).flatMap((value) =>
      Array.isArray(value) ? value : [value]
    )
  ) as T[];
}
