import type { Event } from "~/types";
import { performances } from "./performances";
import { exhibitions } from "./exhibitions";

// how to add other events: just create under app/contents/events/ and import here
export const events: Event[] = [...performances, ...exhibitions];
