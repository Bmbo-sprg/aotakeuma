import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { readFileSync } from "fs";
import { basename } from "path";

const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

if (!accountId || !accessKeyId || !secretAccessKey) {
  console.error(
    "Missing R2 credentials. Set CLOUDFLARE_ACCOUNT_ID, AWS_ACCESS_KEY_ID, and AWS_SECRET_ACCESS_KEY"
  );
  process.exit(1);
}

const filePath = process.argv[2];
const bucketName = process.argv[3] || "aotakeuma";
const objectKey = process.argv[4] || basename(filePath);

if (!filePath) {
  console.error("Usage: tsx uploadToR2.ts <filePath> [bucketName] [objectKey]");
  process.exit(1);
}

const client = new S3Client({
  region: "auto",
  endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

async function uploadFile() {
  try {
    const fileContent = readFileSync(filePath);
    console.log(`Uploading ${filePath} to R2...`);

    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: objectKey,
      Body: fileContent,
    });

    const response = await client.send(command);
    console.log(
      `✓ File uploaded successfully to s3://${bucketName}/${objectKey}`
    );
    console.log(`ETag: ${response.ETag}`);
  } catch (error) {
    console.error("Upload failed:", error);
    process.exit(1);
  }
}

uploadFile();
