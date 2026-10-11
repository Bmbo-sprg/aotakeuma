import { describe, expect, it } from "vitest";
import { works } from "./works";
import { events } from "./events";

const RESERVED_IDS = ["works", "events", "contact"];
const ID_PATTERN = /^[a-z0-9_]+$/;

describe("works と events の id", () => {
  it("命名規則 ^[a-z0-9_]+$ に従う", () => {
    const invalidIds = [...works, ...events]
      .map((item) => item.id)
      .filter((id) => !ID_PATTERN.test(id));
    expect(invalidIds).toEqual([]);
  });

  it("予約語（works, events, contact）と重複しない", () => {
    const reservedHits = [...works, ...events]
      .map((item) => item.id)
      .filter((id) => RESERVED_IDS.includes(id));
    expect(reservedHits).toEqual([]);
  });

  it("works と events の間で一意である", () => {
    const ids = [...works, ...events].map((item) => item.id);
    const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
    expect(duplicates).toEqual([]);
  });
});
