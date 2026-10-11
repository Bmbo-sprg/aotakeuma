import type { Game } from "~/types";
import { collectContents } from "../../collectContents";

// ファイルを置くだけで自動登録される（手動の import/配列登録は不要）
const modules = import.meta.glob<Record<string, unknown>>(
  ["./*.ts", "!./index.ts"],
  { eager: true }
);

export const games: Game[] = collectContents<Game>(modules);
