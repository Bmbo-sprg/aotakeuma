# Download Key Management Scripts

CLI tools for managing Cloudflare KV download keys. Use these scripts to seed, retrieve, and update download keys for the secure download system.

## Quick Start

```bash
# Seed 10 test keys (default: yohkoh product)
pnpm seed:keys

# Check a key's status
pnpm key:get ABCD1234

# Update a key (deactivate, change uses, etc.)
pnpm key:set ABCD1234 --inactive
```

## Commands

### `pnpm seed:keys` — Generate and Insert Keys

Generate random download keys and populate Cloudflare KV.

Each run also exports generated keys (hyphen format) into a timestamped file under `scripts/generated-keys/`.

#### Usage

```bash
# Defaults: 10 keys, product=yohkoh, expiry=2027-03-29 23:59:59 JST, max uses=3
pnpm seed:keys

# Custom count
pnpm seed:keys --count 5

# Custom product
pnpm seed:keys --product another-product

# Custom expiry date (format: YYYY-MM-DD or YYYY-MM-DD HH:MM:SS, assumes JST)
pnpm seed:keys --expiry 2026-06-30
pnpm seed:keys --expiry "2026-06-30 18:00:00"

# Custom max uses per key
pnpm seed:keys --uses 10

# Combine options
pnpm seed:keys --count 3 --product test-product --uses 5 --expiry 2026-12-31

# Write to production KV (requires wrangler auth)
pnpm seed:keys --remote
```

#### Example Output

```
🔑 Seeding 10 download keys for product "yohkoh"
   Expiry: 2027-03-29T23:59:59Z | Max uses: 3 | Remote: NO (local)

✓ K3G7-W2SR
✓ 6VFE-UTQC
✓ F3D7-QUKT
✓ HYEK-55HQ
✓ 2AVV-AUCH
✓ 54U7-B5GM
✓ RX58-YY6C
✓ YG7M-2WCA
✓ 4AHM-ZSTR
✓ 353X-YM2H

📊 Results: 10/10 keys seeded successfully

💡 Tip: Use 'pnpm key:get <KEY>' to check a specific key's details
🗂️  Keys exported: scripts/generated-keys/keys-20260319-041500.txt
```

#### Generated Key File

- Output directory: `scripts/generated-keys/`
- File name format: `keys-YYYYMMDD-HHMMSS.txt`
- Keys in file are always hyphen formatted (e.g., `ABCD-1234`)

#### Flags

| Flag            | Default             | Description                                              |
| --------------- | ------------------- | -------------------------------------------------------- |
| `--count N`     | 10                  | Number of keys to generate                               |
| `--product ID`  | yohkoh              | Product ID for the keys                                  |
| `--expiry DATE` | 2027-03-29 23:59:59 | Expiration date (YYYY-MM-DD or YYYY-MM-DD HH:MM:SS, JST) |
| `--uses N`      | 3                   | Max downloads per key                                    |
| `--remote`      | false               | Write to production KV instead of local                  |

---

### `pnpm key:get` — Retrieve and Display Key Info

Fetch a key's details from KV and display in table or JSON format.

#### Usage

```bash
# Display in table format (default)
pnpm key:get ABCD1234

# Display as JSON
pnpm key:get ABCD1234 --format json

# Fetch from production KV
pnpm key:get ABCD1234 --remote

# Combine options
pnpm key:get ABCD1234 --format json --remote
```

#### Example Output (Table)

```
📋 Download Key: K3G7-W2SR
───────────────────────────────────────
  Product:      yohkoh
  Status:       ✓ Active
  Expires:      2027-03-29 23:59:59.000
  Usage:        0/3 (3 remaining)
  Logs:         0 entries
```

#### Example Output (JSON)

```json
{
  "key": "K3G7-W2SR",
  "productId": "yohkoh",
  "isActive": true,
  "expiresAt": "2027-03-29T23:59:59Z",
  "maxUseCount": 3,
  "useCount": 0,
  "usageLogs": []
}
```

#### Flags

| Flag            | Default | Description                               |
| --------------- | ------- | ----------------------------------------- |
| `--format TYPE` | table   | Output format: `table` or `json`          |
| `--remote`      | false   | Fetch from production KV instead of local |

#### Error Handling

```bash
$ pnpm key:get NONEXIST
❌ Key not found: NONE-XIST (local KV)
```

---

### `pnpm key:set` — Update Key Properties

