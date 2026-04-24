/**
 * Update a download key's properties
 * Usage: pnpm key:set <KEY> [--active|--inactive] [--max-uses N] [--expiry DATE] [--remote]
 */

import { getKeyRecord, putKeyRecord } from "./kvClient";
import { formatKey } from "./generateKey";

interface CliArgs {
  key: string;
  active?: boolean; // true/false/undefined (no change)
  maxUses?: number;
  expiry?: string;
  remote: boolean;
}

function parseArgs(): CliArgs {
  const args = process.argv.slice(2);

  if (args.length === 0 || args[0].startsWith("--")) {
    throw new Error(
      "Usage: pnpm key:set <KEY> [--active|--inactive] [--max-uses N] [--expiry DATE] [--remote]"
    );
  }

  const result: CliArgs = {
    key: args[0],
    remote: false,
  };

  for (let i = 1; i < args.length; i++) {
    const arg = args[i];

    if (arg === "--active") {
      result.active = true;
    } else if (arg === "--inactive") {
      result.active = false;
    } else if (arg === "--max-uses" && args[i + 1]) {
      result.maxUses = parseInt(args[++i], 10);
    } else if (arg === "--expiry" && args[i + 1]) {
      let expiryStr = args[++i];
      // If next arg doesn't start with --, it's the time part
      if (i + 1 < args.length && !args[i + 1].startsWith("--")) {
        expiryStr += ` ${args[++i]}`;
      }
      result.expiry = parseExpiryDate(expiryStr);
    } else if (arg === "--remote") {
      result.remote = true;
    }
  }

  return result;
}

function parseExpiryDate(dateStr: string): string {
  const parts = dateStr.trim().split(" ");
  const datePart = parts[0];
  const timePart = parts[1] || "23:59:59";

  const [year, month, day] = datePart.split("-").map(Number);
  const [hour, min, sec] = timePart.split(":").map(Number);

  // Convert JST to UTC (JST is UTC+9)
  const date = new Date(Date.UTC(year, month - 1, day, hour - 9, min, sec));

  return date.toISOString();
}

function formatDate(isoString: string): string {
  try {
    const date = new Date(isoString);
    return date
      .toISOString()
      .replace("T", " ")
      .replace("Z", " UTC")
      .slice(0, -4);
  } catch {
    return isoString;
  }
}

async function setKey(args: CliArgs): Promise<void> {
  const displayKey = formatKey(args.key);

  try {
    // Check if there are any changes requested
    if (
      args.active === undefined &&
      args.maxUses === undefined &&
      args.expiry === undefined
    ) {
      console.log(
        `\n⚠️  No changes specified. Use --active, --inactive, --max-uses, or --expiry`
      );
      process.exit(1);
    }

    // Fetch current record
    const record = await getKeyRecord(args.key, args.remote);
    if (!record) {
      console.error(`\n❌ Key not found: ${displayKey}`);
      process.exit(1);
    }

    // Show current state
    console.log(`\n📝 Updating: ${displayKey}`);
    console.log("───────────────────────────────────────");

    const before = { ...record };

    // Apply changes
    if (args.active !== undefined) {
      record.isActive = args.active;
      console.log(
        `  Status:       ${before.isActive ? "✓ Active" : "✗ Inactive"} → ${args.active ? "✓ Active" : "✗ Inactive"}`
      );
    }

    if (args.maxUses !== undefined) {
      console.log(`  Max uses:     ${before.maxUseCount} → ${args.maxUses}`);
      record.maxUseCount = args.maxUses;
    }

    if (args.expiry !== undefined) {
      console.log(
        `  Expires:      ${formatDate(before.expiresAt)} → ${formatDate(args.expiry)}`
      );
      record.expiresAt = args.expiry;
    }

    // Put updated record back
    await putKeyRecord(args.key, record, args.remote);
    console.log(`\n✓ Successfully updated ${displayKey}\n`);
  } catch (error) {
    console.error(
      "\n❌ Failed to update key:",
      error instanceof Error ? error.message : String(error)
    );
    process.exit(1);
  }
}

// Run
setKey(parseArgs()).catch((error) => {
  console.error(error.message);
  process.exit(1);
});
