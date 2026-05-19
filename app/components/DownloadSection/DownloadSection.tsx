import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { DownloadKey } from "../../utils/DownloadKey";

const DEBOUNCE_MS = 700;

type VerifyStatus = "idle" | "validating" | "verified" | "invalid";
export type ValidateApiResponse =
  | {
      ok: true;
      key: string;
      productId: string;
      downloadUrl: string;
    }
  | {
      ok: false;
      reason: string;
      message: string;
    };

export type ValidateKeyFn = (
  downloadKey: string,
  productId: string
) => Promise<ValidateApiResponse>;

const defaultValidateKey: ValidateKeyFn = async (downloadKey, productId) => {
  const response = await fetch("/api/validate-key", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ downloadKey, productId }),
  });
  return response.json() as Promise<ValidateApiResponse>;
};

type DownloadSectionProps = {
  productId: string;
  title?: string;
  description?: string;
  validateKey?: ValidateKeyFn;
};

export function DownloadSection({
  productId,
  title = "ダウンロード",
  description = "頒布物裏面に記載されたダウンロードコードをここに入力してください。",
  validateKey = defaultValidateKey,
}: DownloadSectionProps) {
  const [downloadKey, setDownloadKey] = useState("");
  const [verifyStatus, setVerifyStatus] = useState<VerifyStatus>("idle");
  const [verifyMessage, setVerifyMessage] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");

  // レスポンス順逆転による古い結果の上書きを防ぐ
  const requestIdRef = useRef(0);
  const debounceTimeoutRef = useRef<number | null>(null);

  const validateDownloadKey = async (displayKey: string, requestId: number) => {
    try {
      const data = await validateKey(displayKey, productId);
      if (requestIdRef.current !== requestId) {
        return;
      }

      if (data.ok) {
        setVerifyStatus("verified");
        setVerifyMessage("コードを確認しました");
        setDownloadUrl(data.downloadUrl);
        return;
      }

      setVerifyStatus("invalid");
      if (data.message) {
        setVerifyMessage(data.message);
      } else {
        setVerifyMessage("コードの検証に失敗しました。");
      }
      setDownloadUrl("");
    } catch {
      if (requestIdRef.current !== requestId) {
        return;
      }
      setVerifyStatus("invalid");
      setVerifyMessage(
        "通信エラーが発生しました。時間をおいて再試行してください。"
      );
      setDownloadUrl("");
    }
  };

  const validateWithDebouncing = (displayKey: string) => {
    if (debounceTimeoutRef.current !== null) {
      window.clearTimeout(debounceTimeoutRef.current);
    }

    const requestId = requestIdRef.current + 1;
    requestIdRef.current = requestId;
    debounceTimeoutRef.current = window.setTimeout(() => {
      void validateDownloadKey(displayKey, requestId);
    }, DEBOUNCE_MS);
  };

  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current !== null) {
        window.clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, []);

  const onChangeDownloadKey = (event: ChangeEvent<HTMLInputElement>) => {
    const key = DownloadKey.from(event.target.value);
    const displayKey = key.toString();

    if (key.isComplete()) {
      setVerifyStatus("validating");
      setVerifyMessage("");
      setDownloadUrl("");
      validateWithDebouncing(displayKey);
    } else {
      requestIdRef.current += 1;
      if (debounceTimeoutRef.current !== null) {
        window.clearTimeout(debounceTimeoutRef.current);
      }
      setVerifyStatus("idle");
      setVerifyMessage("");
      setDownloadUrl("");
    }

    setDownloadKey(displayKey);
  };

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (verifyStatus !== "verified" || !downloadUrl) {
      return;
    }
    window.location.assign(downloadUrl);
  };

  const inputId = `downloadKey-${productId}`;
  const statusId = `${inputId}-status`;

  return (
    <section className="card space-y-4">
      <div className="space-y-1">
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        <p className="text-sm text-slate-600">{description}</p>
      </div>

      <form className="space-y-2" onSubmit={onSubmit}>
        <label
          htmlFor={inputId}
          className="text-sm font-semibold text-slate-900"
        >
          ダウンロードコード
        </label>
        <div className="flex flex-col gap-2 md:flex-row">
          <input
            type="text"
            id={inputId}
            name="downloadKey"
            value={downloadKey}
            onChange={onChangeDownloadKey}
            className={[
              "min-w-0 flex-1 px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-400",
              "focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20",
              "transition-all duration-150",
            ].join(" ")}
            placeholder="XXXX-XXXX"
            autoComplete="off"
            inputMode="text"
            aria-describedby={statusId}
          />
          <button
            type="submit"
            disabled={verifyStatus !== "verified" || !downloadUrl}
            className="w-full md:w-auto shrink-0 px-6 py-2 rounded-lg bg-primary text-primary-950 font-semibold enabled:hover:shadow-lg enabled:hover:scale-101 enabled:active:scale-99 transition-all duration-150 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            ダウンロード
          </button>
        </div>

        <div id={statusId} className="min-h-5">
          {verifyStatus === "validating" ? (
            <p className="text-sm text-slate-600">コードを確認中...</p>
          ) : null}

          {verifyStatus === "verified" ? (
            <p className="text-sm font-semibold text-green-700">
              ✓ {verifyMessage}
            </p>
          ) : null}

          {verifyStatus === "invalid" ? (
            <p className="text-sm font-semibold text-red-700">
              {verifyMessage}
            </p>
          ) : null}
        </div>
      </form>
    </section>
  );
}