Modify a key's status, max uses, or expiration date.

#### Usage

```bash
# Deactivate a key (mark as inactive)
pnpm key:set ABCD1234 --inactive

# Reactivate a previously inactive key
pnpm key:set ABCD1234 --active

# Change maximum uses
pnpm key:set ABCD1234 --max-uses 5

# Update expiration date
pnpm key:set ABCD1234 --expiry 2026-12-31

# Multiple changes at once
pnpm key:set ABCD1234 --inactive --max-uses 1

# Update in production KV
pnpm key:set ABCD1234 --inactive --remote
```

#### Example Output

```
📝 Updating: K3G7-W2SR
───────────────────────────────────────
  Status:       ✓ Active → ✗ Inactive

✓ Successfully updated K3G7-W2SR
```

#### Flags

| Flag            | Description                                                      |
| --------------- | ---------------------------------------------------------------- |
| `--active`      | Activate the key (mark as available)                             |
| `--inactive`    | Deactivate the key (block downloads)                             |
| `--max-uses N`  | Set new maximum use count                                        |
| `--expiry DATE` | Set new expiration date (YYYY-MM-DD or YYYY-MM-DD HH:MM:SS, JST) |
| `--remote`      | Update production KV instead of local                            |

#### Error Handling

```bash
$ pnpm key:set ABCD1234
⚠️ No changes specified. Use --active, --inactive, --max-uses, or --expiry

$ pnpm key:set NONEXIST --inactive
❌ Key not found: NONE-XIST
```

---

## Common Workflows

### 1. Create Test Keys for Local Development

```bash
# Seed 5 keys for yohkoh with long expiry
pnpm seed:keys --count 5

# One key will be used to test successful download flow
# Keep others for testing edge cases
```

### 2. Test Edge Cases

```bash
# Create an expired key (use current date or past date)
pnpm seed:keys --count 1 --expiry 2020-01-01

# Create a limited-use key (1 use only)
pnpm seed:keys --count 1 --uses 1

# Create an initially inactive key
pnpm seed:keys --count 1
pnpm key:set [KEY] --inactive

# Create a key for another product
pnpm seed:keys --count 1 --product other-product
```

### 3. Monitor Key Status During Testing

```bash
# Check usage after downloading
pnpm key:get ABC-D1234

# Check usage count
pnpm key:get ABC-D1234 | grep Usage
```

### 4. Deactivate Compromised Keys

```bash
# Quick deactivation
pnpm key:set COMPROMISED-KEY --inactive

# Verify it's deactivated
pnpm key:get COMPROMISED-KEY
```

### 5. Extend Key Expiry Before Cutoff

```bash
# Give more time before expiry
pnpm key:set ABOUT-TO-EXPIRE --expiry 2027-12-31
```

### 6. Bulk Create for Multi-Product Setup

```bash
# Seed keys for each product
pnpm seed:keys --count 10 --product product-a
pnpm seed:keys --count 10 --product product-b
pnpm seed:keys --count 5 --product product-c

# List all keys with a prefix check (via wrangler directly)
# npx wrangler kv key list --binding=aotakeuma_keys --prefix="downloadKey:"
```

### 7. Export Key Info for Auditing

```bash
# Get JSON output for all keys (one at a time, or use shell loop)
pnpm key:get ABC-D1234 --format json > key-data.json

# For multiple keys, use a shell loop:
# for key in KEY1 KEY2 KEY3; do pnpm key:get "$key" --format json >> keys-export.jsonl; done
```

---

## Key Format

Keys are generated in the following format:

- **Internal storage**: 8 alphanumeric characters (e.g., `K3G7W2SR`)
- **Display format**: XXXX-XXXX with hyphen (e.g., `K3G7-W2SR`)
- **Alphabet**: 31 characters (A-Z excluding O, I, L + digits 0-9 excluding 0, 1)
  - Ambiguous characters excluded to avoid user confusion

Normalization happens automatically:

- Input `k3g7-w2sr` → stored as `K3G7W2SR` → displayed as `K3G7-W2SR`
- Input `k3g7w2sr` → stored as `K3G7W2SR` → displayed as `K3G7-W2SR`

---

## Date/Time Handling

### Expiry Date Format

Scripts accept dates in two formats:

1. **Date only** (defaults to 23:59:59):

   ```bash
   pnpm seed:keys --expiry 2027-03-29
   ```

