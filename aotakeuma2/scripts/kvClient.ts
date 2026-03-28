/**
 * Wrapper for wrangler kv commands
 * Uses execSync to interact with Cloudflare KV
 */

import { execSync } from "child_process";
import type { DownloadKeyRecord } from "../workers/download/types";

const KV_KEY_PREFIX = "downloadKey:";
const DOWNLOAD_KEY_BODY_LENGTH = 8;

function normalizeDownloadKey(value: string): string {
  return value
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, DOWNLOAD_KEY_BODY_LENGTH);
}

/**
 * Execute a wrangler kv command and handle errors gracefully
 */
function executeWranglerCommand(args: string[]): string {
  try {
    const cmd = `npx wrangler kv key ${args.join(" ")}`;
    return execSync(cmd, {
      encoding: "utf-8",
      stdio: ["pipe", "pipe", "pipe"],
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `Wrangler KV command failed: ${error.message}\n` +
          `Make sure you're authenticated with 'wrangler login' (for --remote) ` +
          `and have a valid wrangler.jsonc configuration.`
      );
    }
    throw error;
  }
}

/**
 * Format the KV key name
 */
function formatKvKey(downloadKey: string): string {
  const normalizedKey = normalizeDownloadKey(downloadKey);
  if (!normalizedKey) {
    throw new Error("Download key is empty after normalization");
  }

  return `${KV_KEY_PREFIX}${normalizedKey}`;
}

/**
 * Get a download key record from KV
 */
export async function getKeyRecord(
  downloadKey: string,
  remote: boolean = false
): Promise<DownloadKeyRecord | null> {
  const kvKey = formatKvKey(downloadKey);
  const remoteFlag = remote ? "--remote" : "--local";

  try {
    const result = executeWranglerCommand([
      "get",
      "--binding=aotakeuma_keys",
      `"${kvKey}"`,
      remoteFlag,
      "--text",
    ]);

    if (!result || result.trim() === "") {
      return null;
    }

    return JSON.parse(result) as DownloadKeyRecord;
  } catch (error) {
    // Key not found is not an error state
    if (
      error instanceof Error &&
      (error.message.includes("not found") ||
        error.message.includes("No such key"))
    ) {
      return null;
    }
    throw error;
  }
}

/**
 * Put a download key record to KV
 */
export async function putKeyRecord(
  downloadKey: string,
  record: DownloadKeyRecord,
  remote: boolean = false
): Promise<void> {
  const kvKey = formatKvKey(downloadKey);
  const remoteFlag = remote ? "--remote" : "--local";
  const value = JSON.stringify(record);

  // Escape the value for shell
  const escapedValue = value.replace(/"/g, '\\"');

  executeWranglerCommand([
    "put",
    "--binding=aotakeuma_keys",
    `"${kvKey}"`,
    `"${escapedValue}"`,
    remoteFlag,
  ]);
}

/**
 * Delete a download key record from KV
 */
export async function deleteKeyRecord(
  downloadKey: string,
  remote: boolean = false
): Promise<void> {
  const kvKey = formatKvKey(downloadKey);
  const remoteFlag = remote ? "--remote" : "--local";

  executeWranglerCommand([
    "delete",
    "--binding=aotakeuma_keys",
    `"${kvKey}"`,
    remoteFlag,
    "--skip-confirmation",
  ]);
}

/**
 * List keys with optional prefix (for debugging)
 */
export async function listKeys(
  remote: boolean = false,
  prefix: string = KV_KEY_PREFIX
): Promise<string[]> {
  const remoteFlag = remote ? "--remote" : "--local";

  const result = executeWranglerCommand([
    "list",
    "--binding=aotakeuma_keys",
    `--prefix="${prefix}"`,
    remoteFlag,
  ]);

  // Parse the output (typically JSON array of key names)
  try {
    const parsed = JSON.parse(result);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    // Fallback: try to extract key names from text output
    return result
      .split("\n")
      .filter((line) => line.includes(KV_KEY_PREFIX))
      .map((line) => line.trim());
  }
}
