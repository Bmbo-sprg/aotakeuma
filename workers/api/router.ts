import { Hono } from "hono";
import { validateKey } from "./controllers/validateKey";
import { signedDownload } from "./controllers/signedDownload";

const api = new Hono<{ Bindings: Env }>().basePath("/api");

api.post("/validate-key", validateKey);
api.get("/download", signedDownload);

api.all("*", (c) => c.json({ error: "Not Found" }, 404));

export { api };
