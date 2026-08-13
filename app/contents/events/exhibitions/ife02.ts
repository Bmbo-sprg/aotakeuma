import { binarography } from "../../works/albums/binarography";
import { syngularity } from "../../works/albums/syngularity";
import type { Exhibition } from "~/types";

export const ife02: Exhibition = {
  type: "exhibition",
  id: "ife02",
  title: "偶像大师同人ONLY F@N EXPO-02- (IFE02)",
  description: `
サークル「スタジオ加速」として出展します。なんと中国・上海。
新譜として、学園アイドルマスターの〈まだ無い〉ユニットたちのファンメイド楽曲アルバム『Binarography.』を頒布します。
旧譜『SyngUlarity!!!』もあります。

我们社团「Studio 加速」参加在上海举办的偶像大师同人ONLY F@N EXPO-02- (IFE02)！
学园偶像大师二创曲集「Binarography.」是我们的自创曲集，共3曲，分别featuring「賀陽燐羽×花海咲季」「秦谷美鈴×藤田ことね」「月村手毬×倉本千奈」。
另外，我们的第一张二创曲集CD「SyngUlarity!!!」也会带到现场。
第一次与我的同人CD同航中国（本人在住日本），期待与大家见面！
`,
  tags: ["アイドル"],
  date: new Date("2026-08-23"),
  location: "上海 虹桥品汇（进口商品展示交易中心） D-6",
  links: [],
  catalog: [binarography, syngularity],
};
