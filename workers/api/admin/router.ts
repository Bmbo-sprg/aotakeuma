import { Hono } from "hono";
import { listKeys, getKey, createKeys, updateKey } from "./controllers/keys";
import { uploadContent } from "./controllers/upload";

const adminRouter = new Hono<{ Bindings: Env }>();

adminRouter.get("/keys", listKeys);
adminRouter.post("/keys", createKeys);
adminRouter.get("/keys/:key", getKey);
adminRouter.patch("/keys/:key", updateKey);
adminRouter.post("/upload", uploadContent);

export { adminRouter };
