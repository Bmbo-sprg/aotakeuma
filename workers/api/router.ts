import { Hono } from "hono";
import { handleSignedDownload, handleValidateKey } from "../download/handlers";

const api = new Hono<{ Bindings: Env }>();

api.post("/validate-key", (c) => handleValidateKey(c.req.raw, c.env));
api.get("/download", (c) => handleSignedDownload(c.req.raw, c.env));

api.all("*", (c) => c.json({ error: "Not Found" }, 404));

export { api };
