// X（旧Twitter）の重み付き文字数カウント: 日本語などの全角文字は2、
// URL は長さに関わらず一律23として数える（簡易版。詳細な仕様は投稿時に
// 公式ドキュメントで再確認すること）
const URL_PATTERN = /https?:\/\/\S+/g;
const URL_WEIGHT = 23;

const isWideChar = (char: string) => /[^\x00-\xff]/.test(char);

export const countWeightedLength = (text: string): number => {
  const urls = text.match(URL_PATTERN) ?? [];
  const textWithoutUrls = text.replace(URL_PATTERN, "");
  const charWeight = [...textWithoutUrls].reduce(
    (sum, char) => sum + (isWideChar(char) ? 2 : 1),
    0
  );
  return charWeight + urls.length * URL_WEIGHT;
};
