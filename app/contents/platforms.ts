export const platforms = [
  /* 公式サイト
  ある場合は最優先で貼る */
  "website",
  /* 音楽配信系
  TuneCore を使った場合: 以下の4件を全て含める
  それ以外の場合: あるものだけ含める */
  "spotify",
  "apple_music",
  "youtube_music",
  "linkcore",
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
  "twipla",
  "twinvite",
  "mixcloud",
  /* SNS系
  脱Xの思想に基づき、必要最低限に留めたい */
  "twitter",
] as const;
