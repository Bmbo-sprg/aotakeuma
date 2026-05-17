import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { getKeyRecord, putKeyRecord, listKeys } from "../kvClient";
import type { DownloadKeyRecord } from "../../workers/api/types";

const KV_KEY_PREFIX = "downloadKey:";
const PORT = 3333;

const app = new Hono();

// 全キーのレコードを取得
async function fetchAllRecords(
  remote: boolean
): Promise<{ key: string; record: DownloadKeyRecord }[]> {
  const keys = await listKeys(remote);
  const results = await Promise.all(
    keys.map(async ({ name }) => {
      const downloadKey = name.replace(KV_KEY_PREFIX, "");
      const record = await getKeyRecord(downloadKey, remote);
      return record ? { key: downloadKey, record } : null;
    })
  );
  return results.filter(
    (r): r is { key: string; record: DownloadKeyRecord } => r !== null
  );
}

// API: 全キー一覧
app.get("/api/keys", async (c) => {
  const remote = c.req.query("remote") === "true";
  const entries = await fetchAllRecords(remote);
  return c.json(entries);
});

// API: 一括更新
app.post("/api/keys/bulk-update", async (c) => {
  const remote = c.req.query("remote") === "true";
  const { maxUseCount } = await c.req.json<{ maxUseCount?: number }>();
  if (typeof maxUseCount !== "number") {
    return c.json({ error: "maxUseCount must be a number" }, 400);
  }

  const entries = await fetchAllRecords(remote);
  await Promise.all(
    entries.map(({ key, record }) =>
      putKeyRecord(key, { ...record, maxUseCount }, remote)
    )
  );
  return c.json({ updated: entries.length });
});

// UI: HTML ダッシュボード
app.get("/", (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <title>Key Dashboard</title>
  <style>
    body { font-family: monospace; padding: 2rem; background: #111; color: #eee; }
    h1 { color: #7cf; }
    .stats { display: flex; gap: 2rem; margin: 1rem 0 2rem; }
    .stat { background: #222; padding: 1rem 1.5rem; border-radius: 6px; }
    .stat-num { font-size: 2rem; font-weight: bold; color: #7cf; }
    .controls { margin-bottom: 1rem; display: flex; gap: 1rem; align-items: center; }
    label { color: #aaa; }
    button { background: #336; color: #eee; border: none; padding: 0.4rem 1rem; border-radius: 4px; cursor: pointer; }
    button:hover { background: #448; }
    button.danger { background: #633; }
    button.danger:hover { background: #844; }
    input[type=number] { width: 5rem; padding: 0.3rem; background: #222; color: #eee; border: 1px solid #444; border-radius: 4px; }
    table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
    th { background: #222; text-align: left; padding: 0.5rem 0.75rem; color: #aaa; }
    td { padding: 0.5rem 0.75rem; border-bottom: 1px solid #222; }
    tr:hover td { background: #1a1a1a; }
    .used { color: #fa6; }
    .exhausted { color: #f66; }
    .unused { color: #6f6; }
    .inactive { color: #888; }
    .bar { height: 6px; background: #333; border-radius: 3px; min-width: 80px; }
    .bar-fill { height: 100%; border-radius: 3px; background: #7cf; }
    .bar-fill.full { background: #f66; }
    #status { margin: 1rem 0; color: #6f6; min-height: 1.2rem; }
  </style>
</head>
<body>
  <h1>Key Dashboard</h1>
  <div class="controls">
    <label><input type="checkbox" id="remote"> production KV</label>
    <button onclick="load()">読み込む</button>
    <span style="color:#aaa; margin-left:1rem;">一括更新:</span>
    <label>maxUseCount =
      <input type="number" id="bulkMax" value="100" min="1">
    </label>
    <button class="danger" onclick="bulkUpdate()">全キーに適用</button>
  </div>
  <div id="status"></div>
  <div class="stats" id="stats"></div>
  <table>
    <thead>
      <tr>
        <th>Key</th><th>Product</th><th>Status</th>
        <th>Uses / Max</th><th></th><th>Expires</th><th>Logs</th>
      </tr>
    </thead>
    <tbody id="tbody"></tbody>
  </table>
  <script>
    let data = [];

    async function load() {
      const remote = document.getElementById('remote').checked;
      setStatus('読み込み中...');
      const res = await fetch('/api/keys?remote=' + remote);
      data = await res.json();
      render();
      setStatus('');
    }

    async function bulkUpdate() {
      const remote = document.getElementById('remote').checked;
      const maxUseCount = Number(document.getElementById('bulkMax').value);
      if (!confirm(\`全 \${data.length} キーの maxUseCount を \${maxUseCount} に変更しますか？\${remote ? '\\n⚠️ production KV が対象です' : ''}\`)) return;
      setStatus('更新中...');
      const res = await fetch('/api/keys/bulk-update?remote=' + remote, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ maxUseCount }),
      });
      const { updated } = await res.json();
      setStatus(\`✓ \${updated} 件を更新しました\`);
      load();
    }

    function render() {
      const now = Date.now();
      let used = 0, unused = 0, exhausted = 0, expired = 0;

      const rows = data.map(({ key, record: r }) => {
        const isExpired = now > new Date(r.expiresAt).getTime();
        const isExhausted = r.useCount >= r.maxUseCount;
        if (isExpired) expired++;
        else if (isExhausted) exhausted++;
        else if (r.useCount > 0) used++;
        else unused++;

        const statusClass = !r.isActive ? 'inactive' : isExpired || isExhausted ? 'exhausted' : r.useCount > 0 ? 'used' : 'unused';
        const statusText = !r.isActive ? '✗ Inactive' : isExpired ? '期限切れ' : isExhausted ? '上限到達' : r.useCount > 0 ? '使用済' : '未使用';
        const pct = Math.min(100, Math.round(r.useCount / r.maxUseCount * 100));
        const expStr = new Date(r.expiresAt).toLocaleDateString('ja-JP');

        return \`<tr>
          <td>\${fmt(key)}</td>
          <td>\${r.productId}</td>
          <td class="\${statusClass}">\${statusText}</td>
          <td>\${r.useCount} / \${r.maxUseCount}</td>
          <td><div class="bar"><div class="bar-fill \${pct>=100?'full':''}" style="width:\${pct}%"></div></div></td>
          <td>\${expStr}</td>
          <td>\${r.usageLogs.length}</td>
        </tr>\`;
      }).join('');

      document.getElementById('tbody').innerHTML = rows;
      document.getElementById('stats').innerHTML = \`
        <div class="stat"><div class="stat-num">\${data.length}</div>total</div>
        <div class="stat"><div class="stat-num unused">\${unused}</div>未使用</div>
        <div class="stat"><div class="stat-num used">\${used}</div>使用済</div>
        <div class="stat"><div class="stat-num exhausted">\${exhausted}</div>上限/期限</div>
      \`;
    }

    function fmt(key) {
      return key.length === 8 ? key.slice(0,4) + '-' + key.slice(4) : key;
    }

    function setStatus(msg) {
      document.getElementById('status').textContent = msg;
    }

    load();
  </script>
</body>
</html>`);
});

serve({ fetch: app.fetch, port: PORT }, () => {
  console.log(`Dashboard running at http://localhost:${PORT}`);
});
