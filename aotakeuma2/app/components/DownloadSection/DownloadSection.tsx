import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { Controller, useForm } from "react-hook-form";
import { DownloadKey } from "../../utils/DownloadKey";

const DEBOUNCE_MS = 700;

type VerifyStatus = "idle" | "validating" | "verified" | "invalid";
type ValidateApiResponse =
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

type DownloadSectionProps = {
  productId: string;
  title?: string;
  description?: string;
};

export function DownloadSection({
  productId,
  title = "特典ダウンロード",
  description = "ダウンロードキーを入力して特典を受け取れます。",
}: DownloadSectionProps) {
  const { control, handleSubmit, setValue } = useForm<{ downloadKey: string }>({
    defaultValues: {
      downloadKey: "",
    },
  });

  const [verifyStatus, setVerifyStatus] = useState<VerifyStatus>("idle");
  const [verifyMessage, setVerifyMessage] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");

  // レスポンス順逆転による古い結果の上書きを防ぐ
  const requestIdRef = useRef(0);
  const debounceTimeoutRef = useRef<number | null>(null);

  const validateDownloadKey = async (displayKey: string, requestId: number) => {
    try {
      const response = await fetch("/api/validate-key", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          downloadKey: displayKey,
          productId,
        }),
      });

      const data = (await response.json()) as ValidateApiResponse;
      if (requestIdRef.current !== requestId) {
        return;
      }

      if (response.ok && data.ok) {
        setVerifyStatus("verified");
        setVerifyMessage("キーを確認しました");
        setDownloadUrl(data.downloadUrl);
        return;
      }

      setVerifyStatus("invalid");
      if (!data.ok && data.message) {
        setVerifyMessage(data.message);
      } else {
        setVerifyMessage("キーの検証に失敗しました。");
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

    setValue("downloadKey", displayKey, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: false,
    });
  };

  const onSubmit = handleSubmit(() => {
    if (verifyStatus !== "verified" || !downloadUrl) {
      return;
    }
    window.location.assign(downloadUrl);
  });

  const inputId = `downloadKey-${productId}`;
  const statusId = `${inputId}-status`;

  return (
    <section className="card space-y-4">
      <div className="space-y-1">
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        <p className="text-sm text-slate-600">{description}</p>
      </div>

      <form className="space-y-4" onSubmit={onSubmit}>
        <div className="space-y-2">
          <label
            htmlFor={inputId}
            className="text-sm font-semibold text-slate-900"
          >
            ダウンロードキー
          </label>
          <Controller
            name="downloadKey"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                id={inputId}
                name={field.name}
                value={field.value}
                onBlur={field.onBlur}
                ref={field.ref}
                onChange={onChangeDownloadKey}
                className={[
                  "w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-400",
                  "focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20",
                  "transition-all duration-150",
                ].join(" ")}
                placeholder="DLキーを入力してください"
                autoComplete="off"
                inputMode="text"
                aria-describedby={statusId}
              />
            )}
          />

          <div id={statusId} className="min-h-6">
            {verifyStatus === "validating" ? (
              <p className="text-sm text-slate-600">キーを確認中...</p>
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
        </div>

        <button
          type="submit"
          disabled={verifyStatus !== "verified" || !downloadUrl}
          className="w-full px-6 py-3 rounded-lg bg-linear-to-r from-primary to-secondary text-primary-950 font-semibold enabled:hover:shadow-lg enabled:hover:scale-101 enabled:active:scale-99 transition-all duration-150 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          ダウンロード
        </button>
      </form>
    </section>
  );
}
