import type { Work } from "~/types";
import { albums } from "./albums";
import { musics } from "./musics";
import { games } from "./games";

// how to add other works: just create under app/contents/works/ and import here
export const works: Work[] = [...albums, ...musics, ...games];
