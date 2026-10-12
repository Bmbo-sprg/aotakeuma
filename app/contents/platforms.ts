export const platforms = [
  /* 公式サイト・汎用リンク
  ある場合は最優先で貼る。イベント詳細ページなど、専用プラットフォームが
  ない場合の汎用リンクとしても使う（旧 linkcore, twipla, twinvite はここに統合） */
  "website",
  /* 音楽配信系
  TuneCore を使った場合: 以下の3件を全て含める
  それ以外の場合: あるものだけ含める */
  "spotify",
  "apple_music",
  "youtube_music",
  /* 音楽販売系 */
  "bandcamp",
  "booth",
  /* 動画系 */
  "niconico",
  "youtube",
  "bilibili",
  /* ゲーム系 */
  "steam",
  /* イラスト系 */
  "pixiv",
  "skeb",
  "fanbox",
  /* 文字書き系
  マジで佐薙概念にしか使ってないけど拡張予定 */
  "note",
  /* イベント系 */
  "mixcloud",
  /* SNS系
  脱Xの思想に基づき、必要最低限に留めたい */
  "twitter",
] as const;