2. **Date and time** (explicit time):
   ```bash
   pnpm seed:keys --expiry "2027-03-29 18:30:00"
   ```

### Timezone

All dates are **assumed to be in JST (Tokyo, UTC+9)** and automatically converted to UTC for storage.

**Example:**

```bash
pnpm seed:keys --expiry "2027-03-29 23:59:59"
# Stored as: 2027-03-29T14:59:59Z (UTC, which is 23:59:59 JST)
```

---

## Local vs. Remote KV

### Local Development (default)

```bash
pnpm seed:keys              # Uses local .wrangler/ simulation
pnpm key:get ABC-D1234      # Reads from local KV
pnpm key:set ABC-D1234 --inactive  # Updates local KV
```

- Data is isolated from production
- Persists in `.wrangler/state/`
- Perfect for testing

### Production KV

```bash
pnpm seed:keys --remote      # Requires wrangler auth
pnpm key:get ABC-D1234 --remote
pnpm key:set ABC-D1234 --inactive --remote
```

⚠️ **Requirements:**

- Must be authenticated: `wrangler login`
- Binding must be configured in `wrangler.jsonc`
- Changes affect live production keys (use with caution!)

---

## Troubleshooting

### Command Not Found

```
command not found: tsx
```

**Solution:** Install tsx package

```bash
pnpm i -D tsx
```

### Wrangler KV Command Failed

```
Wrangler KV command failed: Error: Could not fetch your token
```

**Solution:** Authenticate with Cloudflare

```bash
wrangler login
```

### Key Not Found

```
❌ Key not found: ABC-D1234 (local KV)
```

**Solution:**

- Verify the key exists: `pnpm seed:keys` to create test keys
- Check you're using the right format (script auto-normalizes, but worth verifying)
- If using `--remote`, ensure you have the right KV namespace binding in `wrangler.jsonc`

### Date Parse Error

```
Invalid date format
```

**Solution:** Use the correct format

✅ Good:

```bash
pnpm seed:keys --expiry 2027-03-29
pnpm seed:keys --expiry "2027-03-29 23:59:59"
```

❌ Bad:

```bash
pnpm seed:keys --expiry 03/29/2027
pnpm seed:keys --expiry 2027-03-29T23:59:59Z
```

---

## Tips & Tricks

### 1. Use Tab Completion with Key Part

Since keys are formatted as XXXX-XXXX, use the first 4-8 characters:

```bash
pnpm key:get K3G7W2SR    # Full key (hyphen ignored)
pnpm key:get K3G7-W2SR   # Also works
pnpm key:get K3G7        # First few chars
```

### 2. Create a Cheat Sheet Locally

```bash
# Copy this to your shell profile or .env
alias seed-keys="pnpm seed:keys"
alias get-key="pnpm key:get"
alias set-key="pnpm key:set"
```

Then use: `seed-keys --count 3`

### 3. Inspect Recent Changes

```bash
# After updating, verify immediately
pnpm key:set ABC-D1234 --inactive
pnpm key:get ABC-D1234  # Shows the updated status
```

### 4. Batch Create for Testing

```bash
# Create different key types for comprehensive testing
pnpm seed:keys --count 1 --uses 1 --expiry "2027-03-29 23:59:59"    # Limited use + far expiry
pnpm seed:keys --count 1 --uses 100 --expiry 2020-01-01              # Unlimited tries, already expired
pnpm seed:keys --count 1 --uses 3 --product other-product            # Wrong product
```

---

## Integration with Development

### Seeding Before Local Testing

```bash
# 1. Clean start (optional)
rm -rf .wrangler/state/

# 2. Start dev server
pnpm dev &

# 3. In another terminal, seed keys
pnpm seed:keys --count 5

# 4. Test the download form with generated keys
# Open http://localhost:3000/download/yohkoh
# Paste a key like K3G7-W2SR
```

### CI/CD Integration

```bash
# In your deployment script:
pnpm seed:keys --remote --count 10 --product yohkoh
# Verify seeding in logs
```

---

## Related Files

- **Backend validation**: [workers/download/handlers.ts](../workers/download/handlers.ts)
- **Key record types**: [workers/download/types.ts](../workers/download/types.ts)
- **KV storage utilities**: [workers/download/store.ts](../workers/download/store.ts)
- **Frontend form**: [app/routes/yohkoh.tsx](../app/routes/yohkoh.tsx)
- **KV configuration**: [wrangler.jsonc](../wrangler.jsonc)
