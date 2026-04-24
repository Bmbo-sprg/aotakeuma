/**
 * Get and display a download key's information
 * Usage: pnpm key:get <KEY> [--remote] [--format table|json]
 */

import { getKeyRecord } from "./kvClient";
import { formatKey } from "./generateKey";
import type { DownloadKeyRecord } from "../workers/download/types";

interface CliArgs {
  key: string;
  remote: boolean;
  format: "table" | "json";
}

function parseArgs(): CliArgs {
  const args = process.argv.slice(2);

  if (args.length === 0 || args[0].startsWith("--")) {
    throw new Error(
      "Usage: pnpm key:get <KEY> [--remote] [--format table|json]"
    );
  }

  const result: CliArgs = {
    key: args[0],
    remote: false,
    format: "table",
  };

  for (let i = 1; i < args.length; i++) {
    const arg = args[i];

    if (arg === "--remote") {
      result.remote = true;
    } else if (arg === "--format" && args[i + 1]) {
      const format = args[++i];
      if (format === "json" || format === "table") {
        result.format = format;
      }
    }
  }

  return result;
}

function formatDate(isoString: string): string {
  try {
    const date = new Date(isoString);
    // Format as YYYY-MM-DD HH:MM:SS UTC
    return date
      .toISOString()
      .replace("T", " ")
      .replace("Z", " UTC")
      .slice(0, -4);
  } catch {
    return isoString;
  }
}

function displayAsTable(key: string, record: DownloadKeyRecord): void {
  const formattedKey = formatKey(key);
  console.log(`\n📋 Download Key: ${formattedKey}`);
  console.log("───────────────────────────────────────");
  console.log(`  Product:      ${record.productId}`);
  console.log(`  Status:       ${record.isActive ? "✓ Active" : "✗ Inactive"}`);
  console.log(`  Expires:      ${formatDate(record.expiresAt)}`);
  console.log(
    `  Usage:        ${record.useCount}/${record.maxUseCount} (${record.maxUseCount - record.useCount} remaining)`
  );
  console.log(`  Logs:         ${record.usageLogs.length} entries`);

  if (record.usageLogs.length > 0) {
    console.log("\n  Recent activity:");
    const recentLogs = record.usageLogs.slice(-3);
    for (const log of recentLogs) {
      const status = log.success ? "✓" : "✗";
      const ip = log.ipAddress || "unknown";
      console.log(`    ${status} ${log.timestamp} (${ip})`);
    }
  }
  console.log();
}

function displayAsJson(key: string, record: DownloadKeyRecord): void {
  console.log(JSON.stringify({ key: formatKey(key), ...record }, null, 2));
}

async function getKey(args: CliArgs): Promise<void> {
  try {
    const record = await getKeyRecord(args.key, args.remote);

    if (!record) {
      console.error(
        `\n❌ Key not found: ${formatKey(args.key)} (${args.remote ? "remote" : "local"} KV)`
      );
      process.exit(1);
    }

    if (args.format === "json") {
      displayAsJson(args.key, record);
    } else {
      displayAsTable(args.key, record);
    }
  } catch (error) {
    console.error(
      "\n❌ Failed to retrieve key:",
      error instanceof Error ? error.message : String(error)
    );
    process.exit(1);
  }
}

// Run
getKey(parseArgs()).catch((error) => {
  console.error(error.message);
  process.exit(1);
});
