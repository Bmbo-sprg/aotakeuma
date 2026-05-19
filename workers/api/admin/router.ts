import { Hono } from "hono";
import { listKeys, getKey, createKeys, updateKey } from "./controllers/keys";
import { uploadContent } from "./controllers/upload";
import {
  initiateUpload,
  uploadPart,
  completeUpload,
  abortUpload,
} from "./controllers/multipartUpload";

const adminRouter = new Hono<{ Bindings: Env }>();

adminRouter.get("/keys", listKeys);
adminRouter.post("/keys", createKeys);
adminRouter.get("/keys/:key", getKey);
adminRouter.patch("/keys/:key", updateKey);
adminRouter.post("/upload", uploadContent);
adminRouter.post("/upload/initiate", initiateUpload);
adminRouter.put("/upload/part", uploadPart);
adminRouter.post("/upload/complete", completeUpload);
adminRouter.delete("/upload/abort", abortUpload);

export { adminRouter };
