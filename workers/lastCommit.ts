const GITHUB_COMMITS_API =
  "https://api.github.com/repos/Bmbo-sprg/aotakeuma/commits/main";
const CACHE_TTL_SECONDS = 60 * 60 * 24; // 24時間

export async function fetchLastCommitAt(): Promise<string | null> {
  const cache = await caches.open("github-last-commit");
  const cached = await cache.match(GITHUB_COMMITS_API);
  if (cached) {
    return cached.text();
  }

  try {
    const res = await fetch(GITHUB_COMMITS_API, {
      headers: { "User-Agent": "aotakeuma-worker" },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as {
      commit: { committer: { date: string } };
    };
    const date = data.commit.committer.date;

    const cacheRes = new Response(date, {
      headers: { "Cache-Control": `max-age=${CACHE_TTL_SECONDS}` },
    });
    await cache.put(GITHUB_COMMITS_API, cacheRes);
    return date;
  } catch {
    return null;
  }
}
