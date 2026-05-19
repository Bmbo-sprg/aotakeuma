import { useRef, useState } from "react";

const CHUNK_SIZE = 50 * 1024 * 1024; // 50MB — Workers の 100MB 制限より安全側

type UploadState =
  | { status: "idle" }
  | { status: "uploading"; progress: number; partsDone: number; total: number }
  | { status: "done"; key: string; size: number }
  | { status: "error"; message: string };

export default function Upload() {
  const fileRef = useRef<HTMLInputElement>(null);
  const keyRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<UploadState>({ status: "idle" });

  const handleUpload = async () => {
    const file = fileRef.current?.files?.[0];
    if (!file) return;
    const key = keyRef.current?.value.trim() || file.name;

    const totalParts = Math.ceil(file.size / CHUNK_SIZE);
    setState({
      status: "uploading",
      progress: 0,
      partsDone: 0,
      total: totalParts,
    });

    let uploadId = "";
    let uploadKey = "";
    try {
      // 1. initiate
      const initRes = await fetch("/api/admin/upload/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key }),
      });
      if (!initRes.ok)
        throw new Error(`Initiate failed: ${await initRes.text()}`);
      ({ uploadId, key: uploadKey } = await initRes.json<{
        uploadId: string;
        key: string;
      }>());

      // 2. upload parts
      const uploadedParts: { partNumber: number; etag: string }[] = [];
      for (let i = 0; i < totalParts; i++) {
        const chunk = file.slice(i * CHUNK_SIZE, (i + 1) * CHUNK_SIZE);
        const params = new URLSearchParams({
          key: uploadKey,
          uploadId,
          partNumber: String(i + 1),
        });
        const partRes = await fetch(`/api/admin/upload/part?${params}`, {
          method: "PUT",
          body: chunk,
        });
        if (!partRes.ok)
          throw new Error(`Part ${i + 1} failed: ${await partRes.text()}`);
        const { partNumber, etag } = await partRes.json<{
          partNumber: number;
          etag: string;
        }>();
        uploadedParts.push({ partNumber, etag });
        setState({
          status: "uploading",
          progress: Math.round(((i + 1) / totalParts) * 100),
          partsDone: i + 1,
          total: totalParts,
        });
      }

      // 3. complete
      const completeRes = await fetch("/api/admin/upload/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          key: uploadKey,
          uploadId,
          parts: uploadedParts,
        }),
      });
      if (!completeRes.ok)
        throw new Error(`Complete failed: ${await completeRes.text()}`);
      const { key: doneKey, size } = await completeRes.json<{
        key: string;
        size: number;
      }>();
      setState({ status: "done", key: doneKey, size });
    } catch (err) {
      // abort if we have an uploadId
      if (uploadId && uploadKey) {
        await fetch("/api/admin/upload/abort", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ key: uploadKey, uploadId }),
        }).catch(() => {});
      }
      setState({ status: "error", message: String(err) });
    }
  };

  const uploading = state.status === "uploading";

  return (
    <div className="max-w-lg">
      <h1 className="text-2xl font-bold text-blue-400 mb-6">R2 アップロード</h1>
      <div className="flex flex-col gap-4">
        <label className="flex flex-col gap-1">
          <span className="text-gray-400 text-sm">ファイル</span>
          <input
            ref={fileRef}
            type="file"
            disabled={uploading}
            className="text-white file:bg-gray-700 file:border-0 file:text-white file:px-3 file:py-1 file:rounded file:mr-3 disabled:opacity-50"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-gray-400 text-sm">
            R2 キー（省略時はファイル名）
          </span>
          <input
            ref={keyRef}
            type="text"
            disabled={uploading}
            placeholder="例: yohkoh.zip"
            className="bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white placeholder-gray-600 disabled:opacity-50"
          />
        </label>
        <button
          onClick={handleUpload}
          disabled={uploading}
          className="bg-blue-700 hover:bg-blue-600 disabled:opacity-50 text-white px-4 py-2 rounded mt-2"
        >
          {uploading ? "アップロード中..." : "アップロード"}
        </button>

        {state.status === "uploading" && (
          <div className="flex flex-col gap-2">
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${state.progress}%` }}
              />
            </div>
            <p className="text-gray-400 text-sm">
              {state.partsDone} / {state.total} パート完了（{state.progress}%）
            </p>
          </div>
        )}

        {state.status === "done" && (
          <div className="mt-2 p-4 rounded text-sm bg-green-900 text-green-300">
            完了: {state.key}（{(state.size / 1024 / 1024).toFixed(1)} MB）
          </div>
        )}

        {state.status === "error" && (
          <div className="mt-2 p-4 rounded text-sm bg-red-900 text-red-300">
            エラー: {state.message}
          </div>
        )}
      </div>
    </div>
  );
}
