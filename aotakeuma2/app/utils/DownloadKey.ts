const DOWNLOAD_KEY_BODY_LENGTH = 8;
const DOWNLOAD_KEY_GROUP_LENGTH = 4;

const toHalfWidth = (value: string): string => {
  return value.replace(/[Ａ-Ｚａ-ｚ０-９ーあいうえお]/g, (s) => {
    switch (s) {
      case "ー":
        return "-";
      case "あ":
        return "a";
      case "い":
        return "i";
      case "う":
        return "u";
      case "え":
        return "e";
      case "お":
        return "o";
      default:
        return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
    }
  });
};

// ダウンロードキーの同値類を定義
const normalizeKeyBody = (value: string): string => {
  return toHalfWidth(value)
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, DOWNLOAD_KEY_BODY_LENGTH);
};

export class DownloadKey {
  private constructor(private readonly body: string) {}

  static from(value: string): DownloadKey {
    return new DownloadKey(normalizeKeyBody(value));
  }

  toString(): string {
    if (this.body.length <= DOWNLOAD_KEY_GROUP_LENGTH) {
      return this.body;
    }

    return `${this.body.slice(0, DOWNLOAD_KEY_GROUP_LENGTH)}-${this.body.slice(
      DOWNLOAD_KEY_GROUP_LENGTH
    )}`;
  }

  isComplete(): boolean {
    return this.body.length === DOWNLOAD_KEY_BODY_LENGTH;
  }
}
