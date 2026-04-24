/**
 * Seed initial download keys to Cloudflare KV
 * Usage: pnpm seed:keys [--count 10] [--product yohkoh] [--expiry 2027-03-29 23:59:59] [--uses 3] [--remote]
 */

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { generateRandomKey, formatKey } from "./generateKey";
import { putKeyRecord } from "./kvClient";
import type { DownloadKeyRecord } from "../workers/download/types";

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const GENERATED_KEYS_DIR = join(SCRIPT_DIR, "generated-keys");

interface CliArgs {
  count: number;
  product: string;
  expiry: string; // ISO 8601 or relative date
  uses: number;
  remote: boolean;
}

function parseArgs(): CliArgs {
  const args = process.argv.slice(2);
  const result: CliArgs = {
    count: 10,
    product: "yohkoh",
    expiry: "2027-03-29T23:59:59Z", // Will be set to JST equivalent
    uses: 3,
    remote: false,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg === "--count" && args[i + 1]) {
      result.count = parseInt(args[++i], 10);
    } else if (arg === "--product" && args[i + 1]) {
      result.product = args[++i];
    } else if (arg === "--expiry" && args[i + 1]) {
      // Parse expiry date - could be "2027-03-29" or "2027-03-29 23:59:59"
      let expiryStr = args[++i];
      // If next arg doesn't start with --, it's the time part
      if (i + 1 < args.length && !args[i + 1].startsWith("--")) {
        expiryStr += ` ${args[++i]}`;
      }
      result.expiry = parseExpiryDate(expiryStr);
    } else if (arg === "--uses" && args[i + 1]) {
      result.uses = parseInt(args[++i], 10);
    } else if (arg === "--remote") {
      result.remote = true;
    }
  }

  return result;
}

/**
 * Parse expiry date string
 * Handles formats like "2027-03-29" or "2027-03-29 23:59:59" (assumed to be JST)
 * Returns ISO 8601 UTC string
 */
function parseExpiryDate(dateStr: string): string {
  // Try to parse as YYYY-MM-DD or YYYY-MM-DD HH:MM:SS (JST assumed)
  const parts = dateStr.trim().split(" ");
  const datePart = parts[0];
  const timePart = parts[1] || "23:59:59";

  // Create date as if it's in JST, then convert to UTC
  // This is equivalent to: take the date/time as-is and subtract 9 hours
  const [year, month, day] = datePart.split("-").map(Number);
  const [hour, min, sec] = timePart.split(":").map(Number);

  // Create a UTC date object with adjusted time
  // If user says "2027-03-29 23:59:59 JST", we need to convert:
  // 2027-03-29 23:59:59 JST = 2027-03-29 14:59:59 UTC
  const date = new Date(Date.UTC(year, month - 1, day, hour - 9, min, sec));

  return date.toISOString();
}

function buildTimestampFileName(now: Date): string {
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");

  return `keys-${year}${month}${day}-${hour}${minute}${second}.txt`;
}

async function writeGeneratedKeysFile(
  args: CliArgs,
  generatedKeys: string[],
  successfulKeys: string[]
): Promise<string> {
  const now = new Date();
  const fileName = buildTimestampFileName(now);

  await mkdir(GENERATED_KEYS_DIR, { recursive: true });
  const outputPath = join(GENERATED_KEYS_DIR, fileName);

  const header = [
    `GeneratedAt: ${now.toISOString()}`,
    `ProductId: ${args.product}`,
    `Remote: ${args.remote ? "true" : "false"}`,
    `Expiry: ${args.expiry}`,
    `MaxUseCount: ${args.uses}`,
    `RequestedCount: ${args.count}`,
    `GeneratedCount: ${generatedKeys.length}`,
    `SeededCount: ${successfulKeys.length}`,
    "",
    "# Generated Keys (hyphen format)",
    ...generatedKeys.map((key) => formatKey(key)),
    "",
    "# Seeded Successfully (hyphen format)",
    ...successfulKeys.map((key) => formatKey(key)),
    "",
  ].join("\n");

  await writeFile(outputPath, header, "utf8");
  return outputPath;
}

async function seedKeys(args: CliArgs): Promise<void> {
  console.log(
    `\n🔑 Seeding ${args.count} download keys for product "${args.product}"`
  );
  console.log(
    `   Expiry: ${args.expiry} | Max uses: ${args.uses} | Remote: ${args.remote ? "YES" : "NO (local)"}\n`
  );

  const keys: string[] = [];
  const recordsToSeed: Array<{ key: string; record: DownloadKeyRecord }> = [];

  // Generate unique keys
  const seenKeys = new Set<string>();
  while (keys.length < args.count) {
    const key = generateRandomKey();
    if (!seenKeys.has(key)) {
      seenKeys.add(key);
      keys.push(key);
    }
  }

  // Create records for each key
  for (const key of keys) {
    const record: DownloadKeyRecord = {
      productId: args.product,
      isActive: true,
      expiresAt: args.expiry,
      maxUseCount: args.uses,
      useCount: 0,
      usageLogs: [],
    };
    recordsToSeed.push({ key, record });
  }

  // Put each key to KV
  let succeeded = 0;
  let failed = 0;
  const successfulKeys: string[] = [];

  for (const { key, record } of recordsToSeed) {
    const displayKey = formatKey(key);
    try {
      await putKeyRecord(key, record, args.remote);
      console.log(`✓ ${displayKey}`);
      succeeded++;
      successfulKeys.push(key);
    } catch (error) {
      console.error(
        `✗ ${displayKey} - ${error instanceof Error ? error.message : String(error)}`
      );
      failed++;
    }
  }

  console.log(
    `\n📊 Results: ${succeeded}/${args.count} keys seeded successfully`
  );
  if (failed > 0) {
    console.log(`⚠️  ${failed} keys failed`);
  }

  const outputPath = await writeGeneratedKeysFile(args, keys, successfulKeys);
  console.log(`🗂️  Keys exported: ${outputPath}`);

  if (succeeded > 0) {
    console.log(
      `\n💡 Tip: Use 'pnpm key:get <KEY>' to check a specific key's details`
    );
  }
}

// Run seeding
seedKeys(parseArgs()).catch((error) => {
  console.error("\n❌ Seeding failed:", error);
  process.exit(1);
});
